// Scoped design tokens for the /v2 landing variant.
// Implemented as plain JS constants + inline styles so the global
// --primary token (used by v1 + builder) is never touched.

export const V2 = {
  primary: "#5546ff",        // electric indigo — CTAs, links
  primaryDeep: "#3a2dd6",
  primaryGlow: "#8b7dff",    // mid-step for gradients
  accent: "#a89cff",         // light indigo — labels, $ prompts, accents
  bgDark: "#0a0a0f",
  bgLight: "#fafafa",
  textOnDark: "#fafafa",
  textOnLight: "#0a0a0f",
  borderLight: "rgba(0,0,0,0.08)",
  borderDark: "rgba(255,255,255,0.08)",
} as const;

/** Brand color hints for the 98-card wall and the LIVE PROOF strip. */
export const BRAND_COLORS: Record<string, string> = {
  stripe: "#635bff",
  toss: "#0064ff",
  "linear.app": "#5e6ad2",
  notion: "#000000",
  vercel: "#000000",
  resend: "#000000",
  cursor: "#000000",
  airbnb: "#ff5a5f",
  spotify: "#1db954",
  uber: "#000000",
  apple: "#000000",
  pinterest: "#e60023",
  spacex: "#005288",
  tesla: "#cc0000",
  bmw: "#0066b1",
  ferrari: "#ff2800",
  lamborghini: "#f4c01a",
  renault: "#ffcc00",
  nvidia: "#76b900",
  ibm: "#0f62fe",
  mongodb: "#00ed64",
  posthog: "#1d4aff",
  sanity: "#f03e2f",
  sentry: "#362d59",
  supabase: "#3ecf8e",
  clickhouse: "#fff100",
  hashicorp: "#000000",
  composio: "#6366f1",
  airtable: "#fcb400",
  baemin: "#2ac1bc",
  cal: "#111827",
  claude: "#cc785c",
  clay: "#ffd23f",
  cohere: "#39594d",
  coinbase: "#0052ff",
  dcard: "#0086ff",
  elevenlabs: "#000000",
  expo: "#000020",
  figma: "#a259ff",
  framer: "#0055ff",
  freee: "#005bac",
  intercom: "#286efa",
  kakao: "#fee500",
  karrot: "#ff7e36",
  kraken: "#5741d9",
  line: "#06c755",
  lovable: "#ff6f61",
  mercari: "#ff0211",
  minimax: "#000000",
  mintlify: "#0d9373",
  miro: "#ffd02f",
  "mistral.ai": "#ff7000",
  ollama: "#000000",
  "opencode.ai": "#000000",
  pinkoi: "#ff595a",
  raycast: "#ff6363",
  replicate: "#fc7676",
  revolut: "#0075eb",
  runwayml: "#000000",
  superhuman: "#5840ff",
  "together.ai": "#0f6fff",
  voltagent: "#22c55e",
  warp: "#01a4ff",
  webflow: "#146ef5",
  wise: "#9fe870",
  "x.ai": "#000000",
  zapier: "#ff4f00",
  // 2026-05-13 KR-10 batch
  gangnamunni: "#d54300",
  kakaopay: "#ffeb00",
  zigzag: "#fa6ee3",
  "29cm": "#000000",
  ably: "#fa2e5f",
  banksalad: "#04c584",
  zigbang: "#0066ff",
  wanted: "#0066ff",
  remember: "#000000",
  // socar: SOCAR Blue exact hex unpublished — falls through to hash
  // 2026-05-14 KR-10 batch
  kream: "#000000",
  upbit: "#093687",
  kbank: "#0046ff",
  inflearn: "#00c471",
  wadiz: "#00c4c4",
  channeltalk: "#4f46e5",
  lunit: "#1032cf",
  bunjang: "#d80c18",
  flex: "#000000",
  classum: "#ff4438",
};

/** Deterministic fallback color from id hash. */
export function colorForId(id: string): string {
  if (BRAND_COLORS[id]) return BRAND_COLORS[id];
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  const hue = Math.abs(h) % 360;
  return `hsl(${hue}, 70%, 55%)`;
}
