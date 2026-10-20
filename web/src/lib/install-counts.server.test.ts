import { describe, expect, it } from "vitest";
import { INSTALL_EVENTS, readInstallCounts, type CounterReader } from "./install-counts.server";
import { counterKey } from "@/lib/kv";

/** A fake KV holding one flat [member, score, …] list per counter key, as Upstash returns it. */
function fake(sets: Record<string, (string | number)[]>): CounterReader & { keys: string[] } {
  const keys: string[] = [];
  return {
    keys,
    async zrange<T extends unknown[]>(key: string) {
      keys.push(key);
      return (sets[key] ?? []) as unknown as T;
    },
  };
}

describe("install counts", () => {
  it("is empty without KV (local and CI builds), so cards show no count", async () => {
    expect(await readInstallCounts(null)).toEqual({});
  });

  it("sums copy + download + install per reference and reads nothing else", async () => {
    const kv = fake({
      [counterKey("copy")]: ["toss", 10, "stripe", "3"],
      [counterKey("download")]: ["toss", 2],
      [counterKey("install")]: ["toss", 1, "karrot", 4],
      [counterKey("select")]: ["toss", 999],
    });
    expect(await readInstallCounts(kv)).toEqual({ toss: 13, stripe: 3, karrot: 4 });
    expect(kv.keys.sort()).toEqual(INSTALL_EVENTS.map(counterKey).sort());
  });

  it("leaves out zero, negative and malformed scores instead of showing them", async () => {
    const kv = fake({
      [counterKey("copy")]: ["a", 0, "b", -2, "c", "x", "d", 5],
      [counterKey("download")]: ["a", 0],
    });
    expect(await readInstallCounts(kv)).toEqual({ d: 5 });
  });
});
