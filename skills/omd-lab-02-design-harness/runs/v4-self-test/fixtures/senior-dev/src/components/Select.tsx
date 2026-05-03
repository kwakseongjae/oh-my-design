import { forwardRef } from 'react';
export const Select = forwardRef<HTMLDivElement, { className?: string }>(function Select({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Select">Select</div>;
});
