import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/gtag", () => ({ event: vi.fn() }));

import { event } from "@/lib/gtag";
import { trackCollectionBuilderClick, trackCollectionOpen, trackCollectionView } from "./analytics";

const mockedEvent = vi.mocked(event);

beforeEach(() => mockedEvent.mockClear());

describe("collection analytics", () => {
  it("uses stable collection and color dimensions", () => {
    trackCollectionView({ slug: "color-blue", colorFamily: "blue" });
    trackCollectionOpen({ slug: "color-blue", origin: "builder", colorFamily: "blue" });
    trackCollectionBuilderClick({ slug: "color-blue", colorFamily: "blue" });

    expect(mockedEvent.mock.calls).toEqual([
      ["col_view", { collection: "color-blue", color_family: "blue" }],
      ["col_open", { collection: "color-blue", origin: "builder", color_family: "blue" }],
      ["col_builder_click", { collection: "color-blue", color_family: "blue" }],
    ]);
  });
});
