import { forwardRef } from 'react';
export const Field = forwardRef<HTMLDivElement, { className?: string }>(function Field({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Field">Field</div>;
});
