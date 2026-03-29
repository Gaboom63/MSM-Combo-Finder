const firstInput = document.getElementById('First_Monster');
const secondInput = document.getElementById('Second_Monster');
const searchInput = document.getElementById('Search_Monster');
const monsterImage = document.getElementById('monsterImage');
const blurMessage = document.getElementById('blurMessage');
const blurOverlay = document.getElementById('blurOverlay');
const commonButton = document.getElementById('common');
const rareButton = document.getElementById('rare');
const epicButton = document.getElementById('epic');
const statBox = document.getElementById('statsBox');
const inputContainer = document.getElementById('inputContainer');
const noMonsterImage = document.getElementById('noMonsterImage');
const volumeButton = document.getElementById('volume-button');
const loadingSpinner = document.getElementById('loadingSpinner');
const majorMinorButton = document.getElementById('majorMinorButton');
const tabsContainer = document.getElementById('tabsContainer');
const costumeButton = document.getElementById('costumeButton');
const dynamicGrid = document.getElementById('dynamicMonsterGrid');
const openBreedBtn = document.getElementById('openBreedUI');
const breedSplitView = document.getElementById('breedSplitView');
const closeBreedBtn = document.getElementById('closeBreedUI');
const GRID_FALLBACK_IMAGE = "images/important/mammoticon.png";

let currentRarity = "";
let monsterRegistry = [];
let validBreedingCombos = []; // NEW: Stores guaranteed valid combos!
let currentMonster = null;

// --- 1. BUILD REGISTRY ---
async function buildMonsterRegistry() {
    const breedingUrl = "https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@main/data/monsters/Extras/breedingCombos.json";
    try {
        const response = await fetch(breedingUrl, { credentials: 'omit' });
        const data = await response.json();
        const uniqueNames = new Set();
        const clean = (name) => name ? name.trim() : "";
        const ignoreList = ["any", "invalid", "no combination", "unknown"];

        Object.keys(data).forEach(key => {
            if (key.includes("+")) {
                validBreedingCombos.push(key); // NEW: Save the exact valid combo string
                const parents = key.split("+");
                parents.forEach(p => uniqueNames.add(clean(p)));
            } else {
                uniqueNames.add(clean(key));
            }
            const results = data[key];
            if (Array.isArray(results)) {
                results.forEach(r => uniqueNames.add(clean(r)));
            }
        });

        monsterRegistry = Array.from(uniqueNames).filter(n => {
            const lowerName = n.toLowerCase();
            return n !== "" && !ignoreList.some(ignoreWord => lowerName.includes(ignoreWord));
        }).sort();

        console.log(`Registry ready: ${monsterRegistry.length} monsters.`);

        // NEW: Trigger the Monster of the Day now that the registry is built!
        updateMonsterOfTheDay();

    } catch (err) {
        console.error("Registry failed:", err);
    }
}

buildMonsterRegistry();

// --- 2. CORE FUNCTIONS ---
function findTrueName(input) {
    if (!input) return null;
    const cleanInput = input.trim().toLowerCase();
    if (typeof MSM !== 'undefined') {
        const trueKey = Object.keys(MSM).find(key => key.toLowerCase() === cleanInput);
        if (trueKey) return trueKey;
    }
    const registryKey = monsterRegistry.find(key => key.toLowerCase() === cleanInput);
    if (registryKey) return registryKey;
    return input.trim();
}

function toDisplayCase(str) {
    if (!str) return "";
    return str.toLowerCase().replace(/(?:^|[\s\-\(\)])[a-z]/g, (letter) => letter.toUpperCase());
}

function normalizeName(name) {
    if (!name) return "";
    return name.replace(/^(common|rare|epic|legendary)\s+/i, "").trim();
}

function updateActiveTab() {
    if (tabsContainer.children.length === 0) {
        [commonButton, rareButton, epicButton].forEach(btn => btn.classList.remove('active-tab'));
        if (currentRarity === "Common") commonButton.classList.add('active-tab');
        else if (currentRarity === "Rare") rareButton.classList.add('active-tab');
        else if (currentRarity === "Epic") epicButton.classList.add('active-tab');
    }
}

function loadMonsterImage(name) {
    if (!name) return;
    monsterImage.classList.remove('animate-enter');
    monsterImage.style.opacity = '0';
    if (loadingSpinner) loadingSpinner.style.display = 'block';

    const monster = MSM[name];
    monsterImage.onload = () => {
        if (loadingSpinner) loadingSpinner.style.display = 'none';
        monsterImage.style.opacity = '1';
        monsterImage.classList.add('animate-enter');
    };
    currentMonster = monster;
    try { MSM[name].loadImage("monsterImage"); }
    catch (e) { if (loadingSpinner) loadingSpinner.style.display = 'none'; }
}

