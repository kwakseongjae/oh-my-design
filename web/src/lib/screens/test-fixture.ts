import fs from "node:fs";
import os from "node:os";
import path from "node:path";

/** A synthetic screens folder (never real screens): one service, "acme" by default, with five keys at two widths. */
export function makeScreensFixture(slug = "acme"): { root: string; cleanup: () => void } {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "omd-screens-")));
  const dir = path.join(root, slug);
  fs.mkdirSync(path.join(dir, "img"), { recursive: true });
  const rec = (key: string, type: string, width: number, extra: Record<string, unknown> = {}) => ({
    key, type, title: type + " 화면", state: null, width, blocked: false, textHead: "long text that must not reach the client", ...extra,
  });
  const records = [
    rec("home", "홈", 1440), rec("home", "홈", 390),
    rec("search-empty", "검색 결과", 1440, { state: "빈 상태" }), rec("search-empty", "검색 결과", 390, { state: "빈 상태" }),
    rec("detail", "상세", 1440, { blocked: true }), rec("detail", "상세", 390, { blocked: true }),
    rec("event", "이벤트", 1440),
    rec("ghost", "목록", 1440),
    rec("../evil", "홈", 1440),
  ];
  fs.writeFileSync(path.join(dir, "screens.json"), JSON.stringify({ slug, shot: "20261121", browser: "chromium headless, fresh profile, signed out", records }));
  fs.writeFileSync(path.join(dir, "tokens.json"), JSON.stringify({
    colors: [
      { token: "primary", value: "#ff4800", comparable: true, hits: 4, screens: ["home", "event", "detail"] },
      { token: "ink", value: "#000000", comparable: true, hits: 9, screens: ["home", "search-empty", "event"] },
      { token: "focus", value: "#375fff", comparable: true, hits: 0, screens: [] },
      { token: "gradient", value: "linear-gradient(red, blue)", comparable: false, hits: 0, screens: [] },
    ],
    summary: { colors: { matched: 2, comparable: 3, matchedBeyondBlackWhite: 1, comparableBeyondBlackWhite: 2 } },
  }));
  // ghost has no still on disk; detail is blocked yet has its 403 page on disk, as real walks do.
  for (const f of ["1440-home.jpg", "1440-home.full.jpg", "390-home.jpg", "1440-search-empty.jpg", "390-search-empty.jpg", "390-search-empty.full.jpg", "1440-detail.jpg", "390-detail.jpg", "1440-event.jpg"]) {
    fs.writeFileSync(path.join(dir, "img", f), "jpg:" + f);
  }
  fs.writeFileSync(path.join(dir, "img", "notes.txt"), "not an image");
  fs.writeFileSync(path.join(root, "secret.jpg"), "outside");
  fs.symlinkSync(path.join(root, "secret.jpg"), path.join(dir, "img", "1440-link.jpg"));
  return { root, cleanup: () => fs.rmSync(root, { recursive: true, force: true }) };
}
