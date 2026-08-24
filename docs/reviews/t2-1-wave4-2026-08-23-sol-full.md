# T2-1 웨이브 4 전수 검토 — sol 의미 레인 (표본 제외 3/3)

- 대상: `docs/design-md-weight/migrated/{spotify,discord,vercel}/`
- 원본: `web/references/{spotify,discord,vercel}/DESIGN.md`
- 기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v6 전 조항**
- 일시: 2026-08-23
- 기계 검증: `node test-v2/tools/migrate-reference.mjs --brand <id> --gate-only`를 세 건 모두 직접 재실행해 `PASS`, problems 0을 확인했다.
- 의미 검증: scalar의 존재뿐 아니라 원 component-field 결합, evidence class, §14 본문, state role, provenance, source-row별 실제 disposition을 대조했다. F1은 portable 본문 전체의 인과·해석·판단 문장을, F2는 migration-log 전 행과 실제 목적지를 다시 확인했다.

## 판정 요약

| 대상 | 판정 | 차단 조항 |
|---|---|---|
| Spotify | **FAIL** | A1/A4, B2/B2a, C2, E1, E2/E2a/E2c, F1/F2 |
| Discord | **FAIL** | A1, B2/B2a, E1, E2/E2a/E2c, F1/F2 |
| Vercel | **FAIL** | A1/A1c, B2/B2a, C2, E2/E2a/E2c, F1/F2 |

**확대 검토 결과: PASS 0/3, FAIL 3/3.** 선행 표본의 최초 판정 Netflix FAIL / GitHub FAIL과 합치면 웨이브 4 최초 산출물의 의미 판정은 **FAIL 5/5**다. 표본 두 건의 이후 개정본은 이 문서의 재심 대상이 아니며 별도 동일-sol 검증 대기다.

세 건 모두 A1a·A2·A3·B1·B3·C1·C3·D1·D2·E2b를 통과했다. 검증된 primitive의 **보존** 자체도 A1b를 통과하지만, Spotify가 source에 없는 Hollow CTA primitive를 추가한 것은 별도 A1/A4 발명이다. 기계 게이트 PASS는 아래 의미 결함을 상쇄하지 않는다.

## v6 전 조항 대조표

| 조항 | Spotify | Discord | Vercel |
|---|---|---|---|
| A1 | **FAIL** — Hollow type·surface kind 발명 | **FAIL** — 직접 검증 voice string 손실, toast/ledger 발명 | **FAIL** — `Unresolved` 증거 종류·footer 표지 손실 |
| A1a | PASS — source에 unitless line-height 없음 | PASS — 1.1/1.25/1.30/1.375/1.29/1.33 보존 | PASS — 1/1.1/1.33/1.5/1.43 보존 |
| A1b | PASS — 검증된 input/button×3 보존; Hollow 추가 발명은 A1/A4 | PASS — 검증 primitive를 컴포넌트별 보존 | PASS — button×3/input/toggle/card 보존 |
| A1c | PASS — source metadata 보존 | PASS — `tokens.source` 등 보존 | **FAIL** — footer `(omd:migrate)` 표지 누락 |
| A2 | PASS — §14 본문 보존 | PASS — §14 12행 보존 | PASS — §14 본문 보존 |
| A3 | PASS — §9-only 고유값 없음 | PASS — §9-only message-row 값을 Layout에 보존 | PASS — §9-only 고유값 없음 |
| A4 | **FAIL** — filled sibling의 type을 Hollow로 전이 | PASS | PASS |
| B1 | PASS — generic `Focus`와 `focus-visible` 분리 | PASS — input generic `Focus` 분리 | PASS — treatment 발명 없음 |
| B2/B2a | **FAIL** — §12 stem 과분류 + Scope 등 미한정 | **FAIL** — Content 과분류 + Avoid/Motion 등 미한정 | **FAIL** — traits/Avoid/Elevation/card/responsive 미한정 |
| B3 | PASS — 다섯 evidence kind + per-component gate | PASS — 다섯 evidence kind + per-component gate | PASS — 다섯 evidence kind + per-component gate |
| C1 | PASS | PASS | PASS |
| C2 | **FAIL** — 역할 미확인 player actions의 3상태 단정 | PASS — named roles의 source state와 일치 | **FAIL** — generic Geist specimen에서 request/validation 발명 |
| C3 | PASS | PASS | PASS |
| C4 | PASS | PASS — kind/map 처리 자체와 별개로 로그가 이를 오기 | PASS — example card kind/map 생략 |
| D1/D2 | PASS / PASS | PASS / PASS | PASS / PASS |
| E1 | **FAIL** — derived stems를 first-party로 승격 | **FAIL** — copy·brand-source·surface ledger 증거 종류 오류 | PASS |
| E2 | **FAIL** | **FAIL** | **FAIL** |
| E2a | **FAIL** — source-row 다중 목적지 누락 | **FAIL** — §14/HTML evidence 실제 목적지 누락 | **FAIL** — Governance 목적지 누락 |
| E2b | PASS — 해당 wrapper/curve 없음 | PASS — curve omission ledger 일치 | PASS — 해당 wrapper 없음 |
| E2c | **FAIL** — primitive/B2a/F1/F2 준수 과장 | **FAIL** — Content/B2a/kind/F1/F2 준수 과장 | **FAIL** — evidence class/C2/F1/F2 준수 과장 |
| F1/F2 | **FAIL / FAIL** | **FAIL / FAIL** | **FAIL / FAIL** |

