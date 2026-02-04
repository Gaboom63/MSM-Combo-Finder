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
const suggestionsContainer = document.getElementById('suggestions3');
const suggestions1 = document.getElementById('suggestions1');
const suggestions2 = document.getElementById('suggestions2');
const loadingSpinner = document.getElementById('loadingSpinner'); 
const majorMinorButton = document.getElementById('majorMinorButton'); 
const tabsContainer = document.getElementById('tabsContainer');
const costumeButton = document.getElementById('costumeButton'); 

let currentRarity = "";
let monsterRegistry = []; 
let currentMonster = null;

// --- 1. BUILD REGISTRY ---
async function buildMonsterRegistry() {
    const breedingUrl = "https://raw.githubusercontent.com/Gaboom63/MSM-API/refs/heads/main/data/monsters/Extras/breedingCombos.json";
    
    try {
        const response = await fetch(breedingUrl);
        const data = await response.json();
        const uniqueNames = new Set();
        const clean = (name) => name ? name.trim() : "";

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

        monsterRegistry = Array.from(uniqueNames).filter(n => n).sort();
        console.log(`Registry ready: ${monsterRegistry.length} monsters.`);
    } catch (err) {
        console.error("Registry failed:", err);
    }
}
buildMonsterRegistry();


// --- 2. CORE FUNCTIONS ---

// NEW: Robust Lookup Function
// This finds the correct key in MSM regardless of how you typed it.
function findTrueName(input) {
    if (!input) return null;
    const cleanInput = input.trim().toLowerCase();
    
    // 1. Search MSM object keys directly
    if (typeof MSM !== 'undefined') {
        const trueKey = Object.keys(MSM).find(key => key.toLowerCase() === cleanInput);
        if (trueKey) return trueKey;
    }

    // 2. Fallback to Registry
    const registryKey = monsterRegistry.find(key => key.toLowerCase() === cleanInput);
    if (registryKey) return registryKey;

    // 3. Last Resort: Return input as-is (might fail, but better than nothing)
    return input.trim();
}

function toDisplayCase(str) {
    if (!str) return "";
    // Only used for UI labels, not for logic/searching
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
    if(loadingSpinner) loadingSpinner.style.display = 'block'; 
    
    const monster = MSM[name]; // Async proxy

    monsterImage.onload = () => {
        if(loadingSpinner) loadingSpinner.style.display = 'none'; 
        monsterImage.style.opacity = '1'; 
        monsterImage.classList.add('animate-enter'); 
    };

    currentMonster = monster;

    try {
        MSM[name].loadImage("monsterImage");
    } catch(e) {
        console.warn("Image load trigger failed:", e);
        if(loadingSpinner) loadingSpinner.style.display = 'none'; 
    }
}


function showMonsterUI(isBreedingResult = false) {
    monsterImage.style.display = 'revert';
    blurMessage.style.display = 'revert';
    blurOverlay.style.display = 'revert';
    statBox.style.display = 'revert';
    volumeButton.style.display = 'revert'; 
    inputContainer.style.display = 'none';
    noMonsterImage.style.display = 'none';

    if (isBreedingResult) {
        commonButton.style.display = 'none';
        rareButton.style.display = 'none';
        epicButton.style.display = 'none';
        volumeButton.style.display = 'none';
        // costumeButton.style.display = 'none';
        tabsContainer.style.display = 'flex';
        tabsContainer.style.justifyContent = 'center';
        tabsContainer.style.gap = '10px';
    } else {
        commonButton.style.display = 'revert';
        rareButton.style.display = 'revert';
        epicButton.style.display = 'revert';
        volumeButton.style.display = 'revert';
        // costumeButton.style.display = 'revert';
        tabsContainer.style.display = 'none';
    }
}

document.addEventListener('keydown', e => {
    if (e.key === "Escape") reset();
});

async function costumeErrorHandling(name) {
    const costumes = await MSM[name].getCostumes();

    console.log(costumes);

    if (!costumes || costumes.length === 0) {
        costumeButton.style.display = 'none';
        console.log("No Costumes available!");
    } else {
        costumeButton.style.display = 'revert';
    }
}


function reset() {
    inputContainer.style.display = 'block';
    monsterImage.style.display = 'none';
    blurMessage.style.display = 'none';
    blurOverlay.style.display = 'none';
    
    if(tabsContainer) {
        tabsContainer.innerHTML = '';
        tabsContainer.style.display = 'none';
    }

    [commonButton, rareButton, epicButton, statBox, noMonsterImage, volumeButton, costumeButton, majorMinorButton].forEach(el => {
        if(el) el.style.display = 'none';
        el.classList.remove('active-tab'); 
    });

    if(loadingSpinner) loadingSpinner.style.display = 'none';

    searchInput.value = "";
    firstInput.value = "";
    secondInput.value = "";
    
    [suggestionsContainer, suggestions1, suggestions2].forEach(el => {
        if(el) el.style.display = 'none';
    });
    
    currentRarity = "";
}

