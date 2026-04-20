"use client";

export function NameDescription({
  name,
  tagline,
  description,
  onChange,
}: {
  name: string;
  tagline?: string;
  description?: string;
  onChange: (next: { name?: string; tagline?: string; description?: string }) => void;
}) {
  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          Brand name <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => onChange({ name: e.target.value })}
          placeholder="e.g. Acme"
          className="h-10 w-full rounded-lg border border-border/60 bg-background px-3 text-sm dark:border-border"
          aria-required
        />
      </div>
      <div>
        <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          Tagline (optional)
        </label>
        <input
          type="text"
          value={tagline ?? ""}
          onChange={(e) => onChange({ tagline: e.target.value || undefined })}
          placeholder="e.g. Build the thing you wanted."
          className="h-10 w-full rounded-lg border border-border/60 bg-background px-3 text-sm dark:border-border"
        />
      </div>
      <div>
        <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          Description (optional — appears in §11 narrative)
        </label>
        <textarea
          value={description ?? ""}
          onChange={(e) => onChange({ description: e.target.value || undefined })}
          placeholder="One sentence about what this brand is for."
          rows={2}
          className="w-full resize-none rounded-lg border border-border/60 bg-background px-3 py-2 text-sm dark:border-border"
        />
      </div>
    </div>
  );
}
