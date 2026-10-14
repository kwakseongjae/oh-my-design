"use client";

/**
 * /ko/design-systems — client half. Same archive styling as the English index
 * (archive.css), restraint rules included: one search field, one filter row, 24
 * cards and "더 보기". Every row is in the server HTML (rows past the page carry
 * `hidden`), so crawlers reach every Korean page. Data arrives as props; this
 * file imports no generated registry (lib/client-registry-boundary.test.ts).
 */

import { useDeferredValue, useState } from "react";
import Link from "next/link";
import { CssKeycap, type KeycapFace } from "@/components/brand-a/keycap";
import { trackDetailOpen } from "@/lib/design-systems/analytics";
import "@/components/brand-a/archive.css";

export interface KoRow {
  id: string;
  /** Korean display name where the registry has one, else the registry name. */
  name: string;
  /** Registry name when it differs from `name` (searchable, shown small). */
  en: string | null;
  kr: boolean;
  verified: boolean;
  /** The reference's own one-line description (English, as written). */
  desc: string;
  href: string;
  cap: KeycapFace | null;
}

type Group = "all" | "kr" | "intl";
const PAGE = 24;

/** Chrome for this view. Kept on the client side: functions cannot cross the server→client prop boundary. */
const labels = {
  all: "전체",
  kr: "한국",
  intl: "해외 검증",
  search: "레퍼런스 찾기",
  ph: "회사 이름이나 id로 찾기",
  count: (shown: number, total: number) => (shown === total ? `레퍼런스 ${total}개` : `레퍼런스 ${total}개 중 ${shown}개`),
  more: (n: number) => `${n}개 더 보기`,
  left: (n: number) => `${n}개 남음`,
  empty: "조건에 맞는 레퍼런스가 없어요.",
  clear: "필터 지우기",
  verified: "검증됨",
};

export function KoIndexView({ rows }: { rows: KoRow[] }) {
  const [group, setGroup] = useState<Group>("all");
  const [query, setQuery] = useState("");
  const q = useDeferredValue(query.trim().toLowerCase());
  const matchQ = (r: KoRow) =>
    !q || r.name.toLowerCase().includes(q) || r.id.includes(q) || (r.en?.toLowerCase().includes(q) ?? false);
  const inGroup = (r: KoRow, g: Group) => g === "all" || (g === "kr" ? r.kr : !r.kr);
  const count = (g: Group) => rows.filter((r) => matchQ(r) && inGroup(r, g)).length;
  const shown = rows.filter((r) => matchQ(r) && inGroup(r, group));
  const refined = group !== "all" || q !== "";

  return (
    <>
      <section className="sq-wrap sq-arch-tools" aria-label={labels.search}>
        <label className="sq-arch-search">
          <span className="sq-sr">{labels.search}</span>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <rect x="1.5" y="1.5" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M10.5 10.5 16.5 16.5" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.ph}
            autoComplete="off"
            spellCheck={false}
          />
        </label>
        <div className="sq-arch-filters">
          <div className="sq-seg" role="group" aria-label="구분">
            {(["all", "kr", "intl"] as const).map((g) => (
              <button key={g} type="button" aria-pressed={group === g} onClick={() => setGroup(g)}>
                {labels[g]} <span className="sq-n">{count(g)}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="sq-wrap sq-arch-list">
        <p className="sq-arch-count" role="status" aria-live="polite">
          {labels.count(shown.length, rows.length)}
          {refined ? (
            <button type="button" onClick={() => { setGroup("all"); setQuery(""); }}>
              {labels.clear}
            </button>
          ) : null}
        </p>
        {shown.length > 0 ? (
          <Paged key={`${group}|${q}`} rows={shown} />
        ) : (
          <p className="sq-arch-empty">{labels.empty}</p>
        )}
      </section>
    </>
  );
}

function Paged({ rows }: { rows: KoRow[] }) {
  const [limit, setLimit] = useState(PAGE);
  const left = rows.length - limit;
  return (
    <>
      <ul className="sq-agrid">
        {rows.map((r, i) => (
          <li key={r.id} className="sq-ac" hidden={i >= limit}>
            <Link href={r.href} className="sq-ac-link" onClick={() => trackDetailOpen({ reference: r.id, source: "directory" })}>
              <span className="sq-ac-cap" data-content-object="">
                {r.cap ? <CssKeycap d={r.cap} /> : null}
              </span>
              <span className="sq-ac-body">
                <span className="sq-ac-name">
                  {r.name}
                  {r.verified ? (
                    <span className="sq-ac-v" title={labels.verified}>
                      <span className="sq-sr"> ({labels.verified})</span>
                    </span>
                  ) : null}
                </span>
                <span className="sq-ac-desc">
                  {r.en ? <span lang="en">{r.en} · </span> : null}
                  <span lang="en">{r.desc}</span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {left > 0 ? (
        <div className="sq-arch-more">
          <button type="button" onClick={() => setLimit((n) => n + PAGE)}>
            {labels.more(Math.min(PAGE, left))}
          </button>
          <span>{labels.left(left)}</span>
        </div>
      ) : null}
    </>
  );
}
