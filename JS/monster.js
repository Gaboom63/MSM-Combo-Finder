// --- DOM HELPER ---
const $ = id => document.getElementById(id);
const toggleEls = (els, display) => els.forEach(el => { if(el) el.style.display = display; });

const firstInput = $('First_Monster'), secondInput = $('Second_Monster');
const searchInput = $('Search_Monster'), searchInputDof = $('Search_Monster_DOF');
const monsterImage = $('monsterImage'), blurMessage = $('blurMessage'), blurOverlay = $('blurOverlay');
const commonButton = $('common'), rareButton = $('rare'), epicButton = $('epic');
const statBox = $('statsBox'), inputContainer = $('inputContainer'), noMonsterImage = $('noMonsterImage');
const volumeButton = $('volume-button'), loadingSpinner = $('loadingSpinner');
const majorMinorButton = $('majorMinorButton'), tabsContainer = $('tabsContainer');
const costumeButton = $('costumeButton'), dynamicGrid = $('dynamicMonsterGrid');
const openBreedBtn = $('openBreedUI'), openBreedBtnDof = $('openBreedUI_DOF');
const breedSplitView = $('breedSplitView'), closeBreedBtn = $('closeBreedUI');
const spotlight = $('monster-spotlight'), sideMenu = $('sideMenu'), iconContainer = $('iconContainer');
let sideMenuB = $('sideMenuButton');
let dofAgeMode = 'young';

const GRID_FALLBACK_IMAGE = "images/important/mammoticon.png";
let isSideMenuOpen = 0, disableEscape = false, disabledButton = false;
let currentRarity = "", monsterRegistry = [], validBreedingCombos = [], currentMonster = null, imageLoadTimeout;
let preloaderPaused = false, pauseTimeout = null;

// --- DOF GLOBALS & STATE HELPERS ---
let dofMonsterRegistry = [], dofValidBreedingCombos = [];
const isDOF = () => typeof menuOpen !== 'undefined' && menuOpen === 1;
const getActiveRegistry = () => isDOF() ? dofMonsterRegistry : monsterRegistry;
const getActiveCombos = () => isDOF() ? dofValidBreedingCombos : validBreedingCombos;

const removeAccents = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const currentHash = localStorage.getItem('msm_api_hash') || 'main';

const dofAgeToggle = $('dofAgeToggle');

dofAgeToggle?.addEventListener('click', () => {

    if (!isDOF()) return;

    dofAgeMode =
        dofAgeMode === 'young'
            ? 'adult'
            : 'young';

    const currentName =
        monsterImage.getAttribute('data-name') ||
        searchInputDof?.value ||
        searchInput?.value;

    if (currentName) {
        loadMonsterImage(findTrueName(currentName));
    }
});

async function buildMonsterRegistry() {
    try {
        const uniqueNames = new Set(), clean = n => n ? n.trim() : "", ignores = ["any", "invalid", "no combination", "unknown", "exclusive"];
        
        // Dynamic detection of current commit hash or local testing status
        
        let indexPath, combosPath, dofIndexPath, dofCombosPath;
        if (currentHash === 'local-testing') {
            // Local path configuration with cache busting
            indexPath = `../MSM-API/MSM/data/monster_index.json?v=${Date.now()}`;
            combosPath = `../MSM-API/MSM/data/breedingCombos.json?v=${Date.now()}`;
            dofIndexPath = `../MSM-API/MSM-DOF/data/dof_monster_index.json?v=${Date.now()}`;
            dofCombosPath = `../MSM-API/MSM-DOF/data/dofBreedingCombos.json?v=${Date.now()}`;
        } else {
            // Production path configuration utilizing the exact GitHub commit hash
            indexPath = `https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@${currentHash}/MSM/data/monster_index.json`;
            combosPath = `https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@${currentHash}/MSM/data/breedingCombos.json`;
            dofIndexPath = `https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@${currentHash}/MSM-DOF/data/dof_monster_index.json`;
            dofCombosPath = `https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@${currentHash}/MSM-DOF/data/dofBreedingCombos.json`;
            
            // Append cache busting parameters only if pinned directly to the 'main' branch
            if (currentHash === 'main') {
                indexPath += `?v=${Date.now()}`;
                combosPath += `?v=${Date.now()}`;
                dofIndexPath += `?v=${Date.now()}`;
                dofCombosPath += `?v=${Date.now()}`;
            }
        }
        
        // 1. Fetch exact names from the main game monster index
        const indexRes = await fetch(indexPath, { credentials: 'omit' }).catch(() => null);
        if (indexRes && indexRes.ok) {
            const imageNames = await indexRes.json();
            imageNames.forEach(name => uniqueNames.add(clean(name)));
        }

        // 2. Fetch main game breeding combos from the data root directory
        const res = await fetch(combosPath, { credentials: 'omit' }).catch(() => null);
        if (res && res.ok) {
            const data = await res.json();
            Object.entries(data).forEach(([key, val]) => { if (key.includes("+")) validBreedingCombos.push(key); });
        }

        monsterRegistry = [...uniqueNames].filter(n => n && !ignores.some(i => n.toLowerCase().includes(i))).sort();
        console.log(`MSM Registry ready: ${monsterRegistry.length} exact monster forms loaded.`);

        // 3. --- DOF API FETCHING ---
        const dofUniqueNames = new Set();
        const dofIndexRes = await fetch(dofIndexPath, { credentials: 'omit' }).catch(() => null);
        if (dofIndexRes && dofIndexRes.ok) {
            const dofImageNames = await dofIndexRes.json();
            dofImageNames.forEach(name => dofUniqueNames.add(clean(name)));
            dofMonsterRegistry = [...dofUniqueNames].filter(n => n && !ignores.some(i => n.toLowerCase().includes(i))).sort();
        } else {
            // Safe hardcoded local fallback if the script fails or 404s
            dofMonsterRegistry = ["Kayna", "Mammott", "Potbelly", "Tweedle", "Noggin", "Toe Jammer"];
        }

        // 4. Fetch Dawn of Fire breeding combos from the data root directory
        const dofRes = await fetch(dofCombosPath, { credentials: 'omit' }).catch(() => null);

        window.dofCombosData = {}; 

        if (dofRes && dofRes.ok) {
            const dofData = await dofRes.json();
            window.dofCombosData = dofData; // <-- NEW: Store it here
            Object.entries(dofData).forEach(([key, val]) => { if (key.includes("+")) dofValidBreedingCombos.push(key); });
        } else {
            // Safe hardcoded local fallback if the script fails or 404s
            dofValidBreedingCombos = ["Kayna + Mammott", "Potbelly + Noggin"]; 
        }
        
        console.log(`DOF Registry ready: ${dofMonsterRegistry.length} forms loaded.`);
        updateMonsterOfTheDay();
    } catch (err) { console.error("Registry failed to build completely:", err); }
}

