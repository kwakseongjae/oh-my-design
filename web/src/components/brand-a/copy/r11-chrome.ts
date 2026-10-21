/* Round 11 chrome copy and marks (docs/REDESIGN_R11_PLAN_2026-10-20.md W5, W9, item 29):
 * the Taste-style footer, the catalog showcase's region labels and the two platform marks the
 * footer and the star pill draw. Written natively per locale, not converted; Korean in 해요체.
 *
 * A leaf module on purpose: the client star pill imports GITHUB_MARK from here, so nothing in
 * this file may import the landing copy (r10.ts, en.ts …) or any server-only module. */
import type { SiteLocale } from "@/lib/i18n/site-locales";

export interface Mark {
  readonly viewBox: string;
  readonly d: string;
}

/**
 * GitHub's Invertocat as published in the official brand kit: github.com/logos →
 * brand.github.com/GitHub_Logos.zip, "GitHub Logos/SVG/GitHub_Invertocat_Black.svg"
 * (fetched 2026-10-20). Only the path is used; the kit's full-artboard clip rect clips nothing.
 * GitHub's rule: the mark appears only in black or white, never recoloured, so callers set
 * `currentColor` to ink or paper and change backgrounds, not the glyph, on hover.
 */
export const GITHUB_MARK: Mark = {
  viewBox: "0 0 98 96",
  d: "M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z",
};

/**
 * The Threads mark exactly as Meta serves it on its own site: the `<svg aria-label="Threads">`
 * in the header of https://www.threads.com/login (rendered DOM, read 2026-10-20). Meta's
 * Brand Resource Center (meta.com/brand/resources/threads) hosts the same mark in its logo
 * pack behind a terms-acceptance download. Its rule: clear space of at least the icon's
 * width ÷ 4 on every side, and no recolouring (ink or paper only).
 */
export const THREADS_MARK: Mark = {
  viewBox: "0 0 976.98 1082",
  d: "M770.347,500.347c-1.355-156.85-86.386-251.367-230.025-251.367-95.872,0-176.499,43.362-218.846,112.472l92.823,64.705c24.053-37.942,57.252-69.448,118.231-69.448,68.77,0,104.341,38.281,114.504,109.423-33.2-5.081-66.399-7.791-100.615-7.791-185.646,0-273.049,84.015-273.049,195.131,0,113.149,87.403,179.548,216.136,179.548,141.267,0,225.621-95.194,260.176-213.086,35.91,16.261,60.64,54.203,60.64,111.116,0,152.447-175.822,235.446-324.881,235.446-219.862,0-363.501-144.316-363.501-379.084,0-287.616,190.05-471.907,445.483-471.907,171.418,0,256.11,75.207,313.701,176.16l94.856-66.399C913.308,94.501,773.396,1,563.358,1,228.653,1,.999,238.478.999,583.008c0,315.057,222.911,497.992,488.507,497.992,219.523,0,441.418-128.055,441.418-347.24,0-114.504-65.721-190.389-160.577-233.413ZM485.441,718.854c-48.444,0-91.129-23.036-91.129-65.383,0-66.738,81.983-87.064,162.271-87.064,30.489,0,60.301,2.032,86.725,7.792-18.971,86.725-75.207,144.655-157.867,144.655Z",
};

/** The star in the header pill: Primer Octicons `star-fill-16` (github.com/primer/octicons, MIT). */
export const STAR_MARK: Mark = {
  viewBox: "0 0 16 16",
  d: "M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z",
};

/** The owner's Threads profile (owner decision 7, 2026-10-20; listed on linktr.ee/daon_k). */
export const THREADS_URL = "https://www.threads.com/@daon_k";
export const NPM_URL = "https://www.npmjs.com/package/oh-my-design-cli";

/** The regions the catalog showcase groups by (the countries with official logos stored). */
export type ShowcaseRegion = "KR" | "JP" | "TW";

