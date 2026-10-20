# Round-11 props: provenance

**OmD-generated generic prop; not a brand asset; no third-party marks.** This holds for every file below.

- **Why they exist.** Owner decision 5 (2026-10-20, `docs/REDESIGN_R11_PLAN_2026-10-20.md`): OmD makes its
  own 3D-textured props with Codex. They are generic objects that sit inside other brands' sample screens,
  so they carry no logos, wordmarks, text, numbers, faces, brand colours or product likenesses, and avoid
  OmD's own Iris violet.
- **Shipped files.** `web/public/r11-props/<id>.webp`, 512×512 WebP with alpha, ≤ 60 KB each.
  Manifest: `web/src/data/r11-props.json` (`origin: "omd-generated"`). Reader:
  `web/src/lib/landing-a/props.ts`. Test: `web/src/data/r11-props.test.ts`.
- **Created.** 2026-10-20.

## Tool

- **Codex CLI 0.158.0** (`codex exec`, ChatGPT login), run one call at a time by `queue.sh`.
  Every call is in `codex-queue.log` (hook and skill-loader noise lines removed).
- **Agent model `gpt-6-astra`**, pinned with `-m`. The configured default `gpt-6.1-sol` returned
  400 ("not supported when using Codex with a ChatGPT account") on the first pre-flight call.
- **Image tool.** Codex's built-in `image_gen` tool, reached through the `$imagegen` skill.
  Every generation's session rollout (`~/.codex/sessions/2026/10/20/`) shows the call with
  `transparent_background: true`. All 15 were checked.
  The CLI does not report which image model sits behind the tool, so none is recorded here.
- **Saving.** Codex copied each generated PNG from `~/.codex/generated_images/<session>/` into `raw/`.
  A byte compare confirms all 15 raw files are identical to the generator's output. Raw PNGs (0.8–1.1 MB
  each) stay local and are not committed.

## Prompt

Every call sends the same Korean instruction, then `Image: Subject: <subject>. <style block>`:

> 이미지 생성 툴($imagegen)로 다음 이미지를 직접 생성해서 ./<file> 로 저장해줘. 투명 배경 PNG로
> 생성해줘(transparent background, 알파 채널 유지). 생성된 파일을 변환·재인코딩하지 말고 그대로 복사해서
> 저장해. 코드 작성·설명 없이 이미지만 생성·저장. Image: Subject: <subject>. <style block>

The style block (`style.txt`) goes into every prompt verbatim, so the 13 props read as one family:

> Style, shared verbatim by all 13 props in this family: one single object rendered in soft 3D, made of a matte clay-like material with a faint jelly translucency at the edges, every edge generously rounded like a soft rubber keycap. Soft diffuse studio lighting from the upper left and a gentle soft contact shadow directly beneath the object. Three-quarter isometric-style view from slightly above, the object centered with generous empty margin on all sides, square 1:1 image. Transparent background: no backdrop, no floor, no scene, only the object and its soft shadow. Brand-neutral materials only: frosted white, warm light grey and brushed silver. Absolutely no text, letters, numbers, logos, wordmarks, faces, saturated or brand colours, and no violet or purple.

## Post-processing

`postprocess.mjs` uses sharp 0.34.5 from `web/node_modules`.

1. **Alpha gate.** The raw PNG must have an alpha channel, all four corners at alpha 0 and at least 20%
   fully transparent pixels. Otherwise it is regenerated. No background was keyed out for any prop: each
   came back from the generator with real transparency.
2. **Alpha snap.** Alpha ≥ 250 is set to 255. The generator leaves object bodies at about 253, which is
   0.8% see-through. Anti-aliased edges and the contact shadow (< 250) are left as generated.
3. **Trim.** Crop to the bounding box of pixels with alpha > 8. Fainter pixels (≤ 3%) are invisible.
4. **Square.** Pad to a square with a uniform transparent margin of 8% per side, centred, so all 13
   share one footprint.
5. **Export.** Resize to 512×512 (lanczos3), then WebP at quality 85 with alphaQuality 100 and effort 6.
   Quality steps down by 5 only if a file exceeds 60 KB; none needed to.

## Per prop

### coin

