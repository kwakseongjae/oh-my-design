import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { disclosure } from "../lib/data.js";
import { UNAVAILABLE_ITEMS, UnavailablePanel } from "./primitives.jsx";

const NAV = [
  { to: "/", label: "홈", end: true },
  { to: "/store", label: "스토어" },
  { to: "/posts", label: "집들이" },
];

export function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const heading = document.getElementById("page-title");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus();
    }
  }, [location.pathname]);

  return (
    <div className="shell">
      <a className="skip-link" href="#main">
        본문으로 건너뛰기
      </a>
      <header className="site-header">
        <Link className="wordmark" to="/">
          <span aria-hidden="true" />
          온집
        </Link>
        <nav className="site-nav" aria-label="주요">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className="nav-link"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="main" className="main">
        {children}
      </main>
      <footer className="site-footer">
        <p className="disclosure">{disclosure}</p>
        <UnavailablePanel items={UNAVAILABLE_ITEMS} />
        <p className="meta" style={{ marginTop: "1.5rem" }}>
          온집 샘플 카탈로그
        </p>
      </footer>
    </div>
  );
}
