import { forwardRef } from 'react';
export const Breadcrumb = forwardRef<HTMLDivElement, { className?: string }>(function Breadcrumb({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Breadcrumb">Breadcrumb</div>;
});
