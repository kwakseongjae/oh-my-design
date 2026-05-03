import { forwardRef } from 'react';
export const Pagination = forwardRef<HTMLDivElement, { className?: string }>(function Pagination({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Pagination">Pagination</div>;
});
