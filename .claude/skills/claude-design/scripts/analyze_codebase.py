#!/usr/bin/env python3
"""Analyze a code project and synthesize a Claude Design "design context brief".

This is the codebase->Claude Design context bridge for the `claude-design` skill (v2).
It turns a project directory into a paste-ready markdown brief (stack, design tokens,
routes, components, real UI copy, curated visual assets, git repo) so Claude Design can
faithfully reference the actual code without ever running it.

DESIGN PRINCIPLES (hard requirements):
  - stdlib only (argparse, os, sys, json, re, subprocess, datetime).
  - NEVER eval/import/exec project code. All parsing is regex/string based.
  - NEVER crash. Every file read, stat, regex, and subprocess call is defensively
    guarded; on any error the relevant section is simply skipped or left empty.
  - Bounded walks that prune node_modules/.git/dist/build/.next/out/.venv/coverage etc.
  - Works on a Next.js+Tailwind repo AND on a non-JS (python/rust/go/unknown) repo.

CLI (per the skill FILE CONTRACT):
    python3 analyze_codebase.py [--root DIR] [--level lean|comprehensive]
        [--json] [--out FILE] [--max-components N] [--max-assets N]
        [--max-copy N] [--include-docs]

    Defaults: root=cwd, level=comprehensive, max-components=40, max-assets=10,
              max-copy=60.

OUTPUT:
  - Default: a clean markdown brief to stdout (or to --out FILE).
      * comprehensive: Stack, Design system, Routes, Components, UI Copy, Assets, Repo.
      * lean: Stack, Design system, Assets, Repo only (skips routes/components/copy).
  - With --json: a machine object
      {project, root, level, stack{}, tokens{palette[],fonts{},radius[]},
       routes[], landing_route, components[], copy[], assets[ABS paths], repo{}}
      PLUS a "brief_markdown" string (the same brief rendered as markdown).
"""

import argparse
import json
import os
import re
import subprocess
import sys
from datetime import datetime, timezone

# ---------------------------------------------------------------------------
# Constants / defaults (mirrored in the SKILL.md file contract)
# ---------------------------------------------------------------------------

DEFAULT_MAX_COMPONENTS = 40
DEFAULT_MAX_ASSETS = 10
DEFAULT_MAX_COPY = 60
DEFAULT_MAX_TOKENS = 40  # cap on palette + design tokens reported

# Directories pruned from every bounded walk.
EXCLUDED_DIRS = {
    "node_modules", ".git", "dist", "build", ".next", ".nuxt", "out",
    "venv", ".venv", "__pycache__", ".cache", "coverage", "target",
    ".turbo", ".svelte-kit", ".vercel", ".output", ".parcel-cache",
    "Pods", ".gradle", ".idea", ".vscode", ".open-next", ".wrangler",
    "playwright-report", "test-results", ".pytest_cache", ".mypy_cache",
    "vendor", "tmp", "temp",
}

# Visual asset extensions (lowercase, with dot).
VISUAL_EXTS = {".png", ".jpg", ".jpeg", ".webp", ".svg", ".avif", ".gif"}

# Document extensions excluded unless --include-docs is given.
DOC_EXTS = {
    ".pdf", ".hwp", ".hwpx", ".doc", ".docx", ".ppt", ".pptx",
    ".xls", ".xlsx",
}

# Source-code extensions worth scanning for copy.
CODE_EXTS = {".tsx", ".jsx", ".ts", ".js", ".vue", ".svelte", ".astro", ".mdx"}

# Brand-likelihood filename hints (regex, case-insensitive). Higher = more brand-like.
BRAND_HINTS = [
    (re.compile(r"logo", re.I), 100),
    (re.compile(r"wordmark", re.I), 95),
    (re.compile(r"symbol", re.I), 90),
    (re.compile(r"brand", re.I), 88),
    (re.compile(r"app[-_]?icon", re.I), 86),
    (re.compile(r"favicon", re.I), 84),
    (re.compile(r"\bicon\b|(?<![a-z])icon", re.I), 70),
    (re.compile(r"\bog\b|og[-_]?image|opengraph", re.I), 78),
    (re.compile(r"hero", re.I), 66),
    (re.compile(r"cover", re.I), 60),
    (re.compile(r"banner", re.I), 50),
]

# Directories that strongly suggest landing/marketing relevance (flagged in output).
LANDING_DIR_HINTS = re.compile(
    r"(?:^|[/\\_-])(home|landing|marketing|hero|sections?|layout)(?:[/\\_-]|$)",
    re.I,
)

# Walk safety caps so we never run away on a pathological tree.
MAX_WALK_FILES = 60000
MAX_WALK_DIRS = 20000


# ---------------------------------------------------------------------------
# Low-level safe helpers
# ---------------------------------------------------------------------------

def _read_text(path, limit_bytes=2_000_000):
    """Read a text file defensively. Returns '' on any error. Bounded size."""
    try:
        if not os.path.isfile(path):
            return ""
        if os.path.getsize(path) > limit_bytes:
            limit = limit_bytes
        else:
            limit = None
        with open(path, "r", encoding="utf-8", errors="replace") as fh:
            return fh.read(limit) if limit is not None else fh.read()
    except (OSError, ValueError, UnicodeError):
        return ""


def _ext_of(path):
    try:
        return os.path.splitext(path)[1].lower()
    except Exception:
        return ""


def _basename(path):
    try:
        return os.path.basename(path.rstrip("/\\"))
    except Exception:
        return str(path)


def _mtime_iso(epoch):
    try:
        return datetime.fromtimestamp(epoch, tz=timezone.utc).isoformat()
    except (OverflowError, OSError, ValueError, TypeError):
        return ""


def _abspath(path):
    try:
        return os.path.abspath(path)
    except (OSError, ValueError):
        return str(path)


def _safe_stat(path):
    try:
        return os.stat(path)
    except (OSError, ValueError):
        return None


def _dedup(seq):
    """Order-preserving dedup of a sequence of hashable items."""
    seen = set()
    out = []
    for item in seq:
        if item in seen:
            continue
        seen.add(item)
        out.append(item)
    return out


