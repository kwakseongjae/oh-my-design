"use client";

/**
 * Sticky sample-text input — the copy the user types here renders inside
 * every tile in the gallery and inside the detail view. Makes the preview
 * feel personal before the user has picked anything.
 */

export function SampleInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "Type your brand name or sample text…"}
        className="h-10 w-full rounded-lg border border-border/60 bg-background px-4 text-sm transition-colors focus:border-foreground/50 dark:border-border"
        aria-label="Sample text"
      />
    </div>
  );
}
