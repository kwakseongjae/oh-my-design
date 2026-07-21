# 세션 저널 (newest-first · append-only)

> 세션 시작: 최근 항목 1~2개 확인. 세션 종료: **맨 위에** 5줄 이내 항목 추가. 기존 항목 수정 금지.
> 결정·증거·계획의 정본이 아니다 — "무엇을 하다 어디서 멈췄나"만 기록한다.

---

## 2026-07-21 (Codex) · CLI v1.9 production release
- PR #47을 병합하고 Vercel Production 및 5개 locale docs 200을 확인했다.
- npm 10 `prepare` stdout 때문에 실패한 pack JSON parser를 PR #48로 수정해 Node 18 smoke를 복구했다.
- `v1.9.0` workflow 전체 gate와 provenance publish가 통과했고 npm `latest`가 1.9.0이다.
- 빈 폴더 public install에서 package/CLI version 1.9.0을 확인했다. 다음은 activation funnel 관찰이다.

## 2026-07-21 (Codex) · CLI v1.9 final release gate
- CLI 101/Web 820 tests·TS·ESLint·catalog/counts·1,458-page build를 통과했다.
- Node 18.20.8 clean tarball에서 20 skills/18 roles/440 refs, 전 채널 doctor와 독립 collector를 확인했다.
- npm 1.9.0은 비어 있으나 로컬 npm/gh 인증은 만료됐다.
- `21a908d`를 remote branch에 push했다. PR은 gh invalid/app 403으로 미생성이고, 다음은 web deploy/200 smoke → npm publish다.

## 2026-07-21 (Codex) · Builder handoff clarity + auto catalog loading
- Builder catalog의 `Show more`를 제거하고 60개 단위 IntersectionObserver 자동 확장으로 교체했다.
- handoff 3단계를 project root·project terminal·agent chat 목적지로 명시하고 restart 뒤 doctor 안내를 추가했다.
- 실제 390px Builder에서 60→120 자동 로딩, handoff 문구/clipboard/overflow를 통과했다.
- Web 50 files/820 tests, TypeScript, touched ESLint, production build, diff check가 green이다.

## 2026-07-21 (Codex) · CLI activation implementation
- `ee89e46`과 rollback tag를 만든 뒤 Home CLI copy/정직한 결과, Builder mobile 3-step handoff, 60-item progressive catalog를 구현했다.
- README 4개 locale와 npm metadata/logo package를 outcome-first로 교정하고 과장된 reference copy를 제거했다.
- API 89,288B·tokens absent, 실제 clipboard/390px handoff, CLI 101/Web 820 tests·TS·ESLint·1,458-page build·npm hygiene가 green이다.
- 변경분은 미커밋 상태이며 다음은 final diff commit → Node 18 clean-install → publish/deploy다.

## 2026-07-20 (Codex) · CLI-first launch audit
- Home CLI section을 Live Proof 위로 이동하고 desktop/mobile 실제 route 순서를 확인했다.
- 28d GA/GSC/npm을 대조해 docs reach 2.5%, install-copy 282 users, Builder mobile handoff 부재를 확인했다.
- CLI 101/Web 820 tests·TS·ESLint·1,458-page build와 1.9.0 clean tarball install→Codex→doctor가 green이다.
- 다음은 승인 후 Home real copy CTA, Builder 3-part mobile handoff, README/npm truth+locale parity 순으로 구현한다.

## 2026-07-20 (Codex) · Fluid docs desktop grid
- fixed 780px article track을 fluid main track으로 바꾸고 xl grid gap을 40px로 줄였다.
- 1580px에서 본문 912px·TOC 뒤 여백 24px, 1280/1024/390px overflow 0을 브라우저에서 확인했다.
- TypeScript, touched ESLint, docs focused 17 tests가 green이다.

## 2026-07-20 (Codex) · Concrete anti-slop atlas + continuous TOC
- stale RAF scroll-spy를 고쳐 수동 스크롤에서도 `On this page`가 읽는 섹션을 계속 따라가게 했다.
- 10개 추상 비교를 dashboard/settings/table/states/mobile/notification 등 실제 UI before/better specimen으로 교체하고 5 locale label을 붙였다.
- Primer/Carbon/Fluent/USWDS/GOV.UK/Atlassian 공식 근거를 추가했으며 Web 820 tests/TS/ESLint/build 1,458 pages가 green이다.
- 다음은 로컬 `/docs/ko/anti-slop#atlas` 시각 확인 후 기존 CLI v1.9 release candidate의 publish/deploy 결정이다.

