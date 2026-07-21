# CURRENT STATE — 단일 복원 지점

> 새 세션·compact 후 **이 파일 하나만 읽으면 재개할 수 있어야 한다.**
> 갱신 시점: 작업 단위 완료 · 결정 확정 · 머지 직후 (보고보다 먼저).

- 기준 커밋: `7646072` (`main`, production) + 미커밋 CLI/docs v1.9 release candidate
- 갱신: 2026-07-20 · CLI-first landing order / release audit / activation UX proposal queue

## 지금 (현재 위치)

- Home section order는 요청대로 Hero → **CLI** → Live Proof → Wall로 변경했다. desktop 1280px에서 section top `57→995→1639`, horizontal overflow 0이며 390px CLI section 자체는 정상이다. 승인되지 않은 CTA/copy 변경은 아직 적용하지 않았다.
- 2026-06-22~07-19 complete 28d 기준 GA는 7,402 users, legacy `/docs` 186 users(2.5%), `act_install_copy` 282 users(3.8%; 475 events), `act_prompt_copy` 192 users다. Builder는 install-copy 229 events/135 users로 최대 surface이며 desktop handoff는 보이지만 mobile은 0×0로 완전 비노출이다. npm은 같은 기간 2,667 downloads라 web copy event의 5.6×이나 npm download는 unique install이 아니다.
- CLI/docs/harness release gate는 root 6 files/101 tests, Web 50 files/820 tests, 양쪽 TypeScript, Web ESLint 0 errors(기존 warning 40), production build 1,458 pages, npm tarball hygiene가 green이다. `/tmp` clean project에서 candidate `1.9.0` install → Codex 20 skills/18 roles/440 refs → `doctor`까지 통과했다. tarball은 5,537,621B packed / 20,460,287B unpacked / 532 entries, SHA-256 `df537590d1330c0a60ae0b6cace573a54671205125dcbc4705f2eeb6926e0f45`다.
- 승인 대기 제안 queue: P0 Home CLI terminal을 성공 기반 실제 copy CTA로 만들고 Cursor에도 정직한 결과 문구 사용; Builder Export에 mobile 포함 `Download → Install → Restart/doctor → first prompt` handoff; Builder list API `tokens` 제거+progressive rendering. P1 clipboard 성공 후에만 activation event 발화, landing entry attribution/custom dimensions sync, README/npm outcome-first·locale parity·npm logo asset/homepage 정리. P2 Home comparison 39px mobile overflow와 Builder error/Retry 상태 교정.
- CLI docs desktop grid의 780px fixed main track을 fluid `minmax(0,1fr)`로 바꾸고 xl gap을 56→40px로 줄였다. 1580px viewport에서 main 780→912px, TOC 이후 버려지던 공간은 약 140→24px로 감소했다. 1280/1024/390px에서 main 706/690/384px, visible sidebars 2/1/0, horizontal overflow 0을 확인했다.
- CLI docs의 `On this page` scroll-spy에서 Strict Mode/HMR 재마운트 뒤 RAF ref가 stale 상태로 남아 자연 스크롤 업데이트를 막던 원인을 제거했다. canonical scrolling element와 reading line/page-end 판정을 분리했고 5개 회귀 테스트를 추가했다. 실제 pointer-wheel scroll에서 KO 목차가 원칙→10관점→minimalism→비교→분류→워크플로→리서치 순으로 연속 갱신된다.
- `/docs/{en,ko,ja,zh-cn,zh-tw}/anti-slop`의 10개 lens를 익명 막대/도형에서 실제 과업형 before/better UI로 교체했다: dashboard/release, nested settings/flat rows, promo/docs type, glass/semantic checkout, fake metric/build proof, cards/table, happy path/state set, clipped desktop/mobile checkout, scattered/anchored notification, pills/role-correct controls. 각 specimen의 UI label도 5 locale 원문을 사용한다.
- 공식 리서치를 Primer product patterns·empty/loading, Carbon data table, Fluent Card/Shapes, USWDS Card, GOV.UK error summary, Atlassian empty state까지 확장하고 `docs/AI_SLOP_RESEARCH.md`와 세 skill mirror source catalog에 반영했다. desktop 1280×720/mobile 390×844 overflow 0, 10 lenses/19 sources, Web 50 files/820 tests, TypeScript, touched ESLint, production build 1,458 pages green이다.
- AI slop을 작성 도구나 단일 시각 특징의 판정이 아니라 **제품 근거를 대신하는 context-free default pattern cluster**로 정의했다. `SLOP`(패턴 수렴), `QUALITY`(측정 가능한 결함), `PREFERENCE`(유효한 선택)를 분리하며, 정본 리서치는 `docs/AI_SLOP_RESEARCH.md`다.
- 신규 제품 스킬 `omd:humanize`, `omd:slop-audit`와 전문 에이전트 `omd-humanizer`, `omd-slop-auditor`를 canonical + Claude/Codex/OpenCode mirror에 추가했다. 현재 배포 계약은 references 440 / product skills 20 / specialist agents 18이다.
- `/docs/{en,ko,ja,zh-cn,zh-tw}/anti-slop`은 정의·4원칙·10개 UI lens·3개 유효한 디자인 방향·화면/문장/다국어 전후 탭·SLOP/QUALITY/PREFERENCE·5단계 재검증·출처를 시각적으로 제공한다. 문서 카탈로그는 5 locale × 9 pages = 45 routes다.
- KO/JA/ZH-CN/ZH-TW 원고는 영어 sentence skeleton을 상속하지 않고 독립 편집했다. visible specimen의 `NEXT-GEN/verified/reference/output/next step`과 analytics consent도 route locale별 문구를 사용하며 zh-TW는 대만 용어를 별도 유지한다.
- 실제 in-app browser에서 5개 locale의 `lang`, H1, tabs, localized specimen label을 확인했다. desktop과 390×844 모두 horizontal overflow 0, KO locale switch scrollY 유지, comparison tabs 정상, console error 0이다. 사용자 확인용 KO 탭은 `/docs/ko/anti-slop`에 열어 뒀다.
- 검증: 신규 2 skills quick validation, counts 440/20/18, root 6 files/101 tests, Web 49 files/815 tests, Web TypeScript/ESLint, production build 1,458 pages가 green이다. 마지막 원고 교정 후 focused Web 17 tests와 TypeScript/ESLint를 다시 통과했다.
- CLI docs locale menu scroll-jump bug is fixed. Base UI Select's default modal state was locking the document and reproduced `scrollY 1000 → 0`; the docs switcher is now non-modal, its sticky-header popup uses fixed positioning, same-locale selection is ignored, and locale routing uses `scroll:false`. Real pointer acceptance on KO↔EN kept `scrollY 2856 → 2856`, header top 0, body overflow visible, and the correct document lang.
- Getting Started prerequisite cards now reserve a two-line title slot and use a shared 224px card height, matching the longest rightmost label. In the KO desktop route all three cards measure 224px, share the same footer top, and report zero title/footer overlap.
- CLI docs page tools를 direct copy 2개로 단순화했다. `Copy page`의 split dropdown/Markdown 새 탭/AI-copy 중복 옵션을 제거했고, `llms.txt`도 link가 아니라 locale별 원문 즉시 복사 버튼이다. 두 원문은 server render 시 주입돼 click 후 fetch가 없으며 Clipboard API 실패 시 execCommand fallback이 작동한다. KO demo에서 두 버튼 모두 copied feedback, URL unchanged, dropdown/link 0을 확인했다.
- CLI docs Showcase에서 second docs-rebuild case(`기능 나열 문서에서 5개 언어 활성화 경로로`)부터 before/after, files, verification까지 전부 제거했다. 페이지에는 Applepresso product case만 남고 TOC도 `#real-case` 하나다. 같은 내용은 locale Markdown/AI copy 원문에서도 제외했으며 KO route/Markdown에서 제거 문구 count 0을 확인했다.
- CLI docs content의 비기능적 left accent bar를 전수 제거했다. Overview truth callout은 icon + neutral surface로, Getting Started quick-start와 Demo runbook은 left-border timeline 대신 번호 + horizontal editorial dividers로 바꿨다. 기능적 split-button separator와 scroll-spy active line은 유지했다. KO 3 routes와 390px에서 decorative bar/timeline 0, overflow 0을 확인했다.
- CLI docs Overview의 3개 outcome card를 `Prompt → Result` 세로 흐름으로 교정하고 오른쪽에 각각 DESIGN.md token sheet, onboarding surface, before/after UI audit 미니 프리뷰를 추가했다. 생성 이미지 대신 theme token 기반 CSS UI라 locale/theme/반응형과 내용 정합을 유지하며, 상태 문구도 현재 locale dictionary를 쓴다. KO desktop/390px에서 결과 순서, `준비 완료`, overflow 0을 확인했다.
- CLI docs 헤더의 locale trigger를 현재 선택 option과 같은 전체 localized label로 고정했다(`ko`가 아니라 `한국어`). 언어/GitHub control을 동일한 36px·10px radius·token border 체계로 정리하고 `Open Builder` CTA를 제거했다. KO→EN 전환 시 `한국어`→`English`와 route가 함께 바뀌며 Builder 링크 count 0임을 실제 브라우저에서 확인했다.
- CLI docs 오른쪽 `On this page` 목차를 scroll-spy 내비게이션으로 전환했다. 현재 읽는 섹션은 primary 색상·옅은 배경·활성 라인·`aria-current=location`으로 표시되며 클릭 시 앵커 이동과 선택 상태가 즉시 동기화된다. `/docs/ko/demo`에서 `#runbook` 클릭 이동과 수동 스크롤 후 `#proof` 자동 전환을 확인했다.
- CLI docs left sidebar의 quality-graded reference/pipeline summary card를 전 언어에서 제거했다. 실제 브라우저의 visible aside text는 product label + 8개 docs nav만 남고 pipeline/demo copy는 DOM snapshot에서 absent다.
- Getting Started의 4개 non-interactive channel install card를 단일 Base UI Tabs panel로 축약했다. tab order/default는 Claude Code → Codex → OpenCode → Cursor이며, 선택한 채널의 설명/명령어만 DOM에 존재한다. 실제 브라우저에서 Claude default와 Codex 전환 시 Claude panel count 0을 확인했다.
- Getting Started의 prerequisite 3개를 plain text box에서 icon/01–03 progress/locale-aware ready state/18+·git·AI marker를 가진 product-native setup card로 재구성했다. 데스크톱 3열은 longest-label 기준 동일한 224px 높이, 모바일은 1열이며 horizontal overflow 0을 실제 브라우저에서 확인했다.
- 다국어 CLI docs 헤더의 native `<select>`를 Base UI custom Select로 교체했고, plain GitHub 링크는 기존 live `/api/github-stars`를 쓰는 star pill로 통일했다. 실제 로컬에서 한국어 label과 5개 locale menu, GitHub 346 stars를 확인했다.
- 45개 localized docs route 모두 direct `Copy page`와 locale별 `llms.txt` 복사를 제공한다. `/docs-md/<locale>/<page>.md`는 같은 locale dictionary에서 생성된 `text/markdown` 원문을 반환하므로 사람 화면과 agent handoff가 별도 원고로 drift하지 않는다.
- 검증: docs/markdown focused 11 tests, TypeScript, ESLint 0 errors(기존 warning 40), `git diff --check`, production build 1,453/1,453 pages green. 모바일 in-app browser에서 custom locale popover, star pill, page actions menu, copy success state, locale llms link를 확인했다.
- Home은 native scrollbar gutter를 제거하고 scroll 중에만 나타나는 fixed overlay thumb를 쓴다. 실제 브라우저에서 `innerWidth=clientWidth`, gutter 0, idle opacity 0, console error 0을 확인했다.
- CLI v1.9은 bare `npx oh-my-design-cli@latest` guided install, `doctor`, Claude hook drift용 `--repair-hooks`, symlink/path fail-closed 보호를 제공한다. Claude Code·Codex·OpenCode는 20 skills/18 roles/440 refs, Cursor는 의도적으로 rule+catalog/0 skills/0 roles다.
- Taste Skill·Impeccable·Next.js docs 패턴을 outcome-first 구조로 재해석해 `/docs/{en,ko,ja,zh-cn,zh-tw}` 5개 언어 × 9페이지(45 routes), 홈 CLI activation section, 사람/AI 공용 llms 문서를 구축했다. Applepresso는 저장소 소유 controlled concept이며 provenance 6개 hash가 일치한다.
- `omd-reference-capture`는 Node 18 대상 self-contained `.mjs` sidecar다. Playwright runtime과 Apache-2.0 고지를 번들하고 npm cache/node_modules/TypeScript/MCP에 의존하지 않는다. 독립 감사에서 tarball→package.json 없는 clean target→Node 18.20.8→system Chrome 실캡처를 통과했다.
- 현재 implementation gate: CLI 6 files/101 tests, Web 49 files/815 tests, 양쪽 TypeScript, Web ESLint 0 errors, production build 1,458 pages, counts 440/20/18이 green이다. 신규 2 skills/2 agents를 포함한 최종 npm tarball clean-install/Node 18 audit은 publish 전에 한 번 더 실행해야 한다.
- 후보 tarball은 5.52MB packed / 20.42MB unpacked / 522 entries이며 로컬 최종 artifact SHA-256은 `d586c421e5f1f1d59307dd8507ae072c68f3fe3e3c2f0a806e7ae5df66a93d4b`다. npm publish와 web deploy는 아직 실행하지 않았다.

