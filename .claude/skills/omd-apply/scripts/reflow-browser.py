"""Terminal browser-harness runner for a locked OmD schema 0.3 reflow artifact.

This file is executed by the shipped `reflow-browser-runner.sh`, which invokes
`browser-harness` with its helpers pre-imported.
Required environment: OMD_REFLOW_ARTIFACT, OMD_REFLOW_PRODUCT,
OMD_REFLOW_HELPER, and BU_NAME. BU_CDP_URL is optional connection metadata.
"""

import atexit
import base64
import hashlib
import json
import os
import subprocess
from pathlib import Path


MECHANISM = "browser-harness named consumer CDP attachment"
ORACLE = "character-range-line-tops"
FIT_PLAN_ORACLE = "intrinsic-nowrap-text-width"
PRE_EDIT_SNAPSHOT_SOURCE = "deterministic-pre-edit-snapshot"
PLANNED_FIT_RESERVE_CSS_PX = 16
CONDITIONS = (
    {"id": "390", "viewport_width": 390, "zoom": 1},
    {"id": "320", "viewport_width": 320, "zoom": 1},
    {"id": "200pct", "viewport_width": 640, "zoom": 2},
)
DESKTOP_DECISION_CONDITION = {"id": "desktop", "viewport_width": 1440, "zoom": 1}


def dispatch_through_browser_harness_when_needed():
    """Keep a mistaken plain-Python invocation on the one allowed browser path.

    browser-harness evaluates this source with its helpers pre-imported. A model may
    still invoke the visible .py file with Python despite the exact skill command;
    in that case, re-exec the unchanged source through browser-harness before any
    artifact is read or mutated. The latch prevents recursion if the executable is
    broken or replaced by a non-conforming wrapper.
    """
    if "ensure_real_tab" in globals():
        return
    if os.environ.get("OMD_REFLOW_BROWSER_DISPATCHED") == "1":
        raise RuntimeError("browser-harness did not provide its required helpers")
    runner_source = Path(__file__).resolve()
    env = dict(os.environ)
    env["OMD_REFLOW_BROWSER_DISPATCHED"] = "1"
    result = subprocess.run(
        ["browser-harness"],
        input=runner_source.read_text(),
        text=True,
        env=env,
        check=False,
    )
    raise SystemExit(result.returncode)


dispatch_through_browser_harness_when_needed()


def required_path(name):
    value = os.environ.get(name)
    if not value:
        raise RuntimeError(f"{name} is required")
    path = Path(value).resolve()
    if not path.is_file():
        raise RuntimeError(f"{name} does not name a file: {path}")
    return path


artifact_path = required_path("OMD_REFLOW_ARTIFACT")
product_path = required_path("OMD_REFLOW_PRODUCT")
helper_path = required_path("OMD_REFLOW_HELPER")
connection_name = os.environ.get("BU_NAME")
cdp_url = os.environ.get("BU_CDP_URL") or os.environ.get("BU_CDP_WS")
mode = os.environ.get("OMD_REFLOW_MODE", "final")
if not connection_name:
    raise RuntimeError("BU_NAME is required")
if mode not in {"plan", "final"}:
    raise RuntimeError("OMD_REFLOW_MODE must be plan or final")

artifact = json.loads(artifact_path.read_text())


def plan_not_attempted(message):
    """Identify failures that happen before browser navigation or measurement."""
    raise SystemExit(
        "OMD_PLAN_NOT_ATTEMPTED: "
        f"{message} Correct the artifact bookkeeping and rerun the exact plan command; "
        "this does not consume the one measured plan attempt."
    )


if mode == "plan" and not artifact.get("pre_edit_product_snapshot"):
    snapshot_result = subprocess.run(
        ["node", str(helper_path), "snapshot", str(artifact_path)],
        capture_output=True,
        text=True,
        check=False,
    )
    if snapshot_result.returncode != 0:
        detail = (snapshot_result.stderr or snapshot_result.stdout).strip()
        plan_not_attempted(
            "artifact snapshot validation failed before browser navigation."
            + (f" Helper output: {detail}" if detail else "")
        )
    artifact = json.loads(artifact_path.read_text())

if artifact.get("schema_version") != "0.3":
    if mode == "plan":
        plan_not_attempted("reflow artifact schema 0.3 is required before browser navigation.")
    raise RuntimeError("reflow artifact schema 0.3 is required")
if mode == "plan":
    fit_plan_state = artifact.get("pre_edit_fit_plan", {}).get("state")
    if fit_plan_state in {"measured", "infrastructure-error"}:
        raise RuntimeError("the one measured pre-edit fit-plan attempt is already recorded; do not rerun it")
    if fit_plan_state != "pending":
        plan_not_attempted("plan mode requires a pending pre-edit fit plan before browser navigation.")
if mode == "final" and artifact.get("static_closure", {}).get("state") != "passed":
    raise RuntimeError("one passed deterministic static closure is required")
if mode == "final" and artifact.get("pre_edit_fit_plan", {}).get("state") != "measured":
    raise RuntimeError("final mode requires a measured pre-edit fit plan")

