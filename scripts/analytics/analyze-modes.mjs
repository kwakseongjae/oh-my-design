// Answers two hypotheses with the pulled data:
//  (1) copy/download (grab the .md) >> install (go CLI/code route)
//  (2) "use as-is" dominates; "generate (customize)" is rare and/or declining.
// Reads ga4.json (event totals), ga4-modes.json (funnel_by_date), upstash.json.
import { readFileSync } from "node:fs";
import path from "node:path";
import { repoRoot } from "./_env.mjs";

const raw = path.join(repoRoot, "data", "analytics", "raw");
const load = (f) => JSON.parse(readFileSync(path.join(raw, f), "utf8"));
const ga = load("ga4.json");
const modes = load("ga4-modes.json");
const up = load("upstash.json");

const ev = {};
for (const r of ga.events.rows) ev[r.eventName] = { count: r.eventCount, users: r.totalUsers };
const U = (n) => (ev[n] ? ev[n].users : 0);
const C = (n) => (ev[n] ? ev[n].count : 0);
const P = (n, d) => (d ? ((100 * n) / d).toFixed(1) + "%" : "—");
const out = [];
const L = (s = "") => out.push(s);

L("════════════ Q1 — 마크다운 GET(copy/download) vs INSTALL(CLI) ════════════");
const bDl = U("download_designmd"), bCp = U("copy_designmd");
const dDl = U("ds_download_md"), dCp = U("ds_copy_md");
const inst = U("install_copy");
const grabUsers = bDl + bCp + dDl + dCp;
L(`builder export   download_designmd ${bDl}u / copy_designmd ${bCp}u   (events ${C("download_designmd")} / ${C("copy_designmd")})`);
L(`directory as-is  ds_download_md ${dDl}u / ds_copy_md ${dCp}u         (events ${C("ds_download_md")} / ${C("ds_copy_md")})`);
L(`install_copy     ${inst}u                                            (events ${C("install_copy")})`);
L(`→ "md를 GET한" 유저(중복합산) ${grabUsers} vs install_copy ${inst}  ≈ ${(grabUsers / Math.max(1, inst)).toFixed(1)}배`);
L(`→ install_copy / generation_complete = ${P(inst, U("generation_complete"))}  | install_copy / builder_export = ${P(inst, U("builder_export"))}`);
// Upstash event-level (note: copy counter ALSO catches install-command copy via install-cta)
const c = up.counters;
L(`Upstash event-level  download ${c.download.total} / copy ${c.copy.total} (copy는 install-cta의 명령어 복사도 포함 → 마크다운 copy는 이보다 적음)`);
L(`npm 실제설치(28d) ≈ 2,511dl  vs install_copy ${inst}u  → 진짜 설치는 웹 버튼이 아니라 npm 직접 (${(2511 / Math.max(1, inst)).toFixed(0)}배)`);

L("\n════════════ Q2 — USE AS-IS vs GENERATE(customize) ════════════");
const gen = U("generation_complete");
const wiz = U("wizard_step_view");
const sty = U("style_preference");
L(`빌더 생성자 generation_complete = ${gen}u (이 중 as_is + customize 둘 다 포함 — generation_complete는 as-is에서도 발화)`);
L(`  ├ 위저드 진입 wizard_step_view = ${wiz}u (${P(wiz, gen)} of generators) — customize 경로 상한`);
L(`  └ 스타일 변경 style_preference = ${sty}u (${P(sty, gen)} of generators) — '진짜 customize' 하한`);
L(`→ USE AS-IS 추정 = ${gen - wiz}~${gen - sty}u (${P(gen - wiz, gen)}~${P(gen - sty, gen)}) | CUSTOMIZE = ${sty}~${wiz}u (${P(sty, gen)}~${P(wiz, gen)})`);
L(`이벤트량: wizard_step_view ${C("wizard_step_view")} / style_preference ${C("style_preference")} / generation_complete ${C("generation_complete")}`);
L(`두 경로 비교: 빌더 generate ${gen}u  vs  디렉토리 as-is(ds_detail_view) ${U("ds_detail_view")}u — 디렉토리에서 .md를 바로 집는 사용자`);

L("\n──── 트렌드: customize가 줄고 있나? (funnel_by_date, 28일) ────");
const fbd = modes.funnel_by_date;
if (Array.isArray(fbd)) {
  const days = [...new Set(fbd.map((r) => r.date))].sort();
  const n = days.length;
  const half = Math.floor(n / 2);
  const firstDays = new Set(days.slice(0, half));
  const sumBy = (filterDays, name, field) =>
    fbd.filter((r) => r.eventName === name && filterDays.has(r.date)).reduce((s, r) => s + r[field], 0);
  const h1 = new Set(days.slice(0, half)), h2 = new Set(days.slice(half));
  const span = (label) => {
    const f1 = sumBy(h1, label, "eventCount"), f2 = sumBy(h2, label, "eventCount");
    return { f1, f2, arrow: f2 > f1 ? "↑" : f2 < f1 ? "↓" : "→" };
  };
  L(`기간: ${days[0]} → ${days[n - 1]} (${n}일), 전반 ${half}일 vs 후반 ${n - half}일 (eventCount 합)`);
  for (const e of ["reference_select", "generation_complete", "wizard_step_view", "style_preference", "builder_export", "download_designmd", "copy_designmd", "install_copy", "ds_copy_md", "ds_download_md"]) {
    const s = span(e);
    L(`  ${e.padEnd(20)} 전반 ${String(s.f1).padStart(5)} → 후반 ${String(s.f2).padStart(5)}  ${s.arrow}`);
  }
  // customize-share trend: style_preference / generation_complete and wizard / generation per half
  const g1 = sumBy(h1, "generation_complete", "eventCount"), g2 = sumBy(h2, "generation_complete", "eventCount");
  const s1 = sumBy(h1, "style_preference", "eventCount"), s2 = sumBy(h2, "style_preference", "eventCount");
  const w1 = sumBy(h1, "wizard_step_view", "eventCount"), w2 = sumBy(h2, "wizard_step_view", "eventCount");
  L(`\n customize-share (style_preference / generation_complete): 전반 ${P(s1, g1)} → 후반 ${P(s2, g2)}`);
  L(` wizard-entry-share (wizard_step_view / generation_complete): 전반 ${P(w1, g1)} → 후반 ${P(w2, g2)}`);
  const i1 = sumBy(h1, "install_copy", "eventCount"), i2 = sumBy(h2, "install_copy", "eventCount");
  L(` install-share (install_copy / generation_complete): 전반 ${P(i1, g1)} → 후반 ${P(i2, g2)}`);
}

console.log(out.join("\n"));
