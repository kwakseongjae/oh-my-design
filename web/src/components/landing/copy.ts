/**
 * Landing copy, English and Korean. The Korean is written for Korean readers,
 * not translated line by line: sentence order, emphasis and labels differ where
 * Korean reads better that way. Numbers are never written here — they come from
 * the registry and quality manifest at render time.
 */

export type Locale = "en" | "ko";

export interface LandingCopy {
  locale: Locale;
  home: string;
  docsHref: string;
  skillsHref: string;
  privacyHref: string;
  termsHref: string;
  nav: { catalog: string; docs: string; builder: string; github: string; switchLabel: string; switchHref: string; switchText: string };
  eyebrow: (n: { refs: number; countries: number }) => string;
  /** h1 split so the verified count can carry the proof mark. */
  h1: { before: string; after: string };
  lede: (n: { refs: number; verified: number }) => string;
  /** Phone-width lede: the first screen there has room for one sentence. */
  ledeShort: string;
  tiers: {
    heading: string;
    verified: { label: string; def: string };
    partial: { label: string; def: string };
    legacy: { label: string; def: string };
    example: (n: { name: string; backed: number; claims: number; surfaces: number }) => string;
  };
  search: { label: string; placeholder: (refs: number) => string; noMatch: string; loading: string; open: string; resultsLabel: string };
  top: { heading: string; live: string; snapshot: (date: string) => string; all: (refs: number) => string; openHint: string };
  status: { verified_v2: string; partial: string; legacy_snapshot: string };
  preview: {
    heading: string;
    hint: string;
    sampleTitle: string;
    sampleBody: string;
    sampleAction: string;
    fontNote: (font: string) => string;
    noCanvas: string;
    open: (name: string) => string;
    chooser: string;
  };
  how: { heading: string; steps: { title: string; body: string }[] };
  cli: { heading: string; body: (skills: number) => string; command: string; skillsLink: string; skills: { name: string; body: string }[] };
  wall: { heading: string; body: (n: number) => string; link: (refs: number) => string };
  footer: {
    tagline: string;
    product: string;
    project: string;
    links: { catalog: string; builder: string; docs: string; what: string; faq: string; changelog: string; alternatives: string; privacy: string; terms: string; issues: string; license: string };
    provisional: string;
  };
}

