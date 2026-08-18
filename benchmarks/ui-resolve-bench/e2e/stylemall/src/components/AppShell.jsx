import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { catalog } from "../lib/catalog.js";

const LINKS = [
  { to: "/", label: "홈", end: true },
  { to: "/products", label: "상품", end: false },
];

export function AppShell() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    const main = document.getElementById("main");
    const heading = main?.querySelector("h1");
    window.scrollTo(0, 0);
    if (heading) {
      heading.setAttribute("tabIndex", "-1");
      heading.focus({ preventScroll: true });
    } else if (main) {
      main.focus({ preventScroll: true });
    }
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main">
        본문으로
      </a>
      <header className="site-header">
        <div className="nav-wrap">
          <Link className="site-brand" to="/">
            {catalog.service.name}
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((value) => !value)}
          >
            메뉴
          </button>
          <nav
            className="site-nav"
            id="site-nav"
            data-open={menuOpen ? "true" : "false"}
            aria-label="주요"
          >
            <ul className="site-nav-list">
              {LINKS.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.end}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className="site-footer">
        <p>{catalog.service.disclosure}</p>
      </footer>
    </>
  );
}
