import { forwardRef } from 'react';
export const Tabs = forwardRef<HTMLDivElement, { className?: string }>(function Tabs({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Tabs">Tabs</div>;
});
