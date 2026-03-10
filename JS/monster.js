const breedingButton = document.getElementById('breedButton');
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

// --- NEW FALLBACK FOR GRID ERRORS ---
// We will use the existing mammoticon favicon as the placeholder
const GRID_FALLBACK_IMAGE = "images/important/mammoticon.png";

let currentRarity = "";
let monsterRegistry = [];
let currentMonster = null;

// --- 1. BUILD REGISTRY ---
async function buildMonsterRegistry() {
    // Also updated this to the faster jsDelivr link for you!
    const breedingUrl = "https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@main/data/monsters/Extras/breedingCombos.json";

    try {
        const response = await fetch(breedingUrl);
        const data = await response.json();
        const uniqueNames = new Set();
        const clean = (name) => name ? name.trim() : "";

        // NEW: Ignore list to filter out breeding instructions
        const ignoreList = ["any", "invalid", "no combination", "unknown"];

        Object.keys(data).forEach(key => {
            if (key.includes("+")) {
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

        // NEW: Filter the final array against the ignore list
        monsterRegistry = Array.from(uniqueNames).filter(n => {
            const lowerName = n.toLowerCase();
            return n !== "" && !ignoreList.some(ignoreWord => lowerName.includes(ignoreWord));
        }).sort();

        console.log(`Registry ready: ${monsterRegistry.length} monsters.`);
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

    try {
        MSM[name].loadImage("monsterImage");
    } catch (e) {
        console.warn("Image load trigger failed:", e);
        if (loadingSpinner) loadingSpinner.style.display = 'none';
    }
}

function showMonsterUI(isBreedingResult = false) {
    monsterImage.style.display = 'revert';
    blurMessage.style.display = 'revert';

    blurOverlay.style.display = 'block';
    requestAnimationFrame(() => {
        blurOverlay.classList.add('active');
    });

    statBox.style.display = 'revert';
    volumeButton.style.display = 'revert';
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
        commonButton.style.display = 'revert';
        rareButton.style.display = 'revert';
        epicButton.style.display = 'revert';
        volumeButton.style.display = 'revert';
        tabsContainer.style.display = 'none';
    }
}

document.addEventListener('keydown', e => {
    if (e.key === "Escape") reset();
});

async function costumeErrorHandling(name) {
    const costumes = await MSM[name].getCostumes();
    if (!costumes || costumes.length === 0) {
        costumeButton.style.display = 'none';
    } else {
        costumeButton.style.display = 'revert';
    }
}

function reset() {
    inputContainer.style.display = 'block';
    monsterImage.style.display = 'none';
    blurMessage.style.display = 'none';

    blurOverlay.classList.remove('active');
    setTimeout(() => {
        if (!firstInput.classList.contains('expanded-search')) {
            blurOverlay.style.display = 'none';
        }
    }, 500);

    if (tabsContainer) {
        tabsContainer.innerHTML = '';
        tabsContainer.style.display = 'none';
    }

    [commonButton, rareButton, epicButton, statBox, noMonsterImage, volumeButton, costumeButton, majorMinorButton].forEach(el => {
        if (el) el.style.display = 'none';
        if (el.classList) el.classList.remove('active-tab');
    });

    if (loadingSpinner) loadingSpinner.style.display = 'none';

    searchInput.value = "";
    firstInput.value = "";
    secondInput.value = "";
    currentRarity = "";

    // Close any expanded search and grid safely
    closeExpandedInput();
}


// --- 3. UI REFRESH: Smooth Expansion & Dynamic API Grid ---

let activeInput = null;
let activeOriginalRect = null;

function setupSmoothExpansionAndGrid(inputElement, includeRarities = true) {
    inputElement.addEventListener('focus', () => {
        if (activeInput && activeInput !== inputElement) {
            closeExpandedInput(); // Close others if open
        }

        activeInput = inputElement;
        activeOriginalRect = inputElement.getBoundingClientRect();

        // Lock position
        inputElement.style.transition = 'none';
        inputElement.style.position = 'fixed';
        inputElement.style.top = activeOriginalRect.top + 'px';
        inputElement.style.left = activeOriginalRect.left + 'px';
        inputElement.style.width = activeOriginalRect.width + 'px';
        inputElement.style.margin = '0';

        void inputElement.offsetWidth; // Force layout

        // Animate
        inputElement.style.transition = 'all 0.5s cubic-bezier(0.25, 1, 0.3, 1)';
        const targetWidth = Math.min(window.innerWidth * 0.9, 1300);
        const targetLeft = (window.innerWidth - targetWidth) / 2;
        const targetTop = window.innerHeight * 0.12;

        inputElement.style.top = targetTop + 'px';
        inputElement.style.left = targetLeft + 'px';
        inputElement.style.width = targetWidth + 'px';

        inputElement.classList.add('expanded-search');
        blurOverlay.style.display = 'block';
        dynamicGrid.classList.add('active');

        requestAnimationFrame(() => {
            blurOverlay.classList.add('active');
        });

        inputElement.dispatchEvent(new Event('input')); // Trigger grid
    });

    inputElement.addEventListener('input', () => {
        if (activeInput !== inputElement) return;

        const query = inputElement.value.toLowerCase().trim();
        if (!query) {
            dynamicGrid.innerHTML = '';
            return;
        }

        const matches = monsterRegistry.filter(name => {
            const lowerName = name.toLowerCase();
            if (!lowerName.includes(query)) return false;
            if (!includeRarities && (lowerName.startsWith("rare ") || lowerName.startsWith("epic "))) return false;
            return true;
        });

        const topMatches = matches.slice(0, 12);
        dynamicGrid.innerHTML = '';

        topMatches.forEach(match => {
            const item = document.createElement('div');
            item.className = 'grid-monster-item';

            const img = document.createElement('img');
            const safeId = 'grid-img-' + match.replace(/[^a-zA-Z0-9]/g, '');
            img.id = safeId;

            // --- UI REFRESH: Error Handling ---
            // If the image fails to load, swap it with the mammoticon fallback
            img.onerror = () => {
                // Remove onerror to prevent infinite loops if the fallback itself is missing
                img.onerror = null;
                console.warn(`Grid image failed to load for: ${match}. Swapping to fallback.`);
                img.src = GRID_FALLBACK_IMAGE;
            };

            const label = document.createElement('span');
            label.textContent = match;

            item.appendChild(img);
            item.appendChild(label);

            // Apply click to the entire item box, not just the img
            // Apply click to the entire item box, not just the img
            item.addEventListener('click', async () => {
                inputElement.value = match;
                closeExpandedInput();

                // --- AUTO-SEARCH LOGIC ---
                if (inputElement === searchInput) {
                    const trueName = findTrueName(match);
                    if (/^rare/i.test(trueName)) currentRarity = "Rare";
                    else if (/^epic/i.test(trueName)) currentRarity = "Epic";
                    else currentRarity = "Common";

                    monsterImage.setAttribute('data-name', normalizeName(trueName));
                    tabsContainer.innerHTML = '';
                    showMonsterUI(false);
                    updateActiveTab();
                    loadMonsterImage(trueName);
                    costumeErrorHandling(trueName);
                    loadStats(trueName);
                }

                // --- NEW: AUTO-BREED LOGIC ---
                // If this was a breeding input, check if both are now filled
                else if (inputElement === firstInput || inputElement === secondInput) {
                    if (firstInput.value.trim() !== "" && secondInput.value.trim() !== "") {
                        // Small delay so the input has time to shrink back down before the UI changes
                        setTimeout(async () => {
                            await comboFinder();
                        }, 300);
                    }
                }
            });
            dynamicGrid.appendChild(item);

            try {
                const trueName = findTrueName(match);
                if (typeof MSM !== 'undefined' && MSM[trueName]) {
                    MSM[trueName].loadImage(safeId);
                }
            } catch (e) {
                console.warn("API Image load failed for:", match);
                // Manually trigger the error fallback if the API call fails
                img.onerror();
            }
        });
    });
}

function closeExpandedInput() {
    if (!activeInput) return;

    const currentInput = activeInput;
    activeInput = null;

    currentInput.blur();
    blurOverlay.classList.remove('active');
    currentInput.classList.remove('expanded-search');
    dynamicGrid.classList.remove('active');

    if (activeOriginalRect) {
        currentInput.style.top = activeOriginalRect.top + 'px';
        currentInput.style.left = activeOriginalRect.left + 'px';
        currentInput.style.width = activeOriginalRect.width + 'px';
    }

    setTimeout(() => {
        currentInput.style.transition = '';
        currentInput.style.position = '';
        currentInput.style.top = '';
        currentInput.style.left = '';
        currentInput.style.width = '';
        currentInput.style.margin = '';

        if (!blurOverlay.classList.contains('active') && monsterImage.style.display !== 'revert') {
            blurOverlay.style.display = 'none';
        }
    }, 500);
}

blurOverlay.addEventListener('click', closeExpandedInput);

// Initialize all three inputs (Search allows rarities, Breeding inputs do not)
setupSmoothExpansionAndGrid(searchInput, true);
setupSmoothExpansionAndGrid(firstInput, false);
setupSmoothExpansionAndGrid(secondInput, false);

commonButton.addEventListener("click", () => {
    const base = monsterImage.getAttribute('data-name');
    if (!base) return;
    const trueName = findTrueName(base);
    searchInput.value = trueName;
    currentRarity = "Common";
    updateActiveTab();
    costumeErrorHandling(trueName);
    loadMonsterImage(trueName);
    loadStats(trueName);
});

rareButton.addEventListener("click", () => {
    const base = monsterImage.getAttribute('data-name');
    if (!base) return;
    const name = `Rare ${base}`;
    const trueName = findTrueName(name);

    let isEmpty = MSM[trueName].costumes;
    if (isEmpty && isEmpty.length === 0) { costumeButton.style.display = 'none'; }
    else { costumeButton.style.display = 'revert'; }

    searchInput.value = trueName;
    currentRarity = "Rare";
    updateActiveTab();
    costumeErrorHandling(trueName);
    loadMonsterImage(trueName);
    loadStats(trueName);
});

epicButton.addEventListener("click", () => {
    const base = monsterImage.getAttribute('data-name');
    if (!base) return;
    const name = `Epic ${base}`;
    const trueName = findTrueName(name);

    searchInput.value = trueName;
    currentRarity = "Epic";
    updateActiveTab();
    costumeErrorHandling(trueName);
    loadMonsterImage(trueName);
    loadStats(trueName);
});

costumeButton.addEventListener("click", async () => {
    if (!currentMonster) return;
    const nextCostumeUrl = await currentMonster.nextCostume();
    if (!nextCostumeUrl) {
        alert("No costumes available for this monster!");
        return;
    }
    monsterImage.src = nextCostumeUrl;
});

majorMinorButton.addEventListener("click", () => {
    const currentName = monsterImage.getAttribute('data-name');
    if (!currentName) return;

    let newName = "";
    if (currentName.includes("(Major)")) newName = currentName.replace("(Major)", "(Minor)");
    else if (currentName.includes("(Minor)")) newName = currentName.replace("(Minor)", "(Major)");

    if (newName) {
        const trueName = findTrueName(newName);
        searchInput.value = trueName;
        monsterImage.setAttribute('data-name', trueName);
        loadMonsterImage(trueName);
        loadStats(trueName);
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

            btn.addEventListener('click', () => {
                Array.from(tabsContainer.children).forEach(c => c.classList.remove('active-tab'));
                btn.classList.add('active-tab');
                loadFromTab(monsterName);
                costumeErrorHandling(monsterName)
            });

            if (index === 0) btn.classList.add('active-tab');
            tabsContainer.appendChild(btn);
            costumeErrorHandling(monsterName);
        });

        showMonsterUI(true);
        loadFromTab(result[0]);

    } else {
        const name = result[0];
        const trueName = findTrueName(name);

        if (/^rare/i.test(trueName)) currentRarity = "Rare";
        else if (/^epic/i.test(trueName)) currentRarity = "Epic";
        else currentRarity = "Common";

        monsterImage.setAttribute('data-name', normalizeName(trueName));
        showMonsterUI(false);
        updateActiveTab();
        loadMonsterImage(trueName);
        loadStats(trueName);
    }
}

function loadFromTab(monsterName) {
    const trueName = findTrueName(monsterName);
    searchInput.value = trueName;

    if (/^rare/i.test(trueName)) currentRarity = "Rare";
    else if (/^epic/i.test(trueName)) currentRarity = "Epic";
    else currentRarity = "Common";

    monsterImage.setAttribute('data-name', normalizeName(trueName));
    loadMonsterImage(trueName);
    loadStats(trueName);
}

// --- STATS & UTILS ---
async function loadStats(forceName) {
    const rawInput = forceName || searchInput.value.trim();
    if (!rawInput) return;
    const trueName = findTrueName(rawInput);

    try {
        const baseName = normalizeName(trueName);
        const monster = MSM[trueName];

        if (!monster) throw new Error("Monster not found");

        const [times, combos] = await Promise.all([
            monster.getBreedingTime(),
            monster.getBreedingCombos()
        ]);

        if (baseName.includes("(Major)")) {
            majorMinorButton.textContent = "Switch To Minor";
            majorMinorButton.style.display = "revert";
        } else if (baseName.includes("(Minor)")) {
            majorMinorButton.textContent = "Switch To Major";
            majorMinorButton.style.display = "revert";
        } else {
            majorMinorButton.style.display = "none";
        }

        const displayName = toDisplayCase(baseName);
        const statsBox = document.getElementById('statsBox');

        const nameHtml = `
            <div class="stats-bubble">
                <span class="label-text"><i class="fas fa-dna"></i> Monster Name </span>
                <h3>${currentRarity || "Common"} ${displayName}</h3>
            </div>
        `;

        const timeContent = (times.breedingTime === "Unknown")
            ? "Not Breedable"
            : `Default: <b>${times.breedingTime}</b><br>Enhanced: <b>${times.enhancedTime}</b>`;

        const timeHtml = `
            <div class="stats-bubble">
                <span class="label-text"><i class="fas fa-clock"></i> Hatch Time</span>
                <p style="margin:0; text-align: center;">${timeContent}</p>
            </div>
        `;

        const comboList = (!combos || combos.length === 0)
            ? "• Special Combination Required"
            : combos.map(c => `• ${c}`).join("<br>");

        const comboHtml = `
            <div class="stats-bubble">
                <span class="label-text"><i class="fas fa-heart"></i> Breeding Combo</span>
                <p style="margin:0; font-size: 0.9rem;">${comboList}</p>
            </div>
        `;

        statsBox.innerHTML = nameHtml + timeHtml + comboHtml;
        statsBox.style.display = 'flex';

    } catch (err) {
        console.error("Stats failed:", err);
        showNoMonsterError();
    }
}

function lockInput() {
    setInterval(() => {
        if (firstInput.value || secondInput.value) {
            searchInput.disabled = true;
            firstInput.disabled = false;
            secondInput.disabled = false;
        } else if (searchInput.value) {
            searchInput.disabled = false;
            firstInput.disabled = true;
            secondInput.disabled = true;
        } else {
            searchInput.disabled = false;
            firstInput.disabled = false;
            secondInput.disabled = false;
        }
    }, 300);
}
lockInput();

function showNoMonsterError() {
    monsterImage.style.display = 'none';
    if (loadingSpinner) loadingSpinner.style.display = 'none';

    if (tabsContainer) {
        tabsContainer.innerHTML = '';
        tabsContainer.style.display = 'none';
    }

    [commonButton, rareButton, epicButton, statBox, volumeButton, majorMinorButton].forEach(el => {
        if (el) el.style.display = 'none';
    });

    noMonsterImage.style.display = 'revert';
    noMonsterImage.src = `images/important/Nomonsterfound.png`;
}

async function playSound() {
    const raw = searchInput.value.trim();
    if (!raw) return;
    try {
        const trueName = findTrueName(raw);
        await MSM[trueName].playSound();
    }
    catch (err) { console.warn("Sound failed:", err); }
}

// --- MSM API INJECTION ---
(function loadMSMAPI() {
    const PRIMARY_API = "https://msm-api.pages.dev/msm.js";
    const FALLBACK_API = "https://cdn.jsdelivr.net/gh/Gaboom63/MSM-API@main/dist/msm.js";

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

    loadScript(PRIMARY_API)
        .then(src => console.log("MSM API loaded:", src))
        .catch(() => {
            console.warn("Primary failed, loading CDN fallback...");
            return loadScript(FALLBACK_API);
        })
        .then(src => console.log("MSM API ready:", src))
        .catch(() => {
            console.error("All MSM API sources failed");
            alert("Failed to load MSM API. Network may be blocking scripts.");
        });
})();

