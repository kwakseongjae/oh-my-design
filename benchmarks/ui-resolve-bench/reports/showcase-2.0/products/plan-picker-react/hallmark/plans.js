/** Fictional sample rosters. Amounts are sample data, not prices. */
export const plans = [
  {
    id: "desk",
    index: "01",
    name: "desk",
    sampleAmount: "12",
    cycleLabel: "sample cycle",
    summary:
      "A weekday seat in the reading room. Shared stacks, no after-hours key.",
    inclusions: [
      "Weekday reading desk",
      "Shared stacks",
      "Monthly notice",
    ],
  },
  {
    id: "studio",
    index: "02",
    name: "studio",
    sampleAmount: "28",
    cycleLabel: "sample cycle",
    summary:
      "Evening hours and a print locker. Two guest nights on the sample roster.",
    inclusions: [
      "Evening desk",
      "Two guest nights",
      "Print locker",
    ],
  },
  {
    id: "key",
    index: "03",
    name: "key",
    sampleAmount: "46",
    cycleLabel: "sample cycle",
    summary:
      "After-hours key, archive pull, and a workshop seat on the sample roster.",
    inclusions: [
      "After-hours key",
      "Archive pull",
      "Workshop seat",
    ],
  },
];

export const defaultPlanId = "studio";
