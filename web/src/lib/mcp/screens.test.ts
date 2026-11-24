/**
 * The MCP screen tools. Behaviour is tested on a synthetic manifest passed through the tools' manifest parameter
 * (real catalog ids, made-up screens), so a publish or a takedown that rewrites the committed manifest never breaks
 * these tests; the committed manifest is held only to invariants (schema, no nulls, no store host, budget).
 */
import { describe, expect, it } from "vitest";
import { REGISTRY } from "@/data/registry.generated";
import type { PublicManifest } from "@/lib/screens/manifest";
import { getTokens } from "./catalog";
import { CatalogError, FROM_CAPTURE, FROM_DESIGN_MD, SCREEN_USE, SEEN_ON_SCREEN, outputs } from "./contracts";
import { toolResult } from "./response";
import {
  COMMITTED_MANIFEST, COMMITTED_OUTLINES, getScreenContext, getServiceScreens, listScreenTypes, searchScreens, servicesOf, validOutlines,
} from "./screens";

function noNulls(value: unknown): void {
  expect(value).not.toBeNull();
  if (Array.isArray(value)) value.forEach(noNulls);
  else if (value && typeof value === "object") Object.values(value).forEach(noNulls);
}
function catalogError(run: () => unknown): string {
  try { run(); } catch (error) { if (error instanceof CatalogError) return error.code; throw error; }
  throw new Error("expected a CatalogError");
}

// ---- the synthetic manifest -----------------------------------------------------------------------------------------

const STORE = "https://store.example.test/screens";
const [C1, C2, C3] = getTokens({ id: "toss", groups: ["colors"] }).groups.colors;
const token = (path: string) => path.replace(/^colors\./, "");
const rec = (key: string, type: string, title: string, width: number, extra: Record<string, unknown> = {}) =>
  ({ key, type, title, state: null, width, masked: false, thumb: true, ...extra });
const FIXTURE: PublicManifest = {
  generated: "2026-11-23",
  base: STORE,
  services: [
    {
      slug: "sixt", shot: null, signedOut: true, platform: "web",
      records: [rec("login", "로그인", "Login", 1440), rec("home", "홈", "Home", 1440)],
      colors: [],
    },
    {
      slug: "toss", shot: "2026-11-21", signedOut: true, platform: "both",
      records: [
        rec("home", "홈", "홈", 1440), rec("home", "홈", "홈", 390),
        rec("login", "로그인", "로그인", 390, { thumb: false }),
        rec("feed", "피드", "피드", 390, { masked: true }),
        rec("search-empty", "검색 결과", "검색 결과 · 없음", 390, { state: "빈 상태" }),
      ],
      colors: [
        { token: token(C1.path), value: String(C1.value), screens: ["home", "login"] },
        { token: token(C2.path), value: String(C2.value), screens: ["home"] },
        { token: token(C3.path), value: String(C3.value), screens: [] },
      ],
    },
    // A walk whose folder is not a catalog id is left out, as on the pages.
    { slug: "zz-not-a-reference", shot: "2026-11-21", signedOut: true, platform: "web", records: [rec("home", "홈", "홈", 390)], colors: [] },
  ],
};
// A catalog id with no screens in the fixture.
const NO_SCREENS = REGISTRY.find((entry) => !FIXTURE.services.some((s) => s.slug === entry.id))!.id;