snapshot_contract = artifact.get("pre_edit_product_snapshot")
snapshot_rows = [
    row for row in artifact["row_groups"]
    if row.get("typography_contract", {}).get("source") == PRE_EDIT_SNAPSHOT_SOURCE
]
snapshot_path = None
if snapshot_rows:
    if not snapshot_contract:
        if mode == "plan":
            plan_not_attempted("deterministic typography rows require a pre-edit product snapshot.")
        raise RuntimeError("deterministic typography rows require a pre-edit product snapshot")
    try:
        snapshot_source = base64.b64decode(
            snapshot_contract["source_base64"], validate=True
        ).decode("utf-8")
        snapshot_sha256 = snapshot_contract["sha256"]
    except (KeyError, ValueError, UnicodeDecodeError) as error:
        if mode == "plan":
            plan_not_attempted(f"pre-edit product snapshot is invalid: {error}.")
        raise RuntimeError("pre-edit product snapshot is invalid") from error
    if hashlib.sha256(snapshot_source.encode("utf-8")).hexdigest() != snapshot_sha256:
        if mode == "plan":
            plan_not_attempted("pre-edit product snapshot sha256 mismatch before browser navigation.")
        raise RuntimeError("pre-edit product snapshot sha256 mismatch")
    snapshot_path = product_path.with_name(
        f".omd-reflow-pre-edit-{snapshot_sha256[:12]}{product_path.suffix}"
    )
    if snapshot_path.exists():
        raise RuntimeError(f"refusing to overwrite pre-edit snapshot path: {snapshot_path}")
    snapshot_path.write_text(snapshot_source)
    atexit.register(lambda: snapshot_path.unlink(missing_ok=True))

payload = {
    "rows": [
        {
            "id": row["id"],
            "selector": row["selector"],
            "role": row["role"],
            "expected_count": row["expected_count"],
            "line_contract": row["line_contract"],
            "longest_value": row["longest_value"],
            "typography_contract": row["typography_contract"],
            "required_fit_reserve_css_px": row["required_fit_reserve_css_px"],
            "comparison_scroll": row["decision"] == "comparison-scroll",
            "scroll_contract": row.get("scroll_contract"),
            "carrier_selectors": [
                carrier["selector"]
                for carrier in artifact["carriers"]
                if row["id"] in carrier["binds_row_groups"]
            ],
        }
        for row in artifact["row_groups"]
    ],
    "carriers": [
        {
            "id": carrier["id"],
            "selector": carrier["selector"],
            "expected_count": carrier["expected_count"],
            "binds_row_groups": carrier["binds_row_groups"],
            "other_carriers": [
                {"id": other["id"], "selector": other["selector"]}
                for other in artifact["carriers"]
                if other["id"] != carrier["id"]
            ],
        }
        for carrier in artifact["carriers"]
    ],
}