## 1. Spotify — FAIL

### 1.1 Hollow CTA primitive와 surface kind 발명 — A1 / A4 FAIL

원본 YAML의 `type: button`은 Filled Newsroom CTA에만 결합된다(`web/references/spotify/DESIGN.md` 62–71행). Hollow Newsroom CTA는 §4 body에 background/text/border/radius/padding/font/focus/use만 있고 primitive type은 없다(263–272행). 이관본은 Hollow에 `Type: button`을 추가한다(`docs/design-md-weight/migrated/spotify/DESIGN.md` 266–292행). 로그도 filled sibling과 같은 CTA 계열이라는 이유로 type을 가져왔다고 적는다(`migration-log.md` 23행).

CTA라는 역할과 Focus 관측은 interactive kind를 뒷받침할 수 있지만 button/link primitive를 결정하지 않는다. 검증 필드를 sibling component로 복사한 A1 발명·A4 field-role 전이다. 그런데 F2는 이를 포함해 `Type: button` 네 개를 검증값처럼 센다(`migration-log.md` 41행).

별도 metadata 발명도 있다. 원본 `verification_v2.surfaces`는 `id/url/inspected`만 기록한다(75–84행). 이관 provenance는 여기에 `product/product/official-doc` kind를 단정한다(`docs/design-md-weight/migrated/spotify/provenance.md` 42–46행). 원본 `sources`의 kind는 다른 object이고 product 값도 `product-surface`다(원본 85–105행). 독립 근거가 없다면 unresolved `kind` 필드만 생략해야 한다.

### 1.2 §12 stem의 first-party 과분류와 Scope 인과문 — B2 / B2a / E1 / F1 FAIL

원본 §12의 세 굵은 stem은 first-party fact와 관측을 재서술·결합한 편집 원칙이다(원본 328–332행). 특히 “Use green … in the domain where it is observed”와 “rather than forcing one component reading”은 Spotify 원문이나 별도 발행 UI specification이 아니다.

이관본 qualifier는 numbered stems를 `first-party language`라고 제외하고 *UI implication*과 capture-bound application만 derived라고 한정한다(`DESIGN.md` 38–47행). Rulebook B2a는 이 카탈로그의 재구성 Principles 전체가 인접 완전 한정 아래 있어야 한다. 같은 과분류가 provenance 123행과 migration-log 33·40행에 반복돼 E1/E2c도 실패한다.

Scope의 `That account explains the recognizable expression`도 명백한 인과·편집 해석인데 인접 한정이 없다(`DESIGN.md` 15행). Legacy §1에서 옮겼다는 사실은 first-party doctrine으로 승격하는 근거가 아니다. 같은 F1 재검사 대상에는 Scope의 `content-led`/`geometry repeatedly resolves`(13행), qualifier 밖 Avoid(58–62행), local-scale/elevation 판단(85·94·98행), Layout의 support/cross-viewport 판단(297–301행), Content 표의 product-copy 경계(308–312행)가 포함된다.

### 1.3 정확한 action role 없이 loading/error/success를 닫음 — C2 FAIL

