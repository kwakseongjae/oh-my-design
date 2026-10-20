// Write PROVENANCE.md from the run's own records, so no session id or prompt is hand-copied.
//
//   node docs/research/2026-10-20-r11/props/provenance.mjs
//
// Inputs (all next to this script): style.txt, prompts*.txt, codex-queue.log (via
// log-attempts.mjs), selection.json, postprocess-report.json, retries.json.
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const read = (f) => readFileSync(join(HERE, f), "utf8");
const STATEMENT = "OmD-generated generic prop; not a brand asset; no third-party marks.";
const IDS = [
  "coin", "card", "check-badge", "piggy-bank",
  "parcel-box", "price-tag", "shopping-bag",
  "chart-bars", "receipt", "calculator",
  "briefcase", "chat-bubble", "palette",
];

const style = read("style.txt").trim();
const subjects = {}; // file -> { subject, queue }
for (const q of readdirSync(HERE).filter((f) => /^prompts.*\.txt$/.test(f)).sort()) {
  for (const line of read(q).split("\n")) {
    if (!line || line.startsWith("#")) continue;
    const i = line.indexOf("|");
    subjects[line.slice(0, i)] = { subject: line.slice(i + 1), queue: q };
  }
}
const attempts = JSON.parse(execFileSync("node", [join(HERE, "log-attempts.mjs")], { encoding: "utf8" }));
const selection = JSON.parse(read("selection.json"));
const report = JSON.parse(read("postprocess-report.json"));
const retries = JSON.parse(read("retries.json"));
const okAttempt = (file) => attempts.filter((a) => a.file === file && a.result.startsWith("OK")).at(-1);

let md = `# Round-11 props: provenance

**${STATEMENT}** This holds for every file below.

- **Why they exist.** Owner decision 5 (2026-10-20, \`docs/REDESIGN_R11_PLAN_2026-10-20.md\`): OmD makes its
  own 3D-textured props with Codex. They are generic objects that sit inside other brands' sample screens,
  so they carry no logos, wordmarks, text, numbers, faces, brand colours or product likenesses, and avoid
  OmD's own Iris violet.
- **Shipped files.** \`web/public/r11-props/<id>.webp\`, 512×512 WebP with alpha, ≤ 60 KB each.
  Manifest: \`web/src/data/r11-props.json\` (\`origin: "omd-generated"\`). Reader:
  \`web/src/lib/landing-a/props.ts\`. Test: \`web/src/data/r11-props.test.ts\`.
- **Created.** 2026-10-20.

## Tool

- **Codex CLI 0.158.0** (\`codex exec\`, ChatGPT login), run one call at a time by \`queue.sh\`.
  Every call is in \`codex-queue.log\` (hook and skill-loader noise lines removed).
- **Agent model \`gpt-6-astra\`**, pinned with \`-m\`. The configured default \`gpt-6.1-sol\` returned
  400 ("not supported when using Codex with a ChatGPT account") on the first pre-flight call.
- **Image tool.** Codex's built-in \`image_gen\` tool, reached through the \`$imagegen\` skill.
  Every generation's session rollout (\`~/.codex/sessions/2026/10/20/\`) shows the call with
  \`transparent_background: true\`. All 15 were checked.
  The CLI does not report which image model sits behind the tool, so none is recorded here.
- **Saving.** Codex copied each generated PNG from \`~/.codex/generated_images/<session>/\` into \`raw/\`.
  A byte compare confirms all 15 raw files are identical to the generator's output. Raw PNGs (0.8–1.1 MB
  each) stay local and are not committed.

## Prompt

Every call sends the same Korean instruction, then \`Image: Subject: <subject>. <style block>\`:

> 이미지 생성 툴($imagegen)로 다음 이미지를 직접 생성해서 ./<file> 로 저장해줘. 투명 배경 PNG로
> 생성해줘(transparent background, 알파 채널 유지). 생성된 파일을 변환·재인코딩하지 말고 그대로 복사해서
> 저장해. 코드 작성·설명 없이 이미지만 생성·저장. Image: Subject: <subject>. <style block>

The style block (\`style.txt\`) goes into every prompt verbatim, so the 13 props read as one family:

> ${style}

## Post-processing

\`postprocess.mjs\` uses sharp 0.34.5 from \`web/node_modules\`.

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

`;

for (const id of IDS) {
  const file = selection[id];
  const r = report[id];
  const a = okAttempt(file);
  const s = subjects[file];
  const tried = retries[id] ?? [];
  md += `### ${id}\n\n`;
  md += `- **Statement.** ${STATEMENT}\n`;
  md += `- **Shipped.** \`${r.output}\`: ${r.size.join("×")} WebP with alpha, quality ${r.quality}, ${(r.bytes / 1024).toFixed(1)} KB (${r.bytes} bytes).\n`;
  md += `- **Source.** \`raw/${file}\` (${r.rawSize.join("×")} RGBA, ${(r.rawTransparentShare * 100).toFixed(1)}% fully transparent). Codex session \`${a.session}\` at ${a.time} on \`${a.model}\`, generated image \`${a.generated}\`.\n`;
  md += `- **Subject** (\`${s.queue}\`): ${s.subject}\n`;
  md += `- **Post-processing.** Alpha snap on ${(r.alphaSnapped * 100).toFixed(1)}% of pixels; trimmed to ${r.bbox.width}×${r.bbox.height} at (${r.bbox.x}, ${r.bbox.y}); square with 8% margin; 512 px; quality ${r.quality}.\n`;
  md += `- **Retries.** ${tried.length ? tried.map((t) => `\`${t.file}\`: ${t.reason}`).join(" ") : "None. The first generation shipped."}\n\n`;
}

md += `## Every Codex call

From \`codex-queue.log\`, via \`log-attempts.mjs --md\`. Rejected generations and failed calls are listed too.

${execFileSync("node", [join(HERE, "log-attempts.mjs"), "--md"], { encoding: "utf8" }).trim()}

## QA

- **Contact sheet.** \`contact-sheet.png\` shows all 13 at 1x (512 px) on a white band and on a light grey band.
  It is saved as a 256-colour dithered PNG to halve its size. Edge checks used the full-colour render
  (\`contact-sheet.mjs --dark --full\`).
- **What was checked.** One family in material, light and 3/4 view. No text, digits, logos, wordmarks,
  faces, saturated or brand colour, or violet. The check-badge's checkmark is its one intended mark.
  Clean edges on both bands and on a local dark band, with no fringe or halo.
- **Retry budget.** At most 2 retries per prop. Each retry and its reason is listed under its prop above.
`;

writeFileSync(join(HERE, "PROVENANCE.md"), md);
console.log(`PROVENANCE.md: ${IDS.length} props`);
