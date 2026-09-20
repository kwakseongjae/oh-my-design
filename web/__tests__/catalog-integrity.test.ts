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
// Canonical source lives under web/ and is present in a clean Vercel/CI
// checkout. The root references symlink is a gitignored local convenience.
const REFS_DIR = join(WEB_ROOT, "references");
const DESIGN_MD_MIRROR = join(ROOT, "design-md");

/** Derived trees that must track an adopted canonical byte-for-byte. */
const CORE_MIRRORS: ReadonlyArray<readonly [string, string]> = [
  ["design-md", DESIGN_MD_MIRROR],
];
const FINGERPRINTS_ROOT = join(ROOT, "data", "reference-fingerprints.json");
const FINGERPRINTS_CLAUDE = join(ROOT, ".claude", "data", "reference-fingerprints.json");
const FINGERPRINTS_CODEX = join(ROOT, ".codex", "data", "reference-fingerprints.json");
const LLMS_TXT = join(WEB_ROOT, "public", "llms.txt");

const VALID_COUNTRIES = ["KR", "US", "JP", "TW", "CN", "UK", "DE", "FR", "IT"] as const;
const VALID_LOGO_TYPES = ["favicon", "simpleicons", "github"] as const;
// The 10 component types the preview can render (componentsFromTokens). A
// structured component token's `type` must be one of these.
const RENDER_TYPES = ["button", "input", "card", "badge", "tab", "toggle", "toast", "dialog", "listItem", "avatar"] as const;

// Proof gate (spec/verification-pipeline.md): forward-only. Refs verified on/after
// this date must carry a `## Proof` block in .verification.md (>= 5 raw samples +
// URL) and a Tier-1-sources footer; KR/TW additionally need >= 2 brand-owned
// regional sources. Older refs are grandfathered — the gate is not retroactive.
const PROOF_GATE_CUTOFF = "2026-06-01";
/**
 * Forward-only: a reference verified on or after this date may not ship
 * `tokens.source: prose-derived`. Its values must come from a measurement.
 *
 * Why (2026-09-17). 111 references carry prose-derived tokens, and only 43% of the
 * colours they declare exist on the brand's live surface. Five are conclusive rather
 * than uncertain — for `wavve`, `meituan`, `ridi`, `tada` and `dji` the July capture and
 * today's page independently agree on the same low figure, two months apart, which a
 * redesign cannot produce. `note` declares a teal `#41c9b4` that appears in neither a
 * 957-element capture nor today's page, whose actual teal is `#1e7b65`.
 *
 * Those are not fixable by tooling: every declared colour is reused in a component or
 * the prose (100% of the 19 worst, no exceptions), so correcting one means rewriting the
 * document around it. The cheap move is therefore to stop the inflow, not to chase the
 * backlog — expanding the catalog toward 1,000 references without this gate would add
 * hundreds more of the same.
 *
 * The cutoff sits past the catalog's newest `verified` date (2026-07-14), so nothing
 * existing is broken and nothing is grandfathered in by accident. Re-verifying an old
 * prose-derived reference bumps its date into the gate, which is the intent: a
 * re-verification that measures nothing is not a re-verification.
 */
const MEASURED_TOKENS_CUTOFF = "2026-08-01";
// Western Tier-2 catalogs + the favicon proxy never count as brand-owned regional.
const NON_REGIONAL_HOSTS = /getdesign\.md|refero\.design|google\.com\/s2/i;
/** Markets where Tier 2 cannot carry a reference, so Tier 1 must supply >= 2 sources. */
const REGIONAL_PROOF_COUNTRIES = new Set(["KR", "TW", "JP"]);
/**
 * Publishing platforms a brand may operate an account on. The bare host is never
 * brand-owned — `note.com` is a platform, and a post there about a company is not
 * the company. A company's *own* account is, so an account path is required.
 *
 * This matters most in Japan, where several firms (SODA, en-japan, Studist,
 * Legalscape and others) keep no technical surface on a brand domain at all and
 * publish only to Zenn or note.
 */