export const EN: LandingCopy = {
  locale: "en",
  home: "/",
  docsHref: "/docs/en",
  skillsHref: "/docs/en/skills",
  privacyHref: "/privacy",
  termsHref: "/terms",
  nav: {
    catalog: "Catalog",
    docs: "Docs",
    builder: "Builder",
    github: "GitHub",
    switchLabel: "한국어로 보기",
    switchHref: "/ko",
    switchText: "한국어",
  },
  eyebrow: ({ refs, countries }) => `DESIGN.md catalog · ${refs} companies · ${countries} countries`,
  h1: { before: "", after: " company design systems, every value traced to a capture." },
  lede: ({ refs, verified }) =>
    `Each one is a DESIGN.md your coding agent can follow: colors, type, radii and components from a real product. The ${verified} verified references keep the capture behind every value, and the rest of the ${refs} say how far they got. Pick one and open it in the builder.`,
  ledeShort: "Each one is a DESIGN.md your coding agent can follow. Pick one and open it in the builder.",
  tiers: {
    heading: "How each reference is graded",
    verified: { label: "verified", def: "Every value traces to a capture of the live product or its official docs." },
    partial: { label: "partial", def: "Captured, but some values or sources are missing or out of date." },
    legacy: { label: "legacy", def: "Written before evidence capture. A starting point, not proof." },
    example: ({ name, backed, claims, surfaces }) => `See ${name}: ${backed} of ${claims} values backed, ${surfaces} surfaces`,
  },
  search: {
    label: "Find",
    placeholder: (refs) => `Search ${refs} — toss, 카카오, stripe…`,
    noMatch: "No reference matches that name.",
    loading: "Loading the catalog…",
    open: "Open in builder",
    resultsLabel: "Matching references",
  },
  top: {
    heading: "Most selected in the builder",
    live: "live count",
    snapshot: (date) => `count as of ${date}`,
    all: (refs) => `All ${refs}`,
    openHint: "Opens in the builder",
  },
  status: { verified_v2: "verified", partial: "partial", legacy_snapshot: "legacy" },
  preview: {
    heading: "Preview",
    hint: "Point at a row, or pick a brand below.",
    sampleTitle: "A screen your agent might build",
    sampleBody: "Colored and shaped only by this reference's tokens.",
    sampleAction: "Continue",
    fontNote: (font) => `Set in this page's typeface. ${font} is not loaded here.`,
    noCanvas: "No canvas color in this reference; shown on the page ground.",
    open: (name) => `Open ${name} in the builder`,
    chooser: "Preview a brand",
  },
  how: {
    heading: "How it works",
    steps: [
      { title: "Pick a reference", body: "Search the catalog or start from the most selected. Verified references show the evidence behind each value." },
      { title: "Adjust it in the builder", body: "Change color, type and components. The preview follows every change." },
      { title: "Hand DESIGN.md to your agent", body: "Download the file and give it to Claude Code, Codex, Cursor or OpenCode with the first prompt the builder writes for you." },
    ],
  },
  cli: {
    heading: "Or install it where your agent works",
    body: (skills) => `One command installs ${skills} skills and the offline catalog into Claude Code, Codex, Cursor and OpenCode. No AI calls during install.`,
    command: "npx oh-my-design-cli@latest",
    skillsLink: "All skills",
    skills: [
      { name: "omd:init", body: "Sets up a project DESIGN.md from the catalog reference that fits." },
      { name: "omd:apply", body: "Keeps everyday UI edits inside your DESIGN.md." },
      { name: "omd:autopilot", body: "Designs and builds a new surface from one prompt." },
      { name: "omd:harness", body: "A guided run that stops for your review at each checkpoint." },
      { name: "omd:feel", body: "Applies or audits interface detail with measured rules." },
      { name: "omd:remember", body: "Records your corrections so the next change follows them." },
    ],
  },
  wall: {
    heading: "Every verified primary, by hue",
    body: (n) => `${n} brand colors, each the primary its reference page shows.`,
    link: (refs) => `Browse all ${refs}`,
  },
  footer: {
    tagline: "DESIGN.md references from real products, for AI coding agents. Free and open source.",
    product: "Product",
    project: "Project",
    links: {
      catalog: "Catalog",
      builder: "Builder",
      docs: "Docs",
      what: "What is DESIGN.md",
      faq: "FAQ",
      changelog: "Changelog",
      alternatives: "Alternatives",
      privacy: "Privacy",
      terms: "Terms",
      issues: "Issues",
      license: "MIT License",
    },
    provisional: "Wordmark is provisional.",
  },
};

