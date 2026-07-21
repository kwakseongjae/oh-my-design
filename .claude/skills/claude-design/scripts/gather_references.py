#!/usr/bin/env python3
"""Gather local brand/visual reference assets (and explicit URL references) for the claude-design skill.

Walks a root directory (default: current working directory) up to a bounded depth, pruning
noisy/excluded directories in place, and collects files whose extension matches a set of
VISUAL image asset types. By default DOCUMENT files (.pdf, .hwp/.hwpx, .doc/.docx, .ppt/.pptx,
.xls/.xlsx) are EXCLUDED — they are document templates, not brand visuals — unless --include-docs
is passed.

Ranking (v2): brand-likelihood FIRST, then modification time (newest first). Filenames that look
like real brand assets (logo, wordmark, symbol, icon, brand, og, hero, cover, favicon, app-icon)
score high and float to the top; everything else falls back to mtime. Results are then size-filtered
and capped at a maximum count. This fixes the prior bug where large PDF business-plan templates
outranked the real brand assets (logo.svg / og.png) that Claude Design actually wants.

Explicit URL references can be passed (repeatable) and are echoed back alongside the discovered files.

Designed to be robust: never crashes on a bad/unreadable path (PermissionError, FileNotFoundError,
OSError are all swallowed gracefully). stdlib only.

CLI:
    python3 gather_references.py [--root DIR] [--max N] [--max-mb FLOAT] [--url URL ...]
        [--ext .png,.jpg,...] [--exclude GLOB ...] [--depth N] [--include-docs] [--json]

Output:
    With --json: a JSON object
        {"root": ..., "files": [{"path","type","bytes","mtime_iso"}], "urls": [...],
         "truncated": bool, "ranked_by": ..., "note": ...}
    Without --json: a short human-readable summary.
"""

import argparse
import fnmatch
import json
import os
import re
import sys
from datetime import datetime, timezone

# ---------------------------------------------------------------------------
# Defaults (mirrored in the SKILL.md file contract)
# ---------------------------------------------------------------------------

DEFAULT_MAX_FILES = 12
DEFAULT_MAX_MB = 8.0
DEFAULT_DEPTH = 4

# v2: VISUAL-ONLY by default. Brand visuals, not document templates.
DEFAULT_EXTENSIONS = [
    ".png", ".jpg", ".jpeg", ".webp", ".svg", ".avif", ".gif",
]

# Document extensions are never visual brand assets. Excluded from the default
# scan; only included when --include-docs is passed (they are then *added* to the
# active extension set, alongside whatever visual/--ext set is in effect).
DOC_EXTENSIONS = [
    ".pdf",
    ".hwp", ".hwpx",
    ".doc", ".docx",
    ".ppt", ".pptx",
    ".xls", ".xlsx",
]

DEFAULT_EXCLUDED_DIRS = [
    "node_modules", ".git", "dist", "build", ".next", ".nuxt", "out",
    "venv", ".venv", "__pycache__", ".cache", "coverage", "target",
    "Pods", ".gradle", ".idea", ".DS_Store",
]

# v2: brand-likelihood ranking. A filename whose basename contains one of these
# tokens (as a whole token, delimited by start/end of name or any non-alphanumeric
# separator) is treated as a likely real brand asset and floated to the top of the
# results, ahead of generic screenshots / incidental images.
#
# Token boundaries matter: the short "og" token (Open Graph: og.png / og-image.png)
# must NOT match as a substring inside ordinary words like dog/frog/blog/logout/
# progress/recognition/cognac/biography, and "logo" must not match "logout". The
# leading group consumes one separator (or start-of-string); the trailing boundary
# is a zero-width lookahead so adjacent tokens (e.g. "icon-logo") both still match.
BRAND_KEYWORD_PATTERN = re.compile(
    r"(?:^|[^a-z0-9])"
    r"(?:logo|wordmark|symbol|icon|brand|hero|cover|favicon|app[-_]?icon|og[-_]?image|og)"
    r"(?=[^a-z0-9]|$)",
    re.IGNORECASE,
)

RANKED_BY = "brand-likelihood, then mtime-desc"


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _normalize_extensions(raw):
    """Turn a comma-separated extension string into a lowercased set with leading dots.

    Accepts forms like ".png,jpg, .JPEG" and yields {".png", ".jpg", ".jpeg"}.
    Returns None to signal "fall back to defaults" when nothing usable is parsed.
    """
    if raw is None:
        return None
    exts = set()
    for part in str(raw).split(","):
        part = part.strip().lower()
        if not part:
            continue
        if not part.startswith("."):
            part = "." + part
        exts.add(part)
    return exts or None


def _ext_of(path):
    """Lowercased file extension including the leading dot (e.g. '.png'), or '' if none."""
    return os.path.splitext(path)[1].lower()


def _type_of(path):
    """Lowercased extension WITHOUT the leading dot (e.g. 'png'), or '' if none."""
    return _ext_of(path).lstrip(".")


