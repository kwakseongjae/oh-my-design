/* ── Design Personality Type System ────────────────────────
 *
 * 4 axes, 2 poles each → 16 types (like MBTI)
 *
 * Axes:
 *   T (Temperature)  : C (Cool)    vs W (Warm)
 *   D (Density)      : D (Dense)   vs O (Open)
 *   E (Elevation)    : F (Flat)    vs L (Layered)
 *   S (Shape)        : S (Sharp)   vs R (Rounded)
 *
 * Type code example: "CDFS" = Cool + Dense + Flat + Sharp
 * ───────────────────────────────────────────────────────── */

export type Temperature = "C" | "W";
export type Density = "D" | "O";
export type Elevation = "F" | "L";
export type Shape = "S" | "R";

export type TypeCode = `${Temperature}${Density}${Elevation}${Shape}`;

export interface DesignType {
  code: TypeCode;
  name: string;
  nameKo: string;
  tagline: string;
  taglineKo: string;
  description: string;
  descriptionKo: string;
  /** Top matching reference IDs with affinity scores (0-100) */
  references: { id: string; score: number }[];
  /** Lucide icon name for the result card */
  icon: string;
}

/* ── 16 Design Types ──────────────────────────────────────── */

export const DESIGN_TYPES: Record<TypeCode, DesignType> = {
  // ── Cool × Dense × Flat × Sharp ─────────────────────────
  CDFS: {
    code: "CDFS",
    name: "The Engineer",
    nameKo: "엔지니어",
    tagline: "Precision is beauty",
    taglineKo: "정밀함이 곧 아름다움",
    description: "You build interfaces like instruments — every pixel measured, every interaction deliberate. No decoration, just function refined to its purest form.",
    descriptionKo: "인터페이스를 정밀 기계처럼 만드는 당신. 모든 픽셀이 계산되고, 모든 인터랙션이 의도적입니다. 장식 없이, 기능 자체가 미학입니다.",
    references: [
      { id: "linear.app", score: 95 },
      { id: "vercel", score: 92 },
    ],
    icon: "wrench",
  },
  CDLS: {
    code: "CDLS",
    name: "The Architect",
    nameKo: "아키텍트",
    tagline: "Structure creates clarity",
    taglineKo: "구조가 명확함을 만든다",
    description: "You layer information with surgical precision. Dense data, deep shadows, sharp edges — your interfaces are blueprints that breathe.",
    descriptionKo: "정보를 외과적 정밀함으로 쌓아올리는 당신. 밀도 높은 데이터, 깊은 그림자, 날카로운 모서리 — 살아 숨쉬는 설계도.",
    references: [
      { id: "raycast", score: 93 },
      { id: "clickhouse", score: 88 },
    ],
    icon: "ruler",
  },
  CDFR: {
    code: "CDFR",
    name: "The Operator",
    nameKo: "오퍼레이터",
    tagline: "Cool efficiency, soft touch",
    taglineKo: "차가운 효율, 부드러운 터치",
    description: "You pack information densely but keep it approachable with rounded forms. A cockpit that feels friendly.",
    descriptionKo: "정보를 빈틈없이 채우면서도 둥근 형태로 접근성을 유지하는 당신. 친근한 조종석 같은 인터페이스.",
    references: [
      { id: "spotify", score: 90 },
      { id: "sentry", score: 85 },
    ],
    icon: "sliders-horizontal",
  },
  CDLR: {
    code: "CDLR",
    name: "The Commander",
    nameKo: "커맨더",
    tagline: "Rich depth, maximum control",
    taglineKo: "풍부한 깊이, 최대의 통제",
    description: "Dense layouts with layered shadows and soft curves. Your interfaces feel like premium control panels — powerful yet refined.",
    descriptionKo: "레이어드 그림자와 부드러운 곡선이 어우러진 고밀도 레이아웃. 프리미엄 컨트롤 패널 같은 강력하면서도 세련된 인터페이스.",
    references: [
      { id: "supabase", score: 91 },
      { id: "framer", score: 87 },
    ],
    icon: "rocket",
  },

  // ── Cool × Open × Flat × Sharp ──────────────────────────
  COFS: {
    code: "COFS",
    name: "The Minimalist",
    nameKo: "미니멀리스트",
    tagline: "Less is everything",
    taglineKo: "적을수록 완벽하다",
    description: "Maximum whitespace, zero decoration. Your design philosophy: if it doesn't need to exist, it shouldn't. Every element earns its place.",
    descriptionKo: "최대한의 여백, 장식 제로. 존재할 필요 없으면 존재하지 않는다. 모든 요소가 자리를 증명해야 합니다.",
    references: [
      { id: "apple", score: 95 },
      { id: "tesla", score: 91 },
    ],
    icon: "square",
  },
  COLS: {
    code: "COLS",
    name: "The Curator",
    nameKo: "큐레이터",
    tagline: "Elevated simplicity",
    taglineKo: "격을 높인 단순함",
    description: "Clean and spacious, but with subtle depth that lifts elements off the page. A gallery where each piece floats in its own space.",
    descriptionKo: "깨끗하고 넓지만, 미묘한 깊이감으로 요소들이 페이지 위에 떠오르는 갤러리. 각 조각이 자기만의 공간에서 부유합니다.",
    references: [
      { id: "superhuman", score: 93 },
      { id: "resend", score: 89 },
    ],
    icon: "frame",
  },
  COFR: {
    code: "COFR",
    name: "The Zen",
    nameKo: "젠",
    tagline: "Calm by design",
    taglineKo: "설계된 고요함",
    description: "Open spaces, rounded forms, flat surfaces. Your interfaces are meditation rooms — nothing competes for attention, everything flows.",
    descriptionKo: "열린 공간, 둥근 형태, 평평한 표면. 아무것도 관심을 놓고 경쟁하지 않는 명상의 방 같은 인터페이스.",
    references: [
      { id: "ollama", score: 94 },
      { id: "expo", score: 88 },
    ],
    icon: "leaf",
  },
  COLR: {
    code: "COLR",
    name: "The Dreamer",
    nameKo: "드리머",
    tagline: "Soft clouds, deep layers",
    taglineKo: "부드러운 구름, 깊은 층위",
    description: "Spacious layouts with floating cards and gentle shadows. Your interfaces feel like walking through clouds — airy, elevated, ethereal.",
    descriptionKo: "떠다니는 카드와 부드러운 그림자가 있는 넓은 레이아웃. 구름 속을 걷는 듯한 인터페이스.",
    references: [
      { id: "together.ai", score: 92 },
      { id: "elevenlabs", score: 88 },
    ],
    icon: "cloud",
  },

  // ── Warm × Dense × Flat × Sharp ─────────────────────────
  WDFS: {
    code: "WDFS",
    name: "The Editor",
    nameKo: "에디터",
    tagline: "Warmth meets precision",
    taglineKo: "따뜻함이 정밀함을 만나다",
    description: "Dense information, warm tones, sharp edges. Your interfaces read like a well-typeset editorial — structured yet inviting.",
    descriptionKo: "밀도 높은 정보, 따뜻한 톤, 날카로운 모서리. 잘 조판된 에디토리얼처럼 구조적이면서도 초대하는 인터페이스.",
    references: [
      { id: "cursor", score: 93 },
      { id: "intercom", score: 87 },
    ],
    icon: "newspaper",
  },
  WDLS: {
    code: "WDLS",
    name: "The Craftsman",
    nameKo: "장인",
    tagline: "Rich layers, warm hands",
    taglineKo: "풍성한 층위, 따뜻한 손길",
    description: "Dense, warm, layered, and precise. Every component feels handcrafted — shadows give weight, warm colors give soul.",
    descriptionKo: "밀도 있고, 따뜻하고, 겹겹이 쌓이고, 정밀한. 모든 컴포넌트가 수공예처럼 느껴지는 인터페이스.",
    references: [
      { id: "stripe", score: 94 },
      { id: "revolut", score: 88 },
    ],
    icon: "hammer",
  },
  WDFR: {
    code: "WDFR",
    name: "The Neighbor",
    nameKo: "이웃",
    tagline: "Packed with care",
    taglineKo: "정성으로 가득 채우다",
    description: "Dense but friendly. Warm colors, rounded corners, flat surfaces — like a bustling neighborhood market that knows your name.",
    descriptionKo: "빽빽하지만 친근한. 따뜻한 색, 둥근 모서리, 플랫한 표면 — 이름을 기억하는 동네 시장 같은 인터페이스.",
    references: [
      { id: "karrot", score: 95 },
      { id: "baemin", score: 90 },
    ],
    icon: "store",
  },
  WDLR: {
    code: "WDLR",
    name: "The Host",
    nameKo: "호스트",
    tagline: "Warm welcome, rich experience",
    taglineKo: "따뜻한 환영, 풍성한 경험",
    description: "Dense content with warm tones, rounded forms, and layered depth. Like a cozy restaurant with perfect ambiance — full but never cramped.",
    descriptionKo: "따뜻한 톤, 둥근 형태, 깊이감 있는 레이어 위에 풍성한 콘텐츠. 완벽한 분위기의 아늑한 레스토랑 같은 인터페이스.",
    references: [
      { id: "airbnb", score: 94 },
      { id: "pinterest", score: 89 },
    ],
    icon: "home",
  },

  // ── Warm × Open × Flat × Sharp ──────────────────────────
  WOFS: {
    code: "WOFS",
    name: "The Writer",
    nameKo: "라이터",
    tagline: "Words breathe here",
    taglineKo: "글이 숨쉬는 곳",
    description: "Generous whitespace, warm palette, clean edges. Your interfaces are blank pages — open, inviting, waiting for content to fill them with meaning.",
    descriptionKo: "넉넉한 여백, 따뜻한 팔레트, 깔끔한 모서리. 의미로 채워지길 기다리는 빈 페이지 같은 인터페이스.",
    references: [
      { id: "notion", score: 95 },
      { id: "cal", score: 88 },
    ],
    icon: "pen-line",
  },
  WOLS: {
    code: "WOLS",
    name: "The Storyteller",
    nameKo: "스토리텔러",
    tagline: "Space to feel, depth to explore",
    taglineKo: "느낄 공간, 탐험할 깊이",
    description: "Open, warm, with subtle elevation that draws you in. Your interfaces unfold like a good book — spacious chapters with layered meaning.",
    descriptionKo: "열린, 따뜻한, 끌어당기는 미묘한 깊이감. 넓은 장과 겹겹의 의미가 펼쳐지는 좋은 책 같은 인터페이스.",
    references: [
      { id: "claude", score: 94 },
      { id: "lovable", score: 90 },
    ],
    icon: "book-open",
  },
  WOFR: {
    code: "WOFR",
    name: "The Friend",
    nameKo: "프렌드",
    tagline: "Simple and sincere",
    taglineKo: "단순하고 진심인",
    description: "Open spaces, warm tones, rounded shapes, flat surfaces. No pretense, no complexity — just an honest, friendly interface that anyone can love.",
    descriptionKo: "열린 공간, 따뜻한 톤, 둥근 형태, 플랫한 표면. 허세도 복잡함도 없는 — 누구나 좋아할 솔직하고 친근한 인터페이스.",
    references: [
      { id: "toss", score: 93 },
      { id: "kakao", score: 89 },
    ],
    icon: "heart-handshake",
  },
  WOLR: {
    code: "WOLR",
    name: "The Artist",
    nameKo: "아티스트",
    tagline: "Play is the highest form of design",
    taglineKo: "놀이가 디자인의 최고 형태",
    description: "Open, warm, rounded, and rich with depth. Your interfaces are playgrounds — colorful, layered, joyful. Rules exist to be bent beautifully.",
    descriptionKo: "열린, 따뜻한, 둥근, 깊이감 넘치는 인터페이스. 다채롭고, 겹겹이고, 즐거운 놀이터. 규칙은 아름답게 구부리기 위해 존재합니다.",
    references: [
      { id: "clay", score: 93 },
      { id: "miro", score: 88 },
    ],
    icon: "palette",
  },
};