def browser_fit_plan_script(measurement_payload, zoom):
    encoded = json.dumps(measurement_payload)
    return f"""
(() => {{
  const packet = {encoded};
  const zoom = {json.dumps(zoom)};
  const visible = (element) => {{
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
  }};
  const intrinsicWidth = (element, value) => {{
    const style = getComputedStyle(element);
    const probe = document.createElement('span');
    probe.textContent = value;
    Object.assign(probe.style, {{
      position: 'fixed', left: '-100000px', top: '0', visibility: 'hidden',
      display: 'inline-block', width: 'max-content', maxWidth: 'none', minWidth: '0',
      margin: '0', padding: '0', border: '0', whiteSpace: 'nowrap',
      fontFamily: style.fontFamily, fontSize: style.fontSize, fontStyle: style.fontStyle,
      fontWeight: style.fontWeight, fontStretch: style.fontStretch,
      fontVariant: style.fontVariant, fontKerning: style.fontKerning,
      fontFeatureSettings: style.fontFeatureSettings, fontVariationSettings: style.fontVariationSettings,
      letterSpacing: style.letterSpacing, textTransform: style.textTransform,
    }});
    (element.parentElement || document.body).appendChild(probe);
    const width = probe.getBoundingClientRect().width / zoom;
    probe.remove();
    return width;
  }};
  const intrinsicCarrierWidth = (element) => {{
    const sourceStyle = getComputedStyle(element);
    const number = (value) => Number.isFinite(parseFloat(value)) ? parseFloat(value) : 0;
    const horizontalMargin = number(sourceStyle.marginLeft) + number(sourceStyle.marginRight);
    const sourceHorizontalChrome = number(sourceStyle.paddingLeft) + number(sourceStyle.paddingRight) +
      number(sourceStyle.borderLeftWidth) + number(sourceStyle.borderRightWidth);
    const liveInnerWidth = Math.max(0, element.getBoundingClientRect().width / zoom - sourceHorizontalChrome);
    const containedDocumentBudget = Math.max(
      0,
      document.documentElement.clientWidth / zoom - sourceHorizontalChrome - horizontalMargin,
    );
    const availableInnerWidth = Math.min(liveInnerWidth, containedDocumentBudget);
    const probe = element.cloneNode(true);
    probe.querySelectorAll('[id]').forEach((item) => item.removeAttribute('id'));
    probe.removeAttribute('id');
    probe.setAttribute('aria-hidden', 'true');
    Object.assign(probe.style, {{
      position: 'fixed', left: '-100000px', top: '0', visibility: 'hidden',
      width: 'max-content', maxWidth: 'none', minWidth: '0',
      margin: '0', overflow: 'visible', flex: 'none',
    }});
    (element.parentElement || document.body).appendChild(probe);
    const style = getComputedStyle(probe);
    const horizontalChrome = number(style.paddingLeft) + number(style.paddingRight) +
      number(style.borderLeftWidth) + number(style.borderRightWidth);
    const gap = Math.max(number(style.columnGap), number(style.gap));
    const outerWidth = probe.getBoundingClientRect().width / zoom + horizontalMargin;
    probe.remove();
    return {{
      intrinsic_outer_width_css_px: outerWidth,
      horizontal_chrome_css_px: horizontalChrome,
      inter_item_gap_css_px: gap,
      live_inner_width_css_px: liveInnerWidth,
      contained_document_budget_css_px: containedDocumentBudget,
      available_inner_width_css_px: availableInnerWidth,
    }};
  }};
  const rows = Object.fromEntries(packet.rows.map((row) => {{
    const elements = [...document.querySelectorAll(row.selector)].filter(visible);
    const widths = elements.map((element) => intrinsicWidth(element, row.longest_value));
    return [row.id, {{
      count: elements.length,
      intrinsic_text_width_css_px: widths.length ? Math.max(...widths) : null,
    }}];
  }}));
  const carriers = Object.fromEntries(packet.carriers.map((carrier) => {{
    const elements = [...document.querySelectorAll(carrier.selector)].filter(visible);
    const measurements = elements.map(intrinsicCarrierWidth);
    const containedCarrierIds = [...new Set(elements.flatMap((element) =>
      carrier.other_carriers.filter((other) =>
        [...document.querySelectorAll(other.selector)].some((candidate) => element.contains(candidate)))
        .map((other) => other.id)))];
    const maximum = (key) => measurements.length
      ? Math.max(...measurements.map((measurement) => measurement[key]))
      : null;
    const minimum = (key) => measurements.length
      ? Math.min(...measurements.map((measurement) => measurement[key]))
      : null;
    return [carrier.id, {{
      count: elements.length,
      intrinsic_outer_width_css_px: maximum('intrinsic_outer_width_css_px'),
      horizontal_chrome_css_px: maximum('horizontal_chrome_css_px'),
      inter_item_gap_css_px: maximum('inter_item_gap_css_px'),
      available_inner_width_css_px: minimum('available_inner_width_css_px'),
      contained_carrier_ids: containedCarrierIds,
    }}];
  }}));
  const decisionContext = (() => {{
    const targetRows = packet.rows.filter((row) => row.role === 'target' && row.comparison_scroll);
    if (!targetRows.length) return {{ required: false, pass: true, targets: [] }};
    const targets = targetRows.map((row) => {{
      const target = document.querySelector(row.selector);
      const carrier = document.querySelector(row.scroll_contract.container_selector);
      const context = target?.closest('[data-bench-decision-role="context"]') ?? carrier?.parentElement;
      const supporting = context ? [...context.querySelectorAll(
        '[data-bench-decision-role="evidence"], [data-bench-decision-role="state"], [data-bench-decision-role="action"]'
      )].filter(visible) : [];
      if (!target || !carrier || !context || !supporting.length) {{
        return {{ id: row.id, full_row: false, precedes_supporting: false, spatially_separated: false, pass: false }};
      }}
      const carrierRect = carrier.getBoundingClientRect();
      const contextStyle = getComputedStyle(context);
      const paddingInline = parseFloat(contextStyle.paddingLeft) + parseFloat(contextStyle.paddingRight);
      const contentWidth = context.clientWidth - paddingInline;
      const carrierWidth = carrier.offsetWidth;
      const fullRow = carrierWidth + 1 >= contentWidth;
      const precedesSupporting = supporting.every((item) =>
        Boolean(carrier.compareDocumentPosition(item) & Node.DOCUMENT_POSITION_FOLLOWING));
      const spatiallySeparated = supporting.every((item) => {{
        const rect = item.getBoundingClientRect();
        return carrierRect.bottom <= rect.top + 0.5 || rect.bottom <= carrierRect.top + 0.5 ||
          carrierRect.right <= rect.left + 0.5 || rect.right <= carrierRect.left + 0.5;
      }});
      return {{ id: row.id, full_row: fullRow, precedes_supporting: precedesSupporting,
        spatially_separated: spatiallySeparated, carrier_width_css_px: carrierWidth,
        context_client_width_css_px: context.clientWidth, context_content_width_css_px: contentWidth,
        pass: fullRow && precedesSupporting && spatiallySeparated }};
    }});
    return {{ required: true, pass: targets.every((target) => target.pass), targets }};
  }})();
  return JSON.stringify({{
    observed_document_zoom: parseFloat(getComputedStyle(document.documentElement).zoom || '1'),
    document_scroll_width: document.documentElement.scrollWidth,
    document_client_width: document.documentElement.clientWidth,
    body_scroll_width: document.body.scrollWidth,
    body_client_width: document.body.clientWidth,
    rows,
    carriers,
    decision_context: decisionContext,
  }});
}})()
"""


