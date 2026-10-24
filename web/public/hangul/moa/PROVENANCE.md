# moa illustrations

The four pictures in the /hangul page's moa screens (`src/components/hangul/moa-screen.tsx`, the art
slots in `moa.css`): `gift.webp` (benefit banner), `sent.webp` (sent toast), `chart.webp` (figures
card) and `offline.webp` (connection error).

- Modelled and rendered for this page by `web/scripts/moa-art/scene.html` and `render.mjs`, from
  three.js 0.186.1 primitives (rounded boxes, tori, lathes, capsules, spheres) under a
  RoomEnvironment and one key light. No third-party models, textures, icons or photos.
- Re-render: `node scripts/moa-art/render.mjs` (from `web/`). 192 × 192 WebP with alpha, drawn at 4×
  and downscaled with sharp.
- The same file is shown on both sides of every comparison, so a picture never differs between
  the screen without the skill and the one with it.
