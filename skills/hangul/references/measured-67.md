# OmD measurement: typography of 67 Korean services

What 67 live Korean services actually ship, measured from OmD's own capture bundles. This is the **DATA** tier in [rules.md](./rules.md). **The values reflect the capture dates (2026-07-11..13).** Sites change, so re-measure before quoting a single service.

## Method

- **Population:** every Korean reference in the OmD catalog with `verified_v2` status and a capture bundle: 67 services, 0 missing bundles.
- **Capture:** OmD's reference-capture pipeline loaded each service's public web pages in a browser and recorded computed styles per element role. The bundles live at `artifacts/reference-evidence/<id>.json` (local-only, not committed). Capture dates: 2026-07-11 (8 services), 2026-07-12 (11), 2026-07-13 (48).
- **Surfaces:** public web pages only. All 67 have the home page and a second surface, 60 a third, 16 a fourth, 11 a fifth (at most 8). No logged-in screens and no native apps.
- **Measured** on 2026-09-29 from those bundles.
- **Roles:**
  - *body* is the most-used body-type text role between 12 and 20px. In practice: `text` 37, `listItem` 23, `body` 7. It is the most frequent running text on the page, which is often navigation or list text rather than article paragraphs. The 12–20px window also means body sizes outside it can't appear here.
  - *heading* is the most-used of h1–h3 (h3 30, h2 27, h1 8; 2 services had none). Some sites put h-tags on small UI text (10–12px: cgv, flex, lotteon).
  - *primary font* is the loaded font face with the highest usage.
- **Not captured:** `word-break`, `overflow-wrap`, `lang`, `font-style`, `font-synthesis`, the `@font-face` weight sets, `text-wrap`. Rules about those rest on SPEC and DS sources only.
- **Evidence domains:** these are public marketing and web surfaces. Product surfaces (apps, logged-in screens) are a different evidence domain, so don't read these numbers as a brand's product typography, and don't copy one service's values into another brand.

## Distribution

### Primary font

| Font | Services |
|---|---:|
| Pretendard | 40 (39 by name, plus 1 next/font hashed name `__pretandard_…`, myrealtrip) |
| Brand or custom faces | 9 (Toss Product Sans ×3, HyundaiSansTextKR, YouandiNewKr, KakaoSmall, SamsungOneKorean, Digital One Shinhan, SKT Sans Text) |
| No loaded font (system) | 6 |
| Noto Sans KR | 3 |
| Nanum | 2 |
| Spoqa Han Sans | 2 |
| SUIT | 1 |
| Latin-only primary face (Inter, Noto Sans, Montserrat, Geist) | 4 |

The capture didn't confirm Hangul coverage for these brand faces (their Korean-face field is empty): hyundai (HyundaiSansTextKR), hyundaicard (YouandiNewKr), kakaopay (KakaoSmall), samsung (SamsungOneKorean), shinhancard (Digital One Shinhan), sktelecom (SKT Sans Text), toss (Toss Product Sans), toss-securities (Toss Product Sans), tossbank (Toss Product Sans).

### Font stack