def browser_typography_script(measurement_payload):
    encoded = json.dumps(measurement_payload)
    return f"""
(() => {{
  const packet = {encoded};
  const normalizeWeight = (value) => String(value ?? '');
  const rows = Object.fromEntries(packet.rows.map((row) => {{
    const elements = [...document.querySelectorAll(row.selector)];
    const types = elements.map((element) => {{
      const style = getComputedStyle(element);
      return {{
        font_size_px: parseFloat(style.fontSize),
        line_height_px: parseFloat(style.lineHeight),
        font_weight: normalizeWeight(style.fontWeight),
      }};
    }});
    const first = types[0] ?? null;
    const uniform = first !== null && types.every((item) =>
      Math.abs(item.font_size_px - first.font_size_px) < 0.01 &&
      Math.abs(item.line_height_px - first.line_height_px) < 0.01 &&
      item.font_weight === first.font_weight);
    return [row.id, {{ count: elements.length, uniform, type: first }}];
  }}));
  return JSON.stringify({{ rows }});
}})()
"""


def browser_decision_context_script(measurement_payload):
    encoded = json.dumps(measurement_payload)
    return f"""
(() => {{
  const packet = {encoded};
  const visible = (element) => {{
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return style.display !== 'none' && style.visibility !== 'hidden' &&
      style.opacity !== '0' && rect.width > 0 && rect.height > 0;
  }};
  const targetRows = packet.rows.filter((row) => row.role === 'target' && row.comparison_scroll);
  if (!targetRows.length) return JSON.stringify({{ required: false, pass: true, targets: [] }});
  const targets = targetRows.map((row) => {{
    const target = document.querySelector(row.selector);
    const carrier = document.querySelector(row.scroll_contract.container_selector);
    const context = target?.closest('[data-bench-decision-role="context"]') ?? carrier?.parentElement;
    const supporting = context ? [...context.querySelectorAll(
      '[data-bench-decision-role="evidence"], [data-bench-decision-role="state"], [data-bench-decision-role="action"]'
    )].filter(visible) : [];
    if (!target || !carrier || !context || !supporting.length) {{
      return {{ id: row.id, full_row: false, precedes_supporting: false, spatially_separated: false, pass: false }};
    }}
    const carrierRect = carrier.getBoundingClientRect();
    const contextStyle = getComputedStyle(context);
    const paddingInline = parseFloat(contextStyle.paddingLeft) + parseFloat(contextStyle.paddingRight);
    const contentWidth = context.clientWidth - paddingInline;
    const carrierWidth = carrier.offsetWidth;
    const fullRow = carrierWidth + 1 >= contentWidth;
    const precedesSupporting = supporting.every((item) =>
      Boolean(carrier.compareDocumentPosition(item) & Node.DOCUMENT_POSITION_FOLLOWING));
    const spatiallySeparated = supporting.every((item) => {{
      const rect = item.getBoundingClientRect();
      return carrierRect.bottom <= rect.top + 0.5 || rect.bottom <= carrierRect.top + 0.5 ||
        carrierRect.right <= rect.left + 0.5 || rect.right <= carrierRect.left + 0.5;
    }});
    return {{ id: row.id, full_row: fullRow, precedes_supporting: precedesSupporting,
      spatially_separated: spatiallySeparated, carrier_width_css_px: carrierWidth,
      context_client_width_css_px: context.clientWidth, context_content_width_css_px: contentWidth,
      pass: fullRow && precedesSupporting && spatiallySeparated }};
  }});
  return JSON.stringify({{ required: true, pass: targets.every((target) => target.pass), targets }});
}})()
"""