describe("the shut state (no manifest)", () => {
  it("answers every screen tool with an empty result that says screens are not published, never an error", () => {
    const answers = [
      outputs.list_screen_types.parse(listScreenTypes({}, null)),
      outputs.search_screens.parse(searchScreens({ type: "sign-in", query: "toss", service: "zz-unknown" }, null)),
      outputs.get_service_screens.parse(getServiceScreens({ id: "zz-unknown" }, null)),
      outputs.get_screen_context.parse(getScreenContext({ id: "zz-unknown", key: "home" }, null)),
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

  it("is also what a manifest holding only non-catalog services gives", () => {
    const only: PublicManifest = { ...FIXTURE, services: [FIXTURE.services[2]] };
    expect(listScreenTypes({}, only).screens.published).toBe(false);
  });
});

describe("on a published manifest", () => {
  it("lists types and catalog services with counts per device, gallery order, and absent fields named", () => {
    const data = outputs.list_screen_types.parse(listScreenTypes({}, FIXTURE));
    noNulls(data);
    expect(data.screens).toMatchObject({ published: true, generated: "2026-11-23", services: 2, screens: 6 });
    expect(data.services.map((s) => s.id)).toEqual(["toss", "sixt"]); // also has an app first
    expect(data.services[0]).toMatchObject({ display_name_ko: "토스", shot: "2026-11-21", signed_out: true, screens: { any: 4, mobile: 4, desktop: 1 } });
    expect(data.services[1]).not.toHaveProperty("shot");
    expect(data.absent).toEqual(expect.arrayContaining(["services.sixt.shot", "services.sixt.display_name_ko"]));
    expect(data.types.map((t) => t.slug)).toEqual(["home", "search-results", "feed", "sign-in"]);
    expect(data.types.find((t) => t.slug === "sign-in")).toMatchObject({ name_en: "Sign-in", name_ko: "로그인", screens: { any: 2, mobile: 1, desktop: 1 }, services: { any: 2, mobile: 1, desktop: 1 } });
    expect(data.screens.takedown.url).toMatch(/^https:\/\/github\.com\/.+screen-removal\.yml$/);
    expect(data.screens.takedown.ko).toContain("GitHub 요청 양식(https://");
  });

  it("serves images from oh-my-design.kr only, with the rights, mask and deep link on every screen", () => {
    const data = outputs.get_service_screens.parse(getServiceScreens({ id: "toss" }, FIXTURE));
    noNulls(data);
    expect(JSON.stringify(data)).not.toContain("example.test");
    expect(data.groups.map((g) => g.type.slug)).toEqual(["home", "search-results", "feed", "sign-in"]);
    const screens = Object.fromEntries(data.groups.flatMap((g) => g.screens).map((s) => [s.key, s]));
    expect(screens.home.images.desktop).toEqual({
      width: 1440, still: "https://oh-my-design.kr/screens-img/toss/1440-home.jpg", thumb: "https://oh-my-design.kr/screens-img/toss/1440-home.thumb.jpg",
      page: "https://oh-my-design.kr/screens/toss?device=desktop#home", page_ko: "https://oh-my-design.kr/ko/screens/toss?device=desktop#home",
    });
    expect(screens.home.devices).toEqual(["mobile", "desktop"]);
    expect(screens.home.provenance).toEqual({
      shot: "2026-11-21", signed_out: true, masked: false,
      rights: "These screens belong to the company. They were shot signed out on 2026-11-21.",
      takedown: "https://github.com/kwakseongjae/oh-my-design/issues/new?template=screen-removal.yml&service=toss",
    });
    expect(screens.feed.provenance).toMatchObject({ masked: true, masked_note: "Nicknames and uploaded photos are hidden" });
    expect(screens.login.images.mobile).not.toHaveProperty("thumb");
    expect(screens.login.absent).toEqual(["images.mobile.thumb"]);
    expect(screens["search-empty"].state).toBe("빈 상태");
    expect(screens.home.tokens_seen).toEqual([
      { path: C1.path, token: token(C1.path), value: String(C1.value), label: SEEN_ON_SCREEN },
      { path: C2.path, token: token(C2.path), value: String(C2.value), label: SEEN_ON_SCREEN },
    ]);
    expect(screens.feed.tokens_seen).toEqual([]);
    expect(data.colors?.map((c) => c.seen_on)).toEqual([["home", "login"], ["home"], []]);
    expect(data.next?.tools.map((t) => t.name)).toEqual(["get_screen_context", "get_tokens", "get_component_states", "get_design_md"]);
    const desktopOnly = outputs.get_service_screens.parse(getServiceScreens({ id: "toss", device: "desktop" }, FIXTURE));
    expect(desktopOnly.groups.flatMap((g) => g.screens).map((s) => [s.key, Object.keys(s.images)])).toEqual([["home", ["desktop"]]]);
    const sixt = outputs.get_service_screens.parse(getServiceScreens({ id: "sixt" }, FIXTURE));
    expect(sixt.absent).toContain("provenance.shot");
    expect(sixt.provenance).not.toHaveProperty("shot");
  });

  it("filters search by type in any of its names, device, service, country and category", () => {
    for (const type of ["sign-in", "Sign-in", "로그인"]) {
      const data = outputs.search_screens.parse(searchScreens({ type }, FIXTURE));
      expect(data.results.map((r) => `${r.service.id}/${r.screen.key}`)).toEqual(["toss/login", "sixt/login"]);
    }
    const mobile = outputs.search_screens.parse(searchScreens({ type: "sign-in", device: "mobile" }, FIXTURE));
    expect(mobile.results.map((r) => [r.service.id, Object.keys(r.screen.images)])).toEqual([["toss", ["mobile"]]]);
    expect(outputs.search_screens.parse(searchScreens({ service: "sixt" }, FIXTURE)).total).toBe(2);
    expect(outputs.search_screens.parse(searchScreens({ country: ["de"] }, FIXTURE)).results.every((r) => r.service.id === "sixt")).toBe(true);
    expect(outputs.search_screens.parse(searchScreens({ category: ["fintech"] }, FIXTURE)).results.every((r) => r.service.id === "toss")).toBe(true);
    const limited = outputs.search_screens.parse(searchScreens({ limit: 2 }, FIXTURE));
    expect([limited.total, limited.results.length]).toEqual([6, 2]);
    expect(limited.absent).toEqual([]);
    expect(outputs.search_screens.parse(searchScreens({ service: "sixt" }, FIXTURE)).absent).toContain("results.sixt.service.display_name_ko");
  });

  it("matches words over Korean and English names, titles and types, best first", () => {
    const korean = outputs.search_screens.parse(searchScreens({ query: "토스" }, FIXTURE));
    expect(new Set(korean.results.map((r) => r.service.id))).toEqual(new Set(["toss"]));
    expect(korean.results[0].match).toEqual(["service"]);
    const mixed = outputs.search_screens.parse(searchScreens({ query: "toss 검색 결과" }, FIXTURE));
    expect(mixed.results[0]).toMatchObject({ service: { id: "toss" }, screen: { key: "search-empty" } });
    expect(outputs.search_screens.parse(searchScreens({ query: "zzqqxx" }, FIXTURE)).total).toBe(0);
  });

  it("rejects an unknown service, screen or type without guessing, and reports a reference without screens as absent", () => {
    expect(catalogError(() => getServiceScreens({ id: "toss-bank" }, FIXTURE))).toBe("unknown_reference");
    expect(catalogError(() => searchScreens({ service: "toss-bank" }, FIXTURE))).toBe("unknown_reference");
    expect(catalogError(() => getScreenContext({ id: "toss-bank", key: "home" }, FIXTURE))).toBe("unknown_reference");
    expect(catalogError(() => getScreenContext({ id: "toss", key: "zz-none" }, FIXTURE))).toBe("unknown_screen");
    expect(catalogError(() => getScreenContext({ id: NO_SCREENS, key: "home" }, FIXTURE))).toBe("unknown_screen");
    expect(catalogError(() => searchScreens({ type: "checkout-wizard" }, FIXTURE))).toBe("unknown_screen_type");
    const none = outputs.get_service_screens.parse(getServiceScreens({ id: NO_SCREENS }, FIXTURE));
    expect(none.groups).toEqual([]);
    expect(none.absent).toContain(`screens.${NO_SCREENS}`);
    expect(none.reference?.id).toBe(NO_SCREENS);
    expect(outputs.search_screens.parse(searchScreens({ service: NO_SCREENS }, FIXTURE)).absent).toContain(`screens.${NO_SCREENS}`);
  });
});

describe("get_screen_context", () => {
  it("separates what was seen on the screen from what comes from the DESIGN.md, and joins evidence while values agree", () => {
    const data = outputs.get_screen_context.parse(getScreenContext({ id: "toss", key: "home" }, FIXTURE));
    noNulls(data);
    expect(data.seen_on_this_screen?.label).toBe(SEEN_ON_SCREEN);
    expect(data.seen_on_this_screen?.colors.map((c) => c.path)).toEqual([C1.path, C2.path]);
    for (const color of data.seen_on_this_screen!.colors) {
      expect(color.design_md).toMatchObject({ path: color.path, value: color.value, evidence: expect.any(Object) });
    }
    expect(data.compared_not_seen).toEqual([{ path: C3.path, token: token(C3.path), value: String(C3.value) }]);
    expect(data.from_design_md?.label).toBe(FROM_DESIGN_MD);
    expect(Object.keys(data.from_design_md!)).toEqual(expect.arrayContaining(["typography", "rounded", "components"]));
    expect(data.not_known_for_this_screen?.[0]).toMatch(/component/);
    expect(data.screen?.provenance.rights).toContain("belong to the company");
    expect(JSON.stringify(data)).not.toContain("example.test");
  });

  it("does not join a seen colour to the DESIGN.md's evidence once the value has changed", () => {
    const toss = FIXTURE.services[1];
    const changed: PublicManifest = { ...FIXTURE, services: [{ ...toss, colors: toss.colors.map((c, i) => (i === 0 ? { ...c, value: "#010203" } : c)) }] };
    const data = outputs.get_screen_context.parse(getScreenContext({ id: "toss", key: "home" }, changed));
    const color = data.seen_on_this_screen!.colors[0];
    expect(color).toMatchObject({ path: C1.path, value: "#010203", design_md_value_now: String(C1.value) });
    expect(color).not.toHaveProperty("design_md");
    expect(data.absent).toContain(`seen_on_this_screen.${C1.path}.design_md`);
  });

  it("brings only the DESIGN.md groups asked for", () => {
    const data = outputs.get_screen_context.parse(getScreenContext({ id: "toss", key: "home", include: ["rounded"] }, FIXTURE));
    expect(Object.keys(data.from_design_md!).sort()).toEqual(["label", "rounded"]);
    expect(data.seen_on_this_screen).toBeDefined();
  });

  it("leaves the largest DESIGN.md groups out, by name, instead of failing when the answer outgrows the budget", () => {
    const whole = getScreenContext({ id: "toss", key: "home" }, FIXTURE);
    const size = Buffer.byteLength(JSON.stringify(toolResult(whole as Record<string, unknown>)));
    const withoutComponents = getScreenContext({ id: "toss", key: "home", include: ["typography", "rounded", "spacing"] }, FIXTURE);
    const smaller = Buffer.byteLength(JSON.stringify(toolResult(withoutComponents as Record<string, unknown>)));
    expect(size - smaller).toBeGreaterThan(4000);
    const data = outputs.get_screen_context.parse(getScreenContext({ id: "toss", key: "home" }, FIXTURE, COMMITTED_OUTLINES, smaller + 2000));
    expect(data.from_design_md?.omitted_for_size).toEqual(["components"]);
    expect(data.from_design_md).not.toHaveProperty("components");
    expect(data.absent).toContain("from_design_md.components");
    expect(data.next?.tools.map((t) => t.name)).toContain("get_component_states");
    expect(data.seen_on_this_screen?.colors.length).toBe(2);
  });
});

describe("outline (reader only; nothing is published)", () => {
  const entry = (width: number) => ({
    viewport: { width, height: 844 }, page_height: 3690, elements_capped: false,
    first_viewport: { counts: { link: 10, button: 4, field: 1 }, controls: [{ role: "field", box: { x: 36, y: 96, w: 284, h: 24 }, radius: 9999, fill: "#ffffff" }] },
    whole_page: { counts: { link: 64, button: 8 } },
  });

  it("is absent for every screen while the committed file is empty", () => {
    expect(COMMITTED_OUTLINES.size).toBe(0);
    const data = outputs.get_screen_context.parse(getScreenContext({ id: "toss", key: "home", include: ["rounded"] }, FIXTURE));
    expect(data).not.toHaveProperty("outline");
    expect(data.absent).toContain("outline");
  });

  it("travels on the published widths only, labelled, with no text, and an entry of the wrong shape is left out", () => {
    const outlines = validOutlines({ screens: {
      "toss/home": { 390: { ...entry(390), labels: ["a person's name"] }, 800: entry(800) },
      "toss/login": { 390: { ...entry(390), elements_capped: "no" } },
      "toss/feed": { 390: { ...entry(390), first_viewport: { counts: { link: 1 }, controls: [{ role: "field", box: { x: 0, y: 0, w: 1, h: 1 }, fill: "white" }] } } },
    } });
    expect([...outlines.keys()]).toEqual(["toss/home"]);
    const data = outputs.get_screen_context.parse(getScreenContext({ id: "toss", key: "home", include: ["rounded"] }, FIXTURE, outlines));
    expect(data.outline).toMatchObject({ label: FROM_CAPTURE, mobile: { width: 390, first_viewport: { counts: { field: 1 } } } });
    expect(data.outline).not.toHaveProperty("desktop");
    expect(JSON.stringify(data.outline)).not.toContain("person");
    expect(data.absent).not.toContain("outline");
  });
});

describe("the committed manifest (invariants only)", () => {
  const services = servicesOf(COMMITTED_MANIFEST);
  const storeHost = COMMITTED_MANIFEST ? new URL(COMMITTED_MANIFEST.base).host : "store.invalid";

  it("answers every tool on the contract, with no nulls and never the store's host", () => {
    const list = outputs.list_screen_types.parse(listScreenTypes({}));
    noNulls(list);
    expect(list.screens.published).toBe(services.length > 0);
    expect(list.types.reduce((n, t) => n + t.screens.any, 0)).toBe(list.screens.screens);
    for (const s of services) {
      const data = outputs.get_service_screens.parse(getServiceScreens({ id: s.summary.id }));
      noNulls(data);
      expect(JSON.stringify(data)).not.toContain(storeHost);
      const screens = data.groups.flatMap((g) => g.screens);
      expect(screens).toHaveLength(s.cards.length);
      for (const screen of screens) {
        expect(screen.tokens_seen.map((t) => t.token)).toEqual(s.model.colors.filter((c) => c.screens.includes(screen.key)).map((c) => c.token));
        for (const image of Object.values(screen.images)) expect(image!.still).toMatch(/^https:\/\/oh-my-design\.kr\/screens-img\//);
      }
    }
  });

  it("answers get_screen_context for every published screen inside the budget", () => {
    for (const s of services) for (const card of s.cards) {
      const raw = getScreenContext({ id: s.summary.id, key: card.key });
      expect(toolResult(raw as Record<string, unknown>).isError, `${s.summary.id}/${card.key}`).not.toBe(true);
      const data = outputs.get_screen_context.parse(raw);
      noNulls(data);
      expect(JSON.stringify(data)).not.toContain(storeHost);
      expect((data.seen_on_this_screen?.colors.length ?? 0) + (data.compared_not_seen?.length ?? 0)).toBe(s.model.colors.length);
      for (const c of data.seen_on_this_screen?.colors ?? []) if (c.design_md) expect(String(c.design_md.value).toLowerCase()).toBe(c.value.toLowerCase());
    }
  });
});
