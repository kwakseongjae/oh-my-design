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
export type ArchiveTierKey = "all" | "verified_v2" | "partial" | "legacy_snapshot";

export interface ArchiveCopy {
  /** The archive's one h1. */
  h1: string;
  /** Lede for the whole catalog ({count} = every reference). */
  lede: (count: number) => string;
  /** Lede for the Korean archive, which lists the references that have a Korean page. */
  ledeKo?: (kr: number, intl: number, rest: number) => { before: string; link: string; after: string };
  meta: { title: (count: number) => string; description: (count: number) => string };
  search: { label: string; placeholder: string; clear: string };
  regionLabel: string;
  regions: Record<ArchiveRegionKey, string>;
  domainLabel: string;
  allDomains: string;
  /** Registry `category` slug → label. An unknown slug falls back to the slug itself. */
  domains: Record<string, string>;
  tierLabel: string;
  tiers: Record<ArchiveTierKey, string>;
  collections: string;
  showAll: string;
  count: (shown: number, total: number) => string;
  /** Said only when a reader narrows to the verified tier: the badge is not depth. */
  verifiedQualifier: (interactive: number, stated: number) => string;
  clear: string;
  empty: string;
  more: (n: number) => string;
  left: (n: number) => string;
  installs: (n: number) => string;
  installsTitle: string;
  verified: string;
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
  search: { label: "Search the archive", placeholder: "Search by name, id or what it does", clear: "Clear search" },
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
  tierLabel: "Evidence tier",
  tiers: { all: "Any tier", verified_v2: "Verified", partial: "Partial", legacy_snapshot: "Legacy" },
  collections: "Collections",
  showAll: "Show all",
  count: (shown, total) => (shown === total ? `${total} DESIGN.md files` : `${shown} of ${total} DESIGN.md files`),
  verifiedQualifier: (a, b) => `${a} carry interactive components, ${b} record per-state values`,
  clear: "Clear filters",
  empty: "No DESIGN.md matches these filters.",
  more: (n) => `Show ${n} more`,
  left: (n) => `${n} left`,
  installs: (n) => `${n.toLocaleString("en-US")} ${n === 1 ? "install" : "installs"}`,
  installsTitle: "Copies, downloads and install commands",
  verified: "Verified",
  numberLocale: "en-US",
};

const KO: ArchiveCopy = {
  h1: "DESIGN.md 아카이브",
  lede: (n) => `실제 서비스 ${n}곳의 디자인을 코딩 에이전트가 읽는 DESIGN.md로 모았어요. 골라서 프로젝트에 넣으면 돼요.`,
  ledeKo: (kr, intl, rest) => ({
    before: `한국 기업 ${kr}곳과 검증된 해외 기업 ${intl}곳의 DESIGN.md예요. 나머지 ${rest}곳은 `,
    link: "영문 아카이브",
    after: "에 있어요.",
  }),
  meta: {
    title: (n) => `DESIGN.md 아카이브 — 기업 ${n}곳의 디자인 시스템`,
    description: (n) =>
      `기업 ${n}곳의 디자인 시스템을 DESIGN.md로 둘러보세요. 지역과 분야로 골라 색상·글꼴·컴포넌트를 코딩 에이전트에 바로 건넬 수 있어요.`,
  },
  search: { label: "아카이브 검색", placeholder: "회사 이름, id, 하는 일로 찾기", clear: "검색어 지우기" },
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
  tierLabel: "근거 등급",
  tiers: { all: "모든 등급", verified_v2: "검증", partial: "부분 검증", legacy_snapshot: "이전 스냅숏" },
  collections: "컬렉션",
  showAll: "전체 보기",
  count: (shown, total) => (shown === total ? `DESIGN.md ${total}개` : `DESIGN.md ${total}개 중 ${shown}개`),
  verifiedQualifier: (a, b) => `인터랙티브 컴포넌트가 있는 곳 ${a}곳, 상태별 값을 기록한 곳 ${b}곳`,
  clear: "필터 지우기",
  empty: "조건에 맞는 DESIGN.md가 없어요.",
  more: (n) => `${n}개 더 보기`,
  left: (n) => `${n}개 남음`,
  installs: (n) => `설치 ${n.toLocaleString("ko-KR")}`,
  installsTitle: "복사·내려받기·설치 명령 복사를 합친 수",
  verified: "검증됨",
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
  search: { label: "アーカイブを検索", placeholder: "社名、id、事業内容で検索", clear: "検索語を消去" },
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
  tierLabel: "根拠の段階",
  tiers: { all: "すべての段階", verified_v2: "検証済み", partial: "一部検証", legacy_snapshot: "旧スナップショット" },
  collections: "コレクション",
  showAll: "すべて表示",
  count: (shown, total) => (shown === total ? `DESIGN.md ${total}件` : `DESIGN.md ${total}件中 ${shown}件`),
  verifiedQualifier: (a, b) => `インタラクティブなコンポーネントあり ${a}件、状態ごとの値あり ${b}件`,
  clear: "絞り込みを解除",
  empty: "条件に合う DESIGN.md はありません。",
  more: (n) => `さらに${n}件表示`,
  left: (n) => `残り${n}件`,
  installs: (n) => `${n.toLocaleString("ja-JP")}回インストール`,
  installsTitle: "コピー・ダウンロード・インストールコマンドの合計",
  verified: "検証済み",
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
  search: { label: "搜尋典藏", placeholder: "以公司名稱、id 或業務搜尋", clear: "清除搜尋" },
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
  tierLabel: "依據等級",
  tiers: { all: "所有等級", verified_v2: "已驗證", partial: "部分驗證", legacy_snapshot: "舊快照" },
  collections: "精選集",
  showAll: "顯示全部",
  count: (shown, total) => (shown === total ? `${total} 份 DESIGN.md` : `${total} 份中的 ${shown} 份 DESIGN.md`),
  verifiedQualifier: (a, b) => `${a} 份含互動元件，${b} 份記錄了各狀態的值`,
  clear: "清除篩選",
  empty: "沒有符合條件的 DESIGN.md。",
  more: (n) => `再顯示 ${n} 份`,
  left: (n) => `還有 ${n} 份`,
  installs: (n) => `${n.toLocaleString("zh-TW")} 次安裝`,
  installsTitle: "複製、下載與安裝指令的合計",
  verified: "已驗證",
  numberLocale: "zh-TW",
};

export const ARCHIVE_COPY: Readonly<Record<SiteLocale, ArchiveCopy>> = { en: EN, ko: KO, ja: JA, "zh-tw": ZH_TW };

/** Label for a registry category in `copy`; the slug itself, spaced, when the copy has none. */
export function domainLabel(copy: ArchiveCopy, slug: string): string {
  return copy.domains[slug] ?? slug.replace(/-/g, " ");
}
