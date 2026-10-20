"use client";

import type { ReactNode } from "react";
import { Tabs } from "@base-ui/react/tabs";

/**
 * Docs tabs on Base UI's primitive with the docs styling (docs.css .dx-tab*), usable from
 * server pages: the panels' content is server-rendered and passed in as children. Hidden
 * panels stay mounted so the server HTML carries every tab.
 */
export function DocsTabs({
  label,
  defaultValue,
  tabs,
}: {
  label: string;
  defaultValue?: string;
  tabs: Array<{ value: string; label: ReactNode; panel: ReactNode }>;
}) {
  return (
    <Tabs.Root defaultValue={defaultValue ?? tabs[0]?.value} className="dx-tabs">
      <Tabs.List className="dx-tablist" aria-label={label}>
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.value} value={tab.value} className="dx-tab">
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Panel key={tab.value} value={tab.value} className="dx-tabpanel" keepMounted>
          {tab.panel}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}
