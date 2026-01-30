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

let currentRarity = "";
let monsterRegistry = []; 

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

function toDisplayCase(str) {
    if (!str) return "";
    return str.toLowerCase().replace(/(?:^|[\s\-\(\)])[a-z]/g, (letter) => letter.toUpperCase());
}

function normalizeName(name) {
    if (!name) return "";
    return name.replace(/^(common|rare|epic|legendary)\s+/i, "").trim();
}

function updateActiveTab() {
    // Only update standard buttons if tabs are NOT in use
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

    monsterImage.onload = () => {
        if(loadingSpinner) loadingSpinner.style.display = 'none'; 
        monsterImage.style.opacity = '1'; 
        monsterImage.classList.add('animate-enter'); 
    };

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

    // Toggle Buttons based on mode
    if (isBreedingResult) {
        // Hide standard rarity buttons
        commonButton.style.display = 'none';
        rareButton.style.display = 'none';
        epicButton.style.display = 'none';
        // Show Tabs
        tabsContainer.style.display = 'flex';
        tabsContainer.style.justifyContent = 'center'; // Center the tabs
        tabsContainer.style.gap = '10px'; // Add some spacing
    } else {
        // Show standard rarity buttons
        commonButton.style.display = 'revert';
        rareButton.style.display = 'revert';
        epicButton.style.display = 'revert';
        // Hide Tabs
        tabsContainer.style.display = 'none';
    }
}

document.addEventListener('keydown', e => {
    if (e.key === "Escape") reset();
});

function reset() {
    inputContainer.style.display = 'block';
    monsterImage.style.display = 'none';
    blurMessage.style.display = 'none';
    blurOverlay.style.display = 'none';
    
    // Clear dynamic tabs
    if(tabsContainer) {
        tabsContainer.innerHTML = '';
        tabsContainer.style.display = 'none';
    }

    [commonButton, rareButton, epicButton, statBox, noMonsterImage, volumeButton, majorMinorButton].forEach(el => {
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
    // Priority 1: Search Box (Standard Mode)
    if (!searchInput.disabled && searchInput.value.trim() !== "") {
        const raw = searchInput.value.trim();
        
        if (/^rare/i.test(raw)) currentRarity = "Rare";
        else if (/^epic/i.test(raw)) currentRarity = "Epic";
        else currentRarity = "Common";

        const baseName = normalizeName(raw);
        monsterImage.setAttribute('data-name', baseName);

        // Clear tabs so standard UI shows
        tabsContainer.innerHTML = '';
        showMonsterUI(false); 
        
        updateActiveTab(); 
        loadMonsterImage(raw); 
        await loadStats(raw);
        return;
    }

    // Priority 2: Breeding Inputs (Combo Mode)
    if (!firstInput.disabled && firstInput.value && secondInput.value) {
        await comboFinder();
    }
});

commonButton.addEventListener("click", () => {
    const base = monsterImage.getAttribute('data-name');
    if(!base) return;

    searchInput.value = base;
    currentRarity = "Common";
    updateActiveTab(); 
    loadMonsterImage(base); 
    loadStats(base);
});

rareButton.addEventListener("click", () => {
    const base = monsterImage.getAttribute('data-name');
    if(!base) return;

    const name = `Rare ${base}`;
    searchInput.value = name;
    currentRarity = "Rare";
    updateActiveTab(); 
    loadMonsterImage(name); 
    loadStats(name);
});

epicButton.addEventListener("click", () => {
    const base = monsterImage.getAttribute('data-name');
    if(!base) return;

    const name = `Epic ${base}`;
    searchInput.value = name;
    currentRarity = "Epic";
    updateActiveTab(); 
    loadMonsterImage(name); 
    loadStats(name);
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
        searchInput.value = newName;
        monsterImage.setAttribute('data-name', newName);
        loadMonsterImage(newName);
        loadStats(newName);
    }
});

