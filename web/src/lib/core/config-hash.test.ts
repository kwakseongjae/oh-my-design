import { describe, it, expect } from "vitest";
import { encodeConfig, decodeConfig, generateNpxCommand } from "./config-hash";
import type { Overrides } from "./types";

const fullOverrides: Overrides = {
  primaryColor: "#6366f1",
  fontFamily: "Inter",
  headingWeight: "600",
  borderRadius: "8px",
  darkMode: true,
};

const emptyOverrides: Overrides = {
  primaryColor: "",
  fontFamily: "",
  headingWeight: "",
  borderRadius: "",
  darkMode: false,
};

describe("encodeConfig", () => {
  it("produces URL-safe base64 (no /, +, =)", () => {
    const hash = encodeConfig("vercel", fullOverrides, ["button", "card"]);
    expect(hash).not.toMatch(/[/+=]/);
  });

  it("produces a non-empty string for empty overrides", () => {
    const hash = encodeConfig("vercel", emptyOverrides, []);
    expect(hash.length).toBeGreaterThan(0);
    expect(hash).not.toMatch(/[/+=]/);
  });

  it("yields different hashes for different refIds", () => {
    expect(encodeConfig("vercel", emptyOverrides))
      .not.toBe(encodeConfig("stripe", emptyOverrides));
  });

  it("yields different hashes when darkMode flips", () => {
    expect(encodeConfig("vercel", { ...emptyOverrides, darkMode: true }))
      .not.toBe(encodeConfig("vercel", { ...emptyOverrides, darkMode: false }));
  });
});

describe("decodeConfig", () => {
  it("roundtrips full overrides + components", () => {
    const hash = encodeConfig("vercel", fullOverrides, ["button", "card", "input"]);
    const decoded = decodeConfig(hash);
    expect(decoded.refId).toBe("vercel");
    expect(decoded.overrides).toEqual(fullOverrides);
    expect(decoded.components).toEqual(["button", "card", "input"]);
  });

  it("roundtrips empty overrides", () => {
    const hash = encodeConfig("vercel", emptyOverrides, []);
    const decoded = decodeConfig(hash);
    expect(decoded.refId).toBe("vercel");
    expect(decoded.overrides).toEqual(emptyOverrides);
    expect(decoded.components).toEqual([]);
  });

  it("roundtrips refIds containing dots (linear.app)", () => {
    const hash = encodeConfig("linear.app", fullOverrides);
    expect(decodeConfig(hash).refId).toBe("linear.app");
  });

  it("defaults refId to 'vercel' when input is empty", () => {
    // Empty pipe-separated body → refId slot is ''
    const empty = Buffer.from("|||||0|").toString("base64url");
    expect(decodeConfig(empty).refId).toBe("vercel");
  });

  it("preserves component order", () => {
    const components = ["dialog", "alert", "button", "table"];
    const decoded = decodeConfig(encodeConfig("vercel", emptyOverrides, components));
    expect(decoded.components).toEqual(components);
  });

  it("survives many encode/decode cycles (idempotent)", () => {
    let hash = encodeConfig("vercel", fullOverrides, ["button"]);
    for (let i = 0; i < 5; i++) {
      const d = decodeConfig(hash);
      hash = encodeConfig(d.refId, d.overrides, d.components);
    }
    const final = decodeConfig(hash);
    expect(final.refId).toBe("vercel");
    expect(final.overrides).toEqual(fullOverrides);
    expect(final.components).toEqual(["button"]);
  });
});

describe("generateNpxCommand", () => {
  it("emits the npx github:kwakseongjae/oh-my-design --config=<hash> shape", () => {
    const cmd = generateNpxCommand("vercel", fullOverrides, ["button"]);
    expect(cmd).toMatch(/^npx github:kwakseongjae\/oh-my-design --config=[\w-]+$/);
  });

  it("hash inside the command roundtrips via decodeConfig", () => {
    const cmd = generateNpxCommand("vercel", fullOverrides, ["button", "input"]);
    const hash = cmd.replace(/^.*--config=/, "");
    const decoded = decodeConfig(hash);
    expect(decoded.refId).toBe("vercel");
    expect(decoded.overrides).toEqual(fullOverrides);
    expect(decoded.components).toEqual(["button", "input"]);
  });
});
