/**
 * The oh-my-design logo — the ONE component to change when the mark changes.
 * Header and footer render <Logo />; nothing else draws the mark.
 *
 * Final mark (owner pick, 2026-10-14; docs/research/2026-10-14-logo/final/): an app
 * icon — a jelly key top with a brush "o" — beside live text "oh-my-design" in
 * Wanted Sans 700, like Taste Skill's header. Assets: public/brand/header-icon.svg
 * (light pages) and header-icon-dark.svg (dark pages), swapped by the `.dark` class.
 * Favicons/app icons are Next file conventions: app/favicon.ico, app/icon.svg,
 * app/apple-icon.png, app/manifest.webmanifest (+ public/icons/).
 * Sizes live in chrome.css (.sq-logo-*): 32px icon / 10px gap / 18px text on desktop,
 * 28 / 8 / 16 at ≤640px.
 */
export function Logo({ wordmark = true }: { wordmark?: boolean }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="sq-logo-icon sq-logo-l" src="/brand/header-icon.svg" alt="" width={32} height={32} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="sq-logo-icon sq-logo-d" src="/brand/header-icon-dark.svg" alt="" width={32} height={32} />
      {wordmark ? <span className="sq-logo-text" lang="en">oh-my-design</span> : null}
    </>
  );
}
