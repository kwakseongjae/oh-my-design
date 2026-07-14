function assertDays(days) {
  if (!Number.isInteger(days) || days < 1) throw new Error(`days must be a positive integer, got ${days}`);
}

function utcDateOnly(value) {
  return value.toISOString().slice(0, 10);
}

/** GA4 relative range containing exactly N complete days, never today. */
export function ga4CompleteDateRange(days) {
  assertDays(days);
  return { startDate: `${days}daysAgo`, endDate: "yesterday" };
}

/** GSC ISO range containing exactly N days and ending at the reporting lag. */
export function gscCompleteDateRange(days, { lagDays = 3, now = new Date() } = {}) {
  assertDays(days);
  const end = new Date(now);
  end.setUTCDate(end.getUTCDate() - lagDays);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - (days - 1));
  return { startDate: utcDateOnly(start), endDate: utcDateOnly(end) };
}

export function utcDayBucket(value) {
  return utcDateOnly(value).replace(/-/g, "");
}

/** Most-recent-first UTC buckets ending yesterday. */
export function trailingCompleteUtcBuckets(days, now = new Date()) {
  assertDays(days);
  const end = new Date(now);
  end.setUTCDate(end.getUTCDate() - 1);
  return Array.from({ length: days }, (_, index) => {
    const day = new Date(end);
    day.setUTCDate(day.getUTCDate() - index);
    return utcDayBucket(day);
  });
}