## 2026-07-18 (Codex) · AI slop 10-lens visual guide
- hierarchy부터 interaction까지 10개 review lens와 anti-slop≠minimalism 3방향 비교를 5 locale 문서에 추가했다.
- Impeccable/Taste/Anthropic/Vercel/Carbon/W3C/GOV.UK/Apple/Atlassian 근거를 taxonomy·skill·agent용 catalog에 반영했다.
- desktop/mobile 5 locale overflow 0, console 0, Web 815 tests/TS/ESLint/build 1,458 pages가 green이다.
- 다음은 기존 CLI v1.9 release candidate의 최종 tarball clean-install 감사와 publish/deploy 결정이다.

## 2026-07-18 (Codex) · Humanize + AI slop system
- im-not-ai/Humanizer/stop-slop/Impeccable/Taste와 locale style guide를 근거로 OmD taxonomy를 정의했다.
- `omd:humanize`·`omd:slop-audit`, humanizer/slop-auditor agents, 5-locale `/anti-slop` 비교 문서를 추가했다.
- locale별 visible specimen/consent copy, desktop+390px overflow 0, 440/20/18 counts, tests/TS/ESLint/build가 green이다.
- 다음은 final 20/18 npm tarball clean-install 감사 후 publish/web deploy다.

## 2026-07-18 (Codex) · Docs locale scroll-jump fixed
- Base UI Select modal scroll lock이 메뉴 open 시 `scrollY 1000→0`을 만드는 것을 재현했다.
- locale menu를 non-modal/fixed popup으로 바꾸고 route transition의 scroll을 보존했다.
- KO↔EN pointer test에서 y 2856 유지, header top 0, TS/ESLint/11 tests/diff green이다.

## 2026-07-18 (Codex) · Setup card height alignment
- prerequisite 카드 높이를 longest rightmost label 기준 224px로 통일하고 title slot을 2줄로 예약했다.
- KO desktop에서 3개 카드 높이/footer 위치 동일, title/footer overlap 0을 확인했다.
- TypeScript, touched ESLint, diff check가 green이다.

## 2026-07-18 (Codex) · Docs direct copy actions
- Copy page split menu와 llms.txt navigation을 제거하고 직접 복사 버튼 2개로 바꿨다.
- page/locale llms 원문을 서버에서 주입하고 clipboard fallback까지 추가했다.
- 실제 KO browser에서 copied feedback/URL 유지, TS, 11 tests, ESLint, diff check가 green이다.

## 2026-07-18 (Codex) · Showcase redundant case removed
- Showcase의 docs-rebuild case 시작점부터 verification까지 모두 제거했다.
- Applepresso product case만 남기고 TOC와 Markdown/AI copy도 같은 범위로 축약했다.
- KO browser/Markdown, TS, focused 11 tests, ESLint, diff check가 green이다.

## 2026-07-18 (Codex) · Docs decorative left bars removed
- Overview callout과 2개 단계 목록의 비기능적 left accent/timeline border를 제거했다.
- callout은 icon+neutral surface, 단계 목록은 번호+editorial divider로 재구성했다.
- 기능적 TOC/split-control 선은 유지했고 3 routes/mobile, TS, 10 tests, ESLint, diff check가 green이다.

## 2026-07-18 (Codex) · Outcome cards visual result previews
- 3개 outcome card를 Prompt 다음 Result가 오는 세로 흐름으로 바꿨다.
- DESIGN.md tokens/onboarding/UI audit를 설명하는 responsive CSS 미니 프리뷰를 추가했다.
- locale 상태 라벨, dark/desktop/390px, overflow 0, TS, 10 tests, ESLint, diff check가 green이다.

## 2026-07-18 (Codex) · Docs header controls cleanup
- locale code 대신 선택 option과 동일한 전체 현지어 라벨을 trigger에 표시한다.
- 언어/GitHub 버튼을 한 control 체계로 다듬고 docs의 Open Builder CTA를 제거했다.
- KO↔EN 실제 전환, desktop/mobile, TS, focused 10 tests, touched ESLint, diff check가 green이다.

## 2026-07-18 (Codex) · Docs TOC scroll-spy
- 오른쪽 페이지 목차에 스크롤 기반 활성 섹션 추적과 클릭 앵커 이동을 추가했다.
- 활성 항목은 product primary 색상·배경·라인과 `aria-current`로 구분한다.
- `/docs/ko/demo` 클릭/수동 스크롤, TS, focused tests, touched ESLint, diff check가 green이다.