def walk_files(root, want_ext=None, prune=EXCLUDED_DIRS, max_depth=None):
    """Bounded, prune-in-place walk yielding absolute file paths.

    - want_ext: optional set of lowercase extensions to keep (None = all).
    - prune: directory basenames to skip entirely.
    - max_depth: optional max depth relative to root (None = unlimited within caps).
    Never raises; swallows per-entry errors. Honors global file/dir caps.
    """
    results = []
    abs_root = _abspath(root)
    if not os.path.isdir(abs_root):
        return results
    root_depth = abs_root.rstrip(os.sep).count(os.sep)
    dir_count = 0
    file_count = 0
    try:
        walker = os.walk(abs_root, topdown=True, onerror=lambda e: None)
        for current, dirnames, filenames in walker:
            dir_count += 1
            if dir_count > MAX_WALK_DIRS:
                break
            # Depth control.
            try:
                depth = current.rstrip(os.sep).count(os.sep) - root_depth
            except Exception:
                depth = 0
            if max_depth is not None and depth >= max_depth:
                dirnames[:] = []
            else:
                dirnames[:] = [
                    d for d in dirnames
                    if d not in prune and not d.startswith(".git")
                ]
            for fname in filenames:
                if want_ext is not None and _ext_of(fname) not in want_ext:
                    continue
                file_count += 1
                if file_count > MAX_WALK_FILES:
                    return results
                results.append(os.path.join(current, fname))
    except (OSError, ValueError):
        pass
    return results


def _first_existing(root, candidates):
    """Return the first candidate (relative to root) that exists, else None."""
    for rel in candidates:
        path = os.path.join(root, rel)
        if os.path.exists(path):
            return path
    return None


# ---------------------------------------------------------------------------
# 1. STACK detection
# ---------------------------------------------------------------------------

def _parse_package_json(root):
    """Return (deps_dict, raw_text) from package.json, or ({}, '')."""
    path = os.path.join(root, "package.json")
    raw = _read_text(path)
    if not raw:
        return {}, ""
    try:
        data = json.loads(raw)
    except (ValueError, TypeError):
        return {}, raw
    if not isinstance(data, dict):
        return {}, raw
    deps = {}
    for key in ("dependencies", "devDependencies", "peerDependencies", "optionalDependencies"):
        section = data.get(key)
        if isinstance(section, dict):
            for name, ver in section.items():
                if name not in deps and isinstance(name, str):
                    deps[name] = ver if isinstance(ver, str) else ""
    return deps, raw


def _dep_version(deps, name):
    ver = deps.get(name, "")
    if not isinstance(ver, str):
        return ""
    m = re.search(r"(\d+(?:\.\d+){0,2})", ver)
    return m.group(1) if m else ver.strip()


def _named(label, ver):
    """Join a framework label with an optional version: 'Next.js 16' / 'Remix'."""
    return label + (" " + ver if ver else "")


def detect_stack(root):
    """Best-effort framework/UI-stack detection. Never raises."""
    stack = {
        "frameworks": [],
        "ui_libraries": [],
        "styling": [],
        "language": [],
        "router": "",
        "package_manager": "",
        "notes": [],
        "name": "",
    }
    deps, raw = _parse_package_json(root)

    # --- package.json based (web stacks) ---
    if deps or raw:
        pkg = {}
        parse_ok = False
        if raw:
            try:
                pkg = json.loads(raw)
                parse_ok = isinstance(pkg, dict)
            except (ValueError, TypeError):
                parse_ok = False
        if not isinstance(pkg, dict):
            pkg = {}
        # package.json present but unparseable (or not an object) -> note it so the
        # brief reflects reality instead of silently claiming a bare JS stack.
        if raw and not parse_ok:
            stack["notes"].append("package.json present but could not be parsed")
        if isinstance(pkg.get("name"), str):
            stack["name"] = pkg["name"]

        has = lambda n: n in deps  # noqa: E731

        # Next.js
        if has("next"):
            stack["frameworks"].append(_named("Next.js", _dep_version(deps, "next")))
            # app vs pages router by directory presence.
            app_dir = _first_existing(root, ["src/app", "app"])
            pages_dir = _first_existing(root, ["src/pages", "pages"])
            if app_dir and not pages_dir:
                stack["router"] = "app"
            elif pages_dir and not app_dir:
                stack["router"] = "pages"
            elif app_dir and pages_dir:
                stack["router"] = "app+pages"
            else:
                stack["router"] = "unknown"
        # React (only standalone-note if no meta-framework already claimed it)
        if has("react"):
            stack["frameworks"].append(_named("React", _dep_version(deps, "react")))
        if has("vue"):
            stack["frameworks"].append(_named("Vue", _dep_version(deps, "vue")))
        if has("svelte") or has("@sveltejs/kit"):
            stack["frameworks"].append(_named("Svelte", _dep_version(deps, "svelte")))
        if has("astro"):
            stack["frameworks"].append(_named("Astro", _dep_version(deps, "astro")))
        if has("vite"):
            stack["frameworks"].append(_named("Vite", _dep_version(deps, "vite")))
        if has("@remix-run/react") or has("@remix-run/node"):
            stack["frameworks"].append("Remix")
        if has("nuxt"):
            stack["frameworks"].append(_named("Nuxt", _dep_version(deps, "nuxt")))
        if has("gatsby"):
            stack["frameworks"].append("Gatsby")

        # Styling
        if has("tailwindcss"):
            stack["styling"].append(_named("Tailwind CSS", _dep_version(deps, "tailwindcss")))
        if has("styled-components"):
            stack["styling"].append("styled-components")
        if has("@emotion/react") or has("@emotion/styled"):
            stack["styling"].append("Emotion")
        if has("sass") or has("node-sass"):
            stack["styling"].append("Sass")

        # UI component libraries
        if has("@mui/material") or has("@material-ui/core"):
            stack["ui_libraries"].append("MUI")
        if has("@chakra-ui/react"):
            stack["ui_libraries"].append("Chakra UI")
        if has("antd"):
            stack["ui_libraries"].append("Ant Design")
        if has("@mantine/core"):
            stack["ui_libraries"].append("Mantine")
        if has("@radix-ui/react-dialog") or any(d.startswith("@radix-ui/") for d in deps):
            stack["ui_libraries"].append("Radix UI")
        if has("shadcn-ui") or has("shadcn") or os.path.exists(os.path.join(root, "components.json")):
            stack["ui_libraries"].append("shadcn/ui")
        if has("@headlessui/react"):
            stack["ui_libraries"].append("Headless UI")
        if has("framer-motion") or has("motion"):
            stack["ui_libraries"].append("Framer Motion")

        # Language
        if has("typescript") or _first_existing(root, ["tsconfig.json"]):
            stack["language"].append("TypeScript")
        else:
            stack["language"].append("JavaScript")

        # Package manager
        if _first_existing(root, ["pnpm-lock.yaml"]):
            stack["package_manager"] = "pnpm"
        elif _first_existing(root, ["yarn.lock"]):
            stack["package_manager"] = "yarn"
        elif _first_existing(root, ["bun.lockb"]):
            stack["package_manager"] = "bun"
        elif _first_existing(root, ["package-lock.json"]):
            stack["package_manager"] = "npm"

    # --- non-JS / unknown-stack fallbacks ---
    if not deps and not raw:
        if _first_existing(root, ["pyproject.toml", "setup.py", "setup.cfg", "requirements.txt"]):
            stack["frameworks"].append("Python")
            stack["language"].append("Python")
            stack["notes"].append("non-web or unknown UI stack")
        if _first_existing(root, ["Cargo.toml"]):
            stack["frameworks"].append("Rust (Cargo)")
            stack["language"].append("Rust")
            stack["notes"].append("non-web or unknown UI stack")
        if _first_existing(root, ["go.mod"]):
            stack["frameworks"].append("Go")
            stack["language"].append("Go")
            stack["notes"].append("non-web or unknown UI stack")
        if _first_existing(root, ["Gemfile"]):
            stack["frameworks"].append("Ruby")
            stack["language"].append("Ruby")
            stack["notes"].append("non-web or unknown UI stack")
        if _first_existing(root, ["pom.xml", "build.gradle", "build.gradle.kts"]):
            stack["frameworks"].append("JVM (Maven/Gradle)")
            stack["notes"].append("non-web or unknown UI stack")
        if not stack["frameworks"]:
            stack["notes"].append("no package.json found; non-web or unknown UI stack")

    # Dedup lists.
    for key in ("frameworks", "ui_libraries", "styling", "language", "notes"):
        stack[key] = _dedup(stack[key])
    return stack


