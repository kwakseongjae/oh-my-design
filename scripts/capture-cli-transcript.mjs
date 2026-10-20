#!/usr/bin/env node
/**
 * Recapture the real oh-my-design-cli transcript the landing's "Get started" section prints
 * (web/src/data/cli-transcript.json). Round 11 (docs/REDESIGN_R11_PLAN_2026-10-20.md W3).
 *
 *   node scripts/capture-cli-transcript.mjs [--out <dir>] [--keep]
 *
 * What it does, in an empty scratch project (package.json only) under --out
 * (default docs/research/2026-10-20-r11/hero/transcript, gitignored):
 *   1. `npx --yes oh-my-design-cli@latest`         → raw/install.txt (the bare install)
 *   2. `npx --yes oh-my-design-cli@latest doctor`  → raw/doctor.txt
 *   3. `npx --yes oh-my-design-cli@latest --version` → the version the two runs used
 * Output is piped (no TTY, FORCE_COLOR=0), so there are no ANSI codes. doctor runs with
 * PLAYWRIGHT_BROWSERS_PATH pointed at an empty folder so no personal cache path is printed.
 *
 * The one trim: the install run's per-file list ("│    created  <target>  <path>" rows and the
 * blank "│" rows between them) is identical noise, so it is cut and counted in `elided`; every
 * other line is kept verbatim (`lines` before the cut, `tail` after it). doctor is kept whole.
 * The scratch project (three agents × the whole reference catalog) is deleted unless --keep.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const outArg = args.includes("--out") ? args[args.indexOf("--out") + 1] : "docs/research/2026-10-20-r11/hero/transcript";
const OUT = path.resolve(ROOT, outArg);
const KEEP = args.includes("--keep");
const CMD = "npx oh-my-design-cli@latest";

const raw = path.join(OUT, "raw");
const proj = path.join(OUT, "project");
const emptyPw = path.join(OUT, "empty-playwright");
fs.rmSync(proj, { recursive: true, force: true });
for (const d of [raw, proj, emptyPw]) fs.mkdirSync(d, { recursive: true });
fs.writeFileSync(path.join(proj, "package.json"), JSON.stringify({ name: "omd-transcript-scratch", private: true }, null, 2) + "\n");

const env = { ...process.env, FORCE_COLOR: "0", NO_COLOR: "1", PLAYWRIGHT_BROWSERS_PATH: emptyPw };
delete env.CI; // the CLI may print differently under CI; capture what a person sees
const run = (extra) => {
  try {
    return execFileSync("npx", ["--yes", "oh-my-design-cli@latest", ...extra], { cwd: proj, env, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], maxBuffer: 64 << 20 });
  } catch (e) {
    // a non-zero exit still printed real output; keep it and say so
    console.error(`exit ${e.status} for ${extra.join(" ") || "(bare)"}`);
    return `${e.stdout ?? ""}${e.stderr ?? ""}`;
  }
};

const install = run([]);
fs.writeFileSync(path.join(raw, "install.txt"), install);
const doctor = run(["doctor"]);
fs.writeFileSync(path.join(raw, "doctor.txt"), doctor);
const version = run(["--version"]).trim().split(/\s+/).pop();
fs.writeFileSync(path.join(raw, "version.txt"), version + "\n");

const split = (s) => s.replace(/\r/g, "").replace(/\n+$/, "").split("\n");
const lines = split(install);
const isFile = (l) => /^│\s+(created|updated|unchanged|skipped|removed)\s+\S+\s+\S/.test(l);
const first = lines.findIndex(isFile);
let last = -1;
for (let i = lines.length - 1; i >= 0; i--) if (isFile(lines[i])) { last = i; break; }
if (first < 0) throw new Error("no per-file rows found in the install output; check raw/install.txt by hand");
// the blank "│" rows inside the list go with it; the list's own trailing blank row too
let end = last + 1;
while (end < lines.length && lines[end].trim() === "│" && isFile(lines[end + 1] ?? "")) end++;
if (lines[end]?.trim() === "│") end++;
const between = lines.slice(first, end);
if (!between.every((l) => isFile(l) || l.trim() === "│")) throw new Error("the per-file run is not contiguous; refusing to trim anything but identical rows");

const captured = new Date().toISOString().slice(0, 10);
const out = {
  note: `Real terminal output of oh-my-design-cli ${version} (npx, published package), captured ${captured} in an empty project (package.json only), macOS, piped (no TTY, no colour). Lines are verbatim; \`elided\` counts the one cut: the install run's per-file list (${between.filter(isFile).length} "created/updated" rows and the blank "│" rows between them), which is identical noise. doctor ran with PLAYWRIGHT_BROWSERS_PATH pointed at an empty folder so no personal cache path is printed. Capture: scripts/capture-cli-transcript.mjs; raw files: docs/research/2026-10-20-r11/hero/transcript/raw/ (local).`,
  version,
  captured,
  runs: [
    { cmd: CMD, lines: lines.slice(0, first), elided: between.length, tail: lines.slice(end) },
    { cmd: `${CMD} doctor`, lines: split(doctor), elided: 0, tail: [] },
  ],
};
const dest = path.join(ROOT, "web/src/data/cli-transcript.json");
fs.writeFileSync(dest, JSON.stringify(out, null, 1) + "\n");
if (!KEEP) fs.rmSync(proj, { recursive: true, force: true });
console.log(`oh-my-design-cli ${version}: install ${lines.length} lines (${between.length} elided), doctor ${split(doctor).length} lines → ${path.relative(ROOT, dest)}`);
