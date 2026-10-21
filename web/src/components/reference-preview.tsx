"use client";

/**
 * The item page's visual read of a reference, beside the canonical DESIGN.md
 * (/design-systems/[id], /ko/design-systems/[id]).
 *
 * Round 13 (owner, 2026-10-21): next to styles.refero.design this column read thin although the
 * DESIGN.md is rich. The difference was presentation, so the column now carries what the reference
 * records, arranged the way a style page reads (docs/research/2026-10-21-r13/item/ANALYSIS.md):
 *   - Colors: the brand colour large, then the reference's colours grouped by what their keys say,
 *     then numbered hue scales as ramps;
 *   - Typography: each recorded face as metadata, then every recorded type role with its metrics;
 *   - Spacing & shape: the spacing scale as bars, corner radii as tiles, recorded shadows;
 *   - Components: drawable variants with their recorded states.
 *
 * Evidence rules (AGENTS.md hard rules; model: components/item/preview-model.ts):
 *   - every value comes from the reference's own tokens, built on the server; a group with nothing
 *     recorded is absent, and a reference with nothing recorded has no preview at all;
 *   - a specimen is set only in a face that loads in the browser. A face that does not load keeps its
 *     name as metadata and its roles keep their metrics; nothing is set in a stand-in face, and no
 *     "not loaded" note is added (round 11, #26);
 *   - a component state is painted only when its value is one colour literal; other state values are
 *     quoted as written.
 *
 * One consumer: the item page. It does not render the brand name as a heading; the page has one <h1>.
 */

import { useCallback, useEffect, useState } from "react";
import type {
  ColorModel,
  ComponentSample,
  FontFace,
  PreviewModel,
  RadiusStep,
  Ramp,
  ShadowStep,
  SpacingStep,
  Swatch,
  TypeStep,
} from "@/components/item/preview-model";
import { ITEM_EN, type PreviewLabels } from "@/components/brand-a/copy/item";

/* ─────────── helpers ─────────── */

function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = useCallback((text: string, key: string = text) => {
    void navigator.clipboard?.writeText(text).then(() => {
      setCopied(key);
      window.setTimeout(() => setCopied((k) => (k === key ? null : k)), 1400);
    });
  }, []);
  return { copied, copy };
}

/** Client-only, deduped stylesheet links for the faces that load (non-blocking, as before). */
function FaceStyles({ hrefs }: { hrefs: readonly string[] }) {
  const key = hrefs.join("|");
  useEffect(() => {
    const owned: HTMLLinkElement[] = [];
    for (const href of key ? key.split("|") : []) {
      if (document.head.querySelector(`link[data-omd-runtime-font][href="${href}"]`)) continue;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.dataset.omdRuntimeFont = "true";
      document.head.appendChild(link);
      owned.push(link);
    }
    return () => owned.forEach((link) => link.remove());
  }, [key]);
  return null;
}

