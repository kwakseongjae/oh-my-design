import { useEffect, useId, useState } from "react";
import { Link, NavLink, useLocation, useNavigationType } from "react-router-dom";
import { DISCLOSURE } from "../lib/catalog.js";

const LINKS = [
  { to: "/", label: "홈", end: true },
  { to: "/store", label: "스토어" },
  { to: "/posts", label: "집들이" },
];

const positions = new Map();

export default function SiteChrome({ children }) {
  const { pathname } = useLocation();
  const navType = useNavigationType();
  const [open, setOpen] = useState(false);
  const navId = useId();

  useEffect(() => {
    setOpen(false);
    const heading = document.getElementById("page-title");
    if (heading) {
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }
    if (navType === "POP" && positions.has(pathname)) {
      window.scrollTo(0, positions.get(pathname));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  useEffect(() => {
    const onScroll = () => positions.set(pathname, window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <div className="shell">
      <a className="skip-link" href="#main">
        본문으로 건너뛰기
      </a>
      <header className="masthead">
        <div className="brand-block">
          <Link className="wordmark" to="/">
            온집
          </Link>
          <span className="brand-line">자리를 먼저 고르는 상점</span>
        </div>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls={navId}
          onClick={() => setOpen((value) => !value)}
        >
          메뉴
        </button>
        <nav id={navId} className="site-nav" aria-label="주요" data-open={open ? "true" : "false"}>
          <ul className="nav-list">
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {children}
      <footer className="colophon">
        <p>{DISCLOSURE}</p>
      </footer>
    </div>
  );
}
