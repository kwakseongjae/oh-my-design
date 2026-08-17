import { h, render } from "preact";
import { useState, useRef, useEffect } from "preact/hooks";
import htm from "htm";
import { theme, applyTheme } from "./theme.js";
import { plans, defaultPlanId } from "./plans.js";

const html = htm.bind(h);

applyTheme(theme);

function PlanPicker() {
  const [selectedId, setSelectedId] = useState(defaultPlanId);
  const [heldId, setHeldId] = useState(null);
  const [holdState, setHoldState] = useState("idle");
  const itemRefs = useRef([]);

  const selected = plans.find((plan) => plan.id === selectedId) ?? null;
  const isHeld = Boolean(selected && heldId === selected.id);

  useEffect(() => {
    applyTheme(theme);
  }, []);

  function selectPlan(id, { focus } = {}) {
    setSelectedId(id);
    if (heldId && heldId !== id) {
      setHeldId(null);
      setHoldState("idle");
    }
    if (focus) {
      const index = plans.findIndex((plan) => plan.id === id);
      const node = itemRefs.current[index];
      if (node) node.focus({ preventScroll: true });
    }
  }

  function onPlanKeyDown(event, index) {
    const last = plans.length - 1;
    let next = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = index === last ? 0 : index + 1;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = index === 0 ? last : index - 1;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = last;
    } else if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      selectPlan(plans[index].id);
      return;
    }
    if (next !== null) {
      event.preventDefault();
      selectPlan(plans[next].id, { focus: true });
    }
  }

  function holdSample() {
    if (!selected) return;
    setHeldId(selected.id);
    setHoldState("success");
  }

  return html`
    <a class="skip" href="#plans">Skip to rosters</a>
    <div class="frame">
      <div class="rails" aria-hidden="true"></div>
      <div class="shell">
        <header class="nav">
          <a class="wordmark" href="#top">halden</a>
          <a class="nav-cta" href="#plans">Roster →</a>
        </header>
      </div>

      <main id="top">
        <section class="hero-band">
          <div class="shell">
            <div class="hero">
              <div class="hero__copy">
                <p class="meta">Sample roster · August 2026</p>
                <h1>three sample rosters.</h1>
                <p class="lede">
                  A fictional reading-room circle. Compare three sample
                  memberships. Amounts are sample data — they are not prices.
                </p>
              </div>
              <figure class="hero__figure">
                <img
                  src="../assets/header-art.jpg"
                  alt="Three stacked geometric planes in teal and indigo, ascending."
                  width="1280"
                  height="720"
                  fetchpriority="high"
                />
                <figcaption>Three planes · header artwork</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section class="roster-band" id="plans">
          <div class="shell">
            <header class="head-hang">
              <h2>the sample roster</h2>
              <p>
                One seat at a time. Arrow keys move the selection. The plate
                below names the same roster and its inclusions.
              </p>
            </header>

            <div
              class="plans"
              role="radiogroup"
              aria-labelledby="plans-heading"
            >
              <h3 id="plans-heading" class="visually-hidden">
                Choose a sample membership
              </h3>
              ${plans.map(
                (plan, index) => html`
                  <${PlanCell}
                    key=${plan.id}
                    plan=${plan}
                    selected=${selectedId === plan.id}
                    inputRef=${(node) => {
                      itemRefs.current[index] = node;
                    }}
                    onSelect=${() => selectPlan(plan.id)}
                    onKeyDown=${(event) => onPlanKeyDown(event, index)}
                  />
                `
              )}
            </div>
          </div>
        </section>

        <section class="plate" id="summary" aria-labelledby="summary-heading">
          <div class="shell">
            <${SummaryPanel}
              plan=${selected}
              holdState=${holdState}
              isHeld=${isHeld}
              onHold=${holdSample}
            />
          </div>
        </section>
      </main>

      <footer class="foot">
        <div class="shell">
          <p class="foot__colophon">
            <span class="register" aria-hidden="true"></span>
            Halden Circle · sample membership picker · August 2026. All plan
            names, inclusions, and amounts are sample data, not an offer. Artwork
            from ../assets/header-art.jpg. Runtime: vendored Preact + HTM, no
            network.
          </p>
        </div>
      </footer>
    </div>
  `;
}

function PlanCell({ plan, selected, inputRef, onSelect, onKeyDown }) {
  const checked = selected ? "true" : "false";
  return html`
    <button
      type="button"
      class="plan"
      role="radio"
      id=${`plan-${plan.id}`}
      aria-checked=${checked}
      aria-pressed=${checked}
      aria-describedby=${`plan-${plan.id}-amount`}
      tabindex=${selected ? "0" : "-1"}
      ref=${inputRef}
      onClick=${onSelect}
      onKeyDown=${onKeyDown}
    >
      <span class="plan__index" aria-hidden="true">${plan.index}</span>
      <span class="plan__mark" aria-hidden="true"></span>
      <span class="plan__name">${plan.name}</span>
      <span class="plan__amount" id=${`plan-${plan.id}-amount`}>
        <span class="label">sample amount · not a price</span>
        <span class="plan__figure">
          <span class="plan__units">${plan.sampleAmount}</span>
          <span class="plan__cycle">/ ${plan.cycleLabel}</span>
        </span>
      </span>
      <ul class="plan__list">
        ${plan.inclusions.map(
          (item) => html`<li key=${`${plan.id}-${item}`}>${item}</li>`
        )}
      </ul>
    </button>
  `;
}

function SummaryPanel({ plan, holdState, isHeld, onHold }) {
  if (!plan) {
    return html`
      <div class="summary" data-state="empty">
        <p class="label">currently held</p>
        <h2 id="summary-heading">No roster held</h2>
        <p>Select a sample plan above to fill this plate.</p>
        <button
          type="button"
          class="cta"
          disabled
          aria-disabled="true"
        >
          Hold sample
        </button>
      </div>
    `;
  }

  const live = `${plan.name}. Sample amount ${plan.sampleAmount} per ${plan.cycleLabel}. ${plan.inclusions.join(", ")}.`;

  return html`
    <div class="summary">
      <span class="summary__numeral" aria-hidden="true">${plan.index}</span>
      <div class="summary__grid">
        <div class="summary__copy">
          <p class="label" id="summary-heading">currently held</p>
          <h2 class="summary__name">${plan.name}</h2>
          <p class="summary__lede">${plan.summary}</p>
          <p class="summary__amount">
            <span class="label">sample amount · not a price</span>
            <span class="summary__figure">
              <span class="summary__units">${plan.sampleAmount}</span>
              <span class="summary__cycle">/ ${plan.cycleLabel}</span>
            </span>
          </p>
        </div>
        <div class="summary__inclusions">
          <p class="label">inclusions</p>
          <ul>
            ${plan.inclusions.map(
              (item) => html`<li key=${`sum-${plan.id}-${item}`}>${item}</li>`
            )}
          </ul>
          <button
            type="button"
            class="cta"
            data-state=${isHeld ? holdState : "idle"}
            onClick=${onHold}
          >
            ${isHeld ? "Held" : "Hold sample"}
          </button>
        </div>
      </div>
      <p class="visually-hidden" aria-live="polite" aria-atomic="true">
        ${live}${isHeld ? " Held in the picker." : ""}
      </p>
    </div>
  `;
}

const root = document.getElementById("app");
render(html`<${PlanPicker} />`, root);
