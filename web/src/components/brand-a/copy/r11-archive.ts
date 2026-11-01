/**
 * DESIGN.md archive chrome (round 11, W6 #17–#19), all four site locales.
 * /design-systems uses `en`, /ko/design-systems uses `ko`; `ja` and `zh-tw`
 * are written now so a Japanese or Traditional Chinese archive needs no new
 * copy. Client-safe: plain strings and formatters, no generated data.
 *
 * Each locale is written in that language, not converted from English (해요체 for
 * Korean, です・ます for Japanese). Brand names, token values and the reference
 * summaries stay as the canonical files write them. Counts arrive as numbers,
 * never typed into the copy (scripts/check-counts.mjs).
 */

import type { SiteLocale } from "@/lib/i18n/site-locales";

export type ArchiveRegionKey = "all" | "KR" | "JP" | "TW" | "CN" | "other";
/** "installs" = the server order (default); "views" = 30-day page views; "updated" = last checked; "name" = collation. */
export type ArchiveSortKey = "installs" | "views" | "updated" | "name";

export interface ArchiveCopy {
  /** The archive's one h1. */
  h1: string;
  /** Lede for the whole catalog ({count} = every reference). */
  lede: (count: number) => string;
  meta: { title: (count: number) => string; description: (count: number) => string };
  search: {
    label: string;
    placeholder: string;
    clear: string;
    /** Heading over the suggestion chips while the field is empty. */
    suggest: string;
    /** Last row of the preview: closes it and leaves the filtered list below. */
    seeAll: (n: number, q: string) => string;
  };
  regionLabel: string;
  regions: Record<ArchiveRegionKey, string>;
  domainLabel: string;
  allDomains: string;
  /** Registry `category` slug → label. An unknown slug falls back to the slug itself. */
  domains: Record<string, string>;
  sortLabel: string;
  sorts: Record<ArchiveSortKey, string>;
  collections: string;
  showAll: string;
  /** Shown only while a filter or search narrows the list: the number in the accent colour, then this unit (with its own leading space where the language needs one). */
  results: (n: number) => string;
  clear: string;
  empty: string;
  toTop: string;
  installs: (n: number) => string;
  installsTitle: string;
  /** Number formatting for counts. */
  numberLocale: string;
}

const EN: ArchiveCopy = {
  h1: "DESIGN.md archive",
  lede: (n) =>
    `${n} real products as DESIGN.md files your coding agent can read: colors, type and components, ready to drop into your project.`,
  meta: {
    title: (n) => `DESIGN.md Archive — ${n} Real-Company Design Systems`,
    description: (n) =>
      `Browse ${n} real-company design systems as DESIGN.md files: colors, typography and components your coding agent can follow, filtered by region and domain.`,
  },
  search: {
    label: "Search the archive",
    placeholder: "Search by name, id or what it does",
    clear: "Clear search",
    suggest: "Try",
    seeAll: (n, q) => `See all ${n} ${n === 1 ? "result" : "results"} for “${q}”`,
  },
  regionLabel: "Region",
  regions: { all: "All", KR: "Korea", JP: "Japan", TW: "Taiwan", CN: "China", other: "Other" },
  domainLabel: "Domain",
  allDomains: "All domains",
  domains: {
    "consumer-tech": "Consumer tech",
    fintech: "Fintech",
    ecommerce: "Commerce",
    ai: "AI",
    saas: "SaaS",
    productivity: "Productivity",
    "developer-tools": "Developer tools",
    education: "Education",
    "design-tools": "Design tools",
    "backend-devops": "Backend & DevOps",
    marketing: "Marketing",
    automotive: "Mobility",
    healthcare: "Healthcare",
    government: "Government",
  },
  sortLabel: "Sort",
  sorts: { installs: "Most installed", views: "Most viewed", updated: "Recently updated", name: "Name" },
  collections: "Collections",
  showAll: "Show all",
  results: (n) => (n === 1 ? " result" : " results"),
  clear: "Clear filters",
  empty: "No DESIGN.md matches these filters.",
  toTop: "Back to top",
  installs: (n) => `${n.toLocaleString("en-US")} ${n === 1 ? "install" : "installs"}`,
  installsTitle: "Copies, downloads and install commands",
  numberLocale: "en-US",
};

const KO: ArchiveCopy = {
  h1: "DESIGN.md 아카이브",
  lede: (n) =>
    `잘 만든 서비스 ${n}곳의 색상·글꼴·컴포넌트를 DESIGN.md 한 파일씩으로 정리했어요. 마음에 드는 곳을 골라 프로젝트에 넣으면 코딩 에이전트가 그 디자인을 따라 만들어요.`,
  meta: {
    title: (n) => `DESIGN.md 아카이브 — 기업 ${n}곳의 디자인 시스템`,
    description: (n) =>
      `기업 ${n}곳의 디자인 시스템을 DESIGN.md로 둘러보세요. 지역과 분야로 골라 색상·글꼴·컴포넌트를 코딩 에이전트에 바로 건넬 수 있어요.`,
  },
  search: {
    label: "아카이브 검색",
    placeholder: "회사 이름, id, 하는 일로 찾기",
    clear: "검색어 지우기",
    suggest: "이렇게 찾아보세요",
    seeAll: (n, q) => `‘${q}’ 결과 ${n}개 모두 보기`,
  },
  regionLabel: "지역",
  regions: { all: "전체", KR: "한국", JP: "일본", TW: "대만", CN: "중국", other: "기타" },
  domainLabel: "분야",
  allDomains: "모든 분야",
  domains: {
    "consumer-tech": "컨슈머 테크",
    fintech: "핀테크",
    ecommerce: "커머스",
    ai: "AI",
    saas: "SaaS",
    productivity: "생산성",
    "developer-tools": "개발 도구",
    education: "교육",
    "design-tools": "디자인 도구",
    "backend-devops": "백엔드·데브옵스",
    marketing: "마케팅",
    automotive: "모빌리티",
    healthcare: "헬스케어",
    government: "공공",
  },
  sortLabel: "정렬",
  sorts: { installs: "설치순", views: "조회순", updated: "업데이트순", name: "이름순" },
  collections: "컬렉션",
  showAll: "전체 보기",
  results: () => "개",
  clear: "필터 지우기",
  empty: "조건에 맞는 DESIGN.md가 없어요.",
  toTop: "맨 위로",
  installs: (n) => `설치 ${n.toLocaleString("ko-KR")}`,
  installsTitle: "복사·내려받기·설치 명령 복사를 합친 수",
  numberLocale: "ko-KR",
};