- v2 누적 변경 931개 파일을 `d4bb3ac`(`release v2 reference catalog and builder`)로 `main`에 배포했다. Vercel Production과 custom domain `oh-my-design.kr`에서 catalog 440개 및 신규 KB/Acer 레퍼런스를 확인했다.
- 최종 gate는 CLI 57/57, Web 45 files/790 tests, TypeScript, ESLint 0 errors(기존 warning 42), production build 1,411/1,411 pages다. Home → `/builder` → Toss preview를 desktop/mobile에서 통과했고 overflow·console error·fallback warning은 0이다.
- GitHub Actions의 Node 22/npm 10 환경에서만 드러난 lockfile optional dependency 누락(`@emnapi/core`, `@emnapi/runtime`)을 npm 10.9.8로 재생성했다. 로컬 전용 root `references` symlink를 읽던 테스트 2곳도 정본 `web/references` 경로로 교정해 최종 Quality의 CLI와 Web/reference integrity가 모두 green이다.
- README/README.ko와 GitHub repository About description의 catalog 표기를 400+/400개 이상으로 통일했다. 최종 Vercel Production은 success이며 custom domain에서 API 440개, KB/Acer 포함, Home/Builder 200을 확인했다.

- 한국·대만·일본·미국 각 10개, 총 40개 신규 레퍼런스를 탐색→공식 경로 수집→`gpt-5.6-terra/high` CREATE/repair→결정론 acceptance까지 완료했다. 정본은 `web/references/<id>/{DESIGN.md,.verification.md,_research.md}`이며 40/40 모두 Verified v2다.
- 최종 신규 목록은 KR `kb-kookmin…kakaogames`, TW `acer…poya`, JP `toyota…softbank`, US `uswds…thumbtack`이다. preflight 미달 후보 8개는 억지로 수용하지 않고 공식 표면이 충분한 후보로 교체했다.
- 신규 수집은 118 surfaces, 평균 coverage 77.5, raw component variants 2,091, accepted claims 1,704, promoted components 89를 만들었다. Terra 1차 acceptance는 30/40였고, schema/claim closure 중심 repair 후 40/40을 달성했다.
- 전체 catalog는 440개, 141 Verified v2 / 159 Partial / 140 Legacy다. Web 45 files/790 tests, TypeScript, ESLint 0 errors(기존 warning 42), production build 1,411 pages가 green이다.
- 실제 `/builder` 미리보기에서 KB국민은행·Acer·Toyota·USWDS를 국가별 표본 검수했다. 네 건 모두 narrative/color/typography/spacing/components/source 문서를 정상 표시했고 `Partial reference` 경고나 폰트 대체 폴백은 없었다.
- browser-harness는 Chrome attachment 0으로 대량 수집 기본 도구로는 불안정했다. 확정 운영안은 serialized deterministic collector 기본, browser-harness exception/debug, in-app browser builder acceptance다. 상세 감사: `data/reference-audits/2026-07-13-global40-create.md`.