def browser_measurement_script(measurement_payload, zoom, baseline_typography):
    encoded = json.dumps(measurement_payload)
    baseline = json.dumps(baseline_typography)
    return f"""
(() => {{
  const packet = {encoded};
  const baseline = {baseline};
  const zoom = {json.dumps(zoom)};
  const visible = (element) => {{
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return style.display !== 'none' && style.visibility !== 'hidden' &&
      style.opacity !== '0' && rect.width > 0 && rect.height > 0;
  }};
  const textMetrics = (element, row) => {{
    const characters = [];
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {{
      const node = walker.currentNode;
      if (node.parentElement?.closest('script, style, [hidden]')) continue;
      for (let index = 0; index < node.data.length; index += 1) {{
        if (/\\s/u.test(node.data[index])) continue;
        const range = document.createRange();
        range.setStart(node, index);
        range.setEnd(node, index + 1);
        const rect = range.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) characters.push({{
          top: Math.round(rect.top * 2) / 2,
          left: rect.left,
          right: rect.right,
        }});
      }}
    }}
    const lines = new Map();
    for (const character of characters) {{
      const line = lines.get(character.top) ?? {{ left: character.left, right: character.right }};
      line.left = Math.min(line.left, character.left);
      line.right = Math.max(line.right, character.right);
      lines.set(character.top, line);
    }}
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    const declaredCarriers = row.carrier_selectors.flatMap((selector) =>
      [...document.querySelectorAll(selector)].filter((carrier) =>
        carrier !== element && carrier.contains(element) && visible(carrier)));
    const fallbackCarriers = [];
    for (let parent = element.parentElement; parent; parent = parent.parentElement) {{
      const parentRect = parent.getBoundingClientRect();
      if (parentRect.width > rect.width + 1 && visible(parent)) fallbackCarriers.push(parent);
    }}
    const carrier = [...declaredCarriers, ...fallbackCarriers]
      .sort((a, b) => a.getBoundingClientRect().width - b.getBoundingClientRect().width)[0] ?? element;
    const carrierStyle = getComputedStyle(carrier);
    const carrierRect = carrier.getBoundingClientRect();
    const fitRight = carrierRect.right - parseFloat(carrierStyle.borderRightWidth) * zoom;
    const lineRight = Math.max(rect.left, ...[...lines.values()].map((line) => line.right));
    return {{
      line_count: lines.size,
      inline_reserve_css_px: (fitRight - lineRight) / zoom,
      font_size_px: parseFloat(style.fontSize),
      line_height_px: parseFloat(style.lineHeight),
      font_weight: style.fontWeight,
      visible: visible(element),
    }};
  }};
  const rows = Object.fromEntries(packet.rows.map((row) => {{
    const elements = [...document.querySelectorAll(row.selector)];
    const instances = elements.map((element) => textMetrics(element, row));
    const normalize = (value) => String(value ?? '').replace(/\\s+/gu, ' ').trim();
    const containsLongestValue = elements.some((element) =>
      normalize(element.textContent || element.value || element.getAttribute('aria-label')) === normalize(row.longest_value));
    const snapshotType = baseline[row.id]?.type ?? null;
    const type = row.typography_contract.source === {json.dumps(PRE_EDIT_SNAPSHOT_SOURCE)}
      ? snapshotType
      : row.typography_contract;
    const exactType = instances.every((item) =>
      type !== null &&
      Math.abs(item.font_size_px - Number(type.font_size_px)) < 0.01 &&
      Math.abs(item.line_height_px - Number(type.line_height_px)) < 0.01 &&
      String(item.font_weight) === String(type.font_weight));
    const oneLine = instances.every((item) => item.line_count === 1);
    const reserve = Math.min(Infinity, ...instances.map((item) => item.inline_reserve_css_px));
    return [row.id, {{
      count: elements.length,
      visible: instances.every((item) => item.visible),
      observed_font_size_px: instances[0]?.font_size_px ?? null,
      observed_line_height_px: instances[0]?.line_height_px ?? null,
      observed_font_weight: instances[0]?.font_weight ?? null,
      pre_edit_snapshot_sha256: row.typography_contract.source === {json.dumps(PRE_EDIT_SNAPSHOT_SOURCE)}
        ? {json.dumps(snapshot_contract["sha256"] if snapshot_contract else None)} : null,
      pre_edit_font_size_px: type?.font_size_px ?? null,
      pre_edit_line_height_px: type?.line_height_px ?? null,
      pre_edit_font_weight: type?.font_weight ?? null,
      inline_reserve_css_px: Number.isFinite(reserve) ? reserve : null,
      pass: elements.length === row.expected_count && containsLongestValue && instances.every((item) => item.visible) &&
        baseline[row.id]?.uniform !== false && oneLine && exactType &&
        (row.comparison_scroll || reserve >= row.required_fit_reserve_css_px),
    }}];
  }}));
  const rowById = Object.fromEntries(packet.rows.map((row) => [row.id, row]));
  const allowedScrollSelectors = new Set(packet.rows
    .filter((row) => row.comparison_scroll)
    .map((row) => row.scroll_contract.container_selector));
  const carriers = Object.fromEntries(packet.carriers.map((carrier) => {{
    const elements = [...document.querySelectorAll(carrier.selector)];
    const bound = carrier.binds_row_groups.every((id) => {{
      const row = rowById[id];
      if (!row) return false;
      return [...document.querySelectorAll(row.selector)].every((item) =>
        elements.some((container) => container === item || container.contains(item)));
    }});
    const scrollAndFocus = elements.every((element) => {{
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      const overflowing = element.scrollWidth > element.clientWidth + 0.5;
      const scrollAllowed = !overflowing || allowedScrollSelectors.has(carrier.selector);
      const focusables = [...element.querySelectorAll('button, a[href], input, select, textarea, [tabindex]')]
        .filter((item) => visible(item));
      const focusablesUnclipped = focusables.every((item) => {{
        const itemRect = item.getBoundingClientRect();
        return itemRect.left >= Math.max(0, rect.left) - 0.5 &&
          itemRect.right <= Math.min(innerWidth, rect.right) + 0.5;
      }});
      if (!allowedScrollSelectors.has(carrier.selector)) return scrollAllowed && focusablesUnclipped;
      const comparisonRows = packet.rows.filter((row) =>
        row.comparison_scroll && row.scroll_contract.container_selector === carrier.selector);
      const accessibleName = element.getAttribute('aria-label') ||
        (element.getAttribute('aria-labelledby')
          ? document.getElementById(element.getAttribute('aria-labelledby'))?.textContent?.trim()
          : '');
      const namesMatch = comparisonRows.every((row) => accessibleName === row.scroll_contract.accessible_name);
      const onlyTargetRows = packet.rows.every((row) =>
        comparisonRows.some((candidate) => candidate.id === row.id) ||
        [...document.querySelectorAll(row.selector)].every((item) => !element.contains(item)));
      const noFocusableDescendants = focusables.length === 0;
      return scrollAllowed && element.tabIndex >= 0 && namesMatch && onlyTargetRows && noFocusableDescendants;
    }});
    return [carrier.id, {{
      count: elements.length,
      visible: elements.every(visible),
      bound,
      scroll_and_focus: scrollAndFocus,
      pass: elements.length === carrier.expected_count && elements.every(visible) && bound && scrollAndFocus,
    }}];
  }}));
  return JSON.stringify({{
    observed_document_zoom: parseFloat(getComputedStyle(document.documentElement).zoom || '1'),
    document_scroll_width: document.documentElement.scrollWidth,
    document_client_width: document.documentElement.clientWidth,
    body_scroll_width: document.body.scrollWidth,
    body_client_width: document.body.clientWidth,
    rows,
    carriers,
  }});
}})()
"""