const JA: ArchiveCopy = {
  h1: "DESIGN.md アーカイブ",
  lede: (n) => `実在する${n}のプロダクトのデザインを、コーディングエージェントが読める DESIGN.md にまとめました。選んでプロジェクトに置くだけです。`,
  meta: {
    title: (n) => `DESIGN.md アーカイブ — 実在する${n}社のデザインシステム`,
    description: (n) =>
      `実在する${n}社のデザインシステムを DESIGN.md で探せます。地域と分野で絞り込み、色・書体・コンポーネントをそのままコーディングエージェントに渡せます。`,
  },
  search: {
    label: "アーカイブを検索",
    placeholder: "社名、id、事業内容で検索",
    clear: "検索語を消去",
    suggest: "検索の例",
    seeAll: (n, q) => `「${q}」の結果 ${n}件をすべて表示`,
  },
  regionLabel: "地域",
  regions: { all: "すべて", KR: "韓国", JP: "日本", TW: "台湾", CN: "中国", other: "その他" },
  domainLabel: "分野",
  allDomains: "すべての分野",
  domains: {
    "consumer-tech": "コンシューマー",
    fintech: "フィンテック",
    ecommerce: "コマース",
    ai: "AI",
    saas: "SaaS",
    productivity: "生産性",
    "developer-tools": "開発ツール",
    education: "教育",
    "design-tools": "デザインツール",
    "backend-devops": "バックエンド・DevOps",
    marketing: "マーケティング",
    automotive: "モビリティ",
    healthcare: "ヘルスケア",
    government: "行政",
  },
  sortLabel: "並び替え",
  sorts: { installs: "インストール数順", views: "閲覧数順", updated: "更新順", name: "名前順" },
  collections: "コレクション",
  showAll: "すべて表示",
  results: () => "件",
  clear: "絞り込みを解除",
  empty: "条件に合う DESIGN.md はありません。",
  toTop: "トップへ戻る",
  installs: (n) => `${n.toLocaleString("ja-JP")}回インストール`,
  installsTitle: "コピー・ダウンロード・インストールコマンドの合計",
  numberLocale: "ja-JP",
};

const ZH_TW: ArchiveCopy = {
  h1: "DESIGN.md 典藏",
  lede: (n) => `收錄 ${n} 個真實產品的設計，每一份都是程式代理讀得懂的 DESIGN.md。挑一份放進專案就好。`,
  meta: {
    title: (n) => `DESIGN.md 典藏 — ${n} 家真實企業的設計系統`,
    description: (n) =>
      `以 DESIGN.md 瀏覽 ${n} 家真實企業的設計系統。依地區與領域篩選，把色彩、字體與元件直接交給你的程式代理。`,
  },
  search: {
    label: "搜尋典藏",
    placeholder: "以公司名稱、id 或業務搜尋",
    clear: "清除搜尋",
    suggest: "試試看",
    seeAll: (n, q) => `查看「${q}」的全部 ${n} 份結果`,
  },
  regionLabel: "地區",
  regions: { all: "全部", KR: "韓國", JP: "日本", TW: "台灣", CN: "中國", other: "其他" },
  domainLabel: "領域",
  allDomains: "所有領域",
  domains: {
    "consumer-tech": "消費科技",
    fintech: "金融科技",
    ecommerce: "電商",
    ai: "AI",
    saas: "SaaS",
    productivity: "生產力",
    "developer-tools": "開發工具",
    education: "教育",
    "design-tools": "設計工具",
    "backend-devops": "後端與 DevOps",
    marketing: "行銷",
    automotive: "移動出行",
    healthcare: "醫療健康",
    government: "政府",
  },
  sortLabel: "排序",
  sorts: { installs: "安裝最多", views: "瀏覽最多", updated: "最近更新", name: "名稱" },
  collections: "精選集",
  showAll: "顯示全部",
  results: () => " 份",
  clear: "清除篩選",
  empty: "沒有符合條件的 DESIGN.md。",
  toTop: "回到頂端",
  installs: (n) => `${n.toLocaleString("zh-TW")} 次安裝`,
  installsTitle: "複製、下載與安裝指令的合計",
  numberLocale: "zh-TW",
};

export const ARCHIVE_COPY: Readonly<Record<SiteLocale, ArchiveCopy>> = { en: EN, ko: KO, ja: JA, "zh-tw": ZH_TW };

/** Label for a registry category in `copy`; the slug itself, spaced, when the copy has none. */
export function domainLabel(copy: ArchiveCopy, slug: string): string {
  return copy.domains[slug] ?? slug.replace(/-/g, " ");
}