- 인기 Top100 병렬 검증을 완료했다. 재집계 기준 40/100에서 시작해 잔여 60개를 4개 레인으로 처리했고, 현재 `artifacts/reverify/popular-top100-plan.json`은 100/100 `verified_v2`, 잔여 0이다. 사용자가 앞서 본 66개 수치는 작업 도중의 이전 스냅샷이며 실제 병렬 시작 시점의 최신 잔여는 60개였다.
- 각 레퍼런스는 deterministic capture → `gpt-5.6-terra/high` reconcile → deterministic acceptance를 통과했다. 동시에 Chrome을 여러 개 띄울 때 SIGABRT가 발생해 capture만 단일 브라우저 슬롯으로 직렬화하고 reconcile/repair/acceptance는 4개 레인 병렬로 유지했다.
- 최종 hold였던 Kbank는 6 surfaces·coverage66·14 components, JANDI는 6·71·27로 재수집해 각각 acceptance 28/28을 통과했다. Top100 밖 release blocker였던 Bilibili도 공식 제품 URL 2개/3 snapshots·coverage81·42 variants로 복구해 acceptance 27/27을 통과했다.
- 전체 fleet은 400개 중 101 Verified v2 / 159 Partial / 140 Legacy다. 다음 단계는 이번 Top100 배포 준비와 builder smoke test이며, 나머지 299개는 `spec/remaining-380-verification-plan.md`의 demand-ranked 점진 queue를 최신 수치로 재생성해 배포 후 처리한다.
- 최종 gate는 Web 45 files/750 tests, TypeScript, ESLint 0 errors(기존 warning 42), production build 1,291 pages가 green이다. OpenRouter 키 부재로 embedding 생성만 생략되며 keyword search fallback은 유지된다.

- 인기 Top100을 재집계해 Upstage까지 40/100에서 시작했고, 4개 병렬 레인으로 25개를 추가해 65/100 Verified v2까지 진행했다. 잔여 레인은 capture → `gpt-5.6-terra/high` reconcile → reference acceptance를 중단 없이 반복한다.
- 병렬 실행에서 collector Chrome 4개 동시 launch가 SIGABRT를 일으키는 로컬 한계를 확인했다. 따라서 browser capture만 단일 슬롯로 직렬화하고, 기존 preflight 통과 evidence의 Terra reconcile·canonical repair·acceptance는 4개 레인 병렬로 유지한다.
- 레인1 `ohouse…upbit`, 레인2 `kakaopay…tving`, 레인3 `yanolja…shinhanbank`, 레인4 `pinterest…resend`로 소유권을 분리했다. 접근 불가/2-surface 미달 항목은 hold 기록 후 다음 ID로 진행하고, 1차 통과 뒤 hold만 재시도한다.
- Root 레인은 Tossbank/Pinterest/Mercari/Mistral/Wise/HashiCorp/Miro acceptance를 완료했다. Terra가 HashiCorp verification_v2를 두 번 누락해 결정론 evidence graph로 수리했고, Miro conflict 문구를 exact `none`으로 정규화했다. 브라우저 슬롯은 레인3→레인1 순으로 진행 중이다.

- 남은 Top100 66개 순차 실행을 재개해 Clay, Tesla, Catchtable, Coupang, Alipay 5개를 추가 승격했다. 인기 Top100 확정치는 39/100이며 Upstage는 3 surfaces·coverage85·69 variants 캡처 후 Terra/high reconcile 진행 중이다. 다음 행동은 Upstage run 결과 확인→acceptance 수리→Ohouse다.
- 신규 증거: Clay Roobertvf loaded 1,564 uses; Tesla Universal Sans Text 266/Display 65; Catchtable Pretendard Std Variable 122 + Pretendard 117; Alipay Open Platform system stack 249. 선언-only/인접 DS/차단 응답 폰트는 제외했다.
- Catchtable 공식 B2C/B2B/career, Tesla support/model3/manual, Alipay Open Platform home/webApp/tool 경로를 capture config에 고정했다. browser-harness는 local Chrome connection 0이어서 deterministic collector + 공식 route 보강으로 복구했다.

- 인기 Top100 순차 검증은 34/100, 전체 fleet은 35 Verified v2 / 170 Partial / 195 Legacy다. 이번 단위에서 ElevenLabs 27/27, Flex 28/28, Toss Securities 28/28로 승격했고 Web 750/750 + reverify pipeline/AST가 green이다.
- ElevenLabs는 증거가 아니라 비표준 footer label 때문에 탈락했으며 `Tier 1 sources`/`Conflicts unresolved: none` 표준형으로 교정했다. Flex는 fresh 2 surfaces·coverage71·27 variants, Toss Securities는 WTS/corporate/investment 3 surfaces·coverage100·23 variants를 새로 캡처했다.
- Flex의 Terra 초안이 실제 bundle의 loaded font evidence를 놓쳐 수동 결정론 감사를 수행했다. `Pretendard Variable` loaded/high·351 uses·92 Flex-hosted sources만 UI family로 승격하고 static Pretendard/system-ui는 제외했다. interaction 0인 button token은 제거하고 관찰된 non-interactive story card만 남겼다.
- Toss Securities는 `Toss Product Sans` loaded/high·419 uses를 보존하고 Tossface declared/0 uses를 제외했다. `config/reference-capture-routes.json`에 official corporate-info와 investment-products를 추가해 WTS 단일 surface 일반화를 해소했다.
- 재생성된 다음 순서는 Clay → Tesla → Catchtable → Coupang이다. Coupang은 3 surfaces·coverage72·17 components로 Terra-ready, 나머지 앞 3개는 recapture부터 진행한다. release gate까지 66개 남았고 Bilibili 1-surface invalid-Verified 감사도 별도 미해결이다.
- browser-harness 0.1.5 설치는 정상이지만 이번 세션 doctor에서 local Chrome/daemon/connection 0이었다. 결정론 Playwright collector는 독립적으로 정상 동작했으며, 운영 프로세스는 collector 기본 + browser-harness exception + in-app builder acceptance를 유지한다.

