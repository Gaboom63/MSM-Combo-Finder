// --- DOM HELPER ---
const $ = id => document.getElementById(id);
const toggleEls = (els, display) => els.forEach(el => { if(el) el.style.display = display; });

const firstInput = $('First_Monster'), secondInput = $('Second_Monster'), searchInput = $('Search_Monster');
const monsterImage = $('monsterImage'), blurMessage = $('blurMessage'), blurOverlay = $('blurOverlay');
const commonButton = $('common'), rareButton = $('rare'), epicButton = $('epic');
const statBox = $('statsBox'), inputContainer = $('inputContainer'), noMonsterImage = $('noMonsterImage');
const volumeButton = $('volume-button'), loadingSpinner = $('loadingSpinner');
const majorMinorButton = $('majorMinorButton'), tabsContainer = $('tabsContainer');
const costumeButton = $('costumeButton'), dynamicGrid = $('dynamicMonsterGrid');
const openBreedBtn = $('openBreedUI'), breedSplitView = $('breedSplitView'), closeBreedBtn = $('closeBreedUI');
const spotlight = $('monster-spotlight'), sideMenu = $('sideMenu'), iconContainer = $('iconContainer');
let sideMenuB = $('sideMenuButton');

const GRID_FALLBACK_IMAGE = "images/important/mammoticon.png";
let isSideMenuOpen = 0, disableEscape = false, disabledButton = false;
let currentRarity = "", monsterRegistry = [], validBreedingCombos = [], currentMonster = null, imageLoadTimeout;
let preloaderPaused = false, pauseTimeout = null;

async function buildMonsterRegistry() {
    try {
        const uniqueNames = new Set(), clean = n => n ? n.trim() : "", ignores = ["any", "invalid", "no combination", "unknown", "exclusive"];
        const res = await fetch("https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@main/data/JSONS/breedingCombos.json", { credentials: 'omit' });
        if (res.ok) {
            const data = await res.json();
            Object.entries(data).forEach(([key, val]) => {
                if (key.includes("+")) {
                    validBreedingCombos.push(key);
                    key.split("+").forEach(p => uniqueNames.add(clean(p)));
                } else uniqueNames.add(clean(key));
                if (Array.isArray(val)) val.forEach(child => uniqueNames.add(clean(child)));
            });
        }
        monsterRegistry = [...uniqueNames].filter(n => n && !ignores.some(i => n.toLowerCase().includes(i))).sort();
        console.log(`Registry ready: ${monsterRegistry.length} monsters loaded.`);
        updateMonsterOfTheDay();
    } catch (err) { console.error("Registry failed:", err); }
}

const findTrueName = input => input ? (monsterRegistry.find(k => k.toLowerCase() === input.trim().toLowerCase()) || input.trim()) : null;
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
    toggleEls([monsterImage, blurMessage, blurOverlay], 'block');
    requestAnimationFrame(() => blurOverlay.classList.add('active'));
    toggleEls([inputContainer, noMonsterImage, sideMenu], 'none');

    if (isBreedingResult) {
        toggleEls([commonButton, rareButton, epicButton, volumeButton], 'none');
        Object.assign(tabsContainer.style, { display: 'flex', justifyContent: 'center', gap: '10px' });
    } else {
        toggleEls([commonButton, volumeButton], 'inline-flex');
        toggleEls([rareButton, epicButton, tabsContainer], 'none');
    }
}

document.addEventListener('keydown', e => { 
    if (e.key === "Escape" && !disableEscape) {
        if (isSideMenuOpen) {
            if(typeof hideStatBox === 'function') hideStatBox();
            if($('inventorySection') && $('inventorySection').style.display === 'block' && typeof hideInventoryBox === 'function') hideInventoryBox();
            isSideMenuOpen = 0;
        } else if (breedSplitView && breedSplitView.style.display === 'flex') {
            closeSplitView();
        } else if (typeof menuOpen !== 'undefined' && menuOpen === 1) {
            // FIX: If the main side menu is open, use its proper closing function
            setupSideMenu();
        } else {
            reset();
        }
    }
});
async function costumeErrorHandling(name) {
    if (!isValidMonster(name)) return costumeButton.style.display = 'none';
    try {
        const costumes = await Promise.race([MSM[name].getCostumes(), new Promise(r => setTimeout(() => r([]), 3000))]);
        costumeButton.style.display = (!costumes || !costumes.length) ? 'none' : 'revert';
    } catch { costumeButton.style.display = 'none'; }
}

