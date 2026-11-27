import { SiteFooterA } from "@/components/brand-a/site-footer";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { notoSansJP } from "@/components/brand-a/journey/faces";
import data from "@/data/kana-rules.generated.json";
import { AppPair } from "./app";
import { APP_PAIRS, type AppSide } from "./app-copy";
import { AppPart, AppSheet } from "./app-screen";
import { KanaStage } from "./compare";
import { RULE_KO, RULE_LABEL_KO, type KanaLocale } from "./copy";
import { KANA_KIT, KANA_PATHS } from "./locale";
import { Mixed, PairLines, Phrased, QuoteLine, RuleLine, SourceLink, leadIndex, tierText, type Example, type Quote } from "./parts";
import { TYPE_MEASURED, TYPE_QUOTE } from "./type-quotes";
import "./kana.css";
import "./showcase.css";

/**
 * /ko/kana and /ja/kana: the showcase for the /kana skill (a draft). Direction A of the owner's stills (2026-11-24),
 * built to /hangul's standard: the same moa screen in Japanese twice, in the forms the sources tell you to avoid and in
 * the forms they recommend, then three chapters that each change one thing (말투, the send sheet, 組版), a compact
 * index of every rule, and the draft's status where an install box would be.
 *
 * Both editions open on the phones, as /hangul does (owner 2026-11-25: 「카나도 앱 화면을 만들어서 한글처럼」). The
 * Japanese edition says who wrote its Japanese before the phones, and its second section sets the sources' own
 * wrong/right pairs beside what /kana is (until 11-25 those pairs were its first screen and the phones came second).
 *
 * Japanese of our own appears in three places only: the moa screens (app-copy.ts), the specimen heading in the 組版
 * chapter (app-copy.ts), and the Japanese edition's chrome (copy-ja.ts). Everything else in Japanese is a quote.
 * Not linked from the header or footer, noindex, and in no sitemap until the owner releases it (metadata.ts).
 */

const RULE = new Map(data.rules.map((r) => [r.id, r]));
const COUNTS = {
  rules: data.rules.length,
  house: data.houseChoices.length,
  sources: data.sources.length,
  services: data.fonts.services,
  opened: data.sources[0].opened,
  measured: data.fonts.measuredOn,
};

/** The 말투 chapter's rows: the part of the screen, and which of the rule's examples and quotes sit under it. */
const REGISTER_ROWS = [
  { rule: "KW-09", part: "toast", examples: [2], quotes: [0] },
  { rule: "KW-32", part: "greeting", examples: [1], quotes: [1] },
  { rule: "KW-12", part: "total", examples: [], quotes: [0, 1] },
] as const;

/** The sheet chapter's notes, top of the sheet down, each with the source example it shows. */
const SHEET_NOTES = [
  { rule: "KW-62", example: 0 },
  { rule: "KW-26", example: 0 },
  { rule: "KW-14", example: 0 },
  { rule: "KW-15", example: 0 },
] as const;

const COLUMNS: readonly (readonly string[])[] = [
  ["Register", "Keigo", "Buttons, labels and links"],
  ["Errors, results and status", "Dialogs and empty states", "Notation", "Numbers and counters", "Plain and fair wording"],
];

function examples(id: string): Example[] {
  return RULE.get(id)!.examples as Example[];
}

function Side({ side, label }: { side: AppSide; label: string }) {
  return (
    <p className={`km-side-l km-side-l--${side === "ai" ? "before" : "after"}`}>
      <i aria-hidden="true" />
      {label}
    </p>
  );
}

function Kicker({ locale }: { locale: KanaLocale }) {
  const { t } = KANA_KIT[locale];
  return (
    <p className="hg-kicker">
      <span className="hg-kicker-name" lang="en">
        /kana
      </span>
      <span>{t.hero.kicker}</span>
      <span className="km-chip">{t.hero.statusTag}</span>
    </p>
  );
}

