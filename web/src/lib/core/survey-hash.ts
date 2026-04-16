import type { Overrides } from './types';

/**
 * Survey result payload — everything the CLI needs to generate DESIGN.md.
 */
export interface SurveyResult {
  refId: string;
  overrides: Overrides;
  preferences: {
    mood: string;
    typographyChar: string;
    buttonStyle: string;
    inputStyle: string;
    headerStyle: string;
    cardStyle: string;
    depthStyle: string;
    density: string;
    saturation: string;
  };
  components: string[];
}

/**
 * Encode survey result as OMD-{base64url} string.
 *
 * Format: JSON → base64url (different from config-hash which uses pipe-delimited).
 * Prefixed with "OMD-" for easy detection in terminal input.
 */
export function encodeSurveyResult(result: SurveyResult): string {
  const json = JSON.stringify(result);
  if (typeof window !== 'undefined') {
    return 'OMD-' + btoa(unescape(encodeURIComponent(json)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }
  return 'OMD-' + Buffer.from(json).toString('base64url');
}

/**
 * Decode OMD-{base64url} string back into SurveyResult.
 */
export function decodeSurveyResult(code: string): SurveyResult {
  const b64part = code.replace(/^OMD-/, '');
  let b64 = b64part.replace(/-/g, '+').replace(/_/g, '/');
  while (b64.length % 4) b64 += '=';

  let decoded: string;
  if (typeof window !== 'undefined') {
    decoded = decodeURIComponent(escape(atob(b64)));
  } else {
    decoded = Buffer.from(b64, 'base64').toString('utf-8');
  }

  return JSON.parse(decoded) as SurveyResult;
}
