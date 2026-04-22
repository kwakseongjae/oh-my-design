/**
 * Share-link codec tests. Share URLs embed the entire selection state in
 * `?f=<compact>`; a silent regression here would break every link
 * previously shared out, so round-trip + rejection-of-garbage both need
 * coverage.
 */

import { describe, expect, it } from "vitest";
import type { LiveSelection } from "./tweaks";
import {
  buildFontShareUrl,
  decodeSharedFont,
  encodeSharedFont,
} from "./share-link";

const sampleSelection: LiveSelection = {
  axisValues: { wght: 650, CASL: 0.3 },
  staticWeight: 400,
  letterSpacing: -0.02,
  lineHeight: 1.4,
};

describe("encode/decode round-trip", () => {
  it("preserves every field of a typical state", () => {
    const encoded = encodeSharedFont({
      fontId: "pretendard",
      selection: sampleSelection,
      previewSize: 72,
      sampleText: "Hello 안녕",
    });
    const decoded = decodeSharedFont(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded!.v).toBe(1);
    expect(decoded!.fontId).toBe("pretendard");
    expect(decoded!.previewSize).toBe(72);
    expect(decoded!.sampleText).toBe("Hello 안녕");
    expect(decoded!.selection).toEqual(sampleSelection);
  });

  it("survives a real URL round-trip (encodeURIComponent → decode)", () => {
    const encoded = encodeSharedFont({
      fontId: "pretendard",
      selection: sampleSelection,
      previewSize: 56,
      sampleText: "test",
    });
    // Simulate ?f=… parsing by running the payload through URLSearchParams
    const params = new URLSearchParams(`f=${encoded}`);
    const fromUrl = params.get("f");
    expect(fromUrl).not.toBeNull();
    const decoded = decodeSharedFont(fromUrl!);
    expect(decoded).not.toBeNull();
    expect(decoded!.fontId).toBe("pretendard");
  });
});

describe("decodeSharedFont — rejects garbage", () => {
  it("returns null for obviously broken input", () => {
    expect(decodeSharedFont("this is not lz-compressed")).toBeNull();
    expect(decodeSharedFont("")).toBeNull();
  });

  it("returns null when the version tag is missing or wrong", () => {
    // Fake a valid-looking but wrong-shape payload
    const malformed = encodeSharedFont({
      fontId: "x",
      selection: sampleSelection,
      previewSize: 10,
      sampleText: "",
    }).slice(0, -4);
    expect(decodeSharedFont(malformed)).toBeNull();
  });
});

describe("buildFontShareUrl", () => {
  it("prefixes with origin and /font-playground path", () => {
    const url = buildFontShareUrl("https://oh-my-design.kr", {
      fontId: "pretendard",
      selection: sampleSelection,
      previewSize: 56,
      sampleText: "test",
    });
    expect(url).toMatch(/^https:\/\/oh-my-design\.kr\/font-playground\?f=/);
  });

  it("is reversible — the link can be parsed back into the same state", () => {
    const origin = "https://example.com";
    const input = {
      fontId: "pretendard",
      selection: sampleSelection,
      previewSize: 96,
      sampleText: "Hi",
    };
    const url = buildFontShareUrl(origin, input);
    const compact = url.split("?f=")[1];
    const decoded = decodeSharedFont(compact);
    expect(decoded!.fontId).toBe(input.fontId);
    expect(decoded!.previewSize).toBe(input.previewSize);
    expect(decoded!.sampleText).toBe(input.sampleText);
  });
});
