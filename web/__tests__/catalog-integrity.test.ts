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

// Proof gate (spec/verification-pipeline.md): forward-only. Refs verified on/after
// this date must carry a `## Proof` block in .verification.md (>= 5 raw samples +
// URL) and a Tier-1-sources footer; KR/TW additionally need >= 2 brand-owned
// regional sources. Older refs are grandfathered — the gate is not retroactive.
const PROOF_GATE_CUTOFF = "2026-06-01";
// Western Tier-2 catalogs + the favicon proxy never count as brand-owned regional.
const NON_REGIONAL_HOSTS = /getdesign\.md|refero\.design|google\.com\/s2/i;

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

    // Frontmatter-leak guard. The YAML frontmatter (between the opening `---`
    // and its closing `---`) must contain NO markdown prose — a `## heading`
    // or `- bullet` leaked above the closing `---` (a) never renders on the
    // page and (b) breaks strict-YAML parsing the moment a `tokens:` block is
    // added (the lenient field-parser silently hides it until then). This bit
    // catchtable/dabang/lunit/toss-securities/wadiz; the guard stops regressions.
    expect(md.startsWith("---\n"), `${id}: must open with a --- frontmatter`).toBe(true);
    const fmClose = md.indexOf("\n---\n", 4);
    expect(fmClose, `${id}: frontmatter has no closing ---`).toBeGreaterThan(0);
    // Strip ONLY the tokens: block (its `tokens:` line plus its indented
    // continuation), not everything after it — a leak can sit AFTER the tokens
    // block, just above the closing ---. Tokens values are all indented, so a
    // col-0 markdown heading/bullet that survives this strip is a real leak.
    const fmRegion = md.slice(4, fmClose).replace(/^tokens:\n(?:(?:[ \t].*)?\n)*/m, "");
    expect(
      /^#{1,6}\s/m.test(fmRegion) || /^- /m.test(fmRegion),
      `${id}: markdown prose leaked into the YAML frontmatter (a heading or bullet above the closing ---). Move that section into the body, after the closing ---.`
    ).toBe(false);

    expect(md, `${id}: §1 header`).toMatch(/^## 1\. Visual Theme & Atmosphere/m);
    const sec1 = md.split(/^## 1\. Visual Theme & Atmosphere[^\n]*\n/m)[1] || "";
    // Blank line required after the §1 header. The llms-full generator splits on
    // blank lines and skips `#`-led blocks; without the blank line, header+prose
    // become ONE skipped block and the generator grabs a later §4 component spec
    // instead (broke gogolook). The §1-prose check below is blank-line-lenient, so
    // this is a distinct guard.
    expect(
      sec1.startsWith("\n"),
      `${id}: §1 header must be followed by a blank line (else llms-full mis-extracts the summary)`
    ).toBe(true);
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

    // §4 placeholder-value lint. When a writer lacks a measured value, the field
    // bullet must be OMITTED — never filled with a placeholder ("not measured",
    // "not specified", "n/a", "tbd"). The component-preview renders bullet values
    // verbatim, so a placeholder shows up as if it were a real spec value.
    const placeholderOffenders = sec4
      .split("\n")
      .filter(line => /^[-*]\s+(?!\*\*)[A-Za-z]/.test(line)) // field bullets only
      .filter(line => {
        const colon = line.indexOf(":");
        if (colon === -1) return false;
        const value = line.slice(colon + 1).trim();
        // Word-phrase placeholders only — NOT bare dashes (a real value can be
        // "-1px" or contain "position: -webkit-sticky").
        return /^(not\s+(measured|specified|applicable|available)|n\/a|unknown|tbd)\b/i.test(value);
      });
    expect(
      placeholderOffenders,
      `${id}: §4 has placeholder field values (omit the field instead of writing a placeholder — the preview renders it verbatim):\n${placeholderOffenders.join("\n")}`
    ).toEqual([]);

    // Proof gate — forward-only (refs verified >= PROOF_GATE_CUTOFF). Older refs
    // are grandfathered: the early batches lack a structured Proof block and we do
    // not rewrite history. A footer alone is not proof — the raw DOM samples must
    // be present, which is impossible to satisfy without doing the live inspect.
    if (entry.verified >= PROOF_GATE_CUTOFF) {
      const proofPath = join(REFS_DIR, id, ".verification.md");
      expect(existsSync(proofPath), `${id}: gated ref missing .verification.md proof`).toBe(true);
      const proof = readFileSync(proofPath, "utf-8");
      expect(proof, `${id}: .verification.md needs a "## Proof" block`).toMatch(/^##\s+Proof/m);
      const rawSamples = (proof.match(/rgb\(|#[0-9a-fA-F]{6}\b|\b\d+px\b/g) ?? []).length;
      expect(
        rawSamples,
        `${id}: Proof has only ${rawSamples} raw computed-style samples (need >= 5 — a real inspect yields 30+)`
      ).toBeGreaterThanOrEqual(5);
      expect(proof, `${id}: Proof block needs >= 1 source URL`).toMatch(/https?:\/\//);

      // §4 footer Tier-1-sources, and the KR/TW >= 2 brand-owned regional rule.
      const tier1Line = md.match(/^\*\*Tier 1 sources:\*\*\s*(.+)$/m)?.[1] ?? "";
      const tier1Urls = tier1Line.match(/https?:\/\/[^\s,)]+/g) ?? [];
      expect(
        tier1Urls.length,
        `${id}: §4 footer "Tier 1 sources" lists no URL`
      ).toBeGreaterThanOrEqual(1);
      if (entry.country === "KR" || entry.country === "TW") {
        const regional = tier1Urls.filter(u => !NON_REGIONAL_HOSTS.test(u));
        expect(
          regional.length,
          `${id}: KR/TW gated ref needs >= 2 brand-owned regional Tier-1 sources (getdesign/refero don't count), got ${regional.length}: ${regional.join(", ")}`
        ).toBeGreaterThanOrEqual(2);
      }
    }

    // Token ↔ prose consistency gate (forward-only — only refs that carry a
    // `tokens` block). Every token color value must be grounded somewhere in the
    // DESIGN.md OUTSIDE the tokens block itself (prose §2 or the primary_color
    // field) — catching transcription typos and invented/ungrounded values. This
    // is what keeps a `prose-derived` token honest; getdesign.md has no such check.
    const tokenColors = entry.tokens?.colors ?? entry.tokens?.color;
    if (tokenColors) {
      const grounding = md
        .replace(/\ntokens:\n(?:[ \t].*(?:\n|$))*/, "\n")
        .toLowerCase();
      for (const [role, hex] of Object.entries(tokenColors)) {
        expect(
          grounding.includes(String(hex).toLowerCase()),
          `${id}: token color.${role} ${hex} is not grounded in the DESIGN.md (prose/primary_color) — fix the token or state the value in the prose`
        ).toBe(true);
      }
    }

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

  it("every ref has a parseable Do/Don't guideline marker (advisory)", () => {
    // The reference-preview Guidelines section is populated by extractGuidelines,
    // which recognises `### Do` / `### Don't` headers or inline `- **DO**` bullets.
    // A ref with none renders an EMPTY Guidelines section. Authoring that uses
    // `**Do**` bold headers or plain `- Do ...` bullets silently produces nothing.
    // Advisory (warn) so the gate stays green while we backfill; hard-fail under a flag.
    const GUIDELINE_MARKER = /^###\s+Do(?:['’]?s)?\b|^###\s+Don['’]?t|^[-*]\s+\*\*DO(?:N['’]?T)?\*\*/im;
    const missing = ids.filter(id => {
      const md = readFileSync(join(REFS_DIR, id, "DESIGN.md"), "utf-8");
      return !GUIDELINE_MARKER.test(md);
    });
    if (process.env.STRICT_GUIDELINES === "1") {
      expect(missing, `refs with no parseable Do/Don't guidelines: ${missing.join(", ")}`).toEqual([]);
    } else if (missing.length > 0) {
      console.warn(`[catalog-integrity] ${missing.length} refs render an empty Guidelines section (advisory): ${missing.slice(0, 10).join(", ")}${missing.length > 10 ? "…" : ""}`);
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
