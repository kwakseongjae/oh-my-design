/**
 * Deterministic text → MatchIntent parser.
 *
 * No AI. Hand-curated rules map query substrings to tag hints + hard
 * filters (script, family). Good enough for 80% of typical queries like
 * "warm korean sans" or "retro display english". Nuanced queries
 * ("찐득찐득한 여름밤") need a Phase 2 LLM layer.
 */

import type { FontEntry, FontFamily, FontScript } from "./types";
import { FONT_CATALOG } from "./catalog";
import { similarity } from "./similarity";

export interface MatchIntent {
  raw: string;
  tags: {
    mood: string[];
    era: string[];
    use: string[];
    personality: string[];
  };
  /** Hard filter — if present, non-matching fonts are excluded. */
  scripts?: FontScript[];
  family?: FontFamily;
  /** Reference font id if user mentioned one by name. */
  referenceFontId?: string;
}

interface Rule {
  /** Lowercased substrings/keywords that activate this rule. */
  kw: string[];
  tags?: Partial<MatchIntent["tags"]>;
  scripts?: FontScript[];
  family?: FontFamily;
}

/* Keyword dictionary — Korean + English. Rules are OR'd: any matching
 * keyword activates the rule's tag contributions. Hard filters (scripts,
 * family) are last-wins. */
const RULES: Rule[] = [
  // ─── Scripts ───
  { kw: ["한글", "한국", "한국어", "korean", "hangul"], scripts: ["hangul"] },
  { kw: ["영문", "영어", "latin", "english"], scripts: ["latin"] },

  // ─── Families ───
  { kw: ["세리프", "serif"], family: "serif" },
  { kw: ["산세리프", "sans-serif", "sans serif", "고딕"], family: "sans" },
  { kw: ["모노", "mono", "monospace", "코드", "code"], family: "mono" },
  { kw: ["필기", "손글씨", "캘리그라피", "calligraphy", "handwritten", "script"], family: "handwritten" },
  { kw: ["디스플레이", "display", "포스터", "poster", "타이틀", "headline"], family: "display" },

  // ─── Moods ───
  { kw: ["따뜻한", "따뜻", "warm", "cozy", "코지"], tags: { mood: ["warm"] } },
  { kw: ["차가운", "차분한", "cool", "sharp", "각진"], tags: { mood: ["sharp"] } },
  { kw: ["미니멀", "심플", "깔끔", "minimal", "clean", "simple"], tags: { mood: ["clean", "neutral"] } },
  { kw: ["우아", "우아한", "elegant", "luxurious", "고급"], tags: { mood: ["elegant", "editorial"] } },
  { kw: ["재미있는", "장난", "playful", "fun", "귀여운", "cute", "아기자기", "깜찍", "앙증", "상큼"], tags: { mood: ["playful", "warm"], personality: ["friendly", "cute"] } },
  { kw: ["레트로", "빈티지", "복고", "retro", "vintage"], tags: { mood: ["retro", "bold"] } },
  { kw: ["기술적", "technical", "engineering", "개발자", "엔지니어"], tags: { mood: ["technical"] } },
  { kw: ["부드러운", "soft", "rounded", "둥근", "둥글", "동글동글", "동글", "몽글몽글", "몽글", "말랑말랑", "말랑", "뭉글", "폭신", "poki"], tags: { mood: ["soft", "friendly", "warm"], personality: ["gentle", "approachable"] } },
  { kw: ["강렬한", "볼드", "굵은", "bold", "heavy", "impact", "임팩트"], tags: { mood: ["bold", "impactful"] } },
  { kw: ["친근한", "편안한", "approachable", "friendly", "casual"], tags: { mood: ["friendly", "warm"] } },
  { kw: ["표현력", "expressive", "creative", "독특"], tags: { mood: ["expressive", "characterful"] } },
  { kw: ["편집", "editorial", "잡지", "매거진", "magazine"], tags: { mood: ["editorial"] } },
  { kw: ["읽기", "가독성", "readable", "reading", "본문"], tags: { mood: ["readable"] } },

  // ─── Eras ───
  { kw: ["1970s", "70년대", "70s", "seventies", "retro-70"], tags: { era: ["1970s", "retro"] } },
  { kw: ["1980s", "80년대", "80s", "eighties"], tags: { era: ["1980s", "retro"] } },
  { kw: ["2020", "2020s", "요즘", "최신", "modern"], tags: { era: ["2020s", "contemporary"] } },
  { kw: ["2010s", "2010년대"], tags: { era: ["2010s"] } },
  { kw: ["timeless", "시대를 초월", "클래식", "classical"], tags: { era: ["timeless"] } },
  { kw: ["signage", "간판", "포스터"], tags: { era: ["signage"] } },

  // ─── Use cases ───
  { kw: ["ui", "인터페이스", "interface", "앱", "app"], tags: { use: ["ui"] } },
  { kw: ["본문", "body", "paragraph", "긴 글", "reading"], tags: { use: ["body"] } },
  { kw: ["제목", "heading", "headline", "타이틀", "title"], tags: { use: ["heading", "display"] } },
  { kw: ["로고", "logo", "브랜드", "brand"], tags: { use: ["logo", "display"] } },
  { kw: ["accent", "강조", "하이라이트"], tags: { use: ["accent"] } },
  { kw: ["주석", "annotation", "note"], tags: { use: ["accent", "annotation"] } },
  { kw: ["code", "코드", "programming", "개발"], tags: { use: ["code"] } },

  // ─── Personality ───
  { kw: ["전문적", "프로페셔널", "professional"], tags: { personality: ["professional"] } },
  { kw: ["humanist", "휴머니스트", "사람"], tags: { personality: ["humanist"] } },
  { kw: ["confident", "자신감"], tags: { personality: ["confident"] } },
  { kw: ["quirky", "개성", "독특"], tags: { personality: ["quirky", "characterful"] } },
  { kw: ["approachable", "다가가기"], tags: { personality: ["approachable"] } },
  { kw: ["luxurious", "럭셔리"], tags: { personality: ["luxurious", "sophisticated"] } },
  { kw: ["thoughtful", "사려깊은", "deliberate"], tags: { personality: ["thoughtful", "deliberate"] } },
  { kw: ["personal", "친밀", "개인적"], tags: { personality: ["personal", "authentic"] } },

  // ─── Specific vibes ───
  { kw: ["카페", "café", "cafe", "브런치", "brunch"], tags: { mood: ["warm", "friendly"], personality: ["approachable"] } },
  { kw: ["판교", "스타트업", "startup", "tech startup"], tags: { mood: ["clean", "modern"], use: ["ui"] } },
  { kw: ["책", "book", "literary", "문학"], tags: { mood: ["readable", "editorial"], use: ["body"] } },
  { kw: ["신문", "newspaper", "뉴스"], tags: { mood: ["readable", "editorial"], use: ["body"] } },
  { kw: ["브루탈", "brutalist", "거친"], tags: { mood: ["bold", "impactful"] } },
  { kw: ["y2k", "2000년대 초반", "millennium"], tags: { mood: ["retro", "playful", "geometric"] } },
  { kw: ["일기", "diary", "저널", "journal"], tags: { mood: ["handwritten", "personal"] } },
];

