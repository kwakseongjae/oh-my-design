import { forwardRef } from 'react';
export const Form = forwardRef<HTMLDivElement, { className?: string }>(function Form({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Form">Form</div>;
});
