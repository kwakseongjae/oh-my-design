/**
 * The walk's screen types (Korean vocabulary, as the sheets write them) in the order every page lists them, and the
 * ASCII slug each one goes by in a URL (`?type=search-results`) and in a downloaded file's name
 * (`karrot-mobile-search-results-search.jpg`). Pure: the client imports it.
 *
 * Order: what a visitor meets first (home, search, lists, a detail), then what is around it (content, feed, map,
 * cart, likes, profile), then the account and help screens, then events and pop-ups; then any type this table does not
 * know yet (by name), the untyped bucket 「화면」, and last the addresses that do not exist (오류). A state such as
 * 빈 상태 stays with its type, after that type's other screens.
 *
 * 「화면」 is the walk's catch-all (a salary page, a membership page, a transport page): the pages name it 기타 / Other
 * and the gallery's type filter leaves it out, since "other" is not a kind of screen to compare across services.
 */

export const TYPE_ORDER = [
  "홈",
  "검색",
  "검색 결과",
  "목록",
  "카테고리",
  "상세",
  "콘텐츠",
  "피드",
  "커뮤니티",
  "지도",
  "장바구니",
  "좋아요",
  "프로필",
  "로그인",
  "회원가입",
  "고객센터",
  "이벤트",
  "팝업",
] as const;

/** The walk's catch-all type. */
export const OTHER_TYPE = "화면";
/** The walk's type for an address that does not exist. */
export const NOT_FOUND_TYPE = "오류";

const SLUG: Record<string, string> = {
  홈: "home",
  검색: "search",
  "검색 결과": "search-results",
  목록: "list",
  카테고리: "category",
  상세: "detail",
  콘텐츠: "content",
  피드: "feed",
  커뮤니티: "community",
  지도: "map",
  장바구니: "cart",
  좋아요: "likes",
  프로필: "profile",
  로그인: "sign-in",
  회원가입: "sign-up",
  고객센터: "help",
  이벤트: "event",
  팝업: "popup",
  [OTHER_TYPE]: "other",
  [NOT_FOUND_TYPE]: "not-found",
};

/** A type's ASCII slug; a type the table does not know yet is "screen" (file names stay ASCII and unique by key). */
export const typeSlug = (type: string): string => SLUG[type] ?? "screen";

/** The type a URL's `type=` names: a known slug, or (for a type the table does not know) the type as written. */
export function typeFromParam(param: string | null, types: readonly string[]): string | null {
  if (!param) return null;
  return types.find((t) => SLUG[t] === param) ?? types.find((t) => t === param) ?? null;
}

/** The value a URL carries for a type: its slug when it has one, else the type as written. */
export const typeParam = (type: string): string => SLUG[type] ?? type;

const coll = new Intl.Collator("ko");

/** Sort key: the fixed order, then unknown types by name, then 「화면」, then 「오류」. */
export function compareTypes(a: string, b: string): number {
  const rank = (t: string) => {
    const i = (TYPE_ORDER as readonly string[]).indexOf(t);
    if (i >= 0) return i;
    if (t === OTHER_TYPE) return TYPE_ORDER.length + 1;
    if (t === NOT_FOUND_TYPE) return TYPE_ORDER.length + 2;
    return TYPE_ORDER.length;
  };
  return rank(a) - rank(b) || coll.compare(a, b);
}

/** Screens grouped by type in the fixed order; inside a type the walk's order, with state screens (빈 상태) last. */
export function groupByType<T extends { type: string; state: string | null }>(cards: T[]): { type: string; cards: T[] }[] {
  const types = [...new Set(cards.map((c) => c.type))].sort(compareTypes);
  return types.map((type) => {
    const of = cards.filter((c) => c.type === type);
    return { type, cards: [...of.filter((c) => !c.state), ...of.filter((c) => c.state)] };
  });
}

/** English names of the walk's screen types; an unlisted type is shown as written. */
const NAME_EN: Record<string, string> = {
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
  좋아요: "Likes",
  프로필: "Profile",
};

/** A screen type's name: the walk's word in Korean, its English name in English; the walk's catch-all 「화면」 is
 *  기타 / Other. The pages (components/screens/copy.ts) and the MCP screen tools both name types by this. */
export function typeName(locale: "en" | "ko", type: string): string {
  if (type === OTHER_TYPE) return locale === "ko" ? "기타" : "Other";
  return locale === "ko" ? type : (NAME_EN[type] ?? type);
}