- 2026-07-11~12 complete weekend traffic는 1,373 sessions로 직전 주말 528 대비 +160%다. 증가분은 Organic Search +534 sessions(증가분 63%)와 Direct +319(38%)가 전부 설명하며 Referral/Social은 증가 원인이 아니다.
- GSC 2026-07-10 clicks는 194로 전주 금요일 38 대비 +411%; 확인 가능한 검색어 중 brand variants가 138 clicks(전체 71%), `design system builder`가 21이며 Home 153 / Builder 40 clicks다. 모바일 clicks 3→106, 다음날 GA Korea mobile sessions 47→333으로 이어졌다. 날짜 경계 차이를 감안하면 외부 awareness → brand search/dark direct 패턴이 가장 강하다.
- 유입 품질은 실사용이다: 직전 주말 대비 `bld_generate` 499→1,302(+161%), `bld_export` 157→353(+125%). 단 `act_install_copy` 41→43으로 거의 정체해 acquisition→activation 효율은 낮아졌다.
- GA4 35d의 Direct 46.4% + Unassigned 9.1%는 최초 채널 식별 공백이다. Unassigned 1,451 sessions 전부가 `source` reserved-param 오염(`directory` 845, `builder` 126, `collection` 118 등)과 `(not set)`으로 설명된다. 로컬 acquisition guard는 code complete/deploy pending이다.
- GA4 Admin은 현재 dimensions `entry, mode, surface, channel, reference`만 있고 `entry_step/kind/taxonomy_version/format/action/collection/color_family/origin/location/artifact`와 key event `act_handoff`가 미등록이다. 2026-07-13 intraday의 Unassigned 405 sessions(0 new, 3% engagement)은 processing artifact로 baseline에서 제외한다.

- 인기 Top 100 첫 10개 checkpoint를 완료했다: IBM → Zigzag → Uber → Notion → Hyundai Card → ClickHouse → Samsung → Claude → Remember → Cohere. 인기 cohort는 21→31/100, fleet은 22→32 Verified v2 / 170 Partial / 198 Legacy다. 다음 인기 queue는 재생성된 `artifacts/reverify/popular-top100-plan.{json,md}`의 sequence 1부터 재개한다.
- 후반 5개 결과: ClickHouse 51/51 claims·3 surfaces·27/27, Samsung 36/36·3·28/28, Claude 58/58·3·27/27, Remember 42/42·3·28/28, Cohere 51/51·3·27/27. Unknown font/state/component는 machine token에서만 제거하고 산문·raw evidence는 보존했다.
- Claude.ai 0-surface capture는 Anthropic 공식 home/Claude/pricing 경로로 3 surfaces·coverage100 복구했다. Remember는 career/corporate/Remember UI 경로로 3·95, Cohere interaction hang은 baseline-only 3·94로 복구했다. browser-harness는 현재 다시 Chrome/daemon connection 0이라 collector route 보강 + Codex in-app builder acceptance를 사용했다.
- acceptance가 ClickHouse unsupported menu/v2 누락, Claude conflict 문구/tab state, Cohere source kind/미관측 button state를 차단했다. `verification_v2` root의 예상 밖 필드도 새 schema gate로 차단하며 regression test를 추가했다.
- 실제 Home → Get Started → `/builder` → 검색/선택 → preview를 통과했고 10개 모두 desktop/mobile 390×844에서 Color/Typography/Spacing/Guidelines/Components/Verified v2 유지, Partial chrome 0, horizontal overflow 0, console error 0이다. spacing은 10/10 숫자 오름차순이다. Web 750/750, pipeline/AST, TypeScript 포함 production build 1,291/1,291 green이다.

- 배포 전 인기 Top 100 검증 게이트를 잠갔다. 2026-07-10 complete Upstash snapshot(390 refs, 28,853 selects) 기준 Top 100은 Verified 21 / 미검증 79이며, 79개를 인기순으로 한 개씩 처리한다. 정본은 `spec/popular-top100-verification-release-gate.md`와 `artifacts/reverify/popular-top100-plan.{json,md}`.
- 79개는 최대 10개 checkpoint × 8개로 묶지만 실행은 항상 순차다. 각 ref는 deterministic recapture → exception이면 browser-harness → 2 surfaces/coverage60/component1 preflight → Terra high official/Tier2 collection+reconcile → per-ref acceptance 순서며, 성공 10개마다 full Web/TS/builder QA를 실행한다.
- 첫 checkpoint 순서는 IBM → Zigzag → Uber → Notion → Hyundai Card → ClickHouse → Samsung → Claude → Remember → Cohere다. 현재 Top 100 pending 중 9개만 fresh evidence가 바로 Terra-ready이고 70개는 먼저 재수집한다.
- 배포 준비 시작 조건은 refreshed Top 100 100/100 Verified v2, fallback 0, builder desktop/390px parity, 전체 gate green이다. 인기 Top 100 밖 Bilibili도 1-surface invalid-Verified 감사 항목으로 함께 해소해야 한다.

- 잔여 380개 중 첫 40개 queue를 `gpt-5.6-terra + high`로 전환했다. raw DOM/computed/font capture는 MCP-free 결정론 collector, 공식 context/font/license/Tier 2 수집과 reconcile은 Terra high가 담당한다.
- 기존 “4배치”는 40/40 capture만 완료된 상태였다. runner가 호출당 1개만 허용하면서 batch loop/state가 없었고 실제 Terra reconcile은 Bilibili와 Lovable 2개만 진입했다. Lovable은 worker 중단 뒤 수동 acceptance되어 complete run.json이 없다.
- 새 resumable `reverify:batch`는 10개 단위로 `ready/hold/running/promoted/failed/audit_required`를 기록한다. 2 surfaces·coverage 60·component 1을 Terra 전송 전 강제하며 per-ref gate 1회 + batch full gate 1회로 중복 검증을 제거했다.
- 현재 재분류는 14 ready / 24 hold / Lovable already_verified / Bilibili audit_required다. Bilibili는 1 surface로 과거 runner 계약을 통과한 불일치 때문에 추가 surface 확보 또는 신뢰 상태 재평가가 필요하다. 상세는 `artifacts/reverify/batches-01-04-diagnosis.md`와 `batch-state-01-04.json`.
- 실제 계정 model cache에서 Terra의 `high` 지원을 확인했다. Web 749/749, TypeScript, Codex subscription guard, diff check green.
- 다음 실행 순서는 strong evidence 기준 Sentry → SmartHR → Supabase → Pinkoi → Tossbank → Mercari이며, batch runner로 순차 실행한다.
- Codex subscription adapter의 실제 호환성 버그 2개를 수정했다: login status의 stderr 출력도 인식하고, 최신 Codex에서 invalid transport가 되는 obsolete `mcp_servers.playwright.enabled=false` override를 제거했다.

