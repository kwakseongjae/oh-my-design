# Core v2 그래프는 브랜드의 **서체를 담고 있지 않다** (2026-09-21)

상세 페이지가 Core 레퍼런스에 대해 "UI font basis unresolved"를 보여주는 걸 **작은 UI 갭**으로
적어뒀었다. 고치려고 파보니 **UI 갭이 아니다.**

## 증상

```
/design-systems/serendie   Evidence snapshot … UI font basis unresolved
/design-systems/krds       Evidence snapshot … UI font basis unresolved
```

그런데 AST는 답을 안다 — `foundations.uiFont = {value:"Roboto", claimPath:
"tokens.typography.family.ui", origin:"frontmatter", confidence:"high"}`.

## 진짜 원인 — 투영이 서체를 떨어뜨린다

상세 페이지는 `detail.referenceAst?.foundations.uiFont`를 읽는데, Core canonical이면
`repository.server.ts`가 `ast: null`로 두고 `coreTransport`를 대신 서빙한다. 그래서
"UI 폴백을 하나 넣으면 되겠다" 싶었는데, **Core 쪽에 읽을 것이 없었다:**

```
coreTransport.fontRoles   → 타입 롤만 (display 64px/400/1.6 …)
coreTransport tokens 중 family/fontFamily → []  (0개)
```

그래서 그래프를 직접 열었다:

```
serendie  typography_assets keys: roles, rules      assets: null
krds      typography_assets                          assets: null
toss      typography_assets                          assets: null
```

**세 Core 레퍼런스 전부 `typography_assets.assets`가 비어 있다.**

## 스키마에는 자리가 있다

`design-system-graph-v2.schema.json`의 `typographyAssets`는 **`roles` · `assets` · `rules`**
세 슬롯을 갖는다. `asset`은 `id` · `kind`(font|logo|icon|…) · `source_status` ·
`license_status`를 요구한다.

**슬롯은 규정돼 있고 아무도 채우지 않는다.** 마이그레이터 주석이 그대로 말한다
(`design-md-core.cjs:572`): "Promote `tokens.typography` into typed
`typography_assets.roles`" — **roles만**이다.

## 왜 지금까지 안 보였나

krds·toss는 **마이그레이션** 패키지라 `original_segments`에 레거시 바이트가 남아 있고,
`readReferenceSource`가 그걸 복원하면 frontmatter의 `tokens.typography.family.ui`가 살아난다.
그래서 레지스트리와 AST는 서체를 안다. **Core 그래프만 모른다.**

serendie는 **네이티브**라 원본 바이트가 없고, 서체는 카탈로그 확장 안에만 있다:

```
extensions["dev.oh-my-design.catalog"].frontmatter.tokens.typography.family
  = { ui: "Roboto", jp: "Noto Sans JP", mono: "Noto Sans Mono" }
```

카탈로그 확장은 **레거시 모양의 비상구**다. 즉 **Core 구조 자체는 브랜드 서체를 한 번도
담은 적이 없다.** 이식 가능한 그래프가 목적인 포맷에서 서체가 빠진 것은 작은 일이 아니다.

## 고치려면

`design-md-core.cjs`가 `tokens.typography.family.*`를 `typography_assets.assets`에도
`kind: "font"`로 내보내면 된다. 다만 두 가지가 걸린다:

1. **`source_status`·`license_status`를 뭘로 쓸 것인가.** 둘 다 증거 주장이다. 마이그레이터는
   폰트 라이선스가 검증됐는지 모른다 → `unresolved`가 정직하다. 그런데 "이름은 아는데 출처는
   모른다"를 기록하는 것이 유용한지는 판단이 필요하다. (스펙: *"a migrator never inserts …
   merely to satisfy schema"*)
2. **봉인된 패키지 3개를 다시 채택해야 한다.** 투영이 바뀌면 해시가 바뀐다.

**그래서 고치지 않고 적어둔다** — 투영을 바꾸는 일이고, 앞으로의 모든 채택에 영향을 주며,
`source_status` 의미는 오너가 정할 문제다. UI 폴백으로 덮으면 **그래프가 서체를 모른다는
사실만 가려진다.**

## 임시로 할 수 있는 것 (하지 않았다)

상세 페이지가 Core일 때 레지스트리의 `tokens.typography.family.ui`로 폴백하면 화면은
고쳐진다. 하지만 그건 **증상만 가리는 것**이고, "UI font basis"가 보여주는
`origin · confidence`는 AST에만 있어서 폴백엔 붙일 근거가 없다. 근거 없는 값을 근거 있는
것처럼 보이게 하는 건 이 카탈로그가 막는 행동이다.
