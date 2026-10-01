import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import s from "./hangul.module.css";
import { HangulHero, MetricsCard } from "./hangul-hero";
import { SpecimenToggle } from "./specimen-toggle";
import { TornHeadline } from "./torn-headline";
import { CopyCommand } from "./copy-command";

const SITE_URL = "https://oh-my-design.kr";
const REPO = "https://github.com/kwakseongjae/oh-my-design";
const INSTALL =
  "npx oh-my-design-cli@latest install-skills --skills hangul --skills-only";

const TITLE = "/hangul — AI가 만든 한국어 화면의 줄바꿈·글꼴·자간을 바로잡는 스킬";
const DESCRIPTION =
  "AI가 만든 화면에서 ‘있어요’가 ‘있어 / 요.’로 잘려 줄이 바뀝니다. /hangul은 W3C·KRDS 같은 공개 문서와 한국 서비스 67곳을 직접 잰 값을 바탕으로, AI 코딩 에이전트가 따를 한글 조판 규칙을 담은 스킬입니다.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/hangul` },
  openGraph: {
    title: "‘요.’만 다음 줄로 넘어갔습니다 — /hangul",
    description: DESCRIPTION,
    url: `${SITE_URL}/hangul`,
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/hangul/og.png",
        width: 1200,
        height: 630,
        alt: "‘있어 / 요.’로 끊긴 제목과 CSS 한 줄로 고친 제목",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "‘요.’만 다음 줄로 넘어갔습니다 — /hangul",
    description: DESCRIPTION,
    images: ["/hangul/og.png"],
  },
};

const SPECIMEN_FONT =
  'Arial, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
/** The eval's After face was Pretendard; this page loads it, so the HG-1 After shows the same face. */
const KOREAN_FIRST =
  '"Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif';
const PRETENDARD_CSS =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";

