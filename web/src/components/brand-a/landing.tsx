import { preload } from "react-dom";
import { getLandingData } from "@/lib/landing-a/data.server";
import { getRepoStars } from "@/lib/github-stars.server";
import { REGION_ORDER } from "@/lib/landing-a/picks";
import { SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import { catalogPathFor } from "@/lib/i18n/ko-detail";
import { fmt, getCopy } from "./copy";
import { getR10 } from "./copy/r10";
import { CliSection } from "./cli-section";
import { CloseSection } from "./close-section";
import { FaqSection } from "./faq-section";
import { HeroSection } from "./hero-section";
import { JourneySection } from "./journey-section";
import { SiteFooterA } from "./site-footer";
import { GITHUB_URL, SiteHeaderA } from "./site-header";
// section styles in the original cascade order (split out of landing.css before round 11)
import "./landing.css";
import "./hero.css";
import "./cli.css";
import "./faq.css";
import "./close.css";

const WANTED_LATIN = "/fonts/wanted-sans/WantedSansVariable.split.90.woff2";
const GH_SKILLS = `${GITHUB_URL}/tree/main/skills`;
const GH_ISSUES = `${GITHUB_URL}/issues`;

/**
 * The landing, shared by /, /ko, /ja and /zh-tw. Round 10 (owner, 2026-10-16: "go with the
 * recommendation", docs/research/2026-10-17-direction/DIRECTIONS.md): B's structure in Iris with
 * A's restraint. The hero is the headline, one sentence and two actions over one stage: the 3D
 * logo keycaps on the left (poster until three.js mounts; the 2D drop on a language switch) and
 * an illustrative chat on the right (prompt → tool trace → streaming Toss screen), so "this is
 * how you use it" is on the first screen. Below: the DESIGN.md → screen journey (the proof), the
 * oh-my-design-cli steps beside the real transcript (the one dark field and the one copy
 * command), the FAQ (categories, search, accordion) and a closing band. Server component: every
 * number comes from generated data at build time; the keycaps, chat, steps, FAQ and copy
 * buttons hydrate as islands.
 *
 * Round 11 prep: this file is now only the composer. Each section lives in its own component
 * (hero-section, journey-section, cli-section, faq-section, close-section) and stylesheet, so the
 * parallel round-11 work streams never edit the same file (docs/REDESIGN_R11_PLAN_2026-10-20.md).
 */
export async function LandingA({ locale }: { locale: SiteLocale }) {
  const c = getCopy(locale);
  const r = getR10(locale);
  const stars = await getRepoStars();
  // the headline face, preloaded where it sets the headline (en, ko): Wanted Sans' Basic Latin
  // slice (44 KB, styles/wanted-sans-latin.css). ja / zh-tw set theirs in Noto (layout, no preload).
  if (locale === "en" || locale === "ko") preload(WANTED_LATIN, { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  // the hero poster is a CSS background (found late): fetch this locale's one with the HTML
  const set = locale === "ja" || locale === "zh-tw" ? `-${locale}` : "";
  preload(`/brand-a/hero-logos${set}-light.webp`, { as: "image", fetchPriority: "high", media: "(min-width: 901px)", imageSrcSet: `/brand-a/hero-logos${set}-light.webp 1x, /brand-a/hero-logos${set}-light@2x.webp 2x` });
  preload(`/brand-a/hero-logos${set}-light-m.webp`, { as: "image", fetchPriority: "high", media: "(max-width: 900px)" });
  const data = getLandingData(locale);
  const F = data.facts;
  const vars: Record<string, string | number> = { total: F.total, skills: F.skills, tossChk: F.tossChk, tossNext: F.tossNext };
  const f = (s: string) => fmt(s, vars);
  const htmlLang = SITE_LOCALE_META[locale].htmlLang;
  const first = REGION_ORDER[locale][0] as "KR" | "JP" | "TW";
  const archive = catalogPathFor(locale);

  return (
    <div className="sq-root sq-root-page" lang={htmlLang}>
      <SiteHeaderA locale={locale} current={locale} onLanding stars={stars} />
      <main id="main">
        <HeroSection locale={locale} c={c} r={r} data={data} f={f} archive={archive} />
        <JourneySection locale={locale} c={c} data={data} first={first} />
        <CliSection locale={locale} c={c} r={r} total={F.total} skills={F.skills} skillsHref={GH_SKILLS} />
        <FaqSection r={r} f={f} issuesHref={GH_ISSUES} />
        <CloseSection r={r} f={f} archive={archive} />
      </main>
      <SiteFooterA locale={locale} current={locale} />
    </div>
  );
}
