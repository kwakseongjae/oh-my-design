import { h, render } from "preact";
import { useCallback, useEffect, useMemo, useState } from "preact/hooks";
import htm from "htm";
import {
  applyTheme,
  getStoredScheme,
  getSystemScheme,
  prefersReducedMotion,
  storeScheme,
} from "./theme.js";
import { planById, plans } from "./plans.js";

const html = htm.bind(h);
const root = document.documentElement;

function currentScheme(override) {
  return override || getStoredScheme() || getSystemScheme();
}

function syncTokens(scheme) {
  applyTheme(root, scheme, prefersReducedMotion());
}

function Nav({ scheme, onToggleScheme }) {
  const next = scheme === "dark" ? "light" : "dark";
  return html`
    <header class="nav">
      <a class="brand" href="#plans">
        <span class="brand-mark" aria-hidden="true"></span>
        Ledge
      </a>
      <div class="nav-tools">
        <span class="sample-flag">Sample catalog</span>
        <button
          type="button"
          class="theme-toggle"
          aria-pressed=${scheme === "dark"}
          onClick=${onToggleScheme}
        >
          ${next === "dark" ? "Dark theme" : "Light theme"}
        </button>
      </div>
    </header>
  `;
}

function Hero() {
  return html`
    <section class="hero">
      <p class="hero-kicker">Sample memberships</p>
      <h1>Compare three Ledge plans</h1>
      <p class="hero-lead">
        Pick one house key. The panel lists what that plan includes.
      </p>
    </section>
  `;
}

function Art() {
  return html`
    <div class="art">
      <div class="art-frame">
        <img
          src="../assets/header-art.jpg"
          alt="Abstract stacked platforms in teal and indigo, suggesting three membership tiers."
          width="1280"
          height="720"
        />
      </div>
    </div>
  `;
}

function PlanOption({ plan, selected, onSelect }) {
  const isSelected = selected === plan.id;
  const preview = plan.inclusions.slice(0, plan.id === "terrace" ? 3 : 2).join(", ");

  return html`
    <button
      type="button"
      class=${`plan${plan.id === "terrace" ? " is-roomy" : ""}`}
      role="radio"
      id=${`plan-${plan.id}`}
      data-plan-id=${plan.id}
      aria-checked=${isSelected}
      aria-pressed=${isSelected}
      tabindex=${isSelected ? 0 : -1}
      onClick=${() => onSelect(plan.id)}
    >
      <span class="plan-radio" aria-hidden="true">
        <span class="plan-radio-dot"></span>
      </span>
      <span class="plan-copy">
        <span class="plan-name">${plan.name}</span>
        <span class="plan-tagline">${plan.tagline}</span>
        <span class="plan-preview">${preview}</span>
      </span>
      <span class="plan-amount">
        <span class="plan-amount-value">${plan.amountLabel}</span>
        <span class="plan-amount-note">${plan.sampleNote}</span>
      </span>
    </button>
  `;
}

function PlanList({ selected, onSelect }) {
  const onKeyDown = useCallback(
    (event) => {
      const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
      if (!keys.includes(event.key)) return;

      event.preventDefault();
      const index = plans.findIndex((plan) => plan.id === selected);
      let nextIndex = index < 0 ? 0 : index;

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        nextIndex = (index + 1 + plans.length) % plans.length;
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        nextIndex = (index - 1 + plans.length) % plans.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = plans.length - 1;
      }

      const nextId = plans[nextIndex].id;
      onSelect(nextId);
      const node = document.getElementById(`plan-${nextId}`);
      if (node) node.focus();
    },
    [selected, onSelect]
  );

  return html`
    <section class="plans" id="plans">
      <h2 id="plan-group-label" class="visually-hidden">Membership plans</h2>
      <div
        class="plan-group"
        role="radiogroup"
        aria-labelledby="plan-group-label"
        onKeyDown=${onKeyDown}
      >
        ${plans.map(
          (plan) =>
            html`<${PlanOption}
              key=${plan.id}
              plan=${plan}
              selected=${selected}
              onSelect=${onSelect}
            />`
        )}
      </div>
    </section>
  `;
}

function Summary({ plan }) {
  if (!plan) {
    return html`
      <aside class="summary is-empty" data-summary="empty" aria-live="polite" aria-atomic="true">
        <div class="summary-head">
          <h2 class="summary-title" id="summary-title">Your pick</h2>
          <p class="summary-name">Select a plan to see what is included.</p>
        </div>
      </aside>
    `;
  }

  return html`
    <aside
      class="summary"
      data-summary=${plan.id}
      aria-labelledby="summary-title"
      aria-live="polite"
      aria-atomic="true"
    >
      <div class="summary-body" key=${plan.id}>
        <div class="summary-head">
          <h2 class="summary-title" id="summary-title">Your pick</h2>
          <p class="summary-name">${plan.name}</p>
          <p class="summary-amount">
            <span>${plan.amountLabel}</span>
            <span class="summary-amount-note">${plan.sampleNote}</span>
          </p>
          <p class="summary-tagline">${plan.tagline}</p>
        </div>
        <div class="summary-inclusions">
          <h3>Included</h3>
          <ul class="inclusion-list">
            ${plan.inclusions.map((item) => html`<li key=${item}>${item}</li>`)}
          </ul>
        </div>
      </div>
    </aside>
  `;
}

function App() {
  const [scheme, setScheme] = useState(() => currentScheme());
  const [selected, setSelected] = useState(plans[1].id);
  const plan = useMemo(() => planById(selected), [selected]);

  useEffect(() => {
    syncTokens(scheme);
  }, [scheme]);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const schemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const onMotion = () => syncTokens(currentScheme(scheme));
    const onScheme = () => {
      if (!getStoredScheme()) {
        const next = getSystemScheme();
        setScheme(next);
        syncTokens(next);
      }
    };

    motionQuery.addEventListener("change", onMotion);
    schemeQuery.addEventListener("change", onScheme);
    return () => {
      motionQuery.removeEventListener("change", onMotion);
      schemeQuery.removeEventListener("change", onScheme);
    };
  }, [scheme]);

  const onToggleScheme = useCallback(() => {
    setScheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      storeScheme(next);
      return next;
    });
  }, []);

  const onSelect = useCallback((id) => {
    setSelected(id);
  }, []);

  return html`
    <div class="app-root">
      <a class="skip-link" href="#plans">Skip to plans</a>
      <div class="page">
        <${Nav} scheme=${scheme} onToggleScheme=${onToggleScheme} />
        <main class="layout">
          <${Hero} />
          <${Art} />
          <${PlanList} selected=${selected} onSelect=${onSelect} />
          <${Summary} plan=${plan} />
        </main>
        <footer class="foot">
          Ledge is a fictional members' house. All plan names and amounts are sample data.
        </footer>
      </div>
    </div>
  `;
}

syncTokens(currentScheme());
render(html`<${App} />`, document.getElementById("app"));
