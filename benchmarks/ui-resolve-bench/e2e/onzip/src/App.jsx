import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import BrandLockup from "./components/BrandLockup.jsx";
import { catalog } from "./lib/catalog.js";

const LINKS = [
  { to: "/", label: "홈", end: true },
  { to: "/store", label: "스토어" },
  { to: "/posts", label: "집들이" },
];

export default function App() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 47.99rem)");
    const sync = () => {
      setCollapsed(media.matches);
      if (!media.matches) setOpen(false);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navHidden = collapsed && !open;

  return (
    <div className="shell">
      <a className="skip-link" href="#main">본문으로 건너뛰기</a>
      <header className="masthead">
        <div className="brand-block">
          <BrandLockup />
          <p className="tagline">자리가 먼저 보이는 집</p>
        </div>
        {collapsed ? (
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "닫기" : "메뉴"}
          </button>
        ) : null}
        <nav id="site-nav" className="site-nav" aria-label="주요" hidden={navHidden}>
          {LINKS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <Outlet />
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <BrandLockup />
            <p className="footer-positioning">자리가 먼저 보이는 집</p>
          </div>
          <nav className="footer-nav" aria-label="푸터">
            <div className="footer-group">
              <p className="eyebrow">둘러보기</p>
              <ul>
                {LINKS.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <p className="footer-meta">{catalog.disclosure}</p>
      </footer>
    </div>
  );
}
