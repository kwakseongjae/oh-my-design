import { getHomepageUrl } from "@/data/registry.generated";
import { getDesignSystem, type DesignSystemInfo } from "@/lib/design-systems";
import { getLogoRef, type LogoRef } from "@/lib/logos";

/**
 * Registry-derived catalog fields the builder preview header needs (official
 * DS link, homepage, logo). Served with the reference detail so the builder's
 * client bundle never imports the 2 MB registry to look them up. Kept under
 * one `catalog` key so the reference payload itself is unchanged.
 */
export interface ReferenceCatalogFields {
  designSystem: DesignSystemInfo | null;
  homepageUrl: string | null;
  logo: LogoRef | null;
}

export function referenceCatalogFields(id: string): ReferenceCatalogFields {
  return {
    designSystem: getDesignSystem(id),
    homepageUrl: getHomepageUrl(id),
    logo: getLogoRef(id),
  };
}
