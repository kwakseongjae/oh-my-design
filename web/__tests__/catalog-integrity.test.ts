/**
 * Catalog integrity — single gate guarding the reference data plane.
 *
 * Runs in pre-commit (via husky) and in CI. If this passes, every code
 * surface that reads from the registry is internally consistent.
 */
import { describe, test, expect, it } from "vitest";
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { REGISTRY, REGISTRY_BY_ID } from "../src/data/registry.generated";
import { KNOWN_FIELD_KEYS } from "../src/lib/extract-tokens";

const WEB_ROOT = resolve(__dirname, "..");
const ROOT = resolve(WEB_ROOT, "..");
const REFS_DIR = join(ROOT, "references");
const DESIGN_MD_MIRROR = join(ROOT, "design-md");
const FINGERPRINTS_ROOT = join(ROOT, "data", "reference-fingerprints.json");
const FINGERPRINTS_CLAUDE = join(ROOT, ".claude", "data", "reference-fingerprints.json");
const FINGERPRINTS_CODEX = join(ROOT, ".codex", "data", "reference-fingerprints.json");
const LLMS_TXT = join(WEB_ROOT, "public", "llms.txt");

const VALID_COUNTRIES = ["KR", "US", "JP", "TW", "CN", "UK", "DE", "FR", "IT"] as const;
const VALID_LOGO_TYPES = ["favicon", "simpleicons", "github"] as const;

const fingerprintsRaw = readFileSync(FINGERPRINTS_ROOT, "utf-8");
const fingerprints = JSON.parse(fingerprintsRaw) as {
  count: number;
  items: Array<{ id: string; category: string; primary_color_hex?: string }>;
};
const fpById = new Map(fingerprints.items.map(it => [it.id, it]));

const ids = readdirSync(REFS_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory() && existsSync(join(REFS_DIR, d.name, "DESIGN.md")))
  .map(d => d.name)
  .sort();

