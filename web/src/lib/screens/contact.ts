/**
 * Where a company (or anyone) asks for a published screen to be taken down. Client-safe: the gallery and the Screens
 * tab render these links.
 */

/** The e-mail address for takedown requests. Empty until the owner gives one: while empty, no e-mail is shown. */
export const SCREENS_CONTACT_EMAIL = "";

/** The repository's GitHub issue form for a removal request (.github/ISSUE_TEMPLATE/screen-removal.yml). */
const REMOVAL_FORM = "https://github.com/kwakseongjae/oh-my-design/issues/new?template=screen-removal.yml";

/** The removal form, with the service filled in when the request starts from that service's screens. */
export function screenRemovalHref(service?: string): string {
  return service ? `${REMOVAL_FORM}&service=${encodeURIComponent(service)}` : REMOVAL_FORM;
}
