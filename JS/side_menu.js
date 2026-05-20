let body = document.body; 
let title = document.getElementById('title'); 
let mainIslandImg = document.getElementById('island-img'); 
let inventoryImg = document.getElementById('inventory-img'); 
let islandContainer = document.getElementById('island-container'); 
let costImg = document.getElementById('cost-img');
let mainStatBox = document.getElementById('mainStatBox'); 
let menuOpen = 0; 

// --- GLOBAL STATE FOR PAGINATED TRACKER ---
let allIslandsCached = [];     // Stores all 45 islands fetched from API
let currentIslandIndex = 0;    // Current starting position window index
const ISLANDS_PER_PAGE = 5;    // Max visible columns at one time
let activeSearchQuery = "";    // Holds active input query string value text

const islandColors = {
    // --- Natural/Core Islands ---
    "plant": "#a3d9a5",
    "cold": "#88c0d0",
    "air": "#ebcb8b",
    "water": "#81a1c1",
    "earth": "#d08770",
    "gold": "#fcd34d",
    "tribal": "#ff7a59",

    // --- Fire Islands ---
    "haven": "#e57373",
    "oasis": "#f4a261",
    "fire oasis": "#f4a261",

    // --- Magical Islands ---
    "psychic": "#b983ff",
    "faerie": "#ff94cc",
    "bone": "#e8e5da",
    "light": "#fff59d",

    // --- Shungabush & Ethereal ---
    "shugabush": "#8d6e63",
    "ethereal": "#4ca6ff",
    "sanctum": "#5e35b1",
    "mythical": "#00acc1",

    // --- Workshop & Wublin structures ---
    "workshop": "#00f5d4",
    "wublin": "#7b2cbf",
    "celestial": "#ffb703",
    "nexus": "#06d6a0",

    // --- Alternate Gameplay / Utilities ---
    "colossingum": "#94a3b8",
    "composer": "#a78bfa",
    "seasonal": "#ff6b6b",
    "paironormal": "#3d5a80", 
    "plasma": "#ff007f",
    "shadow": "#374151",
    "mech": "#4b5563",

    // --- Mirror Islands (Desaturated / Deep variant shifts of originals) ---
    "mirror plant": "#709a72",
    "mirror cold": "#5f8a96",
    "mirror air": "#b59859",
    "mirror water": "#54728c",
    "mirror earth": "#945c49",
    "mirror light": "#ccc262",
    "mirror psychic": "#8554c7",
    "mirror faerie": "#c95ca0",
    "mirror bone": "#b0ad9e",
    "mirror paironormal": "#213654",

    // --- Fallback Default ---
    "default": "#b48ead" 
};

// --- DEFINED PROGRESSION ISLAND SEQUENCE ---
const ISLAND_ORDER = ["plant", "cold", "air", "water", "earth", "haven", "gold"];

function toTitleCase(str) {
    let lower = str.toLowerCase().trim();

    // Specific mapping rules for Fire Haven and Fire Oasis
    if (lower === "haven" || lower === "fire haven") {
        return "Fire Haven";
    }
    if (lower === "oasis" || lower === "fire oasis") {
        return "Fire Oasis";
    }

    // Default title case logic for all other islands
    return str.replace(
        /\w\S*/g,
        function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }
    );
}

// --- COMPLEX MULTI-TIER SORTING ENGINE ---
function sortMonstersCustom(monstersArray, primaryIsland) {
    return monstersArray.sort((a, b) => {
        const homeA = a.collectedOn.map(i => i.toLowerCase());
        const homeB = b.collectedOn.map(i => i.toLowerCase());

        // 1. DYNAMIC UX PRIORITY: Push monsters belonging to the first visible island to the top!
        if (primaryIsland) {
            const lowerPrimary = primaryIsland.toLowerCase();
            const hasA = homeA.includes(lowerPrimary);
            const hasB = homeB.includes(lowerPrimary);
            
            if (hasA && !hasB) return -1; // Monster A has it, push it up
            if (!hasA && hasB) return 1;  // Monster B has it, push it up
        }

        // 2. ABSOLUTE PROGRESSION SEQUENCE SORT (Plant, Cold, Air, etc.)
        let indexA = ISLAND_ORDER.findIndex(island => homeA.includes(island));
        let indexB = ISLAND_ORDER.findIndex(island => homeB.includes(island));

        if (indexA === -1) indexA = 999;
        if (indexB === -1) indexB = 999;

        if (indexA !== indexB) {
            return indexA - indexB; 
        }

        // 3. RARITY SEQUENCE SORT (Common -> Rare -> Epic)
        const getRarityWeight = (name) => {
            const lower = name.toLowerCase();
            if (lower.startsWith("epic ")) return 3;
            if (lower.startsWith("rare ")) return 2;
            return 1; 
        };

        const rarityWeightA = getRarityWeight(a.name);
        const rarityWeightB = getRarityWeight(b.name);

        if (rarityWeightA !== rarityWeightB) {
            return rarityWeightA - rarityWeightB; 
        }

        // 4. ALPHABETICAL SORT
        return a.name.localeCompare(b.name);
    });
}

