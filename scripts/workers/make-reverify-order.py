#!/usr/bin/env python3
"""Build one re-verification worker's folder (owner 2026-11-02: "미검증을 처리하면서 700개로").

  scripts/workers/make-reverify-order.py <wave> <id> [url] [locale] [origin]

url, locale and origin default to the prior's homepage, its country's main locale and the homepage's origin.

The reference already exists in web/references/<id>/: partial or legacy (never verified in v2), or verified
but measured again because a later re-measurement differed from the published values. The worker re-measures
it with the same order as a new reference (docs/workers/REFERENCE_ORDER_TEMPLATE.md, via
make-reference-order.py), starting front.yaml and body.md from the prior authoring input, and must account for
every prior value and sentence: confirmed, corrected with evidence, or listed as unconfirmed. The canonical body
is never shortened to pass a gate (AGENTS.md hard rules); what a worker could not confirm comes back to the
orchestrator, who decides. The note's first paragraph follows the status in data/reference-quality.json.

The prior is the first of these that exists (the shape web/scripts/assemble-reference.mjs reads):
  1. a worker folder under $OMD_WORKER_HOME/*/<id>/ (default ~/.omd-workers) whose out/DESIGN.md is byte-equal
     to the published DESIGN.md: its front.yaml and body.md are exactly what the published reference was
     assembled from. References authored by workers since 2026-10-29 never had a legacy-shape file in git, and a
     re-verified one's legacy file in git is older than what is published;
  2. the last legacy-shape DESIGN.md in git history (frontmatter with id: and tokens:);
  3. the most recently modified worker folder with front.yaml and body.md, named as a draft in the note.
OMD_REVERIFY_PRIOR=<worker folder> picks the folder instead. Worker folders are local-only: with none of the three
the script stops and says what is missing. It never writes into the prior folder: when <wave> would make the new
folder the same path, it stops and asks for another wave name.

Adds to the folder: prior-front.yaml + prior-body.md (+ prior-verification.md from that folder) for a worker-folder
prior, prior-legacy-DESIGN.md whenever git has one, prior-verification.md from the published .verification.md
otherwise, and prior-v3-DESIGN.md (the published file; with OMD_ORDER_COMPILED=1 the order pins its token names).
Prints the order path; spawn with scripts/workers/spawn.sh --workdir <folder> --order <order> --mcp capture.
"""
import json, os, pathlib, re, subprocess, sys

REPO = pathlib.Path(__file__).resolve().parents[2]
HOME_W = pathlib.Path(os.environ.get("OMD_WORKER_HOME", pathlib.Path.home() / ".omd-workers")).expanduser().resolve()
if len(sys.argv) < 3:
    sys.exit(__doc__)
wave, cid = sys.argv[1:3]
url, locale, origin = (sys.argv[3:6] + [None, None, None])[:3]
LOCALES = {"KR": "ko-KR", "JP": "ja-JP", "TW": "zh-TW", "CN": "zh-CN", "HK": "zh-HK", "US": "en-US", "UK": "en-GB",
           "DE": "de-DE", "FR": "fr-FR", "IT": "it-IT", "FI": "fi-FI", "NL": "nl-NL", "SE": "sv-SE", "ES": "es-ES",
           "LT": "lt-LT", "NO": "nb-NO", "DK": "da-DK", "AT": "de-AT", "EE": "et-EE", "CZ": "cs-CZ", "RO": "ro-RO",
           "BE": "nl-BE", "CH": "de-CH"}
ref = REPO / "web/references" / cid
if not (ref / "DESIGN.md").exists():
    sys.exit(f"no reference {cid}")
published = (ref / "DESIGN.md").read_bytes()
target = HOME_W / wave / cid


def git(*args: str) -> str:
    return subprocess.run(["git", "-C", str(REPO), *args], check=True, capture_output=True, text=True).stdout


def is_legacy(md: str) -> bool:
    front = md.split("\n---", 2)[0] if md.startswith("---") else ""
    return "\ntokens:" in front and re.search(r"^id:\s", front, re.M) is not None


def authored(p: pathlib.Path) -> bool:
    return (p / "front.yaml").is_file() and (p / "body.md").is_file()


def assembled_published(p: pathlib.Path) -> bool:
    return (p / "out/DESIGN.md").is_file() and (p / "out/DESIGN.md").read_bytes() == published


legacy = None  # (short sha, text) of the last legacy-shape DESIGN.md in git
for sha in git("log", "--format=%H", "--", f"web/references/{cid}/DESIGN.md").split():
    try:
        md = git("show", f"{sha}:web/references/{cid}/DESIGN.md")
    except subprocess.CalledProcessError:
        continue
    if is_legacy(md):
        legacy = (sha[:8], md)
        break

if os.environ.get("OMD_REVERIFY_PRIOR"):
    folder = pathlib.Path(os.environ["OMD_REVERIFY_PRIOR"]).expanduser().resolve()
    if not authored(folder):
        sys.exit(f"{cid}: OMD_REVERIFY_PRIOR={folder} has no front.yaml and body.md")
else:
    folders = sorted((p.resolve() for p in HOME_W.glob(f"*/{cid}") if authored(p)),
                     key=lambda p: max((p / f).stat().st_mtime for f in ("front.yaml", "body.md")), reverse=True)
    exact = [p for p in folders if assembled_published(p)]
    folder = exact[0] if exact else None if legacy else folders[0] if folders else None
if folder is None and legacy is None:
    sys.exit(f"{cid}: no prior to start from: git history has no legacy-shape DESIGN.md, and no folder "
             f"{HOME_W}/*/{cid}/ has both front.yaml and body.md (worker folders are local-only). "
             f"Pass OMD_REVERIFY_PRIOR=<folder> if the authoring input is elsewhere.")
