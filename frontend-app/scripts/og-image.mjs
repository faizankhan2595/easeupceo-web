// Generates public/og-image.jpg (1200×630), the default social share image.
// Usage: node scripts/og-image.mjs
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const W = 1200;
const H = 630;

const text = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="85%" cy="10%" r="70%">
      <stop offset="0" stop-color="#2b4bff" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#01051C" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="#01051C"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif">
    <text x="80" y="320" font-size="62" font-weight="700" fill="#ffffff">HR, payroll, EPOS and</text>
    <text x="80" y="398" font-size="62" font-weight="700" fill="#ffffff">restaurant POS in one place.</text>
    <text x="80" y="470" font-size="30" fill="#aab3d1">Built for UK businesses · From £6 per employee per month</text>
    <text x="80" y="560" font-size="26" font-weight="600" fill="#7f8cff">worklynx.io</text>
  </g>
</svg>`;

const logo = await sharp(path.join(root, "src/assets/worklynx-dark.png")).resize({ height: 92 }).toBuffer();

await sharp(Buffer.from(text))
  .composite([{ input: logo, left: 70, top: 90 }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(path.join(root, "public/og-image.jpg"));

console.log("wrote public/og-image.jpg");
