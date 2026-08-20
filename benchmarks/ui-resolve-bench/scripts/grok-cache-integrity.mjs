/**
 * grok-cache-integrity.mjs — shared models_cache.json byte-gate analysis for
 * the grok-4.6 benchmark lane.
 *
 * Imported by BOTH run-grok.mjs (production path) and
 * test-run-grok-contract.mjs (adversarial path) so the tests exercise the
 * exact code the runner executes. A copied implementation drifted once
 * already (grok reviewer C, 2026-08-15: escaped-quote etag regression stayed
 * green in the copy); sharing the module closes that class of gap.
 *
 * Contract (seed-locked): only the volatile fields below may change between
 * the pre-provider and post-provider cache snapshots. Any other difference is
 * integrity drift and the cell fail-closes as infrastructure-invalid.
 *
 * The byte-level proof reconstructs the post bytes from the pre bytes by
 * replacing volatile JSON string values only. Real-world etag values are
 * weak-validator strings with ESCAPED quotes inside the JSON literal, e.g.
 *   "etag": "W/\"17945962175790342248\""
 * so the value pattern must consume escape sequences: (?:[^"\\]|\\.)*
 * A naive [^"]* stops at the first escaped quote and mis-splices the
 * reconstruction (observed on this host's live cache, 2026-08-15).
 */

import { createHash } from "node:crypto";

export const CACHE_VOLATILE_FIELDS = Object.freeze(["fetched_at", "etag"]);

const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

export function collectLeafDiffs(before, after, path = "") {
  if (
    before === null ||
    after === null ||
    typeof before !== "object" ||
    typeof after !== "object"
  ) {
    return [];
  }
  const diffs = [];
  const allKeys = new Set([...Object.keys(before), ...Object.keys(after)]);
  for (const key of allKeys) {
    const fullPath = path ? `${path}.${key}` : key;
    const bVal = before[key];
    const aVal = after[key];
    const bIsObj =
      bVal !== null && typeof bVal === "object" && !Array.isArray(bVal);
    const aIsObj =
      aVal !== null && typeof aVal === "object" && !Array.isArray(aVal);
    if (bIsObj && aIsObj) {
      diffs.push(...collectLeafDiffs(bVal, aVal, fullPath));
    } else if (JSON.stringify(bVal) !== JSON.stringify(aVal)) {
      diffs.push({ path: fullPath, leafKey: key });
    }
  }
  return diffs;
}

/**
 * Analyse pre/post cache snapshots.
 *
 * @param {{preCacheBytes: Buffer|null, postCacheBytes: Buffer|null,
 *          volatileFields?: readonly string[]}} input
 * @returns {{applicable: boolean, fullBytesChanged: boolean,
 *           volatileOnlyChange: boolean,
 *           proof: {pass: boolean, reason: string|null},
 *           preSha256: string|null, postSha256: string|null}}
 */
export function analyseCacheIntegrity({
  preCacheBytes,
  postCacheBytes,
  volatileFields = CACHE_VOLATILE_FIELDS,
}) {
  const applicable = preCacheBytes !== null;
  const preSha256 = preCacheBytes ? sha256(preCacheBytes) : null;
  const postSha256 = postCacheBytes ? sha256(postCacheBytes) : null;
  const fullBytesChanged =
    applicable &&
    preSha256 !== null &&
    postSha256 !== null &&
    preSha256 !== postSha256;

  let volatileOnlyChange = false;
  let proof = { pass: false, reason: "not-applicable" };

  if (applicable && fullBytesChanged && postCacheBytes !== null) {
    const preText = preCacheBytes.toString("utf8");
    const postText = postCacheBytes.toString("utf8");

    let preJson = null;
    let postJson = null;
    try {
      preJson = JSON.parse(preText);
      postJson = JSON.parse(postText);
    } catch {
      preJson = null;
      postJson = null;
    }

    let nonVolatileChanged = false;
    if (preJson !== null && postJson !== null) {
      const diffs = collectLeafDiffs(preJson, postJson, "");
      for (const diff of diffs) {
        if (!volatileFields.includes(diff.leafKey)) {
          nonVolatileChanged = true;
          break;
        }
      }
    } else {
      // Cannot parse JSON — treat as non-volatile drift
      nonVolatileChanged = true;
    }

    if (!nonVolatileChanged) {
      // Byte-level proof: replacing volatile field string values in the pre
      // bytes with the post values must yield the exact post bytes.
      let probeText = preText;
      let proofPass = true;

      for (const field of volatileFields) {
        const escapedField = field.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        // Matches a full JSON string literal including escape sequences:
        //   "field_name": "value with \" escapes"
        const pattern = new RegExp(
          `("${escapedField}"\\s*:\\s*)"((?:[^"\\\\]|\\\\.)*)"`,
          "g",
        );
        const preMatches = [...preText.matchAll(pattern)];
        const postMatches = [...postText.matchAll(pattern)];
        if (preMatches.length !== postMatches.length) {
          proofPass = false;
          break;
        }
        let offset = 0;
        for (let i = 0; i < preMatches.length; i += 1) {
          const pm = preMatches[i];
          const qm = postMatches[i];
          probeText =
            probeText.slice(0, pm.index + offset) +
            qm[0] +
            probeText.slice(pm.index + offset + pm[0].length);
          offset += qm[0].length - pm[0].length;
        }
      }

      if (proofPass && probeText === postText) {
        volatileOnlyChange = true;
        proof = { pass: true, reason: null };
      } else if (proofPass) {
        proof = {
          pass: false,
          reason: "raw-bytes-differ-outside-volatile-field-values",
        };
      } else {
        proof = {
          pass: false,
          reason: "volatile-field-occurrence-count-mismatch-between-snapshots",
        };
      }
    } else {
      proof = { pass: false, reason: "non-volatile-json-field-changed" };
    }
  }

  return {
    applicable,
    fullBytesChanged,
    volatileOnlyChange,
    proof,
    preSha256,
    postSha256,
  };
}
