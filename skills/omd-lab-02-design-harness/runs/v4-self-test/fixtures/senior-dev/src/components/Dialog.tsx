import { forwardRef } from 'react';
export const Dialog = forwardRef<HTMLDivElement, { className?: string }>(function Dialog({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Dialog">Dialog</div>;
});
