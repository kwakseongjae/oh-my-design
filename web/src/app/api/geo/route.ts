import { NextResponse } from "next/server";
import { isEEA } from "@/lib/eea";

export const runtime = "edge";

// Resolve the visitor's country from Vercel's edge geo header so the client can
// decide whether a consent banner is required (EEA/UK/CH → eu:true) or analytics
// can start immediately (everyone else). The header is absent on localhost, so
// dev resolves to eu:false (auto-grant) — which is what lets us verify Mixpanel
// locally. Never cached: the answer is per-request and visitor-specific.
export async function GET(req: Request) {
  // null (not "") when the header is absent, so the client can distinguish
  // "geo unknown" (→ fail closed, show the banner) from a confirmed non-EU
  // country (→ auto-grant). Unknown must never auto-grant an EU visitor.
  const country = req.headers.get("x-vercel-ip-country") || null;
  return NextResponse.json(
    { country, eu: country ? isEEA(country) : false },
    { headers: { "Cache-Control": "private, no-store" } },
  );
}
