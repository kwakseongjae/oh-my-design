import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import htm from "htm";
import {
  comparisonRows,
  DEFAULT_PLAN_ID,
  getPlanById,
  plans,
  SAMPLE_DISCLAIMER,
} from "./plans.js";
import {
  IconCheck,
  IconCheckCircle,
  IconInfo,
  IconMinus,
  IconStar,
  IconTiers,
} from "./icons.js";

const html = htm.bind(h);

const ARROW_DELTA = {
  ArrowRight: 1,
  ArrowDown: 1,
  ArrowLeft: -1,
  ArrowUp: -1,
};

function PlanCard({ plan, selected, index, onSelect, onMove, cardRef }) {
  const pressed = selected ? "true" : "false";
  const descId = `plan-${plan.id}-desc`;
  const amountId = `plan-${plan.id}-amount`;
  const stepCount = index + 1;

  return html`
    <button
      type="button"
      class=${`plan-card${selected ? " is-selected" : ""}${
        plan.recommended ? " is-recommended" : ""
      }`}
      role="radio"
      aria-checked=${pressed}
      aria-pressed=${pressed}
      aria-labelledby=${`plan-${plan.id}-name`}
      aria-describedby=${`${descId} ${amountId}`}
      tabindex=${selected ? "0" : "-1"}
      ref=${cardRef}
      onClick=${() => onSelect(plan.id)}
      onKeyDown=${(event) => onMove(event, index)}
    >
      <span class="plan-card__glow" aria-hidden="true"></span>
      <span class="plan-card__top">
        <span class="plan-card__mark" aria-hidden="true">
          <${IconTiers} steps=${stepCount} size=${28} />
        </span>
        <span class="plan-card__badges">
          <span class="badge badge--sample">Sample data</span>
          ${plan.recommended
            ? html`<span class="badge badge--recommend">
                <${IconStar} size=${14} />
                Recommended
              </span>`
            : null}
        </span>
      </span>
      <span class="plan-card__heading">
        <span class="plan-card__name" id=${`plan-${plan.id}-name`}>${plan.name}</span>
        <span class="plan-card__tagline" id=${descId}>${plan.tagline}</span>
      </span>
      <span class="plan-card__price" id=${amountId}>
        <span class="plan-card__price-note">${plan.amountNote}</span>
        <span class="plan-card__price-value">${plan.amount}</span>
      </span>
      <span class="plan-card__inclusions">
        <span class="visually-hidden">Inclusions</span>
        ${plan.inclusions.map(
          (item) => html`
            <span class="inclusion" key=${item}>
              <${IconCheck} size=${16} />
              <span>${item}</span>
            </span>
          `
        )}
      </span>
      <span class="plan-card__state">
        ${selected
          ? html`<${IconCheckCircle} size=${18} /> Selected`
          : "Select this sample plan"}
      </span>
    </button>
  `;
}

function Summary({ plan }) {
  return html`
    <aside
      class="summary"
      aria-labelledby="summary-heading"
      aria-live="polite"
      aria-atomic="true"
    >
      <p class="eyebrow">Selected plan · Sample data</p>
      <h2 id="summary-heading">${plan.name}</h2>
      <p class="summary__tagline">${plan.tagline}</p>
      <p class="summary__amount">
        <span class="summary__amount-note">${plan.amountNote}</span>
        <span class="summary__amount-value">${plan.amount}</span>
      </p>
      <h3 class="summary__list-title">Inclusions</h3>
      <ul class="summary__list">
        ${plan.inclusions.map(
          (item) => html`
            <li key=${item}>
              <${IconCheck} size=${16} />
              <span>${item}</span>
            </li>
          `
        )}
      </ul>
      <p class="summary__hint">
        This panel follows the plan whose card is pressed and checked.
      </p>
    </aside>
  `;
}

function inclusionCell(value) {
  if (typeof value === "string") {
    return html`<span class="cell-count">${value}</span>`;
  }
  if (value) {
    return html`
      <span class="cell-yes">
        <${IconCheck} size=${16} />
        <span class="visually-hidden">Included</span>
      </span>
    `;
  }
  return html`
    <span class="cell-no">
      <${IconMinus} size=${16} />
      <span class="visually-hidden">Not included</span>
    </span>
  `;
}

function useWideCompare() {
  const [wide, setWide] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(min-width: 768px)").matches;
  });

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => setWide(media.matches);
    onChange();
    if (media.addEventListener) {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }
    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  return wide;
}

