import { describe, expect, it } from "vitest";
import {
  ga4CompleteDateRange,
  gscCompleteDateRange,
  trailingCompleteUtcBuckets,
} from "../../scripts/analytics/_dates.mjs";

describe("analytics complete-day ranges", () => {
  const now = new Date("2026-07-10T05:00:00.000Z");

  it("requests exactly N complete GA4 days and never today", () => {
    expect(ga4CompleteDateRange(30)).toEqual({ startDate: "30daysAgo", endDate: "yesterday" });
  });

  it("builds an inclusive N-day GSC window behind the reporting lag", () => {
    expect(gscCompleteDateRange(30, { lagDays: 3, now })).toEqual({
      startDate: "2026-06-08",
      endDate: "2026-07-07",
    });
  });

  it("excludes the current partial UTC HLL day", () => {
    expect(trailingCompleteUtcBuckets(3, now)).toEqual(["20260709", "20260708", "20260707"]);
  });

  it("rejects ambiguous or empty windows", () => {
    expect(() => ga4CompleteDateRange(0)).toThrow(/positive integer/);
    expect(() => gscCompleteDateRange(2.5, { now })).toThrow(/positive integer/);
  });
});
