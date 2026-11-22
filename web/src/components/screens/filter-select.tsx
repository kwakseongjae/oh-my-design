"use client";

/**
 * One filter of the /screens gallery: a 40px control (44 on touch) that names the filter and shows its current
 * value, and opens a short list (Base UI's Select, the primitive components/ui/select.tsx wraps: a combobox button and
 * a listbox, arrow keys, typeahead, Escape, focus back on the button). Styled here with --sq-* tokens
 * (brand-a/screens-gallery.css, .sq-gal-f and .sq-gal-menu).
 *
 * No layout shift when the value changes: every option's label sits in the same grid cell, hidden, so the button is
 * always as wide as its longest value. Not modal, so opening it never locks the page's scroll (no scrollbar jump).
 * The list is portalled to the body, outside .sq-root, so it sets its own font and language.
 */

import { useId } from "react";
import { Select } from "@base-ui/react/select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import type { FilterOption } from "@/lib/screens/gallery";

export function FilterSelect({
  label,
  value,
  options,
  onChange,
  lang,
}: {
  label: string;
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
  lang: string;
}) {
  const id = useId();
  const current = options.find((o) => o.value === value) ?? options[0];
  return (
    <Select.Root
      value={current?.value ?? null}
      items={options}
      modal={false}
      onValueChange={(next) => {
        if (typeof next === "string" && next !== value) onChange(next);
      }}
    >
      <Select.Trigger className="sq-gal-f" aria-labelledby={`${id}-k ${id}-v`}>
        <span id={`${id}-k`} className="sq-gal-f-k">
          {label}
        </span>
        <span className="sq-gal-f-v">
          {options.map((o) => (
            <span key={o.value} aria-hidden="true" className="sq-gal-f-w">
              {o.label}
            </span>
          ))}
          <span id={`${id}-v`} className="sq-gal-f-c">
            {current?.label}
          </span>
        </span>
        <ChevronDownIcon aria-hidden="true" className="sq-gal-f-i" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner className="sq-gal-pos" side="bottom" align="start" sideOffset={6} alignItemWithTrigger={false}>
          <Select.Popup className="sq-gal-menu" lang={lang}>
            {options.map((o) => (
              <Select.Item key={o.value} value={o.value} className="sq-gal-opt">
                <Select.ItemText>{o.label}</Select.ItemText>
                <Select.ItemIndicator className="sq-gal-opt-i">
                  <CheckIcon aria-hidden="true" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
