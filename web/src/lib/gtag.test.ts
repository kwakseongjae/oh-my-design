import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  ANALYTICS_TAXONOMY_VERSION,
  classifyErrorOrigin,
  event,
  normalizeEventParams,
} from "./gtag";

beforeEach(() => {
  vi.unstubAllGlobals();
});

describe("analytics acquisition guard", () => {
  it("moves reserved campaign keys under event_* and adds one taxonomy version", () => {
    const normalized = normalizeEventParams({
      source: "directory",
      medium: "internal",
      campaign: "launch",
      surface: "ref_detail",
    });
    expect(normalized).toEqual({
      taxonomy_version: ANALYTICS_TAXONOMY_VERSION,
      event_source: "directory",
      event_medium: "internal",
      event_campaign: "launch",
      surface: "ref_detail",
    });
    expect(normalized).not.toHaveProperty("source");
    expect(normalized).not.toHaveProperty("medium");
    expect(normalized).not.toHaveProperty("campaign");
  });

  it("sends the normalized payload to GA4", () => {
    const gtag = vi.fn();
    vi.stubGlobal("window", { gtag });
    event("ds_detail_open", { reference: "toss", source: "directory" });
    const expected = {
      taxonomy_version: ANALYTICS_TAXONOMY_VERSION,
      reference: "toss",
      event_source: "directory",
    };
    expect(gtag).toHaveBeenCalledWith("event", "ds_detail_open", expected);
  });
});

describe("error origin cardinality", () => {
  it("buckets filenames instead of emitting raw asset URLs", () => {
    expect(classifyErrorOrigin("https://oh-my-design.kr/_next/static/chunks/a1b2.js")).toBe("next_static");
    expect(classifyErrorOrigin("https://oh-my-design.kr/app.js")).toBe("first_party");
    expect(classifyErrorOrigin("https://cdn.example.com/sdk.js")).toBe("third_party");
    expect(classifyErrorOrigin("")).toBe("unknown");
  });
});
