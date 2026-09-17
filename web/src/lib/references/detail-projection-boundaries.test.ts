import { describe, expect, it } from "vitest";
import { extractCoreV2ReferenceDetail } from "./detail-projection";

const document = (family: string) => `<!-- design-md:section foundations -->
- **Canvas** (\`#ffffff\`): verified canvas.
<!-- design-md:section typography-assets -->
### Family
${family}

### Type roles
| Role | Weight |
|---|---:|
| Heading | 700 |
<!-- design-md:section governance -->`;

describe("Core observed font boundaries", () => {
  it("keeps a named serif face and its known siblings", () => {
    const value = extractCoreV2ReferenceDetail("fixture", document("- **Current visible UI family:** `Noto Serif` — confirmed product family."));
    expect(value.fontFamily).toBe("Noto Serif");
    expect(value.background).toBe("#ffffff");
    expect(value.headingWeight).toBe("700");
  });

  it("keeps confirmed family metadata even when its browser specimen is unavailable", () => {
    const value = extractCoreV2ReferenceDetail("fixture", document("- **Current official app family:** WORK (`BAEMINWORK`) — confirmed, but its binary is not publicly loaded."));
    expect(value.fontFamily).toBe("BAEMINWORK");
  });

  it.each([
    "- **Current official app family:** `Candidate Sans` — not confirmed.",
    "- **Current visible UI family:** unresolved; candidate `Candidate Sans`.",
    "- **Current visible corporate UI family:** `Corporate Sans`.",
    "- **Current visible display family:** `Display Sans`.",
    "- **Not the current UI family:** `Previous Sans`.",
    "- **Current visible UI family:** `-apple-system, Brand Fallback, sans-serif`.",
  ])("does not promote a negated, narrower, or system-family observation: %s", (line) => {
    const source = document(line);
    const value = extractCoreV2ReferenceDetail("fixture", source);
    expect(value.fontFamily).toBe("");
    expect(value.background).toBe("#ffffff");
    expect(value.headingWeight).toBe("700");
    expect(value.designMd).toBe(source);
  });
});
