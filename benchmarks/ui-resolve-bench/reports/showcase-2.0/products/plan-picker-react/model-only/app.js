import { h, render } from "preact";
import { useState, useCallback, useEffect } from "preact/hooks";
import htm from "htm";
import { applyTheme } from "./theme.js";
import { SAMPLE_DISCLAIMER, features, plans, planById } from "./plans.js";

const html = htm.bind(h);

applyTheme();

function cellDisplay(value) {
  if (value === true) {
    return html`<span class="mark mark--yes" aria-label="Included">✓</span>`;
  }
  if (value === false) {
    return html`<span class="mark" aria-label="Not included">—</span>`;
  }
  return html`<span class="cell-note">${value}</span>`;
}

function PlanCard({ plan, selected, tabIndex, onSelect }) {
  const isOn = selected === true;
  const pressed = isOn ? "true" : "false";

  return html`
    <button
      type="button"
      role="radio"
      class="plan-card"
      id=${`plan-${plan.id}`}
      aria-checked=${pressed}
      aria-pressed=${pressed}
      tabindex=${tabIndex}
      data-plan=${plan.id}
      onClick=${() => onSelect(plan.id)}
    >
      <div class="plan-card__top">
        <span class="plan-card__kicker">${plan.kicker}</span>
        ${plan.recommended
          ? html`<span class="pill">Sample favorite</span>`
          : null}
      </div>
      <span class="plan-card__name">${plan.name}</span>
      <div class="amount">
        <span class="amount__flag">${plan.amountLabel}</span>
        <span class="amount__figure">${plan.amount}</span>
        <span class="amount__unit">${plan.unit}</span>
      </div>
      <p class="plan-card__blurb">${plan.blurb}</p>
      <span class="select-hint">
        <span class="select-hint__mark" aria-hidden="true">${isOn ? "✓" : ""}</span>
        ${isOn ? "Selected" : "Select this sample plan"}
      </span>
    </button>
  `;
}

function Summary({ plan }) {
  if (!plan) {
    return html`
      <aside
        class="summary"
        aria-labelledby="summary-heading"
        data-has-selection="false"
        aria-live="polite"
      >
        <p class="eyebrow" id="summary-heading">Sample selection</p>
        <div class="summary__body" key="empty">
          <h2 class="summary__name">No plan selected</h2>
          <p class="summary__empty">
            Choose a sample plan to see its name and inclusions here.
          </p>
        </div>
      </aside>
    `;
  }

  return html`
    <aside
      class="summary"
      aria-labelledby="summary-heading"
      data-has-selection="true"
      aria-live="polite"
    >
      <p class="eyebrow" id="summary-heading">Sample selection</p>
      <div class="summary__body" key=${plan.id}>
        <p class="visually-hidden">Selected sample plan</p>
        <h2 class="summary__name">${plan.name}</h2>
        <div class="amount">
          <span class="amount__flag">${plan.amountLabel}</span>
          <span class="amount__figure">${plan.amount}</span>
          <span class="amount__unit">${plan.unit}</span>
        </div>
        <p class="plan-card__blurb summary__blurb">${plan.blurb}</p>
        <h3 class="eyebrow">Inclusions</h3>
        <ul class="include-list">
          ${plan.includes.map((item) => html`<li key=${item}>${item}</li>`)}
        </ul>
      </div>
    </aside>
  `;
}

