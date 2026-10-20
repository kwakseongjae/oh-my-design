/**
 * Round 11 sample screens (owner #11): "never render a value that isn't in the reference", enforced.
 *
 * Each of the seven picks is planned and rendered in all four locales. The checks:
 *  1. every token a plan consumes is claimed in that reference's verification graph, with the value
 *     the reference gives;
 *  2. every value in the rendered screen's inline style (the only place brand values enter) is one of
 *     those tokens' values: no colour, length or weight the plan did not read;
 *  3. the screen's words follow the page language (no Hangul off /ko), from the locale's own copy;
 *  4. which face each screen is set in, per page language (journey/face.ts), including the labelled
 *     substitute path the fonts work stream will fill.
 */
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_VERIFICATION_BY_ID } from "@/data/reference-verification.generated";
import { SITE_LOCALES, type SiteLocale } from "@/lib/i18n/site-locales";
import { genSpec } from "@/lib/landing-a/data.server";
import { GEN_UI_IDS, GEN_UI_SCREEN } from "@/lib/landing-a/picks";
import { getJourneyCopy, type JourneyCopy } from "@/components/brand-a/copy/r11-journey";
import { faceFor, type Face } from "@/components/brand-a/journey/face";
import { planScreen, planTokens } from "@/components/brand-a/journey/model";
import { Screen, type ElFn } from "@/components/brand-a/journey/screens";
import { lines } from "@/components/brand-a/gen-render";

const HANGUL = /[가-힣]/;

/** The claimed value at a token path (tokens.<path>), as a string. */
function claimedValue(id: string, path: string): string | undefined {
  const t = REGISTRY_BY_ID[id].tokens as unknown as Record<string, unknown>;
  let o: unknown = t;
  for (const part of path.split(".")) {
    if (!o || typeof o !== "object") return undefined;
    // dotted keys never occur below tokens.*, but rounded/colour keys may contain dashes only
    o = (o as Record<string, unknown>)[part];
  }
  return o == null ? undefined : String(o);
}

/** Atoms of a value: numbers without units, hex colours and keywords. */
const atoms = (v: string) =>
  v
    .toLowerCase()
    .split(/[\s,/()]+/)
    .map((a) => a.replace(/px$/, ""))
    .filter((a) => a && !/^(solid)$/.test(a));

function render(id: string, locale: SiteLocale) {
  const spec = genSpec(id, locale)!;
  const kind = GEN_UI_SCREEN[id as keyof typeof GEN_UI_SCREEN];
  const plan = planScreen(kind, spec);
  const el: ElFn = (k, cls) => (plan.els[k] ? { className: cls, "data-k": k } : null);
  const html = renderToStaticMarkup(createElement(Screen, { plan, copy: getJourneyCopy(locale).sample, el, frame: plan.els.frame ? { className: "", "data-k": "frame" } : null, face: "var(--sq-f-en)" }));
  return { spec, plan, html };
}

