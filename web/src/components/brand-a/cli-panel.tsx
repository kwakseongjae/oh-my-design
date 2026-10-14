import transcript from "@/data/cli-transcript.json";
import type { BrandCopy } from "./copy";
import { fmt } from "./copy";
import { CopyButton } from "./copy-button";

/**
 * The omd CLI, shown by its own output (round 5). Every output line is verbatim from a
 * real run of the published package (data/cli-transcript.json, raw captures in
 * impl/r5/cli/); the only thing not printed by the CLI is the "N lines left out" marker,
 * set in the page face so it never reads as output. The first command is the one
 * install command on the page, and it is the copyable one.
 */
export function CliPanel({ t }: { t: BrandCopy["use"] }) {
  const [install, ...rest] = transcript.runs;
  return (
    <div className="sq-term" role="region" aria-label={t.panel}>
      <div className="sq-term-cmd sq-term-main">
        <code lang="en">
          <span className="sq-term-ps" aria-hidden="true">$ </span>
          {install.cmd}
        </code>
        <CopyButton text={install.cmd} labels={t} />
      </div>
      <Out run={install} gap={t.gap} />
      {rest.map((r) => (
        <div key={r.cmd}>
          <div className="sq-term-cmd">
            <code lang="en">
              <span className="sq-term-ps" aria-hidden="true">$ </span>
              {r.cmd}
            </code>
          </div>
          <Out run={r} gap={t.gap} />
        </div>
      ))}
      <p className="sq-term-note">{fmt(t.note, { ver: transcript.version, date: transcript.captured })}</p>
    </div>
  );
}

function Out({ run, gap }: { run: (typeof transcript.runs)[number]; gap: string }) {
  return (
    <pre className="sq-term-out" lang="en">
      <code>{run.lines.join("\n")}</code>
      {run.elided > 0 ? <span className="sq-term-gap">{"\n" + fmt(gap, { n: run.elided }) + "\n"}</span> : null}
      {run.tail.length ? <code>{run.tail.join("\n")}</code> : null}
    </pre>
  );
}
