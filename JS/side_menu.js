let allIslandsCached = [], currentIslandIndex = 0, activeSearchQuery = "", MASTER_STATUE_LIST = [], isInventoryShellBuilt = false, isCostShellBuilt = false, menuOpen = 0;
const ISLANDS_PER_PAGE = 5, ISLAND_ORDER = ["plant", "cold", "air", "water", "earth", "haven", "gold"];

const islandColors = {
    plant: "#a3d9a5", cold: "#88c0d0", air: "#ebcb8b", water: "#81a1c1", earth: "#d08770", gold: "#fcd34d", tribal: "#ff7a59", haven: "#e57373", oasis: "#f4a261", "fire oasis": "#f4a261",
    psychic: "#b983ff", faerie: "#ff94cc", bone: "#e8e5da", light: "#fff59d", shugabush: "#8d6e63", ethereal: "#4ca6ff", sanctum: "#5e35b1", mythical: "#00acc1",
    workshop: "#00f5d4", wublin: "#7b2cbf", celestial: "#ffb703", nexus: "#06d6a0", colossingum: "#94a3b8", composer: "#a78bfa", seasonal: "#ff6b6b", paironormal: "#3d5a80", plasma: "#ff007f", shadow: "#374151", mech: "#4b5563",
    "mirror plant": "#709a72", "mirror cold": "#5f8a96", "mirror air": "#b59859", "mirror water": "#54728c", "mirror earth": "#945c49", "mirror light": "#ccc262", "mirror psychic": "#8554c7", "mirror faerie": "#c95ca0", "mirror bone": "#b0ad9e", "mirror paironormal": "#213654", default: "#b48ead" 
};

const toTitleCase = str => { const l = str.toLowerCase().trim(); return l === "haven" || l === "fire haven" ? "Fire Haven" : l === "oasis" || l === "fire oasis" ? "Fire Oasis" : str.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()); };

function sortMonstersCustom(arr, pIsland) {
    return arr.sort((a, b) => {
        const hA = a.collectedOn.map(i => i.toLowerCase()), hB = b.collectedOn.map(i => i.toLowerCase());
        if (pIsland) { const p = pIsland.toLowerCase(); if (hA.includes(p) && !hB.includes(p)) return -1; if (!hA.includes(p) && hB.includes(p)) return 1; }
        const iA = ISLAND_ORDER.findIndex(i => hA.includes(i)), iB = ISLAND_ORDER.findIndex(i => hB.includes(i));
        if (iA !== iB) return (iA === -1 ? 999 : iA) - (iB === -1 ? 999 : iB);
        const w = n => n.toLowerCase().startsWith("epic ") ? 3 : n.toLowerCase().startsWith("rare ") ? 2 : 1;
        if (w(a.name) !== w(b.name)) return w(a.name) - w(b.name);
        return a.name.localeCompare(b.name);
    });
}

function setupSideMenu() {
    const ar = $('menuArrow'), ib = $('sideMenuButton'), ic = $('island-container');
    if (!menuOpen) {
        $('title').innerHTML = `My Singing Monsters <br> Stats Finder`; document.body.style.backgroundImage = 'url("CSS/images/backgrounds/SideMenu.jpg")';
        ib.style.backgroundColor = "var(--pure-purple)"; $('monster-spotlight').style.display = $('inputContainer').style.display = 'none';
        ic.classList.remove('slide-to-right'); ic.classList.add('slide-from-right');
        ib.classList.add("menu-open"); ar.classList.replace("fa-arrow-left", "fa-arrow-right"); $('iconContainer').style.display = 'none';
        menuOpen = 1;
    } else {
        $('title').innerHTML = `My Singing Monsters <br> Combo Finder`; document.body.style.backgroundImage = 'url("CSS/images/backgrounds/NoEventShellbeat.jpg")';
        ib.style.backgroundColor = "var(--pink-glass-hover)";
        ic.classList.remove('slide-from-right'); ic.classList.add('slide-to-right');
        ib.classList.remove("menu-open"); ar.classList.replace("fa-arrow-right", "fa-arrow-left"); $('iconContainer').style.display = 'flex';
        menuOpen = 0; setTimeout(() => { if (!menuOpen) { ic.classList.remove('slide-to-right'); reset(); } }, 500);
    }
}

async function setupImages() {
    try {
        const [iImg, eImg] = await Promise.all([MSM.getIslandImg('plant'), MSM["Epic Brump"]?.getImageURL()]);
        if (iImg?.[0]) $('island-img').style.backgroundImage = `url(${iImg[0]})`;
        if (eImg) $('inventory-img').style.backgroundImage = `url(${eImg})`;
    } catch {} finally { $('cost-img').style.backgroundImage = `url("images/important/Vault-Of-Diamonds.jpg")`; }
}