원본은 두 controls를 `compact outlined player action`과 `circular player icon control`로만 식별한다(원본 YAML 43–61행, body 225–247행). 이관본은 Outlined의 loading/error/success를 전부 비적용으로 선언하고(`DESIGN.md` 184–207행), Circular에는 source에 없는 `local player action` 의미를 붙인 뒤 같은 세 상태를 비적용으로 둔다(213–234행).

특히 Circular success를 partner-like confirmation과 분리한 234행은 실제 icon action이 like인지조차 확인되지 않은 상태의 판단이다. Primitive 또는 generic chrome 이름만으로 역할을 확정할 수 없다. 정확한 selector label/behavior를 확보하거나 unresolved applicability를 최소 경계에서 처리해야 한다. Log 35행과 provenance 127행의 “각 product role로 판정” 주장은 실제 근거보다 강하다.

### 1.4 실제 source-row 목적지와 F1/F2 로그 불일치 — E2 / E2a / E2c / F2 FAIL

대표 누락은 다음과 같다.

| Source row | 실제 목적지 | 로그 불일치 |
|---|---|---|
| §14 like strings(원본 344) | Components 148 + Content 314 | log 35는 Content 누락 |
| §5 audit/layout 경계(282) | Scope 11 + Avoid 61 + Layout 297–301 + Named gaps 356 | log 25는 Layout만; log 18은 일부를 §1에 오귀속 |
| §15 motion boundary(348) | Avoid 62 + Foundations 102 + Named gaps 361 | log 36은 Avoid 누락 |
| §2 unresolved color groups(185) | Foundations 81 + Named gaps 350 | log 20은 Governance 누락 |
| §3 declared/license boundaries(197–198) | Typography 116–117/125 + Named gaps 357–358 | log 21은 Governance 누락 |
| §6 elevation gap(286) | Foundations 98 + Named gaps 351 | log 26은 Governance 누락 |
| §10 live-player corpus gap(320) | Content 312 + Named gaps 360 | log 31은 Governance 누락 |

또한 log 19의 “§1/§11 공식 URL”은 source-row가 틀렸다. 두 절에는 literal URL이 없고 해당 URL은 YAML sources와 footer에 있다(원본 98–105, 276행). Log 40–41은 위 B2a·field·route 불일치를 놓친 채 F1/F2 완료와 `Compliance claims match the body`를 선언한다.

### Spotify에서 확인된 통과 항목

- §14 source contract와 generic Focus/`focus-visible` 분리, B3 전문은 보존됐다.
- YAML의 검증된 Search input, Outlined button, Circular button, Filled CTA button primitive와 component field는 보존됐다.
- 가상 persona·새 외부 도메인을 만들지 않았고, Simple Icons logo identity-only 경계와 primary color의 portable/provenance 목적지는 맞다.

### Spotify 재제출 조건

1. Hollow `Type: button`과 source에 없는 surface kind를 제거하거나 각 필드에 독립 증거를 결합한다.
2. 세 numbered stem 전체를 derived qualifier 범위에 넣고 Scope·Avoid·Foundations·Layout·Content를 문장 단위로 다시 F1 스캔한다. 해석을 유지하면 해당 문장 인접에 완전 B2a 한정을 둔다.
3. Outlined/Circular의 exact semantic role을 확인한 뒤 loading/error/success applicability를 재판정한다.
4. 모든 source-row와 portable/provenance/Governance 목적지를 log에 기록하고 F1/F2·준수 문구를 실제 결과에 맞춘다.
5. 기계 게이트 재통과 후 동일 sol 의미 레인에 재제출한다.

## 2. Discord — FAIL

### 2.1 직접 검증 copy 손실과 나머지 copy의 evidence class 과승격 — A1 / B2 / B2a / E1 FAIL

원본 HTML evidence comment가 WebFetch로 직접 확인한 voice strings는 “group chat that's all fun & games”와 “find your friends on discord” 두 개다(`web/references/discord/DESIGN.md` 581–585행). 이관본은 첫 string은 남기지만 두 번째는 DESIGN/provenance/log 어디에도 남기지 않는다. 대신 source body의 “hop in when you're free”, “imagine a place…”, empty/success/error 예문 등을 `source-stated Discord copy`로 분류한다(`docs/design-md-weight/migrated/discord/DESIGN.md` 709–722행).

