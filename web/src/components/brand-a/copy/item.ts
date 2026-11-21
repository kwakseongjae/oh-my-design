/**
 * Item-page chrome (/design-systems/<id> and /ko/design-systems/<id>). Client-safe.
 *
 * Only the frame around a reference is localised. The DESIGN.md body, token
 * values, font names and component names stay as written in the canonical file.
 * The Korean strings are written natively (해요체, as the /ko landing copy), not
 * converted from the English ones.
 *
 * Round 11 (W7): the h1 is "{Name} DESIGN.md"; the hero holds the two actions
 * (Copy DESIGN.md, Download) as the `#use` group; the "how to use" section, the
 * evidence panel, the wide-text toggle and the body-language note are gone.
 */

import type { FontLicense } from "@/lib/font-registry";
import type { ColorGroupKey, StateKey } from "@/components/item/preview-model";
import type { ScreenGroupId } from "@/lib/screens/model";
import { SCREENS_NOTICE, type ScreensNoticeCopy } from "@/components/screens/notice-copy";

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

/** Section and spec names inside <ReferencePreview>; values stay as the reference writes them. */
export interface PreviewLabels {
  colors: string;
  type: string;
  shape: string;
  components: string;
  /** Colour groups, named after what the token keys say (components/item/preview-model.ts). */
  groups: Record<ColorGroupKey, string>;
  /** Numbered hue scales ("grey50" … "grey900"), drawn as ramps. */
  scales: string;
  copyColor: (name: string, hex: string) => string;
  copied: string;
  scale: string;
  showAll: (n: number) => string;
  showFewer: string;
  /** Screen-reader form of a type role's metrics; an unrecorded metric is left out. */
  metrics: (size: number, lineHeight?: string, weight?: number, tracking?: string) => string;
  spacing: string;
  radius: string;
  elevation: string;
  /** Font roles as the reference names them; an unlisted role is shown as written. */
  roles: Record<string, string>;
  license: Record<FontLicense, string>;
  install: (where: string) => string;
  source: (where: string) => string;
  spec: { fill: string; text: string; border: string; radius: string; height: string; padding: string; type: string };
  /** Component state names; the recorded value follows as written. */
  states: Record<StateKey, string>;
  /** Lead-in for a component's recorded `states` inventory. */
  inventory: string;
}

/**
 * The Screens tab (components/item/screens-tab.tsx), shown only where a local
 * screens folder is configured (lib/screens/local.server.ts). Screen titles,
 * types and states are the walk's own Korean vocabulary: the Korean page shows
 * them as written, the English page names the type and state through
 * `typeName` / `stateName` and keeps the recorded title.
 */
export interface ScreensLabels {
  /** The tab: "화면" + the count beside it. */
  tab: string;
  /** Accessible name of the desktop tab row. */
  tabsLabel: string;
  shot: (date: string) => string;
  signedOut: string;
  groups: Record<ScreenGroupId, string>;
  lead: string;
  widthName: (width: number) => string;
  blocked: string;
  /** A card's button when the large view shows the full page … */
  open: (title: string) => string;
  /** … and when it shows the first-viewport still (published screens have no full page). */
  openStill: (title: string) => string;
  typeName: (type: string) => string;
  stateName: (state: string) => string;
  panel: string;
  panelLead: string;
  /** The rule of the count, verbatim from the brief. */
  exactOnly: string;
  colorCount: (matched: number, comparable: number) => string;
  onScreens: (n: number) => string;
  notSeen: string;
  filtered: (token: string, n: number) => string;
  clear: string;
  counter: (i: number, n: number) => string;
  prev: string;
  next: string;
  close: string;
  fullAlt: (title: string) => string;
  stillAlt: (title: string) => string;
  /** The rights, takedown and masked lines, shown once screens are published. */
  notice: ScreensNoticeCopy;
}

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
  화면: "Screen",
  좋아요: "Likes",
  프로필: "Profile",
};

export interface ItemLabels {
  crumb: string;
  crumbHref: string;
  h1: (name: string) => string;
  /** Accessible name of the `#use` action group in the hero. */
  useLabel: string;
  copyMd: string;
  copied: string;
  download: string;
  srCopied: string;
  official: string;
  show: string;
  preview: string;
  related: string;
  /** Default labels of <InstallCta> (components/install-cta.tsx). The item page no longer renders it. */
  install: InstallLabels;
  shareLabels: ShareLabels;
  pv: PreviewLabels;
  screens: ScreensLabels;
}

