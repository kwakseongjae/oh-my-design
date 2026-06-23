// Minimal .env loader (no dotenv dependency). Loads, in order of increasing
// precedence: web/.env.local → scripts/analytics/.env → process.env.
// Values already present in process.env always win so CI / shell overrides hold.
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

function parseEnv(file) {
  const out = {};
  if (!existsSync(file)) return out;
  for (const raw of readFileSync(file, "utf8").split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

const merged = {
  ...parseEnv(path.join(repoRoot, "web", ".env.local")),
  ...parseEnv(path.join(repoRoot, "scripts", "analytics", ".env")),
};

export function env(key, fallback = undefined) {
  return process.env[key] ?? merged[key] ?? fallback;
}

export function requireEnv(key) {
  const v = env(key);
  if (!v) throw new Error(`Missing required config: ${key} (set it in web/.env.local or scripts/analytics/.env)`);
  return v;
}
