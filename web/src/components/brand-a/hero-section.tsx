import Link from "next/link";
import { Inter } from "next/font/google";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import type { getLandingData } from "@/lib/landing-a/data.server";
import { getHeroChats } from "@/lib/landing-a/chat-data.server";
import type { getCopy } from "./copy";
import type { getR10 } from "./copy/r10";
import { getR11Hero } from "./copy/r11-hero";
import { ChatDemo } from "./chat-demo";
import { CmdText, INSTALL } from "./cli-section";
import { CopyButton } from "./copy-button";
import { HeroKeys } from "./hero-keys";
import { HeroDropLayer, dropScript } from "./hero-drop";
import { rich } from "./rich";

type Props = {
  locale: SiteLocale;
  c: ReturnType<typeof getCopy>;
  /** round 10 copy; the hero no longer reads it (kept so landing.tsx's call is unchanged) */
  r: ReturnType<typeof getR10>;
  data: ReturnType<typeof getLandingData>;
  f: (s: string) => string;
  archive: string;
};

/* Linear's claimed UI face is Inter (OFL): the EN chat card is set in it. Not preloaded — the file is
   fetched only where the card's text uses it (/ on the EN landing), while the run plays. */
const inter = Inter({ subsets: ["latin"], display: "swap", preload: false });

/** The face a locale's page loads for a chat company's claimed UI face (chat-data.server.ts faceOf).
 *  pixiv names Noto Sans CJK JP; the ja layout loads the same Noto CJK design as Google Fonts' Noto
 *  Sans JP, which freee names. udn names Noto Sans TC, which the zh-tw layout loads. Pretendard is on
 *  the landing root (landing.tsx) and resolved there. */
const FACES: Partial<Record<SiteLocale, Record<string, string>>> = {
  en: { Inter: inter.style.fontFamily },
  ja: { "Noto Sans CJK JP": "var(--font-noto-jp)", "Noto Sans JP": "var(--font-noto-jp)" },
  "zh-tw": { "Noto Sans TC": "var(--font-noto-tc)" },
};

/** Pre-hydration, right after the chat: hide the run that is about to play (agent-trace.tsx usePlay). */
const CHAT_PRE = `(function(){try{var c=document.getElementById("chat");if(c&&!/[?&]demo=/.test(location.search)&&!matchMedia("(prefers-reduced-motion: reduce)").matches)c.classList.add("sq-pre")}catch(e){}})();`;

/**
 * The hero (round 11, docs/REDESIGN_R11_PLAN_2026-10-20.md W1): the headline and one sentence; two
 * actions — the archive, and the install command (the one #use runs, copyable); then one stage: the
 * 3D logo keycaps beside the chat, which plays this locale's company from prompt to example card.
 * Round 12: a keycap picks the chat's company; every company on this locale's keyboard, and the
 * opening one, has its chat built here (getHeroChats) and handed to the chat island.
 * The stage keeps round 10's geometry (the posters and 2D-drop sprites are rendered from it);
 * phones stack the keycaps over the chat. Styles in hero.css.
 */
export function HeroSection({ locale, c, data, f, archive }: Props) {
  const h = getR11Hero(locale);
  const { initial, chats } = getHeroChats(locale, data.hero, FACES[locale]);
  return (
    <section className="sq-wrap sq-hero" aria-labelledby="h-hero">
      <div className="sq-hero-top">
        <div className="sq-hero-copy">
          <h1 id="h-hero">{rich(c.hero.h1)}</h1>
          <p className="sq-lede">{rich(f(c.hero.lede))}</p>
        </div>
        <div className="sq-hero-acts">
          <Link className="sq-cta" href={archive} prefetch={false}>{c.hero.browse}</Link>
          <div className="sq-inst" role="group" aria-label={h.install}>
            <code lang="en"><span className="sq-inst-ps" aria-hidden="true">$ </span><CmdText /></code>
            <CopyButton text={INSTALL} labels={c.use} className="sq-inst-copy" />
          </div>
        </div>
      </div>
      <div className="sq-stage">
        <div className="sq-stage-caps">
          {/* 3D host: the poster until three.js mounts after idle (hero-keys.tsx); the canvas, the
              2D drop layer and the hidden link list all share this one box, which is the box the
              posters are rendered from (scripts/hero-posters.mjs clips to #k3). */}
          <div className="sq-k3 sq-poster" id="k3" data-set={locale === "ja" || locale === "zh-tw" ? locale : "default"} aria-hidden="true" suppressHydrationWarning>
            <HeroDropLayer locale={locale} />
          </div>
          {/* pre-hydration: arriving from the language picker, the caps new here start falling as
              2D sprites at first paint; the 3D scene takes over once they settle (hero-drop.tsx) */}
          <script dangerouslySetInnerHTML={{ __html: dropScript(locale) }} />
          <HeroKeys caps={data.hero} label={h.keys} locale={locale} initial={initial} />
        </div>
        <div className="sq-stage-chat">
          <ChatDemo chats={chats} initial={initial} t={{ trace: h.trace, link: h.chat.link }} />
          <script dangerouslySetInnerHTML={{ __html: CHAT_PRE }} />
        </div>
      </div>
    </section>
  );
}
