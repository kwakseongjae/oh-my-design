import { Fragment, type ReactNode } from "react";
import { SiteFooterA } from "@/components/brand-a/site-footer";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import data from "@/data/kana-rules.generated.json";
import { AREA_KO, HOUSE_KO, KANA_COPY, LEAD_RULES, RULE_KO, SOURCE_ORGS } from "./copy";
import { KanaCompare } from "./compare";
import { Mixed, SourceLink } from "./parts";
import "./kana.css";

/**
 * /ko/kana: the research behind the /kana skill (a draft), direction A of the owner's stills (2026-11-21). The rules
 * and the sources' own sentences are the content; none of the Japanese on the page is ours.
 *   1. first screen: what it is, the draft status, three numbers, two actions
 *   1b. #compare: the sources' own wrong/right pairs set in the components their rules are about, toured (compare.tsx)
 *   2. #rules: the six lead rules as cards, then all the others by the file's areas
 *   3. #house: the house choices, every side with its source
 *   4. #fonts: the first Japanese face in 77 measured services
 *   5. #sources, 6. #use
 * Not linked from the header or footer and noindex until the owner releases it; in no sitemap.
 */

type KanaData = typeof data;
type Rule = KanaData["rules"][number];
type Quote = { key: string; text: string; via?: string; label?: string; lang?: string };
type Example = { key: string; via?: string; sides: { role: string; label: string | null; texts: string[] }[] };
type Tier = { tier: string; of4?: number };

const t = KANA_COPY;
const SOURCE = new Map(data.sources.map((s) => [s.key, s]));
const RULE = new Map(data.rules.map((r) => [r.id, r]));
const LEAD = new Set<string>(LEAD_RULES);

/** A quoted string as the file gives it, in the page's own corner brackets (an English quote, Microsoft's, in curly
 *  quotes); its `code` marks (writing-rules.md's Markdown) set as code. */