function renderTrackerGrid(islands, monsters) {
    const s = $('stats'); if (!s) return; s.style.setProperty('--island-count', islands.length);
    s.innerHTML = `<div class="tracker-row header-row"><div class="tracker-corner">Island Names:</div>${islands.map(i => `<div class="tracker-island-header" style="background-color: ${i.color}; display: flex; justify-content: center; align-items: center;"><span class="island-title">${(!i.name.includes("Fire") && !i.name.includes("Island")) ? `${i.name}<br>Island` : i.name}</span></div>`).join('')}</div>` + 
    monsters.map(m => `<div class="tracker-row"><div class="tracker-monster-col"><div class="monster-icon-wrapper"><img id="tracker-img-${m.name.toLowerCase().replace(/[^a-z0-9]/g, '')}" src="${m.img}" alt="${m.name}"></div><span>${m.name}</span></div>${islands.map(i => `<div class="tracker-cell" style="background-color: ${i.color};"><div class="availability-badge ${m.collectedOn.includes(i.name) ? 'available"><i class="fas fa-check"></i>' : 'unavailable"><i class="fas fa-minus"></i>'}</div></div>`).join('')}</div>`).join('');
}

async function initDynamicTracker() {
    try {
        if (!allIslandsCached.length) {
            const r = await MSM.fetchIslands();
            allIslandsCached = [...r.filter(n => ISLAND_ORDER.includes(n.toLowerCase())).sort((a,b)=>ISLAND_ORDER.indexOf(a.toLowerCase())-ISLAND_ORDER.indexOf(b.toLowerCase())), ...r.filter(n => !ISLAND_ORDER.includes(n.toLowerCase()))].map(n => ({ id: n, name: toTitleCase(n), color: islandColors[n.toLowerCase()] || islandColors.default }));
        }
        setupPaginationControls(); await renderActiveGridSlice();
    } catch (e) { console.error("Error setting up bulk tracker grid:", e); }
}

let isRenderingGrid = false;
function setupPaginationControls() {
    const hook = (id, evt, fn) => { const el = $(id); if(el && !el.dataset.hooked) { el.dataset.hooked = "true"; el.addEventListener(evt, fn); }};
    hook('tracker-mini-search', 'input', e => { activeSearchQuery = e.target.value.toLowerCase().trim(); renderActiveGridSlice(); });
    hook('previous-island', 'click', async () => { if (currentIslandIndex > 0 && !isRenderingGrid) { isRenderingGrid = true; $('previous-island').style.opacity = "0.3"; currentIslandIndex = Math.max(0, currentIslandIndex - ISLANDS_PER_PAGE); await renderActiveGridSlice(); isRenderingGrid = false; }});
    hook('next-island', 'click', async () => { if (currentIslandIndex + ISLANDS_PER_PAGE < allIslandsCached.length && !isRenderingGrid) { isRenderingGrid = true; $('next-island').style.opacity = "0.3"; currentIslandIndex += ISLANDS_PER_PAGE; await renderActiveGridSlice(); isRenderingGrid = false; }});
}

async function renderActiveGridSlice() {
    const tm = monsterRegistry?.length ? monsterRegistry : ["Potbelly", "Noggin", "Toe Jammer", "Mammott"];
    const fm = tm.filter(n => !activeSearchQuery || n.toLowerCase().includes(activeSearchQuery));
    let pool = [...allIslandsCached];

    if (activeSearchQuery && fm.length) {
        const ids = new Set();
        (await Promise.all(fm.map(n => MSM.get(n).catch(()=>null)))).forEach(m => m?.islands?.forEach(i => ids.add(i.toLowerCase())));
        const sm = allIslandsCached.filter(i => ids.has(i.id.toLowerCase()));
        if (sm.length) { pool = sm; if (currentIslandIndex >= pool.length) currentIslandIndex = 0; }
    }

    const vi = pool.slice(currentIslandIndex, currentIslandIndex + ISLANDS_PER_PAGE), fmtM = [];
    (await Promise.all(fm.map(n => MSM.get(n).catch(()=>null)))).forEach((m, idx) => {
        if (m?.islands) {
            const fi = m.islands.filter(i => { const lI = i.toLowerCase(), lM = fm[idx].toLowerCase(); return !(lM.startsWith("rare ") || lM.startsWith("epic ")) || (lI !== "tribal" && lI !== "colossingum"); });
            if (vi.some(i => fi.some(x => x.toLowerCase() === i.id.toLowerCase()))) fmtM.push({ name: fm[idx], img: "images/important/mammoticon.png", collectedOn: fi.map(toTitleCase) });
        }
    });

    const cm = sortMonstersCustom(fmtM, vi[0]?.id); renderTrackerGrid(vi, cm);
    cm.forEach(async m => { try { const md = await MSM.get(m.name); md?.loadImage?.(`tracker-img-${m.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`); } catch {} });
    if ($('previous-island')) $('previous-island').style.opacity = currentIslandIndex === 0 ? "0.3" : "1";
    if ($('next-island')) $('next-island').style.opacity = currentIslandIndex + ISLANDS_PER_PAGE >= pool.length ? "0.3" : "1";
}

const toggleMenuLayer = (activeSec) => {
    ['statsSection', 'inventorySection', 'costSection'].forEach(s => { if($(s)) $(s).style.display = s === activeSec ? 'block' : 'none'; });
    $('island-container')?.classList.remove('slide-from-right');
    if($('mainStatBox')) $('mainStatBox').style.display = 'flex';
    if($('title')) $('title').style.display = 'none';
    if($('sideMenuButton')) $('sideMenuButton').style.display = 'none';
    if($('blurOverlay')) { $('blurOverlay').style.display = 'block'; requestAnimationFrame(() => $('blurOverlay').classList.add('active')); }
    isSideMenuOpen = 1;
};

function loadStatBox() { toggleMenuLayer('statsSection'); initDynamicTracker(); }
function hideStatBox() {
    $('blurOverlay')?.classList.remove('active'); setTimeout(()=> { if($('blurOverlay')) $('blurOverlay').style.display = 'none'; }, 500);
    $('island-container')?.classList.add('slide-from-right');
    if($('mainStatBox')) $('mainStatBox').style.display = 'none';
    if($('title')) $('title').style.display = 'block';
    if($('sideMenuButton')) $('sideMenuButton').style.display = 'flex';
}

async function renderInventoryGridItems(list) {
    const c = $('inventoryStatsBox'); if (!c) return;
    const stats = await Promise.all(list.map(n => MSM.get(n).catch(()=>null)));
    const uEggs = new Set(); stats.forEach(s => s?.inventory && Object.keys(s.inventory).forEach(e => uEggs.add(e)));
    const eggs = await Promise.all([...uEggs].map(e => MSM.get(e).catch(()=>null)));

    c.innerHTML = `<div class="inventory-row inventory-header"><div class="inventory-corner-title">Statue Name:</div><div class="inventory-main-stretch-title">Inventory Requirements</div></div>` +
        stats.map((s, i) => {
            const n = list[i], sn = n.toLowerCase().replace(/[^a-z0-9]/g, '');
            const invHtml = s?.inventory && Object.keys(s.inventory).length ? Object.entries(s.inventory).map(([e, cnt]) => {
                let url = e.toLowerCase() === "flex" ? "images/important/Flex-egg.jpg" : (eggs.find(x => x?.name?.toLowerCase() === e.toLowerCase())?.eggUrl || MSM[e]?.eggUrl || MSM[toTitleCase(e)]?.eggUrl || "images/important/mammoticon.png");
                return `<div class="inventory-egg-chip"><span class="inventory-egg-badge">x${cnt}</span><img src="${url}" alt="${e}" class="inventory-egg-sprite-render"><span class="inventory-egg-label-text">${e}</span></div>`;
            }).join('') : `<span style="color:rgba(255,255,255,0.4);font-style:italic;width:100%;text-align:center;margin-top:15px;">Data syncing...</span>`;
            return `<div class="inventory-row"><div class="inventory-statue-sidebar"><div class="monster-icon-wrapper"><img id="inventory-statue-img-${sn}" src="images/important/mammoticon.png" alt="${n}"></div><span>${n}</span></div><div class="inventory-items-container-box">${invHtml}</div></div>`;
        }).join('');
    stats.forEach((s, i) => (s || MSM[list[i]])?.loadImage?.(`inventory-statue-img-${list[i].toLowerCase().replace(/[^a-z0-9]/g, '')}`));
}

async function loadInventoryBox() {
    toggleMenuLayer('inventorySection');
    if (!isInventoryShellBuilt) {
        $('inventorySection').innerHTML = `<div class="tracker-controls"><input type="text" id="inventory-mini-search" placeholder="🔍 Filter statues..." autocomplete="off"><button id="closeInventoryMenu" title="Close" onclick="hideStatBox()"><i class="fas fa-times"></i></button></div><div id="inventoryStatsBox"><div style="color:rgba(255,255,255,0.7);font-size:18px;font-weight:bold;width:100%;text-align:center;margin-top:10vh;"><i class="fas fa-circle-notch fa-spin"></i> Scanning Registry...</div></div>`;
        $('inventory-mini-search').addEventListener('input', e => renderInventoryGridItems(MASTER_STATUE_LIST.filter(n => n.toLowerCase().includes(e.target.value.toLowerCase().trim()))));
        isInventoryShellBuilt = true;
    } else { $('inventory-mini-search').value = ''; $('inventoryStatsBox').innerHTML = `<div style="color:rgba(255,255,255,0.7);font-size:18px;font-weight:bold;width:100%;text-align:center;margin-top:10vh;"><i class="fas fa-circle-notch fa-spin"></i> Loading Statues...</div>`; }

    if (!MASTER_STATUE_LIST.length) {
        const am = monsterRegistry?.length ? monsterRegistry : ["Brump", "Zynth", "Poewk", "Thwok", "Adult Attmoz"];
        (await Promise.all(am.map(n => MSM.get(n).catch(()=>null)))).forEach((m, i) => { if (m?.inventory && Object.keys(m.inventory).length) MASTER_STATUE_LIST.push(am[i]); });
        MASTER_STATUE_LIST = MASTER_STATUE_LIST.length ? MASTER_STATUE_LIST.sort((a,b)=>a.localeCompare(b)) : ["Brump", "Zynth"];
    }
    renderInventoryGridItems(MASTER_STATUE_LIST);
}

function hideInventoryBox() { hideStatBox(); } setTimeout(setupImages, 1000);

function loadCostBox() {
    toggleMenuLayer('costSection');
    if (!isCostShellBuilt) {
        $('costSection').innerHTML = `<div class="tracker-controls"><input type="text" id="cost-mini-search" placeholder="🔍 Find monster costs..." autocomplete="off"><button id="closeInventoryMenu" title="Close" onclick="hideStatBox()"><i class="fas fa-times"></i></button></div><div id="costStatsBox"></div>`;
        $('cost-mini-search').addEventListener('input', e => { const q = e.target.value.toLowerCase().trim(); renderCostGridItems(q ? (monsterRegistry?.length ? monsterRegistry : ["Mammott"]).filter(n => n.toLowerCase().includes(q)) : []); });
        isCostShellBuilt = true;
    } else $('cost-mini-search').value = '';
    renderCostGridItems([]);
}

async function renderCostGridItems(list) {
    const c = $('costStatsBox'); if (!c) return;
    if (!list?.length) return c.innerHTML = `<div class="empty-search-prompt"><i class="fas fa-search-dollar"></i><h3>Cost Database</h3><p>Type a monster name above to reveal its pricing!</p></div>`;
    
    const ms = await Promise.all(list.map(n => MSM.get(n).catch(()=>null))), kSet = new Set();
    ms.forEach(m => m?.costs && Object.keys(m.costs).forEach(k => { if(k !== 'name') kSet.add(k); }));
    const keys = [...kSet].sort(); c.style.setProperty('--cost-column-count', keys.length);

    c.innerHTML = `<div class="cost-row cost-header-row"><div class="cost-corner-title">Monster Name</div>${keys.map(k => `<div class="cost-main-column-title">${toTitleCase(k.replace(/_cost$/i, '').replace(/_/g, ' '))}</div>`).join('')}</div>` +
        ms.map((m, i) => {
            if (!m?.costs) return '';
            return `<div class="cost-row"><div class="cost-sidebar"><div class="monster-icon-wrapper"><img id="cost-statue-img-${list[i].toLowerCase().replace(/[^a-z0-9]/g, '')}" src="images/important/mammoticon.png" alt="${list[i]}"></div><span>${list[i]}</span></div>` +
            keys.map(k => {
                const v = m.costs[k]; if (!v) return `<div class="cost-cell empty-cost-value"><i class="fas fa-minus"></i></div>`;
                const ic = k.includes('diamond') ? 'fa-gem" style="color:#00f5d4;"' : k.includes('ethereal') || k.includes('shard') ? 'fa-meteor" style="color:#b983ff;"' : k.includes('starpower') ? 'fa-star" style="color:#f59e0b;"' : k.includes('relic') ? 'fa-ring" style="color:#f4a261;"' : 'fa-coins" style="color:#fcd34d;"';
                return `<div class="cost-cell has-cost-value"><div class="cost-badge"><i class="fas ${ic}></i><span>${v}</span></div></div>`;
            }).join('') + `</div>`;
        }).join('');
    ms.forEach((m, i) => m?.loadImage?.(`cost-statue-img-${list[i].toLowerCase().replace(/[^a-z0-9]/g, '')}`));
}