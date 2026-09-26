# JOURNAL

## 2026-09-26

- **한 일**: 재부팅으로 잃은 프로브 6건 재실행 → pairs·hatena·sainsburys·bloomandwild·gousto·nhs 전부 verified(**472 / 178**). 위임 프로브 헤드라인 오답 3건을 재측정으로 잡음. 프로브 도구: 동의 배너 선거부·`:hover` 매칭 검사. 저작 도구를 레포로.
- **열린 것**: 모델 시험 4회차 결론 = sonnet 저작 불채택. JP 수율 17%(하한 15% 근접). 쿠키 배너 방식(거부 vs Accept all)은 오너 확인 대기.
- **한 일(2)**: JP6 스카우팅 2/12, **EU 스카우팅 7/12** → n26·sumup·wolt·qonto verified(**476 / 182**). 09-22부터 잠복한 tsc 오류(tokens.motion) 수정. 국가 FI·NL·SE·ES 추가. 패인 누적 스폰 실패 해결.
- **한 일(3)**: zalando·doctolib verified(**478 / 184**), check24 탈락 → EU 웨이브 1 = 6/7. 전환 도중 값 함정 2건 → PROBE_BRIEF 대기 규칙. EU 웨이브 2 스카우팅 12/18.
- **한 일(4)**: hm·flixbus·klarna·otto verified(**482 / 188**). 프로브 도구 사각지대(bg-image hover, focus-visible 미매칭) 수정 → 'hover 변화 없음' 39개 소급 스윕 위임. 위임 Aside 금지.
- **한 일(5)**: 스윕 정정 5개, getyourguide·alan·adyen verified(**485 / 191**). 도구 사각지대 3번째(가상 요소) 수정.
- **한 일(6)**: coolblue(Aside)·typeform·ikea verified(**488 / 194**). glovo 보류(WAF). EU 웨이브 3 스카우팅 12/20.
- **한 일(7)**: deutschebahn·storytel·cabify·malt·payfit verified(**493 / 199**) — 위임 에이전트 7개 무응답으로 전부 종료, 본 세션 직접 측정으로 전환.
- **다음**: 웨이브 3 나머지(oura·satispay·pennylane·contentful·klm·ing·deezer) 직접 → 가상 요소 스윕 직접 실행 → JP6 booth·coconala.

## 2026-09-23

- **한 일**: 자율 루프 회차 1–6. crowdworks·studysapuri·folio·loglass 등재(JP 웨이브 4는 스카우트 통과 3/3 전부 verified) → **462 / verified 168**. 위생 3건(velog·banksalad `ds:` 제거, adobe S1 명시). 프로브 도구 결함 3건 수정: opacity 미출력·배경만 비교(studysapuri 헤드라인 오답의 원인), `--text` 단독 검색 불가, `--vars`가 `@layer` 미순회. "변화 없음" 소급 스윕 7/7 유지.
- **열린 것**: spacemarket(로컬 429 → Aside), jal·kakaopay 스윕 미확인, UK 스카우트(scout-uk1) 결과 대기.
- **한 일(2)**: UK 수율 4/12(33%) → UK 웨이브 1: ft(Aside)·citymapper·ocado·theguardian 4/4 verified → **466 / 172**, 오늘 신규 10. 도구 개선 2건 추가(aria-label 매칭, 그려지지 않는 outline 무시).
- **다음**: JP 웨이브 5 + UK 웨이브 2 스카우팅(수율 유지되는 한 반복).

## 2026-09-19

