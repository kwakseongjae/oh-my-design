import { describe, expect, it } from "vitest";
import {
  browse,
  byCount,
  cardPicks,
  defaultFilter,
  filterQuery,
  orderServices,
  parseFilter,
  screensPageHref,
  similarServices,
  smallSrc,
  stillOn,
  typeOptions,
  wallRows,
  type Filter,
  type GalleryModel,
  type GalleryService,
  type GalleryShot,
} from "./gallery";

/** The /screens gallery's, the screens pages' and the landing wall's rules: the filters and their URL, the card's
 *  stills, the type view, the links to a service's screens page, similar services, the wall. */

const still = (width: number, key: string, thumb = true) => ({ width, still: `/s/${width}-${key}.jpg`, thumb: thumb ? `/s/${width}-${key}.thumb.jpg` : null, full: null });
const shot = (slug: string, key: string, type: string, extra: Partial<GalleryShot> = {}): GalleryShot => ({
  slug,
  key,
  type,
  title: `${type} 화면`,
  state: null,
  stills: [still(1440, key), still(390, key)],
  ...extra,
});
const service = (slug: string, extra: Partial<GalleryService> = {}): GalleryService => ({
  slug,
  name: slug.toUpperCase(),
  href: `/design-systems/${slug}`,
  screensHref: `/screens/${slug}`,
  country: "KR",
  category: "ecommerce",
  categoryName: "Commerce",
  logo: null,
  count: 0,
  devices: ["mobile", "desktop"],
  ...extra,
});
const f = (x: Partial<Filter>): Filter => ({ country: null, device: "mobile", category: null, type: null, ...x });
const cardsOf = (v: ReturnType<typeof browse>) => (v.kind === "services" ? v.cards : []);

describe("a card's stills", () => {
  const shots = [
    shot("a", "event", "이벤트"),
    shot("a", "empty", "검색 결과", { state: "빈 상태" }),
    shot("a", "detail", "상세"),
    shot("a", "nf", "오류"),
    shot("a", "home", "홈"),
    shot("a", "list", "목록"),
    shot("a", "list-2", "목록"),
  ];
  it("phone: a home, then a list, then a detail", () => {
    expect(cardPicks(shots, "mobile").map((p) => p.shot.key)).toEqual(["home", "list", "detail"]);
    expect(cardPicks(shots, "mobile").every((p) => p.still.width === 390)).toBe(true);
  });
  it("falls back to the walk's other screens, and to state screens only when nothing else is left", () => {
    expect(cardPicks([shots[0], shots[1], shots[4]], "mobile").map((p) => p.shot.key)).toEqual(["home", "event", "empty"]);
    expect(cardPicks([shots[1], shots[3]], "mobile").map((p) => p.shot.key)).toEqual(["empty", "nf"]);
    expect(cardPicks([], "mobile")).toEqual([]);
  });
  it("desktop: one still, the home or else the first screen", () => {
    expect(cardPicks(shots, "desktop").map((p) => p.shot.key)).toEqual(["home"]);
    expect(cardPicks([shots[0], shots[2]], "desktop").map((p) => p.shot.key)).toEqual(["detail"]);
    expect(cardPicks(shots, "desktop")[0].still.width).toBe(1440);
  });
  it("never borrows a still of the other device", () => {
    const webOnly = shot("a", "x", "홈", { stills: [still(1440, "x")] });
    expect(stillOn(webOnly, "desktop")?.width).toBe(1440);
    expect(stillOn(webOnly, "mobile")).toBeNull();
    expect(cardPicks([webOnly], "mobile")).toEqual([]);
  });
  it("loads the small rendition when there is one, else the still", () => {
    expect(smallSrc(still(390, "x"))).toBe("/s/390-x.thumb.jpg");
    expect(smallSrc(still(390, "x", false))).toBe("/s/390-x.jpg");
  });
});

