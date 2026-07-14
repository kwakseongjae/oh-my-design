import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { GET } from "./route";

describe("reference OG image", () => {
  it("renders the verified evolution card as a 1200x630 PNG response", async () => {
    const response = await GET(new NextRequest("http://localhost/api/og/reference?id=toss&artifact=evolution"));
    const bytes = await response.arrayBuffer();
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("image/png");
    expect(bytes.byteLength).toBeGreaterThan(10_000);
  }, 15_000);

  it("returns 404 rather than inventing an unknown reference", async () => {
    const response = await GET(new NextRequest("http://localhost/api/og/reference?id=does-not-exist"));
    expect(response.status).toBe(404);
  });
});