// --- DOF IMAGE HELPERS ---
function applyMonsterImage(imgEl, monsterName, type = 'full', forceDof = null) {
    if (!imgEl || !monsterName) return;

    const useDof = forceDof !== null ? forceDof : isDOF();

    if (useDof) {
        const loc = `../MSM-API/MSM-DOF/data/Monsters/${monsterName}`;
        const rem = `https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@${currentHash}/MSM-DOF/data/Monsters/${monsterName}`;

        let sources = [];

        if (type === 'full') {
            // Young → Adult → Default
            sources = [
                `${loc}/${monsterName} (Young).png`,
                `${loc}/${monsterName} (Adult).png`,
                `${loc}/${monsterName}.png`,

                `${rem}/${monsterName} (Young).png`,
                `${rem}/${monsterName} (Adult).png`,
                `${rem}/${monsterName}.png`
            ];
        }

        else if (type === 'avatar') {
            // Young avatar variants first
            sources = [
                `${loc}/Young_Avatar_${monsterName} - young.png`,
                `${loc}/Avatar_${monsterName} - young.png`,
                `${loc}/Adult_Avatar_${monsterName} - adult.png`,
                `${loc}/Avatar_${monsterName}.png`,

                `${rem}/Young_Avatar_${monsterName} - young.png`,
                `${rem}/Avatar_${monsterName} - young.png`,
                `${rem}/Adult_Avatar_${monsterName} - adult.png`,
                `${rem}/Avatar_${monsterName}.png`
            ];
        }

        else if (type === 'egg') {
            // Young egg first
            sources = [
                `${loc}/Young_Egg_${monsterName}.png`,
                `${loc}/Adult_Egg_${monsterName}.png`,
                `${loc}/Egg_${monsterName}.png`,

                `${rem}/Young_Egg_${monsterName}.png`,
                `${rem}/Adult_Egg_${monsterName}.png`,
                `${rem}/Egg_${monsterName}.png`
            ];
        }

        let idx = 0;

        imgEl.onerror = () => {
            idx++;

            if (idx < sources.length) {
                imgEl.src = sources[idx];
            } else {
                imgEl.onerror = null;
                imgEl.src = GRID_FALLBACK_IMAGE;
            }
        };

        imgEl.src = sources[0];
    } else {
        // Standard MSM API logic
        let attempts = 0;

        const load = () => {
            if (window.MSM?.[monsterName]) {
                try {
                    MSM[monsterName].loadImage(imgEl.id);
                } catch {
                    imgEl.src = GRID_FALLBACK_IMAGE;
                }
            } else if (attempts++ < 25) {
                setTimeout(load, 200);
            }
        };

        load();
    }
}

const getDofEggHTML = (pName) => {
    const loc = `../MSM-API/MSM-DOF/data/Monsters/${pName}`;
    const rem = `https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@${currentHash}/MSM-DOF/data/Monsters/${pName}`;
    
    const s1 = `${loc}/Adult_Egg_${pName}.png`, s2 = `${loc}/Young_Egg_${pName}.png`, s3 = `${loc}/Egg_${pName}.png`;
    const s4 = `${rem}/Adult_Egg_${pName}.png`, s5 = `${rem}/Young_Egg_${pName}.png`, s6 = `${rem}/Egg_${pName}.png`;
    
    // Inlines the waterfall logic so HTML strings can handle error fallback instantly
    return `<img src="${s1}" onerror="this.onerror=function(){this.src='${s2}';this.onerror=function(){this.src='${s3}';this.onerror=function(){this.src='${s4}';this.onerror=function(){this.src='${s5}';this.onerror=function(){this.src='${s6}';this.onerror=function(){this.src='${GRID_FALLBACK_IMAGE}'};};};};};};" alt="${pName}" class="combo-egg-icon">`;
};

const findTrueName = input => {
    if (!input) return null;
    const cleanIn = removeAccents(input.trim().toLowerCase());
    const reg = getActiveRegistry();
    
    let match = reg.find(k => removeAccents(k.toLowerCase()) === cleanIn);
    if (!match) match = reg.find(k => removeAccents(k.toLowerCase()) === `${cleanIn} (major)`);
    if (!match) match = reg.find(k => removeAccents(k.toLowerCase()).includes(cleanIn));

    return match || input.trim();
};

const toDisplayCase = str => str ? str.toLowerCase().replace(/(?:^|[\s\-\(\)])[a-z]/g, l => l.toUpperCase()) : "";
const normalizeName = name => name ? name.replace(/^(common|rare|epic|legendary)\s+/i, "").trim() : "";

function updateActiveTab() {
    if (!tabsContainer.children.length) {
        [commonButton, rareButton, epicButton].forEach(b => b.classList.remove('active-tab'));
        if (currentRarity === "Common") commonButton.classList.add('active-tab');
        else if (currentRarity === "Rare") rareButton.classList.add('active-tab');
        else if (currentRarity === "Epic") epicButton.classList.add('active-tab');
    }
}

function showMonsterUI(isBreedingResult = false) {
    const islandCont = $('island-container');
    
    if (islandCont) {
        islandCont.classList.remove('slide-from-right', 'slide-to-right');
    }

    toggleEls([monsterImage, blurMessage, blurOverlay], 'block');
    requestAnimationFrame(() => blurOverlay.classList.add('active'));
    
    toggleEls([inputContainer, noMonsterImage, sideMenu, islandCont], 'none');

    if (isBreedingResult) {
        // Hide all extra buttons during breed results
        toggleEls([commonButton, rareButton, epicButton, volumeButton, majorMinorButton], 'none');
        Object.assign(tabsContainer.style, { display: 'flex', justifyContent: 'center', gap: '10px' });
    } else {
        toggleEls([volumeButton], 'inline-flex');
        Object.assign(tabsContainer.style, { display: 'none' });

        if (!isDOF()) {
            const baseName = monsterImage.getAttribute('data-name');
            
            if (baseName) {
                // --- 1. RARITY BUTTON LOGIC ---
                const hasRare = isValidMonster(findTrueName(`Rare ${baseName}`));
                const hasEpic = isValidMonster(findTrueName(`Epic ${baseName}`));

                if (hasRare || hasEpic) {
                    commonButton.style.display = 'inline-flex';
                    rareButton.style.display = hasRare ? 'inline-flex' : 'none';
                    epicButton.style.display = hasEpic ? 'inline-flex' : 'none';
                } else {
                    toggleEls([commonButton, rareButton, epicButton], 'none');
                }

                // --- 2. PAIRINORMAL (MAJOR/MINOR) LOGIC ---
                // If the root name contains Major/Minor, show the button and dynamically set its text
                if (baseName.includes('(Major)') || baseName.includes('(Minor)')) {
                    majorMinorButton.style.display = 'inline-flex';
                    majorMinorButton.textContent = baseName.includes('(Major)') ? 'Switch to Minor' : 'Switch to Major';
                } else {
                    majorMinorButton.style.display = 'none';
                }

            } else {
                toggleEls([commonButton, rareButton, epicButton, majorMinorButton], 'none');
            }
        } else {
            toggleEls([commonButton, rareButton, epicButton, majorMinorButton], 'none');
        }
    }
}

