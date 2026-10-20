/**
 * Assembles the question box index (docs/REDESIGN_R11_PLAN_2026-10-20.md W4) at build time:
 * web/scripts/build-ask-index.mjs calls buildAskIndex() and writes src/data/ask-index.generated.json,
 * which is the only thing /api/ask loads. This module reads the heavy generated catalog data
 * (registry, quality, verification), so nothing at request time imports it.
 *
 * Sources, each chunked to ~600–900 characters with a title and the URL an answer cites:
 *   - the landing FAQ (copy/r11-ask.ts), four locales
 *   - the docs pages, through the same Markdown projection the raw-docs route serves
 *     (lib/docs/page-markdown.ts), en / ko / ja / zh-tw
 *   - README.md and its ko / ja / zh-TW translations (repo root, read by the script)
 *   - the user-facing steps of web/docs/import-into-claude-design.md; the rest of web/docs is
 *     internal analytics and strategy notes with no public page, so it is not indexed
 *   - one metadata chunk per reference: name, country, category, official site, verification
 *     tier, primary colour and the design-system line from the registry
 */
import { REGISTRY, type RefEntry } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { REFERENCE_VERIFICATION_BY_ID } from "@/data/reference-verification.generated";
import { getR11Ask } from "@/components/brand-a/copy/r11-ask";
import { CLI_DOCS } from "@/data/cli-docs";
import { docsPageMarkdown } from "@/lib/docs/page-markdown";
import { DOC_PAGES, docsHref, type DocsLocale } from "@/lib/docs/locales";
import { SITE_LOCALES, SITE_LOCALE_META } from "@/lib/i18n/site-locales";
import { hasKoDetail, enDetailPath, koDetailPath } from "@/lib/i18n/ko-detail";
import { SEARCH_ALIASES } from "@/lib/search-aliases";
import { resolvePrimaryColor } from "@/lib/references/brand-tokens";
import { githubSlug, markdownSections, plainText, sectionChunks, type AskChunk, type AskIndexFile, type AskLocale } from "./chunk";

export type { AskIndexFile };

export const ASK_INDEX_VERSION = 1;

export interface MarkdownSource {
  /** Repo-relative path, e.g. `README.ko.md`. */
  path: string;
  loc: AskLocale;
  markdown: string;
}

const REPO = "https://github.com/kwakseongjae/oh-my-design";

export const README_FILES: readonly { path: string; loc: AskLocale }[] = [
  { path: "README.md", loc: "en" },
  { path: "README.ko.md", loc: "ko" },
  { path: "README.ja.md", loc: "ja" },
  { path: "README.zh-TW.md", loc: "zh-tw" },
];

export const GUIDE_FILE = "web/docs/import-into-claude-design.md";
/** The guide's user-facing sections; its "what not to do" and engineering notes are internal. */
const GUIDE_SECTIONS = /^(TL;DR|Step 1\b|Step 2\b)/;

function fill(s: string, vars: Record<string, string | number>): string {
  return s.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}

/** The same facts the landing fills the FAQ with (lib/landing-a/data.server.ts getFacts). */
export function faqFacts(): Record<string, string | number> {
  return {
    total: REGISTRY.length,
    tossChk: (REFERENCE_VERIFICATION_BY_ID.toss?.checked ?? "").slice(0, 10),
    tossNext: REFERENCE_QUALITY_BY_ID.toss?.nextReverifyAt ?? "",
  };
}

function faqChunks(): AskChunk[] {
  const vars = faqFacts();
  return SITE_LOCALES.flatMap((loc) => {
    const landing = SITE_LOCALE_META[loc].path;
    return getR11Ask(loc).faq.items.map((x, i) => ({
      id: `faq:${loc}:${i}`,
      src: "faq" as const,
      loc,
      group: `faq:${i}`,
      title: x.q,
      url: landing === "/" ? "/#faq" : `${landing}#faq`,
      text: plainText(fill(x.a, vars)),
    }));
  });
}