def _mtime_iso(epoch):
    """Convert an epoch float to an ISO-8601 UTC string; never raises."""
    try:
        return datetime.fromtimestamp(epoch, tz=timezone.utc).isoformat()
    except (OverflowError, OSError, ValueError):
        return ""


def _is_excluded_dir(name, exclude_globs):
    """True if a directory basename matches any exclude glob (or default excluded set)."""
    for pattern in exclude_globs:
        if fnmatch.fnmatch(name, pattern):
            return True
    return False


def _brand_score(path):
    """Heuristic brand-likelihood score for a file path.

    Higher = more likely to be a real brand asset Claude Design should reference.
    Scored on the *filename* (the basename), case-insensitively, against
    BRAND_KEYWORD_PATTERN (which matches brand tokens only at token boundaries, so
    "og" matches og.png/og-image but never dog/blog/logout). Returns 1 if any brand
    token is present, else 0.

    This is intentionally a coarse binary signal: brand-likelihood is the PRIMARY
    sort key, with mtime as the tie-breaker, so we only need to separate "looks
    like a brand asset" from "everything else". Never raises.
    """
    try:
        name = os.path.basename(path)
    except Exception:
        return 0
    return 1 if BRAND_KEYWORD_PATTERN.search(name) else 0


def gather(root, max_files, max_mb, extensions, exclude_globs, depth):
    """Walk `root` up to `depth` levels, collecting matching files.

    Returns (files, truncated, note) where:
      - files: list of dicts {path, type, bytes, mtime_iso}, ranked by brand-likelihood
        first then mtime-desc, size-filtered, and capped.
      - truncated: True if matching files were dropped because of the cap. A negative
        `max_files` means "keep everything", so it is never truncated.
      - note: optional human note (e.g. about an unreadable root); '' otherwise.
    """
    note = ""
    matched = []  # list of (brand_score, mtime, path, size)

    try:
        abs_root = os.path.abspath(root)
    except (OSError, ValueError):
        return [], False, "Could not resolve root path: %r" % (root,)

    if not os.path.exists(abs_root):
        return [], False, "Root path does not exist: %s" % abs_root
    if not os.path.isdir(abs_root):
        return [], False, "Root path is not a directory: %s" % abs_root

    max_bytes = None
    if max_mb is not None and max_mb >= 0:
        max_bytes = int(max_mb * 1024 * 1024)

    root_depth = abs_root.rstrip(os.sep).count(os.sep)

    try:
        # os.walk does NOT follow directory symlinks by default, so symlink loops cannot hang us.
        walker = os.walk(abs_root, topdown=True, onerror=lambda err: None)
        for current_dir, dirnames, filenames in walker:
            # Enforce bounded depth by pruning descent once we exceed the limit.
            try:
                current_depth = current_dir.rstrip(os.sep).count(os.sep) - root_depth
            except Exception:
                current_depth = 0
            if current_depth >= depth:
                # Do not descend any deeper.
                dirnames[:] = []
            else:
                # Prune excluded directories IN PLACE so os.walk skips them entirely.
                dirnames[:] = [
                    d for d in dirnames if not _is_excluded_dir(d, exclude_globs)
                ]

            for fname in filenames:
                if _ext_of(fname) not in extensions:
                    continue
                fpath = os.path.join(current_dir, fname)
                try:
                    st = os.stat(fpath)
                except (PermissionError, FileNotFoundError, OSError):
                    # Unreadable entry or broken symlink; skip gracefully.
                    continue
                # Skip anything that isn't a regular file (e.g. a directory named "foo.png").
                if not os.path.isfile(fpath):
                    continue
                size = st.st_size
                if max_bytes is not None and size > max_bytes:
                    continue
                matched.append((_brand_score(fpath), st.st_mtime, fpath, size))
    except (PermissionError, FileNotFoundError, OSError) as exc:
        note = "Walk interrupted: %s" % exc

    # v2 ranking: brand-likelihood FIRST (high score first), then newest first.
    matched.sort(key=lambda item: (item[0], item[1]), reverse=True)

    if max_files >= 0:
        truncated = len(matched) > max_files
        kept = matched[:max_files]
    else:
        # Negative cap means "keep everything"; nothing is dropped.
        truncated = False
        kept = matched

    files = []
    for _score, mtime, fpath, size in kept:
        files.append({
            "path": fpath,
            "type": _type_of(fpath),
            "bytes": size,
            "mtime_iso": _mtime_iso(mtime),
        })

    return files, truncated, note


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def build_parser():
    parser = argparse.ArgumentParser(
        prog="gather_references.py",
        description=(
            "Scan a directory for brand/visual reference assets and collect explicit URL "
            "references for the claude-design skill. Visual-only by default; documents "
            "(.pdf/.hwp/.doc/.ppt/.xls) are excluded unless --include-docs is given. "
            "Results are ranked by brand-likelihood first, then by modification time."
        ),
    )
    parser.add_argument(
        "--root",
        default=os.getcwd(),
        help="Directory to scan (default: current working directory).",
    )
    parser.add_argument(
        "--max",
        dest="max_files",
        type=int,
        default=DEFAULT_MAX_FILES,
        help="Maximum number of files to return (default: %d)." % DEFAULT_MAX_FILES,
    )
    parser.add_argument(
        "--max-mb",
        dest="max_mb",
        type=float,
        default=DEFAULT_MAX_MB,
        help="Skip files larger than this many megabytes (default: %s)." % DEFAULT_MAX_MB,
    )
    parser.add_argument(
        "--url",
        dest="urls",
        action="append",
        default=[],
        metavar="URL",
        help="Explicit URL reference (repeatable).",
    )
    parser.add_argument(
        "--ext",
        dest="ext",
        default=None,
        metavar=".png,.jpg,...",
        help=(
            "Comma-separated list of extensions to match. Overrides the visual-only "
            "default (%s). If --include-docs is also passed, document extensions are "
            "added on top of this set." % ",".join(DEFAULT_EXTENSIONS)
        ),
    )
    parser.add_argument(
        "--include-docs",
        dest="include_docs",
        action="store_true",
        help=(
            "Also include document files (%s). These are EXCLUDED by default because "
            "they are document templates, not brand visuals." % ",".join(DOC_EXTENSIONS)
        ),
    )
    parser.add_argument(
        "--exclude",
        dest="exclude",
        action="append",
        default=[],
        metavar="GLOB",
        help="Additional directory-name glob(s) to exclude (repeatable).",
    )
    parser.add_argument(
        "--depth",
        type=int,
        default=DEFAULT_DEPTH,
        help="Maximum directory depth to descend (default: %d)." % DEFAULT_DEPTH,
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Emit a JSON object instead of a human-readable summary.",
    )
    return parser