- **Statement.** OmD-generated generic prop; not a brand asset; no third-party marks.
- **Shipped.** `web/public/r11-props/coin.webp`: 512×512 WebP with alpha, quality 85, 19.0 KB (19442 bytes).
- **Source.** `raw/coin.png` (1254×1254 RGBA, 62.4% fully transparent). Codex session `01a1593f-93a7-74f0-b835-f6648a26bda6` at 21:18:20 on `gpt-6-astra`, generated image `call_3033c09a4f804bb8922ff7d122fd45a0.png`.
- **Subject** (`prompts.txt`): a single thick round coin standing slightly tilted, made of soft muted gold (the one exception to the neutral palette), with a plain raised rim and a completely blank smooth face: no symbol, no currency sign, no number, no engraving
- **Post-processing.** Alpha snap on 33.1% of pixels; trimmed to 776×884 at (238, 195); square with 8% margin; 512 px; quality 85.
- **Retries.** None. The first generation shipped.

### card

- **Statement.** OmD-generated generic prop; not a brand asset; no third-party marks.
- **Shipped.** `web/public/r11-props/card.webp`: 512×512 WebP with alpha, quality 85, 14.7 KB (15084 bytes).
- **Source.** `raw/card-r1.png` (1254×1254 RGBA, 54.5% fully transparent). Codex session `01a15954-a3f9-7863-8ac1-6a211b94348b` at 21:41:21 on `gpt-6-astra`, generated image `call_7a1236ad42764142b4cc8dc39b6d11a4.png`.
- **Subject** (`prompts-r1.txt`): a single blank payment card with rounded corners in warm light grey, slightly thick like a soft tile, tilted up at a gentle angle so its face is clearly visible, with a small plain brushed-silver chip; no numbers, no logo, no network mark, no coloured stripe, nothing printed on it
- **Post-processing.** Alpha snap on 39.5% of pixels; trimmed to 1094×818 at (122, 233); square with 8% margin; 512 px; quality 85.
- **Retries.** `card.png`: First pass rejected after the contact sheet: a frosted white card on white nearly vanished, the least legible prop in the set. Retry 1 (prompts-r1.txt) made it warm light grey with its face tilted toward the viewer and shipped.

### check-badge

- **Statement.** OmD-generated generic prop; not a brand asset; no third-party marks.
- **Shipped.** `web/public/r11-props/check-badge.webp`: 512×512 WebP with alpha, quality 85, 20.5 KB (21038 bytes).
- **Source.** `raw/check-badge.png` (1254×1254 RGBA, 57.7% fully transparent). Codex session `01a15942-4343-7222-8b7e-2f00cd676d2a` at 21:21:17 on `gpt-6-astra`, generated image `call_cae8763c29b84c6c89abd47b038585ea.png`.
- **Subject** (`prompts.txt`): a round badge with a softly scalloped edge, like a rosette seal, in frosted white with one raised brushed-silver checkmark in the centre; the checkmark is the only mark on it
- **Post-processing.** Alpha snap on 33.7% of pixels; trimmed to 849×900 at (209, 175); square with 8% margin; 512 px; quality 85.
- **Retries.** None. The first generation shipped.

### piggy-bank

- **Statement.** OmD-generated generic prop; not a brand asset; no third-party marks.
- **Shipped.** `web/public/r11-props/piggy-bank.webp`: 512×512 WebP with alpha, quality 85, 20.0 KB (20508 bytes).
- **Source.** `raw/piggy-bank.png` (1254×1254 RGBA, 60.3% fully transparent). Codex session `01a15943-d96f-7d70-a90b-731dc72a851a` at 21:23:01 on `gpt-6-astra`, generated image `call_aee73ce3e5744c668bcf6665a5167fe4.png`.
- **Subject** (`prompts.txt`): a small round piggy bank in frosted white with a coin slot on top, four short legs, two small ears and a simple flat snout disc; no eyes and no other facial features
- **Post-processing.** Alpha snap on 32.9% of pixels; trimmed to 818×856 at (227, 257); square with 8% margin; 512 px; quality 85.
- **Retries.** None. The first generation shipped.

### parcel-box