// --- 3. EVENT LISTENERS ---

breedingButton.addEventListener("click", async () => {
    // Priority 1: Search Box
    if (!searchInput.disabled && searchInput.value.trim() !== "") {
        const raw = searchInput.value.trim();
        
        // Use the True Name Lookup
        const trueName = findTrueName(raw); 
        
        if (/^rare/i.test(trueName)) currentRarity = "Rare";
        else if (/^epic/i.test(trueName)) currentRarity = "Epic";
        else currentRarity = "Common";

        const baseName = normalizeName(trueName);
        monsterImage.setAttribute('data-name', baseName);

        tabsContainer.innerHTML = '';
        showMonsterUI(false); 

        updateActiveTab(); 
        costumeErrorHandling(trueName);
        loadMonsterImage(trueName); 
        await loadStats(trueName);
        return;
    }

    // Priority 2: Breeding Inputs
    if (!firstInput.disabled && firstInput.value && secondInput.value) {
        await comboFinder();
    }
});

commonButton.addEventListener("click", () => {
    const base = monsterImage.getAttribute('data-name');
    if(!base) return;

    // We can assume base is already "True" since it came from data-name
    // But we need to ensure "Common [base]" is correct logic if MSM stores it that way
    // Usually "Mammott" is just "Mammott".
    
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
    if(!base) return;

    const name = `Rare ${base}`;
    const trueName = findTrueName(name); // Ensure "Rare Mammott" casing is correct

    let isEmpty = null;
    
    isEmpty = MSM[trueName].costumes; 
    
    console.log(isEmpty);
    if(isEmpty.length === 0) {
        costumeButton.style.display = 'none';
        console.log("No Costumes available!"); 
    } else {
        costumeButton.style.display = 'revert';
    } 

    searchInput.value = trueName;
    currentRarity = "Rare";
    updateActiveTab(); 
    costumeErrorHandling(trueName);
    loadMonsterImage(trueName); 
    loadStats(trueName);
});

epicButton.addEventListener("click", () => {
    const base = monsterImage.getAttribute('data-name');
    if(!base) return;

    const name = `Epic ${base}`;
    const trueName = findTrueName(name);

    searchInput.value = trueName;
    currentRarity = "Epic";
    updateActiveTab(); 
    costumeErrorHandling(trueName);
    loadMonsterImage(trueName); 
    loadStats(trueName);
});

let currentCostumeIndex = 0;
let currentCostumes = []; // Array of image URLs for the current monster's costumes

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
    if(!currentName) return;

    let newName = "";
    if (currentName.includes("(Major)")) {
        newName = currentName.replace("(Major)", "(Minor)");
    } else if (currentName.includes("(Minor)")) {
        newName = currentName.replace("(Minor)", "(Major)");
    }

    if(newName) {
        const trueName = findTrueName(newName);
        searchInput.value = trueName;
        monsterImage.setAttribute('data-name', trueName);
        loadMonsterImage(trueName);
        loadStats(trueName);
    }
});

// --- UPDATED: Combo Finder Logic ---
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
        
        // Sort by length (Longest First)
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
        const trueName = findTrueName(name); // Ensure we get the correct casing

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
    const trueName = findTrueName(monsterName); // Lookup the real key
    
    searchInput.value = trueName;
    
    if (/^rare/i.test(trueName)) currentRarity = "Rare";
    else if (/^epic/i.test(trueName)) currentRarity = "Epic";
    else currentRarity = "Common";

    monsterImage.setAttribute('data-name', normalizeName(trueName));

    loadMonsterImage(trueName);
    loadStats(trueName);
}

// --- End of Update ---

async function loadStats(forceName) {
    const rawInput = forceName || searchInput.value.trim();
    if (!rawInput) return;

    // Use findTrueName here too, just in case
    const trueName = findTrueName(rawInput);
    
    try {
        const baseName = normalizeName(trueName); 
        const monster = MSM[trueName]; // Use trueName for the lookup!

        if (!monster) throw new Error("Monster not found in MSM object");

        const [times, combos] = await Promise.all([
            monster.getBreedingTime(),
            monster.getBreedingCombos()
        ]);

        if (!times) {
            console.warn("API returned no data object.");
            throw new Error("Invalid monster data");
        }
        
        monsterImage.setAttribute('data-name', baseName);

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
        const nameEl = document.getElementById('name');
        nameEl.innerHTML = `${currentRarity || "Common"} Version Of:<br>${displayName}!`;

        if (times.breedingTime === "Unknown") {
             document.getElementById('breedingTime').innerHTML = `
                Breeding Time: N/A (Not Breedable)<br>
                Enhanced Time: N/A
            `;
        } else {
            document.getElementById('breedingTime').innerHTML = `
                Breeding Time: ${times.breedingTime}<br>
                Enhanced Time: ${times.enhancedTime}
            `;
        }

        if (!combos || combos.length === 0) {
            document.getElementById('breedingCombo').innerHTML = `
                <u>Breeding Combinations:</u><br>
                • Cannot be bred (Buy with Currency)
            `;
        } else {
            document.getElementById('breedingCombo').innerHTML =
                `<u>Breeding Combinations:</u><br>` +
                combos.map(c => `• ${c}`).join("<br>");
        }

    } catch (err) {
        console.error("Monster validation failed:", err);
        showNoMonsterError();
    }
}

