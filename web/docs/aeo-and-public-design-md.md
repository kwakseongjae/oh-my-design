# Inbound strategy brief — Brave/Claude indexing, Claude-Design positioning, public `.md` routes

Research date: 2026-06-20. Two facts that reorder priorities up front:

1. **Claude's web search is Brave-backed, not Google-backed.** Brave is on Anthropic's
   subprocessor list (since 2025-03-19); Claude's `web_search` tool carries a
   `BraveSearchParams` internal. The widely-quoted "~87% of Claude citations match
   Brave's top results" is a *small-N* observation (15 results, one test) — directional,
   not a constant. Anthropic's product docs never name the provider, so treat
   "Brave powers Claude search" as strongly corroborated, not vendor-confirmed.
2. **`vercel.com/design.md` is real** (fetched). It's the Geist spec as a hybrid file:
   a YAML token block (10-step color scales in hex + P3 oklch, 4px spacing, type, component
   recipes) followed by Markdown prose (Overview / Colors / Typography / Motion / Voice /
   Do's & Don'ts). It's one instance of a **site-wide `.md` convention** — append `.md` to
   *any* Vercel doc URL for raw markdown. `vercel.com/design.dark.md` exists too.

The honest comparable for us is **not** `vercel.com/design.md` (Vercel has one design system
at its root). It's **`getdesign.md/{brand}/design-md`** — a live competitor already publishing
per-brand DESIGN.md with `npx getdesign add <brand>`. Per-brand namespacing is correct for a
286-brand catalog.

---

## 1. Brave/Claude indexing — fact-check + what we're missing

### Confirmed
- Claude (consumer web search) cites from **Brave's independent index** (30B+ pages, no Bing
  fallback since 2023). So **for Claude specifically, the dominant lever is ranking in the
  Brave top-5 for design queries** — the ChatGPT/Bing playbook transfers poorly (much lower
  overlap there due to re-ranking).
- **Brave's crawler is deliberately anonymous** — it does *not* advertise a distinct
  user-agent, specifically so sites that allowlist "only Googlebot" don't exclude it. Brave
  won't crawl anything Googlebot can't. **#1 silent failure mode: any WAF/Cloudflare rule
  that blocks non-Google bots silently blocks Brave.**
