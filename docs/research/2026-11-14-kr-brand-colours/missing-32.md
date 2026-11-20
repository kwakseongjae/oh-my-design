# The 32 KR verified references Rule S left out (2026-11-21)

Rule S (first draft) takes the frontmatter token named `primary`, else a `*primary*`-named button. These 32 references have neither. Each file was read for the token it uses for its main colour and for evidence, in the file, that it is the main colour. Quotes are verbatim from `web/references/<id>/DESIGN.md` and `compute.py` asserts each one is still there. The decisions live in `MAIN_TOKEN` and `LEFT_OUT` in `compute.py`; this file is generated from them.

Evidence kinds: **identity** = the file names the value as the official, brand or catalogue identity colour; **action** = the file's colour list names the token for the fill of an action control (a purchase, login, service or CTA fill); this does not by itself say the control is the service's main action, which W4 tests separately; **registry** = the registry `primaryColor` is the same hex and that hex is this token (never used alone).

## Added under Rule W (16)

| id | name | main-colour token | hex | family | registry | evidence | quote from the file |
|---|---|---|---|---|---|---|---|
| 11st | 11번가 | `brand-red` | #ff0038 | red | #ff0038 | identity+registry | **Brand red — `#FF0038`:** |
| brandi | 브랜디 | `action-direct` | #1e1e1e | achromatic: grey | #1e1e1e | action+registry | **Direct purchase** (`#1e1e1e`): background of `.btn-buy` on both captured product pages. |
| catchtable | 캐치테이블 | `brand-orange` | #ff3d00 | red | #ff3d00 | identity+registry | `#FF3D00` — careers-marketing action background; this is verified public brand expression |
| class101 | 클래스101 | `brand` | #ff5d00 | orange | #FF5D00 | identity+registry | It is retained as the catalog primary color |
| hwahae | 화해 | `label` | #3d3d3d | achromatic: grey | #3d3d3d | action+registry | so the catalogue's primary is the home page's full-width dark action `#3d3d3d` |
| kakao | 카카오 | `login` | #fee500 | yellow | #fee500 | action+registry | **Container** (`#fee500`): mandatory login-button background. |
| kb-kookmin | KB국민은행 | `header-accent` | #ffcc00 | yellow | #ffcc00 | identity+registry | `#ffcc00` is a selector-backed public-home header accent and the catalog identity colour |
| koexpressway | 한국도로공사 | `service-fill` | #063a74 | blue | #063a74 | action+registry | \| service-fill \| `#063a74` \| Four institutional service action links, including electronic procurement. \| |
| melon | Melon | `signature-green` | #00cd3c | green | #00cd3c | identity+registry | \| Signature green \| **#00cd3c** \| |
| naver | 네이버 | `brand` | #03c75a | green | #03c75a | identity+registry | **NAVER Green** (`#03C75A`): official logo and identity color. |
| nhis | 국민건강보험공단 | `nhis-primary` | #ee0000 | red | #ee0000 | identity+action+registry | Treat the NHIS red as the product accent |
| ohouse | 오늘의집 | `action` | #00a1ff | blue | #00a1ff | action+registry | **Action blue** (`#00a1ff`): Filled compact action background |
| oliveyoung | Olive Young (올리브영) | `corporate-brand-green` | #82dc28 | green | #82dc28 | identity+registry | also named Olive Green in Olive Young |
| remember | 리멤버 | `action-black` | #000000 | achromatic: black-ish | #000000 | action+registry | **Action Black** (`#000000`): observed on the career header |
| shinhanbank | 신한은행 | `brand-primary` | #0046ff | blue | #0046ff | identity+registry | **Shinhan Blue** (`#0046ff`): official CI primary color. |
| wooribank | 우리은행 | `brand-deep-blue` | #0067ac | blue | #0067ac | identity+registry | **Woori Deep Blue** (`#0067AC`): official logotype main color |

## Left out (16): the file does not let one main colour be told

