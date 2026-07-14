import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/gtag", () => ({ event: vi.fn(), trackRef: vi.fn() }));
vi.mock("@/lib/activation/analytics", () => ({ trackHandoff: vi.fn() }));

import { event } from "@/lib/gtag";
import { trackReferenceShare } from "./analytics";

const mockedEvent = vi.mocked(event);

beforeEach(() => mockedEvent.mockClear());

describe("reference share analytics", () => {
  it("records a bounded artifact and location", () => {
    trackReferenceShare({ reference: "toss", location: "builder", artifact: "evolution" });
    expect(mockedEvent).toHaveBeenCalledWith("ref_share_copy", {
      reference: "toss",
      location: "builder",
      artifact: "evolution",
    });
  });
});
