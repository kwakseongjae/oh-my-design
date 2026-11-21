import { afterAll, describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { readScreens, resolveScreenImage, screensRoot } from "./local.server";
import { makeScreensFixture } from "./test-fixture";

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
      { width: 1440, still: "/screens-local/acme/1440-home.jpg", full: "/screens-local/acme/1440-home.full.jpg" },
      { width: 390, still: "/screens-local/acme/390-home.jpg", full: null },
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
