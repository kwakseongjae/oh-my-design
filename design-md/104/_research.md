# Research Sources for 104人力銀行

Extracted: 2026-07-14

Input packet: `artifacts/reference-create/runs/2026-07-13-104/packet.md`

## Method and evidence boundaries

This CREATE pass used `artifacts/reference-evidence/104.json` as the only raw computed-style, font, component, surface, and interaction evidence. It was not refreshed, supplemented with browser capture, or collected through MCP. Built-in web search was used only for first-party company/product context, current service evolution, official font/design source discovery, and the two required Tier 2 attempts.

The evidence artifact’s preflight is 3 surfaces / coverage 96 / 31 component variants. It records `interactionCount: 0`; interaction behavior is therefore absent from canonical tokens and components.

## Tier 1 — supplied live product evidence

| Source | Confidence | Used for |
|---|---|---|
| `https://www.104.com.tw/` | High | Product action orange, topic tabs/pills, public card/dialog shells, public typography samples, spacing/radius clusters. |
| `https://www.104.com.tw/company/main/` | Medium to high by selector | Static active company-tab orange, tag teal, company-page typography and compact navigation samples. |

The artifact’s source records classify both as `product-surface`. The repeated home URL is retained as artifact provenance but does not create a new domain or a second claim set.

## Official context, culture, and current evolution

| Source | Confidence | Facts used | Evidence boundary |
|---|---|---|---|
| [104 brand story](https://corp.104.com.tw/zh/about104/brand-story/) | High | 1996 origin; online human-centered matching; job/career/HR expansion; social-problem framing. | Corporate history and narrative, not product visual evidence. |
| [104 vision and mission](https://corp.104.com.tw/zh/about104/vision-mission/) | High | Three missions; “不只找工作，幫你找方向”; “不只找人才，幫你管理人才”; Be A Giver; values. | Corporate mission and voice context, not design tokens. |
| [104 innovative services](https://corp.104.com.tw/zh/sustainability/customer/) | High | AI-powered job/candidate recommendations and HR-management-system scope. | Current service-evolution context, not a captured UI claim. |
| [Be A Giver](https://corp.104.com.tw/zh/sustainability/community/be-a-giver) | High | Knowledge sharing, resume review, career clinic, and youth-support programs. | Corporate/social-program narrative, not a product user-flow claim. |
| [104 milestones](https://corp.104.com.tw/zh/about104/milestones/) | Medium | Ongoing AI and career-service launches listed by the company. | Corroborative context only; not necessary to establish a token. |

## Font and license discovery

No first-party public design system, font guide, or font-license page was located in the searched official 104 properties. The supplied artifact itself provides the relevant font facts:

- `104_icon` is loaded from 104 CDN font URLs and is used as an icon font.
- `MsJhengHeiBold` is declared through `static.104.com.tw` but has no visible captured use.
- `Arial` is the observed system computed family; it is not a proprietary 104 font.

Accordingly, no official distributed type asset is promoted, and no fallback font is used as a brand fact.

## Tier 2 — independent directory attempts

| Source | Attempt date | Outcome | Confidence / handling |
|---|---:|---|---|
| `https://getdesign.md/104` | 2026-07-14 | Built-in web direct open was rejected as unsafe by the retriever. | Unavailable; no values used. |
| `https://styles.refero.design/?q=104` | 2026-07-14 | Built-in web direct open/search was rejected as unsafe by the retriever. | Unavailable; no values used and no “no record” conclusion drawn. |

## Confidence ledger

### High

- `#ff9100` public action, white-on-orange action treatment, 4px action radius, 14px/700 compact labels, 16px/700 topic tabs, 12px card, 8px dialog, and the two recorded shadows: selector-backed supplied evidence.
- 104’s 1996 history, three missions, Be A Giver framing, and stated AI matching direction: first-party corporate sources.

### Medium

- `#ff7800` static active tab and `#39c8d0` tag: supplied but narrower company-page samples.
- The editorial framing that the visual system is “practical and information-forward”: an interpretation of the captured public surface, bounded in §1 rather than promoted as a token.

### Absent / intentionally omitted

- Public official design-system documentation, public design-token files, font license page, named product UI family, live product font specimen, state transition values, responsive rules, authenticated product UI, error/disabled states, and Tier 2 directory content.

## Publication notes

- Corporate, marketing, social-program, and product-surface evidence remain separated in the verification graph and prose.
- Tier 2 errors are recorded as failed attempts, not evidence of absence.
- §10 voice samples are first-party phrases; §14 and §15 retain only the supplied evidence boundary because state and motion values were not observed.