// --- UPDATED: Combo Finder Logic ---
async function comboFinder() {
    const combo = `${firstInput.value} + ${secondInput.value}`;
    const result = await MSM.twoMonsterCombo(combo);

    // 1. Handle Errors
    if (!result || result.length === 0 || result[0].includes("Invalid") || result[0].includes("No combination")) {
        showMonsterUI(false); // Default UI for error
        showNoMonsterError();
        return;
    }

    // 2. Clear old tabs
    tabsContainer.innerHTML = '';

    // 3. Logic: If > 1 result, use Tabs Mode
    if (result.length > 1) {
        
        // --- NEW: SORT BY LENGTH (Longest Name First) ---
        // This puts the "biggest" buttons on the left
        result.sort((a, b) => b.length - a.length); 

        result.forEach((monsterName, index) => {
            const btn = document.createElement('button');
            btn.className = 'tab-button'; 
            btn.textContent = monsterName;
            
            btn.addEventListener('click', () => {
                // Handle Active State
                Array.from(tabsContainer.children).forEach(c => c.classList.remove('active-tab'));
                btn.classList.add('active-tab');
                loadFromTab(monsterName);
            });

            // Auto-select the first tab (which is now the longest one)
            if (index === 0) btn.classList.add('active-tab');
            tabsContainer.appendChild(btn);
        });

        // ACTIVATE TABS UI (Hides Common/Rare/Epic)
        showMonsterUI(true);
        
        // Load the first result (the longest one)
        loadFromTab(result[0]);

    } else {
        // Single result: Use standard UI
        const name = result[0];
        
        if (/^rare/i.test(name)) currentRarity = "Rare";
        else if (/^epic/i.test(name)) currentRarity = "Epic";
        else currentRarity = "Common";
        
        monsterImage.setAttribute('data-name', normalizeName(name));
        showMonsterUI(false); // Standard UI
        updateActiveTab();
        loadMonsterImage(name);
        loadStats(name);
    }
}

// Helper to switch monster from the dynamic tabs
function loadFromTab(monsterName) {
    const cleanName = monsterName.trim();
    searchInput.value = cleanName;
    
    // Set internal state, but buttons are hidden so visual updateActiveTab won't show much
    if (/^rare/i.test(cleanName)) currentRarity = "Rare";
    else if (/^epic/i.test(cleanName)) currentRarity = "Epic";
    else currentRarity = "Common";

    monsterImage.setAttribute('data-name', normalizeName(cleanName));

    loadMonsterImage(cleanName);
    loadStats(cleanName);
}

// --- End of Update ---

async function loadStats(forceName) {
    const rawInput = forceName || searchInput.value.trim();
    if (!rawInput) return;

    try {
        const baseName = normalizeName(rawInput); 
        const monster = MSM[rawInput]; 

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
        
        // Logic check: if we are in "Tabs Mode", currentRarity might be derived from the specific tab name
        // We display whatever the current loaded monster is.
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
    try { await MSM[raw].playSound(); } 
    catch (err) { console.warn("Sound failed:", err); }
}

// --- 4. AUTOCOMPLETE LOGIC ---

function setupAutocomplete(inputElement, resultElement) {
    if(!resultElement) return;

    inputElement.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (!query) {
            resultElement.style.display = 'none';
            return;
        }

        const matches = monsterRegistry.filter(name => 
            name.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            resultElement.style.left = inputElement.offsetLeft + "px";
            resultElement.style.top = (inputElement.offsetTop + inputElement.offsetHeight + 10) + "px";
            renderSuggestions(matches, resultElement, inputElement);
        } else {
            resultElement.style.display = 'none';
        }
    });
    
    inputElement.addEventListener('blur', function() {
        setTimeout(() => {
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
        if (/^rare/i.test(name)) currentRarity = "Rare";
        else if (/^epic/i.test(name)) currentRarity = "Epic";
        else currentRarity = "Common";

        monsterImage.setAttribute('data-name', normalizeName(name));

        // Ensure tabs are gone for search
        tabsContainer.innerHTML = '';
        showMonsterUI(false); 

        updateActiveTab(); 
        loadMonsterImage(name); 
        loadStats(name);
    }
}

setupAutocomplete(searchInput, suggestionsContainer);
setupAutocomplete(firstInput, suggestions1);
setupAutocomplete(secondInput, suggestions2);


(function loadMSMAPI() {
    const PRIMARY_API = "https://msm-api.pages.dev/dist/msm.js";
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