## 2026-07-18 (Codex) · Docs sidebar cleanup
- left sidebar의 quality/pipeline summary card를 제거하고 navigation만 남겼다.
- visible aside text와 DOM snapshot에서 해당 문구가 사라진 것을 확인했다.
- focused 10 tests, TS, touched ESLint와 diff check가 green이다.

## 2026-07-18 (Codex) · Channel install tabs
- 4개 channel install cards를 한 개의 Base UI tab panel로 축약했다.
- Claude Code를 첫 탭/기본값으로 고정하고 선택 패널만 DOM에 남도록 확인했다.
- focused 11 tests, TS, touched ESLint, diff check와 Claude→Codex browser interaction이 green이다.

## 2026-07-18 (Codex) · Getting Started setup card visual pass
- prerequisite plain text boxes를 icon/progress/status/marker가 있는 setup cards로 재구성했다.
- Ready 상태를 EN/KO/JA/ZH-CN/ZH-TW로 현지화하고 사용자 교정을 preferences에 기록했다.
- focused 11 tests, TS, touched ESLint, diff check와 desktop/mobile browser smoke가 green이다.

## 2026-07-18 (Codex) · CLI docs page tools + custom locale UI
- Docs 언어 선택기를 Base UI custom popover로 바꾸고 헤더 GitHub를 live star pill로 통일했다.
- 40개 localized page에 Copy page, Markdown 원문, AI agent copy, locale llms.txt 진입을 추가했다.
- `/docs-md/<locale>/<page>.md`는 rendered docs와 같은 dictionary에서 Markdown을 생성한다.
- focused 11 tests, TS, ESLint 0 errors, 1,453-page build와 모바일 browser smoke가 green이다.

## 2026-07-17 (Codex) · CLI v1.9 + multilingual docs release candidate
- Home scrollbar gutter를 0으로 만들고 scroll-only overlay thumb를 실제 브라우저에서 검증했다.
- guided install/doctor/targeted hook repair와 Claude·Codex·OpenCode·Cursor native 계약을 완성했다.
- 5개 언어 × 8개 docs, honest Applepresso showcase, human/AI llms entry를 구축했다.
- Node18 self-contained collector와 clean tarball을 독립 감사했고 CLI 100/Web 813/build 1,453 gates가 green이다.

## 2026-07-14 (Codex) · v2/440 release gates closed
- npm 10 lockfile과 canonical test path를 보정해 GitHub Quality의 CLI/Web jobs를 모두 green으로 닫았다.
- Vercel Production과 custom domain에서 catalog 440, KB/Acer, Home/Builder 200, GitHub About 400+를 확인했다.

## 2026-07-14 (Codex) · v2/440 production release
- v2 누적 변경을 `main`에 배포했고 custom domain에서 440개 catalog와 신규 레퍼런스를 확인했다.
- CLI 57/57, Web 790/790, TypeScript, ESLint 0 errors, 1,411-page build와 builder desktop/mobile smoke가 green이다.
- npm 10 CI lockfile 호환 문제를 동일 버전으로 재현·수정했으며 README/About의 catalog 표기를 400+로 통일한다.

## 2026-07-13 (Codex) · Global 40 net-new CREATE complete
- 한국·대만·일본·미국 각 10개를 신규 탐색·수집해 40/40 deterministic acceptance를 통과했다.
- Catalog 440개(Verified v2 141), 1,704 claims·89 components; Web 790 tests와 1,411-page build가 green이다.
- `/builder` 국가별 표본 4개도 정상 렌더링했고, 다음은 이 변경분의 배포 검토다.

## 2026-07-13 (Codex) · Popular Top100 parallel verification complete

- 최신 잔여 60개를 4개 레인으로 끝까지 처리해 Top100 100/100 Verified v2, 잔여 0을 달성했다.
- Kbank/JANDI hold와 Top100 밖 Bilibili invalid-Verified도 재수집·acceptance로 복구했다.
- 전체 fleet은 101 Verified v2 / 159 Partial / 140 Legacy다.
- Web 750/750, TypeScript, ESLint 0 errors, production 1,291 pages green; 다음은 builder smoke test와 배포 준비다.

## 2026-07-13 (Codex) · Popular 60 parallel lanes start

