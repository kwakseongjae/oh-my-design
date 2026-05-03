import { forwardRef } from 'react';
export const Card = forwardRef<HTMLDivElement, { className?: string }>(function Card({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Card">Card</div>;
});
