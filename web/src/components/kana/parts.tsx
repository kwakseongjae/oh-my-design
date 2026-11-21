import { Fragment } from "react";
import data from "@/data/kana-rules.generated.json";
import { KANA_COPY, SOURCE_ORGS } from "./copy";

/** Pieces both the rule cards (kana-page.tsx) and the comparison (compare.tsx) set the same way. */

const SOURCE = new Map(data.sources.map((s) => [s.key, s]));

/** kana, CJK ideographs and punctuation, full-width forms: a Japanese run inside Korean copy */
const JA_RUN = /([\u3000-\u303f\u3040-\u30ff\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef]+)/;

/** Korean copy with its Japanese words marked lang="ja" (they wrap and are set as Japanese). */
export function Mixed({ text }: { text: string }) {
  return (
    <>
      {text.split(JA_RUN).map((part, i) =>
        i % 2 ? (
          <span key={i} lang="ja">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** The source a quote or example comes from: the md's English page name, linked; a key with no URL (JTF) is named in Korean, not linked. */
export function SourceLink({ k }: { k: string }) {
  const s = SOURCE.get(k);
  return (
    <span className="kn-src">
      {s ? (
        <a href={s.url} target="_blank" rel="noopener noreferrer" lang="en" aria-label={`${s.name} (${KANA_COPY.rules.newTab})`}>
          {s.name}
          <span aria-hidden="true"> ↗</span>
        </a>
      ) : (
        <span>{SOURCE_ORGS.find((o) => o.prefix === k)?.name ?? k}</span>
      )}
    </span>
  );
}
