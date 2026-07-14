"use client";

import { useEffect } from "react";
import { resolveRuntimeFont } from "@/lib/fonts/runtime-family";

/** Deduped, client-only loader for the exact fonts used by the builder preview. */
export function RuntimeFontLoader({ families }: { families: readonly (string | undefined)[] }) {
  const hrefs = [...new Set(
    families
      .filter((family): family is string => Boolean(family))
      .map((family) => resolveRuntimeFont(family).stylesheetHref)
      .filter((href): href is string => Boolean(href)),
  )].sort();
  const key = hrefs.join("|");

  useEffect(() => {
    const owned: HTMLLinkElement[] = [];
    for (const href of hrefs) {
      if (document.head.querySelector(`link[data-omd-runtime-font][href="${href}"]`)) continue;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.dataset.omdRuntimeFont = "true";
      document.head.appendChild(link);
      owned.push(link);
    }
    return () => owned.forEach((link) => link.remove());
  // `key` is a stable serialization; depending on the derived array would reload every render.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return null;
}