describe("journey sample screens", () => {
  it("covers the seven picks, each with its own screen kind", () => {
    expect([...GEN_UI_IDS]).toEqual(["toss", "karrot", "kakaobank", "banksalad", "freee", "line", "104"]);
    expect(new Set(Object.values(GEN_UI_SCREEN)).size).toBe(7);
    for (const id of GEN_UI_IDS) expect(genSpec(id, "en"), id).toBeTruthy();
  });

  it("consumes only claimed tokens, with the reference's own values", () => {
    for (const id of GEN_UI_IDS) {
      const claims = REFERENCE_VERIFICATION_BY_ID[id].claims as Record<string, unknown>;
      const { plan } = render(id, "en");
      for (const t of planTokens(plan)) {
        if (t.k.startsWith("typography.")) {
          // a type tier: size and weight claimed, and the shown size/weight are the claimed ones
          const tier = t.k.slice("typography.".length);
          expect(`tokens.typography.${tier}.size` in claims && `tokens.typography.${tier}.weight` in claims, `${id} ${t.k}`).toBe(true);
          const [size, weight] = t.v.split(" / ");
          expect(parseFloat(claimedValue(id, `typography.${tier}.size`)!), `${id} ${t.k} size`).toBe(+size);
          expect(parseFloat(claimedValue(id, `typography.${tier}.weight`)!), `${id} ${t.k} weight`).toBe(+weight);
          continue;
        }
        expect(`tokens.${t.k}` in claims, `${id} ${t.k} is claimed`).toBe(true);
        const raw = claimedValue(id, t.k);
        expect(raw, `${id} ${t.k} exists`).toBeDefined();
        // every atom shown is an atom of the claimed value (a component font "16px / 600 (label …)" keeps its numbers)
        const have = new Set(atoms(raw!));
        for (const a of atoms(t.v)) expect(have.has(a) || (a === "999" && have.has("9999")), `${id} ${t.k}: ${a} in "${raw}"`).toBe(true);
      }
    }
  });

  it("puts no value in a screen's style that its plan did not read", () => {
    for (const id of GEN_UI_IDS)
      for (const locale of SITE_LOCALES) {
        const { plan, html } = render(id, locale);
        const style = html.match(/^<div[^>]*style="([^"]*)"/)?.[1] ?? "";
        const allowed = new Set(planTokens(plan).flatMap((t) => atoms(t.v)));
        for (const decl of style.split(";").filter(Boolean)) {
          const [name, ...rest] = decl.split(":");
          if (name.trim() === "--scr-ff") continue;
          const value = rest.join(":");
          for (const a of atoms(value)) {
            // a pill radius is drawn as 999px (≥ any box); a line-height is the claimed px over the claimed size
            const ok = allowed.has(a) || (a === "999" && allowed.has("9999"));
            expect(ok, `${id}/${locale} ${name}: ${a}`).toBe(true);
          }
        }
        // and nothing brand-coloured is written inline anywhere else in the screen
        expect(html.replace(/^<div[^>]*>/, "").match(/style="/g) ?? [], `${id}/${locale}`).toEqual([]);
      }
  });

  it("writes the screen in the page's language", () => {
    for (const id of GEN_UI_IDS)
      for (const locale of SITE_LOCALES) {
        const { html, plan } = render(id, locale);
        const text = html.replace(/<[^>]+>/g, " ");
        expect(HANGUL.test(text), `${id}/${locale} Hangul`).toBe(locale === "ko");
        const c = getJourneyCopy(locale).sample[plan.kind] as Record<string, unknown>;
        const first = Object.values(c).find((v) => typeof v === "string") as string;
        expect(text.includes(first.replace(/&/g, "&amp;")), `${id}/${locale} ${first}`).toBe(true);
      }
  });

  it("draws what LINE claims and leaves the rest out", () => {
    const { plan, html } = render("line", "en");
    expect(Object.keys(plan.els).sort()).toEqual(["badge", "frame", "rows", "title"]);
    expect(plan.vars["--g-bg"]).toBe("#06c755");
    expect(plan.vars["--c-bg"]).toBeUndefined();
    expect(plan.vars["--b-bg"]).toBeUndefined();
    // the Messenger tiers claim size and weight but no line height: none is set
    expect(Object.keys(plan.vars).filter((k) => k.endsWith("-lh"))).toEqual([]);
    expect(html).not.toContain("sq-x-card");
    expect(plan.omitted).toEqual([]);
  });

  it("lists only the tokens a screen reads in the DESIGN.md excerpt", () => {
    for (const id of GEN_UI_IDS) {
      const { plan } = render(id, "en");
      const L = lines(plan);
      expect(L.length, id).toBe(planTokens(plan).length);
      expect(L.some((l) => /states|pressed|hover|focus/.test(l.t)), `${id} has no state lines`).toBe(false);
    }
  });
});

describe("journey copy", () => {
  const shape = (c: unknown): unknown =>
    Array.isArray(c) ? c.map(shape) : c && typeof c === "object" ? Object.fromEntries(Object.entries(c).map(([k, v]) => [k, shape(v)])) : typeof c;
  it("has the same shape in all four locales", () => {
    const en = shape(getJourneyCopy("en"));
    for (const l of SITE_LOCALES) expect(shape(getJourneyCopy(l)), l).toEqual(en);
  });

  it("writes Korean sentences in 해요체", () => {
    const ko: JourneyCopy = getJourneyCopy("ko");
    for (const [, msg] of ko.sample.chats.rows) expect(msg, msg).toMatch(/요[?]?$/);
    expect(ko.face.uncovered).toMatch(/요$/);
    expect(ko.face.sub).toMatch(/요$/);
  });

  it("keeps Pretendard screens inside the self-hosted subset (web/scripts/subset-pretendard.py)", () => {
    const dec = new TextDecoder("euc-kr");
    const ks = new Set<string>();
    for (let a = 0xb0; a <= 0xc8; a++) for (let b = 0xa1; b <= 0xfe; b++) ks.add(dec.decode(new Uint8Array([a, b])));
    // the script's --unicodes ranges, plus the 2,350 KS X 1001 syllables
    const RANGES: [number, number][] = [[0x20, 0x7e], [0xa0, 0xbf], [0xd7, 0xd7], [0x2010, 0x2027], [0x2030, 0x203a], [0x2190, 0x2193], [0x3000, 0x303f], [0x3131, 0x318e]];
    const inSubset = (ch: string) => ks.has(ch) || RANGES.some(([a, b]) => ch.codePointAt(0)! >= a && ch.codePointAt(0)! <= b);
    // KakaoBank and Banksalad are set in it on the two pages whose script it carries (journey/face.ts)
    for (const locale of ["en", "ko"] as const) {
      const c = getJourneyCopy(locale).sample;
      const strings = JSON.stringify([c.account, c.assets]).replace(/[[\]"]/g, "").split(",");
      const off = [...strings.join(",")].filter((ch) => !inSubset(ch));
      expect(off, locale).toEqual([]);
    }
  });
});

describe("journey faces", () => {
  const face = (id: string, locale: SiteLocale, subs = [] as Parameters<typeof faceFor>[2]): Face => faceFor(genSpec(id, locale)!, locale, subs);
  const modes = (id: string) => SITE_LOCALES.map((l) => face(id, l).mode);

  it("loads open faces for real only where their file carries the page's script", () => {
    // order: en, ko, ja, zh-tw
    expect(modes("kakaobank")).toEqual(["real", "real", "uncovered", "uncovered"]);
    expect(modes("banksalad")).toEqual(["real", "real", "uncovered", "uncovered"]);
    expect(modes("freee")).toEqual(["real", "uncovered", "real", "uncovered"]);
    expect(face("kakaobank", "ko")).toMatchObject({ family: "Pretendard Variable", css: "var(--font-r11-pretendard), var(--sq-f-ko)" });
    expect(face("freee", "ja")).toMatchObject({ family: "Noto Sans JP", css: "var(--font-r11-noto-jp), var(--sq-f-ja)" });
  });

  it("sets System references in the system face, as their references specify", () => {
    expect(modes("karrot")).toEqual(["system", "system", "system", "system"]);
    expect(modes("line")).toEqual(["system", "system", "system", "system"]);
  });

  it("never renders a proprietary or absent face as the brand's", () => {
    expect(modes("toss")).toEqual(["none", "none", "none", "none"]);
    expect(face("toss", "ko")).toMatchObject({ family: "Toss Product Sans", css: "var(--sq-f-ko)" });
    expect(modes("104")).toEqual(["none", "none", "none", "none"]);
    expect(face("104", "zh-tw")).toMatchObject({ family: null, css: "var(--sq-f-tc)" });
  });

  it("uses a measured substitute only for its own script, labelled", () => {
    const sub = { brandFamily: "Toss Product Sans", script: "hangul" as const, family: "Example Sans KR", provider: "google" as const, label: "substitute — not the brand face", cssUrl: "https://fonts.googleapis.com/css2?family=Example+Sans+KR" };
    expect(face("toss", "ko", [sub])).toMatchObject({ mode: "substitute", sub: "Example Sans KR", css: '"Example Sans KR", var(--sq-f-ko)' });
    expect(face("toss", "en", [sub]).mode).toBe("none");
    expect(face("toss", "ko", [{ ...sub, cssUrl: undefined }]).mode).toBe("none");
  });
});
