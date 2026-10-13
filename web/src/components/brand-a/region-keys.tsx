"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { CapData, RegionCC } from "@/lib/landing-a/types";
import { CssKeycap } from "./keycap";

/** Input-method legends: 한 (ㅎ is on G in 2-beolsik), あ (JIS kana on 3), ㄅ (Zhuyin on 1). */
const IME: Record<RegionCC, { g: string; l: string; k: string; s?: string }> = {
  KR: { g: "한", l: "ko", k: "G", s: "ㅎ" },
  JP: { g: "あ", l: "ja", k: "3" },
  TW: { g: "ㄅ", l: "zh-Hant", k: "1" },
};

interface T {
  keyCount: string;
  keyVer: string;
  thin: string;
  show: string;
  all: string;
  h2: string;
  names: Record<string, string>;
  checked: string;
  surfaces: string;
}

const fill = (s: string, v: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (m, k) => (k in v ? String(v[k]) : m));

export function RegionKeys({ order, regions, counts, verified, t }: { order: RegionCC[]; regions: Record<RegionCC, readonly CapData[]>; counts: Record<string, number>; verified: Record<string, number>; t: T }) {
  const [sel, setSel] = useState<RegionCC>(order[0]);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const pick = (cc: RegionCC, focus = false) => {
    setSel(cc);
    if (focus) refs.current[cc]?.focus();
  };
  return (
    <>
      <div className="sq-rkeys" role="tablist" aria-label={t.h2}>
        {order.map((cc) => {
          const m = IME[cc];
          const on = cc === sel;
          const [before, after] = t.keyCount.split("{n}");
          return (
            <button
              key={cc}
              ref={(el) => {
                refs.current[cc] = el;
              }}
              type="button"
              className="sq-rkey"
              role="tab"
              id={`rk-${cc}`}
              aria-controls="rpanel"
              aria-selected={on}
              tabIndex={on ? 0 : -1}
              onClick={() => pick(cc)}
              onKeyDown={(e) => {
                if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                e.preventDefault();
                const i = order.indexOf(sel) + (e.key === "ArrowRight" ? 1 : -1);
                pick(order[(i + order.length) % order.length], true);
              }}
            >
              <span className="sq-key" aria-hidden="true">
                <span className="sq-kc">
                  <span className="sq-kt">
                    <span className="sq-lg" lang={m.l}>{m.g}</span>
                    <span className="sq-kcc" lang={m.l}>
                      {m.k}
                      {m.s ? <b>{m.s}</b> : null}
                    </span>
                  </span>
                </span>
              </span>
              <span className="sq-rkey-meta">
                <span className="sq-rh">{t.names[cc]}</span>
                <span className="sq-rp">
                  {before}
                  <b>{counts[cc] ?? 0}</b>
                  {after} · {fill(t.keyVer, { v: verified[cc] ?? 0 })}
                </span>
              </span>
              {cc === "TW" ? <span className="sq-thin">{t.thin}</span> : null}
            </button>
          );
        })}
      </div>
      <div className="sq-rpanel" id="rpanel" role="tabpanel" aria-labelledby={`rk-${sel}`}>
        <h3>{fill(t.show, { r: t.names[sel] })}</h3>
        <ul className="sq-mini">
          {regions[sel].map((d) => (
            <li key={d.id}>
              <a href={`/design-systems/${encodeURIComponent(d.id)}`}>
                <CssKeycap d={d} />
                <span>
                  <span className="sq-nm2">
                    <span lang={d.nLang}>{d.n}</span>
                    {d.alt ? <small lang="en">{d.alt}</small> : null}
                  </span>
                  <span className="sq-mt">
                    {d.chk ? fill(t.checked, { date: d.chk }) : null}
                    {d.chk ? " · " : null}
                    {fill(t.surfaces, { n: d.sf })}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <Link className="sq-txt-link" href="/design-systems" prefetch={false}>{fill(t.all, { n: counts[sel] ?? 0 })} →</Link>
      </div>
    </>
  );
}
