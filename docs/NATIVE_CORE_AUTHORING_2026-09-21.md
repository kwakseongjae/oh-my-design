# 레퍼런스를 Core v2로 직접 쓰는 법 (2026-09-21)

스펙 §10 5단계 "future references written directly as Core v2". 확충이 여기서 열린다.

## 정정 — 네이티브 writer는 없는 게 아니라 이미 있었다

어제 나는 "네이티브 writer가 없다, graph·provenance·coverage·manifest·receipt를 손으로
만들어야 한다"고 적었다(`778907ea`). **틀렸다. 시험해보지 않고 썼다.**

기존 5단계 체인이 그대로 네이티브 writer다. `--migration-report`는 **선택 인자**이고,
마이그레이션할 것이 없으면 그냥 안 주면 된다. 막혀 있던 것은 **읽기 쪽 하나뿐**이었고
(`readReferenceSource`가 `original_segments`를 요구), 그건 어제 고쳤다.

## 절차 — 0단계: 생성기

작성한 레퍼런스 본문에서 draft를 만든다. **직접 매핑하지 않는다** — `migrate-design-md-core.cjs`가
이미 검증된 매퍼이고, 두 번째 구현이 드리프트 프로브와 MCP 번들을 눈멀게 한 그 실수다.

```bash
node scripts/author-native-core-reference.mjs --input <authored.md> --out-dir <draft-dir>
# → graph.json · provenance.json · coverage.json · migration-report.json
```

하는 일: ① 매퍼 실행 ② 매퍼의 provenance/coverage를 컴파일러 모양으로 번역
(`build-core-compiler-provenance.cjs` — 이것도 이미 있다) ③ `dev.oh-my-design.migration`을
`dev.oh-my-design.catalog`로 **교체** ④ `projection.sha256` 제거.

**왜 병기하지 않고 교체하나.** `readReferenceSource`는 마이그레이션 확장이 있으면 그쪽을
우선한다(원본 바이트 + 해시 검증이 투영보다 강하니까). 둘 다 두면 카탈로그 확장은 죽은 무게가
되고 **모든 네이티브 레퍼런스가 `reconstructed: true`로 보고**된다 — 둘을 구분하려고 만든
바로 그 필드에서 마이그레이션된 440과 구별이 안 된다. 작성 중간 파일은 빌드 입력이지 발행된
버전이 아니고, **아무도 본 적 없는 문서에 대한 바이트 충실성은 보장이 아니다.**

**거부하는 것.** 확장을 교체하면 `original_segments`가 사라지므로 매핑 안 된 것은 복구
불가능해진다. 마이그레이션 레퍼런스에선 기록된 손실이지만 여기선 **조용한 손실**이다. 그래서:

- `dropped_segments !== 0` — 채택 게이트와 같은 기준
- **매핑 안 된 `section`** — 정당하게 매핑 안 되는 둘은 `frontmatter`(카탈로그 확장이 됨)와
  `preamble`(투영이 렌더링하는 제목)뿐이다. 섹션이 안 매핑됐다면 사라질 본문이다
- `source_reconstruction_equal` / `projection_roundtrip_equal`이 false
- **레지스트리가 거부할 frontmatter** — `build-registry.mjs`의 `validate()` 목록 그대로.
  세 단계 뒤가 아니라 작성 시점에 필드 이름을 대며 실패한다
- **`added` 없음** — 레지스트리는 선택이지만 여기선 **필수**다. 기존 440 중 244개가 이게 없어
  절반 이상이 언제 왜 들어왔는지 기록이 없다. 신규는 그걸 반복하지 않는다

migration-report는 어느 쪽이든 출력 디렉터리에 복사한다 — 확장이 사라진 뒤에도 매핑이
감사 가능하도록.

## 절차 — 1~3단계: 봉인

입력은 **draft graph 하나 + provenance + coverage**다. 레거시 DESIGN.md는 필요 없다.

```bash
# 1. 리뷰 준비 — 후보 DESIGN.md와 review-request를 만든다
node scripts/prepare-design-md-core-review.cjs <draft-graph.json> \
  --provenance <provenance.json> --coverage <coverage.json> \
  --out-dir <review-dir>

# 2. 오너가 <review-dir>/DESIGN.md 를 읽고 승인한다 (사람 체크포인트, 건너뛰지 않는다)
node scripts/prepare-design-md-core-review.cjs \
  --approve <review-dir>/review-request.json \
  --reviewer "<식별자>" --authority-transition-approved \
  --out <review-receipt.json>

# 3. 봉인 — 6-아티팩트 트랜잭션. --migration-report 없음
node scripts/compile-design-md-core.cjs <review-dir>/input-graph.json \
  --provenance <review-dir>/provenance.json \
  --coverage   <review-dir>/coverage.json \
  --review-receipt <review-receipt.json> \
  --out-dir <fresh-dir> --adopt
```

3단계는 `<fresh-dir>`에 `DESIGN.md` + `.omd/system/{graph,provenance,coverage,manifest,
adoption-receipt}.json`을 낸다. 그대로 `web/references/<id>/`에 놓으면 된다.

