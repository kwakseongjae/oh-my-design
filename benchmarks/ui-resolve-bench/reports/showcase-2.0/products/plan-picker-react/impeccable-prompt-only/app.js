import { h, render } from "preact";
import { useEffect, useId, useRef, useState } from "preact/hooks";
import htm from "htm";
import { applyTheme } from "./theme.js";
import { DEFAULT_PLAN_ID, PLANS } from "./plans.js";

const html = htm.bind(h);

applyTheme();

function Wordmark() {
  return html`
    <svg class="wordmark" viewBox="0 0 280 44" role="img" aria-label="Meridian Rooms">
      <text x="2" y="26">MERIDIAN ROOMS</text>
      <rect x="2" y="34" width="168" height="1.1" fill="currentColor" />
    </svg>
  `;
}

function BrassClip({ className }) {
  return html`
    <img
      class=${className}
      src="../assets/brass-clip.jpg"
      alt=""
      width="168"
      height="168"
    />
  `;
}

function Stamp() {
  return html`
    <svg class="stamp" viewBox="0 0 88 88" aria-hidden="true">
      <circle
        cx="44"
        cy="44"
        r="38"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
      />
      <circle
        cx="44"
        cy="44"
        r="31"
        fill="none"
        stroke="currentColor"
        stroke-width="1.1"
      />
      <path
        d="M18 44h52"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        opacity="0.55"
      />
      <text
        x="44"
        y="40"
        text-anchor="middle"
        fill="currentColor"
        font-size="9"
        font-family="Avenir Next, Gill Sans, sans-serif"
        letter-spacing="1.4"
      >ISSUED</text>
      <text
        x="44"
        y="54"
        text-anchor="middle"
        fill="currentColor"
        font-size="8"
        font-family="Avenir Next, Gill Sans, sans-serif"
        letter-spacing="0.8"
      >MERIDIAN</text>
    </svg>
  `;
}

function FolioPin() {
  return html`
    <svg class="folio-pin" viewBox="0 0 12 24" aria-hidden="true">
      <rect x="4.5" y="0" width="3" height="14" rx="1" fill="currentColor" />
      <circle cx="6" cy="18" r="4" fill="none" stroke="currentColor" stroke-width="1.6" />
    </svg>
  `;
}

function PlanCard({ plan, selected, pressed, onSelect, onPressChange, buttonRef }) {
  const isOn = selected === plan.id;
  const className = [
    "plan",
    isOn ? "is-selected" : "",
    pressed === plan.id ? "is-pressed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return html`
    <button
      ref=${buttonRef}
      class=${className}
      type="button"
      role="radio"
      aria-checked=${isOn ? "true" : "false"}
      aria-pressed=${isOn ? "true" : "false"}
      tabindex=${isOn ? "0" : "-1"}
      aria-label=${`Select ${plan.name}. ${plan.hours}. Sample mark ${plan.sampleMark}.`}
      onClick=${() => onSelect(plan.id)}
      onPointerDown=${() => onPressChange(plan.id)}
      onPointerUp=${() => onPressChange(null)}
      onPointerLeave=${() => onPressChange(null)}
      onPointerCancel=${() => onPressChange(null)}
    >
      <${Stamp} />
      <span class="plan-name">${plan.name}</span>
      <p class="plan-hours">${plan.hours}</p>
      <ul class="plan-inclusions">
        ${plan.inclusions.slice(0, 3).map(
          (item) => html`<li key=${item}>${item}</li>`
        )}
      </ul>
      <span class="plan-mark">Sample mark ${plan.sampleMark}</span>
    </button>
  `;
}

function Folio({ plan }) {
  return html`
    <aside class="folio" aria-live="polite" aria-atomic="true">
      <${FolioPin} />
      <h2>${plan.name}</h2>
      <p class="folio-note">
        Issued for this visit. Amounts are sample data, not a real price.
      </p>
      <ul class="folio-list">
        ${plan.inclusions.map((item) => html`<li key=${item}>${item}</li>`)}
      </ul>
      <p class="folio-mark">Sample mark ${plan.sampleMark}</p>
    </aside>
  `;
}

function App() {
  const [selectedId, setSelectedId] = useState(DEFAULT_PLAN_ID);
  const [pressedId, setPressedId] = useState(null);
  const groupId = useId();
  const buttonRefs = useRef(PLANS.map(() => null));
  const selected = PLANS.find((plan) => plan.id === selectedId) || PLANS[0];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => applyTheme();
    if (media.addEventListener) media.addEventListener("change", sync);
    else media.addListener(sync);
    return () => {
      if (media.removeEventListener) media.removeEventListener("change", sync);
      else media.removeListener(sync);
    };
  }, []);

  const move = (nextIndex) => {
    const index = (nextIndex + PLANS.length) % PLANS.length;
    const next = PLANS[index];
    setSelectedId(next.id);
    const node = buttonRefs.current[index];
    if (node && typeof node.focus === "function") node.focus();
  };

  const onKeyDown = (event) => {
    const current = PLANS.findIndex((plan) => plan.id === selectedId);
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      move(current + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      move(current - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      move(0);
    } else if (event.key === "End") {
      event.preventDefault();
      move(PLANS.length - 1);
    }
  };

  return html`
    <div class="shell">
      <a class="skip" href="#ledgers">Skip to ledgers</a>
      <header class="horizon">
        <img
          class="horizon-art"
          src="../assets/header-art.jpg"
          alt=""
          width="1600"
          height="900"
        />
        <div class="horizon-copy">
          <${Wordmark} />
          <h1 id=${groupId}>Which desk holds your hours?</h1>
        </div>
      </header>
      <main class="desk">
        <${BrassClip} className="clip clip-tl" />
        <${BrassClip} className="clip clip-tr" />
        <${BrassClip} className="clip clip-bl" />
        <${BrassClip} className="clip clip-br" />
        <section class="picker" id="ledgers">
          <p class="picker-help">
            Use the arrow keys to move between ledgers. All marks are sample
            data.
          </p>
          <div
            class="plans"
            role="radiogroup"
            aria-labelledby=${groupId}
            onKeyDown=${onKeyDown}
          >
            ${PLANS.map(
              (plan, index) => html`
                <${PlanCard}
                  key=${plan.id}
                  plan=${plan}
                  selected=${selectedId}
                  pressed=${pressedId}
                  onSelect=${setSelectedId}
                  onPressChange=${setPressedId}
                  buttonRef=${(node) => {
                    buttonRefs.current[index] = node;
                  }}
                />
              `
            )}
          </div>
        </section>
        <${Folio} plan=${selected} />
      </main>
      <p class="colophon">Three sample ledgers. One issued desk.</p>
    </div>
  `;
}

const root = document.getElementById("app");
render(html`<${App} />`, root);
