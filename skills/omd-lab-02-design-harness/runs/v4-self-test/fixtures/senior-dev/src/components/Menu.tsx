import { forwardRef } from 'react';
export const Menu = forwardRef<HTMLDivElement, { className?: string }>(function Menu({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Menu">Menu</div>;
});
