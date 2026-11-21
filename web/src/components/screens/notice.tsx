/**
 * The rights and takedown lines under the /screens gallery and the item page's Screens tab, rendered only once
 * screens are published (the models' `published`). The e-mail part renders only when SCREENS_CONTACT_EMAIL is set.
 * No hooks: both client surfaces render it.
 */

import { SCREENS_CONTACT_EMAIL, screenRemovalHref } from "@/lib/screens/contact";
import type { NoticeScope, ScreensNoticeCopy } from "./notice-copy";

export function ScreensNotice({
  t,
  scope,
  shot,
  signedOut,
  service,
  email = SCREENS_CONTACT_EMAIL,
}: {
  t: ScreensNoticeCopy;
  scope: NoticeScope;
  shot: { from: string; to: string } | null;
  signedOut: boolean;
  /** The reference id, to fill in the form's service field. */
  service?: string;
  email?: string;
}) {
  const parts = t.takedown(Boolean(email));
  return (
    <footer className="sq-scr-notice">
      <p>{t.rights(scope, shot, signedOut)}</p>
      <p>
        {parts.before}
        <a href={screenRemovalHref(service)} target="_blank" rel="noopener noreferrer">
          {parts.form}
        </a>
        {email ? (
          <>
            {parts.between}
            <a href={`mailto:${email}`}>{email}</a>
          </>
        ) : null}
        {parts.after}
      </p>
    </footer>
  );
}