function reset() {
    // FIX 1: Restore to 'flex' instead of 'inline-block' so the UI doesn't clutter
    inputContainer.style.display = 'flex';
    breedSplitView.classList.remove('active'); breedSplitView.style.display = 'none';
    toggleEls([monsterImage, blurMessage], 'none');
    sideMenuB.style.display = 'flex';
    blurOverlay.classList.remove('active');
    setTimeout(() => { if (!firstInput.classList.contains('expanded-search')) blurOverlay.style.display = 'none'; }, 500);

    if (tabsContainer) { tabsContainer.innerHTML = ''; tabsContainer.style.display = 'none'; }
    [commonButton, rareButton, epicButton, statBox, noMonsterImage, volumeButton, costumeButton, majorMinorButton, loadingSpinner]
        .forEach(el => { if (el) { el.style.display = 'none'; el.classList?.remove('active-tab'); } });

    searchInput.value = firstInput.value = secondInput.value = currentRarity = "";
    document.querySelectorAll('.parent-img').forEach(img => { img.style.display = 'none'; img.src = ''; img.classList.remove('breeding-glow-left', 'breeding-glow-right'); });
    document.querySelectorAll('.empty-slot').forEach(slot => slot.style.display = 'flex');
    document.querySelectorAll('.split-half h2').forEach((h2, i) => { h2.classList.remove('active-label'); h2.textContent = i === 0 ? 'Parent 1' : 'Parent 2'; });
    
    const badge = document.querySelector('.fusion-badge');
    if (badge) { badge.classList.remove('breeding'); const i = badge.querySelector('i'); if (i) i.className = 'fas fa-plus'; }

    firstInput.style.opacity = secondInput.style.opacity = '1';
    spotlight.style.display = sideMenu.style.display = 'flex';
    closeExpandedInput(); checkInputGlows();
    
    // FIX 2: Ensure the mainStatBox is hidden when the UI resets
    toggleEls([$('statsSection'), $('inventorySection'), $('costSection'), $('mainStatBox')], 'none');
}

