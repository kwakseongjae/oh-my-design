import { cn } from './cn';
export function Card({ on }) {
  return <p className={cn('text-sm', on && 'italic')}>日本語の本文です。</p>;
}
