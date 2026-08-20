import { useEffect } from "react";

export function usePage(title) {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    const heading = document.getElementById("page-title");
    if (heading) {
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }
  }, [title]);
}
