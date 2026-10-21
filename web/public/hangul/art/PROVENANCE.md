# /hangul launch art — provenance

OmD-generated, no third-party marks. All three images were generated for the /hangul launch pages (`/ko/hangul`, `/hangul`) on 2026-10-21. None contains text: every word on the page stays in the DOM. Nothing was downloaded from a stock site.

- **Tool**: Codex CLI 0.158.0 (`codex exec -m gpt-6-sol -s workspace-write`, ChatGPT sign-in), calling its built-in image generation tool (`$imagegen`).
- **Call**: one image per call, run one at a time. The queue follows `docs/research/2026-10-13-rebrand/codex-queue.sh`.
- **Attempts**: a first run with the configured default model was rejected before it generated anything ("not supported when using Codex with a ChatGPT account"). After that, each image succeeded on its first attempt, with no retries and no moderation blocks.
- **Post-processing**: `docs/research/2026-10-21-hangul/r15/art/process.mjs` with sharp. The steps are listed per file below.

## hanji-tile.webp — the paper ground (768×768, about 26 KB)

Prompt:
> A seamless, tileable square texture of traditional Korean hanji (handmade mulberry-bark paper), photographed flat and top-down like a high-resolution scan. Very light warm off-white paper colour, close to #f6f1e7. Fine, sparse, soft mulberry fibres lying in random directions, a few slightly longer translucent fibres, very gentle uneven density in the pulp. Low contrast overall: the fibres are only a little darker or lighter than the paper. Perfectly even flat lighting, no shadows, no vignette, no folds, no stains, no border, no objects. Absolutely no text, letters, characters, symbols, stamps or patterns. 1024 by 1024 pixels.

Post-processing:
- Checked for seams by tiling 2×2; none were visible.
- Halved the texture's amplitude and re-centred it on the page's 한지 tone, #f6f1e7.
- Resized to 768px with Lanczos and encoded as WebP q92. Lower qualities turned the faint fibres into 16px blocks.
- Darkest pixel after processing is 220,215,203. Against it, 먹 #1c1a16 measures 12.1:1, 옅은 먹 #5c564b 5.06:1 and the vermilion used for text, #a3311d, 4.85:1.

## seal.webp — the blank 인장 impression (192×192 with alpha, about 14 KB)

Prompt:
> A single square seal impression stamped with traditional vermilion cinnabar seal paste (inju) on plain off-white paper, seen straight on from above like a scan. The impression is a solid filled square, about half the image width, centred, with slightly rough, irregular edges and uneven ink density: small pale speckles and fine fibre gaps where the paper grain shows through, slightly heavier ink at one corner. The carved face is completely blank and solid: no characters, no letters, no jamo, no symbols, no border lines, no patterns inside the square. Plain paper around it with generous margins, flat even lighting, no shadows, no other objects, no text anywhere. 1024 by 1024 pixels.

Post-processing:
- Cropped to the stamp, with 14px of padding.
- Took the alpha from how red each pixel is, so the paper and the specks where the paste didn't take become transparent.
- Recoloured it to the page's one accent, 주색 #b8391f, and resized to 192px as WebP with alpha.
- The 천지인 marks (ㆍ ㅡ ㅣ) the page draws on the seal are CSS shapes, not part of the image.

## woodblock-ink.webp — printed-ink grain for the dark install field (512×512, about 11 KB)

Prompt:
> A seamless, tileable square texture of black sumi ink printed from a carved wooden block onto paper, photographed flat and top-down like a scan. Almost solid deep black ink, with fine horizontal wood-grain streaks pressed into the ink and scattered tiny pale specks where the ink did not take. Even flat lighting, no shadows, no vignette, no border, no objects. Absolutely no text, letters, characters, symbols or carved shapes. 1024 by 1024 pixels.

Post-processing:
- Checked for seams by tiling 2×2; none were visible.
- Converted to greyscale and compressed the range (×0.34, +16), so the pale specks stay grain.
- Resized to 512px and encoded as WebP q70.
- Paper-coloured text measures 5.42:1 against the lightest speck and 15.9:1 against the mean.