document.addEventListener('keydown', e => { 
    if (e.key === "Escape" && !disableEscape) {
        if (isSideMenuOpen) {
            
            // --- FIX: Instantly hide contents so they don't linger during the close animation ---
            toggleEls([$('statsSection'), $('inventorySection'), $('costSection'), $('mainStatBox')], 'none');

            if(typeof hideStatBox === 'function') hideStatBox();
            if($('inventorySection') && $('inventorySection').style.display === 'block' && typeof hideInventoryBox === 'function') hideInventoryBox();
            isSideMenuOpen = 0;
            
        } else if (breedSplitView && breedSplitView.style.display === 'flex') {
            closeSplitView();
        } else {
            reset();
        }
    }
});

async function costumeErrorHandling(name) {
    // 1. Force hide if we are in DOF mode
    if (isDOF()) {
        costumeButton.style.display = 'none';
        return;
    }

    // 2. Original logic for main game monsters
    if (!isValidMonster(name)) {
        costumeButton.style.display = 'none'; 
        return;
    }

    try {
        const costumes = await Promise.race([
            MSM[name].getCostumes(), 
            new Promise(r => setTimeout(() => r([]), 3000))
        ]);
        costumeButton.style.display = (!costumes || !costumes.length) ? 'none' : 'revert';
    } catch { 
        costumeButton.style.display = 'none'; 
    }
}

function reset() {
    // 1. Conditionally display the correct container based on the active game mode
    if (isDOF()) {
        inputContainer.style.display = 'none';
        if ($('island-container')) $('island-container').style.display = 'flex';
    } else {
        inputContainer.style.display = 'flex';
        if ($('island-container')) $('island-container').style.display = 'none';
    }

    breedSplitView.classList.remove('active'); 
    breedSplitView.style.display = 'none';
    toggleEls([monsterImage, blurMessage], 'none');
    sideMenuB.style.display = 'flex';
    blurOverlay.classList.remove('active');
    
    // --- RESET PRISMATIC BUTTON TEXT ---
    const pBtn = $('prismaticButton');
    if (pBtn) pBtn.textContent = "Cycle Prismatic";
    // ------------------------------------
    
    setTimeout(() => { 
        if (firstInput && !firstInput.classList.contains('expanded-search')) {
            blurOverlay.style.display = 'none'; 
        }
    }, 500);

    if (tabsContainer) { 
        tabsContainer.innerHTML = ''; 
        tabsContainer.style.display = 'none'; 
    }
    
    updateRecentHistoryUI();

    [commonButton, rareButton, epicButton, statBox, noMonsterImage, volumeButton, costumeButton, majorMinorButton, loadingSpinner, $('dofAgeToggle'), $('prismaticButton')]
        .forEach(el => { 
            if (el) { 
                el.style.display = 'none'; 
                el.classList?.remove('active-tab'); 
            } 
        });

    if (searchInput) searchInput.value = "";
    if (firstInput) firstInput.value = "";
    if (secondInput) secondInput.value = "";
    if (typeof searchInputDof !== 'undefined' && searchInputDof) searchInputDof.value = "";
    currentRarity = "";
    
    document.querySelectorAll('.parent-img').forEach(img => { 
        img.style.display = 'none'; 
        img.src = ''; 
        img.classList.remove('breeding-glow-left', 'breeding-glow-right'); 
    });
    
    document.querySelectorAll('.empty-slot').forEach(slot => slot.style.display = 'flex');
    document.querySelectorAll('.split-half h2').forEach((h2, i) => { 
        h2.classList.remove('active-label'); 
        h2.textContent = i === 0 ? 'Parent 1' : 'Parent 2'; 
    });
    
    const badge = document.querySelector('.fusion-badge');
    if (badge) { 
        badge.classList.remove('breeding'); 
        const i = badge.querySelector('i'); 
        if (i) i.className = 'fas fa-plus'; 
    }

    if (firstInput) firstInput.style.opacity = '1';
    if (secondInput) secondInput.style.opacity = '1';
    
    spotlight.style.display = isDOF() ? 'none' : 'flex';
    sideMenu.style.display = 'flex';
    
    const recentContainers = [$('recent-discoveries'), $('recent-discoveries-DOF')];
    recentContainers.forEach(el => {
        if (el) el.style.display = 'block';
    });

    closeExpandedInput(); 
    checkInputGlows();

    toggleEls([$('statsSection'), $('inventorySection'), $('costSection'), $('mainStatBox')], 'none');
}

const openBreedHandler = () => { breedSplitView.style.display = 'flex'; requestAnimationFrame(() => breedSplitView.classList.add('active')); };
openBreedBtn.addEventListener('click', openBreedHandler);
if (openBreedBtnDof) openBreedBtnDof.addEventListener('click', openBreedHandler);

closeBreedBtn.addEventListener('click', closeSplitView);

function closeSplitView() {
    if (disabledButton) return;
    closeExpandedInput(); breedSplitView.classList.remove('active');
    setTimeout(() => breedSplitView.style.display = 'none', 400);
}

let activeInput = null, activeOriginalRect = null, activeGrid = null;
const grid1 = $('grid1'), grid2 = $('grid2');

