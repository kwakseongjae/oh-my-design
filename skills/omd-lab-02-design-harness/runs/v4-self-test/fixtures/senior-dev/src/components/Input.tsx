import { forwardRef } from 'react';
export const Input = forwardRef<HTMLDivElement, { className?: string }>(function Input({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Input">Input</div>;
});