function showMonsterUI(isBreedingResult = false) {
    monsterImage.style.display = 'block';
    blurMessage.style.display = 'block';
    blurOverlay.style.display = 'block';
    requestAnimationFrame(() => blurOverlay.classList.add('active'));

    inputContainer.style.display = 'none';
    noMonsterImage.style.display = 'none';

    if (isBreedingResult) {
        commonButton.style.display = 'none';
        rareButton.style.display = 'none';
        epicButton.style.display = 'none';
        volumeButton.style.display = 'none';

        tabsContainer.style.display = 'flex';
        tabsContainer.style.justifyContent = 'center';
        tabsContainer.style.gap = '10px';
    } else {
        commonButton.style.display = 'inline-flex';
        rareButton.style.display = 'inline-flex';
        epicButton.style.display = 'inline-flex';
        volumeButton.style.display = 'inline-flex';

        tabsContainer.style.display = 'none';
    }
}

document.addEventListener('keydown', e => { if (e.key === "Escape") reset(); });

async function costumeErrorHandling(name) {
    const costumes = await MSM[name].getCostumes();
    if (!costumes || costumes.length === 0) costumeButton.style.display = 'none';
    else costumeButton.style.display = 'revert';
}

function reset() {
    inputContainer.style.display = 'block';
    monsterImage.style.display = 'none';
    blurMessage.style.display = 'none';

    blurOverlay.classList.remove('active');
    setTimeout(() => { if (!firstInput.classList.contains('expanded-search')) blurOverlay.style.display = 'none'; }, 500);

    if (tabsContainer) { tabsContainer.innerHTML = ''; tabsContainer.style.display = 'none'; }

    [commonButton, rareButton, epicButton, statBox, noMonsterImage, volumeButton, costumeButton, majorMinorButton].forEach(el => {
        if (el) el.style.display = 'none';
        if (el.classList) el.classList.remove('active-tab');
    });

    if (loadingSpinner) loadingSpinner.style.display = 'none';

    searchInput.value = ""; firstInput.value = ""; secondInput.value = ""; currentRarity = "";

    // Reset UI Refresh Splity View State
    document.querySelectorAll('.parent-img').forEach(img => {
        img.style.display = 'none';
        img.src = '';
        img.classList.remove('breeding-glow-left', 'breeding-glow-right');
    });
    document.querySelectorAll('.empty-slot').forEach(slot => { slot.style.display = 'flex'; });
    document.querySelectorAll('.split-half h2').forEach((h2, index) => {
        h2.classList.remove('active-label');
        h2.textContent = index === 0 ? 'Parent 1' : 'Parent 2'; // Restores default text
    });
    // Stop the breeding animation if ESC is pressed midway
    const badge = document.querySelector('.fusion-badge');
    if (badge) {
        badge.classList.remove('breeding');
        const icon = badge.querySelector('i');
        if (icon) icon.className = 'fas fa-plus';
    }
    firstInput.style.opacity = '1';
    secondInput.style.opacity = '1';

    closeExpandedInput();
    checkInputGlows(); // <-- FIX: Clears the green glows immediately on reset
}

// --- STEP 2: Split View Logic ---
openBreedBtn.addEventListener('click', () => {
    breedSplitView.style.display = 'flex';
    requestAnimationFrame(() => breedSplitView.classList.add('active'));
});

closeBreedBtn.addEventListener('click', closeSplitView);

function closeSplitView() {
    closeExpandedInput();
    breedSplitView.classList.remove('active');
    setTimeout(() => { breedSplitView.style.display = 'none'; }, 400);
}

// --- 3. UI REFRESH: Smooth Expansion & Dynamic API Grid ---
let activeInput = null;
let activeOriginalRect = null;
let activeGrid = null;
const grid1 = document.getElementById('grid1');
const grid2 = document.getElementById('grid2');