function setupSmoothExpansionAndGrid(inputEl, targetGrid, incRarity = true, animMode = 'full') {
    let selIdx = -1;
    inputEl.addEventListener('focus', () => {
        if (activeInput && activeInput !== inputEl) closeExpandedInput();
        activeInput = inputEl; activeGrid = targetGrid; sideMenuB.style.display = 'none';
        inputEl.closest('.split-half')?.classList.add('searching');
        
        // ---> NEW: STACKING CONTEXT FIX <---
        // This removes the animation lock so the search bar can float on top
        const islandContainer = inputEl.closest('#island-container');
        if (islandContainer) {
            islandContainer.style.animation = 'none';
            islandContainer.classList.remove('slide-from-right', 'slide-to-right');
        }
        // -----------------------------------

        activeOriginalRect = inputEl.getBoundingClientRect();

        Object.assign(inputEl.style, { transition: 'none', position: 'fixed', top: `${activeOriginalRect.top}px`, left: `${activeOriginalRect.left}px`, width: `${activeOriginalRect.width}px`, margin: '0' });
        void inputEl.offsetWidth;
        inputEl.style.transition = 'all 0.5s cubic-bezier(0.25, 1, 0.3, 1)';

        let w, l, t = window.innerHeight * 0.12;
        if (animMode === 'full') {
            w = Math.min(window.innerWidth * 0.9, 1300); l = (window.innerWidth - w) / 2;
            blurOverlay.style.display = 'block'; requestAnimationFrame(() => blurOverlay.classList.add('active'));
        } else {
            const pRect = inputEl.parentElement.getBoundingClientRect();
            w = Math.min(pRect.width * 0.85, 600); l = pRect.left + (pRect.width - w) / 2;
        }

        Object.assign(inputEl.style, { top: `${t}px`, left: `${l}px`, width: `${w}px` });
        inputEl.classList.add('expanded-search'); checkInputGlows();
        targetGrid.classList.add('active'); inputEl.dispatchEvent(new Event('input'));
    });

    inputEl.addEventListener('blur', () => setTimeout(() => { if (!inputEl.classList.contains('expanded-search')) targetGrid.innerHTML = ''; }, 300));

    inputEl.addEventListener('input', () => {
        if (activeInput !== inputEl) return;
        selIdx = -1; haltPreloaderForUserAction();
        const p = inputEl.parentElement, lbl = p.querySelector('h2'), imgE = p.querySelector('.parent-img'), ph = p.querySelector('.empty-slot');
        if (lbl && imgE && ph) { lbl.classList.remove('active-label'); lbl.textContent = inputEl.id === 'First_Monster' ? 'Parent 1' : 'Parent 2'; }

        const q = removeAccents(inputEl.value.toLowerCase().trim());
        let m = [];

        if (inputEl === firstInput) {
            const vp = new Set(getActiveCombos().flatMap(c => c.split('+').map(p => p.trim().toLowerCase())));
            m = getActiveRegistry().filter(n => vp.has(n.toLowerCase()));
        } else if (inputEl === secondInput) {
            const v1 = firstInput.value.trim().toLowerCase();
            if (v1) m = getActiveRegistry().filter(n => getActiveCombos().some(c => { const p = c.split('+').map(x=>x.trim().toLowerCase()); return (p[0]===v1 && p[1]===n.toLowerCase()) || (p[1]===v1 && p[0]===n.toLowerCase()); }));
        } else {
            m = getActiveRegistry().filter(n => incRarity || (!n.toLowerCase().startsWith("rare ") && !n.toLowerCase().startsWith("epic ")));
        }

        if (q) m = m.filter(n => removeAccents(n.toLowerCase()).includes(q));
        if (!q && (inputEl === searchInput || inputEl === searchInputDof)) return targetGrid.innerHTML = '';

        targetGrid.innerHTML = '';
        m.slice(0, 12).forEach(match => {
            const item = document.createElement('div'); item.className = 'grid-monster-item';
            const safeId = `grid-img-${match.replace(/[^a-zA-Z0-9]/g, '')}`;
            const img = document.createElement('img'); img.id = safeId; img.onerror = () => { img.onerror = null; img.src = GRID_FALLBACK_IMAGE; };
            const span = document.createElement('span'); span.textContent = match;
            item.append(img, span);

            item.addEventListener('click', async () => {
                inputEl.value = match; targetGrid.innerHTML = ''; targetGrid.classList.remove('active');
                closeExpandedInput(); checkInputGlows();
                const tName = findTrueName(match);

                if (lbl && imgE && ph) { lbl.classList.add('active-label'); lbl.textContent = match; ph.style.display = 'none'; imgE.style.display = 'block'; applyMonsterImage(imgE, tName, 'avatar'); }

                if (inputEl === searchInput || inputEl === searchInputDof) {
                    currentRarity = /^rare/i.test(tName) ? "Rare" : /^epic/i.test(tName) ? "Epic" : "Common";
                    monsterImage.setAttribute('data-name', normalizeName(tName));
                    tabsContainer.innerHTML = ''; showMonsterUI(false); updateActiveTab(); 
                    if (isDOF()) {
                        dofAgeMode = 'young';
                    }
                    loadMonsterImage(tName);
                    await costumeErrorHandling(tName); loadStats(tName);
                } else if (inputEl === firstInput || inputEl === secondInput) {
                    if (inputEl === firstInput && secondInput.value.trim()) {
                        const v2 = secondInput.value.trim().toLowerCase();
                        if (!getActiveCombos().some(c => { const p = c.split('+').map(x=>x.trim().toLowerCase()); return (p[0]===tName.toLowerCase() && p[1]===v2) || (p[1]===tName.toLowerCase() && p[0]===v2); })) {
                            secondInput.value = ''; const p2 = $('grid2').parentElement;
                            p2.querySelector('h2')?.classList.remove('active-label'); p2.querySelector('h2').textContent = 'Parent 2';
                            if (p2.querySelector('.parent-img')) { p2.querySelector('.parent-img').style.display = 'none'; p2.querySelector('.parent-img').src = ''; }
                            if (p2.querySelector('.empty-slot')) p2.querySelector('.empty-slot').style.display = 'flex';
                            if ($('grid2')) { $('grid2').innerHTML = ''; $('grid2').classList.remove('active'); }
                            checkInputGlows();
                        }
                    }
                    if (firstInput.value.trim() && secondInput.value.trim()) triggerBreedingAnimation();
                }
            });
            targetGrid.appendChild(item);
            applyMonsterImage(img, findTrueName(match), 'avatar');
        });
    });

    inputEl.addEventListener('keydown', e => {
        const items = targetGrid.querySelectorAll('.grid-monster-item');
        if (!items.length) return;
        if (['ArrowRight', 'ArrowDown'].includes(e.key)) { e.preventDefault(); selIdx = (selIdx + 1) % items.length; updateSel(items); }
        else if (['ArrowLeft', 'ArrowUp'].includes(e.key)) { e.preventDefault(); selIdx = (selIdx - 1 + items.length) % items.length; updateSel(items); }
        else if (e.key === 'Enter' && selIdx >= 0) { e.preventDefault(); items[selIdx].click(); }
    });
    const updateSel = items => { items.forEach(i => i.classList.remove('keyboard-selected')); if (selIdx >= 0) { items[selIdx].classList.add('keyboard-selected'); items[selIdx].scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } };
}