Legacy body에 있던 편집 예문은 직접 WebFetch 관측과 같은 evidence class가 아니다. 직접 확인된 두 strings와 derived voice/copy examples를 분리해야 한다. Migration log 31행은 “합성 보이스 샘플 없음”이라고 주장하면서 reconstructed examples를 source-stated로 올리고, 실제 검증 string 하나는 잃었다.

### 2.2 Avoid·Motion 등 retained editorial 문장의 인접 한정 누락 — B2 / B2a / F1 FAIL

다음은 complete B2a qualifier 범위 밖이다.

- Avoid의 `depth comes from surface stepping`, serious-flow calmness, clean three-panel 판단(`DESIGN.md` 70–78행)
- Motion의 `single most recognizable` micro-interaction, `fast enough … smooth enough`, `app stays fully usable` 판단(194–200행)
- §14 capture table의 friendly/warm/no-jokes characterization(270–277행)
- Semantic color의 “workhorse of every actionable element”(90행), Components의 post-rebrand/superlative readings(285, 488행)

원본 HTML comment는 clubhouse와 “depth by layering” 같은 해석이 Discord statement가 아니라 editorial reading이라고 명시한다(원본 602–603행). Elevation의 qualifier가 Avoid의 별도 문장을 덮지 않으며, `source-stated`라는 표지는 B2a 완전 한정이 아니다. Log F1은 Scope/Principles/Elevation/type/Layout/Content만 열거하고 Avoid·Motion·States를 놓친 뒤 “No unqualified causal/editorial reading remains”라고 선언한다(`migration-log.md` 41행).

### 2.3 source ledger의 증거 도메인 오류와 새 값 발명 — A1 / E1 FAIL

Portable font evidence는 first-party `discord.com/branding`을 color-name.com/mobbin.com/colorxs.com과 함께 `Third-party-corroborated brand color`로 묶는다(`DESIGN.md` 219–225행). Provenance도 네 source를 모두 third-party라고 단정한다(`provenance.md` 63–70, 107행). Official brand surface와 세 third-party corroborators를 분리하고, 어느 쪽도 in-app product-use로 올리지 않아야 한다.

Provenance의 surface/source/claim ledger도 일관되지 않는다. Surface는 `marketing-home`, source는 `discord-live`인데(45–58행), claim table은 존재하지 않는 surface id `discord-live`에 모든 product token/component를 할당한다(76–95행). Marketing URL을 in-app token surface처럼 쓰는 것은 Scope의 no-proxy 경계와도 충돌한다. 원본에는 이 per-claim surface mapping이 없다.

Toast에는 source에 없는 `auto-dismiss`를 추가하고 이를 `Kind: non-interactive`의 이유로 쓴다(`DESIGN.md` 642–653행; 원본 337–345행). `transient confirmation`만으로 auto-dismiss를 발명할 수 없다. Unsupported behavior를 제거하고 kind를 남길 수 있는 정확한 role evidence를 다시 판정해야 한다.

### 2.4 migration-log가 실제 body·목적지와 다름 — E2 / E2a / E2c / F2 FAIL

Log 35행은 Badge와 Toast의 `kind/map`을 생략했다고 기록하지만 body는 Mention/Nitro Badge와 Toast에 `Kind: non-interactive`를 명시한다(`DESIGN.md` 545–566, 642–653행). 같은 log의 23행은 badge/toast kind를 정확히 적어 내부에서도 모순이다.

Source §14-only skeleton/streaming/spoiler 값 `#3A3C42`/`#593695`/`#202225`는 Foundations와 Components에 모두 간다(`DESIGN.md` 145, 151–152, 272, 278, 281행). Log 35행은 Components만 기록한다. HTML evidence comment도 provenance-only가 아니다. WebFetch/WebSearch/representative-pixel facts는 portable Scope/Font evidence/Components에도 쓰였는데(11, 221–223, 283행), log 37행은 provenance 분리만 주 disposition으로 적고 실제 분기를 닫지 않는다.

Log 31·35·37·41–42는 copy evidence, kind, source-row 목적지와 미한정 문장을 놓친 채 F1/F2 및 `Compliance claims are not stronger than the body`를 주장한다.

