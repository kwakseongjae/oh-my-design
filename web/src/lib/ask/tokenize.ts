/**
 * Lexical tokenizer for the question box index (docs/REDESIGN_R11_PLAN_2026-10-20.md W4).
 *
 * Whitespace splitting is useless for Japanese and Chinese (no spaces) and weak for Korean
 * (particles glue onto nouns), and question words ("어떻게 … 있나요", "ますか", "嗎") would
 * otherwise outrank the words that carry the question. Per script:
 *
 * - Latin: lower-cased words with a light English plural fold (agents → agent), stopwords
 *   dropped; compounds like `oh-my-design-cli` or `design.md` keep the whole form and add their
 *   parts; two adjacent words also form a phrase token ("claude design"), so a two-word name
 *   beats its common halves.
 * - Hangul (spaced): one token per word. A trailing particle or ending is stripped (토스는 → 토스,
 *   레퍼런스도 → 레퍼런스), so is a 하다/되다 verb tail (검증하나요 → 검증, 설치하려면 → 설치);
 *   question words, function verbs and single syllables are dropped.
 * - Kana and kanji (unspaced): hiragana is grammar (ます, には) and is dropped; katakana and
 *   kanji runs become character bigrams (インストール → イン, ンス, …; 日本企業 → 日本, 本企, 企業).
 * - Han in Chinese text (`zh`): the run is split at function characters (的, 嗎, 什麼 …)
 *   first, so 有台灣企業的參考嗎 → 台灣, 灣企, 企業, 參考.
 *
 * A long word yields many bigrams, so in a query each bigram of a run weighs 1/n of the run
 * (queryTerms): リファレンス counts as one word, not five, against 日本.
 * Text and query go through the same rules, NFKC-normalised.
 */

export interface TokenizeOptions {
  /** Treat Han runs as Chinese (split at function characters). Japanese and mixed text: false. */
  zh?: boolean;
}

const HANGUL = "\\p{Script=Hangul}";
const HIRA = "\\p{Script=Hiragana}";
const KATA = "\\p{Script=Katakana}ー";
const HAN = "\\p{Script=Han}々〆";
const CJK = `${HANGUL}${HIRA}${KATA}${HAN}`;
/** A letter or digit outside the CJK scripts, so `tossの` splits into `toss` + `の`. */
const LAT = `(?:(?![${CJK}])[\\p{L}\\p{N}])`;
const RUN = new RegExp(`[${HANGUL}]+|[${HIRA}]+|[${KATA}]+|[${HAN}]+|${LAT}+(?:[.\\-_']${LAT}+)*`, "gu");
const IS_HANGUL = new RegExp(`^[${HANGUL}]`, "u");
const IS_HIRA = new RegExp(`^[${HIRA}]`, "u");
const IS_KATA = new RegExp(`^[${KATA}]`, "u");
const IS_HAN = new RegExp(`^[${HAN}]`, "u");

/** English function words, plus generic nouns every passage shares. */
const EN_STOP = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "am", "to", "of", "and", "or", "in", "on",
  "at", "for", "with", "by", "from", "as", "it", "its", "this", "that", "these", "those", "i", "you",
  "your", "my", "me", "we", "our", "us", "do", "does", "did", "can", "could", "should", "would", "will",
  "how", "what", "which", "who", "why", "when", "where", "there", "here", "about", "into", "than",
  "then", "so", "if", "not", "no", "yes", "any", "some", "please", "tell", "company", "companies",
  "go", "goes", "get", "gets",
]);

/** Korean particles and endings, longest first. */
const KO_ENDINGS = [
  "에서부터", "으로부터", "이었나요", "할까요", "될까요", "있나요", "없나요", "했나요", "됐나요", "한가요",
  "인가요", "하나요", "되나요", "습니다", "합니다", "입니다", "이에요", "에서는", "에서도", "으로는",
  "으로도", "에게는", "까지도", "이라도", "나요", "가요", "까요", "해요", "어요", "아요", "예요", "에요",
  "세요", "니다", "에게", "한테", "에서", "으로", "까지", "부터", "마다", "처럼", "보다", "이나", "이랑",
  "에는", "에도", "와는", "과는", "라는", "이란", "은", "는", "이", "가", "을", "를", "의", "에", "로",
  "와", "과", "도", "만", "요",
];
/** An ending that makes the word a verb: with a one-syllable stem it is a function verb (있나요, 쓰나요). */
const KO_VERB_END = /(?:나요|가요|까요|해요|어요|아요|예요|에요|세요|니다|습니다|합니다)$/;
/** Sino-Korean noun + 하다/되다/시키다 (설치하려면, 검증했나요, 변경됐어요, 다양한). */
const KO_HADA = /^(\p{Script=Hangul}{2,}?)(?:하|해|했|할|한|합|함|되|돼|됐|될|된|됩|시키|시켜)\p{Script=Hangul}*$/u;
const KO_STOP = new Set([
  "어떻게", "어떤", "무엇", "뭔가", "뭐예요", "왜", "언제", "어디", "정말", "혹시", "그리고", "그냥",
  "우리", "이거", "그거", "저거", "이것", "그것", "또는", "그래서", "하지만", "궁금", "알려줘", "알려주",
  "보여주", "보여줘", "가능", "있나요", "없나요", "있어요", "있는", "없는", "하는", "되는", "되나요",
  "하나요", "해주", "해줘", "주세요", "싶어요", "같아요", "들어가", "들어있", "들어", "얼마나",
]);

