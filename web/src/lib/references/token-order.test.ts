import { describe, expect, it } from "vitest";
import { orderSpacingScale } from "./token-order";

describe("orderSpacingScale", () => {
  it("renders a canonical scale in ascending numeric order without mutating input", () => {
    const input = [
      { purpose: "lg", value: 16 },
      { purpose: "md", value: 12 },
      { purpose: "section", value: 32 },
      { purpose: "sm", value: 8 },
      { purpose: "xl", value: 20 },
      { purpose: "xs", value: 6 },
      { purpose: "xxl", value: 24 },
    ];

    expect(orderSpacingScale(input).map((row) => row.value)).toEqual([6, 8, 12, 16, 20, 24, 32]);
    expect(input[0].value).toBe(16);
  });
});
