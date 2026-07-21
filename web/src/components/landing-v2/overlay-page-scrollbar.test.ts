import { describe, expect, it } from "vitest";
import {
  calculateOverlayScrollbarMetrics,
  calculateScrollYFromThumbDrag,
  OVERLAY_SCROLLBAR_COLORS,
} from "./overlay-page-scrollbar";

it("uses the documented v2 light and dark canvas tokens", () => {
  expect(OVERLAY_SCROLLBAR_COLORS).toEqual({
    core: "#fafafa",
    edge: "#0a0a0f",
  });
});

describe("calculateOverlayScrollbarMetrics", () => {
  it("stays absent when the page does not overflow", () => {
    expect(calculateOverlayScrollbarMetrics(0, 900, 900)).toEqual({
      hasOverflow: false,
      height: 0,
      top: 4,
    });
  });

  it("maps the document start and end onto an inset overlay track", () => {
    const start = calculateOverlayScrollbarMetrics(0, 800, 3200);
    const end = calculateOverlayScrollbarMetrics(2400, 800, 3200);

    expect(start.hasOverflow).toBe(true);
    expect(start.top).toBe(4);
    expect(start.height).toBeCloseTo(198);
    expect(end.top + end.height).toBeCloseTo(796);
  });

  it("clamps overscroll without moving the thumb outside the viewport", () => {
    const before = calculateOverlayScrollbarMetrics(-120, 800, 3200);
    const after = calculateOverlayScrollbarMetrics(2600, 800, 3200);

    expect(before.top).toBe(4);
    expect(after.top + after.height).toBeCloseTo(796);
  });

  it("maps draggable thumb travel back to document scroll without overshooting", () => {
    const metrics = calculateOverlayScrollbarMetrics(0, 800, 3200);
    const travel = 800 - 8 - metrics.height;

    expect(
      calculateScrollYFromThumbDrag(0, travel / 2, 800, 3200, metrics.height),
    ).toBeCloseTo(1200);
    expect(
      calculateScrollYFromThumbDrag(0, travel * 2, 800, 3200, metrics.height),
    ).toBe(2400);
    expect(
      calculateScrollYFromThumbDrag(400, -travel, 800, 3200, metrics.height),
    ).toBe(0);
  });
});
