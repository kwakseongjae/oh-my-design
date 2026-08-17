import { h, render } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import htm from "htm";
import { applyTheme } from "./theme.js";

const html = htm.bind(h);

const PLANS = [
  {
    id: "harbor-starter",
    name: "Harbor Starter",
    sampleAmount: "12 sample units / month — sample data, not a real price",
    inclusions: [
      "Community forum access (sample)",
      "Monthly recap email (sample)",
      "One guest pass (sample)",
    ],
  },
  {
    id: "tide-standard",
    name: "Tide Standard",
    sampleAmount: "24 sample units / month — sample data, not a real price",
    inclusions: [
      "Everything in Harbor Starter (sample)",
      "Two workshops (sample)",
      "Priority support hours (sample)",
    ],
  },
  {
    id: "beacon-plus",
    name: "Beacon Plus",
    sampleAmount: "36 sample units / month — sample data, not a real price",
    inclusions: [
      "Everything in Tide Standard (sample)",
      "Studio hours (sample)",
      "Guest speaker sessions (sample)",
    ],
  },
];

function routeState({ catalog, selectedId, confirmed }) {
  if (catalog === "loading") return "loading";
  if (catalog === "error") return "error";
  if (confirmed && selectedId) return "success";
  if (!selectedId) return "empty";
  return "default";
}

