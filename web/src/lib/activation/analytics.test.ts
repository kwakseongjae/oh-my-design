import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/gtag", () => ({ event: vi.fn(), trackRef: vi.fn() }));

import { event, trackRef } from "@/lib/gtag";
import { trackInstallCopy, trackPromptCopy } from "./analytics";
import { trackExport as trackDetailExport } from "@/lib/design-systems/analytics";

const mockedEvent = vi.mocked(event);
const mockedTrackRef = vi.mocked(trackRef);

beforeEach(() => {
  mockedEvent.mockClear();
  mockedTrackRef.mockClear();
});

describe("canonical activation handoff", () => {
  it("dual-fires install and prompt-copy legacy events into act_handoff", () => {
    trackInstallCopy({ surface: "ref_detail", reference: "toss" });
    trackPromptCopy({ surface: "ref_detail", reference: "toss" });

    expect(mockedEvent.mock.calls).toContainEqual([
      "act_handoff",
      { kind: "install_copy", surface: "ref_detail", reference: "toss" },
    ]);
    expect(mockedEvent.mock.calls).toContainEqual([
      "act_handoff",
      { kind: "prompt_copy", surface: "ref_detail", reference: "toss" },
    ]);
    expect(mockedTrackRef).toHaveBeenCalledWith("install", "toss");
    expect(mockedTrackRef).toHaveBeenCalledWith("copy", "toss");
  });

  it("keeps benchmark activation version-isolated through the canonical bridge", () => {
    trackInstallCopy({ surface: "benchmark", experimentVersion: "1.9.38" });

    expect(mockedEvent.mock.calls).toEqual([
      [
        "act_install_copy",
        { surface: "benchmark", experiment_version: "1.9.38" },
      ],
      [
        "act_handoff",
        {
          kind: "install_copy",
          surface: "benchmark",
          experiment_version: "1.9.38",
        },
      ],
    ]);
  });

  it("maps detail exports onto the handoff taxonomy", () => {
    trackDetailExport({ reference: "apple", channel: "download" });

    expect(mockedEvent.mock.calls).toContainEqual([
      "act_handoff",
      { kind: "designmd_download", surface: "ref_detail", reference: "apple" },
    ]);
  });
});