/* ── Axis labels for quiz UI ──────────────────────────────── */

export const AXES = {
  temperature: { A: "C" as Temperature, B: "W" as Temperature, labelA: "Cool & Precise", labelB: "Warm & Human", labelAKo: "차갑고 정밀한", labelBKo: "따뜻하고 인간적인" },
  density:     { A: "D" as Density,     B: "O" as Density,     labelA: "Dense & Packed", labelB: "Open & Airy",   labelAKo: "밀도 높은",       labelBKo: "여유로운" },
  elevation:   { A: "F" as Elevation,   B: "L" as Elevation,   labelA: "Flat & Clean",   labelB: "Layered & Rich", labelAKo: "플랫한",         labelBKo: "깊이감 있는" },
  shape:       { A: "S" as Shape,       B: "R" as Shape,       labelA: "Sharp & Angular", labelB: "Soft & Rounded", labelAKo: "날카로운",        labelBKo: "부드러운" },
} as const;

/* ── Helpers ───────────────────────────────────────────────── */

export function getTypeCode(t: Temperature, d: Density, e: Elevation, s: Shape): TypeCode {
  return `${t}${d}${e}${s}` as TypeCode;
}

export function getDesignType(code: TypeCode): DesignType {
  return DESIGN_TYPES[code];
}

