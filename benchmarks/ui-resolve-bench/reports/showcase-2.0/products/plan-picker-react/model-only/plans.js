/** Fictional catalog. Every label and amount is sample data, not an offer. */
export const SAMPLE_DISCLAIMER =
  "All plans and amounts are sample data — not a real offer or price.";

export const features = [
  { id: "reading", label: "Reading room on public days" },
  { id: "bulletin", label: "Seasonal bulletin" },
  { id: "previews", label: "Member preview evenings" },
  { id: "guests", label: "Guest introductions (sample count)" },
  { id: "workshops", label: "Workshop credits (sample)" },
  { id: "archive", label: "Archive reproductions" },
  { id: "studio", label: "After-hours studio" },
  { id: "curator", label: "Curator correspondence" },
];

export const plans = [
  {
    id: "daylight",
    name: "Daylight",
    kicker: "Sample introduction",
    amountLabel: "Sample amount",
    amount: "12",
    unit: "units / cycle",
    blurb: "A light foothold: the reading room and the seasonal bulletin.",
    recommended: false,
    includes: [
      "Reading room on public days",
      "Seasonal bulletin",
      "One guest introduction (sample)",
    ],
    cells: {
      reading: true,
      bulletin: true,
      previews: false,
      guests: "1",
      workshops: "—",
      archive: false,
      studio: false,
      curator: false,
    },
  },
  {
    id: "equinox",
    name: "Equinox",
    kicker: "Sample working membership",
    amountLabel: "Sample amount",
    amount: "29",
    unit: "units / cycle",
    blurb: "Preview evenings, workshop credits, and the print archive.",
    recommended: true,
    includes: [
      "Everything in Daylight",
      "Member preview evenings",
      "Four workshop credits (sample)",
      "Archive reproductions",
      "Four guest introductions (sample)",
    ],
    cells: {
      reading: true,
      bulletin: true,
      previews: true,
      guests: "4",
      workshops: "4",
      archive: true,
      studio: false,
      curator: false,
    },
  },
  {
    id: "solstice",
    name: "Solstice",
    kicker: "Sample complete circle",
    amountLabel: "Sample amount",
    amount: "47",
    unit: "units / cycle",
    blurb: "After-hours studio and curator correspondence, plus the full circle.",
    recommended: false,
    includes: [
      "Everything in Equinox",
      "After-hours studio",
      "Curator correspondence",
      "Eight workshop credits (sample)",
      "Guest introductions without a sample cap",
    ],
    cells: {
      reading: true,
      bulletin: true,
      previews: true,
      guests: "No cap",
      workshops: "8",
      archive: true,
      studio: true,
      curator: true,
    },
  },
];

export function planById(id) {
  return plans.find((plan) => plan.id === id) ?? null;
}
