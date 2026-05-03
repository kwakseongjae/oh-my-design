import { forwardRef } from 'react';
export const DataTable = forwardRef<HTMLDivElement, { className?: string }>(function DataTable({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="DataTable">DataTable</div>;
});
