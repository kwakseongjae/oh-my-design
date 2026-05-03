import { forwardRef } from 'react';
export const Spinner = forwardRef<HTMLDivElement, { className?: string }>(function Spinner({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Spinner">Spinner</div>;
});