/** Detect if the query names a font in the catalog (e.g., "like pretendard"). */
function findReference(query: string, catalog: FontEntry[]): FontEntry | undefined {
  const q = query.toLowerCase();
  for (const f of catalog) {
    const nameL = f.name.toLowerCase();
    if (q.includes(nameL) || q.includes(f.id)) return f;
  }
  return undefined;
}

/** Parse a free-text query into a MatchIntent. Case-insensitive. */
export function parseIntent(query: string, catalog: FontEntry[] = FONT_CATALOG): MatchIntent {
  const q = query.toLowerCase();
  const intent: MatchIntent = {
    raw: query,
    tags: { mood: [], era: [], use: [], personality: [] },
  };

  for (const rule of RULES) {
    if (rule.kw.some((k) => q.includes(k))) {
      if (rule.tags?.mood) intent.tags.mood.push(...rule.tags.mood);
      if (rule.tags?.era) intent.tags.era.push(...rule.tags.era);
      if (rule.tags?.use) intent.tags.use.push(...rule.tags.use);
      if (rule.tags?.personality) intent.tags.personality.push(...rule.tags.personality);
      if (rule.scripts) intent.scripts = [...new Set([...(intent.scripts ?? []), ...rule.scripts])];
      if (rule.family) intent.family = rule.family;
    }
  }

  // Dedupe tag lists
  intent.tags.mood = [...new Set(intent.tags.mood)];
  intent.tags.era = [...new Set(intent.tags.era)];
  intent.tags.use = [...new Set(intent.tags.use)];
  intent.tags.personality = [...new Set(intent.tags.personality)];

  // Catalog name reference (e.g. "like pretendard")
  const ref = findReference(query, catalog);
  if (ref) intent.referenceFontId = ref.id;

  return intent;
}

export interface MatchResult {
  font: FontEntry;
  /** 0.0-1.0 normalized. */
  confidence: number;
  /** Human-readable reasons ("shared mood: warm, clean · same script"). */
  reasons: string[];
}

/** Score a single font against the intent. Returns raw (unnormalized) score. */
function scoreFont(font: FontEntry, intent: MatchIntent, refScore?: number): number {
  // Hard filters
  if (intent.scripts && !intent.scripts.some((s) => font.scripts.includes(s))) return 0;
  if (intent.family && font.family !== intent.family) return 0;

  let score = 0;
  // Tag overlaps — each matching tag is worth 1.0; mood weighted higher.
  score += font.tags.mood.filter((t) => intent.tags.mood.includes(t)).length * 1.2;
  score += font.tags.era.filter((t) => intent.tags.era.includes(t)).length * 0.8;
  score += font.tags.use.filter((t) => intent.tags.use.includes(t)).length * 1.0;
  score += font.tags.personality.filter((t) => intent.tags.personality.includes(t)).length * 0.8;

  // Reference bonus — if user mentioned a font by name, boost similar ones
  if (refScore) score += refScore * 0.6;

  return score;
}

