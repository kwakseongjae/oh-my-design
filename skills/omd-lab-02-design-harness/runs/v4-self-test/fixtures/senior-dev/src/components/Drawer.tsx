import { forwardRef } from 'react';
export const Drawer = forwardRef<HTMLDivElement, { className?: string }>(function Drawer({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Drawer">Drawer</div>;
});
