import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const logoPath = join(__dirname, '..', '..', 'logo.png');

const W = 1200;
const H = 630;

// Black logo (original), sized big
const logoBuffer = await sharp(logoPath)
  .resize(400, null, { fit: 'inside' })
  .toBuffer();
const logoMeta = await sharp(logoBuffer).metadata();

// White background + black logo + gradient italic text via SVG
const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#a78bfa"/>
      <stop offset="100%" style="stop-color:#38bdf8"/>
    </linearGradient>
  </defs>

  <!-- White background -->
  <rect width="${W}" height="${H}" fill="#f8f8f8"/>

  <!-- "Design systems from" -->
  <text x="${W/2}" y="410" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="48" fill="#0a0a0a" letter-spacing="-1">
    Design systems from
  </text>

  <!-- "the world's best" gradient italic -->
  <text x="${W/2}" y="480" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-weight="700" font-size="52" fill="url(#textGrad)" letter-spacing="-0.5">
    the world's best
  </text>

  <!-- Subtle bottom line -->
  <text x="${W/2}" y="560" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" fill="#999" letter-spacing="1">
    58 design systems  /  A/B wizard  /  shadcn/ui  /  zero AI
  </text>
</svg>`;

const bgBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

// Compose logo centered above text
const logoTop = 100;
await sharp(bgBuffer)
  .composite([{
    input: logoBuffer,
    left: Math.round((W - logoMeta.width) / 2),
    top: logoTop,
  }])
  .png({ quality: 95 })
  .toFile(join(publicDir, 'og-image.png'));

console.log('og-image.png done (1200x630, white bg)');

// Twitter: same image, just resized (no separate composition needed since it's centered)
await sharp(join(publicDir, 'og-image.png'))
  .resize(1200, 630, { fit: 'cover' })
  .toFile(join(publicDir, 'twitter-image.png'));

console.log('twitter-image.png done');
