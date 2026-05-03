import { forwardRef } from 'react';
export const Toast = forwardRef<HTMLDivElement, { className?: string }>(function Toast({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Toast">Toast</div>;
});
