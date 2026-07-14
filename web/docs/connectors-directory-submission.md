# Connectors Directory submission — archived historical plan

> **Retired 2026-07-11. Do not submit or follow the setup steps below.** The public
> `/api/mcp` endpoint now returns HTTP 410 and the MCP package is archive-only.
> Skills, the local catalog, and raw `/<id>/design.md` URLs replaced this transport.
> The remainder of this document is preserved only as decision history.

Mapped field-by-field to the **actual** submission flow (Anthropic docs, 2026-06).
The in-app portal has **11 steps**; the standalone form
(`clau.de/mcp-directory-submission`, used by individual accounts) groups the same
inputs into ~6 pages. Copy each value below straight into the matching field.

- **Channel (you, individual plan):** `https://clau.de/mcp-directory-submission` (remote MCP server). The in-app portal `claude.ai/admin-settings/directory/submissions/new` needs a Team/Enterprise org + Directory-management permission. NOT the desktop-extension form.
- No listing fee. Review queue has no published SLA. Escalation: `mcp-review@anthropic.com`.

---

## Step 1 — Introduction
Informational only (directory listing doesn't change how the connector works). Continue.

## Step 2 — Connection
| Field | Value |
|---|---|
| Server URL | `https://oh-my-design.kr/api/mcp` |
| Transport type | **Streamable HTTP** |
| User connection model | **Single URL for all users** (public, no per-user URL) |

## Step 3 — Tools (auto-synced from the live server)
No input — the form pulls the tool list. Confirm all 3 show **title + `readOnlyHint: true`** (verified live): `list_references`, `search_by_vibe`, `get_design_md`. No write/destructive tools. Nothing flagged.

## Step 4 — Listing
| Field | Value | Limit |
|---|---|---|
| Server name | `oh-my-design` | ≤100 ✓ |
| Tagline | `Browse 286 real brand design systems, in chat` | ≤55 (45) ✓ |
| Description | *(below)* | ≤2000 ✓ |
| Categories (1–5) | **Development tools** (real form has no "Design" option; closest fit) | pick from form list |
| Documentation URL | `https://oh-my-design.kr/docs/connector` | |
| Privacy policy URL | `https://oh-my-design.kr/privacy` | |
| Terms of service URL | `https://oh-my-design.kr/terms` (KR: `/terms/ko`) | |
| Support contact | `gkffhdnls13@gmail.com` (issues: `github.com/kwakseongjae/oh-my-design/issues`) | |
| Icon | `https://oh-my-design.kr/icon.png` (256×256 square) | |
| URL slug | `oh-my-design` | **permanent — set carefully** |

**Description (paste):**
`A read-only connector to the oh-my-design catalog of 286 curated brand design systems (Toss, Stripe, Linear, and more). Three tools: list and filter references by country and category, find brands by a described vibe (semantic search), and fetch a brand's full DESIGN.md — color, typography, components, spacing, motion, and voice. Every result includes a provenance permalink back to oh-my-design.kr. No account, no authentication, read-only.`

## Step 5 — Use Cases
- **Primary use cases:** `Reference real brand design systems while building UI in Claude: discover brands by vibe, filter by country/category, and pull a brand's full DESIGN.md tokens (color, type, components, voice) to build on-brand.`
- **User prerequisites:** `None. Public and unauthenticated — just add the connector URL. No account, plan, or setup.`
- **Data scope:** **Reads only.**

## Step 6 — Company
| Field | Value |
|---|---|
| Company name | `oh-my-design` (individual maintainer) |
| Company website | `https://oh-my-design.kr` |
| Primary contact | your name + `gkffhdnls13@gmail.com` (pre-filled from account) |

## Step 7 — Authentication
- **No authentication** (public read-only catalog). No OAuth, no custom credentials.
- Per-tool on-demand auth prompt: **No**.

## Step 8 — Data Handling
| Question | Answer |
|---|---|
| Underlying API source | **Own / first-party** (we own and curate the catalog) |
| Personal health data | **No** |
| Sponsored content | **No** |

## Step 9 — Test & Launch
- **Test account setup:** `No account required — public, unauthenticated.`
- **Reviewer access guide (paste):**
  1. In Claude → Settings → Connectors → Add custom connector → paste `https://oh-my-design.kr/api/mcp` (no auth).
  2. Run: `List the Korean fintech design references in the oh-my-design catalog.` → returns a filtered list.
  3. Run: `Find brands in oh-my-design with a calm, editorial B2B vibe and show their permalinks.` → returns ranked matches with `oh-my-design.kr/design-systems/...` URLs.
  4. Run: `Fetch the full DESIGN.md for "stripe" from oh-my-design and summarize its color and typography.` → returns the full spec + provenance.
- **Confirm all tools tested:** Yes (Claude custom connector / MCP Inspector). Unknown ids return a friendly error, not a crash.

## Step 10 — Compliance (7 acknowledgements — our stance for each)
1. **Directory guidelines compliance** — Yes.
2. **First-party API usage** — Yes; the catalog is our own curated data, no third-party API proxied.
3. **Financial transactions** — N/A; no payments or transactions.
4. **AI media generation policies** — N/A; no AI media generation.
5. **Prompt-injection prevention** — Tool outputs are our own catalog content; no tool injects instructions to steer Claude. (The optional `cite` hint is benign, not a "prefer-us / skip-other-tools" directive.)
6. **Conversation data collection** — We collect **no** conversation data; only anonymous aggregate tool-call counts (no query text, no IP, no account). Disclosed in the privacy policy.
7. **Public documentation** — Yes: `/docs/connector` + `/privacy`.

## Step 11 — Review
Verify all fields, clear any quality warnings, **Submit**. Track status via the submissions dashboard (or the email tied to your account on the standalone form).

---

## Actual form note (the live standalone form = a 6-page Google Form)
The 11 steps above are grouped into 6 pages on `clau.de/mcp-directory-submission`. The last page is a **legal checklist** (Policy / Technical / Documentation / Testing) ending in Submit. Our stance per item:

**Policy Compliance** — check all: no cross-service automation ✓ · no money/crypto/financial transactions ✓ · live & published & production-ready ✓ · I own the endpoint ✓ · (read & agree to the Software Directory Policy).

**Technical Requirements** — readOnly annotations ✓ · HTTPS ✓ · OAuth/IP-allowlist/CORS = "not applicable" (no auth, no browser auth) ✓ · **"tested with Claude.ai on latest build" → check only AFTER the self-test.**

**Documentation** — docs published (`/docs/connector`, now incl. troubleshooting) ✓ · privacy published (`/privacy`) ✓ · **Terms of service published (`/terms`) ✓** · setup + tool descriptions + troubleshooting present ✓.

**Testing** — test account/creds items = "(if relevant)" → N/A (no account) ✓ · **"all tools tested in the surfaces" → check only AFTER the self-test.**

**Additional Information (optional free-text), suggested paste:**
> Public, read-only, unauthenticated connector over our own curated catalog of 286 brand design systems — no user data, no PII. The only external call: the short vibe-search query is sent to OpenRouter to compute a ranking embedding (disclosed in our privacy policy; not stored). Contact: gkffhdnls13@gmail.com.

**Two items gate the legal page → both need YOUR self-test:** add the connector in Claude.ai (web), run the 3 example prompts, then check the two testing boxes.

---

## Optional fields worth setting
- **Allowed Link URIs:** add `https://oh-my-design.kr` so the provenance permalinks we return aren't per-click confirmation-prompted.
- **MCP App screenshots:** not applicable — we ship a plain tools-only server (no interactive UI), so the 3–5 PNG carousel requirement does not apply.

## Pre-submission checklist — status
- [x] serverInfo = `oh-my-design` / `1.0.0` (verified live)
- [x] Origin allowlist → 403 on mismatch; no-Origin/claude.ai → 200 (verified live)
- [x] Per-IP rate limit (60/60s) → 429 + Retry-After (verified live)
- [x] Privacy policy (EN+KO) covers the connector; no query/IP/account; no Claude-context access
- [x] Raw query text not logged
- [x] All 3 tools: title + `readOnlyHint:true`
- [x] Connector docs page live at `/docs/connector` with server URL + 3 prompts + troubleshooting
- [x] Terms of service published at `/terms` (+ `/terms/ko`)
- [x] Square icon at `/icon.png` (256×256)
- [x] Deps pinned
- [x] Form pages 2–3 filled (draft saved to the submitter's Google account); page 4 logo filled
- [ ] Self-test: add the connector in Claude.ai (web), run the 3 prompts end-to-end
- [ ] After self-test: check page-4 "Claude.ai (web)" + the two page-6 testing boxes
- [ ] Provide a square SVG logo (optional; PNG icon currently used) + 3–5 screenshots (optional)
- [ ] (You only) Vercel → Firewall: confirm no challenge rule on `/api/mcp`
- [ ] Submit via `clau.de/mcp-directory-submission`

## Sources
- [Submitting to the Connectors Directory — Claude docs](https://claude.com/docs/connectors/building/submission)
- [Connectors Directory FAQ — Claude Help](https://support.claude.com/en/articles/11596036-anthropic-connectors-directory-faq)
- [Anthropic Software Directory Policy](https://support.claude.com/en/articles/13145358-anthropic-software-directory-policy)
- [Connector submission walkthrough (sunpeak, May 2026)](https://sunpeak.ai/blogs/claude-connector-directory-submission/)