- Upstage 완료를 반영해 Top100 40/100, 잔여 60개로 재집계했다.
- 60개를 15개씩 4개 레인으로 분할해 병렬 연속 실행을 시작했다.
- Chrome 4-way SIGABRT 때문에 capture만 단일 슬롯, Terra/repair/acceptance는 병렬로 운영한다.
- Root는 Tossbank/Mercari 기존 evidence부터 Terra high에 투입; hold는 1차 sweep 뒤 재시도한다.

## 2026-07-13 (Codex) · Popular 66 continuation — first 5

- Clay/Tesla/Catchtable/Coupang/Alipay를 순차 Terra high + acceptance로 승격해 Top100 34→39.
- 차단/얇은 home은 공식 멀티서피스 경로로 복구하고 loaded/declared/system 폰트를 분리했다.
- interaction 0인 machine button/input은 제거하고 prose raw defaults는 보존했다.
- Upstage 3/85/69 evidence 후 Terra reconcile 진행 중; 다음은 Upstage acceptance→Ohouse.

## 2026-07-13 (Codex) · Popular sequential verification 31→34

- ElevenLabs/Flex/Toss Securities를 Terra high + deterministic audit로 Verified v2 승격했다.
- Flex Pretendard Variable 351 uses, Toss Product Sans 419 uses를 loaded evidence로 확정하고 fallback/declared-only는 제외했다.
- Top100 34/100, fleet 35/170/195; Web 750/750와 pipeline/AST green.
- 다음은 Clay→Tesla→Catchtable recapture, Coupang Terra-ready; Bilibili audit는 release blocker로 유지한다.

## 2026-07-13 (Codex) · GA4/GSC traffic spike diagnosis

- Weekend sessions 528→1,373: Organic Search +534 and Direct +319 explain the lift; referral/social did not.
- GSC 7/10 clicks 38→194; 138 were brand-query clicks, `design system builder` 21, mobile 3→106.
- Builder generate/export grew +161%/+125%, but install-copy stayed 41→43; traffic is real but activation diluted.
- Attribution gap: Direct+Unassigned 55.6%, reserved `source` pollution 1,451; next deploy guard → GA apply → clean-day baseline/UTM redirects.

## 2026-07-13 (Codex) · Popular checkpoint 1 — 10/10 complete

- ClickHouse/Samsung/Claude/Remember/Cohere를 Terra high + deterministic acceptance로 승격했다.
- 인기 Top100 21→31, fleet Verified 22→32; 후반 238 claims evidence-linked, conflict 0.
- v2 root unknown-field gate를 추가하고 Home→builder desktop/mobile 10개, spacing order를 통과했다.
- Web 750/750, production 1,291 pages, pipeline/AST green; 다음은 regenerated Top100 sequence 1.

## 2026-07-13 (Codex) · Popular checkpoint 1 — first 5

- IBM/Zigzag/Uber/Notion/Hyundai Card를 순차 Terra high + deterministic acceptance로 승격했다.
- 인기 Top100 21→26, fleet Verified 22→27; 모든 272 claims가 evidence-linked, conflict 0.
- acceptance-only와 per-ref quality gate를 추가해 graph/source/claim/state 누락을 즉시 차단한다.
- Web 749/749, TS/pipeline/AST green; 다음 ClickHouse→Samsung→Claude→Remember→Cohere.

## 2026-07-13 (Codex) · Popular Top 100 release gate

- full Upstash 390-ref demand를 재확인해 Top 100을 고정: Verified 21, pending 79.
- 인기순 1개씩 처리하는 8-checkpoint machine plan과 재생성 script를 추가했다.
- 배포 시작 조건을 Top100 100/100 + Bilibili invalid-Verified 해소 + builder/full gate로 고정했다.
- 첫 순서는 IBM→Zigzag→Uber→Notion→Hyundai Card; TS/focused tests/diff green.

## 2026-07-13 (Codex) · Terra high batch recovery

- Terra 정책을 xhigh→high로 전환하고 raw collector / official-source reconcile 경계를 고정했다.
- 40개를 재분류해 ready 14 / hold 24 / verified 1 / Bilibili audit 1을 확인했다.
- resumable 10개 batch runner, 2-surface preflight, 중복 acceptance 제거를 구현했다.
- Web 749/749, TS, subscription/model guard green; 다음 strong-evidence refs를 high로 순차 실행.

## 2026-07-13 (Codex) · remaining-380 batches 01–04 start

