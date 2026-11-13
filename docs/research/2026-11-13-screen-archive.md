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

## From recorder to harness, and the first run on the phone (2026-11-13)

Owner, after stopping the passive recorder: 「너가 알아서 조작해서 저런 허용이나 로그인이나 비회원 로그인이나 자동으로 감지해서
넘어가는 그런 형태가 되면 좋을 거 같은데 … 자율성을 확보할 수 있는(aside처럼)」. The UI test bundle now also serves the
device over HTTP (`PhoneAgentUITests`, `AgentServer`), and `phone.mjs` is the client an agent drives one step at a
time: look (screenshot + elements), tap by label or point, swipe, back, type, launch, answer alerts, `settle`
(alerts answered with the least access offered, pop-ups closed by their own dismiss control, a login wall reported
with the ways past it), and every step appended to `flow.json` so a walk replays as a macro. `tap --label` refuses
controls about paying, sending, deleting or leaving an account unless told otherwise.

**Simulator (iOS 26.5):** Settings walked by label; Maps' location alert read (text and three buttons), recorded
and answered with 「허용 안 함」.

**The owner's iPhone 17 (iOS 27.2), Musinsa, about four minutes:**

- The Mac reaches the server on the phone at `<name>.coredevice.local:8123` over the pairing tunnel. No cable, no
  mirroring window, no root tunnel. The first start builds, signs and installs the runner in under two minutes.
- A third-party app's tree is readable: the permission guide as 18 elements, the ranking tab with every tab, chip
  and product image labelled, the product page as 109 to 120 elements.
- Walked: permission guide → 「확인」 by label → an attendance promo closed → home → 「랭킹」 by label → the top
  product by position → scrolled → back → another page. Seven frames at 1206 × 2622, 10 MB, with their element
  lists and the flow.
- **What the tree does not hold:** the promo pop-up's two buttons were not in it (a web view or a custom layer with
  no accessibility labels). It was closed by reading the screenshot and tapping the position. So the loop needs
  both: the tree where the app exposes it, the picture where it does not.
- **A tap by label can land on the wrong thing:** 「검색」 matched the icon inside a search bar whose placeholder was
  a rotating promotion, and opened that promotion's page. Labels need the element type and a look afterwards.
- No system alert appeared (Musinsa asks for each permission when the feature is first used), and no login wall
  on this path. Finance apps were not tried.

**Installing from the App Store:** driving the App Store app is the same as driving any app. A re-download (the
cloud icon) needs no confirmation and can be automated. A first download asks for a double-click of the side
button and Face ID, which a test runner cannot give: the harness can go up to that sheet and the owner confirms.
Paid apps and in-app purchases stay behind the guard.

Walks stay on this Mac (`~/.omd-workers/screens/walks/`), outside the repository.

## How the others take and keep screens (surveyed 2026-11-13)

Owner: 「phone harness나 다른 모바일 UX 레퍼런스 사이트나 MCP에서는 어떻게 화면을 찍고 가져가는지 … 그래야지 실효성이 나올거 같아.」

**Tools that drive a phone for an agent**

| | sees the screen by | acts by | records | secrets and prompts |
|---|---|---|---|---|
| Phone Harness (MIT) | iPhone: a capture of the Mac's iPhone Mirroring window read with Apple Vision OCR. Android: adb screenshot and the accessibility tree | input events into the mirroring window; adb | nothing: the agent keeps its own helper scripts | none described; "connecting the phone is always the user's job" |
| mobile-mcp (Apache-2.0, 34 tools) | "the native accessibility tree (no vision model, no image tokens)", "falling back to screenshots + coordinates only when needed" | tap, double tap, long press, swipe, type, hardware buttons, open URL, install and launch apps | `mobile_save_screenshot`, `mobile_start_screen_recording` / `stop` to a video file; no flow record (it suggests asking the agent to write a test) | none described; permission dialogs not addressed |
| Maestro 2.8 (on this Mac) | its own XCTest driver: hierarchy and screenshots | flows in YAML; an MCP server | `takeScreenshot`, `record` renders a video of a flow | none; real iPhones through an undocumented `driver-setup` |
| ours (`tools/phone-recorder`) | an XCUITest runner on the phone: the phone's own screenshot plus the accessibility tree | tap by label or point, swipe, back, type, launch, answer system alerts | every step into a walk folder (PNG, element list, `flow.json`), scroll clips, replay | `settle` (least access, pop-ups, login wall reported), a guard on paying/sending/deleting labels, `type --secret` from the macOS Keychain |