/** All 64 reference IDs mapped to their 4-axis profile for scoring */
export const REFERENCE_PROFILES: Record<string, { t: Temperature; d: Density; e: Elevation; s: Shape }> = {
  "linear.app": { t: "C", d: "D", e: "F", s: "S" },
  vercel:       { t: "C", d: "D", e: "F", s: "S" },
  raycast:      { t: "C", d: "D", e: "L", s: "S" },
  clickhouse:   { t: "C", d: "D", e: "L", s: "S" },
  spotify:      { t: "C", d: "D", e: "F", s: "R" },
  sentry:       { t: "C", d: "D", e: "L", s: "R" },
  supabase:     { t: "C", d: "D", e: "L", s: "R" },
  framer:       { t: "C", d: "D", e: "L", s: "S" },
  apple:        { t: "C", d: "O", e: "F", s: "S" },
  tesla:        { t: "C", d: "O", e: "F", s: "S" },
  superhuman:   { t: "C", d: "O", e: "L", s: "S" },
  resend:       { t: "C", d: "O", e: "L", s: "S" },
  ollama:       { t: "C", d: "O", e: "F", s: "R" },
  expo:         { t: "C", d: "O", e: "F", s: "R" },
  "together.ai":{ t: "C", d: "O", e: "L", s: "R" },
  elevenlabs:   { t: "C", d: "O", e: "L", s: "R" },
  cursor:       { t: "W", d: "D", e: "F", s: "S" },
  intercom:     { t: "W", d: "D", e: "F", s: "S" },
  stripe:       { t: "W", d: "D", e: "L", s: "S" },
  revolut:      { t: "W", d: "D", e: "L", s: "S" },
  karrot:       { t: "W", d: "D", e: "F", s: "R" },
  baemin:       { t: "W", d: "D", e: "F", s: "R" },
  airbnb:       { t: "W", d: "D", e: "L", s: "R" },
  pinterest:    { t: "W", d: "D", e: "L", s: "R" },
  notion:       { t: "W", d: "O", e: "F", s: "S" },
  cal:          { t: "W", d: "O", e: "F", s: "S" },
  claude:       { t: "W", d: "O", e: "L", s: "S" },
  lovable:      { t: "W", d: "O", e: "L", s: "S" },
  toss:         { t: "W", d: "O", e: "F", s: "R" },
  kakao:        { t: "W", d: "O", e: "F", s: "R" },
  clay:         { t: "W", d: "O", e: "L", s: "R" },
  miro:         { t: "W", d: "O", e: "L", s: "R" },
  // Additional references with profiles
  airtable:     { t: "C", d: "D", e: "F", s: "S" },
  bmw:          { t: "C", d: "D", e: "F", s: "S" },
  cohere:       { t: "C", d: "D", e: "F", s: "S" },
  coinbase:     { t: "C", d: "O", e: "F", s: "S" },
  composio:     { t: "C", d: "D", e: "L", s: "S" },
  ferrari:      { t: "C", d: "O", e: "L", s: "S" },
  figma:        { t: "C", d: "O", e: "F", s: "S" },
  hashicorp:    { t: "C", d: "D", e: "F", s: "S" },
  ibm:          { t: "C", d: "D", e: "F", s: "S" },
  kraken:       { t: "C", d: "O", e: "F", s: "S" },
  lamborghini:  { t: "C", d: "D", e: "L", s: "S" },
  minimax:      { t: "C", d: "O", e: "F", s: "R" },
  mintlify:     { t: "C", d: "O", e: "F", s: "R" },
  "mistral.ai": { t: "W", d: "D", e: "L", s: "S" },
  mongodb:      { t: "C", d: "D", e: "L", s: "S" },
  nvidia:       { t: "C", d: "D", e: "F", s: "S" },
  "opencode.ai":{ t: "W", d: "D", e: "F", s: "S" },
  posthog:      { t: "W", d: "D", e: "F", s: "R" },
  renault:      { t: "W", d: "O", e: "L", s: "R" },
  replicate:    { t: "W", d: "D", e: "F", s: "R" },
  runwayml:     { t: "C", d: "O", e: "L", s: "S" },
  sanity:       { t: "C", d: "D", e: "F", s: "S" },
  spacex:       { t: "C", d: "O", e: "F", s: "S" },
  uber:         { t: "C", d: "D", e: "F", s: "S" },
  voltagent:    { t: "C", d: "D", e: "L", s: "S" },
  warp:         { t: "W", d: "O", e: "F", s: "S" },
  webflow:      { t: "C", d: "D", e: "L", s: "S" },
  wise:         { t: "W", d: "O", e: "F", s: "R" },
  "x.ai":       { t: "C", d: "D", e: "F", s: "S" },
  zapier:       { t: "W", d: "O", e: "F", s: "R" },
  // Taiwan additions (2026-04-17)
  pinkoi:       { t: "W", d: "D", e: "F", s: "S" },
  dcard:        { t: "C", d: "D", e: "L", s: "R" },
};

