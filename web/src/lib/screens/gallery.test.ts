import { describe, expect, it } from "vitest";
import {
  browse,
  byCount,
  cardPicks,
  defaultFilter,
  filterQuery,
  orderServices,
  parseFilter,
  smallSrc,
  stillOn,
  wallRows,
  type GalleryModel,
  type GalleryService,
  type GalleryShot,
} from "./gallery";

/** The /screens gallery's and the landing wall's rules: the filters and their URL, the card's stills, the wall. */

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
  country: "KR",
  category: "ecommerce",
  categoryName: "Commerce",
  logo: null,
  count: 0,
  ...extra,
});

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
    expect(cardPicks(shots, "phone").map((p) => p.shot.key)).toEqual(["home", "list", "detail"]);
    expect(cardPicks(shots, "phone").every((p) => p.still.width === 390)).toBe(true);
  });
  it("falls back to the walk's other screens, and to state screens only when nothing else is left", () => {
    expect(cardPicks([shots[0], shots[1], shots[4]], "phone").map((p) => p.shot.key)).toEqual(["home", "event", "empty"]);
    expect(cardPicks([shots[1], shots[3]], "phone").map((p) => p.shot.key)).toEqual(["empty", "nf"]);
    expect(cardPicks([], "phone")).toEqual([]);
  });
  it("web: one still, the home or else the first screen", () => {
    expect(cardPicks(shots, "web").map((p) => p.shot.key)).toEqual(["home"]);
    expect(cardPicks([shots[0], shots[2]], "web").map((p) => p.shot.key)).toEqual(["detail"]);
    expect(cardPicks(shots, "web")[0].still.width).toBe(1440);
  });
  it("never borrows a still of the other device", () => {
    const webOnly = shot("a", "x", "홈", { stills: [still(1440, "x")] });
    expect(stillOn(webOnly, "web")?.width).toBe(1440);
    expect(stillOn(webOnly, "phone")).toBeNull();
    expect(cardPicks([webOnly], "phone")).toEqual([]);
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
    devices: ["phone", "web"],
    countries: [
      { value: "KR", label: "Korea" },
      { value: "JP", label: "Japan" },
    ],
    categories: [
      { value: "ecommerce", label: "Commerce" },
      { value: "education", label: "Education" },
    ],
  };

  it("unfiltered: every service, on phones, counting every screen of each (any width)", () => {
    const all = browse(model, defaultFilter(model));
    expect(all.cards.map((c) => c.service.slug)).toEqual(["kr1", "kr2", "jp1", "nocat"]);
    expect(all.services).toBe(4);
    expect(all.screens).toBe(7);
    expect(all.cards[0].picks.map((p) => p.shot.key)).toEqual(["home", "list"]);
  });
  it("country and category narrow the services; the device leaves out a service with no still at that width", () => {
    expect(browse(model, { country: "JP", device: "phone", category: null }).cards.map((c) => c.service.slug)).toEqual(["jp1"]);
    expect(browse(model, { country: null, device: "phone", category: "education" }).cards.map((c) => c.service.slug)).toEqual(["kr2"]);
    const web = browse(model, { country: "KR", device: "web", category: null });
    expect(web.cards.map((c) => c.service.slug)).toEqual(["kr1", "nocat"]);
    expect(web.screens).toBe(4);
    expect(web.cards[0].picks.map((p) => p.shot.key)).toEqual(["home"]);
    expect(browse(model, { country: "JP", device: "phone", category: "education" })).toEqual({ cards: [], screens: 0, services: 0 });
  });
  it("the default view has a bare URL; each filter adds its own parameter", () => {
    expect(filterQuery(defaultFilter(model), model)).toBe("");
    expect(filterQuery({ country: "KR", device: "web", category: "education" }, model)).toBe("country=kr&device=web&category=education");
    expect(filterQuery({ country: null, device: "phone", category: "ecommerce" }, model)).toBe("category=ecommerce");
  });
  it("reads a linked view back, and anything unknown as the default", () => {
    expect(parseFilter("?country=kr&device=web&category=education", model)).toEqual({ country: "KR", device: "web", category: "education" });
    expect(parseFilter("?country=zz&device=tv&category=nope", model)).toEqual(defaultFilter(model));
    expect(parseFilter("", model)).toEqual({ country: null, device: "phone", category: null });
  });
  it("a gallery with web stills only opens on the web", () => {
    expect(defaultFilter({ devices: ["web"] }).device).toBe("web");
    expect(parseFilter("?device=phone", { ...model, devices: ["web"] }).device).toBe("web");
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
  it("two web stills per row from eight services up, one below, each at a service that has one", () => {
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
  it("each still links to its service's 서비스 화면 tab and loads the small rendition", () => {
    expect(a[0]).toMatchObject({ href: "/design-systems/s0#screens", src: "/s/390-home.thumb.jpg", title: "홈 화면", name: "S0" });
    expect(a.find((t) => t.wide)!.src).toBe("/s/1440-home.thumb.jpg");
  });
});
