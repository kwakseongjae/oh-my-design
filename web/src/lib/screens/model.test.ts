import { describe, expect, it } from "vitest";
import {
  cardsOn,
  deviceOf,
  devicesOf,
  dialogSequence,
  groupCards,
  groupOf,
  isBlackOrWhite,
  stillOn,
  type ScreenCard,
} from "./model";

const card = (key: string, type: string, extra: Partial<ScreenCard> = {}): ScreenCard => ({
  key,
  type,
  title: key,
  state: null,
  blocked: false,
  masked: false,
  stills: [
    { width: 1440, still: `/s/1440-${key}.jpg`, thumb: null, full: null },
    { width: 390, still: `/s/390-${key}.jpg`, thumb: null, full: null },
  ],
  ...extra,
});

const cards = [
  card("home", "홈"),
  card("event", "이벤트"),
  card("not-found", "오류"),
  card("search-empty", "검색 결과", { state: "빈 상태" }),
  card("detail", "상세", { blocked: true, stills: [] }),
  card("search", "검색 결과"),
];


describe("groups (핵심 화면 · 상태 · 이 서비스의 화면)", () => {
  it("puts a state, an error or a pop-up in 상태, the six core types in 핵심 화면, the rest in 이 서비스의 화면", () => {
    expect(groupOf({ type: "홈", state: null })).toBe("core");
    expect(groupOf({ type: "검색 결과", state: "빈 상태" })).toBe("states");
    expect(groupOf({ type: "오류", state: null })).toBe("states");
    expect(groupOf({ type: "팝업", state: null })).toBe("states");
    expect(groupOf({ type: "이벤트", state: null })).toBe("more");
  });
  it("orders groups core, states, more, drops empty ones, keeps the walk's order inside", () => {
    expect(groupCards(cards).map((g) => [g.id, g.cards.map((c) => c.key)])).toEqual([
      ["core", ["home", "detail", "search"]],
      ["states", ["not-found", "search-empty"]],
      ["more", ["event"]],
    ]);
    expect(groupCards([card("event", "이벤트")]).map((g) => g.id)).toEqual(["more"]);
  });
});

describe("black and white", () => {
  it("are recognised in any spelling (the colour counts leave them out)", () => {
    expect(["#000", "#000000", "#FFFFFF", " #fff "].every(isBlackOrWhite)).toBe(true);
    expect(isBlackOrWhite("#111111")).toBe(false);
  });
});

describe("one device at a time", () => {
  it("names a width by its device: under 1024 is mobile", () => {
    expect([deviceOf(390), deviceOf(1023), deviceOf(1024), deviceOf(1440)]).toEqual(["mobile", "mobile", "desktop", "desktop"]);
  });
  it("takes the still of the chosen device and never the other's", () => {
    const c = cards[0];
    expect(stillOn(c, "desktop")?.width).toBe(1440);
    expect(stillOn(c, "mobile")?.width).toBe(390);
    const one = card("x", "홈", { stills: [{ width: 1440, still: "/s/x.jpg", thumb: null, full: null }] });
    expect(stillOn(one, "mobile")).toBeNull();
  });
  it("a device shows the screens with a still on it, and the blocked ones, which say so on either device", () => {
    const one = card("x", "홈", { stills: [{ width: 1440, still: "/s/x.jpg", thumb: null, full: null }] });
    const list = [...cards, one];
    expect(cardsOn(list, "mobile").map((c) => c.key)).toEqual(["home", "event", "not-found", "search-empty", "detail", "search"]);
    expect(cardsOn(list, "desktop").map((c) => c.key)).toContain("x");
    expect(devicesOf(list)).toEqual(["mobile", "desktop"]);
    expect(devicesOf([one])).toEqual(["desktop"]);
  });
  it("the dialog walks the shown cards in display order and skips a blocked one", () => {
    expect(dialogSequence(cards).map((c) => c.key)).toEqual(["home", "search", "not-found", "search-empty", "event"]);
  });
});
