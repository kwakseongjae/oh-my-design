# Core 레퍼런스의 "UI font basis unresolved" — 원인과 **내가 틀렸던 진단** (2026-09-21)

> **이 문서의 앞선 판은 틀렸다.** "Core v2 그래프는 브랜드의 서체를 담고 있지 않다"고 적고
> 투영 결함으로 규정했다. **아니다. 그래프는 서체를 담고 있다.** 아래에 무엇을 잘못 봤는지와
> 실제 원인을 적는다. 잘못된 판은 이 문단으로 대체한다.

## 증상

```
/design-systems/serendie   Evidence snapshot … UI font basis unresolved
/design-systems/krds       Evidence snapshot … UI font basis unresolved
```

## 내가 틀린 경위

`coreTransport.fontRoles`를 열어 **첫 원소만** 봤다:

```
fontRoles[0] = {"id":"display","line_height":"1.6","size":"64px","weight":400}   ← family 없음
```

여기에 `family` 토큰 검색이 0건인 것을 더해 "Core 그래프에 서체가 없다"고 결론지었다.
그리고 `typography_assets.assets`가 셋 다 `null`인 것을 보고 **투영이 서체를 떨어뜨린다**고
썼다.

**전부를 봤어야 했다.** 마이그레이터는 선언된 family를 **body 모양 롤에** 붙인다
(`design-md-core.cjs:653`, 그 동작을 설명하는 긴 주석까지 달려 있다):

```
serendie   roles 5  → body = Roboto
krds       roles 11 → body-large = Pretendard GOV
toss       roles 6  → body = Toss Product Sans
```

`coreTransport.fontRoles`에도 그대로 나온다 — `sourceClass: "repository-fact"`와 evidence까지
달고서. **데이터는 처음부터 거기 있었다.**

부수적으로 틀린 것 둘:
- **`typography_assets.assets`가 비어 있는 건 결함이 아니다.** 그 슬롯은 폰트 *파일*과
  라이선스를 위한 것이고, `assets_fonts_licenses` 검사는 `UNMEASURED_CHECKS`에 **의도적으로**
  들어 있다 — 주석 그대로 *"Checks a text migration cannot speak to, and therefore does not
  claim."* 텍스트 마이그레이션은 폰트 라이선스를 검증할 수 없으므로 주장하지 않는다. 옳다.
- **"폴백은 근거를 지어내야 한다"도 틀렸다.** Core 롤이 `sourceClass`를 들고 있다.

## 실제 원인과 수정

`detail-view.tsx`가 `referenceAst?.foundations.uiFont` **하나만** 읽는데,
`repository.server.ts`는 Core canonical에 대해 `ast: null`을 두고 패키지를 서빙한다.
그래서 **서체가 아니라 그 근거(basis) 한 칸만** 비어 있었다 — Fonts 섹션은 내내 맞게
그리고 있었다:

```
serendie   Fonts Primary Roboto · Open · Apache 2.0 · Live webfont loaded in preview
krds       Fonts Primary Pretendard GOV · Brand-only · Live preview unavailable
```

수정: Core 레퍼런스면 패키지의 font role에서 basis를 가져온다.

```
serendie   UI font basis  unresolved → repository fact
krds       UI font basis  unresolved → repository fact
apple      UI font basis  frontmatter · high        (레거시, 불변)
```

`origin · confidence` 대신 **source class만** 보여준다. Core 계약은 값의 출처는 말하지만
confidence는 말하지 않고, 같은 모양을 채우려고 confidence를 지어내면 **근거 없는 값을 근거
있는 것처럼** 보이게 하는 것이다.

## 남는 교훈

배열의 **첫 원소를 보고 배열을 판단**했다. 그 전에 "코드가 family를 파싱하는가"를 확인했으면
`extractTypographyRoles`가 family를 읽어 body 롤에 붙인다는 주석을 바로 봤을 것이다 —
**앞선 세션이 toss의 빈 폰트를 고치려고 일부러 만든 동작**이다. 내가 없다고 선언한 것은
누군가 의도적으로 만들어 둔 것이었다.
