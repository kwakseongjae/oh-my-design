/**
 * Words of the /screens gallery and the landing section that leads to it, in English and Korean (합니다체, plain).
 * The screens' own titles stay as shot (Korean, lang="ko"); the walk's screen types are Korean vocabulary, named in
 * English on the English page through the Screens tab's table (ITEM_EN.screens.typeName).
 */

import { ITEM_EN, ITEM_KO } from "@/components/brand-a/copy/item";
import type { FixedShelfId } from "@/lib/screens/model";
import type { ScreenDialogLabels } from "@/components/item/screen-dialog";

export type ScreensLocale = "en" | "ko";

export const SCREENS_PATH: Record<ScreensLocale, string> = { en: "/screens", ko: "/ko/screens" };

export interface GalleryCopy {
  meta: { title: string; description: string };
  h1: string;
  facts: (services: number, screens: number, shot: { from: string; to: string } | null, signedOut: boolean) => string;
  dotsNote: string;
  modeLabel: string;
  byType: string;
  byService: string;
  widthLabel: string;
  widthName: (w: number) => string;
  railTypes: string;
  railServices: string;
  shelfName: Record<FixedShelfId, string>;
  more: string;
  typeName: (type: string) => string;
  shelfMeta: (screens: number, services: number) => string;
  serviceMeta: (screens: number) => string;
  all: string;
  fold: string;
  scrollPrev: (shelf: string) => string;
  scrollNext: (shelf: string) => string;
  rowLabel: (shelf: string) => string;
  tile: (name: string, title: string) => string;
  dots: (tokens: string[]) => string;
  designMd: (name: string) => string;
  allOfService: (name: string) => string;
  dialog: ScreenDialogLabels;
}

const koDate = (d: string) => {
  const [y, m, day] = d.split("-").map(Number);
  return `${y}년 ${m}월 ${day}일`;
};

const EN: GalleryCopy = {
  meta: {
    title: "Korean product screens",
    description: "Screens of Korean services side by side by screen type, each with the colors of that company's DESIGN.md drawn on it.",
  },
  h1: "Korean product screens",
  facts: (n, total, shot, signedOut) =>
    [
      `${n} services`,
      `${total} screens`,
      shot ? (shot.from === shot.to ? `shot on ${shot.from}` : `shot ${shot.from} to ${shot.to}`) : null,
      signedOut ? "signed out" : null,
    ]
      .filter(Boolean)
      .join(" · "),
  dotsNote: "The dots on each screen are the colors of that company's DESIGN.md drawn on it.",
  modeLabel: "Group screens",
  byType: "By screen type",
  byService: "By service",
  widthLabel: "Width",
  widthName: (w) => (w >= 1024 ? `Web ${w}` : `Phone ${w}`),
  railTypes: "Screen types",
  railServices: "Services",
  shelfName: { home: "Home", results: "Search results", list: "List", detail: "Detail", login: "Sign-in", empty: "Empty state", notfound: "Not found" },
  more: "Other screens",
  typeName: ITEM_EN.screens.typeName,
  shelfMeta: (s, n) => `${s === 1 ? "1 screen" : `${s} screens`} · ${n === 1 ? "1 service" : `${n} services`}`,
  serviceMeta: (s) => (s === 1 ? "1 screen" : `${s} screens`),
  all: "Show all",
  fold: "Show fewer",
  scrollPrev: (shelf) => `Scroll ${shelf} back`,
  scrollNext: (shelf) => `Scroll ${shelf} forward`,
  rowLabel: (shelf) => `${shelf} screens`,
  tile: (name, title) => `${name}, ${title}`,
  dots: (tokens) => `DESIGN.md colors on this screen: ${tokens.join(", ")}`,
  designMd: (name) => `${name} DESIGN.md`,
  allOfService: (name) => `All ${name} screens`,
  dialog: { counter: ITEM_EN.screens.counter, prev: ITEM_EN.screens.prev, next: ITEM_EN.screens.next, close: ITEM_EN.screens.close, fullAlt: ITEM_EN.screens.fullAlt },
};

const KO: GalleryCopy = {
  meta: {
    title: "한국 서비스 화면",
    description: "한국 서비스의 화면을 종류별로 나란히 놓았습니다. 화면마다 그 회사 DESIGN.md의 색이 그려진 곳이 붙어 있습니다.",
  },
  h1: "한국 서비스 화면",
  facts: (n, total, shot, signedOut) =>
    [
      `${n}곳`,
      `화면 ${total}개`,
      shot ? (shot.from === shot.to ? `${koDate(shot.from)} 촬영` : `${koDate(shot.from)}~${koDate(shot.to)} 촬영`) : null,
      signedOut ? "로그아웃 상태" : null,
    ]
      .filter(Boolean)
      .join(" · "),
  dotsNote: "화면마다 붙은 점은 그 회사 DESIGN.md의 색 가운데 그 화면에 그려진 색입니다.",
  modeLabel: "묶는 방법",
  byType: "화면 종류별",
  byService: "서비스별",
  widthLabel: "폭",
  widthName: (w) => (w >= 1024 ? `웹 ${w}` : `폰 ${w}`),
  railTypes: "화면 종류",
  railServices: "서비스",
  shelfName: { home: "홈", results: "검색 결과", list: "목록", detail: "상세", login: "로그인", empty: "빈 상태", notfound: "없는 주소" },
  more: "그 밖의 화면",
  typeName: ITEM_KO.screens.typeName,
  shelfMeta: (s, n) => `화면 ${s}개 · ${n}곳`,
  serviceMeta: (s) => `화면 ${s}개`,
  all: "모두 보기",
  fold: "접기",
  scrollPrev: (shelf) => `${shelf} 앞으로 넘기기`,
  scrollNext: (shelf) => `${shelf} 뒤로 넘기기`,
  rowLabel: (shelf) => `${shelf} 화면`,
  tile: (name, title) => `${name}, ${title}`,
  dots: (tokens) => `이 화면에 그려진 DESIGN.md 색: ${tokens.join(", ")}`,
  designMd: (name) => `${name} DESIGN.md`,
  allOfService: (name) => `${name} 화면 모두`,
  dialog: { counter: ITEM_KO.screens.counter, prev: ITEM_KO.screens.prev, next: ITEM_KO.screens.next, close: ITEM_KO.screens.close, fullAlt: ITEM_KO.screens.fullAlt },
};

export const GALLERY_COPY: Record<ScreensLocale, GalleryCopy> = { en: EN, ko: KO };

/** The landing section. Strings only: they cross to the client row. */
export interface LandingScreensCopy {
  kicker: string;
  h2: string;
  lede: string;
  chips: string;
  cta: string;
}

export function landingScreensCopy(locale: ScreensLocale, services: number, screens: number): LandingScreensCopy {
  return locale === "ko"
    ? {
        kicker: "화면",
        h2: `같은 화면, ${services}곳`,
        lede: `한국 서비스 ${services}곳의 홈, 검색 결과, 상세, 로그인 화면을 나란히 놓았습니다. 화면마다 그 회사 DESIGN.md의 색이 그려진 곳이 붙어 있어, 값과 화면을 오가며 볼 수 있습니다.`,
        chips: "화면 종류",
        cta: `화면 ${screens}개 모두 보기`,
      }
    : {
        kicker: "Screens",
        h2: `The same screens, ${services} services`,
        lede: `Home, search results, detail and sign-in screens of ${services} Korean services, side by side. Each screen carries the colors of that company's DESIGN.md drawn on it, so you can move between the values and the screens.`,
        chips: "Screen type",
        cta: `See all ${screens} screens`,
      };
}