function triggerBreedingAnimation() {
    const badge = document.querySelector('.fusion-badge'), icon = badge.querySelector('i');
    const i1 = $('parent-img-1'), i2 = $('parent-img-2');
    disabledButton = true; firstInput.style.opacity = secondInput.style.opacity = '0';
    grid1?.classList.remove('active'); grid2?.classList.remove('active');
    icon.className = 'fas fa-heart'; badge.classList.add('breeding');
    i1?.classList.add('breeding-glow-left'); i2?.classList.add('breeding-glow-right');

    setTimeout(async () => {
        closeExpandedInput(); breedSplitView.classList.remove('active'); setTimeout(() => breedSplitView.style.display = 'none', 400);
        try { await comboFinder(); } catch { showNoMonsterError(); }
        finally { setTimeout(() => { icon.className = 'fas fa-plus'; badge.classList.remove('breeding'); firstInput.style.opacity = secondInput.style.opacity = '1'; i1?.classList.remove('breeding-glow-left'); i2?.classList.remove('breeding-glow-right'); disableEscape = false; }, 500); }
        disabledButton = false;
    }, 1800);
}

function closeExpandedInput() {
    if (!activeInput) return;
    const cIn = activeInput, cGrid = activeGrid; activeInput = activeGrid = null; cIn.blur();
    cGrid?.classList.remove('active'); cIn.classList.remove('expanded-search');
    cIn.closest('.split-half')?.classList.remove('searching');
    if (activeOriginalRect) Object.assign(cIn.style, { top: activeOriginalRect.top + 'px', left: activeOriginalRect.left + 'px', width: activeOriginalRect.width + 'px' });
    if (cIn === searchInput || cIn === searchInputDof) blurOverlay.classList.remove('active');
    checkInputGlows();
    setTimeout(() => { Object.assign(cIn.style, { transition: '', position: '', top: '', left: '', width: '', margin: '' }); if ((cIn === searchInput || cIn === searchInputDof) && !blurOverlay.classList.contains('active') && monsterImage.style.display !== 'revert') blurOverlay.style.display = 'none'; }, 500);
}

blurOverlay.addEventListener('click', closeExpandedInput);
const checkGlow = el => el.classList.toggle('ready-glow', el.value.trim() && !el.classList.contains('expanded-search'));
function checkInputGlows() { checkGlow(firstInput); checkGlow(secondInput); }

setupSmoothExpansionAndGrid(searchInput, dynamicGrid, true, 'full');
if (searchInputDof) setupSmoothExpansionAndGrid(searchInputDof, dynamicGrid, true, 'full');
setupSmoothExpansionAndGrid(firstInput, grid1, false, 'local');
setupSmoothExpansionAndGrid(secondInput, grid2, false, 'local');

costumeButton.addEventListener("click", async () => { const n = await currentMonster?.nextCostume(); n ? monsterImage.src = n : alert("No costumes available!"); });
majorMinorButton.addEventListener("click", () => {
    const b = monsterImage.getAttribute('data-name'); 
    if (!b) return;
    
    let nb = "";
    if (b.includes("(Major)")) nb = b.replace("(Major)", "(Minor)");
    else if (b.includes("(Minor)")) nb = b.replace("(Minor)", "(Major)");
    
    if (nb) {
        let tn = findTrueName(nb); 
        if (!tn || !MSM[tn]) return;
        
        searchInput.value = tn; 
        if (searchInputDof) searchInputDof.value = tn;
        monsterImage.setAttribute('data-name', tn); 
        
        showMonsterUI(false); 
        loadMonsterImage(tn); 
        setTimeout(() => { 
            loadStats(tn); 
            costumeErrorHandling(tn); 
        }, 50);
    }
});

async function comboFinder() {
    let res = [];
    const p1 = firstInput.value.trim().toLowerCase();
    const p2 = secondInput.value.trim().toLowerCase();

    if (isDOF()) {
        // Use your cached window.dofCombosData instead of calling the external API
        if (window.dofCombosData) {
            // Find matches where either parent 1 or parent 2 matches the combo keys
            res = Object.entries(window.dofCombosData)
                .filter(([comboKey, results]) => {
                    const parents = comboKey.split('+').map(p => p.trim().toLowerCase());
                    return (parents.includes(p1) && parents.includes(p2));
                })
                .map(([_, results]) => results)
                .flat();
        }
    } else {
        // Keep your existing MSM API call
        res = await MSM.twoMonsterCombo(`${p1} + ${p2}`);
    }

    if (!res || !res.length || (typeof res[0] === 'string' && /Invalid|No combination/i.test(res[0]))) return showNoMonsterError();
    
    tabsContainer.innerHTML = '';
    if (res.length > 1) {
        // If multiple results, show tabs
        res.sort((a, b) => b.length - a.length).forEach((m, i) => {
            const b = document.createElement('button'); 
            b.className = `tab-button ${i === 0 ? 'active-tab' : ''}`; 
            b.textContent = m;
            b.addEventListener('click', async () => { 
                Array.from(tabsContainer.children).forEach(c => c.classList.remove('active-tab')); 
                b.classList.add('active-tab'); 
                loadFromTab(m); 
                await costumeErrorHandling(m); 
            });
            tabsContainer.appendChild(b);
        });
        showMonsterUI(true); 
        loadFromTab(res[0]); 
        await costumeErrorHandling(res[0]);
    } else {
        const tn = findTrueName(res[0]);
        currentRarity = /^rare/i.test(tn) ? "Rare" : /^epic/i.test(tn) ? "Epic" : "Common";
        searchInput.value = tn; 
        if (searchInputDof) searchInputDof.value = tn;
        monsterImage.setAttribute('data-name', normalizeName(tn));
        showMonsterUI(false); 
        updateActiveTab(); 
        loadMonsterImage(tn); 
        loadStats(tn); 
        await costumeErrorHandling(tn);
    }
}

function loadFromTab(name) {
    const tn = findTrueName(name);
    saveToHistory(tn);
    searchInput.value = tn;
    if (searchInputDof) searchInputDof.value = tn;

    currentRarity =
        /^rare/i.test(tn) ? "Rare" :
        /^epic/i.test(tn) ? "Epic" :
        "Common";

    monsterImage.setAttribute('data-name', normalizeName(tn));

    showMonsterUI(true);

    if (isDOF()) {
        dofAgeMode = 'young';
    }

    loadMonsterImage(tn);
    loadStats(tn);
}

