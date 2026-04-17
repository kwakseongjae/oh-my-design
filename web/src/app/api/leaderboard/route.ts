import { NextResponse } from "next/server";
import { counterKey, getRedis, TRACK_EVENTS, type TrackEvent } from "@/lib/kv";

export const runtime = "edge";
export const revalidate = 30;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const event = (searchParams.get("event") ?? "select") as TrackEvent;
  const limit = Math.min(Math.max(parseInt(searchParams.get("limit") ?? "10", 10) || 10, 1), 64);

  if (!TRACK_EVENTS.includes(event)) {
    return NextResponse.json({ ok: false, reason: "invalid_event" }, { status: 400 });
  }

  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ ok: false, reason: "kv_disabled", leaderboard: [] });
  }

  const raw = await redis.zrange<(string | number)[]>(counterKey(event), 0, limit - 1, {
    rev: true,
    withScores: true,
  });

  const leaderboard: { reference: string; count: number }[] = [];
  for (let i = 0; i < raw.length; i += 2) {
    leaderboard.push({ reference: String(raw[i]), count: Number(raw[i + 1]) });
  }

  return NextResponse.json({ ok: true, event, leaderboard });
}
