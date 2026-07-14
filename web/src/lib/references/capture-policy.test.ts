import { describe, expect, it } from "vitest";
import { isUnsafeCaptureSurface } from "./capture-policy";

describe("reference capture route policy", () => {
  it.each([
    "https://nidlogin.login.naver.com/nidlogin.login",
    "https://example.com/signin",
    "https://example.com/account/profile",
    "https://example.com/checkout?step=payment",
    "https://oauth.example.com/callback",
  ])("rejects auth or transaction surfaces: %s", (url) => {
    expect(isUnsafeCaptureSurface(url)).toBe(true);
  });

  it.each([
    "https://www.woowahan.com/fonts",
    "https://example.com/design-system/components/button",
    "https://example.com/products/accounting",
    "https://example.com/cartography",
  ])("keeps public evidence surfaces: %s", (url) => {
    expect(isUnsafeCaptureSurface(url)).toBe(false);
  });
});