export interface ChromeCopy {
  foot: {
    /** Column headings. */
    product: string;
    oss: string;
    lang: string;
    changelog: string;
    blog: string;
    license: string;
    /** Accessible names of the two icon links. */
    github: string;
    threads: string;
    /** The one bottom line; {year} is filled at render. */
    legal: string;
    privacy: string;
    terms: string;
    /** Re-opens the analytics choice (ManageConsentButton). */
    cookies: string;
  };
  showcase: {
    regions: Record<ShowcaseRegion, string>;
    /** Accessible name suffix of each logo link: "{name} DESIGN.md". */
    item: string;
    /** The last tile of a row: "+{n}" over this word; it opens the archive filtered to the row's country. */
    more: string;
    /** That tile's accessible name: {n} more, {region} the row's label. */
    moreLabel: string;
  };
}

const EN: ChromeCopy = {
  foot: {
    product: "Product",
    oss: "Open source",
    lang: "Language",
    changelog: "Changelog",
    blog: "Blog",
    license: "License",
    github: "oh-my-design on GitHub",
    threads: "@daon_k on Threads",
    legal: "© {year} oh-my-design. MIT License. Designs and logos belong to their owners.",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookie settings",
  },
  showcase: {
    regions: { KR: "Korea", JP: "Japan", TW: "Taiwan" },
    item: "{name} DESIGN.md",
    more: "more",
    moreLabel: "{n} more from {region} in the archive",
  },
};

const KO: ChromeCopy = {
  foot: {
    product: "제품",
    oss: "오픈소스",
    lang: "언어",
    changelog: "변경 기록",
    blog: "블로그",
    license: "라이선스",
    github: "GitHub의 oh-my-design 저장소",
    threads: "Threads의 @daon_k",
    legal: "© {year} oh-my-design. MIT 라이선스. 디자인과 로고는 각 회사의 것이에요.",
    privacy: "개인정보 처리방침",
    terms: "이용약관",
    cookies: "쿠키 설정",
  },
  showcase: {
    regions: { KR: "한국", JP: "일본", TW: "대만" },
    item: "{name} DESIGN.md",
    more: "더 보기",
    moreLabel: "아카이브에서 {region} 회사 {n}곳 더 보기",
  },
};

const JA: ChromeCopy = {
  foot: {
    product: "プロダクト",
    oss: "オープンソース",
    lang: "言語",
    changelog: "変更履歴",
    blog: "ブログ",
    license: "ライセンス",
    github: "GitHub の oh-my-design リポジトリ",
    threads: "Threads の @daon_k",
    legal: "© {year} oh-my-design。MITライセンス。デザインとロゴは各社に帰属します。",
    privacy: "プライバシー",
    terms: "利用規約",
    cookies: "Cookie 設定",
  },
  showcase: {
    regions: { KR: "韓国", JP: "日本", TW: "台湾" },
    item: "{name} の DESIGN.md",
    more: "もっと見る",
    moreLabel: "アーカイブで{region}の企業をあと{n}社見る",
  },
};

const ZH_TW: ChromeCopy = {
  foot: {
    product: "產品",
    oss: "開放原始碼",
    lang: "語言",
    changelog: "更新紀錄",
    blog: "部落格",
    license: "授權條款",
    github: "GitHub 上的 oh-my-design 儲存庫",
    threads: "Threads 上的 @daon_k",
    legal: "© {year} oh-my-design。MIT 授權。設計與標誌皆屬各公司所有。",
    privacy: "隱私權政策",
    terms: "使用條款",
    cookies: "Cookie 設定",
  },
  showcase: {
    regions: { KR: "韓國", JP: "日本", TW: "台灣" },
    item: "{name} 的 DESIGN.md",
    more: "查看更多",
    moreLabel: "在典藏查看另外 {n} 家{region}企業",
  },
};

const BY: Record<SiteLocale, ChromeCopy> = { en: EN, ko: KO, ja: JA, "zh-tw": ZH_TW };

export function getChromeCopy(locale: SiteLocale): ChromeCopy {
  return BY[locale];
}
