import { afterEach, describe, expect, it, vi } from "vitest";
import snapshot from "@/data/github-stars.json";
import { getRepoStars } from "./github-stars.server";

describe("header star count", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("shows the live count when the API answers", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response(JSON.stringify({ stargazers_count: 600 }), { status: 200 })));
    expect(await getRepoStars()).toBe(600);
  });

  it("falls back to the last measured count on a rate limit, an error or an odd payload", async () => {
    for (const impl of [
      async () => new Response("rate limited", { status: 403 }),
      async () => { throw new Error("offline"); },
      async () => new Response(JSON.stringify({}), { status: 200 }),
    ]) {
      vi.stubGlobal("fetch", vi.fn(impl));
      expect(await getRepoStars()).toBe(snapshot.stars);
    }
  });

  it("the snapshot is a real reading with its date", () => {
    expect(typeof snapshot.stars).toBe("number");
    expect(snapshot.measured).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
