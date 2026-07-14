import { DEFAULT_BUILDER_COMPONENTS } from "@/lib/core/builder-prompt";
import { encodeConfig } from "@/lib/core/config-hash";

export function canonicalBuilderPreviewPath(id: string): string {
  const cfg = encodeConfig(
    id,
    { primaryColor: "", fontFamily: "", headingWeight: "", borderRadius: "", darkMode: false },
    DEFAULT_BUILDER_COMPONENTS,
    {},
  );
  return `/builder?step=preview&ref=${encodeURIComponent(id)}&cfg=${cfg}`;
}
