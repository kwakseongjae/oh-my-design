import { describe, expect, it } from "vitest";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
// The evaluator ships its own frontmatter parser; using it here avoids a second YAML
// dependency in the test tree (js-yaml has no bundled types, so importing it directly
// was the only tsc error in this project).
import { SOURCE_TTLS, evaluateReferenceQuality, parseReferenceFrontmatter } from "../scripts/lib/reference-quality.mjs";

/**
 * Guards against making the catalog look verified without making it truer.
 *
 * All 140 verified references were verified in ONE batch on 2026-07-11..14, so they
 * expire together rather than one at a time. Under the original 90-day
 * product-surface TTL that fell on 2026-10-10, and CI would have gone red that
 * morning with nobody having changed anything.
 *
 * At such a moment the four cheapest ways back to green are all text edits, and none
 * of them re-observes a single pixel:
 *
 *   1. widen SOURCE_TTLS["product-surface"]                  -> 141 verified, ONE LINE
 *   2. relabel `kind: product-surface` as `official-doc`     -> 141 verified
 *   3. delete expired sources, re-point their claims         -> 134 stay verified
 *   4. rewrite `captured:` dates                             -> 140 verified
 *
 * Each was measured. Before this file, no test caught any of them.
 *
 * The owner then chose #1 deliberately on 2026-09-17 (180d / 365d), which is exactly
 * how this file is meant to work: it never blocked the edit, it made the edit a
 * decision someone owns instead of a quiet fix at a deadline. The batching problem is
 * untouched — the wall is now 2027-01-10.
 *
 * This is not hypothetical caution. In July 2026 a batch cleared the component gate
 * the same way — by deleting the components it could not measure — which is why the
 * verified tier now averages 2.9 components against legacy's 9.9, and why 51 of 140
 * verified references define no button. The check passed; nothing became truer.
 *
 * These tests do not stop the edits. They make them visible, so changing one is a
 * deliberate act with a reviewer, rather than the path of least resistance at 00:17
 * on a Saturday.
 */
