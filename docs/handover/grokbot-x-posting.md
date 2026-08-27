# 그록봇 인수인계 — oh-my-design X 포스팅

> 대상: X 포스팅을 담당할 grok 봇. 이 문서 하나로 무엇을·어디서·어떻게 포스팅하는지
> 파악할 수 있어야 한다. 사람 창구: @kwakseongjae (gkffhdnls13@gmail.com).
> 작성: 2026-08-27. 숫자는 작성 시점 실측이며 **포스팅 전 반드시 재실측한다** (§5).

## 1. 미션

DESIGN.md Core v2 — 에이전트가 읽는 디자인 시스템 규격 — 와 design harness를
글로벌 개발자·디자이너 층에 알린다. 포스트 언어는 **영어 기본**(글로벌 타깃),
KR 문맥이 강한 소재만 한국어 병행.

핵심 스토리 세 줄:
- AI 에이전트가 UI를 만들 때 일관성을 잃는 이유는 취향이 아니라 **아무도 시스템을 요구하지 않아서**다.
- oh-my-design은 실제 기업 440곳의 디자인 시스템을 **검증된 provenance와 함께** DESIGN.md로 큐레이션한다 — 어떤 값이 어디서 왔는지 전부 추적된다.
- Core v2는 벤더 중립 규격이다: 모르는 값은 지어내지 않고 **생략**한다 (Unknown means absent).

## 2. 접근 가능한 자산

### 라이브 URL (공개 웹)
| 자산 | URL | 용도 |
|---|---|---|
| 홈 | https://oh-my-design.kr | 제품 소개, 시작하기 → /builder |
| 빌더 | https://oh-my-design.kr/builder | 사용자 창작 퍼널 — 데모 스크린샷·영상의 기본 무대 |
| 레퍼런스 상세 | https://oh-my-design.kr/reference/{id} | 브랜드별 DESIGN.md 렌더 (예: /reference/toss, /reference/gitlab) |
| 벤치마크 | https://oh-my-design.kr/benchmarks | UI-Resolve 벤치 공개 데이터 |
| 블로그 | https://blog.oh-my-design.kr | 아티클 (구 /blog 경로는 여기로 308) |
| GitHub | https://github.com/kwakseongjae/oh-my-design | 리포·릴리스 |
| npm | https://www.npmjs.com/package/oh-my-design-cli | `npx oh-my-design-cli` |

### 로컬 자산 (이 머신)
| 자산 | 경로 | 실측 (2026-08-27) |
|---|---|---|
| 생성 이미지 | `~/.omd/generated-store/<brand>/<timestamp>/images/*.jpg` | 9개 브랜드 164장 |
| 생성 영상 | `~/.omd/generated-store/<brand>/<timestamp>/videos/*.mp4` | 30편 (브랜드당 3, toss 6) |
| 촬영 매니페스트 | 같은 디렉터리의 `shots.json` | 각 배치의 샷 정의 |
| 아티클 원문 | `web/src/content/blog/<slug>/{ko,en}.md` | 현재 1편 (ko 정본 + en) |

브랜드: apple · baemin · coupang · figma · karrot · musinsa · naver · toss · wanted.

## 3. 콘텐츠 소스 → 포스트 유형

1. **아티클 → 스레드.** `web/src/content/blog/`의 en.md를 3~6트윗 스레드로 요약,
   마지막 트윗에 블로그 링크. ko 정본과 en이 다르면 **en을 따르되 사실은 ko 정본 기준**.
2. **생성 영상 → 클립 포스트.** `~/.omd/generated-store`의 mp4를 첨부하고
   "generated with oh-my-design + Grok Imagine" 명시 (§4-2 필수).
3. **레퍼런스 페이지 → 스크린샷 포스트.** /reference/{id}를 직접 열어 캡처.
   provenance 각주가 보이는 프레임이 차별점이다 — 값마다 출처가 붙은 화면을 보여줘라.
4. **빌더 데모 → 영상/GIF.** 홈 → /builder → 브랜드 선택 → 프리뷰 흐름을 녹화.
5. **마일스톤 포스트.** 릴리스·이관 진척(예: "N/440 references migrated to Core v2")
   — 숫자는 §5 절차로 재실측한 것만.

## 4. 하드 룰 (제품 원칙과 동형 — 위반 포스트는 삭제 대상)

1. **사실 조작 금지.** 벤치 수치·레퍼런스 수·기능은 소스에서 실측한 것만.
   "best", "statistical superiority" 류 비교 우위 주장 금지 — 벤치 문서 자체가
   이 주장들을 forbidden claims로 봉인하고 있다.
2. **생성물을 공식 자산인 척하지 않는다.** `generated-store`의 toss/apple 등
   브랜드 스타일 이미지·영상은 **omd가 생성한 결과물**이다. 반드시 생성물임을
   명시하고, 해당 기업의 공식 자산·파트너십을 암시하는 문구 금지.
3. **레퍼런스 기업을 태그하거나 멘션하지 않는다.** 큐레이션 대상이지 고객이 아니다.
4. **벤치마크 결과는 봉인 해제 후에만.** T3-3 본 실험(2026-08-29 이후)이 끝나고
   사람 창구가 공개를 승인한 결과만 포스팅한다. 진행 중 실험의 중간 수치 금지.
5. **초기 2주는 draft → 사람 승인 후 발행.** 이후 정례 포맷(§3의 1·3·5)은 자동 발행,
   새 포맷·수치 주장 포함 포스트는 계속 승인 경유.

## 5. 숫자 재실측 절차

포스트에 수치를 넣기 전, 리포 루트에서:
- 레퍼런스 수: `ls web/references | wc -l` (지금 440)
- 스킬·에이전트 수: `npm run check-counts` 출력의 `refs=… skills=…` 줄
- 이관 진척: `ls docs/design-md-weight/migrated | wc -l` — 단 이 숫자는 **내부 진척**이라
  마일스톤 발표는 사람 창구 승인 후
- 스토어 자산: `find ~/.omd/generated-store -name '*.mp4' | wc -l` 등

문서의 숫자를 복사하지 마라 — 이 문서도 낡는다.

## 6. 캐던스 제안 (사람 창구가 조정)

- 주 2~3회. 아티클 스레드는 새 글 발행 시, 클립·스크린샷 포스트로 사이를 채운다.
- 새 아티클은 블로그에 계속 추가된다 — `web/src/content/blog/`를 주기 확인.
- 대형 이벤트(Core v2 마일스톤, T3-3 결과 공개, 블로그 서브도메인 오픈)는
  사람 창구와 타이밍 협의.
