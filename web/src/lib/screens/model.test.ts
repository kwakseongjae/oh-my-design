import { describe, expect, it } from "vitest";
import {
  cardChips,
  dialogSequence,
  filterCards,
  groupCards,
  groupOf,
  insetStill,
  isBlackOrWhite,
  leadStill,
  type ScreenCard,
  type ScreenColor,
} from "./model";

const card = (key: string, type: string, extra: Partial<ScreenCard> = {}): ScreenCard => ({
  key,
  type,
  title: key,
  state: null,
  blocked: false,
  masked: false,
  stills: [
    { width: 1440, still: `/s/1440-${key}.jpg`, full: null },
    { width: 390, still: `/s/390-${key}.jpg`, full: null },
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

const colors: ScreenColor[] = [
  { token: "primary", value: "#ff4800", screens: ["home", "event", "search"] },
  { token: "ink", value: "#000000", screens: ["home", "event", "search", "not-found"] },
  { token: "canvas", value: "#FFF", screens: ["home"] },
  { token: "a", value: "#111111", screens: ["home"] },
  { token: "b", value: "#222222", screens: ["home"] },
  { token: "c", value: "#333333", screens: ["home"] },
  { token: "focus", value: "#375fff", screens: [] },
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

describe("card chips", () => {
  it("leaves out black and white in any spelling", () => {
    expect(["#000", "#000000", "#FFFFFF", " #fff "].every(isBlackOrWhite)).toBe(true);
    expect(isBlackOrWhite("#111111")).toBe(false);
  });
  it("takes up to four tokens drawn on the screen, in the DESIGN.md's order", () => {
    expect(cardChips("home", colors).map((c) => c.token)).toEqual(["primary", "a", "b", "c"]);
    expect(cardChips("not-found", colors)).toEqual([]);
    expect(cardChips("home", colors, 2).map((c) => c.token)).toEqual(["primary", "a"]);
  });
});

describe("token filter", () => {
  it("keeps every card with no filter and with an unknown token", () => {
    expect(filterCards(cards, colors, null)).toBe(cards);
    expect(filterCards(cards, colors, "nope")).toBe(cards);
  });
  it("keeps the screens the token was drawn on, in their order", () => {
    expect(filterCards(cards, colors, "primary").map((c) => c.key)).toEqual(["home", "event", "search"]);
    expect(filterCards(cards, colors, "ink").map((c) => c.key)).toEqual(["home", "event", "not-found", "search"]);
  });
  it("keeps nothing for a token never drawn (the panel does not offer it as a filter)", () => {
    expect(filterCards(cards, colors, "focus")).toEqual([]);
  });
  it("cleared, every card comes back", () => {
    const filtered = filterCards(cards, colors, "primary");
    expect(filtered.length).toBeLessThan(cards.length);
    expect(filterCards(cards, colors, null)).toEqual(cards);
  });
});

describe("stills and the dialog", () => {
  it("leads with the chosen width and lays the other over it", () => {
    const c = cards[0];
    expect(leadStill(c, 1440)?.width).toBe(1440);
    expect(insetStill(c, 1440)?.width).toBe(390);
    expect(leadStill(c, 390)?.width).toBe(390);
    expect(insetStill(c, 390)?.width).toBe(1440);
  });
  it("falls back to the one width a screen has, with no inset", () => {
    const one = card("x", "홈", { stills: [{ width: 1440, still: "/s/x.jpg", full: null }] });
    expect(leadStill(one, 390)?.width).toBe(1440);
    expect(insetStill(one, 390)).toBeNull();
  });
  it("walks the shown cards in display order and skips a blocked one", () => {
    expect(dialogSequence(cards).map((c) => c.key)).toEqual(["home", "search", "not-found", "search-empty", "event"]);
    expect(dialogSequence(filterCards(cards, colors, "primary")).map((c) => c.key)).toEqual(["home", "search", "event"]);
  });
});