describe("evidence integrity — the cheap paths back to green stay closed", () => {
  it("pins the source TTLs so widening one is a deliberate change", () => {
    // A TTL is a claim about how long an observation stays true. Raising it does not
    // re-observe anything; it just moves the wall. Changing these numbers should
    // require editing this test and saying why in the commit.
    expect(SOURCE_TTLS).toEqual({
      "product-surface": 180,
      "official-doc": 365,
      "brand-asset": 365,
      license: 365,
    });
  });

  it("keeps a live product surface short-lived relative to published artifacts", () => {
    // This is the invariant the numbers are a calibration OF: a page that can change
    // without notice must expire sooner than something the brand publishes and
    // versions. It survives the 2026-09-17 widening and should survive the next one.
    expect(SOURCE_TTLS["product-surface"]).toBeLessThan(SOURCE_TTLS["official-doc"]);

    // Everything that is a published artifact now sits at one number. The
    // doc-vs-asset distinction the original ladder drew has collapsed, which is a
    // real loss of resolution, not a test detail — accepted because the line that
    // carries meaning is live-surface vs published-artifact, and both sides of THAT
    // line are still enforced above. Assert non-decreasing so the ladder cannot
    // invert unnoticed.
    expect(SOURCE_TTLS["official-doc"]).toBeLessThanOrEqual(SOURCE_TTLS["brand-asset"]);
    expect(SOURCE_TTLS["brand-asset"]).toBeLessThanOrEqual(SOURCE_TTLS["license"]);
  });

  it("does not let a reference outlive its own observations", () => {
    // Forgery 4: a `captured` date in the future, or one that postdates the check
    // that blessed it, buys years of validity for an observation nobody made.
    const offenders: string[] = [];
    const refsDir = join(import.meta.dirname, "..", "references");
    for (const id of readdirSync(refsDir)) {
      const design = join(refsDir, id, "DESIGN.md");
      if (!existsSync(design)) continue;
      const markdown = readFileSync(design, "utf8");
      let front: any;
      try { front = parseReferenceFrontmatter(markdown, design); } catch { continue; }
      const v2 = front?.verification_v2;
      if (!v2?.checked || !Array.isArray(v2.sources)) continue;
      for (const source of v2.sources) {
        if (typeof source?.captured !== "string") continue;
        // An observation cannot have been made after the review that accepted it.
        if (source.captured > v2.checked) offenders.push(`${id}: ${source.id} captured ${source.captured} > checked ${v2.checked}`);
        // 2100 is not a date anyone measured on.
        if (source.captured >= "2090-01-01") offenders.push(`${id}: ${source.id} captured ${source.captured}`);
      }
    }
    expect(offenders).toEqual([]);
  });

  it("flags motion values that nothing in the reference grounds", () => {
    // The capture harness collects no motion properties at all — a bundle's
    // `elements[].style` has no transition or animation key — yet 273 references carry
    // a `motion-fast 120ms` style scale, and one non-standard curve,
    // cubic-bezier(0.2, 0.6, 0.25, 1), appears in 167 unrelated brands. Values that
    // live only in body prose were never gate-checked, because claim paths are token
    // paths; this advisory closes that blind spot.
    //
    // Pinned as a count rather than a list so the number can only move deliberately.
    // It went undetected once already: the first matcher used `\Z`, which JavaScript
    // reads as a literal Z, so any reference whose Motion section came last silently
    // passed and the finding read 37 instead of 288.
    const refsDir = join(import.meta.dirname, "..", "references");
    const flagged: string[] = [];
    for (const id of readdirSync(refsDir)) {
      const design = join(refsDir, id, "DESIGN.md");
      if (!existsSync(design)) continue;
      const markdown = readFileSync(design, "utf8");
      let front: any;
      try { front = parseReferenceFrontmatter(markdown, design); } catch { continue; }
      const verification = join(refsDir, id, ".verification.md");
      const result = evaluateReferenceQuality({
        id,
        markdown,
        frontmatter: front,
        verificationMarkdown: existsSync(verification) ? readFileSync(verification, "utf8") : "",
        asOf: "2026-09-17",
      });
      if (result.advisoryCodes?.includes("motion_value_unsourced")) flagged.push(id);
    }
    // 286 when the finding was made. Only 30 could be cleared mechanically.
    //
    // The first run claimed 130 and was wrong: the orphan guard's regex required a
    // backtick immediately after the token name, so it missed the commonest shape,
    // `motion-standard / ease-enter`, and let 100 references through that it existed to
    // stop. Those were reverted. What remains is the honest floor — nearly every motion
    // section cites the invented token names in its prose, so the tables cannot be cut
    // without rewriting the sentences around them.
    //
    // This number should fall only as that rewriting lands, never by loosening a check.
    expect(flagged.length).toBe(261);

    // The two references that handle this correctly must stay off the worklist,
    // otherwise the advisory punishes the behaviour it is meant to produce.
    expect(flagged).not.toContain("banksalad");  // quarantines the synthetic table, keeps its one real observation
    expect(flagged).not.toContain("toss");       // states the absence instead of filling it

    // And the pattern case must stay on it.
    // `adobe` was one of the 130 cleared, so it is off the list now; `17live` stands in
    // as a still-flagged case — its prose says "over `motion-reaction`", a token the
    // removed table was the only definition of.
    expect(flagged).toContain("adobe");   // reverted: its hedge sentence dangled once the table went
  }, 120_000);

  it("keeps the palette-grounding snapshot readable as evidence, not as an accusation", () => {
    // The snapshot says 43% of prose-derived references' declared colours were found on
    // the brand's live surface. That number is easy to misread: a homepage is one surface
    // and a palette covers several, so under 100% is expected. The caveat is part of the
    // data for that reason — someone quoting the figure without it would be overstating
    // what was measured, and the file is the only place that context travels.
    const snapshot = JSON.parse(
      readFileSync(join(import.meta.dirname, "..", "..", "data", "colour-grounding.json"), "utf8"),
    );
    expect(snapshot.measured_at).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(snapshot.method).toContain("homepage");
    expect(snapshot.caveat).toContain("below 100% is expected");
    expect(Object.keys(snapshot.references).length).toBeGreaterThanOrEqual(100);
  });

  it("separates a contradicted palette from a merely thin one", () => {
    // Two advisories, not one, and the difference is what a second observation buys.
    //
    // `palette_grounding_low` means one look at the homepage found few of the declared
    // colours. That can mean the palette is wrong, or that it lives on pages this pass
    // never opened.
    //
    // `palette_contradicted` means the 2026-07 capture and the 2026-09 page BOTH report
    // a low figure. Agreement across two months is not something a redesign produces.
    // Calling both "uncertain" would waste the stronger evidence.
    const refsDir = join(import.meta.dirname, "..", "references");
    const snapshot = JSON.parse(
      readFileSync(join(import.meta.dirname, "..", "..", "data", "colour-grounding.json"), "utf8"),
    );
    const contradicted: string[] = [];
    const low: string[] = [];
    for (const id of readdirSync(refsDir)) {
      const design = join(refsDir, id, "DESIGN.md");
      if (!existsSync(design)) continue;
      const markdown = readFileSync(design, "utf8");
      let front: any;
      try { front = parseReferenceFrontmatter(markdown, design); } catch { continue; }
      const verification = join(refsDir, id, ".verification.md");
      const result = evaluateReferenceQuality({
        id,
        markdown,
        frontmatter: front,
        verificationMarkdown: existsSync(verification) ? readFileSync(verification, "utf8") : "",
        asOf: "2026-09-17",
        colourGrounding: snapshot.references[id],
      });
      if (result.advisoryCodes.includes("palette_contradicted")) contradicted.push(id);
      else if (result.advisoryCodes.includes("palette_grounding_low")) low.push(id);
    }

    // Pinned so the numbers move only when someone re-measures and says why.
    expect(contradicted.sort()).toEqual(
      ["dji", "kakaot", "meituan", "money-forward", "ridi", "tada", "wavve"],
    );
    expect(low.length).toBe(22);

    // A reference can never carry both — they are graded, not stacked.
    expect(contradicted.filter((id) => low.includes(id))).toEqual([]);
  }, 120_000);

  it("records what happens on the expiry date instead of discovering it in CI", () => {
    // Forgeries 1-3 all exist to avoid this number. Asserting it means the cliff is a
    // known, dated fact in the test suite rather than a Saturday-morning surprise —
    // and a change that "fixes" it has to explain itself here first.
    const refsDir = join(import.meta.dirname, "..", "references");
    const count = (asOf: string) => {
      let verified = 0;
      for (const id of readdirSync(refsDir)) {
        const design = join(refsDir, id, "DESIGN.md");
        if (!existsSync(design)) continue;
        const markdown = readFileSync(design, "utf8");
        let front: any;
        try { front = parseReferenceFrontmatter(markdown, design); } catch { continue; }
        const verification = join(refsDir, id, ".verification.md");
        const result = evaluateReferenceQuality({
          id,
          markdown,
          frontmatter: front,
          verificationMarkdown: existsSync(verification) ? readFileSync(verification, "utf8") : "",
          asOf,
        });
        if (result.status === "verified_v2") verified += 1;
      }
      return verified;
    };

    // Measured 2026-09-17, after the owner raised product-surface to 180d and
    // official-doc to 365d. The cliff did not go away — it moved, and it is still a
    // cliff, because all 140 were verified in one batch.
    //
    // Asserted as a BOUND, not an equality, on purpose. The whole point of the capture
    // track is that recaptured references stop expiring on this date: a source captured
    // today survives to 2027-03-16, so an exact `toBe(0)` would fail on the first real
    // piece of content work and have to be edited by whoever did it — a test that cries
    // wolf at exactly the wrong moment. What must stay true is that the July batch is
    // gone by 01-10; anything still standing is new evidence, which is the goal.
    expect(count("2027-01-07")).toBeGreaterThanOrEqual(140);
    expect(count("2027-01-10")).toBeLessThanOrEqual(11);
  }, 120_000);
});