export const ITEM_EN: ItemLabels = {
  crumb: "Archive",
  crumbHref: "/design-systems",
  h1: (name) => `${name} DESIGN.md`,
  useLabel: "Use this DESIGN.md",
  copyMd: "Copy DESIGN.md",
  copied: "Copied",
  download: "Download",
  srCopied: "DESIGN.md copied",
  official: "Official site",
  show: "Show",
  preview: "Preview",
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
  screens: {
    tab: "Screens",
    tabsLabel: "DESIGN.md or screens",
    shot: (d) => `Shot on ${d}`,
    signedOut: "signed out",
    groups: { core: "Core screens", states: "States", more: "More from this service" },
    lead: "Width in front",
    widthName: (w) => (w >= 1024 ? `Desktop ${w}` : `Mobile ${w}`),
    blocked: "Blocked",
    open: (title) => `Open the full page of ${title}`,
    openStill: (title) => `Open ${title}`,
    typeName: (type) => SCREEN_TYPE_EN[type] ?? type,
    stateName: (state) => (state === "빈 상태" ? "Empty state" : state),
    panel: "Compared with DESIGN.md",
    panelLead: "Where this company's DESIGN.md colors are drawn on its screens with the same value. Select a value to keep only the screens that show it.",
    exactOnly: "Only exact matches count. A value that does not appear is not a wrong value.",
    colorCount: (m, c) => `Black and white aside, ${m} of ${c} colors appear on screen.`,
    onScreens: (n) => (n === 1 ? "1 screen" : `${n} screens`),
    notSeen: "Not seen",
    filtered: (token, n) => `Showing the ${n === 1 ? "screen" : `${n} screens`} with ${token}`,
    clear: "Clear",
    counter: (i, n) => `${i} / ${n}`,
    prev: "Previous screen",
    next: "Next screen",
    close: "Close",
    fullAlt: (title) => `Full page of ${title}`,
    stillAlt: (title) => `${title}, as it first opens`,
    notice: SCREENS_NOTICE.en,
  },
  pv: {
    colors: "Colors",
    type: "Typography",
    shape: "Spacing & shape",
    components: "Components",
    groups: { brand: "Brand", surface: "Surface & text", status: "Status", other: "Other colors" },
    scales: "Scales",
    copyColor: (name, hex) => `Copy ${name} ${hex}`,
    copied: "Copied",
    scale: "Type scale",
    showAll: (n) => `Show all ${n}`,
    showFewer: "Show fewer",
    metrics: (size, lh, w, tr) =>
      [`${size}px`, lh ? `line height ${lh}` : null, w ? `weight ${w}` : null, tr ? `letter spacing ${tr}` : null]
        .filter(Boolean)
        .join(", "),
    spacing: "Spacing",
    radius: "Corner radius",
    elevation: "Elevation",
    roles: {
      primary: "Primary",
      mono: "Monospace",
      display: "Display",
      serif: "Serif",
      fallback: "Fallback",
      icon: "Icon",
      declared: "Declared",
      sans: "Sans",
      ui: "UI",
      brand: "Brand",
      body: "Body",
      heading: "Heading",
      code: "Code",
      numerals: "Numerals",
      editorial: "Editorial",
    },
    license: {
      OFL: "Open font · OFL",
      "Apache 2.0": "Open font · Apache 2.0",
      Proprietary: "Commercial font",
      "Brand-proprietary": "Brand face, not publicly distributed",
      System: "System font",
      Mixed: "Mixed licences",
    },
    install: (w) => `Install via ${w}`,
    source: (w) => `Source · ${w}`,
    spec: { fill: "Fill", text: "Text", border: "Border", radius: "Radius", height: "Height", padding: "Padding", type: "Type" },
    states: {
      hover: "Hover",
      pressed: "Pressed",
      active: "Active",
      focus: "Focus",
      disabled: "Disabled",
      selected: "Selected",
      checked: "Checked",
      error: "Error",
    },
    inventory: "States",
  },
};

