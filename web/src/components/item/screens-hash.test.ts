import { describe, expect, it } from "vitest";
import { SCREENS_HASH, urlForView, viewForHash } from "./screens-hash";

/** The link the gallery's cards and the landing wall use: <item page>#screens opens the 서비스 화면 tab. */

type View = "preview" | "markdown" | "screens";
const at = (hash: string, current: View, fallback: View = "preview") => viewForHash<View>(hash, current, "screens", fallback);

describe("#screens", () => {
  it("opens the tab from any view", () => {
    expect(at(SCREENS_HASH, "preview")).toBe("screens");
    expect(at("#screens", "markdown")).toBe("screens");
  });
  it("#use and no hash leave the page's view alone, and bring the tab back to the default view", () => {
    expect(at("#use", "preview")).toBe("preview");
    expect(at("", "markdown")).toBe("markdown");
    expect(at("#use", "screens")).toBe("preview");
    expect(at("", "screens", "markdown")).toBe("markdown");
  });
  it("choosing the tab by hand puts #screens in the URL, leaving it takes it out; the path and query stay", () => {
    expect(urlForView(true, { pathname: "/ko/design-systems/karrot", search: "", hash: "" })).toBe("/ko/design-systems/karrot#screens");
    expect(urlForView(true, { pathname: "/design-systems/karrot", search: "?x=1", hash: "#use" })).toBe("/design-systems/karrot?x=1#screens");
    expect(urlForView(true, { pathname: "/design-systems/karrot", search: "", hash: "#screens" })).toBeNull();
    expect(urlForView(false, { pathname: "/design-systems/karrot", search: "", hash: "#screens" })).toBe("/design-systems/karrot");
    expect(urlForView(false, { pathname: "/design-systems/karrot", search: "", hash: "#use" })).toBeNull();
  });
});
