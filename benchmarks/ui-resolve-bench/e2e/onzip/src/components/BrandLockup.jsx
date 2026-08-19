import { Link } from "react-router-dom";

export default function BrandLockup({ to = "/" }) {
  const mark = (
    <>
      <svg
        className="brand-mark"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M3 16.5h18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
      <span className="wordmark-text">온집</span>
    </>
  );

  if (!to) {
    return <span className="brand-lockup">{mark}</span>;
  }

  return (
    <Link className="brand-lockup" to={to}>
      {mark}
    </Link>
  );
}