# ---------------------------------------------------------------------------
# 2. DESIGN TOKENS
# ---------------------------------------------------------------------------

_COLOR_VALUE_RE = re.compile(
    r"(#[0-9a-fA-F]{3,8}\b"
    r"|rgba?\([^)]*\)"
    r"|hsla?\([^)]*\)"
    r"|oklch\([^)]*\)"
    r"|oklab\([^)]*\)"
    r"|lab\([^)]*\)"
    r"|lch\([^)]*\))"
)


def _looks_like_color(value):
    if not value:
        return False
    return bool(_COLOR_VALUE_RE.search(value))


def _extract_tailwind_config_tokens(root, palette, fonts, radii):
    """Regex-scan tailwind.config.{js,ts,cjs,mjs} for theme.extend literals."""
    cfg = _first_existing(root, [
        "tailwind.config.js", "tailwind.config.ts",
        "tailwind.config.cjs", "tailwind.config.mjs",
    ])
    if not cfg:
        return
    text = _read_text(cfg)
    if not text:
        return
    # colors: capture "name": "#hex" / 'name': 'rgb(...)' pairs anywhere in file.
    for m in re.finditer(
        r"""['"]?([A-Za-z0-9_-]+)['"]?\s*:\s*['"]([^'"]+)['"]""", text
    ):
        name, value = m.group(1), m.group(2)
        if _looks_like_color(value) and len(palette) < DEFAULT_MAX_TOKENS:
            palette.append((name, value.strip()))
    # fontFamily: extract "sans"/"display"/"mono" families.
    ff = re.search(r"fontFamily\s*:\s*{(.*?)}", text, re.S)
    if ff:
        block = ff.group(1)
        for m in re.finditer(
            r"""['"]?(sans|serif|mono|display|heading|body)['"]?\s*:\s*\[([^\]]*)\]""",
            block, re.I,
        ):
            role = m.group(1).lower()
            fam = re.findall(r"""['"]([^'"]+)['"]""", m.group(2))
            if fam:
                fonts.setdefault(role, fam[0])
    # borderRadius literals: capture entries inside a borderRadius: { ... } block,
    # plus any token whose name itself mentions radius/rounded.
    br = re.search(r"borderRadius\s*:\s*{(.*?)}", text, re.S)
    if br:
        for m in re.finditer(
            r"""['"]?([A-Za-z0-9_-]+)['"]?\s*:\s*['"]([^'"]+)['"]""", br.group(1)
        ):
            radii.append(("radius-" + m.group(1), m.group(2)))
    for m in re.finditer(
        r"""['"]?([A-Za-z0-9_-]+)['"]?\s*:\s*['"]([0-9.]+(?:px|rem|em)?)['"]""",
        text,
    ):
        name, value = m.group(1), m.group(2)
        if "radius" in name.lower() or "rounded" in name.lower():
            radii.append((name, value))


def _stylesheet_candidates(root):
    """Find main stylesheet(s) to scan for CSS custom properties / @theme."""
    cands = []
    explicit = [
        "src/app/globals.css", "app/globals.css", "src/index.css",
        "src/styles/globals.css", "styles/globals.css", "src/App.css",
        "src/global.css", "app/global.css", "src/main.css", "styles/index.css",
    ]
    for rel in explicit:
        p = os.path.join(root, rel)
        if os.path.isfile(p):
            cands.append(p)
    # Plus any *.css under styles/ or src/styles/ (bounded), capped.
    for base in ("styles", "src/styles", "src/css"):
        d = os.path.join(root, base)
        if os.path.isdir(d):
            for css in walk_files(d, want_ext={".css"}, max_depth=3):
                cands.append(css)
    return _dedup(cands)[:8]


