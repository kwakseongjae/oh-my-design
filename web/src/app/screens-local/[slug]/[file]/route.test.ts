import { afterAll, afterEach, describe, expect, it, vi } from "vitest";
import { GET } from "./route";
import { makeScreensFixture } from "@/lib/screens/test-fixture";

const fx = makeScreensFixture();
afterAll(fx.cleanup);
afterEach(() => vi.unstubAllEnvs());

const get = (slug: string, file: string) =>
  GET(new Request(`http://localhost/screens-local/${slug}/${file}`), { params: Promise.resolve({ slug, file }) });

describe("/screens-local/[slug]/[file]", () => {
  it("answers 404 when OMD_SCREENS_DIR is unset", async () => {
    vi.stubEnv("OMD_SCREENS_DIR", "");
    expect((await get("acme", "1440-home.jpg")).status).toBe(404);
  });
  it("answers 404 in production without OMD_SCREENS_ALLOW=1", async () => {
    vi.stubEnv("OMD_SCREENS_DIR", fx.root);
    vi.stubEnv("NODE_ENV", "production");
    expect((await get("acme", "1440-home.jpg")).status).toBe(404);
  });
  it("streams a still as an uncached, unindexed jpeg", async () => {
    vi.stubEnv("OMD_SCREENS_DIR", fx.root);
    vi.stubEnv("NODE_ENV", "development");
    const res = await get("acme", "1440-home.jpg");
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("image/jpeg");
    expect(res.headers.get("cache-control")).toBe("no-store");
    expect(res.headers.get("x-robots-tag")).toContain("noindex");
    expect(await res.text()).toBe("jpg:1440-home.jpg");
  });
  it("answers a small rendition that was never made with the still itself", async () => {
    vi.stubEnv("OMD_SCREENS_DIR", fx.root);
    vi.stubEnv("NODE_ENV", "development");
    const res = await get("acme", "1440-home.thumb.jpg");
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("jpg:1440-home.jpg");
  });
  it.each([
    ["acme", "../screens.json"],
    ["acme", "../../secret.jpg"],
    ["..", "secret.jpg"],
    ["acme", "1440-link.jpg"],
    ["acme", "notes.txt"],
  ])("answers 404 for slug %j file %j", async (slug, file) => {
    vi.stubEnv("OMD_SCREENS_DIR", fx.root);
    vi.stubEnv("NODE_ENV", "development");
    expect((await get(slug, file)).status).toBe(404);
  });
});
