/**
 * Native-language + colloquial search aliases for references.
 *
 * The catalog `name` / `displayName` are English-first, so a Korean user
 * searching "토스" or "왓챠" got zero results. This map adds native names
 * (KR / JP / ZH) + common short forms + Korean transliterations of foreign
 * brands (e.g. "라인" → LINE), keyed by reference id.
 *
 * `refMatchesQuery` is the single matcher every search surface should use:
 * it folds id + name + displayName + aliases into one haystack. Brands not
 * listed here still match on their English name/displayName/id as before.
 */

export const SEARCH_ALIASES: Record<string, string[]> = {
  // ── KR ──────────────────────────────────────────────
  toss: ["토스"],
  "toss-securities": ["토스증권", "토스 증권"],
  karrot: ["당근", "당근마켓"],
  baemin: ["배민", "배달의민족", "배달의 민족"],
  coupang: ["쿠팡"],
  naver: ["네이버"],
  kakao: ["카카오"],
  kakaobank: ["카카오뱅크"],
  kakaopay: ["카카오페이"],
  kbank: ["케이뱅크", "K뱅크"],
  musinsa: ["무신사"],
  kurly: ["컬리", "마켓컬리", "마켓 컬리"],
  "29cm": ["이십구센티미터", "이십구씨엠", "29씨엠"],
  ably: ["에이블리"],
  banksalad: ["뱅크샐러드"],
  bunjang: ["번개장터", "번장"],
  channeltalk: ["채널톡", "채널 톡"],
  catchtable: ["캐치테이블"],
  class101: ["클래스101", "클래스원오원"],
  classum: ["클라썸"],
  dabang: ["다방"],
  fastcampus: ["패스트캠퍼스"],
  flex: ["플렉스"],
  gangnamunni: ["강남언니"],
  gmarket: ["지마켓", "G마켓"],
  inflearn: ["인프런"],
  jumpit: ["점핏"],
  krds: ["케이알디에스"],
  kream: ["크림"],
  lunit: ["루닛"],
  myrealtrip: ["마이리얼트립", "마리트"],
  ohouse: ["오늘의집", "오늘의 집"],
  oliveyoung: ["올리브영", "올영"],
  qanda: ["콴다"],
  remember: ["리멤버"],
  ridi: ["리디", "리디북스"],
  socar: ["쏘카", "소카"],
  spoon: ["스푼", "스푼라디오"],
  triple: ["트리플"],
  tving: ["티빙"],
  upbit: ["업비트"],
  upstage: ["업스테이지"],
  wadiz: ["와디즈"],
  wanted: ["원티드"],
  watcha: ["왓챠"],
  yanolja: ["야놀자"],
  yeogiotte: ["여기어때", "여기 어때", "goodchoice"],
  zigbang: ["직방"],
  zigzag: ["지그재그"],
  // ── JP ──────────────────────────────────────────────
  line: ["ライン", "라인"],
  mercari: ["メルカリ", "메루카리", "메르카리"],
  freee: ["フリー", "프리"],
  cookpad: ["クックパッド", "쿡패드"],
  "money-forward": ["マネーフォワード", "머니포워드", "머니 포워드"],
  note: ["ノート", "노트"],
  smarthr: ["スマートHR", "스마트HR", "스마트 HR"],
  smartnews: ["スマートニュース", "스마트뉴스", "스마트 뉴스"],
  // ── TW ──────────────────────────────────────────────
  dcard: ["狄卡", "디카드"],
  pinkoi: ["핀코이"],
  gogoro: ["고고로"],
  kkday: ["케이케이데이"],
  "17live": ["一七直播", "17직播", "17라이브"],
  ichef: ["아이셰프"],
  appier: ["沛星", "아피어"],
  // ── CN ──────────────────────────────────────────────
  alipay: ["支付宝", "支付寶", "알리페이", "앤트디자인", "ant design", "antd"],
  xiaohongshu: ["小红书", "小紅書", "샤오훙수", "샤오홍슈", "레드", "redbook", "red"],
  bilibili: ["哔哩哔哩", "비리비리", "빌리빌리", "B站", "b사이트"],
  meituan: ["美团", "美團", "메이퇀", "메이투안"],
  dji: ["大疆", "디제이아이"],
};

interface SearchableRef {
  id: string;
  name: string;
  displayName?: string;
}

/** Lowercased haystack for a reference: id + name + displayName + aliases. */
export function searchHaystack(ref: SearchableRef): string {
  const parts = [ref.id, ref.name, ref.displayName ?? "", ...(SEARCH_ALIASES[ref.id] ?? [])];
  return parts.join(" ").toLowerCase();
}

/** True when the (already-trimmed) query matches the reference by any field/alias. */
export function refMatchesQuery(ref: SearchableRef, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return searchHaystack(ref).includes(q);
}
