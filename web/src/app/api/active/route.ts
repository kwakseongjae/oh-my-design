import { NextResponse } from "next/server";
import {
  getRedis,
  activeDayKey,
  activeDeviceDayKey,
  dayBucket,
  trailingDayBuckets,
  ACTIVE_TTL_SECONDS,
  ACTIVE_DEVICES,
  isActiveDevice,
  VISITOR_ID_RE,
} from "@/lib/kv";

export const runtime = "edge";

/**
 * POST { vid } — record an active visitor for today.
 *
 * Fire-and-forget from the client once per session (see src/lib/active.ts).
 * Privacy-preserving: the id feeds only a per-day HyperLogLog sketch — Redis
 * retains an aggregate cardinality estimate, never the individual ids. This is
 * the consent-independent DAU floor (GA/Mixpanel stay consent-gated).
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid_json" }, { status: 400 });
  }

  const { vid, device } = (body ?? {}) as { vid?: string; device?: string };
  if (typeof vid !== "string" || !VISITOR_ID_RE.test(vid)) {
    return NextResponse.json({ ok: false, reason: "invalid_vid" }, { status: 400 });
  }

  const redis = getRedis();
  if (!redis) return NextResponse.json({ ok: false, reason: "kv_disabled" });

  const day = dayBucket();
  // Total DAU sketch, plus a per-device sketch when a valid device is supplied.
  const keys = [activeDayKey(day)];
  if (isActiveDevice(device)) keys.push(activeDeviceDayKey(day, device));

  for (const key of keys) {
    const added = await redis.pfadd(key, vid);
    // Refresh the TTL only when this PFADD actually changed the sketch — keeps
    // the 35-day rolling window bounded without an EXPIRE on every request.
    if (added) await redis.expire(key, ACTIVE_TTL_SECONDS);
  }

  return NextResponse.json({ ok: true });
}

/**
 * GET — aggregate active-user counts. DAU = today's sketch; rolling WAU / MAU =
 * the PFCOUNT union of the trailing 7 / 30 day sketches. Aggregate vanity
 * numbers only, no PII.
 */
export async function GET() {
  const redis = getRedis();
  if (!redis) return NextResponse.json({ ok: false, reason: "kv_disabled" });

  // pfcount takes a non-empty key list (`[string, ...string[]]`); split the
  // first key out so the trailing-window unions satisfy the tuple type.
  const day = dayBucket();
  const wauKeys = trailingDayBuckets(7).map(activeDayKey);
  const mauKeys = trailingDayBuckets(30).map(activeDayKey);
  const [dau, wau, mau, ...deviceCounts] = await Promise.all([
    redis.pfcount(activeDayKey(day)),
    redis.pfcount(wauKeys[0], ...wauKeys.slice(1)),
    redis.pfcount(mauKeys[0], ...mauKeys.slice(1)),
    ...ACTIVE_DEVICES.map((d) => redis.pfcount(activeDeviceDayKey(day, d))),
  ]);
  const dauByDevice = Object.fromEntries(ACTIVE_DEVICES.map((d, i) => [d, deviceCounts[i]]));

  return NextResponse.json({ ok: true, asOf: day, dau, wau, mau, dauByDevice });
}