openBreedBtn.addEventListener('click', () => { breedSplitView.style.display = 'flex'; requestAnimationFrame(() => breedSplitView.classList.add('active')); });
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

        const q = inputEl.value.toLowerCase().trim();
        let m = [];

        if (inputEl === firstInput) {
            const vp = new Set(validBreedingCombos.flatMap(c => c.split('+').map(p => p.trim().toLowerCase())));
            m = monsterRegistry.filter(n => vp.has(n.toLowerCase()));
        } else if (inputEl === secondInput) {
            const v1 = firstInput.value.trim().toLowerCase();
            if (v1) m = monsterRegistry.filter(n => validBreedingCombos.some(c => { const p = c.split('+').map(x=>x.trim().toLowerCase()); return (p[0]===v1 && p[1]===n.toLowerCase()) || (p[1]===v1 && p[0]===n.toLowerCase()); }));
        } else {
            m = monsterRegistry.filter(n => incRarity || (!n.toLowerCase().startsWith("rare ") && !n.toLowerCase().startsWith("epic ")));
        }

        if (q) m = m.filter(n => n.toLowerCase().includes(q));
        if (!q && inputEl === searchInput) return targetGrid.innerHTML = '';

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

                if (lbl && imgE && ph) { lbl.classList.add('active-label'); lbl.textContent = match; ph.style.display = 'none'; imgE.style.display = 'block'; try { MSM[tName]?.loadImage(imgE.id); } catch { imgE.src = GRID_FALLBACK_IMAGE; } }

                if (inputEl === searchInput) {
                    currentRarity = /^rare/i.test(tName) ? "Rare" : /^epic/i.test(tName) ? "Epic" : "Common";
                    monsterImage.setAttribute('data-name', normalizeName(tName));
                    tabsContainer.innerHTML = ''; showMonsterUI(false); updateActiveTab(); loadMonsterImage(tName);
                    await costumeErrorHandling(tName); loadStats(tName);
                } else if (inputEl === firstInput || inputEl === secondInput) {
                    if (inputEl === firstInput && secondInput.value.trim()) {
                        const v2 = secondInput.value.trim().toLowerCase();
                        if (!validBreedingCombos.some(c => { const p = c.split('+').map(x=>x.trim().toLowerCase()); return (p[0]===tName.toLowerCase() && p[1]===v2) || (p[1]===tName.toLowerCase() && p[0]===v2); })) {
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
            try { MSM[findTrueName(match)]?.loadImage(safeId); } catch {}
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
    if (cIn === searchInput) blurOverlay.classList.remove('active');
    checkInputGlows();
    setTimeout(() => { Object.assign(cIn.style, { transition: '', position: '', top: '', left: '', width: '', margin: '' }); if (cIn === searchInput && !blurOverlay.classList.contains('active') && monsterImage.style.display !== 'revert') blurOverlay.style.display = 'none'; }, 500);
}

blurOverlay.addEventListener('click', closeExpandedInput);
const checkGlow = el => el.classList.toggle('ready-glow', el.value.trim() && !el.classList.contains('expanded-search'));
function checkInputGlows() { checkGlow(firstInput); checkGlow(secondInput); }

setupSmoothExpansionAndGrid(searchInput, dynamicGrid, true, 'full');
setupSmoothExpansionAndGrid(firstInput, grid1, false, 'local');
setupSmoothExpansionAndGrid(secondInput, grid2, false, 'local');

costumeButton.addEventListener("click", async () => { const n = await currentMonster?.nextCostume(); n ? monsterImage.src = n : alert("No costumes available!"); });
majorMinorButton.addEventListener("click", () => {
    const b = monsterImage.getAttribute('data-name'); if (!b) return;
    const nb = b.includes("(Major)") ? b.replace("(Major)", "(Minor)") : b.includes("(Minor)") ? b.replace("(Minor)", "(Major)") : "";
    if (nb) {
        let tn = findTrueName((currentRarity && currentRarity !== "Common" ? `${currentRarity} ` : "") + nb);
        if (typeof MSM !== 'undefined' && !MSM[tn]) { tn = findTrueName(nb); currentRarity = "Common"; updateActiveTab(); }
        if (!MSM[tn]) return;
        searchInput.value = tn; monsterImage.setAttribute('data-name', normalizeName(tn));
        showMonsterUI(false); loadMonsterImage(tn); setTimeout(() => { loadStats(tn); costumeErrorHandling(tn); }, 50);
    }
});

async function comboFinder() {
    const res = await MSM.twoMonsterCombo(`${firstInput.value} + ${secondInput.value}`);
    if (!res || !res.length || (typeof res[0] === 'string' && /Invalid|No combination/i.test(res[0]))) return showNoMonsterError();
    tabsContainer.innerHTML = '';
    if (res.length > 1) {
        res.sort((a, b) => b.length - a.length).forEach((m, i) => {
            const b = document.createElement('button'); b.className = `tab-button ${i === 0 ? 'active-tab' : ''}`; b.textContent = m;
            b.addEventListener('click', async () => { Array.from(tabsContainer.children).forEach(c => c.classList.remove('active-tab')); b.classList.add('active-tab'); loadFromTab(m); await costumeErrorHandling(m); });
            tabsContainer.appendChild(b);
        });
        showMonsterUI(true); loadFromTab(res[0]); await costumeErrorHandling(res[0]);
    } else {
        const tn = findTrueName(res[0]);
        currentRarity = /^rare/i.test(tn) ? "Rare" : /^epic/i.test(tn) ? "Epic" : "Common";
        searchInput.value = tn; monsterImage.setAttribute('data-name', normalizeName(tn));
        showMonsterUI(false); updateActiveTab(); loadMonsterImage(tn); loadStats(tn); await costumeErrorHandling(tn);
    }
}

function loadFromTab(name) {
    const tn = findTrueName(name); searchInput.value = tn;
    currentRarity = /^rare/i.test(tn) ? "Rare" : /^epic/i.test(tn) ? "Epic" : "Common";
    monsterImage.setAttribute('data-name', normalizeName(tn));
    showMonsterUI(true); loadMonsterImage(tn); loadStats(tn);
}

async function loadStats(name) {
    const tn = findTrueName(name || searchInput.value.trim());
    if (!tn || !isValidMonster(tn)) return showNoMonsterError();
    noMonsterImage.style.display = 'none'; statBox.style.display = 'flex';
    statBox.innerHTML = `<div class="stats-left-column"><div class="stats-bubble" style="min-height:120px;display:flex;justify-content:center;align-items:center;"><div class="spinner" style="width:30px;height:30px;position:relative;"></div></div><div class="stats-bubble" style="min-height:120px;display:flex;justify-content:center;align-items:center;"><div class="spinner" style="width:30px;height:30px;position:relative;"></div></div></div><div class="stats-bubble" id="breeding-combo-container" style="display:flex;justify-content:center;align-items:center;"><div class="combo-loader-frame"><i class="fas fa-circle-notch fa-spin"></i> Loading parent eggs...</div></div>`;
    
    try {
        const bn = normalizeName(tn), m = MSM[tn]; if (!m) throw new Error("Not found");
        const fetchWRetry = async (r = 3) => { for(let i=1;i<=r;i++) try { return await Promise.race([Promise.all([m.getBreedingTime(), m.getBreedingCombos?.()||[], m.getElementImages()]), new Promise((_, rj) => setTimeout(() => rj(new Error("Timeout")), 10000))]); } catch(e) { if(i===r) throw e; await new Promise(rs=>setTimeout(rs,100)); } };
        const [times, combos, elements] = await fetchWRetry(3);
        const hasTime = times?.Standard && times.Standard !== "Unknown", hasCombos = combos?.length > 0;

        if (!tabsContainer.children.length) { Promise.resolve(MSM[`Rare ${bn}`]).then(r => rareButton.style.display = r ? 'inline-flex' : 'none').catch(()=>{}); Promise.resolve(MSM[`Epic ${bn}`]).then(r => epicButton.style.display = r ? 'inline-flex' : 'none').catch(()=>{}); }
        majorMinorButton.textContent = bn.includes("(Major)") ? "Switch To Minor" : "Switch To Major"; majorMinorButton.style.display = bn.includes("(Major)") || bn.includes("(Minor)") ? "inline-flex" : "none";

        statBox.querySelector('.stats-left-column').innerHTML = `
            <div class="stats-bubble"><span class="label-text"><i class="fas fa-dna"></i> Monster Name</span><h3>${currentRarity || "Common"} ${toDisplayCase(bn)}</h3></div>
            <div class="stats-bubble"><span class="label-text"><i class="fas fa-atom"></i> Elements</span><div class="elements-display">${elements?.length ? elements.map(e => `<img src="${e.image}" class="element-icon" title="${e.name}">`).join("") : `<span style="color:rgba(255,255,255,0.5);font-size:0.8rem;">No Elements</span>`}</div></div>
            <div class="stats-bubble layout-hatch-time"><span class="label-text"><i class="fas fa-clock"></i> Hatch Time</span><div class="hatch-time-split-container"><div class="hatch-card default-tier"><div class="hatch-badge"><i class="fas fa-hourglass-start"></i></div><div class="hatch-data-labels"><span class="hatch-tier-title">Default</span><p class="hatch-time-string">${hasTime ? times.Standard : "Not Breedable"}</p></div></div>${hasTime ? `<div class="hatch-card enhanced-tier"><div class="hatch-badge"><i class="fas fa-bolt"></i></div><div class="hatch-data-labels"><span class="hatch-tier-title">Enhanced</span><p class="hatch-time-string">${times.Enhanced}</p></div></div>` : ''}</div></div>`;

        const bc = $('breeding-combo-container');
        if (!hasCombos) { if (bc) bc.innerHTML = `<span class="label-text"><i class="fas fa-heart"></i> Breeding Combo</span><p style="font-size:0.9rem;text-align:center;margin-top:15px;">• Special Combination Required</p>`; }
        else {
            (async () => { try {
                const rows = await Promise.all(combos.map(async c => {
                    const ps = c.split(/\s\+\s|\sand\s/i).map(p => p.trim());
                    if (ps.length >= 2) return `<div class="combo-row-item">${(await Promise.all(ps.map(async p => `<div class="combo-parent-chip"><img src="${(await MSM.get(p).catch(()=>null))?.eggUrl || GRID_FALLBACK_IMAGE}" alt="${p}" class="combo-egg-icon"><span class="combo-parent-name">${p}</span></div>`))).join('<div class="combo-operator-plus"><i class="fas fa-plus"></i></div>')}</div>`;
                    return `<div class="combo-row-item-raw">• ${c}</div>`;
                }));
                if ($('breeding-combo-container')) $('breeding-combo-container').innerHTML = `<span class="label-text"><i class="fas fa-heart"></i> Breeding Combo</span><div class="combo-matrix-display-box">${rows.join("")}</div>`;
            } catch (e) { console.error(e); } })();
        }
        try { if (typeof saveToHistory === 'function') saveToHistory(tn); } catch(e){}
    } catch { showNoMonsterError(); }
    dynamicSoundIcon(tn);
}

function showNoMonsterError() {
    toggleEls([monsterImage, blurMessage, loadingSpinner, commonButton, rareButton, epicButton, statBox, volumeButton, majorMinorButton, costumeButton], 'none');
    if (tabsContainer) { tabsContainer.innerHTML = ''; tabsContainer.style.display = 'none'; }
    noMonsterImage.style.display = 'revert'; noMonsterImage.src = `images/important/Nomonsterfound.png`;
}

async function playSound() { const r = searchInput.value.trim(); if(r) try { await MSM[findTrueName(r)]?.playSound(); } catch{} }
function haltPreloaderForUserAction() { preloaderPaused = true; clearTimeout(pauseTimeout); pauseTimeout = setTimeout(() => preloaderPaused = false, 5000); }
function requestPriority(n) { preloaderPaused = true; clearTimeout(pauseTimeout); pauseTimeout = setTimeout(() => preloaderPaused = false, 3000); loadMonsterImage(n); loadStats(n); costumeErrorHandling(n); }

function silentlyPreloadImages() {
    if (!window.MSM || !monsterRegistry?.length) return setTimeout(silentlyPreloadImages, 500);
    let i = 0;
    const n = async () => {
        if (preloaderPaused) return setTimeout(n, 1000);
        for(let j=0; j<3 && i<monsterRegistry.length; j++, i++) {
            try { const m = await MSM[findTrueName(monsterRegistry[i])]; if(m) { (await m.getElementImages?.()||[]).forEach(e => { if(e?.image) new Image().src = e.image; }); if(m.imageUrl) new Image().src = m.imageUrl; } } catch {}
        }
        if (i < monsterRegistry.length) setTimeout(() => window.requestIdleCallback ? requestIdleCallback(n) : n(), 250);
    }; setTimeout(n, 2000);
} silentlyPreloadImages();

function createParticles() {
    const c = $('particles-container'), s = ['♪', '♫', '♩', '♬', '✧', '⋆'];
    if (c) setInterval(() => { const e = document.createElement('div'); e.className = 'particle'; e.textContent = s[Math.floor(Math.random() * s.length)]; Object.assign(e.style, { left: Math.random() * 100 + 'vw', fontSize: (Math.random() * 15 + 15) + 'px', animationDuration: (Math.random() * 5 + 7) + 's' }); c.appendChild(e); setTimeout(() => e.remove(), 12000); }, 1500);
} createParticles();

$('randomComboBtn')?.addEventListener('click', () => {
    if (!validBreedingCombos.length) return; disableEscape = true;
    const [m1, m2] = validBreedingCombos[Math.floor(Math.random() * validBreedingCombos.length)].split("+").map(s => findTrueName(s.trim()) || toDisplayCase(s.trim()));
    firstInput.value = m1; secondInput.value = m2; breedSplitView.style.display = 'flex'; requestAnimationFrame(() => breedSplitView.classList.add('active'));
    
    const setSide = (n, num) => { const l = $(`grid${num}`).parentElement.querySelector('h2'), i = $(`parent-img-${num}`), s = $(`placeholder-${num}`); if(l&&i&&s) { l.textContent = n; l.classList.add('active-label'); i.style.display = 'block'; s.style.display = 'none'; try{MSM[findTrueName(n)]?.loadImage(i.id);}catch{} }};
    setSide(m1, 1); setSide(m2, 2);

    setTimeout(() => {
        const b = document.querySelector('.fusion-badge'), i = b.querySelector('i'); firstInput.style.opacity = secondInput.style.opacity = '0';
        i.className = 'fas fa-heart'; b.classList.add('breeding'); $('parent-img-1')?.classList.add('breeding-glow-left'); $('parent-img-2')?.classList.add('breeding-glow-right');
        setTimeout(async () => {
            closeSplitView(); try { await comboFinder(); } catch { showNoMonsterError(); }
            finally { setTimeout(() => { i.className = 'fas fa-plus'; b.classList.remove('breeding'); firstInput.style.opacity = secondInput.style.opacity = '1'; $('parent-img-1')?.classList.remove('breeding-glow-left'); $('parent-img-2')?.classList.remove('breeding-glow-right'); disableEscape = false; }, 500); }
        }, 1800);
    }, 1500);
});

function saveToHistory(n) {
    const tn = findTrueName(n); if (!tn) return;
    let h = (JSON.parse(localStorage.getItem('msmRecentHistory')) || []).filter(x => x !== tn);
    h.push(tn); while(h.length > 3) h.shift(); localStorage.setItem('msmRecentHistory', JSON.stringify(h)); updateRecentHistoryUI();
}

function updateRecentHistoryUI() {
    const g = $('recent-grid'); if (!g) return;
    const h = JSON.parse(localStorage.getItem('msmRecentHistory')) || [];
    if (!h.length) return g.innerHTML = '<span style="color:rgba(255,255,255,0.4);font-size:14px;font-style:italic;">No monsters discovered yet...</span>';
    g.innerHTML = '';
    h.forEach(n => {
        const i = document.createElement('img'); i.className = 'recent-avatar'; i.id = `history-img-${n.replace(/[^a-zA-Z0-9]/g, '')}`; i.title = n;
        i.onload = () => i.classList.add('loaded'); i.onerror = () => { i.onerror = null; i.src = GRID_FALLBACK_IMAGE; };
        i.addEventListener('click', () => { searchInput.value = n; const tn = findTrueName(n); currentRarity = /^rare/i.test(tn) ? "Rare" : /^epic/i.test(tn) ? "Epic" : "Common"; monsterImage.setAttribute('data-name', normalizeName(tn)); tabsContainer.innerHTML = ''; showMonsterUI(false); updateActiveTab(); loadMonsterImage(tn); costumeErrorHandling(tn); loadStats(tn); });
        g.appendChild(i); let a = 0; const load = () => { if(window.MSM?.[n]) try{MSM[n].loadImage(i.id);}catch{} else if(a++<25) setTimeout(load,200); }; load();
    });
}

function dynamicSoundIcon(n) { volumeButton.style.display = MSM[n]?.sounds[0] ? 'inline-flex' : 'none'; }

function updateMonsterOfTheDay() {
    if (!spotlight || !monsterRegistry.length) return;
    const d = new Date(), tn = findTrueName(monsterRegistry[((d.getFullYear()*10000)+((d.getMonth()+1)*100)+d.getDate()) % monsterRegistry.length]);
    if ($('spotlight-name')) $('spotlight-name').textContent = tn;
    if ($('spotlight-img')) {
        const i = $('spotlight-img'); i.id = `spotlight-img-${tn.replace(/[^a-zA-Z0-9]/g, '')}`; i.onerror = () => { i.onerror = null; i.src = GRID_FALLBACK_IMAGE; };
        let a = 0; const load = () => { if(window.MSM?.[tn]) try{MSM[tn].loadImage(i.id);}catch{} else if(a++<25) setTimeout(load,200); }; load();
    }
    spotlight.style.display = 'flex';
    spotlight.addEventListener('click', () => { searchInput.value = tn; currentRarity = /^rare/i.test(tn) ? "Rare" : /^epic/i.test(tn) ? "Epic" : "Common"; monsterImage.setAttribute('data-name', normalizeName(tn)); tabsContainer.innerHTML = ''; showMonsterUI(false); updateActiveTab(); loadMonsterImage(tn); costumeErrorHandling(tn); loadStats(tn); });
}

async function handleRaritySwitch(r) {
    const b = monsterImage.getAttribute('data-name'); if (!b) return;
    const tn = findTrueName(r === "Common" ? b : `${r} ${b}`);
    try { if (window.MSM && !await MSM[tn]) return; } catch { return; }
    searchInput.value = tn; currentRarity = r; showMonsterUI(false); updateActiveTab(); loadMonsterImage(tn); setTimeout(() => { loadStats(tn); costumeErrorHandling(tn); }, 50);
}
commonButton.addEventListener("click", () => handleRaritySwitch("Common")); rareButton.addEventListener("click", () => handleRaritySwitch("Rare")); epicButton.addEventListener("click", () => handleRaritySwitch("Epic"));

function isValidMonster(n) { return n ? monsterRegistry.some(x => x.toLowerCase() === n.toLowerCase().trim() || x.toLowerCase() === n.toLowerCase().replace(/\s*\((major|minor)\)/i, '').trim()) : false; }

function loadMonsterImage(name, retries = 2) {
    if (!name) return; haltPreloaderForUserAction();
    const id = Date.now(); monsterImage.dataset.loadId = id;
    monsterImage.classList.remove('animate-enter'); monsterImage.style.opacity = '0'; if (loadingSpinner) loadingSpinner.style.display = 'block';
    clearTimeout(imageLoadTimeout);

    if (!isValidMonster(name)) return showNoMonsterError();
    const clean = () => { if (monsterImage.dataset.loadId == id) { if(loadingSpinner) loadingSpinner.style.display = 'none'; clearTimeout(imageLoadTimeout); monsterImage.style.opacity = '1'; monsterImage.classList.add('animate-enter'); }};
    monsterImage.onload = clean;
    monsterImage.onerror = () => { if (monsterImage.dataset.loadId == id) { if (retries > 0) setTimeout(() => loadMonsterImage(name, retries - 1), 300); else { monsterImage.onerror = null; monsterImage.src = GRID_FALLBACK_IMAGE; clean(); }}};
    imageLoadTimeout = setTimeout(() => { if (monsterImage.dataset.loadId == id) { monsterImage.onerror = null; monsterImage.src = GRID_FALLBACK_IMAGE; clean(); }}, 10000);
    try { currentMonster = MSM[name]; MSM[name].loadImage("monsterImage"); } catch { if (monsterImage.dataset.loadId == id) { monsterImage.onerror = null; monsterImage.src = GRID_FALLBACK_IMAGE; clean(); }}
}

(function loadMSMAPI() {
    const load = s => new Promise((rs, rj) => { const sc = document.createElement("script"); sc.src = s; sc.defer = true; sc.onload = () => rs(s); sc.onerror = () => rj(s); document.head.appendChild(sc); });
    load("https://msm-api.pages.dev/msm.js").catch(() => load("https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@main/dist/msm.js")).then(s => { console.log("MSM API ready:", s); buildMonsterRegistry(); updateRecentHistoryUI(); }).catch(() => console.error("API failed"));
})();