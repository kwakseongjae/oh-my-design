import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { catalog } from "../lib/catalog.js";
import { BrandMark } from "./BrandMark.jsx";

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
          <div className="masthead-brand">
            <Link className="site-brand" to="/">
              <BrandMark />
              <span className="site-wordmark">{catalog.service.name}</span>
            </Link>
            <p className="masthead-tagline">{catalog.service.tagline}</p>
          </div>
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
        <div className="footer-inner">
          <div className="footer-brand">
            <Link className="site-brand site-brand-footer" to="/">
              <BrandMark />
              <span className="site-wordmark">{catalog.service.name}</span>
            </Link>
            <p className="footer-positioning">{catalog.service.tagline}</p>
          </div>
          <nav className="footer-nav" aria-label="하단">
            <div className="footer-group">
              <p className="footer-label">쇼핑</p>
              <ul>
                <li>
                  <Link to="/">홈</Link>
                </li>
                <li>
                  <Link to="/products">상품</Link>
                </li>
              </ul>
            </div>
            <div className="footer-group">
              <p className="footer-label">룩북</p>
              <ul>
                {catalog.lookbooks.map((look) => (
                  <li key={look.id}>
                    <Link to={`/lookbooks/${look.id}`}>{look.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <p className="footer-meta">{catalog.service.disclosure}</p>
      </footer>
    </>
  );
}
