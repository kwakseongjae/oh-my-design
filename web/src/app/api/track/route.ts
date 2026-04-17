import { NextResponse } from "next/server";
import { counterKey, getRedis, REFERENCE_ID_RE, TRACK_EVENTS, type TrackEvent } from "@/lib/kv";

export const runtime = "edge";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid_json" }, { status: 400 });
  }

  const { event, reference } = (body ?? {}) as { event?: string; reference?: string };

  if (typeof event !== "string" || !TRACK_EVENTS.includes(event as TrackEvent)) {
    return NextResponse.json({ ok: false, reason: "invalid_event" }, { status: 400 });
  }
  if (typeof reference !== "string" || !REFERENCE_ID_RE.test(reference)) {
    return NextResponse.json({ ok: false, reason: "invalid_reference" }, { status: 400 });
  }

  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ ok: false, reason: "kv_disabled" });
  }

  await redis.zincrby(counterKey(event as TrackEvent), 1, reference);
  return NextResponse.json({ ok: true });
}