Every serious driver ended up in the same place: **the accessibility tree first, the picture where the tree is
silent.** Phone Harness's iPhone path is the exception (picture only), which is why it "sees text, not icons". Our
Musinsa run met the same limit from the other side: the floating bottom bar and two pop-ups were not in the tree
and had to be tapped from the picture.

**Libraries that publish screens**

| | what a screen is | how it gets there (as far as they say) |
|---|---|---|
| Mobbin | a still or, since Nov 2025, a short video for screens with motion; grouped into flows; tagged by pattern and element; past versions kept | "hand-curated and tagged weekly since 2018"; includes "region-locked and subscription-only apps", so people sign in and pay on real devices; about 13 new apps a week |
| Page Flows | a screen recording of a whole flow with annotations, plus stills | recordings of a person going through the flow, desktop and mobile |
| Refero | stills with structured metadata on every screen, and flows | "expertly curated", new screens weekly |
| UIBowl (KR) | stills by category and pattern, MAU as a filter | outside contributors paid per contribution |
| Mobbin MCP | `search_screens` returns images with app name, category and URL, 30 at most | the library above; nothing is captured on request |

None of them documents a capture pipeline, and none is automated end to end: the unit of work is a person with a
signed-in phone, and the value they add afterwards is **order (flows), labels (patterns, elements) and history
(versions)**. That is what to match. Our recorder already yields order and an element list per screen for free;
labels are a pass over those lists; history is running the same walk again.

**What this changes for us**

- Driving is a solved problem with two open-source options (mobile-mcp, Maestro) beside ours. Ours needed nothing
  installed on the Mac and took a day; if it becomes a burden, the driver can be swapped and the walk format kept.
- The parts nobody ships are the ones worth owning: the walk as data (frames, trees, flow), the policy for prompts
  and pop-ups, redaction of a signed-in phone's personal data, and the sheet.
- Video matters: Mobbin and Page Flows both moved to motion. `scrollclip` covers scrolling; transitions and
  micro-interactions would need a real screen recording (mobile-mcp has one; a UI test runner cannot start one).

**Sign-in.** No tool surveyed handles credentials. Ours: the agent names an account, `phone.mjs type --secret
<account>` reads the value from the macOS Keychain (service `omd-phone`) and sends it to the device; it is not
printed and a walk records only the account name. The owner stores the item. Not used yet: the owner's Musinsa was
already signed in. A second factor (SMS, an authenticator, Face ID) still needs the owner.

## Musinsa, the first sheet (2026-11-13)

`~/Downloads/musinsa-screens/index.html`: 26 screens in five groups (first run, home and top tabs, search to
product, the other bottom-bar tabs, everything that interrupts), two scroll clips, six findings, filters by screen
type and pattern. Built by `make-sheet.py` from two walks and a curation file
(`~/.omd-workers/screens/sheets/musinsa.json`); six areas with the nickname, account id, balances and recent
searches are painted over. It stays on this Mac.

What the run did to the owner's account, in full: it closed five things the app put up (an attendance promotion,
a card promotion, a prompt to move to 29CM, a notice that the account becomes a unified account, and a request
for marketing consent) with their own close or decline control. It agreed to nothing and bought nothing.

What the harness got wrong, and the fix: typing with no keyboard up ended the session (the runner now keeps going
and returns an error); a 닫기 in a page's top bar was taken for a pop-up's dismiss (only lower ones count now); a
tap by the label 검색 landed on an icon that opened a promotion (labels need a look afterwards, which the
exploration loop has to do every time).

## After the first sheet: owner's notes and what changed (2026-11-13, evening)

Owner on the Musinsa sheet: 「느낌은 괜찮아. 이걸 오픈소스화 해도 좋을 거 같아. 일단 염두만 해줘 … 검색 진입과 같이 일부는 전부 렌더링
되기 전에 찍은 것도 같네 … 영상은 메인화면에 대해서만 … 금융앱은 조금 조심해서 금전이나 내 계좌번호 같은게 노출이 안되게끔 … 첫
스타트는 무신사랑 당근 … 필요하다면 아예 앱 삭제 후 로그인부터 시작해도 좋을 거 같아. 일주일에 10개 정도 업로드가 목표야.」