function setupSmoothExpansionAndGrid(inputElement, targetGrid, includeRarities = true, animMode = 'full') {
    let selectedIndex = -1;

    // --- 1. Focus Event: Handle UI Expansion ---
    inputElement.addEventListener('focus', () => {
        if (activeInput && activeInput !== inputElement) closeExpandedInput();

        activeInput = inputElement;
        activeGrid = targetGrid;

        // Hide the Parent text and egg while actively searching
        const splitHalf = inputElement.closest('.split-half');
        if (splitHalf) splitHalf.classList.add('searching');

        activeOriginalRect = inputElement.getBoundingClientRect();

        // Use Object.assign for cleaner multi-style application
        Object.assign(inputElement.style, {
            transition: 'none',
            position: 'fixed',
            top: `${activeOriginalRect.top}px`,
            left: `${activeOriginalRect.left}px`,
            width: `${activeOriginalRect.width}px`,
            margin: '0'
        });

        void inputElement.offsetWidth; // Force DOM reflow

        inputElement.style.transition = 'all 0.5s cubic-bezier(0.25, 1, 0.3, 1)';

        let targetWidth, targetLeft, targetTop = window.innerHeight * 0.12;

        if (animMode === 'full') {
            targetWidth = Math.min(window.innerWidth * 0.9, 1300);
            targetLeft = (window.innerWidth - targetWidth) / 2;
            blurOverlay.style.display = 'block';
            requestAnimationFrame(() => blurOverlay.classList.add('active'));
        } else {
            const parentRect = inputElement.parentElement.getBoundingClientRect();
            targetWidth = Math.min(parentRect.width * 0.85, 600);
            targetLeft = parentRect.left + (parentRect.width - targetWidth) / 2;
        }

        Object.assign(inputElement.style, {
            top: `${targetTop}px`,
            left: `${targetLeft}px`,
            width: `${targetWidth}px`
        });

        inputElement.classList.add('expanded-search');
        checkInputGlows(); // Turn off the green glow while expanded

        targetGrid.classList.add('active');
        inputElement.dispatchEvent(new Event('input'));
    });

    // --- 2. Input Event: Handle Search & Grid Population ---
    inputElement.addEventListener('input', () => {
        if (activeInput !== inputElement) return;
        selectedIndex = -1;

        const label = inputElement.parentElement.querySelector('h2');
        const imgElement = inputElement.parentElement.querySelector('.parent-img');
        const placeholder = inputElement.parentElement.querySelector('.empty-slot');

        if (label && imgElement && placeholder) {
            label.classList.remove('active-label');
            label.textContent = inputElement.id === 'First_Monster' ? 'Parent 1' : 'Parent 2';
        }

        const query = inputElement.value.toLowerCase().trim();
        if (!query) {
            targetGrid.innerHTML = '';
            return;
        }

        const matches = monsterRegistry.filter(name => {
            const lowerName = name.toLowerCase();
            if (!lowerName.includes(query)) return false;
            if (!includeRarities && (lowerName.startsWith("rare ") || lowerName.startsWith("epic "))) return false;
            return true;
        });

        const topMatches = matches.slice(0, 12);
        targetGrid.innerHTML = '';

        topMatches.forEach(match => {
            const item = document.createElement('div');
            item.className = 'grid-monster-item';

            const safeId = `grid-img-${match.replace(/[^a-zA-Z0-9]/g, '')}`;

            const img = document.createElement('img');
            img.id = safeId;
            img.onerror = () => { img.onerror = null; img.src = GRID_FALLBACK_IMAGE; };

            const labelTxt = document.createElement('span');
            labelTxt.textContent = match;

            // Use .append() to attach multiple elements at once
            item.append(img, labelTxt);

            item.addEventListener('click', async () => {
                inputElement.value = match;
                closeExpandedInput();
                checkInputGlows();

                const trueName = findTrueName(match);

                if (label && imgElement && placeholder) {
                    label.classList.add('active-label');
                    label.textContent = match;
                    placeholder.style.display = 'none';
                    imgElement.style.display = 'block';
                    try {
                        if (typeof MSM !== 'undefined' && MSM[trueName]) MSM[trueName].loadImage(imgElement.id);
                    } catch (e) {
                        imgElement.src = GRID_FALLBACK_IMAGE;
                    }
                }

                if (inputElement === searchInput) {
                    if (/^rare/i.test(trueName)) currentRarity = "Rare";
                    else if (/^epic/i.test(trueName)) currentRarity = "Epic";
                    else currentRarity = "Common";

                    monsterImage.setAttribute('data-name', normalizeName(trueName));
                    tabsContainer.innerHTML = '';
                    showMonsterUI(false);
                    updateActiveTab();
                    loadMonsterImage(trueName);

                    // Correctly awaited costume handling!
                    await costumeErrorHandling(trueName);
                    loadStats(trueName);
                }
                else if (inputElement === firstInput || inputElement === secondInput) {
                    if (firstInput.value.trim() !== "" && secondInput.value.trim() !== "") {
                        // Extracted this massive block into a helper function below
                        triggerBreedingAnimation();
                    }
                }
            });
            targetGrid.appendChild(item);

            try {
                const trueName = findTrueName(match);
                if (typeof MSM !== 'undefined' && MSM[trueName]) MSM[trueName].loadImage(safeId);
            } catch (e) { img.onerror(); }
        });
    });

    // --- 3. Keydown Event: Handle Keyboard Navigation ---
    inputElement.addEventListener('keydown', (e) => {
        const items = targetGrid.querySelectorAll('.grid-monster-item');
        if (items.length === 0) return;

        // Cleaned up the conditional logic for readability
        if (['ArrowRight', 'ArrowDown'].includes(e.key)) {
            e.preventDefault();
            selectedIndex = (selectedIndex + 1) % items.length;
            updateSelection(items);
        } else if (['ArrowLeft', 'ArrowUp'].includes(e.key)) {
            e.preventDefault();
            selectedIndex = (selectedIndex - 1 + items.length) % items.length;
            updateSelection(items);
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            e.preventDefault();
            items[selectedIndex].click();
        }
    });

    function updateSelection(items) {
        items.forEach(item => item.classList.remove('keyboard-selected'));
        if (selectedIndex >= 0) {
            items[selectedIndex].classList.add('keyboard-selected');
            items[selectedIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }
}

// --- NEW HELPER FUNCTION ---
function triggerBreedingAnimation() {
    const badge = document.querySelector('.fusion-badge');
    const badgeIcon = badge.querySelector('i');
    const img1 = document.getElementById('parent-img-1');
    const img2 = document.getElementById('parent-img-2');

    firstInput.style.opacity = '0';
    secondInput.style.opacity = '0';

    if (grid1) grid1.classList.remove('active');
    if (grid2) grid2.classList.remove('active');

    badgeIcon.className = 'fas fa-heart';
    badge.classList.add('breeding');

    if (img1) img1.classList.add('breeding-glow-left');
    if (img2) img2.classList.add('breeding-glow-right');

    setTimeout(async () => {
        closeSplitView();
        await comboFinder();
        setTimeout(() => {
            badgeIcon.className = 'fas fa-plus';
            badge.classList.remove('breeding');
            firstInput.style.opacity = '1';
            secondInput.style.opacity = '1';

            if (img1) img1.classList.remove('breeding-glow-left');
            if (img2) img2.classList.remove('breeding-glow-right');
        }, 500);
    }, 1800);
}

function closeExpandedInput() {
    if (!activeInput) return;
    const currentInput = activeInput; const currentGrid = activeGrid;
    activeInput = null; activeGrid = null;
    currentInput.blur();

    if (currentGrid) currentGrid.classList.remove('active');
    currentInput.classList.remove('expanded-search');

    // --- FIX: Bring back the Parent text/egg/image when the search closes ---
    const splitHalf = currentInput.closest('.split-half');
    if (splitHalf) splitHalf.classList.remove('searching');
    // ------------------------------------------------------------------------

    if (activeOriginalRect) {
        currentInput.style.top = activeOriginalRect.top + 'px';
        currentInput.style.left = activeOriginalRect.left + 'px';
        currentInput.style.width = activeOriginalRect.width + 'px';
    }

    if (currentInput === searchInput) blurOverlay.classList.remove('active');

    checkInputGlows(); // <-- FIX: Turn the green glow back on if they successfully picked one

    setTimeout(() => {
        currentInput.style.transition = ''; currentInput.style.position = ''; currentInput.style.top = ''; currentInput.style.left = ''; currentInput.style.width = ''; currentInput.style.margin = '';
        if (currentInput === searchInput && !blurOverlay.classList.contains('active') && monsterImage.style.display !== 'revert') blurOverlay.style.display = 'none';
    }, 500);
}

blurOverlay.addEventListener('click', closeExpandedInput);

function checkInputGlows() {
    // FIX: Ensure it never glows while it's actively expanded/being typed in
    if (firstInput.value.trim() !== "" && !firstInput.classList.contains('expanded-search')) {
        firstInput.classList.add('ready-glow');
    } else {
        firstInput.classList.remove('ready-glow');
    }

    if (secondInput.value.trim() !== "" && !secondInput.classList.contains('expanded-search')) {
        secondInput.classList.add('ready-glow');
    } else {
        secondInput.classList.remove('ready-glow');
    }
}

setupSmoothExpansionAndGrid(searchInput, dynamicGrid, true, 'full');
setupSmoothExpansionAndGrid(firstInput, grid1, false, 'local');
setupSmoothExpansionAndGrid(secondInput, grid2, false, 'local');

commonButton.addEventListener("click", () => {
    const base = monsterImage.getAttribute('data-name'); if (!base) return;
    const trueName = findTrueName(base); searchInput.value = trueName; currentRarity = "Common";
    updateActiveTab(); costumeErrorHandling(trueName); loadMonsterImage(trueName); loadStats(trueName);
});

rareButton.addEventListener("click", async () => {
    const base = monsterImage.getAttribute('data-name'); if (!base) return;
    const name = `Rare ${base}`; const trueName = findTrueName(name);

    searchInput.value = trueName; currentRarity = "Rare";
    updateActiveTab();

    // Add 'await' to ensure the button only appears if costumes exist
    await costumeErrorHandling(trueName);
    loadMonsterImage(trueName);
    loadStats(trueName);
});

epicButton.addEventListener("click", () => {
    const base = monsterImage.getAttribute('data-name'); if (!base) return;
    const name = `Epic ${base}`; const trueName = findTrueName(name);
    searchInput.value = trueName; currentRarity = "Epic";
    updateActiveTab(); costumeErrorHandling(trueName); loadMonsterImage(trueName); loadStats(trueName);
});

costumeButton.addEventListener("click", async () => {
    if (!currentMonster) return;
    const nextCostumeUrl = await currentMonster.nextCostume();
    if (!nextCostumeUrl) { alert("No costumes available for this monster!"); return; }
    monsterImage.src = nextCostumeUrl;
});

majorMinorButton.addEventListener("click", () => {
    const currentName = monsterImage.getAttribute('data-name'); if (!currentName) return;
    let newName = "";
    if (currentName.includes("(Major)")) newName = currentName.replace("(Major)", "(Minor)");
    else if (currentName.includes("(Minor)")) newName = currentName.replace("(Minor)", "(Major)");
    if (newName) {
        const trueName = findTrueName(newName); searchInput.value = trueName; monsterImage.setAttribute('data-name', trueName);
        loadMonsterImage(trueName); loadStats(trueName);
    }
});

// --- COMBO FINDER ---
async function comboFinder() {
    const combo = `${firstInput.value} + ${secondInput.value}`;
    const result = await MSM.twoMonsterCombo(combo);

    if (!result || result.length === 0 || result[0].includes("Invalid") || result[0].includes("No combination")) {
        showMonsterUI(false);
        showNoMonsterError();
        return;
    }

    tabsContainer.innerHTML = '';

    if (result.length > 1) {
        result.sort((a, b) => b.length - a.length);

        result.forEach((monsterName, index) => {
            const btn = document.createElement('button');
            btn.className = 'tab-button';
            btn.textContent = monsterName;

            // FIX: Added async/await to the click listener
            btn.addEventListener('click', async () => {
                Array.from(tabsContainer.children).forEach(c => c.classList.remove('active-tab'));
                btn.classList.add('active-tab');
                loadFromTab(monsterName);
                await costumeErrorHandling(monsterName);
            });

            if (index === 0) btn.classList.add('active-tab');
            tabsContainer.appendChild(btn);
        });

        showMonsterUI(true);
        loadFromTab(result[0]);

        // FIX: Only check the costume for the active (first) tab on initial load
        await costumeErrorHandling(result[0]);

    } else {
        const name = result[0];
        const trueName = findTrueName(name);

        if (/^rare/i.test(trueName)) currentRarity = "Rare";
        else if (/^epic/i.test(trueName)) currentRarity = "Epic";
        else currentRarity = "Common";

        searchInput.value = trueName;

        monsterImage.setAttribute('data-name', normalizeName(trueName));
        showMonsterUI(false);
        updateActiveTab();
        loadMonsterImage(trueName);
        loadStats(trueName);
        await costumeErrorHandling(trueName);
    }
}

function loadFromTab(monsterName) {
    const trueName = findTrueName(monsterName); searchInput.value = trueName;
    if (/^rare/i.test(trueName)) currentRarity = "Rare"; else if (/^epic/i.test(trueName)) currentRarity = "Epic"; else currentRarity = "Common";
    monsterImage.setAttribute('data-name', normalizeName(trueName)); loadMonsterImage(trueName); loadStats(trueName);
}

// --- UPDATED STATS: Now with Elemental Icons ---
async function loadStats(forceName) {
    const rawInput = forceName || searchInput.value.trim();
    if (!rawInput) return;
    const trueName = findTrueName(rawInput);

    // 1. Show the box immediately with a loading state
    statBox.style.display = 'flex';
    statBox.innerHTML = `
        <div class="stats-bubble" style="display: flex; justify-content: center; align-items: center; min-height: 150px; width: 100%;">
            <div class="spinner" style="display: block; position: relative; top: auto; left: auto; transform: none; width: 35px; height: 35px;"></div>
        </div>`;

    try {
        const baseName = normalizeName(trueName);
        const monster = await MSM[trueName];
        if (!monster) throw new Error("Monster not found");

        // Fetch all data in parallel
        const [times, combos, elements] = await Promise.all([
            monster.getBreedingTime(),
            monster.getBreedingCombos(),
            monster.getElementImages()
        ]);

        if (baseName.includes("(Major)")) {
            majorMinorButton.textContent = "Switch To Minor";
            majorMinorButton.style.display = "inline-flex";
        } else if (baseName.includes("(Minor)")) {
            majorMinorButton.textContent = "Switch To Major";
            majorMinorButton.style.display = "inline-flex";
        } else {
            majorMinorButton.style.display = "none";
        }

        const displayName = toDisplayCase(baseName);

        // 2. Build the UI Pieces
        const nameHtml = `<div class="stats-bubble"><span class="label-text"><i class="fas fa-dna"></i> Monster Name </span><h3>${currentRarity || "Common"} ${displayName}</h3></div>`;

        const elementIcons = elements.length > 0
            ? elements.map(el => `<img src="${el.image}" class="element-icon" title="${el.name}">`).join("")
            : `<span style="color: rgba(255,255,255,0.5); font-size: 0.8rem;">No Elements</span>`;

        const elementsHtml = `
            <div class="stats-bubble">
                <span class="label-text"><i class="fas fa-atom"></i> Elements </span>
                <div class="elements-display">${elementIcons}</div>
            </div>`;

        const timeContent = (times.breedingTime === "Unknown") ? "Not Breedable" : `Default: <b>${times.breedingTime}</b><br>Enhanced: <b>${times.enhancedTime}</b>`;
        const timeHtml = `<div class="stats-bubble"><span class="label-text"><i class="fas fa-clock"></i> Hatch Time</span><p style="margin:0; text-align: center;">${timeContent}</p></div>`;

        const comboList = (!combos || combos.length === 0) ? "• Special Combination Required" : combos.map(c => `• ${c}`).join("<br>");
        const comboHtml = `<div class="stats-bubble"><span class="label-text"><i class="fas fa-heart"></i> Breeding Combo</span><p style="margin:0; font-size: 0.9rem;">${comboList}</p></div>`;

        // 3. Final Render (Replacing the spinner)
        statBox.innerHTML = nameHtml + elementsHtml + timeHtml + comboHtml;

        if (typeof saveToHistory === 'function') saveToHistory(trueName);
    } catch (err) {
        console.error("Stats failed:", err);
        showNoMonsterError();
    }
}

function showNoMonsterError() {
    monsterImage.style.display = 'none'; if (loadingSpinner) loadingSpinner.style.display = 'none';
    if (tabsContainer) { tabsContainer.innerHTML = ''; tabsContainer.style.display = 'none'; }
    [commonButton, rareButton, epicButton, statBox, volumeButton, majorMinorButton].forEach(el => { if (el) el.style.display = 'none'; });
    noMonsterImage.style.display = 'revert'; noMonsterImage.src = `images/important/Nomonsterfound.png`;
}

async function playSound() {
    const raw = searchInput.value.trim(); if (!raw) return;
    try { const trueName = findTrueName(raw); await MSM[trueName].playSound(); }
    catch (err) { console.warn("Sound failed:", err); }
}

// --- POLITE & EFFICIENT PRELOADER ---

let preloaderPaused = false;
let pauseTimeout = null;

function requestPriority(trueName) {
    // 1. Pause the background preloader
    preloaderPaused = true;
    if (pauseTimeout) clearTimeout(pauseTimeout);
    
    // 2. Set a timeout to resume background preloading after 3 seconds of inactivity
    pauseTimeout = setTimeout(() => { preloaderPaused = false; }, 3000);

    // 3. Immediately trigger the UI updates for the requested monster
    loadMonsterImage(trueName);
    loadStats(trueName);
    costumeErrorHandling(trueName);
}

function silentlyPreloadImages() {
    if (typeof MSM === 'undefined' || monsterRegistry.length === 0) { 
        setTimeout(silentlyPreloadImages, 500); 
        return; 
    }

    let index = 0;
    function loadNextBatch() {
        // SKIP BATCH if the user is currently searching/breeding
        if (preloaderPaused) {
            setTimeout(loadNextBatch, 1000); 
            return;
        }

        const batchSize = 3; 
        for (let i = 0; i < batchSize && index < monsterRegistry.length; i++, index++) {
            const trueName = findTrueName(monsterRegistry[index]);
            if (trueName) { 
                try { 
                    const monsterData = MSM[trueName]; 
                    if (monsterData && monsterData.getElementImages) {
                        monsterData.getElementImages().then(elements => {
                            // FIX: Added '&& Array.isArray(elements)' to prevent the "Broken" script error
                            if (elements && Array.isArray(elements)) {
                                elements.forEach(el => {
                                    if (el.image) { const img = new Image(); img.src = el.image; }
                                });
                            }
                        }).catch(e => console.warn("Element preload failed", e));
                    }
                } catch(e){} 
            }
        }
        
        if (index < monsterRegistry.length) {
            setTimeout(() => {
                if ('requestIdleCallback' in window) requestIdleCallback(loadNextBatch);
                else loadNextBatch();
            }, 250); 
        }
    }
    setTimeout(loadNextBatch, 2000); 
}

silentlyPreloadImages();
// =========================================
// NEW FEATURES: Particles, Random & History
// =========================================

// --- FEATURE 1: Ambient Musical Particles ---
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    const symbols = ['♪', '♫', '♩', '♬', '✧', '⋆'];

    setInterval(() => {
        const el = document.createElement('div');
        el.className = 'particle';
        el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        el.style.left = Math.random() * 100 + 'vw';
        el.style.fontSize = (Math.random() * 15 + 15) + 'px';
        el.style.animationDuration = (Math.random() * 5 + 7) + 's';

        container.appendChild(el);
        setTimeout(() => el.remove(), 12000);
    }, 1500);
}
createParticles();

// --- FEATURE 2: Random Combo "Surprise Me" (Valid Combos Only) ---
const randomComboBtn = document.getElementById('randomComboBtn');
if (randomComboBtn) {
    randomComboBtn.addEventListener('click', () => {
        if (validBreedingCombos.length === 0) return;

        // 1. Pick a guaranteed VALID combo string from the API database
        const randomComboStr = validBreedingCombos[Math.floor(Math.random() * validBreedingCombos.length)];

        // 2. Split it into Parent 1 and Parent 2, and capitalize them nicely
        const [raw1, raw2] = randomComboStr.split("+").map(s => s.trim());
        const m1 = findTrueName(raw1) || toDisplayCase(raw1);
        const m2 = findTrueName(raw2) || toDisplayCase(raw2);

        firstInput.value = m1;
        secondInput.value = m2;

        breedSplitView.style.display = 'flex';
        requestAnimationFrame(() => breedSplitView.classList.add('active'));

        const img1 = document.getElementById('parent-img-1');
        const img2 = document.getElementById('parent-img-2');
        const label1 = document.getElementById('grid1').parentElement.querySelector('h2');
        const label2 = document.getElementById('grid2').parentElement.querySelector('h2');
        const slot1 = document.querySelector('#placeholder-1');
        const slot2 = document.querySelector('#placeholder-2');

        if (label1 && img1 && slot1) { label1.textContent = m1; label1.classList.add('active-label'); img1.style.display = 'block'; slot1.style.display = 'none'; try { MSM[findTrueName(m1)].loadImage(img1.id); } catch (e) { } }
        if (label2 && img2 && slot2) { label2.textContent = m2; label2.classList.add('active-label'); img2.style.display = 'block'; slot2.style.display = 'none'; try { MSM[findTrueName(m2)].loadImage(img2.id); } catch (e) { } }

        setTimeout(() => {
            const badge = document.querySelector('.fusion-badge');
            const badgeIcon = badge.querySelector('i');
            firstInput.style.opacity = '0'; secondInput.style.opacity = '0';
            badgeIcon.className = 'fas fa-heart'; badge.classList.add('breeding');
            if (img1) img1.classList.add('breeding-glow-left');
            if (img2) img2.classList.add('breeding-glow-right');

            setTimeout(async () => {
                closeSplitView();
                await comboFinder();
                setTimeout(() => {
                    badgeIcon.className = 'fas fa-plus'; badge.classList.remove('breeding');
                    firstInput.style.opacity = '1'; secondInput.style.opacity = '1';
                    if (img1) img1.classList.remove('breeding-glow-left');
                    if (img2) img2.classList.remove('breeding-glow-right');
                }, 500);
            }, 1800);
        }, 1500);
    });
}

// --- FEATURE 3: Recent Discoveries History (Max 3, Right-to-Left) ---
function saveToHistory(monsterName) {
    if (!monsterName) return;
    const trueName = findTrueName(monsterName);

    // THE FIX: We removed the rule that blocked "Rare" and "Epic" monsters!
    if (!trueName) return;

    let history = JSON.parse(localStorage.getItem('msmRecentHistory')) || [];

    // Remove duplicate if it already exists so we can bump it back to the "newest" slot
    history = history.filter(name => name !== trueName);

    // Add to the END of the line (Right side / Newest)
    history.push(trueName);

    // STRICT MAX OF 3: If there are more than 3, push the oldest one out from the FRONT (Left side)
    while (history.length > 3) {
        history.shift();
    }

    localStorage.setItem('msmRecentHistory', JSON.stringify(history));
    updateRecentHistoryUI();
}

function updateRecentHistoryUI() {
    const grid = document.getElementById('recent-grid');
    if (!grid) return;
    grid.innerHTML = '';

    let history = JSON.parse(localStorage.getItem('msmRecentHistory')) || [];
    if (history.length === 0) {
        grid.innerHTML = '<span style="color: rgba(255,255,255,0.4); font-size: 14px; font-style: italic;">No monsters discovered yet...</span>';
        return;
    }

    history.forEach(monsterName => {
        const img = document.createElement('img');
        img.className = 'recent-avatar';
        img.id = `history-img-${monsterName.replace(/[^a-zA-Z0-9]/g, '')}`;
        img.title = monsterName;

        // BUG FIX 1: Keep invisible until fully loaded to prevent the broken image flash
        img.onload = () => {
            img.classList.add('loaded'); // Triggers the slide-in CSS animation!
        };

        img.onerror = () => { img.onerror = null; img.src = GRID_FALLBACK_IMAGE; };

        img.addEventListener('click', () => {
            searchInput.value = monsterName;
            const trueName = findTrueName(monsterName);
            if (/^rare/i.test(trueName)) currentRarity = "Rare";
            else if (/^epic/i.test(trueName)) currentRarity = "Epic";
            else currentRarity = "Common";

            monsterImage.setAttribute('data-name', normalizeName(trueName));
            tabsContainer.innerHTML = '';
            showMonsterUI(false); updateActiveTab(); loadMonsterImage(trueName);
            costumeErrorHandling(trueName); loadStats(trueName);
        });

        grid.appendChild(img);

        let historyAttempts = 0; // Create a counter
        const attemptImageLoad = () => {
            if (typeof MSM !== 'undefined' && MSM[monsterName]) {
                try { MSM[monsterName].loadImage(img.id); } catch (e) { }
            } else if (historyAttempts < 25) { // Stop after 25 tries
                historyAttempts++;
                setTimeout(attemptImageLoad, 200);
            }
        };
        attemptImageLoad();
    });
}

// --- FEATURE 4: Monster of the Day ---
function updateMonsterOfTheDay() {
    const spotlight = document.getElementById('monster-spotlight');
    if (!spotlight || monsterRegistry.length === 0) return;

    // 1. Get today's date to create a unique math seed (e.g., 20260312)
    const today = new Date();
    const dateSeed = (today.getFullYear() * 10000) + ((today.getMonth() + 1) * 100) + today.getDate();

    // 2. Use the seed to reliably pick the exact same monster all day!
    const index = dateSeed % monsterRegistry.length;
    const motd = monsterRegistry[index];
    const trueName = findTrueName(motd);

    // 3. Update the UI
    const nameEl = document.getElementById('spotlight-name');
    const imgEl = document.getElementById('spotlight-img');

    if (nameEl) nameEl.textContent = trueName;

    if (imgEl) {
        imgEl.id = `spotlight-img-${trueName.replace(/[^a-zA-Z0-9]/g, '')}`; // Unique ID for API
        imgEl.onerror = () => { imgEl.onerror = null; imgEl.src = GRID_FALLBACK_IMAGE; };

        let spotlightAttempts = 0;
        const attemptImageLoad = () => {
            if (typeof MSM !== 'undefined' && MSM[trueName]) {
                try { MSM[trueName].loadImage(imgEl.id); } catch (e) { }
            } else if (spotlightAttempts < 25) { // Stop after 25 tries
                spotlightAttempts++;
                setTimeout(attemptImageLoad, 200);
            }
        };
        attemptImageLoad();
    }

    spotlight.style.display = 'flex'; // Un-hide it once loaded

    // 4. Clicking the spotlight acts just like searching for it!
    spotlight.addEventListener('click', () => {
        searchInput.value = trueName;
        if (/^rare/i.test(trueName)) currentRarity = "Rare";
        else if (/^epic/i.test(trueName)) currentRarity = "Epic";
        else currentRarity = "Common";

        monsterImage.setAttribute('data-name', normalizeName(trueName));
        tabsContainer.innerHTML = '';
        showMonsterUI(false); updateActiveTab(); loadMonsterImage(trueName);
        costumeErrorHandling(trueName); loadStats(trueName);
    });
}


// --- MSM API INJECTION ---
(function loadMSMAPI() {
    const PRIMARY_API = "https://msm-api.pages.dev/msm.js";
    const FALLBACK_API = "https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@main/dist/msm.js";
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script"); script.src = src; script.defer = true;
            script.onload = () => resolve(src); script.onerror = () => reject(src); document.head.appendChild(script);
        });
    }
    loadScript(PRIMARY_API)
        .then(src => console.log("MSM API loaded:", src))
        .catch(() => { console.warn("Primary failed, loading CDN fallback..."); return loadScript(FALLBACK_API); })
        .then(src => console.log("MSM API ready:", src))
        .catch(() => { console.error("All MSM API sources failed"); });
})();

// Ensure history loads when page starts
document.addEventListener("DOMContentLoaded", updateRecentHistoryUI);
