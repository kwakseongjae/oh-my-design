import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logo = join(__dirname, '..', '..', 'logo.png');
const outDir = join(__dirname, '..', 'src', 'app');
const publicDir = join(__dirname, '..', 'public');

// 1. Favicon: rounded square, primary bg (#7c5cfc), white logo
const size = 512;
const padding = 40;
const radius = 110;

const roundedRect = Buffer.from(
  `<svg width="${size}" height="${size}">
    <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#7c5cfc"/>
  </svg>`
);

// Invert logo to white and resize
const whiteLogo = await sharp(logo)
  .negate({ alpha: false })
  .resize(size - padding * 2, null, { fit: 'inside' })
  .toBuffer();

const whiteLogoMeta = await sharp(whiteLogo).metadata();
const logoW = whiteLogoMeta.width;
const logoH = whiteLogoMeta.height;

const favicon = await sharp(roundedRect)
  .composite([{
    input: whiteLogo,
    left: Math.round((size - logoW) / 2),
    top: Math.round((size - logoH) / 2),
  }])
  .png()
  .toBuffer();

// Write as icon.png (Next.js auto-detects) — keep large for clarity
await sharp(favicon).resize(256, 256, { fit: 'cover' }).sharpen().toFile(join(outDir, 'icon.png'));
console.log('✓ icon.png (256x256, purple bg + white logo, sharpened)');

// Also make apple-icon.png
await sharp(favicon).resize(180, 180).toFile(join(outDir, 'apple-icon.png'));
console.log('✓ apple-icon.png');

// 2. White logo for header (transparent bg, white text)
const whiteHeaderLogo = await sharp(logo)
  .negate({ alpha: false })
  .resize(200, null, { fit: 'inside' })
  .toBuffer();
await sharp(whiteHeaderLogo).toFile(join(publicDir, 'logo-white.png'));
console.log('✓ logo-white.png (for dark backgrounds)');

// 3. Original dark logo is already at public/logo.png
console.log('✓ logo.png (original, for light backgrounds)');
console.log('\nDone!');
