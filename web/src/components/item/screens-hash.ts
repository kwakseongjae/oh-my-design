/**
 * The item page's link to its 서비스 화면 tab: /design-systems/<id>#screens (and the Korean page's) opens the page on
 * that tab, so the /screens gallery's cards and the landing wall can land there. A hash, not a query: the canonical
 * URL and the static page stay as they are, the server always renders the DESIGN.md view, and #use, the hero's action
 * group, keeps working as an ordinary anchor. detail-view.tsx reads it after mount and on hashchange.
 */

export const SCREENS_HASH = "#screens";

/** The view for the URL's hash: #screens opens the tab; leaving it (#use, or no hash) goes back to the default view
 *  from the tab and leaves any other view as it is. */
export function viewForHash<V extends string>(hash: string, current: V, screens: V, fallback: V): V {
  if (hash === SCREENS_HASH) return screens;
  return current === screens ? fallback : current;
}

/** The URL to put in place when a view is chosen by hand, so it can be linked: the tab adds #screens and leaving it
 *  drops it; null when the URL already says the right thing. */
export function urlForView(onScreens: boolean, loc: { pathname: string; search: string; hash: string }): string | null {
  if (onScreens && loc.hash !== SCREENS_HASH) return `${loc.pathname}${loc.search}${SCREENS_HASH}`;
  if (!onScreens && loc.hash === SCREENS_HASH) return `${loc.pathname}${loc.search}`;
  return null;
}
