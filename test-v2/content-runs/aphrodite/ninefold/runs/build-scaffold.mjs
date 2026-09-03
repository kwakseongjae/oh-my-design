// build-scaffold.mjs — Ninefold render.html 을 set.json + fonts/*.css 에서 재생성한다. 이미지는 assets/<id>.png 를 참조한다.
// 실행: node test-v2/content-runs/aphrodite/ninefold/runs/build-scaffold.mjs   (폰트는 font-inline.mjs 로 먼저 fonts/ 에 만든다)
// 2026-09-03 첫 빌드에서 craft 검사 LI-27~32 전부 통과(폰트 인라인·깊이 22·메시 3겹+그레인·selection/focus·미디어 필터 32/32·alt 0 generic).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const D = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(D, "runs", "scaffold.template.html"), "utf8");
const set = JSON.parse(readFileSync(join(D, "set.json"), "utf8"));
const alt = Object.fromEntries(set.items.map((i) => [i.id, i.prompt.split(".")[0].replace(/^(Step \w+ of a quiet ritual: |Step \w+: )/, "").slice(0, 120)]));
let html = src.replace("__FRAUNCES__", readFileSync(join(D, "fonts/fraunces.css"), "utf8")).replace("__INTER__", readFileSync(join(D, "fonts/inter.css"), "utf8"));
html = html.replace(/__ALT:([a-z0-9-]+)__/g, (_, id) => alt[id] || id);
mkdirSync(join(D, "assets"), { recursive: true });
writeFileSync(join(D, "render.html"), html);
console.log("SCAFFOLD_DONE", Math.round(html.length / 1024) + "KB");
