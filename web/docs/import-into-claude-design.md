# Using an oh-my-design reference inside Claude Design

> The "leg B" path, corrected. Claude Design's `/design-sync` is **not** a way to
> import someone else's catalog — it pushes *your own* local components up to
> *your own* claude.ai/design project. The path that genuinely works for our
> references is the **web import / DESIGN.md drop-in**. This guide documents it.

## TL;DR

1. Get a reference's `DESIGN.md` from oh-my-design (3 ways below).
2. In **claude.ai/design** (web or desktop), create a design system and **add the
   `DESIGN.md` (or paste the public reference URL) under "Add assets"**.
3. Describe what you want — Claude Design scaffolds and builds on-brand from it.

That's it. No account on our side, no API, no `/design-sync`.

---

## Step 1 — Get the DESIGN.md

Pick whichever fits the surface you're already in:

| You're in… | How to get it |
|---|---|
| **Claude (chat / desktop) with our MCP connector** | Ask Claude e.g. *"get the toss DESIGN.md"* → the `get_design_md` tool returns it, with a `provenance.url` to cite. Or *"find a calm B2B fintech reference"* → `search_by_vibe`. |
| **A browser** | Open `https://oh-my-design.kr/design-systems/<id>` and copy, or fetch the raw markdown twin at `https://oh-my-design.kr/design-systems/<id>.md`. |
| **A terminal / coding agent** | `npx oh-my-design-mcp` (local, offline) exposes `design://<id>` resources and the same 3 tools. |

> The DESIGN.md *is* the currency. It carries the full token system (color,
> typography, spacing, radius, elevation, components) plus voice/personas —
> everything Claude Design needs to generate on-brand.

## Step 2 — Bring it into Claude Design

Claude Design (claude.ai/design, **web + desktop only**) populates a design
system three ways: inherit your org's, `/design-sync` your *own* codebase, or
**from scratch + context**. We use the third:

1. Create a new design system (or open an existing project).
2. Under **Add assets**, either:
   - **Upload the `DESIGN.md`** you got in Step 1, **or**
   - **Paste the public reference URL** (`https://oh-my-design.kr/design-systems/<id>`)
     — Claude Design's web import can ingest a public URL.
3. Let Claude review/scaffold the system, then prompt it to build
   (*"build a pricing page using this design system"*). The June-2026 on-brand
   correction loop keeps output aligned to the imported tokens.

## What NOT to do

- ❌ **Don't tell users to run `/design-sync https://github.com/...our-repo`.**
  `/design-sync` reads the *caller's own* local/connected code and writes to the
  *caller's own* project. It has no path to import our hosted catalog. (Verified
  against the DesignSync tool surface + official docs, 2026-06-18.)
- ❌ Don't rely on `@dsCard` / `_ds_manifest.json` markers in `preview.html` —
  that's an undocumented, version-volatile CLI internal at the wrong granularity
  (our preview is one token-catalog page per brand, not per-component cards).

## When the cheap path isn't enough

If token-level import proves too coarse for someone who wants a real
component library in their pane, the expensive upgrade is to **decompose each
brand's `components:` frontmatter into discrete per-component HTML** and have
them upload that — real engineering, pilot on the brands that already have
previews first. Only do this if the DESIGN.md drop-in demonstrably underdelivers.
