/**
 * Shared markdown renderer for DESIGN.md content.
 *
 * Server component (no "use client") — react-markdown runs synchronously
 * on the server and emits static HTML, so there's zero client JS cost
 * for the markdown pane on the Browse Detail route.
 *
 * Styling uses an explicit `components` map (rather than the `prose`
 * typography plugin) because this project is on Tailwind v4 and doesn't
 * ship @tailwindcss/typography. Explicit classes keep the output
 * self-contained and theme-aware via next-themes' `.dark` cascade.
 *
 * Security posture: rehypeRaw allows HTML comments (DESIGN.md uses them
 * heavily for `<!-- verified -->`, `<!-- illustrative -->` markers) but
 * rehypeSanitize with a tightened schema drops any active tags/attributes
 * that could carry XSS. Input is from our own references/ tree so this
 * is defense-in-depth, not the primary control.
 */

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

/**
 * react-markdown hands every component the hast `node` it came from. Spread onto a DOM element it became the
 * attribute node="[object Object]" on every heading, paragraph, link and cell of the page (seen 2026-11-21 on the
 * item pages and the blog). The node is for components that need it; none here does.
 */
function drop<P extends { node?: unknown }>(props: P): Omit<P, "node"> {
  const { node, ...rest } = props;
  void node;
  return rest;
}

const schema = {
  ...defaultSchema,
  tagNames: [
    ...(defaultSchema.tagNames ?? []),
    "details",
    "summary",
  ],
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code ?? []), ["className"]],
    span: [...(defaultSchema.attributes?.span ?? []), ["className"]],
  },
};

/**
 * `demoteH1` renders the document's `# Title` as an <h2> with the same styling.
 * Pages that embed a whole DESIGN.md under their own <h1> (the reference detail
 * page, the builder preview) set it so the page keeps exactly one <h1>.
 */
export function Markdown({ content, demoteH1 = false }: { content: string; demoteH1?: boolean }) {
  // Strip leading YAML frontmatter from the rendered view — the file on
  // disk keeps it (agents/tools that inspect the file need the metadata),
  // but the human-facing rendering reads better without the raw delimiters.
  let src = content;
  if (src.startsWith("---\n")) {
    const end = src.indexOf("\n---\n", 4);
    if (end !== -1) src = src.slice(end + 5).replace(/^\n+/, "");
  }

  return (
    <div className="text-sm leading-relaxed text-foreground/85">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, schema]]}
        components={{
          h1: (props) => {
            const Tag = demoteH1 ? "h2" : "h1";
            return (
              <Tag
                className="mt-8 mb-3 text-3xl font-bold tracking-tight text-foreground first:mt-0"
                {...drop(props)}
              />
            );
          },
          h2: (props) => (
            <h2
              className="mt-10 mb-3 border-b border-border/40 pb-2 text-2xl font-semibold tracking-tight text-foreground"
              {...drop(props)}
            />
          ),
          h3: (props) => (
            <h3
              className="mt-6 mb-2 text-lg font-semibold text-foreground"
              {...drop(props)}
            />
          ),
          h4: (props) => (
            <h4
              className="mt-5 mb-2 text-base font-semibold text-foreground"
              {...drop(props)}
            />
          ),
          p: (props) => <p className="my-3 leading-relaxed" {...drop(props)} />,
          a: ({ href, ...props }) => (
            <a
              href={href}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-primary underline-offset-2 hover:underline"
              {...drop(props)}
            />
          ),
          strong: (props) => (
            <strong className="font-semibold text-foreground" {...drop(props)} />
          ),
          em: (props) => <em className="italic" {...drop(props)} />,
          ul: (props) => (
            <ul className="my-3 list-disc space-y-1 pl-6" {...drop(props)} />
          ),
          ol: (props) => (
            <ol className="my-3 list-decimal space-y-1 pl-6" {...drop(props)} />
          ),
          li: (props) => <li className="leading-relaxed" {...drop(props)} />,
          blockquote: (props) => (
            <blockquote
              className="my-4 border-l-2 border-primary/40 pl-4 italic text-muted-foreground"
              {...drop(props)}
            />
          ),
          code: ({ className, children, ...props }) => {
            const isBlock =
              className?.startsWith("language-") || String(children).includes("\n");
            if (isBlock) {
              return (
                <code
                  className={`block ${className ?? ""}`}
                  {...drop(props)}
                >
                  {children}
                </code>
              );
            }
            return (
              <code
                className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground"
                {...drop(props)}
              >
                {children}
              </code>
            );
          },
          pre: (props) => (
            <pre
              className="my-4 overflow-x-auto rounded-lg bg-muted/50 p-4 text-xs leading-relaxed dark:bg-muted/30"
              {...drop(props)}
            />
          ),
          hr: () => <hr className="my-6 border-border/40" />,
          table: (props) => (
            <div className="my-4 overflow-x-auto rounded-lg border border-border/50">
              <table
                className="min-w-full border-collapse text-sm"
                {...drop(props)}
              />
            </div>
          ),
          thead: (props) => (
            <thead className="bg-muted/40 dark:bg-muted/20" {...drop(props)} />
          ),
          th: (props) => (
            <th
              className="border-b border-border/50 px-3 py-2 text-left font-semibold"
              {...drop(props)}
            />
          ),
          tbody: (props) => (
            <tbody className="divide-y divide-border/40" {...drop(props)} />
          ),
          tr: (props) => <tr {...drop(props)} />,
          td: (props) => (
            <td
              className="px-3 py-2 align-top text-foreground/80"
              {...drop(props)}
            />
          ),
        }}
      >
        {src}
      </ReactMarkdown>
    </div>
  );
}