- **Brave has no Search-Console-style webmaster dashboard.** The only confirmed submission
  tool is a single-URL re-fetch endpoint: `search.brave.com/submit-url`. To delist, use a
  `noindex` directive (robots.txt alone won't deindex).
- Brave's index is partly seeded by **opt-in Brave-browser users** (Web Discovery Project) —
  real visits from the Brave community (privacy-leaning dev audience) help niche pages get in.
- **llms.txt:** ~97% of llms.txt files get zero traffic; consumer answer-engines ignore them.
  BUT **Claude Code is the single heaviest fetcher of llms.txt** (Ahrefs, May 2026, 137K
  domains). So our existing llms.txt earns its keep as a **coding-agent (B2A) channel**, not a
  consumer-citation booster. Keep it, don't expect SEO lift from it.

### Unverified / likely false (don't act on)
- "Brave supports IndexNow" — **Brave is NOT an IndexNow participant.** Pinging IndexNow does
  not feed Brave. (Fine to run IndexNow for Bing/Yandex, just not as a Brave strategy.)
- "Brave has a sitemap-upload portal" — SEO blogs claim it; Brave's official docs don't. Treat
  as unverified.

### Our current state
- ✅ `robots.ts` allows `*` + explicitly allows ClaudeBot/GPTBot/PerplexityBot/etc. The
  wildcard already covers Brave's anonymous crawler.
- ✅ `sitemap.ts` enumerates every `references/<id>` route.
- ❌ **No schema.org / JSON-LD on brand pages** (grep: zero `application/ld+json`). This is
  the biggest AEO content gap — see §2.
- ❌ No Brave `submit-url` submissions done.
- ❓ Vercel Hobby has no aggressive bot-blocking by default, but **verify no Vercel Firewall /
  challenge rule sits on the brand routes** (would silently block Brave's anonymous UA).

### Action checklist (priority order)
1. **Confirm Brave crawlability.** Audit Vercel Firewall / any bot rule — ensure non-Google,
   unnamed UAs are not challenged on `/design-systems/*`. (Highest leverage, lowest effort.)
2. **Submit hub + top brand pages to `search.brave.com/submit-url`**; resubmit on material change.
3. **Add JSON-LD to brand pages** (§2) — `Article` + `mainEntityOfPage`, optional `FAQPage`.
4. **Answer-first summary block** at the top of each brand page (§2).
5. **Seed Brave WDP** — share brand pages in dev/design communities (Brave-using audience).
6. Keep llms.txt; reframe internally as the Claude-Code/agent channel, not consumer SEO.

---

## 2. Claude-Design positioning — indexing + content gaps

Goal: be *the* platform that defines the DESIGN.md spec for single-source design management.
The web import path into claude.ai/design accepts a pasted public-repo URL or an uploaded
DESIGN.md — **DESIGN.md is the currency, and a clean public URL per brand is how it's handed
over** (this is exactly what §3 ships).

### Content gaps to close
- **No structured-data layer.** Add per-brand JSON-LD that mirrors visible content:
  `Article` + `mainEntityOfPage`, and a `FAQPage` for the questions users actually ask
  ("What typeface does Stripe use?", "Toss color palette"). Mark up only visible content.
- **No answer-first extract.** Each brand page should open with a 2–3 sentence extractable
  summary (grid, primary color, type scale, voice) before the deep tables — that opening block
  is precisely what Claude lifts and cites.
- **Question-shaped titles/headings/URLs** matching real phrasing ("Polaris color palette",
  "Geist design tokens").
- **Freshness plumbing** so Claude's `page_age` signal favors us on "what does X use *now*":
  accurate `dateModified` in JSON-LD, `lastmod` in sitemap, a visible "verified <date>" (we
  already store `verified` per ref — surface it in markup).
- **A landing page that defines the spec** — own the query "what is DESIGN.md" (we have a
  `/what-is-design-md` route already; make it the canonical definition + link every brand's
  `.md`). This is the AEO anchor for the category.

### Indexing
- Same Brave actions as §1. Plus: list every brand's new `/{id}/design.md` URL (from §3) in
  `sitemap.xml` and `llms.txt`, and add a `<link rel="alternate" type="text/markdown">` on each
  HTML page so agents/crawlers can discover the markdown alternate.

---

## 3. Public `.md` per-brand routes — SHIPPED (2026-06-22)

**Status:** Done and verified end-to-end. A raw-markdown twin already existed at
`/design-systems/<id>.md` (handler `web/src/app/r/[id]/route.ts` + a `next.config`
rewrite, all 286 SSG'd, `X-Robots-Tag: noindex`, advertised in llms.txt). On
2026-06-22 the public URL was **migrated to the Vercel-shaped `/<id>/design.md`**
(e.g. `oh-my-design.kr/toss/design.md`):

- `next.config.ts`: rewrite `/:id/design.md → /r/:id`; **308 permanent redirect**
  `/design-systems/:id.md → /:id/design.md` so already-published links survive.
- `scripts/gen-llms-full.cjs` + regenerated `llms.txt`/`llms-full.txt` now point at
  `/<id>/design.md`; README (en/ko/ja/zh-TW), the omd-* SKILL.md fetch instructions,
  `agents/omd-master.md`, the catalog-resolution test, and the FAQ copy all updated.
  (CHANGELOG history left intact — the 308 keeps it valid.)
- `rel="alternate" type="text/markdown"` added to the HTML detail page (#8); the
  detail-view "raw .md" button updated.
- Verified on `next dev`: new URL → 200 `text/markdown`; old URL → 308; dotted ids
  (`/linear.app/design.md`) → 200; `/docs` un-shadowed; unknown id → 404.
- Smoke: `node scripts/smoke-md-twins.mjs` (286 covered) + the HTTP mode
  (`--base <url>`) now assert the `/<id>/design.md` shape.

The original implementation plan is kept below for reference.

### Original plan (superseded by the shipped migration above)

What the user wanted: `/toss/design.md`-style public raw markdown, like Vercel.

### Read path already exists
`web/src/lib/mcp/catalog.ts` reads `references/<id>/DESIGN.md` from disk (`readRaw`) and
`REGISTRY_BY_ID` is the id guard. The brand page `/design-systems/[id]/page.tsx` does the same.
A `.md` route is a thin new representation over content we already serve — no new data layer.

### Route shape — decision
| Option | URL | Pro | Con |
|---|---|---|---|
| **A (recommended)** | `/{id}/design.md` | exactly the Vercel-shaped URL the user wants; agent-recognizable; the literal `design.md` suffix disambiguates, so no collision with existing top-level routes (`/docs`, `/faq`, …) and no denylist needed | adds a top-level dynamic segment |
| B | `/design-systems/{id}/design.md` | nests cleanly under the existing canonical | not the flat `/toss/...` shape requested |
| C | `/design-systems/{id}.md` | mirrors Vercel's `/docs/functions.md` literal-suffix | `.md` suffix on a dynamic segment is awkward in App Router |

**Recommendation: Option A.** Implement as a route handler at
`web/src/app/[id]/design.md/route.ts`. The `[id]` segment only ever resolves a `…/design.md`
child, so it cannot shadow existing pages. Guard with `REGISTRY_BY_ID[id]`; unknown id → 404.

> Note: keep the HTML brand page at `/design-systems/{id}` as the **canonical** (SEO). The
> `.md` is an alternate raw representation, not a competing HTML page — set `rel="alternate"`,
> not a second canonical.

### Concrete steps
1. **New route handler** `web/src/app/[id]/design.md/route.ts`:
   - `runtime = "nodejs"` (fs read).
   - `export async function GET(_req, { params })` → `const { id } = await params;`
     (Next.js 16 async params).
   - Reuse a shared `readRaw(id)` (extract from `catalog.ts` into `lib/references.ts`, or
     re-export) + `REGISTRY_BY_ID[id]` guard.
   - Return raw DESIGN.md **as-is** (frontmatter + prose — it's already the Geist hybrid shape):
     `new Response(raw, { headers: { "content-type": "text/markdown; charset=utf-8",
     "cache-control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
     "access-control-allow-origin": "*" } })`.
   - Optionally prepend a one-line provenance comment (`<!-- source: oh-my-design.kr/design-systems/<id> -->`).
2. **`generateStaticParams`** in the handler mirroring the brand page (all ids with a DESIGN.md)
   so the `.md` files are statically generated.
3. **Discovery wiring:**
   - `sitemap.ts`: add a `/{id}/design.md` entry per reference (alongside the HTML route).
   - `public/llms.txt`: list each brand with its `/{id}/design.md` link (this is the file
     Claude Code actually fetches).
   - Brand HTML page `generateMetadata`: add
     `alternates: { ...canonical, media: { "text/markdown": "/{id}/design.md" } }` (or a raw
     `<link rel="alternate" type="text/markdown" href="/{id}/design.md">`).
4. **Optional (bonus, not foundational):** Accept-header content negotiation — a `next.config`
   rewrite matching `Accept: text/markdown` on `/design-systems/:id` → the `.md` handler
   (Vercel's pattern). The explicit `.md` URL must work standalone regardless; skip if it adds
   risk.
5. **Optional (later):** a shadcn-compatible registry namespace (`public/r/{id}.json` pointing
   at the `.md` + tokens) so `npx shadcn add @omd/toss` and MCP clients resolve our catalog the
   way they already resolve shadcn. Piggybacks on an installed-base convention.

### Verification after build
- `curl -sI https://oh-my-design.kr/toss/design.md` → `200`, `content-type: text/markdown`.
- `curl -s https://oh-my-design.kr/toss/design.md | head` → raw frontmatter + prose.
- Unknown id (`/notabrand/design.md`) → `404`.
- `/sitemap.xml` and `/llms.txt` list the `.md` URLs.

### Caveats
- Vercel's `design.md` is marked `version: alpha` — the hybrid format isn't frozen. Don't
  hard-couple our schema to theirs; our existing DESIGN.md shape is already equivalent.
- No hard evidence crawlers preferentially fetch `.md` for *ranking*. The proven benefit is
  **agent fetch-time** token efficiency + parse reliability (markdown ≫ HTML in context).
  Keep HTML canonical for SEO; serve `.md` as the agent-facing representation.

---

## Sources
- Anthropic subprocessor list (Brave, 2025-03-19) via simonwillison.net/2025/Mar/21/anthropic-use-brave/
- search.brave.com/help/brave-search-crawler · search.brave.com/submit-url · brave.com/blog/search-independence/
- ahrefs.com/blog/llmstxt-study/ (llms.txt, May 2026)
- vercel.com/design.md + vercel.com/design.dark.md (fetched) · vercel.com/docs/agent-resources/markdown-access
- vercel.com/blog/making-agent-friendly-pages-with-content-negotiation
- getdesign.md/vercel/design-md (live competitor) · github.com/voltagent/awesome-design-md
- ui.shadcn.com/docs/registry/namespace (registry `{name}.json` pattern)