def failed_fit_plan(error):
    artifact["pre_edit_fit_plan"] = {
        "state": "infrastructure-error",
        "attempts": 1,
        "mechanism": MECHANISM,
        "connection": {
            "transport": "existing-cdp",
            "connection_name": connection_name,
            "cdp_url": cdp_url,
            "attached_existing": False,
            "launched_browser": False,
        },
        "oracle": FIT_PLAN_ORACLE,
        "conditions": [],
        "rows": [],
        "carriers": [],
        "error": str(error),
    }
    artifact_path.write_text(json.dumps(artifact, indent=2) + "\n")
    return 1


if mode == "plan":
    plan_observations = []
    try:
        ensure_real_tab()
        for condition in CONDITIONS:
            cdp(
                "Emulation.setDeviceMetricsOverride",
                width=condition["viewport_width"],
                height=1000,
                deviceScaleFactor=1,
                mobile=False,
            )
            goto_url(product_path.as_uri())
            if not wait_for_load(timeout=15):
                raise RuntimeError("pre-edit consumer route did not finish loading")
            js(f"document.documentElement.style.zoom = {json.dumps(str(condition['zoom']))}")
            observed = json.loads(js(browser_fit_plan_script(payload, condition["zoom"])))
            for row in artifact["row_groups"]:
                result = observed["rows"][row["id"]]
                if result["count"] != row["expected_count"] or not result["intrinsic_text_width_css_px"]:
                    raise RuntimeError(f"pre-edit fit-plan row {row['id']} did not resolve its locked instances")
            for carrier in artifact["carriers"]:
                result = observed["carriers"][carrier["id"]]
                if result["count"] != carrier["expected_count"] or not result["intrinsic_outer_width_css_px"]:
                    raise RuntimeError(f"pre-edit fit-plan carrier {carrier['id']} did not resolve its locked instances")
            plan_observations.append({**condition, **observed})
    except Exception as error:
        raise SystemExit(failed_fit_plan(error))

    artifact["pre_edit_fit_plan"] = {
        "state": "measured",
        "attempts": 1,
        "mechanism": MECHANISM,
        "connection": {
            "transport": "existing-cdp",
            "connection_name": connection_name,
            "cdp_url": cdp_url,
            "attached_existing": True,
            "launched_browser": False,
        },
        "oracle": FIT_PLAN_ORACLE,
        "conditions": [
            {key: observation[key] for key in (
                "id", "viewport_width", "zoom", "observed_document_zoom",
                "document_scroll_width", "document_client_width",
                "body_scroll_width", "body_client_width",
            )}
            for observation in plan_observations
        ],
        "rows": [
            {
                "id": row["id"],
                "measurements": [
                    {
                        "id": observation["id"],
                        "intrinsic_text_width_css_px": round(
                            observation["rows"][row["id"]]["intrinsic_text_width_css_px"], 4
                        ),
                        "required_carrier_inner_width_css_px": round(
                            observation["rows"][row["id"]]["intrinsic_text_width_css_px"]
                            + PLANNED_FIT_RESERVE_CSS_PX, 4
                        ),
                    }
                    for observation in plan_observations
                ],
            }
            for row in artifact["row_groups"]
        ],
        "carriers": [
            {
                "id": carrier["id"],
                "contained_carrier_ids": sorted(set().union(*[
                    set(observation["carriers"][carrier["id"]]["contained_carrier_ids"])
                    for observation in plan_observations
                ])),
                "measurements": [
                    {
                        "id": observation["id"],
                        "intrinsic_outer_width_css_px": round(
                            observation["carriers"][carrier["id"]]["intrinsic_outer_width_css_px"], 4
                        ),
                        "horizontal_chrome_css_px": round(
                            observation["carriers"][carrier["id"]]["horizontal_chrome_css_px"], 4
                        ),
                        "inter_item_gap_css_px": round(
                            observation["carriers"][carrier["id"]]["inter_item_gap_css_px"], 4
                        ),
                        "required_outer_width_css_px": round(
                            observation["carriers"][carrier["id"]]["intrinsic_outer_width_css_px"]
                            + PLANNED_FIT_RESERVE_CSS_PX, 4
                        ),
                        "available_document_width_css_px": round(
                            observation["document_client_width"] / observation["observed_document_zoom"], 4
                        ),
                        "available_carrier_inner_width_css_px": round(
                            observation["carriers"][carrier["id"]]["available_inner_width_css_px"], 4
                        ),
                        "requires_reflow": (
                            observation["carriers"][carrier["id"]]["intrinsic_outer_width_css_px"]
                            + PLANNED_FIT_RESERVE_CSS_PX
                            > observation["document_client_width"] / observation["observed_document_zoom"]
                        ),
                    }
                    for observation in plan_observations
                ],
            }
            for carrier in artifact["carriers"]
        ],
    }
    artifact_path.write_text(json.dumps(artifact, indent=2) + "\n")
    result = subprocess.run(
        ["node", str(helper_path), "plan-close", str(artifact_path)],
        capture_output=True,
        text=True,
        check=False,
    )
    if result.stdout:
        print(result.stdout, end="")
    if result.returncode != 0:
        detail = (result.stderr or result.stdout).strip()
        raise SystemExit(
            "OMD_PLAN_MEASURED_RECONCILE_REQUIRED: the one browser measurement is persisted, "
            "but semantic plan closure failed. Do not edit the product and do not rerun the browser. "
            "Create one guarded deterministic decision packet: "
            f"`node {helper_path} plan-packet {artifact_path} {artifact_path}.plan-decision.json`. "
            "If its operator_inputs contain null accessible names, supply only those explicit names; do not edit the complete patch. Then run "
            f"`node {helper_path} plan-apply {artifact_path} {artifact_path}.plan-decision.json` once. "
            "If the packet verdict is irreconcilable, abort this run before any product edit."
            + (f" Helper output: {detail}" if detail else "")
        )
    raise SystemExit(0)