/* ── Type Avatar Palettes ────────────────────────────────
 * Per-type color palettes used to generate DiceBear Thumbs avatars.
 * Each palette is designed around the type's 4-axis semantics:
 *   - Temperature: Cool → blues/teals, Warm → oranges/reds
 *   - Elevation: Layered → richer gradients, Flat → monochrome
 *   - Shape: Sharp → harder hues, Rounded → softer pastels
 *   - Density: Dense → saturated, Open → airy
 * ───────────────────────────────────────────────────────── */

export interface TypePalette {
  shape: string[];       // hex colors without # (comma-separated for DiceBear)
  bg: string[];
  eyes: string;
  mouth: string;
}

export const TYPE_PALETTES: Record<TypeCode, TypePalette> = {
  // Cool types
  CDFS: { shape: ["171717", "525252", "0a72ef", "3b82f6"], bg: ["f5f5f5"], eyes: "ffffff", mouth: "ffffff" },
  CDLS: { shape: ["7c3aed", "5e6ad2", "1e1b4b", "a78bfa"], bg: ["f3f0ff"], eyes: "ffffff", mouth: "ffffff" },
  CDFR: { shape: ["06b6d4", "0ea5e9", "164e63", "22d3ee"], bg: ["ecfeff"], eyes: "ffffff", mouth: "ffffff" },
  CDLR: { shape: ["3ecf8e", "10b981", "064e3b", "6ee7b7"], bg: ["ecfdf5"], eyes: "ffffff", mouth: "ffffff" },
  COFS: { shape: ["000000", "404040", "a3a3a3", "fafafa"], bg: ["ffffff"], eyes: "000000", mouth: "000000" },
  COLS: { shape: ["cbb7fb", "a78bfa", "7c3aed", "ede9fe"], bg: ["faf8ff"], eyes: "1b1938", mouth: "1b1938" },
  COFR: { shape: ["e5e5e5", "a3a3a3", "525252", "fafafa"], bg: ["ffffff"], eyes: "262626", mouth: "262626" },
  COLR: { shape: ["f9a8d4", "ec4899", "60a5fa", "ddd6fe"], bg: ["fdf2f8"], eyes: "ffffff", mouth: "ffffff" },
  // Warm types
  WDFS: { shape: ["f54e00", "dc2626", "7c2d12", "fb923c"], bg: ["fff7ed"], eyes: "ffffff", mouth: "ffffff" },
  WDLS: { shape: ["533afd", "ea2261", "061b31", "c084fc"], bg: ["fef3f2"], eyes: "ffffff", mouth: "ffffff" },
  WDFR: { shape: ["ff6600", "f97316", "7c2d12", "fdba74"], bg: ["fff7ed"], eyes: "ffffff", mouth: "ffffff" },
  WDLR: { shape: ["ff385c", "460479", "fb7185", "fecdd3"], bg: ["fff1f2"], eyes: "ffffff", mouth: "ffffff" },
  WOFS: { shape: ["1c1917", "44403c", "78716c", "f5f4ed"], bg: ["fffbf5"], eyes: "ffffff", mouth: "ffffff" },
  WOLS: { shape: ["c96442", "d97757", "78350f", "fde68a"], bg: ["fef9c3"], eyes: "ffffff", mouth: "ffffff" },
  WOFR: { shape: ["3182f6", "fee500", "1e3a8a", "bfdbfe"], bg: ["eff6ff"], eyes: "191f28", mouth: "191f28" },
  WOLR: { shape: ["f59e0b", "ec4899", "a855f7", "fde047"], bg: ["fefce8"], eyes: "1a1523", mouth: "1a1523" },
};

