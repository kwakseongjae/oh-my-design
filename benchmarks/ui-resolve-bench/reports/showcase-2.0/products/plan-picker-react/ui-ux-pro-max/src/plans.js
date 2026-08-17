/** Fictional membership tiers. Names and amounts are sample data only. */

export const SAMPLE_DISCLAIMER =
  "All plan names and amounts are sample data — not real prices or offers.";

export const plans = [
  {
    id: "shore",
    name: "Shore",
    tagline: "Sample starter access",
    amount: "12 units / cycle",
    amountNote: "Sample amount",
    recommended: false,
    inclusions: [
      "Weekday reading room",
      "Monthly member letter",
      "Community board",
    ],
  },
  {
    id: "channel",
    name: "Channel",
    tagline: "Sample studio plan",
    amount: "28 units / cycle",
    amountNote: "Sample amount",
    recommended: true,
    inclusions: [
      "Everything in Shore",
      "Evening workshops",
      "Priority room booking",
      "Two guest day-passes (sample)",
    ],
  },
  {
    id: "horizon",
    name: "Horizon",
    tagline: "Sample full-access membership",
    amount: "54 units / cycle",
    amountNote: "Sample amount",
    recommended: false,
    inclusions: [
      "Everything in Channel",
      "Curator hours",
      "Archive stacks",
      "Four guest day-passes (sample)",
      "Quarterly studio day",
    ],
  },
];

export const DEFAULT_PLAN_ID = "channel";

export const comparisonRows = [
  { label: "Weekday reading room", shore: true, channel: true, horizon: true },
  { label: "Monthly member letter", shore: true, channel: true, horizon: true },
  { label: "Community board", shore: true, channel: true, horizon: true },
  { label: "Evening workshops", shore: false, channel: true, horizon: true },
  { label: "Priority room booking", shore: false, channel: true, horizon: true },
  { label: "Guest day-passes (sample)", shore: false, channel: "2", horizon: "4" },
  { label: "Curator hours", shore: false, channel: false, horizon: true },
  { label: "Archive stacks", shore: false, channel: false, horizon: true },
  { label: "Quarterly studio day", shore: false, channel: false, horizon: true },
];

export function getPlanById(id) {
  return plans.find((plan) => plan.id === id) || plans[0];
}
