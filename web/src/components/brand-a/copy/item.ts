/**
 * Item-page chrome (/design-systems/<id> and /ko/design-systems/<id>). Client-safe.
 *
 * Only the frame around a reference is localised. The DESIGN.md body, token
 * values, reason codes and the English editorial boundary stay as written in the
 * canonical file. The Korean strings are written natively (해요체, as the /ko
 * landing copy), not converted from the English ones.
 */

export interface InstallLabels {
  install: string;
  prompt: string;
  copy: string;
  copied: string;
  failed: string;
  ariaInstall: string;
  ariaPrompt: (brand: string) => string;
  /** The first prompt the user pastes into their agent. */
  promptFor: (brand: string) => string;
}

export interface ShareLabels {
  share: string;
  copied: string;
  aria: string;
  ariaCopied: string;
}

export interface ItemLabels {
  crumb: string;
  crumbHref: string;
  tier: { v: string; p: string; l: string };
  h1: (name: string) => string;
  copyMd: string;
  copied: string;
  download: string;
  srCopied: string;
  useH2: (name: string) => string;
  useSub: string;
  rawMd: string;
  official: string;
  evidence: string;
  boundary: string;
  dt: { primary: string; type: string; radius: string; claims: string; sources: string; fontBasis: string; components: string };
  sources: (surfaces: number, sources: number) => string;
  unresolved: string;
  compNone: string;
  compDocumented: (n: number) => string;
  compNoInteractive: string;
  compInteractive: (n: number, stated: number) => string;
  drawer: string;
  needsWork: string;
  notBacked: string;
  advisory: Record<string, string>;
  paletteFound: (pct: number) => string;
  motionNote: string;
  show: string;
  preview: string;
  wide: string;
  narrow: string;
  /** One line above the English DESIGN.md on a non-English page; null on the English page. */
  bodyNote: string | null;
  related: string;
  install: InstallLabels;
  shareLabels: ShareLabels;
}

export const ITEM_EN: ItemLabels = {
  crumb: "Archive",
  crumbHref: "/design-systems",
  tier: { v: "Verified v2", p: "Partial", l: "Legacy snapshot" },
  h1: (name) => `${name} design system`,
  copyMd: "Copy DESIGN.md",
  copied: "Copied",
  download: "Download",
  srCopied: "DESIGN.md copied",
  useH2: (name) => `Use the ${name} DESIGN.md`,
  useSub: "Put the file at your project root, install the skills, and give your coding agent the first prompt.",
  rawMd: "Raw .md",
  official: "Official site",
  evidence: "Evidence",
  boundary: "Evidence boundary:",
  dt: {
    primary: "Primary",
    type: "Typography",
    radius: "Radius",
    claims: "Claims grounded",
    sources: "Sources",
    fontBasis: "UI font basis",
    components: "Components",
  },
  sources: (s, n) => `${s} surfaces · ${n} sources`,
  unresolved: "unresolved",
  compNone: "none documented",
  compDocumented: (n) => `${n} documented`,
  compNoInteractive: "none interactive",
  compInteractive: (n, stated) => `${n} interactive${stated > 0 ? `, ${stated} with states` : ""}`,
  drawer: "What the evidence does not cover",
  needsWork: "Needs work:",
  notBacked: "Not backed by evidence",
  advisory: {
    motion_value_unsourced: "Motion values here were not observed in any capture",
    component_state_prose_only: "Component states are described in prose, not given per-state values",
    component_noninteractive_only: "No interactive component is documented",
    component_absent: "No components are documented",
    token_value_self_declared_derived: "Some token values say they were derived rather than measured",
    token_value_possibly_derived: "Some token values read as derived rather than measured",
    palette_grounding_low: "Most declared colours were not found on the brand's live surface",
    palette_contradicted:
      "The declared palette is contradicted — a 2026-07 capture and a 2026-09 page report the same low figure, two months apart",
  },
  paletteFound: (pct) => ` (${pct}% found)`,
  motionNote:
    "The motion values in this reference were not observed in a capture — and neither were anyone’s. No design system we checked publishes a duration or easing scale; Toss states outright that its component motion lives in the Figma UI Kit rather than in its documentation. Treat any exact curve here as a local default.",
  show: "Show",
  preview: "Preview",
  wide: "Wide text",
  narrow: "Narrow text",
  bodyNote: null,
  related: "Related design systems",
  install: {
    install: "Install the skills",
    prompt: "Give your agent the first prompt",
    copy: "Copy",
    copied: "Copied",
    failed: "Copy failed",
    ariaInstall: "Copy install command",
    ariaPrompt: (b) => `Copy first prompt for ${b}`,
    promptFor: (b) => `Set up our design system — ${b}-style.`,
  },
  shareLabels: { share: "Share", copied: "Copied", aria: "Copy share link", ariaCopied: "Share link copied" },
};