async function loadStats(name) {
    const tn = findTrueName(name || searchInput.value.trim());
    if (!tn || !isValidMonster(tn)) return showNoMonsterError();


    saveToHistory(tn);

    noMonsterImage.style.display = 'none';
    statBox.style.display = 'flex';

    statBox.innerHTML = `
        <div class="stats-left-column">
            <div class="stats-bubble" style="min-height:120px;display:flex;justify-content:center;align-items:center;">
                <div class="spinner"></div>
            </div>
            <div class="stats-bubble" style="min-height:120px;display:flex;justify-content:center;align-items:center;">
                <div class="spinner"></div>
            </div>
        </div>
        <div class="stats-bubble" id="breeding-combo-container" style="display:flex;justify-content:center;align-items:center;">
            <div class="combo-loader-frame">Loading...</div>
        </div>
    `;

    try {
        const m = isDOF() ? await MSM.getDofMonster(tn) : await MSM.get(tn);
        if (!m) throw new Error("Monster not found");

        let times = { Standard: "Unknown" }, combos = [], elements = [];

        if (isDOF()) {
            toggleEls([commonButton, rareButton, epicButton, costumeButton, majorMinorButton], 'none');
            times = await m.getBreedingTime();
            if (window.dofCombosData) {
                combos = Object.entries(window.dofCombosData)
                    .filter(([k, v]) => v.map(x => x.toLowerCase()).includes(tn.toLowerCase()))
                    .map(([k]) => k);
            }
            const baseM = await MSM.get(tn).catch(() => null);
            elements = baseM?.getElementImages ? await baseM.getElementImages() : [];
        } else {
            const fetchWRetry = async (retries = 3) => {
                for (let i = 1; i <= retries; i++) {
                    try { return await Promise.all([m.getBreedingTime(), m.getBreedingCombos?.() || [], m.getElementImages()]); } 
                    catch (e) { if (i === retries) throw e; await new Promise(r => setTimeout(r, 100)); }
                }
            };
            [times, combos, elements] = await fetchWRetry();
        }

        const hasTime = times?.Standard && times.Standard !== "Unknown";
        const hasCombos = combos?.length > 0;
        const hasPrismatics = isDOF() && m.prismatics && m.prismatics.length > 0;
        const displayName = (isDOF() || currentRarity !== "Common") ? toDisplayCase(tn) : `${toDisplayCase(tn)}`;
        
        // --- Prismatic Button Logic ---
        const pBtn = $('prismaticButton');
        if (pBtn) {
            if (hasPrismatics) {
                pBtn.style.display = 'inline-flex';
                let currentIndex = -1;
                
                pBtn.onclick = () => {
                    currentIndex++;
                    if (currentIndex >= m.prismatics.length) {
                        currentIndex = -1;
                        // Determine base image path dynamically based on age mode
                        const suffix = dofAgeMode === 'adult' ? ' (Adult).png' : ' (Young).png';
                        monsterImage.src = `${MSM.getDofBaseUrl()}${encodeURIComponent(m.name)}/${encodeURIComponent(m.name + suffix)}`;
                        pBtn.textContent = "Cycle Prismatic";
                    } else {
                        const p = m.prismatics[currentIndex];
                        monsterImage.src = `${MSM.getDofBaseUrl()}${encodeURIComponent(m.name)}/${p.Image}`;
                        pBtn.textContent = `Prismatic: ${p.Color}`;
                    }
                };
            } else {
                pBtn.style.display = 'none';
            }
        }

        statBox.querySelector('.stats-left-column').innerHTML = `
            <div class="stats-bubble">
                <span class="label-text"><i class="fas fa-dna"></i> Monster Name</span>
                <h3>${displayName}</h3>
            </div>
            <div class="stats-bubble">
                <span class="label-text"><i class="fas fa-atom"></i> Elements</span>
                <div class="elements-display">
                    ${elements.length ? elements.map(e => `<img src="${e.image}" class="element-icon" title="${e.name}">`).join("") : 'No Elements'}
                </div>
            </div>
            <div class="stats-bubble layout-hatch-time">
                <span class="label-text"><i class="fas fa-clock"></i> Breeding Time</span>
                <div class="hatch-time-split-container">
                    <div class="hatch-card default-tier" style="${isDOF() ? 'width: 100%;' : ''}">
                        <div class="hatch-badge"><i class="fas fa-hourglass-start"></i></div>
                        <div class="hatch-data-labels">
                            <span class="hatch-tier-title">${isDOF() ? 'Breeding Time' : 'Standard'}</span>
                            <p class="hatch-time-string">${hasTime ? times.Standard : "Unknown"}</p>
                        </div>
                    </div>
                    ${(!isDOF() && times?.Enhanced) ? `
                    <div class="hatch-card enhanced-tier">
                        <div class="hatch-badge"><i class="fas fa-bolt"></i></div>
                        <div class="hatch-data-labels">
                            <span class="hatch-tier-title">Enhanced</span>
                            <p class="hatch-time-string">${times.Enhanced}</p>
                        </div>
                    </div>` : ''}
                </div>
            </div>
        `;

        const bc = $('breeding-combo-container');
        if (!hasCombos) {
            bc.innerHTML = `<span class="label-text"><i class="fas fa-heart"></i> Breeding Combo</span><p>• Special Combination Required</p>`;
        } else {
            const rows = await Promise.all(combos.map(async c => {
                const ps = c.split(/\s\+\s|\sand\s/i).map(p => p.trim());
                if (ps.length >= 2) {
                    return `<div class="combo-row-item">${(await Promise.all(ps.map(async p => `
                        <div class="combo-parent-chip">
                            ${isDOF() ? getDofEggHTML(p) : `<img src="${(await MSM.get(p).catch(()=>null))?.eggUrl || ''}" class="combo-egg-icon">`}
                            <span class="combo-parent-name">${p}</span>
                        </div>`))).join('<div class="combo-operator-plus"><i class="fas fa-plus"></i></div>')}</div>`;
                }
                return `<div class="combo-row-item-raw">• ${c}</div>`;
            }));
            bc.innerHTML = `<span class="label-text"><i class="fas fa-heart"></i> Breeding Combo</span><div class="combo-matrix-display-box">${rows.join("")}</div>`;
        }
    } catch (e) {
        console.error(e);
        showNoMonsterError();
    }
    dynamicSoundIcon(tn);
}

function showNoMonsterError() {
    toggleEls([
        monsterImage,
        blurMessage,
        loadingSpinner,
        commonButton,
        rareButton,
        epicButton,
        statBox,
        volumeButton,
        majorMinorButton,
        costumeButton,
        $('dofAgeToggle'),
        $('prismaticButton') // Added this
    ], 'none');

    if (tabsContainer) {
        tabsContainer.innerHTML = '';
        tabsContainer.style.display = 'none';
    }

    noMonsterImage.style.display = 'revert';
    noMonsterImage.src = `images/important/Nomonsterfound.png`;
}

async function playSound() { const r = searchInput.value.trim(); if(r) try { await MSM[findTrueName(r)]?.playSound(); } catch{} }
function haltPreloaderForUserAction() { preloaderPaused = true; clearTimeout(pauseTimeout); pauseTimeout = setTimeout(() => preloaderPaused = false, 5000); }
function requestPriority(n) { preloaderPaused = true; clearTimeout(pauseTimeout); pauseTimeout = setTimeout(() => preloaderPaused = false, 3000); loadMonsterImage(n); loadStats(n); costumeErrorHandling(n); }

