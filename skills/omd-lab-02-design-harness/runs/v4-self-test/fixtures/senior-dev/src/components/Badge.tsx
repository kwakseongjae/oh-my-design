import { forwardRef } from 'react';
export const Badge = forwardRef<HTMLDivElement, { className?: string }>(function Badge({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Badge">Badge</div>;
});