function setupSideMenu() {    
    const arrow = document.getElementById("menuArrow");

    if(menuOpen === 0) {
        title.innerHTML = `My Singing Monsters <br> Stats Finder`; 
        body.style.backgroundImage = 'url("CSS/images/backgrounds/SideMenu.jpg")'; 
        sideMenuB.style.backgroundColor = "var(--pure-purple)";
        spotlight.style.display = 'none'; 
        inputContainer.style.display = 'none'; 
        
        islandContainer.classList.remove('slide-to-right');
        islandContainer.classList.add('slide-from-right');

        // Move button left
        sideMenuB.classList.add("menu-open");

        // Change arrow
        arrow.classList.remove("fa-arrow-left");
        arrow.classList.add("fa-arrow-right");
        iconContainer.style.display = 'none'; 

        menuOpen = 1; 
    } else {
        title.innerHTML = `My Singing Monsters <br> Combo Finder`; 
        body.style.backgroundImage = 'url("CSS/images/backgrounds/NoEventShellbeat.jpg")'; 
        sideMenuB.style.backgroundColor = "var(--pink-glass-hover)";
        
        islandContainer.classList.remove('slide-from-right');
        islandContainer.classList.add('slide-to-right');

        // Move button back
        sideMenuB.classList.remove("menu-open");

        // Change arrow back
        arrow.classList.remove("fa-arrow-right");
        arrow.classList.add("fa-arrow-left");
        iconContainer.style.display = 'flex';

        menuOpen = 0; 
        
        setTimeout(() => {
            if (menuOpen === 0) { 
                islandContainer.classList.remove('slide-to-right');
                reset(); 
            }
        }, 500);
    }
}

async function setupImages() {
    let islandImg = await MSM.getIslandImg('plant'); 
    let inventoryImgPath = await MSM["Epic Brump"].getImageURL(); 
    console.log(islandImg[0]);
    mainIslandImg.style.backgroundImage = `url(${islandImg[0]})`;
    inventoryImg.style.backgroundImage = `url(${inventoryImgPath})`;
    costImg.style.backgroundImage = `url("images/important/Vault-Of-Diamonds.jpg")`;     
}

// --- CORE LAYOUT DOM COMPILER ---
function renderTrackerGrid(islands, monsters) {
    const statsDiv = document.getElementById('stats');
    if (!statsDiv) return;

    statsDiv.style.setProperty('--island-count', islands.length);

    let html = '';

    // Header Row
    html += `<div class="tracker-row header-row">
                <div class="tracker-corner">Island Names:</div>`;
    
    islands.forEach(island => {
        const needsIslandSuffix = !island.name.includes("Fire") && !island.name.includes("Island");
        const displayTitle = needsIslandSuffix ? `${island.name}<br>Island` : island.name;
        
        // Removed the progress-ring here since it's no longer a user tracking checklist!
        html += `
            <div class="tracker-island-header" style="background-color: ${island.color}; display: flex; justify-content: center; align-items: center;">
                <span class="island-title">${displayTitle}</span>
            </div>`;
    });
    html += `</div>`;

    // Monster Rows
    monsters.forEach(monster => {
        html += `<div class="tracker-row">`;
        
        const safeMonsterName = monster.name.toLowerCase().replace(/[^a-z0-9]/g, '');
        const imgId = `tracker-img-${safeMonsterName}`;

        html += `
            <div class="tracker-monster-col">
                <div class="monster-icon-wrapper">
                    <img id="${imgId}" src="${monster.img}" alt="${monster.name}">
                </div>
                <span>${monster.name}</span>
            </div>`;

        // THE UPDATE: Replaced the interactive checkboxes with styled status badges!
        islands.forEach(island => {
            const isAvailable = monster.collectedOn.includes(island.name);

            if (isAvailable) {
                html += `
                    <div class="tracker-cell" style="background-color: ${island.color};">
                        <div class="availability-badge available" title="Available on ${island.name}">
                            <i class="fas fa-check"></i>
                        </div>
                    </div>`;
            } else {
                html += `
                    <div class="tracker-cell" style="background-color: ${island.color};">
                        <div class="availability-badge unavailable">
                            <i class="fas fa-minus"></i>
                        </div>
                    </div>`;
            }
        });

        html += `</div>`;
    });

    statsDiv.innerHTML = html;
}
// --- OPTIMIZED BULK DATA INITIALIZER ---
async function initDynamicTracker() {
    try {
        // Fetch and map array rows based on the progression sequence order definition
        if (allIslandsCached.length === 0) {
            const rawIslands = await MSM.fetchIslands();
            
            // Filter and match elements to mirror the sequence track order mapping rule directly
            const sortedRawIslands = rawIslands.filter(name => ISLAND_ORDER.includes(name.toLowerCase()))
                .sort((a, b) => ISLAND_ORDER.indexOf(a.toLowerCase()) - ISLAND_ORDER.indexOf(b.toLowerCase()));
            
            // Grab any remaining layout properties returned from the base configuration dataset
            const remainingIslands = rawIslands.filter(name => !ISLAND_ORDER.includes(name.toLowerCase()));
            const finalIslandList = [...sortedRawIslands, ...remainingIslands];

            allIslandsCached = finalIslandList.map(name => ({
                id: name,
                name: toTitleCase(name),
                color: islandColors[name.toLowerCase()] || islandColors.default
            }));
        }

        setupPaginationControls();
        await renderActiveGridSlice();

    } catch (error) {
        console.error("Error setting up bulk tracker grid:", error);
    }
}

