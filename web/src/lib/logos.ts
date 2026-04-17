// Logo sources:
// 1. Simple Icons CDN (SVG, supports color): https://cdn.simpleicons.org/{slug}/{color}
// 2. GitHub org avatars (PNG, always works): https://github.com/{org}.png?size=64

interface LogoSource {
  type: 'simpleicons' | 'github' | 'favicon';
  slug: string; // simpleicons slug, github org name, or direct URL
}

const LOGO_MAP: Record<string, LogoSource> = {
  // ── AI & LLM ──
  claude:        { type: 'simpleicons', slug: 'anthropic' },
  cohere:        { type: 'github', slug: 'cohere-ai' },
  elevenlabs:    { type: 'simpleicons', slug: 'elevenlabs' },
  minimax:       { type: 'simpleicons', slug: 'minimax' },
  'mistral.ai':  { type: 'simpleicons', slug: 'mistralai' },
  ollama:        { type: 'simpleicons', slug: 'ollama' },
  'opencode.ai': { type: 'github', slug: 'opencode-ai' },
  replicate:     { type: 'simpleicons', slug: 'replicate' },
  runwayml:      { type: 'github', slug: 'runwayml' },
  'together.ai': { type: 'github', slug: 'togethercomputer' },
  voltagent:     { type: 'github', slug: 'VoltAgent' },
  'x.ai':        { type: 'simpleicons', slug: 'x' },

  // ── Automotive ──
  bmw:           { type: 'simpleicons', slug: 'bmw' },
  ferrari:       { type: 'simpleicons', slug: 'ferrari' },
  lamborghini:   { type: 'simpleicons', slug: 'lamborghini' },
  renault:       { type: 'simpleicons', slug: 'renault' },
  tesla:         { type: 'simpleicons', slug: 'tesla' },

  // ── Backend & DevOps ──
  clickhouse:    { type: 'simpleicons', slug: 'clickhouse' },
  composio:      { type: 'github', slug: 'composiohq' },
  hashicorp:     { type: 'simpleicons', slug: 'hashicorp' },
  mongodb:       { type: 'simpleicons', slug: 'mongodb' },
  posthog:       { type: 'simpleicons', slug: 'posthog' },
  sanity:        { type: 'simpleicons', slug: 'sanity' },
  sentry:        { type: 'simpleicons', slug: 'sentry' },
  supabase:      { type: 'simpleicons', slug: 'supabase' },

  // ── Consumer Tech ──
  airbnb:        { type: 'simpleicons', slug: 'airbnb' },
  apple:         { type: 'simpleicons', slug: 'apple' },
  ibm:           { type: 'github', slug: 'IBM' },
  nvidia:        { type: 'simpleicons', slug: 'nvidia' },
  pinterest:     { type: 'simpleicons', slug: 'pinterest' },
  spacex:        { type: 'simpleicons', slug: 'spacex' },
  spotify:       { type: 'simpleicons', slug: 'spotify' },
  uber:          { type: 'simpleicons', slug: 'uber' },

  // ── Design Tools ──
  airtable:      { type: 'simpleicons', slug: 'airtable' },
  clay:          { type: 'github', slug: 'clay-run' },
  figma:         { type: 'simpleicons', slug: 'figma' },
  framer:        { type: 'simpleicons', slug: 'framer' },
  miro:          { type: 'simpleicons', slug: 'miro' },
  webflow:       { type: 'simpleicons', slug: 'webflow' },

  // ── Developer Tools ──
  cursor:        { type: 'simpleicons', slug: 'cursor' },
  expo:          { type: 'simpleicons', slug: 'expo' },
  lovable:       { type: 'favicon', slug: 'https://lovable.dev/favicon-192x192.png' },
  raycast:       { type: 'simpleicons', slug: 'raycast' },
  superhuman:    { type: 'github', slug: 'superhuman' },
  vercel:        { type: 'simpleicons', slug: 'vercel' },
  warp:          { type: 'simpleicons', slug: 'warp' },

  // ── Fintech ──
  coinbase:      { type: 'simpleicons', slug: 'coinbase' },
  kraken:        { type: 'github', slug: 'krakenfx' },
  revolut:       { type: 'simpleicons', slug: 'revolut' },
  stripe:        { type: 'simpleicons', slug: 'stripe' },
  wise:          { type: 'simpleicons', slug: 'wise' },

  // ── Korean Tech ──
  karrot:        { type: 'github', slug: 'daangn' },
  toss:          { type: 'favicon', slug: 'https://static.toss.im/icons/png/4x/icon-toss-logo.png' },
  baemin:        { type: 'favicon', slug: 'https://www.baemin.com/favicon.ico' },
  kakao:         { type: 'simpleicons', slug: 'kakaotalk' },

  // ── Taiwan Tech ──
  pinkoi:        { type: 'github', slug: 'pinkoi' },
  dcard:         { type: 'github', slug: 'Dcard' },

  // ── Marketing ──
  semrush:       { type: 'simpleicons', slug: 'semrush' },

  // ── Productivity ──
  cal:           { type: 'simpleicons', slug: 'caldotcom' },
  intercom:      { type: 'simpleicons', slug: 'intercom' },
  'linear.app':  { type: 'simpleicons', slug: 'linear' },
  mintlify:      { type: 'simpleicons', slug: 'mintlify' },
  notion:        { type: 'simpleicons', slug: 'notion' },
  resend:        { type: 'simpleicons', slug: 'resend' },
  zapier:        { type: 'simpleicons', slug: 'zapier' },
};

export function getLogoUrl(id: string, color?: string): string | null {
  const source = LOGO_MAP[id];
  if (!source) return null;

  if (source.type === 'github') {
    return `https://github.com/${source.slug}.png?size=64`;
  }

  if (source.type === 'favicon') {
    return source.slug;
  }

  // simpleicons
  const c = color ? color.replace('#', '') : 'white';
  return `https://cdn.simpleicons.org/${source.slug}/${c}`;
}

export function isGitHubLogo(id: string): boolean {
  const t = LOGO_MAP[id]?.type;
  return t === 'github' || t === 'favicon';
}
