import { forwardRef } from 'react';
export const Sheet = forwardRef<HTMLDivElement, { className?: string }>(function Sheet({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Sheet">Sheet</div>;
});