- **Statement.** OmD-generated generic prop; not a brand asset; no third-party marks.
- **Shipped.** `web/public/r11-props/parcel-box.webp`: 512×512 WebP with alpha, quality 85, 15.7 KB (16062 bytes).
- **Source.** `raw/parcel-box.png` (1254×1254 RGBA, 57.7% fully transparent). Codex session `01a15945-676c-7951-967f-3ef68208dc40` at 21:24:43 on `gpt-6-astra`, generated image `call_00c40981c46648d3ba30ab34d11b1879.png`.
- **Subject** (`prompts.txt`): a closed parcel box, a cube-like shipping box in warm light grey with one strip of frosted white tape across the top flaps; no label, no printing, no barcode
- **Post-processing.** Alpha snap on 36.5% of pixels; trimmed to 865×928 at (190, 203); square with 8% margin; 512 px; quality 85.
- **Retries.** None. The first generation shipped.

### price-tag

- **Statement.** OmD-generated generic prop; not a brand asset; no third-party marks.
- **Shipped.** `web/public/r11-props/price-tag.webp`: 512×512 WebP with alpha, quality 85, 16.7 KB (17150 bytes).
- **Source.** `raw/price-tag.png` (1254×1254 RGBA, 67.2% fully transparent). Codex session `01a15946-80eb-7110-9ede-349c1ac11449` at 21:25:55 on `gpt-6-astra`, generated image `call_48731210a3124aaf8a748124ef2152a8.png`.
- **Subject** (`prompts.txt`): a single price tag with rounded corners and a punched round hole, with a short loop of brushed-silver string through the hole; the tag is completely blank, with no printed text, numbers or currency signs
- **Post-processing.** Alpha snap on 28.0% of pixels; trimmed to 808×1090 at (243, 85); square with 8% margin; 512 px; quality 85.
- **Retries.** None. The first generation shipped.

### shopping-bag

- **Statement.** OmD-generated generic prop; not a brand asset; no third-party marks.
- **Shipped.** `web/public/r11-props/shopping-bag.webp`: 512×512 WebP with alpha, quality 85, 17.6 KB (18020 bytes).
- **Source.** `raw/shopping-bag.png` (1254×1254 RGBA, 59.7% fully transparent). Codex session `01a15947-9435-7682-a6f6-1fe243a94a1b` at 21:27:05 on `gpt-6-astra`, generated image `call_8051bc83d1bd47a3b5617490265bf2ee.png`.
- **Subject** (`prompts.txt`): a shopping bag in frosted white with two rounded warm light grey handles; completely plain, with no logo, no print and no label
- **Post-processing.** Alpha snap on 34.3% of pixels; trimmed to 851×1022 at (236, 132); square with 8% margin; 512 px; quality 85.
- **Retries.** None. The first generation shipped.

### chart-bars

- **Statement.** OmD-generated generic prop; not a brand asset; no third-party marks.
- **Shipped.** `web/public/r11-props/chart-bars.webp`: 512×512 WebP with alpha, quality 85, 16.5 KB (16938 bytes).
- **Source.** `raw/chart-bars.png` (1254×1254 RGBA, 62.4% fully transparent). Codex session `01a15948-b9a5-7663-b1c3-3a31ba4c2d0b` at 21:28:20 on `gpt-6-astra`, generated image `call_bd7b5d25192a43efa163486b69d0c468.png`.
- **Subject** (`prompts.txt`): a small bar chart object: four rounded vertical bars of increasing height standing on a thin rounded base plate, the bars in frosted white and warm light grey with the tallest bar in brushed silver; no axis, no labels, no numbers
- **Post-processing.** Alpha snap on 30.9% of pixels; trimmed to 1036×978 at (124, 176); square with 8% margin; 512 px; quality 85.
- **Retries.** None. The first generation shipped.

### receipt

- **Statement.** OmD-generated generic prop; not a brand asset; no third-party marks.
- **Shipped.** `web/public/r11-props/receipt.webp`: 512×512 WebP with alpha, quality 85, 17.8 KB (18206 bytes).
- **Source.** `raw/receipt.png` (1254×1254 RGBA, 59.3% fully transparent). Codex session `01a1594a-47df-70e1-9915-455d25e399ad` at 21:30:02 on `gpt-6-astra`, generated image `call_7d8337c6b32140f39fe00e6f34c287aa.png`.
- **Subject** (`prompts.txt`): a single paper receipt in frosted white, curling gently, with a zigzag torn bottom edge and three short soft raised blank bars in place of printing; blank paper, no text, no numbers, no printed lines
- **Post-processing.** Alpha snap on 33.5% of pixels; trimmed to 1009×898 at (151, 185); square with 8% margin; 512 px; quality 85.
- **Retries.** None. The first generation shipped.

