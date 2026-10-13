/* Landing copy (en), ported from the approved concept-A prototype
 * (docs/research/2026-10-13-rebrand/a-landing/i18n*.js, rounds 1-5c). Written natively per
 * locale, not converted. Numbers are {placeholders} filled from generated data at build time.
 * Markup allowed in strings: <b>, <code>, <span class="nb"> and &nbsp; &lt; &gt; (see rich.tsx). */
export const EN = {
  "htmlLang": "en",
  "title": "oh-my-design: real design systems for CJK screens",
  "desc": "{total} DESIGN.md files from real companies, {cjk} of them Korean, Taiwanese, Japanese or Chinese. Verified values point back to the page they were read from.",
  "nav": {
    "archive": "Archive",
    "skills": "Skills",
    "docs": "Docs",
    "github": "GitHub",
    "lang": "Language",
    "theme": "Switch theme",
    "skip": "Skip to content"
  },
  "hero": {
    "h1": "Real design systems, set square for CJK&nbsp;screens.",
    "lede": "{total} DESIGN.md files your coding agent can follow: <b>{KR} from Korea, {TW} from Taiwan, {JP} from Japan, {CN} from China</b>. In a verified file, every value points back to the page it was read from.",
    "searchLabel": "Search references",
    "searchPh": "tossbank, 교보문고, 誠品, トヨタ…",
    "searchEmpty": "No reference by that name. Try the company's native or English name.",
    "searchHint": "{n} matches",
    "tally": {
      "v": "verified: every value traced to a captured product page or official doc",
      "p": "partial: sourced, but no per-value evidence yet",
      "l": "legacy: written before evidence capture"
    },
    "open": "Open DESIGN.md",
    "meta": "{role} {hex} · checked {date} · {n} surfaces",
    "more": "+{n} more in the archive",
    "gridLabel": "Featured verified references, one company per cell"
  },
  "status": {
    "v": "Verified",
    "p": "Partial",
    "l": "Legacy"
  },
  "tiers": {
    "heading": "What the three labels mean",
    "v": "Measured token source, at least five raw proof samples, an official source and no open conflict. On top of that, a complete evidence graph: every token claim names its surface, source, method and date.",
    "p": "Passes the same source and proof checks, but the per-value evidence graph hasn't been built yet.",
    "l": "Written before the pipeline. In {legacyProse} of these {l} files, tokens were transcribed from prose rather than measured. Read them as a starting point, not a fact sheet."
  },
  "regions": {
    "names": {
      "KR": "Korea",
      "TW": "Taiwan",
      "JP": "Japan",
      "CN": "China"
    },
    "checked": "checked {date}",
    "surfaces": "{n} surfaces"
  },
  "reg3": {
    "h2": "Korea, Taiwan, Japan",
    "intro": "Three input methods, three archives. Press a key to see who's in it.",
    "keyCount": "{n} refs",
    "keyVer": "{v} verified",
    "thin": "Thinnest so far",
    "show": "Verified examples from {r}",
    "all": "All {n} in the archive"
  },
  "kb": {
    "label": "Keyboard of verified references. Each key is one company, in its verified color.",
    "cap": "key: {r} · legend weight {w}",
    "rad": "{k} {v}px",
    "radNone": "no radius claimed, neutral",
    "wNone": "none claimed, neutral 700"
  },
  "gen": {
    "h2": "Watch a screen stream out of a DESIGN.md",
    "intro": "An agent reads one company's file and builds a sample screen from its tokens alone. Pick another company and the same screen restyles.",
    "replay": "Replay",
    "m": {
      "css": "computed style",
      "both": "computed style + official doc",
      "doc": "official doc",
      "live": "live extract"
    },
    "asSpec": "Face as specified: {f}.",
    "absent": "not in source",
    "stats": [
      "claims with evidence",
      "surfaces",
      "sources · official",
      "checked",
      "next recheck"
    ],
    "sample": {
      "label": "Sample screen built from these tokens",
      "title": "Spending this month",
      "body": "A quick look at where your money went.",
      "card": "Recent",
      "rows": [
        "Groceries",
        "Transport"
      ],
      "cta": "View details",
      "states": "States"
    },
    "r5": {
      "pick": "Company",
      "sum": "{n} values · all sourced",
      "hint": "Hover or tap an element to see where its value came from.",
      "missing": "Not in source:",
      "noFace": "No face claimed, so the page font is used.",
      "st": {
        "pressed": "pressed",
        "hover": "hover",
        "focus": "focus"
      },
      "stNone": "no state values in source",
      "dflt": "not in source · default",
      "subF": "{f}: not loaded here, shown in the page font (substitute, not the brand face).",
      "disp": "Display face: {d}.",
      "otherDomain": "different source domain from the button"
    }
  },
  "use": {
    "h2": "Hand it to your agent",
    "intro": "Three steps: take the file, install the skills, send the first prompt.",
    "s1h": "Take the file",
    "s1a": "Open the Toss reference →",
    "s1p": "Open a reference and copy or download its DESIGN.md, or fetch the raw file. Put it at your project root.",
    "s2h": "Install the skills (optional)",
    "s2p": "Sets up OmD skills for Claude Code, Codex, OpenCode and Cursor. Restart your agent afterwards.",
    "s3h": "Give the first prompt",
    "s3p": "Say this to your agent. Swap Toss for any reference.",
    "copy": "Copy",
    "copied": "Copied",
    "failed": "Copy failed"
  },
  "skills": {
    "h2": "Frontend skills",
    "intro": "{skills} skills ship in the npm package. These are good ones to start with.",
    "tag": {
      "pub": "Published",
      "soon": "Coming",
      "plan": "Planned"
    },
    "more": "See the other {n} on GitHub",
    "items": {
      "init": "Recommends a reference that fits your project and prepares a DESIGN.md preview for you to approve.",
      "apply": "Applies your DESIGN.md as brand context for UI work, from a component fix to “make it warmer”.",
      "feel": "113 interface-feel rules across 17 axes: timing, easing, 44px targets, focus rings. Apply them or audit with them; each number is graded by its source.",
      "slop": "Reads a real route and flags generated patterns used without context: overused cards, gradients and icon tiles, translationese, abstract copy. Every finding has a rule ID and line ref.",
      "locale": "Rewrites Korean source copy for English, Japanese, Simplified and Traditional Chinese readers. It re-orders and re-voices instead of translating; facts, commands and URLs stay fixed.",
      "humanize": "Edits product docs and UX copy until they read naturally in each language, without touching facts, numbers, commands or links.",
      "hangul": "Korean typesetting for coding agents: 14 rules for line breaks, letter-spacing, line-height, font stacks and number formats, drawn from W3C klreq, the KRDS, SEED and TDS docs, and a measurement of 67 Korean services. Comes with a deterministic checker.",
      "shader": "먹 번짐 (ink bleed): a large Korean, Japanese or Chinese headline that reads as sumi ink printed on hanji. The heading stays real, selectable text; a WebGL2 layer adds only the ink.",
      "ja": "Japanese typesetting based on JLREQ. Sources first: a rule without one doesn't go in.",
      "tc": "Traditional Chinese typesetting based on CLREQ."
    },
    "names": {
      "hangul": "/hangul",
      "shader": "omd-cjk-type-shader",
      "ja": "Japanese typesetting",
      "tc": "Traditional Chinese typesetting"
    }
  },
  "why": {
    "h2": "Why not just a gallery?",
    "intro": "An inspiration catalog shows you what a site looks like. OmD records where each value came from.",
    "items": [
      [
        "Provenance",
        "Every verified value names the page, method and date it came from, and each file carries a date for its next recheck."
      ],
      [
        "CJK depth",
        "Two thirds of the archive is Korean, Taiwanese, Japanese or Chinese, filed under native names. Typesetting skills for those scripts are on the way."
      ],
      [
        "Unknown means absent",
        "A font that can't be confirmed is left out, not swapped for Inter. A value nobody measured isn't written down."
      ]
    ]
  },
  "faq": {
    "h2": "Questions",
    "items": [
      [
        "What is a DESIGN.md?",
        "A Markdown file that describes a product's design system (colors, type, radii, components, voice) for a coding agent to read before it builds UI."
      ],
      [
        "Are these official files from the companies?",
        "No. Each one is an evidence-backed reconstruction made from public product pages and official docs, and its Governance section says so. The designs belong to their companies; the files are for reference."
      ],
      [
        "Do I need the CLI?",
        "No. You can copy, download or fetch any reference raw from <code>oh-my-design.kr/&lt;id&gt;/design.md</code>. The CLI adds skills that apply the file inside Claude Code, Codex, OpenCode and Cursor."
      ],
      [
        "How current are the files?",
        "Each verified file records when it was checked and when it's due again. Toss, for example, was checked on {tossChk} and is due for a recheck on {tossNext}."
      ],
      [
        "Why do some Japanese and Chinese companies show a Latin letter?",
        "Cells use the name the registry has for each company. Where that name is Latin, as with LINE, pixiv or Alipay, the cell shows a Latin letter rather than a native name nobody verified."
      ],
      [
        "Does it cost anything or need an API key?",
        "The CLI is MIT-licensed, and its core workflows need no API key. Inference stays inside the coding agent you already use."
      ]
    ]
  },
  "foot": {
    "tag": "A DESIGN.md archive and frontend skills for CJK screens.",
    "legal": "MIT License. References belong to their respective companies and are reproduced for educational reference."
  }
};

export type BrandCopy = typeof EN;
