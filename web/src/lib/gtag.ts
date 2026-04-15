export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export function event(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
}
