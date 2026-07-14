import { describe, expect, it } from "vitest";
import { REGISTRY } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { getAllDesignSystems } from "./design-systems";

describe("public reference directory", () => {
  it("exposes the complete registry with computed quality", () => {
    const directory = getAllDesignSystems();
    expect(directory).toHaveLength(REGISTRY.length);
    expect(new Set(directory.map((entry) => entry.refId)).size).toBe(REGISTRY.length);
    const toss = directory.find((entry) => entry.refId === "toss");
    expect(toss?.qualityStatus).toBe(REFERENCE_QUALITY_BY_ID.toss.status);
    expect(toss?.verifiedAt).toBe(REFERENCE_QUALITY_BY_ID.toss.verifiedAt);
  });

  it("keeps non-DS references discoverable instead of hiding them", () => {
    const directory = getAllDesignSystems();
    const plain = REGISTRY.find((entry) => !entry.ds);
    expect(plain).toBeDefined();
    expect(directory.find((entry) => entry.refId === plain?.id)?.type).toBe("reference");
  });
});
