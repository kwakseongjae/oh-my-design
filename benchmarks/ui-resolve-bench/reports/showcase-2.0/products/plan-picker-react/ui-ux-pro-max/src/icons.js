import { h } from "preact";
import htm from "htm";

const html = htm.bind(h);

function Svg({ children, size = 20, label }) {
  const labelled = Boolean(label);
  return html`
    <svg
      width=${size}
      height=${size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden=${labelled ? "false" : "true"}
      aria-label=${label || undefined}
      focusable="false"
    >
      ${children}
    </svg>
  `;
}

export function IconCheck(props) {
  return html`
    <${Svg} ...${props}>
      <path d="M20 6 9 17l-5-5" />
    <//>
  `;
}

export function IconCheckCircle(props) {
  return html`
    <${Svg} ...${props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5 11 15l4.5-5.5" />
    <//>
  `;
}

export function IconMinus(props) {
  return html`
    <${Svg} ...${props}>
      <path d="M6 12h12" />
    <//>
  `;
}

export function IconStar(props) {
  return html`
    <${Svg} ...${props}>
      <path
        d="m12 3.4 2.2 4.6 5 .7-3.6 3.6.9 5.1L12 15.9 7.5 17.4l.9-5.1L4.8 8.7l5-.7L12 3.4z"
      />
    <//>
  `;
}

export function IconInfo(props) {
  return html`
    <${Svg} ...${props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    <//>
  `;
}

/** Three ascending planes, echoing the header artwork. */
export function IconTiers({ size = 28, steps = 3 }) {
  const planes = [
    "M3 17.5 9 15l10 3.2-6 2.5z",
    "M4 12.2 11 9.4l9 3-7 2.8z",
    "M5 7 13 4.2l8 2.8-8 2.8z",
  ].slice(0, steps);

  return html`
    <svg
      width=${size}
      height=${size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      class="icon-tiers"
    >
      ${planes.map(
        (d, index) =>
          html`<path
            d=${d}
            opacity=${0.45 + index * 0.22}
            key=${`plane-${index}`}
          />`
      )}
    </svg>
  `;
}
