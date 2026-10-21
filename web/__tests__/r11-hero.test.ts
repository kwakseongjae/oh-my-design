import { describe, expect, it } from "vitest";
import transcript from "@/data/cli-transcript.json";
import heroCaps from "@/data/hero-caps.json";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_VERIFICATION_BY_ID } from "@/data/reference-verification.generated";
import { getR11Hero, HERO_KINDS, withName } from "@/components/brand-a/copy/r11-hero";
import { heroPick, pickCompany, resetHeroPick } from "@/components/brand-a/hero-pick";
import { PAGE_SCRIPT } from "@/components/brand-a/journey/face";
import { getSubstitutes } from "@/lib/fonts/substitutes";
import { detailHrefFor } from "@/lib/i18n/ko-detail";
import { getHeroCaps } from "@/lib/landing-a/data.server";
import {
  CARD_SLOTS, CHAT_CANDIDATES, CHAT_COMPANY, KIND, cardCoverage, chatIds, getChatCard, getCliScreen, getCompanyCard, getHeroChats, pickCompany as pickChatCompany,
  type CardNode, type ChatCard, type Tok,
} from "@/lib/landing-a/chat-data.server";

/**
 * Round 11 hero + CLI (docs/REDESIGN_R11_PLAN_2026-10-20.md W1, W3): the chat company per locale is
 * measured, every value an example card renders is a claimed token of that company, the copy has
 * one shape in four locales, and the transcript is the real 2.0.4+ output with only the per-file
 * list cut.
 *
 * Round 12 (owner 2026-10-21): a keycap picks the chat's company, so every company on a locale's
 * keyboard has a card, and every one of those cards — not only the four opening ones — goes through
 * the same claimed-token, legibility, face and source checks.
 */
const LOCALES = ["en", "ko", "ja", "zh-tw"] as const;
type L = (typeof LOCALES)[number];

/** What hero-section.tsx hands each locale (FACES): the faces that page loads for a claimed one. */
const PAGE_FACES: Record<L, Record<string, string>> = {
  en: { Inter: "Inter, \"Inter Fallback\"" },
  ko: {},
  ja: { "Noto Sans CJK JP": "var(--font-noto-jp)", "Noto Sans JP": "var(--font-noto-jp)" },
  "zh-tw": { "Noto Sans TC": "var(--font-noto-tc)" },
};

const at = (id: string, k: string): unknown => {
  let cur: unknown = REGISTRY_BY_ID[id]?.tokens;
  for (const seg of k.split(".")) cur = cur && typeof cur === "object" ? (cur as Record<string, unknown>)[seg] : undefined;
  return cur;
};
function toks(n: CardNode, out: [string, Tok][] = []): [string, Tok][] {
  for (const [p, t] of Object.entries(n.css ?? {})) if (t) out.push([p, t]);
  for (const k of n.kids ?? []) toks(k, out);
  return out;
}
function texts(n: CardNode, out: string[] = []): string[] {
  if (n.text) out.push(n.text);
  for (const k of n.kids ?? []) texts(k, out);
  return out;
}
/** Every (locale, company) the hero can show: the opening company and each keycap's. */
const chatSet = (l: L) => chatIds(l, getHeroCaps(l).map((c) => c.id));
const heroCards = (): [string, ChatCard][] => LOCALES.flatMap((l) => chatSet(l).map((id) => [`hero ${l} ${id}`, getCompanyCard(l, id, PAGE_FACES[l])] as [string, ChatCard]));

describe("chat company per locale (owner decision 4: KR toss, JP pixiv; EN and TW by card-slot coverage)", () => {
  it("prints the coverage table and the measured picks hold", () => {
    const ids = [...new Set([...Object.keys(KIND), ...CHAT_CANDIDATES.en, ...CHAT_CANDIDATES["zh-tw"]])];
    const rows = ids.map(cardCoverage).sort((a, b) => b.have - a.have);
    console.log(
      `card slots (${CARD_SLOTS.length}; colours count only as hex fills):\n` +
        rows.map((c) => `  ${c.id.padEnd(15)} ${(KIND[c.id] ?? "—").padEnd(9)} ${String(c.have).padStart(2)}/${c.of}  logo:${c.logo ? "yes" : "no "}  primary action:${c.primaryAction ?? "none"}  missing: ${c.missing.join(", ") || "none"}`).join("\n"),
    );
    for (const c of rows) expect(c.verified, c.id).toBe(true);
    expect(pickChatCompany(CHAT_CANDIDATES.en)).toBe(CHAT_COMPANY.en);
    expect(pickChatCompany(CHAT_CANDIDATES["zh-tw"])).toBe(CHAT_COMPANY["zh-tw"]);
    expect(CHAT_COMPANY.ko).toBe("toss");
    expect(CHAT_COMPANY.ja).toBe("pixiv");
  });

  it("round 12: every company on every keyboard has a card kind and a chat; none is dropped", () => {
    const sets = heroCaps.sets as Record<string, { wide: string[][]; narrow: string[][] }>;
    const onKeys = new Set(Object.values(sets).flatMap((s) => [...s.wide.flat(), ...s.narrow.flat()]));
    for (const id of onKeys) expect(KIND[id], id).toBeDefined();
    for (const l of LOCALES) {
      const caps = getHeroCaps(l);
      const { initial, chats } = getHeroChats(l, caps, PAGE_FACES[l]);
      expect(initial).toBe(CHAT_COMPANY[l]);
      expect(Object.keys(chats).sort(), l).toEqual([...new Set([CHAT_COMPANY[l], ...caps.map((c) => c.id)])].sort());
    }
  });
});

