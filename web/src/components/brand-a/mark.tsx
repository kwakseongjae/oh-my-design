/**
 * The concept-A mark: a syllable block in one manuscript cell — O (gamboge
 * circle) over D, with a compressed two-hump m on the right and the cell's
 * faint 田 guide. Refined v3 from the prototype (docs/research/2026-10-13-
 * rebrand/a-landing/mark.svg). Ink follows currentColor; the circle is the
 * one gamboge fill.
 */
export function Mark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden={title ? undefined : true} role={title ? "img" : undefined}>
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M0 0h48v48H0Z M4 4v40h40V4Z" />
      <path d="M24 4V44M4 24H44" stroke="currentColor" strokeWidth="1" opacity=".22" />
      <circle cx="15.5" cy="15.5" r="7.5" fill="var(--sq-gamboge)" />
      <path d="M8 26.5H15.5A7.5 6.75 0 0 1 15.5 40H8Z" fill="currentColor" />
      <path
        d="M27.2 40V16.4a3.5 3.5 0 0 1 6.4-2 a3.5 3.5 0 0 1 6.4 2V40h-4.6V17.6a1.2 1.2 0 0 0-2.4 0V40h-3.4V17.6a1.2 1.2 0 0 0-2.4 0V40Z"
        fill="currentColor"
      />
    </svg>
  );
}