function HeroKo() {
  const { t } = KANA_KIT.ko;
  return (
    <section className="hg-hero km-hero" aria-labelledby="km-h1">
      <div className="sq-wrap">
        <div className="hg-hero-head">
          <Kicker locale="ko" />
          <h1 id="km-h1" className="hg-h1">
            {t.hero.h1}
          </h1>
          <p className="hg-lede">{t.hero.lede}</p>
          <div className="hg-ctas">
            <a className="hg-btn hg-btn--solid" href="#rules">
              {t.hero.cta(data.rules.length)}
            </a>
            <a className="hg-btn hg-btn--line" href="#status">
              {t.hero.ctaSecond}
            </a>
          </div>
        </div>
        <AppPair locale="ko" tone="night" />
        <p className="km-composed">{t.app.composed}</p>
      </div>
    </section>
  );
}

function HeroJa() {
  const { t, issueUrl } = KANA_KIT.ja;
  return (
    <section className="hg-hero km-hero" aria-labelledby="km-h1">
      <div className="sq-wrap">
        <div className="hg-hero-head">
          <Kicker locale="ja" />
          <h1 id="km-h1" className="hg-h1">
            <Phrased text={t.app.h2!} />
          </h1>
          <p className="hg-lede">{t.app.intro}</p>
          <div className="hg-ctas">
            <a className="hg-btn hg-btn--solid" href="#rules">
              {t.hero.cta(data.rules.length)}
            </a>
            <a className="hg-btn hg-btn--line" href="#status">
              {t.hero.ctaSecond}
            </a>
          </div>
          {/* who wrote the page's Japanese, before the phones: a Japanese reader is told on the first screen */}
          <p className="km-notice">
            {t.hero.notice!.text}{" "}
            <a href={issueUrl} target="_blank" rel="noopener noreferrer">
              {t.hero.notice!.report}
              <span aria-hidden="true"> ↗</span>
              <span className="kn-visually-hidden">
                {t.paren[0]}
                {t.rules.newTab}
                {t.paren[1]}
              </span>
            </a>
          </p>
        </div>
        <AppPair locale="ja" tone="night" />
        <p className="km-composed">{t.app.composed}</p>
      </div>
    </section>
  );
}

/** The Japanese edition's second section: what /kana is, beside the sources' own wrong/right pairs (compare.tsx). */
function SourcePairsJa() {
  const { t } = KANA_KIT.ja;
  return (
    <section id="compare" className="km-src" aria-labelledby="km-compare-h">
      <div className="sq-wrap">
        <div className="km-src-grid">
          <div className="hg-ch-head">
            <h2 id="km-compare-h" className="hg-h2">
              <Phrased text={t.hero.h1} />
            </h2>
            <p className="hg-intro">{t.hero.lede}</p>
          </div>
          <KanaStage />
        </div>
      </div>
    </section>
  );
}

function ChapterHead({ id, eyebrow, h2, intro }: { id: string; eyebrow: string; h2: string; intro: string }) {
  return (
    <div className="hg-ch-head">
      <p className="hg-eyebrow">{eyebrow}</p>
      <h2 id={`km-${id}-h`} className="hg-h2">
        <Phrased text={h2} />
      </h2>
      <p className="hg-intro">
        <Mixed text={intro} />
      </p>
    </div>
  );
}

