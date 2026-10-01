import { describe, expect, it } from "vitest";
import { REGISTRY } from "@/data/registry.generated";
import { REFERENCE_COUNT } from "./catalog-count";

describe("catalog-count", () => {
  it("REFERENCE_COUNT literal matches the generated registry", () => {
    expect(REFERENCE_COUNT).toBe(REGISTRY.length);
  });
});