function silentlyPreloadImages() {
    if (!window.MSM || !getActiveRegistry()?.length) return setTimeout(silentlyPreloadImages, 500);
    let i = 0;
    const n = async () => {
        if (preloaderPaused) return setTimeout(n, 1000);
        const reg = getActiveRegistry();
        for(let j=0; j<3 && i<reg.length; j++, i++) {
            try { const m = await MSM[findTrueName(reg[i])]; if(m) { (await m.getElementImages?.()||[]).forEach(e => { if(e?.image) new Image().src = e.image; }); if(m.imageUrl) new Image().src = m.imageUrl; } } catch {}
        }
        if (i < reg.length) setTimeout(() => window.requestIdleCallback ? requestIdleCallback(n) : n(), 250);
    }; setTimeout(n, 2000);
} silentlyPreloadImages();

function createParticles() {
    const c = $('particles-container'), s = ['♪', '♫', '♩', '♬', '✧', '⋆'];
    if (c) setInterval(() => { const e = document.createElement('div'); e.className = 'particle'; e.textContent = s[Math.floor(Math.random() * s.length)]; Object.assign(e.style, { left: Math.random() * 100 + 'vw', fontSize: (Math.random() * 15 + 15) + 'px', animationDuration: (Math.random() * 5 + 7) + 's' }); c.appendChild(e); setTimeout(() => e.remove(), 12000); }, 1500);
} createParticles();

const randomComboHandler = () => {
    const combos = getActiveCombos();
    if (!combos.length) return; disableEscape = true;
    const [m1, m2] = combos[Math.floor(Math.random() * combos.length)].split("+").map(s => findTrueName(s.trim()) || toDisplayCase(s.trim()));
    firstInput.value = m1; secondInput.value = m2; breedSplitView.style.display = 'flex'; requestAnimationFrame(() => breedSplitView.classList.add('active'));
    
    const setSide = (n, num) => { const l = $(`grid${num}`).parentElement.querySelector('h2'), i = $(`parent-img-${num}`), s = $(`placeholder-${num}`); if(l&&i&&s) { l.textContent = n; l.classList.add('active-label'); i.style.display = 'block'; s.style.display = 'none'; applyMonsterImage(i, findTrueName(n), 'avatar'); }};
    setSide(m1, 1); setSide(m2, 2);

    setTimeout(() => {
        const b = document.querySelector('.fusion-badge'), i = b.querySelector('i'); firstInput.style.opacity = secondInput.style.opacity = '0';
        i.className = 'fas fa-heart'; b.classList.add('breeding'); $('parent-img-1')?.classList.add('breeding-glow-left'); $('parent-img-2')?.classList.add('breeding-glow-right');
        setTimeout(async () => {
            closeSplitView(); try { await comboFinder(); } catch { showNoMonsterError(); }
            finally { setTimeout(() => { i.className = 'fas fa-plus'; b.classList.remove('breeding'); firstInput.style.opacity = secondInput.style.opacity = '1'; $('parent-img-1')?.classList.remove('breeding-glow-left'); $('parent-img-2')?.classList.remove('breeding-glow-right'); disableEscape = false; }, 500); }
        }, 1800);
    }, 1500);
};

$('randomComboBtn')?.addEventListener('click', randomComboHandler);
if ($('randomComboBtn_DOF')) $('randomComboBtn_DOF').addEventListener('click', randomComboHandler);

function saveToHistory(n) {
    const tn = findTrueName(n); if (!tn) return;
    // Determine which storage key to use based on the current game mode
    const storageKey = isDOF() ? 'dofRecentHistory' : 'msmRecentHistory';
    
    let h = (JSON.parse(localStorage.getItem(storageKey)) || []).filter(x => x !== tn);
    h.push(tn); 
    while(h.length > 3) h.shift(); 
    localStorage.setItem(storageKey, JSON.stringify(h)); 
    
    updateRecentHistoryUI();
}

function updateRecentHistoryUI() {
    console.log("Updating Recent History UI...");
    const renderGrid = (g, historyArray, isDof = false) => {
        if (!g) {
            console.warn("Grid element not found!");
            return;
        }
        if (!historyArray.length) {
            console.log("History array is empty.");
            g.innerHTML = '<span style="color:rgba(255,255,255,0.4);font-size:14px;font-style:italic;">No monsters discovered yet...</span>';
            return;
        }
        
        g.innerHTML = '';
        historyArray.forEach(n => {
            const i = document.createElement('img'); 
            i.className = 'recent-avatar'; 
            i.id = `history-img-${isDof ? 'dof-' : ''}${n.replace(/[^a-zA-Z0-9]/g, '')}`; 
            i.title = n;
            
            i.onload = () => i.classList.add('loaded'); 
            i.onerror = () => { 
                console.warn(`Failed to load recent avatar: ${n}`);
                i.onerror = null; 
                i.src = GRID_FALLBACK_IMAGE; 
            };
            
            i.addEventListener('click', () => { 
                searchInput.value = n; 
                if (searchInputDof) searchInputDof.value = n;
                const tn = findTrueName(n); 
                currentRarity = /^rare/i.test(tn) ? "Rare" : /^epic/i.test(tn) ? "Epic" : "Common"; 
                monsterImage.setAttribute('data-name', normalizeName(tn)); 
                tabsContainer.innerHTML = ''; 
                showMonsterUI(false); 
                updateActiveTab();
                if (isDOF()) { dofAgeMode = 'young'; } 
                loadMonsterImage(tn); 
                costumeErrorHandling(tn); 
                loadStats(tn); 
            });
            
            g.appendChild(i); 
            // Pass the 'isDof' flag explicitly
            applyMonsterImage(i, n, 'avatar', isDof); 
        });
    };
    
    const msmHistory = JSON.parse(localStorage.getItem('msmRecentHistory')) || [];
    const dofHistory = JSON.parse(localStorage.getItem('dofRecentHistory')) || [];
    
    console.log(`Rendering ${msmHistory.length} MSM items and ${dofHistory.length} DOF items.`);
    renderGrid($('recent-grid'), msmHistory, false);
    renderGrid($('recent-grid-DOF'), dofHistory, true);
}

function dynamicSoundIcon(n) { volumeButton.style.display = MSM[n]?.sounds[0] ? 'inline-flex' : 'none'; }

