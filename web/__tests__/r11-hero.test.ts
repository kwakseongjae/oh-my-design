import { describe, expect, it } from "vitest";
import transcript from "@/data/cli-transcript.json";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_VERIFICATION_BY_ID } from "@/data/reference-verification.generated";
import { getR11Hero } from "@/components/brand-a/copy/r11-hero";
import {
  CARD_SLOTS, CHAT_CANDIDATES, CHAT_COMPANY, cardCoverage, getChatCard, getCliScreen, pickCompany,
  type CardNode, type ChatCard, type Tok,
} from "@/lib/landing-a/chat-data.server";

/**
 * Round 11 hero + CLI (docs/REDESIGN_R11_PLAN_2026-10-20.md W1, W3): the chat company per locale is
 * measured, every value an example card renders is a claimed token of that company, the copy has
 * one shape in four locales, and the transcript is the real 2.0.4+ output with only the per-file
 * list cut.
 */
const LOCALES = ["en", "ko", "ja", "zh-tw"] as const;

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

describe("chat company per locale (owner decision 4: KR toss, JP pixiv; EN and TW by card-slot coverage)", () => {
  it("prints the coverage table and the measured picks hold", () => {
    const ids = ["toss", "pixiv", ...CHAT_CANDIDATES.en, ...CHAT_CANDIDATES["zh-tw"]];
    const rows = ids.map(cardCoverage);
    console.log(
      `card slots (${CARD_SLOTS.length}; colours count only as hex fills):\n` +
        rows.map((c) => `  ${c.id.padEnd(11)} ${c.have}/${c.of}  logo:${c.logo ? "yes" : "no "}  primary action:${c.primaryAction ?? "none"}  missing: ${c.missing.join(", ") || "none"}`).join("\n"),
    );
    for (const c of rows) expect(c.verified, c.id).toBe(true);
    expect(pickCompany(CHAT_CANDIDATES.en)).toBe(CHAT_COMPANY.en);
    expect(pickCompany(CHAT_CANDIDATES["zh-tw"])).toBe(CHAT_COMPANY["zh-tw"]);
    expect(CHAT_COMPANY.ko).toBe("toss");
    expect(CHAT_COMPANY.ja).toBe("pixiv");
  });
});

describe("example cards: claimed values only", () => {
  const cards: [string, ChatCard][] = [
    ...LOCALES.map((l) => [`hero ${l}`, getChatCard(l, { Inter: "var(--x)", "Noto Sans CJK JP": "var(--y)" })] as [string, ChatCard]),
    ...LOCALES.map((l) => [`cli ${l}`, getCliScreen(l)] as [string, ChatCard]),
  ];
  it("every rendered value is a claimed token of the company, and its CSS comes from that value", () => {
    for (const [name, card] of cards) {
      const claims = REFERENCE_VERIFICATION_BY_ID[card.id].claims;
      const list = toks(card.root);
      expect(list.length, name).toBeGreaterThan(10);
      for (const [prop, t] of list) {
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
  it("faces: Toss Product Sans is named and not shown; 104 names none; Linear and pixiv are shown when the page loads them", () => {
    const by = Object.fromEntries(cards.map(([n, c]) => [n, c]));
    expect(by["hero ko"].face).toEqual({ name: "Toss Product Sans", shown: false });
    expect(by["hero zh-tw"].face).toEqual({ name: null, shown: false });
    expect(by["hero en"].face).toEqual({ name: "Inter", shown: true });
    expect(by["hero ja"].face).toEqual({ name: "Noto Sans CJK JP", shown: true });
    expect(getChatCard("en").face).toEqual({ name: "Inter", shown: false });
    for (const l of LOCALES) expect(getCliScreen(l).face.shown).toBe(false);
  });
  it("the Write step's +N is the printed source's line count, and the Read path is the installed catalog copy", () => {
    for (const [name, card] of cards) {
      expect(card.lines, name).toBe(card.source.split("\n").length);
      expect(card.lines, name).toBeGreaterThan(10);
      expect(card.parts, name).toBeGreaterThanOrEqual(3);
      for (const t of texts(card.root)) expect(card.source, `${name}: "${t}" printed`).toContain(t.split(" ")[0].replace(/[{}<>]/g, ""));
    }
    expect(getChatCard("en").read).toBe(".claude/data/references/linear.app/DESIGN.md");
    expect(getCliScreen("ko").read).toBe("DESIGN.md");
  });
});

describe("copy: one shape in four locales", () => {
  const shape = (o: unknown): unknown =>
    Array.isArray(o) ? (o.length && typeof o[0] === "object" ? o.map(shape) : "array") : o && typeof o === "object" ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, shape(v)])) : typeof o;
  it("same keys, nothing empty, prompts written per locale, no example labels", () => {
    const ref = JSON.stringify(shape({ ...getR11Hero("en"), chat: { ...getR11Hero("en").chat, card: null } }));
    for (const l of LOCALES) {
      const c = getR11Hero(l);
      expect(JSON.stringify(shape({ ...c, chat: { ...c.chat, card: null } })), l).toBe(ref);
      const all = JSON.stringify(c);
      expect(all).not.toMatch(/실시간 AI|not a live AI|リアルタイムのAI|即時 AI/);
      expect(all).not.toMatch(/""/);
    }
    expect(new Set(LOCALES.map((l) => getR11Hero(l).chat.prompt)).size).toBe(4);
    expect(new Set(LOCALES.map((l) => getR11Hero(l).cli.context)).size).toBe(4);
    expect(getR11Hero("ko").cli.context).toBe("oh-my-design-cli는 레퍼런스와 디자인 스킬을 내 코딩 에이전트에 설치하는 도구예요.");
    for (const l of LOCALES) expect(getR11Hero(l).trace.face).toContain("{face}");
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
