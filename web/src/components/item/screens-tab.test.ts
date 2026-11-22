import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterAll, describe, expect, it } from "vitest";
import { ITEM_EN, ITEM_KO } from "@/components/brand-a/copy/item";
import { readScreens } from "@/lib/screens/local.server";
import { makeGalleryFixture } from "@/lib/screens/test-fixture";
import { ScreensTab } from "./screens-tab";

/** The item page's 서비스 화면 tab after round 2: one device at a time, named by word, and a link to the screens page. */

const fx = makeGalleryFixture([{ slug: "karrot", platform: "both" }]);
afterAll(fx.cleanup);
const model = readScreens("karrot", { OMD_SCREENS_DIR: fx.root, NODE_ENV: "development" })!;

describe("the 서비스 화면 tab", () => {
  const ko = renderToStaticMarkup(createElement(ScreensTab, { model, labels: ITEM_KO.screens, panelId: "p", pageHref: "/ko/screens/karrot" }));

  it("names the devices by word, never by width", () => {
    expect(ko).toMatch(/<div class="sq-scr-seg" role="group" aria-label="기기"><button type="button" aria-pressed="true">데스크톱<\/button><button type="button" aria-pressed="false">모바일<\/button><\/div>/);
    expect(ko).not.toMatch(/>[^<]*(390|1440)[^<]*</);
    const en = renderToStaticMarkup(createElement(ScreensTab, { model, labels: ITEM_EN.screens, panelId: "p", pageHref: "/screens/karrot" }));
    expect(en).toContain(">Desktop</button>");
    expect(en).toContain('<a class="sq-scr-page" href="/screens/karrot">Open the screens page');
  });
  it("shows only the chosen device's stills: no other width laid over them", () => {
    expect(ko).toContain('src="/screens-local/karrot/1440-home.jpg"');
    expect(ko).not.toContain("390-");
    expect(ko).not.toContain("sq-scr-inset");
  });
  it("links to the service's own screens page, and has no link when it has none", () => {
    expect(ko).toContain('<a class="sq-scr-page" href="/ko/screens/karrot">화면 페이지에서 보기');
    expect(renderToStaticMarkup(createElement(ScreensTab, { model, labels: ITEM_KO.screens, panelId: "p" }))).not.toContain("sq-scr-page");
  });
});
