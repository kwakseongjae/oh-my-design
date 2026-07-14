export const ENGLISH_REFERENCE_IDS = ["baemin", "toss", "kakao", "naver", "karrot"] as const;
export type EnglishReferenceId = (typeof ENGLISH_REFERENCE_IDS)[number];

export interface ReferenceEvolutionChange {
  readonly claim: string;
  readonly before: string;
  readonly after: string;
  readonly reason: string;
}

export interface ReferenceEnglishEditorial {
  readonly id: EnglishReferenceId;
  readonly name: string;
  readonly canonicalSummary: string;
  readonly evidenceBoundary: string;
  readonly keywords: readonly string[];
  readonly evolution: readonly ReferenceEvolutionChange[];
}

export const REFERENCE_ENGLISH_EDITORIAL: Readonly<Record<EnglishReferenceId, ReferenceEnglishEditorial>> = {
  baemin: {
    id: "baemin",
    name: "Baemin",
    canonicalSummary: "Baemin combines a brighter Baemin 2.0 mint direction with a long-running Korean type culture rooted in neighborhood storefront lettering. The current reference keeps the official WORK app-typeface claim, live baemin.com measurements, Woowa corporate UI, and the public font catalog in separate evidence domains.",
    evidenceBoundary: "WORK is confirmed for the current app but has no browser-loadable specimen source; web, corporate, catalog, and app typography are not substitutes for one another.",
    keywords: ["Baemin design system", "Baemin mint", "Baemin WORK font", "Korean delivery app design"],
    evolution: [
      {
        claim: "tokens.colors.primary",
        before: "#2ac1bc",
        after: "#0cefd3",
        reason: "The former Baemin mint was replaced by the current live baemin.com measurement aligned with the brighter Baemin 2.0 direction.",
      },
      {
        claim: "tokens.typography.family.app",
        before: "Unresolved product UI family",
        after: "WORK / BAEMINWORK — metadata only",
        reason: "The official product-use claim is retained while the unavailable live specimen remains absent instead of being substituted.",
      },
    ],
  },
  toss: {
    id: "toss",
    name: "Toss",
    canonicalSummary: "Toss uses a calm blue interaction system, purpose-built Toss Product Sans, and direct hierarchy to reduce the institutional distance of financial tasks. The reference separates official TDS Mobile product contracts from the tighter geometry measured on toss.im rather than presenting one universal component kit.",
    evidenceBoundary: "TDS Mobile is the product-system source; toss.im is marketing-web evidence. Values cross that boundary only when an official or measured claim explicitly supports both.",
    keywords: ["Toss design system", "TDS Mobile", "Toss Product Sans", "fintech UI tokens"],
    evolution: [
      {
        claim: "tokens.colors.primary",
        before: "#0064ff brand token",
        after: "#3182f6 product primary",
        reason: "The product interaction color is now tied to current TDS evidence instead of a broader brand-color assumption.",
      },
      {
        claim: "tokens.components",
        before: "Generic 56px buttons, input, and card recipes",
        after: "Official TDS sizes/states plus separate toss.im controls",
        reason: "Component geometry is retained per inspected surface rather than blended into a plausible Toss-like fallback set.",
      },
    ],
  },
  kakao: {
    id: "kakao",
    name: "Kakao",
    canonicalSummary: "Kakao’s recognizable yellow and speech-bubble identity spans multiple services, but its public surfaces do not form one transferable UI kit. The reference distinguishes Kakao corporate typography, the regulated Kakao Login integration, and Pretendard-based developer-documentation chrome.",
    evidenceBoundary: "Corporate marketing yellow, Kakao Login yellow, and developer-documentation styles remain surface-local even when they look visually related.",
    keywords: ["Kakao design system", "Kakao Login button", "Kakao yellow", "Kakao typography"],
    evolution: [
      {
        claim: "tokens.colors.primary",
        before: "#fee500 as a universal Kakao primary",
        after: "No universal product primary",
        reason: "The same company identity cannot promote a login-integration color into every Kakao product surface.",
      },
      {
        claim: "tokens.components",
        before: "Generic chat inputs, cards, and destructive controls",
        after: "Observed corporate controls and official Kakao Login only",
        reason: "Unverified Kakao-like application components were removed while separately sourced public controls were preserved.",
      },
    ],
  },
  naver: {
    id: "naver",
    name: "NAVER",
    canonicalSummary: "NAVER’s official green connects a dense family of search and discovery services, but the company does not expose one public product design system for every surface. The reference therefore separates portal-home controls, search-results patterns, and the NAVER Corp brand-resource page.",
    evidenceBoundary: "NAVER Green is an identity constant; portal/search System-first typography and corporate-page InterVariable remain separate surface observations.",
    keywords: ["NAVER design system", "NAVER green", "NAVER search UI", "Korean portal design"],
    evolution: [
      {
        claim: "tokens.colors.primary",
        before: "#03c75a as a universal UI primary",
        after: "#03c75a as official brand identity",
        reason: "The official color remains, but it no longer authorizes generic buttons, cards, or inputs across NAVER services.",
      },
      {
        claim: "tokens.components.search",
        before: "Generic 56px green search input",
        after: "Measured portal search input and submit controls",
        reason: "The branded search assembly now follows live portal geometry and keeps unobserved states absent.",
      },
    ],
  },
  karrot: {
    id: "karrot",
    name: "Karrot",
    canonicalSummary: "Karrot uses warm orange accents and restrained chrome to keep neighborhood content and human relationships dominant. The reference treats SEED v2 as the canonical product-system source while preserving the public marketing site as a separate source for its font stack and CTA geometry.",
    evidenceBoundary: "SEED product primary #ff6f0f and marketing CTA #ff6600 are both valid, but neither replaces the other outside its documented surface.",
    keywords: ["Karrot design system", "SEED design system", "Karrot orange", "hyperlocal app UI"],
    evolution: [
      {
        claim: "tokens.colors.primary",
        before: "#ff6600 universal primary",
        after: "#ff6f0f SEED product primary",
        reason: "The current product token now comes from official SEED v2; #ff6600 remains only as a measured marketing CTA.",
      },
      {
        claim: "tokens.components",
        before: "Generic listing cards, inputs, and destructive buttons",
        after: "Official SEED component contracts and measured marketing controls",
        reason: "Plausible marketplace UI was removed unless an official contract or live surface supported it.",
      },
    ],
  },
};

export function getReferenceEnglishEditorial(id: string): ReferenceEnglishEditorial | null {
  return REFERENCE_ENGLISH_EDITORIAL[id as EnglishReferenceId] ?? null;
}

export function referenceSharePath(id: string): string {
  return getReferenceEnglishEditorial(id)
    ? `/design-systems/${id}/evolution`
    : `/design-systems/${id}`;
}