const PLATFORM_HOSTS = /^https?:\/\/(?:[a-z0-9-]+\.)?(?:note\.com|zenn\.dev|medium\.com|qiita\.com|speakerdeck\.com|brunch\.co\.kr|velog\.io)(?:\/|$)/i;
/** A platform URL counts only when it names an account, not the bare host or a feed. */
function isBrandOperatedAccount(url: string): boolean {
  if (!PLATFORM_HOSTS.test(url)) return true;
  const path = url.replace(/^https?:\/\/[^/]+/i, "").replace(/[?#].*$/, "");
  const segments = path.split("/").filter(Boolean);
  return segments.length >= 1 && !["", "search", "tag", "tags", "explore"].includes(segments[0]);
}

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

    // Guard: entry-level frontmatter fields mis-indented INTO the `tokens:`
    // block. YAML then nests them under tokens, build-registry serializes them
    // inside the tokens JSON, and `next build`'s tsc rejects them against the
    // tokens type — failing the Vercel deploy while passing verify-reference and
    // every other check here (none run tsc). Regression: samsung `ds` nested
    // under tokens broke prod build 2026-06-23.
    if (entry.tokens) {
      const ENTRY_ONLY = [
        "ds", "id", "name", "country", "category", "homepage",
        "primary_color", "primaryColor", "logo", "verified", "omd",
        "display_name_kr", "displayNameKr",
      ];
      const leaked = Object.keys(entry.tokens).filter((k) => ENTRY_ONLY.includes(k));
      expect(
        leaked,
        `${id}: entry-level field(s) [${leaked.join(", ")}] are nested inside the tokens: block — de-indent them to top level (sibling of tokens:)`,
      ).toEqual([]);
    }

    // §1 header and prose-first rule
    const md = readFileSync(join(REFS_DIR, id, "DESIGN.md"), "utf-8");

    // An adopted Core v2 canonical is a different document: no YAML
    // frontmatter, no numbered legacy sections, structure carried by
    // `<!-- design-md:section -->` markers instead. Every guard below reads the
    // 15-section dialect, so holding a Core canonical to them reports "must
    // open with a --- frontmatter" — which sounds like a broken reference and
    // is really just the wrong contract. Core canonicals get their own, and
    // still owe the mirrors the same byte-for-byte agreement.
    if (md.includes("<!-- design-md:section ")) {
      expect(
        md.startsWith("---\n"),
        `${id}: an adopted Core v2 canonical must not carry YAML frontmatter — its authority is the .omd/system package`
      ).toBe(false);
      // Sections are opened and not closed; claims are the paired construct.
      const sections = (md.match(/<!-- design-md:section /g) ?? []).length;
      const claims = (md.match(/<!-- design-md:claim /g) ?? []).length;
      const claimEnds = (md.match(/<!-- design-md:claim-end -->/g) ?? []).length;
      expect(sections, `${id}: a Core v2 canonical carries no section markers`).toBeGreaterThan(0);
      expect(claimEnds, `${id}: Core v2 claim markers are unbalanced (${claims} open, ${claimEnds} closed)`).toBe(claims);
      expect(
        existsSync(join(REFS_DIR, id, ".omd", "system", "manifest.json")),
        `${id}: a Core v2 canonical without its .omd/system package cannot be verified — readers fall back to parsing the markdown and consume nothing the package declares`
      ).toBe(true);
      for (const [label, root] of CORE_MIRRORS) {
        const mirror = join(root, id, "DESIGN.md");
        expect(existsSync(mirror), `${id}: ${label} mirror missing`).toBe(true);
        if (existsSync(mirror)) {
          expect(
            readFileSync(mirror, "utf-8") === md,
            `${id}: ${label} mirror is not byte-identical to the reference — re-sync it`
          ).toBe(true);
        }
      }
      return;
    }

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

    // Measured-tokens gate — forward-only. See MEASURED_TOKENS_CUTOFF.
    if (entry.verified >= MEASURED_TOKENS_CUTOFF) {
      expect(
        entry.tokens?.source,
        `${id}: verified ${entry.verified} is inside the measured-tokens gate, so tokens.source may not be "prose-derived" — transcribing values from documentation is not a measurement. Capture the surface (web/scripts/probe-component-states.mjs) or leave the reference at its previous verified date.`
      ).not.toBe("prose-derived");
    }

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
      // JP joins KR/TW (2026-09-17). The rule exists because the Tier-2 cross-check
      // catalogs under-cover Asian brands, so Tier 1 has to carry the proof alone —
      // and that is even more true of Japan than of Korea. Every JP reference's
      // Tier-2 footer in this repo records a miss: getdesign.md returns nothing for
      // abema, rakuten, nintendo, dmm, mercari, recruit, sony or toyota. There is no
      // second opinion to fall back on.
      if (REGIONAL_PROOF_COUNTRIES.has(entry.country)) {
        const regional = tier1Urls.filter(u => !NON_REGIONAL_HOSTS.test(u) && isBrandOperatedAccount(u));
        expect(
          regional.length,
          `${id}: ${entry.country} gated ref needs >= 2 brand-owned regional Tier-1 sources (getdesign/refero don't count), got ${regional.length}: ${regional.join(", ")}`
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

    // Structured component-token gate. tokens.components is the canonical render
    // source (componentsFromTokens), so it must be structured objects — never
    // flat strings (which silently fall back to prose §4) — each with an explicit
    // render `type` (componentsFromTokens coerces unknown types to "card", hiding
    // typos), a real `components_harvested` boolean marker, and component bg/fg/
    // border hexes grounded in the DESIGN.md (the same honesty rule as colors).
    const comps = entry.tokens?.components;
    if (comps) {
      expect(
        typeof entry.tokens?.components_harvested,
        `${id}: has tokens.components but components_harvested is not a boolean`
      ).toBe("boolean");
      const groundingC = md.replace(/\ntokens:\n(?:[ \t].*(?:\n|$))*/, "\n").toLowerCase();
      for (const [cname, c] of Object.entries(comps)) {
        expect(
          typeof c === "object" && c !== null,
          `${id}: component '${cname}' must be a structured object ({type,…}), not a flat string`
        ).toBe(true);
        const o = c as Record<string, unknown>;
        expect(
          RENDER_TYPES,
          `${id}: component '${cname}' type '${String(o.type)}' is not one of the 10 render types`
        ).toContain(o.type);
        for (const k of ["bg", "fg", "border"] as const) {
          for (const hex of String(o[k] ?? "").match(/#[0-9a-fA-F]{6}/g) ?? []) {
            expect(
              groundingC.includes(hex.toLowerCase()),
              `${id}: component ${cname}.${k} ${hex} is not grounded in the DESIGN.md`
            ).toBe(true);
          }
        }
      }
    }

    // Fingerprint cross-check
    const fp = fpById.get(id);
    expect(fp, `${id} missing from fingerprints`).toBeDefined();

    // design-md mirror — must exist AND be byte-identical (catches silent drift
    // when a reference is edited but its mirror copy isn't re-synced).
    const mirrorPath = join(DESIGN_MD_MIRROR, id, "DESIGN.md");
    expect(
      existsSync(mirrorPath),
      `${id}: design-md/${id}/DESIGN.md mirror missing`
    ).toBe(true);
    if (existsSync(mirrorPath)) {
      expect(
        readFileSync(mirrorPath, "utf-8") === md,
        `${id}: design-md/${id}/DESIGN.md is not byte-identical to the reference — re-sync the mirror`
      ).toBe(true);
    }
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

/**
 * The write gate: every catalog reader accepts an adopted package.
 *
 * Adoption moves a reference's frontmatter — country, category, verified date,
 * tokens, the whole `verification_v2` graph — out of DESIGN.md and into
 * `.omd/system/`. A reader that opens the raw file and parses frontmatter does
 * not fail on one. It succeeds and returns nothing, and every count downstream
 * is quietly short.
 *
 * That shipped twice before this existed: the drift sweep reported krds and toss
 * as having no evidence sources, and the MCP bundle served toss with an empty
 * frontmatter map. Both were found by hand, months apart. `scripts/check-reader-
 * blindness.mjs` is the static half — it fails a new pipeline reader that has not
 * chosen a side. This is the behavioural half: whatever the readers do, an
 * adopted reference must come out of every generated artifact shaped like any
 * other, because that is the property the catalog actually depends on.
 *
 * The adopted set is derived, never listed. Two references are adopted today and
 * the catalog is going that way; a test that names them stops testing the moment
 * a third arrives.
 */
describe("adopted references survive every catalog reader", () => {
  const adoptedIds = readdirSync(REFS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory()
      && existsSync(join(REFS_DIR, entry.name, ".omd", "system", "graph.json")))
    .map((entry) => entry.name)
    .sort();

  test("at least one reference is adopted, or this whole block is vacuous", () => {
    expect(adoptedIds.length).toBeGreaterThan(0);
  });

  test("an adopted canonical carries no frontmatter — the premise of the gate", () => {
    for (const id of adoptedIds) {
      const raw = readFileSync(join(REFS_DIR, id, "DESIGN.md"), "utf8");
      expect(raw.startsWith("---\n"), `${id}: adopted canonical unexpectedly has frontmatter`).toBe(false);
      expect(raw).toContain("<!-- design-md:section ");
    }
  });

  test("the package-aware reader rebuilds the legacy source for each", async () => {
    const { readReferenceSource } = await import("../scripts/lib/reference-source.mjs");
    for (const id of adoptedIds) {
      const source = readReferenceSource(join(REFS_DIR, id));
      expect(source.format, `${id}`).toBe("core-v2");
      expect(source.reconstructed, `${id}: rebuilt from the package, not read off disk`).toBe(true);
      expect(source.markdown.startsWith("---\n"), `${id}: reconstruction has no frontmatter`).toBe(true);
    }
  });

  test("its frontmatter has the same shape as an unadopted reference's", async () => {
    const { readReferenceSource } = await import("../scripts/lib/reference-source.mjs");
    const { parseReferenceFrontmatter } = await import("../scripts/lib/reference-quality.mjs");
    const peer = REGISTRY.map((entry) => entry.id).find((id) => !adoptedIds.includes(id));
    if (!peer) throw new Error("no unadopted reference to compare against");
    const peerKeys = new Set(Object.keys(parseReferenceFrontmatter(
      readReferenceSource(join(REFS_DIR, peer)).markdown, peer,
    )));

    for (const id of adoptedIds) {
      const frontmatter = parseReferenceFrontmatter(readReferenceSource(join(REFS_DIR, id)).markdown, id);
      // Not equality: references legitimately differ in optional keys. What must
      // hold is that the load-bearing ones are all there and non-empty — an empty
      // map is precisely what a blind reader produces.
      for (const key of ["id", "name", "country", "category", "verified", "tokens", "verification_v2"]) {
        expect(frontmatter[key], `${id}: frontmatter.${key} missing after reconstruction`).toBeTruthy();
      }
      expect(Object.keys(frontmatter).length, `${id}: far fewer keys than ${peer}`)
        .toBeGreaterThanOrEqual(Math.floor(peerKeys.size * 0.7));
    }
  });

  test("every generated artifact carries it with a peer's key set and real values", async () => {
    const { REFERENCE_QUALITY_BY_ID } = await import("../src/data/reference-quality.generated");
    const peerId = REGISTRY.map((entry) => entry.id).find((id) => !adoptedIds.includes(id))!;
    const { readReferenceSource } = await import("../scripts/lib/reference-source.mjs");
    const { parseReferenceFrontmatter } = await import("../scripts/lib/reference-quality.mjs");
    const sourceCounts = new Map(adoptedIds.map((id) => [id, (parseReferenceFrontmatter(
      readReferenceSource(join(REFS_DIR, id)).markdown, id,
    ).verification_v2?.sources ?? []).length]));
    const astManifest = JSON.parse(
      readFileSync(join(WEB_ROOT, "src", "data", "reference-ast.generated.json"), "utf8"),
    ) as { references: Array<{ identity: { id: string } }> };
    const ledger = JSON.parse(
      readFileSync(join(ROOT, "data", "evidence-ledger.json"), "utf8"),
    ) as { references: Record<string, unknown> };
    const ledgerIds = new Set(Object.keys(ledger.references ?? {}));

    for (const id of adoptedIds) {
      const entry = REGISTRY_BY_ID[id];
      expect(entry, `registry.generated.ts is missing ${id}`).toBeTruthy();
      // Superset, not equality: `ds` and other optional keys legitimately vary
      // between references. The failure mode being guarded is the adopted entry
      // coming out *thinner* than a peer, never richer.
      expect(Object.keys(REGISTRY_BY_ID[peerId]!).filter((key) => !(key in entry!)),
        `${id}: registry keys present on ${peerId} but missing here`).toEqual([]);
      // The values a blind reader loses first.
      expect(entry!.country, `${id}: registry country`).toBeTruthy();
      expect(entry!.tokens?.colors?.primary ?? entry!.tokens?.color?.primary, `${id}: registry primary token`).toBeTruthy();

      const quality = REFERENCE_QUALITY_BY_ID[id];
      expect(quality, `reference-quality.generated.ts is missing ${id}`).toBeTruthy();
      expect(Object.keys(REFERENCE_QUALITY_BY_ID[peerId]!).filter((key) => !(key in quality!)),
        `${id}: quality keys present on ${peerId} but missing here`).toEqual([]);
      // The artifact must agree with the reconstruction. Not `> 0`: a
      // legacy_snapshot reference has no sources before or after adoption, and
      // the catalog is adopting all 440 — an assertion that fails on the first
      // such adoption is testing the fixture, not the property. Equality is the
      // real claim, and it is still the drift-sweep bug asserted from the other
      // end: a blind reader yields 0 against a reconstruction that has 12.
      expect(quality!.sourceCount, `${id}: quality sourceCount disagrees with the reconstruction`)
        .toBe(sourceCounts.get(id));

      expect(astManifest.references.some((reference) => reference.identity.id === id),
        `portable AST is missing ${id}`).toBe(true);
      if (quality!.status === "verified_v2") {
        expect(ledgerIds.has(id), `evidence ledger is missing verified ${id}`).toBe(true);
      }
    }
  });
});
