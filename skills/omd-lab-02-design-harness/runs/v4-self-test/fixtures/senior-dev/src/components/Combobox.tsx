import { forwardRef } from 'react';
export const Combobox = forwardRef<HTMLDivElement, { className?: string }>(function Combobox({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Combobox">Combobox</div>;
});