/** Chinese function characters; a run is split at them before bigramming. */
const ZH_STOP = new Set(Array.from("的了嗎呢吧啊也都就還很是在有和與及或我你他她們這那哪什麼怎能會可以要請問之其為於並但而被把讓給跟個些樣如何么吗这"));
/** Single kanji left between kana are mostly verb stems (書かれる, 使える) or 何. */
const JA_STOP = new Set(Array.from("何書使見入作言出行来思分知持聞読用合付取"));
/** Kanji words that frame a question rather than carry it (インストール方法, 是否需要). */
const HAN_BIGRAM_STOP = new Set(["方法", "仕方", "場合", "必要", "可能", "一覧", "内容", "內容", "意味", "理由", "需要", "是否", "沒有", "有沒", "哪裡", "怎樣", "為何", "意思"]);

export interface WeightedToken {
  t: string;
  w: number;
}

function fold(word: string): string {
  if (word.length > 4 && word.endsWith("ies")) return `${word.slice(0, -3)}y`;
  if (word.length > 4 && /(?:ch|sh|x|z|ss)es$/.test(word)) return word.slice(0, -2);
  if (word.length > 3 && word.endsWith("s") && !/(?:ss|us|is)$/.test(word)) return word.slice(0, -1);
  return word;
}

function bigrams(out: WeightedToken[], chars: readonly string[]): void {
  if (chars.length === 1) {
    out.push({ t: chars[0], w: 1 });
    return;
  }
  const grams: string[] = [];
  for (let i = 0; i < chars.length - 1; i++) {
    const g = chars[i] + chars[i + 1];
    if (!HAN_BIGRAM_STOP.has(g)) grams.push(g);
  }
  for (const t of grams) out.push({ t, w: 1 / grams.length });
}

/** The stem to index, or null when the word is grammar (에서도, 있나요, 쓰나요). */
function koreanStem(word: string): string | null {
  const chars = Array.from(word);
  let stem = word;
  for (const end of KO_ENDINGS) {
    if (!word.endsWith(end)) continue;
    const stemLen = chars.length - Array.from(end).length;
    if (stemLen >= 2) stem = chars.slice(0, stemLen).join("");
    else if (stemLen === 0 || KO_VERB_END.test(word)) return null;
    break; // a two-syllable noun that only looks inflected (속도, 필요) stays whole
  }
  const hada = KO_HADA.exec(stem);
  if (hada) stem = hada[1];
  if (Array.from(stem).length >= 3 && stem.endsWith("들")) stem = stem.slice(0, -1); // plural
  return stem;
}

function pushHangul(out: WeightedToken[], word: string): void {
  if (KO_STOP.has(word)) return;
  const stem = koreanStem(word);
  if (!stem || KO_STOP.has(stem) || Array.from(stem).length < 2) return;
  out.push({ t: stem, w: 1 });
}

function pushHan(out: WeightedToken[], run: string, zh: boolean): void {
  const chars = Array.from(run);
  if (!zh) {
    if (chars.length === 1 && JA_STOP.has(chars[0])) return;
    bigrams(out, chars);
    return;
  }
  let part: string[] = [];
  for (const ch of [...chars, ""]) {
    if (ch && !ZH_STOP.has(ch)) {
      part.push(ch);
      continue;
    }
    if (part.length) bigrams(out, part);
    part = [];
  }
}

export function weightedTokens(text: string, opts: TokenizeOptions = {}): WeightedToken[] {
  const out: WeightedToken[] = [];
  const s = text.normalize("NFKC").toLowerCase();
  let prevWord: string | null = null;
  let prevEnd = -1;
  for (const m of s.matchAll(RUN)) {
    const run = m[0];
    const start = m.index ?? 0;
    if (IS_HANGUL.test(run)) {
      pushHangul(out, run);
      prevWord = null;
    } else if (IS_HIRA.test(run)) {
      prevWord = null; // grammar, not content
    } else if (IS_KATA.test(run)) {
      bigrams(out, Array.from(run));
      prevWord = null;
    } else if (IS_HAN.test(run)) {
      pushHan(out, run, !!opts.zh);
      prevWord = null;
    } else {
      const word = run.replace(/'s$/, "");
      const keep = (w: string) => w.length > 1 && !EN_STOP.has(w);
      if (keep(word)) {
        const f = fold(word);
        out.push({ t: f, w: 1 });
        // a phrase token for two adjacent content words ("claude design")
        if (prevWord && /^\s+$/.test(s.slice(prevEnd, start))) out.push({ t: `${prevWord} ${f}`, w: 1 });
        prevWord = f;
      } else {
        prevWord = null;
      }
      if (/[.\-_]/.test(word)) {
        for (const part of word.split(/[.\-_]+/)) if (keep(part) && part !== word) out.push({ t: fold(part), w: 1 });
      }
    }
    prevEnd = start + run.length;
  }
  return out;
}

/** Index side: every token counts once per occurrence. */
export function tokenize(text: string, opts: TokenizeOptions = {}): string[] {
  return weightedTokens(text, opts).map((x) => x.t);
}

/** Query side: term → weight, a run's bigrams sharing one word's weight. */
export function queryTerms(text: string, opts: TokenizeOptions = {}): Map<string, number> {
  const terms = new Map<string, number>();
  for (const { t, w } of weightedTokens(text, opts)) terms.set(t, Math.min(1, (terms.get(t) ?? 0) + w));
  return terms;
}
