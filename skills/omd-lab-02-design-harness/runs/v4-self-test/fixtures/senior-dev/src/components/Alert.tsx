import { forwardRef } from 'react';
export const Alert = forwardRef<HTMLDivElement, { className?: string }>(function Alert({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Alert">Alert</div>;
});