Decisions:
- **Open source:** keep it in mind (and mobster as a possible home); no repository or licence work yet.
- **Video:** one scroll clip per app, of its main screen.
- **Finance apps:** nothing that shows money or an account number may be kept. Capture with `--private`.
- **First two apps:** Musinsa and Karrot. Deleting an app and starting from sign-in is allowed where a first run is
  needed. It ends the owner's session in that app, so it is done only with the owner at hand (Karrot signs in by SMS).
- **Pace:** ten apps a week.

Changes made the same evening (Simulator-checked; not yet run on the phone):
- **Frames shot before the screen finished drawing.** `look` now waits until two looks in a row agree, up to 6 s,
  and marks a frame that was still moving (a video, a carousel) instead of passing it off as settled.
- **Private capture.** `look --private` paints over every element whose label holds a digit or one of the owner's
  strings (`~/.omd-workers/screens/private.json`) before the frame and its element list are written; a frame with
  no tree to check is blurred whole. The unredacted picture never reaches the disk. This is the mode for finance
  apps, and for any "my" screen.
- **Exploration loop.** `explore` opens the tab bar's tabs, or the first rows of the content, one at a time;
  after each tap it checks the screen changed, records, scrolls once and comes back. A tap that changed nothing is
  recorded as such and skipped.

What a week of ten needs that does not exist yet: a per-app plan of screens to reach (the Mobbin top-search list
is the checklist: home, search, list, detail, cart, my page, sign-in, onboarding, empty states), labels proposed
from the element lists instead of written by hand, and a first-run path (delete, reinstall, onboarding, sign-in)
with the owner present for the second factor.

## Priority one, and what a week of ten is made of (2026-11-13, night)

Owner: 「우리의 핵심은 mobbin like를 일단 한국에 대해서 확실히 제공하는게 1순위야. 내 생각이지만 이걸 통해서 star 1000을 달성할
수도 있을 것 같아.」 The Korean screen archive is the first priority of the project from here; reference collection and
the language skills keep running beside it. Publication is still held until the owner has seen the pilot.

**The unit of work is one app, and it has four steps.**

| step | who | tool | what comes out |
|---|---|---|---|
| walk | the agent on the owner's phone | `phone.mjs` (`settle`, `look`, `explore`, `scrollclip`; `--private` on any "my" screen and in finance apps) | a walk folder: frames, element lists, `flow.json`, one clip of the main screen |
| first pass | a script | `suggest-labels.py <walk> --scaffold <sheet.json>` | a type and patterns per frame in the fixed vocabulary, and which core screens are missing |
| curation | the agent, looking at every frame | the sheet's JSON | titles, notes, groups by flow, corrected labels, redactions, findings |
| sheet | a script | `make-sheet.py` | `index.html` and `screens.json` (the same content as data, for an index page or an MCP tool later) |

**A fixed vocabulary** (`tools/phone-recorder/taxonomy.json`): 30 screen types and 47 patterns, Korean with an English
name. Filters only mean something across apps if every sheet uses the same words; the first Musinsa curation had 84
pattern words on 26 screens, most used once. The builder now folds looser words into the fixed ones and reports a
word it does not know. Eleven types are *core*: onboarding, log in, home, search, search results, list, detail,
notifications, my page, settings, pop-up. A sheet shows which of them it reached. Musinsa lacks three (onboarding,
log in, settings): the first two need a first run, which needs the owner beside the phone.

**How far rules get on labels.** Against the hand-curated Musinsa sheet, `suggest-labels.py` names the type on 14
of 24 frames, and 27 of the 64 patterns it proposes are in the curated set. It is right on the standard screens
(home, search, results, detail, cart, my page, notifications) and blind where the tree is: which top tab is selected
(ranking, sale and release all read as home), a pop-up drawn without labels, a web view. So it saves typing; it does
not replace looking at the frame.

**What decides the pace.** Musinsa took two walks and about two hours including the tool fixes; the walk itself was
about 25 minutes of phone time. At that rate ten apps are four to five hours of an unlocked phone a week, in
sessions of two or three apps. The phone has to be awake and reachable from the Mac (same Wi-Fi, or a cable): on
the evening of 11/13 it was paired but its tunnel stayed unavailable, and nothing on the Mac's side can open it.

**Choosing the ten.** From what is installed on the phone (`devicectl device info apps`), most-used Korean services
first, one category at most twice a week, finance last and only in private mode. Musinsa and Karrot are the first
two. An app that is not installed waits for the owner (the App Store asks for Face ID).