- Builder color concept 정리 완료: `Browse collections` 링크를 제거하고, 30개 미만 family(Purple/Yellow/Pink)는 `Etc 46`으로 합쳤다. chip은 canonical reference count 내림차순 `Blue 130 → Neutral 65 → Red 58 → Etc 46 → Green 39 → Teal 32 → Orange 30`으로 결정론 정렬한다. `/builder?color=etc`는 정확히 46개를 반환한다.
- Preview spacing 표를 canonical 값 숫자 오름차순으로 정렬한다. 원본 token이나 의미는 바꾸지 않고 presentation order만 교정했다.
- Home The Wall의 400 tile을 클릭 가능한 링크로 전환했다. 각 tile은 empty overrides + default components cfg를 가진 해당 브랜드의 as-is `/builder` preview로 바로 이동하며 `wall_reference_open {reference}`를 기록한다.
- 배포 후 잔여 380개 계획을 `spec/remaining-380-verification-plan.md`에 고정했다. 171 Partial + 209 Legacy를 demand-ranked 10개 × 38배치로 처리하고, The Wall/selection/export/GSC/risk로 매 배치 queue를 재계산한다.
- 실제 인앱 검수: desktop/mobile 390px에서 color order, Etc 46, page overflow 0; Toss spacing ascending; Home Wall Toss tile → Toss builder preview 직행 및 Customize intro 미노출을 통과했다. browser-harness는 Chrome CDP 연결 부재로 진단 실패했으며 인앱 브라우저로 acceptance를 완료했다.
- 최신 gate: Web 748/748, TypeScript, AST/quality, touched ESLint, analytics syntax, `git diff --check`, production build 1,291/1,291 green.

- I18N0 완료: Baemin/Toss/Kakao/NAVER/Karrot에 검토된 영어 canonical summary, evidence-domain boundary, 검색 keyword 계약을 추가했다. 기존 영어 상세 URL을 `en` + `x-default` canonical/hreflang로 명시해 중복 locale URL은 만들지 않았고 JSON-LD `inLanguage`/citation과 metadata description을 같은 visible summary에 맞췄다.
- VIRAL0 완료: 상위 5개에 실제 repository previous snapshot → current Verified v2 변화만 기록한 `/design-systems/<id>/evolution` SSG 페이지와 downloadable Markdown artifact를 추가했다. unknown history는 비교에서 제외한다.
- Reference share card 완료: `/api/og/reference?id=<id>&artifact=evolution`이 canonical colors, checked date, claim/source/surface/conflict 수와 기록된 before/after를 1200×630 PNG로 렌더한다. builder/detail/evolution Share 버튼은 curated reference면 evolution URL, 나머지는 detail URL을 복사한다.
- MEASURE0 완료: `bld_source_format_*`, `col_*`, `ref_share_copy`를 GA4 Admin dimension, Data API reports, digest에 연결했다. predeploy context/baseline/decision rule 정본은 `spec/v2-measurement.md`; 새 이벤트는 배포 전이라 로컬 digest에 `no data`가 정상이다.
- 실제 Home → Get Started → `/builder` → Toss → Share → evolution → canonical builder preview를 desktop/mobile 390×844에서 통과했다. 두 화면 모두 horizontal overflow 0, builder는 79/79 근거와 Source toggle을 보존하고 `Partial` 경고 chrome을 만들지 않는다.
- 실사용 중 Clipboard API가 권한 상태에서 무기한 대기하는 문제를 발견해 600ms timeout + DOM copy fallback으로 고쳤다. Share 성공 시에만 `Copied`와 analytics를 발생시킨다.
- evolution의 `Open in builder`가 Customize intro로 가던 문제를 고쳤다. 이제 empty overrides + default components의 결정론 cfg를 포함한 순수 canonical preview로 바로 진입한다.
- Toss evolution Markdown은 200 `text/markdown` attachment, 동적 OG는 `image/png` 1200×630, detail의 en/x-default/raw hreflang과 reviewed English summary도 실제 DOM에서 확인했다.
- 최신 gate: Web 745/745, TypeScript, AST/quality, touched-file ESLint, analytics scripts syntax/digest, `git diff --check`, production build 1,291/1,291 green.

- PAGE0-C 완료: builder Source panel에 DESIGN.md / Tailwind v4 / CSS Variables / DTCG JSON 탭, 포맷별 copy/download를 연결했다. canonical AST의 `frontmatter + high` 값만 직렬화하며 missing color/font/spacing/radius/shadow/component를 합성하지 않는다. builder override는 matching claim path만 바꾼다.
- Toss 실제 출력 검수: Tailwind/CSS에 12 colors, Toss Product Sans, type/spacing/radius/shadow만 존재하며 system-ui/destructive fallback 없음. DTCG는 JSON parse green, primary `#3182f6`, body 16px dimension, canonical component 6개를 OmD extension으로 보존한다.
- COLOR1-C 완료: `/collections`가 9 color concepts + 8 curated sets = 17 collection을 카드로 노출한다. 실제 primary-color samples, deterministic count, builder/directory/related 역링크와 `col_view`/`col_open`/`col_builder_click` analytics를 연결하고 sitemap에 index를 추가했다.
- Browser acceptance: `/collections` → Blue 130 → `/builder?color=blue` → Toss → 4 source formats/copy 동선을 desktop 1200px/mobile 390×844에서 통과했다. collection mobile 1-column, source tabs 전부 접근 가능, horizontal overflow 0, Partial warning 없음.
- 최신 gate: Web 732/732, TypeScript, AST/quality checks, touched-file ESLint, production build 1,285/1,285 green. 전체 ESLint의 기존 React hook 오류 5건은 이번 범위 밖이다.

- PAGE0-B section provenance 완료: builder의 실제 token-linked Color/Typography/Spacing & Shape/Components에만 canonical claim count·checked date·quality 배지를 렌더한다. Toss 기준 12/19/12/36 claims이며 Hero/Guidelines에는 근거를 합성하지 않는다.
- COLOR1-B 완료: Neutral/Red/Orange/Yellow/Green/Teal/Blue/Purple/Pink 9개 색상 collection landing을 canonical `primaryColor` 분류에서 결정론 생성한다. `/collections/color-blue` 130개와 `/builder?color=blue` 130개가 동일하며 collection CTA가 필터 상태를 보존한다.
- 색상 collection마다 동적 OG PNG(`/api/og/collection?color=…`)를 사용한다. 실제 primary color sample로 1200×630 렌더하며 invalid family는 404다.
- Browser acceptance: color-blue → builder Blue(130) → Toss preview, desktop 1200px/mobile 390×844 모두 horizontal overflow 0, provenance 4개, Partial 경고 chrome 없음. OG `image/png` 1200×630 green.
- 최신 gate: Web 724/724, TypeScript, AST/quality checks, touched-file ESLint, production build 1,284/1,284 green. 전체 ESLint의 기존 React hook 오류 5건은 이번 범위 밖이다.

