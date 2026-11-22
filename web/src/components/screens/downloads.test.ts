import { describe, expect, it } from "vitest";
import { unzipSync } from "fflate";
import { allZipName, fetchItems, readmeText, screenFileName, typeZipName, zipBytes } from "./downloads";

/** Downloads of a service's screens: stable ASCII names, the README every zip carries, partial fetches, the zip. */

const facts = {
  names: { en: "Karrot", ko: "당근" },
  urls: { en: "https://oh-my-design.kr/screens/karrot", ko: "https://oh-my-design.kr/ko/screens/karrot" },
  shot: "2026-11-22",
  signedOut: true,
  masked: ["karrot-mobile-home-home.jpg"],
  slug: "karrot",
};

describe("names", () => {
  it("are ASCII: <service>-<device>-<type>-<key>.jpg, and the two zips", () => {
    expect(screenFileName("karrot", "mobile", "검색 결과", "search-empty")).toBe("karrot-mobile-search-results-search-empty.jpg");
    expect(screenFileName("29cm", "desktop", "화면", "salary")).toBe("29cm-desktop-other-salary.jpg");
    expect(typeZipName("karrot", "홈", "desktop")).toBe("karrot-home-desktop.zip");
    expect(allZipName("karrot")).toBe("karrot-screens.zip");
    for (const n of [screenFileName("a", "mobile", "새로운 종류", "x"), typeZipName("a", "새로운 종류", "mobile")]) expect(n).toMatch(/^[\x20-\x7e]+$/);
  });
});

describe("README.txt", () => {
  const text = readmeText(facts, "");
  it("says whose the screens are, where and when they were shot, who was hidden, and how to ask for a takedown, in Korean and English", () => {
    expect(text).toContain("화면의 권리는 각 회사에 있습니다. 이 묶음에는 당근의 화면이 들어 있습니다.");
    expect(text).toContain("출처: https://oh-my-design.kr/ko/screens/karrot");
    expect(text).toContain("찍은 때: 2026년 11월 22일, 로그아웃 상태");
    expect(text).toContain("닉네임과 올린 사진을 가린 화면: karrot-mobile-home-home.jpg");
    expect(text).toContain("화면을 내려 달라는 요청: https://github.com/kwakseongjae/oh-my-design/issues/new?template=screen-removal.yml&service=karrot");
    expect(text).toContain("Each screen belongs to its company. This set holds screens of Karrot.");
    expect(text).toContain("Source: https://oh-my-design.kr/screens/karrot");
    expect(text).toContain("Shot: 2026-11-22, signed out");
    expect(text).toContain("Nicknames and uploaded photos hidden in: karrot-mobile-home-home.jpg");
    expect(text.indexOf("[") === -1 && text.indexOf("undefined") === -1).toBe(true);
  });
  it("leaves out what is not known: no date, not signed out, nobody hidden", () => {
    const bare = readmeText({ ...facts, shot: null, signedOut: false, masked: [] }, "");
    expect(bare).not.toMatch(/찍은 때|Shot:|가린 화면|hidden in/);
    expect(readmeText({ ...facts, shot: null }, "")).toContain("찍은 때: 로그아웃 상태");
  });
  it("names the e-mail once there is one", () => {
    expect(readmeText(facts, "takedown@example.com")).toContain("service=karrot 또는 takedown@example.com");
  });
});

describe("fetching and zipping", () => {
  const items = [
    { url: "/s/a.jpg", path: "mobile/karrot-mobile-home-home.jpg", title: "홈" },
    { url: "/s/b.jpg", path: "mobile/karrot-mobile-list-list.jpg", title: "목록" },
    { url: "/s/gone.jpg", path: "mobile/karrot-mobile-detail-detail.jpg", title: "상세" },
  ];
  const fake = (async (url: string) =>
    url.includes("gone") ? new Response("no", { status: 404 }) : new Response(new Uint8Array([0xff, 0xd8, url.length]))) as unknown as typeof fetch;

  it("reports progress, keeps what arrived, and names what did not", async () => {
    const seen: number[] = [];
    const { files, missing } = await fetchItems(items, (d) => seen.push(d), fake);
    expect(Object.keys(files).sort()).toEqual(["mobile/karrot-mobile-home-home.jpg", "mobile/karrot-mobile-list-list.jpg"]);
    expect(missing.map((m) => m.title)).toEqual(["상세"]);
    expect(seen.sort()).toEqual([1, 2, 3]);
  });
  it("a zip holds README.txt and every file byte for byte, in its folders", async () => {
    const { files } = await fetchItems(items, () => {}, fake);
    const out = unzipSync(await zipBytes(files, "readme"));
    expect(Object.keys(out).sort()).toEqual(["README.txt", "mobile/karrot-mobile-home-home.jpg", "mobile/karrot-mobile-list-list.jpg"]);
    expect(new TextDecoder().decode(out["README.txt"])).toBe("readme");
    expect([...out["mobile/karrot-mobile-home-home.jpg"]]).toEqual([...files["mobile/karrot-mobile-home-home.jpg"]]);
  });
});