/**
 * Build a DiceBear Thumbs URL with a type's custom palette.
 */
export function buildTypeAvatarUrl(code: TypeCode, seed?: string): string {
  const palette = TYPE_PALETTES[code];
  const s = seed || DESIGN_TYPES[code]?.name.replace(/\s+/g, "") || code;
  const params = new URLSearchParams({
    seed: s,
    shapeColor: palette.shape.join(","),
    backgroundColor: palette.bg.join(","),
    eyesColor: palette.eyes,
    mouthColor: palette.mouth,
  });
  return `https://api.dicebear.com/9.x/thumbs/svg?${params.toString()}`;
}

/** Category mapping for diversity logic */
const CATEGORIES: Record<string, string> = {
  stripe: "Fintech", coinbase: "Fintech", revolut: "Fintech", wise: "Fintech", kraken: "Fintech", toss: "Fintech",
  vercel: "Developer", cursor: "Developer", warp: "Developer", expo: "Developer", lovable: "Developer", raycast: "Developer", superhuman: "Developer",
  supabase: "Backend", mongodb: "Backend", sentry: "Backend", posthog: "Backend", hashicorp: "Backend", clickhouse: "Backend", composio: "Backend", sanity: "Backend", voltagent: "Backend",
  notion: "Productivity", "linear.app": "Productivity", cal: "Productivity", zapier: "Productivity", intercom: "Productivity", resend: "Productivity", mintlify: "Productivity",
  figma: "Design", framer: "Design", miro: "Design", webflow: "Design", airtable: "Design", clay: "Design",
  claude: "AI", cohere: "AI", "mistral.ai": "AI", ollama: "AI", "opencode.ai": "AI", replicate: "AI", "together.ai": "AI", "x.ai": "AI", elevenlabs: "AI", minimax: "AI", runwayml: "AI",
  apple: "Consumer", spotify: "Consumer", uber: "Consumer", airbnb: "Consumer", pinterest: "Consumer", nvidia: "Consumer", ibm: "Consumer", spacex: "Consumer",
  tesla: "Automotive", bmw: "Automotive", ferrari: "Automotive", lamborghini: "Automotive", renault: "Automotive",
  karrot: "Korean", baemin: "Korean", kakao: "Korean",
  pinkoi: "Taiwan", dcard: "Taiwan",
};

