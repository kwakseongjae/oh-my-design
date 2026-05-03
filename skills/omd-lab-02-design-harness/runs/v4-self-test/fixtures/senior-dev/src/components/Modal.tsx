import { forwardRef } from 'react';
export const Modal = forwardRef<HTMLDivElement, { className?: string }>(function Modal({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="Modal">Modal</div>;
});
