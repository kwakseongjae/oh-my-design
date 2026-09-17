# `verification_v2_missing` 299건 — 왜 스크립트로 못 채우는가

조사일 2026-09-17. 오늘 정리한 다른 차단 사유들과 달리 **이것은 진짜 작업이다.**
그 판단에 이른 근거를 남긴다.

## 이번엔 파싱 문제가 아니다

오늘 `tier1_source_missing`(53→3) · `conflict_unresolved`(62→26) ·
`proof_incomplete`(55→32) · `freshness_conflict`(115→4)은 전부 검사기가 증거를
못 알아본 경우였다. 같은 기대로 299건을 열었다.

| 확인 | 결과 |
|---|---:|
| frontmatter에 `verification_v2` 블록 자체가 없음 | **299 / 299** |
| 텍스트는 있는데 파싱 실패 | 0 |
| frontmatter 파싱 실패 | 0 |

블록이 정말로 없다.

## 그런데 근거는 대부분 이미 있다

| | 건수 |
|---|---:|
| `.verification.md` 파일 보유 | 269 |
| 프루프 블록(실측 관측) 보유 | 267 |
| Tier-1 URL 보유 | 296 |
| **둘 다 보유** | **267** |

즉 **267건은 증거가 있고 구조만 없다.** 그래서 기계적 유도를 검토했다.

## 기계적 유도를 시도했고, 기각했다

### 시도 1 — 토큰 값이 프루프에 있으면 클레임을 만든다

표본 40개에서 토큰 leaf의 **76.6%**가 값이 프루프 파일에 등장했다. 그러나 정본 클레임
경로 **전체**가 근거된 레퍼런스는 **0건**이었다.

안 맞는 경로를 열어보니 대부분 측정값이 아니었다:

```
tokens.components.button-primary.use    "dominant action"
tokens.components.hero-heading.type     "card"
tokens.components.button-coral.padding  "40px height"
tokens.typography.body.use              "Standard reading text, calm and scannable"
```

`use`·`type`은 **저자의 서술 라벨**이다. 프루프 본문에 그 문자열이 그대로 나올 이유가 없다.
대조 방식 자체가 틀렸다.

### 시도 2 — 검증 파일이 명시한 표면을 모든 leaf에 가리키게 한다

verified 레퍼런스(`toss`)를 보면 `use` 경로도 클레임을 갖는다:

```yaml
"tokens.components.tds-button.use":
  { surface_id: tds-button, source_id: tds-button-live,
    method: computed-style-and-official-doc, captured: "2026-07-11" }
```

method 분포는 `computed-style-and-official-doc` 47 · `computed-style` 26 ·
`official-doc` 6. 즉 클레임은 **그 값이 어떻게 확립됐는지**를 기록한다.

여기서 기각 사유가 나온다. 검증 파일은 *"이 표면 2개를 조사했고 여기 원관측이 있다"*고
집합으로 말하지, *"frontmatter의 모든 토큰이 거기서 나왔다"*고 말하지 않는다.
모든 leaf에 `method: computed-style`을 붙이는 것은 **아무도 확인하지 않은 커버리지를
주장하는 것**이다.

그리고 299건의 `tokens.source` 분포가 이 문제를 결정적으로 만든다:

| source | 건수 | 클레임 가능? |
|---|---:|---|
| `live-extract` | 172 | 원칙적으로 가능하나 leaf 단위 커버리지는 미확인 |
| **`prose-derived`** | **111** | **불가** — 토큰이 라이브 관측에서 나오지 않았다 |
| `reconciled` | 13 | 혼합 |
| `design-system` | 3 | 문서 기반 |

`prose-derived` 111건에 `computed-style`을 붙이면 **거짓**이다. 그 토큰들은 정의상
산문에서 전사된 것이고, 그래서 `token_source_unverified`로 이미 막혀 있다.

## 그래서 실제 작업량

| 구간 | 건수 | 필요한 것 |
|---|---:|---|
| `prose-derived` | 111 | 라이브 재검증. 토큰을 실제로 관측해야 한다 |
| `live-extract` 등 | 188 | 기존 관측을 leaf 단위로 확인하고 클레임 작성 — **단, 번들 0건. 아래 정정 참조** |
| 검증 파일 없음 | 30 | 처음부터 |

**정정 (2026-09-17, 같은 날 실측).** 위 표의 "188건은 새 측정 없이 가능할 수 있다"는
틀렸다. 세 가지를 재보고 나서 취소한다.

- **188건 중 증거 번들을 보유한 것은 0건이다.** (`artifacts/reference-evidence/<id>.json`
  존재 여부로 188개 전수 확인.) 사람이 대조할 원본 관측이 파일로 남아 있지 않다. 남은
  것은 `.verification.md`에 적힌 **날짜 달린 산문**뿐이다.
