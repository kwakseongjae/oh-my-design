/**
 * Blog index. Posts live here as structured data rather than MDX so the
 * listing, the detail page, the sitemap, and the RSS feed all read one source
 * and cannot drift. Body is markdown, rendered by the shared renderer.
 *
 * Adding a post: append an entry, newest first. `slug` is permanent once
 * published — it is the URL.
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  /** ISO date, publication day. */
  date: string;
  tags: string[];
  /** Markdown body. */
  body: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "v2-a-design-system-your-agent-can-hold",
    title: "v2.0.0 — a design system your coding agent can hold",
    description:
      "Why we stopped trying to make the model produce good UI and started making it derive a system it has to answer to: the philosophy chain, a preset floor, numbered gates, and omd book.",
    date: "2026-08-20",
    tags: ["release", "design-systems", "ai"],
    body: `
There is a failure mode everyone building UI with an AI agent recognises. You
write a careful prompt. You get a screen. The screen is fine. Then you ask for
the next screen, and it is also fine — and it belongs to a different product.

The usual explanation is that the model lacks taste. We think the more useful
explanation is that nothing in the loop was ever asked to be consistent. A
prompt is not a system. A component kit is a system, but it is *someone else's*
— which is why products built on the same kit converge on the same face.

## What v2.0.0 changes

The agent no longer starts from a blank page and good intentions. It starts
from a chain it has to walk in order:

**philosophy → decision table → tokens → component contracts → layout grammar → build → render critique**

Each link constrains the next. The philosophy has to state what it sacrifices,
because a principle that gives nothing up is decoration. Every decision gets an
id, and every token points back at the decision that produced it. A value with
no decision behind it fails a gate — so the system cannot quietly degrade into
a pile of improvised numbers, which is what most "AI design systems" are.

## The preset floor

Deriving from zero is where variance lives. So the chain now selects from a
catalog of 93 contracts before it invents anything: fundamentals every product
needs, primitives mapped to real shadcn/ui components and their Radix
primitives with the matching ARIA APG pattern, screen genres, and flavor
profiles derived from the reference catalog.

A preset is not a component you install. shadcn gives you the structure — and
it is genuinely good at that. The preset says which values must come from
*your* decision table instead of a library default, which states must exist,
and what the accessibility contract is. The two layers stack.

We measured the difference on the same fixture and brief, with and without the
preset layer: first-render defects went from 7 to 3, and the three that
remained were finish-level rather than gate violations. Input tokens dropped
47%, because the model spends them selecting instead of rediscovering.

## Gates that name the failure

AI-generated UI fails in the same ways repeatedly: serif fallbacks on Korean
text, focus rings that appear on mouse clicks, native select popups in a
custom system, disabled states faked with opacity, wide viewports left empty
because the data was thin. So we numbered them. Mechanically checkable gates
must be grep-verified during self-critique — "no violations found" is not a
claim you can make by feeling.

## Judge it on the screen

The most important change is the least technical one. Self-critique used to
read source code and score it. A model grading its own source will pass a
broken screen every time. Now the build renders, a critique reads the rendered
screens, and repairs happen inside the existing system.

We are honest about the limit: in our final pre-release study, *every* defect
found came from external critique, not self-critique. The model still reads
source when grading itself. That is the next thing to fix.

## Read your own system

\`\`\`bash
npx oh-my-design-cli@latest book            # http://localhost:6060
npx oh-my-design-cli@latest book --static ./out
\`\`\`

Storybook renders stories. \`omd book\` renders the contract: every token beside
its decision, component state matrices including the states that deliberately
do not apply and why, contrast measured live against the pairs your system
promised, and which presets the build drew from.

## All of it is yours

The philosophy, the presets, the gates, the references — every layer is a file
in your repository. Change a gate threshold and the next build answers to it.
Add a genre preset your product needs. Point the derivation at your own brand
evidence instead of a public reference.

That is the actual argument for this shape: taste you cannot inspect cannot be
improved. When the rule is written down and numbered, a disagreement becomes an
edit instead of another round of "make it feel more premium".

\`\`\`bash
npx oh-my-design-cli@latest
\`\`\`
`.trim(),
  },
];

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
