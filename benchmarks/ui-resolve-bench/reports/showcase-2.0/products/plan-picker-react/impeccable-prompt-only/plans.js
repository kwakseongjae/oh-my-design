/** Fictional ledgers. Every amount is sample data, not a price. */
export const PLANS = [
  {
    id: "day-desk",
    name: "Day Desk",
    hours: "Morning room until 14:00",
    sampleMark: "12 / cycle",
    inclusions: [
      "One assigned morning desk",
      "Reading room until 14:00",
      "Weekly accession list",
      "One volume request per visit",
    ],
  },
  {
    id: "night-folio",
    name: "Night Folio",
    hours: "Room after 17:00",
    sampleMark: "18 / cycle",
    inclusions: [
      "Two evening desks",
      "Periodical drawer",
      "Overnight folio case",
      "Stacks request after close",
    ],
  },
  {
    id: "house-key",
    name: "House Key",
    hours: "All hours of the house",
    sampleMark: "26 / cycle",
    inclusions: [
      "Reserved desk of record",
      "Map case access",
      "One guest slip",
      "Press locker",
      "Night bell after lock",
    ],
  },
];

export const DEFAULT_PLAN_ID = "night-folio";