- PAGE0 evidence disclosure 구현: canonical `verification_v2` graph를 Reference AST/API에 포함하고 builder step 3 우측 panel에 claim-level drawer를 추가했다. Toss 실검수 기준 79/79 claims, checked 2026-07-11, 5 sources, 5 surfaces, conflict 0, method/high confidence/실제 Toss·TDS URL이 표시된다. graph 없는 snapshot은 근거를 합성하지 않고 quality gap만 명시한다.
- Evidence graph 20개/278KB는 `reference-verification.generated.ts` server-only lane으로 분리했다. client-importable registry는 1.33MB 기존 크기를 유지하며 선택한 detail API에만 evidence가 직렬화된다.
- COLOR1 URL state 구현: `/builder?color=blue` 새 탭 hydration, preview URL의 `color=blue` 보존, preview → brands 복귀 시 filter/card set 보존이 모두 동작한다. 지원하지 않는 query 값은 분류하지 않는다.
- Browser acceptance: Home → Get Started → Blue(130) → Toss → Evidence open 및 direct shared URL을 desktop 1200px/mobile 390×844에서 통과했다. 모바일 DESIGN.md toggle 안에서 drawer 접근 가능하고 horizontal overflow는 0이다.
- 최신 gate: Web 713/713, TypeScript, AST/quality checks, focused ESLint, production build 1,274/1,274 green. 전체 ESLint는 기존 React hook 오류 5건만 남는다.

- `browser-harness` 0.1.5를 공식 `uv tool` 방식으로 재설치하고 PATH 선두의 깨진 `~/.browser-use-env/bin/browser-harness`를 새 실행 파일에 연결했다. doctor는 Chrome/daemon/active connection green이며 cloud auth는 optional이다. `scripts/check-browser-harness.sh` preflight도 green이다.
- 실사용 진단: Banksalad 공식 surface에서 loaded Pretendard weights, live CTA `#13BD7E`/41px, public route 후보를 즉석 검수했다. 기존 deterministic bundle은 5 surfaces/603 Pretendard usages/source URLs/coverage 66을 구조화하므로 collector는 fleet 본체, browser-harness는 SPA·overlay·interaction·responsive·conflict exception lane, in-app browser는 Home → `/builder` product acceptance로 확정했다. 정본은 `spec/reference-collection-final.md`와 `omd-add-reference` skill이다.
- Builder color concept discovery 완료: canonical `primaryColor`를 결정론 HSL family(Neutral/Red/Orange/Yellow/Green/Teal/Blue/Purple/Pink)로 분류하며 invalid/unknown은 family에 강제 배정하지 않는다. 각 chip swatch는 새 UI token이 아니라 실제 reference primary colors에서 파생한다. 단일 color family가 category/country/hot/search/sort와 합성된다.
- 실제 사용자 동선 acceptance: Home Get Started → `/builder` → Blue(130/400) → Toss → preview/export green. desktop 1200px, mobile 390×844에서 color row horizontal scroll, 2-column cards, preview sections, Copy/Download를 확인했다.
- 최신 검증: Web 712/712, TypeScript, 변경 파일 ESLint, Next production build 1,274/1,274 green. 전체 ESLint는 기존 builder/design-systems/design-wizard/live-proof/playground React hook 오류 5건으로 계속 red이며 이번 변경에서 새 오류는 없다.

- Top 20 full Verified v2 완료: Airbnb 25/25, KakaoBank 26/26, Vercel 25/25, ABLY 26/26으로 잔여 queue를 닫았고 quality fleet은 20 Verified v2 / 171 Partial / 209 Legacy다. 전체 700/700, TypeScript, quality/AST checks, context-depth 20/20이 green이다.
- Airbnb: current `#ff385c`를 identity accent로 유지하되 universal Reserve CTA, Luxe/Plus, generic shadows/semantics를 제거했다. Airbnb Cereal VF 973 + Cereal 68을 surface별로 보존하고 builder font registry의 Inter 대체 권고도 제거했다.
- KakaoBank: official `#FFE300` identity와 current public Pretendard Variable 645 uses를 보존하고 native Yellow CTA/transfer input/status badges를 제거했다. current public nav/service/resource components만 남겼다.
- Vercel: current home + Geist docs로 64/56/30px hierarchy, Geist/Geist Mono, `#ebebeb` grid와 official examples를 reconcile했다. interaction-heavy capture용 `--no-interactions`와 `--baseline-only` deterministic fallback을 collector에 추가했다.
- ABLY: current primary를 `#ff5160`로 교정하고 consumer Pretendard, Team Pretendard, Seller Square Noto Sans Korean을 분리했다. native commerce cards/prices/badges/tabs/sheets 합성을 제거하고 public consumer/Team/seller components만 유지했다.
- Builder acceptance: Home → Get Started → `/builder` → Airbnb 검색/선택 → preview 실제 동선 green. Airbnb/KakaoBank/Vercel/ABLY desktop + 375×812에서 intro/palette/typography/components present, horizontal overflow 0, retired palette values는 swatch로 노출되지 않는다.
- `applyOverridesToMd`의 Philosophy opt-out을 legacy Sources-comment 구조와 Verified v2 footer 구조 모두 지원하도록 수정했고, live mutable reference에 결합된 legacy component/style 테스트를 fixture/현재 contract로 분리했다.
- 로컬 `browser-harness` Python module/PATH 장애는 복구 완료했다. 이후 reference 작업은 `spec/reference-collection-final.md`의 collector-first + harness-exception 계약을 따른다.

- Airbnb next queue capture 완료: blocked main product routes는 evidence로 사용하지 않았고, 접근 가능한 official Newsroom 2026 release + Airbnb Design + Help 중심 4 surfaces에서 31 colors, 11 fonts, 49 variants, 2 interactions, coverage 100 확보. Airbnb Cereal VF loaded/high 973 uses, Cereal loaded/high 68 uses, locale variable families/italic declared-only. 다음 즉시 작업은 Airbnb canonical reconcile + deterministic acceptance다.
- Builder in-app hybrid acceptance 완료: Home → Get Started → brand selection → preview 동선에서 Wanted를 직접 통과했고 Channel Talk/Wanted/Figma/Linear desktop + 375×812 모두 Typography/Components present, horizontal overflow 0. Channel Talk Pretendard+Inter 분리, Wanted Pretendard Variable, Figma brand-only unavailable specimen, Linear Inter + commercial Berkeley Mono가 substitute 없이 렌더됨. 동일 hex의 서로 다른 semantic role이 React key 충돌을 내던 문제는 `category:name:hex` key로 수정해 sibling swatch 누락 가능성을 제거했다.
- Linear full Verified v2 완료: fresh home/method/customers/pricing capture, 85 colors, 3 fonts, 65 variants, 6 menu interactions, coverage 100. Inter Variable loaded 1,728 uses, Berkeley Mono 6 uses, Tiempos Headline 1 local use를 분리했다. public light-steel pill CTA와 embedded 6–8px product preview를 분리하고 lime/indigo hover/generic command palette/status 합성을 제거했다. 103/103 claims, 0 conflicts, standalone 25/25 green; fleet 16 Verified v2.
- Figma full Verified v2 완료: still-fresh May live computed proof(home/design) + 2026-07-12 official brand recheck, 3 surfaces/sources, 87/87 claims, 0 conflicts. July automated recapture는 글로벌/로컬라이즈드 경로 모두 artifact 생성 전 차단되어 값 승격에 사용하지 않았고 proof에 명시했다. public chrome을 black/white + role-local indigo로 정리하고 purple/content tile colors, generic input/card를 제거했다. standalone 25/25 green; fleet 15 Verified v2.
- Wanted full Verified v2 완료: product home/jobs/company + Montage home/foundations 5 surfaces, 7 sources, 82/82 claims, 0 conflicts, capture coverage 100. Pretendard Variable loaded 1,575 uses를 UI family로 확정하고 Wanted Sans Variable/Pretendard JP Variable은 declared-only로 분리했다. flat job-card의 12px thumbnail, header/filter, search dialog, Montage menu를 현재 컴포넌트로 reconcile했고 standalone 26/26 green. fleet 14 Verified v2.
- Channel Talk full Verified v2 완료: KR/US marketing, product updates/help docs, official rebrand 5 surfaces, 6 sources, 78/78 claims, 0 conflicts, coverage 100. current marketing primary를 `#242428`로 교정하고 Pretendard marketing과 Inter docs를 분리했다. legacy universal Cobalt/BildV5/generic form/synthetic states/motion은 machine tokens에서 제거하고 Bezier와 rebrand 맥락은 narrative evidence로 보존했다. standalone gate 26/26 green.

