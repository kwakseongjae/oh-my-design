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
  kakaobank:     { type: 'simpleicons', slug: 'kakaotalk' },
  naver:         { type: 'simpleicons', slug: 'naver' },
  coupang:       { type: 'simpleicons', slug: 'coupang' },
  yeogiotte:     { type: 'favicon', slug: 'https://www.yeogi.com/favicon/rel_icon/favicon_png_192.png' },
  yanolja:       { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=yanolja.com&sz=128' },
  musinsa:       { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=musinsa.com&sz=128' },
  kurly:         { type: 'favicon', slug: 'https://res.kurly.com/icons/favicon-128x128.png' },
  ohouse:        { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=ohou.se&sz=128' },
  ridi:          { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=ridibooks.com&sz=128' },
  qanda:         { type: 'favicon', slug: 'https://qanda.ai/favicon.ico' },
  krds:          { type: 'favicon', slug: 'https://www.krds.go.kr/resources/img/guide/favicon_192.png' },
  // 2026-05-13 KR-10 batch
  socar:         { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=socar.kr&sz=256' },
  gangnamunni:   { type: 'favicon', slug: 'https://www.gangnamunni.com/images/icon/apple-icon-180x180.png' },
  kakaopay:      { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=kakaopay.com&sz=256' },
  zigzag:        { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=zigzag.kr&sz=256' },
  '29cm':        { type: 'favicon', slug: 'https://asset.29cm.co.kr/icon/apple-icon-144x144.png' },
  ably:          { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=a-bly.com&sz=128' },
  banksalad:     { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=banksalad.com&sz=256' },
  zigbang:       { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=zigbang.com&sz=256' },
  wanted:        { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=wanted.co.kr&sz=256' },
  remember:      { type: 'favicon', slug: 'https://cdn.rememberapp.co.kr/logos/remember/rmbr_og_image.png' },
  // 2026-05-14 KR-10 batch
  kream:         { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=kream.co.kr&sz=256' },
  upbit:         { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=upbit.com&sz=256' },
  kbank:         { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=kbanknow.com&sz=256' },
  inflearn:      { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=inflearn.com&sz=256' },
  wadiz:         { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=wadiz.kr&sz=256' },
  channeltalk:   { type: 'github', slug: 'channel-io' },
  lunit:         { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=lunit.io&sz=256' },
  bunjang:       { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=bunjang.co.kr&sz=256' },
  flex:          { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=flex.team&sz=256' },
  classum:       { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=classum.com&sz=256' },

  // ── Taiwan Tech ──
  pinkoi:        { type: 'github', slug: 'pinkoi' },
  dcard:         { type: 'github', slug: 'Dcard' },

  // ── Japanese Tech ──
  line:          { type: 'simpleicons', slug: 'line' },
  mercari:       { type: 'github', slug: 'mercari' },
  freee:         { type: 'github', slug: 'freee' },

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

/** Best-guess favicon URL for a reference id when its primary logo source fails.
 *  Maps id → public domain. Returns Google's favicon proxy which is cached at
 *  scale and rarely 504s (unlike GitHub's avatar endpoint). */
const DOMAIN_OVERRIDES: Record<string, string> = {
  'linear.app': 'linear.app',
  'mistral.ai': 'mistral.ai',
  'opencode.ai': 'opencode.ai',
  'together.ai': 'together.ai',
  'x.ai': 'x.ai',
  cal: 'cal.com',
  karrot: 'karrotmarket.com',
  baemin: 'baemin.com',
  toss: 'toss.im',
  kakao: 'kakaocorp.com',
  pinkoi: 'pinkoi.com',
  dcard: 'dcard.tw',
  line: 'line.me',
  mercari: 'mercari.com',
  freee: 'freee.co.jp',
  spacex: 'spacex.com',
  airbnb: 'airbnb.com',
  ibm: 'ibm.com',
  nvidia: 'nvidia.com',
  pinterest: 'pinterest.com',
  spotify: 'spotify.com',
  uber: 'uber.com',
  apple: 'apple.com',
  tesla: 'tesla.com',
  bmw: 'bmw.com',
  ferrari: 'ferrari.com',
  lamborghini: 'lamborghini.com',
  renault: 'renault.com',
  stripe: 'stripe.com',
  coinbase: 'coinbase.com',
  revolut: 'revolut.com',
  wise: 'wise.com',
  kraken: 'kraken.com',
  vercel: 'vercel.com',
  cursor: 'cursor.com',
  expo: 'expo.dev',
  lovable: 'lovable.dev',
  raycast: 'raycast.com',
  superhuman: 'superhuman.com',
  warp: 'warp.dev',
  notion: 'notion.so',
  intercom: 'intercom.com',
  resend: 'resend.com',
  zapier: 'zapier.com',
  mintlify: 'mintlify.com',
  figma: 'figma.com',
  framer: 'framer.com',
  miro: 'miro.com',
  webflow: 'webflow.com',
  airtable: 'airtable.com',
  clay: 'clay.com',
  claude: 'anthropic.com',
  cohere: 'cohere.com',
  elevenlabs: 'elevenlabs.io',
  minimax: 'minimax.io',
  ollama: 'ollama.com',
  replicate: 'replicate.com',
  runwayml: 'runwayml.com',
  voltagent: 'voltagent.dev',
  supabase: 'supabase.com',
  mongodb: 'mongodb.com',
  sentry: 'sentry.io',
  posthog: 'posthog.com',
  hashicorp: 'hashicorp.com',
  clickhouse: 'clickhouse.com',
  composio: 'composio.dev',
  sanity: 'sanity.io',
  // Korean refs
  yeogiotte: 'yeogi.com',
  musinsa: 'musinsa.com',
  kurly: 'kurly.com',
  ohouse: 'ohou.se',
  naver: 'naver.com',
  yanolja: 'yanolja.com',
  coupang: 'coupang.com',
  kakaobank: 'kakaobank.com',
  ridi: 'ridibooks.com',
  qanda: 'qanda.ai',
  krds: 'krds.go.kr',
  // 2026-05-13 KR-10 batch
  socar: 'socar.kr',
  gangnamunni: 'gangnamunni.com',
  kakaopay: 'kakaopay.com',
  zigzag: 'zigzag.kr',
  '29cm': '29cm.co.kr',
  ably: 'a-bly.com',
  banksalad: 'banksalad.com',
  zigbang: 'zigbang.com',
  wanted: 'wanted.co.kr',
  remember: 'rememberapp.co.kr',
  // 2026-05-14 KR-10 batch
  kream: 'kream.co.kr',
  upbit: 'upbit.com',
  kbank: 'kbanknow.com',
  inflearn: 'inflearn.com',
  wadiz: 'wadiz.kr',
  channeltalk: 'channel.io',
  lunit: 'lunit.io',
  bunjang: 'bunjang.co.kr',
  flex: 'flex.team',
  classum: 'classum.com',
};

export function getLogoFallbackUrl(id: string): string | null {
  const domain = DOMAIN_OVERRIDES[id] ?? `${id}.com`;
  // Google's favicon service — cached, fast, rarely fails. Returns a 32px PNG.
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`;
}

export function isGitHubLogo(id: string): boolean {
  const t = LOGO_MAP[id]?.type;
  return t === 'github' || t === 'favicon';
}
