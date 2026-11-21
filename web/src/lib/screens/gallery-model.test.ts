import { describe, expect, it } from "vitest";
import {
  chroma,
  firstPerService,
  fixedShelfOf,
  orderServices,
  serviceShelves,
  shotDots,
  stillAt,
  teaserRow,
  typeShelfId,
  typeShelves,
  type GalleryShot,
  type ScreenColor,
} from "./model";

/** The /screens gallery's rules: shelves by screen type, the order inside a shelf, the dots, the landing row. */

const both = (key: string) => [
  { width: 1440, still: `/s/1440-${key}.jpg`, full: null },
  { width: 390, still: `/s/390-${key}.jpg`, full: null },
];
const shot = (slug: string, key: string, type: string, extra: Partial<GalleryShot> = {}): GalleryShot => ({
  slug, key, type, title: type, state: null, stills: both(key), dots: [], ...extra,
});

describe("dots", () => {
  const colors: ScreenColor[] = [
    { token: "ink", value: "#000000", screens: ["a"] },
    { token: "grey", value: "#868b94", screens: ["a"] },
    { token: "paper", value: "#FFFFFF", screens: ["a"] },
    { token: "brand", value: "#ff6600", screens: ["a"] },
    { token: "line", value: "#dddddd", screens: ["a"] },
    { token: "accent", value: "#00a1ff", screens: ["a", "b"] },
    { token: "hidden", value: "#5f0080", screens: [] },
  ];
  it("chroma is 0 for greys and for what is not a hex colour", () => {
    expect(chroma("#868b94")).toBeLessThan(chroma("#ff6600"));
    expect(chroma("#dddddd")).toBe(0);
    expect(chroma("rgb(1,2,3)")).toBe(0);
  });
  it("leaves out black and white, puts the colours with a hue first, keeps at most three", () => {
    expect(shotDots("a", colors).map((d) => d.token)).toEqual(["brand", "accent", "grey"]);
    expect(shotDots("a", colors, 5).map((d) => d.token)).toEqual(["brand", "accent", "grey", "line"]);
  });
  it("takes only the colours drawn on that screen; none without a token comparison", () => {
    expect(shotDots("b", colors)).toEqual([{ token: "accent", value: "#00a1ff" }]);
    expect(shotDots("c", colors)).toEqual([]);
    expect(shotDots("a", [])).toEqual([]);
  });
});

describe("which shelf a screen is on", () => {
  it("maps the five core types and the two states; a state wins over the type", () => {
    expect(fixedShelfOf({ type: "홈", state: null })).toBe("home");
    expect(fixedShelfOf({ type: "검색 결과", state: null })).toBe("results");
    expect(fixedShelfOf({ type: "목록", state: null })).toBe("list");
    expect(fixedShelfOf({ type: "상세", state: null })).toBe("detail");
    expect(fixedShelfOf({ type: "로그인", state: null })).toBe("login");
    expect(fixedShelfOf({ type: "검색 결과", state: "빈 상태" })).toBe("empty");
    expect(fixedShelfOf({ type: "목록", state: "빈 상태" })).toBe("empty");
    expect(fixedShelfOf({ type: "오류", state: null })).toBe("notfound");
    expect(fixedShelfOf({ type: "이벤트", state: null })).toBeNull();
    expect(fixedShelfOf({ type: "검색", state: null })).toBeNull();
  });
  it("a phone shelf never borrows a desktop still", () => {
    const one = shot("a", "x", "홈", { stills: [{ width: 1440, still: "/s/1440-x.jpg", full: null }] });
    expect(stillAt(one, 1440)?.width).toBe(1440);
    expect(stillAt(one, 390)).toBeNull();
  });
  it("anchor ids for other types", () => {
    expect(typeShelfId("고객센터")).toBe("type-고객센터");
    expect(typeShelfId("검색  결과")).toBe("type-검색-결과");
  });
});