export const ITEM_KO: ItemLabels = {
  crumb: "아카이브",
  crumbHref: "/ko/design-systems",
  tier: { v: "검증 v2", p: "부분 검증", l: "이전 스냅숏" },
  h1: (name) => `${name} 디자인 시스템`,
  copyMd: "DESIGN.md 복사",
  copied: "복사했어요",
  download: "내려받기",
  srCopied: "DESIGN.md를 복사했어요",
  useH2: (name) => `${name} DESIGN.md 쓰는 법`,
  useSub: "파일을 프로젝트 루트에 두고 스킬을 설치한 뒤, 코딩 에이전트에 첫 프롬프트를 건네세요.",
  rawMd: "원문 .md",
  official: "공식 사이트",
  evidence: "근거",
  boundary: "근거 범위(영문):",
  dt: {
    primary: "대표 색상",
    type: "글꼴",
    radius: "모서리 반경",
    claims: "근거가 있는 값",
    sources: "출처",
    fontBasis: "UI 글꼴 근거",
    components: "컴포넌트",
  },
  sources: (s, n) => `화면 ${s}곳 · 출처 ${n}개`,
  unresolved: "확인되지 않음",
  compNone: "기록 없음",
  compDocumented: (n) => `${n}개 기록`,
  compNoInteractive: "인터랙티브 없음",
  compInteractive: (n, stated) => `인터랙티브 ${n}개${stated > 0 ? `, 상태별 값 ${stated}개` : ""}`,
  drawer: "근거가 닿지 않는 부분",
  needsWork: "보완할 점:",
  notBacked: "근거가 없는 값",
  advisory: {
    motion_value_unsourced: "모션 값은 어떤 캡처에서도 관측되지 않았어요",
    component_state_prose_only: "컴포넌트 상태가 상태별 값 없이 글로만 적혀 있어요",
    component_noninteractive_only: "인터랙티브 컴포넌트가 기록되지 않았어요",
    component_absent: "기록된 컴포넌트가 없어요",
    token_value_self_declared_derived: "일부 토큰 값은 측정하지 않고 파생했다고 스스로 밝히고 있어요",
    token_value_possibly_derived: "일부 토큰 값은 측정값보다 파생값에 가까워 보여요",
    palette_grounding_low: "선언된 색 대부분이 브랜드의 실제 화면에서 확인되지 않았어요",
    palette_contradicted:
      "선언된 팔레트와 실제 화면이 어긋나요. 2026년 7월 캡처와 9월 페이지가 두 달 간격으로 같은 낮은 수치를 보여요",
  },
  paletteFound: (pct) => ` (${pct}% 확인)`,
  motionNote:
    "이 레퍼런스의 모션 값은 캡처에서 관측되지 않았어요. 다른 레퍼런스도 마찬가지예요. 확인한 디자인 시스템 가운데 지속 시간이나 이징 스케일을 공개한 곳은 없었고, 토스는 컴포넌트 모션이 문서가 아니라 Figma UI Kit에 있다고 직접 밝혔어요. 여기 적힌 곡선 값은 프로젝트에서 정하는 기본값으로 보세요.",
  show: "보기",
  preview: "미리보기",
  wide: "넓게 보기",
  narrow: "좁게 보기",
  bodyNote: "DESIGN.md는 영어 원문 그대로예요. 번역하지 않은 정본 파일이라, 복사하거나 내려받는 내용도 이 원문과 같아요.",
  related: "비슷한 디자인 시스템",
  install: {
    install: "스킬 설치",
    prompt: "에이전트에 건넬 첫 프롬프트",
    copy: "복사",
    copied: "복사했어요",
    failed: "복사하지 못했어요",
    ariaInstall: "설치 명령어 복사",
    ariaPrompt: (b) => `${b} 첫 프롬프트 복사`,
    promptFor: (b) => `우리 디자인 시스템을 ${b} 스타일로 세팅해 줘.`,
  },
  shareLabels: { share: "공유", copied: "복사했어요", aria: "공유 링크 복사", ariaCopied: "공유 링크를 복사했어요" },
};
