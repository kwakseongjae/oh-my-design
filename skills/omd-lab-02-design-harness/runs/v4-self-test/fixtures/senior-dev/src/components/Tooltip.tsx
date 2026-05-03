import { forwardRef } from 'react';
export const Tooltip = forwardRef<HTMLDivElement, { className?: string }>(function Tooltip({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Tooltip">Tooltip</div>;
});
