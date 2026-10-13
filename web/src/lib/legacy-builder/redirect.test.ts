import { describe, expect, it } from "vitest";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { resolveBuilderRedirect } from "./redirect";

const known = (id: string) => Object.hasOwn(REGISTRY_BY_ID, id);
const go = (query: string) => resolveBuilderRedirect(new URLSearchParams(query), known);

/**
 * Every /builder shape that was ever shared. These links live inside prompts
 * users pasted into their agents, so none of them may start to 404.
 */
describe("legacy /builder redirect table", () => {
  it.each([
    // Known reference, every step the builder ever had.
    ["ref=toss", "/design-systems/toss#use"],
    ["step=customize&ref=toss", "/design-systems/toss#use"],
    ["step=preview&ref=toss&cfg=eyJwIjoiIzAwNjRGRiJ9", "/design-systems/toss#use"],
    ["step=select&ref=toss", "/design-systems/toss#use"],
    ["ref=toss&color=blue", "/design-systems/toss#use"],
    // Dotted ids are real ids.
    ["step=preview&ref=linear.app&cfg=x", "/design-systems/linear.app#use"],
    // No ref at all.
    ["", "/design-systems"],
    ["step=select", "/design-systems"],
    ["step=customize", "/design-systems"],
    ["color=blue", "/design-systems"],
    ["ref=", "/design-systems"],
    // Unknown or malformed ref.
    ["ref=not-a-real-brand", "/design-systems"],
    ["ref=Toss", "/design-systems"],
    ["ref=../../etc/passwd", "/design-systems"],
    ["ref=toss%2Fevil", "/design-systems"],
    ["ref=" + "a".repeat(41), "/design-systems"],
  ])("/builder?%s → %s", (query, destination) => {
    expect(go(query)).toBe(destination);
  });

  it("tolerates surrounding whitespace a paste may add", () => {
    expect(go("ref=%20toss%20")).toBe("/design-systems/toss#use");
  });

  it("never emits a query string or a path outside /design-systems", () => {
    for (const id of Object.keys(REGISTRY_BY_ID)) {
      const dest = go(`step=preview&ref=${encodeURIComponent(id)}&cfg=abc`);
      expect(dest).toBe(`/design-systems/${id}#use`);
      expect(dest).not.toContain("?");
    }
  });
});