- The first named face is a Korean face on 49/67.
- A known Korean face appears somewhere in the stack on 58/67.
- The 9 stacks with no recognized Korean face include brand faces and hashed names the matcher doesn't know:
  - `datarize: sans-serif`
  - `hyundai: HyundaiSansTextKR, "Magul Gothic"`
  - `jandi: "Noto Sans", sans-serif`
  - `kbank: -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
  - `myrealtrip: __pretandard_7bdbf6, __pretandard_Fallback_7bdbf6`
  - `onestore: Times`
  - `pinkfong: -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
  - `shinhancard: "Digital One Shinhan", -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
  - `upstage: Geist, sans-serif`
- Re-check live before citing: hyundai lists `"Magul Gothic"` (probably a typo for Malgun Gothic), and onestore's captured stack is `Times` (a suspected capture artifact).

### Body text (n = 67)

- **Size:** median 16px, p25 14, p75 16, min 12, max 20. 53/67 within 14–17px. By size: 12px 6, 13px 4, 14px 19, 15px 4, 16px 28, 17px 2, 18px 3, 20px 1.
- **Line-height ratio:** median 1.5, p25 1.429, p75 1.538 (53 numeric, the rest `normal`). 31/53 fall between 1.4 and 1.6. 13/53 are below 1.3, all at 1.0–1.25 in roles body 2, text 6, listItem 5. These are most likely single-line UI text sized by height, so don't read them as paragraph line-height. Two values above 1.8 (coupang 2.667, pinkfong 4.571) look like fixed pixel line-heights on small text.
- **Letter-spacing:** median 0em. 52/67 exactly 0, 15/67 negative (−0.071 to −0.005em; 13 of the 15 lie between −0.025 and −0.005em), none positive.
- **Weight:** 400 on 58/67.

### Headings (n = 65)

- **Letter-spacing:** median 0em, p25 -0.01em. 23/65 negative, 22 of those at −0.03em or above. The one outlier is −0.05em (kb-kookmin, a 20px h-tag on a system-font site). One positive value (+0.006em). This is the source of the −0.03em floor in HG-7.
- **Line-height ratio:** median 1.4, p25 1.3, p75 1.5; p10 1.195 (n = 57 numeric).
- **Size:** median 23.5px (p25 18, p75 32; min 10, max 48). Negative tracking isn't tied to size in this data: negative-tracked headings have a median of 24px, the rest 23px.

### Buttons

- **Size:** median 14px (p25 13.05, p75 16), n = 66.

## Per-service table

Generated from the measurement JSON. `—` means not captured, or `normal` for line-height. Letter-spacing is in em.

| id | captured | primary font | body px | body LH | body ls | body role | h px | h LH | h ls |
|---|---|---|---:|---:|---:|---|---:|---:|---:|
| 11st | 2026-07-13 | Noto Sans KR | 14 | 1.5 | 0 | listItem | 24 | 1.167 | 0 |
| 29cm | 2026-07-11 | Pretendard Variable | 16 | 1.5 | 0 | listItem | 23 | 1.3 | 0 |
| ably | 2026-07-12 | Noto Sans Korean | 16 | 1.25 | -0.025 | body | 40 | 1.4 | -0.007 |
| baemin | 2026-07-11 | Pretendard Variable | 16 | 1.5 | -0.02 | text | 40 | 1.3 | -0.03 |
| banksalad | 2026-07-12 | Pretendard | 16 | 1.625 | -0.005 | text | 18 | 1.444 | -0.005 |
| brandi | 2026-07-13 | Noto Sans KR | 13 | — | 0 | text | 14 | 1.714 | 0 |
| catchtable | 2026-07-13 | Pretendard Std Variable | 16 | 1.5 | 0 | text | 13 | 1.3 | 0 |
| cgv | 2026-07-13 | pretendard | 14 | 1.429 | -0.014 | body | 10 | 1 | -0.02 |
| channeltalk | 2026-07-12 | __Inter_f367f3 | 17 | 1.588 | -0.006 | body | 24 | 1.417 | -0.021 |
| class101 | 2026-07-12 | Pretendard Variable | 18 | 1.667 | 0 | body | 18 | 1.222 | -0.016 |
| classum | 2026-07-13 | Pretendardvariable | 14 | 1.429 | 0 | text | 48 | 1.4 | 0 |
| coinone | 2026-07-13 | pretendardCoinone | 16 | 1.5 | 0 | text | 18 | 1.278 | 0 |
| coupang | 2026-07-12 | none loaded (system) | 12 | 2.667 | 0 | text | 32 | — | 0 |
| dabang | 2026-07-13 | Pretendard Variable | 14 | 1.714 | 0 | body | 18 | 1.667 | 0 |
| datarize | 2026-07-13 | Pretendard Regular | 12 | — | 0 | text | 44 | 1.3 | -0.001 |
| flex | 2026-07-13 | Pretendard Variable | 15 | 1.1 | 0 | text | 11 | 1.364 | -0.01 |
| gangnamunni | 2026-07-13 | PretendardVariable | 16 | 1.5 | 0 | text | 16 | 1.5 | 0 |
| hyundai | 2026-07-13 | HyundaiSansTextKR | 16 | 1.15 | 0 | listItem | 44 | 1.318 | -0.009 |
| hyundaicard | 2026-07-13 | YouandiNewKr | 16 | — | 0 | listItem | 20 | 1.3 | 0 |
| inflearn | 2026-07-13 | Pretendard | 16 | 1.5 | 0 | text | 26.4 | 1.25 | 0.006 |
| jandi | 2026-07-13 | Noto Sans | 16 | 1 | 0 | listItem | 42 | 1.429 | 0 |
| kakao | 2026-07-11 | pretendard | 16 | 1.5 | 0 | listItem | 14 | 1.4 | 0 |
| kakaobank | 2026-07-12 | Pretendard Variable | 16 | 1.5 | 0 | text | 24 | 1.44 | -0.02 |
| kakaogames | 2026-07-13 | SUIT Variable | 18 | — | 0 | text | 0 | — | — |
| kakaopay | 2026-07-13 | KakaoSmall | 14 | 1.5 | 0 | listItem | 32 | — | 0 |
| karrot | 2026-07-11 | Pretendard | 14 | 1.429 | 0 | text | 14 | 1.429 | 0 |
| kb-kookmin | 2026-07-13 | none loaded (system) | 14 | 1.5 | 0 | listItem | 20 | 1.3 | -0.05 |
| kbank | 2026-07-13 | Pretendard K Edition | 16 | — | 0 | text | 18.72 | — | 0 |
| kmong | 2026-07-13 | Pretendard | 16 | 1.5 | 0 | text | 36 | 1.222 | 0 |
| krds | 2026-07-11 | Pretendard GOV | 17 | 1.5 | 0 | listItem | 32 | 1.5 | 0 |
| kream | 2026-07-13 | Pretendard Variable | 16 | — | 0 | text | — | — | — |
| kurly | 2026-07-13 | Pretendard | 14 | 1 | 0 | text | 16 | 1.438 | 0 |
| lguplus | 2026-07-13 | Pretendard | 16 | 1.5 | -0.02 | listItem | 26 | 1.462 | -0.03 |
| likelion | 2026-07-13 | Pretendard | 16 | 1.5 | 0 | listItem | 32 | 1.5 | 0 |
| lotteon | 2026-07-13 | Pretendard | 16 | 1 | 0 | text | 12 | 1.58 | -0.017 |
| makinarocks | 2026-07-13 | Pretendard | 16 | 1.6 | -0.01 | text | 20 | — | -0.008 |
| megabox | 2026-07-13 | NanumBarunGothic | 15 | 1.5 | 0 | text | 30 | 1.5 | 0 |
| millie | 2026-07-12 | Pretendard Variable | 14 | — | 0 | listItem | 28 | 1.357 | 0 |
| miricanvas | 2026-07-13 | Pretendard Variable | 16 | — | 0 | text | 28 | 1.286 | 0 |
| musinsa | 2026-07-12 | Pretendard | 14 | 1.5 | 0 | text | — | — | — |
| myrealtrip | 2026-07-13 | Pretendard (next/font hash) | 16 | — | 0 | text | 24 | — | 0 |
| naver | 2026-07-11 | NanumHuman | 13 | 1.538 | -0.023 | text | 18 | 1.333 | -0.017 |
| naverwebtoon | 2026-07-13 | Pretendard | 12 | — | 0 | listItem | 20 | 1.05 | -0.025 |
| nhn | 2026-07-13 | Pretendard Variable | 14 | 1.571 | 0 | text | 20 | 1.5 | 0 |
| nhncloud | 2026-07-13 | Pretendard Variable | 14 | 1.714 | 0 | listItem | 20 | 1.5 | 0 |
| ohouse | 2026-07-13 | Pretendard Variable | 15 | 1 | -0.02 | listItem | 30 | 1 | -0.01 |
| oliveyoung | 2026-07-13 | Montserrat | 14 | 1.429 | -0.04 | text | 26 | 1.538 | -0.022 |
| onestore | 2026-07-13 | none loaded (system) | 16 | — | 0 | listItem | 18.72 | — | 0 |
| pinkfong | 2026-07-13 | Spoqa Han Sans Neo | 14 | 4.571 | 0 | listItem | 30 | 1.572 | 0 |
| remember | 2026-07-13 | Pretendard | 16 | 1 | 0 | text | 16 | 1.45 | 0 |
| samsung | 2026-07-13 | SamsungOneKorean | 16 | 1 | -0.02 | listItem | 24 | 1.333 | 0 |
| shinhanbank | 2026-07-13 | Spoqa | 14 | 1.25 | -0.02 | listItem | 22 | 1.25 | -0.013 |
| shinhancard | 2026-07-13 | Digital One Shinhan | 14 | 1.714 | -0.02 | listItem | 28 | 1.5 | -0.02 |
| sktelecom | 2026-07-13 | SKT Sans Text | 15 | 1.8 | 0 | body | 48 | 1 | 0 |
| socar | 2026-07-12 | Pretendard | 16 | 1.5 | 0 | text | 16 | 1.5 | 0 |
| soop | 2026-07-13 | Pretendard | 12 | 1.667 | 0 | text | 14.04 | 1.2 | 0 |
| toss | 2026-07-11 | Toss Product Sans | 16 | 1.5 | 0 | listItem | 24 | 1.5 | -0.015 |
| toss-securities | 2026-07-13 | Toss Product Sans | 13 | 1.538 | 0 | text | 18 | 1.6 | 0 |
| tossbank | 2026-07-12 | Toss Product Sans | 14 | 1 | 0 | text | 48 | 1.3 | 0 |
| tving | 2026-07-13 | pretendard | 13.2 | 1.15 | 0 | text | 22.004 | 1.5 | 0 |
| upbit | 2026-07-13 | none loaded (system) | 12 | — | 0 | text | 36 | 1.5 | 0 |
| upstage | 2026-07-13 | Geist | 18 | 1.6 | -0.01 | text | 32 | 1.25 | -0.006 |
| wanted | 2026-07-12 | Pretendard Variable | 14 | 1.429 | 0 | listItem | 22 | 1.364 | -0.019 |
| wooribank | 2026-07-13 | none loaded (system) | 14 | 1.429 | -0.071 | listItem | 18 | — | 0 |
| yanolja | 2026-07-13 | Pretendard | 20 | 1.2 | 0 | body | 32 | 1.188 | 0 |
| yeogiotte | 2026-07-11 | Pretendard | 12 | — | 0 | text | 16 | 1.5 | 0 |
| zigzag | 2026-07-13 | none loaded (system) | 16 | — | 0 | text | 32 | 1.4 | 0 |