function updateMonsterOfTheDay() {
    if (!spotlight || !getActiveRegistry().length) return;
    const d = new Date(), reg = getActiveRegistry(), tn = findTrueName(reg[((d.getFullYear()*10000)+((d.getMonth()+1)*100)+d.getDate()) % reg.length]);
    if ($('spotlight-name')) $('spotlight-name').textContent = tn;
    if ($('spotlight-img')) {
        const i = $('spotlight-img'); i.id = `spotlight-img-${tn.replace(/[^a-zA-Z0-9]/g, '')}`; i.onerror = () => { i.onerror = null; i.src = GRID_FALLBACK_IMAGE; };
        applyMonsterImage(i, tn, 'avatar'); // <-- Fixed variable here
    }
    spotlight.style.display = 'flex';
    spotlight.addEventListener('click', () => { searchInput.value = tn; if (searchInputDof) searchInputDof.value = tn; currentRarity = /^rare/i.test(tn) ? "Rare" : /^epic/i.test(tn) ? "Epic" : "Common"; monsterImage.setAttribute('data-name', normalizeName(tn)); tabsContainer.innerHTML = ''; showMonsterUI(false); updateActiveTab(); loadMonsterImage(tn); costumeErrorHandling(tn); loadStats(tn); });
}

async function handleRaritySwitch(r) {
    const b = monsterImage.getAttribute('data-name'); 
    if (!b) return;
    
    const baseName = b.replace(/^(Rare|Epic)\s+/i, '').trim();
    const targetName = r === "Common" ? baseName : `${r} ${baseName}`;
    const tn = findTrueName(targetName);
    
    if (!isValidMonster(tn)) return; 

    searchInput.value = tn; if (searchInputDof) searchInputDof.value = tn;
    currentRarity = r; 
    showMonsterUI(false); 
    updateActiveTab(); 
    loadMonsterImage(tn); 
    setTimeout(() => { loadStats(tn); costumeErrorHandling(tn); }, 50);
}
commonButton.addEventListener("click", () => handleRaritySwitch("Common")); rareButton.addEventListener("click", () => handleRaritySwitch("Rare")); epicButton.addEventListener("click", () => handleRaritySwitch("Epic"));

function isValidMonster(n) {
    if (!n) return false;
    const cleanInput = n.toLowerCase().trim();
    return getActiveRegistry().some(x => x.toLowerCase() === cleanInput);
}

function loadMonsterImage(name, retries = 2) {
    if (!name) return;

    haltPreloaderForUserAction();

    const id = Date.now();
    monsterImage.dataset.loadId = id;

    monsterImage.classList.remove('animate-enter');
    monsterImage.style.opacity = '0';

    if (loadingSpinner) loadingSpinner.style.display = 'block';

    clearTimeout(imageLoadTimeout);

    if (!isValidMonster(name)) return showNoMonsterError();

    const clean = () => {
        if (monsterImage.dataset.loadId == id) {
            if (loadingSpinner) loadingSpinner.style.display = 'none';

            clearTimeout(imageLoadTimeout);

            monsterImage.style.maxHeight = '350px';
            monsterImage.style.objectFit = 'contain';
            monsterImage.style.transform = 'none';

            monsterImage.style.opacity = '1';
            monsterImage.classList.add('animate-enter');
        }
    };

    monsterImage.onload = clean;

    if (isDOF()) {

        const ageToggleBtn = $('dofAgeToggle');

        if (ageToggleBtn) {
            ageToggleBtn.style.display = 'inline-flex';

            if (dofAgeMode === 'young') {
                ageToggleBtn.textContent = 'Switch To Adult';
            } else {
                ageToggleBtn.textContent = 'Switch To Baby';
            }
        }

        const loc = `../MSM-API/MSM-DOF/data/Monsters/${name}`;
        const rem = `https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@${currentHash}/MSM-DOF/data/Monsters/${name}`;

        let sources;

        if (dofAgeMode === 'young') {
            sources = [
                `${loc}/${name} (Young).png`,
                `${loc}/${name} (Adult).png`,
                `${loc}/${name}.png`,

                `${rem}/${name} (Young).png`,
                `${rem}/${name} (Adult).png`,
                `${rem}/${name}.png`
            ];
        } else {
            sources = [
                `${loc}/${name} (Adult).png`,
                `${loc}/${name} (Young).png`,
                `${loc}/${name}.png`,

                `${rem}/${name} (Adult).png`,
                `${rem}/${name} (Young).png`,
                `${rem}/${name}.png`
            ];
        }

        let idx = 0;

        monsterImage.onerror = () => {
            idx++;

            if (monsterImage.dataset.loadId == id) {
                if (idx < sources.length) {
                    monsterImage.src = sources[idx];
                } else {
                    monsterImage.onerror = null;
                    monsterImage.src = GRID_FALLBACK_IMAGE;
                    clean();
                }
            }
        };

        monsterImage.src = sources[0];

    } else {

        const ageToggleBtn = $('dofAgeToggle');
        if (ageToggleBtn) ageToggleBtn.style.display = 'none';

        monsterImage.onerror = () => {
            if (monsterImage.dataset.loadId == id) {
                if (retries > 0) {
                    setTimeout(() => loadMonsterImage(name, retries - 1), 300);
                } else {
                    monsterImage.onerror = null;
                    monsterImage.src = GRID_FALLBACK_IMAGE;
                    clean();
                }
            }
        };

        imageLoadTimeout = setTimeout(() => {
            if (monsterImage.dataset.loadId == id) {
                monsterImage.onerror = null;
                monsterImage.src = GRID_FALLBACK_IMAGE;
                clean();
            }
        }, 10000);

        try {
            currentMonster = MSM[name];
            MSM[name].loadImage("monsterImage");
        } catch {
            if (monsterImage.dataset.loadId == id) {
                monsterImage.onerror = null;
                monsterImage.src = GRID_FALLBACK_IMAGE;
                clean();
            }
        }
    }
}

(function loadMSMAPI() {
    const PRIMARY_API = "https://msm-api.pages.dev/msm.js";
    const FALLBACK_API = `https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@${currentHash}/MSM/dist/msm.js`;
    const LOCAL_API = "../MSM-API/MSM/dist/msm.js"; 

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.defer = true;
            script.onload = () => resolve(src);
            script.onerror = () => reject(src);
            document.head.appendChild(script);
        });
    }
    
    loadScript(LOCAL_API)
        .catch(() => {
            console.warn("Local API not found, trying Primary...");
            return loadScript(PRIMARY_API);
        })
        .catch(() => {
            console.warn("Primary failed, loading CDN fallback...");
            return loadScript(FALLBACK_API);
        })
        .then(src => { 
            console.log("✅ MSM API ready:", src);
            buildMonsterRegistry();
            updateRecentHistoryUI();
        })
        .catch(() => {
            console.error("🚨 All MSM API sources failed");
        });
})();

