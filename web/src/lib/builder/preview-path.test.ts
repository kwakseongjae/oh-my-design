import { describe, expect, it } from "vitest";
import { decodeConfig } from "@/lib/core/config-hash";
import { DEFAULT_BUILDER_COMPONENTS } from "@/lib/core/builder-prompt";
import { canonicalBuilderPreviewPath } from "./preview-path";

describe("canonicalBuilderPreviewPath", () => {
  it("opens the as-is reference directly in builder preview", () => {
    const path = canonicalBuilderPreviewPath("toss");
    const url = new URL(path, "https://oh-my-design.kr");
    const decoded = decodeConfig(url.searchParams.get("cfg")!);

    expect(url.pathname).toBe("/builder");
    expect(url.searchParams.get("step")).toBe("preview");
    expect(decoded.refId).toBe("toss");
    expect(decoded.overrides).toEqual({
      primaryColor: "",
      fontFamily: "",
      headingWeight: "",
      borderRadius: "",
      darkMode: false,
    });
    expect(decoded.components).toEqual(DEFAULT_BUILDER_COMPONENTS);
  });
});