/** Supplementary matching data per company */
const SUPPLEMENTARY_DATA: Record<string, { saturation: "muted" | "vivid"; typography: "geometric" | "humanist" | "monospace"; darkNative: boolean }> = {
  vercel: { saturation: "muted", typography: "geometric", darkNative: false },
  "linear.app": { saturation: "muted", typography: "geometric", darkNative: true },
  apple: { saturation: "muted", typography: "geometric", darkNative: false },
  airbnb: { saturation: "vivid", typography: "humanist", darkNative: false },
  notion: { saturation: "muted", typography: "humanist", darkNative: false },
  claude: { saturation: "muted", typography: "humanist", darkNative: false },
  raycast: { saturation: "vivid", typography: "geometric", darkNative: true },
  expo: { saturation: "muted", typography: "geometric", darkNative: false },
  clickhouse: { saturation: "vivid", typography: "geometric", darkNative: true },
  superhuman: { saturation: "muted", typography: "geometric", darkNative: false },
  stripe: { saturation: "vivid", typography: "geometric", darkNative: false },
  framer: { saturation: "vivid", typography: "geometric", darkNative: true },
  toss: { saturation: "vivid", typography: "geometric", darkNative: false },
  spotify: { saturation: "vivid", typography: "humanist", darkNative: true },
  kakao: { saturation: "vivid", typography: "humanist", darkNative: false },
  cal: { saturation: "muted", typography: "geometric", darkNative: false },
  supabase: { saturation: "vivid", typography: "geometric", darkNative: true },
  sentry: { saturation: "vivid", typography: "geometric", darkNative: true },
  tesla: { saturation: "muted", typography: "geometric", darkNative: false },
  bmw: { saturation: "muted", typography: "geometric", darkNative: false },
  // defaults for the rest
};