function ComparisonTable({ selectedId }) {
  const wide = useWideCompare();

  return html`
    <section class="compare" aria-labelledby="compare-heading">
      <div class="compare__intro">
        <h2 id="compare-heading">Inclusion comparison</h2>
        <p>Checkmarks show what each sample plan includes. Color is not the only cue.</p>
      </div>
      ${wide
        ? null
        : html`
            <ul class="compare-stack">
              ${comparisonRows.map(
                (row) => html`
                  <li class="compare-stack__row" key=${`stack-${row.label}`}>
                    <p class="compare-stack__label">${row.label}</p>
                    <dl class="compare-stack__plans">
                      ${plans.map(
                        (plan) => html`
                          <div
                            class=${`compare-stack__item${
                              plan.id === selectedId ? " is-current" : ""
                            }`}
                            key=${`stack-${row.label}-${plan.id}`}
                          >
                            <dt>
                              ${plan.name}
                              ${plan.id === selectedId
                                ? html`<span class="visually-hidden"> (selected)</span>`
                                : null}
                            </dt>
                            <dd>${inclusionCell(row[plan.id])}</dd>
                          </div>
                        `
                      )}
                    </dl>
                  </li>
                `
              )}
            </ul>
          `}
      ${wide
        ? html`
      <div class="table-wrap">
        <table class="compare-table">
          <caption class="visually-hidden">
            Sample inclusion matrix for Shore, Channel, and Horizon
          </caption>
          <thead>
            <tr>
              <th scope="col">Inclusion</th>
              ${plans.map(
                (plan) => html`
                  <th
                    scope="col"
                    class=${plan.id === selectedId ? "is-current" : ""}
                    key=${`head-${plan.id}`}
                  >
                    ${plan.name}
                    ${plan.id === selectedId
                      ? html`<span class="visually-hidden"> (selected)</span>`
                      : null}
                  </th>
                `
              )}
            </tr>
          </thead>
          <tbody>
            ${comparisonRows.map(
              (row) => html`
                <tr key=${row.label}>
                  <th scope="row">${row.label}</th>
                  ${plans.map(
                    (plan) => html`
                      <td
                        class=${plan.id === selectedId ? "is-current" : ""}
                        key=${`${row.label}-${plan.id}`}
                      >
                        ${inclusionCell(row[plan.id])}
                      </td>
                    `
                  )}
                </tr>
              `
            )}
          </tbody>
        </table>
      </div>
        `
        : null}
    </section>
  `;
}

export function App() {
  const [selectedId, setSelectedId] = useState(DEFAULT_PLAN_ID);
  const cardRefs = useRef({});
  const selectedPlan = getPlanById(selectedId);

  const selectPlan = (id) => {
    setSelectedId(id);
  };

  const moveSelection = (event, index) => {
    if (event.key === "Home") {
      event.preventDefault();
      selectPlan(plans[0].id);
      cardRefs.current[plans[0].id]?.focus();
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      const last = plans[plans.length - 1];
      selectPlan(last.id);
      cardRefs.current[last.id]?.focus();
      return;
    }
    const delta = ARROW_DELTA[event.key];
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + plans.length) % plans.length;
    const nextId = plans[next].id;
    selectPlan(nextId);
    cardRefs.current[nextId]?.focus();
  };

  return html`
    <div class="page">
      <a class="skip-link" href="#main">Skip to plan comparison</a>

      <header class="hero">
        <img
          class="hero__art"
          src="../assets/header-art.jpg"
          alt="Abstract geometric illustration of three ascending glass planes in teal and indigo"
          width="1280"
          height="720"
        />
        <div class="hero__scrim" aria-hidden="true"></div>
        <div class="hero__copy">
          <p class="eyebrow">Harbor Membership · Sample catalog</p>
          <h1>Compare three sample memberships</h1>
          <p class="hero__lede">
            A fictional reading-room studio. Choose a plan with the keyboard or
            pointer — the summary lists that plan’s name and inclusions.
          </p>
        </div>
      </header>

      <div class="notice" role="note">
        <${IconInfo} size=${18} />
        <p>${SAMPLE_DISCLAIMER}</p>
      </div>

      <main id="main" class="main">
        <div class="layout">
          <section class="picker" aria-labelledby="plans-heading">
            <div class="picker__intro">
              <h2 id="plans-heading">Sample plans</h2>
              <p>
                Three fictional tiers. Channel is pre-selected as the recommended
                sample. Arrow keys move the checked plan; Space or Enter keeps the
                focused card selected.
              </p>
            </div>
            <div
              class="plan-grid"
              role="radiogroup"
              aria-labelledby="plans-heading"
              aria-describedby="plans-hint"
            >
              ${plans.map(
                (plan, index) => html`
                  <${PlanCard}
                    key=${plan.id}
                    plan=${plan}
                    index=${index}
                    selected=${plan.id === selectedId}
                    onSelect=${selectPlan}
                    onMove=${moveSelection}
                    cardRef=${(node) => {
                      cardRefs.current[plan.id] = node;
                    }}
                  />
                `
              )}
            </div>
            <p id="plans-hint" class="picker__hint">
              Selected visuals, <code>aria-pressed</code>, and
              <code>aria-checked</code> share one piece of state.
            </p>
          </section>

          <${Summary} plan=${selectedPlan} />
        </div>

        <${ComparisonTable} selectedId=${selectedId} />
      </main>

      <footer class="footer">
        <p>${SAMPLE_DISCLAIMER}</p>
      </footer>
    </div>
  `;
}
