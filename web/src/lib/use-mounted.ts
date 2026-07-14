"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => undefined;

/** Hydration-safe client mount signal without a setState-in-effect pass. */
export function useMounted(): boolean {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
