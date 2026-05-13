# Thin install + fresh fetch (WebFetch + MCP)

**Status**: proposed — not implemented
**Author context**: 2026-05-13 conversation, after KR-10 batch
**Motivation**: npm publish on every brand addition is high-friction and produces stale installs

---

## Problem statement

Current `oh-my-design-cli` package bundles 88 brand DESIGN.md files (~12MB) and ships them via npm.

**Pain points observed**:
1. Every batch (10 brands) requires `npm publish` to reach end users
2. Users installed at count N keep seeing N brands forever, even after we add more
3. Skill descriptions historically baked the count (`"67개 ..."`) — required re-edit per batch, easy to forget (we forgot in the 78 release; observed again at 88)
4. Bundle grows linearly; cold install time scales
5. Single brand typo fix = minor version bump + publish

**Decided 2026-05-13**: skill descriptions are now **count-agnostic** ("실제 기업 레퍼런스" without a number). Won't regress this kind of bug again. But the fundamental delivery model still needs reform.

---

## Proposed architecture

Hybrid: **thin npm baseline + fresh fetch at runtime**.

```
npm package (thin, ~500KB)
├─ skills/                       (routing logic, count-agnostic)
├─ data/reference-fingerprints.json   (metadata only — id, category, primary, tone keywords)
├─ data/snapshot-date.txt        ("baseline 2026-05-13")
├─ hooks/, agents/, bin/         (unchanged)
└─ (no DESIGN.md bundled — fetched at runtime)

Runtime (skill execution in user's agent)
1. Match brand via local fingerprints.json (offline-capable)
2. Fetch full DESIGN.md from:
   - Primary:  WebFetch  https://oh-my-design.kr/api/references/<id>/design-md
   - MCP path: omd_get_designmd(id)        (if MCP server connected)
   - Fallback: bundled (if shipped — optional Phase 3 decision)
3. Apply, write to project DESIGN.md
```

**Outcome**:
- New brand batch → `git push` web + git commit fingerprints; **no npm publish**
- Users see new brands on next skill call (no reinstall)
- npm publish frequency drops to "skill behavior changes" (<1/month)
- Marketing copy (READMEs) still updates count per batch — that's intentional

---

## Implementation phases

### Phase 1 — Backend HTTP endpoint (~1h)

`web/src/app/api/references/[id]/design-md/route.ts`:
```ts
import { readFileSync } from 'fs';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const md = readFileSync(join(process.cwd(), 'references', params.id, 'DESIGN.md'), 'utf-8');
    return new NextResponse(md, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, max-age=300, s-maxage=3600',
        'Access-Control-Allow-Origin': '*',
        'ETag': `"${md.length}-${md.slice(-32)}"`,
      },
    });
  } catch {
    return NextResponse.json({ error: 'not found' }, { status: 404 });
  }
}
```

Smoke test: `curl https://oh-my-design.kr/api/references/kakaopay/design-md | head -20`

### Phase 2 — MCP server (~3h, parallel with Phase 1)

New package `oh-my-design-mcp` (separate npm package).

Tools exposed:
| Tool | Args | Returns |
|---|---|---|
| `omd_search_references` | `{ query, top_k? }` | top-N brand fingerprints (id, score, why) |
| `omd_get_designmd` | `{ id }` | full DESIGN.md markdown |
| `omd_list_categories` | — | category → ids map |
| `omd_get_snapshot_date` | — | "2026-05-13" (for staleness check) |

Resources exposed (MCP resources, browsable):
- `omd://references` — list all
- `omd://references/<id>` — single DESIGN.md

Server reads from same HTTP endpoint internally (single source of truth) OR direct disk if self-hosted.

Distribution: `npx -y oh-my-design-mcp` in MCP config:
```json
{
  "mcpServers": {
    "oh-my-design": { "command": "npx", "args": ["-y", "oh-my-design-mcp"] }
  }
}
```

### Phase 3 — Skill updates (~1h)

`skills/omd-init/SKILL.md`, `skills/omd-harness/SKILL.md`:

```diff
- Phase 4: fetch reference DESIGN.md from .claude/data/references/<id>/DESIGN.md
+ Phase 4: fetch reference DESIGN.md (priority order):
+   a) If MCP `oh-my-design` connected: call omd_get_designmd(id)
+   b) Else WebFetch https://oh-my-design.kr/api/references/<id>/design-md
+   c) Else (offline): bundled .claude/data/references/<id>/DESIGN.md if present
+   d) Else: report "id not in catalog, network unavailable, no bundle"
```

Skill must also surface the snapshot date to the user when fetching offline:
> "오프라인 모드 — 2026-05-13 기준 카탈로그 사용 중. 최신 brand 보려면 인터넷 연결 후 재시도."

### Phase 4 — Bundle diet (~30m, optional)

`package.json`:
```diff
"files": [
  "dist",
  "skills/*",
  "agents",
  "data",
- "web/references/*/DESIGN.md",
+ "data/snapshot-date.txt",
  ".claude/hooks/*.cjs",
  ".claude/settings.json"
]
```

`scripts/postinstall.cjs`: stop copying DESIGN.md files into `.claude/data/references/`. Skills will fetch.

**Trade-off**: completely offline-broken if API down. Mitigation: optional flag `--bundle-references` for users who want offline guarantee.

### Phase 5 — `omd:batch-launch` SKILL update (~15m)

Phase 3 SYNC:
- Remove `npm publish` from suggested follow-ups
- Add note: "After git push, brand reaches users automatically via API"
- Marketing surfaces (README count, llms.txt count) still need batch sync since they're static

---

## Migration plan

1. **Phase 1 first** (backend endpoint) — non-breaking, just adds capability
2. **Phase 2 in parallel** (MCP) — non-breaking, separate package
3. **Phase 3** (skill update) — backward-compat: tries MCP → WebFetch → bundle, so old installs still work
4. **Phase 4 last** (bundle diet) — only after Phase 3 has shipped for 1-2 weeks and we confirm fetch reliability
5. **Phase 5** (omd:batch-launch update) — final cleanup after migration is stable

---

## Open questions

- **Authentication**: keep API public read? (Yes — DESIGN.md files are intended for public consumption, that's the product.)
- **Rate limit**: needed? (Probably basic per-IP at edge — Vercel/Cloudflare. Not critical for v1.)
- **Versioning of DESIGN.md content**: should the API return a `?version=YYYY-MM-DD` parameter so installs can pin? (Defer — KISS for v1.)
- **Caching**: should the skill cache fetched DESIGN.md locally per session? (Yes — agent runtime should cache the parsed result for the session.)
- **What about agent that has no WebFetch tool?** (Edge case. Codex CLI has it. Cursor has it via tool config. If a user's agent really has neither WebFetch nor MCP, they install the `--bundle-references` flag at install time.)

---

## When to do this

**Trigger**: next time the user mentions "10개 더" or any brand addition. Pause Phase 2 build, ship the architecture first, then resume.

**Or**: after 2 more batches (100, 110 brands), npm package bundle pain becomes hard to ignore — natural breakpoint.

**Not now**: this conversation closed with count-agnostic skill descriptions as the immediate fix. Architecture is tracked but not implemented yet.

---

## Reading list / inspirations

- Linear's hosted catalog approach (linear.app/docs API)
- Tailwind v4 CDN-first delivery model
- shadcn/ui's "components are not a package, they're snippets you copy" — opposite direction but instructive
- MCP spec: `https://modelcontextprotocol.io/`