- **한 일**: 후보 A(인덱스 전수 프로브) 완료. **대상 모집단이 429가 아니라 50이었다** — 353개는 `homepage`만 있고 `ds:` 86개 중 37개가 `type: brand`(트레이드마크·폰트·보도자료)라 컴포넌트 로스터를 주장하지 않는다. `type`은 프론트매터에 있었고 안 읽고 계획했다. 50개 중 27개 로스터 확인, 7개 경로 모양 보류, 16개 SPA(에이전트 몫). **이름 단위 결론: 발행 1,111개 중 레퍼런스가 부르는 것 308개(27.7%, 상한).** pega 42/45·yeogiotte 4/6로 검증됨. 스크립트 2개(`probe-design-system-index.mjs`, `compare-component-names.mjs`) 커밋(`7cebaacf`, `c6731b95`).
- **열린 것**: adobe(`/page/` 114개)·likelion(Storybook 쿼리스트링)은 진짜 로스터인데 자동 판정 보류 — 한 호스트씩이라 규칙 안 넓힘. 인덱스 없는 16개는 렌더된 내비 읽기 필요. 데이터 품질 2건: `zigzag`는 `type: system`인데 URL이 블로그 글, `banksalad`는 `type: brand`인데 GitHub 조직. B(`contains-prescriptive-placeholder` 39·`missing-product-surface-scope` 22)·C(krds 채택, B 뒤)·만료 벽(141건 전부 2027-01-10) 그대로.
- **한 일(2)**: A 보수 1차 — wise 55·alipay 72·channeltalk 60·patternfly 72·vercel 72·zendesk 55 = **386개 이름** 기록(`7c2496c6`, `0d0040d4`). 게이트 전부 통과, 티어·portable_core 불변, 원장 899→905. wise가 인용하던 `docs.wise.design`가 죽어 있었다(302→404, 리다이렉트 후 200이라 상태코드 검사는 통과).
- **한 일(3)**: A 보수 2차 — skyscanner 91+10·smarthr 61·uswds 47·ibm 39·govuk 37 = 285개, 누적 **11건 671개**(`ac211f6b`). 에이전트 5명이 55분간 못 써서 직접 마무리. skyscanner는 2KB 셸이라 브라우저 렌더 필요 — 이 카탈로그에서 프로브를 무력화하는 유일한 호스트. ibm만 1개를 클래스 결합으로 진짜 측정(`cds--accordion__heading`), uswds는 자기 소스에 인덱스를 2개월간 들고도 안 읽었다.
- **한 일(4)**: 로스터 **완료** — fetch 가능 5건(cloudscape 108·hashicorp 37·money-forward 25·kdan 9·hahow 4, `5bedd33e`) + 브라우저 9건(uber 89·wanted 53·microsoft 47·google 36·sanity 36·likelion 18·samsung 8 + adobe 114페이지 + servicenow 기록, `d5d1e246`). 누적 **25건 1,141개**. baseweb 91 주장 정정(`7e61175f`) — 레포 트리는 로스터가 아니고 문서 사이트가 89.
- **한 일(5)**: B 완료 — `portable_core` **383 → 440/440, 사유 0건**. 61건 중 **2/3이 체커 버그**였다: `unresolved`가 플레이스홀더 어휘와 스펙 사유 클래스에 동시 소속(스펙 자신의 예시도 탈락, AGENTS.md §3 다섯 줄 표를 가진 22건이 규칙 준수로 탈락) · scope 부정 판정이 "The green is a signal, not a surface" 같은 디자인 산문을 자기부정으로 읽음(허용 단어 목록을 세 번 넓혀온 이력). 어휘 대신 구조로 판정하도록 교체(`6dd29a4b`, `bae760bc`) + 진짜 `[FILL IN]` 36줄 제거(`17d6f7c3`).
- **한 일(6)**: **C 완료 — krds 채택**(`115cd802`). 5단계 완주, `coreStatus: verified`. accent 1건만 손실(오너 수용, 302건이 18가지 이름을 써서 매핑 불가). 폰트 패밀리·heading weight는 마이그레이터/어댑터를 모양 기반으로 고쳐 보존(`dbfb248c`, `1245b737`). **파리티 게이트가 조용한 0을 잡았다** — 첫 패키지가 verified인데 토큰 0개였고, 내 provenance 변환기가 토큰 자기 경로 결정을 안 낸 탓. 트랜잭션 게이트 셋은 통과시켰다.
- **한 일(7)**: 인덱스 없는 16개 완료(`cd11a528`) — 688개 이름, 누적 **40건 1,829개**. freee·remember는 Storybook `/index.json`, apple은 문서 JSON API로 도달. **socar는 브랜드 센터일 뿐 컴포넌트 시스템이 아니다**(네 번째 ds 오표기). toss는 Core v2 해시 결속 때문에 보류 — 재마이그레이션 필요, 실제 숫자는 43(리뷰 시작점의 "2 of 11").
- **한 일(8)**: **채택 절단 결함 해소** — 채택이 본문의 82%를 서빙에서 없애고 있었고(두 정본 다 로스터를 잃은 상태) 오너가 옵션1(예산 제거)을 택했다. 서빙 18%→85%, 로스터 23/42→42/42, toss·krds 재채택(`08cd0a4f`, `4d63413a`). 예산이 가리던 `[FILL IN]` 20건 + scope 오탐 2건도 해소. 스펙 §3 이탈은 `exceeds_spec_word_guidance`로 계수화(415/440).
- **한 일(9)**: 만료 벽 — 드리프트 첫 실측(`6cf1502f`). 69~71일 경과, 비교 가능 5건 중 **4건이 완전 동일**, 1건(toss)은 전면 개편. **표면은 조금씩 낡지 않고 안 바뀌거나 갈린다** → 날짜 만료가 양쪽에서 잘못된 도구. patternfly는 내 브라우저 다크 모드 탓 오판을 잡아 폐기.
- **한 일(10)**: 드리프트 **전수 완료**(`59d0a9f0`) — 164건 비교 가능 중 **154건(94%) 무변화**, 아티팩트 제외 실제 변화 **약 4%**. 2027-01 만료는 올바른 관측 ~135건을 무효화하고 다음 주 개편될 표면은 180일 통과시킨다 → **날짜는 양쪽에서 잘못된 도구**. 베이스라인 커밋(`data/surface-drift-2026-09-20.json`)해서 다음은 diff. 부수: inline·kakaopay·kktix 403, `fixture`는 localhost 픽스처 번들.
- **한 일(11)**: **만료를 변경 감지로 전환**(`3aa53f28`). 출처 단위 스윕 384건 중 359건(93%) 동일 → 시계가 캡쳐일이 아니라 확인일부터. 1월 벽 140건 → **45건만 잔류, 95건은 3월로**. 미획득 갱신 방지 3성질을 테스트로 고정. 부수: API 계약 테스트를 내가 `cd11a528`에서 깨고 `src/app`을 안 돌려 두 커밋 놓쳤던 것 수정.
- **한 일(12)**: 드리프트 프로브가 **채택 레퍼런스(krds·toss)를 못 읽고 있었다** — raw DESIGN.md + 키순서 박은 정규식. 정식 파서로 통일해 22개 출처 회수(20 unchanged). `unreachable` 15건 중 **13건이 404** → `dead`/`blocked`/`unreachable` 분리, 죽은 인용 12건을 `source_url_dead` advisory로 발행. 1월 45 → **42**. (`60c7d506`)
- **한 일(13)**: **write gate 완성**(`126e50b5`). 정적(`check-reader-blindness`, husky) + 행위(`catalog-integrity`) 2층. 눈먼 리더 7개 발견 → 6개 전환, 1개(라이터)는 거부하게. 먼저 **MCP 번들이 toss를 frontmatter 0키로 서빙**하던 실제 버그 수정(`eaceab89`). 게이트를 시험해서 내 설계 결함 5개 교정 — 파일 단위 판정·자기 문서 오탐·`gen-llms-full` false negative(발행 surface 잠복 버그 포함)·배포 스킬 사본 stale·`sourceCount>0`이 픽스처 테스트.
- **한 일(14)**: 확충 계획 수립(`docs/EXPANSION_PLAN_2026-09-20.md`). **Stage 5가 막혀 있음을 실측** — 네이티브 Core v2 레퍼런스는 리더 12개 전부가 던진다(legacy 복원이 마이그레이션 산물에 의존). 선정 기준 답: 기존 440의 55%는 기록된 근거 없음.
- **한 일(15)**: **Stage 5 읽기 경로 해제**(`778907ea`). 네이티브 Core v2는 `extensions["dev.oh-my-design.catalog"]`로 카탈로그 메타데이터를 선언하고, 리더는 reconstruct(마이그레이션·해시검증·우선) / project(네이티브)로 갈린다. **웹 소비자는 이미 열려 있었다**(확인 후 진행). 내 실수 2건을 clean worktree로 잡음(픽스처 gitignore·테스트가 빌드 산출물 읽음).
- **한 일(16)**: **Stage 5 열림**(`39c94ea3`). "네이티브 writer가 없다"는 **내 오판** — 기존 체인이 `--migration-report` 없이 그대로 동작한다(끝까지 돌려 확인: 확장 보존·projected·웹 verified). 절차 문서화 + 테스트 3건(확장 보존을 아무도 검사 안 하고 있었다). 번들 churn 원인 규명: `npm pack`→`tsup`이 추적 파일을 비결정적으로 재생성 → `activation-reuse` 플레이크.
- **한 일(17)**: **오너 결정 = 목표 700**, CN은 게이트 확장 후. **생성기 완성**(`e5087982`) — 매핑은 기존 매퍼에 맡기고 마이그레이션→카탈로그 확장 교체만 한다. 돌려보고 2건 수정(provenance 스키마가 매퍼≠컴파일러 · 스테이징 디렉터리). `added` 필수화로 krds를 즉시 거부.
- **한 일(18)**: **2단계**(`942c5067`) CN을 proof gate에 넣고, 중국 플랫폼이 하나도 없어 남의 글이 브랜드 증거로 집계되던 것 차단(기존 0건 영향). **3단계**(`59678351`) 분류 enum 단일화+CI 강제, 흘러나온 13건을 카탈로그 선례대로 접음. fingerprints는 **낡은 사본이 아니라 별개 필드**임을 실측하고 손대지 않음.
- **한 일(19)**: **4단계 어휘 재조사 완료**(JP 7·TW 13·CN 12 verified). 세 시장이 다르다 — JP·TW는 정부/대학뿐 민간 0, **CN만 민간 대기업이 발행**(텐센트 ISUX 브랜드북 14권). 인용 13건 직접 재검증(10확인·2미도달·0반증). **방법론: UA 단 curl로도 부족** — 실제 브라우저에서만 열리는 find가 있다(재현함). 시장 불일치 캡쳐 4건 별건 발견(`4c7714d5`).
- **한 일(20)**: 오너 결정 **C(깊이 노출)** 구현(`114fe953`). 재보니 문제는 카탈로그 전체가 아니라 **verified 티어 안**이었다 — 인터랙티브 0인 36건이 **전부** verified_v2이고 하위 티어엔 0건. 주장을 적게 할수록 증거 그래프 완성이 쉬워 뱃지가 싸진다(클레임 35 vs 62). 상세·API·목록 3개 표면에 깊이 노출, 퍼널 렌더 검증.
- **한 일(21)**: 죽은 인용 12건 조사 — 전부 실브라우저 404 확인, 10건은 클레임 0(그래도 기록이라 안 지움·게이트도 안 약화), 사이트 nav로 대체 URL 3건 확보. **복구했다가 revert** — `evidence-integrity`가 `captured > checked`를 잡았고 옳다. **재검증 큐지 인용 패치가 아니다.**
- **한 일(22)**: 출처 **930개 전수 도달성 조사**(`19618127`). 드리프트가 베이스라인 있는 400개만 봐서 죽은 인용을 12건으로 과소 보고하고 있었다 → **실제 22건**. 2단계(curl→실브라우저)가 핵심 — 1단계 127 실패 중 **95건(75%)이 브라우저에선 정상**. advisory 11→17 레퍼런스. resend 3건은 Next.js 해시 자산이라 **인용 불가능한 종류**.
- **한 일(23)**: patternfly·hyundai **정식 재검증**(`148b0f23`). 출처 14개 전부 실브라우저 확인 후 `checked` 갱신 — 첫 시도를 게이트가 거절한 이유(`captured > checked`)를 제대로 해소. URL 5개 재지정(전부 사이트 nav에서 발견, 사라진 건 없음). 둘 다 1월 → **2027-03-19**, advisory 17→15, 1월 벽 43→41.
- **한 일(24)**: 웨이브 1 Serendie **실측 완료**(토큰 373개·3계층·버튼 상태) — 그러나 About 페이지가 "범용 기반 + 도메인별 VI를 위에 올림 + 사외 누구나 사용"이라 **루브릭의 라이브러리 배제에 걸린다.** 본문 쓰기 전 보류하고 오너 판단 요청. 측정 중 내 오류 2건(hover 눌러붙음·docs 크롬을 컴포넌트로 오인) 자체 발견·재측정.
- **한 일(25)**: **웨이브 1 완료 — serendie 추가**(`81e048a9`), 카탈로그 첫 **네이티브 Core v2** 레퍼런스. 441개·verified 142. reason 0·advisory 0, 클레임 54/54, 컴포넌트 1·인터랙티브 1·상태 1. 범주는 **규칙**으로 해결(`c40bfb0e`, 넌센스 경로 대조군으로 검증, CN 기각 10건 유지). 게이트 4개가 실제 결함을 잡았고 내 생성기 구멍(`ds` 미검사)도 드러났다. 낡은 하드코딩 카운트 3곳 count-agnostic화.
- **한 일(26)**: 웨이브 1 잔여 조사 — PayPay·AntUI는 **신규가 아니라 깊이 보정**. alipay의 라이브러리 출처 의심은 **세어보니 클레임 0개 근거**라 무혐의. **paypay 스타일가이드는 캡쳐 함정** — 커스텀 프로퍼티 577개 중 547개가 Element UI, 페인트 1315×#2C3E50 vs 10×PayPay레드, 내용은 이미지 33장. 오늘 세 번째 같은 계통(cookpad·Serendie·paypay).
- **한 일(27)**: 죽은 인용 재검증 완료(`6a1934e0`) — 출처 115개 전수 확인, thumbtack 복구, **6건은 복구 불가이고 1월 강등이 옳다**(페이지가 옮겨간 게 아니라 없어졌다). 계측기 교훈 추가: **페이지는 브라우저·자산은 curl**(폰트가 브라우저에선 ERR, curl로 200). advisory 17→14.
- **한 일(28)**: 'UI font unresolved'를 파보니 **UI 갭이 아니라 투영 갭** — `typography_assets.assets` 슬롯이 스키마에 있는데 마이그레이터가 roles만 채워서 **Core 그래프 3개 전부 브랜드 서체가 없다**. krds·toss는 레거시 복원본이 가려주고 있었고 serendie는 카탈로그 확장에만 있다. 폴백으로 덮지 않고 기록(투영 변경 + 재채택 3건 + source_status 판단 필요).
- **한 일(29)**: Core 상세 'UI font basis' 수정 — **그리고 내 앞선 진단이 틀렸음을 정정**. `fontRoles[0]`만 보고 "그래프에 서체가 없다"고 했는데 family는 **body 롤에** 있다(앞선 세션이 toss 때문에 일부러 만든 동작). 실제로는 `detail-view`가 AST만 읽던 한 칸 문제. `unresolved → repository fact`, 레거시 불변, confidence는 지어내지 않음.
- **한 일(30)**: paypay 깊이 보정 — **실측 후 손대지 않기로**(`3d9d7c37`). 선언 팔레트 19개 중 웹 관측 5개인데 **그건 틀린 게 아니라 앱 값**이다(웹은 앱 시스템 검증 표면이 아님, 제품 웹 표면 없음). 게다가 `verified`를 올리면 measured-tokens 컷오프 안으로 들어가 **grandfathered `prose-derived`가 차단 사유가 된다** — 부분 재검증은 강등이다.
- **한 일(31)**: JP 깊이 재개 — 네임스페이스 측정으로 **순위를 뒤집고**(smarthr 문서사이트는 Tailwind 355/398, pixiv 제품은 charcoal 328) pixiv를 **`legacy_snapshot` → `verified_v2`**로. 선언 24색 중 머티리얼 기본값 3개(#4caf50·#ff9800·#ffb300)를 포함해 15개가 근거 없음 → 내리고 실측으로 재작성. claims 120/120, stated 5. 카탈로그 **143 verified**.
- **열린 것**: pixiv 홈이 로그인 월이라 §5·§8(레이아웃·브레이크포인트)은 여전히 이전 산문 — `.verification.md`에 한계로 명시.
- **한 일(32)**: smarthr도 완주 — `legacy_snapshot` → **`verified_v2`**(claims 124/124, stated 6). 선언 `button-primary #00C4CC`는 **브랜드색이지 버튼색이 아니었고**(실제 `#0077c7`), 시맨틱 4색은 **계열째** 틀렸다(success는 초록이 아니라 틸 `#0f7f85`). family 토큰이 없어 서체는 비웠다. 카탈로그 **144 verified**.
- **한 일(33)**: cybozu — 선언 20색이 두 표면에서 **전부 유효**함을 재확인하고 `verification_v2` 부착(evidenceCoverage **0 → 1.00**). 다만 라이브 마케팅 페이지에서 잰 상태값이 **크롬 기본 포커스 링(#2693ff)**을 내놓아 기록하지 않고 `partial` 유지. kintone-ui-component(파랑 #3498db)는 **세 번째 증거 도메인**이라 미반입.
- **한 일(34)**: 셀렉터 depth UI — Depth 정렬 + STATES 뱃지. **뱃지를 개수가 아니라 `verified_v2`에 걸었다**(441중 20건): `stated>=4` 17건 중 verified는 3건뿐이고 최상위 github(37/15/14)이 legacy라 개수로 걸면 **산문에 뱃지를 달 뻔했다.** 기존 접근성 결함 3건(HOT 2.22 · 2.47 · NEW 2.93)도 불투명 베이스로 전부 AA 통과.
- **한 일(35)**: 표면 발견 스윕 실행(1,782 프로브·4단계) — **8건 확보**(asana 스토리북 596 스토리 포함). 더 중요한 건 **계측기 검증**: 알려진 정답 3개를 전부 놓친다(DS 호스트는 브랜드가 아니라 *시스템 이름*을 땀). 264건은 "없음"이 아니라 **"이 방법으로 안 보임"**. 다음은 GitHub org 경유.
- **한 일(36)**: 스윕이 찾은 `storybook.asana.com`(526스토리)으로 asana 처리 — **evidenceCoverage 0 → 1.00**(160/160), stated 6/8. 6월 값이 **18/20 정확**했고(이름만 달랐다: sky=blue 0, violet=blue 1000) 버튼 hover가 전부 published black 램프였다. **그래도 partial** — 인터랙티브 2개(hero-accent는 사이트에서 사라짐, input은 인증 화면)에 관측 상태가 없다.
- **한 일(37)**: ①b GitHub 스윕 — org 69/297 → design repo 40 → **스토리북 2건**(실질 신규 1: sendbird 56스토리). **가설이 틀렸음을 측정**: ds.url 선언 비율이 verified 46% vs 미검증 7%(6.5배) — 카탈로그가 디자인 시스템 운영 회사를 이미 다 걷어갔다. 도달 가능은 297이 아니라 **~9건**. `web/dbg.tmp.mjs` 삭제.
- **한 일(38)**: sendbird — UIKit 스토리북(90 토큰)으로 **`legacy` → `partial`**, 증거 **0 → 1.00**(137/137), stated 7/10. 6월 값이 **정확히 맞았고**(10/16이 published 토큰) `prose-derived` 라벨도 옳았다(소스 전사 → 오늘 렌더 측정으로 `live-extract`가 됨). **구조적 발견: 완전한 컴포넌트 라이브러리로도 verified에 못 간다** — 상태 없는 3개가 전부 마케팅 컴포넌트라 UIKit이 안 다룬다.
- **한 일(39)**: CN 확충 착수 — 15개 실측→5건 선정(`docs/CN_WAVE1_CANDIDATES_2026-09-22.md`), **weibo 신규 등재 · 442 refs / 145 verified**. claims 54/54, **reasonCodes·advisoryCodes 모두 0**(세션 유일). 선언 토큰 `--w-b-flat-primary-bg-hover #ff5900`과 실측 hover가 독립 일치. GitHub prettylights 테마가 섞여 있어 네임스페이스로 걸러냄. xiaomi는 **한국 사이트를 서빙**해 탈락, tencent/byd는 WordPress/Element UI라 탈락.
- **한 일(40)**: ctrip 등재 — **443 refs / 146 verified**, claims 63/63, 3/3 stated, **무결함 2연속**. **3계층 토큰 시스템**(core 286 / smtc 86 / comp 30) 발견 — 카탈로그 최고 성숙도. 다만 **자기 홈페이지가 시스템 밖**(`#0086f6`·`#f2f8fe`·`#2953d6`은 미선언) — 양쪽 다 기록. 브라우저 기본 링크색 `#0000ee`/`#ff0000` 배제.
- **한 일(41)**: **CN 웨이브 1 완료 — 5/5 전원 verified, reasonCodes 전부 비어 있음.** 441→446, verified 144→149, CN 5→10. huawei·douyin은 **컴포넌트 0 선언**으로 verified(측정한 만큼만 선언이 정상 경로임을 확인). ctrip 3계층 토큰 시스템, douyin `gift-*`/`pk-*`, zhihu `_light`/`_dark` 쌍 + VIP/SVIP 브랜드색 + **oklch 원문 기록**.
- **한 일(42)**: **게이트 라이브 버그 수정** — `zhihu.com`이 `PLATFORM_HOSTS`라 **zhihu 자신의 홈페이지가 zhihu의 proof gate에서 탈락**했다. `isBrandOperatedAccount`에 레퍼런스 자신의 homepage 호스트 예외를 좁게 추가. `note`·`velog`가 이미 같은 모양.
- **한 일(43)**: 측정 방법 리서치 — **내 포커스 측정이 틀렸음을 실측**(마우스 press 뒤 `.focus()`는 `:focus-visible`을 죽인다). 레포 프로버가 9/17부터 경고하던 것. "focus 변화 없음" 6건 무효, 긍정 관측은 유효. Shadow DOM·Typed OM·컴포넌트 스코프 토큰은 실측으로 **불필요 판정**.
- **한 일(44)**: **ego lite 도입**(오너 승인) — 앱·CLI·스킬 설치 완료, **온보딩만 오너 대기**(Chrome 로그인 데이터 가져오기는 오너 결정). 하네스 `probe-surface-ego.js` 작성: Tab 기반 포커스 · 선언/렌더 이중 덤프 · 네임스페이스 미병합 · **토큰·기하만 추출하는 개인정보 규칙을 코드로**.
- **한 일(45)**: ego lite **known-answer 검증 통과**(토큰 4/4, own 309=309). 첫 실행 불일치는 **OS 다크모드 상속** 때문이었고 Playwright dark가 바이트 단위 재현 → 엔진 동등 확인. `page.cdp(Emulation.setEmulatedMedia)`로 스킴 강제.
- **한 일(46)**: **로그인 월 계획 무산** — 표적 5곳 전부 로그아웃(오너가 CN 계정 없음). 계정 생성은 안 한다. ego lite 이점은 오너가 실제 쓰는 사이트에 한정.
- **한 일(47)**: **focus 주장 6건 정정**(10곳). 사후 확인이 진단을 확정 — 잡은 건 전부 폼 컨트롤/평범한 `:focus`, 놓친 건 전부 `:focus-visible` 버튼.
- **한 일(48)**: 샌드박스 복구 후 재개. **CN 웨이브 2 — deepseek 등재**(447 refs / **150 verified**, 59/59, 2/2 stated). `--ds-*` 82개로 **CN 중 가장 완전한 시스템**이고 **유일하게 서체 토큰 선언**(DM Sans). 토큰↔렌더 일치 재확인. **포커스 링을 처음 관측**(`#005fcc`, fv=true) — 순서 수정이 동작한다.
- **한 일(49)**: 후보 3건 검증 탈락 — **shein은 `kr.shein.com`(한국 사이트)로 리다이렉트 + 본사 싱가포르**라 CN 아님 · zhipu 타임아웃 · iqiyi 컨트롤 0. 웨이브 2는 웨이브 1보다 얇다.
- **한 일(50)**: **taobao 등재** — 448 refs / **151 verified**, 43/43, 2/2 stated, reason·advisory 둘 다 0. **첫 CN 커머스 레퍼런스.** `--tbpc-*` 28개, `world.taobao.com`이 키·값 바이트 동일로 교차확인. nonsense-path가 `error.taobao.com/**tbpc**/error.html`로 가서 네임스페이스를 확인해줬다.
- **한 일(51)**: **focus 측정법 2차 결함.** mousedown 한 번이 페이지 전체 modality를 바꿔서 **다음 컨트롤의** `.focus()`가 `fv=false`가 된다. 컨트롤 단위 순서로는 부족 → rest·focus 전체 먼저, hover·press 나중의 2-패스로 교정하니 둘 다 `fv=true`. **weibo의 focus 주장 재확인 필요(미처리).**
- **한 일(52)**: taobao 두 버튼은 4개 상태 17개 속성이 전부 동일 — 상태 스타일이 **없다**. `:focus-visible`=true인데 `outline-style: none`. 관측으로 기록. 티어 카운트 5개 로케일 수동 동기화(7번째) — 다음 커밋에서 `check-counts`에 넣는다.
- **한 일(53)**: **weibo focus 재측정** — 유보를 실측으로 교체. 두 컴포넌트 다 `:focus-visible`=true인데 속성 변화 0(`outline-style: none`). claims 54→56. hover·pressed는 이번엔 `:hover`가 안 잡혀 **건드리지 않았다**(재현 실패는 반증이 아니다).
- **한 일(54)**: **3차 결함 — 인덱스는 엘리먼트가 아니다.** weibo 홈은 리렌더링돼서 셀렉터 재평가가 다른 노드를 준다(컨트롤 [4]가 클래스·크기·배경까지 바뀜). element handle 고정 + 매 판독 동일성 검사로 교정. 측정법 문서 §2·§7 갱신.
- **한 일(55)**: **티어 카운트를 게이트에 넣었다** — `check-counts`+`sync-catalog` 양쪽에. EN 전위/CJK 후위 양방향 규칙, `(?![\d/-])`로 `legacy 13/15/16-section` 오탐 차단(`\d` 빠지면 "legacy 1"로 백트래킹). cli-docs.ts 추가 → 11개 표면. 3곳에 드리프트 심어 탐지·치유 확인.
- **한 일(56)**: **오늘 커밋한 deepseek `#005fcc` 포커스 링이 크롬 기본값이었다.** 작성자 스타일시트 없는 페이지로 컨트롤을 돌려 확인(`outline: rgb(0,95,204) auto 1px`, 라이트·다크 동일). 토큰 삭제 + 문서 정정. **`auto`는 작성자가 안 쓴다**가 판별 규칙. `catalog-integrity`에 UA 기본값 검사 추가(전 카탈로그 스캔: deepseek 1건뿐).
- **한 일(57)**: negative focus 3건 처리 — **pixiv** `rgba(0,150,250,.32) 4px`(세 버튼 동일 → Charcoal `FocusRing` 관측 확정, 120→123) · **zhihu** 2겹 oklch 링(54→56) · **asana** UA 링이라 토큰 없음(토글 `#24a651`은 `solid 2px`로 진짜 확인).
- **한 일(58)**: **또 레포 도구를 안 썼다.** `probe-component-states.mjs`는 상태마다 페이지를 새로 열어서 modality 오염이 애초에 불가능한데, 오후 내내 그 열화판을 손으로 재발명했다. 그 스크립트도 3곳 고침(shadow 절단 · 상태 하나 실패가 전체를 죽이던 것 · 요소 못 찾은 상태가 조용히 사라지던 것).
- **한 일(59)**: **CN 웨이브 3 — wps 등재**(449 / **152 verified**, 85/85, 4/4 stated, reason·advisory 0). `--kd-*` 293(이식 가능한 킹소프트 시스템) + `--wps-*` 146(이 페이지)로 층이 갈린다. **`ai` 색 가족이 1급**, 헤드라인 CTA가 **에러 레드**고 토큰↔렌더 3단 전부 일치.
- **한 일(60)**: `--kd-`가 **Kingdee의 KDesign이 아님**을 확인(이름이 같다) — 두 후보 사이트에 겹치는 토큰 0개 + 값이 WPS 브랜드색에 배선 + 렌더 클래스 `kdv-button`. 넌센스 경로는 진짜 404.
- **한 일(61)**: 후보 30개 중 1건 생존. **새 함정 2종**: ① **nio** — `--nio-*` 3206개가 전부 `--nio-web-register-login_lego-*`, **접두사가 브랜드여도 라이브러리다** ② **hisense** — 541개가 손으로 쓴 것처럼 보이지만 **아무 경로나 홈을 주는 캐치올**이라 보류. 로케일 함정 4건(xiaomi/popmart/insta360은 한국 사이트, feishu는 larksuite).
- **한 일(62)**: **카운트 게이트가 자기 함정을 잡았다** — `check-counts`와 `sync-catalog`가 같은 `reference-quality.json`을 읽어서 **같이 틀리고 ✓**를 냈다. 그 파일의 `count`가 디렉터리 수와 다르면 실패하는 가드 추가. 재실행 시 3파일 21곳 자동 수정.
- **한 일(63)**: 앞 커밋 메시지의 "987 tests pass"는 **틀렸다 — 987/988이었다.** `"448 quality-graded DESIGN.md references"`처럼 숫자와 명사 사이에 낀 어구를 references 규칙이 못 잡아서 **11곳이 5개 로케일에서 448에 멈춰 있었다.** `cli-docs.test.ts`가 잡았지만 **husky는 테스트 3개만 돌려서** 커밋을 못 막았다. 다섯 어구를 양쪽 게이트에 열거. **988/988.**
- **한 일(64)**: **A단계 완료 — asana·cybozu·sendbird 셋 다 verified**(449 / **155**). `interactive_state_missing`이 카탈로그에서 0건이 됐다. 셋이 전부 다른 결말: cybozu 4개는 **다 있었고**, asana의 마젠타 버튼은 **사라졌고**(토큰 `--fuchsia-700`은 살아 있음), sendbird는 2개가 **재디자인** 1개가 **오명명**(newsletter라던 게 placeholder "Search…"인 사이트 검색창, 0×0).
- **한 일(65)**: **`#2693ff`는 cybozu 것이다** — 대조군에서 UA는 focus에 `color`/`border-color`를 안 건드린다. 이전 메모("브라우저 기본") 정정. kintone은 반대로 **색은 작성자(`#ffbf00`) 모양은 UA(`auto`)**.
- **한 일(66)**: **자동 포커스된 컨트롤에는 rest가 없다** — asana 로그인 입력이 4상태 전부 `:focus-visible`로 읽혔다(상태 없는 것처럼 보임). 프로브에 blur 추가. 그 외 `--locale`·`--text`·`--wait`·rest에서 border/outline 항상 출력 — **전부 쓰다가 나온 결함 5건.**
- **한 일(67)**: **B단계 — JP 후보 12건 중 3건 생존(25%)**. CN 웨이브 3의 3.3%와 비교하면 시장 이동이 맞았다. 임계치 20% 초과 → JP 웨이브 진행. 남은 후보: **base**(`--ease*10`, 모리사와 TazuganeGothic), **chatwork**(자체 서체 Chatwork Sans).
- **한 일(68)**: **nulab 등재** — 450 refs / **156 verified** / **1000 sources**. 116/116, 6/6, reason·advisory 0. **제품 하나당 패밀리 하나**(7제품 × 4단 버튼 + 배너 쌍)로 이 카탈로그에서 가장 선명한 다중 제품 시트. **포커스 링 하나(`#cbc2e8` 4px)가 nulab.com·backlog.com 양쪽에서** 렌더되고, 채워진 버튼엔 outline 조용한 컨트롤엔 box-shadow.
- **한 일(69)**: **`conflicts`에 넣었다 뺐다** — 회사 시트의 Backlog 초록 vs backlog.com 버튼 주황은 **불일치가 아니라 서로 다른 두 가지의 각각 맞는 측정**이다. 넣어두면 없는 불일치로 등급이 막힌다. 산문으로 경고하고 필드는 비웠다.
- **한 일(70)**: **base 등재** — 451 / **157 verified**, 88/88, 3/3, reason·**advisory 둘 다 0**. **`motion_value_unsourced`(카탈로그 1순위 advisory 261건)를 토큰으로 해결한 첫 레퍼런스.** 이징 10개가 각각 용도로 이름 붙어 있고, **그중 `--duration-hover`+`--ease-link`가 렌더된 CTA의 `transition`에서 그대로 잡힌다.**
- **한 일(71)**: `thebase.com`은 **캐치올**(`/zz-…`가 홈) → 이 호스트의 다른 경로는 인용 안 함. 제2 출처는 다른 호스트 binc.jp(모리사와 Tazugane를 실제로 칠한다). hisense를 보류한 것과 갈리는 지점.
- **한 일(72)**: **만료 테스트가 자기 의도와 반대로 실패했다** — `count(...) <= 11`은 **생존자**를 세는데, 주석의 의도는 "7월 배치가 사라졌는가"다. 생존자는 verified가 늘 때마다 증가하므로 **장려하려던 일 때문에 터진다.** 의도를 직접 재도록 교체(캡처 트랙 이전 증거로 생존한 건 0). **990/990.**
- **한 일(73)**: **chatwork 등재 — JP 웨이브 1 완료**(452 / **158 verified**). 생존 3건이 **3건 다 등재**됐고 셋 다 reason·advisory 0. RISE는 **토큰 20개 중 16개가 타입**이고 간격·radius·그림자·모션이 아예 없다. **자체 서체를 4웨이트 4토큰으로 선언**(L/R/B/EB), 실측 318/319.
- **한 일(74)**: **`#645b4a`를 세 번 확인했다** — 빨강 브랜드에 올리브 hover는 전이 중간값 모양이라 ① 새 페이지 재현 ② `transition: all`은 0s ③ **스타일시트 9곳**(`.btn--secondary`)에서 확인. 작성자 값.
- **한 일(75)**: **Marketo 폼 분리.** 첫 패스에서 `.mktoButton`을 Chatwork CTA로 쟀다 — 230×45·hover 90% 축소·`#3c480e`·`#bf0000`·페이지 유일 box-shadow까지 전부 Marketo 것. 조상 클래스로 걸러냈다. Chatwork 자신의 primary는 앵커 안 `<span>`이라 포커스 불가.
- **한 일(76)**: **JP 웨이브 2 프로브 12건 → 유효 3건(25%, 웨이브 1과 동일 수율)**. bizreach는 `--mantine*349`(프레임워크), hennge·atamaplus·kaonavi는 WordPress 우세, medley·shiseido·squareenix는 토큰 0.
- **한 일(77)**: **smartbank 등재**(453 / **159 verified**, 67/67, reason 0). **카탈로그에서 가장 완전한 토큰 시스템** — 이름 붙은 색상군 9×12단 110개 · Material 3 모양 시맨틱 76개 · **이모지 색 가족** · **발행 카드별 색 가족 + 그라디언트 18개** · **서체를 web/ios/android로 쪼갠 시트** · line-height 3밀도×12단 행렬 · duration 17 + easing 4.
- **한 일(78)**: **제품면(onebank.jp)이 칠하는 색 8개가 전부** 회사 사이트 토큰으로 해소됐다 — 마케팅 스타일이 아니라 제품 시트라는 증거. **컴포넌트는 0개로 선언**(컨트롤이 전부 투명 CSS-module 래퍼, 4상태 변화 0, focus는 크롬 기본) — huawei·douyin과 같은 길. `primary_color`는 브랜드 토큰이 없어 **판독임을 §2에 명시**.
- **한 일(79)**: **caddi 등재**(454 / **160 verified**, 90/90, 3/3, reason·advisory 0). **완전히 사각**(radius 토큰 4단이 발행돼 있고 안 쓰인다), **간격이 방향별 4가족**(`inline`/`stack`이 **같은 숫자** — 구분이 값이 아니라 의도), 색 25개 이름에 **값은 9개**, 인터랙션 언어가 **뒤집기 한 동작**.
- **한 일(80)**: caddi의 **`--label-*` 46개가 UI 문구를 담은 토큰**이다. 결함 2건 그대로 기록 — `--label-mission`이 `"文字列値"`(플레이스홀더), 슬러그 망가진 이름 6개. 토큰으로 안 올렸다. `--font-family-display`는 선언만 되고 로드 안 됨 → 산문에만.
- **한 일(81)**: **jal 중단.** 7가지 조합(HTTP2 on/off × URL 4종 · 재시도 · 셀렉터 대기 · 레포 프로브) 전부 `ERR_HTTP2_PROTOCOL_ERROR` 또는 70초 타임아웃. 404 경로만 뜬다. **초기 1회 성공 판독은 진짜지만 재현 불가** — 재현 못 하는 증거로 레퍼런스를 쓰지 않는다. 더 밀면 우회가 된다.
- **한 일(82)**: **Aside Browser를 Tier 2 수집기로 채택**(`docs/ASIDE_PIPELINE_2026-09-22.md`). 로컬 헤드리스가 7조합 전부 실패한 `jal.co.jp`가 **첫 시도에 열렸다** — 봇 방어가 헤드리스 지문 기준이었다. known-answer 검증 통과(**자체 토큰 416개 정확히 일치**; 총계는 Tailwind 레이어 차이로 445 vs 479 — **총계 말고 자체 토큰으로 비교**해야 한다).
- **한 일(83)**: **`exec`(에이전트)는 증거원에서 배제.** 측정 위임하면 오늘 잡은 다섯 건을 전부 놓친다. **JAL에서 즉시 재확인** — 최다 렌더 본문색 `oklch(0.145 0 0)` ×150이 JAL이 아니라 **shadcn 기본값**이다. 토큰 실측: 로컬 실패 4,000→0, Aside 5,600→verified 1건. **단가는 같고 헛돈을 안 쓴다.**
- **한 일(84)**: **jal 등재**(455 / **161 verified**, 95/95, 2/2, reason·advisory 0). **칠하는 대상별 4가족**(surface/text/icon/strokeColor) · **언어별 서체 7종** · **마일리지 등급 색 11개**(카탈로그 최초) · hover가 같은 빨강의 알파. **색 87개가 두 번 발행**(69 바이트 동일 + 18 표기만 다름)된 것을 기계적 쌍 비교로 확인 — 불일치가 아니라 이름 바꾸는 중이라 `conflicts`에 안 넣었다.
- **한 일(85)**: **수집 모델 실험 회차 1**(`docs/COLLECTOR_MODEL_TRIAL_2026-09-22.md`). 위임 가능 단계를 먼저 갈랐다(①스카우팅만). 세 팔 동일 입력 결과 **sonnet ≫ haiku** — haiku는 체크리스트를 받고도 3개 함정을 전부 놓쳤고 `lang`이 비면 substantive 이유 대신 locale 규칙을 집는다. **체크리스트는 품질을 지탱하지 못한다**(sonnet은 없어도 잡았다).
- **한 일(86)**: sonnet-terse의 "ana는 JAL처럼 차단" 추론을 **Aside로 반증**(토큰 4개 동일, ctrl 29 정상). **차단된 페이지는 컨트롤 32개를 주지 않는다** — 자기 데이터에 반증이 있었다. flag였고 한 번에 반증돼서 쌌다. 스크립트 FW 목록에 `fa` 추가.
- **한 일(87)**: **newspicks 등재**(456 / **162 verified**, 108/108, 4/4, reason·advisory 0). **220개 전부 자기 것**(프레임워크 0 — 분리할 게 없던 첫 사례). 4가족 + palette 84 위에 **제품 명사 층**(Premium 초록≠성공 초록 · AI 보라 · unread · 소셜 로그인 브랜드색 · 카테고리 골드). 토큰↔렌더 3회 일치.
- **한 일(88)**: 선택된 탭이 파란 배경에 `color:#222222`라 **대비 실패로 읽힐 뻔했다** — 자식 span이 `#ffffff`다. 버튼의 `color`는 상속돼 있을 뿐 안 쓰인다.
- **한 일(89)**: **실험 회차 2 — ② 심층 프로브도 sonnet에 위임 가능**. 보고가 정확했고 산술까지 맞았으며 함정 3개를 스스로 처리했다(CDN CORS → getComputedStyle 전환 · **내가 오늘 만든 `--text` 함정** 우회 · `outline: none`≠`auto` 판정). zenn 오타 `forcus`까지 짚었다.
- **한 일(90)**: **검증이 결론의 등급을 바꿨다.** "primary에 링 없음"은 맞지만 **기본이 없었다 vs 작성자가 껐다**로 갈린다. **진짜 Tab 키**로 로고에 `auto 1px`가 뜨는 걸 확인 → **기본 링이 살아 있는데 버튼만 끈다**. 위임된 실행은 지시에 없던 이 검사를 못 했다. → **②는 위임하되 헤드라인 1건은 반드시 독립 검증.**
- **한 일(91)**: **zenn 등재**(457 / **163 verified**, 106/106, 3/3, reason·advisory 0). **토큰 층에서 컴포넌트를 조립**한다(버튼 8변형·라벨 4변형·메시지박스 3종이 각자 색 세트 통째로). 99rem=1584px 알약, **`--rounded-publication: 25%`**, 잉크가 검정 82% 알파. 포맷 게이트 3개(8자리 알파·퍼센트·컴포넌트 hex)에 걸려 **알파와 퍼센트를 산문으로** 옮겼다.
- **한 일(92)**: **census의 서체는 렌더된 서체가 아니다**(측정법 §2.6 추가). `fontFamily.split(",")[0]`은 **스택의 첫 이름**일 뿐이다. qiita에서 `YakuHanJPs`가 census 1위(458개)인데 **@font-face에 없다** — 그냥 썼으면 "458개에 렌더"라고 적었을 것. `document.fonts.check()`로는 안 갈린다(폴백 가능하면 true).
- **한 일(93)**: 그 규칙으로 오늘 쓴 것 전부 감사 → **deepseek 정정**. `DM Sans`는 진짜 로드되지만 **`Fragment Mono`는 @font-face에 없다** → `family.mono` 삭제, 산문으로(58→57 claims, verified 유지). `Montserrat`은 로드되는데 토큰이 없어서 역시 기록 안 함 — **토큰 없는 로드 서체는 로드 안 된 토큰만큼 기록 불가.**
- **한 일(94)**: **실험 회차 3 — ②에서 격차가 ①보다 크다.** haiku는 `--fa`는 맞혔지만 `--aicw-`(자사 AI 제품)를 서드파티로 의심, 웹폰트를 CSSOM만 보고 "CORS 추정"으로 종료, 비가시 노드까지 세서 `Times`를 서체로 보고, CTA를 "4상태 NO CHANGE"라 적었다(실제 focus에 `auto 2px`). **규칙 하나는 적용하는데 데이터가 어긋날 때 멈추지 못한다.**
- **한 일(95)**: sonnet(qiita)은 **내 정답지보다 세밀한 게 셋** — `--color-*` 중 5개가 남의 브랜드색임을 구분, census `Times`가 비가시 노드·`Arial`이 스타일 안 먹은 폼 컨트롤임을 짚음(**§2.6과 같은 결함을 독립 발견**), **primary 버튼이 위치에 따라 뒤집히는 것**을 판단으로 표시. **최종 권고: ①②는 sonnet + 헤드라인 1건 검증, ③④는 위임 안 함, haiku는 3회 모두 탈락.**
- **한 일(96)**: **qiita 등재**(458 / **164 verified**, 106/106, 6/6, reason·advisory 0). Material 어휘 + 자기 명사(markdown 3 · Advent 2), 색상군 5개가 각각 Text/Container/Border/Dim 변형까지, **초록이 둘**(로고 `#55c500` vs 인터페이스 `#357a00`), hover가 **회색 램프 한 칸 아래**, 컨트롤 6종 전부 크롬 기본 focus, `family` 없음(YakuHanJPs 미로드).
- **한 일(97)**: **자율 운영 루프로 전환**(`docs/AUTONOMY_LOOP.md`) — 오너 지시로 단계별 검수 요청을 끊고 판단 경계(§1)만 묻는다. **브랜치 origin 백업**(`511e9edb`, 172 커밋) — 증거물·비밀값·CI 트리거 전부 0 확인 후. **브랜치 푸시는 8/20부터 위임이었는데 며칠째 물어봤다** — MEMORY.md 인덱스 한 줄이 자기 파일과 어긋나 있어서 고쳤다.
- **한 일(98)**: **루프 회차 1 — crowdworks 등재**(459 / **165 verified**, 141/141, 6/6). `font` 단축 속성 통째 토큰 32개(카탈로그 최초), 요소 이름 z-index 91개, AI CrowdWorks 네임스페이스. 최다 렌더 색이 링크색이라 본문 잉크를 따로 짚었다. §4 체크리스트 덕에 게이트 첫 시도 통과. 증거 날짜를 캡처일로 정정.
- **다음**: JP 웨이브 4 → US/UK 수율 측정 → 위생. **zhihu 주의 — `zhihu.com`이 `PLATFORM_HOSTS`라 자기 홈페이지가 proof gate에서 탈락한다.** 티어 카운트 자동 동기화(오늘만 4회 수동). **183건 일괄 구조화는 등급 0 상승이라 권장 안 함**(상태 게이트에 전부 막힘).(skyscanner·smarthr·govuk·uswds·hashicorp·ibm·sanity…) · `ds:` 오표기 3건(velog·banksalad·zigzag) 처리 · adobe는 Spectrum 1/2 세대 구분 필요.


## 2026-09-17 (저녁)

- **한 일**: 토스 TDS 인덱스 발견 — 올바른 호스트를 처음부터 인용했으나 목록을 안 읽어 11개 중 2개만 측정. 출처 4건·로스터·§15 "출처 있는 부재" 반영, 검토 패키지 r2 재생성. 라우트 실측 — 죽은 건 `/design-systems`가 아니라 `/reference`(61줄·noindex·canonical 양도)였고, AGENTS.md가 그 죽은 쪽을 "카탈로그 상세"로 지목해 반복 실수를 유발하던 것을 교정.
- **열린 것**: 오너 승인 5건 → `docs/OWNER_DECISIONS_2026-09-17.md`. 01 채택 위험은 시험으로 해소(Core v2 정본 투입 시 951중 942 통과, 깨지는 9건 = 계약 갭 3 + toss를 legacy 픽스처로 쓴 6). **write gate 거리가 처음 측정됨: 9건/6파일.** 02는 애널리틱스가 죽어(GA4 GCP 프로젝트 삭제·Mixpanel 402) 수치 없이 결정해야 함. 03 advisory 390 vs 198. `inspected`/`captured` 관례 미확정.
- **다음**: 인덱스 발행 호스트 4곳(kakao 316·krds 81·yeogiotte 40·pega) 로스터 대조, 나머지 430개 호스트 인덱스 일괄 프로브, `omd:add-reference` Phase 2에 Step 0(인덱스 우선) 추가.

## 2026-09-19

- **한 일**: 인덱스 우선 리서치 — 호스트 4곳 조사 후 pega(42개 발행/0개 인용)·krds(55/21) 로스터 기록(`f8d8e03a`·`08e9d85e`). Step 0을 6단계로 정정: `llms.txt`가 Yoast SEO 스텁일 수 있고(pega — 내용 검사를 통과하는데 컴포넌트 0개), 316 URL 사이트맵이 컴포넌트 0개일 수 있으며(kakao), 사이트맵이 닿는 수와 호스트가 발행하는 수가 다를 수 있다(krds 44 vs 55).
- **열린 것**: pega의 3개 측정값이 `tokens.components`에 `type: button`으로 있어 builder가 브랜드 버튼으로 렌더한다. 빼면 증거 클레임 24건이 고아 — §4에 오너 결정으로 남김. 05(GA4 GCP 재생성) 오너 콘솔 작업 대기. krds 채택 미실행.
- **다음**: 나머지 430개 호스트 인덱스 일괄 프로브, krds 채택, 1000개 확충.

## 2026-09-18 (오후)

- **한 일**: **438개 Primary tasks 완료(`b7299cee`)** — 1,907 과업, `missing-primary-task` 438→0, `portable_core` 1→383. 에이전트 72배치가 초안을 쓰고 `verify-primary-tasks.mjs`가 인용·표면·동사를 기계 검증, 통과분만 적용. 실제 결함 거부 0건(거부 3건은 전부 내 검증기 오탐, 둘 다 좁힘). 3개 바닥을 2개로 내림 — hyundaicard가 맞았고 강제했으면 없는 과업을 만들게 했을 것.
- **열린 것**: 남은 사유 `[FILL IN]` 39 · 표면 범위 22. 승인 02~05 미착수(advisory 390 vs 198 · 미커밋 스프린트 · 애널리틱스 복구 · `/design-systems`). krds 채택 미실행.
- **다음**: krds 채택(primary tasks·portable core 준비됨), 인덱스 우선 리서치(kakao 316·krds 81·yeogiotte 40·pega), 1000개 확충.

## 2026-09-18

- **한 일**: **toss 채택 완료(`482fceca`)** — 카탈로그 최초로 Core 패키지에서 서비스된다. 라우트 4개 200, builder 프리뷰가 패키지에서 렌더, 게이트 전체 통과. 가는 길에 컴파일러 provenance 구멍(9-08부터 잠복), 타이포·radius 타입 승격 누락(240·316개 레퍼런스 복구), 파이프라인 리더 4개 + 원장 침묵 실패를 고쳤다. 투영 동등성 검사(`core-projection-parity`)가 내가 손으로 못 본 2건을 잡았다.
- **열린 것**: 승인 02~05 미착수(advisory 390 vs 198 · 미커밋 51건 · 애널리틱스 복구 · `/design-systems` 유지). `inspected`/`captured` 스키마 관례 미확정. `build-web-core-verifier.cjs`가 미추적이라 생성물 재현이 깨끗한 체크아웃에서 불가능하다.
- **다음**: primary_tasks 438건(도구 준비됨), krds 채택, 인덱스 우선 리서치.

