import { useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { service } from "../lib/catalog.js";
import { BrandLockup } from "./BrandLockup.jsx";

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
          <div className="brand-cluster">
            <BrandLockup />
            <p className="brand-tagline">{service.tagline}</p>
          </div>
          <nav className="app-nav" aria-label="주요">
            <NavLink to="/" end>
              홈
            </NavLink>
            <NavLink to="/free">나눔</NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className="app-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <BrandLockup />
            <p className="footer-positioning">{service.tagline}</p>
          </div>
          <nav className="footer-nav" aria-label="장터 안내">
            <div className="footer-group">
              <p className="footer-group-label">장터</p>
              <ul>
                <li>
                  <Link to="/">홈</Link>
                </li>
                <li>
                  <Link to="/free">나눔</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <p className="footer-meta">{service.disclosure}</p>
      </footer>
    </>
  );
}