### Discord에서 확인된 통과 항목

- Unitless line-height, primitive type, YAML/body color·radius·avatar 충돌, §9-only message anatomy와 §14 12행은 보존됐다.
- Generic input Focus를 `focus-visible` treatment로 승격하지 않았고 B3 전문과 curve omission ledger가 있다.
- Fictional §13 biography는 portable/provenance에 재수록하지 않았다. Named role state maps와 interactive-kind 없는 cards/dialog surface의 map omission은 유지됐다.

### Discord 재제출 조건

1. 직접 검증된 두 voice strings를 모두 보존하고, 나머지 voice examples는 derived/unresolved evidence class로 분리해 인접 한정을 둔다.
2. Avoid·Motion·States·Semantic/Components를 포함해 전체 F1을 다시 수행한다. 편집 판단은 제거하거나 완전 B2a 한정 아래 둔다.
3. `discord.com/branding`과 third-party sources, marketing surface와 in-app product claims를 분리한다. Source에 없는 claim-surface mapping과 toast auto-dismiss를 제거하거나 독립 증거를 붙인다.
4. Badge/Toast kind, §14, HTML comment의 실제 목적지를 log에 맞추고 과장된 F1/F2 준수 주장을 수정한다.
5. 기계 게이트 재통과 후 동일 sol 의미 레인에 재제출한다.

## 3. Vercel — FAIL

### 3.1 `Unresolved` 증거 종류 변조와 footer metadata 손실 — A1 / A1c / E2 FAIL

원본 Font evidence는 authenticated dashboard overrides와 product-specific font loading을 `Unresolved`로 분류한다(`web/references/vercel/DESIGN.md` 199–205행). 이관본은 같은 관측을 `Outside this capture`로 바꾼다(`docs/design-md-weight/migrated/vercel/DESIGN.md` 108–115행). Log는 `Unresolved`가 Portable Core placeholder 금지에 걸린다고 설명한다(`migration-log.md` 22행).

금지 대상은 `[FILL IN]`이며, Core v2는 unresolved claim을 별도 evidence domain으로 요구한다(`spec/design-md-core-v2.md` 700–706행). Wave 2 Coupang에서 이미 기각된 것과 같은 증거 종류 변조다. `Unresolved claim` 또는 동등한 captured-but-uncorroborated 분류를 복원해야 한다.

원본 footer의 `Verified: 2026-07-12 (omd:migrate)` 중 provenance는 날짜만 보존하고 `(omd:migrate)` 표지를 잃는다(원본 316행; `docs/design-md-weight/migrated/vercel/provenance.md` 31–39행). Log 39행의 footer 전체 분리 주장과 다르다.

### 3.2 Distinctive/Avoid/Elevation/card/responsive 해석 미한정 — B2 / B2a / F1 FAIL

완전 qualifier는 Scope 두 문단(11·17행), Principles+capture-bound application(43행), Layout application(304행), Content(313행)에만 있다. 다음 별도 블록은 그 범위 밖이다.

- Distinctive traits의 information/elevation/strict-boundary 판단(32–39행)
- Avoid의 source Don'ts와 추가 doctrine(58–65행)
- Elevation의 `primarily planar`, grid-vs-shadow 해석(94–96행)
- Component card의 grid participation 대 independent shadow 판단(287–299행)
- Responsive의 `maintaining the neutral hierarchy`, `compact and composable` 판단(306행)

원본 Key Characteristics/Don'ts를 옮겼다는 사실은 Vercel-authored doctrine을 뜻하지 않는다. Log F1은 이를 source Key Characteristics/Don'ts 또는 capture boundary라서 한정 불필요하다고 면제하고 “No unqualified brand causal reading remains”라고 주장한다(`migration-log.md` 43행). 표본 Netflix에서 기각된 것과 같은 논리다.

### 3.3 Generic Geist specimen에서 request·validation role 발명 — C2 FAIL

Secondary action의 source role은 `Official Geist secondary action example`뿐이다(원본 YAML 159행, body 228–230행; 이관본 183–197행). Request evidence가 없는데 `can wait on its request`라며 loading을 applicable로 만들고, 같은 request의 failure/completion은 error/success가 아니라고 한다(206–208행).

