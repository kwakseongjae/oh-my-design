import { describe, expect, it } from "vitest";
import { ENGLISH_REFERENCE_IDS, getReferenceEnglishEditorial } from "./editorial";

describe("reference English editorial contract", () => {
  it.each(ENGLISH_REFERENCE_IDS)("publishes grounded English summary and evolution for %s", (id) => {
    const editorial = getReferenceEnglishEditorial(id);
    expect(editorial?.canonicalSummary.length).toBeGreaterThan(180);
    expect(editorial?.evidenceBoundary.length).toBeGreaterThan(80);
    expect(editorial?.keywords.length).toBeGreaterThanOrEqual(3);
    expect(editorial?.evolution.length).toBeGreaterThanOrEqual(2);
    for (const change of editorial?.evolution ?? []) {
      expect(change.before).not.toBe(change.after);
      expect(change.reason.length).toBeGreaterThan(60);
    }
  });

  it("keeps the curated lane closed instead of synthesizing summaries", () => {
    expect(getReferenceEnglishEditorial("unknown-brand")).toBeNull();
  });
});
