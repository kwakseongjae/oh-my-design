#!/usr/bin/env node
/**
 * One-shot migration: enrich every references/<id>/DESIGN.md frontmatter
 * with canonical fields by merging:
 *   - existing frontmatter (wins when non-empty)
 *   - the 5 source-of-truth maps in web/src/...
 *
 * Required after migration:
 *   id, name, country, category, homepage, primary_color, logo.type,
 *   logo.slug, verified
 * Optional: display_name_kr, ds, omd
 *
 * Usage:
 *   node web/scripts/migrate-frontmatters.mjs            # write
 *   node web/scripts/migrate-frontmatters.mjs --dry-run  # diff only
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..', '..');
const REFS_DIR = join(ROOT, 'references');
const DRY_RUN = process.argv.includes('--dry-run');

// ─── Canonical category slug + country code maps ────────────────────────
const CATEGORY_LABEL_TO_SLUG = {
  'Fintech': 'fintech',
  'Developer Tools': 'developer-tools',
  'Backend & DevOps': 'backend-devops',
  'Productivity': 'productivity',
  'Design Tools': 'design-tools',
  'AI & LLM': 'ai',
  'Consumer Tech': 'consumer-tech',
  'Marketing': 'marketing',
  'Automotive': 'automotive',
  'E-commerce': 'ecommerce',
  'Travel': 'consumer-tech',          // collapse travel → consumer-tech (no separate canonical)
  'Government': 'government',
  'Education': 'education',
  'Healthcare': 'healthcare',
  'Other': 'consumer-tech',
};

const COUNTRY_LABEL_TO_CODE = {
  'Korea': 'KR',
  'Taiwan': 'TW',
  'Japan': 'JP',
  'France': 'FR',
  'Italy': 'IT',
  'Germany': 'DE',
  'UK': 'UK',
  'United States': 'US',
};

// Loose remap from arbitrary existing-frontmatter category strings into the canonical slugs.
function normalizeCategory(raw) {
  if (!raw) return null;
  const s = String(raw).toLowerCase().trim();
  if (CATEGORY_LABEL_TO_SLUG[raw]) return CATEGORY_LABEL_TO_SLUG[raw];
  const direct = ['ecommerce','fintech','saas','ai','consumer-tech','education','productivity','developer-tools','design-tools','backend-devops','automotive','marketing','government','healthcare'];
  if (direct.includes(s)) return s;
  // common aliases
  const alias = {
    'e-commerce': 'ecommerce',
    'marketplace': 'ecommerce',
    'consumer': 'consumer-tech',
    'travel': 'consumer-tech',
    'dev-tools': 'developer-tools',
    'design tools': 'design-tools',
    'ai & llm': 'ai',
    'llm': 'ai',
    'backend': 'backend-devops',
    'devops': 'backend-devops',
    'backend & devops': 'backend-devops',
    'auto': 'automotive',
    'gov': 'government',
  };
  return alias[s] || null;
}

function normalizeCountry(raw) {
  if (!raw) return null;
  const s = String(raw).trim();
  if (COUNTRY_LABEL_TO_CODE[s]) return COUNTRY_LABEL_TO_CODE[s];
  if (['KR','US','JP','TW','UK','DE','FR','IT'].includes(s.toUpperCase())) return s.toUpperCase();
  return null;
}

// ─── Source-of-truth maps (copied from web/src/...) ─────────────────────
const CATEGORIES_RAW = {
  stripe: 'Fintech', coinbase: 'Fintech', revolut: 'Fintech', wise: 'Fintech', kraken: 'Fintech',
  vercel: 'Developer Tools', cursor: 'Developer Tools', warp: 'Developer Tools',
  expo: 'Developer Tools', lovable: 'Developer Tools', raycast: 'Developer Tools', superhuman: 'Developer Tools',
  supabase: 'Backend & DevOps', mongodb: 'Backend & DevOps', sentry: 'Backend & DevOps',
  posthog: 'Backend & DevOps', hashicorp: 'Backend & DevOps', clickhouse: 'Backend & DevOps',
  composio: 'Backend & DevOps', sanity: 'Backend & DevOps',
  notion: 'Productivity', 'linear.app': 'Productivity', cal: 'Productivity',
  zapier: 'Productivity', intercom: 'Productivity', resend: 'Productivity', mintlify: 'Productivity',
  figma: 'Design Tools', framer: 'Design Tools', miro: 'Design Tools',
  webflow: 'Design Tools', airtable: 'Design Tools', clay: 'Design Tools',
  claude: 'AI & LLM', cohere: 'AI & LLM', 'mistral.ai': 'AI & LLM',
  ollama: 'AI & LLM', 'opencode.ai': 'AI & LLM', replicate: 'AI & LLM',
  'together.ai': 'AI & LLM', 'x.ai': 'AI & LLM', elevenlabs: 'AI & LLM',
  minimax: 'AI & LLM', runwayml: 'AI & LLM', voltagent: 'AI & LLM',
  apple: 'Consumer Tech', spotify: 'Consumer Tech', uber: 'Consumer Tech',
  airbnb: 'Consumer Tech', pinterest: 'Consumer Tech', nvidia: 'Consumer Tech',
  ibm: 'Consumer Tech', spacex: 'Consumer Tech', semrush: 'Marketing',
  tesla: 'Automotive', bmw: 'Automotive', ferrari: 'Automotive',
  lamborghini: 'Automotive', renault: 'Automotive',
  toss: 'Fintech', kakaobank: 'Fintech',
  kakao: 'Consumer Tech', baemin: 'Consumer Tech', karrot: 'Consumer Tech',
  naver: 'Consumer Tech', ohouse: 'Consumer Tech', ridi: 'Consumer Tech',
  qanda: 'Consumer Tech',
  pinkoi: 'Consumer Tech', dcard: 'Consumer Tech',
  line: 'Consumer Tech', mercari: 'Consumer Tech',
  freee: 'Productivity',
  coupang: 'E-commerce', musinsa: 'E-commerce', kurly: 'E-commerce',
  yeogiotte: 'Travel', yanolja: 'Travel',
  krds: 'Government',
  socar: 'Consumer Tech', gangnamunni: 'Consumer Tech', zigbang: 'Consumer Tech',
  kakaopay: 'Fintech', banksalad: 'Fintech',
  zigzag: 'E-commerce', '29cm': 'E-commerce', ably: 'E-commerce',
  wanted: 'Productivity', remember: 'Productivity',
  kream: 'E-commerce', bunjang: 'E-commerce',
  upbit: 'Fintech', kbank: 'Fintech', wadiz: 'Fintech',
  inflearn: 'Productivity', classum: 'Productivity',
  channeltalk: 'Productivity', flex: 'Productivity',
  lunit: 'Consumer Tech',
  'toss-securities': 'Fintech', chai: 'Fintech',
  oliveyoung: 'E-commerce', gmarket: 'E-commerce',
  tving: 'Consumer Tech', catchtable: 'Consumer Tech', dabang: 'Consumer Tech',
  upstage: 'AI & LLM',
  jumpit: 'Productivity', fastcampus: 'Productivity',
};

const COUNTRIES_RAW = {
  toss: 'Korea', kakao: 'Korea', baemin: 'Korea', karrot: 'Korea',
  yeogiotte: 'Korea', musinsa: 'Korea', kurly: 'Korea', ohouse: 'Korea',
  naver: 'Korea', yanolja: 'Korea', coupang: 'Korea', kakaobank: 'Korea',
  ridi: 'Korea', qanda: 'Korea', krds: 'Korea',
  socar: 'Korea', gangnamunni: 'Korea', kakaopay: 'Korea', zigzag: 'Korea',
  '29cm': 'Korea', ably: 'Korea', banksalad: 'Korea', zigbang: 'Korea',
  wanted: 'Korea', remember: 'Korea',
  kream: 'Korea', upbit: 'Korea', kbank: 'Korea', inflearn: 'Korea',
  wadiz: 'Korea', channeltalk: 'Korea', lunit: 'Korea',
  bunjang: 'Korea', flex: 'Korea', classum: 'Korea',
  'toss-securities': 'Korea', oliveyoung: 'Korea', gmarket: 'Korea',
  tving: 'Korea', catchtable: 'Korea', upstage: 'Korea', chai: 'Korea',
  dabang: 'Korea', jumpit: 'Korea', fastcampus: 'Korea',
  pinkoi: 'Taiwan', dcard: 'Taiwan',
  line: 'Japan', mercari: 'Japan', freee: 'Japan',
  'mistral.ai': 'France', renault: 'France',
  ferrari: 'Italy', lamborghini: 'Italy',
  bmw: 'Germany',
  revolut: 'UK', wise: 'UK',
};

const DISPLAY_NAMES_RAW = {
  'linear.app': 'Linear', cal: 'Cal.com', 'mistral.ai': 'Mistral AI',
  'opencode.ai': 'OpenCode AI', 'together.ai': 'Together AI', 'x.ai': 'xAI',
  ibm: 'IBM', bmw: 'BMW', nvidia: 'NVIDIA', posthog: 'PostHog',
  supabase: 'Supabase', voltagent: 'VoltAgent', elevenlabs: 'ElevenLabs',
  runwayml: 'RunwayML', spacex: 'SpaceX', coinbase: 'Coinbase',
  airbnb: 'Airbnb', clickhouse: 'ClickHouse',
  karrot: 'Karrot', toss: 'Toss', baemin: 'Baemin', kakao: 'Kakao',
  pinkoi: 'Pinkoi', dcard: 'Dcard',
  line: 'LINE', mercari: 'Mercari', freee: 'freee',
  yeogiotte: '여기어때', musinsa: 'Musinsa', kurly: 'Kurly', ohouse: 'Ohouse',
  naver: 'Naver', yanolja: 'Yanolja', coupang: 'Coupang',
  kakaobank: 'KakaoBank', ridi: 'RIDI', qanda: 'QANDA',
  krds: 'KRDS',
  socar: 'SOCAR', gangnamunni: '강남언니', kakaopay: 'KakaoPay',
  zigzag: 'ZIGZAG', '29cm': '29CM', ably: 'Ably',
  banksalad: 'Banksalad', zigbang: 'Zigbang',
  wanted: 'Wanted', remember: 'Remember',
  kream: 'KREAM', upbit: 'Upbit', kbank: 'K bank', inflearn: 'Inflearn',
  wadiz: 'Wadiz', channeltalk: 'Channel Talk', lunit: 'Lunit',
  bunjang: '번개장터', flex: 'flex', classum: 'Classum',
  'toss-securities': 'Toss Securities', oliveyoung: 'Olive Young',
  gmarket: 'Gmarket', tving: 'TVING', catchtable: 'CatchTable',
  upstage: 'Upstage', chai: 'Chai', dabang: '다방',
  jumpit: 'Jumpit', fastcampus: 'fastcampus',
};

// Korean display name overrides (display_name_kr) — distinct from `name`.
// We extract these by detecting Hangul in DISPLAY_NAMES_RAW.
const KR_DISPLAY = {};
for (const [id, name] of Object.entries(DISPLAY_NAMES_RAW)) {
  if (/[가-힯]/.test(name)) KR_DISPLAY[id] = name;
}
// extra known KR display names not in the original DISPLAY_NAMES map
Object.assign(KR_DISPLAY, {
  // gmarket has brand_kr in its own frontmatter (지마켓); upstage has 업스테이지
  gmarket: '지마켓',
  upstage: '업스테이지',
});

const HOMEPAGE_URLS = {
  airbnb: 'https://www.airbnb.com', airtable: 'https://www.airtable.com', apple: 'https://www.apple.com',
  baemin: 'https://www.baemin.com', bmw: 'https://www.bmw.com', cal: 'https://cal.com',
  claude: 'https://claude.ai', clay: 'https://www.clay.com', clickhouse: 'https://clickhouse.com',
  cohere: 'https://cohere.com', coinbase: 'https://www.coinbase.com', composio: 'https://composio.dev',
  cursor: 'https://www.cursor.com', dcard: 'https://www.dcard.tw', elevenlabs: 'https://elevenlabs.io',
  expo: 'https://expo.dev', ferrari: 'https://www.ferrari.com', figma: 'https://www.figma.com',
  framer: 'https://www.framer.com', freee: 'https://www.freee.co.jp', hashicorp: 'https://www.hashicorp.com',
  ibm: 'https://www.ibm.com', intercom: 'https://www.intercom.com', kakao: 'https://www.kakao.com',
  karrot: 'https://www.karrotmarket.com', kraken: 'https://www.kraken.com', lamborghini: 'https://www.lamborghini.com',
  line: 'https://line.me', 'linear.app': 'https://linear.app', lovable: 'https://lovable.dev',
  mercari: 'https://www.mercari.com', minimax: 'https://www.minimaxi.com', mintlify: 'https://mintlify.com',
  miro: 'https://miro.com', 'mistral.ai': 'https://mistral.ai', mongodb: 'https://www.mongodb.com',
  notion: 'https://www.notion.so', nvidia: 'https://www.nvidia.com', ollama: 'https://ollama.com',
  'opencode.ai': 'https://opencode.ai', pinkoi: 'https://www.pinkoi.com', pinterest: 'https://www.pinterest.com',
  posthog: 'https://posthog.com', raycast: 'https://www.raycast.com', renault: 'https://www.renault.com',
  replicate: 'https://replicate.com', resend: 'https://resend.com', revolut: 'https://www.revolut.com',
  runwayml: 'https://runwayml.com', sanity: 'https://www.sanity.io', sentry: 'https://sentry.io',
  spacex: 'https://www.spacex.com', spotify: 'https://www.spotify.com', stripe: 'https://stripe.com',
  supabase: 'https://supabase.com', superhuman: 'https://superhuman.com', tesla: 'https://www.tesla.com',
  'together.ai': 'https://www.together.ai', toss: 'https://toss.im', uber: 'https://www.uber.com',
  vercel: 'https://vercel.com', voltagent: 'https://voltagent.dev', warp: 'https://www.warp.dev',
  webflow: 'https://webflow.com', wise: 'https://wise.com', 'x.ai': 'https://x.ai',
  zapier: 'https://zapier.com',
  yeogiotte: 'https://www.yeogi.com', musinsa: 'https://www.musinsa.com', kurly: 'https://www.kurly.com',
  ohouse: 'https://ohou.se', naver: 'https://www.naver.com', yanolja: 'https://www.yanolja.com',
  coupang: 'https://www.coupang.com', kakaobank: 'https://www.kakaobank.com', ridi: 'https://ridibooks.com',
  qanda: 'https://qanda.ai', krds: 'https://www.krds.go.kr/html/site/index.html',
  socar: 'https://www.socar.kr', gangnamunni: 'https://www.gangnamunni.com', kakaopay: 'https://www.kakaopay.com',
  zigzag: 'https://zigzag.kr', '29cm': 'https://www.29cm.co.kr', ably: 'https://m.a-bly.com',
  banksalad: 'https://www.banksalad.com', zigbang: 'https://www.zigbang.com', wanted: 'https://www.wanted.co.kr',
  remember: 'https://www.rememberapp.co.kr',
  kream: 'https://kream.co.kr', upbit: 'https://upbit.com', kbank: 'https://www.kbanknow.com',
  inflearn: 'https://www.inflearn.com', wadiz: 'https://www.wadiz.kr', channeltalk: 'https://channel.io',
  lunit: 'https://www.lunit.io', bunjang: 'https://m.bunjang.co.kr', flex: 'https://flex.team',
  classum: 'https://www.classum.com',
  'toss-securities': 'https://tossinvest.com', oliveyoung: 'https://www.oliveyoung.co.kr',
  gmarket: 'https://www.gmarket.co.kr', tving: 'https://www.tving.com', catchtable: 'https://www.catchtable.co.kr',
  upstage: 'https://www.upstage.ai', chai: 'https://chai.finance', dabang: 'https://www.dabangapp.com',
  jumpit: 'https://www.jumpit.co.kr', fastcampus: 'https://fastcampus.co.kr',
  // Cover unmapped ones with the .com fallback used by getLogoFallbackUrl semantics.
  // Anything not present here we'll derive from id at write time.
  yanoljaPlaceholder_: '',  // noop key removed below
};
delete HOMEPAGE_URLS.yanoljaPlaceholder_;

const LOGO_MAP = {
  claude: { type: 'simpleicons', slug: 'anthropic' }, cohere: { type: 'github', slug: 'cohere-ai' },
  elevenlabs: { type: 'simpleicons', slug: 'elevenlabs' }, minimax: { type: 'simpleicons', slug: 'minimax' },
  'mistral.ai': { type: 'simpleicons', slug: 'mistralai' }, ollama: { type: 'simpleicons', slug: 'ollama' },
  'opencode.ai': { type: 'github', slug: 'opencode-ai' }, replicate: { type: 'simpleicons', slug: 'replicate' },
  runwayml: { type: 'github', slug: 'runwayml' }, 'together.ai': { type: 'github', slug: 'togethercomputer' },
  voltagent: { type: 'github', slug: 'VoltAgent' }, 'x.ai': { type: 'simpleicons', slug: 'x' },
  bmw: { type: 'simpleicons', slug: 'bmw' }, ferrari: { type: 'simpleicons', slug: 'ferrari' },
  lamborghini: { type: 'simpleicons', slug: 'lamborghini' }, renault: { type: 'simpleicons', slug: 'renault' },
  tesla: { type: 'simpleicons', slug: 'tesla' },
  clickhouse: { type: 'simpleicons', slug: 'clickhouse' }, composio: { type: 'github', slug: 'composiohq' },
  hashicorp: { type: 'simpleicons', slug: 'hashicorp' }, mongodb: { type: 'simpleicons', slug: 'mongodb' },
  posthog: { type: 'simpleicons', slug: 'posthog' }, sanity: { type: 'simpleicons', slug: 'sanity' },
  sentry: { type: 'simpleicons', slug: 'sentry' }, supabase: { type: 'simpleicons', slug: 'supabase' },
  airbnb: { type: 'simpleicons', slug: 'airbnb' }, apple: { type: 'simpleicons', slug: 'apple' },
  ibm: { type: 'github', slug: 'IBM' }, nvidia: { type: 'simpleicons', slug: 'nvidia' },
  pinterest: { type: 'simpleicons', slug: 'pinterest' }, spacex: { type: 'simpleicons', slug: 'spacex' },
  spotify: { type: 'simpleicons', slug: 'spotify' }, uber: { type: 'simpleicons', slug: 'uber' },
  airtable: { type: 'simpleicons', slug: 'airtable' }, clay: { type: 'github', slug: 'clay-run' },
  figma: { type: 'simpleicons', slug: 'figma' }, framer: { type: 'simpleicons', slug: 'framer' },
  miro: { type: 'simpleicons', slug: 'miro' }, webflow: { type: 'simpleicons', slug: 'webflow' },
  cursor: { type: 'simpleicons', slug: 'cursor' }, expo: { type: 'simpleicons', slug: 'expo' },
  lovable: { type: 'favicon', slug: 'https://lovable.dev/favicon-192x192.png' },
  raycast: { type: 'simpleicons', slug: 'raycast' }, superhuman: { type: 'github', slug: 'superhuman' },
  vercel: { type: 'simpleicons', slug: 'vercel' }, warp: { type: 'simpleicons', slug: 'warp' },
  coinbase: { type: 'simpleicons', slug: 'coinbase' }, kraken: { type: 'github', slug: 'krakenfx' },
  revolut: { type: 'simpleicons', slug: 'revolut' }, stripe: { type: 'simpleicons', slug: 'stripe' },
  wise: { type: 'simpleicons', slug: 'wise' },
  karrot: { type: 'github', slug: 'daangn' },
  toss: { type: 'favicon', slug: 'https://static.toss.im/icons/png/4x/icon-toss-logo.png' },
  baemin: { type: 'favicon', slug: 'https://www.baemin.com/favicon.ico' },
  kakao: { type: 'simpleicons', slug: 'kakaotalk' }, kakaobank: { type: 'simpleicons', slug: 'kakaotalk' },
  naver: { type: 'simpleicons', slug: 'naver' }, coupang: { type: 'simpleicons', slug: 'coupang' },
  yeogiotte: { type: 'favicon', slug: 'https://www.yeogi.com/favicon/rel_icon/favicon_png_192.png' },
  yanolja: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=yanolja.com&sz=128' },
  musinsa: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=musinsa.com&sz=128' },
  kurly: { type: 'favicon', slug: 'https://res.kurly.com/icons/favicon-128x128.png' },
  ohouse: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=ohou.se&sz=128' },
  ridi: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=ridibooks.com&sz=128' },
  qanda: { type: 'favicon', slug: 'https://qanda.ai/favicon.ico' },
  krds: { type: 'favicon', slug: 'https://www.krds.go.kr/resources/img/guide/favicon_192.png' },
  socar: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=socar.kr&sz=256' },
  gangnamunni: { type: 'favicon', slug: 'https://www.gangnamunni.com/images/icon/apple-icon-180x180.png' },
  kakaopay: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=kakaopay.com&sz=256' },
  zigzag: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=zigzag.kr&sz=256' },
  '29cm': { type: 'favicon', slug: 'https://asset.29cm.co.kr/icon/apple-icon-144x144.png' },
  ably: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=a-bly.com&sz=128' },
  banksalad: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=banksalad.com&sz=256' },
  zigbang: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=zigbang.com&sz=256' },
  wanted: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=wanted.co.kr&sz=256' },
  remember: { type: 'favicon', slug: 'https://cdn.rememberapp.co.kr/logos/remember/rmbr_og_image.png' },
  kream: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=kream.co.kr&sz=256' },
  upbit: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=upbit.com&sz=256' },
  kbank: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=kbanknow.com&sz=256' },
  inflearn: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=inflearn.com&sz=256' },
  wadiz: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=wadiz.kr&sz=256' },
  channeltalk: { type: 'github', slug: 'channel-io' },
  lunit: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=lunit.io&sz=256' },
  bunjang: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=bunjang.co.kr&sz=256' },
  flex: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=flex.team&sz=256' },
  classum: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=classum.com&sz=256' },
  'toss-securities': { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=tossinvest.com&sz=256' },
  oliveyoung: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=oliveyoung.co.kr&sz=256' },
  gmarket: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=gmarket.co.kr&sz=256' },
  tving: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=tving.com&sz=256' },
  catchtable: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=catchtable.co.kr&sz=256' },
  upstage: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=upstage.ai&sz=256' },
  chai: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=chai.finance&sz=256' },
  dabang: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=dabangapp.com&sz=256' },
  jumpit: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=jumpit.co.kr&sz=256' },
  fastcampus: { type: 'favicon', slug: 'https://www.google.com/s2/favicons?domain=fastcampus.co.kr&sz=256' },
  pinkoi: { type: 'github', slug: 'pinkoi' }, dcard: { type: 'github', slug: 'Dcard' },
  line: { type: 'simpleicons', slug: 'line' }, mercari: { type: 'github', slug: 'mercari' },
  freee: { type: 'github', slug: 'freee' },
  semrush: { type: 'simpleicons', slug: 'semrush' },
  cal: { type: 'simpleicons', slug: 'caldotcom' }, intercom: { type: 'simpleicons', slug: 'intercom' },
  'linear.app': { type: 'simpleicons', slug: 'linear' }, mintlify: { type: 'simpleicons', slug: 'mintlify' },
  notion: { type: 'simpleicons', slug: 'notion' }, resend: { type: 'simpleicons', slug: 'resend' },
  zapier: { type: 'simpleicons', slug: 'zapier' },
};

const BRAND_COLORS = {
  stripe: '#635bff', toss: '#0064ff', 'linear.app': '#5e6ad2', notion: '#000000', vercel: '#000000',
  resend: '#000000', cursor: '#000000', airbnb: '#ff5a5f', spotify: '#1db954', uber: '#000000',
  apple: '#000000', pinterest: '#e60023', spacex: '#005288', tesla: '#cc0000', bmw: '#0066b1',
  ferrari: '#ff2800', lamborghini: '#f4c01a', renault: '#ffcc00', nvidia: '#76b900', ibm: '#0f62fe',
  mongodb: '#00ed64', posthog: '#1d4aff', sanity: '#f03e2f', sentry: '#362d59', supabase: '#3ecf8e',
  clickhouse: '#fff100', hashicorp: '#000000', composio: '#6366f1', airtable: '#fcb400',
  baemin: '#2ac1bc', cal: '#111827', claude: '#cc785c', clay: '#ffd23f', cohere: '#39594d',
  coinbase: '#0052ff', dcard: '#0086ff', elevenlabs: '#000000', expo: '#000020', figma: '#a259ff',
  framer: '#0055ff', freee: '#005bac', intercom: '#286efa', kakao: '#fee500', karrot: '#ff7e36',
  kraken: '#5741d9', line: '#06c755', lovable: '#ff6f61', mercari: '#ff0211', minimax: '#000000',
  mintlify: '#0d9373', miro: '#ffd02f', 'mistral.ai': '#ff7000', ollama: '#000000',
  'opencode.ai': '#000000', pinkoi: '#ff595a', raycast: '#ff6363', replicate: '#fc7676',
  revolut: '#0075eb', runwayml: '#000000', superhuman: '#5840ff', 'together.ai': '#0f6fff',
  voltagent: '#22c55e', warp: '#01a4ff', webflow: '#146ef5', wise: '#9fe870', 'x.ai': '#000000',
  zapier: '#ff4f00',
  gangnamunni: '#d54300', kakaopay: '#ffeb00', zigzag: '#fa6ee3', '29cm': '#000000',
  ably: '#fa2e5f', banksalad: '#04c584', zigbang: '#0066ff', wanted: '#0066ff', remember: '#000000',
  kream: '#000000', upbit: '#093687', kbank: '#0046ff', inflearn: '#00c471', wadiz: '#00c4c4',
  channeltalk: '#4f46e5', lunit: '#1032cf', bunjang: '#d80c18', flex: '#000000', classum: '#ff4438',
  'toss-securities': '#3182f6', oliveyoung: '#000000', gmarket: '#ffd200', tving: '#ff153c',
  catchtable: '#ff3d00', upstage: '#d2ff95', chai: '#ff0062', dabang: '#ff3478',
  jumpit: '#00dd6d', fastcampus: '#fc1c49',
};

const DS_OG_IMAGES = {
  airbnb: 'https://firebasestorage.googleapis.com/v0/b/standards-site-beta.appspot.com/o/documents%2Fa130cd31136%2F099b28f7432%2Fmeta%2Fstandards---project-thumbnail.png?alt=media&token=b1ee4a9a-cb2a-4dd9-ae43-01dd309d6f17',
  airtable: 'https://www.airtable.com/images/airtable-seo.jpg',
  apple: 'https://docs.developer.apple.com/tutorials/developer-og.jpg',
  cohere: 'https://cdn.sanity.io/images/rjtqmwfu/web3-prod/0750efbc3db33b1a67bc77575525b076f0137f26-1200x630.jpg?w=1200&h=630',
  cursor: 'https://cursor.com/public/opengraph-image.png',
  elevenlabs: 'https://elevenlabs.io/cover.png',
  expo: 'https://og.expo.dev/?theme=universe&title=Brand%2C+Assets%2C+Styles&description=Get+Expo+brand+assets+and+styles+for+any+use.',
  figma: 'https://cdn.sanity.io/images/599r6htc/regionalized/342e17642c7afa81206490b0dd21c3e5724ae040-2400x1260.png?w=1200&q=70&fit=max&auto=format',
  framer: 'https://framerusercontent.com/assets/MFmOCFlEnwFAS9IP2HbUEH68axo.jpg',
  ibm: 'https://carbondesignsystem.com/ogimage.png',
  line: 'https://designsystem.line.me/static/36a4ead41b7b972b1130287e849a14b1/73f08/SEO_IMG_1741574443.png',
  'linear.app': 'https://linear.app/api/og/generic?title=Brand&v=3',
  miro: 'https://www.mirotone.xyz/cover.png',
  'mistral.ai': 'https://mistral.ai/-/brand/opengraph-image-1robrb.png',
  'opencode.ai': 'https://opencode.ai/social-share.png',
  posthog: 'https://d36j3rcgc2qfsv.cloudfront.net/handbookcompanybrand-assets.jpeg',
  resend: 'https://cdn.resend.com/cover-brand.png',
  sanity: 'https://cdn.sanity.io/images/mos42crl/production/f378d0067c1406f4e3d3ed6874cd715c72f52d2c-1920x1080.png',
  supabase: 'https://supabase.com/images/og/supabase-og.png',
  superhuman: 'https://superhumanstatic.com/super-funnel/main/public/images/v3/social-share.png',
  'together.ai': 'https://cdn.prod.website-files.com/69654e88dce9154b5f1206dd/69a49f8243e74bf4b805d130_og-brand.jpg',
  vercel: 'https://assets.vercel.com/image/upload/v1709494095/front/design/geist-og.jpg',
  zapier: 'https://firebasestorage.googleapis.com/v0/b/standards-site-beta.appspot.com/o/documents%2F279072ea39f%2F8fc2c38ae5f%2Fmeta%2Fthumbnail_1_2.jpg?alt=media&token=0d0ea63f-6a32-4e46-b516-9db3c6c6ffe4',
  yeogiotte: 'https://framerusercontent.com/assets/kA6JROOLbG0jX7SQZl1tLZzahM.jpg',
  naver: 'https://www.navercorp.com/img/og/OG_TAG_1_Main.png',
  yanolja: 'https://www.yanoljagroup.com/common/assets/yanolja_colored_og_image.jpg',
  coupang: 'https://news.coupang.com/wp-content/uploads/2023/01/Coupang_2_1609.jpg',
  kakaobank: 'https://www.kakaobank.com/view/images/kkb_og_img.png',
  krds: 'https://www.krds.go.kr/resources/img/guide/KRDS_Open_Graph.png',
  kakaopay: 'https://i0.wp.com/story.kakaopay.com/wp-content/uploads/2024/03/kakaopay_thumb.png',
  zigzag: 'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4Zzt/image/-3UDP-Htu127zH73hWgxU-DsWNg.jpg',
  gangnamunni: 'https://blog.gangnamunni.com/contents/posts/238d9338-d3d4-80ac-a8c6-da95db5bc8bc/cover/7d41f721-4cf0-408c-b2fd-f7aa403a5cbe.png',
  banksalad: 'https://avatars.githubusercontent.com/u/71009899?s=280&v=4',
  socar: 'https://design.socar.kr/og.jpg',
  remember: 'https://cdn.rememberapp.co.kr/logos/remember/rmbr_og_image.png',
  channeltalk: 'https://opengraph.githubassets.com/d5fd6836ec938de2c8399cf28b2ceabc49104fbbf86e937f9e89983f1b50d638/channel-io/bezier-react',
  upstage: 'https://cdn.prod.website-files.com/6743d5190bb2b52f38e99e37/680a25ee07a17eed6deeff74_OG.avif',
};

const DESIGN_SYSTEMS = {
  apple: { name: 'Human Interface Guidelines', url: 'https://developer.apple.com/design/human-interface-guidelines', type: 'system', description: "Apple's official design guidelines for iOS, macOS, watchOS, and visionOS." },
  clickhouse: { name: 'ClickHouse Design', url: 'https://clickhouse.design', type: 'system', description: 'ClickHouse brand hub plus the Click UI design system and component library.' },
  freee: { name: 'Vibes', url: 'https://vibes.freee.co.jp', type: 'system', description: "freee's open-source design system with accessibility-focused components." },
  hashicorp: { name: 'Helios', url: 'https://helios.hashicorp.design', type: 'system', description: "HashiCorp's design system documenting components and foundations." },
  ibm: { name: 'Carbon', url: 'https://carbondesignsystem.com', type: 'system', description: "IBM's open-source design system with React, Angular, Vue, and Web Components." },
  karrot: { name: 'SEED Design', url: 'https://seed-design.io', type: 'system', description: "Karrot (Daangn)'s open-source design system for marketplace apps." },
  line: { name: 'LINE Design System', url: 'https://designsystem.line.me', type: 'system', description: "LINE's shared design system for products across the LINE family." },
  miro: { name: 'Mirotone', url: 'https://mirotone.xyz', type: 'system', description: "Miro's CSS component library for apps built on the Miro platform." },
  mongodb: { name: 'LeafyGreen', url: 'https://www.mongodb.design', type: 'system', description: "MongoDB's open-source design system with an extensive React component library." },
  pinterest: { name: 'Gestalt', url: 'https://gestalt.pinterest.systems', type: 'system', description: "Pinterest's open-source React component library with tokens and foundations." },
  sanity: { name: 'Sanity UI', url: 'https://www.sanity.io/ui', type: 'system', description: "Sanity's accessible React toolkit for building apps with design tokens." },
  toss: { name: 'TDS', url: 'https://tossmini-docs.toss.im/tds-mobile/', type: 'system', description: "Toss's mobile design system — 40+ components, tokens, and hooks." },
  uber: { name: 'Base Web', url: 'https://baseweb.design', type: 'system', description: "Uber's React implementation of Base — a living component system." },
  vercel: { name: 'Geist', url: 'https://vercel.com/geist', type: 'system', description: "Vercel's design system with 50+ components, foundations, and brand resources." },
  wise: { name: 'Wise Design', url: 'https://wise.design', type: 'system', description: "Wise's design system covering foundations, components, patterns, and tone of voice." },
  socar: { name: 'SOCAR Design', url: 'https://design.socar.kr/', type: 'system', description: "SOCAR's design system hub — Space Frame, SOCAR Blue, Sandoll Gothic Neo2 + Avenir typography, and mobility-flow component patterns." },
  wanted: { name: 'Wanted Montage', url: 'https://montage.wanted.co.kr/', type: 'system', description: "Wanted's Montage design system docs — components, foundations, Wanted Sans, and the brandcenter resource hub." },
  remember: { name: 'Remember UI', url: 'https://dramancompany.github.io/remember-ui/', type: 'system', description: 'Remember (drama&company) UI library — public Storybook deploy with components for the business-card / B2B networking product.' },
  airbnb: { name: 'Airbnb Brand Hub', url: 'https://brand.withairbnb.com', type: 'brand', description: "Airbnb's brand guidelines hub with logo, color, and visual identity rules." },
  airtable: { name: 'Airtable Trademark Guidelines', url: 'https://www.airtable.com/company/trademark-guidelines', type: 'brand', description: "Airtable's trademark usage and brand guidelines." },
  clay: { name: 'Clay Newsroom', url: 'https://www.clay.com/press', type: 'brand', description: "Clay's official press kit and co-branding guidelines." },
  cohere: { name: 'Cohere Newsroom', url: 'https://cohere.com/newsroom', type: 'brand', description: "Cohere's press kit with logos, symbols, and media resources." },
  cursor: { name: 'Cursor Brand', url: 'https://www.cursor.com/brand', type: 'brand', description: "Cursor's brand guidelines with logos, icons, and naming conventions." },
  elevenlabs: { name: 'ElevenLabs Brand', url: 'https://elevenlabs.io/brand', type: 'brand', description: 'ElevenLabs brand guidelines covering logo, symbol, and product sub-brands.' },
  expo: { name: 'Expo Brand', url: 'https://expo.dev/brand', type: 'brand', description: 'Expo logo/wordmark trademark and usage guidelines.' },
  figma: { name: 'Figma Brand Guidelines', url: 'https://www.figma.com/using-the-figma-brand', type: 'brand', description: "Figma's official trademark and brand usage guidelines with logo downloads." },
  framer: { name: 'Framer Brand Guidelines', url: 'https://www.framer.com/brand', type: 'brand', description: "Framer's brand and trademark guidelines with logo rules and color palette." },
  'linear.app': { name: 'Linear Brand', url: 'https://linear.app/brand', type: 'brand', description: "Linear's brand guidelines with wordmark, logomark, and color specifications." },
  'mistral.ai': { name: 'Mistral Brand', url: 'https://mistral.ai/brand', type: 'brand', description: "Mistral AI's logo, colors, typography, and brand asset kit." },
  'opencode.ai': { name: 'OpenCode Brand', url: 'https://opencode.ai/brand', type: 'brand', description: "OpenCode's terminal-oriented logo and brand assets." },
  posthog: { name: 'PostHog Brand Assets', url: 'https://posthog.com/handbook/company/brand-assets', type: 'brand', description: "PostHog's public handbook brand, logo, and illustration guidelines." },
  raycast: { name: 'Raycast Brand', url: 'https://www.raycast.com/templates/brand-guidelines', type: 'brand', description: "Raycast's brand guidelines with colors, logos, and asset kit." },
  resend: { name: 'Resend Brand', url: 'https://resend.com/brand', type: 'brand', description: "Resend's brand guidelines with wordmark, icons, and naming rules." },
  superhuman: { name: 'Superhuman Media Assets', url: 'https://superhuman.com/media-assets', type: 'brand', description: "Superhuman's press and brand asset kit." },
  supabase: { name: 'Supabase Brand Assets', url: 'https://supabase.com/brand-assets', type: 'brand', description: "Supabase's brand guidelines with logos and integration button specs." },
  'together.ai': { name: 'Together AI Brand', url: 'https://www.together.ai/brand', type: 'brand', description: "Together AI's logo, color, and typography brand guidelines." },
  zapier: { name: 'Zapier Brand', url: 'https://brand.zapier.com', type: 'brand', description: "Zapier's official brand guidelines 1.0." },
  yeogiotte: { name: '여기어때 Design Library', url: 'https://designlibrary.yeogi.com/', type: 'system', description: '여기어때 디자인 라이브러리 — A Visual Language for Travel. Foundations, components, and tokens.' },
  naver: { name: 'NAVER Brand Resource', url: 'https://www.navercorp.com/en/company/brandGuide', type: 'brand', description: "NAVER Corp's official brand guide — logo usage, NAVER Green #03C75A, and identity rules." },
  yanolja: { name: 'Yanolja Brand Center', url: 'https://www.yanoljagroup.com/brand_center', type: 'brand', description: "Yanolja's official brand center — visual identity inspired by the Multiverse of Dreams." },
  coupang: { name: 'Coupang Media Assets', url: 'https://news.coupang.com/coupang-media-assets-brand-guidelines-eng/', type: 'brand', description: "Coupang's official media-asset brand guidelines — logo usage, sizing, and attribution rules." },
  kakaobank: { name: 'KakaoBank Brand Resource', url: 'https://www.kakaobank.com/view/about/brand/resource', type: 'brand', description: 'KakaoBank Brand Identity Guidelines V2.0 — logo system, KakaoBank Yellow #FFE300, downloadable CI assets.' },
  krds: { name: 'KRDS — Korea Republic Design System', url: 'https://www.krds.go.kr/html/site/index.html', type: 'system', description: '행정안전부 주관 범정부 통합 디자인 시스템. Government Blue #256EF4, Pretendard GOV, WCAG/KWCAG 2.2 a11y-first tokens and components.' },
  kakaopay: { name: 'KakaoPay Story', url: 'https://story.kakaopay.com/', type: 'brand', description: "KakaoPay's design narrative blog — 3 pillars (Color · Icon · Type), the 3:1 contrast accessibility policy, and the KPDS internal design system context." },
  zigzag: { name: 'ZIGZAG Tech / Brunch', url: 'https://brunch.co.kr/@zigzag/73', type: 'brand', description: "Kakaostyle / ZIGZAG's brand & design articles — the ZDS (ZIGZAG Design System) rearchitecture and the 2021 cool-pink rebrand." },
  gangnamunni: { name: 'Gangnamunni Blog', url: 'https://blog.gangnamunni.com/post/welchis/', type: 'brand', description: "Healience design team blog — the Cell + Welchis two-system architecture behind Gangnamunni's medical-platform UI." },
  banksalad: { name: 'Banksalad GitHub', url: 'https://github.com/banksalad', type: 'brand', description: "Banksalad's public GitHub org including styleguide repos and BPL (Banksalad Product Library) reference material." },
  channeltalk: { name: 'Bezier', url: 'https://github.com/channel-io/bezier-react', type: 'system', description: "Channel Talk's open-source design system — Bezier (MIT). Inter + Noto KR/JP type stacks, token/component/icon packages, marketing-vs-product type cliff documented." },
  upstage: { name: 'Upstage Brand Resource Center', url: 'https://www.upstage.ai/resources/brand-resource-center', type: 'brand', description: "Upstage's brand resource hub — logo / symbol assets + IP rights statement. Token spec lives only in production CSS (Geist + Espeak proprietary face + violet #5B52FF × plum #3C043B + Solar accent #D2FF95)." },
  gmarket: { name: 'Gmarket Sans', url: 'https://corp.gmarket.com/fonts/', type: 'brand', description: "Gmarket's SIL OFL brand typeface — 3 weights, TTF/OTF, 11,172 KR glyphs. First-party font artifact from a 25-year-old open marketplace; backing 247 :root CSS vars + Smile Yellow #ffd200 + Club/Event/Service sub-systems on the storefront." },
};

// ─── Tiny frontmatter parser (no deps) ─────────────────────────────────
function parseFrontmatter(md) {
  if (!md.startsWith('---')) return { fm: {}, body: md };
  const end = md.indexOf('\n---', 4);
  if (end === -1) return { fm: {}, body: md };
  const yaml = md.slice(4, end);
  const bodyStart = end + 4;
  const body = md.slice(bodyStart).replace(/^\n+/, '\n');
  const fm = {};
  let currentKey = null;
  let currentNested = null;
  for (const rawLine of yaml.split('\n')) {
    const line = rawLine.replace(/\r$/, '');
    if (!line.trim()) continue;
    if (/^\s+/.test(line) && currentKey) {
      // nested key under currentKey
      const m = line.trim().match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
      if (m) {
        fm[currentKey] = fm[currentKey] || {};
        fm[currentKey][m[1]] = stripQuotes(m[2]);
      }
      continue;
    }
    const m = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (m) {
      currentKey = m[1];
      const value = m[2];
      if (value === '') {
        fm[currentKey] = {};
      } else {
        fm[currentKey] = stripQuotes(value);
      }
      currentNested = null;
    }
  }
  return { fm, body };
}

function stripQuotes(s) {
  s = s.trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1);
  }
  return s;
}

function yamlEscape(s) {
  if (s === null || s === undefined) return '""';
  const str = String(s);
  if (/^[#&*!|>%@`]/.test(str) || /[:#]/.test(str) || /^\s|\s$/.test(str) || str === '' || /^(true|false|null|yes|no|on|off)$/i.test(str) || /^-?\d/.test(str)) {
    return `"${str.replace(/"/g, '\\"')}"`;
  }
  return str;
}

function serializeFrontmatter(fm) {
  const ordered = ['id','name','display_name_kr','country','category','homepage','primary_color','logo','verified','omd','ds'];
  const lines = ['---'];
  for (const key of ordered) {
    if (!(key in fm) || fm[key] === undefined || fm[key] === null) continue;
    const v = fm[key];
    if (key === 'logo' && typeof v === 'object') {
      lines.push('logo:');
      lines.push(`  type: ${yamlEscape(v.type)}`);
      lines.push(`  slug: ${yamlEscape(v.slug)}`);
    } else if (key === 'ds' && typeof v === 'object') {
      lines.push('ds:');
      lines.push(`  name: ${yamlEscape(v.name)}`);
      lines.push(`  url: ${yamlEscape(v.url)}`);
      lines.push(`  type: ${yamlEscape(v.type)}`);
      lines.push(`  description: ${yamlEscape(v.description)}`);
      if (v.og_image) lines.push(`  og_image: ${yamlEscape(v.og_image)}`);
    } else {
      lines.push(`${key}: ${yamlEscape(v)}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

// ─── Main ──────────────────────────────────────────────────────────────
const REQUIRED = ['id','name','country','category','homepage','primary_color','logo','verified'];
const ids = readdirSync(REFS_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory() && existsSync(join(REFS_DIR, d.name, 'DESIGN.md')))
  .map(d => d.name)
  .sort();

let failures = 0;
let enriched = 0;
const today = new Date().toISOString().slice(0, 10);

for (const id of ids) {
  const path = join(REFS_DIR, id, 'DESIGN.md');
  const original = readFileSync(path, 'utf-8');
  const { fm, body } = parseFrontmatter(original);

  // Merge logic: existing fm wins (when non-empty), source maps fill gaps.
  const canonical = {};
  canonical.id = id;
  // name: existing 'name' > existing 'brand' > DISPLAY_NAMES_RAW > id-title-cased
  const existingName = (typeof fm.name === 'string' && fm.name.trim()) || (typeof fm.brand === 'string' && fm.brand.trim()) || null;
  // Prefer English/Latin name; if existingName is Hangul, treat as display_name_kr.
  let englishName = null, krName = null;
  if (existingName) {
    if (/[가-힯]/.test(existingName)) krName = existingName;
    else englishName = existingName;
  }
  canonical.name = englishName || DISPLAY_NAMES_RAW[id] || id.charAt(0).toUpperCase() + id.slice(1);
  // If name itself ends up as Hangul (rare — KREAM/Bunjang), keep it; display_name_kr separate.
  const explicitKr = (typeof fm.display_name_kr === 'string' && fm.display_name_kr.trim()) || (typeof fm.brand_kr === 'string' && fm.brand_kr.trim()) || (typeof fm.korean_name === 'string' && fm.korean_name.trim()) || krName || KR_DISPLAY[id] || null;
  if (explicitKr) canonical.display_name_kr = explicitKr;

  // country
  const existingCountry = normalizeCountry(fm.country);
  const mapCountry = COUNTRY_LABEL_TO_CODE[COUNTRIES_RAW[id]] || 'US';
  canonical.country = existingCountry || mapCountry;

  // category
  const existingCat = normalizeCategory(fm.category);
  const mapCat = CATEGORY_LABEL_TO_SLUG[CATEGORIES_RAW[id]] || null;
  canonical.category = existingCat || mapCat || 'consumer-tech';

  // homepage
  canonical.homepage = (typeof fm.homepage === 'string' && fm.homepage.trim())
    || (typeof fm.url === 'string' && fm.url.trim())
    || HOMEPAGE_URLS[id]
    || `https://${id}.com`;

  // primary_color
  const existingColor = (typeof fm.primary_color === 'string' && fm.primary_color.trim()) || null;
  canonical.primary_color = existingColor || BRAND_COLORS[id] || '#000000';

  // logo
  const logoSrc = LOGO_MAP[id];
  let logo = null;
  if (fm.logo && typeof fm.logo === 'object' && fm.logo.type && fm.logo.slug) {
    logo = { type: fm.logo.type, slug: fm.logo.slug };
  } else if (logoSrc) {
    logo = { type: logoSrc.type, slug: logoSrc.slug };
  } else {
    // Fallback: derive a favicon entry from homepage domain
    try {
      const u = new URL(canonical.homepage);
      logo = { type: 'favicon', slug: u.hostname };
    } catch {
      logo = { type: 'favicon', slug: `${id}.com` };
    }
  }
  canonical.logo = logo;

  // verified
  canonical.verified = (typeof fm.verified === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(fm.verified)) ? fm.verified : today;

  // omd
  canonical.omd = fm.omd || 0.1;

  // ds — preserve any existing ds object, else inject from DESIGN_SYSTEMS
  if (fm.ds && typeof fm.ds === 'object' && fm.ds.name) {
    canonical.ds = {
      name: fm.ds.name,
      url: fm.ds.url,
      type: fm.ds.type,
      description: fm.ds.description,
    };
    if (fm.ds.og_image) canonical.ds.og_image = fm.ds.og_image;
  } else if (DESIGN_SYSTEMS[id]) {
    const d = DESIGN_SYSTEMS[id];
    canonical.ds = { name: d.name, url: d.url, type: d.type, description: d.description };
    if (DS_OG_IMAGES[id]) canonical.ds.og_image = DS_OG_IMAGES[id];
  }

  // Validate
  const missing = REQUIRED.filter(k => !canonical[k]);
  const status = missing.length === 0 ? '✓' : '✗';
  if (missing.length > 0) failures++;

  // Compose output
  const fmBlock = serializeFrontmatter(canonical);
  const output = `${fmBlock}\n\n${body.replace(/^\n+/, '')}`;

  if (DRY_RUN) {
    console.log(`${id} ${status} ${missing.length ? `missing: ${missing.join(',')}` : 'enriched'}`);
  } else {
    if (output !== original) {
      writeFileSync(path, output, 'utf-8');
    }
    enriched++;
    console.log(`${id} ${status} ${missing.length ? `missing: ${missing.join(',')}` : 'enriched'}`);
  }
}

console.log(`\n${enriched}/${ids.length} processed, ${failures} failures`);
if (failures > 0) process.exit(1);
