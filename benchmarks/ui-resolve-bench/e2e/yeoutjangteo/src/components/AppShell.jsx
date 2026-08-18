import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { service } from "../lib/catalog.js";

export function AppShell() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const heading = document.querySelector("#page-title") || document.querySelector("#main h1");
    if (heading) {
      heading.id = heading.id || "page-title";
      heading.setAttribute("tabIndex", "-1");
      heading.focus({ preventScroll: true });
    }
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main">
        본문으로 건너뛰기
      </a>
      <header className="app-header">
        <div className="app-header-inner">
          <Link className="wordmark" to="/">
            {service.name}
          </Link>
          <nav className="app-nav" aria-label="주요">
            <NavLink to="/" end>
              홈
            </NavLink>
            <NavLink to="/free">나눔</NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className="app-footer">{service.disclosure}</footer>
    </>
  );
}
