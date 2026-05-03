import { forwardRef } from 'react';
export const Avatar = forwardRef<HTMLDivElement, { className?: string }>(function Avatar({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Avatar">Avatar</div>;
});
