export function initialProofPolicyState() {
  return {
    schema_version: "0.1",
    revision: 0,
    static_closure: "open",
    browser_proof: "open",
    browser_attempts: 0,
    delivery: "blocked",
    violations: {
      browser_recovery: 0,
      duplicate_static_closure: 0,
      verification_after_ready: 0,
      native_browser_unintercepted: 0,
    },
    native_observation: {
      observed_calls: 0,
      unblocked_calls: 0,
      source: null,
    },
    reflow_contract: {
      required: false,
      inventory_sha256: null,
      carrier_count: 0,
      row_count: 0,
      closure: "not-required",
    },
    decisions: [],
  };
}

function copyState(state) {
  return {
    ...state,
    violations: { ...state.violations },
    native_observation: { ...state.native_observation },
    reflow_contract: {
      required: false,
      inventory_sha256: null,
      carrier_count: 0,
      row_count: 0,
      closure: "not-required",
      ...(state.reflow_contract ?? {}),
    },
    decisions: [...state.decisions],
  };
}

function decision(state, event, allow, reason) {
  state.decisions.push({
    sequence: state.decisions.length + 1,
    event: event.type,
    allow,
    reason,
    revision: state.revision,
  });
  return state;
}

function markReadyWhenClosed(state) {
  if (
    state.static_closure === "closed" &&
    (state.browser_proof === "closed" || state.browser_proof === "unresolved") &&
    (!state.reflow_contract?.required || state.reflow_contract.closure === "closed")
  ) {
    state.delivery = "ready";
  }
}

function denyAfterReady(state, event) {
  state.violations.verification_after_ready += 1;
  if (event.type === "static-proof-start" && state.static_closure === "closed") {
    state.violations.duplicate_static_closure += 1;
  }
  if (
    (event.type === "browser-proof-start" || event.type === "browser-recovery") &&
    state.browser_attempts > 0
  ) {
    state.violations.browser_recovery += 1;
  }
  return decision(state, event, false, "verification-after-ready");
}