- 첫 40개 queue 잠금 및 40/40 MCP-free capture/coverage triage 완료.
- Bilibili 46/46·26/26, Lovable 25/25로 Verified v2 승격; fleet 22/171/207.
- Terra adapter의 login stderr 감지와 obsolete MCP config 오류를 수정했다.
- Web 748/748, TS/AST/quality green; 다음 Sentry→SmartHR→Supabase→Tossbank→Mercari.

## 2026-07-13 (Codex) · predeploy discovery polish

- Builder 색상을 count-desc로 정렬하고 sub-30 family를 Etc 46으로 통합; Browse collections 제거.
- spacing 숫자 오름차순, Home Wall 400 tile → canonical builder preview 직행 + GA event 구현.
- 잔여 380개를 demand-ranked 10×38 batch로 검증하는 배포 후 계획을 고정했다.
- 인앱 desktop/mobile QA, Web 748/748, TS/AST/quality/lint, production 1,291 pages green.

## 2026-07-13 (Codex) · VIRAL0 real-browser acceptance

- Home→builder→Toss Share→evolution→canonical builder를 desktop/mobile에서 실제 통과했다.
- 권한 상태에서 멈추는 clipboard를 timeout+DOM fallback으로, evolution CTA의 Customize 오진입을 exact preview cfg로 수정했다.
- Markdown attachment, 1200×630 OG, hreflang/English summary와 overflow 0을 브라우저에서 확인했다.
- Web 745/745, TS/AST/quality/lint, diff check, production 1,291 pages green; 다음은 deploy→GA apply→baseline이다.

## 2026-07-13 (Codex) · I18N0 + VIRAL0 + MEASURE0

- Top5 KR English canonical/evidence summary + en/x-default hreflang/JSON-LD citation 완료.
- actual repo diff만 쓰는 5 evolution SSG + Markdown artifact + verified OG/share 구현.
- source/collection/share GA4 reports·dimensions·digest와 7/14-day measurement spec 추가.
- Web 745/745, TS/AST/quality/lint, PNG runtime, build 1,291 green; browser Allow만 pending.

## 2026-07-12 (Codex) · PAGE0-C formats + COLOR1-C discovery

- builder Source에 canonical-only DESIGN.md/Tailwind/CSS/DTCG 탭·copy/download 구현.
- `/collections` 9 color + 8 curated 카드, builder/directory/related 진입과 `col_*` analytics 추가.
- 실제 Blue130→builder→Toss 4-format desktop/mobile QA; fallback/overflow/Partial chrome 없음.
- Web 732/732, TS/AST/quality/lint, production 1,285 pages green; 다음 I18N0 → VIRAL0.

## 2026-07-12 (Codex) · PAGE0-B provenance + COLOR1-B collections

- token-linked preview 4개 섹션에 canonical claim/date/quality 배지 추가; Hero/Guidelines는 미표시.
- 9개 canonical color collection, builder CTA, 실제 primary-color 기반 1200×630 OG 구현.
- color-blue 130 = builder Blue 130; desktop/mobile overflow 0, Partial chrome 없음.
- Web 724/724, TS/AST/quality/lint, production 1,284 pages green; 다음 PAGE0-C/COLOR1-C.

## 2026-07-12 (Codex) · PAGE0 evidence + COLOR1 URL

- verification_v2 claim graph를 server-only manifest/Reference AST/API로 연결하고 builder evidence drawer 구현.
- Toss 79/79 claims·5 sources·0 conflicts·source URL을 desktop/mobile 실제 동선에서 확인.
- `/builder?color=blue` hydration, preview 보존, brands 복귀 보존 완료; 390px overflow 0.
- Web 713/713, TS/AST/quality/focused lint, production 1,274 pages green; 다음 PAGE0-B/COLOR1-B.

## 2026-07-12 (Codex) · Top 20 Verified v2 complete

- Airbnb, KakaoBank, Vercel, ABLY full reconcile 완료; fleet 20 Verified v2.
- fallback 금지 교정: stale CTA/semantic/component 제거, current font/surface roles 분리.
- collector baseline fallback + Philosophy export/test decoupling 수정; Web 700/700 + TS/AST/quality green.
- Home→builder actual selection, 4-brand desktop+375px QA green; 다음 PAGE0 evidence drawer.

## 2026-07-12 (Codex) · F20 Channel Talk → Linear batch