export interface RefMatch {
  id: string;
  score: number;
  category: string;
}

/**
 * Find best matching references with diversity and supplementary axis support.
 *
 * Returns:
 *  - primary: top 2 (different categories)
 *  - adjacent: 3 refs from types that differ by 1-2 axes (different categories)
 */
export function matchReferences(
  code: TypeCode,
  supplementary?: {
    saturation: "muted" | "vivid";
    typography: "geometric" | "humanist" | "monospace";
    darkMode: boolean;
  },
  limit?: number,
): { primary: RefMatch[]; adjacent: RefMatch[] } {
  const user = { t: code[0], d: code[1], e: code[2], s: code[3] };

  // Score all references
  const scored = Object.entries(REFERENCE_PROFILES).map(([id, profile]) => {
    let score = 0;
    if (profile.t === user.t) score += 30;
    if (profile.d === user.d) score += 25;
    if (profile.e === user.e) score += 20;
    if (profile.s === user.s) score += 25;

    // Supplementary bonuses
    if (supplementary) {
      const sup = SUPPLEMENTARY_DATA[id];
      if (sup) {
        if (sup.saturation === supplementary.saturation) score += 5;
        if (sup.typography === supplementary.typography) score += 5;
        if (sup.darkNative === supplementary.darkMode) score += 5;
      }
    }

    const category = CATEGORIES[id] || "Other";
    return { id, score: Math.min(score, 100), category };
  });

  scored.sort((a, b) => b.score - a.score);

  // Primary: top 1, then best from different category
  const primary: RefMatch[] = [];
  if (scored.length > 0) {
    primary.push(scored[0]);
    const second = scored.find((r) => r.category !== scored[0].category);
    if (second) primary.push(second);
    else if (scored.length > 1) primary.push(scored[1]);
  }

  // Adjacent: refs with 1-2 axis differences, ensuring category diversity
  const primaryIds = new Set(primary.map((r) => r.id));
  const axisMatches = scored.map((r) => {
    const profile = REFERENCE_PROFILES[r.id];
    let matches = 0;
    if (profile.t === user.t) matches++;
    if (profile.d === user.d) matches++;
    if (profile.e === user.e) matches++;
    if (profile.s === user.s) matches++;
    return { ...r, axisMatches: matches };
  });

  const adjacentCandidates = axisMatches
    .filter((r) => !primaryIds.has(r.id) && r.axisMatches >= 2 && r.axisMatches <= 3)
    .sort((a, b) => b.score - a.score);

  const adjacent: RefMatch[] = [];
  const usedCategories = new Set<string>();
  for (const c of adjacentCandidates) {
    if (adjacent.length >= 3) break;
    // Allow max 2 from same category
    if (usedCategories.has(c.category) && adjacent.filter((a) => a.category === c.category).length >= 2) continue;
    adjacent.push({ id: c.id, score: c.score, category: c.category });
    usedCategories.add(c.category);
  }

  return { primary, adjacent };
}
