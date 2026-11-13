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

## Owner decisions (2026-11-13) and the app-screen question

- **Publication:** held. Build a pilot of ten Korean references inside, show it on a preview link, decide after.
- **When:** after the current sprint.
- **App screens:** 「phone harness 같은 걸 이용해서 내 폰으로 촬영해도 좋아 … 우리가 오픈소스로 구축해보고(내가 만드는 mobster의
  피쳐로 둬도 좋고)」. So: work out how we can shoot native screens ourselves, on the owner's iPhone.

### What exists to drive or read a real phone (checked 2026-11-13)

| | how | pixels | reads | needs | limits |
|---|---|---|---|---|---|
| **Phone Harness** (`phone-harness/phone-harness`, MIT, launched Nov 2026) | iPhone through the Mac's iPhone Mirroring window; Android over adb; an agent runs Python helpers (`open_app`, `tap_text`, `screen`, …) | a capture of the mirroring window (a scaled video stream, not the phone's own pixels) | Apple Vision OCR on iPhone; the accessibility tree on Android | macOS 15+, iOS 18+, Accessibility and Screen Recording permission | the iPhone must stay locked while mirrored; "OCR sees text, not icons"; no multi-touch, no Face ID; "DRM video renders black" |
| **pymobiledevice3** `developer dvt screenshot` | USB, Developer Mode, a root tunnel on iOS 17+ | the phone's own screenshot as PNG | nothing | `sudo … remote tunneld`, Developer Mode switched on by the owner | no input: someone or something else has to navigate |
| **Screenshots taken on the phone** (side button + volume), synced by iCloud or AirDrop | the owner taps | native PNG | nothing | nothing | owner's time per screen |
| **adb** `screencap` + `uiautomator dump` | USB or emulator | native PNG | the element tree with bounds, text, class | an Android device, or an emulator signed in to Google | apps that set `FLAG_SECURE` (banking) come out black |
| **mobsnap** (owner's, `~/projects/mobster`) | save points for the iOS **Simulator** | — | — | — | the Simulator cannot install App Store apps, so it does not reach third-party apps |

On this Mac: Maestro 2.8.0 and Xcode are installed; adb, scrcpy, libimobiledevice and pymobiledevice3 are not. The
owner's iPhone is known to Xcode (`iPhone18,3`) and was not connected when checked.

### The pipeline that fits ("walk and shoot")

Navigation and pixels are separate jobs, and no single tool does both well on an iPhone:

1. **Navigate:** the owner taps through a short list of screens (the list comes from us, per app), or an agent does
   through Phone Harness when the owner does not need the phone.
2. **Shoot:** each distinct screen is taken as the phone's own PNG, either by the tunnel (`dvt screenshot`, on a key
   press or when the mirrored picture changes) or simply by the owner's screenshot button with a folder that syncs.
3. **Keep the order:** the frames of one walk, in order, are a flow. That is the thing Mobbin sells and a web
   capture cannot give.
4. **Before anything leaves the Mac:** drop or mask frames with personal data (name, address, balance, order
   history). A signed-in phone shows these on most screens past the home tab. Nothing is uploaded unreviewed.
5. **Label and attach:** screen type and patterns, the app's App Store version and date, and the reference it
   belongs to.

Unknowns that only a ten-minute test with the phone answers: whether `dvt screenshot` works on this iOS version,
whether it runs while mirroring is active, and which Korean apps blank their screens while the phone is being
captured (finance apps commonly do).

### As an open-source tool

The owner's mobster line already has mobsnap (Simulator save points). A sibling for **real devices** would be the
missing half and is useful beyond this archive (release notes, store screenshots, design QA of one's own app):
a CLI that records a walk on a connected phone into a folder of native PNGs plus `flow.json` (order, app, version,
timestamps, optional OCR text), de-duplicates frames, and has a redaction step. OmD would be its first consumer.
Phone Harness covers "an agent taps for you"; it does not record, order or clean screens, so the two do not overlap.

### Proposed order, after the sprint

1. Ten Korean references from what needs no phone: mobile web at 390 px, desktop, state crops, store screenshots
   linked. A "Screens" block on the item page and an MCP tool, as static mock-ups first, then on a preview link.
2. In parallel, the ten-minute phone test (USB, Developer Mode) on two apps, to settle the unknowns above.
3. If the test works: the recorder as a small open-source tool, and app screens for the pilot ten.

Further sources: github.com/phone-harness/phone-harness, pypi.org/project/pymobiledevice3.

## A recorder of our own (2026-11-13, prototype)

Owner: 「내 폰을 활용 해보는것도 좋을 거 같아. 모바일 웹으로는 제한되는 부분이 너무 많아 … 더 좋은 방식이 있다면 우리가 만들어도
된다는거야. mobster의 기능과 콜라보해서.」 The phone work starts now instead of after the sprint.

**What the Mac and the phone already allow.** The owner's iPhone 17 (iOS 27.2) is paired with this Mac over the
local network with Developer Mode on; the Mac has Xcode 26.5 and a paid development team. That is enough to run an
XCUITest bundle on the phone, which is the same mechanism Appium and Maestro use underneath. Compared with driving
the iPhone Mirroring window (Phone Harness):

| | XCUITest bundle on the phone | iPhone Mirroring window |
|---|---|---|
| pixels | the phone's own screenshot, 1206 × 2622 PNG | a capture of a scaled video stream |
| what it reads | the accessibility tree: element type, label, frame for every element | OCR of the picture ("sees text, not icons") |
| the phone while recording | in the owner's hand, unlocked, used normally | locked and untouched |
| on the Mac | nothing on screen | a window that must stay open, plus Accessibility and Screen Recording permission |
| setup | a signed test runner installed on the phone | none on the phone |

**The prototype** (`tools/phone-recorder/`, branch `feat/screen-archive`): a UI test that looks at the screen every
0.6 s and keeps a frame when it differs from the last kept one and two looks in a row agree (so a transition in
flight is skipped; the status bar is left out of the comparison). Each kept frame is the PNG plus the tree of the
named app as JSON, and `flow.json` holds the order and timing. `record.sh <device> [bundle-id] [seconds]` builds,
runs and exports a walk folder under `~/.omd-workers/screens/walks/`. Nothing is uploaded and walks are not in the
repository.

- Checked on the iOS 26.5 Simulator: the Settings screen as a 1206 × 2622 PNG with a tree of 168 elements read in
  0.18 s.
- On the phone: signing is found, and the build stops at "the device is locked" (the developer disk image mounts
  only on an unlocked phone). Not yet run on the phone.
- Still to learn from the first real walk: whether a third-party app's tree is readable and how long it takes,
  whether finance apps blank their screens to a test runner, and how many frames a carousel or a video produces.

**Towards mobster.** mobsnap restores a Simulator to a saved state; this records what a real device shows. Together:
walk an app once on a phone, keep the frames and trees as the reference for a flow. The recorder is Swift and
Xcode-only like mobsnap, so it can move there as a command once the phone runs settle its shape. Maestro 2.8.0 on
this Mac also lists a `driver-setup` command "for real iOS devices" and an MCP server; it does not list the paired
phone today, and its real-device path is undocumented, so it is noted and not relied on.