def _human_size(num_bytes):
    """Render a byte count as a compact human-readable string."""
    try:
        value = float(num_bytes)
    except (TypeError, ValueError):
        return "?"
    for unit in ("B", "KB", "MB", "GB", "TB"):
        if value < 1024.0 or unit == "TB":
            if unit == "B":
                return "%d %s" % (int(value), unit)
            return "%.1f %s" % (value, unit)
        value /= 1024.0
    return "%.1f TB" % value


def main(argv=None):
    parser = build_parser()
    args = parser.parse_args(argv)

    # Resolve the active extension set:
    #   - --ext (if given) replaces the visual-only default;
    #   - otherwise use the visual-only default;
    #   - --include-docs ADDS document extensions on top of whichever set is active.
    extensions = _normalize_extensions(args.ext)
    if extensions is None:
        extensions = set(DEFAULT_EXTENSIONS)
    if args.include_docs:
        extensions = set(extensions) | set(DOC_EXTENSIONS)

    exclude_globs = list(DEFAULT_EXCLUDED_DIRS) + list(args.exclude or [])

    depth = args.depth if args.depth is not None and args.depth >= 0 else DEFAULT_DEPTH

    files, truncated, note = gather(
        root=args.root,
        max_files=args.max_files,
        max_mb=args.max_mb,
        extensions=extensions,
        exclude_globs=exclude_globs,
        depth=depth,
    )

    urls = list(args.urls or [])

    try:
        abs_root = os.path.abspath(args.root)
    except (OSError, ValueError):
        abs_root = args.root

    if args.json:
        payload = {
            "root": abs_root,
            "files": files,
            "urls": urls,
            "truncated": truncated,
            "ranked_by": RANKED_BY,
            "note": note,
        }
        print(json.dumps(payload, ensure_ascii=False, indent=2))
        return 0

    # Human-readable summary.
    lines = []
    lines.append("Reference scan root: %s" % abs_root)
    lines.append(
        "Found %d file(s) (cap=%d, max-mb=%s, depth=%d, docs=%s)%s"
        % (
            len(files),
            args.max_files,
            args.max_mb,
            depth,
            "included" if args.include_docs else "excluded",
            " [truncated: more matched than shown]" if truncated else "",
        )
    )
    lines.append("Ranked by: %s" % RANKED_BY)
    if files:
        lines.append("")
        for entry in files:
            lines.append(
                "  - %s  [%s, %s, %s]"
                % (
                    entry["path"],
                    entry["type"] or "?",
                    _human_size(entry["bytes"]),
                    entry["mtime_iso"] or "?",
                )
            )
    else:
        lines.append("  (no matching brand/visual assets found)")

    if urls:
        lines.append("")
        lines.append("URL references (%d):" % len(urls))
        for url in urls:
            lines.append("  - %s" % url)

    if note:
        lines.append("")
        lines.append("Note: %s" % note)

    print("\n".join(lines))
    return 0


if __name__ == "__main__":
    sys.exit(main())