function setupPaginationControls() {
    const prevBtn = document.getElementById('previous-island');
    const nextBtn = document.getElementById('next-island');
    const miniSearchInput = document.getElementById('tracker-mini-search');

    // Setup input event listener for our custom pre-filter mechanism
    if (miniSearchInput && !miniSearchInput.dataset.hooked) {
        miniSearchInput.dataset.hooked = "true";
        miniSearchInput.addEventListener('input', (e) => {
            activeSearchQuery = e.target.value.toLowerCase().trim();
            // Re-render instantly to filter matching rows matching the query string
            renderActiveGridSlice();
        });
    }

    if (prevBtn && !prevBtn.dataset.hooked) {
        prevBtn.dataset.hooked = "true";
        prevBtn.onclick = async () => {
            if (currentIslandIndex > 0) {
                currentIslandIndex = Math.max(0, currentIslandIndex - ISLANDS_PER_PAGE);
                await renderActiveGridSlice();
            }
        };
    }

    if (nextBtn && !nextBtn.dataset.hooked) {
        nextBtn.dataset.hooked = "true";
        nextBtn.onclick = async () => {
            if (currentIslandIndex + ISLANDS_PER_PAGE < allIslandsCached.length) {
                currentIslandIndex += ISLANDS_PER_PAGE;
                await renderActiveGridSlice();
            }
        };
    }
}