- Channel Talk fresh evidence 확보: KR/US marketing, major-update docs, plugin-help docs, rebrand article 5 surfaces, 42 colors, 12 fonts, 96 variants, 6 tab interactions, coverage 100. current marketing primary action은 `#242428`이며 기존 Cobalt `#329BE7` universal-primary 주장은 재검토 대상이다. KR/product-doc surfaces의 Pretendard, English docs의 Inter 계열을 분리 reconcile하는 단계에서 재개한다.
- SOCAR full Verified v2 완료: home/service/guide/brand-center/fare 5 surfaces, 5 sources, 67/67 claims, 0 conflicts, coverage 73. product web Pretendard 569 uses와 brand-center IBM Plex Sans KR를 분리하고, primary `#000000` 오판을 current `#0078ff`로 교정했다. fleet은 12 Verified v2 / 171 Partial / 217 Legacy다.
- Banksalad full Verified v2 완료: home/contents/loan/customer-safety/card-detail 5 surfaces, 7 sources, 66/66 claims, 0 conflicts, coverage 66. 현재 accent `#13bd7e`, action `#06a96c`, loaded Pretendard 603 uses, role-specific 6/16/24/full radius로 reconcile했다. 과거 `#04c584`, BM JUA, 2px default, input/chart/modal/state 합성은 canonical에서 제거했다. fleet은 11 Verified v2 / 171 Partial / 218 Legacy다.
- 최신 실제 사용량 기준 Top 20의 §1/§3/§10-13을 depth contract로 감사·보강했다. `npm run audit:context-depth` 결과 20/20 pass이며 공식 context source ≥3, font evidence 5-class, intro 80–160 words, narrative/voice/principle/persona 최소 깊이를 모두 통과한다.
- 기존 Verified v2 10개는 token/component claim을 보존했고, 나머지 10개는 context-depth ledger만 추가했을 뿐 Verified v2로 승격하지 않았다. 품질 manifest는 여전히 정확히 10 Verified v2 / 171 Partial / 219 Legacy다.
- Top 20 실행 정본은 `spec/top20-context-depth-execution.md`; 잔여 queue는 `artifacts/reverify/queue-top20-remaining.json`. 실제 migration 순서는 demand 기준 Banksalad → SOCAR → Channel Talk → Wanted → Figma → Linear → Airbnb → KakaoBank → Vercel → ABLY다.
- canonical `web/references`를 `design-md`, registry, quality manifest, Reference AST에 동기화했다. Web 700/700, TypeScript, AST check, context-depth 20/20 통과. 전체 ESLint는 이번 변경과 무관한 기존 React hook 오류 5건으로 red다.
- builder in-app G9는 브라우저 webview attach timeout으로 이번 배치에서는 미완료이며 다음 migration의 desktop+375px acceptance와 함께 재시도한다.
- 핵심 제품 철학 확정: oh-my-design은 reference delivery product이며 fallback generator가 아니다. `unknown means absent`는 가장 작은 미확인 field/item 단위로 적용한다. 검증된 sibling 값과 원본 설명은 보존하며, 검증된 값이 하나도 없는 group만 section 전체를 suppress한다.
- user-facing preview는 AST `origin=frontmatter + confidence=high` 값만 렌더한다. prose fallback, low-confidence token, generic hierarchy/spacing/radius/shadow/component synthesis를 차단한다. proprietary/unhosted font는 substitute 없이 family/specimen만 제거하고, 검증된 size/weight/line-height/tracking은 유지한다.
- Baemin canonical reference는 Verified v2이며 공식 Baemin 2.0 발표를 추가해 111/111 claims, 5 surfaces/sources, 0 conflicts다. WORK/`BAEMINWORK`를 현재 앱 family로 확정하되 browser-loadable source가 없어 metadata-only/unavailable specimen으로 렌더한다. System=baemin.com 실측, Pretendard=Woowa/font-page 실측, Hanna/Jua/Dohyeon/Euljiro/Kkubulim=공식 배포 brand asset으로 분리했다.
- Baemin §1/§3/§10-13을 공식 history/culture/fonts/license/rebrand 자료로 재작성했다. 첫 문단은 제품·구별되는 표현·현재 변화를 설명하며 audit disclaimer로 시작하지 않는다. 기존 palette 11, type metrics 8, spacing 7, rounded 4, components 7은 유지한다.
- reference pipeline의 새 context-depth gate를 `.agents`/`.claude`의 `omd-add-reference`와 `omd-migrate`, AGENTS.md, DESIGN.md, preview-v2 spec에 고정했다. official product-use / live surface-use / distributed asset / declared-only / unresolved와 specimen availability를 분리한다.

- 사용자-facing preview 정본은 Home `시작하기` → `/builder`로 확정했다. `/reference/[id]`는 catalog/detail 진단 consumer이며, shared `ReferencePreview`를 수정하더라도 acceptance는 반드시 builder 동선에서 수행한다(AGENTS.md/spec/preview-v2.md/.omd/preferences.md에 영구 기록).

