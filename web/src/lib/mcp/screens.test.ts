import { describe, expect, it } from "vitest";
import committed from "@/data/screens-public.generated.json";
import { validManifest, type PublicManifest } from "@/lib/screens/manifest";
import { CatalogError, FROM_DESIGN_MD, SCREEN_USE, SEEN_ON_SCREEN, outputs } from "./contracts";
import { toolResult } from "./response";
import { COMMITTED_MANIFEST, getScreenContext, getServiceScreens, listScreenTypes, searchScreens, servicesOf } from "./screens";

const manifest = COMMITTED_MANIFEST!;
const SERVICES = servicesOf(manifest);
const STORE_HOST = new URL(manifest.base).host;

function noNulls(value: unknown): void {
  expect(value).not.toBeNull();
  if (Array.isArray(value)) value.forEach(noNulls);
  else if (value && typeof value === "object") Object.values(value).forEach(noNulls);
}
function catalogError(run: () => unknown): string {
  try { run(); } catch (error) { if (error instanceof CatalogError) return error.code; throw error; }
  throw new Error("expected a CatalogError");
}

it("reads the committed manifest, keeps only catalog services, and the test has screens to read", () => {
  expect(SERVICES.length).toBeGreaterThan(0);
  expect(SERVICES.length).toBeLessThanOrEqual(manifest.services.length);
});

describe("the shut state (no manifest)", () => {
  it("answers every screen tool with an empty result that says screens are not published, never an error", () => {
    const answers = [
      outputs.list_screen_types.parse(listScreenTypes({}, null)),
      outputs.search_screens.parse(searchScreens({ type: "sign-in", query: "karrot" }, null)),
      outputs.get_service_screens.parse(getServiceScreens({ id: "karrot" }, null)),
      outputs.get_screen_context.parse(getScreenContext({ id: "karrot", key: "home" }, null)),
    ];
    for (const answer of answers) {
      expect(answer.screens).toMatchObject({ published: false, services: 0, screens: 0, use: SCREEN_USE, message: expect.stringContaining("not published") });
      expect(answer.absent).toContain("screens");
      noNulls(answer);
    }
    expect(answers[0]).toMatchObject({ types: [], services: [] });
    expect(answers[1]).toMatchObject({ total: 0, results: [] });
    expect(answers[2]).toMatchObject({ groups: [] });
    expect(answers[3]).not.toHaveProperty("screen");
  });

  it("treats a manifest with no services, or with no https base, as shut", () => {
    expect(validManifest({ generated: "", base: "", services: [] }, false)).toBeNull();
    expect(listScreenTypes({}, validManifest({ ...committed, base: "http://example.test" }, false)).screens.published).toBe(false);
  });
});