describe("example cards: claimed values only", () => {
  const cards: [string, ChatCard][] = [
    ...heroCards(),
    ...LOCALES.map((l) => [`cli ${l}`, getCliScreen(l)] as [string, ChatCard]),
  ];
  it("every rendered value is a claimed token of the company, and its CSS comes from that value", () => {
    expect(cards.length).toBeGreaterThan(40);
    for (const [name, card] of cards) {
      const claims = REFERENCE_VERIFICATION_BY_ID[card.id].claims;
      const list = toks(card.root);
      expect(list.length, name).toBeGreaterThan(10);
      for (const [prop, t] of list) {
        // a measured substitute is set from the reference's own substitute record, never by eye
        const subKey = /^fonts\.faces\.(.+)\.substitutes\.([a-z-]+)$/.exec(t.k);
        if (prop === "fontFamily" && subKey) {
          const rec = getSubstitutes(card.id).find((x) => x.brandFamily === subKey[1] && x.script === subKey[2]);
          expect(rec?.family, `${name}: ${t.k} measured`).toBe(t.v);
          expect(t.css, `${name}: ${t.k} self-hosted`).toMatch(/^var\(--font-r11-/);
          continue;
        }
        expect(`tokens.${t.k}` in claims, `${name}: ${t.k} claimed`).toBe(true);
        expect(at(card.id, t.k), `${name}: ${t.k} value`).toEqual(t.v);
        if (prop === "fontFamily") continue; // the loaded face for a claimed family name (see face test)
        const v = String(t.v);
        if (/\.(font|use|border)$/.test(t.k)) expect(v, `${name}: ${t.k} → ${t.css}`).toContain(t.css.replace(/px$/, ""));
        else if (/^#/.test(t.css)) expect(v.toLowerCase(), `${name}: ${t.k}`).toBe(t.css);
        else expect([v, `${v}px`], `${name}: ${t.k} → ${t.css}`).toContain(t.css);
      }
    }
  });

  it("the four round-11 cards are the ones the owner reviewed (Toss's title pinned to h3, its rows in body-small)", () => {
    const ko = getChatCard("ko");
    expect(ko.id).toBe("toss");
    const title = toks(ko.root).find(([p, t]) => p === "fontSize" && t.k.startsWith("typography.h3"));
    expect(title?.[1].css).toBe("24px");
    expect(toks(ko.root).some(([, t]) => t.k === "typography.body-small.size")).toBe(true);
    for (const l of LOCALES) expect(getChatCard(l).kind).toBe(KIND[CHAT_COMPANY[l]]);
  });

  it("faces: a face is shown only where this page loads it for real; otherwise the trace names it", () => {
    const by = Object.fromEntries(LOCALES.flatMap((l) => chatSet(l).map((id) => [`${l} ${id}`, getCompanyCard(l, id, PAGE_FACES[l])])));
    // round 11, unchanged
    expect(by["ko toss"].face).toEqual({ name: "Toss Product Sans", shown: false, sub: "Pretendard Variable" });
    expect(by["zh-tw 104"].face).toEqual({ name: null, shown: false });
    expect(by["en linear.app"].face).toEqual({ name: "Inter", shown: true });
    expect(by["ja pixiv"].face).toEqual({ name: "Noto Sans CJK JP", shown: true });
    expect(getChatCard("en").face).toEqual({ name: "Inter", shown: false });
    for (const l of LOCALES) expect(getCliScreen(l).face.shown).toBe(false);
    // Toss's substitutes were measured for Latin and Hangul only: none on the kana and Han pages
    expect(getCliScreen("ko").face.sub).toBe("Pretendard Variable");
    expect(getCliScreen("en").face.sub).toBe("IBM Plex Sans");
    expect(getCliScreen("ja").face.sub).toBeUndefined();
    expect(getCliScreen("zh-tw").face.sub).toBeUndefined();
    // round 12: Pretendard (OFL, on the landing root) carries Latin and Hangul only
    for (const id of ["kakaobank", "kurly", "socar", "channeltalk"]) {
      expect(by[`ko ${id}`].face.shown, `ko ${id}`).toBe(true);
      expect(by[`en ${id}`].face.shown, `en ${id}`).toBe(true);
    }
    for (const id of ["kakaobank", "kream", "channeltalk"]) {
      expect(by[`ja ${id}`].face, `ja ${id}`).toMatchObject({ shown: false });
      expect(by[`zh-tw ${id}`].face, `zh-tw ${id}`).toMatchObject({ shown: false });
    }
    expect(by["ja freee"].face).toEqual({ name: "Noto Sans JP", shown: true });
    expect(by["zh-tw udn"].face).toEqual({ name: "Noto Sans TC", shown: true });
    // proprietary faces with no measured substitute are named, never set
    for (const k of ["ja caddi", "ja chatwork", "ja toyota", "zh-tw poya"]) expect(by[k].face.shown, k).toBe(false);
    // and what a shown face is set in: the page's own face for it, or the root's Pretendard
    for (const [k, card] of Object.entries(by)) {
      const fam = card.root.css?.fontFamily;
      const l = k.split(" ")[0] as L;
      if (!card.face.shown) {
        if (fam) expect(fam.k, k).toMatch(/^fonts\.faces\./); // only a labelled substitute
        continue;
      }
      expect(fam, k).toBeDefined();
      const ok = Object.values(PAGE_FACES[l]).includes(fam!.css) || (/^var\(--font-r11-pretendard\)/.test(fam!.css) && ["latin", "hangul"].includes(PAGE_SCRIPT[l]));
      expect(ok, `${k}: ${fam!.css}`).toBe(true);
    }
  });

  it("the Write step's +N is the printed source's line count, and the Read path is the installed catalog copy", () => {
    for (const [name, card] of cards) {
      expect(card.lines, name).toBe(card.source.split("\n").length);
      expect(card.lines, name).toBeGreaterThan(10);
      expect(card.parts, name).toBeGreaterThanOrEqual(3);
      for (const t of texts(card.root)) expect(card.source, `${name}: "${t}" printed`).toContain(t.split(" ")[0].replace(/[{}<>]/g, ""));
      if (name.startsWith("hero")) expect(card.read, name).toBe(`.claude/data/references/${card.id}/DESIGN.md`);
    }
    expect(getChatCard("en").read).toBe(".claude/data/references/linear.app/DESIGN.md");
    expect(getCliScreen("ko").read).toBe("DESIGN.md");
  });

  it("the client gets no printed source, and each chat links to its company's item page", () => {
    for (const l of LOCALES) {
      const { chats } = getHeroChats(l, getHeroCaps(l), PAGE_FACES[l]);
      for (const [id, c] of Object.entries(chats)) {
        expect("source" in c.card, `${l} ${id}`).toBe(false);
        expect(c.href, `${l} ${id}`).toBe(detailHrefFor(l, id, true));
        expect(c.prompt, `${l} ${id}`).toContain(c.name);
        expect(c.label, `${l} ${id}`).toContain(c.name);
      }
    }
    expect(getHeroChats("ko", getHeroCaps("ko")).chats.toss.href).toBe("/ko/design-systems/toss");
    expect(getHeroChats("en", getHeroCaps("en")).chats["linear.app"].href).toBe("/design-systems/linear.app");
  });
});

describe("example cards: legible", () => {
  const lum = (hex: string) => {
    const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((x) => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  };
  const ratio = (a: string, b: string) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
  it("text outside the brand's own buttons is ≥ 4.5:1 on its nearest fill (buttons keep their claimed colours)", () => {
    const low: string[] = [];
    const walk = (n: CardNode, bg: string, fg: string, name: string) => {
      const fill = n.css?.background?.css;
      const here = fill && /^#[0-9a-f]{6}$/i.test(fill) ? fill : bg;
      if (n.cls?.includes("sq-ex-btn")) return;
      const ink = n.css?.color?.css ?? fg; // an unset colour inherits its parent's
      if (n.text) { const r = ratio(ink, here); if (r < 4.5) low.push(`${name}: "${n.text}" ${r.toFixed(2)}`); }
      for (const k of n.kids ?? []) walk(k, here, ink, name);
    };
    for (const [name, card] of [...heroCards(), ...LOCALES.map((l) => [`cli ${l}`, getCliScreen(l)] as [string, ChatCard])]) {
      walk(card.root, card.root.css?.background?.css ?? "#ffffff", card.root.css?.color?.css ?? "#000000", name);
    }
    expect(low).toEqual([]);
  });
});

describe("copy: one shape in four locales", () => {
  const shape = (o: unknown): unknown =>
    Array.isArray(o) ? (o.length && typeof o[0] === "object" ? o.map(shape) : "array") : o && typeof o === "object" ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, shape(v)])) : typeof o;
  const noCards = (c: ReturnType<typeof getR11Hero>) => ({ ...c, chat: { ...c.chat, kinds: Object.fromEntries(Object.entries(c.chat.kinds).map(([k, v]) => [k, { ...v, card: null }])) } });
  it("same keys, nothing empty, prompts written per locale, no example labels", () => {
    const ref = JSON.stringify(shape(noCards(getR11Hero("en"))));
    for (const l of LOCALES) {
      const c = getR11Hero(l);
      expect(JSON.stringify(shape(noCards(c))), l).toBe(ref);
      expect(Object.keys(c.chat.kinds).sort(), l).toEqual([...HERO_KINDS].sort());
      const all = JSON.stringify(c);
      expect(all).not.toMatch(/실시간 AI|not a live AI|リアルタイムのAI|即時 AI/);
      expect(all).not.toMatch(/""/);
      for (const [k, v] of Object.entries(c.chat.kinds)) {
        for (const f of ["prompt", "label", "think"] as const) expect(v[f], `${l} ${k}.${f}`).toContain("{name}");
        expect(v.card.title, `${l} ${k}`).not.toBe("");
      }
      expect(c.chat.link).toContain("{name}");
      expect(c.keys).not.toMatch(/opens|열려요|開きます|打開/); // round 12: a key no longer opens a page
    }
    for (const k of HERO_KINDS) expect(new Set(LOCALES.map((l) => getR11Hero(l).chat.kinds[k].prompt)).size, k).toBe(4);
    expect(new Set(LOCALES.map((l) => getR11Hero(l).cli.context)).size).toBe(4);
    expect(getR11Hero("ko").cli.context).toBe("oh-my-design-cli는 레퍼런스와 디자인 스킬을 내 코딩 에이전트에 설치하는 도구예요.");
    for (const l of LOCALES) expect(getR11Hero(l).trace.face).toContain("{face}");
  });

  it("the opening prompts read as they did in round 11 (104 now by its full name, as its link names it)", () => {
    const p = (l: L) => getHeroChats(l, getHeroCaps(l)).chats[CHAT_COMPANY[l]].prompt;
    expect(p("ko")).toBe("토스 스타일로 송금 완료 카드 만들어줘");
    expect(p("ja")).toBe("pixiv風の作品カードを作って");
    expect(p("en")).toBe("Make an issue card in Linear's style");
    expect(p("zh-tw")).toBe("用 104人力銀行的風格做一張職缺卡片");
  });

  it("names go into running text the locale's way (Traditional Chinese sets Latin and digits off with a space)", () => {
    expect(withName("用{name}的風格", "KakaoBank", "zh-tw")).toBe("用 KakaoBank 的風格");
    expect(withName("用{name}的風格", "中華航空", "zh-tw")).toBe("用中華航空的風格");
    expect(withName("我先讀{name}的 DESIGN.md", "104人力銀行", "zh-tw")).toBe("我先讀 104人力銀行的 DESIGN.md");
    expect(withName("{name}風の作品カード", "KREAM", "ja")).toBe("KREAM風の作品カード");
    expect(withName("{name} 스타일로", "카카오뱅크", "ko")).toBe("카카오뱅크 스타일로");
  });
});

