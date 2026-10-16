/**
 * The oh-my-design logo — the ONE component to change when the mark changes.
 * Header and footer render <Logo />; nothing else draws the mark.
 *
 * Final mark (owner pick, 2026-10-14; docs/research/2026-10-14-logo/final/): an app
 * icon — a jelly key top with a brush "o" — beside live text "oh-my-design" in
 * Wanted Sans 700, like Taste Skill's header. Asset: public/brand/header-icon.svg
 * (the site is light only since 2026-10-16; header-icon-dark.svg stays as a brand asset).
 * Round 10: the keycap is Iris violet with a white brush, and the favicon is the same full
 * "omd" keycap at every size. Favicons/app icons are Next file conventions: app/favicon.ico,
 * app/icon.svg, app/apple-icon.png, app/manifest.webmanifest (+ public/icons/), all written by
 * scripts/brand-icons.mjs from the logo finals' outline SVGs.
 * Sizes live in chrome.css (.sq-logo-*): 32px icon / 10px gap / 18px text on desktop,
 * 28 / 8 / 16 at ≤640px.
 */
export function Logo({ wordmark = true }: { wordmark?: boolean }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="sq-logo-icon" src="/brand/header-icon.svg" alt="" width={32} height={32} />
      {wordmark ? <span className="sq-logo-text" lang="en">oh-my-design</span> : null}
    </>
  );
}