// --- VIEWPORT SLICE MATRIX GENERATOR ---
async function renderActiveGridSlice() {
    // Source data directly from your global registry (~521 items)
    const targetMonsters = (typeof monsterRegistry !== 'undefined' && monsterRegistry.length > 0) 
        ? monsterRegistry 
        : ["Potbelly", "Noggin", "Toe Jammer", "Mammott"];

    // 1. Filter our monster list based on the search query
    const filteredMonsterList = targetMonsters.filter(name => {
        if (!activeSearchQuery) return true;
        return name.toLowerCase().includes(activeSearchQuery);
    });

    // 2. DYNAMICALLY DETERMINING VISIBLE ISLAND COLUMNS
    let activeIslandsPool = [...allIslandsCached]; // Default pool is all 45 islands

    if (activeSearchQuery && filteredMonsterList.length > 0) {
        // Gather every single unique island ID inhabited by ANY monster matching the search query
        const uniqueIslandIds = new Set();
        
        const monsterPromises = filteredMonsterList.map(name => MSM.get(name).catch(() => null));
        const resolvedFilterMonsters = await Promise.all(monsterPromises);

        resolvedFilterMonsters.forEach(monsterData => {
            if (monsterData && Array.isArray(monsterData.islands)) {
                monsterData.islands.forEach(islandId => uniqueIslandIds.add(islandId.toLowerCase()));
            }
        });

        // Re-filter out valid structural exceptions (e.g., stripping Tribal/Colossingum if all matches are Rares/Epics)
        // Then build a completely custom, isolated island array pool sorted by your ISLAND_ORDER
        const searchMatchedIslands = allIslandsCached.filter(island => uniqueIslandIds.has(island.id.toLowerCase()));
        
        if (searchMatchedIslands.length > 0) {
            activeIslandsPool = searchMatchedIslands;
            
            // BOUNDARY SAFEGUARD: If the user types a new search query that shrinks the pool,
            // ensure our scrolling index isn't parked out-of-bounds of the new array size!
            if (currentIslandIndex >= activeIslandsPool.length) {
                currentIslandIndex = 0;
            }
        }
    } else if (!activeSearchQuery) {
        // Reset scrolling boundaries gracefully when search query is cleared completely
        // This ensures the pagination buttons behave normally on the full 45-island view
    }

    // 3. Slice out the 5 visible columns from our active pool (whether full pool or search pool)
    const visibleIslands = activeIslandsPool.slice(currentIslandIndex, currentIslandIndex + ISLANDS_PER_PAGE);
    const formattedMonsters = [];

    // 4. Resolve exact metadata rows for the active segment
    const monsterPromises = filteredMonsterList.map(name => MSM.get(name).catch(() => null));
    const resolvedMonsters = await Promise.all(monsterPromises);

    resolvedMonsters.forEach((monsterData, idx) => {
        const originalName = filteredMonsterList[idx];
        if (monsterData && Array.isArray(monsterData.islands)) {
            
            // Filter out invalid combinations (No Rares/Epics on Tribal or Colossingum)
            const filteredIslands = monsterData.islands.filter(islandName => {
                const lowerIsland = islandName.toLowerCase();
                const lowerMonster = originalName.toLowerCase();
                const isRareOrEpic = lowerMonster.startsWith("rare ") || lowerMonster.startsWith("epic ");

                if (isRareOrEpic && (lowerIsland === "tribal" || lowerIsland === "colossingum")) {
                    return false; 
                }
                return true; 
            });

            // Check presence in our active visible slice
            const hasPresenceInSlice = visibleIslands.some(island => 
                filteredIslands.some(inst => inst.toLowerCase() === island.id.toLowerCase())
            );

            if (hasPresenceInSlice) {
                const validIslands = filteredIslands.map(i => toTitleCase(i));
                formattedMonsters.push({
                    name: originalName,
                    img: "images/important/mammoticon.png", 
                    collectedOn: validIslands 
                });
            }
        }
    });

    const primaryVisibleIslandId = visibleIslands[0] ? visibleIslands[0].id : null;
    const customSortedMonsters = sortMonstersCustom(formattedMonsters, primaryVisibleIslandId);

    renderTrackerGrid(visibleIslands, customSortedMonsters);
    lazyLoadMonsterImages(customSortedMonsters);
    
    // 5. MANAGE PAGINATION ARROW BUTTONS ACCORDING TO THE ACTIVE POOL SIZE
    const prevBtn = document.getElementById('previous-island');
    const nextBtn = document.getElementById('next-island');
    
    if (prevBtn) prevBtn.style.opacity = currentIslandIndex === 0 ? "0.3" : "1";
    if (nextBtn) nextBtn.style.opacity = (currentIslandIndex + ISLANDS_PER_PAGE >= activeIslandsPool.length) ? "0.3" : "1";
}

async function lazyLoadMonsterImages(monsters) {
    monsters.forEach(async (monster) => {
        try {
            const monsterData = await MSM.get(monster.name);
            if (monsterData) {
                const safeName = monster.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                const imgId = `tracker-img-${safeName}`;
               
                if (document.getElementById(imgId) && typeof monsterData.loadImage === 'function') {
                    monsterData.loadImage(imgId); 
                }
            }
        } catch (e) {
            console.warn(`Could not load image for ${monster.name}`, e);
        }
    });
}

function loadStatBox() {
    islandContainer.classList.remove('slide-from-right');
    mainStatBox.style.display = 'flex'; 
    title.style.display = 'none'; 
    sideMenuB.style.display = 'none'; 
    blurOverlay.style.display = 'block';
    requestAnimationFrame(() => blurOverlay.classList.add('active'));
    document.getElementById('inventorySection').style.display = 'none';
    document.getElementById('statsSection').style.display = 'block';
    document.getElementById('costSection').style.display = 'none'; 

    initDynamicTracker();
    isSideMenuOpen = 1; 
}

function hideStatBox() {
    blurOverlay.classList.remove('active');
    blurOverlay.style.display = 'none';
    islandContainer.classList.add('slide-from-right');
    mainStatBox.style.display = 'none';
    title.style.display = 'block'; 
    sideMenuB.style.display = "flex";
}