function Register({ locale }: { locale: KanaLocale }) {
  const { t } = KANA_KIT[locale];
  const c = t.register;
  return (
    <section id="register" className="hg-chapter km-chapter" aria-labelledby="km-register-h">
      <div className="sq-wrap">
        <ChapterHead id="register" eyebrow={c.eyebrow} h2={c.h2} intro={c.intro} />
        <div className="km-rows">
          {REGISTER_ROWS.map((row) => {
            const r = RULE.get(row.rule)!;
            const lead = leadIndex(row.rule, locale);
            const quotes = row.quotes.filter((i) => i !== lead).map((i) => r.quotes[i] as Quote);
            const body = c.rows[row.rule].body;
            return (
              <article key={row.rule} className="km-row" aria-labelledby={`km-${row.rule}-h`}>
                <div className="km-meta">
                  <p className="km-id" lang="en">
                    {row.rule}
                  </p>
                  {/* the Japanese edition's line restates the rule as the sources do, with a verb; a heading would be a noun (KW-02) */}
                  {locale === "ko" ? (
                    <h3 id={`km-${row.rule}-h`} className="km-row-h">
                      <Mixed text={c.rows[row.rule].h} />
                    </h3>
                  ) : (
                    <p id={`km-${row.rule}-h`} className="km-row-h">
                      {c.rows[row.rule].h}
                    </p>
                  )}
                  <p className="km-row-b">{body ? <Mixed text={body} /> : <RuleLine id={row.rule} locale={locale} />}</p>
                  <p className="km-tier">{r.tiers.filter((x) => x.tier !== "optim-not-counted").map((x) => tierText(x, locale)).join(" · ")}</p>
                </div>
                <div className="km-crops">
                  {(["ai", "fix"] as const).map((side) => (
                    <div key={side} className="km-crop-box">
                      <Side side={side} label={side === "ai" ? t.app.sides.before : t.app.sides.after} />
                      <AppPart part={row.part} side={side} />
                    </div>
                  ))}
                  <div className="km-crops-src">
                    <p className="km-crops-src-h">{c.srcHead}</p>
                    {row.examples.map((i) => (
                      <PairLines key={i} e={examples(row.rule)[i]} locale={locale} />
                    ))}
                    {quotes.map((q, i) => (
                      <QuoteLine key={i} q={q} />
                    ))}
                    <p className="km-srcs">
                      {[...new Set([...row.examples.map((i) => examples(row.rule)[i].key), ...row.quotes.map((i) => r.quotes[i].key)])].map((k) => (
                        <SourceLink key={k} k={k} locale={locale} />
                      ))}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Sheet({ locale }: { locale: KanaLocale }) {
  const { t } = KANA_KIT[locale];
  const c = t.sheet;
  return (
    <section id="sheet" className="hg-chapter km-chapter" aria-labelledby="km-sheet-h">
      <div className="sq-wrap">
        <ChapterHead id="sheet" eyebrow={c.eyebrow} h2={c.h2} intro={c.intro} />
        <div className="km-sheet-stage">
          <div className="km-sheetwrap km-sheetwrap--before">
            <Side side="ai" label={t.app.sides.before} />
            <AppSheet side="ai" />
          </div>
          <ol className="km-notes" aria-label={c.notesLabel}>
            {SHEET_NOTES.map((n) => {
              const e = examples(n.rule)[n.example];
              const note = c.notes[n.rule];
              return (
                <li key={n.rule} className="km-note">
                  <p className="hg-note-id" lang="en">
                    {n.rule}
                  </p>
                  <p className="km-note-t">
                    <Mixed text={note.t} />
                  </p>
                  <PairLines e={e} locale={locale} />
                  {note.mine ? (
                    <p className="km-note-mine">
                      <Mixed text={note.mine} />
                    </p>
                  ) : null}
                  <SourceLink k={e.key} locale={locale} />
                </li>
              );
            })}
          </ol>
          <div className="km-sheetwrap km-sheetwrap--after">
            <Side side="fix" label={t.app.sides.after} />
            <AppSheet side="fix" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FontBars({ locale }: { locale: KanaLocale }) {
  const { t } = KANA_KIT[locale];
  const f = data.fonts;
  // the two Hiragino families the measurement names separately are one face family here (27)
  const hira = f.firstFace.filter((x) => x.face?.startsWith("Hiragino"));
  const rows = [
    { name: "Hiragino", n: hira.reduce((a, x) => a + x.services, 0) },
    ...f.firstFace.filter((x) => !x.face?.startsWith("Hiragino")).map((x) => ({ name: x.face ?? t.fonts.none, n: x.services })),
  ].sort((a, b) => b.n - a.n);
  const max = rows[0].n;
  return (
    <ul className="km-bars" aria-label={t.fonts.label}>
      {rows.map((r) => (
        <li key={r.name} className="km-bar">
          <span lang={r.name === t.fonts.none ? locale : "en"}>{r.name}</span>
          <span className="km-bar-t" aria-hidden="true">
            <i style={{ width: `${(r.n / max) * 100}%` }} />
          </span>
          <span className="km-bar-n">
            {r.n}
            {t.fonts.unit}
          </span>
        </li>
      ))}
    </ul>
  );
}

function TypeNote({ id, title, mine, locale }: { id: "JT-01" | "JT-05" | "JT-13"; title: string; mine: string; locale: KanaLocale }) {
  const q = TYPE_QUOTE.get(id)!;
  const { t } = KANA_KIT[locale];
  return (
    <li className="km-note">
      <p className="hg-note-id" lang="en">
        {id === "JT-13" ? "JT-13 · JT-14" : id}
      </p>
      <p className="km-note-t">
        <Phrased text={title} />
      </p>
      <QuoteLine q={q} />
      <p className="km-note-mine">
        <Mixed text={mine} />
      </p>
      <span className="kn-src">
        <a href={q.source.url} target="_blank" rel="noopener noreferrer" lang="en" aria-label={`${q.source.name}${t.paren[0]}${t.rules.newTab}${t.paren[1]}`}>
          {q.source.name}
          <span aria-hidden="true"> ↗</span>
        </a>
      </span>
    </li>
  );
}

function TypeChapter({ locale }: { locale: KanaLocale }) {
  const { t } = KANA_KIT[locale];
  const c = t.type;
  const m = TYPE_MEASURED;
  const body = TYPE_QUOTE.get("JT-01")!.text;
  const spec = (k: "kr" | "ja") => (
    <div className="km-spec-box">
      <Side side={k === "kr" ? "ai" : "fix"} label={k === "kr" ? c.before : c.after} />
      <div className={`km-spec km-spec--${k}`} lang="ja">
        <p className="km-spec-h">{APP_PAIRS.find((p) => p.key === "greeting")!.fix}</p>
        <p className="km-spec-p">{body}</p>
      </div>
      <p className="km-spec-set" lang="en">
        {k === "kr" ? "keep-all · overflow-wrap: anywhere · heading −0.02em · body 1.5" : "normal · heading auto-phrase · letter-spacing 0 · body 1.7"}
      </p>
    </div>
  );
  return (
    <section id="type" className="hg-chapter km-chapter" aria-labelledby="km-type-h">
      <div className="sq-wrap">
        <ChapterHead id="type" eyebrow={c.eyebrow} h2={c.h2} intro={c.intro} />
        <div className="km-type">
          {spec("kr")}
          {spec("ja")}
          <ol className="km-notes" aria-label={c.notesLabel}>
            <TypeNote id="JT-13" title={c.keepAll.t} mine={c.keepAll.mine(m.ja.services, m.ja.keepAll)} locale={locale} />
            <TypeNote id="JT-05" title={c.tracking.t} mine={c.tracking.mine(m.ja.services, m.ja.headingNegative, m.ko.headings, m.ko.headingNegative)} locale={locale} />
            <TypeNote id="JT-01" title={c.leading.t} mine={c.leading.mine(m.ja.paragraphServices, m.ja.paragraphMedian)} locale={locale} />
            <li className="km-note">
              <p className="hg-note-id" lang="en">
                JT-22
              </p>
              <p className="km-note-t">
                <Phrased text={c.fonts.t(data.fonts.services)} />
              </p>
              <FontBars locale={locale} />
              <p className="km-note-mine">{c.fonts.caption(data.fonts.measuredOn)}</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

/** One row of the index: the rule in one line; opened, its reading, its strength, a quote, an example and the way to
 *  the rule's full card. */
function IndexRow({ id, locale }: { id: string; locale: KanaLocale }) {
  const { t, rulesPath } = KANA_KIT[locale];
  const r = RULE.get(id)!;
  const lead = leadIndex(id, locale);
  const quote = (r.quotes as Quote[]).find((_, i) => i !== lead);
  const ex = (r.examples as Example[])[0];
  return (
    <li id={id.toLowerCase()} className="km-li">
      <details>
        <summary className="km-li-b">
          <span className="hg-rule-tag" lang="en">
            {id}
          </span>
          <span className="km-li-t">{locale === "ko" ? <Mixed text={RULE_LABEL_KO[id]} /> : <RuleLine id={id} locale="ja" />}</span>
          <span className="km-li-x" aria-hidden="true" />
        </summary>
        <div className="km-li-open">
          {locale === "ko" ? (
            <p className="km-row-b">
              <Mixed text={RULE_KO[id]} />
            </p>
          ) : null}
          <p className="km-tier">{r.tiers.map((x) => tierText(x, locale)).join(" · ")}</p>
          {quote ? (
            <div>
              <QuoteLine q={quote} />
              <SourceLink k={quote.key} locale={locale} />
            </div>
          ) : null}
          {ex ? (
            <div className="km-srcbox">
              <PairLines e={ex} locale={locale} />
              <SourceLink k={ex.key} locale={locale} />
            </div>
          ) : null}
          <a className="km-li-more" href={`${rulesPath}#${id.toLowerCase()}`}>
            {t.index.open}
          </a>
        </div>
      </details>
    </li>
  );
}

function RuleIndex({ locale }: { locale: KanaLocale }) {
  const { t, area, rulesPath } = KANA_KIT[locale];
  return (
    <section id="rules" className="hg-rules-sec km-index-sec" aria-labelledby="km-rules-h">
      <div className="sq-wrap">
        <h2 id="km-rules-h" className="hg-h2">
          {t.index.h2(data.rules.length)}
        </h2>
        <p className="hg-intro">{t.index.intro}</p>
        <div className={`km-index km-index--${locale}`}>
          {COLUMNS.map((col, i) => (
            <div key={i}>
              {col.map((name) => {
                const a = data.areas.find((x) => x.name === name)!;
                return (
                  <div key={name} className="km-area">
                    <h3 className="km-area-h">
                      <span>{area[name]}</span>
                      <span className="km-area-n">{a.rules.length}</span>
                    </h3>
                    <ol className="km-list">
                      {a.rules.map((id) => (
                        <IndexRow key={id} id={id} locale={locale} />
                      ))}
                    </ol>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <nav className="km-more" aria-label={t.index.moreH}>
          <p className="km-more-h">{t.index.moreH}</p>
          <ul>
            {t.index.more(COUNTS).map((x) => (
              <li key={x.hash}>
                <a href={`${rulesPath}${x.hash}`}>
                  <span className="km-more-k">{x.k}</span>
                  <span className="km-more-t">{x.t}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

function Status({ locale }: { locale: KanaLocale }) {
  const { t } = KANA_KIT[locale];
  return (
    <section id="status" className="km-status" aria-labelledby="km-status-h">
      <div className="sq-wrap">
        <h2 id="km-status-h" className="hg-h2">
          {t.status.h2}
        </h2>
        <div className="km-status-grid">
          <dl className="km-status-list">
            {t.status.items.map((x) => (
              <div key={x.k}>
                <dt>{x.k}</dt>
                <dd>
                  <Mixed text={x.t} />
                </dd>
              </div>
            ))}
          </dl>
          <nav className="hg-more km-status-more" aria-label={t.status.moreH}>
            <p className="hg-more-h">{t.status.moreH}</p>
            <ul>
              {t.status.links.map((x) => {
                const out = x.href.startsWith("http");
                return (
                  <li key={x.href}>
                    <a className="hg-more-a" href={x.href} {...(out ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      <span className="hg-more-k">{x.k}</span>
                      <span className="hg-more-t">{x.t}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export function KanaShowcase({ locale }: { locale: KanaLocale }) {
  return (
    <div className={`sq-root sq-root-page kn-root km-root ${notoSansJP.variable}`} lang={locale}>
      {/* the Japanese edition's language switch points at the Korean one; the Korean edition's does not point at the
          Japanese one until the owner releases it (the switch is navigation from a live page). Release list: metadata.ts */}
      <SiteHeaderA locale={locale} current={locale} localeHrefs={locale === "ja" ? KANA_PATHS : { ko: KANA_PATHS.ko }} />
      <main id="main" className="hg-main kn-main km-main">
        {locale === "ko" ? <HeroKo /> : <HeroJa />}
        {locale === "ja" ? <SourcePairsJa /> : null}
        <Register locale={locale} />
        <Sheet locale={locale} />
        <TypeChapter locale={locale} />
        <RuleIndex locale={locale} />
        <Status locale={locale} />
      </main>
      <SiteFooterA locale={locale} current={locale} />
    </div>
  );
}

