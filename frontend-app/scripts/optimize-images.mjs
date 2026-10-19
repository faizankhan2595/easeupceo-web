// Converts the large product screenshots in public/ to WebP in public/img/
// (max 1600px wide). Components reference /img/<name>.webp.
// Usage: node scripts/optimize-images.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "public");
const out = path.join(src, "img");
const SKIP = new Set(["favicon-icon.png", "worklynx-favicon.png"]);

fs.mkdirSync(out, { recursive: true });

let before = 0;
let after = 0;
for (const file of fs.readdirSync(src).filter((f) => f.endsWith(".png") && !SKIP.has(f))) {
  const input = path.join(src, file);
  const output = path.join(out, file.replace(/\.png$/, ".webp"));
  await sharp(input).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80, effort: 6 }).toFile(output);
  const a = fs.statSync(input).size;
  const b = fs.statSync(output).size;
  before += a;
  after += b;
  console.log(`${file.padEnd(24)} ${(a / 1024).toFixed(0).padStart(5)} KB → ${(b / 1024).toFixed(0).padStart(4)} KB`);
}
console.log(`total ${(before / 1048576).toFixed(1)} MB → ${(after / 1048576).toFixed(1)} MB`);
