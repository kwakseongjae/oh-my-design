/**
 * Docs copy marks commands, paths and flags with backticks (`--global`), the way the
 * Markdown twin shows them. This renders those spans as <code>; everything else is text.
 */
export function InlineText({ text }: { text: string }) {
  const parts = text.split(/(`[^`\n]+`)/);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts.map((part, index) =>
        part.length > 2 && part.startsWith("`") && part.endsWith("`") ? (
          <code key={index} translate="no">{part.slice(1, -1)}</code>
        ) : (
          part
        ),
      )}
    </>
  );
}
