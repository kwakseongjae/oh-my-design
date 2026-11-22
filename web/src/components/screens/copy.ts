/**
 * Words of the /screens gallery and of the landing section that leads to it, in English and Korean (합니다체, plain).
 * The screens' own titles stay as shot (Korean). No country in a title or description: the country is a filter.
 * Plain strings and formatters only: the gallery and the wall are client components.
 */

import type { Device } from "@/lib/screens/gallery";
import { SCREENS_NOTICE, type ScreensNoticeCopy } from "./notice-copy";

export type ScreensLocale = "en" | "ko";

export const SCREENS_PATH: Record<ScreensLocale, string> = { en: "/screens", ko: "/ko/screens" };

/** The site header's link to the gallery, shown once screens are published (brand-a/site-header.tsx). */
export const SCREENS_NAV_LABEL: Record<ScreensLocale, string> = { en: "Screens", ko: "서비스 화면" };

export interface GalleryCopy {
  meta: { title: string; description: string };
  h1: string;
  lede: string;
  /** The filter row's accessible name. */
  filters: string;
  country: string;
  device: string;
  category: string;
  all: string;
  deviceName: Record<Device, string>;
  /** The count at the right of the filter row. */
  count: (screens: number, services: number) => string;
  /** Under a card: the category, when the registry has one, and the service's screens. */
  cardMeta: (category: string | null, screens: number) => string;
  /** No service matches the filters. */
  empty: string;
  clear: string;
  /** The rights and takedown lines, shown once screens are published. */
  notice: ScreensNoticeCopy;
}

const EN: GalleryCopy = {
  meta: {
    title: "Product screens",
    description: "Screens of real products, gathered by service. Each service's screens sit beside its DESIGN.md.",
  },
  h1: "Product screens",
  lede: "Screens of real products, gathered by service. Open a service to see its screens together with its DESIGN.md.",
  filters: "Filters",
  country: "Country",
  device: "Device",
  category: "Category",
  all: "All",
  deviceName: { phone: "Phone", web: "Web" },
  count: (s, n) => `${s === 1 ? "1 screen" : `${s} screens`} · ${n === 1 ? "1 service" : `${n} services`}`,
  cardMeta: (category, s) => [category, s === 1 ? "1 screen" : `${s} screens`].filter(Boolean).join(" · "),
  empty: "No service matches these filters.",
  clear: "Clear filters",
  notice: SCREENS_NOTICE.en,
};

const KO: GalleryCopy = {
  meta: {
    title: "서비스 화면",
    description: "실제 서비스의 화면을 서비스별로 모았습니다. 서비스마다 화면과 DESIGN.md를 함께 볼 수 있습니다.",
  },
  h1: "서비스 화면",
  lede: "실제 서비스의 화면을 서비스별로 모았습니다. 서비스를 누르면 그 서비스의 화면과 DESIGN.md를 함께 봅니다.",
  filters: "필터",
  country: "나라",
  device: "기기",
  category: "분야",
  all: "전체",
  deviceName: { phone: "폰", web: "웹" },
  count: (s, n) => `화면 ${s}개 · 서비스 ${n}곳`,
  cardMeta: (category, s) => [category, `화면 ${s}개`].filter(Boolean).join(" · "),
  empty: "이 조건에 맞는 서비스가 없습니다.",
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
