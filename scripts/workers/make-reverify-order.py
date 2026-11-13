#!/usr/bin/env python3
"""Build one re-verification worker's folder (owner 2026-11-02: "미검증을 처리하면서 700개로").

  scripts/workers/make-reverify-order.py <wave> <id> [url] [locale] [origin]

url, locale and origin default to the prior reference's homepage, its country's main locale and the homepage's origin.

A partial or legacy reference already exists in web/references/<id>/. The worker re-measures it with the
same order as a new reference (docs/workers/REFERENCE_ORDER_TEMPLATE.md, via make-reference-order.py), but
starts front.yaml and body.md from the reference's last legacy-shape DESIGN.md in git (the shape the
assembler reads), and must account for every prior value and sentence: confirmed, corrected with
evidence, or listed as unconfirmed. The canonical body is never shortened to pass a gate (AGENTS.md hard
rules); what a worker could not confirm comes back to the orchestrator, who decides.

Adds to the folder: prior-legacy-DESIGN.md, prior-verification.md (if any) and prior-v3-DESIGN.md.
Prints the order path; spawn with scripts/workers/spawn.sh --workdir <folder> --order <order> --mcp capture.
"""
import os, pathlib, re, subprocess, sys

REPO = pathlib.Path(__file__).resolve().parents[2]
if len(sys.argv) < 3:
    sys.exit(__doc__)
wave, cid = sys.argv[1:3]
url, locale, origin = (sys.argv[3:6] + [None, None, None])[:3]
LOCALES = {"KR": "ko-KR", "JP": "ja-JP", "TW": "zh-TW", "CN": "zh-CN", "US": "en-US", "UK": "en-GB", "DE": "de-DE",
           "FR": "fr-FR", "IT": "it-IT", "FI": "fi-FI", "NL": "nl-NL", "SE": "sv-SE", "ES": "es-ES", "LT": "lt-LT",
           "NO": "nb-NO", "DK": "da-DK", "AT": "de-AT", "EE": "et-EE", "CZ": "cs-CZ", "RO": "ro-RO", "BE": "nl-BE", "CH": "de-CH"}
ref = REPO / "web/references" / cid
if not (ref / "DESIGN.md").exists():
    sys.exit(f"no reference {cid}")


def git(*args: str) -> str:
    return subprocess.run(["git", "-C", str(REPO), *args], check=True, capture_output=True, text=True).stdout


def is_legacy(md: str) -> bool:
    front = md.split("\n---", 2)[0] if md.startswith("---") else ""
    return "\ntokens:" in front and re.search(r"^id:\s", front, re.M) is not None


prior = None
for sha in git("log", "--format=%H", "--", f"web/references/{cid}/DESIGN.md").split():
    try:
        md = git("show", f"{sha}:web/references/{cid}/DESIGN.md")
    except subprocess.CalledProcessError:
        continue
    if is_legacy(md):
        prior = (sha[:8], md)
        break
if prior is None:
    sys.exit(f"{cid}: no legacy-shape DESIGN.md in git history")

def front(key: str) -> str:
    m = re.search(r"^%s:\s*['\"]?(.+?)['\"]?\s*$" % key, prior[1], re.M)
    return m.group(1) if m else ""


name = front("name")
url = url or front("homepage")
locale = locale or LOCALES.get(front("country"), "en-US")
origin = origin or re.match(r"https?://[^/]+", url).group(0)
note = f"""
**This is a re-verification, not a new reference.** `{cid}` is already in the catalog without a v2 verification
(its status is partial or legacy). Your folder also holds:
- `prior-legacy-DESIGN.md`: the reference as last authored in the legacy shape (git `{prior[0]}`). **Start your
  `front.yaml` and `body.md` from it**, keeping its `added:` date; set `verified:` to today.
- `prior-verification.md`: the earlier proof notes, if there were any. They are the claims to re-check, not evidence.
- `prior-v3-DESIGN.md`: the published conversion, for reference only. Do not copy its format.

Every prior value and sentence must end up in exactly one of three places:
1. **Confirmed**: your new measurement or a first-party source you opened says the same. Keep it.
2. **Corrected**: the live site or a source contradicts it. Write the new value with its evidence, and list
   `old → new` with the evidence in `verification.md` under "Changes since prior".
3. **Unconfirmed**: you could neither confirm nor refute it (no source, element not found, blocked). Keep it out of
   `body.md` and list it in `report.md` under "Unconfirmed prior content", one line each with the reason. The
   orchestrator decides what returns.
Do not drop a prior sentence for any other reason, and do not shorten the reference to make a check pass. A
partial or legacy status is not evidence that the prior content is wrong.
"""
# With the compiled method (OMD_ORDER_COMPILED=1) the published token names are pinned: a value that has not
# changed keeps the name the reference already carries (2026-11-13: 59 of 59 colours, against 19 % without).
env = dict(os.environ, **({"OMD_ORDER_PUBLISHED": "prior-v3-DESIGN.md"} if os.environ.get("OMD_ORDER_COMPILED") == "1" else {}))
out = subprocess.run(
    [sys.executable, str(REPO / "scripts/workers/make-reference-order.py"), wave, cid, name, url, locale, origin, note],
    check=True, capture_output=True, text=True, env=env).stdout.strip()
d = pathlib.Path(out).parent
(d / "prior-legacy-DESIGN.md").write_text(prior[1])
(d / "prior-v3-DESIGN.md").write_text((ref / "DESIGN.md").read_text())
if (ref / ".verification.md").exists():
    (d / "prior-verification.md").write_text((ref / ".verification.md").read_text())
print(out)