function reasonsForMatch(font: FontEntry, intent: MatchIntent, isReference: boolean): string[] {
  const reasons: string[] = [];
  if (isReference) reasons.push("you asked for this font by name");

  const moodHit = font.tags.mood.filter((t) => intent.tags.mood.includes(t));
  if (moodHit.length > 0) reasons.push(`mood: ${moodHit.slice(0, 2).join(", ")}`);

  const useHit = font.tags.use.filter((t) => intent.tags.use.includes(t));
  if (useHit.length > 0 && reasons.length < 3) reasons.push(`for ${useHit[0]}`);

  if (intent.scripts && intent.scripts.some((s) => font.scripts.includes(s)) && reasons.length < 3) {
    reasons.push(`supports ${intent.scripts.join(" + ")}`);
  }

  if (intent.family && font.family === intent.family && reasons.length < 3) {
    reasons.push(`${font.family}`);
  }

  return reasons.slice(0, 3);
}

/** Safe defaults for queries that produce zero rule hits. Three different
 *  personalities each — used as a "we couldn't parse you but here are
 *  generally useful picks" fallback. Three variants so post-filter by
 *  script never leaves an empty list. */
const SAFE_DEFAULTS_BOTH = ["pretendard", "gowun-dodum", "gothic-a1"];
const SAFE_DEFAULTS_HANGUL_ONLY = ["pretendard", "gowun-dodum", "noto-sans-kr"];
const SAFE_DEFAULTS_LATIN_ONLY = ["inter", "manrope", "dm-sans"];

function safeDefaultResults(
  catalog: FontEntry[],
  requiredScripts: FontScript[] = [],
): MatchResult[] {
  const want = new Set(requiredScripts);
  const ids =
    want.size === 0 || (want.has("hangul") && want.has("latin"))
      ? SAFE_DEFAULTS_BOTH
      : want.has("hangul")
        ? SAFE_DEFAULTS_HANGUL_ONLY
        : SAFE_DEFAULTS_LATIN_ONLY;
  const picks = ids
    .map((id) => catalog.find((f) => f.id === id))
    .filter((f): f is FontEntry => Boolean(f))
    .slice(0, 3);
  return picks.map((font) => ({
    font,
    confidence: 0.15,
    reasons: ["general-purpose pick", `${font.family}`],
  }));
}

/** Run intent → ranked MatchResults. Top N with normalized confidence.
 *  Guarantees at least 3 picks — falls through to `SAFE_DEFAULT_IDS`
 *  when no rule hits, so callers never see an empty list mid-flow. */
export function runMatch(
  intent: MatchIntent,
  catalog: FontEntry[] = FONT_CATALOG,
  limit = 5,
): MatchResult[] {
  // If user named a reference, precompute similarity once
  const reference = intent.referenceFontId
    ? catalog.find((f) => f.id === intent.referenceFontId)
    : undefined;

  const raw = catalog
    .map((f) => {
      const refScore = reference ? similarity(reference, f) : 0;
      const score = scoreFont(f, intent, refScore);
      return {
        font: f,
        score,
        isReference: reference?.id === f.id,
      };
    })
    .filter((r) => r.score > 0 || r.isReference)
    .sort((a, b) => b.score - a.score);

  if (raw.length === 0) {
    return safeDefaultResults(catalog, intent.scripts ?? []).slice(0, limit);
  }

  const maxScore = raw[0].score || 1;
  return raw.slice(0, limit).map((r) => ({
    font: r.font,
    confidence: Math.min(1, r.score / Math.max(maxScore, 4)),
    reasons: reasonsForMatch(r.font, intent, r.isReference),
  }));
}

/** Convenience: one-shot query → results. `requiredScripts` acts as a
 *  hard filter on top of the parsed intent — if the UI selected "hangul",
 *  every returned font must include "hangul" in its scripts. */
export function matchQuery(
  query: string,
  catalog: FontEntry[] = FONT_CATALOG,
  limit = 5,
  requiredScripts: FontScript[] = [],
): MatchResult[] {
  if (!query.trim()) return [];
  const intent = parseIntent(query, catalog);
  if (requiredScripts.length > 0) {
    // Merge UI-selected scripts with any the intent parser already picked
    // up (e.g., "한글" word in query). Union is conservative — we want
    // every listed script satisfied.
    const merged = new Set<FontScript>([
      ...(intent.scripts ?? []),
      ...requiredScripts,
    ]);
    intent.scripts = [...merged];
  }
  const results = runMatch(intent, catalog, limit);
  if (requiredScripts.length === 0) return results;
  return results.filter((r) =>
    requiredScripts.every((s) => r.font.scripts.includes(s)),
  );
}
