import { afterAll, afterEach, describe, expect, it, vi } from "vitest";
import fs from "node:fs";
import { listScreens } from "./local.server";
import { readGallery, readServiceScreens, screenServiceIds } from "./gallery.server";
import { makeGalleryFixture } from "./test-fixture";
import { logoFor } from "@/app/(en)/design-systems/archive-rows.server";

/** The gallery's reader: the same gate as the Screens tab, every service with a walk, registry names and links. */

// These read a local folder or nothing: pin the committed manifest to the shut state so a published one changes nothing here.
vi.mock("@/data/screens-public.generated.json", () => ({ default: { generated: "", base: "", services: [] } }));

const fx = makeGalleryFixture([
  { slug: "karrot", platform: "both", withheld: ["event"] },
  { slug: "wanted", platform: "web", tokens: false },
  { slug: "29cm", platform: "both" },
  { slug: "not-a-reference", platform: "both" },
]);
afterAll(fx.cleanup);
afterEach(() => vi.restoreAllMocks());
const on = { OMD_SCREENS_DIR: fx.root, NODE_ENV: "development" };

describe("listScreens", () => {
  it("is null with the gate shut, and reads nothing from disk then", () => {
    const readdir = vi.spyOn(fs, "readdirSync");
    const real = vi.spyOn(fs, "realpathSync");
    expect(listScreens({ NODE_ENV: "development" })).toBeNull();
    expect(listScreens({ OMD_SCREENS_DIR: fx.root, NODE_ENV: "production" })).toBeNull();
    expect(readdir).not.toHaveBeenCalled();
    expect(real).not.toHaveBeenCalled();
    // the spies do see the reader's calls: the same call with the gate open reads the folder
    listScreens(on);
    expect(readdir).toHaveBeenCalled();
  });
  it("lists every folder with a walk, by folder name; a folder with no walk and a stray file are not services", () => {
    expect(listScreens(on)!.map((m) => m.slug)).toEqual(["29cm", "karrot", "not-a-reference", "wanted"]);
    expect(listScreens(on)!.find((m) => m.slug === "wanted")!.platform).toBe("web");
  });
  it("is null when no folder holds a walk", () => {
    const empty = makeGalleryFixture([]);
    try {
      expect(listScreens({ OMD_SCREENS_DIR: empty.root, NODE_ENV: "development" })).toBeNull();
    } finally {
      empty.cleanup();
    }
  });
});

describe("readGallery", () => {
  it("is null with the gate shut", () => {
    expect(readGallery("ko", { NODE_ENV: "development" })).toBeNull();
    expect(readGallery("en", { OMD_SCREENS_DIR: fx.root, NODE_ENV: "production" })).toBeNull();
  });

  const ko = readGallery("ko", on)!;
  const en = readGallery("en", on)!;

  it("leaves out a walk with no reference behind it; names come from the registry", () => {
    expect(ko.services.map((s) => s.name)).toEqual(["29CM", "당근", "원티드"]);
    expect(en.services.map((s) => s.name)).toEqual(["29CM", "Karrot", "Wanted"]);
    expect(ko.shots.some((s) => s.slug === "not-a-reference")).toBe(false);
  });

  it("links each service to its DESIGN.md page and to its screens page in the page's language", () => {
    expect(ko.services.find((s) => s.slug === "karrot")!.href).toBe("/ko/design-systems/karrot");
    expect(en.services.find((s) => s.slug === "karrot")!.href).toBe("/design-systems/karrot");
    expect(ko.services.find((s) => s.slug === "karrot")!.screensHref).toBe("/ko/screens/karrot");
    expect(en.services.find((s) => s.slug === "karrot")!.screensHref).toBe("/screens/karrot");
    expect(ko.services.find((s) => s.slug === "karrot")!.devices).toEqual(["mobile", "desktop"]);
  });

  it("keeps only screens with a still: blocked and still-less screens are not shown or counted", () => {
    expect(ko.shots.filter((s) => s.slug === "karrot").map((s) => s.key)).toEqual(["home", "search-empty"]);
    expect(ko.services.find((s) => s.slug === "karrot")!.count).toBe(2);
  });

  it("leaves out withheld screens, and they are in no count (karrot's event is withheld)", () => {
    expect(ko.shots.some((s) => s.slug === "karrot" && s.key === "event")).toBe(false);
    expect(ko.shots.filter((s) => s.slug === "29cm").map((s) => s.key)).toEqual(["home", "search-empty", "event"]);
    expect(ko.shots).toHaveLength(8);
  });

  it("country and category from the registry, named as the archive names them; the logo is the archive's", () => {
    const karrot = ko.services.find((s) => s.slug === "karrot")!;
    expect(karrot).toMatchObject({ country: "KR", category: "consumer-tech", categoryName: "컨슈머 테크" });
    expect(en.services.find((s) => s.slug === "karrot")!.categoryName).toBe("Consumer tech");
    expect(ko.services.find((s) => s.slug === "29cm")!.categoryName).toBe("커머스");
    expect(karrot.logo).toEqual(logoFor("karrot"));
    // only values that have screens, the most common first
    expect(ko.countries).toEqual([{ value: "KR", label: "한국" }]);
    expect(en.countries).toEqual([{ value: "KR", label: "Korea" }]);
    expect(ko.categories.map((c) => c.value).sort()).toEqual(["consumer-tech", "ecommerce", "productivity"]);
  });

  it("carries the dates for the rights line, signed out, and the devices with stills", () => {
    expect(ko.shot).toEqual({ from: "2026-11-21", to: "2026-11-21" });
    expect(ko.signedOut).toBe(true);
    expect(ko.devices).toEqual(["mobile", "desktop"]);
  });

  it("sends the client no walk text", () => {
    expect(JSON.stringify(ko)).not.toContain("long text that must not reach the client");
  });
});

describe("a service's screens page", () => {
  it("exists for every service of the gallery and no other id; none with the gate shut", () => {
    expect(screenServiceIds(on)).toEqual(["29cm", "karrot", "wanted"]);
    expect(screenServiceIds({ OMD_SCREENS_DIR: fx.root, NODE_ENV: "production" })).toEqual([]);
    expect(readServiceScreens("ko", "not-a-reference", on)).toBeNull();
    expect(readServiceScreens("ko", "nope", on)).toBeNull();
  });
  it("carries every card of the walk but the withheld ones (blocked ones say so), both names, and similar services", () => {
    const m = readServiceScreens("ko", "karrot", on)!;
    expect(m.cards.map((c) => [c.key, c.blocked])).toEqual([
      ["home", false],
      ["search-empty", false],
      ["detail", true],
    ]);
    expect(m.names).toEqual({ en: "Karrot", ko: "당근" });
    expect(m.service.screensHref).toBe("/ko/screens/karrot");
    expect(m.similar.map((s) => s.service.slug)).toEqual(["29cm", "wanted"]);
    expect(m.similar[0].shots.every((s) => s.slug === "29cm")).toBe(true);
    expect(JSON.stringify(m)).not.toContain("long text that must not reach the client");
  });
});