- Channel Talk, Wanted, Figma, Linear full Verified v2 완료; fleet 16개.
- fresh capture: Channel 5/100, Wanted 6/100, Linear 5/100; Figma blocked attempt은 미사용.
- canonical/mirror/AST sync, Web 700/700, TypeScript, builder desktop+375px green; duplicate swatch key fixed.
- Airbnb official 4-surface/49-variant capture 완료; reconcile부터 다음 실행.

## 2026-07-12 (Codex) · F20 remaining migration start

- Banksalad Verified v2: 5 surfaces, 66/66 claims, current green/font/radius reconcile.
- SOCAR Verified v2: 5 surfaces, 67/67 claims, product Pretendard vs brand IBM Plex 분리.
- quality fleet 12 Verified v2; 두 reference standalone 26/26 gate green.
- Channel Talk 5-surface/96-variant/6-interaction capture 완료; current token reconcile부터 재개.

## 2026-07-12 (Codex) · Top 20 context depth 20/20

- 최신 demand Top 20의 intro/narrative/voice/principles/persona와 font 5-class boundary를 보강.
- context source ledger ≥3을 고정하고 미확인 persona/font/component fallback을 제거.
- context audit 20/20, quality 400, AST parity, Web 700/700, TypeScript 통과.
- 잔여 10개 full migration queue와 PAGE0 → I18N0 → VIRAL0 실행 계획 생성; builder G9 attach timeout은 다음 acceptance에서 재시도.

## 2026-07-12 (Codex) · Baemin context depth + WORK reconcile

- 공식 Baemin 2.0 근거로 WORK 앱 family와 밝은 mint 방향을 확정; live specimen은 unavailable 유지.
- §1/§3/§10-13을 history·culture·fonts·license·rebrand 근거로 풍부화하고 surface/asset 역할 분리.
- Codex/Claude add-reference+migrate에 context-depth/evidence-class gate 추가.
- 검증: 111/111 claims, 5 surfaces/sources, 0 conflicts, full Web 700/700 + TS; browser G9는 탭 종료로 pending.

## 2026-07-12 (Codex) · Baemin surgical absence 복구

- 교정: `unknown means absent`를 field/item 단위로 고정하고 원본 전체 축소·Partial 경고 UI를 금지.
- Baemin: Verified v2 원본 복구; palette 11/type metrics 8/spacing 7/radius 4/components 7 유지, font family/specimen만 제거.
- UI: `/builder`에서 설명과 모든 verified section을 복원하고 `Partial`/`Reference Evidence` 제거.
- 검증: focused 46 tests, TS, ESLint, 실제 builder DOM/visual QA 통과.

## 2026-07-11 (Codex) · unknown means absent

- 철학: reference delivery product, not fallback generator를 DESIGN/AGENTS/spec/preferences에 고정.
- 구현: canonical high-confidence AST-only preview, missing group section suppression, font substitute 제거.
- Baemin: 미확인 product font/component 제거, verified public-surface color evidence는 명시적 role로 유지.
- 검증: 관련 112 tests, TypeScript, touched-file ESLint green.

## 2026-07-11 (Codex) · Verified v2 10개 standardized hybrid batch

- 구축: official URL/capture budget manifest + in-app QA contract + `reverify:hybrid:report`; 10 pass / 0 hold.
- 검수: 10개 official surface와 local desktop+375px, font boundary/overflow/guidelines/images 대조.
- 검증: reference 10개 green, Web 696, TS, AST/quality 400; 29CM fresh stall은 동일일 evidence 유지로 명시.
- 다음: Banksalad → Channel Talk → Airbnb의 F20 잔여 큐.

## 2026-07-11 (Codex) · LINE in-app hybrid 재검수

- 재수집: 8 surfaces, 50 colors, 10 fonts, 45 variants, 5 interactions, coverage 87; 공식 v3.5 color/type/button 대조.
- UI: desktop+375px overflow 없음, type roles·guidelines 정상; semantic `System` literal CSS 버그를 OS stack으로 교정.
- 검증: LINE 26/26, Web 696, TS, AST/quality 400 통과; 100/100 claims·0 conflicts 유지.
- 다음: Banksalad 공식 BPL + product multi-surface reconcile.

## 2026-07-11 (Codex) · LINE + 여기어때 → Verified v2

