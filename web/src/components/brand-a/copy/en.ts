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
    "langTitle": "Choose a language",
    "close": "Close",
    "langNames": {"en":"English", "ko":"Korean", "ja":"Japanese", "zh-tw":"Traditional Chinese"},
    "skip": "Skip to content"
  },
  "hero": {
    "h1": "Real design systems for CJK&nbsp;screens.",
    "lede": "{total} DESIGN.md files from real companies, every verified value traced to its source.",
    "browse": "Browse DESIGN.md",
    "how": "How it works"
  },
  "status": {
    "v": "Verified",
    "p": "Partial",
    "l": "Legacy"
  },
  "gen": {
    "h2": "From DESIGN.md to screen",
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
      "missing": "Not measured yet, shown with a neutral default:",
      "noFace": "No face claimed, so the page font is used.",
      "st": {
        "pressed": "pressed",
        "hover": "hover",
        "focus": "focus"
      },
      "dflt": "Not measured yet · neutral default",
      "subF": "{f}: not loaded here, so the screen uses the page font. That is not the brand face, and no measured substitute is chosen.",
      "disp": "Display face: {d}.",
      "otherDomain": "different source domain from the button"
    }
  },
  "use": {
    "h2": "Start with the omd CLI",
    "p": "One command installs the skills, the sub-agents and the reference catalog into Claude Code, Codex and OpenCode. This is what it printed in an empty project.",
    "panel": "Terminal output",
    "note": "Real output of oh-my-design-cli {ver}, run on {date} in an empty project.",
    "gap": "{n} lines left out",
    "skills": [
      [
        "omd-init",
        "Sets up DESIGN.md from the closest real-company reference."
      ],
      [
        "omd-apply",
        "Applies your DESIGN.md to every UI change your agent makes."
      ],
      [
        "omd-feel",
        "Applies or audits 113 measured interface-feel rules."
      ],
      [
        "omd-cjk-type-shader",
        "Renders a CJK headline as sumi ink on hanji."
      ]
    ],
    "all": "All {skills} skills on GitHub",
    "copy": "Copy",
    "copied": "Copied",
    "failed": "Copy failed"
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
