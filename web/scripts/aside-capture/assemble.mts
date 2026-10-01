// Assemble a reference-evidence bundle from an Aside capture (see extract.js).
// usage: node --no-warnings --experimental-strip-types scripts/aside-capture/assemble.mts <capture-file> <reference-id> [--out file]
// The capture file may be a REPL tool-results file: the JSON object is taken from the first "{" to the last "}".
// The bundle is built by the same aggregateReferenceEvidence() the collector uses, with tool "browser_harness",
// so preflight (surfaces, coverage, components) reads exactly as it would for a collector bundle.
// States and interactions are not captured on this path; they stay unmeasured.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { aggregateReferenceEvidence, type RawElementEvidence } from "../../src/lib/references/evidence.ts";

const [file, referenceId] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!file || !referenceId) { console.error("usage: assemble.mts <capture-file> <reference-id> [--out file]"); process.exit(2); }
const outIndex = process.argv.indexOf("--out");
const ROOT = resolve(import.meta.dirname, "..", "..", "..");
const output = outIndex > 0 ? resolve(process.argv[outIndex + 1]) : join(ROOT, "artifacts", "reference-evidence", `${referenceId}.json`);

const text = readFileSync(file, "utf8");
const capture = JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1)) as {
  capturedAt: string;
  surfaces: { url: string; fonts: string[]; rows: unknown[][]; loaded: string[]; loggedIn: boolean }[];
};

const loggedIn = capture.surfaces.filter((s) => s.loggedIn).map((s) => s.url);
if (loggedIn.length) { console.error(`refusing: logged-in surfaces ${loggedIn.join(", ")}`); process.exit(1); }

const surfaces = capture.surfaces.filter((s) => s.rows.length > 0).map((s, index) => {
  const id = index === 0 ? "home" : `surface-${index + 1}`;
  const elements: RawElementEvidence[] = s.rows.map((r) => ({
    selector: `${id}::${r[0] as string}`,
    tagName: r[1] as string,
    role: r[2] as string | null,
    inputType: null,
    className: r[21] as string,
    ariaHasPopup: null,
    ariaSelected: r[19] as string | null,
    ariaChecked: null,
    disabled: r[20] === 1,
    textLength: r[3] as number,
    rect: { width: r[4] as number, height: r[5] as number, top: r[6] as number },
    style: {
      color: r[7] as string, backgroundColor: r[8] as string, borderColor: r[9] as string, borderWidth: r[10] as string,
      borderRadius: r[11] as string, boxShadow: (r[12] as string) || "none", padding: r[13] as string, margin: "0px", gap: "normal",
      fontFamily: s.fonts[r[14] as number], fontSize: r[15] as string, fontWeight: r[16] as string, lineHeight: r[17] as string,
      letterSpacing: r[18] as string, ...(r[22] ? { labelColor: r[22] as string } : {}),
    },
    surfaceId: id,
  }) as unknown as RawElementEvidence);
  return { id, url: s.url, viewport: "aside-browser", elements };
});

const faces = [...new Set(capture.surfaces.flatMap((s) => s.loaded))].map((entry) => {
  const [family, weight] = entry.split("|");
  return { family, status: "loaded", weight: weight ?? "normal", style: "normal", sources: [] };
});
const sources = surfaces.map((surface) => ({
  id: `surface-${surface.id}`,
  url: surface.url,
  kind: (/\/docs|\/brand|design-system|components|storybook|styleguide/i.test(new URL(surface.url).pathname) ? "official-doc" : "product-surface") as "official-doc" | "product-surface",
}));

const bundle = aggregateReferenceEvidence({ referenceId, capturedAt: capture.capturedAt, tool: "browser_harness", sources, surfaces, faces });
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, `${JSON.stringify(bundle, null, 2)}\n`, "utf8");
console.log(`[aside-capture] ${referenceId}: ${bundle.coverage.surfaceCount} surfaces · ${bundle.components.length} component variants · coverage ${bundle.coverage.score}/100 → ${output}`);