- 로드맵 기준: `AST0-A0~A4`와 `CAP0` 첫 vertical slice ✅ code complete — API, 두 상세 라우트, token preview/font, builder, JSON-LD, sitemap, catalog가 하나의 Reference AST/quality truth plane을 사용하며 catalog MCP는 종료됐다.
- 계획 정본: `spec/v2-execution.md`; capture 계약: `spec/reference-capture-v2.md`; reverify 계약: `spec/reverify-pipeline.md`.
- 구현 진입점: `web/src/lib/references/evidence.ts`, `web/scripts/capture-reference-evidence.ts`, `web/src/lib/reverify/queue.ts`, `.agents/skills/omd-add-reference/SKILL.md`.
- API 기본값: AST v1 top-level projection + additive `referenceAst {schemaVersion, quality, foundations, tokens, compatibilityFallbacks, parity}` 계약.
- 롤백: `REFERENCE_AST_V2=0|false|off`면 `referenceAst` 없이 exact legacy payload를 반환한다.
- 검증 증거: 최신 Web 696/696, CLI 57/57, Web/CLI TypeScript, reference quality/AST checks, fixture precision/recall/F1 1.0/1.0/1.0, Next production build 1,274/1,274 pages, desktop+375px browser QA.
- `CAT0` core도 code complete: 전체 400개 검색/색인, computed quality badge/count, false Verified public copy 제거.
- `CAP0-A0~A2` 완료: MCP-free multi-surface collector가 raw computed color/type/spacing/radius, FontFaceSet+@font-face, component fingerprint와 hover/focus/pressed style snapshot, menu/dialog/form-error/tab/toast interaction을 한 bundle로 만든다. known fixture gate는 precision/recall/F1 1.0/1.0/1.0이며 CI 하한은 각각 0.95다.
- `R0` subscription-ready: 기존 provider-neutral/usage adapter에 `config/reverify-runner.codex-terra.example.json`을 추가했다. 로컬 Codex 0.144.1+, ChatGPT login, live `gpt-5.6-terra` + `xhigh` catalog를 선검증하고 API key/MCP/apps를 끈 뒤 같은 `omd:add-reference` 스킬을 실행한다. 현재 agent 실행 환경은 승인 후에도 nested Codex로 workspace 파일을 재전송하는 것을 정책상 거부하므로, KRDS는 현재 세션이 inline reconcile했다.
- KRDS Verified v2 완료: 8-surface capture(coverage 94), Pretendard GOV loaded usage 1,934, 51 fingerprints, 6 dialog expansions를 확보하고 machine token을 검증된 12 components로 축소했다. 최종 193/193 claims, 10 surfaces, 10 sources, 0 conflicts이며 fleet은 7개다.
- 29CM Verified v2 완료: home/BEST/29Magazine/Showcase/PDP 5 surfaces, coverage 82, 68 component variants. 84/84 claims, 5 sources, 0 conflicts이며 `#ff0066/#ff003c → #ff4800`, `#c4c4c4 → #dddddd`, 22px/700 → 23px/600, Campton canonical 오판을 교정했다.
- capture route config의 reference별 `{ routes, maxRoutes }`를 queue까지 연결해 KRDS의 8-surface budget이 다음 reverify에서 3으로 퇴행하지 않는다. `open-modal` trigger/dialog 분리, `lnb-toggle` 오탐, navigation tab 중복도 fixture로 방어한다.
- LINE Verified v2 + in-app hybrid 재검수 완료: fresh 8-surface collector는 50 colors, 10 fonts, 45 variants, 5 interactions, coverage 87. 공식 v3.5 color/type/box-button과 로컬 desktop+375px을 다시 대조해 100/100 claims, 0 conflicts를 유지했고 semantic `System`을 literal CSS family로 내보내던 preview 버그를 system stack 정규화로 교정했다.
- 여기어때 Verified v2 완료: product 2 + YDS 6.0 official 8 surfaces/sources를 reconcile해 75/75 claims, 10 surfaces/sources, 0 conflicts. capture coverage 95, Pretendard loaded 560, 30 variants; 공식 Button/Price marker/Search bar와 제품 관찰 filter/listing을 분리했다.
- 실데이터: Karrot·Toss·Apple·Kakao·Baemin·Naver·KRDS·29CM·LINE·여기어때가 `verified_v2`이며 현재 fleet은 10개다.
- `F20` 10개 standardized hybrid 재검수 완료: `config/hybrid-reverify-v2.json`이 official URL/capture budget/QA policy를 고정하고 `reverify:hybrid:report`가 evidence+in-app 결과를 합성한다. 결과 10 pass / 0 hold; desktop+375px 모두 overflow 0, font boundary pass.
- fresh capture 요약: Karrot 3/95, Toss 5/97, Apple 4/100, Kakao 4/93, Baemin 4/78, Naver 4/100, KRDS 8/99; LINE·여기어때·29CM은 같은 날 evidence와 in-app을 재대조했다. 29CM fresh rerun은 dynamic storefront에서 stall해 동일일 5-surface evidence를 유지했다.
- 최신 gate는 reference 10개 전부 green, Web 700/700, TypeScript, AST/quality 400, fixture F1 1이다. Baemin context-depth/WORK 회귀는 focused 452 tests와 full 700 tests를 통과했다. 이번 최종 G9 browser smoke는 인앱 탭이 닫혀 있어 pending이다.
- Terra/xhigh 실행 계약: `artifacts/reverify/queue-29cm.json`과 run packet이 `gpt-5.6-terra` + `xhigh` + `evidence_worker_only`로 생성됐고 기존 evidence를 5 surfaces/68 components/coverage 82로 validation했다. frontier worker 자체는 agent 정책상 실행하지 않았다.
- 다음 demand queue는 Banksalad → Channel Talk → Airbnb → Socar → Ably 순이다. 기존 `artifacts/reverify/queue-next.json`의 LINE/여기어때 entry는 완료된 historical queue다.
- `M0`/`M1`/`Q0`/`AST0`/`CAT0` 코드는 완료됐고 merge/deploy 및 clean-day 관찰은 대기 중이다.
- 작업 트리는 v2 측정/품질 변경과 사용자 소유 변경(`web/public/llms-full.txt`, `web/.sundae/`)이 함께 있으므로 관련 없는 변경을 되돌리거나 덮어쓰지 않는다.

## 다음 (즉시 착수 가능)

1. 신규 20 skills/18 agents가 들어간 final npm tarball을 다시 만들고 Node 18 clean install에서 Claude/Codex/OpenCode install·doctor·collector를 검증한다.
2. 미커밋 release candidate를 최종 diff review 후 커밋하고 `oh-my-design-cli@1.9.0`을 publish한다. 태그 release workflow의 별도 Node 18 standalone-collector gate를 반드시 통과시킨다.
3. web을 배포하고 Home gutter 0, 5-locale `/docs/{locale}/anti-slop`, locale switch, Copy page/llms direct copy, Showcase, Builder 연결을 production에서 smoke한다.
4. Applepresso의 historical 1.4 run을 보완할 current v1.9 full-trace 사례 1개와 실제 기존 제품 route rescue 사례 1개를 추가한다.
5. 배포 후 `docs_open → install_copy → doctor_ready → first DESIGN.md → verified route` activation funnel을 측정해 첫 7일 이탈 지점을 고친다.

## 막힘 / 대기 (없으면 "없음")

- 구현 차단은 없음. publish 전 final 20/18 tarball clean-install 재감사만 남았다.
- npm publish, git commit/tag, web deploy는 이번 작업에서 의도적으로 실행하지 않았으며 다음 단계의 외부 상태 변경이다.
- browser-harness는 이번 로컬 Chrome attachment에서 사용할 수 없어 브라우저 acceptance는 Playwright fallback으로 수행했다. packaged collector 자체의 system Chrome 실행은 Node 18 독립 감사에서 통과했다.

## 진행 중 레인 (병렬 작업 시에만)

| 레인/ID | owner | 상태 | 다음 체크포인트 |
|---|---|---|---|
| `AST0-A0` contract/fleet | Codex | ✅ 완료 | 400/400 + full regression/build green |
| `AST0-A1` detail API | Codex | ✅ 완료 | default AST + exact legacy rollback green |
| `AST0-A0M` distribution | Codex | ✅ 완료 | 400 raw/hash/count + portable AST parity; MCP archive only |
| `AST0-A2~A4` consumers | Codex | ✅ 완료 | pages/SEO/catalog/builder shared AST; `/api/mcp` 410 |
| `CAP0` evidence collector | Codex | ✅ A0–A2 완료 | 실제 사이트 interaction coverage 관찰 |
| `R0` reverify orchestration | Codex | ✅ subscription adapter + hybrid batch 10/10 | Banksalad discovery + capture/reconcile |
