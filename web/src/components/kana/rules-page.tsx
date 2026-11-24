import { type ReactNode } from "react";
import { SiteFooterA } from "@/components/brand-a/site-footer";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { notoSansJP } from "@/components/brand-a/journey/faces";
import data from "@/data/kana-rules.generated.json";
import { HOUSE_KO, RULE_KO, type KanaLocale } from "./copy";
import { KANA_KIT, KANA_RULES_PATHS } from "./locale";
import { Ja, Mixed, SourceLink, Tiers } from "./parts";
import { jaLead } from "./rule-lead";
import "./kana.css";

/**
 * /ko/kana/rules and /ja/kana/rules: the reference behind the showcase (2026-11-24). Every rule as a card, by the
 * file's areas, with all its quotes and examples; the house choices, every side with its source; the first Japanese face
 * in 77 measured services; the sources. This was the body of /ko/kana until the showcase took that address.
 *
 * Two editions, one component (PR #160's Japanese edition, ported): the Japanese edition shows no Japanese of ours
 * beyond the chrome in copy-ja.ts. Each card leads with the source's own sentence (rule-lead.ts) instead of a reading,
 * the house choices show their sources' quotes under writing-rules.md's English titles, and #use (advice prose) is left
 * out. Not linked from the header or footer, noindex, and in no sitemap (metadata.ts).
 */

type KanaData = typeof data;
type Rule = KanaData["rules"][number];
type Quote = { key: string; text: string; via?: string; label?: string; lang?: string };
type Example = { key: string; via?: string; sides: { role: string; label: string | null; texts: string[] }[] };

const SOURCE = new Map(data.sources.map((s) => [s.key, s]));

/** Consecutive quotes from one source page, as one block with the source named once. */
function groupByKey(quotes: readonly Quote[]): Quote[][] {
  const out: Quote[][] = [];
  for (const q of quotes) {
    const last = out[out.length - 1];
    if (last && last[0].key === q.key && last[0].via === q.via) last.push(q);
    else out.push([q]);
  }
  return out;
}

/** One block of quotes from one source: a line per quote, quotes under the same label (OK, NG …) on one line. */
function QuoteBlock({ quotes, locale }: { quotes: readonly Quote[]; locale: KanaLocale }) {
  const lines: Quote[][] = [];
  for (const q of quotes) {
    const last = lines[lines.length - 1];
    if (last && q.label && last[0].label === q.label) last.push(q);
    else lines.push([q]);
  }
  return (
    <figure className="kn-quote">
      <blockquote lang="ja">
        {lines.map((line, i) => (
          <p key={i} className="kn-qline">
            {line[0].label ? <span className="kn-qlabel">{line[0].label}</span> : null}
            {line.map((q, j) => (
              <span key={j} className="kn-qtext" lang={q.lang}>
                <Ja text={q.text} en={q.lang === "en"} />
              </span>
            ))}
          </p>
        ))}
      </blockquote>
      <figcaption>
        <SourceLink k={quotes[0].key} locale={locale} />
      </figcaption>
    </figure>
  );
}

