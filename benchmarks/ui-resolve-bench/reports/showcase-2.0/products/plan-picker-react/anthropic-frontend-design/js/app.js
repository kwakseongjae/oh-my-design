import { h, render } from "preact";
import { useState, useRef } from "preact/hooks";
import htm from "htm";
import { applyTheme } from "./theme.js";
import { plans } from "./plans.js";

const html = htm.bind(h);

applyTheme();

const STEP = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };

function Slab({ plan, selected, onSelect, onMove }) {
  const isOn = selected === plan.id;
  return html`
    <button
      id=${`plan-${plan.id}`}
      type="button"
      class=${isOn ? "slab is-selected" : "slab"}
      role="radio"
      aria-checked=${isOn}
      aria-pressed=${isOn}
      tabindex=${isOn ? "0" : "-1"}
      onClick=${() => onSelect(plan.id)}
      onKeyDown=${onMove}
    >
      <span class="slab-kicker">Sample terrace · ${plan.depth}</span>
      <span class="slab-name">${plan.name}</span>
      <span class="slab-amount">
        <span class="sample-tag">Sample figure</span>
        <span class="amount-figure">${plan.sampleAmount}</span>
        <span class="amount-unit">${plan.sampleUnit}</span>
      </span>
      <ul class="slab-preview">
        ${plan.inclusions.slice(0, 3).map(
          (item) => html`<li key=${item}>${item}</li>`
        )}
      </ul>
      <span class="slab-meta">
        <span>${plan.cadence}</span>
        <span>${plan.inclusions.length} inclusions</span>
      </span>
    </button>
  `;
}

function Ledger({ plan }) {
  return html`
    <aside class="ledger" aria-live="polite" aria-atomic="true">
      <p class="ledger-label">Your terrace · sample data</p>
      <h3 class="ledger-name">${plan.name}</h3>
      <p class="ledger-blurb">${plan.blurb}</p>
      <div class="ledger-amount">
        <span class="sample-tag">Sample figure</span>
        <span class="amount-figure">${plan.sampleAmount}</span>
        <span class="amount-unit">${plan.sampleUnit}</span>
      </div>
      <p class="inclusions-title">Included with ${plan.name}</p>
      <ul class="inclusions">
        ${plan.inclusions.map(
          (item) => html`<li key=${item}>${item}</li>`
        )}
      </ul>
    </aside>
  `;
}

function App() {
  const [selectedId, setSelectedId] = useState(plans[0].id);
  const railRef = useRef(null);
  const selected = plans.find((plan) => plan.id === selectedId) || plans[0];

  function select(id) {
    setSelectedId(id);
  }

  function onMove(event) {
    const dir = STEP[event.key];
    if (!dir) return;
    event.preventDefault();
    const index = plans.findIndex((plan) => plan.id === selectedId);
    const next = plans[(index + dir + plans.length) % plans.length];
    setSelectedId(next.id);
    const root = railRef.current;
    if (root) {
      const node = root.querySelector(`#plan-${next.id}`);
      if (node) node.focus();
    }
  }

  return html`
    <div class="page">
      <div class="mast">
        <p class="wordmark">Littoral</p>
        <p class="sample-banner">All plans and amounts are sample data</p>
      </div>

      <header class="horizon">
        <figure class="horizon-art">
          <img
            src="../assets/header-art.jpg"
            alt="Three ascending glass terraces in teal and indigo"
            width="1600"
            height="900"
          />
        </figure>
        <div class="horizon-copy">
          <p class="eyebrow">Coastal bathhouse · fictional memberships</p>
          <h1>Step onto a terrace</h1>
          <p class="lede">
            Three sample keys to the same water. Compare inclusions, then
            choose the depth you keep.
          </p>
        </div>
      </header>

      <section class="compare" aria-labelledby="compare-title">
        <div class="compare-head">
          <h2 id="compare-title">Compare terraces</h2>
          <p class="hint">Arrow keys move · space selects</p>
        </div>
        <div class="stage">
          <div
            class="rail"
            ref=${railRef}
            role="radiogroup"
            aria-label="Sample membership terraces"
          >
            ${plans.map(
              (plan) =>
                html`<${Slab}
                  key=${plan.id}
                  plan=${plan}
                  selected=${selectedId}
                  onSelect=${select}
                  onMove=${onMove}
                />`
            )}
          </div>
          <${Ledger} plan=${selected} />
        </div>
      </section>

      <p class="footnote">
        Demonstration only. Plans, inclusions, and amounts are sample data —
        not real prices or offers.
      </p>
    </div>
  `;
}

render(html`<${App} />`, document.getElementById("app"));