// --- DYNAMIC INVENTORY CONTENT RENDERER ---
async function renderInventoryGridItems(displayList) {
    const gridContainer = document.getElementById('inventoryStatsBox');
    if (!gridContainer) return;

    // 1. Force API to fetch and return the EXACT objects for statues
    // We await them and store them in an array so we don't rely on the global MSM cache lagging!
    const statuePromises = displayList.map(name => MSM.get(name).catch(() => null));
    const resolvedStatues = await Promise.all(statuePromises);

    // 2. Map out every unique egg required directly from the RESOLVED objects
    const uniqueEggsSet = new Set();
    resolvedStatues.forEach(statueObj => {
        if (statueObj && statueObj.inventory) {
            Object.keys(statueObj.inventory).forEach(eggName => uniqueEggsSet.add(eggName));
        }
    });

    // 3. Pre-fetch all required eggs
    const eggPromises = Array.from(uniqueEggsSet).map(eggName => MSM.get(eggName).catch(() => null));
    const resolvedEggs = await Promise.all(eggPromises);

    let html = '';

    // 4. Build Header
    html += `<div class="inventory-row inventory-header">
                <div class="inventory-corner-title">Statue Name:</div>
                <div class="inventory-main-stretch-title">Inventory Requirements</div>
             </div>`;

    // 5. Build Individual Rows
    resolvedStatues.forEach((statueObj, index) => {
        const monsterName = displayList[index];
        const safeMonsterName = monsterName.toLowerCase().replace(/[^a-z0-9]/g, '');
        const statueImgId = `inventory-statue-img-${safeMonsterName}`;

        html += `<div class="inventory-row">`;
        
        // Left Column (Always rendered)
        html += `
            <div class="inventory-statue-sidebar">
                <div class="monster-icon-wrapper">
                    <img id="${statueImgId}" src="images/important/mammoticon.png" alt="${monsterName}">
                </div>
                <span>${monsterName}</span>
            </div>`;

        // Right Column
        html += `<div class="inventory-items-container-box">`;

        // THE FIX: Check the directly resolved object instead of the global MSM cache
        if (statueObj && statueObj.inventory && Object.keys(statueObj.inventory).length > 0) {
            Object.entries(statueObj.inventory).forEach(([eggName, countRequired]) => {
                let activeEggUrl = "images/important/mammoticon.png";
                if (eggName.toLowerCase() === "flex") {
                        activeEggUrl = "images/important/Flex-egg.jpg";
                    } else {
                        // Otherwise, look up the egg in the API using strict or Title Case matching
                        const eggObj = MSM[eggName] || MSM[toTitleCase(eggName)];
                        if (eggObj && typeof eggObj.eggUrl === 'string') {
                            activeEggUrl = eggObj.eggUrl;
                        }
                    }
                // Pull egg URL directly from the resolved array if possible
                const matchingEgg = resolvedEggs.find(e => e && e.name && e.name.toLowerCase() === eggName.toLowerCase()) 
                                 || MSM[eggName] 
                                 || MSM[toTitleCase(eggName)];
                
                if (matchingEgg && typeof matchingEgg.eggUrl === 'string') {
                    activeEggUrl = matchingEgg.eggUrl;
                }

                html += `
                    <div class="inventory-egg-chip">
                        <span class="inventory-egg-badge">x${countRequired}</span>
                        <img src="${activeEggUrl}" alt="${eggName}" class="inventory-egg-sprite-render">
                        <span class="inventory-egg-label-text">${eggName}</span>
                    </div>`;
            });
        } else {
            // Safety fallback message in case the API hits an error
            html += `<span style="color: rgba(255,255,255,0.4); font-style: italic; width: 100%; text-align: center; margin-top: 15px;">Data syncing...</span>`;
        }

        html += `   </div>
              </div>`; 
    });

    gridContainer.innerHTML = html;

    // 6. Trigger API Image Loaders safely
    resolvedStatues.forEach((statueObj, index) => {
        const monsterName = displayList[index];
        const safeMonster = monsterName.toLowerCase().replace(/[^a-z0-9]/g, '');
        const statueImg = document.getElementById(`inventory-statue-img-${safeMonster}`);
        
        // Use resolved object method directly
        if (statueImg && statueObj && typeof statueObj.loadImage === 'function') {
            statueObj.loadImage(statueImg.id || statueImg);
        } else if (statueImg && MSM[monsterName] && typeof MSM[monsterName].loadImage === 'function') {
            MSM[monsterName].loadImage(statueImg.id || statueImg);
        }
    });
}

function setupInventorySearch(fullMonsterList) {
    const searchInput = document.getElementById('inventory-mini-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filteredList = fullMonsterList.filter(name => 
            name.toLowerCase().includes(query)
        );
        renderInventoryGrid(filteredList);
        document.getElementById('inventory-mini-search').focus();
    });
}

let MASTER_STATUE_LIST = [];
let isInventoryShellBuilt = false;