function ExampleBlock({ e, locale }: { e: Example; locale: KanaLocale }) {
  const { t } = KANA_KIT[locale];
  return (
    <div className="kn-ex">
      <div className="kn-ex-sides">
        {e.sides.map((s, i) => (
          <div key={i} className={`kn-ex-side kn-ex-side--${s.role}`}>
            <p className="kn-ex-label">{s.label ? (
                <span lang={/^[A-Za-z']+$/.test(s.label) ? "en" : "ja"}>{s.label}</span>
              ) : s.role === "given" ? (
                t.rules.given
              ) : s.role === "wrong" ? (
                t.rules.before
              ) : (
                t.rules.after
              )}</p>
            <ul lang="ja">
              {s.texts.map((x, j) => (
                <li key={j}>
                  <Ja text={x} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="kn-ex-src">
        <SourceLink k={e.key} locale={locale} />
      </p>
    </div>
  );
}

function RuleCard({ r, level, locale }: { r: Rule; level: "h3" | "h4" | "h5"; locale: KanaLocale }) {
  const H = level;
  const { t } = KANA_KIT[locale];
  const examples = r.examples as Example[];
  // the Japanese edition: the source's own sentence leads the card (rule-lead.ts) and is not repeated below
  const lead = locale === "ja" ? jaLead(r) : null;
  const quotes = (r.quotes as Quote[]).filter((_, i) => i !== lead?.index);
  const english = (
    <>
      <span className="kn-visually-hidden" lang={locale}>
        {t.rules.english}
        {t.colon}
      </span>
      <Mixed text={r.rule} />
    </>
  );
  return (
    <article id={r.id.toLowerCase()} className="kn-card" aria-labelledby={`${r.id}-h`}>
      <div className="kn-card-top">
        <span className="kn-id" lang="en">
          {r.id}
        </span>
        <Tiers tiers={r.tiers} locale={locale} />
      </div>
      {locale === "ko" ? (
        <H id={`${r.id}-h`} className="kn-card-h">
          <Mixed text={RULE_KO[r.id]} />
        </H>
      ) : lead ? (
        <div className="kn-lead">
          <H id={`${r.id}-h`} className="kn-card-h kn-card-h--quote" lang={lead.quote.lang === "en" ? "en" : "ja"}>
            <Ja text={lead.quote.text} en={lead.quote.lang === "en"} />
          </H>
          <SourceLink k={lead.quote.key} locale={locale} />
        </div>
      ) : (
        <H id={`${r.id}-h`} className="kn-card-h kn-card-h--en" lang="en">
          {english}
        </H>
      )}
      {locale === "ko" || lead ? (
        <p className="kn-en" lang="en">
          {english}
        </p>
      ) : null}
      {quotes.length ? (
        <div className="kn-quotes">
          {groupByKey(quotes).map((g, i) => (
            <QuoteBlock key={i} quotes={g} locale={locale} />
          ))}
        </div>
      ) : null}
      <div className="kn-exs">
        <p className="kn-exs-h">{t.rules.examples}</p>
        {r.exampleNote ? (
          <p className="kn-exs-none">{/^the pairs in/.test(r.exampleNote) ? t.rules.pairsInQuote : t.rules.noExample}</p>
        ) : null}
        {examples.map((e, i) => (
          <ExampleBlock key={i} e={e} locale={locale} />
        ))}
      </div>
    </article>
  );
}

function Section({ id, h2, intro, band, children }: { id: string; h2: ReactNode; intro?: ReactNode; band?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={band ? "kn-sec kn-sec--band" : "kn-sec"} aria-labelledby={`kn-${id}-h`}>
      <div className="sq-wrap">
        <h2 id={`kn-${id}-h`} className="kn-h2">
          {h2}
        </h2>
        {intro ? <p className="kn-intro">{intro}</p> : null}
        {children}
      </div>
    </section>
  );
}

function FontBars({ locale }: { locale: KanaLocale }) {
  const { t } = KANA_KIT[locale];
  const f = data.fonts;
  // the two Hiragino families the measurement names separately are one face family on the page (27)
  const hira = f.firstFace.filter((x) => x.face?.startsWith("Hiragino"));
  const rows = [
    { name: "Hiragino", n: hira.reduce((a, x) => a + x.services, 0), note: hira.map((x) => `${x.face!.replace(/^Hiragino /, "")} ${x.services}`).join(" · ") },
    ...f.firstFace.filter((x) => !x.face?.startsWith("Hiragino")).map((x) => ({ name: x.face ?? t.fonts.none, n: x.services, note: "" })),
  ].sort((a, b) => b.n - a.n);
  const max = rows[0].n;
  return (
    <>
      <ul className="kn-bars" aria-label={t.fonts.label}>
        {rows.map((r) => (
          <li key={r.name} className="kn-bar">
            <span className="kn-bar-name">
              <span lang={r.name === t.fonts.none ? locale : "en"}>{r.name}</span>
              {r.note ? (
                <span className="kn-bar-note" lang="en">
                  {r.note}
                </span>
              ) : null}
            </span>
            <span className="kn-bar-track" aria-hidden="true">
              <i style={{ width: `${(r.n / max) * 100}%` }} />
            </span>
            <span className="kn-bar-n">
              {r.n}
              {t.fonts.unit}
            </span>
          </li>
        ))}
      </ul>
      <p className="kn-caption">
        <span className="kn-nowrap">{f.measuredOn}</span>
        {t.fonts.caption}
      </p>
    </>
  );
}

function Sources({ locale }: { locale: KanaLocale }) {
  const { t, orgs } = KANA_KIT[locale];
  const cited = new Map<string, Set<string>>();
  const add = (k: string, id: string) => cited.set(k, (cited.get(k) ?? new Set()).add(id));
  for (const r of data.rules) for (const k of [...r.quotes.map((q) => q.key), ...r.examples.map((e) => e.key)]) add(k, r.id);
  for (const c of data.houseChoices) for (const s of c.sides) for (const q of s.quotes) add(q.key, c.id);
  const keys = [...data.sources.map((s) => s.key), ...data.keysWithoutUrl];
  return (
    <div className="kn-orgs">
      {orgs.map((o) => {
        const mine = keys.filter((k) => k === o.prefix || k.startsWith(`${o.prefix}-`));
        if (!mine.length) return null;
        return (
          <div key={o.prefix} className="kn-org">
            <h3 className="kn-org-h">
              <Mixed text={o.name} />
            </h3>
            <p className="kn-org-kind">{o.kind}</p>
            <ul className="kn-org-list">
              {mine.map((k) => {
                const s = SOURCE.get(k);
                const ids = [...(cited.get(k) ?? [])];
                const rules = ids.filter((id) => id.startsWith("KW-")).length;
                const house = ids.length - rules;
                return (
                  <li key={k}>
                    {s ? (
                      <a href={s.url} target="_blank" rel="noopener noreferrer" lang="en">
                        {s.name}
                        <span aria-hidden="true"> ↗</span>
                        <span className="kn-visually-hidden" lang={locale}>
                          {t.paren[0]}
                          {t.rules.newTab}
                          {t.paren[1]}
                        </span>
                      </a>
                    ) : (
                      <span>{t.sources.noUrl}</span>
                    )}
                    {ids.length ? <span className="kn-org-n">{t.sources.cited(rules, house)}</span> : null}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

/** A house choice's side: our Korean line and the quotes on the Korean page; on the Japanese page the quotes alone, or
 *  writing-rules.md's English line, labelled as not a quote, where the side has no quote. */
function HouseSide({ text, quotes, ko, locale }: { text: string; quotes: Quote[]; ko: string; locale: KanaLocale }) {
  const { t } = KANA_KIT[locale];
  return (
    <li className="kn-side">
      {locale === "ko" ? (
        <p className="kn-side-t">
          <Mixed text={ko} />
        </p>
      ) : quotes.length ? null : (
        <p className="kn-en" lang="en">
          <span className="kn-visually-hidden" lang={locale}>
            {t.rules.english}
            {t.colon}
          </span>
          <Mixed text={text} />
        </p>
      )}
      {groupByKey(quotes).map((g, j) => (
        <QuoteBlock key={j} quotes={g} locale={locale} />
      ))}
    </li>
  );
}

export function KanaRulesPage({ locale }: { locale: KanaLocale }) {
  const { t, area, path } = KANA_KIT[locale];
  const opened = [...new Set(data.sources.map((s) => s.opened))];
  const toc = [
    { href: "#rules", label: t.rules.h2 },
    { href: "#house", label: t.house.h2 },
    { href: "#fonts", label: t.fonts.h2(data.fonts.services) },
    { href: "#sources", label: t.sources.h2 },
  ];
  return (
    <div className={`sq-root sq-root-page kn-root ${notoSansJP.variable}`} lang={locale}>
      <SiteHeaderA locale={locale} current={locale} localeHrefs={locale === "ja" ? KANA_RULES_PATHS : { ko: KANA_RULES_PATHS.ko }} />
      <main id="main" className="kn-main">
        <section className="kn-hero" aria-labelledby="kn-h1">
          <div className="sq-wrap">
            <p className="kn-kicker">
              <a className="kn-back" href={path}>
                <span lang="en" className="kn-kicker-name">
                  /kana
                </span>
                <span>{t.rulesPage.back}</span>
              </a>
              <span className="kn-status-tag">{t.hero.statusTag}</span>
            </p>
            <h1 id="kn-h1" className="kn-h1">
              {t.rulesPage.h1(data.rules.length)}
            </h1>
            <p className="kn-lede">{t.rulesPage.lede}</p>
            <nav className="kn-toc" aria-label={t.rulesPage.toc}>
              <ul>
                {toc.map((x) => (
                  <li key={x.href}>
                    <a href={x.href}>{x.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <Section id="rules" h2={t.rules.h2} intro={t.rules.intro} band>
          {data.areas.map((a) => (
            <div key={a.name} className="kn-area">
              <div className="kn-area-head">
                <h3 className="kn-area-h">
                  {area[a.name]} <span className="kn-area-n">{a.rules.length}</span>
                </h3>
              </div>
              <div className="kn-grid">
                {a.rules.map((id) => (
                  <RuleCard key={id} r={data.rules.find((r) => r.id === id)!} level="h4" locale={locale} />
                ))}
              </div>
            </div>
          ))}
        </Section>

        <Section id="house" h2={t.house.h2} intro={t.house.intro}>
          <div className="kn-grid">
            {data.houseChoices.map((c) => {
              const ko = HOUSE_KO[c.id];
              return (
                <article key={c.id} id={c.id.toLowerCase()} className="kn-card" aria-labelledby={`${c.id}-h`}>
                  <div className="kn-card-top">
                    <span className="kn-id" lang="en">
                      {c.id}
                    </span>
                    {c.notADisagreement ? <span className="kn-tier kn-tier--muted">{t.house.notReal}</span> : null}
                  </div>
                  {locale === "ko" ? (
                    <h3 id={`${c.id}-h`} className="kn-card-h">
                      <Mixed text={ko.title} />
                    </h3>
                  ) : (
                    <h3 id={`${c.id}-h`} className="kn-card-h kn-card-h--en" lang="en">
                      <Mixed text={c.title} />
                    </h3>
                  )}
                  <ul className="kn-sides">
                    {c.sides.map((s, i) => (
                      <HouseSide key={i} text={s.text} quotes={s.quotes as Quote[]} ko={ko.sides[i]} locale={locale} />
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Section>

        <Section id="fonts" h2={t.fonts.h2(data.fonts.services)} intro={t.fonts.intro} band>
          <FontBars locale={locale} />
        </Section>

        <Section
          id="sources"
          h2={t.sources.h2}
          intro={
            <>
              {t.sources.intro}
              {t.sep}
              {opened.length === 1 && opened[0] ? (
                <>
                  {t.sources.opened[0]}
                  <span className="kn-nowrap">{opened[0]}</span>
                  {t.sources.opened[1]}
                  {t.sep}
                </>
              ) : null}
              {t.sources.scope}
            </>
          }
        >
          <Sources locale={locale} />
        </Section>

        {t.use ? (
          <Section id="use" h2={t.use.h2} band>
            <ul className="kn-use">
              {t.use.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Section>
        ) : null}
      </main>
      <SiteFooterA locale={locale} current={locale} />
    </div>
  );
}