function Ja({ text, en = false }: { text: string; en?: boolean }) {
  return (
    <>
      <span className="kn-qm">{en ? "\u201C" : "「"}</span>
      {text.split("`").map((part, i) =>
        i % 2 ? (
          <code key={i} className="kn-code">
            {part}
          </code>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
      <span className="kn-qm">{en ? "\u201D" : "」"}</span>
    </>
  );
}

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
function QuoteBlock({ quotes }: { quotes: readonly Quote[] }) {
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
        <SourceLink k={quotes[0].key} />
      </figcaption>
    </figure>
  );
}

function Tiers({ tiers }: { tiers: readonly Tier[] }) {
  return (
    <ul className="kn-tiers" aria-label={t.tiers.label}>
      {tiers.map((x, i) => (
        <li key={i} className={x.tier === "optim-not-counted" ? "kn-tier kn-tier--muted" : "kn-tier"}>
          {x.tier === "law"
            ? t.tiers.law
            : x.tier === "government"
              ? t.tiers.government
              : x.tier === "company"
                ? t.tiers.company(x.of4 ?? 1)
                : x.tier === "translation"
                  ? t.tiers.translation
                  : t.tiers.optim}
        </li>
      ))}
    </ul>
  );
}

function ExampleBlock({ e }: { e: Example }) {
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
        <SourceLink k={e.key} />
      </p>
    </div>
  );
}

function RuleCard({ r, level }: { r: Rule; level: "h3" | "h5" }) {
  const H = level;
  const examples = r.examples as Example[];
  return (
    <article id={r.id.toLowerCase()} className="kn-card" aria-labelledby={`${r.id}-h`}>
      <div className="kn-card-top">
        <span className="kn-id" lang="en">
          {r.id}
        </span>
        <Tiers tiers={r.tiers} />
      </div>
      <H id={`${r.id}-h`} className="kn-card-h">
        <Mixed text={RULE_KO[r.id]} />
      </H>
      <p className="kn-en" lang="en">
        <span className="kn-visually-hidden">{t.rules.english}: </span>
        <Mixed text={r.rule} />
      </p>
      <div className="kn-quotes">
        {groupByKey(r.quotes as Quote[]).map((g, i) => (
          <QuoteBlock key={i} quotes={g} />
        ))}
      </div>
      <div className="kn-exs">
        <p className="kn-exs-h">{t.rules.examples}</p>
        {r.exampleNote ? (
          <p className="kn-exs-none">{/^the pairs in/.test(r.exampleNote) ? t.rules.pairsInQuote : t.rules.noExample}</p>
        ) : null}
        {examples.map((e, i) => (
          <ExampleBlock key={i} e={e} />
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

function FontBars() {
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
              <span lang={r.name === t.fonts.none ? "ko" : "en"}>{r.name}</span>
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

function Sources() {
  const cited = new Map<string, Set<string>>();
  const add = (k: string, id: string) => cited.set(k, (cited.get(k) ?? new Set()).add(id));
  for (const r of data.rules) for (const k of [...r.quotes.map((q) => q.key), ...r.examples.map((e) => e.key)]) add(k, r.id);
  for (const c of data.houseChoices) for (const s of c.sides) for (const q of s.quotes) add(q.key, c.id);
  const keys = [...data.sources.map((s) => s.key), ...data.keysWithoutUrl];
  return (
    <div className="kn-orgs">
      {SOURCE_ORGS.map((o) => {
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
                        <span className="kn-visually-hidden"> ({t.rules.newTab})</span>
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

export function KanaPage() {
  const rest = data.areas.map((a) => ({ ...a, others: a.rules.filter((id) => !LEAD.has(id)), lead: a.rules.filter((id) => LEAD.has(id)) }));
  const opened = [...new Set(data.sources.map((s) => s.opened))];
  return (
    <div className="sq-root sq-root-page kn-root" lang="ko">
      <SiteHeaderA locale="ko" current="ko" />
      <main id="main" className="kn-main">
        <section className="kn-hero" aria-labelledby="kn-h1">
          <div className="sq-wrap">
            <p className="kn-kicker">
              <span lang="en" className="kn-kicker-name">
                /kana
              </span>
              <span>{t.hero.kicker}</span>
            </p>
            <h1 id="kn-h1" className="kn-h1">
              {t.hero.h1}
            </h1>
            <p className="kn-lede">{t.hero.lede}</p>
            <p className="kn-status">
              <span className="kn-status-tag">{t.hero.statusTag}</span>
              <span>{t.hero.status}</span>
            </p>
            <div className="kn-ctas">
              <a className="kn-btn kn-btn--main" href="#rules">
                {t.hero.cta(data.rules.length)}
              </a>
              <a className="kn-btn kn-btn--line" href="#sources">
                {t.hero.ctaSources}
              </a>
            </div>
            <dl className="kn-stats">
              <div>
                <dt>{t.hero.stats.rules}</dt>
                <dd>{data.rules.length}</dd>
              </div>
              <div>
                <dt>{t.hero.stats.house}</dt>
                <dd>{data.houseChoices.length}</dd>
              </div>
              <div>
                <dt>{t.hero.stats.services}</dt>
                <dd>{data.fonts.services}</dd>
              </div>
            </dl>
          </div>
        </section>

        <KanaCompare />

        <Section id="rules" h2={t.rules.h2} intro={t.rules.intro} band>
          <div className="kn-grid">
            {LEAD_RULES.map((id) => (
              <RuleCard key={id} r={RULE.get(id)!} level="h3" />
            ))}
          </div>
          <h3 className="kn-h2 kn-h2--sub">{t.rules.allH2}</h3>
          <p className="kn-intro">{t.rules.allIntro(data.rules.length, LEAD_RULES.length)}</p>
          {rest.map((a) => (
            <div key={a.name} className="kn-area">
              <div className="kn-area-head">
                <h4 className="kn-area-h">
                  {AREA_KO[a.name]} <span className="kn-area-n">{a.rules.length}</span>
                </h4>
                {a.lead.length ? (
                  <p className="kn-area-seen">
                    {t.rules.seenAbove}{" "}
                    {a.lead.map((id, i) => (
                      <Fragment key={id}>
                        {i ? ", " : null}
                        <a href={`#${id.toLowerCase()}`} lang="en">
                          {id}
                        </a>
                      </Fragment>
                    ))}
                  </p>
                ) : null}
              </div>
              <div className="kn-grid">
                {a.others.map((id) => (
                  <RuleCard key={id} r={RULE.get(id)!} level="h5" />
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
                  <h3 id={`${c.id}-h`} className="kn-card-h">
                    <Mixed text={ko.title} />
                  </h3>
                  <ul className="kn-sides">
                    {c.sides.map((s, i) => (
                      <li key={i} className="kn-side">
                        <p className="kn-side-t">
                          <Mixed text={ko.sides[i]} />
                        </p>
                        {groupByKey(s.quotes as Quote[]).map((g, j) => (
                          <QuoteBlock key={j} quotes={g} />
                        ))}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Section>

        <Section id="fonts" h2={t.fonts.h2(data.fonts.services)} intro={t.fonts.intro} band>
          <FontBars />
        </Section>

        <Section
          id="sources"
          h2={t.sources.h2}
          intro={
            <>
              {t.sources.intro}{" "}
              {opened.length === 1 && opened[0] ? (
                <>
                  {t.sources.opened[0]}
                  <span className="kn-nowrap">{opened[0]}</span>
                  {t.sources.opened[1]}{" "}
                </>
              ) : null}
              {t.sources.scope}
            </>
          }
        >
          <Sources />
        </Section>

        <Section id="use" h2={t.use.h2} band>
          <ul className="kn-use">
            {t.use.items.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Section>
      </main>
      <SiteFooterA locale="ko" current="ko" />
    </div>
  );
}