if folder is not None and folder == target.resolve():
    sys.exit(f"{cid}: the prior is {folder}, which wave '{wave}' would overwrite; pass a different wave name")

prior_text = (folder / "front.yaml").read_text() if folder else legacy[1]


def front(key: str) -> str:
    m = re.search(r"^%s:\s*['\"]?(.+?)['\"]?\s*$" % key, prior_text, re.M)
    return m.group(1) if m else ""


name = front("name")
url = url or front("homepage")
if not re.match(r"https?://[^/]+", url or ""):
    sys.exit(f"{cid}: no homepage in the prior; pass <url> (and locale, origin) on the command line")
locale = locale or LOCALES.get(front("country"), "en-US")
origin = origin or re.match(r"https?://[^/]+", url).group(0)

quality = {e["id"]: e for e in json.loads((REPO / "data/reference-quality.json").read_text())["items"]}
entry = quality.get(cid, {})
status = entry.get("status", "")
verified = status == "verified_v2"

if verified:
    opening = (f"`{cid}` is in the catalog as verified (v2, verified {entry.get('verified_at', '?')}). It is being "
               "measured again because a later re-measurement of the live site differed from the published values.")
    closing = ("A difference the later re-measurement found is a lead, not a correction: a value changes only on your own "
               "measurement or a source you opened, like any other.")
else:
    shown = {"partial": "partial", "legacy_snapshot": "legacy"}.get(status, "not in data/reference-quality.json")
    opening = f"`{cid}` is already in the catalog without a v2 verification (its status is {shown})."
    closing = "A partial or legacy status is not evidence that the prior content is wrong."

keep = "keeping its `added:` date; set `verified:` to today."
files = []
if folder is not None:
    where = f"`{folder.relative_to(HOME_W)}`" if folder.is_relative_to(HOME_W) else f"`{folder}`"
    if assembled_published(folder):
        files.append(f"`prior-front.yaml` and `prior-body.md`: the frontmatter and body the published reference was "
                     f"assembled from (worker folder {where}). **Start your `front.yaml` and `body.md` from them**, {keep}")
    else:
        files.append(f"`prior-front.yaml` and `prior-body.md`: the most recent worker draft for this reference (worker "
                     f"folder {where}); its assembled output is not the published file. **Start your `front.yaml` and "
                     f"`body.md` from them**, {keep} A value or sentence that `prior-v3-DESIGN.md` carries and the draft "
                     "lacks is a prior value too.")
    if legacy:
        files.append(f"`prior-legacy-DESIGN.md`: an older legacy-shape version from git `{legacy[0]}`, before the "
                     "published one. History only: do not start from it.")
    files.append("`prior-verification.md`: the proof notes from that folder, if it had any. They are the claims to "
                 "re-check, not evidence.")
    files.append("`prior-v3-DESIGN.md`: the published file, assembled from the prior. For reference only: you write "
                 "`front.yaml` and `body.md`, and the assembler makes this format.")
else:
    files.append(f"`prior-legacy-DESIGN.md`: the reference as last authored in the legacy shape (git `{legacy[0]}`). "
                 f"**Start your `front.yaml` and `body.md` from it**, {keep}")
    files.append("`prior-verification.md`: the earlier proof notes, if there were any. They are the claims to "
                 "re-check, not evidence.")
    files.append("`prior-v3-DESIGN.md`: the published conversion, for reference only. Do not copy its format.")
listing = "\n".join("- " + f for f in files)
note = f"""
**This is a re-verification, not a new reference.** {opening} Your folder also holds:
{listing}

Every prior value and sentence must end up in exactly one of three places:
1. **Confirmed**: your new measurement or a first-party source you opened says the same. Keep it.
2. **Corrected**: the live site or a source contradicts it. Write the new value with its evidence, and list
   `old → new` with the evidence in `verification.md` under "Changes since prior".
3. **Unconfirmed**: you could neither confirm nor refute it (no source, element not found, blocked). Keep it out of
   `body.md` and list it in `report.md` under "Unconfirmed prior content", one line each with the reason. The
   orchestrator decides what returns.
Do not drop a prior sentence for any other reason, and do not shorten the reference to make a check pass.
{closing}
"""
# With the compiled method (OMD_ORDER_COMPILED=1) the published token names are pinned: a value that has not
# changed keeps the name the reference already carries (2026-11-13: 59 of 59 colours, against 19 % without).
env = dict(os.environ, OMD_WORKER_HOME=str(HOME_W),
           **({"OMD_ORDER_PUBLISHED": "prior-v3-DESIGN.md"} if os.environ.get("OMD_ORDER_COMPILED") == "1" else {}))
out = subprocess.run(
    [sys.executable, str(REPO / "scripts/workers/make-reference-order.py"), wave, cid, name, url, locale, origin, note],
    check=True, capture_output=True, text=True, env=env).stdout.strip()
d = pathlib.Path(out).parent
if folder is not None:
    (d / "prior-front.yaml").write_bytes((folder / "front.yaml").read_bytes())
    (d / "prior-body.md").write_bytes((folder / "body.md").read_bytes())
    verification = folder / "verification.md"
else:
    verification = ref / ".verification.md"
if legacy:
    (d / "prior-legacy-DESIGN.md").write_text(legacy[1])
(d / "prior-v3-DESIGN.md").write_bytes(published)
if verification.is_file():
    (d / "prior-verification.md").write_bytes(verification.read_bytes())
print(out)