| id | name | registry | why | quote from the file | what would settle it |
|---|---|---|---|---|---|
| cgv | CGV | #121212 | declined: Registry #121212 is the `foreground` text ink; the red #fc5555 is kept as a signal colour. | it is preserved as a signal value, not promoted to a primary or state palette | a first-party source giving the brand colour as a hex, recorded in the reference |
| coupang | 쿠팡 | #000000 | ink-only: Registry #000000 is the `foreground` text ink; no brand fill was captured. | No live computed Coupang-red fill, WOW color, or semantic status color was present in the supplied capture. | a re-capture that records a brand fill or identity colour as a token |
| datarize | 데이터라이즈 | #191919 | two-candidates: Two near-black CTA fills: `action` #111111 (home CTA, black-ish) and `ink` #191919 (shared CTA, grey; also the registry value). The file does not rank them and they fall in different buckets. | **Action Ink** (`#111111`): Captured 50px home CTA fill | the reference stating which of the two is the main colour |
| flex | flex | #000000 | two-candidates: The file calls #000000 the catalog primary (not a frontmatter token) and gives lime `action-lime` #00ff44 to the primary conversion action. | `#000000` — public-surface black field and the catalog primary color | the reference stating which of the two is the main colour |
| gangnamunni | Gangnamunni (강남언니) | #d54300 | not-a-token: Registry #d54300 is not a token; the file says no orange is offered. | no orange value is offered as a reusable UI token | a reference revision that records the value as a token with its role (re-measurement) |
| hyundaicard | Hyundai Card | #000000 | declined: Registry #000000 is the `ink` token; the file declines a brand primary. | neither is promoted as a universal brand primary | a first-party source giving the brand colour as a hex, recorded in the reference |
| kakaogames | 카카오게임즈 | #000000 | ink-only: Registry #000000 is the `ink` text token; no other colour role. | **Ink** (`#000000`): dominant observed public text and border color | a re-capture that records a brand fill or identity colour as a token |
| kakaot | Kakao T | #ffe100 | not-a-token: Registry #ffe100 is the app-icon yellow, not a token. | no yellow native call-button fill is established here | a reference revision that records the value as a token with its role (re-measurement) |
| megastudy | Megastudy | #057eff | declined: `action-blue` #057eff equals the registry but is hover text only; the corporate colour is given only as Pantone 285 C. | No RGB conversion is inferred from that print specification. | a first-party source giving the brand colour as a hex, recorded in the reference |
| millie | 밀리의서재 | #242424 | ink-only: Registry #242424 is the `ink` text token. | **Primary ink** (`#242424`): high-confidence computed text and border colour | a re-capture that records a brand fill or identity colour as a token |
| ridi | RIDI | #1e9eff | two-candidates: Two blues, token `blue` #1f9eff and rendered `selected-blue` #1e9eff (the registry value); the second is a selected-state fill, not a main action. | Do not normalize the two blue values into one | the reference stating which of the two is the main colour |
| sktelecom | SK텔레콤 | #3a46cd | declined: Registry #3a46cd is `brand-link`, a current-page link colour; the file declines a T Blue hex. | This reference therefore does not manufacture a T Blue hex | a first-party source giving the brand colour as a hex, recorded in the reference |
| tving | TVING (티빙) | #ff153c | not-a-token: Registry #ff153c is not a token. | does not provide computed selector evidence for a red CTA | a reference revision that records the value as a token with its role (re-measurement) |
| upbit | Upbit | #0062df | declined: `accent` #0062df equals the registry but the file gives it no role. | not assigned a universal semantic role | a first-party source giving the brand colour as a hex, recorded in the reference |
| wavve | Wavve | #1351f9 | not-a-token: Registry #1351f9 appears in the prose table as a CSS primary-button declaration but is not a frontmatter colour token, and no such button was exercised. | A matching primary CTA was not exercised in this capture. | a reference revision that records the value as a token with its role (re-measurement) |
| zigzag | 지그재그 | #121212 | ink-only: Registry #121212 is the `strong` text token; the buy button is #121314, which is not a token. | **Strong detail text** (`#121212`) | a re-capture that records a brand fill or identity colour as a token |