const DOC_LOCALES: readonly DocsLocale[] = ["en", "ko", "ja", "zh-tw"];

function docsChunks(): AskChunk[] {
  const out: AskChunk[] = [];
  for (const loc of DOC_LOCALES) {
    for (const page of DOC_PAGES) {
      const sections = markdownSections(docsPageMarkdown(loc, page));
      const h1 = sections.find((s) => s.level === 1)?.heading ?? null;
      // the docs nav label ("시작하기") names the page better on a source card than its headline
      const pageTitle = CLI_DOCS[loc]?.nav?.[page] ?? h1 ?? page;
      for (const c of sectionChunks(sections)) {
        const head = c.heading && c.heading !== h1 ? `${pageTitle} › ${c.heading}` : pageTitle;
        out.push({
          id: `docs:${loc}:${page}:${c.section}:${c.part}`,
          src: "docs",
          loc: loc as AskLocale,
          group: `docs:${page}:${c.section}:${c.part}`,
          title: head,
          url: docsHref(loc, page),
          text: c.text,
        });
      }
    }
  }
  return out;
}

function readmeChunks(files: readonly MarkdownSource[]): AskChunk[] {
  const out: AskChunk[] = [];
  for (const f of files) {
    const base = f.path === "README.md" ? REPO : `${REPO}/blob/main/${f.path}`;
    for (const c of sectionChunks(markdownSections(f.markdown))) {
      out.push({
        id: `readme:${f.loc}:${c.section}:${c.part}`,
        src: "readme",
        loc: f.loc,
        group: `readme:${f.loc}:${c.section}:${c.part}`,
        title: c.heading ? `README › ${c.heading}` : "README",
        url: c.heading ? `${base}#${githubSlug(c.heading)}` : base,
        text: c.text,
      });
    }
  }
  return out;
}

function guideChunks(markdown: string | null): AskChunk[] {
  if (!markdown) return [];
  const sections = markdownSections(markdown);
  const docTitle = sections.find((s) => s.level === 1)?.heading ?? "Claude Design";
  const kept = sections.filter((s) => s.level > 1 && s.heading && GUIDE_SECTIONS.test(s.heading));
  return sectionChunks(kept).map((c) => ({
    id: `guide:en:${c.section}:${c.part}`,
    src: "guide" as const,
    loc: "en" as const,
    group: `guide:${c.section}:${c.part}`,
    title: c.heading ? `${docTitle} › ${c.heading}` : docTitle,
    url: `${REPO}/blob/main/${GUIDE_FILE}`,
    text: c.text,
  }));
}

/** Country words a visitor might type, per site language (retrieval-only). */
const COUNTRY: Record<string, [string, string]> = {
  KR: ["South Korea", "Korea Korean 한국 국내 韓国 韓國 南韓"],
  US: ["United States", "USA US American 미국 アメリカ 米国 美國"],
  JP: ["Japan", "Japanese 일본 日本"],
  TW: ["Taiwan", "Taiwanese 대만 台湾 台灣"],
  CN: ["China", "Chinese 중국 中国 中國"],
  UK: ["United Kingdom", "UK British 영국 イギリス 英國"],
  DE: ["Germany", "German 독일 ドイツ 德國"],
  FR: ["France", "French 프랑스 フランス 法國"],
  IT: ["Italy", "Italian 이탈리아 イタリア 義大利"],
  FI: ["Finland", "Finnish 핀란드 フィンランド 芬蘭"],
  NL: ["Netherlands", "Dutch 네덜란드 オランダ 荷蘭"],
  SE: ["Sweden", "Swedish 스웨덴 スウェーデン 瑞典"],
  ES: ["Spain", "Spanish 스페인 スペイン 西班牙"],
  LT: ["Lithuania", "Lithuanian 리투아니아 リトアニア 立陶宛"],
  NO: ["Norway", "Norwegian 노르웨이 ノルウェー 挪威"],
  DK: ["Denmark", "Danish 덴마크 デンマーク 丹麥"],
  AT: ["Austria", "Austrian 오스트리아 オーストリア 奧地利"],
  EE: ["Estonia", "Estonian 에스토니아 エストニア 愛沙尼亞"],
  CZ: ["Czechia", "Czech 체코 チェコ 捷克"],
  RO: ["Romania", "Romanian 루마니아 ルーマニア 羅馬尼亞"],
  BE: ["Belgium", "Belgian 벨기에 ベルギー 比利時"],
  CH: ["Switzerland", "Swiss 스위스 スイス 瑞士"],
};

