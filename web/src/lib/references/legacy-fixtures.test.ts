import { describe, it, expect } from "vitest";
import { loadReference } from "./repository.server";
import { LEGACY_FIXTURES, LEGACY_FIXTURE_GUIDANCE } from "./legacy-fixtures";

describe("legacy test fixtures", () => {
  it.each([...new Set(LEGACY_FIXTURES)])(
    "%s is still a legacy reference and can stand in for the legacy contract",
    (id) => {
      const loaded = loadReference(id);
      expect(loaded, `${id}: fixture reference is missing from the catalog`).not.toBeNull();
      expect(loaded!.format, `${id}: ${LEGACY_FIXTURE_GUIDANCE}`).toBe("legacy");
    },
  );
});
