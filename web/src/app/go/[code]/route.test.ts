import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  scheduled: [] as (() => unknown)[],
  calls: [] as unknown[][],
  failRedis: false,
}));
vi.mock("next/server", async (importOriginal) => ({
  ...(await importOriginal<typeof import("next/server")>()),
  after: (fn: () => unknown) => mocks.scheduled.push(fn),
}));
vi.mock("@/lib/kv", () => ({
  getRedis: () => ({
    hincrby: async (...a: unknown[]) => {
      mocks.calls.push(["hincrby", ...a]);
      if (mocks.failRedis) throw new Error("unavailable");
      return 1;
    },
    expire: async (...a: unknown[]) => {
      mocks.calls.push(["expire", ...a]);
      return 1;
    },
  }),
}));
vi.mock("@/data/go-links", () => ({
  GO_LINKS: {
    post: { to: "/design-systems/linear?x=1#use", source: "threads", medium: "social", campaign: "20261103-test", content: "ko" },
    abs: { to: "https://oh-my-design.kr/ko", source: "x", medium: "social", campaign: "20261103-abs" },
    evil: { to: "https://evil.example/", source: "x", medium: "social", campaign: "c" },
    evil2: { to: "//evil.example/", source: "x", medium: "social", campaign: "c" },
  },
}));

const { GET } = await import("./route");
const call = (code: string, headers: Record<string, string> = {}) =>
  GET(new Request(`https://oh-my-design.kr/go/${code}`, { headers: { "user-agent": "Mozilla/5.0 Chrome/130", ...headers } }), {
    params: Promise.resolve({ code }),
  });
const flush = async () => {
  for (const f of mocks.scheduled) await f();
};

beforeEach(() => {
  mocks.scheduled.length = 0;
  mocks.calls.length = 0;
  mocks.failRedis = false;
});

describe("/go/[code]", () => {
  it("redirects a known code with UTMs, keeping query and hash, and counts by country", async () => {
    const res = await call("post", { "x-vercel-ip-country": "kr" });
    expect(res.status).toBe(302);
    const loc = new URL(res.headers.get("location")!);
    expect(loc.pathname).toBe("/design-systems/linear");
    expect(loc.hash).toBe("#use");
    expect(loc.searchParams.get("x")).toBe("1");
    expect(loc.searchParams.get("utm_source")).toBe("threads");
    expect(loc.searchParams.get("utm_medium")).toBe("social");
    expect(loc.searchParams.get("utm_campaign")).toBe("20261103-test");
    expect(loc.searchParams.get("utm_content")).toBe("ko");
    await flush();
    expect(mocks.calls[0]).toEqual(["hincrby", `omd:go:v1:post:${new Date().toISOString().slice(0, 10)}`, "KR", 1]);
  });

  it("accepts an absolute same-site target and uses XX without a country header", async () => {
    const res = await call("abs");
    expect(new URL(res.headers.get("location")!).pathname).toBe("/ko");
    await flush();
    expect(mocks.calls[0][2]).toBe("XX");
  });

  it("sends an unknown code to / and counts nothing", async () => {
    const res = await call("nope");
    expect(res.status).toBe(302);
    expect(new URL(res.headers.get("location")!).pathname).toBe("/");
    expect(mocks.scheduled).toHaveLength(0);
    expect(new URL((await call("constructor")).headers.get("location")!).pathname).toBe("/");
  });

  it("rejects off-site targets", async () => {
    for (const code of ["evil", "evil2"]) {
      const res = await call(code);
      expect(new URL(res.headers.get("location")!).href).toBe("https://oh-my-design.kr/");
    }
    expect(mocks.scheduled).toHaveLength(0);
  });

  it("does not break the redirect when the counter fails", async () => {
    mocks.failRedis = true;
    const res = await call("post");
    expect(res.status).toBe(302);
    await expect(flush()).resolves.toBeUndefined();
  });

  it("does not count bot user agents", async () => {
    const res = await call("post", { "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1)" });
    expect(res.status).toBe(302);
    expect(new URL(res.headers.get("location")!).searchParams.get("utm_source")).toBe("threads");
    expect(mocks.scheduled).toHaveLength(0);
  });
});