/** Category words per site language (retrieval-only; the archive's labels are W6's). */
const CATEGORY: Record<string, string> = {
  ecommerce: "e-commerce commerce shopping marketplace 이커머스 커머스 쇼핑 コマース 通販 EC 電商 購物",
  fintech: "fintech finance bank banking payment 핀테크 금융 은행 결제 金融 フィンテック 決済 銀行 金融科技 支付",
  saas: "saas software b2b 소프트웨어 ソフトウェア 軟體",
  ai: "ai artificial intelligence llm 인공지능 人工知能 人工智慧",
  "consumer-tech": "consumer app service streaming game delivery travel 서비스 앱 스트리밍 게임 배달 여행 アプリ 配信 ゲーム 旅行 應用程式 串流 遊戲 外送 旅遊",
  education: "education learning edtech 교육 학습 教育 学習 學習",
  productivity: "productivity collaboration jobs hiring 생산성 협업 채용 生産性 求人 生產力 協作 求職",
  "developer-tools": "developer tools devtools 개발자 도구 開発者 開發者 工具",
  "design-tools": "design tools 디자인 도구 デザインツール 設計工具",
  "backend-devops": "backend devops cloud infrastructure 백엔드 클라우드 인프라 クラウド インフラ 後端 雲端",
  automotive: "automotive car mobility 자동차 모빌리티 自動車 汽車 移動",
  marketing: "marketing 마케팅 マーケティング 行銷",
  government: "government public sector 정부 공공 行政 政府 公共",
  healthcare: "healthcare health medical 헬스케어 의료 건강 ヘルスケア 医療 醫療 健康",
};

const TIER_CODE: Record<string, "v" | "p" | "l"> = { verified_v2: "v", partial: "p", legacy_snapshot: "l" };

const TIER: Record<string, string> = {
  verified_v2: "verified",
  partial: "partially verified",
  legacy_snapshot: "legacy snapshot, not re-verified",
};