- 그 산문에 기록된 **가장 최근 관측일은 2026-05-08 ~ 2026-07-02**에 걸쳐 있다.
- 오늘(2026-09-17) 기준 **80/188은 이미 product-surface TTL 90일을 넘겼고**, 나머지도
  2026-09-30까지 차례로 넘긴다.

즉 판단만 있으면 되는 게 아니라 **데이터가 없어서** 못 한다 — 원래 문장이 부정한 바로 그
이유다. 사람이 완벽하게 대조해도 라이브 표면에 근거한 클레임은 만들자마자 만료된
근거를 가리킨다.

한 가지는 재보지 않았고 그래서 단정하지 않는다: 대조 결과 나올 source의 `kind` 구성.
공식 문서(`official-doc`, TTL 180일)에 근거한 클레임이라면 2026-07-02 관측은
2026-12-29까지 유효하므로 살아남는다. "188건 전부 무의미"가 아니라 **"라이브 표면
근거는 전부 만료, 문서 근거는 일부 생존"**이 현재까지 말할 수 있는 전부다. 그 비율은
측정되지 않았다.

## 다음에 이 문서를 읽는 사람에게

`verification_v2`를 자동 생성하는 스크립트를 만들고 싶어질 것이다. 위 두 시도가 왜
기각됐는지 먼저 읽기 바란다. 이 블록의 존재 이유는 **누군가 각 클레임을 명시된 표면에
대조했다**는 것이고, 그것을 파일 존재 여부로 대신하면 블록이 의미를 잃는다.

7월 배치가 컴포넌트를 지워 게이트를 통과한 것과 같은 종류의 유혹이다.

## 측정: 자동 유도가 어디까지 가는가 (같은 날, 도구를 만들어본 뒤)

위에서 기각한 것은 *"클레임을 자동 생성한다"*였다. 그렇다면 **사실만 뽑고 판단은 넘기는**
도구는 어디까지 갈 수 있는지 재봤다. `web/scripts/propose-verification-v2.mjs`
(`npm run propose-verification -- <id>` / `--survey`).

기계가 읽는 것은 검증 파일에 **명시된 사실**뿐이다:

```
**Inspected:** 2026-06-22
**Method:**    playwright getComputedStyle (live DOM) — …
**Sources:**   https://asana.com/ — homepage, hero CTA, nav …
### Raw samples
- hero CTA "Get started": background-color: rgb(253,63,253) = #fd3ffd; border-radius: 100px …
```

그리고 각 토큰 leaf의 값이 어느 raw sample 줄에 등장하는지만 대조한다.
후보가 하나면 `matched`, 여럿이면 `ambiguous`, 없으면 `unmatched`로 **고르지 않고** 낸다.

### 결과 — 269개 전체

| | 경로 수 | 비율 |
|---|---:|---:|
| 정본 클레임 경로 합계 | 32,067 | |
| 특정 관측 1건에 추적됨 (`matched`) | **4,705** | **14.7%** |
| 여러 관측에 걸림 (`ambiguous`) | 7,118 | 22.2% |
| 어느 관측에도 없음 (`unmatched`) | 20,244 | 63.1% |

날짜와 출처가 깨끗하게 파싱되는 레퍼런스는 **267 / 269**다. 사실 추출은 거의 완벽하고,
**막히는 곳은 클레임 매핑이다.**

최고 커버리지가 `kkbox` 47%이고 상위 12개가 30~47% 구간이다. **100%는 하나도 없다.**

### 왜 63%가 안 걸리는가

`asana`의 unmatched를 열어보면 `#ffeaec`(coral-blush) · `#690031`(deep-coral) ·
`#466451`(sage) 같은 팔레트 항목이다. Method 문장은 *"full-DOM color frequency scan"*과
*"CSS hex extraction"*을 했다고 적지만, raw samples에는 **개별 항목으로 열거되지 않았다.**
관측은 실제로 있었을 것이나 기록이 집계 수준이다.

이것이 사람의 판단이 필요한 지점이고, 스크립트가 넘겨야 하는 이유다.

### 그래서 188건의 실제 비용

`matched` 14.7%는 **공짜로 얻는 부분**이다. 나머지는 leaf마다 "이 값이 저 관측에
포함되는가"를 사람이 답해야 한다. 레퍼런스당 정본 경로 중앙값이 100개 안팎이므로,
건당 60~80개의 판단이 남는다.

**도구가 할 일은 여기까지다.** 사실을 추출해 초안을 만들고, 판단이 필요한 목록을
따로 내놓는다. 그 목록을 채우는 것이 남은 작업이다.