def _extract_css_tokens(root, palette, fonts, radii):
    """Scan main stylesheet(s) for @theme/:root custom properties, @font-face, fonts."""
    for css_path in _stylesheet_candidates(root):
        text = _read_text(css_path)
        if not text:
            continue
        # CSS custom properties: --name: value;
        for m in re.finditer(r"--([A-Za-z0-9_-]+)\s*:\s*([^;]+);", text):
            name = "--" + m.group(1)
            value = m.group(2).strip()
            low = m.group(1).lower()
            # Skip var(...) indirection-only values for the palette (no literal color),
            # but still capture them as token aliases when they are color tokens.
            if low.startswith("color") or _looks_like_color(value):
                if len(palette) < DEFAULT_MAX_TOKENS:
                    palette.append((name, value))
            if low.startswith("font") and "family" not in low and value:
                # --font-sans / --font-display / --font-mono
                role = low.replace("font-", "").replace("font", "") or "sans"
                fam = _first_font_family(value)
                if fam:
                    fonts.setdefault(role, fam)
            if "radius" in low or "rounded" in low:
                radii.append((name, value))
        # @font-face family names.
        for m in re.finditer(
            r"@font-face\s*{[^}]*?font-family\s*:\s*['\"]?([^;'\"}]+)['\"]?", text, re.S
        ):
            fam = m.group(1).strip()
            if fam:
                fonts.setdefault("face:" + fam, fam)
        # Bare font-family declarations (outside @font-face).
        for m in re.finditer(r"font-family\s*:\s*([^;{}]+);", text):
            fam = _first_font_family(m.group(1))
            if fam and "body" not in fonts:
                fonts.setdefault("body", fam)


def _first_font_family(value):
    """Pull the first concrete font-family token from a font-family value string."""
    if not value:
        return ""
    value = value.strip()
    # Skip pure var() references with no literal family.
    parts = [p.strip() for p in value.split(",") if p.strip()]
    for part in parts:
        cleaned = part.strip("'\"").strip()
        if not cleaned:
            continue
        if cleaned.lower().startswith("var("):
            continue
        # Skip generic-only first tokens like "ui-monospace" if a named one follows;
        # but it's fine to return it as a representative family.
        return cleaned
    return ""


def extract_tokens(root):
    """Aggregate design tokens from Tailwind config and CSS. Never raises."""
    palette = []  # list of (name, value)
    fonts = {}    # role -> family
    radii = []    # list of (name, value)
    try:
        _extract_tailwind_config_tokens(root, palette, fonts, radii)
    except Exception:
        pass
    try:
        _extract_css_tokens(root, palette, fonts, radii)
    except Exception:
        pass

    # Dedup palette by name (keep first), then rank LITERAL color values
    # (hex/rgb/hsl/oklch) ahead of `var(--...)` alias-only tokens so the most
    # useful concrete colors survive the cap. Stable within each group.
    seen = set()
    deduped = []
    for name, value in palette:
        key = name.lower()
        if key in seen:
            continue
        seen.add(key)
        deduped.append((name, value))
    literals = [(n, v) for (n, v) in deduped if _looks_like_color(v)]
    aliases = [(n, v) for (n, v) in deduped if not _looks_like_color(v)]
    pal_out = []
    for name, value in literals + aliases:
        pal_out.append({"name": name, "value": value})
        if len(pal_out) >= DEFAULT_MAX_TOKENS:
            break

    # Dedup radii by name.
    rseen = set()
    rad_out = []
    for name, value in radii:
        key = name.lower()
        if key in rseen:
            continue
        rseen.add(key)
        rad_out.append({"name": name, "value": value})
        if len(rad_out) >= 12:
            break

    # Normalize fonts: prefer sans/display/mono primary roles, keep face: entries too.
    # Avoid listing the same family twice across roles (e.g. a bare font-family
    # declaration that duplicates the display face).
    fonts_out = {}
    used_families = set()
    for pref in ("sans", "display", "mono", "serif", "heading", "body"):
        fam = fonts.get(pref)
        if fam and fam not in used_families:
            fonts_out[pref] = fam
            used_families.add(fam)
    for role, fam in fonts.items():
        if role.startswith("face:") and fam and fam not in used_families:
            fonts_out[role] = fam
            used_families.add(fam)
    return {"palette": pal_out, "fonts": fonts_out, "radius": rad_out}


# ---------------------------------------------------------------------------
# 3. ROUTES
# ---------------------------------------------------------------------------

def extract_routes(root):
    """Detect routes. Returns (routes[], landing_route). Never raises."""
    routes = []
    landing = ""

    # Next.js app router: **/app/**/page.{tsx,jsx,ts,js}
    app_base = _first_existing(root, ["src/app", "app"])
    if app_base and os.path.isdir(app_base):
        page_files = []
        for ext in (".tsx", ".jsx", ".ts", ".js"):
            page_files.extend(walk_files(app_base, want_ext={ext}, max_depth=8))
        for pf in page_files:
            if _basename(pf).rsplit(".", 1)[0] != "page":
                continue
            rel = os.path.relpath(os.path.dirname(pf), app_base)
            url = _app_dir_to_url(rel)
            routes.append(url)
        routes = _dedup(routes)
        routes.sort(key=lambda r: (r != "/", r))
        if "/" in routes:
            landing = "/"

    # Next.js / Nuxt pages router: **/pages/**
    if not routes:
        pages_base = _first_existing(root, ["src/pages", "pages"])
        if pages_base and os.path.isdir(pages_base):
            page_files = []
            for ext in (".tsx", ".jsx", ".ts", ".js", ".vue"):
                page_files.extend(walk_files(pages_base, want_ext={ext}, max_depth=8))
            for pf in page_files:
                name = _basename(pf)
                if name.startswith("_"):  # _app, _document
                    continue
                if name.startswith("api") or "/api/" in pf.replace("\\", "/"):
                    continue
                rel = os.path.relpath(pf, pages_base)
                url = _pages_file_to_url(rel)
                routes.append(url)
            routes = _dedup(routes)
            routes.sort(key=lambda r: (r != "/", r))
            if "/" in routes:
                landing = "/"

    # SvelteKit: src/routes/**/+page.svelte
    if not routes:
        sk = os.path.join(root, "src", "routes")
        if os.path.isdir(sk):
            for pf in walk_files(sk, want_ext={".svelte"}, max_depth=8):
                if _basename(pf) not in ("+page.svelte",):
                    continue
                rel = os.path.relpath(os.path.dirname(pf), sk)
                routes.append(_app_dir_to_url(rel))
            routes = _dedup(routes)
            routes.sort(key=lambda r: (r != "/", r))
            if "/" in routes:
                landing = "/"

    # Generic: note an index/main entry if nothing matched.
    if not routes:
        entry = _first_existing(root, [
            "src/index.html", "index.html", "public/index.html",
            "src/main.tsx", "src/main.ts", "src/main.jsx", "src/main.js",
            "src/App.tsx", "src/App.jsx", "src/index.tsx", "src/index.jsx",
        ])
        if entry:
            routes.append("(entry: %s)" % os.path.relpath(entry, root))

    return routes, landing