### calculator

- **Statement.** OmD-generated generic prop; not a brand asset; no third-party marks.
- **Shipped.** `web/public/r11-props/calculator.webp`: 512×512 WebP with alpha, quality 85, 22.6 KB (23120 bytes).
- **Source.** `raw/calculator.png` (1254×1254 RGBA, 51.9% fully transparent). Codex session `01a1594b-e6dc-7f12-bb02-0e7a87b68bdf` at 21:31:48 on `gpt-6-astra`, generated image `call_6ddddb0e6a2342f78b46a131ac2f8daf.png`.
- **Subject** (`prompts.txt`): a compact calculator with a blank dark grey display window and a grid of rounded soft keys in frosted white and warm light grey; every key and the display are blank, with no numbers, symbols or markings
- **Post-processing.** Alpha snap on 39.6% of pixels; trimmed to 1048×970 at (127, 178); square with 8% margin; 512 px; quality 85.
- **Retries.** None. The first generation shipped.

### briefcase

- **Statement.** OmD-generated generic prop; not a brand asset; no third-party marks.
- **Shipped.** `web/public/r11-props/briefcase.webp`: 512×512 WebP with alpha, quality 85, 18.9 KB (19306 bytes).
- **Source.** `raw/briefcase-r1.png` (1254×1254 RGBA, 58.4% fully transparent). Codex session `01a15953-4194-7992-9507-36cea2eead28` at 21:39:50 on `gpt-6-astra`, generated image `call_7304493982c9487bafc462a3990c926c.png`.
- **Subject** (`prompts-r1.txt`): a slim classic document briefcase in warm light grey, much wider than it is deep with a thin profile, one soft rounded handle on top and two small brushed-silver clasps on the front flap; no logo, no monogram
- **Post-processing.** Alpha snap on 35.3% of pixels; trimmed to 986×877 at (156, 232); square with 8% margin; 512 px; quality 85.
- **Retries.** `briefcase.png`: First pass rejected after the contact sheet: on-style, but the deep box with a split lid read as a toolbox. Retry 1 (prompts-r1.txt) asked for a slim document briefcase with a front flap and shipped.

### chat-bubble

- **Statement.** OmD-generated generic prop; not a brand asset; no third-party marks.
- **Shipped.** `web/public/r11-props/chat-bubble.webp`: 512×512 WebP with alpha, quality 85, 18.3 KB (18728 bytes).
- **Source.** `raw/chat-bubble.png` (1254×1254 RGBA, 53.1% fully transparent). Codex session `01a1594e-b187-7d82-93c1-28566e190396` at 21:34:51 on `gpt-6-astra`, generated image `call_35257c7412f44450882cb8b0dde9fb3b.png`.
- **Subject** (`prompts.txt`): a single rounded speech bubble with a short tail at the lower left, in frosted white, with three small raised round dots in its middle; an empty bubble with no text
- **Post-processing.** Alpha snap on 37.2% of pixels; trimmed to 949×864 at (177, 203); square with 8% margin; 512 px; quality 85.
- **Retries.** None. The first generation shipped.

### palette

- **Statement.** OmD-generated generic prop; not a brand asset; no third-party marks.
- **Shipped.** `web/public/r11-props/palette.webp`: 512×512 WebP with alpha, quality 85, 21.9 KB (22474 bytes).
- **Source.** `raw/palette.png` (1254×1254 RGBA, 52.2% fully transparent). Codex session `01a15950-0612-74b0-ad0a-a002aeb9d2e5` at 21:36:19 on `gpt-6-astra`, generated image `call_0f06ae55282d4da79d2f6a0af85aec9e.png`.
- **Subject** (`prompts.txt`): an artist's paint palette, kidney-shaped with a thumb hole, in frosted white, holding five small round paint dabs in white, light grey, warm grey, brushed silver and soft charcoal; no other colours
- **Post-processing.** Alpha snap on 39.0% of pixels; trimmed to 1010×897 at (138, 201); square with 8% margin; 512 px; quality 85.
- **Retries.** None. The first generation shipped.

