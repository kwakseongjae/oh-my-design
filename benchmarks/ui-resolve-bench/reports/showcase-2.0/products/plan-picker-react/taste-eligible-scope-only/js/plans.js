/** Fictional memberships. Every name and amount is sample data. */
export const plans = [
  {
    id: "landing",
    name: "Landing",
    tagline: "Drop-in weekday mornings",
    amountLabel: "42 / month",
    sampleNote: "Sample amount",
    inclusions: [
      "Shared desk, weekday mornings",
      "House tea and still water",
      "Two guest mornings each year",
      "Mail held for 7 days",
    ],
  },
  {
    id: "terrace",
    name: "Terrace",
    tagline: "A named seat and evening hours",
    amountLabel: "86 / month",
    sampleNote: "Sample amount",
    inclusions: [
      "Named seat in the quiet room",
      "House tea, still water, and evening kitchen",
      "Two guest days each month",
      "Locker and mail hold",
      "Weekend hours",
    ],
  },
  {
    id: "overlook",
    name: "Overlook",
    tagline: "Full house key",
    amountLabel: "148 / month",
    sampleNote: "Sample amount",
    inclusions: [
      "Private desk or small room",
      "Kitchen and tea bar",
      "Four guest days each month",
      "Overnight locker and mail hold",
      "Weekend and late hours",
      "One private room booking each quarter",
    ],
  },
];

export function planById(id) {
  return plans.find((plan) => plan.id === id) || null;
}
