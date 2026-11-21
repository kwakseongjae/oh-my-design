"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type { ScreensLandingRow } from "./landing-row";

// Its own chunk, with its stylesheet: a landing without local screens never renders this slot, so never downloads
// either (the same pattern as the item page's Screens tab).
const Row = dynamic(() => import("./landing-row").then((m) => m.ScreensLandingRow));

export function ScreensLandingRowSlot(props: ComponentProps<typeof ScreensLandingRow>) {
  return <Row {...props} />;
}