describe("the published manifest", () => {
  it("lists types and services whose counts add up to the screens it serves", () => {
    const data = outputs.list_screen_types.parse(listScreenTypes({}));
    noNulls(data);
    expect(data.screens.published).toBe(true);
    expect(data.services.map((s) => s.id)).toEqual(SERVICES.map((s) => s.summary.id));
    expect(data.types.reduce((n, t) => n + t.screens.any, 0)).toBe(data.screens.screens);
    expect(data.services.reduce((n, s) => n + s.screens.any, 0)).toBe(data.screens.screens);
    expect(data.types.map((t) => t.slug)).toContain("sign-in");
    const signIn = data.types.find((t) => t.slug === "sign-in")!;
    expect(signIn).toMatchObject({ name_en: "Sign-in", name_ko: "로그인" });
    expect(data.screens.takedown.url).toMatch(/^https:\/\/github\.com\/.+screen-removal\.yml$/);
  });

  it("serves images from oh-my-design.kr only, never the store's host, with the rights on every screen", () => {
    for (const s of SERVICES) {
      const data = outputs.get_service_screens.parse(getServiceScreens({ id: s.summary.id }));
      noNulls(data);
      expect(JSON.stringify(data)).not.toContain(STORE_HOST);
      const screens = data.groups.flatMap((g) => g.screens);
      expect(screens).toHaveLength(s.cards.length);
      for (const screen of screens) {
        expect(screen.provenance).toMatchObject({ signed_out: s.model.signedOut, rights: expect.stringContaining("belong to the company"), takedown: expect.stringContaining(`service=${s.summary.id}`) });
        if (screen.provenance.masked) expect(screen.provenance.masked_note).toBe("Nicknames and uploaded photos are hidden");
        for (const [device, image] of Object.entries(screen.images)) {
          expect(image!.still).toBe(`https://oh-my-design.kr/screens-img/${s.summary.id}/${image!.width}-${screen.key}.jpg`);
          if (image!.thumb) expect(image!.thumb).toBe(image!.still.replace(/\.jpg$/, ".thumb.jpg"));
          expect(image!.page).toBe(`https://oh-my-design.kr/screens/${s.summary.id}?device=${device}#${screen.key}`);
          expect(image!.page_ko).toBe(`https://oh-my-design.kr/ko/screens/${s.summary.id}?device=${device}#${screen.key}`);
        }
        // tokens_seen is exactly what the manifest records for this key
        const recorded = s.model.colors.filter((c) => c.screens.includes(screen.key)).map((c) => c.token);
        expect(screen.tokens_seen.map((t) => t.token)).toEqual(recorded);
        for (const t of screen.tokens_seen) expect(t.label).toBe(SEEN_ON_SCREEN);
      }
      expect(data.next?.tools.map((t) => t.name)).toEqual(["get_screen_context", "get_tokens", "get_component_states", "get_design_md"]);
    }
  });

  it("filters search by type in any of its names, device, service, country and category", () => {
    for (const type of ["sign-in", "Sign-in", "로그인"]) {
      const data = outputs.search_screens.parse(searchScreens({ type, device: "mobile", limit: 30 }));
      expect(data.results.length).toBeGreaterThan(0);
      expect(data.total).toBe(data.results.length);
      for (const r of data.results) {
        expect(r.screen.type.slug).toBe("sign-in");
        expect(Object.keys(r.screen.images)).toEqual(["mobile"]);
      }
    }
    const karrot = outputs.search_screens.parse(searchScreens({ service: "karrot", limit: 30 }));
    expect(new Set(karrot.results.map((r) => r.service.id))).toEqual(new Set(["karrot"]));
    expect(outputs.search_screens.parse(searchScreens({ country: ["us"] })).total).toBe(0);
    const byCategory = outputs.search_screens.parse(searchScreens({ category: [SERVICES[0].summary.category], limit: 30 }));
    for (const r of byCategory.results) expect(r.service.category).toBe(SERVICES[0].summary.category);
  });

  it("matches words over Korean and English service names, titles and types, best first", () => {
    const korean = outputs.search_screens.parse(searchScreens({ query: "당근" }));
    expect(korean.results[0].service.id).toBe("karrot");
    expect(korean.results[0].match).toContain("service");
    const mixed = outputs.search_screens.parse(searchScreens({ query: "karrot 검색 결과" }));
    expect(mixed.results[0]).toMatchObject({ service: { id: "karrot" }, screen: { type: { slug: "search-results" } } });
    expect(outputs.search_screens.parse(searchScreens({ query: "zzqqxx" })).total).toBe(0);
  });

  it("rejects an unknown service, screen or type without guessing, and reports a reference without screens as absent", () => {
    expect(catalogError(() => getServiceScreens({ id: "toss-bank" }))).toBe("unknown_reference");
    expect(catalogError(() => searchScreens({ service: "toss-bank" }))).toBe("unknown_reference");
    expect(catalogError(() => getScreenContext({ id: "karrot", key: "zz-none" }))).toBe("unknown_screen");
    expect(catalogError(() => searchScreens({ type: "checkout-wizard" }))).toBe("unknown_screen_type");
    const toss = outputs.get_service_screens.parse(getServiceScreens({ id: "toss" }));
    expect(toss.groups).toEqual([]);
    expect(toss.absent).toContain("screens.toss");
    expect(toss.reference?.id).toBe("toss");
  });
});

describe("get_screen_context", () => {
  it("answers every published screen within the response budget, labelled screen versus DESIGN.md", () => {
    for (const s of SERVICES) for (const card of s.cards) {
      const raw = getScreenContext({ id: s.summary.id, key: card.key });
      expect(toolResult(raw as Record<string, unknown>).isError, `${s.summary.id}/${card.key}`).not.toBe(true);
      const data = outputs.get_screen_context.parse(raw);
      noNulls(data);
      expect(data.from_design_md?.label).toBe(FROM_DESIGN_MD);
      expect(data.seen_on_this_screen?.label).toBe(SEEN_ON_SCREEN);
      expect(data.not_known_for_this_screen?.length).toBeGreaterThan(0);
      // Seen plus compared-but-not-seen is every colour the walk compared, nothing more.
      expect((data.seen_on_this_screen?.colors.length ?? 0) + (data.compared_not_seen?.length ?? 0)).toBe(s.model.colors.length);
      for (const c of data.seen_on_this_screen?.colors ?? []) {
        if (c.design_md) expect(String(c.design_md.value).toLowerCase()).toBe(c.value.toLowerCase());
      }
    }
  });

  it("joins a seen colour to the DESIGN.md's evidence only while the value is unchanged", () => {
    const service = manifest.services.find((s) => s.slug === "karrot")!;
    const seen = service.colors.find((c) => c.screens.includes("home"))!;
    const changed: PublicManifest = { ...manifest, services: [{ ...service, colors: service.colors.map((c) => (c === seen ? { ...c, value: "#010203" } : c)) }] };
    const data = outputs.get_screen_context.parse(getScreenContext({ id: "karrot", key: "home" }, changed));
    const color = data.seen_on_this_screen!.colors.find((c) => c.token === seen.token)!;
    expect(color.value).toBe("#010203");
    expect(color).not.toHaveProperty("design_md");
    expect(color.design_md_value_now?.toLowerCase()).toBe(seen.value.toLowerCase());
    expect(data.absent).toContain(`seen_on_this_screen.colors.${seen.token}.design_md`);
    const same = outputs.get_screen_context.parse(getScreenContext({ id: "karrot", key: "home" }));
    expect(same.seen_on_this_screen!.colors.find((c) => c.token === seen.token)?.design_md?.evidence).toBeDefined();
  });

  it("brings only the DESIGN.md groups asked for", () => {
    const data = outputs.get_screen_context.parse(getScreenContext({ id: "karrot", key: "home", include: ["rounded"] }));
    expect(Object.keys(data.from_design_md!).sort()).toEqual(["label", "rounded"]);
    expect(data.seen_on_this_screen).toBeDefined();
  });
});