async function initializeMasterStatueList() {
    // If we already built the list, skip this to save network time
    if (MASTER_STATUE_LIST.length > 0) return;

    // Grab the full 521 master list from your loaded registry
    const allMonsters = (typeof monsterRegistry !== 'undefined' && monsterRegistry.length > 0) 
        ? monsterRegistry 
        : ["Brump", "Zynth", "Poewk", "Thwok", "Adult Attmoz"]; // Fallback

    // Pre-fetch all objects in parallel
    const monsterPromises = allMonsters.map(name => MSM.get(name).catch(() => null));
    const resolvedMonsters = await Promise.all(monsterPromises);

    const validStatues = [];

    // THE MAGIC TRICK: Sweep the loaded data for the .inventory property!
    resolvedMonsters.forEach((monsterData, index) => {
        if (monsterData && monsterData.inventory && Object.keys(monsterData.inventory).length > 0) {
            validStatues.push(allMonsters[index]);
        }
    });

    // Save it globally and sort alphabetically for a clean UI
    if (validStatues.length > 0) {
        MASTER_STATUE_LIST = validStatues.sort((a, b) => a.localeCompare(b));
    } else {
        MASTER_STATUE_LIST = ["Brump", "Zynth", "Poewk", "Thwok", "Adult Attmoz"];
    }
}

async function loadInventoryBox() {
    // Hide standard stats section, show inventory
    document.getElementById('statsSection').style.display = 'none';
    document.getElementById('costSection').style.display = 'none'; 
    document.getElementById('inventorySection').style.display = 'block';


    islandContainer.classList.remove('slide-from-right');
    mainStatBox.style.display = 'flex'; 
    title.style.display = 'none'; 
    sideMenuB.style.display = 'none'; 
    blurOverlay.style.display = 'block';
    requestAnimationFrame(() => blurOverlay.classList.add('active'));

    const inventorySection = document.getElementById('inventorySection');

    // Inject the persistent shell exactly ONCE
    if (!isInventoryShellBuilt) {
        inventorySection.innerHTML = `
            <div class="tracker-controls">
                <input type="text" id="inventory-mini-search" placeholder="🔍 Filter statues..." autocomplete="off">
                <button id="closeInventoryMenu" title="Close" onclick="hideStatBox()"><i class="fas fa-times"></i></button>
            </div>
            <div id="inventoryStatsBox">
                <div style="color: rgba(255,255,255,0.7); font-size: 18px; font-weight: bold; width: 100%; text-align: center; margin-top: 10vh; letter-spacing: 1px;">
                    <i class="fas fa-circle-notch fa-spin" style="margin-right: 10px;"></i> Scanning Monster Registry...
                </div>
            </div>
        `;

        // Attach the listener directly to the dynamically populated MASTER list
        const searchInput = document.getElementById('inventory-mini-search');
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const filteredList = MASTER_STATUE_LIST.filter(name => 
                name.toLowerCase().includes(query)
            );
            renderInventoryGridItems(filteredList);
        });

        isInventoryShellBuilt = true;
    } else {
        // Clear the search bar if they close and reopen the menu
        document.getElementById('inventory-mini-search').value = '';
        
        // Throw the loading screen back up briefly in case it takes a millisecond to pull from cache
        document.getElementById('inventoryStatsBox').innerHTML = `
            <div style="color: rgba(255,255,255,0.7); font-size: 18px; font-weight: bold; width: 100%; text-align: center; margin-top: 10vh; letter-spacing: 1px;">
                <i class="fas fa-circle-notch fa-spin" style="margin-right: 10px;"></i> Loading Statues...
            </div>`;
    }

    // 1. Wait for the dynamic sweep to finish (Instant if already cached)
    await initializeMasterStatueList();

    // 2. Render the populated grid with EVERY statue in the game!
    renderInventoryGridItems(MASTER_STATUE_LIST);
    isSideMenuOpen = 1;
}

function hideInventoryBox() {
    mainStatBox.style.display = 'none';
    title.style.display = 'block';
    sideMenuB.style.display = 'flex';
    blurOverlay.classList.remove('active');
    setTimeout(() => { blurOverlay.style.display = 'none'; }, 500);
    
    // Slide selection dashboard framework back into focus view gracefully
    islandContainer.classList.remove('slide-to-right');
    islandContainer.classList.add('slide-from-right');
}

setTimeout(() => {
    setupImages(); 
}, 1000);

// --- COST MENU GLOBAL STATE ---
let isCostShellBuilt = false;

// Format ugly keys like "shugabush_diamond_cost" into "Shugabush Diamond"
function formatCostHeaderTitle(key) {
    let cleaned = key.replace(/_cost$/i, '').replace(/_/g, ' ');
    return toTitleCase(cleaned);
}

