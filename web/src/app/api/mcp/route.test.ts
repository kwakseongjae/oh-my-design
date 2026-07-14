import { describe, expect, it } from "vitest";
import { GET, POST } from "./route";

describe("retired MCP route", () => {
  it.each([GET, POST])("returns a stable 410 response", async (handler) => {
    const response = handler();
    const body = await response.json() as { error: string; message: string };

    expect(response.status).toBe(410);
    expect(response.headers.get("cache-control")).toBe("public, max-age=3600");
    expect(body.error).toBe("gone");
    expect(body.message).toContain("retired");
  });
});