- 완료: LINE 100/100·여기어때 75/75 claims, fleet 10개; 여기어때 8-surface capture coverage 95.
- 교정: LINE green/font/preview, YDS palette·type·spacing·radius와 public/product component 경계; 추정 기업서사/persona/motion 제거.
- 검증: 여기어때 27/27, Web 694, TS, AST/quality 400, fixture precision/recall/F1 1.
- 다음: Banksalad → Channel Talk → Airbnb 순으로 동일 파이프라인 실행.

## 2026-07-11 (Codex) · 29CM five-surface reconcile → Verified v2

- 완료: 29CM 84/84 claims·5 surfaces·5 sources·0 conflicts; fleet 8개.
- 교정: accent `#ff4800`, border `#dddddd`, editorial 23px/600, Pretendard loaded; stale persona/motion/state 추정 제거.
- 검증: 27/27 network gate, Web 693, TS, AST/quality, fixture F1 1; Terra/xhigh packet은 capture-complete.
- 다음: demand queue 1순위 LINE → 여기어때 → Banksalad 순으로 동일 파이프라인 실행.

## 2026-07-11 (Codex) · KRDS inline reconcile → Verified v2

- 완료: nested Terra 전송은 정책 거부되어 우회 없이 현재 세션에서 같은 skill로 reconcile; KRDS 193/193, 10 sources, 0 conflicts.
- 수집: 8 surfaces, Pretendard GOV loaded 1,934, 51 fingerprints, 6 dialogs, coverage 94; machine components 12개로 정밀 축소.
- 파이프라인: reference별 maxRoutes를 queue까지 연결; 27/27, Web 692, TS, AST/quality, fixture 1/1/1 통과.
- 다음: 다음 priority reference 또는 operator-owned Terra 실행 경계 결정.

## 2026-07-11 (Codex) · Terra xhigh subscription runner + KRDS capture

- 완료: ChatGPT 로그인 기반 `gpt-5.6-terra`/`xhigh` adapter·skill·3-case eval·MCP/API-key 차단 guard 구현.
- KRDS: 3 surfaces, Pretendard GOV loaded 634 uses, 40 honest variants; route/tab/classification 오탐 교정.
- 검증: model probe READY, Web 692/692, TS, fixture precision/recall/F1 1/1/1, subscription contract green.
- 대기: packet.md + KRDS evidence를 OpenAI에 전송하는 Terra 본 실행은 명시 승인 필요.

## 2026-07-11 (Codex) · Naver Verified v2 + runner hardening

- 완료: Naver 101/101 claims·3 surfaces·5 sources·0 conflicts로 Verified v2 승격; fleet 6개.
- 교정: portal/search System, corporate InterVariable loaded, Nanum/Pretendard declared-only; 추정 토큰·persona 제거.
- 파이프라인: auth redirect·URL 이동 tab·budget false-success·dirty acceptance 결함 보강; 외부 전송은 명시 승인 필요.
- 검증: Naver 27/27, Web 681, TS, fixture 1/1/1, desktop+375px overflow 0.

## 2026-07-11 (Codex) · F20 batch + CAP0-A2 + R0 runner 완료

- 완료: Karrot·Toss·Apple·Kakao·Baemin을 0-conflict Verified v2로 승격하고 fleet을 5개로 만들었다.
- 완료: 5 interaction fixture를 precision/recall/F1 1.0으로 고정하고 provider-neutral shell-free reverify runner를 연결했다.
- 검증: Web 681, CLI 57, Web/CLI TypeScript, quality/AST, fixture, Next 1,274-page production build 통과.
- 다음: Naver paid pilot → priority batch → 상세 evidence/confidence drawer 순으로 진행한다.

## 2026-07-11 (Codex) · CAP0 MCP-free evidence vertical slice

- 한 일: catalog MCP를 410/archive로 종료하고 evidence v1 collector·skill wiring·reverify capture packet·detail evidence UI를 구현했다.
- 실측: Toss Product Sans loaded/high(255), coverage 36; Karrot system/high(420), Pretendard declared-only, coverage 49.
- 검증: Web 686, CLI 57, TS/ESLint, quality/AST, npm pack, desktop/mobile QA, Next 1,274-page build 통과.
- 다음: Karrot→Toss bundle을 `verification_v2` claim으로 reconcile하고 component interaction fixture/runner adapter를 확장한다.

## 2026-07-11 (Codex) · F20 첫 실행 — Baemin font truth