function PlanOption({ plan, selected, disabled, onSelect, onKeyDown, optionRef }) {
  const pressed = selected;
  return html`
    <button
      ref=${optionRef}
      type="button"
      class="plan-option"
      role="radio"
      id=${`plan-${plan.id}`}
      data-cta="local"
      data-state=${disabled ? "disabled" : selected ? "success" : "default"}
      aria-checked=${pressed ? "true" : "false"}
      aria-pressed=${pressed ? "true" : "false"}
      aria-disabled=${disabled ? "true" : "false"}
      disabled=${disabled}
      onClick=${() => onSelect(plan.id)}
      onKeyDown=${onKeyDown}
    >
      <h3 class="plan-name">${plan.name}</h3>
      <p class="plan-id">Plan ID: ${plan.id}</p>
      <p class="sample-amount">${plan.sampleAmount}</p>
      <ul class="inclusions">
        ${plan.inclusions.map((item) => html`<li key=${item}>${item}</li>`)}
      </ul>
      <p class="select-verb">${selected ? "Selected" : "Select"} ${plan.name}</p>
    </button>
  `;
}

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [catalog, setCatalog] = useState("ready");
  const [selectedId, setSelectedId] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const optionRefs = useRef({});
  const errorRef = useRef(null);
  const confirmRef = useRef(null);

  useEffect(() => {
    applyTheme();
  }, []);

  useEffect(() => {
    if (catalog === "error" && errorRef.current) {
      errorRef.current.focus();
    }
  }, [catalog]);

  const selected = PLANS.find((plan) => plan.id === selectedId) || null;
  const catalogReady = catalog === "ready";
  const plansDisabled = !catalogReady;
  const confirmDisabled = !catalogReady || !selected;
  const mainState = routeState({ catalog, selectedId, confirmed });

  function selectPlan(id) {
    if (!catalogReady) return;
    setSelectedId(id);
    setConfirmed(false);
  }

  function onPlanKeyDown(event, index) {
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    const delta = keys[event.key];
    if (!delta || !catalogReady) return;
    event.preventDefault();
    const next = (index + delta + PLANS.length) % PLANS.length;
    const nextPlan = PLANS[next];
    selectPlan(nextPlan.id);
    const node = optionRefs.current[nextPlan.id];
    if (node) node.focus();
  }

  function confirmSelection() {
    if (confirmDisabled) return;
    setConfirmed(true);
    if (confirmRef.current) confirmRef.current.focus();
  }

  return html`
    <a class="skip-link" href="#main">Skip to main content</a>
    <header class="site-header">
      <div class="artwork-frame">
        <img
          src="../assets/header-art.jpg"
          alt=""
          width="1280"
          height="720"
          aria-hidden="true"
        />
      </div>
      <div class="header-bar">
        <span class="wordmark">Membership</span>
        <nav class="site-nav" aria-label="Page">
          <button
            type="button"
            class="nav-toggle"
            aria-expanded=${navOpen ? "true" : "false"}
            aria-controls="site-nav"
            onClick=${() => setNavOpen((open) => !open)}
          >
            Menu
          </button>
          <div id="site-nav" class="nav-panel ${navOpen ? "is-open" : ""}">
            <div class="nav-links">
              <a href="#compare" onClick=${() => setNavOpen(false)}>Compare plans</a>
              <a href="#summary" onClick=${() => setNavOpen(false)}>Summary</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <main id="main" class="page" tabindex="-1" data-state=${mainState}>
      <div class="section-enter">
        <h1 class="page-title">Membership plan picker</h1>
        <p class="lede">
          Compare three fictional sample membership plans, select one, and review
          the summary of the chosen plan name and inclusions.
        </p>
        <p
          class="honesty"
          data-state="unavailable-information"
          id="price-honesty"
        >
          Real published prices are unavailable. All membership plans and amounts
          on this page are sample data.
        </p>
        <fieldset class="catalog-status" data-state=${catalog}>
          <legend class="catalog-legend">Sample catalog</legend>
          <div class="catalog-options" role="radiogroup" aria-label="Sample catalog">
            ${["ready", "loading", "error"].map((value) => {
              const labels = {
                ready: "Show loaded catalog",
                loading: "Show loading state",
                error: "Show catalog unavailable",
              };
              return html`
                <label class="catalog-option" key=${value}>
                  <input
                    type="radio"
                    name="catalog-status"
                    value=${value}
                    checked=${catalog === value}
                    onChange=${() => {
                      setCatalog(value);
                      setConfirmed(false);
                      if (value !== "ready") setSelectedId(null);
                    }}
                  />
                  <span>${labels[value]}</span>
                </label>
              `;
            })}
          </div>
        </fieldset>
        ${catalog === "loading" &&
        html`
          <p
            class="status-banner"
            data-state="loading"
            role="status"
            aria-live="polite"
          >
            Loading sample plans.
          </p>
        `}
        ${catalog === "error" &&
        html`
          <p
            class="status-banner"
            data-state="error"
            role="alert"
            id="catalog-error"
            tabindex="-1"
            ref=${errorRef}
          >
            Sample catalog is unavailable. Real catalog information is not on this
            page. Choose Show loaded catalog to compare the sample plans.
          </p>
        `}
      </div>
      <div class="layout">
        <section id="compare" class="section-enter" aria-labelledby="compare-heading">
          <h2 class="section-title" id="compare-heading">Compare plans</h2>
          <div
            class="plan-grid"
            role="radiogroup"
            aria-labelledby="compare-heading"
            aria-describedby="price-honesty"
            data-state=${catalogReady ? (selected ? "success" : "empty") : catalog}
          >
            ${PLANS.map(
              (plan, index) => html`
                <${PlanOption}
                  key=${plan.id}
                  plan=${plan}
                  selected=${selectedId === plan.id}
                  disabled=${plansDisabled}
                  onSelect=${selectPlan}
                  onKeyDown=${(event) => onPlanKeyDown(event, index)}
                  optionRef=${(node) => {
                    optionRefs.current[plan.id] = node;
                  }}
                />
              `,
            )}
          </div>
        </section>
        <aside
          id="summary"
          class="summary section-enter"
          role="complementary"
          aria-labelledby="summary-heading"
          data-state=${selected ? "success" : "empty"}
        >
          <h2 class="section-title" id="summary-heading">Summary</h2>
          ${selected
            ? html`
                <h3>${selected.name}</h3>
                <p class="plan-id">Plan ID: ${selected.id}</p>
                <p class="sample-amount">${selected.sampleAmount}</p>
                <ul class="inclusions">
                  ${selected.inclusions.map(
                    (item) => html`<li key=${item}>${item}</li>`,
                  )}
                </ul>
              `
            : html`
                <p>
                  No membership plan selected. Choose a plan to see its name and
                  inclusions.
                </p>
              `}
        </aside>
      </div>
      <div class="actions">
        <button
          ref=${confirmRef}
          type="button"
          class="confirm"
          data-cta="primary"
          data-state=${confirmDisabled ? "disabled" : confirmed ? "success" : "default"}
          disabled=${confirmDisabled}
          aria-describedby=${confirmDisabled ? "confirm-help" : undefined}
          onClick=${confirmSelection}
        >
          Confirm selected plan
        </button>
        <p class="live" id="confirm-help">
          ${confirmDisabled
            ? "Confirm selected plan stays disabled until a membership plan is selected from a loaded catalog."
            : ""}
        </p>
        <p class="live" role="status" aria-live="polite">
          ${selected
            ? `Summary updated for ${selected.name} (${selected.id}). Inclusions: ${selected.inclusions.join("; ")}.`
            : "Summary is empty. No membership plan is selected."}
          ${confirmed && selected
            ? ` Confirmed ${selected.name} (${selected.id}).`
            : ""}
        </p>
      </div>
    </main>
  `;
}

applyTheme();
render(html`<${App} />`, document.getElementById("app"));