function host(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function firstSentence(s: string, max = 280): string {
  const one = s.replace(/\s+/g, " ").trim().split(/(?<=[.!?])\s/)[0] ?? "";
  if (one.length <= max) return one;
  const cut = one.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" ")).trim()}…`;
}

function refChunk(e: RefEntry): AskChunk {
  const status = REFERENCE_QUALITY_BY_ID[e.id]?.status;
  const checked = status === "verified_v2" ? (REFERENCE_VERIFICATION_BY_ID[e.id]?.checked ?? "").slice(0, 10) : "";
  const [country, countryKw] = COUNTRY[e.country] ?? [e.country, ""];
  const native = e.displayName && e.displayName !== e.name ? ` (${e.displayName})` : "";
  const site = host(e.homepage);
  // what the passage is (an archive entry) travels in the prompt's source kind, not as a
  // sentence repeated 521 times, which would make "DESIGN.md" useless as a search term
  const lines = [
    `${e.name}${native}. Country: ${country}. Category: ${e.category}.${site ? ` Official site: ${site}.` : ""}`,
    status ? `Verification: ${TIER[status] ?? status}${checked ? `, checked ${checked}` : ""}.` : null,
    `Primary color: ${resolvePrimaryColor(e)}.`,
    e.ds ? `Design system: ${e.ds.name}. ${firstSentence(e.ds.description)}` : null,
  ].filter(Boolean);
  const kw = [e.displayName, ...(SEARCH_ALIASES[e.id] ?? []), e.country, countryKw, CATEGORY[e.category] ?? "", "design system 디자인 시스템 デザインシステム 設計系統 color 색 색상 컬러 色 カラー 顏色 主色"]
    .filter(Boolean)
    .join(" ");
  return {
    id: `ref:${e.id}`,
    src: "ref",
    loc: "*",
    group: `ref:${e.id}`,
    title: `${e.name} DESIGN.md`,
    url: enDetailPath(e.id),
    ...(hasKoDetail(e.country, status) ? { urlKo: koDetailPath(e.id) } : {}),
    text: lines.join("\n"),
    kw,
    ...(status ? { tier: TIER_CODE[status] } : {}),
  };
}

/**
 * Category words specific enough to mean "companies of this kind". Generic ones (app, service,
 * software, tools, AI, design) stay out: "does the app call an AI?" is not a catalog question.
 */
const CATEGORY_INTENT = [
  "e-commerce", "ecommerce", "commerce", "shopping", "marketplace", "이커머스", "커머스", "쇼핑", "通販", "電商", "購物",
  "fintech", "finance", "bank", "banking", "payment", "핀테크", "금융", "은행", "결제", "金融", "フィンテック", "決済", "銀行", "金融科技", "支付",
  "saas", "b2b", "streaming", "game", "delivery", "travel", "스트리밍", "게임", "배달", "여행", "配信", "ゲーム", "旅行", "串流", "遊戲", "外送", "旅遊",
  "education", "edtech", "교육", "教育", "productivity", "collaboration", "hiring", "생산성", "협업", "채용", "求人", "求職",
  "devtools", "devops", "cloud", "infrastructure", "백엔드", "클라우드", "インフラ",
  "automotive", "car", "mobility", "자동차", "모빌리티", "自動車", "汽車", "marketing", "마케팅", "マーケティング", "行銷",
  "government", "public sector", "정부", "공공", "政府", "公共", "行政", "healthcare", "medical", "헬스케어", "의료", "医療", "醫療",
];

/**
 * Intent entries: each one must appear whole in the question (every token of it), so a
 * katakana country name never fires on a shared bigram (オーストリア vs インストール).
 * Country and category words are single entries; a brand name or alias is one entry.
 */
function intentTerms(): string[] {
  const out = new Set<string>();
  for (const [name, words] of Object.values(COUNTRY)) {
    out.add(name);
    for (const w of words.split(/\s+/)) if (w) out.add(w);
  }
  for (const w of CATEGORY_INTENT) out.add(w);
  for (const e of REGISTRY) {
    out.add(e.name);
    if (e.displayName) out.add(e.displayName);
    for (const a of SEARCH_ALIASES[e.id] ?? []) out.add(a);
  }
  return [...out];
}

export function buildAskIndex(input: { readmes: readonly MarkdownSource[]; guide: string | null }): AskIndexFile {
  const chunks = [
    ...faqChunks(),
    ...docsChunks(),
    ...readmeChunks(input.readmes),
    ...guideChunks(input.guide),
    ...REGISTRY.map(refChunk),
  ];
  const ids = new Set<string>();
  for (const c of chunks) {
    if (ids.has(c.id)) throw new Error(`duplicate ask chunk id ${c.id}`);
    ids.add(c.id);
  }
  return { version: ASK_INDEX_VERSION, chunks, intent: intentTerms() };
}

/** One chunk per line: the file stays diffable without growing an indent per field. */
export function serializeAskIndex(index: AskIndexFile): string {
  return `{"version":${index.version},"intent":${JSON.stringify(index.intent)},"chunks":[\n${index.chunks.map((c) => JSON.stringify(c)).join(",\n")}\n]}\n`;
}
