/**
 * Words of the /screens gallery and of the landing section that leads to it, in English and Korean (합니다체, plain).
 * The screens' own titles stay as shot (Korean). No country in a title or description: the country is a filter.
 * Plain strings and formatters only: the gallery and the wall are client components.
 */

import type { Device } from "@/lib/screens/model";
import { OTHER_TYPE } from "@/lib/screens/screen-types";
import { SCREENS_NOTICE, koDate, type ScreensNoticeCopy } from "./notice-copy";

export type ScreensLocale = "en" | "ko";

export const SCREENS_PATH: Record<ScreensLocale, string> = { en: "/screens", ko: "/ko/screens" };

/** One service's screens page: /screens/<id>, /ko/screens/<id>. */
export const screensServicePath = (locale: ScreensLocale, id: string): string => `${SCREENS_PATH[locale]}/${id}`;

/** The site header's link to the gallery, shown once screens are published (brand-a/site-header.tsx). */
export const SCREENS_NAV_LABEL: Record<ScreensLocale, string> = { en: "Screens", ko: "서비스 화면" };

/** The two devices, by name only: never 390 or 1440 on a page (owner, round 2: 「1440 같은 숫자는 빼줘」). */
export const DEVICE_NAME: Record<ScreensLocale, Record<Device, string>> = {
  en: { mobile: "Mobile", desktop: "Desktop" },
  ko: { mobile: "모바일", desktop: "데스크톱" },
};

/** English names of the walk's screen types; an unlisted type is shown as written. */
const SCREEN_TYPE_EN: Record<string, string> = {
  홈: "Home",
  검색: "Search",
  "검색 결과": "Search results",
  목록: "List",
  상세: "Detail",
  콘텐츠: "Content",
  이벤트: "Event",
  로그인: "Sign-in",
  회원가입: "Sign-up",
  고객센터: "Help",
  오류: "Error",
  피드: "Feed",
  장바구니: "Cart",
  팝업: "Pop-up",
  카테고리: "Category",
  커뮤니티: "Community",
  지도: "Map",
  좋아요: "Likes",
  프로필: "Profile",
};

/** A screen type's name on a page: the walk's word on Korean pages, its English name on English ones; the walk's
 *  catch-all 「화면」 is 기타 / Other (lib/screens/screen-types.ts). */
export function screenTypeName(locale: ScreensLocale, type: string): string {
  if (type === OTHER_TYPE) return locale === "ko" ? "기타" : "Other";
  return locale === "ko" ? type : (SCREEN_TYPE_EN[type] ?? type);
}

export interface GalleryCopy {
  meta: { title: string; description: string };
  h1: string;
  lede: string;
  /** The filter row's accessible name. */
  filters: string;
  country: string;
  device: string;
  category: string;
  type: string;
  all: string;
  deviceName: Record<Device, string>;
  typeName: (type: string) => string;
  /** The count at the right of the filter row. */
  count: (screens: number, services: number) => string;
  /** Under a card: the category, when the registry has one, and the service's screens. */
  cardMeta: (category: string | null, screens: number) => string;
  /** Nothing matches the filters. */
  empty: string;
  clear: string;
  /** The rights and takedown lines, shown once screens are published. */
  notice: ScreensNoticeCopy;
}

const EN: GalleryCopy = {
  meta: {
    title: "Product screens",
    description: "Screens of real products, gathered by service and by type. Each service's screens can be seen alongside its DESIGN.md.",
  },
  h1: "Product screens",
  lede: "Screens of real products, gathered by service and by type. Open a service to see its screens alongside its DESIGN.md.",
  filters: "Filters",
  country: "Country",
  device: "Device",
  category: "Category",
  type: "Type",
  all: "All",
  deviceName: DEVICE_NAME.en,
  typeName: (type) => screenTypeName("en", type),
  count: (s, n) => `${s === 1 ? "1 screen" : `${s} screens`} · ${n === 1 ? "1 service" : `${n} services`}`,
  cardMeta: (category, s) => [category, s === 1 ? "1 screen" : `${s} screens`].filter(Boolean).join(" · "),
  empty: "No screens match these filters.",
  clear: "Clear filters",
  notice: SCREENS_NOTICE.en,
};

const KO: GalleryCopy = {
  meta: {
    title: "서비스 화면",
    description: "실제 서비스의 화면을 서비스별, 종류별로 모았습니다. 서비스마다 화면과 DESIGN.md를 함께 볼 수 있습니다.",
  },
  h1: "서비스 화면",
  lede: "실제 서비스의 화면을 서비스별, 종류별로 모았습니다. 서비스를 누르면 그 서비스의 화면과 DESIGN.md를 함께 볼 수 있습니다.",
  filters: "필터",
  country: "나라",
  device: "기기",
  category: "분야",
  type: "종류",
  all: "전체",
  deviceName: DEVICE_NAME.ko,
  typeName: (type) => screenTypeName("ko", type),
  count: (s, n) => `화면 ${s}개 · 서비스 ${n}곳`,
  cardMeta: (category, s) => [category, `화면 ${s}개`].filter(Boolean).join(" · "),
  empty: "이 조건에 맞는 화면이 없습니다.",
  clear: "필터 지우기",
  notice: SCREENS_NOTICE.ko,
};

export const GALLERY_COPY: Record<ScreensLocale, GalleryCopy> = { en: EN, ko: KO };