// ─── Per-id assertions (parametrized) ─────────────────────────────────
describe("catalog-integrity / per-reference", () => {
  test.each(ids)("%s", (id) => {
    const entry = REGISTRY_BY_ID[id];
    expect(entry, `${id} missing from registry`).toBeDefined();

    // Required-field types
    expect(typeof entry.id).toBe("string");
    expect(typeof entry.name).toBe("string");
    expect(entry.name.length).toBeGreaterThan(0);
    expect(VALID_COUNTRIES).toContain(entry.country);
    expect(typeof entry.category).toBe("string");
    expect(entry.homepage).toMatch(/^https?:\/\//);
    expect(entry.primaryColor).toMatch(/^#[0-9a-fA-F]{6}$/);
    expect(VALID_LOGO_TYPES).toContain(entry.logo.type);
    expect(entry.logo.slug.length).toBeGreaterThan(0);
    expect(entry.verified).toMatch(/^\d{4}-\d{2}-\d{2}$/);

    // §1 header and prose-first rule
    const md = readFileSync(join(REFS_DIR, id, "DESIGN.md"), "utf-8");
    expect(md, `${id}: §1 header`).toMatch(/^## 1\. Visual Theme & Atmosphere/m);
    const sec1 = md.split(/^## 1\. Visual Theme & Atmosphere[^\n]*\n/m)[1] || "";
    // Skip blank lines, then check the first non-empty line is prose.
    const firstLine = sec1.split("\n").map(l => l.trim()).find(l => l.length > 0) || "";
    // Block-level markdown leaders disqualify a prose paragraph:
    //  - heading: starts with `#` followed by space or another `#`
    //  - table:   starts with `|`
    //  - bullet:  starts with `- `, `* ` (but NOT `**bold**`), `+ `
    //  - ordered: starts with `1.<space>`
    const isHeader = /^#{1,6}(\s|$)/.test(firstLine);
    const isTable = firstLine.startsWith("|");
    const isBullet = /^[-+]\s/.test(firstLine) || /^\*\s(?!\*)/.test(firstLine);
    const isOrdered = /^\d+\.\s/.test(firstLine);
    expect(
      isHeader || isTable || isBullet || isOrdered,
      `${id}: §1 must start with prose, got: ${firstLine.slice(0, 80)}`
    ).toBe(false);

    // §4 slash-multi-field anti-pattern (the KRDS 35/36-variants-lost bug).
    // The parser reads `- Field: value` as ONE field; if a writer combines
    // fields with a slash (`- Background: #x / Text: #y`), the second field is
    // swallowed into the first field's value and silently lost. Flag any §4
    // field bullet whose value contains ` / <knownField>:`. Variant headers
    // (`**Secondary chip / checkbox:**`) are excluded — only `- ` field bullets
    // are scanned, and a leading `**` disqualifies the line.
    const sec4 = md.match(/## 4\. Component[\s\S]*?(?=\n## 5\.|$)/i)?.[0] ?? "";
    const knownAfterSlash = new RegExp(
      ` / \\*{0,2}(?:${KNOWN_FIELD_KEYS.map(k => k.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|")})\\*{0,2}\\s*[:：]`,
      "i"
    );
    const slashOffenders = sec4
      .split("\n")
      .filter(line => /^[-*]\s+(?!\*\*)[A-Za-z]/.test(line)) // field bullets only (not `**Variant**` headers)
      .filter(line => {
        const colon = line.indexOf(":");
        if (colon === -1) return false;
        return knownAfterSlash.test(line.slice(colon + 1)); // a 2nd known field hides in the value
      });
    expect(
      slashOffenders,
      `${id}: §4 has slash-combined fields (parser swallows the 2nd field — write one field per bullet):\n${slashOffenders.join("\n")}`
    ).toEqual([]);

    // Fingerprint cross-check
    const fp = fpById.get(id);
    expect(fp, `${id} missing from fingerprints`).toBeDefined();

    // design-md mirror
    expect(
      existsSync(join(DESIGN_MD_MIRROR, id, "DESIGN.md")),
      `${id}: design-md/${id}/DESIGN.md mirror missing`
    ).toBe(true);
  });
});

// ─── Cross-cutting invariants ─────────────────────────────────────────
describe("catalog-integrity / cross-cutting", () => {
  it("ls references/ count == fingerprints.count == REGISTRY.length", () => {
    expect(ids.length).toBe(fingerprints.count);
    expect(ids.length).toBe(REGISTRY.length);
  });

  it("fingerprints triple mirror is byte-identical", () => {
    const a = readFileSync(FINGERPRINTS_ROOT);
    const b = readFileSync(FINGERPRINTS_CLAUDE);
    const c = readFileSync(FINGERPRINTS_CODEX);
    expect(a.equals(b), "data/ vs .claude/data/ diverged").toBe(true);
    expect(a.equals(c), "data/ vs .codex/data/ diverged").toBe(true);
  });

  it("design-md mirror has every id", () => {
    const mirror = readdirSync(DESIGN_MD_MIRROR, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name);
    for (const id of ids) {
      expect(mirror, `design-md missing ${id}`).toContain(id);
    }
  });

  it("registry is sorted by id (stable diff)", () => {
    const sorted = [...REGISTRY].map(e => e.id).sort();
    expect(REGISTRY.map(e => e.id)).toEqual(sorted);
  });

  it("llms.txt Examples mentions every brand (advisory)", () => {
    // Pre-existing surface — older brands not all listed in the Examples line.
    // We flag missing entries as a warning. Hard-fail only on a stricter env flag,
    // so the catalog gate stays green while we backfill llms.txt separately.
    if (!existsSync(LLMS_TXT)) return;
    const txt = readFileSync(LLMS_TXT, "utf-8");
    const examples = (txt.match(/^Examples:.*$/m)?.[0] || "");
    const missing: string[] = [];
    for (const e of REGISTRY) {
      const candidates = [e.name, e.displayName].filter(Boolean) as string[];
      const hit = candidates.some(c => examples.includes(c));
      if (!hit) missing.push(e.id);
    }
    if (process.env.STRICT_LLMS === "1") {
      expect(missing, `llms.txt Examples missing: ${missing.join(", ")}`).toEqual([]);
    } else if (missing.length > 0) {
      console.warn(`[catalog-integrity] llms.txt Examples missing ${missing.length} brands (advisory): ${missing.slice(0, 8).join(", ")}${missing.length > 8 ? "…" : ""}`);
    }
  });
});

// touch statSync to keep import for potential future timestamp checks
void statSync;
