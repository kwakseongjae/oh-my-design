export function Card({ className = '' }: { className?: string }) {
  return <div className={`bg-brand-500 text-white px-4 py-2 rounded ${className}`}>Card</div>;
}
