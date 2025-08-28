const fs = require("fs");
const path = require("path");

function scanFolder(folder, exts) {
  const dir = path.join(__dirname, "assets", folder);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => exts.test(f));
}

const data = {
  concept: scanFolder("concept", /\.(png|jpe?g|gif|webp|svg)$/i),
  illustration: scanFolder("Illustration", /\.(png|jpe?g|gif|webp|svg)$/i),
  animation: scanFolder("Animation", /\.(mp4|webm|ogg|mov)$/i),
};

fs.writeFileSync("assets.json", JSON.stringify(data, null, 2));
console.log("✅ assets.json создан:", data);