def unresolved_attempt():
    artifact["browser_attempt"] = {
        "attempts": 1,
        "outcome": "infrastructure-error",
        "mechanism": MECHANISM,
        "connection": {
            "transport": "existing-cdp",
            "connection_name": connection_name,
            "cdp_url": cdp_url,
            "attached_existing": False,
            "launched_browser": False,
        },
        "oracle": ORACLE,
        "conditions": [],
    }
    artifact_path.write_text(json.dumps(artifact, indent=2) + "\n")
    return subprocess.run(
        ["node", str(helper_path), "finalize-unresolved", str(artifact_path)],
        check=False,
    ).returncode


observations = []
try:
    ensure_real_tab()
except Exception:
    raise SystemExit(unresolved_attempt())

try:
    cdp(
        "Emulation.setDeviceMetricsOverride",
        width=DESKTOP_DECISION_CONDITION["viewport_width"],
        height=1000,
        deviceScaleFactor=1,
        mobile=False,
    )
    goto_url(product_path.as_uri())
    if not wait_for_load(timeout=15):
        raise RuntimeError("desktop decision-context route did not finish loading")
    js("document.documentElement.style.zoom = '1'")
    desktop_decision_context = json.loads(js(browser_decision_context_script(payload)))
except Exception:
    raise SystemExit(unresolved_attempt())

