import { afterAll, afterEach, describe, expect, it, vi } from "vitest";
import fs from "node:fs";
import { listScreens } from "./local.server";
import { readGallery } from "./gallery.server";
import { makeGalleryFixture } from "./test-fixture";

/** The gallery's reader: the same gate as the Screens tab, every service with a walk, registry names and links. */

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

  it("links each service to its DESIGN.md page in the page's language", () => {
    expect(ko.services.find((s) => s.slug === "karrot")!.href).toBe("/ko/design-systems/karrot");
    expect(en.services.find((s) => s.slug === "karrot")!.href).toBe("/design-systems/karrot");
  });

  it("keeps only screens with a still: blocked and still-less screens are not shelved", () => {
    expect(ko.shots.filter((s) => s.slug === "karrot").map((s) => s.key)).toEqual(["home", "search-empty"]);
    expect(ko.services.find((s) => s.slug === "karrot")!.count).toBe(2);
  });

  it("leaves out withheld screens, and they are in no count (karrot's event is withheld)", () => {
    expect(ko.shots.some((s) => s.slug === "karrot" && s.key === "event")).toBe(false);
    expect(ko.shots.filter((s) => s.slug === "29cm").map((s) => s.key)).toEqual(["home", "search-empty", "event"]);
    expect(ko.shots).toHaveLength(8);
  });

  it("dots only where the service has a token comparison (unknown means absent)", () => {
    expect(ko.shots.find((s) => s.slug === "karrot" && s.key === "home")!.dots).toEqual([{ token: "primary", value: "#ff4800" }]);
    expect(ko.shots.filter((s) => s.slug === "wanted").every((s) => s.dots.length === 0)).toBe(true);
  });

  it("carries the facts line: shooting dates, signed out, widths", () => {
    expect(ko.shot).toEqual({ from: "2026-11-21", to: "2026-11-21" });
    expect(ko.signedOut).toBe(true);
    expect(ko.widths).toEqual([1440, 390]);
  });

  it("sends the client no walk text", () => {
    expect(JSON.stringify(ko)).not.toContain("long text that must not reach the client");
  });
});
