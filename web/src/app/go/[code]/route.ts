import { NextResponse, after } from "next/server";
import { getRedis } from "@/lib/kv";
import { buildGoTarget, goClickKey, GO_COUNTER_TTL_SECONDS, isBotUserAgent, lookupGoLink } from "@/lib/go";

/**
 * GET /go/<code> — post-level short link. 302 to the registered same-site target
 * with UTMs, and count the click server-side (consent-free). No IP, cookie or UA
 * is stored: one Redis hash per code and UTC day, one field per country.
 * Counting runs in after() and can never change the redirect.
 */
export async function GET(request: Request, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const origin = new URL(request.url).origin;
  const link = lookupGoLink(code);
  const target = link ? buildGoTarget(link, origin) : null;
  if (!link || !target) return NextResponse.redirect(new URL("/", origin), 302);

  if (!isBotUserAgent(request.headers.get("user-agent"))) {
    const raw = (request.headers.get("x-vercel-ip-country") ?? "").toUpperCase();
    const country = /^[A-Z]{2}$/.test(raw) ? raw : "XX";
    const day = new Date().toISOString().slice(0, 10); // UTC YYYY-MM-DD
    after(async () => {
      try {
        const redis = getRedis();
        if (!redis) return;
        const key = goClickKey(code, day);
        await Promise.all([redis.hincrby(key, country, 1), redis.expire(key, GO_COUNTER_TTL_SECONDS)]);
      } catch {
        // Best-effort counter; the redirect has already been sent.
      }
    });
  }
  return NextResponse.redirect(target, 302);
}
