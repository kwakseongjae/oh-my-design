import { describe, expect, it } from "vitest";
import { clientIp, parseDailyCap, visitorKey } from "./limits";

describe("ask limits", () => {
  it("reads the client IP from Vercel's header first", () => {
    expect(clientIp(new Headers({ "x-vercel-forwarded-for": "1.1.1.1", "x-forwarded-for": "2.2.2.2, 3.3.3.3" }))).toBe("1.1.1.1");
    expect(clientIp(new Headers({ "x-forwarded-for": "2.2.2.2, 3.3.3.3" }))).toBe("2.2.2.2");
    expect(clientIp(new Headers())).toBe("unknown");
  });

  it("hashes the IP with a secret and the date, rotating daily", () => {
    const a = visitorKey("1.1.1.1", "s", new Date("2026-10-20T01:00:00Z"));
    expect(a).toMatch(/^[0-9a-f]{32}$/);
    expect(visitorKey("1.1.1.1", "s", new Date("2026-10-20T23:59:00Z"))).toBe(a);
    expect(visitorKey("1.1.1.1", "s", new Date("2026-10-21T00:00:00Z"))).not.toBe(a);
    expect(visitorKey("1.1.1.1", "other", new Date("2026-10-20T01:00:00Z"))).not.toBe(a);
  });

  it("parses the daily cap, falling back on junk", () => {
    expect(parseDailyCap(undefined, 1000)).toBe(1000);
    expect(parseDailyCap("250", 1000)).toBe(250);
    expect(parseDailyCap("0", 1000)).toBe(0);
    expect(parseDailyCap("-3", 1000)).toBe(1000);
    expect(parseDailyCap("lots", 1000)).toBe(1000);
  });
});