describe("filters", () => {
  const model: Pick<GalleryModel, "services" | "shots" | "devices" | "countries" | "categories"> = {
    services: [
      service("kr1", { count: 3 }),
      service("kr2", { category: "education", categoryName: "Education", count: 2 }),
      service("jp1", { country: "JP", count: 1 }),
      service("nocat", { category: null, categoryName: null, count: 1 }),
    ],
    shots: [
      shot("kr1", "home", "홈"),
      shot("kr1", "list", "목록"),
      shot("kr1", "web-only", "상세", { stills: [still(1440, "web-only")] }),
      shot("kr2", "home", "홈", { stills: [still(390, "home")] }),
      shot("kr2", "list", "목록", { stills: [still(390, "list")] }),
      shot("jp1", "home", "홈"),
      shot("nocat", "home", "홈"),
    ],
    devices: ["mobile", "desktop"],
    countries: [
      { value: "KR", label: "Korea" },
      { value: "JP", label: "Japan" },
    ],
    categories: [
      { value: "ecommerce", label: "Commerce" },
      { value: "education", label: "Education" },
    ],
  };

  it("unfiltered: every service, on mobile, counting every screen of each (any width)", () => {
    const all = browse(model, defaultFilter(model));
    expect(all.kind).toBe("services");
    expect(cardsOf(all).map((c) => c.service.slug)).toEqual(["kr1", "kr2", "jp1", "nocat"]);
    expect(all.services).toBe(4);
    expect(all.screens).toBe(7);
    expect(cardsOf(all)[0].picks.map((p) => p.shot.key)).toEqual(["home", "list"]);
  });
  it("country and category narrow the services; the device leaves out a service with no still on it", () => {
    expect(cardsOf(browse(model, f({ country: "JP" }))).map((c) => c.service.slug)).toEqual(["jp1"]);
    expect(cardsOf(browse(model, f({ category: "education" }))).map((c) => c.service.slug)).toEqual(["kr2"]);
    const desktop = browse(model, f({ country: "KR", device: "desktop" }));
    expect(cardsOf(desktop).map((c) => c.service.slug)).toEqual(["kr1", "nocat"]);
    expect(desktop.screens).toBe(4);
    expect(cardsOf(desktop)[0].picks.map((p) => p.shot.key)).toEqual(["home"]);
    expect(browse(model, f({ country: "JP", category: "education" }))).toEqual({ kind: "services", cards: [], screens: 0, services: 0 });
  });
  it("a type turns the cards into one tile per screen of that type on the device, counted as shown", () => {
    const homes = browse(model, f({ type: "홈" }));
    expect(homes.kind).toBe("type");
    if (homes.kind !== "type") return;
    expect(homes.tiles.map((x) => `${x.service.slug}/${x.shot.key}`)).toEqual(["kr1/home", "kr2/home", "jp1/home", "nocat/home"]);
    expect(homes.tiles.every((x) => x.still.width === 390)).toBe(true);
    expect([homes.screens, homes.services]).toEqual([4, 4]);
    const details = browse(model, f({ type: "상세", device: "desktop" }));
    expect([details.screens, details.services]).toEqual([1, 1]);
    expect(browse(model, f({ type: "상세" }))).toEqual({ kind: "type", tiles: [], screens: 0, services: 0 });
    expect(browse(model, f({ type: "목록", category: "education" })).screens).toBe(1);
  });
  it("the type filter lists the types with screens under the other filters, with counts, in the fixed order", () => {
    expect(typeOptions(model, f({}))).toEqual([
      { type: "홈", count: 4 },
      { type: "목록", count: 2 },
    ]);
    expect(typeOptions(model, f({ device: "desktop" }))).toEqual([
      { type: "홈", count: 3 },
      { type: "목록", count: 1 },
      { type: "상세", count: 1 },
    ]);
    // the chosen type stays listed when the other filters leave none of it
    expect(typeOptions(model, f({ type: "상세" }))).toContainEqual({ type: "상세", count: 0 });
    // the catch-all 「화면」 is no type to browse by
    expect(typeOptions({ ...model, shots: [...model.shots, shot("kr1", "salary", "화면")] }, f({})).some((x) => x.type === "화면")).toBe(false);
  });
  it("the default view has a bare URL; each filter adds its own parameter (types by their slug)", () => {
    expect(filterQuery(defaultFilter(model), model)).toBe("");
    expect(filterQuery(f({ country: "KR", device: "desktop", category: "education", type: "검색 결과" }), model)).toBe(
      "country=kr&device=desktop&category=education&type=search-results",
    );
    expect(filterQuery(f({ category: "ecommerce" }), model)).toBe("category=ecommerce");
  });
  it("reads a linked view back, and anything unknown as the default", () => {
    expect(parseFilter("?country=kr&device=desktop&category=education&type=list", model)).toEqual({ country: "KR", device: "desktop", category: "education", type: "목록" });
    expect(parseFilter("?country=zz&device=tv&category=nope&type=landing", model)).toEqual(defaultFilter(model));
    // the round-1 names of the devices are not read
    expect(parseFilter("?device=web", model).device).toBe("mobile");
    expect(parseFilter("", model)).toEqual({ country: null, device: "mobile", category: null, type: null });
  });
  it("a gallery with desktop stills only opens on desktop", () => {
    expect(defaultFilter({ devices: ["desktop"] }).device).toBe("desktop");
    expect(parseFilter("?device=mobile", { ...model, devices: ["desktop"] }).device).toBe("desktop");
  });
  it("a service's screens page: the device in the query only when it is not the one the page opens on; a screen in the hash", () => {
    const both = service("a");
    expect(screensPageHref(both, "mobile")).toBe("/screens/a");
    expect(screensPageHref(both, "desktop")).toBe("/screens/a?device=desktop");
    expect(screensPageHref(both, "desktop", "home")).toBe("/screens/a?device=desktop#home");
    expect(screensPageHref(service("b", { devices: ["desktop"] }), "desktop", "home")).toBe("/screens/b#home");
  });
  it("similar services: the same category first, then the rest, in gallery order, never itself", () => {
    expect(similarServices(model, "kr1").map((s) => s.slug)).toEqual(["jp1", "kr2", "nocat"]);
    expect(similarServices(model, "nocat").map((s) => s.slug)).toEqual(["kr1", "kr2", "jp1"]);
  });
  it("options run by how many services have them", () => {
    expect(byCount(["KR", "JP", "KR", null, "TW", "KR", "JP"])).toEqual(["KR", "JP", "TW"]);
  });
  it("services with an app as well as the web come first, then by name in the page's language", () => {
    const list = [
      { name: "원티드", platform: "web" },
      { name: "컬리", platform: "both" },
      { name: "29CM", platform: "both" },
      { name: "당근", platform: "both" },
      { name: "인프런", platform: null },
    ];
    expect(orderServices(list, "ko").map((s) => s.name)).toEqual(["29CM", "당근", "컬리", "원티드", "인프런"]);
  });
});

