"""Terminal browser-harness runner for a locked OmD schema 0.3 reflow artifact.

This file is executed by `browser-harness`, whose helpers are pre-imported.
Required environment: OMD_REFLOW_ARTIFACT, OMD_REFLOW_PRODUCT,
OMD_REFLOW_HELPER, BU_NAME, and BU_CDP_URL.
"""

import json
import os
import subprocess
from pathlib import Path


MECHANISM = "browser-harness named consumer CDP attachment"
ORACLE = "character-range-line-tops"
CONDITIONS = (
    {"id": "390", "viewport_width": 390, "zoom": 1},
    {"id": "320", "viewport_width": 320, "zoom": 1},
    {"id": "200pct", "viewport_width": 640, "zoom": 2},
)


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
cdp_url = os.environ.get("BU_CDP_URL")
if not connection_name or not cdp_url:
    raise RuntimeError("BU_NAME and BU_CDP_URL are required")

artifact = json.loads(artifact_path.read_text())
if artifact.get("schema_version") != "0.3":
    raise RuntimeError("reflow artifact schema 0.3 is required")
if artifact.get("static_closure", {}).get("state") != "passed":
    raise RuntimeError("one passed deterministic static closure is required")

payload = {
    "rows": [
        {
            "id": row["id"],
            "selector": row["selector"],
            "expected_count": row["expected_count"],
            "line_contract": row["line_contract"],
            "longest_value": row["longest_value"],
            "typography_contract": row["typography_contract"],
            "required_fit_reserve_css_px": row["required_fit_reserve_css_px"],
            "comparison_scroll": row["decision"] == "comparison-scroll",
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
        }
        for carrier in artifact["carriers"]
    ],
}


def browser_measurement_script(measurement_payload, zoom):
    encoded = json.dumps(measurement_payload)
    return f"""
(() => {{
  const packet = {encoded};
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
    const contentRight = carrierRect.right - parseFloat(carrierStyle.paddingRight) * zoom;
    const lineRight = Math.max(rect.left, ...[...lines.values()].map((line) => line.right));
    return {{
      line_count: lines.size,
      inline_reserve_css_px: (contentRight - lineRight) / zoom,
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
    const type = row.typography_contract;
    const exactType = instances.every((item) =>
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
      inline_reserve_css_px: Number.isFinite(reserve) ? reserve : null,
      pass: elements.length === row.expected_count && containsLongestValue && instances.every((item) => item.visible) &&
        oneLine && exactType && (row.comparison_scroll || reserve >= row.required_fit_reserve_css_px),
    }}];
  }}));
  const rowById = Object.fromEntries(packet.rows.map((row) => [row.id, row]));
  const carriers = Object.fromEntries(packet.carriers.map((carrier) => {{
    const elements = [...document.querySelectorAll(carrier.selector)];
    const bound = carrier.binds_row_groups.every((id) => {{
      const row = rowById[id];
      if (!row) return false;
      return [...document.querySelectorAll(row.selector)].every((item) =>
        elements.some((container) => container === item || container.contains(item)));
    }});
    return [carrier.id, {{
      count: elements.length,
      visible: elements.every(visible),
      bound,
      pass: elements.length === carrier.expected_count && elements.every(visible) && bound,
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

for condition in CONDITIONS:
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
        observed = json.loads(js(browser_measurement_script(payload, condition["zoom"])))
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
}

condition_field = {"390": "outcome_390", "320": "outcome_320", "200pct": "outcome_200pct"}
all_pass = True
for carrier in artifact["carriers"]:
    carrier["final"] = {}
    for observation in observations:
        passed = observation["carriers"][carrier["id"]]["pass"]
        carrier["final"][condition_field[observation["id"]]] = "pass" if passed else "unresolved"
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
            "inline_reserve_css_px": result["inline_reserve_css_px"],
        })
        all_pass = all_pass and passed
    row["final"] = {
        **outcomes,
        "status": "pass" if all(value == "pass" for value in outcomes.values()) else "unresolved",
        "passive_text_scroll_container": False,
        "measurements": measurements,
    }

artifact["invariants"]["all_registered_carriers_closed"] = all_pass
artifact["known_failure_closure"] = {"state": "closed" if all_pass else "unresolved", "unresolved": 0 if all_pass else 1}
artifact["closure"] = {"state": "open"}
artifact_path.write_text(json.dumps(artifact, indent=2) + "\n")
result = subprocess.run(["node", str(helper_path), "finalize", str(artifact_path)], check=False)
raise SystemExit(result.returncode)