function CompareTable({ selectedId, onSelect }) {
  return html`
    <section class="compare" aria-labelledby="compare-heading">
      <div class="section-head">
        <h2 class="section-title" id="compare-heading">Compare inclusions</h2>
        <p class="lede">Sample catalog only. Column headers select the same plan as the cards.</p>
      </div>
      <table class="compare-table">
        <thead>
          <tr>
            <th scope="col">Inclusion</th>
            ${plans.map((plan) => {
              const on = selectedId === plan.id;
              const pressed = on ? "true" : "false";
              return html`
                <th scope="col" data-col-selected=${on ? "true" : "false"} key=${`h-${plan.id}`}>
                  <button
                    type="button"
                    class="col-btn"
                    aria-pressed=${pressed}
                    aria-checked=${pressed}
                    onClick=${() => onSelect(plan.id)}
                  >
                    ${plan.name}
                    <span class="visually-hidden">${on ? "selected" : "select this sample plan"}</span>
                  </button>
                </th>
              `;
            })}
          </tr>
        </thead>
        <tbody>
          ${features.map((feature) => html`
            <tr key=${feature.id}>
              <th scope="row">${feature.label}</th>
              ${plans.map((plan) => html`
                <td
                  data-col-selected=${selectedId === plan.id ? "true" : "false"}
                  key=${`${plan.id}-${feature.id}`}
                >
                  ${cellDisplay(plan.cells[feature.id])}
                </td>
              `)}
            </tr>
          `)}
        </tbody>
      </table>
    </section>
  `;
}

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const selected = planById(selectedId);

  const selectPlan = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const onGroupKeyDown = useCallback(
    (event) => {
      const keys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"];
      if (!keys.includes(event.key)) return;

      event.preventDefault();
      const ids = plans.map((plan) => plan.id);
      const current = selectedId && ids.includes(selectedId) ? selectedId : ids[0];
      const index = ids.indexOf(current);
      let nextIndex = index;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = (index + 1) % ids.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex = (index - 1 + ids.length) % ids.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = ids.length - 1;
      }

      const nextId = ids[nextIndex];
      setSelectedId(nextId);
      const node = document.getElementById(`plan-${nextId}`);
      if (node) node.focus();
    },
    [selectedId]
  );

  useEffect(() => {
    document.title = selected
      ? `${selected.name} — Meridian Circle sample plans`
      : "Meridian Circle — Sample membership plans";
  }, [selected]);

  return html`
    <div class="app">
      <header class="masthead">
        <p class="wordmark">Meridian Circle</p>
        <p class="sample-banner">${SAMPLE_DISCLAIMER}</p>
      </header>

      <div class="hero">
        <img
          class="hero__art"
          src="../assets/header-art.jpg"
          alt="Abstract geometric illustration of three ascending glass platforms in teal and indigo"
          width="1600"
          height="900"
        />
        <div class="hero__copy">
          <p class="eyebrow">Sample membership catalog</p>
          <h1>Compare three fictional plans</h1>
          <p class="lede">
            Choose a sample circle. Selection is keyboard reachable; the summary
            lists the chosen plan’s name and inclusions.
          </p>
        </div>
      </div>

      <main id="main">
        <div class="picker-layout">
          <section aria-labelledby="picker-heading">
            <div class="section-head">
              <h2 class="section-title" id="picker-heading">Sample plans</h2>
              <p class="lede" id="picker-hint">
                Amounts are labeled sample data, not prices. Arrow keys move between plans; Space or Enter selects.
              </p>
            </div>
            <div
              class="plan-grid"
              role="radiogroup"
              aria-labelledby="picker-heading"
              aria-describedby="picker-hint"
              onKeyDown=${onGroupKeyDown}
            >
              ${plans.map((plan) => {
                const isSelected = selectedId === plan.id;
                const tabIndex =
                  selectedId === null
                    ? plan.id === plans[0].id
                      ? 0
                      : -1
                    : isSelected
                      ? 0
                      : -1;
                return html`
                  <${PlanCard}
                    key=${plan.id}
                    plan=${plan}
                    selected=${isSelected}
                    tabIndex=${tabIndex}
                    onSelect=${selectPlan}
                  />
                `;
              })}
            </div>
          </section>
          <${Summary} plan=${selected} />
        </div>

        <${CompareTable} selectedId=${selectedId} onSelect=${selectPlan} />
      </main>

      <footer class="site-foot">
        <p>Fictional catalog for demonstration. ${SAMPLE_DISCLAIMER}</p>
        <p>Header artwork from the project assets folder.</p>
      </footer>
    </div>
  `;
}

const root = document.getElementById("app");
render(html`<${App} />`, root);
