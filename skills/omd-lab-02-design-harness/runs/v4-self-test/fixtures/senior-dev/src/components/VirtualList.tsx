import { forwardRef } from 'react';
export const VirtualList = forwardRef<HTMLDivElement, { className?: string }>(function VirtualList({ className = '' }, ref) {
  return <div ref={ref} className={`px-3 py-2 rounded-md ${className}`} data-component="VirtualList">VirtualList</div>;
});