- 한 일: demand snapshot을 reverify queue에 연결하고 공식 fonts/license/app sources로 Baemin font claim을 재조정했다.
- 교정: exact Apple/Noto UI stack·근거 없는 SF Mono 제거, UI=`System` unresolved, 13-font project/OFL 경계 명시.
- 검증: Baemin 20/20 gate, Web 681/681, MCP 8/8, Next 1,274-page build; quality는 의도대로 Legacy 유지.
- 다음: queue 1순위 Toss부터 full `verification_v2`; Baemin은 native app computed evidence 확보 후 재진입.

## 2026-07-11 (Codex) · AST0-A0M~A4 + R0 완료

- 한 일: MCP raw/hash/portable AST parity, 모든 public consumer 전환, 400 catalog + honest quality, model-ready reverify queue/workflow/contract를 구현했다.
- 롤백: `REFERENCE_AST_V2=0|false|off` exact API legacy path 유지; public trust tier는 모델이 아닌 evaluator만 결정한다.
- 검증: Web 681, CLI 57, MCP 8 tests; TypeScript/ESLint; CLI/MCP/Next build(1,274 pages) 통과.
- 열린 것: merge/deploy·14 clean days, paid-model provider/browser runner 연결, F20 실제 evidence migration.

## 2026-07-11 (Codex) · AST0-A1 detail API

- 한 일: registry-first server repository, exact legacy adapter, AST foundation projection, provenance/quality/parity contract를 상세 API에 연결했다.
- 롤백: AST가 기본이며 `REFERENCE_AST_V2=0|false|off`는 exact legacy payload를 반환한다.
- 검증: focused 14/14, Web 672/672, TypeScript/targeted ESLint, Next production build 1,274/1,274 통과.
- 다음: `AST0-A0M` local MCP clean-sync/hash parity 후 `AST0-A2` MCP consumer 전환.

## 2026-07-11 (Codex) · AST0-A0 구현

- 한 일: typed Reference AST, provenance-aware normalizer/selectors, Toss·Baemin·Dcard·synthetic fixtures, 400-reference fleet gate를 구현했다.
- 검증: focused 7/7, Web 665/665, TypeScript/targeted ESLint, Next production build 1,274/1,274 통과.
- 열린 것: public consumer는 아직 legacy parser를 사용하며 local MCP clean-sync parity도 후속이다.
- 다음: `AST0-A1` detail API dual-read/rollback flag를 구현하고 `AST0-A0M`을 병렬 처리한다.

## 2026-07-11 (Codex) · AST0 계획/연속성

- 한 일: consumer/MCP/test 감사를 합쳐 `AST0-A0~A5` 실행 계약을 만들고 기존 v2 로드맵에 상태 ID를 연결했다.
- 열린 것: `AST0-A0` parser·selector·fleet gate 구현 및 검증.
- 다음: `web/src/lib/references/`에서 소비자 전환 없는 첫 additive implementation을 완료한다.
# 2026-07-11 — builder preview/font ownership fix
- 사용자 정본을 Home `시작하기` → `/builder`로 고정하고 AGENTS/spec/preferences에 기록했다.
- builder의 semantic System, surface별 font role, Pretendard live loading, proprietary substitute 표시를 교정했다.
- Baemin/Toss를 실제 builder 동선에서 QA했고 34 tests + TypeScript green을 확인했다.
- 열린 것: 전체 ESLint의 기존 6 errors는 이 변경과 별개로 남아 있다.
# 2026-07-11 — unknown means absent
- fallback generator가 아닌 reference delivery product라는 핵심 철학을 DESIGN/AGENTS/spec/preferences에 고정했다.
- preview를 canonical high-confidence AST-only로 전환하고 prose/low-confidence/synthetic group을 suppress했다.
- Baemin의 인접 웹 surface 타이포·컴포넌트 등 주장을 tokens와 DESIGN.md 본문에서 제거했다.
- proprietary font substitute도 제거했으며, 미로드 폰트의 live specimen은 표시하지 않는다.
# 2026-07-12 — browser-harness + color discovery
- 깨진 browser-harness 전역 설치/PATH를 0.1.5 uv tool로 복구하고 실제 Banksalad·builder 검수 완료.
- collector-first / browser-harness exception / in-app builder acceptance 최종 프로세스를 skill+spec+preflight로 고정.
- builder에 canonical primary 기반 9개 color concept filter, 실제 색 swatch/count, GA event 추가.
- Home → Blue 130 → Toss preview desktop/mobile green; 712 tests, typecheck, focused lint, production build green. 다음 PAGE0 → COLOR1.