describe("the pick store (round 12)", () => {
  it("starts on no pick, and every pick — the shown company's too — counts", () => {
    resetHeroPick();
    expect(heroPick()).toEqual({ id: null, seq: 0 });
    pickCompany("kurly");
    pickCompany("kurly");
    expect(heroPick()).toEqual({ id: "kurly", seq: 2 });
    pickCompany("toss");
    expect(heroPick()).toEqual({ id: "toss", seq: 3 });
    resetHeroPick();
  });
});

describe("CLI transcript (recaptured with scripts/capture-cli-transcript.mjs)", () => {
  const [install, doctor] = transcript.runs;
  it("is the published 2.0.4+ package, same schema", () => {
    const [maj, min, pat] = transcript.version.split(".").map(Number);
    expect(maj * 10000 + min * 100 + pat).toBeGreaterThanOrEqual(20004);
    expect(install.cmd).toBe("npx oh-my-design-cli@latest");
    expect(doctor.cmd).toBe("npx oh-my-design-cli@latest doctor");
    expect(install.lines[0]).toMatch(/^┌ {2}omd install-skills/);
    expect(install.tail.at(-1)).toMatch(/^└ {2}Done\./);
  });
  it("cuts only the per-file list", () => {
    const kept = [...install.lines, ...install.tail];
    expect(kept.some((l) => /^│\s+(created|updated|unchanged)\s/.test(l))).toBe(false);
    expect(install.elided).toBeGreaterThan(100);
    expect(transcript.note).toMatch(/per-file list/);
  });
});