describe("the landing wall", () => {
  const slugs = ["s0", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"];
  const model = {
    services: slugs.map((s) => service(s)),
    shots: slugs.flatMap((s) => [shot(s, "home", "홈"), shot(s, "list", "목록"), shot(s, "detail", "상세")]),
  };
  const [a, b] = wallRows(model);

  it("each row holds every service once: no service repeats in a row", () => {
    for (const row of [a, b]) {
      expect(row).toHaveLength(slugs.length);
      expect(new Set(row.map((t) => t.slug)).size).toBe(slugs.length);
    }
  });
  it("the first row leads with home screens in gallery order, the second starts halfway with another screen", () => {
    expect(a.map((t) => t.slug)).toEqual(slugs);
    expect(a.filter((t) => !t.wide).every((t) => t.key === "home")).toBe(true);
    expect(b.map((t) => t.slug)).toEqual([...slugs.slice(5), ...slugs.slice(0, 5)]);
    expect(b.filter((t) => !t.wide).every((t) => t.key === "list")).toBe(true);
  });
  it("two desktop stills per row from eight services up, one below, each at a service that has one", () => {
    expect(a.filter((t) => t.wide).map((t) => t.slug)).toEqual(["s2", "s7"]);
    expect(b.filter((t) => t.wide).map((t) => t.slug)).toEqual(["s8", "s3"]);
    const small = wallRows({ services: model.services.slice(0, 4), shots: model.shots.filter((s) => ["s0", "s1", "s2", "s3"].includes(s.slug)) });
    expect(small[0].filter((t) => t.wide)).toHaveLength(1);
    const noWebAt2 = wallRows({
      services: model.services.slice(0, 4),
      shots: model.shots.filter((s) => ["s0", "s1", "s2", "s3"].includes(s.slug)).map((s) => (s.slug === "s2" ? { ...s, stills: s.stills.filter((x) => x.width === 390) } : s)),
    });
    expect(noWebAt2[0].filter((t) => t.wide).map((t) => t.slug)).toEqual(["s3"]);
  });
  it("no still appears twice on the wall, even where both rows would draw the same service wide", () => {
    const srcs = [...a, ...b].map((t) => `${t.slug} ${t.src}`);
    expect(new Set(srcs).size).toBe(srcs.length);
    // eleven services: the second row's second slot lands on a service the first row drew wide, and moves on
    const eleven = Array.from({ length: 11 }, (_, i) => `t${i}`);
    const [ra, rb] = wallRows({ services: eleven.map((s) => service(s)), shots: eleven.flatMap((s) => [shot(s, "home", "홈"), shot(s, "list", "목록")]) });
    const wideA = ra.filter((t) => t.wide).map((t) => t.slug);
    const wideB = rb.filter((t) => t.wide).map((t) => t.slug);
    expect(wideA).toEqual(["t2", "t7"]);
    expect(wideB.some((s) => wideA.includes(s))).toBe(false);
    expect(wideB).toHaveLength(2);
  });
  it("each still opens its service's screens page at that screen on its device, and loads the small rendition", () => {
    expect(a[0]).toMatchObject({ href: "/screens/s0#home", src: "/s/390-home.thumb.jpg", title: "홈 화면", name: "S0" });
    expect(a.find((t) => t.wide)).toMatchObject({ href: "/screens/s2?device=desktop#home", src: "/s/1440-home.thumb.jpg" });
  });
});
