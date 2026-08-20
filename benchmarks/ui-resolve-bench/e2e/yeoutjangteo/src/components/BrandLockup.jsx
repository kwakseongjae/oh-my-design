import { Link } from "react-router-dom";
import { service } from "../lib/catalog.js";

export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" fillRule="evenodd" d="M3 3h18v18H3V3zm2 2v14h14V5H5z" />
      <rect x="5" y="10" width="14" height="4" fill="currentColor" />
    </svg>
  );
}

export function BrandLockup() {
  return (
    <Link className="brand-lockup" to="/">
      <BrandMark />
      <span className="wordmark">{service.name}</span>
    </Link>
  );
}
