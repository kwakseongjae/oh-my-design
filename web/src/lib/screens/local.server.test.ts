import { afterAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { readScreens, resolveScreenImage, screensRoot } from "./local.server";
import { makeGalleryFixture, makeScreensFixture } from "./test-fixture";

const fx = makeScreensFixture();
afterAll(fx.cleanup);
const on = { OMD_SCREENS_DIR: fx.root, NODE_ENV: "development" };

describe("screensRoot (the gate the reader and the image route share)", () => {
  it("is shut when OMD_SCREENS_DIR is unset or empty", () => {
    expect(screensRoot({ NODE_ENV: "development" })).toBeNull();
    expect(screensRoot({ OMD_SCREENS_DIR: "  ", NODE_ENV: "development" })).toBeNull();
  });
  it("is shut when the folder does not exist", () => {
    expect(screensRoot({ OMD_SCREENS_DIR: path.join(fx.root, "nope"), NODE_ENV: "development" })).toBeNull();
  });
  it("is shut in production unless OMD_SCREENS_ALLOW=1", () => {
    expect(screensRoot({ OMD_SCREENS_DIR: fx.root, NODE_ENV: "production" })).toBeNull();
    expect(screensRoot({ OMD_SCREENS_DIR: fx.root, NODE_ENV: "production", OMD_SCREENS_ALLOW: "true" })).toBeNull();
    expect(screensRoot({ OMD_SCREENS_DIR: fx.root, NODE_ENV: "production", OMD_SCREENS_ALLOW: "1" })).toBe(fx.root);
  });
  it("is open in development with a real folder", () => {
    expect(screensRoot(on)).toBe(fx.root);
  });
});

describe("readScreens", () => {
  it("returns null with no data: gate shut, unknown reference, unsafe id", () => {
    expect(readScreens("acme", { NODE_ENV: "development" })).toBeNull();
    expect(readScreens("acme", { OMD_SCREENS_DIR: fx.root, NODE_ENV: "production" })).toBeNull();
    expect(readScreens("toss", on)).toBeNull();
    expect(readScreens("../acme", on)).toBeNull();
  });

  const model = readScreens("acme", on)!;

  it("folds widths into one card per key, keeps the walk's order, drops a screen with no still and an unsafe key", () => {
    expect(model.cards.map((c) => c.key)).toEqual(["home", "search-empty", "detail", "event"]);
    expect(model.widths).toEqual([1440, 390]);
    expect(model.shot).toBe("2026-11-21");
    expect(model.signedOut).toBe(true);
  });

  it("serves stills through the local route and names a full page only where one exists", () => {
    const home = model.cards.find((c) => c.key === "home")!;
    expect(home.stills).toEqual([
      { width: 1440, still: "/screens-local/acme/1440-home.jpg", thumb: null, full: "/screens-local/acme/1440-home.full.jpg" },
      { width: 390, still: "/screens-local/acme/390-home.jpg", thumb: null, full: null },
    ]);
    expect(model.cards.find((c) => c.key === "search-empty")!.state).toBe("빈 상태");
  });

  it("gives a blocked screen no image even though its 403 page is on disk", () => {
    const detail = model.cards.find((c) => c.key === "detail")!;
    expect(detail.blocked).toBe(true);
    expect(detail.stills).toEqual([]);
  });

  it("lists comparable colours with the shown screens they were drawn on, and the count beyond black and white", () => {
    expect(model.colors).toEqual([
      { token: "primary", value: "#ff4800", screens: ["home", "event"] },
      { token: "ink", value: "#000000", screens: ["home", "search-empty", "event"] },
      { token: "focus", value: "#375fff", screens: [] },
    ]);
    expect(model.colorCount).toEqual({ matched: 1, comparable: 2 });
  });

  it("hands the client none of the walk's raw text", () => {
    expect(JSON.stringify(model)).not.toContain("must not reach the client");
  });
});

describe("resolveScreenImage (the traversal guard)", () => {
  const img = path.join(fx.root, "acme", "img");
  it("resolves a still and a full page inside <dir>/<slug>/img", () => {
    expect(resolveScreenImage("acme", "1440-home.jpg", on)).toBe(path.join(img, "1440-home.jpg"));
    expect(resolveScreenImage("acme", "1440-home.full.jpg", on)).toBe(path.join(img, "1440-home.full.jpg"));
  });
  it("refuses everything while the gate is shut", () => {
    expect(resolveScreenImage("acme", "1440-home.jpg", { NODE_ENV: "development" })).toBeNull();
    expect(resolveScreenImage("acme", "1440-home.jpg", { OMD_SCREENS_DIR: fx.root, NODE_ENV: "production" })).toBeNull();
  });
  it.each([
    ["acme", "../screens.json"],
    ["acme", "../../secret.jpg"],
    ["acme", "..%2F..%2Fsecret.jpg"],
    ["acme", "../x.jpg"],
    ["acme", "img/1440-home.jpg"],
    ["acme", "1440-home.jpg/"],
    ["acme", "notes.txt"],
    ["acme", "1440-home.png"],
    ["acme", "1440-missing.jpg"],
    ["acme", "1440-link.jpg"],
    ["..", "secret.jpg"],
    ["..", "1440-home.jpg"],
    ["acme/..", "1440-home.jpg"],
    ["acme%2F..", "1440-home.jpg"],
    [".", "1440-home.jpg"],
    ["", "1440-home.jpg"],
  ])("refuses slug %j file %j", (slug, file) => {
    expect(resolveScreenImage(slug, file, on)).toBeNull();
  });
  it("refuses a slug folder that is a symlink out of the root", () => {
    const outside = fs.mkdtempSync(path.join(path.dirname(fx.root), "omd-outside-"));
    fs.mkdirSync(path.join(outside, "img"));
    fs.writeFileSync(path.join(outside, "img", "1440-home.jpg"), "x");
    fs.symlinkSync(outside, path.join(fx.root, "linked"));
    try {
      expect(resolveScreenImage("linked", "1440-home.jpg", on)).toBeNull();
    } finally {
      fs.rmSync(outside, { recursive: true, force: true });
    }
  });
});

describe("withheld screens (users' posts, photos or reviews: never shown off this machine)", () => {
  const held = makeGalleryFixture([{ slug: "acme", withheld: ["home", "event"] }]);
  afterAll(held.cleanup);
  const env = { OMD_SCREENS_DIR: held.root, NODE_ENV: "development" };
  const m = readScreens("acme", env)!;

  it("leaves out every width of a withheld screen, though its stills are on disk", () => {
    expect(m.cards.map((c) => c.key)).toEqual(["search-empty", "detail"]);
    expect(JSON.stringify(m)).not.toMatch(/1440-home|390-home|1440-event/);
  });

  it("a colour seen only on withheld screens counts as not seen, and the count is taken again, not from the sheet's summary", () => {
    expect(m.colors.find((c) => c.token === "primary")!.screens).toEqual([]);
    expect(m.colors.find((c) => c.token === "ink")!.screens).toEqual(["search-empty"]);
    // the sheet says 1 of 2; without home and event, primary is on no screen left
    expect(m.colorCount).toEqual({ matched: 0, comparable: 2 });
  });

  it("the image route will not serve a withheld screen's stills by URL; the others still resolve", () => {
    expect(resolveScreenImage("acme", "1440-home.jpg", env)).toBeNull();
    expect(resolveScreenImage("acme", "1440-home.full.jpg", env)).toBeNull();
    expect(resolveScreenImage("acme", "390-home.jpg", env)).toBeNull();
    expect(resolveScreenImage("acme", "1440-event.jpg", env)).toBeNull();
    expect(resolveScreenImage("acme", "390-search-empty.jpg", env)).toBe(path.join(held.root, "acme", "img", "390-search-empty.jpg"));
  });

  it("only a non-empty reason withholds; one withheld width takes the whole screen", () => {
    const dir = path.join(held.root, "acme");
    const walk = JSON.parse(fs.readFileSync(path.join(dir, "screens.json"), "utf8"));
    for (const r of walk.records) {
      if (r.key === "home" || r.key === "event") delete r.withheld;
      if (r.key === "home") r.withheld = "  ";
      if (r.key === "search-empty" && r.width === 390) r.withheld = "reviews";
    }
    fs.writeFileSync(path.join(dir, "screens.json"), JSON.stringify(walk));
    expect(readScreens("acme", env)!.cards.map((c) => c.key)).toEqual(["home", "detail", "event"]);
  });
});

describe("small renditions (web/scripts/publish-screens.mjs writes them next to the stills)", () => {
  const sm = makeGalleryFixture([{ slug: "karrot", withheld: ["event"] }]);
  afterAll(sm.cleanup);
  const env = { OMD_SCREENS_DIR: sm.root, NODE_ENV: "development" };
  const img = path.join(sm.root, "karrot", "img");
  fs.writeFileSync(path.join(img, "390-home.thumb.jpg"), "thumb:390-home");
  fs.writeFileSync(path.join(img, "1440-event.thumb.jpg"), "thumb:1440-event");

  it("the reader names one only where it exists", () => {
    const home = readScreens("karrot", env)!.cards.find((c) => c.key === "home")!;
    expect(home.stills.map((s) => s.thumb)).toEqual([null, "/screens-local/karrot/390-home.thumb.jpg"]);
  });
  it("the image route answers with the rendition, or with the still when none was made", () => {
    expect(resolveScreenImage("karrot", "390-home.thumb.jpg", env)).toBe(path.join(img, "390-home.thumb.jpg"));
    expect(resolveScreenImage("karrot", "1440-home.thumb.jpg", env)).toBe(path.join(img, "1440-home.jpg"));
    expect(resolveScreenImage("karrot", "390-ghost.thumb.jpg", env)).toBeNull();
  });
  it("never a withheld screen's rendition, even when one is on disk", () => {
    expect(resolveScreenImage("karrot", "1440-event.thumb.jpg", env)).toBeNull();
    expect(resolveScreenImage("karrot", "1440-event.jpg", env)).toBeNull();
  });
});
