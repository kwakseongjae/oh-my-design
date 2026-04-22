import type { FontScript } from "@/lib/fonts/types";

/** Short, industry-standard language-script labels. `hangul` → `KO`,
 *  `latin` → `EN`. Renders nicer than raw tag names inside meta rows. */
const SCRIPT_LABEL: Record<FontScript, string> = {
  hangul: "KO",
  latin: "EN",
  japanese: "JP",
  chinese: "ZH",
};

export function scriptLabel(script: FontScript): string {
  return SCRIPT_LABEL[script] ?? script;
}

export function scriptLabels(scripts: FontScript[], sep = " + "): string {
  return scripts.map(scriptLabel).join(sep);
}