## Every Codex call

From `codex-queue.log`, via `log-attempts.mjs --md`. Rejected generations and failed calls are listed too.

| time | file | model | Codex session | generated image | result |
|---|---|---|---|---|---|
| 21:17:12 | coin.png | gpt-6.1-sol | `01a1593e-87a6-7391-96bf-08a63939b19e` | – | FAIL |
| 21:18:20 | coin.png | gpt-6-astra | `01a1593f-93a7-74f0-b835-f6648a26bda6` | `call_3033c09a4f804bb8922ff7d122fd45a0.png` | OK |
| 21:20:14 | card.png | gpt-6-astra | `01a15941-4d7b-7ef1-b233-da9b9013c45e` | `call_c9cf5bfab9764ba2943ef8d0a3b99fef.png` | OK |
| 21:21:17 | check-badge.png | gpt-6-astra | `01a15942-4343-7222-8b7e-2f00cd676d2a` | `call_cae8763c29b84c6c89abd47b038585ea.png` | OK |
| 21:23:01 | piggy-bank.png | gpt-6-astra | `01a15943-d96f-7d70-a90b-731dc72a851a` | `call_aee73ce3e5744c668bcf6665a5167fe4.png` | OK |
| 21:24:43 | parcel-box.png | gpt-6-astra | `01a15945-676c-7951-967f-3ef68208dc40` | `call_00c40981c46648d3ba30ab34d11b1879.png` | OK |
| 21:25:55 | price-tag.png | gpt-6-astra | `01a15946-80eb-7110-9ede-349c1ac11449` | `call_48731210a3124aaf8a748124ef2152a8.png` | OK |
| 21:27:05 | shopping-bag.png | gpt-6-astra | `01a15947-9435-7682-a6f6-1fe243a94a1b` | `call_8051bc83d1bd47a3b5617490265bf2ee.png` | OK |
| 21:28:20 | chart-bars.png | gpt-6-astra | `01a15948-b9a5-7663-b1c3-3a31ba4c2d0b` | `call_bd7b5d25192a43efa163486b69d0c468.png` | OK |
| 21:30:02 | receipt.png | gpt-6-astra | `01a1594a-47df-70e1-9915-455d25e399ad` | `call_7d8337c6b32140f39fe00e6f34c287aa.png` | OK |
| 21:31:48 | calculator.png | gpt-6-astra | `01a1594b-e6dc-7f12-bb02-0e7a87b68bdf` | `call_6ddddb0e6a2342f78b46a131ac2f8daf.png` | OK |
| 21:33:34 | briefcase.png | gpt-6-astra | `01a1594d-846e-7911-a078-e51f7efefb3d` | `call_a9c7bfa99a0c475bab98ed13a0cbf179.png` | OK |
| 21:34:51 | chat-bubble.png | gpt-6-astra | `01a1594e-b187-7d82-93c1-28566e190396` | `call_35257c7412f44450882cb8b0dde9fb3b.png` | OK |
| 21:36:19 | palette.png | gpt-6-astra | `01a15950-0612-74b0-ad0a-a002aeb9d2e5` | `call_0f06ae55282d4da79d2f6a0af85aec9e.png` | OK |
| 21:39:50 | briefcase-r1.png | gpt-6-astra | `01a15953-4194-7992-9507-36cea2eead28` | `call_7304493982c9487bafc462a3990c926c.png` | OK |
| 21:41:21 | card-r1.png | gpt-6-astra | `01a15954-a3f9-7863-8ac1-6a211b94348b` | `call_7a1236ad42764142b4cc8dc39b6d11a4.png` | OK |

## QA

- **Contact sheet.** `contact-sheet.png` shows all 13 at 1x (512 px) on a white band and on a light grey band.
  It is saved as a 256-colour dithered PNG to halve its size. Edge checks used the full-colour render
  (`contact-sheet.mjs --dark --full`).
- **What was checked.** One family in material, light and 3/4 view. No text, digits, logos, wordmarks,
  faces, saturated or brand colour, or violet. The check-badge's checkmark is its one intended mark.
  Clean edges on both bands and on a local dark band, with no fringe or halo.
- **Retry budget.** At most 2 retries per prop. Each retry and its reason is listed under its prop above.
