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
    "h1": "Real design systems for CJK&nbsp;screens.",
    "lede": "{total} DESIGN.md files from real companies, ready for your coding agent. Every verified value points back to its source.",
    "searchLabel": "Search references",
    "searchPh": "tossbank, 교보문고, 誠品, トヨタ…",
    "searchEmpty": "No reference by that name. Try the company's native or English name.",
    "searchHint": "{n} matches",
    "browse": "Browse the archive",
    "how": "How it works"
  },
  "status": {
    "v": "Verified",
    "p": "Partial",
    "l": "Legacy"
  },
  "kb": {
    "label": "Companies engraved on the keyboard. Each key opens its DESIGN.md."
  },
  "gen": {
    "h2": "Watch a screen stream out of a DESIGN.md",
    "intro": "Pick a company. The same screen restyles from its file alone.",
    "replay": "Replay",
    "m": {
      "css": "computed style",
      "both": "computed style + official doc",
      "doc": "official doc",
      "live": "live extract"
    },
    "asSpec": "Face as specified: {f}.",
    "absent": "not in source",
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
      "subF": "{f}: not loaded here, so the screen uses the page font. That is not the brand face, and no measured substitute is chosen.",
      "disp": "Display face: {d}.",
      "otherDomain": "different source domain from the button"
    }
  },
  "use": {
    "h2": "Hand it to your agent",
    "p": "Copy a reference's DESIGN.md into your project root. Or install the skills and let your agent pick one.",
    "skills": "{skills} skills ship with the CLI, including omd-init, omd-apply and omd-feel.",
    "copy": "Copy",
    "copied": "Copied",
    "failed": "Copy failed"
  },
  "why": {
    "statement": "A gallery shows what a site looks like. OmD records where each value came from, and leaves out what nobody measured."
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
        "Does it cost anything or need an API key?",
        "The CLI is MIT-licensed, and its core workflows need no API key. Inference stays inside the coding agent you already use."
      ]
    ]
  },
  "foot": {
    "tag": "A DESIGN.md archive and frontend skills for CJK screens.",
    "legal": "MIT License. References belong to their respective companies and are reproduced for educational reference.",
    "marks": "Logos are trademarks of their owners; shown for reference."
  }
};

export type BrandCopy = typeof EN;
