# Screen archive ("Mobbin for Korean references"): what exists, how screens are obtained, what OmD already holds

Owner 2026-11-13: 「omd에서도 mobbin처럼 mcp의 형태도 좋으니까 레퍼런스 사이트들을 아카이빙해서 보여줘도 좋을 거 같아 … 일단 한국
레퍼런스에 대해서 정리해볼까 … 일주일에 10개씩만 정리해도 꽤 매력있을 거 같거든.」 Research and feasibility only; nothing is built.

## What the others are (checked 2026-11-13; vendor pages are self-reported)

| | library | platforms | MCP | price | Korean services |
|---|---|---|---|---|---|
| Mobbin | 620,000+ screens, 153,400+ flows, 1,000+ apps; about 13 new apps a week; past versions kept; animations as short video | iOS, web (Android on the site, not in the MCP) | hosted, launched May 2026, beta. One tool, `search_screens` (query, platform ios/web, mode deep/fast, limit ≤ 30); returns images with app name, category, URL | MCP on paid plans only (Pro $10/mo yearly) | few |
| Refero | 145,000+ screens, 12,000+ flows, 400+ apps | web, iOS | on paid plans | $10/mo yearly; free tier about 3 % | few |
| Lazyweb | 281,000+ screens (iOS apps, marketing pages) | iOS, marketing pages | free setup; reports gated ($39/mo) | free browse | — |
| 유아이볼 (UIBowl) | not stated; filters by MAU, colour, 29 categories, 52 patterns | apps, websites, games | announced ("유아이볼 MCP 출시") | membership (price not shown) | **yes, the focus**; a company in Seoul; recruits contributors (up to 160,000 KRW) |
| WWIT | small; 18 screen patterns, 5 components, 7 app tags | apps | no | free | **yes**; one person; latest post 2025-04-06 |

Mobbin's own first-month MCP numbers: 10,105 people connected, 317,427 queries, about 1,200 daily users by June;
top searches are "login screen", "onboarding", "dashboard", "settings", "pricing page", "empty state", "checkout";
15 % of queries name an app; only 16 queries asked it to generate UI. People use it to look, then build elsewhere.

## How screens are obtained

No vendor documents its capture process. What is on record:

- **Mobbin:** began as the founder downloading apps and screenshotting them by hand (8,000 iOS screenshots from 150
  apps before launch). Its own pages say "hand-curated and tagged weekly since 2018" and that the library includes
  "region-locked and subscription-only apps", which means people sign in and pay inside the apps. Motion is
  recorded as video. A third-party listing says screens are captured mostly on one iPhone model.
- **UIBowl:** pays outside contributors per contribution.
- **Legal posture (Refero's published policy, the clearest one):** third-party material "remains the property of
  their respective owners"; inclusion implies no endorsement; removal on an informal e-mail from the rights holder,
  plus a formal DMCA agent. None of the vendors states a fair-use basis in writing.

So a native-app archive is manual labour on real devices with real accounts. There is no shortcut that the big
libraries use and we could copy.

## The five ways to get a mobile screen, and what each costs us

| source | automatable | login | what it is | checked |
|---|---|---|---|---|
| **Mobile web at 390 px** (our headless capture with a phone profile) | yes | no | the service's real mobile UI where it has one (KB손해보험 redirects to `m.kbinsure.co.kr`: icon grid, bottom sheet) | 3 of 3 sites captured in seconds |
| **App Store listing screenshots** (public lookup API, `country=kr`) | yes | no | the images the company publishes for its own app: 6–10 per app, with version and date; often framed with captions | 토스 6, 당근 8, 오늘의집 10, 배민 7 |
| **Desktop web** (what we already capture) | yes | no | viewport, full page, scroll video, a crop of each measured control at rest / hover / pressed / focus | held locally for 37 of 220 KR references: 108 full pages, 111 viewports, 114 videos, 972 state crops, 492 MB |
| **Native app, owner's phone** | no | owner's own accounts | what Mobbin has | T3 plan (오늘의집 first), 5–6 screens each |
| **Native app, Android emulator** | partly | a Google account and each app's sign-up | same | needs owner decisions (account creation is on the ask-first list) |

## What OmD would have that the others do not

- **Free, including the MCP.** Every MCP above except Lazyweb's setup is behind a paid plan.
- **Measured values on the same page as the screen.** A Mobbin result is an image. Ours can carry the colour, type
  and radius tokens, and the DESIGN.md, of the service the screen came from.
- **States.** Nobody else shows the same control at rest, hover, pressed and keyboard focus. We hold 972 such crops
  for Korean references already.
- **Korean services, kept current.** WWIT stopped in April 2025; UIBowl is paid. We already re-measure with no model.

What we would not have at the start: native-app screens behind a login, flows (several screens in order), and
breadth (37 references against 1,000 apps).

## What it takes (not started)

1. **A decision to publish captures.** Capture bundles are local-only by owner decision (2026-09-16). Publishing
   screenshots reverses that for a chosen subset and needs public storage, an ownership line and a removal path
   (the "from the company" issue form in PR #123 is that path).
2. **A capture profile for mobile web** in the capture tool (viewport 390 × 844, phone user agent, touch), and a
   small set of pages per service beyond the home page.
3. **Labels:** screen type (home, login, search, list, detail, checkout …) and visible patterns (bottom sheet, tab
   bar, card grid …). The Mobbin top-search list is the vocabulary to start from.
4. **Where it shows:** a "Screens" section on the item page, and an MCP tool on the existing `/api/mcp` connector
   (`search_screens`, `get_screens`) that returns image URLs with the measured tokens.
5. **Cadence:** ten Korean references a week is about one capture run each (minutes, no model) plus labelling and
   a look by a person.

Sources: mobbin.com/index.md, mobbin.com/blog/how-to-use-mobbin-mcp, mobbin.com/blog/mobbin-vs-refero,
dev.classmethod.jp/articles/mobbin-mcp-setup-claude-code, businesswire.com (Mobbin MCP launch, 2026-05-11),
doc.refero.design/legal/copyright-policy, design.lazyweb.com/compare/lazyweb-vs-mobbin-vs-refero.md, uibowl.io,
wwit.design, starterstory.com/mobbin-breakdown, yozm.wishket.com (WWIT), itunes.apple.com lookup API.
