// msm-worker.js

const removeAccents = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const clean = n => n ? n.trim() : "";
const ignores = ["any", "invalid", "no combination", "unknown", "exclusive"];

let msmRegistry = [], dofRegistry = [];
let msmCombos = [], dofCombos = [], dofCombosData = {};

self.onmessage = async (e) => {
    const { action, data } = e.data;

    // -----------------------------------------------------
    // 1. INITIALIZE & BUILD REGISTRIES OFF-THREAD
    // -----------------------------------------------------
    if (action === 'INIT') {
        const { currentHash } = data;
        let indexPath, combosPath, dofIndexPath, dofCombosPath;
        
        if (currentHash === 'local-testing') {
            indexPath = `../MSM-API/MSM/data/monster_index.json?v=${Date.now()}`;
            combosPath = `../MSM-API/MSM/data/breedingCombos.json?v=${Date.now()}`;
            dofIndexPath = `../MSM-API/MSM-DOF/data/dof_monster_index.json?v=${Date.now()}`;
            dofCombosPath = `../MSM-API/MSM-DOF/data/dofBreedingCombos.json?v=${Date.now()}`;
        } else {
            indexPath = `https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@${currentHash}/MSM/data/monster_index.json`;
            combosPath = `https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@${currentHash}/MSM/data/breedingCombos.json`;
            dofIndexPath = `https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@${currentHash}/MSM-DOF/data/dof_monster_index.json`;
            dofCombosPath = `https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@${currentHash}/MSM-DOF/data/dofBreedingCombos.json`;
            if (currentHash === 'main') {
                indexPath += `?v=${Date.now()}`; combosPath += `?v=${Date.now()}`;
                dofIndexPath += `?v=${Date.now()}`; dofCombosPath += `?v=${Date.now()}`;
            }
        }

        // Parallel fetch all 4 heavy JSONs so they don't block each other
        const [indexRes, comboRes, dofIndexRes, dofComboRes] = await Promise.all([
            fetch(indexPath, { credentials: 'omit' }).catch(() => null),
            fetch(combosPath, { credentials: 'omit' }).catch(() => null),
            fetch(dofIndexPath, { credentials: 'omit' }).catch(() => null),
            fetch(dofCombosPath, { credentials: 'omit' }).catch(() => null)
        ]);

        if (indexRes?.ok) {
            const names = await indexRes.json();
            const unique = new Set(names.map(clean));
            msmRegistry = [...unique]
                .filter(n => n && !ignores.some(i => n.toLowerCase().includes(i)))
                .map(n => ({ raw: n, searchKey: removeAccents(n.toLowerCase()) }))
                .sort((a, b) => a.raw.localeCompare(b.raw));
        }

        if (comboRes?.ok) {
            const data = await comboRes.json();
            msmCombos = Object.keys(data).filter(k => k.includes("+"));
        }

        if (dofIndexRes?.ok) {
            const names = await dofIndexRes.json();
            const unique = new Set(names.map(clean));
            dofRegistry = [...unique]
                .filter(n => n && !ignores.some(i => n.toLowerCase().includes(i)))
                .map(n => ({ raw: n, searchKey: removeAccents(n.toLowerCase()) }))
                .sort((a, b) => a.raw.localeCompare(b.raw));
        } else {
            dofRegistry = ["Kayna", "Mammott", "Potbelly", "Tweedle", "Noggin", "Toe Jammer"]
                .map(n => ({ raw: n, searchKey: removeAccents(n.toLowerCase()) }));
        }

        if (dofComboRes?.ok) {
            dofCombosData = await dofComboRes.json();
            dofCombos = Object.keys(dofCombosData).filter(k => k.includes("+"));
        } else {
            dofCombos = ["Kayna + Mammott", "Potbelly + Noggin"];
        }

        // Send the finished objects back to the main thread for synchronous lookups
        self.postMessage({
            action: 'READY',
            payload: { msmRegistry, dofRegistry, msmCombos, dofCombos, dofCombosData }
        });
    }

    // -----------------------------------------------------
    // 2. PROCESS SEARCH QUERIES OFF-THREAD
    // -----------------------------------------------------
    if (action === 'SEARCH') {
        const { q, inputContext, isDof, incRarity, v1, msgId } = data;
        let mObj = isDof ? dofRegistry : msmRegistry;
        const activeCombos = isDof ? dofCombos : msmCombos;

        if (inputContext === 'first') {
            const vp = new Set(activeCombos.flatMap(c => c.split('+').map(p => removeAccents(p.trim().toLowerCase()))));
            mObj = mObj.filter(obj => vp.has(obj.searchKey));
        } else if (inputContext === 'second') {
            if (v1) {
                mObj = mObj.filter(obj => activeCombos.some(c => {
                    const p = c.split('+').map(x => removeAccents(x.trim().toLowerCase()));
                    return (p[0] === v1 && p[1] === obj.searchKey) || (p[1] === v1 && p[0] === obj.searchKey);
                }));
            }
        } else {
            mObj = mObj.filter(obj => incRarity || (!obj.searchKey.startsWith("rare ") && !obj.searchKey.startsWith("epic ")));
        }

        if (q) {
            mObj = mObj.filter(obj => obj.searchKey.includes(q));
        }

        // We only return the top 12 matches as standard strings to minimize data serialization
        const matches = mObj.map(obj => obj.raw).slice(0, 12);
        self.postMessage({ action: 'SEARCH_RESULTS', msgId, matches });
    }
};