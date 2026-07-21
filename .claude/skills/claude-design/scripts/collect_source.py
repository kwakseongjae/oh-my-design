#!/usr/bin/env python3
"""collect_source.py — gather the landing/page-critical SOURCE files of a project
and (optionally) concatenate them into ONE attachable bundle for Claude Design.

WHY: a private GitHub URL is not referenceable by Claude Design. The robust way to
let it "see the code" is to attach the actual local source. This picks the landing
entry file + its locally-imported components + the main stylesheet, bounded.

Usage:
  python3 collect_source.py [--root DIR] [--entry FILE] [--max-files N]
      [--max-kb N] [--json] [--bundle OUT.md]
Defaults: root=cwd, max-files=16, max-kb=220.
- --json   : print {entry, files:[{path,bytes}], total_bytes, note}
- --bundle : write a single markdown bundle (each file under a `// ==== path ====`
             header) suitable for one upload; prints the bundle path.
Regex-based, stdlib only, never crashes.
"""
import argparse, os, re, sys, json

SKIP_DIRS = {"node_modules", ".git", "dist", "build", ".next", "out", ".venv",
             "venv", "__pycache__", ".cache", "coverage", ".turbo", ".vercel"}
ENTRY_CANDIDATES = [
    "src/app/page.tsx", "src/app/page.jsx", "app/page.tsx", "app/page.jsx",
    "src/pages/index.tsx", "src/pages/index.jsx", "pages/index.tsx", "pages/index.jsx",
    "src/App.tsx", "src/App.jsx", "src/main.tsx", "app/page.js",
]
CSS_CANDIDATES = [
    "src/app/globals.css", "app/globals.css", "src/index.css", "src/styles/globals.css",
    "styles/globals.css", "src/app/global.css", "src/main.css",
]
IMPORT_RE = re.compile(r"""(?:import|export)[^'"]*from\s*['"]([^'"]+)['"]""")
CODE_EXTS = (".tsx", ".jsx", ".ts", ".js", ".vue", ".svelte", ".astro")


def find_root_entry(root, entry):
    if entry:
        p = entry if os.path.isabs(entry) else os.path.join(root, entry)
        return p if os.path.isfile(p) else None
    for c in ENTRY_CANDIDATES:
        p = os.path.join(root, c)
        if os.path.isfile(p):
            return p
    return None


def resolve_import(root, spec):
    """Resolve a local import spec to candidate file paths (best-effort)."""
    if not (spec.startswith("@/") or spec.startswith("./") or spec.startswith("../") or spec.startswith("@/")):
        return []
    if spec.startswith("@/"):
        base = os.path.join(root, "src", spec[2:])
        if not os.path.exists(os.path.dirname(base)):
            base = os.path.join(root, spec[2:])  # some configs map @/ to root
    else:  # relative — resolved by caller against the importer dir
        base = spec
    return [base]


def collect(root, entry, max_files, max_kb):
    files, seen = [], set()
    note = []
    entry_path = find_root_entry(root, entry)

    def add(p):
        try:
            p = os.path.realpath(p)
            if p in seen or not os.path.isfile(p):
                return
            sz = os.path.getsize(p)
            seen.add(p)
            files.append({"path": p, "bytes": sz})
        except OSError:
            pass

    if entry_path:
        add(entry_path)
        try:
            txt = open(entry_path, encoding="utf-8", errors="ignore").read()
        except OSError:
            txt = ""
        importer_dir = os.path.dirname(entry_path)
        for spec in IMPORT_RE.findall(txt):
            cands = []
            if spec.startswith("@/"):
                cands = resolve_import(root, spec)
            elif spec.startswith("./") or spec.startswith("../"):
                cands = [os.path.normpath(os.path.join(importer_dir, spec))]
            else:
                continue
            for base in cands:
                # base may be a file (with/without ext), or a dir (barrel) -> include its code files
                hit = False
                for ext in ("",) + CODE_EXTS:
                    fp = base + ext
                    if os.path.isfile(fp):
                        add(fp); hit = True; break
                if not hit and os.path.isdir(base):
                    note.append("barrel:" + os.path.relpath(base, root))
                    try:
                        for fn in sorted(os.listdir(base)):
                            if fn.endswith(CODE_EXTS):
                                add(os.path.join(base, fn))
                    except OSError:
                        pass
                elif not hit:
                    # maybe an index file in a dir
                    for idx in ("index.tsx", "index.ts", "index.jsx", "index.js"):
                        fp = os.path.join(base, idx)
                        if os.path.isfile(fp):
                            add(fp)
    else:
        note.append("no_entry_found")

    # main stylesheet / tokens
    for c in CSS_CANDIDATES:
        p = os.path.join(root, c)
        if os.path.isfile(p):
            add(p); break

    # bound by count then by cumulative size
    files = files[:max_files]
    out, total = [], 0
    for f in files:
        if total + f["bytes"] > max_kb * 1024 and out:
            note.append("size_capped"); break
        out.append(f); total += f["bytes"]
    return {"root": root, "entry": entry_path, "files": out, "total_bytes": total,
            "note": ", ".join(note) or "ok"}


def write_bundle(res, out_path):
    parts = ["# Source bundle — Claude Design 참고용 (로컬 코드)\n",
             "> 이 프로젝트의 레포가 private 일 수 있어 URL 로 접근이 안 될 수 있습니다.",
             "> 아래는 랜딩 페이지의 **실제 로컬 소스**(진입 page + import 컴포넌트 + 스타일/토큰)입니다.\n"]
    root = res["root"]
    for f in res["files"]:
        rel = os.path.relpath(f["path"], root)
        try:
            body = open(f["path"], encoding="utf-8", errors="ignore").read()
        except OSError:
            body = "// (read error)"
        lang = "tsx" if f["path"].endswith((".tsx", ".jsx")) else (
            "ts" if f["path"].endswith((".ts", ".js")) else (
                "css" if f["path"].endswith(".css") else ""))
        parts.append(f"\n// ===== {rel} =====\n```{lang}\n{body}\n```\n")
    with open(out_path, "w", encoding="utf-8") as fh:
        fh.write("\n".join(parts))
    return out_path


def main():
    ap = argparse.ArgumentParser(description="Collect landing source files / bundle for Claude Design.")
    ap.add_argument("--root", default=os.getcwd())
    ap.add_argument("--entry", default=None)
    ap.add_argument("--max-files", type=int, default=16)
    ap.add_argument("--max-kb", type=int, default=220)
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--bundle", default=None, metavar="OUT")
    a = ap.parse_args()
    root = os.path.realpath(a.root)
    res = collect(root, a.entry, a.max_files, a.max_kb)
    if a.bundle:
        res["bundle"] = write_bundle(res, a.bundle)
    if a.json:
        print(json.dumps(res, ensure_ascii=False, indent=1))
    else:
        print(f"entry: {res['entry']}")
        print(f"files ({len(res['files'])}, {res['total_bytes']//1024}KB):")
        for f in res["files"]:
            print(f"  {os.path.relpath(f['path'], root)}  ({f['bytes']}B)")
        if res.get("bundle"):
            print(f"bundle -> {res['bundle']}")
        print(f"note: {res['note']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
