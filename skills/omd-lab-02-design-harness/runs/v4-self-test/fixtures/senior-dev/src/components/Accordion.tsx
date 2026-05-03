import { forwardRef } from 'react';
export const Accordion = forwardRef<HTMLDivElement, { className?: string }>(function Accordion({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Accordion">Accordion</div>;
});
