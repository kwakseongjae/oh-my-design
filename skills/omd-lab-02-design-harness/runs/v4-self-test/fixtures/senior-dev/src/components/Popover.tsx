import { forwardRef } from 'react';
export const Popover = forwardRef<HTMLDivElement, { className?: string }>(function Popover({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Popover">Popover</div>;
});
