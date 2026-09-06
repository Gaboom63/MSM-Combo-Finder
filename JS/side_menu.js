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
    const ar = $('menuArrow'), ib = $('sideMenuButton'), ic = $('island-container'), bd = $('menuArrow'), be = $('title');
    
    if (typeof reset === 'function') reset();

    if (!menuOpen) {
        menuOpen = 1;
        
        $('title').innerHTML = `MSM Dawn Of Fire <br> Combo Finder`; 
        document.body.style.backgroundImage = 'url("CSS/images/backgrounds/Party Island Sky.jpg")';
        be.style.background = `linear-gradient(to bottom, #F5BE27, rgb(255, 136, 0))`;
        be.style.webkitBackgroundClip = "text";
        be.style.webkitTextFillColor = "transparent";
        be.style.webkitTextStroke = "1px black";
        be.style.marginTop = "20px";
        be.style.fontWeight = "bold";
        ib.style.backgroundColor = "var(--pure-sky-blue)"; 
        
        $('monster-spotlight').style.display = $('inputContainer').style.display = 'none';
        
        ic.classList.remove('slide-to-right');
        ic.style.display = 'flex'; 
        void ic.offsetWidth;       
        ic.classList.add('slide-from-right');

        ib.classList.add("menu-open"); 
        ar.classList.replace("fa-arrow-left", "fa-arrow-right"); 
        $('iconContainer').style.display = 'none';
        bd.style.color = "black";
        
    } else {
        menuOpen = 0; 
        
        $('title').innerHTML = `My Singing Monsters <br> Combo Finder`; 
        document.body.style.backgroundImage = `url('${currentEvent.img}')`;
        be.style.background = `linear-gradient(to bottom, lightgreen, rgb(245, 189, 84))`;
        be.style.webkitBackgroundClip = "text";
        be.style.webkitTextFillColor = "transparent";
        be.style.webkitTextStroke = "1px black";
        be.style.marginTop = "20px";
        be.style.fontWeight = "bold";
        ib.style.backgroundColor = "var(--pink-glass-hover)";
        
        $('inputContainer').style.display = 'flex';
        $('monster-spotlight').style.display = 'flex';
        
        ic.classList.remove('slide-from-right'); 
        void ic.offsetWidth; 
        ic.classList.add('slide-to-right');

        ib.classList.remove("menu-open"); 
        ar.classList.replace("fa-arrow-right", "fa-arrow-left"); 
        $('iconContainer').style.display = 'flex';
        bd.style.color = "white";
        
        setTimeout(() => { 
            if (!menuOpen) { 
                ic.classList.remove('slide-to-right'); 
                ic.style.display = 'none'; 
            } 
        }, 500); 
    }
    
    if (typeof updateMonsterOfTheDay === 'function') updateMonsterOfTheDay();
}