**2단계 입력은 `<review-dir>/` 안의 것을 쓴다.** 컴파일러는 `input-graph.json`·
`review-request.json`·`review-request.sha256`이 positional graph **옆에** 있기를 요구한다.
원본 draft를 가리키면 "review input graph does not exist"로 떨어진다.

## draft graph가 지켜야 할 세 가지 — 전부 부딪혀서 알아냄

draft는 **내용을 주장**하고 **봉인은 컴파일러가 소유**한다. 최종 바인딩을 미리 채우면 거부된다.

| 빼야 하는 것 | 오류 메시지 |
|---|---|
| `projection.sha256` | `authority-neutral draft graph must omit projection.sha256 or use the all-zero placeholder` |
| `provenance.design_md_sha256` · `graph_sha256` | `must be omitted or use the all-zero placeholder; the compiler owns final bindings` |
| `coverage.design_md_sha256` · `graph_sha256` | (동일) |

all-zero 자리표시자(`"0".repeat(64)`)도 허용된다.

## 카탈로그 메타데이터는 확장에 선언한다

Core v2는 **디자인 시스템**을 기술한다. country·category·added·logo·`verification_v2`·
`tokens`는 **이 저장소의 목록 항목**에 대한 사실이지 브랜드 시스템의 속성이 아니다.
그래서 Core 필드가 아니라 확장에 들어간다 — 스펙 §6이 "extensions는 유일한 이식 가능
확장점"이라 하고 §11이 "린터는 새 frontmatter를 거부해야 한다"고 한다.

```json
{
  "extensions": {
    "dev.oh-my-design.catalog": {
      "schema_version": "1.0.0",
      "frontmatter": {
        "id": "...", "name": "...", "country": "JP", "category": "consumer-tech",
        "homepage": "https://...", "primary_color": "#0650a0",
        "logo": { "type": "favicon", "slug": "..." },
        "verified": "2026-09-21", "added": "2026-09-21",
        "tokens": { }, "verification_v2": { }
      }
    }
  }
}
```

필수 필드는 `build-registry.mjs`의 `validate()`가 정한다: `id` `name` `country` `category`
`homepage` `primary_color` `verified` + `logo{type,slug}`. `added`·`ds`·`tokens`·
`verification_v2`는 선택이지만 **`added`는 넣어라** — 기존 440 중 244개가 이게 없어서
언제 왜 들어왔는지 모른다.

`tokens`와 `verification_v2`는 `foundations`에서 파생하지 않고 **그대로 싣는다.** graph가
아직 그 값들의 권위가 아니고, 파생은 projection-parity 문제라 이 문제와 별개다.

## 읽기 쪽이 어떻게 받나

`readReferenceSource`가 둘을 구분한다:

- **reconstruct** — 마이그레이션 패키지. `original_segments`에서 원본 바이트를 복원하고
  기록된 해시로 검증. **둘 다 있으면 이긴다**(더 강한 주장).
- **project** — 네이티브. 패키지가 명시한 데이터를 frontmatter로 렌더링. 해시 없음 —
  충실할 이전 버전이 없다.

`yaml.dump`는 `JSON_SCHEMA`로 돈다. 기본 스키마는 `2026-07-11`을 Date 객체로 되읽고
이 파이프라인의 모든 날짜는 **문자열로 비교**된다.

## 실측으로 확인한 것

krds 패키지에서 파생한 draft로 체인을 끝까지 돌렸다:

- 3단계 통과 — `Adopted Portable Core package`, 6개 아티팩트
- 컴파일된 graph가 `dev.oh-my-design.catalog`를 **그대로 보존**(스펙 §6)
- canonical에 frontmatter **없음**
- `readReferenceSource` → `core-v2 · projected:true · reconstructed:false`, frontmatter 12키,
  출처 12건
- 웹 봉인 검증기 → **`verified`**

테스트로 고정: `test/unit/scripts/adopt-design-md-core.test.ts` 3건. 기존 `validGraph()`가
`extensions`를 지우고 있어서 **확장 보존은 아무도 검사하지 않고 있었다.**

## 남은 것

- **`adopt-design-md-core.cjs`가 카탈로그 확장을 emit하게 하기** — 채택되는 레퍼런스가
  마이그레이션·카탈로그 둘 다 갖게 되고, 그게 나중에 `original_segments`를 버리는 경로다.
  둘 다 있을 때 일치해야 한다는 규칙은 이미 리더에 적혀 있다.
- ~~draft graph를 만드는 도구~~ → `scripts/author-native-core-reference.mjs` (2026-09-21).
  테스트: `test/unit/scripts/author-native-core-reference.test.mjs` 3건 — 생성기부터 봉인까지
  한 번에 돌리고, `added` 없음·frontmatter 없음 두 거부를 고정한다.
- **입력인 authored.md를 조사에서 만드는 것**은 여전히 사람/에이전트의 일이다. 웨이브 1
  (Serendie)이 그 첫 사례다 — Serendie용 본문은 **아직 없고, 지어내지 않는다.**
