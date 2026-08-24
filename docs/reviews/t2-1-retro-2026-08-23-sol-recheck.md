# T2-1 소급 6건 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{naver,figma,wanted,airbnb,slack,line}/`
- 선행 판정: `t2-1-retro-2026-08-23-sol-1.md`의 Naver·Figma·Wanted 건별 조건, `t2-1-retro-2026-08-23-sol-2.md`의 Airbnb·Slack·LINE 건별 조건
- 프로토콜 경계: `t2-1-protocol-2026-08-23-grok.md` 53–56·77·86행에 따라 **선행 목록만** 대조했고 새 기준을 추가하지 않았다. 초판 목록에 있던 이관당 1회 F3의 기존 `audit-log.md`만 확인했으며, 이 재제출에 새 F3 실행·새 F3 증거·raw/structured 일치 조건을 요구하지 않았다.
- 재확인일: 2026-08-24 · 검증자: sol

## 건별 판정

| 대상 | 판정 | 선행 조건 | 목록-only 재확인 |
|---|---|---:|---|
| Naver | **PASS** | 6/6 | `나눔고딕` `Unresolved claim`과 footer `(omd:migrate)` 복원(`DESIGN.md:148`, `provenance.md:42`), 지정 block의 인접 B2a와 F1/F2 원장(`migration-log.md:58–59`), Search Submit loading/error/success 최소-field 생략(`DESIGN.md:244`), source-row/Named-gaps 목적지 정합을 확인했다. 기존 1회 F3는 `audit-log.md:74`에 `AUDIT_DONE fixes=14`. |
| Figma | **PASS** | 8/8 | Font `Unresolved claim`·footer 복원(`DESIGN.md:122`, `provenance.md:41`), May proof/TTL의 2026-07-12 역사 판정 분리(`provenance.md:45`), 지정 body B2a/F1/F2(`migration-log.md:55–56`), Primary/Indigo/Outline/Round icon 세 field 생략(`DESIGN.md:185,211,235,286`), source 밖 viewport/English coverage 철회와 source-row 목적지 정합을 확인했다. 기존 1회 F3는 `audit-log.md:66`에 `AUDIT_DONE fixes=16`. |
| Wanted | **PASS** | 7/7 | Font `Unresolved claim`과 §11 고유 서사 복원(`DESIGN.md:128,19`), Principles 1–4 전체 derived B2a(`DESIGN.md:44`), header 세 field·Search error 생략(`DESIGN.md:193,265`), Montage `Type: dialog`/검증값 보존 및 Kind/map 생략(`DESIGN.md:269–273`), favicon/`ds`/verification/footer URL/Named-gaps 목적지와 F1/F2 정합(`migration-log.md:58,62–80`)을 확인했다. 기존 1회 F3는 `audit-log.md:71`에 `AUDIT_DONE fixes=19`. |
| Airbnb | **PASS** | 5/5 | Font `Unresolved claim`과 footer 복원(`DESIGN.md:128`, `provenance.md:41`), 지정 body B2a와 derived inventory/F1/F2 정합(`migration-log.md:57–58`), Hosting과 두 circular control의 세 field 생략(`DESIGN.md:187,235,258`), logo/`ds`/footer/Named-gaps 목적지 정합을 확인했다. 기존 1회 F3는 `audit-log.md:79`에 `AUDIT_DONE fixes=22`. |
| Slack | **PASS** | 7/7 | marketing live/representative in-app/prose-derived 분리와 `slack-live` per-claim 제거(`provenance.md:90–102`), §9 Success/Presence 충돌(`DESIGN.md:118`, `provenance.md:41`) 및 §11 2012/$1B/Stewart/2019 서사(`DESIGN.md:19`) 복원, 지정 body B2a/F1/F2(`migration-log.md:61–62`), mixed/generic 세 field와 근거 없는 Kind/map 생략, font/license 부정 claim 철회를 확인했다. 기존 1회 F3는 `audit-log.md:80`에 `AUDIT_DONE fixes=23`. |
| LINE | **PASS** | 6/6 | `in-app visual verification`(`provenance.md:35–41`), 공식 sheets/navigation/lists/cards/feedback 범위·정의(`DESIGN.md:232`), Popup `optional area`(`DESIGN.md:366`) 복원, 지정 body B2a/F1/F2(`migration-log.md:65–66`), Box Button error/success와 Text Input loading/success 생략(`DESIGN.md:254,281,306,357`), locale 부정 철회 및 Simple Icons Identity+Assets 이중 목적지를 확인했다. 기존 1회 F3는 `audit-log.md:78`에 `AUDIT_DONE fixes=24`. |

## 현재 파일 기계 재검증

| 대상 | `--gate-only` | Core `--check --require-portable-core` | DESIGN SHA-256 |
|---|---|---|---|
| Naver | PASS, problems 0 | exit 0, `portable_core: true` | `38504d461272aac3581644264314c5373739ad3b2fbf63cc5d3ff61b118542f7` |
| Figma | PASS, problems 0 | exit 0, `portable_core: true` | `26dfd004842c6c49918c5b8ba91664f77eee94a9e3312553448d224a9df4a169` |
| Wanted | PASS, problems 0 | exit 0, `portable_core: true` | `91b1dfdf7a465bdc6e08be04f5ea30f86f8f0f627390836169800efb8ff42c47` |
| Airbnb | PASS, problems 0 | exit 0, `portable_core: true` | `26d5f8c574acd534649b09db70a8ef07645cbcf955690492fbf82e7728e7e4fa` |
| Slack | PASS, problems 0 | exit 0, `portable_core: true` | `8f7e6aa5de4cf70ee82da4083b6f2d27bec52b129e72ac8b16a0894da15c1bb1` |
| LINE | PASS, problems 0 | exit 0, `portable_core: true` | `f87784fa51262197a88ac4223c35b346674ce06bb20b3f25ee4cb726c03b3e62` |

**전체: PASS 6/6 (선행 재제출 조건 39/39) — 원장 공백 6건의 동일 sol 목록-only 재확인은 닫혔으며, 카탈로그 채택은 별도 최종 승인 사항이다.**