export function applyProofPolicyEvent(previous, event) {
  if (event?.type === "static-proof") {
    const started = applyProofPolicyEvent(previous, { type: "static-proof-start" });
    if (started.decisions.at(-1)?.allow !== true) return started;
    return applyProofPolicyEvent(started, {
      type: "static-proof-finish",
      outcome: event.outcome,
    });
  }
  if (event?.type === "browser-proof") {
    const started = applyProofPolicyEvent(previous, { type: "browser-proof-start" });
    if (started.decisions.at(-1)?.allow !== true) return started;
    return applyProofPolicyEvent(started, {
      type: "browser-proof-finish",
      outcome: event.outcome,
    });
  }
  const state = copyState(previous);
  if (!event || typeof event.type !== "string") {
    return decision(state, { type: "invalid" }, false, "invalid-event");
  }

  if (event.type === "product-edit") {
    state.revision += 1;
    state.static_closure = "open";
    state.browser_proof = state.browser_attempts > 0 ? "unresolved" : "open";
    state.delivery = "blocked";
    if (state.reflow_contract.required) state.reflow_contract.closure = "open";
    return decision(state, event, true, "product-revision-opened");
  }

  if (event.type === "reflow-inventory-lock") {
    if (
      state.reflow_contract.required &&
      state.reflow_contract.inventory_sha256 !== event.inventory_sha256
    ) {
      return decision(state, event, false, "reflow-inventory-changed");
    }
    state.reflow_contract = {
      required: true,
      inventory_sha256: event.inventory_sha256,
      carrier_count: event.carrier_count,
      row_count: event.row_count,
      closure: "open",
    };
    state.delivery = "blocked";
    return decision(state, event, true, "reflow-inventory-locked");
  }

  if (event.type === "reflow-inventory-reject") {
    return decision(state, event, false, event.reason ?? "reflow-inventory-required");
  }

  if (event.type === "reflow-closure-validate") {
    if (!state.reflow_contract.required) {
      return decision(state, event, false, "reflow-inventory-required");
    }
    if (state.reflow_contract.inventory_sha256 !== event.inventory_sha256) {
      return decision(state, event, false, "reflow-inventory-changed");
    }
    state.reflow_contract.closure = "closed";
    markReadyWhenClosed(state);
    return decision(state, event, true, "reflow-closure-validated");
  }

  if (event.type === "reflow-closure-reject") {
    return decision(state, event, false, event.reason ?? "reflow-closure-required");
  }

  if (event.type === "untracked-local-executor-reject") {
    return decision(state, event, false, "untracked-local-executor");
  }

  if (["static-proof-start", "browser-proof-start", "browser-recovery"].includes(event.type)) {
    if (state.delivery === "ready") return denyAfterReady(state, event);
    if (state.revision === 0) return decision(state, event, false, "product-edit-required");
  }

  if (event.type === "static-proof-start") {
    if (state.static_closure === "closed") {
      state.violations.duplicate_static_closure += 1;
      return decision(state, event, false, "duplicate-static-closure");
    }
    if (state.static_closure === "running") {
      return decision(state, event, false, "static-proof-in-flight");
    }
    state.static_closure = "running";
    return decision(state, event, true, "static-proof-started");
  }

  if (event.type === "static-proof-finish") {
    if (state.static_closure !== "running") {
      return decision(state, event, false, "static-proof-not-running");
    }
    if (!["passed", "failed", "unresolved"].includes(event.outcome)) {
      return decision(state, event, false, "static-proof-outcome-required");
    }
    state.static_closure = event.outcome === "failed" ? "open" : "closed";
    markReadyWhenClosed(state);
    const reason = event.outcome === "passed"
      ? "static-closure-closed"
      : event.outcome === "unresolved"
        ? "static-closure-observed"
        : "static-proof-reopened";
    return decision(
      state,
      event,
      true,
      reason,
    );
  }

  if (event.type === "browser-proof-start") {
    if (state.static_closure !== "closed") {
      return decision(state, event, false, "static-closure-required");
    }
    if (state.browser_attempts > 0) {
      state.violations.browser_recovery += 1;
      return decision(state, event, false, "browser-proof-already-consumed");
    }
    state.browser_attempts += 1;
    state.browser_proof = "running";
    return decision(state, event, true, "browser-proof-started");
  }

  if (event.type === "browser-proof-finish") {
    if (state.browser_proof !== "running") {
      return decision(state, event, false, "browser-proof-not-running");
    }
    if (!["passed", "unresolved"].includes(event.outcome)) {
      return decision(state, event, false, "browser-proof-outcome-required");
    }
    state.browser_proof = event.outcome === "passed" ? "closed" : "unresolved";
    markReadyWhenClosed(state);
    return decision(state, event, true, `browser-proof-${event.outcome}`);
  }

  if (event.type === "browser-recovery") {
    if (state.browser_attempts > 0) {
      state.violations.browser_recovery += 1;
      return decision(state, event, false, "browser-recovery-forbidden");
    }
    return decision(state, event, false, "browser-proof-not-attempted");
  }

  if (event.type === "native-browser-unintercepted") {
    state.violations.native_browser_unintercepted = Number(
      state.violations.native_browser_unintercepted ?? 0,
    ) + 1;
    state.native_observation.unblocked_calls = Number(
      state.native_observation.unblocked_calls ?? 0,
    ) + 1;
    return decision(state, event, true, "native-browser-unintercepted");
  }

  if (event.type === "delivery") {
    return decision(
      state,
      event,
      state.delivery === "ready",
      state.delivery === "ready" ? "delivery-ready" : "proof-incomplete",
    );
  }

  return decision(state, event, false, "unsupported-event");
}

export function simulateProofPolicy(events, seed = initialProofPolicyState()) {
  return events.reduce(applyProofPolicyEvent, seed);
}
