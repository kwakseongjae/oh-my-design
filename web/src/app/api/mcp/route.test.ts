import { describe, expect, it, vi } from "vitest";

const scheduled: (() => unknown)[] = [];
vi.mock("next/server", () => ({ after: (fn: () => unknown) => scheduled.push(fn) }));

const { GET, POST, clientFamily, countRetiredCall, mcp410DayKey, MCP410_TTL_SECONDS } = await import("./route");

describe("retired MCP route", () => {
  it.each([GET, POST])("returns a stable, uncached 410 and schedules one count", async (handler) => {
    scheduled.length = 0;
    const response = handler(new Request("https://oh-my-design.kr/api/mcp", { method: handler === GET ? "GET" : "POST" }));
    const body = await response.json() as { error: string; message: string };

    expect(response.status).toBe(410);
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(body.error).toBe("gone");
    expect(body.message).toContain("retired");
    expect(scheduled).toHaveLength(1);
  });
});

describe("Phase 0 counter (MCP v2 spec §7)", () => {
  it("keeps only a coarse client family, never the User-Agent", () => {
    expect(clientFamily("claude-code/2.1.284 (cli)")).toBe("claude");
    expect(clientFamily("Cursor/2.4.1")).toBe("cursor");
    expect(clientFamily("node")).toBe("library");
    expect(clientFamily("Mozilla/5.0 (Macintosh)")).toBe("browser");
    expect(clientFamily("weird-agent")).toBe("other");
    expect(clientFamily(null)).toBe("none");
  });

  it("counts the method and the family in one daily hash with a TTL", async () => {
    const calls: unknown[][] = [];
    const redis = {
      hincrby: async (...a: unknown[]) => (calls.push(["hincrby", ...a]), 1),
      expire: async (...a: unknown[]) => (calls.push(["expire", ...a]), 1),
    };
    await countRetiredCall("POST", "claude-code/2.1", redis as never);
    const key = calls[0][1] as string;
    expect(key).toMatch(/^omd:mcp410:\d{8}$/);
    expect(key).toBe(mcp410DayKey(key.slice(-8)));
    expect(calls).toEqual([
      ["hincrby", key, "post", 1],
      ["hincrby", key, "ua:claude", 1],
      ["expire", key, MCP410_TTL_SECONDS],
    ]);
  });

  it("never throws when KV is missing or fails", async () => {
    await expect(countRetiredCall("GET", null, null)).resolves.toBeUndefined();
    const broken = { hincrby: async () => { throw new Error("down"); }, expire: async () => 1 };
    await expect(countRetiredCall("GET", null, broken as never)).resolves.toBeUndefined();
  });
});
