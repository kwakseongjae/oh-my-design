import { statusLabel } from "../lib/catalog.js";

export function StatusBadge({ status }) {
  return (
    <span className="status-badge" data-status={status}>
      {statusLabel(status)}
    </span>
  );
}