def _app_dir_to_url(rel):
    """Convert a Next app-router page directory (relative to app/) to a URL path."""
    rel = rel.replace("\\", "/")
    if rel in (".", ""):
        return "/"
    segments = []
    for seg in rel.split("/"):
        if not seg:
            continue
        # Skip route groups like (marketing) and parallel/intercept slots.
        if seg.startswith("(") and seg.endswith(")"):
            continue
        if seg.startswith("@"):
            continue
        segments.append(seg)
    return "/" + "/".join(segments) if segments else "/"


def _pages_file_to_url(rel):
    """Convert a Next pages-router file (relative to pages/) to a URL path."""
    rel = rel.replace("\\", "/")
    rel = re.sub(r"\.(tsx|jsx|ts|js|vue)$", "", rel)
    if rel in ("index", ""):
        return "/"
    if rel.endswith("/index"):
        rel = rel[: -len("/index")]
    return "/" + rel


# ---------------------------------------------------------------------------
# 4. COMPONENTS
# ---------------------------------------------------------------------------

def extract_components(root, max_components):
    """Inventory component basenames; flag landing-relevant ones. Never raises."""
    comp_dirs = []
    for rel in ("components", "src/components", "app/components", "src/app/components"):
        d = os.path.join(root, rel)
        if os.path.isdir(d):
            comp_dirs.append(d)
    components = []
    seen = set()
    for base in comp_dirs:
        files = walk_files(
            base, want_ext={".tsx", ".jsx", ".ts", ".js", ".vue", ".svelte"},
            max_depth=6,
        )
        for f in files:
            name = _basename(f)
            stem = name.rsplit(".", 1)[0]
            # Skip obvious non-component files.
            if stem in ("index", "types", "constants", "utils"):
                continue
            if name.endswith((".test.tsx", ".test.ts", ".spec.tsx", ".spec.ts",
                              ".stories.tsx", ".stories.ts", ".d.ts")):
                continue
            rel_path = os.path.relpath(f, root).replace("\\", "/")
            key = rel_path.lower()
            if key in seen:
                continue
            seen.add(key)
            landing_flag = bool(LANDING_DIR_HINTS.search(rel_path))
            components.append({
                "name": stem,
                "path": rel_path,
                "landing": landing_flag,
            })
    # Landing-relevant first, then alpha by path.
    components.sort(key=lambda c: (not c["landing"], c["path"].lower()))
    truncated = len(components) > max_components
    return components[:max_components], truncated


# ---------------------------------------------------------------------------
# 5. COPY (human-readable UI strings)
# ---------------------------------------------------------------------------

# Tokens that indicate a string is NOT human copy (className, import, url, path...).
_NON_COPY_RE = re.compile(
    r"^\s*(?:"
    r"https?://"             # url
    r"|/[A-Za-z0-9_./-]*$"   # absolute path
    r"|\./|\.\./"            # relative path
    r"|#[0-9a-fA-F]{3,8}$"   # hex color
    r"|@[A-Za-z0-9/_-]+$"    # scoped package / at-rule
    r"|[a-z0-9-]+(?:\s+[a-z0-9:-]+)+$"  # tailwind class list (all-lowercase words)
    r")",
)

# Korean OR Latin letters present (so we keep real copy, drop pure-symbol strings).
_HAS_LETTER_RE = re.compile(r"[A-Za-z가-힣㄰-㆏]")
# Korean syllable / jamo range for "looks Korean" boost.
_KOREAN_RE = re.compile(r"[가-힣]")

# String-literal extractor: "...", '...', `...` (no interpolation), and JSX text.
_STRING_LIT_RE = re.compile(r"""(["'`])((?:\\.|(?!\1)[^\\])*)\1""")
_JSX_TEXT_RE = re.compile(r">([^<>{}]{2,})<")


# Tokens that mark a string as a Tailwind/CSS utility class list rather than copy.
_TW_PREFIX_RE = re.compile(
    r"\b(?:flex|grid|inline|block|hidden|absolute|relative|fixed|sticky|"
    r"items-|justify-|gap-|px-|py-|pt-|pb-|pl-|pr-|mx-|my-|mt-|mb-|ml-|mr-|"
    r"w-|h-|min-|max-|text-|bg-|border|rounded|shadow|opacity-|z-|top-|left-|"
    r"right-|bottom-|font-|leading-|tracking-|space-|divide-|ring-|"
    r"hover:|focus:|active:|group-|md:|lg:|sm:|xl:|dark:|backdrop-|transition|"
    r"duration-|ease-|translate|scale-|rotate-|overflow-)"
)
# CSS-value / at-rule fragments that are clearly not UI copy.
_CSS_FRAGMENT_RE = re.compile(
    r"(@keyframes|@media|@import|linear-gradient|radial-gradient|"
    r"cubic-bezier|background-position|var\(--|calc\(|rgba?\(|hsla?\(|oklch\()",
    re.I,
)