function loadCostBox() {
    document.getElementById('inventorySection').style.display = 'none';
    document.getElementById('statsSection').style.display = 'none';

    // 2. Safely Target the Cost Section
    const costSec = document.getElementById('costSection');
    if (!costSec) return;
    costSec.style.display = 'block';

    // 3. Safely handle global UI elements
    const islandCont = document.getElementById('island-container');
    if (islandCont) islandCont.classList.remove('slide-from-right');
    
    const mainBox = document.getElementById('mainStatBox');
    if (mainBox) mainBox.style.display = 'block'; 
    
    const titleEl = document.getElementById('title');
    if (titleEl) titleEl.style.display = 'none'; 
    
    const sideBtn = document.getElementById('sideMenuButton');
    if (sideBtn) sideBtn.style.display = 'none'; 
    
    const blurOver = document.getElementById('blurOverlay');
    if (blurOver) {
        blurOver.style.display = 'block';
        requestAnimationFrame(() => blurOver.classList.add('active'));
    }

    // 4. Build the persistent shell exactly ONCE
    if (!isCostShellBuilt) {
        costSec.innerHTML = `
            <div class="tracker-controls">
                <input type="text" id="cost-mini-search" placeholder="🔍 Find monster costs..." autocomplete="off">
                <button id="closeInventoryMenu" title="Close" onclick="hideStatBox()"><i class="fas fa-times"></i></button>
            </div>
            <div id="costStatsBox"></div>
        `;

        // Hook up the search bar to filter costs intelligently
        const searchInput = document.getElementById('cost-mini-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                
                // PERFORMANCE FIX: If the box is empty, clear the grid immediately
                if (!query) {
                    renderCostGridItems([]);
                    return;
                }

                const targetMonsters = (typeof monsterRegistry !== 'undefined') ? monsterRegistry : ["Mammott", "Potbelly", "Toe Jammer"];
                const filteredList = targetMonsters.filter(name => name.toLowerCase().includes(query));
                renderCostGridItems(filteredList);
            });
        }
        isCostShellBuilt = true;
    } else {
        // Clear search input on reopening
        const searchInput = document.getElementById('cost-mini-search');
        if (searchInput) searchInput.value = '';
    }

    // 5. THE FIX: Initialize with an EMPTY array to show the search prompt!
    renderCostGridItems([]);
    isSideMenuOpen = 1; 
}

async function renderCostGridItems(displayList) {
    const gridContainer = document.getElementById('costStatsBox');
    if (!gridContainer) return;

    // THE FIX: Check for empty state before running any heavy logic
    if (!displayList || displayList.length === 0) {
        gridContainer.innerHTML = `
            <div class="empty-search-prompt">
                <i class="fas fa-search-dollar"></i>
                <h3>Cost Database</h3>
                <p>Type a monster name above to reveal its pricing!</p>
            </div>
        `;
        return; // Stop function execution here
    }

    // 1. Fetch filtered objects
    const monsterPromises = displayList.map(name => MSM.get(name).catch(() => null));
    const resolvedMonsters = await Promise.all(monsterPromises);

    // 2. Dynamically scan ONLY the searched monsters for cost columns
    const uniqueCostKeysSet = new Set();
    resolvedMonsters.forEach(monsterData => {
        if (monsterData && monsterData.costs) {
            Object.keys(monsterData.costs).forEach(key => {
                if (key !== 'name') uniqueCostKeysSet.add(key);
            });
        }
    });

    const sortedCostKeys = Array.from(uniqueCostKeysSet).sort();
    gridContainer.style.setProperty('--cost-column-count', sortedCostKeys.length);

    let html = '';

    // 3. Build Header Row
    html += `<div class="cost-row cost-header-row">
                <div class="cost-corner-title">Monster</div>`;
    sortedCostKeys.forEach(key => {
        html += `<div class="cost-main-column-title">${formatCostHeaderTitle(key)}</div>`;
    });
    html += `</div>`;

    // 4. Build Individual Monster Rows
    resolvedMonsters.forEach((monsterData, index) => {
        if (!monsterData || !monsterData.costs) return;

        const monsterName = displayList[index];
        const safeMonsterName = monsterName.toLowerCase().replace(/[^a-z0-9]/g, '');
        const imgId = `cost-statue-img-${safeMonsterName}`;

        html += `<div class="cost-row">`;
        
        // Left Column
        html += `
            <div class="cost-sidebar">
                <div class="monster-icon-wrapper">
                    <img id="${imgId}" src="images/important/mammoticon.png" alt="${monsterName}">
                </div>
                <span>${monsterName}</span>
            </div>`;

        // Cells
        sortedCostKeys.forEach(key => {
            const costValue = monsterData.costs[key];
            if (costValue) {
                let iconHtml = `<i class="fas fa-coins" style="color: #fcd34d;"></i>`; 
                if (key.includes('diamond')) iconHtml = `<i class="fas fa-gem" style="color: #00f5d4;"></i>`;
                if (key.includes('ethereal') || key.includes('shard')) iconHtml = `<i class="fas fa-meteor" style="color: #b983ff;"></i>`;
                if (key.includes('starpower')) iconHtml = `<i class="fas fa-star" style="color: #f59e0b;"></i>`;
                if (key.includes('relic')) iconHtml = `<i class="fas fa-ring" style="color: #f4a261;"></i>`;

                html += `
                    <div class="cost-cell has-cost-value">
                        <div class="cost-badge">
                            ${iconHtml}
                            <span>${costValue}</span>
                        </div>
                    </div>`;
            } else {
                html += `<div class="cost-cell empty-cost-value"><i class="fas fa-minus"></i></div>`;
            }
        });

        html += `</div>`; 
    });

    gridContainer.innerHTML = html;

    // 5. Load Images
    resolvedMonsters.forEach((monsterData, index) => {
        const safeMonster = displayList[index].toLowerCase().replace(/[^a-z0-9]/g, '');
        const imgEl = document.getElementById(`cost-statue-img-${safeMonster}`);
        if (imgEl && monsterData && typeof monsterData.loadImage === 'function') {
            monsterData.loadImage(imgEl.id || imgEl);
        }
    });
}