Compact input도 generic official specimen일 뿐인데 input primitive만으로 validation failure를 가정해 error를 applicable로 만든다(원본 161, 235–237행; 이관본 234–259행). Icon button 역시 action identity가 없는데 `specimen chrome`이라는 새 역할로 loading/error/success를 모두 비적용 처리한다(210–232행). Header-link navigation과 individual radio selection은 역할이 식별되지만 이 세 specimens는 그렇지 않다. Log 37행의 “역할 의미로 판정” 주장은 실제보다 강하다.

### 3.4 Governance 이중 목적지와 F1/F2 준수 로그 누락 — E2 / E2a / E2c / F2 FAIL

Log가 누락한 대표 실제 분기는 다음과 같다.

| Source | 실제 목적지 | 로그 |
|---|---|---|
| §2 omitted color roles | Foundations 80 + Named gaps 352 | log 21은 Foundations만 |
| §3 declared/unresolved fonts | Typography 113–114/121 + Named gaps 355–356 | log 22–23은 Governance 누락 |
| §4 input focus boundary | Components 248–249 + Named gaps 351 | log 24는 Components만 |
| §6 shadow boundary | Foundations 96 + Named gaps 353 | log 28은 Foundations만 |
| §7 Don'ts | Avoid 60–63 + Named gaps 349/352–353 | log 30은 Avoid만 |
| §8 responsive unknowns | Layout 306 + Named gaps 354 | log 31은 Layout만 |
| §9 dashboard/deployment omission | Components/Avoid + Named gaps 349–350 | log 32는 Governance 누락 |
| §10 copy-scope boundary | Content 313 + Named gaps 360 | log 33은 Governance 누락 |
| §13 unspecified project fields | Audience 30 + Named gaps 359 | log 36은 latter 누락 |
| §14 absent treatments | Components 150–154 + Named gaps 350 | log 37은 Governance 누락 |

§4 omitted product components(log 26)와 §15 motion(log 38)은 Named gaps 목적지를 기록해 통과한다. 그러나 F2 44행은 나머지 source rows를 확인하지 않고 `Compliance claims match the body`라고 끝낸다.

### Vercel에서 확인된 통과 항목

- Unitless line-height와 size-local px를 분리했고, six component primitive와 field 관계, `ds.type: system`, §14 source contract를 보존했다.
- Generic focus를 `focus-visible`로 승격하지 않았고 B3 전문이 있다. Example card의 kind/map은 생략했다.
- §13 task contexts를 Primary tasks+Audience로 두고 fictional biography를 만들지 않았다. 주요 URL의 dual/triple portable/provenance 목적지는 기록됐다.

### Vercel 재제출 조건

1. Font evidence를 `Unresolved claim`으로 복원하고 footer `(omd:migrate)` metadata를 provenance와 log에 남긴다.
2. 위 editorial/judgment blocks를 포함해 전체 F1을 다시 수행한다. 각 해석을 제거하거나 인접 완전 B2a 한정 아래 둔다.
3. Secondary action·icon button·compact input의 loading/error/success를 exact role evidence로 재판정한다. Primitive/specimen 이름에서 request·validation 의미를 만들지 않는다.
4. 각 source row의 Governance 포함 모든 목적지를 log에 기록하고 F1/F2 준수 문구를 실제 grep 대조 뒤에만 다시 쓴다.
5. 기계 게이트 재통과 후 동일 sol 의미 레인에 재제출한다.

## 웨이브 판정

**최종 판정: Spotify FAIL / Discord FAIL / Vercel FAIL.** 기계 게이트 PASS 3/3은 의미 보존 PASS를 대신하지 못한다.

선행 표본을 포함한 웨이브 4 최초 산출물은 **FAIL 5/5**다. 특히 v6가 의무화한 F1/F2를 수행했다고 기록한 다섯 건 모두에서 B2a 또는 E2 계열이 다시 확인됐다. 새 결함 계층은 없으며 기존 A1/A4·B2/B2a·C2·E1·E2/E2a/E2c의 적용 실패다.

각 FAIL 조건을 해소한 개정본의 동일 sol 재검증 전까지 웨이브 4 채택, 다음 웨이브, 카탈로그 채택을 정지한다. Netflix/GitHub의 현재 개정본은 별도 재심 대상으로 남는다.
