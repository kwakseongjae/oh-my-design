import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const read = (path) => readFileSync(path, "utf8");

describe("OmD bounded repair advisory contract", () => {
  for (const file of ["agents/omd-ux-writer.md", "agents/omd-ux-engineer.md"]) {
    it(`${file} preserves the parent contract under a bounded response`, () => {
      const agent = read(file);
      expect(agent).toContain("mode: bounded-repair-advisory");
      expect(agent).toContain("최대 3개");
      expect(agent).toContain("약 300단어");
      expect(agent).toContain("first_safe_edit");
      expect(agent).toContain("targeted Edit");
      expect(agent).toContain("protected_contract");
      expect(agent).toContain("contract_drift");
      expect(agent).toContain("파일을 쓰거나 편집하지 않고");
    });
  }
});
