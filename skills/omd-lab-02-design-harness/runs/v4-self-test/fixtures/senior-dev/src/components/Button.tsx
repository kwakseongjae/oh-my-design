import { forwardRef } from 'react';
export const Button = forwardRef<HTMLDivElement, { className?: string }>(function Button({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Button">Button</div>;
});