// ... rest of lockInput, showNoMonsterError, playSound, autocomplete ...
// (These sections remain the same as previous files, included for completeness if needed)

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
    if(loadingSpinner) loadingSpinner.style.display = 'none';
    
    if(tabsContainer) {
        tabsContainer.innerHTML = '';
        tabsContainer.style.display = 'none';
    }

    [commonButton, rareButton, epicButton, statBox, volumeButton, majorMinorButton].forEach(el => {
        if(el) el.style.display = 'none';
    });
    
    noMonsterImage.style.display = 'revert';
    noMonsterImage.src = `images/important/Nomonsterfound.png`;
}

async function playSound() {
    const raw = searchInput.value.trim();
    if (!raw) return;
    try { 
        // Also use True Name for sound
        const trueName = findTrueName(raw);
        await MSM[trueName].playSound(); 
    } 
    catch (err) { console.warn("Sound failed:", err); }
}

// --- 4. AUTOCOMPLETE LOGIC ---

function setupAutocomplete(inputElement, resultElement, includeRarities = true) {
    if(!resultElement) return;

    let currentMatches = []; // Store valid matches for this input

    inputElement.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (!query) {
            resultElement.style.display = 'none';
            currentMatches = []; // Clear matches if empty
            return;
        }

        const matches = monsterRegistry.filter(name => {
            const lowerName = name.toLowerCase();
            
            // 1. Check if it matches the typing
            const matchesQuery = lowerName.includes(query);
            if (!matchesQuery) return false;

            // 2. If this input forbids rarities, filter them out
            if (!includeRarities) {
                if (lowerName.startsWith("rare ") || lowerName.startsWith("epic ")) {
                    return false;
                }
            }

            return true;
        });

        // Update our tracker
        currentMatches = matches;

        if (matches.length > 0) {
            resultElement.style.left = inputElement.offsetLeft + "px";
            resultElement.style.top = (inputElement.offsetTop + inputElement.offsetHeight + 10) + "px";
            renderSuggestions(matches, resultElement, inputElement);
        } else {
            resultElement.style.display = 'none';
        }
    });

    // NEW: Handle Tab Key (Auto-complete if 1 match)
    inputElement.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (currentMatches.length === 1) {
                // Select the monster
                selectSuggestion(currentMatches[0], resultElement, inputElement);
                // We do NOT preventDefault(), so the focus will still move to the next box naturally
            }
        }
    });
    
    // UPDATED: Handle Blur (Auto-complete if 1 match when leaving)
    inputElement.addEventListener('blur', function() {
        setTimeout(() => {
            // If there is exactly one match, pick it automatically
            if (currentMatches.length === 1) {
                selectSuggestion(currentMatches[0], resultElement, inputElement);
            }
            resultElement.style.display = 'none';
        }, 200); 
    });

    document.addEventListener('click', (e) => {
        if (e.target !== inputElement && e.target !== resultElement) {
            resultElement.style.display = 'none';
        }
    });
}

function renderSuggestions(matches, container, inputField) {
    container.innerHTML = '';
    container.style.display = 'block';

    matches.slice(0, 8).forEach(match => {
        const div = document.createElement('div');
        div.classList.add('suggestion-item');
        div.textContent = match;

        div.addEventListener('click', () => {
            selectSuggestion(match, container, inputField);
        });

        container.appendChild(div);
    });
}

function selectSuggestion(name, container, inputField) {
    inputField.value = name;
    container.style.display = 'none';
    
    if (inputField === searchInput) {
        // Use lookup even on suggestion to be safe
        const trueName = findTrueName(name);
        
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
}

// --- SETUP CALLS (Updated) ---

// Search Bar: allow rarities (true)
setupAutocomplete(searchInput, suggestionsContainer, true);

// Breeding Inputs: disable rarities (false)
setupAutocomplete(firstInput, suggestions1, false);
setupAutocomplete(secondInput, suggestions2, false);


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
        .then(src => {
            console.log("MSM API loaded:", src);
        })
        .catch(() => {
            console.warn("Primary failed, loading CDN fallback...");
            return loadScript(FALLBACK_API);
        })
        .then(src => {
            console.log("MSM API ready:", src);
        })
        .catch(() => {
            console.error("All MSM API sources failed");
            alert("Failed to load MSM API. Network may be blocking scripts.");
        });
})();