describe("shelves by screen type", () => {
  const order = ["s1", "s2", "s3"];
  const shots = [
    shot("s1", "home", "홈"),
    shot("s1", "home-2", "홈"),
    shot("s1", "event", "이벤트"),
    shot("s1", "cart", "장바구니"),
    shot("s1", "nf", "오류"),
    shot("s2", "home", "홈"),
    shot("s2", "event", "이벤트"),
    shot("s2", "empty", "검색 결과", { state: "빈 상태" }),
    shot("s2", "feed", "피드", { stills: [{ width: 1440, still: "/s/1440-feed.jpg", full: null }] }),
    shot("s3", "home", "홈"),
    shot("s3", "event", "이벤트"),
    shot("s3", "map", "지도"),
    shot("s3", "feed", "피드"),
    shot("s3", "feed-2", "피드"),
  ];

  it("fixed shelves in their order, then types with at least three by count, then one last shelf for the rest", () => {
    const shelves = typeShelves(shots, order, 390);
    expect(shelves.map((s) => s.id)).toEqual(["home", "empty", "notfound", "type-이벤트", "more"]);
    expect(shelves.find((s) => s.id === "more")!.shots.map((s) => s.slug + "/" + s.key)).toEqual(["s1/cart", "s3/map", "s3/feed", "s3/feed-2"]);
  });

  it("each service's first screen comes first, the rest follow in service order", () => {
    const home = typeShelves(shots, order, 390)[0];
    expect(home.shots.map((s) => s.slug + "/" + s.key)).toEqual(["s1/home", "s2/home", "s3/home", "s1/home-2"]);
    expect(firstPerService(home.shots, ["s3", "s1", "s2"]).map((s) => s.slug + "/" + s.key)).toEqual(["s3/home", "s1/home", "s2/home", "s1/home-2"]);
  });

  it("follows the width: a screen shot at one width only is on that width's shelves and counts only there", () => {
    const wide = typeShelves(shots, order, 1440);
    expect(wide.map((s) => s.id)).toEqual(["home", "empty", "notfound", "type-이벤트", "type-피드", "more"]);
    expect(wide.find((s) => s.id === "type-피드")!.shots).toHaveLength(3);
    // at 390 the same type has two screens, under the threshold, so it is in the last shelf
    expect(typeShelves(shots, order, 390).some((s) => s.id === "type-피드")).toBe(false);
  });

  it("ties between other types go by name; empty shelves are left out", () => {
    const tie = [shot("s1", "a", "피드"), shot("s2", "a", "피드"), shot("s3", "a", "피드"), shot("s1", "b", "고객센터"), shot("s2", "b", "고객센터"), shot("s3", "b", "고객센터")];
    expect(typeShelves(tie, order, 390).map((s) => s.id)).toEqual(["type-고객센터", "type-피드"]);
    expect(typeShelves([], order, 390)).toEqual([]);
  });
});

describe("shelves by service and the landing row", () => {
  const order = ["s2", "s1", "s3"];
  const shots = [
    shot("s1", "home", "홈"),
    shot("s1", "login", "로그인"),
    shot("s2", "home", "홈", { stills: [{ width: 1440, still: "/s/x.jpg", full: null }] }),
    shot("s2", "home-b", "홈"),
    shot("s3", "event", "이벤트"),
  ];
  it("one shelf per service in gallery order, its screens in the walk's order, at that width", () => {
    expect(serviceShelves(shots, order, 390).map((x) => [x.slug, x.shots.map((s) => s.key)])).toEqual([
      ["s2", ["home-b"]],
      ["s1", ["home", "login"]],
      ["s3", ["event"]],
    ]);
  });
  it("the landing row: each service's first screen of that shelf at that width, in service order, at most n", () => {
    expect(teaserRow(shots, order, 390, "home").map((s) => s.slug + "/" + s.key)).toEqual(["s2/home-b", "s1/home"]);
    expect(teaserRow(shots, order, 390, "home", 1).map((s) => s.slug)).toEqual(["s2"]);
    expect(teaserRow(shots, order, 390, "detail")).toEqual([]);
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