export const KO: LandingCopy = {
  locale: "ko",
  home: "/ko",
  docsHref: "/docs/ko",
  skillsHref: "/docs/ko/skills",
  privacyHref: "/privacy/ko",
  termsHref: "/terms/ko",
  nav: {
    catalog: "카탈로그",
    docs: "문서",
    builder: "빌더",
    github: "GitHub",
    switchLabel: "View in English",
    switchHref: "/",
    switchText: "English",
  },
  eyebrow: ({ refs, countries }) => `DESIGN.md 카탈로그 · 기업 ${refs}곳 · ${countries}개국`,
  h1: { before: "값마다 근거 캡처를 확인한 디자인 시스템 ", after: "개" },
  lede: ({ refs, verified }) =>
    `실제 제품의 색, 글꼴, 모서리 둥글기, 컴포넌트를 코딩 에이전트가 읽는 DESIGN.md로 정리했습니다. 전체 ${refs}개 중 검증을 마친 ${verified}개는 값마다 근거 캡처가 남아 있고, 나머지는 어디까지 확인했는지 등급으로 표시합니다. 하나 골라 빌더에서 열어 보세요.`,
  ledeShort: "코딩 에이전트가 그대로 따르는 DESIGN.md입니다. 하나 골라 빌더에서 열어 보세요.",
  tiers: {
    heading: "레퍼런스 등급",
    verified: { label: "검증", def: "모든 값을 실제 제품이나 공식 문서 캡처로 확인했습니다." },
    partial: { label: "부분", def: "캡처는 있지만 일부 값이나 출처가 비었거나 오래됐습니다." },
    legacy: { label: "레거시", def: "근거 수집 전에 쓴 문서입니다. 출발점으로만 쓰세요." },
    example: ({ name, backed, claims, surfaces }) => `${name} 예시 보기: 값 ${claims}개 중 ${backed}개 근거 확인, 화면 ${surfaces}곳`,
  },
  search: {
    label: "찾기",
    placeholder: (refs) => `${refs}개 중 검색 — 토스, kakao, 배민…`,
    noMatch: "이름이 맞는 레퍼런스가 없습니다.",
    loading: "카탈로그를 불러오는 중…",
    open: "빌더에서 열기",
    resultsLabel: "검색 결과",
  },
  top: {
    heading: "빌더에서 많이 고른 순",
    live: "실시간 집계",
    snapshot: (date) => `${date} 기준 집계`,
    all: (refs) => `전체 ${refs}개`,
    openHint: "빌더에서 열립니다",
  },
  status: { verified_v2: "검증", partial: "부분", legacy_snapshot: "레거시" },
  preview: {
    heading: "미리보기",
    hint: "목록에 마우스를 올리거나 아래에서 브랜드를 고르세요.",
    sampleTitle: "에이전트가 만들 화면 예시",
    sampleBody: "이 레퍼런스의 토큰만으로 색과 모양을 입혔습니다.",
    sampleAction: "계속하기",
    fontNote: (font) => `${font} 글꼴은 불러오지 않아 이 페이지 글꼴로 표시합니다.`,
    noCanvas: "이 레퍼런스에는 배경색 값이 없어 페이지 바탕 위에 보여 줍니다.",
    open: (name) => `${name} 빌더에서 열기`,
    chooser: "미리 볼 브랜드",
  },
  how: {
    heading: "이렇게 씁니다",
    steps: [
      { title: "레퍼런스 고르기", body: "검색하거나 많이 고른 순에서 시작하세요. 검증 레퍼런스는 값마다 근거를 보여 줍니다." },
      { title: "빌더에서 다듬기", body: "색, 글꼴, 컴포넌트를 바꾸면 미리보기가 바로 따라옵니다." },
      { title: "에이전트에게 DESIGN.md 넘기기", body: "파일을 내려받아 Claude Code, Codex, Cursor, OpenCode에 넣으세요. 빌더가 써 준 첫 프롬프트도 함께 쓰면 됩니다." },
    ],
  },
  cli: {
    heading: "에이전트가 일하는 곳에 바로 설치",
    body: (skills) => `명령 하나로 스킬 ${skills}개와 오프라인 카탈로그가 Claude Code, Codex, Cursor, OpenCode에 들어갑니다. 설치하는 동안 AI를 호출하지 않습니다.`,
    command: "npx oh-my-design-cli@latest",
    skillsLink: "스킬 전체 보기",
    skills: [
      { name: "omd:init", body: "프로젝트에 맞는 카탈로그 레퍼런스로 DESIGN.md를 세팅합니다." },
      { name: "omd:apply", body: "평소 UI 수정이 DESIGN.md를 벗어나지 않게 합니다." },
      { name: "omd:autopilot", body: "프롬프트 하나로 새 화면을 설계하고 구현합니다." },
      { name: "omd:harness", body: "단계마다 멈춰서 검토를 받는 안내형 디자인 작업입니다." },
      { name: "omd:feel", body: "수치로 정한 규칙으로 인터페이스 디테일을 적용하거나 점검합니다." },
      { name: "omd:remember", body: "고쳐 준 내용을 기록해 다음 수정부터 반영합니다." },
    ],
  },
  wall: {
    heading: "검증 레퍼런스의 대표색, 색상순",
    body: (n) => `브랜드 색 ${n}개. 각 레퍼런스 페이지에 나오는 대표색 그대로입니다.`,
    link: (refs) => `${refs}개 전체 보기`,
  },
  footer: {
    tagline: "AI 코딩 에이전트를 위한, 실제 제품에서 가져온 DESIGN.md 레퍼런스. 무료 오픈소스입니다.",
    product: "제품",
    project: "프로젝트",
    links: {
      catalog: "카탈로그",
      builder: "빌더",
      docs: "문서",
      what: "DESIGN.md란",
      faq: "FAQ",
      changelog: "변경 기록",
      alternatives: "다른 도구와 비교",
      privacy: "개인정보처리방침",
      terms: "이용약관",
      issues: "이슈",
      license: "MIT 라이선스",
    },
    provisional: "워드마크는 임시입니다.",
  },
};
