import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/gtag", () => ({ event: vi.fn(), trackRef: vi.fn() }));

import { event, trackRef } from "@/lib/gtag";
import { trackInstallCopy, trackPromptCopy } from "./analytics";
import {
  trackBuilderOpen,
  trackExport as trackBuilderExport,
  trackSourceFormatExport,
  trackSourceFormatView,
} from "@/lib/builder/analytics";
import { trackExport as trackDetailExport } from "@/lib/design-systems/analytics";

const mockedEvent = vi.mocked(event);
const mockedTrackRef = vi.mocked(trackRef);

beforeEach(() => {
  mockedEvent.mockClear();
  mockedTrackRef.mockClear();
});

describe("canonical activation handoff", () => {
  it("dual-fires install and prompt-copy legacy events into act_handoff", () => {
    trackInstallCopy({ surface: "builder", reference: "toss" });
    trackPromptCopy({ surface: "ref_detail", reference: "toss" });

    expect(mockedEvent.mock.calls).toContainEqual([
      "act_handoff",
      { kind: "install_copy", surface: "builder", reference: "toss" },
    ]);
    expect(mockedEvent.mock.calls).toContainEqual([
      "act_handoff",
      { kind: "prompt_copy", surface: "ref_detail", reference: "toss" },
    ]);
    expect(mockedTrackRef).toHaveBeenCalledWith("install", "toss");
    expect(mockedTrackRef).toHaveBeenCalledWith("copy", "toss");
  });

  it("maps builder and detail exports onto one handoff taxonomy", () => {
    trackBuilderExport({ reference: "toss", channel: "copy" });
    trackDetailExport({ reference: "apple", channel: "download" });

    expect(mockedEvent.mock.calls).toContainEqual([
      "act_handoff",
      { kind: "designmd_copy", surface: "builder", reference: "toss" },
    ]);
    expect(mockedEvent.mock.calls).toContainEqual([
      "act_handoff",
      { kind: "designmd_download", surface: "ref_detail", reference: "apple" },
    ]);
  });

  it("records the builder deep-link entry step on bld_open", () => {
    trackBuilderOpen({ entryStep: "preview" });
    expect(mockedEvent).toHaveBeenCalledWith("bld_open", { entry_step: "preview" });
  });

  it("keeps source format views and exports low-cardinality", () => {
    trackSourceFormatView({ reference: "toss", format: "dtcg" });
    trackSourceFormatExport({ reference: "toss", format: "css", action: "copy" });

    expect(mockedEvent.mock.calls).toContainEqual([
      "bld_source_format_view",
      { reference: "toss", format: "dtcg" },
    ]);
    expect(mockedEvent.mock.calls).toContainEqual([
      "bld_source_format_export",
      { reference: "toss", format: "css", action: "copy" },
    ]);
  });
});
