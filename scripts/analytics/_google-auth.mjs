// Dependency-free Google service-account auth. Signs a JWT with the SA private
// key (RS256 via node:crypto) and exchanges it for an OAuth2 access token. No
// google-auth-library / googleapis dependency required.
import crypto from "node:crypto";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { env, repoRoot } from "./_env.mjs";

const DEFAULT_KEY = path.join(repoRoot, "scripts", "analytics", ".secrets", "sa.json");

/** Load the service-account JSON from GOOGLE_SA_KEY_FILE, GOOGLE_SA_KEY_JSON, or the default path. */
export function loadServiceAccount() {
  const inline = env("GOOGLE_SA_KEY_JSON");
  if (inline) return JSON.parse(inline);
  const file = env("GOOGLE_SA_KEY_FILE", DEFAULT_KEY);
  if (!existsSync(file)) {
    throw new Error(
      `Service-account key not found. Drop the JSON at scripts/analytics/.secrets/sa.json ` +
        `or set GOOGLE_SA_KEY_FILE / GOOGLE_SA_KEY_JSON. (looked at: ${file})`,
    );
  }
  return JSON.parse(readFileSync(file, "utf8"));
}

const b64url = (buf) => Buffer.from(buf).toString("base64url");

/** Exchange the SA for a short-lived access token scoped to the given scopes. */
export async function getAccessToken(scopes) {
  const sa = loadServiceAccount();
  const tokenUri = sa.token_uri || "https://oauth2.googleapis.com/token";
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = b64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: scopes.join(" "),
      aud: tokenUri,
      exp: now + 3600,
      iat: now,
    }),
  );
  const signingInput = `${header}.${claim}`;
  const signature = crypto.createSign("RSA-SHA256").update(signingInput).sign(sa.private_key);
  const jwt = `${signingInput}.${b64url(signature)}`;

  const res = await fetch(tokenUri, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) {
    throw new Error(`Token exchange failed (${res.status}): ${await res.text()}`);
  }
  const json = await res.json();
  return json.access_token;
}

export { DEFAULT_KEY };