function luminance(c?: string): number | null {
  if (!c) return null;
  const hex = c.replace("#", "");
  if (/^[0-9a-f]{6}$/i.test(hex)) {
    const [r, g, b] = hex.match(/.{2}/g)!.map((x) => parseInt(x, 16));
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  }
  if (/^[0-9a-f]{3}$/i.test(hex)) {
    const [r, g, b] = hex.split("").map((x) => parseInt(x + x, 16));
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  }
  const m = c.match(/rgba?\(\s*(\d+)\D+(\d+)\D+(\d+)/i);
  return m ? (0.299 * +m[1] + 0.587 * +m[2] + 0.114 * +m[3]) / 255 : null;
}

/* ─────────── Colors ─────────── */

function SwatchButton({
  swatch,
  labels,
  copied,
  onCopy,
}: {
  swatch: Swatch;
  labels: PreviewLabels;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <button type="button" onClick={onCopy} aria-label={labels.copyColor(swatch.name, swatch.hex)}>
      <span className="sq-pv-chip" style={{ background: swatch.hex }} aria-hidden="true" />
      <span className="sq-pv-sw-n" lang="en">{swatch.name}</span>
      <span className="sq-pv-sw-v">{copied ? labels.copied : swatch.hex}</span>
    </button>
  );
}

function RampRow({ ramp, labels }: { ramp: Ramp; labels: PreviewLabels }) {
  const { copied, copy } = useCopy();
  const [active, setActive] = useState<string | null>(null);
  const step = ramp.steps.find((s) => s.name === active);
  const first = ramp.steps[0];
  const last = ramp.steps[ramp.steps.length - 1];
  const columns = { gridTemplateColumns: `repeat(${ramp.steps.length}, minmax(0, 1fr))` };
  return (
    <div className="sq-pv-ramp">
      <p className="sq-pv-ramp-h">
        <b lang="en">{ramp.hue}</b>
        <span>
          {step ? (
            <>
              <span lang="en">{step.name}</span> · {copied === step.name ? labels.copied : step.hex}
            </>
          ) : (
            `${first.step}–${last.step}`
          )}
        </span>
      </p>
      {/* One strip per hue; the step's name and hex show in the line above on hover, focus or tap. */}
      <div className="sq-pv-strip" role="group" aria-label={ramp.hue} style={columns}>
        {ramp.steps.map((s) => (
          <button
            key={s.name}
            type="button"
            aria-label={labels.copyColor(s.name, s.hex)}
            title={`${s.name} ${s.hex}`}
            style={{ background: s.hex }}
            onMouseEnter={() => setActive(s.name)}
            onMouseLeave={() => setActive((a) => (a === s.name ? null : a))}
            onFocus={() => setActive(s.name)}
            onBlur={() => setActive((a) => (a === s.name ? null : a))}
            onClick={() => {
              setActive(s.name);
              copy(s.hex, s.name);
            }}
          />
        ))}
      </div>
      <div className="sq-pv-strip-l" style={columns} aria-hidden="true">
        {ramp.steps.map((s) => (
          <span key={s.name}>{s.step}</span>
        ))}
      </div>
    </div>
  );
}

function Colors({ colors, labels }: { colors: ColorModel; labels: PreviewLabels }) {
  const { copied, copy } = useCopy();
  const brand = colors.groups.find((g) => g.key === "brand");
  const rest = colors.groups.filter((g) => g.key !== "brand");
  const grid = (swatches: readonly Swatch[]) => (
    <ul className="sq-pv-sw">
      {swatches.map((s) => (
        <li key={s.name}>
          <SwatchButton swatch={s} labels={labels} copied={copied === s.name} onCopy={() => copy(s.hex, s.name)} />
        </li>
      ))}
    </ul>
  );
  return (
    <section className="sq-pv-sec" aria-labelledby="pv-colors">
      <h2 id="pv-colors">{labels.colors}</h2>
      {colors.lead || brand ? (
        <div className="sq-pv-group">
          <h3>{labels.groups.brand}</h3>
          {colors.lead ? (
            <div className="sq-pv-lead">
              <SwatchButton
                swatch={colors.lead}
                labels={labels}
                copied={copied === colors.lead.name}
                onCopy={() => copy(colors.lead!.hex, colors.lead!.name)}
              />
            </div>
          ) : null}
          {brand ? grid(brand.swatches) : null}
        </div>
      ) : null}
      {rest.map((g) => (
        <div className="sq-pv-group" key={g.key}>
          <h3>{labels.groups[g.key]}</h3>
          {grid(g.swatches)}
        </div>
      ))}
      {colors.ramps.length ? (
        <div className="sq-pv-group">
          <h3>{labels.scales}</h3>
          <div className="sq-pv-ramps">
            {colors.ramps.map((r) => (
              <RampRow key={r.hue} ramp={r} labels={labels} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

/* ─────────── Typography ─────────── */

const SCALE_VISIBLE = 8;

function FontCard({ face, labels }: { face: FontFace; labels: PreviewLabels }) {
  const meta = [labels.roles[face.role] ?? face.role, face.license ? labels.license[face.license] ?? face.license : null]
    .filter(Boolean)
    .join(" · ");
  return (
    <li className={face.live ? "sq-pv-font sq-pv-font-live" : "sq-pv-font"}>
      {face.live ? (
        <span className="sq-pv-aa" style={{ fontFamily: face.live }} aria-hidden="true">
          Aa
        </span>
      ) : null}
      <span className="sq-pv-font-t">
        <b lang="en">{face.name}</b>
        <span>{meta}</span>
        {face.source ? (
          <a href={face.source.url} target="_blank" rel="noopener noreferrer">
            {face.source.installable ? labels.install(face.source.name) : labels.source(face.source.name)}
            <span aria-hidden="true"> ↗</span>
          </a>
        ) : null}
      </span>
    </li>
  );
}

function metricsText(s: TypeStep): string {
  return [
    `${s.size}px${s.lineHeight ? ` / ${s.lineHeight.label}` : ""}`,
    s.weight ? String(s.weight) : null,
    s.tracking ? s.tracking.label : null,
  ]
    .filter(Boolean)
    .join(" · ");
}

function TypeScale({ scale, labels }: { scale: readonly TypeStep[]; labels: PreviewLabels }) {
  const [all, setAll] = useState(false);
  const shown = all ? scale : scale.slice(0, SCALE_VISIBLE);
  const max = scale.reduce((m, s) => Math.max(m, s.size), 0);
  return (
    <div className="sq-pv-scale">
      <h3>{labels.scale}</h3>
      <ol className="sq-pv-steps">
        {shown.map((s) => (
          <li key={s.name} className="sq-pv-step">
            <div className="sq-pv-step-h">
              <span className="sq-pv-step-n">
                <b lang="en">{s.name}</b>
                {s.use ? <span lang="en">{s.use}</span> : null}
              </span>
              <span className="sq-pv-step-m">
                <span aria-hidden="true">{metricsText(s)}</span>
                <span className="sr-only">{labels.metrics(s.size, s.lineHeight?.label, s.weight, s.tracking?.label)}</span>
              </span>
            </div>
            {s.specimen ? (
              <span
                className="sq-pv-spec"
                lang={s.specimen.lang}
                style={{
                  fontFamily: s.specimen.css,
                  fontSize: s.size,
                  fontWeight: s.weight,
                  lineHeight: s.lineHeight?.css,
                  letterSpacing: s.tracking?.css,
                }}
              >
                {s.specimen.text}
              </span>
            ) : (
              // No face to set it in: the role's size against the largest role, as a bar.
              <span className="sq-pv-tbar" style={{ width: `${Math.max(2, (s.size / max) * 100)}%` }} aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
      {scale.length > SCALE_VISIBLE ? (
        <button type="button" className="sq-pv-more" aria-expanded={all} onClick={() => setAll((v) => !v)}>
          {all ? labels.showFewer : labels.showAll(scale.length)}
        </button>
      ) : null}
    </div>
  );
}

function Typography({ fonts, scale, labels }: { fonts: readonly FontFace[]; scale: readonly TypeStep[]; labels: PreviewLabels }) {
  return (
    <section className="sq-pv-sec" aria-labelledby="pv-type">
      <h2 id="pv-type">{labels.type}</h2>
      {fonts.length ? (
        <ul className="sq-pv-fonts">
          {fonts.map((f) => (
            <FontCard key={`${f.role}-${f.family}`} face={f} labels={labels} />
          ))}
        </ul>
      ) : null}
      {scale.length ? <TypeScale scale={scale} labels={labels} /> : null}
    </section>
  );
}

/* ─────────── Spacing & shape ─────────── */

function Shape({
  spacing,
  radii,
  shadows,
  labels,
}: {
  spacing: readonly SpacingStep[];
  radii: readonly RadiusStep[];
  shadows: readonly ShadowStep[];
  labels: PreviewLabels;
}) {
  return (
    <section className="sq-pv-sec" aria-labelledby="pv-shape">
      <h2 id="pv-shape">{labels.shape}</h2>
      {spacing.length ? (
        <div className="sq-pv-group">
          <h3>{labels.spacing}</h3>
          <ul className="sq-pv-space">
            {spacing.map((s, i) => (
              <li key={`${s.name}-${i}`}>
                <span className="sq-pv-space-n" lang="en">{s.name}</span>
                <span className="sq-pv-space-v">{s.px}px</span>
                <span className="sq-pv-space-b" style={{ width: s.px }} aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {radii.length ? (
        <div className="sq-pv-group">
          <h3>{labels.radius}</h3>
          <ul className="sq-pv-tiles">
            {radii.map((r) => (
              <li key={r.name}>
                <span className="sq-pv-rad" style={{ borderRadius: r.css }} aria-hidden="true" />
                <span className="sq-pv-tile-n" lang="en">{r.name}</span>
                <span className="sq-pv-tile-v">{/^\d+(?:\.\d+)?$/.test(r.label) ? `${r.label}px` : r.label}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {shadows.length ? (
        <div className="sq-pv-group">
          <h3>{labels.elevation}</h3>
          <ul className="sq-pv-tiles sq-pv-shadows">
            {shadows.map((s) => (
              <li key={s.name}>
                {/* A white tile on a grey stage: a recorded `none` reads as a flat card, a shadow as lift. */}
                {s.css ? (
                  <span className="sq-pv-elev-st" aria-hidden="true">
                    <span className="sq-pv-elev" style={{ boxShadow: s.css }} />
                  </span>
                ) : null}
                <span className="sq-pv-tile-n" lang="en">{s.name}</span>
                <span className="sq-pv-tile-v" lang="en">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

/* ─────────── Components ─────────── */

/** White text on a clear or pale control would vanish on the light stage: give that one a dark stage. */
function needsDarkStage(s: ComponentSample): boolean {
  const fg = luminance(s.text);
  if (fg === null || fg <= 0.6) return false;
  if (!s.fill || s.fill === "transparent") return true;
  const alpha = s.fill.match(/rgba?\([^)]*,\s*([0-9.]+)\s*\)/i);
  if (alpha && parseFloat(alpha[1]) < 0.6) return true;
  const bg = luminance(s.fill);
  return bg !== null && bg > 0.6;
}

/** The control's label: the first quoted example in the variant name ("송금하기"), else the name itself. */
function sampleLabel(name: string): string {
  const quoted = name.match(/["'“”‘’「」]([^"'“”‘’「」]{1,18})["'“”‘’「」]/);
  if (quoted) return quoted[1];
  const head = name.split(/\s[(—–-]\s?|\s\(/)[0].trim();
  return head.length <= 22 ? head : head.slice(0, 20) + "…";
}

function Instance({ s }: { s: ComponentSample }) {
  const label = sampleLabel(s.name);
  const base: React.CSSProperties = {
    background: s.fill ?? "transparent",
    color: s.text,
    border: s.borderCss,
    borderRadius: s.radius,
    boxShadow: s.shadow,
    fontFamily: s.family,
    ...(s.fontSize ? { fontSize: s.fontSize } : {}),
    ...(s.fontWeight ? { fontWeight: s.fontWeight } : {}),
  };
  const box = { ...(s.height ? { height: s.height } : {}), ...(s.padding ? { padding: s.padding } : {}) };
  if (s.type === "input") {
    return (
      <span className="sq-pv-input" style={{ ...base, ...box }}>
        <span>{/["'“”‘’「」]/.test(s.name) ? label : ""}</span>
      </span>
    );
  }
  if (s.type === "card") return <span className="sq-pv-card" style={{ ...base, ...(s.padding ? { padding: s.padding } : {}) }} />;
  return (
    <span className="sq-pv-btn" style={{ ...base, ...box }}>
      {label}
    </span>
  );
}

function Components({ components, labels }: { components: readonly ComponentSample[]; labels: PreviewLabels }) {
  return (
    <section className="sq-pv-sec" aria-labelledby="pv-comp">
      <h2 id="pv-comp">{labels.components}</h2>
      <ul className="sq-pv-comp">
        {components.map((s) => (
          <li key={`${s.type}-${s.name}`}>
            <div className={`sq-pv-stage${needsDarkStage(s) ? " sq-pv-stage-dark" : ""}`}>
              <Instance s={s} />
            </div>
            <div className="sq-pv-cap">
              <b lang="en">{s.name}</b>
              <span>
                {[
                  s.fill && !s.fill.includes("gradient") ? `${labels.spec.fill} ${s.fill}` : null,
                  s.text ? `${labels.spec.text} ${s.text}` : null,
                  s.border ? `${labels.spec.border} ${s.border}` : null,
                  `${labels.spec.radius} ${s.radius}`,
                  s.height ? `${labels.spec.height} ${s.height}` : null,
                  s.padding ? `${labels.spec.padding} ${s.padding}` : null,
                  s.font ? `${labels.spec.type} ${s.font}` : null,
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </span>
              {s.states.length ? (
                <ul className="sq-pv-states">
                  {s.states.map((st) => (
                    <li key={st.key}>
                      {st.color ? <i style={{ background: st.color }} aria-hidden="true" /> : null}
                      <b>{labels.states[st.key]}</b> <span lang="en">{st.value}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {s.inventory ? (
                <p className="sq-pv-inv">
                  <b>{labels.inventory}</b> <span lang="en">{s.inventory}</span>
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ─────────── Main ─────────── */

export function ReferencePreview({
  model,
  labels = ITEM_EN.pv,
}: {
  /** Built on the server from the reference's own tokens (preview-tokens.server.ts). */
  model: PreviewModel;
  /** Section names in the page's language; values stay as the reference writes them. */
  labels?: PreviewLabels;
}) {
  const shape = model.spacing.length || model.radii.length || model.shadows.length;
  return (
    <div className="sq-pv">
      <FaceStyles hrefs={model.stylesheets} />
      {model.colors ? <Colors colors={model.colors} labels={labels} /> : null}
      {model.fonts.length || model.scale.length ? <Typography fonts={model.fonts} scale={model.scale} labels={labels} /> : null}
      {shape ? <Shape spacing={model.spacing} radii={model.radii} shadows={model.shadows} labels={labels} /> : null}
      {model.components.length ? <Components components={model.components} labels={labels} /> : null}
    </div>
  );
}