for condition in CONDITIONS:
    baseline_typography = {}
    if snapshot_path is not None:
        try:
            cdp(
                "Emulation.setDeviceMetricsOverride",
                width=condition["viewport_width"],
                height=1000,
                deviceScaleFactor=1,
                mobile=False,
            )
            goto_url(snapshot_path.as_uri())
            if not wait_for_load(timeout=15):
                raise RuntimeError("pre-edit snapshot did not finish loading")
            js(f"document.documentElement.style.zoom = {json.dumps(str(condition['zoom']))}")
            baseline_typography = json.loads(js(browser_typography_script(payload)))["rows"]
        except Exception:
            raise SystemExit(unresolved_attempt())
    try:
        cdp(
            "Emulation.setDeviceMetricsOverride",
            width=condition["viewport_width"],
            height=1000,
            deviceScaleFactor=1,
            mobile=False,
        )
        goto_url(product_path.as_uri())
        if not wait_for_load(timeout=15):
            raise RuntimeError("consumer route did not finish loading")
        js(f"document.documentElement.style.zoom = {json.dumps(str(condition['zoom']))}")
    except Exception:
        raise SystemExit(unresolved_attempt())
    try:
        observed = json.loads(js(browser_measurement_script(
            payload,
            condition["zoom"],
            baseline_typography,
        )))
        observed["decision_context"] = json.loads(js(browser_decision_context_script(payload)))
    except Exception as error:
        artifact["browser_attempt"] = {
            "attempts": 1,
            "outcome": "measurement-error",
            "mechanism": MECHANISM,
            "connection": {
                "transport": "existing-cdp",
                "connection_name": connection_name,
                "cdp_url": cdp_url,
                "attached_existing": True,
                "launched_browser": False,
            },
            "oracle": ORACLE,
            "conditions": observations,
            "measurement_error": str(error),
        }
        artifact_path.write_text(json.dumps(artifact, indent=2) + "\n")
        raise
    observations.append({**condition, **observed})

artifact["browser_attempt"] = {
    "attempts": 1,
    "outcome": "measured",
    "mechanism": MECHANISM,
    "connection": {
        "transport": "existing-cdp",
        "connection_name": connection_name,
        "cdp_url": cdp_url,
        "attached_existing": True,
        "launched_browser": False,
    },
    "oracle": ORACLE,
    "conditions": [
        {key: observation[key] for key in (
            "id", "viewport_width", "zoom", "observed_document_zoom",
            "document_scroll_width", "document_client_width",
            "body_scroll_width", "body_client_width",
        )}
        for observation in observations
    ],
    "decision_context_conditions": [
        {"id": "desktop", **desktop_decision_context},
        *[
            {"id": observation["id"], **observation["decision_context"]}
            for observation in observations
        ],
    ],
}

condition_field = {"390": "outcome_390", "320": "outcome_320", "200pct": "outcome_200pct"}
all_pass = True
for carrier in artifact["carriers"]:
    carrier["final"] = {}
    for observation in observations:
        carrier_result = observation["carriers"][carrier["id"]]
        passed = carrier_result["pass"]
        carrier["final"][condition_field[observation["id"]]] = "pass" if passed else "unresolved"
        carrier["final"].setdefault("diagnostics", []).append({
            "id": observation["id"],
            "count": carrier_result["count"],
            "visible": carrier_result["visible"],
            "bound": carrier_result["bound"],
            "scroll_and_focus": carrier_result["scroll_and_focus"],
        })
        all_pass = all_pass and passed

for row in artifact["row_groups"]:
    outcomes = {}
    measurements = []
    for observation in observations:
        result = observation["rows"][row["id"]]
        passed = result["pass"]
        outcomes[condition_field[observation["id"]]] = "pass" if passed else "unresolved"
        measurements.append({
            "id": observation["id"],
            "observed_font_size_px": result["observed_font_size_px"],
            "observed_line_height_px": result["observed_line_height_px"],
            "observed_font_weight": result["observed_font_weight"],
            "pre_edit_snapshot_sha256": result["pre_edit_snapshot_sha256"],
            "pre_edit_font_size_px": result["pre_edit_font_size_px"],
            "pre_edit_line_height_px": result["pre_edit_line_height_px"],
            "pre_edit_font_weight": result["pre_edit_font_weight"],
            "inline_reserve_css_px": result["inline_reserve_css_px"],
        })
        all_pass = all_pass and passed
    row["final"] = {
        **outcomes,
        "status": "pass" if all(value == "pass" for value in outcomes.values()) else "unresolved",
        "passive_text_scroll_container": False,
        "measurements": measurements,
    }

decision_observations = [
    {"id": "desktop", "decision_context": desktop_decision_context},
    *observations,
]
decision_context_final = {}
decision_condition_field = {"desktop": "outcome_desktop", **condition_field}
for observation in decision_observations:
    passed = observation["decision_context"]["pass"]
    decision_context_final[decision_condition_field[observation["id"]]] = "pass" if passed else "unresolved"
    all_pass = all_pass and passed
artifact["decision_context_final"] = {
    **decision_context_final,
    "status": "pass" if all(value == "pass" for value in decision_context_final.values()) else "unresolved",
    "conditions": [
        {"id": observation["id"], **observation["decision_context"]}
        for observation in decision_observations
    ],
}

artifact["invariants"]["all_registered_carriers_closed"] = all_pass
artifact["known_failure_closure"] = {"state": "closed" if all_pass else "unresolved", "unresolved": 0 if all_pass else 1}
artifact["closure"] = {"state": "open"}
artifact_path.write_text(json.dumps(artifact, indent=2) + "\n")
finalize_command = "finalize" if all_pass else "finalize-measured-unresolved"
result = subprocess.run(["node", str(helper_path), finalize_command, str(artifact_path)], check=False)
raise SystemExit(result.returncode)
