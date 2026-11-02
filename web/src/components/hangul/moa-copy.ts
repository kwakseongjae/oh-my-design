/**
 * The moa screens on the /hangul page: one fintech home screen, set twice. `typo` picks the
 * typesetting (moa.css), `copy` picks the strings below; everything else on the screen is shared.
 *
 * moa is the fintech service whose landing page the 2026-09 typography eval asked agents to build
 * (docs/research/2026-09-29-growth/hangul-eval-results.md). The figures (320만 명+, 12조 원+, 4.9) and
 * the heading come from the page Codex built there without the skill (run p1-A-r3), as do the "ai"
 * typesetting values in moa.css; the home screen around them is drawn for this page.
 * The "ai" strings are not eval output: they collect phrasings agents commonly write (translationese,
 * hype, system-side success messages, 합쇼체 mixed into 해요체) so that each one breaks a writing rule
 * the page names. The page says once, under the install box, that these screens are examples.
 *
 * copy-check (skills/hangul/scripts/copy-check.mjs) finds nothing in "fix" or in the shared strings,
 * and 2 WARN + 6 FYI in "ai" (2026-10-24). It does not see every marked rule: 고객님, 확인 · 취소 and
 * the greeting's tone need a reader, which is what the chapter's notes are for.
 * web/__tests__/hangul-page.test.ts runs the checker on all three sets.
 */

export type MoaSide = "ai" | "fix";

export interface MoaCopy {
  readonly greeting: string;
  readonly total: string;
  readonly toast: string;
  readonly toastSub: string;
  readonly banner: string;
  readonly sheetTitle: string;
  readonly sheetBody: string;
  /** the sheet's buttons: the one that closes it, then the one that sends */
  readonly close: string;
  readonly send: string;
  readonly error: string;
  readonly helper: string;
}

export const MOA_COPY: Readonly<Record<MoaSide, MoaCopy>> = {
  ai: {
    greeting: "반가워요, 지우님! 오늘도 스마트한 금융 생활을 시작해보세요",
    total: "고객님의 총 자산",
    toast: "송금이 성공적으로 완료되었습니다!",
    toastSub: "소중한 마음까지 빠르게 전달되었어요",
    banner: "놓치면 후회하는 특별한 혜택! 지금 바로 확인하세요",
    sheetTitle: "송금하시겠습니까?",
    sheetBody: "5만원이 즉시 이체되어집니다.",
    close: "취소",
    send: "확인",
    error: "오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
    helper: "금일 이체 한도는 500만원입니다.",
  },
  fix: {
    greeting: "반가워요, 지우님",
    total: "내 총 자산",
    toast: "엄마에게 5만 원을 보냈어요",
    toastSub: "방금 · 수수료 0원",
    banner: "이번 달 혜택 보기",
    sheetTitle: "엄마에게 5만 원을 보낼까요?",
    sheetBody: "보내면 바로 엄마 계좌로 들어가요.",
    close: "닫기",
    send: "보내기",
    error: "인터넷 연결이 끊겼어요. 연결을 확인하고 다시 보내 주세요.",
    helper: "오늘 보낼 수 있는 금액은 500만 원이에요.",
  },
};

/** What both sides share: the screen's furniture and its figures. */
export const MOA_SHARED = {
  app: "모아",
  amount: "24,680,000원",
  deltaLead: "지난달보다",
  delta: "+1,250,000원",
  accounts: "내 계좌",
  transfer: "송금하기",
  recentH: "최근 보낸 사람",
  recent: ["엄마", "민준", "서연", "하늘"],
  statsCap: "모아 주요 지표",
  statsH: "이미 많은 사람들이 모아와 함께하고 있어요.",
  stats: [
    { value: "320", unit: "만 명+", label: "함께하는 사용자" },
    { value: "12", unit: "조 원+", label: "누적 송금액" },
    { value: "4.9", unit: "", label: "앱 평점" },
  ],
  asOf: "2026년 9월 기준",
  tabs: ["홈", "혜택", "송금", "전체"],
} as const;

/** Copy marks: the rules each "ai" string breaks, shown beside it on both sides of the 문구 chapter. */
export const MOA_COPY_MARKS: Readonly<Partial<Record<keyof MoaCopy | "buttons", string>>> = {
  greeting: "HW-12 · HW-13",
  total: "HW-8",
  toast: "HW-8 · HW-13",
  banner: "HW-12 · HW-13",
  sheetTitle: "HW-11",
  sheetBody: "HW-2 · HW-8 · HW-11",
  buttons: "HW-5",
  error: "HW-4",
  helper: "HW-2 · HW-7 · HW-11",
};

/** Type marks: where the 조판 chapter points, on both sides. */
export const MOA_TYPE_MARKS = {
  greeting: "HG-1",
  toast: "HG-6 · HG-4",
  statsH: "HG-7 · HG-10",
  asOf: "HG-3",
} as const;