/** The landing's screens section (components/screens/landing-section.tsx). */
export interface LandingScreensCopy {
  h2: string;
  intro: (services: number, screens: number) => string;
  cta: string;
  /** A wall still's accessible name: the service, then the screen's title as shot. */
  tile: (name: string, title: string) => string;
}

export const LANDING_SCREENS_COPY: Record<ScreensLocale, LandingScreensCopy> = {
  en: {
    h2: "See the real screens too",
    intro: (n, s) => `${s === 1 ? "1 screen" : `${s} screens`} from ${n === 1 ? "1 service" : `${n} services`}. Each screen leads straight to that company's DESIGN.md.`,
    cta: "See product screens",
    tile: (name, title) => `${name}, ${title}`,
  },
  ko: {
    h2: "실제 화면도 함께 봅니다",
    intro: (n, s) => `서비스 ${n}곳의 화면 ${s}개를 모았습니다. 화면에서 그 회사의 DESIGN.md로 바로 이어집니다.`,
    cta: "서비스 화면 보기",
    tile: (name, title) => `${name}, ${title}`,
  },
};

/** One service's screens page (components/screens/service-screens.tsx). */
export interface ServiceScreensCopy {
  meta: { title: (name: string) => string; description: (name: string, screens: number) => string };
  back: string;
  h1: (name: string) => string;
  /** The facts line: the category when known, the screens, when they were shot, signed out. */
  facts: (category: string | null, screens: number, shot: string | null, signedOut: boolean) => string;
  designMd: string;
  device: string;
  deviceName: Record<Device, string>;
  typeName: (type: string) => string;
  /** A type group's download: visible label and accessible name. */
  typeZip: string;
  typeZipLabel: (type: string) => string;
  allZip: string;
  /** The large view's download link. */
  one: string;
  /** Under the downloads: whose the screens are and what the README says. */
  downloadNote: string;
  working: (done: number, total: number) => string;
  done: string;
  missing: (titles: string[]) => string;
  failed: string;
  similar: string;
  /** A screen that answered with a block when it was shot. */
  blocked: string;
  /** No screen of this service on the chosen device (the control only offers devices it has, so a stale link). */
  none: string;
  notice: ScreensNoticeCopy;
}

export const SERVICE_SCREENS_COPY: Record<ScreensLocale, ServiceScreensCopy> = {
  en: {
    meta: {
      title: (name) => `${name} product screens`,
      description: (name, s) => `${s === 1 ? "1 real screen" : `${s} real screens`} of ${name}, grouped by type, alongside ${name}'s DESIGN.md.`,
    },
    back: "Product screens",
    h1: (name) => `${name} product screens`,
    facts: (category, s, shot, signedOut) =>
      [category, s === 1 ? "1 screen" : `${s} screens`, shot ? `shot on ${shot}` : null, signedOut ? "signed out" : null].filter(Boolean).join(" · "),
    designMd: "View DESIGN.md",
    device: "Device",
    deviceName: DEVICE_NAME.en,
    typeName: (type) => screenTypeName("en", type),
    typeZip: "Download",
    typeZipLabel: (type) => `Download the ${type} screens`,
    allZip: "Download all",
    one: "Download this screen",
    downloadNote: "Each screen belongs to its company. The README.txt in each zip says where and when they were shot and how to ask for a takedown.",
    working: (d, n) => `Downloading ${d} of ${n}`,
    done: "Downloaded",
    missing: (titles) => `Downloaded without: ${titles.join(", ")}`,
    failed: "Could not fetch the screens. Please try again in a moment.",
    similar: "Similar services",
    blocked: "Blocked when shot",
    none: "No screens on this device.",
    notice: SCREENS_NOTICE.en,
  },
  ko: {
    meta: {
      title: (name) => `${name} 서비스 화면`,
      description: (name, s) => `${name}의 실제 화면 ${s}개를 종류별로 모았습니다. 화면과 함께 ${name} DESIGN.md를 볼 수 있습니다.`,
    },
    back: "서비스 화면",
    h1: (name) => `${name} 서비스 화면`,
    facts: (category, s, shot, signedOut) =>
      [category, `화면 ${s}개`, shot ? `${koDate(shot)} 촬영` : null, signedOut ? "로그아웃 상태" : null].filter(Boolean).join(" · "),
    designMd: "DESIGN.md 보기",
    device: "기기",
    deviceName: DEVICE_NAME.ko,
    typeName: (type) => screenTypeName("ko", type),
    typeZip: "내려받기",
    typeZipLabel: (type) => `${type} 화면 내려받기`,
    allZip: "전체 내려받기",
    one: "이 화면 내려받기",
    downloadNote: "화면의 권리는 각 회사에 있습니다. 묶음 파일에 든 README.txt에 출처와 찍은 날, 내려 달라는 요청 방법을 적었습니다.",
    working: (d, n) => `내려받는 중 ${d}/${n}`,
    done: "내려받았습니다",
    missing: (titles) => `다음 화면은 빼고 내려받았습니다: ${titles.join(", ")}`,
    failed: "화면을 받지 못했습니다. 잠시 뒤에 다시 시도해 주세요.",
    similar: "비슷한 서비스",
    blocked: "막혀서 찍지 못했습니다",
    none: "이 기기로 찍은 화면이 없습니다.",
    notice: SCREENS_NOTICE.ko,
  },
};
