export function isUnsafeCaptureSurface(value: string): boolean {
  try {
    const url = new URL(value);
    return /(?:^|[./_-])(?:nidlogin|login|signin|signup|register|account|checkout|cart|admin|oauth)(?:[./_?-]|$)/i
      .test(`${url.hostname}${url.pathname}`);
  } catch {
    return true;
  }
}
