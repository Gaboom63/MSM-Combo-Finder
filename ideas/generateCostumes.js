const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "images", "Costumes");
const outputFile = path.join(__dirname, "monsterCostumes.js");

function readCostumes(monsterDir) {
  const normal = {};
  const rare = {};
  const epic = {};

  const items = fs.readdirSync(monsterDir, { withFileTypes: true });

  let cNormal = 1, cRare = 1, cEpic = 1;

  for (const item of items) {
    if (item.isDirectory()) {
      const subDir = path.join(monsterDir, item.name);
      const subFiles = fs.readdirSync(subDir);
      for (const file of subFiles) {
        if (file.startsWith("Rare_")) {
          rare[`c${cRare++}`] = file.replace(".png", "");
        } else if (file.startsWith("Epic_")) {
          epic[`c${cEpic++}`] = file.replace(".png", "");
        } else {
          normal[`c${cNormal++}`] = file.replace(".png", "");
        }
      }
    } else if (item.isFile() && item.name.endsWith(".png")) {
      const file = item.name;
      if (file.startsWith("Rare_")) {
        rare[`c${cRare++}`] = file.replace(".png", "");
      } else if (file.startsWith("Epic_")) {
        epic[`c${cEpic++}`] = file.replace(".png", "");
      } else {
        normal[`c${cNormal++}`] = file.replace(".png", "");
      }
    }
  }

  return { normal, rare, epic };
}

const monsters = fs.readdirSync(baseDir)
  .filter(f => fs.statSync(path.join(baseDir, f)).isDirectory())
  .map(monsterName => {
    const monsterPath = path.join(baseDir, monsterName);
    const { normal, rare, epic } = readCostumes(monsterPath);
    return {
      name: monsterName,
      normal,
      rare,
      epic
    };
  });

const output = `const monsterCostumes = ${JSON.stringify(monsters, null, 2)};\n\nexport default monsterCostumes;`;
fs.writeFileSync(outputFile, output, "utf-8");

console.log(`✅ Generated ${outputFile}`);
    