def _is_classname_like(s):
    """True if the string looks like a Tailwind/CSS class list (not human copy)."""
    if "{" in s or "}" in s or ";" in s:
        return True
    if _CSS_FRAGMENT_RE.search(s):
        return True
    words = s.split()
    if len(words) >= 2:
        hits = sum(1 for w in words if _TW_PREFIX_RE.search(w) or "-" in w and ":" not in w[:1])
        # Mostly utility-looking tokens with no Korean -> classname.
        if hits >= max(2, len(words) // 2) and _TW_PREFIX_RE.search(s):
            return True
    elif len(words) == 1 and _TW_PREFIX_RE.match(s) and "-" in s:
        return True
    return False


def _looks_like_copy(s):
    """Heuristic: is this string human-facing UI copy (KO/EN), not code noise?"""
    if not s:
        return False
    s = s.strip()
    if len(s) < 2 or len(s) > 200:
        return False
    if not _HAS_LETTER_RE.search(s):
        return False
    # Drop urls/paths/hex/at-rules/etc.
    if _NON_COPY_RE.match(s):
        return False
    # Drop strings that contain template-literal interpolation markers.
    if "${" in s:
        return False
    # Drop leftover comment markers / JSX-comment fragments.
    if s.startswith("//") or s.startswith("/*") or s.endswith("*/") or "//" in s[:3]:
        return False
    # Drop import/require-ish module specifiers (no spaces, has a slash or dot-path).
    if " " not in s and ("/" in s or s.startswith(".") or s.startswith("@")):
        return False
    # Drop Tailwind/CSS utility class lists and CSS-value fragments
    # (these are noise even when long). Korean copy never looks like this.
    if not _KOREAN_RE.search(s) and _is_classname_like(s):
        return False
    # Korean strings that are purely a CSS fragment (rare) still get dropped.
    if _CSS_FRAGMENT_RE.search(s) and not re.search(r"[가-힣]{2,}", s):
        return False
    # Drop single short ALLCAPS_CONST or camelCase identifiers with no spaces (likely keys).
    if " " not in s and re.match(r"^[A-Za-z_][A-Za-z0-9_]*$", s) and len(s) < 4:
        return False
    # Drop things that are obviously CSS values.
    if re.match(r"^[0-9.]+(px|rem|em|vh|vw|%|s|ms)$", s):
        return False
    return True


def _strip_comments(text):
    """Best-effort removal of // line and /* block */ comments to avoid copy noise.

    Regex-only and intentionally conservative: it can over/under-strip inside string
    literals, but copy extraction is heuristic anyway and this kills the common
    '// Korean comment //' false positives. Never raises.
    """
    try:
        text = re.sub(r"/\*.*?\*/", " ", text, flags=re.S)   # block comments
        text = re.sub(r"(?m)//[^\n]*$", " ", text)            # line comments
    except Exception:
        pass
    return text


def _unescape(raw):
    """Decode \\n \\t \\" etc. WITHOUT corrupting valid UTF-8 (e.g. Korean).

    Only attempts unicode_escape when a backslash is actually present; otherwise the
    string is returned verbatim so multi-byte characters are never mangled.
    """
    if "\\" not in raw:
        return raw
    try:
        return raw.encode("latin-1", "backslashreplace").decode("unicode_escape")
    except (UnicodeDecodeError, UnicodeEncodeError, ValueError):
        return raw


def _extract_strings_from_file(path):
    """Return a list of candidate copy strings from a single source file."""
    text = _read_text(path, limit_bytes=400_000)
    if not text:
        return []
    text = _strip_comments(text)
    out = []
    # Quoted/backtick string literals.
    for m in _STRING_LIT_RE.finditer(text):
        out.append(_unescape(m.group(2)))
    # JSX text nodes (between > and <).
    for m in _JSX_TEXT_RE.finditer(text):
        out.append(m.group(1))
    return out


def extract_copy(root, landing_route, components, max_copy):
    """Extract real UI copy from the landing page file + flagged landing components."""
    target_files = []

    # Landing page file (app router or pages router).
    app_base = _first_existing(root, ["src/app", "app"])
    if app_base:
        for ext in (".tsx", ".jsx", ".ts", ".js"):
            cand = os.path.join(app_base, "page" + ext)
            if os.path.isfile(cand):
                target_files.append(cand)
                break
    if not target_files:
        pages_base = _first_existing(root, ["src/pages", "pages"])
        if pages_base:
            for ext in (".tsx", ".jsx", ".ts", ".js", ".vue"):
                cand = os.path.join(pages_base, "index" + ext)
                if os.path.isfile(cand):
                    target_files.append(cand)
                    break
    # Generic entry fallback.
    if not target_files:
        entry = _first_existing(root, [
            "src/App.tsx", "src/App.jsx", "src/index.html", "index.html",
        ])
        if entry and _ext_of(entry) in CODE_EXTS:
            target_files.append(entry)

    # Follow the landing page's local imports → the actually-rendered components,
    # regardless of directory naming (e.g. src/components/Hero.tsx, not .../home/).
    _imp_re = re.compile(r"""(?:import|export)[^'"]*from\s*['"]([^'"]+)['"]""")
    for page_file in list(target_files):
        try:
            _txt = open(page_file, encoding="utf-8", errors="ignore").read()
        except OSError:
            continue
        _pdir = os.path.dirname(page_file)
        for spec in _imp_re.findall(_txt):
            if spec.startswith("@/"):
                bases = [os.path.join(root, "src", spec[2:]), os.path.join(root, spec[2:])]
            elif spec.startswith("./") or spec.startswith("../"):
                bases = [os.path.normpath(os.path.join(_pdir, spec))]
            else:
                continue
            for base in bases:
                done = False
                for ext in (".tsx", ".jsx", ".ts", ".js", ".vue", ".svelte", ".astro"):
                    if os.path.isfile(base + ext):
                        target_files.append(base + ext)
                        done = True
                        break
                if done:
                    break
                if os.path.isdir(base):
                    for fn in sorted(os.listdir(base)):
                        if _ext_of(fn) in CODE_EXTS:
                            target_files.append(os.path.join(base, fn))
                    break
                for idx in ("index.tsx", "index.ts", "index.jsx", "index.js"):
                    if os.path.isfile(os.path.join(base, idx)):
                        target_files.append(os.path.join(base, idx))
                        break

    # Flagged landing-relevant components.
    for comp in components:
        if comp.get("landing"):
            p = os.path.join(root, comp["path"])
            if os.path.isfile(p):
                target_files.append(p)
    target_files = _dedup(target_files)[:25]

    copy = []
    for f in target_files:
        try:
            for s in _extract_strings_from_file(f):
                if _looks_like_copy(s):
                    # Collapse internal whitespace runs (JSX indentation noise).
                    copy.append(re.sub(r"\s+", " ", s).strip())
        except Exception:
            continue

    # Dedup (case-sensitive, order-preserving), then cap. Prefer longer/Korean-rich.
    copy = _dedup(copy)
    # Light ranking: Korean-containing and longer strings first (more headline-like),
    # but keep stable order otherwise.
    copy.sort(key=lambda s: (0 if _KOREAN_RE.search(s) else 1, -min(len(s), 80)))
    truncated = len(copy) > max_copy
    return copy[:max_copy], truncated


# ---------------------------------------------------------------------------
# 6. ASSETS
# ---------------------------------------------------------------------------

def _brand_score(name):
    score = 0
    for rx, val in BRAND_HINTS:
        if rx.search(name):
            score = max(score, val)
    return score


def extract_assets(root, max_assets, include_docs):
    """Scan asset dirs for visual files, rank brand-likelihood first. ABS paths."""
    exts = set(VISUAL_EXTS)
    if include_docs:
        exts |= DOC_EXTS

    asset_dirs = []
    for rel in ("public", "static", "assets", "src/assets", "app/assets", "src/static"):
        d = os.path.join(root, rel)
        if os.path.isdir(d):
            asset_dirs.append(d)
    # If no conventional asset dir, do a shallow scan of root for visuals.
    if not asset_dirs:
        asset_dirs.append(root)

    found = []
    seen = set()
    for base in asset_dirs:
        depth = 4 if base != root else 2
        for f in walk_files(base, want_ext=exts, max_depth=depth):
            if f in seen:
                continue
            seen.add(f)
            name = _basename(f)
            st = _safe_stat(f)
            if st is None:
                continue
            found.append({
                "path": _abspath(f),
                "name": name,
                "bytes": st.st_size,
                "mtime": st.st_mtime,
                "brand_score": _brand_score(name),
            })

    # Rank: brand-likelihood first, then newer mtime, then larger size.
    found.sort(key=lambda a: (-a["brand_score"], -a["mtime"], -a["bytes"]))

    truncated = len(found) > max_assets
    out = []
    for a in found[:max_assets]:
        out.append({
            "path": a["path"],
            "name": a["name"],
            "bytes": a["bytes"],
            "mtime_iso": _mtime_iso(a["mtime"]),
            "brand": a["brand_score"] >= 70,
        })
    return out, truncated


# ---------------------------------------------------------------------------
# 7. REPO (git)
# ---------------------------------------------------------------------------

def _git(root, args):
    try:
        out = subprocess.run(
            ["git", "-C", root] + args,
            stdout=subprocess.PIPE, stderr=subprocess.DEVNULL,
            timeout=8, check=False,
        )
        if out.returncode != 0:
            return ""
        return out.stdout.decode("utf-8", "replace").strip()
    except (OSError, ValueError, subprocess.SubprocessError):
        return ""


def extract_repo(root):
    """Return git repo info or {} if not a git repo / no git. Never raises."""
    if not os.path.isdir(os.path.join(root, ".git")):
        # Could still be a worktree/submodule; a cheap probe confirms.
        inside = _git(root, ["rev-parse", "--is-inside-work-tree"])
        if inside != "true":
            return {}
    repo = {}
    url = _git(root, ["remote", "get-url", "origin"])
    if url:
        repo["remote"] = url
    branch = _git(root, ["rev-parse", "--abbrev-ref", "HEAD"])
    if branch:
        repo["branch"] = branch
    sha = _git(root, ["rev-parse", "--short", "HEAD"])
    if sha:
        repo["sha"] = sha
    return repo


# ---------------------------------------------------------------------------
# Markdown brief rendering
# ---------------------------------------------------------------------------

def _project_name(root, stack):
    if stack.get("name"):
        return stack["name"]
    base = _basename(_abspath(root))
    return base or "project"


def render_brief(model, level):
    """Render the markdown design context brief from the analysis model."""
    project = model["project"]
    lines = []
    lines.append("# %s — Claude Design 컨텍스트 브리프" % project)
    lines.append("")
    lines.append("> 코드베이스를 분석해 추출한 디자인 컨텍스트. Claude Design 이 실제 코드의 "
                 "스택·토큰·카피·에셋을 충실히 참조하도록 전달한다.")
    lines.append("")

    # --- Stack ---
    stack = model["stack"]
    lines.append("## Stack")
    fw = ", ".join(stack["frameworks"]) or "(감지 안 됨)"
    lines.append("- Framework: %s" % fw)
    if stack.get("router"):
        lines.append("- Router: %s" % stack["router"])
    if stack.get("language"):
        lines.append("- Language: %s" % ", ".join(stack["language"]))
    if stack.get("styling"):
        lines.append("- Styling: %s" % ", ".join(stack["styling"]))
    if stack.get("ui_libraries"):
        lines.append("- UI: %s" % ", ".join(stack["ui_libraries"]))
    if stack.get("package_manager"):
        lines.append("- Package manager: %s" % stack["package_manager"])
    for note in stack.get("notes", []):
        lines.append("- Note: %s" % note)
    lines.append("")

    # --- Design system ---
    tokens = model["tokens"]
    lines.append("## Design system")
    palette = tokens["palette"]
    if palette:
        lines.append("**Palette / color tokens:**")
        for t in palette:
            lines.append("- `%s` = `%s`" % (t["name"], t["value"]))
    else:
        lines.append("- Palette: (감지된 컬러 토큰 없음)")
    fonts = tokens["fonts"]
    if fonts:
        lines.append("")
        lines.append("**Fonts:**")
        for role, fam in fonts.items():
            label = role.replace("face:", "@font-face ")
            lines.append("- %s: %s" % (label, fam))
    radii = tokens["radius"]
    if radii:
        lines.append("")
        lines.append("**Radius / spacing:**")
        for r in radii:
            lines.append("- `%s` = `%s`" % (r["name"], r["value"]))
    lines.append("")

    if level == "comprehensive":
        # --- Routes ---
        lines.append("## Routes")
        routes = model["routes"]
        landing = model["landing_route"]
        if routes:
            for r in routes:
                mark = "  ← landing/root" if (r == landing and landing) else ""
                lines.append("- `%s`%s" % (r, mark))
        else:
            lines.append("- (라우트 감지 안 됨)")
        lines.append("")

        # --- Components ---
        lines.append("## Components")
        comps = model["components"]
        if comps:
            landing_comps = [c for c in comps if c.get("landing")]
            other_comps = [c for c in comps if not c.get("landing")]
            if landing_comps:
                lines.append("**Landing/marketing-relevant:**")
                for c in landing_comps:
                    lines.append("- `%s` — %s" % (c["name"], c["path"]))
                lines.append("")
            if other_comps:
                lines.append("**Other components:**")
                for c in other_comps:
                    lines.append("- `%s` — %s" % (c["name"], c["path"]))
        else:
            lines.append("- (컴포넌트 감지 안 됨)")
        lines.append("")

        # --- UI Copy ---
        lines.append("## UI Copy")
        copy = model["copy"]
        if copy:
            lines.append("> 랜딩 페이지/랜딩 컴포넌트에서 추출한 실제 문구 (헤드라인·CTA·섹션 카피).")
            for c in copy:
                lines.append("- %s" % c.replace("\n", " ").strip())
        else:
            lines.append("- (추출된 UI 카피 없음)")
        lines.append("")

    # --- Assets ---
    lines.append("## Assets")
    lines.append("> 업로드/드래그용 절대 경로. 브랜드 후보를 우선 정렬.")
    assets = model["assets"]
    if assets:
        for a in assets:
            tag = " [brand]" if a.get("brand") else ""
            lines.append("- %s%s" % (a["path"], tag))
    else:
        lines.append("- (시각 에셋 없음)")
    lines.append("")

    # --- Repo ---
    lines.append("## Repo")
    repo = model["repo"]
    if repo:
        if repo.get("remote"):
            lines.append("- Remote: %s" % repo["remote"])
        if repo.get("branch"):
            lines.append("- Branch: %s" % repo["branch"])
        if repo.get("sha"):
            lines.append("- Commit: %s" % repo["sha"])
        lines.append("- Root: %s" % model["root"])
    else:
        lines.append("- (git 저장소 아님 / 원격 없음)")
        lines.append("- Root: %s" % model["root"])
    lines.append("")

    return "\n".join(lines).rstrip() + "\n"


# ---------------------------------------------------------------------------
# Orchestration
# ---------------------------------------------------------------------------

def analyze(root, level, max_components, max_assets, max_copy, include_docs):
    """Run all extractors and assemble the analysis model. Never raises."""
    abs_root = _abspath(root)

    stack = detect_stack(abs_root)
    tokens = extract_tokens(abs_root)
    assets, _assets_trunc = extract_assets(abs_root, max_assets, include_docs)
    repo = extract_repo(abs_root)

    routes, landing = [], ""
    components, copy = [], []
    if level == "comprehensive":
        routes, landing = extract_routes(abs_root)
        components, _comp_trunc = extract_components(abs_root, max_components)
        copy, _copy_trunc = extract_copy(abs_root, landing, components, max_copy)

    project = _project_name(abs_root, stack)

    model = {
        "project": project,
        "root": abs_root,
        "level": level,
        "stack": stack,
        "tokens": tokens,
        "routes": routes,
        "landing_route": landing,
        "components": components,
        "copy": copy,
        "assets": assets,
        "repo": repo,
    }
    model["brief_markdown"] = render_brief(model, level)
    return model


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def build_parser():
    parser = argparse.ArgumentParser(
        prog="analyze_codebase.py",
        description=(
            "Analyze a code project and synthesize a Claude Design 'design context "
            "brief' (stack, design tokens, routes, components, UI copy, assets, repo)."
        ),
    )
    parser.add_argument("--root", default=os.getcwd(),
                        help="Project directory to analyze (default: cwd).")
    parser.add_argument("--level", choices=["lean", "comprehensive"],
                        default="comprehensive",
                        help="Context depth (default: comprehensive). "
                             "lean = stack+tokens+assets+repo only.")
    parser.add_argument("--json", action="store_true",
                        help="Emit a machine JSON object (with brief_markdown) "
                             "instead of plain markdown.")
    parser.add_argument("--out", default=None, metavar="FILE",
                        help="Write output to FILE instead of stdout.")
    parser.add_argument("--max-components", dest="max_components", type=int,
                        default=DEFAULT_MAX_COMPONENTS,
                        help="Max components to list (default: %d)."
                             % DEFAULT_MAX_COMPONENTS)
    parser.add_argument("--max-assets", dest="max_assets", type=int,
                        default=DEFAULT_MAX_ASSETS,
                        help="Max assets to list (default: %d)." % DEFAULT_MAX_ASSETS)
    parser.add_argument("--max-copy", dest="max_copy", type=int,
                        default=DEFAULT_MAX_COPY,
                        help="Max UI copy strings to list (default: %d)."
                             % DEFAULT_MAX_COPY)
    parser.add_argument("--include-docs", dest="include_docs", action="store_true",
                        help="Also include document assets (.pdf/.hwp/.doc*/...) "
                             "(default: visual-only).")
    return parser


def _clamp(value, lo, default):
    try:
        v = int(value)
    except (TypeError, ValueError):
        return default
    return v if v >= lo else default


def main(argv=None):
    parser = build_parser()
    args = parser.parse_args(argv)

    root = args.root or os.getcwd()
    level = args.level if args.level in ("lean", "comprehensive") else "comprehensive"
    max_components = _clamp(args.max_components, 0, DEFAULT_MAX_COMPONENTS)
    max_assets = _clamp(args.max_assets, 0, DEFAULT_MAX_ASSETS)
    max_copy = _clamp(args.max_copy, 0, DEFAULT_MAX_COPY)

    try:
        model = analyze(
            root=root, level=level,
            max_components=max_components, max_assets=max_assets,
            max_copy=max_copy, include_docs=bool(args.include_docs),
        )
    except Exception as exc:  # absolute last-resort guard: never crash.
        fallback = {
            "project": _basename(_abspath(root)) or "project",
            "root": _abspath(root), "level": level,
            "stack": {"frameworks": [], "notes": ["analysis error: %s" % exc]},
            "tokens": {"palette": [], "fonts": {}, "radius": []},
            "routes": [], "landing_route": "", "components": [], "copy": [],
            "assets": [], "repo": {},
        }
        fallback["brief_markdown"] = (
            "# %s — Claude Design 컨텍스트 브리프\n\n"
            "분석 중 오류가 발생해 부분 결과만 제공합니다: %s\n"
            % (fallback["project"], exc)
        )
        model = fallback

    if args.json:
        out_model = dict(model)
        # Per contract: assets[] entries carry ABSOLUTE paths (the `path` field),
        # plus a flat `asset_paths` list of those absolute paths for easy upload.
        out_model["asset_paths"] = [a["path"] for a in model.get("assets", [])]
        output = json.dumps(out_model, ensure_ascii=False, indent=2)
    else:
        output = model["brief_markdown"]

    if args.out:
        try:
            with open(args.out, "w", encoding="utf-8") as fh:
                fh.write(output if output.endswith("\n") else output + "\n")
        except OSError as exc:
            sys.stderr.write("Could not write --out file %s: %s\n" % (args.out, exc))
            sys.stdout.write(output + ("\n" if not output.endswith("\n") else ""))
            return 1
    else:
        sys.stdout.write(output + ("\n" if not output.endswith("\n") else ""))
    return 0


if __name__ == "__main__":
    sys.exit(main())