function SectionHead({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className={s.grid}>
      <div className="lg:col-span-7">
        <p className={s.kicker}>{eyebrow}</p>
        <h2 id={`${id}-title`} className={`${s.h2} mt-3`}>
          {title}
        </h2>
      </div>
      {children ? (
        <div
          className={`${s.lede} mt-5 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:self-end`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

function Scene({
  id,
  title,
  rule,
  children,
  text,
}: {
  id: string;
  title: string;
  rule: string;
  text?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <article className={`${s.scene} ${s.grid}`} aria-labelledby={`${id}-h`}>
      <div className={s.sceneText}>
        <p className={`${s.ruleId} ${s.mono}`}>
          {id.toUpperCase().replace("HG", "HG-")}
        </p>
        <p className={`${s.note} mt-1 font-semibold`}>{rule}</p>
        <h3 id={`${id}-h`} className={`${s.h3} mt-4`}>
          {title}
        </h3>
        {text ? <div className={`${s.body} mt-3`}>{text}</div> : null}
      </div>
      {children ? <div className={s.sceneStage}>{children}</div> : null}
    </article>
  );
}

export default function HangulPage() {
  return (
    <div lang="ko" className={`${s.root} min-h-screen`}>
      {/* React 19 hoists this into <head>. OFL, variable dynamic subset (weight 45–920). */}
      <link
        rel="stylesheet"
        href={PRETENDARD_CSS}
        precedence="default"
        crossOrigin="anonymous"
      />

      <header className={s.wrap}>
        <div className={s.masthead}>
          <Link href="/" className={s.navLink}>
            <ArrowLeft className="size-4" aria-hidden /> oh-my-design
          </Link>
          <a href={`${REPO}/tree/main/skills/hangul`} className={s.navLink}>
            GitHub <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </header>

      <main>
        {/* 1 · Hero: the torn word */}
        <section aria-labelledby="hero-title" className={`${s.wrap} ${s.hero}`}>
          <div className={s.heroMeta}>
            <p className={`${s.mono} text-lg font-bold`}>/hangul</p>
            <p className={s.note}>
              한글 조판 규칙 14가지 · AI 코딩 에이전트용 스킬
            </p>
          </div>

          <div className={s.grid}>
            <TornHeadline
              cta={
                <a href="#demo" className={`${s.btn} ${s.btnSolid}`}>
                  화면 폭 바꿔 보기 ↓
                </a>
              }
            >
              <div>
                <h1 id="hero-title" className={s.heroH1}>
                  ‘요.’만
                  <br />다음 줄로 넘어갔습니다
                </h1>
                <p className={`${s.lede} mt-5`}>
                  Codex CLI가 /hangul 없이 만든 평가용 페이지에 실제로 나온
                  제목입니다. 어디서 잘리는지는 기기의 글꼴에 따라 달라집니다.
                  제목에 CSS 한 줄을 더하면 단어가 통째로 다음 줄로 넘어갑니다.
                </p>
              </div>
            </TornHeadline>
          </div>
        </section>

        {/* 2 · Live demo (dark band) */}
        <section
          id="demo"
          aria-labelledby="demo-title"
          className={`${s.band} ${s.section}`}
        >
          <div className={s.wrap}>
            <SectionHead
              id="demo"
              eyebrow="직접 해 보기 · 평가 페이지 재현"
              title={<>같은 제목도<br />기기마다 다른 곳에서 잘립니다</>}
            >
              카드는 평가 페이지의 마크업을 그대로 옮긴 것입니다. 폭을 바꾸면
              잘리는 자리도 바뀝니다. 규칙을 켜면 어느 폭에서도 단어가 잘리지
              않습니다.
            </SectionHead>
            <div className="mt-12 lg:mt-16">
              <HangulHero>
                <div>
                  <p className="font-semibold">기기별로 확인한 결과</p>
                  <dl className="mt-3">
                    <div className={s.platformRow}>
                      <dt className={s.note}>
                        macOS · Apple SD Gothic Neo · 360px
                      </dt>
                      <dd
                        className={s.platformWord}
                        style={{ color: "var(--accent)" }}
                      >
                        ‘있어 / 요.’
                      </dd>
                    </div>
                    <div className={s.platformRow}>
                      <dt className={s.note}>
                        안드로이드 대신 Linux에서 확인 · Noto Sans CJK KR ·
                        360px
                      </dt>
                      <dd
                        className={s.platformWord}
                        style={{ color: "var(--accent)" }}
                      >
                        ‘있 / 어요.’
                      </dd>
                    </div>
                    <div className={s.platformRow}>
                      <dt className={s.note}>Windows · 맑은 고딕</dt>
                      <dd className={s.body}>
                        360px에서는 띄어쓰기 자리에서 줄이 바뀌지만, 390px에서는
                        ‘있 / 어요.’, 412px에서는 ‘있어 / 요.’로 잘립니다.
                      </dd>
                    </div>
                    <div
                      className={s.platformRow}
                      style={{ borderBottom: "1px solid var(--line)" }}
                    >
                      <dt className={s.note}>규칙 적용 후</dt>
                      <dd className={s.platformWord}>
                        규칙 한 줄을 더하자 9개 조합 모두에서 잘린 단어가
                        없었습니다.
                      </dd>
                    </div>
                  </dl>
                  <p className={`${s.note} mt-4`}>
                    ‘사람들이모아와’처럼 띄어쓰기가 빠진 것도 원본 그대로입니다.
                    680px 이하에서 숨기는 &lt;br&gt; 자리에 공백이 없어서 생긴
                    일로, 문구는 고치지 않았습니다.
                  </p>
                </div>
              </HangulHero>
            </div>
          </div>
        </section>

        {/* 3 · Four scenes */}
        <section
          id="scenes"
          aria-labelledby="scenes-title"
          className={`${s.wrap} ${s.section}`}
        >
          <SectionHead
            id="scenes"
            eyebrow="스킬 없이 만든 화면 · Codex 사례 네 가지"
            title={<>스킬 없이 만들면<br />이런 화면이 나옵니다</>}
          >
            모두 Codex CLI가 스킬 없이 만든 평가 페이지에서 가져왔습니다. 같은
            조건으로 만든 Claude(Sonnet) 결과물에서는 이렇게 눈에 띄는 사례를
            찾지 못했습니다.
          </SectionHead>

          <div className="mt-12 lg:mt-20">
            <Scene
              id="hg10"
              rule="제목은 단어 단위로 줄바꿈"
              title="제목이 단어 중간에서 잘린다"
              text={
                <>
                  <p>
                    한국어 제목·버튼·라벨은 띄어쓰기 단위로 줄을 바꿉니다(CSS
                    Text 3 · klreq). 위 데모가 바로 이 규칙입니다.
                  </p>
                  <a
                    href="#demo"
                    className={`${s.inlineLink} mt-3 inline-flex min-h-11 items-center font-semibold`}
                  >
                    데모로 돌아가기 ↑
                  </a>
                </>
              }
            />

            <Scene
              id="hg1"
              rule="글꼴 목록 맨 앞에 한글 글꼴"
              title="숫자와 한글이 서로 다른 글꼴로 나온다"
            >
              <SpecimenToggle
                id="hg1"
                before={
                  <div
                    className="px-5 py-8 text-center"
                    style={{ fontFamily: SPECIMEN_FONT }}
                  >
                    <strong
                      style={{
                        fontSize: 35,
                        fontWeight: 750,
                        lineHeight: 1.25,
                      }}
                    >
                      320
                      <span style={{ fontSize: 20, marginLeft: 2 }}>
                        만 명+
                      </span>
                    </strong>
                  </div>
                }
                after={
                  <div
                    className="px-5 py-8 text-center"
                    style={{ fontFamily: KOREAN_FIRST }}
                  >
                    <strong
                      style={{
                        fontSize: 35,
                        fontWeight: 750,
                        lineHeight: 1.25,
                      }}
                    >
                      320
                      <span style={{ fontSize: 20, marginLeft: 2 }}>
                        만 명+
                      </span>
                    </strong>
                  </div>
                }
                beforeNote={
                  <>
                    글꼴 목록이 Arial로 시작합니다. macOS에서 ‘320’과 ‘+’는
                    Arial로, ‘만 명’은 Apple SD Gothic Neo로 그려졌습니다(Chrome
                    DevTools Protocol로 측정).
                  </>
                }
                afterNote={
                  <>
                    한글 글꼴을 맨 앞에 두면 숫자와 한글이 같은 글꼴로 나옵니다.
                    평가에서 스킬을 쓴 쪽은 Pretendard였고, 이 페이지도
                    Pretendard를 불러와 보여 줍니다. 불러오지 못하면 기기에 있는
                    한글 글꼴로 그립니다.
                  </>
                }
              />
            </Scene>

            <Scene
              id="hg7"
              rule="제목 자간은 −0.03em까지"
              title="제목 자간을 영문처럼 좁힌다"
            >
              <SpecimenToggle
                id="hg7"
                before={
                  <p
                    className="px-6 py-8"
                    style={{
                      fontFamily: SPECIMEN_FONT,
                      fontSize: 32,
                      fontWeight: 700,
                      lineHeight: 1.33,
                      letterSpacing: "-0.064em",
                    }}
                  >
                    내 돈의 모든 순간,
                    <br />더 가볍게.
                  </p>
                }
                after={
                  <p
                    className="px-6 py-8"
                    style={{
                      fontFamily: SPECIMEN_FONT,
                      fontSize: 32,
                      fontWeight: 700,
                      lineHeight: 1.33,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    내 돈의 모든 순간,
                    <br />더 가볍게.
                  </p>
                }
                beforeNote={
                  <>
                    평가 페이지 원본은 390px 화면의 44px 제목에 자간 −2.8px(약
                    −0.064em)를 썼습니다. 여기서는 같은 비율을 32px 제목에
                    적용했습니다. 글꼴은 그대로 두고 자간만 바꿉니다.
                  </>
                }
                afterNote={
                  <>
                    −0.03em으로 바꿨습니다. 제목을 잰 한국 서비스 65곳 중 23곳이
                    음수 자간을 썼고, 그중 22곳은 −0.03em보다 좁지
                    않았습니다(나머지 1곳은 −0.05em). 이 기준은 공개 표준이
                    아니라 OmD가 실측을 바탕으로 정한 값입니다.
                  </>
                }
              />
            </Scene>

            <Scene
              id="hg3"
              rule="11px보다 작은 글자 금지"
              title="모바일에서 캡션을 8px까지 줄인다"
            >
              <SpecimenToggle
                id="hg3"
                before={
                  <div className={s.phone}>
                    <MetricsCard />
                  </div>
                }
                after={
                  <div className={`${s.phone} ${s.ruleOn} ${s.captionsFixed}`}>
                    <MetricsCard />
                  </div>
                }
                beforeNote={
                  <>
                    같은 평가 페이지에서 680px 이하에 쓰던 스타일 그대로입니다.
                    지표 설명은 8px, 지표 이름은 10px입니다.
                  </>
                }
                afterNote={
                  <>
                    모두 11px로 키우고 keep-all을 더했습니다. 줄이 늘어나도
                    단어 단위로 넘어갑니다. SEED는 가장 작은 글자 토큰이 11px이고,
                    TDS는 13px 단계를 ‘안 읽어도 됨’으로 둡니다.
                  </>
                }
              />
            </Scene>
          </div>
        </section>

        {/* 4 · Eval (tinted): one statement */}
        <section
          id="eval"
          aria-labelledby="eval-title"
          className={`${s.tinted} ${s.section}`}
        >
          <div className={s.wrap}>
            <SectionHead
              id="eval"
              eyebrow="평가 결과"
              title={<>스킬 없이 만든 18개 중<br />17개가 규칙을 어겼습니다</>}
            >
              한국어 UI 과제 3개를 Codex CLI와 Claude에 3번씩 맡겨, 스킬 없이
              18개, 스킬을 써서 18개를 만들었습니다.
            </SectionHead>

            <div className={`${s.evalPair} mt-12 lg:mt-16`}>
              <div className={s.evalCell}>
                <p className="font-semibold">스킬 없이 · 규칙 위반</p>
                <p className={`${s.bigFigure} ${s.num} mt-2`}>
                  <span style={{ color: "var(--accent)" }}>17</span>
                  <span className={s.figureOf}>/18</span>
                </p>
              </div>
              <span className={s.figureArrow} aria-hidden>
                →
              </span>
              <div className={s.evalCell}>
                <p className="font-semibold">스킬 적용 · 규칙 위반</p>
                <p className={`${s.bigFigure} ${s.num} mt-2`}>
                  0<span className={s.figureOf}>/18</span>
                </p>
              </div>
            </div>
            <p className={`${s.note} mt-8`}>
              채점은 스킬에 들어 있는 체커 기준이라, 스킬 쪽에 유리할 수
              있습니다.
            </p>
          </div>
        </section>

        {/* 5 · Measured 67 */}
        <section
          id="measured"
          aria-labelledby="measured-title"
          className={`${s.wrap} ${s.section}`}
        >
          <SectionHead
            id="measured"
            eyebrow="규칙의 근거"
            title="한국 서비스 67곳을 직접 쟀습니다"
          >
            OmD가 한국 서비스 67곳의 공개 웹 화면에서 잰 값입니다(2026-07-11~13
            캡처, 앱과 로그인 화면은 제외). 여기에 W3C klreq·CSS Text 명세와
            KRDS·SEED·TDS 공개 문서를 더해 규칙을 만들었습니다.
          </SectionHead>
          <dl className={`${s.specList} mt-12 lg:mt-20`}>
            {[
              {
                k: "본문 크기",
                v: "16px",
                d: "중앙값입니다. 67곳 중 53곳이 14–17px를 씁니다.",
              },
              {
                k: "본문 행간",
                v: "1.5",
                d: "중앙값입니다. 값을 확인할 수 있었던 53곳 중 31곳이 1.4–1.6입니다.",
              },
              {
                k: "본문 자간",
                v: "0",
                d: "67곳 중 52곳이 정확히 0이고, 양수 자간을 쓴 곳은 없습니다.",
              },
              {
                k: "주 글꼴이 Pretendard",
                v: "40/67",
                d: "한글 글꼴을 글꼴 목록 맨 앞에 둔 곳은 67곳 중 49곳입니다.",
              },
              {
                k: "제목 자간",
                v: "−0.03em",
                d: "제목에 음수 자간을 쓴 23곳 중 22곳이 이 값보다 좁지 않습니다. 나머지 1곳은 −0.05em입니다.",
              },
            ].map((x) => (
              <div key={x.k} className={s.specRow}>
                <dt className={`${s.specKey} font-semibold`}>{x.k}</dt>
                <dd className={`${s.specValue} ${s.num}`}>{x.v}</dd>
                {/* Word joiners keep a range like 14–17px on one line. */}
                <dd className={`${s.specDesc} ${s.body}`}>
                  {x.d.replace(/(\d)–(\d)/g, "$1\u2060–\u2060$2")}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 6 · Install (dark band) */}
        <section
          id="install"
          aria-labelledby="install-title"
          className={`${s.band} ${s.section}`}
        >
          <div className={s.wrap}>
            <SectionHead
              id="install"
              eyebrow="설치"
              title="설치하고, 평소처럼 요청하세요"
            />
            <ol className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-12">
              <li className={s.step}>
                <p className={`${s.stepNum} ${s.num}`}>1</p>
                <p className={`${s.h3} mt-1`}>스킬 설치</p>
                <div className="mt-4">
                  <CopyCommand command={INSTALL} />
                </div>
              </li>
              <li className={s.step}>
                <p className={`${s.stepNum} ${s.num}`}>2</p>
                <p className={`${s.h3} mt-1`}>에이전트에게 요청하기</p>
                <p className={`${s.body} mt-4`}>
                  “이 화면 한글 줄바꿈이 이상해”, “한국어 랜딩 만들어 줘”처럼
                  평소대로 말하면 됩니다. 새 화면을 만들 때는 규칙을
                  적용하고(APPLY), 기존 코드는 점검합니다(AUDIT). DESIGN.md에
                  타이포그래피 토큰이 있으면 그 값을 먼저 따릅니다.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <footer className={`${s.wrap} py-10`}>
          <p className={s.note}>
            <a
              href={`${REPO}/tree/main/skills/hangul`}
              className={s.inlineLink}
            >
              skills/hangul
            </a>{" "}
            · oh-my-design
          </p>
        </footer>
      </main>
    </div>
  );
}