describe("rendered: the hero chat and the CLI section", async () => {
  const { createElement } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const { ChatDemo } = await import("@/components/brand-a/chat-demo");
  const { CliSection, boxLines, INSTALL } = await import("@/components/brand-a/cli-section");
  const { getR10 } = await import("@/components/brand-a/copy/r10");
  const { getCopy } = await import("@/components/brand-a/copy");
  const visible = (html: string) => html.replace(/<[^>]+>/g, " ");
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/'/g, "&#x27;").replace(/"/g, "&quot;");

  it("each locale's chat opens on its own company, ends in the card, links to its item page, and carries no example label", () => {
    for (const l of LOCALES) {
      const h = getR11Hero(l);
      const { initial, chats } = getHeroChats(l, getHeroCaps(l), PAGE_FACES[l]);
      const chat = chats[initial];
      const html = renderToStaticMarkup(createElement(ChatDemo, { chats, initial, t: { trace: h.trace, link: h.chat.link } }));
      const text = visible(html);
      expect(text, l).toContain(esc(chat.prompt));
      expect(text, l).toContain(h.chat.kinds[KIND[initial]].card.title);
      expect(text, l).toContain(chat.card.file);
      expect(text, l).toContain(`+${chat.card.lines}`);
      expect(html, l).toContain(`data-company="${CHAT_COMPANY[l]}"`);
      expect(html, l).toContain(`aria-label="${esc(chat.label)}"`);
      expect(html, l).toContain(`id="chat"`);
      // the quiet link: the company as its keycap names it, to its item page
      expect(html, l).toMatch(new RegExp(`<a href="${chat.href.replace(/[.]/g, "\\.")}"[^>]*><span lang="${chat.nLang}">${chat.name}</span> DESIGN\\.md<span aria-hidden="true"> →</span></a>`));
      expect(text, l).not.toContain(getR10(l).chat.tag);
      expect(text, l).not.toContain(getR10(l).chat.note.slice(0, 12));
      expect(text, l).not.toContain(getR10(l).chat.bar);
      const faceNote = h.trace.faceSub.replace("{face}", "Toss Product Sans").replace("{sub}", "Pretendard Variable");
      expect(text.includes(faceNote), l).toBe(l === "ko");
    }
  });

  it("the CLI section: context line, install → apply, the real output, no caption, no doctor run", () => {
    for (const l of LOCALES) {
      const h = getR11Hero(l), r = getR10(l);
      const html = renderToStaticMarkup(createElement(CliSection, { locale: l, c: getCopy(l), r, total: 521, skills: 31, skillsHref: "#" }));
      const text = visible(html);
      expect(text).toContain(h.cli.context);
      expect(text).toContain(h.cli.steps[0].t);
      expect(text).toContain(h.cli.steps[1].t);
      expect(text).not.toContain(r.cli.steps[1].p); // r10's "check" step
      const caption = r.cli.caption.replace("{ver}", transcript.version).replace("{date}", transcript.captured).replace("{n}", String(transcript.runs[0].elided));
      expect(text).not.toContain(caption.slice(-24)); // r10's "real output of 2.0.3 on …" caption
      expect(text).toMatch(/└ {2}Done\. \d+ skills/);
      expect(text).not.toMatch(/Render checks|omd doctor/);
      expect(text.replace(/\s+/g, " ")).toContain(INSTALL.replace(/\s+/g, " "));
    }
  });

  it("the terminal only drops box borders, padding and blank box rows — every printed word stays", () => {
    const [install] = transcript.runs;
    const words = (ls: readonly string[]) => ls.join(" ").replace(/[│◇├─╮╯]/g, " ").split(/\s+/).filter(Boolean);
    expect(words(boxLines(install.tail))).toEqual(words(install.tail));
    expect(words(boxLines(install.lines))).toEqual(words(install.lines));
    expect(boxLines(install.tail).some((x) => /[╮╯]/.test(x))).toBe(false);
  });
});