async function renderCostGridItems(displayList) {
    const gridContainer = document.getElementById('costStatsBox');
    if (!gridContainer) return;

    // 1. Fetch all objects directly from the API cache
    const monsterPromises = displayList.map(name => MSM.get(name).catch(() => null));
    const resolvedMonsters = await Promise.all(monsterPromises);

    // 2. Dynamically scan all loaded monsters to find every possible unique cost type
    const uniqueCostKeysSet = new Set();
    resolvedMonsters.forEach(monsterData => {
        if (monsterData && monsterData.costs) {
            Object.keys(monsterData.costs).forEach(key => {
                if (key !== 'name') uniqueCostKeysSet.add(key); // Skip the raw name property
            });
        }
    });

    // Alphabetize the columns so Coins/Diamonds group cleanly
    const sortedCostKeys = Array.from(uniqueCostKeysSet).sort();
    
    // Inject the total column count into CSS to handle the grid stretch automatically
    gridContainer.style.setProperty('--cost-column-count', sortedCostKeys.length);

    let html = '';

    // 3. Build Header Row
    html += `<div class="cost-row cost-header-row">
                <div class="cost-corner-title">Monster Name</div>`;
    
    sortedCostKeys.forEach(key => {
        html += `<div class="cost-main-column-title">${formatCostHeaderTitle(key)}</div>`;
    });
    html += `</div>`;

    // 4. Build Individual Monster Rows
    resolvedMonsters.forEach((monsterData, index) => {
        if (!monsterData || !monsterData.costs) return;

        const monsterName = displayList[index];
        const safeMonsterName = monsterName.toLowerCase().replace(/[^a-z0-9]/g, '');
        const imgId = `cost-statue-img-${safeMonsterName}`;

        html += `<div class="cost-row">`;
        
        // Left Sticky Column Block
        html += `
            <div class="cost-sidebar">
                <div class="monster-icon-wrapper">
                    <img id="${imgId}" src="images/important/mammoticon.png" alt="${monsterName}">
                </div>
                <span>${monsterName}</span>
            </div>`;

        // Grid Cells for Costs
        sortedCostKeys.forEach(key => {
            const costValue = monsterData.costs[key];
            
            if (costValue) {
                // Determine color/icon visually based on the cost string
                let iconHtml = `<i class="fas fa-coins" style="color: #fcd34d;"></i>`; // Default Coin Gold
                if (key.includes('diamond')) iconHtml = `<i class="fas fa-gem" style="color: #00f5d4;"></i>`;
                if (key.includes('ethereal') || key.includes('shard')) iconHtml = `<i class="fas fa-meteor" style="color: #b983ff;"></i>`;
                if (key.includes('starpower')) iconHtml = `<i class="fas fa-star" style="color: #f59e0b;"></i>`;
                if (key.includes('relic')) iconHtml = `<i class="fas fa-ring" style="color: #f4a261;"></i>`;

                html += `
                    <div class="cost-cell has-cost-value">
                        <div class="cost-badge">
                            ${iconHtml}
                            <span>${costValue}</span>
                        </div>
                    </div>`;
            } else {
                html += `
                    <div class="cost-cell empty-cost-value">
                        <i class="fas fa-minus"></i>
                    </div>`;
            }
        });

        html += `</div>`; 
    });

    gridContainer.innerHTML = html;

    // 5. Asynchronously assign Profile Images via API loader
    resolvedMonsters.forEach((monsterData, index) => {
        const safeMonster = displayList[index].toLowerCase().replace(/[^a-z0-9]/g, '');
        const imgEl = document.getElementById(`cost-statue-img-${safeMonster}`);
        if (imgEl && monsterData && typeof monsterData.loadImage === 'function') {
            monsterData.loadImage(imgEl.id || imgEl);
        }
    });
}