export const ITEM_KO: ItemLabels = {
  crumb: "아카이브",
  crumbHref: "/ko/design-systems",
  h1: (name) => `${name} DESIGN.md`,
  useLabel: "이 DESIGN.md 쓰기",
  copyMd: "DESIGN.md 복사",
  copied: "복사했어요",
  download: "내려받기",
  srCopied: "DESIGN.md를 복사했어요",
  official: "공식 사이트",
  show: "보기",
  preview: "미리보기",
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
  screens: {
    tab: "화면",
    tabsLabel: "DESIGN.md와 화면",
    shot: (d) => {
      const [y, m, day] = d.split("-").map(Number);
      return `${y}년 ${m}월 ${day}일에 찍은 화면`;
    },
    signedOut: "로그아웃 상태",
    groups: { core: "핵심 화면", states: "상태", more: "이 서비스의 화면" },
    lead: "앞에 둘 폭",
    widthName: (w) => (w >= 1024 ? `데스크톱 ${w}` : `모바일 ${w}`),
    blocked: "막힘",
    open: (title) => `${title} 전체 화면 보기`,
    openStill: (title) => `${title} 크게 보기`,
    typeName: (type) => type,
    stateName: (state) => state,
    panel: "DESIGN.md와 대조",
    panelLead: "이 회사 DESIGN.md의 색이 화면에 같은 값으로 그려진 곳입니다. 값을 누르면 그 값이 보이는 화면만 남습니다.",
    exactOnly: "정확히 같은 값만 셉니다. 보이지 않는 값이 틀린 값이라는 뜻은 아닙니다.",
    colorCount: (m, c) => `검정과 흰색을 뺀 색 ${c}개 중 ${m}개가 화면에 보입니다.`,
    onScreens: (n) => `화면 ${n}개`,
    notSeen: "보이지 않음",
    filtered: (token, n) => `${token} 값이 보이는 화면 ${n}개`,
    clear: "필터 지우기",
    counter: (i, n) => `${i} / ${n}`,
    prev: "이전 화면",
    next: "다음 화면",
    close: "닫기",
    fullAlt: (title) => `${title} 전체 화면`,
    stillAlt: (title) => `${title} 첫 화면`,
    notice: SCREENS_NOTICE.ko,
  },
  pv: {
    colors: "색상",
    type: "타이포그래피",
    shape: "여백과 모양",
    components: "컴포넌트",
    groups: { brand: "브랜드", surface: "면과 글자", status: "상태", other: "그 밖의 색" },
    scales: "단계별 색",
    copyColor: (name, hex) => `${name} ${hex} 복사`,
    copied: "복사했어요",
    scale: "타입 스케일",
    showAll: (n) => `${n}개 모두 보기`,
    showFewer: "접기",
    metrics: (size, lh, w, tr) =>
      [`${size}px`, lh ? `행간 ${lh}` : null, w ? `굵기 ${w}` : null, tr ? `자간 ${tr}` : null].filter(Boolean).join(", "),
    spacing: "여백",
    radius: "모서리 반경",
    elevation: "그림자",
    roles: {
      primary: "기본",
      mono: "고정폭",
      display: "디스플레이",
      serif: "세리프",
      fallback: "폴백",
      icon: "아이콘",
      declared: "선언",
      sans: "산세리프",
      ui: "UI",
      brand: "브랜드",
      body: "본문",
      heading: "제목",
      code: "코드",
      numerals: "숫자",
      editorial: "에디토리얼",
    },
    license: {
      OFL: "오픈 글꼴 · OFL",
      "Apache 2.0": "오픈 글꼴 · Apache 2.0",
      Proprietary: "상용 글꼴",
      "Brand-proprietary": "브랜드 전용 글꼴, 공개 배포 안 함",
      System: "시스템 글꼴",
      Mixed: "라이선스 혼합",
    },
    install: (w) => `${w}에서 설치`,
    source: (w) => `출처 · ${w}`,
    spec: { fill: "채움", text: "글자", border: "테두리", radius: "반경", height: "높이", padding: "안쪽 여백", type: "글자 크기·굵기" },
    states: {
      hover: "호버",
      pressed: "누름",
      active: "활성",
      focus: "포커스",
      disabled: "비활성",
      selected: "선택",
      checked: "체크",
      error: "오류",
    },
    inventory: "기록된 상태",
  },
};
