"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type { ScreensWall } from "./landing-wall";

// Its own chunk, with its stylesheet: a landing without screens never renders this slot, so never downloads either
// (the same pattern as the item page's Screens tab).
const Wall = dynamic(() => import("./landing-wall").then((m) => m.ScreensWall));

export function ScreensWallSlot(props: ComponentProps<typeof ScreensWall>) {
  return <Wall {...props} />;
}
