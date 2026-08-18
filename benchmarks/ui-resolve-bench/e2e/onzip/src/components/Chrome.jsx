import { NavLink, Link } from "react-router-dom";
import { disclosure } from "../lib/catalog.js";

export function SkipLink() {
  return (
    <a className="skip-link" href="#main">
      본문으로 건너뛰기
    </a>
  );
}

export function Disclosure() {
  return (
    <p className="disclosure">
      <strong>샘플</strong>
      {disclosure}
    </p>
  );
}

export function AppNav() {
  return (
    <header className="shell-header">
      <div className="shell-bar">
        <Link className="wordmark" to="/">
          <span aria-hidden="true" />
          온집
        </Link>
        <nav className="site-nav" aria-label="주요">
          <NavLink to="/" end>홈</NavLink>
          <NavLink to="/store">스토어</NavLink>
          <NavLink to="/posts">집들이</NavLink>
        </nav>
      </div>
      <Disclosure />
    </header>
  );
}

export function AppFooter() {
  return (
    <footer className="shell-footer">
      <div className="footer-row">
        <p>온집 · 가상 홈 인테리어 커머스 · 커뮤니티</p>
        <p>{disclosure}</p>
      </div>
    </footer>
  );
}
