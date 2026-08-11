#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '../../..');
const webRequire = createRequire(join(repoRoot, 'web/package.json'));
let playwright;
let axePath;
try { playwright = require('playwright-core'); } catch { playwright = webRequire('playwright-core'); }
try { axePath = require.resolve('axe-core/axe.min.js'); } catch { axePath = webRequire.resolve('axe-core/axe.min.js'); }
const { chromium } = playwright;

const taskSetPath = join(repoRoot, 'benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json');
const adapterSetPath = join(repoRoot, 'benchmarks/ui-resolve-bench/config/autopilot-greenfield-adapters-v0.1.json');
const sha = (bytes) => createHash('sha256').update(bytes).digest('hex');

export function isSampleOwnerOption(value, groupLabel = '') {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  const scope = String(groupLabel || '').replace(/\s+/g, ' ').trim();
  if (/^(?:select|choose)\b/i.test(text)) return false;
  return /\b(?:sample|demo|fictional)\s+(?:owner|staff|operator|assignee|responder)\b/i.test(text)
    || /\b(?:owner|staff|operator|assignee|responder)\s+(?:sample|demo|fictional)\b/i.test(text)
    || /\b(?:sample|demo|fictional)\s+(?:owner|staff|operator|assignee|responder)\b/i.test(scope)
    || /\b(?:owner|staff|operator|assignee|responder)\s+(?:sample|demo|fictional)\b/i.test(scope);
}

export function classifyColdChainPriority(value) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  const explicitNonUrgent = /\bnon[-\s]?urgent\b/i.test(text);
  // `innerText` can concatenate adjacent visual spans (for example
  // `watchURGENT`). Treat the explicit status token as authoritative rather
  // than requiring a word boundary that the rendered DOM may not preserve.
  const urgent = /urgent/i.test(text) && !explicitNonUrgent;
  const nonUrgent = !urgent && (explicitNonUrgent || /\b(?:attention|resolved|routine|watch|stable|normal|open)\b|needs?\s+review/i.test(text));
  return { urgent, nonUrgent };
}

export function hasUnavailableTranslationSemantics(value) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  return /translation.{0,40}(?:unavailable|not available|not ready)|(?:unavailable|not available|not ready).{0,40}translation/i.test(text)
    || /번역.{0,40}(?:불가|제공되지|준비되지|준비되지 않았)/.test(text)
    || /翻訳.{0,40}(?:利用でき|未提供|準備でき)/.test(text)
    || /翻译.{0,40}(?:未提供|不可用|尚未准备)/.test(text)
    || /翻譯.{0,40}(?:未提供|不可用|尚未準備)/.test(text);
}

export function hasHonestUnavailableLibraryInformation(value) {
  const sentences = String(value || '').replace(/\s+/g, ' ').split(/(?<=[.!?])|\n+/).map((sentence) => sentence.trim()).filter(Boolean);
  const subject = '(?:catalog|inventory|availability|prices?|costs?|fees?|hours?|eligibility|pickup instructions?|reservation destination)';
  const absence = '(?:not (?:listed|published|shown|provided|available|known|specified)|unavailable|unknown|to be confirmed|var(?:y|ies))';
  const verification = '(?:confirm|check)';
  return sentences.some((sentence) => new RegExp(`${subject}[^.!?]{0,180}${absence}`, 'i').test(sentence)
    || new RegExp(`(?:${absence}|${verification})[^.!?]{0,180}${subject}`, 'i').test(sentence)
    || new RegExp(`\\b(?:no|without)\\s+(?:[^.!?]{0,80}\\b)?${subject}`, 'i').test(sentence));
}

export function detectLocaleProtectedClaims(value) {
  const sentences = String(value || '').replace(/\s+/g, ' ').split(/(?<=[.!?。！？])|\n+/).map((sentence) => sentence.trim()).filter(Boolean);
  const explicitlyQualified = (sentence) => /(?:fictional|sample)/i.test(sentence)
    || /\bnothing\b.{0,48}\bmedical advice\b/i.test(sentence)
    || /\b(?:not|never|no)\b.{0,48}\b(?:medical advice|diagnosis|clinic policy)\b/i.test(sentence)
    || /\bdoes\s+not\b.{0,48}\b(?:provide|offer|give|constitute|replace)?\s*(?:medical advice|a diagnosis|clinic policy)\b/i.test(sentence)
    || /(?:의료|의학적)\s*조언.{0,24}(?:아닙|아니)|医療(?:助言|アドバイス).{0,24}(?:ではありません|ではない)|(?:不是|不构成)医疗建议|(?:不是|不構成)醫療建議/i.test(sentence);
  const affirmative = sentences.filter((sentence) => !explicitlyQualified(sentence)).join(' ');
  return [...affirmative.matchAll(/\b(?:diagnosed with|you have (?:a|an)|take \d+ mg|medical advice|real clinic policy|doctor recommends?)\b/gi)].map((match) => match[0]);
}

function cliArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (!argv[i].startsWith('--')) continue;
    out[argv[i].slice(2)] = argv[i + 1]; i += 1;
  }
  return out;
}
function chromeExecutable() {
  for (const item of [process.env.CHROME_PATH, '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/Applications/Chromium.app/Contents/MacOS/Chromium', '/usr/bin/google-chrome', '/usr/bin/chromium'].filter(Boolean)) {
    if (existsSync(item)) return item;
  }
  for (const command of ['google-chrome', 'chromium']) {
    try { return execFileSync('which', [command], { encoding: 'utf8' }).trim(); } catch { /* continue */ }
  }
  throw new Error('Chrome/Chromium executable not found');
}

export function scoreLandingEvidence(evidence) {
  const assertions = {
    task_identity: evidence.task_identity === true,
    purpose: evidence.purpose === true,
    semantic_steps: evidence.semantic_steps >= 2,
    unique_primary_action: evidence.unique_primary_action === true,
    reservation_state: evidence.reservation_state === true,
    focus_transfer: evidence.focus_transfer === true,
    keyboard_reachable: evidence.keyboard_reachable === true,
    focus_indicator_visible: evidence.focus_indicator_visible === true,
    responsive: evidence.viewports.every((item) => item.document_overflow_px === 0
      && (!item.primary_action_present || (item.critical_inside_viewport && (!item.mobile || item.primary_action_min_dimension_px >= 44)))
      && (!item.reservation_state_present || (item.reservation_controls_horizontally_unclipped && (!item.mobile || item.reservation_control_min_dimension_px >= 44)))),
    accessibility: evidence.viewports.every((item) => item.initial_axe_serious_critical === 0 && item.reservation_axe_serious_critical === 0 && item.main_count === 1 && item.h1_count === 1),
    unavailable_information_honest: evidence.unavailable_information_honest === true,
    honest_unknowns: evidence.price_claims.length === 0 && evidence.inventory_claims.length === 0,
    no_social_proof: evidence.social_proof_claims.length === 0 && evidence.partner_logo_claims.length === 0,
    runtime_clean: evidence.console_errors.length === 0 && evidence.page_errors.length === 0 && evidence.external_requests.length === 0,
  };
  const groups = {
    journey: { points: 30, pass: ['task_identity', 'purpose', 'semantic_steps', 'unique_primary_action', 'reservation_state', 'focus_transfer', 'keyboard_reachable'].every((id) => assertions[id]) },
    responsive: { points: 20, pass: assertions.responsive },
    accessibility: { points: 20, pass: assertions.accessibility && (!evidence.primary_action_present || assertions.focus_indicator_visible) },
    evidence_honesty: { points: 20, pass: assertions.unavailable_information_honest && assertions.honest_unknowns && assertions.no_social_proof },
    runtime: { points: 10, pass: assertions.runtime_clean },
  };
  const score = Object.values(groups).reduce((sum, item) => sum + (item.pass ? item.points : 0), 0);
  return { score, deterministic_max: 100, assertions, groups, critical_pass: Object.values(groups).every((item) => item.pass), ui_resolved: Object.values(groups).every((item) => item.pass) };
}

export function scoreIncidentEvidence(evidence) {
  const assertions = {
    task_identity: evidence.task_identity === true,
    sample_scope_visible: evidence.sample_scope_visible === true,
    incident_preconditions: evidence.incident_count >= 2 && evidence.distinct_severity_count >= 2,
    severity_textual_and_ranked: evidence.unique_highest_severity === true && evidence.highest_visually_distinct === true,
    keyboard_open_highest: evidence.keyboard_open_highest === true,
    same_incident_detail: evidence.same_incident_detail === true,
    acknowledged_state_persistent: evidence.acknowledged_state_persistent === true,
    scenario_states: evidence.viewports.every((item) => item.loading_state && item.empty_state && item.error_state),
    responsive: evidence.viewports.every((item) => item.document_overflow_px === 0 && item.controls_horizontally_unclipped && (!item.mobile || item.control_min_dimension_px >= 44)),
    accessibility: evidence.viewports.every((item) => item.initial_axe_serious_critical === 0 && item.detail_axe_serious_critical === 0 && item.acknowledged_axe_serious_critical === 0 && item.scenario_axe_serious_critical === 0 && item.main_count === 1 && item.h1_count === 1),
    evidence_honesty: evidence.protected_unknown_claims.length === 0,
    runtime_clean: evidence.console_errors.length === 0 && evidence.page_errors.length === 0 && evidence.external_requests.length === 0,
  };
  const groups = {
    journey: { points: 35, pass: ['task_identity', 'incident_preconditions', 'severity_textual_and_ranked', 'keyboard_open_highest', 'same_incident_detail', 'acknowledged_state_persistent'].every((id) => assertions[id]) },
    responsive: { points: 20, pass: assertions.responsive },
    accessibility: { points: 20, pass: assertions.accessibility },
    evidence_honesty: { points: 15, pass: assertions.sample_scope_visible && assertions.evidence_honesty },
    runtime: { points: 10, pass: assertions.scenario_states && assertions.runtime_clean },
  };
  const score = Object.values(groups).reduce((sum, item) => sum + (item.pass ? item.points : 0), 0);
  const pass = Object.values(groups).every((item) => item.pass);
  return { score, deterministic_max: 100, assertions, groups, critical_pass: pass, ui_resolved: pass };
}

export function scoreColdChainEvidence(evidence) {
  const nonUrgentCount = Number(evidence.non_urgent_count ?? evidence.routine_count ?? 0);
  const assertions = {
    task_identity: evidence.task_identity === true,
    sample_scope_visible: evidence.sample_scope_visible === true,
    queue_preconditions: evidence.shipment_count >= 3 && evidence.urgent_count >= 2 && nonUrgentCount >= 1,
    filter_selected_and_visible: evidence.filter_selected_and_visible === true,
    filtered_contents_exact: evidence.filtered_contents_exact === true,
    keyboard_open_sample: evidence.keyboard_open_sample === true,
    matching_evidence_detail: evidence.matching_evidence_detail === true,
    owner_error_associated: evidence.owner_error_associated === true,
    sample_owner_options: evidence.sample_owner_options === true,
    assigned_owner_confirmed_and_persistent: evidence.assigned_owner_confirmed_and_persistent === true,
    responsive: evidence.viewports.every((item) => item.document_overflow_px === 0 && item.critical_fields_reachable && item.controls_horizontally_unclipped && (!item.mobile || item.control_min_dimension_px >= 44)),
    accessibility: evidence.viewports.every((item) => item.initial_axe_serious_critical === 0 && item.filtered_axe_serious_critical === 0 && item.detail_axe_serious_critical === 0 && item.error_axe_serious_critical === 0 && item.assigned_axe_serious_critical === 0 && item.main_count === 1 && item.h1_count === 1),
    evidence_honesty: evidence.protected_unknown_claims.length === 0,
    runtime_clean: evidence.console_errors.length === 0 && evidence.page_errors.length === 0 && evidence.external_requests.length === 0,
  };
  const groups = {
    journey: { points: 40, pass: ['task_identity', 'queue_preconditions', 'filter_selected_and_visible', 'filtered_contents_exact', 'keyboard_open_sample', 'matching_evidence_detail', 'owner_error_associated', 'sample_owner_options', 'assigned_owner_confirmed_and_persistent'].every((id) => assertions[id]) },
    responsive: { points: 20, pass: assertions.responsive },
    accessibility: { points: 20, pass: assertions.accessibility },
    evidence_honesty: { points: 10, pass: assertions.sample_scope_visible && assertions.evidence_honesty },
    runtime: { points: 10, pass: assertions.runtime_clean },
  };
  const score = Object.values(groups).reduce((sum, item) => sum + (item.pass ? item.points : 0), 0);
  const pass = Object.values(groups).every((item) => item.pass);
  return { score, deterministic_max: 100, assertions, groups, critical_pass: pass, ui_resolved: pass };
}

export function scoreCaregiverEvidence(evidence) {
  const assertions = {
    task_identity: evidence.task_identity === true,
    purpose_honest: evidence.purpose_honest === true,
    progress_all_steps: evidence.progress_all_steps === true,
    no_silent_preselection: evidence.no_silent_preselection === true,
    empty_choice_blocked: evidence.empty_choice_blocked === true,
    preference_error_associated: evidence.preference_error_associated === true,
    review_echoes_choice: evidence.review_echoes_choice === true,
    back_preserves_choice: evidence.back_preserves_choice === true,
    complete_announced: evidence.complete_announced === true,
    responsive: evidence.viewports.every((item) => item.document_overflow_px === 0 && item.controls_horizontally_unclipped && (!item.mobile || item.control_min_dimension_px >= 44)),
    accessibility: evidence.viewports.every((item) => item.axe_serious_critical === 0 && item.main_count === 1 && item.h1_count_per_state.every((count) => count === 1)),
    evidence_honesty: evidence.protected_unknown_claims.length === 0,
    runtime_clean: evidence.console_errors.length === 0 && evidence.page_errors.length === 0 && evidence.external_requests.length === 0,
  };
  const groups = {
    journey: { points: 40, pass: ['task_identity', 'progress_all_steps', 'no_silent_preselection', 'empty_choice_blocked', 'preference_error_associated', 'review_echoes_choice', 'back_preserves_choice', 'complete_announced'].every((id) => assertions[id]) },
    responsive: { points: 20, pass: assertions.responsive }, accessibility: { points: 20, pass: assertions.accessibility },
    evidence_honesty: { points: 10, pass: assertions.purpose_honest && assertions.evidence_honesty }, runtime: { points: 10, pass: assertions.runtime_clean },
  };
  const score = Object.values(groups).reduce((sum, item) => sum + (item.pass ? item.points : 0), 0); const pass = Object.values(groups).every((item) => item.pass);
  return { score, deterministic_max: 100, assertions, groups, critical_pass: pass, ui_resolved: pass };
}

export function scoreCheckoutEvidence(evidence) {
  const assertions = {
    task_identity: evidence.task_identity === true, sample_scope_visible: evidence.sample_scope_visible === true,
    total_visible_before_confirm: evidence.total_visible_before_confirm === true,
    empty_contact_blocked: evidence.empty_contact_blocked === true, invalid_email_blocked: evidence.invalid_email_blocked === true,
    email_error_associated: evidence.email_error_associated === true, submitting_observable: evidence.submitting_observable === true,
    confirmed_after_action: evidence.confirmed_after_action === true, declined_recovery_reachable: evidence.declined_recovery_reachable === true,
    no_premature_success: evidence.premature_success_claims.length === 0,
    evidence_honesty: evidence.protected_unknown_claims.length === 0,
    responsive: evidence.viewports.every((item) => item.document_overflow_px === 0 && item.total_unclipped && item.controls_horizontally_unclipped && (!item.mobile || item.control_min_dimension_px >= 44)),
    accessibility: evidence.viewports.every((item) => item.axe_serious_critical === 0 && item.main_count === 1 && item.h1_count_per_state.every((count) => count === 1)),
    runtime_clean: evidence.console_errors.length === 0 && evidence.page_errors.length === 0 && evidence.external_requests.length === 0,
  };
  const groups = {
    journey: { points: 40, pass: ['task_identity', 'total_visible_before_confirm', 'empty_contact_blocked', 'invalid_email_blocked', 'email_error_associated', 'submitting_observable', 'confirmed_after_action', 'declined_recovery_reachable'].every((id) => assertions[id]) },
    responsive: { points: 20, pass: assertions.responsive }, accessibility: { points: 20, pass: assertions.accessibility },
    evidence_honesty: { points: 10, pass: assertions.sample_scope_visible && assertions.no_premature_success && assertions.evidence_honesty }, runtime: { points: 10, pass: assertions.runtime_clean },
  };
  const score = Object.values(groups).reduce((sum, item) => sum + (item.pass ? item.points : 0), 0); const pass = Object.values(groups).every((item) => item.pass);
  return { score, deterministic_max: 100, assertions, groups, critical_pass: pass, ui_resolved: pass };
}

export function scoreDeletionEvidence(evidence) {
  const assertions = {
    task_identity: evidence.task_identity === true, sample_scope_visible: evidence.sample_scope_visible === true,
    scope_parent_child_hierarchy: evidence.scope_parent_child_hierarchy === true,
    exact_phrase_discoverable: evidence.exact_phrase_discoverable === true,
    phrase_without_ack_blocked: evidence.phrase_without_ack_blocked === true,
    wrong_phrase_blocked: evidence.wrong_phrase_blocked === true,
    validation_error_associated: evidence.validation_error_associated === true,
    approve_requires_both_gates: evidence.approve_requires_both_gates === true,
    cancel_keyboard_reachable: evidence.cancel_keyboard_reachable === true,
    cancelled_state_announced: evidence.cancelled_state_announced === true,
    evidence_honesty: evidence.protected_unknown_claims.length === 0,
    responsive: evidence.viewports.every((item) => item.document_overflow_px === 0 && item.scope_unclipped && item.controls_horizontally_unclipped && (!item.mobile || item.control_min_dimension_px >= 44)),
    accessibility: evidence.viewports.every((item) => item.axe_serious_critical === 0 && item.main_count === 1 && item.h1_count_per_state.every((count) => count === 1)),
    runtime_clean: evidence.console_errors.length === 0 && evidence.page_errors.length === 0 && evidence.external_requests.length === 0,
  };
  const groups = {
    journey: { points: 40, pass: ['task_identity', 'scope_parent_child_hierarchy', 'exact_phrase_discoverable', 'phrase_without_ack_blocked', 'wrong_phrase_blocked', 'validation_error_associated', 'approve_requires_both_gates', 'cancel_keyboard_reachable', 'cancelled_state_announced'].every((id) => assertions[id]) },
    responsive: { points: 20, pass: assertions.responsive }, accessibility: { points: 20, pass: assertions.accessibility },
    evidence_honesty: { points: 10, pass: assertions.sample_scope_visible && assertions.evidence_honesty }, runtime: { points: 10, pass: assertions.runtime_clean },
  };
  const score = Object.values(groups).reduce((sum, item) => sum + (item.pass ? item.points : 0), 0); const pass = Object.values(groups).every((item) => item.pass);
  return { score, deterministic_max: 100, assertions, groups, critical_pass: pass, ui_resolved: pass };
}

export function scoreSearchEvidence(evidence) {
  const assertions = {
    task_identity: evidence.task_identity === true, fictional_scope_visible: evidence.fictional_scope_visible === true,
    initial_results_available: evidence.initial_results_available === true,
    search_updates_results: evidence.search_updates_results === true,
    two_filters_selected: evidence.two_filters_selected === true,
    active_filter_values_visible: evidence.active_filter_values_visible === true,
    filtered_count_contextual: evidence.filtered_count_contextual === true,
    clear_contract_honored: evidence.clear_contract_honored === true,
    no_results_distinct: evidence.no_results_distinct === true,
    opened_record_identity_matches: evidence.opened_record_identity_matches === true,
    error_recovery_reachable: evidence.error_recovery_reachable === true,
    evidence_honesty: evidence.protected_unknown_claims.length === 0,
    responsive: evidence.viewports.every((item) => item.document_overflow_px === 0 && item.controls_horizontally_unclipped && (!item.mobile || item.control_min_dimension_px >= 44)),
    accessibility: evidence.viewports.every((item) => item.axe_serious_critical === 0 && item.main_count === 1 && item.h1_count_per_state.every((count) => count === 1)),
    runtime_clean: evidence.console_errors.length === 0 && evidence.page_errors.length === 0 && evidence.external_requests.length === 0,
  };
  const groups = {
    journey: { points: 40, pass: ['task_identity', 'initial_results_available', 'search_updates_results', 'two_filters_selected', 'active_filter_values_visible', 'filtered_count_contextual', 'clear_contract_honored', 'no_results_distinct', 'opened_record_identity_matches', 'error_recovery_reachable'].every((id) => assertions[id]) },
    responsive: { points: 20, pass: assertions.responsive }, accessibility: { points: 20, pass: assertions.accessibility },
    evidence_honesty: { points: 10, pass: assertions.fictional_scope_visible && assertions.evidence_honesty }, runtime: { points: 10, pass: assertions.runtime_clean },
  };
  const score = Object.values(groups).reduce((sum, item) => sum + (item.pass ? item.points : 0), 0); const pass = Object.values(groups).every((item) => item.pass);
  return { score, deterministic_max: 100, assertions, groups, critical_pass: pass, ui_resolved: pass };
}

export function scoreEditorialEvidence(evidence) {
  const assertions = {
    task_identity: evidence.task_identity === true, sample_scope_visible: evidence.sample_scope_visible === true,
    heading_outline_valid: evidence.heading_outline_valid === true,
    second_section_navigation: evidence.second_section_navigation === true,
    active_section_current: evidence.active_section_current === true,
    caption_citation_separate: evidence.caption_citation_separate === true,
    empty_email_blocked: evidence.empty_email_blocked === true,
    malformed_email_blocked: evidence.malformed_email_blocked === true,
    email_error_associated: evidence.email_error_associated === true,
    subscription_announced: evidence.subscription_announced === true,
    evidence_honesty: evidence.protected_unknown_claims.length === 0,
    responsive: evidence.viewports.every((item) => item.document_overflow_px === 0 && item.controls_horizontally_unclipped && item.evidence_unclipped && (!item.mobile || item.form_control_min_dimension_px >= 44)),
    accessibility: evidence.viewports.every((item) => item.axe_serious_critical === 0 && item.main_count === 1 && item.h1_count_per_state.every((count) => count === 1)),
    runtime_clean: evidence.console_errors.length === 0 && evidence.page_errors.length === 0 && evidence.external_requests.length === 0,
  };
  const groups = {
    journey: { points: 40, pass: ['task_identity', 'heading_outline_valid', 'second_section_navigation', 'active_section_current', 'caption_citation_separate', 'empty_email_blocked', 'malformed_email_blocked', 'email_error_associated', 'subscription_announced'].every((id) => assertions[id]) },
    responsive: { points: 20, pass: assertions.responsive }, accessibility: { points: 20, pass: assertions.accessibility },
    evidence_honesty: { points: 10, pass: assertions.sample_scope_visible && assertions.evidence_honesty }, runtime: { points: 10, pass: assertions.runtime_clean },
  };
  const score = Object.values(groups).reduce((sum, item) => sum + (item.pass ? item.points : 0), 0); const pass = Object.values(groups).every((item) => item.pass);
  return { score, deterministic_max: 100, assertions, groups, critical_pass: pass, ui_resolved: pass };
}

export function scoreTransitEvidence(evidence) {
  const assertions = {
    task_identity: evidence.task_identity === true, fictional_scope_visible: evidence.fictional_scope_visible === true,
    empty_issue_blocked: evidence.empty_issue_blocked === true, issue_error_associated: evidence.issue_error_associated === true,
    review_required_before_submit: evidence.review_required_before_submit === true, review_echoes_issue: evidence.review_echoes_issue === true,
    optional_detail_echoed: evidence.optional_detail_echoed === true, fictional_submission_disclosed: evidence.fictional_submission_disclosed === true,
    submitted_announced: evidence.submitted_announced === true, no_preconsent_geolocation: evidence.no_preconsent_geolocation === true,
    evidence_honesty: evidence.protected_unknown_claims.length === 0,
    responsive: evidence.viewports.every((item) => item.document_overflow_px === 0 && item.controls_horizontally_unclipped && (!item.mobile || item.task_control_min_dimension_px >= 44)),
    accessibility: evidence.viewports.every((item) => item.axe_serious_critical === 0 && item.main_count === 1 && item.h1_count_per_state.every((count) => count === 1)),
    runtime_clean: evidence.console_errors.length === 0 && evidence.page_errors.length === 0 && evidence.external_requests.length === 0,
  };
  const groups = {
    journey: { points: 40, pass: ['task_identity', 'empty_issue_blocked', 'issue_error_associated', 'review_required_before_submit', 'review_echoes_issue', 'optional_detail_echoed', 'submitted_announced'].every((id) => assertions[id]) },
    responsive: { points: 20, pass: assertions.responsive }, accessibility: { points: 20, pass: assertions.accessibility },
    evidence_honesty: { points: 10, pass: assertions.fictional_scope_visible && assertions.fictional_submission_disclosed && assertions.no_preconsent_geolocation && assertions.evidence_honesty }, runtime: { points: 10, pass: assertions.runtime_clean },
  };
  const score = Object.values(groups).reduce((sum, item) => sum + (item.pass ? item.points : 0), 0); const pass = Object.values(groups).every((item) => item.pass);
  return { score, deterministic_max: 100, assertions, groups, critical_pass: pass, ui_resolved: pass };
}

export function scoreGrantEvidence(evidence) {
  const assertions = {
    task_identity: evidence.task_identity === true, sample_scope_visible: evidence.sample_scope_visible === true,
    every_item_status_textual: evidence.every_item_status_textual === true, pending_classified: evidence.pending_classified === true,
    protected_fields_unresolved: evidence.protected_fields_unresolved === true, unresolved_warning_before_submit: evidence.unresolved_warning_before_submit === true,
    unresolved_count_persists: evidence.unresolved_count_persists === true, draft_submitted_announced: evidence.draft_submitted_announced === true,
    evidence_honesty: evidence.protected_unknown_claims.length === 0,
    responsive: evidence.viewports.every((item) => item.document_overflow_px === 0 && item.controls_horizontally_unclipped && (!item.mobile || item.task_control_min_dimension_px >= 44)),
    accessibility: evidence.viewports.every((item) => item.axe_serious_critical === 0 && item.main_count === 1 && item.h1_count_per_state.every((count) => count === 1)),
    runtime_clean: evidence.console_errors.length === 0 && evidence.page_errors.length === 0 && evidence.external_requests.length === 0,
  };
  const groups = {
    journey: { points: 40, pass: ['task_identity', 'every_item_status_textual', 'pending_classified', 'protected_fields_unresolved', 'unresolved_warning_before_submit', 'unresolved_count_persists', 'draft_submitted_announced'].every((id) => assertions[id]) },
    responsive: { points: 20, pass: assertions.responsive }, accessibility: { points: 20, pass: assertions.accessibility },
    evidence_honesty: { points: 10, pass: assertions.sample_scope_visible && assertions.evidence_honesty }, runtime: { points: 10, pass: assertions.runtime_clean },
  };
  const score = Object.values(groups).reduce((sum, item) => sum + (item.pass ? item.points : 0), 0); const pass = Object.values(groups).every((item) => item.pass);
  return { score, deterministic_max: 100, assertions, groups, critical_pass: pass, ui_resolved: pass };
}

export function scoreRecoveryEvidence(evidence) {
  const assertions = {
    task_identity: evidence.task_identity === true, sample_local_only_disclosed: evidence.sample_local_only_disclosed === true,
    sample_rows_loaded: evidence.sample_rows_loaded === true, row_error_associated_and_recoverable: evidence.row_error_associated_and_recoverable === true,
    valid_row_identities_preserved: evidence.valid_row_identities_preserved === true, state_transitions_announced: evidence.state_transitions_announced === true,
    completion_counts_unambiguous: evidence.completion_counts_unambiguous === true, completion_announced: evidence.completion_announced === true,
    evidence_honesty: evidence.protected_unknown_claims.length === 0,
    responsive: evidence.viewports.every((item) => item.document_overflow_px === 0 && item.controls_horizontally_unclipped && (!item.mobile || item.task_control_min_dimension_px >= 44)),
    accessibility: evidence.viewports.every((item) => item.axe_serious_critical === 0 && item.main_count === 1 && item.h1_count_per_state.every((count) => count === 1)),
    runtime_clean: evidence.console_errors.length === 0 && evidence.page_errors.length === 0 && evidence.external_requests.length === 0,
  };
  const groups = {
    journey: { points: 40, pass: ['task_identity', 'sample_rows_loaded', 'row_error_associated_and_recoverable', 'valid_row_identities_preserved', 'state_transitions_announced', 'completion_counts_unambiguous', 'completion_announced'].every((id) => assertions[id]) },
    responsive: { points: 20, pass: assertions.responsive }, accessibility: { points: 20, pass: assertions.accessibility },
    evidence_honesty: { points: 10, pass: assertions.sample_local_only_disclosed && assertions.evidence_honesty }, runtime: { points: 10, pass: assertions.runtime_clean },
  };
  const score = Object.values(groups).reduce((sum, item) => sum + (item.pass ? item.points : 0), 0); const pass = Object.values(groups).every((item) => item.pass);
  return { score, deterministic_max: 100, assertions, groups, critical_pass: pass, ui_resolved: pass };
}

export function scoreLocaleEvidence(evidence) {
  const assertions = {
    task_identity: evidence.task_identity === true, fictional_not_medical_advice: evidence.fictional_not_medical_advice === true,
    all_five_locales_exact: evidence.all_five_locales_exact === true, selected_label_lang_script_agree: evidence.selected_label_lang_script_agree === true,
    progress_textual_and_persistent: evidence.progress_textual_and_persistent === true, completion_persists_after_return: evidence.completion_persists_after_return === true,
    translation_unavailable_honest: evidence.translation_unavailable_honest === true, evidence_honesty: evidence.protected_unknown_claims.length === 0,
    responsive: evidence.viewports.every((item) => item.document_overflow_px === 0 && item.cjk_content_unclipped && item.controls_horizontally_unclipped && (!item.mobile || item.task_control_min_dimension_px >= 44)),
    accessibility: evidence.viewports.every((item) => item.axe_serious_critical === 0 && item.main_count === 1 && item.h1_count_per_state.every((count) => count === 1)),
    runtime_clean: evidence.console_errors.length === 0 && evidence.page_errors.length === 0 && evidence.external_requests.length === 0,
  };
  const groups = {
    journey: { points: 40, pass: ['task_identity', 'all_five_locales_exact', 'selected_label_lang_script_agree', 'progress_textual_and_persistent', 'completion_persists_after_return', 'translation_unavailable_honest'].every((id) => assertions[id]) },
    responsive: { points: 20, pass: assertions.responsive }, accessibility: { points: 20, pass: assertions.accessibility },
    evidence_honesty: { points: 10, pass: assertions.fictional_not_medical_advice && assertions.evidence_honesty }, runtime: { points: 10, pass: assertions.runtime_clean },
  };
  const score = Object.values(groups).reduce((sum, item) => sum + (item.pass ? item.points : 0), 0); const pass = Object.values(groups).every((item) => item.pass);
  return { score, deterministic_max: 100, assertions, groups, critical_pass: pass, ui_resolved: pass };
}

async function axeSeriousCritical(page) {
  await page.addScriptTag({ path: axePath });
  return page.evaluate(async () => {
    const result = await globalThis.axe.run(document, { resultTypes: ['violations'] });
    const violations = result.violations.filter((item) => ['serious', 'critical'].includes(item.impact));
    const compactCheck = (check) => ({
      id: check.id || null,
      message: String(check.message || '').replace(/\s+/g, ' ').trim().slice(0, 300),
      data: check.data == null ? null : JSON.stringify(check.data).slice(0, 500),
    });
    const computedStyleFor = (target) => {
      const selector = Array.isArray(target) ? target[0] : target;
      if (typeof selector !== 'string') return null;
      try {
        const element = document.querySelector(selector);
        if (!element) return null;
        const style = getComputedStyle(element);
        return {
          color: style.color,
          background_color: style.backgroundColor,
          font_size: style.fontSize,
          font_weight: style.fontWeight,
          opacity: style.opacity,
        };
      } catch { return null; }
    };
    return {
      count: violations.reduce((sum, item) => sum + item.nodes.length, 0),
      violations: violations.map((item) => ({
        id: item.id,
        impact: item.impact,
        description: String(item.description || '').replace(/\s+/g, ' ').trim().slice(0, 300),
        nodes: item.nodes.slice(0, 8).map((node) => ({
          target: node.target,
          failure_summary: String(node.failureSummary || '').replace(/\s+/g, ' ').trim().slice(0, 500),
          checks: [...(node.any || []), ...(node.all || []), ...(node.none || [])].slice(0, 8).map(compactCheck),
          computed_style: computedStyleFor(node.target),
        })),
        // Keep the historical compact field for existing report consumers.
        targets: item.nodes.map((node) => node.target),
      })),
    };
  });
}

async function documentOverflowObservation(page) {
  return page.evaluate(() => {
    const viewportWidth = document.documentElement.clientWidth;
    const overflowPx = Math.max(0, document.documentElement.scrollWidth - viewportWidth);
    const selectorFor = (element) => {
      if (element.id) return `#${element.id}`;
      const classes = [...element.classList].slice(0, 3).join('.');
      return `${element.tagName.toLowerCase()}${classes ? `.${classes}` : ''}`;
    };
    const offenders = [...document.body.querySelectorAll('*')].map((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return null;
      const style = getComputedStyle(element);
      if (style.display === 'none' || style.visibility === 'hidden') return null;
      const right = Math.max(0, rect.right - viewportWidth);
      const left = Math.max(0, -rect.left);
      if (right <= 1 && left <= 1) return null;
      return {
        selector: selectorFor(element),
        right_overflow_px: Math.round(right * 100) / 100,
        left_overflow_px: Math.round(left * 100) / 100,
        rect_width_px: Math.round(rect.width * 100) / 100,
        scroll_overflow_px: Math.max(0, element.scrollWidth - element.clientWidth),
        text_excerpt: String(element.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 160),
        computed: {
          width: style.width,
          min_width: style.minWidth,
          max_width: style.maxWidth,
          white_space: style.whiteSpace,
          overflow_x: style.overflowX,
        },
      };
    }).filter(Boolean).sort((a, b) => Math.max(b.right_overflow_px, b.left_overflow_px) - Math.max(a.right_overflow_px, a.left_overflow_px)).slice(0, 8);
    return { document_overflow_px: overflowPx, offenders };
  });
}

async function afterPaint(page) {
  await page.evaluate(() => new Promise((done) => requestAnimationFrame(() => requestAnimationFrame(done))));
}

async function visibleLocatorIndexes(locator) {
  const indexes = [];
  for (let index = 0; index < await locator.count(); index += 1) {
    if (await locator.nth(index).isVisible()) indexes.push(index);
  }
  return indexes;
}

async function tabUntilFocused(page, locator, limit = 30) {
  if (!locator || await locator.count() === 0 || !await locator.first().isVisible()) return false;
  for (let index = 0; index < limit; index += 1) {
    await page.keyboard.press('Tab');
    if (await locator.evaluate((element) => document.activeElement === element)) return true;
  }
  return false;
}

async function focusIndicator(locator) {
  return locator.evaluate((element) => {
    const style = getComputedStyle(element);
    const outlineVisible = style.outlineStyle !== 'none' && parseFloat(style.outlineWidth || '0') > 0;
    const shadowVisible = style.boxShadow !== 'none';
    const borderVisible = parseFloat(style.borderWidth || '0') > 0;
    return outlineVisible || shadowVisible || borderVisible;
  });
}

async function boundedAriaInventory(page, roles, { perRole = 2, total = 8, chars = 240 } = {}) {
  const observed = [];
  for (const role of roles) {
    const candidates = page.getByRole(role);
    for (const index of await visibleLocatorIndexes(candidates)) {
      if (observed.length >= total) return observed;
      if (observed.filter((item) => item.role === role).length >= perRole) break;
      const candidate = candidates.nth(index);
      let snapshot = '';
      try { snapshot = await candidate.ariaSnapshot(); } catch { snapshot = `- ${role}`; }
      observed.push({
        role,
        snapshot: snapshot.replace(/\s+/g, ' ').trim().slice(0, chars),
        focused: await candidate.evaluate((element) => element === document.activeElement || element.contains(document.activeElement)),
      });
    }
  }
  return observed;
}

async function evaluateLanding(page, viewport, origin) {
  const button = page.getByRole('button', { name: /^reserve a tool$/i });
  const link = page.getByRole('link', { name: /^reserve a tool$/i });
  const candidates = button.or(link);
  const visibleIndexes = await visibleLocatorIndexes(candidates);
  const primary = visibleIndexes.length ? candidates.nth(visibleIndexes[0]) : null;
  const initial = await page.evaluate(() => {
    const visibleText = (document.body.innerText || '').replace(/\s+/g, ' ').trim();
    const workflowRegions = [...document.querySelectorAll('section,article,[role="region"]')].filter((item) => {
      const text = item.innerText || '';
      return /borrow|reserve|reservation/i.test(text) && /pickup|return|confirm|request|choose|find|name/i.test(text);
    });
    const stageCount = Math.max(0, ...workflowRegions.map((region) => region.querySelectorAll('ol > li,[role="listitem"],article').length));
    const priceClaims = [...visibleText.matchAll(/(?:\$|₩|€|£)\s?\d[\d,.]*|\d[\d,.]*\s?(?:dollars?|won|euros?|pounds?)/gi)].map((item) => item[0]);
    const inventoryClaims = [...visibleText.matchAll(/\b\d+\s+(?:tools?|items?)\s+(?:available|in stock|ready to borrow)\b/gi)].map((item) => item[0]);
    const affirmativeText = visibleText.split(/(?<=[.!?])|\n+/).filter((sentence) => !/\b(?:no|not|never|without|unavailable|unknown|not published|not listed|not shown)\b/i.test(sentence)).join(' ');
    const social = [...affirmativeText.matchAll(/trusted by|testimonials?|★★★★★|\b\d(?:\.\d)?\s*\/\s*5\b|members? (?:love|say)/gi)].map((item) => item[0]);
    const partnerImages = [...document.querySelectorAll('img,svg[aria-label]')].map((item) => `${item.getAttribute('alt') || ''} ${item.getAttribute('aria-label') || ''}`.trim()).filter((value) => /partner|sponsor/i.test(value));
    return {
      visibleText, taskIdentity: /tool library|borrow tools?|borrowing/i.test(visibleText),
      purpose: /borrow|reserve|pickup|return/i.test(visibleText), stageCount,
      mainCount: document.querySelectorAll('main').length, h1Count: document.querySelectorAll('h1').length,
      unavailableInformationExcerpts: visibleText.split(/(?<=[.!?])/)
        .map((sentence) => sentence.trim())
        .filter((sentence) => /inventory|availability|catalog|prices?|costs?|fees?/i.test(sentence))
        .slice(0, 6),
      priceClaims, inventoryClaims, social, partnerImages,
    };
  });
  initial.unavailableInformationHonest = hasHonestUnavailableLibraryInformation(initial.visibleText);
  const rect = primary ? await primary.boundingBox() : null;
  const inside = rect ? rect.x >= 0 && rect.y >= 0 && rect.x + rect.width <= viewport.width + 1 : false;
  const initialAxe = await axeSeriousCritical(page);
  let reservationState = false;
  let focusTransfer = false;
  let keyboardReachable = false;
  let focusIndicatorVisible = false;
  let focusedAfterActivation = null;
  let reservationControlsHorizontallyUnclipped = false;
  let reservationControlMinDimension = 0;
  let reservationAxe = initialAxe;
  if (primary) {
    keyboardReachable = await tabUntilFocused(page, primary);
    focusIndicatorVisible = keyboardReachable && await focusIndicator(primary);
    await page.keyboard.press('Enter');
    await afterPaint(page);
    const reservationName = /reserve a tool|start (?:a |your )?(?:tool )?(?:reservation|request)|tool reservation|reservation start/i;
    const roots = page.getByRole('dialog').or(page.getByRole('region')).or(page.getByRole('form')).or(page.getByRole('complementary'));
    const matchingRoots = [];
    for (const index of await visibleLocatorIndexes(roots)) {
      const candidate = roots.nth(index);
      const snapshot = await candidate.ariaSnapshot().catch(() => '');
      const matchingHeading = candidate.getByRole('heading', { name: reservationName });
      const controls = candidate.locator('input,select,textarea,button');
      if ((reservationName.test(snapshot) || await matchingHeading.count() > 0) && await controls.count() > 0) matchingRoots.push(candidate);
    }
    let root = null;
    let fewestControls = Number.POSITIVE_INFINITY;
    for (const candidate of matchingRoots) {
      const controlCount = await candidate.locator('input,select,textarea,button').count();
      if (controlCount < fewestControls) { root = candidate; fewestControls = controlCount; }
    }
    reservationState = Boolean(root && await root.locator('input,select,textarea,button').count());
    const focusedReservationHeading = page.getByRole('heading', { name: reservationName });
    const focusedSnapshot = await page.locator(':focus').ariaSnapshot().catch(() => '');
    let focusInMatchingRoot = false;
    for (const candidate of matchingRoots) {
      if (await candidate.evaluate((element) => element === document.activeElement || element.contains(document.activeElement))) {
        focusInMatchingRoot = true;
        break;
      }
    }
    focusTransfer = Boolean(root && (
      focusInMatchingRoot
      || await focusedReservationHeading.evaluateAll((elements) => elements.some((element) => element === document.activeElement))
      || reservationName.test(focusedSnapshot)
    ));
    focusedAfterActivation = await page.locator(':focus').evaluate((element) => element ? ({
      tag: element.tagName.toLowerCase(),
      role: element.getAttribute('role'),
      name: element.getAttribute('aria-label') || element.innerText || element.value || '',
    }) : null).catch(() => null);
    if (root) {
      const geometry = await root.locator('input,select,textarea,button').evaluateAll((elements) => {
        const visible = elements.filter((element) => {
          const rect = element.getBoundingClientRect(); const style = getComputedStyle(element);
          return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden';
        });
        const rects = visible.map((element) => element.getBoundingClientRect());
        return {
          horizontallyUnclipped: rects.length > 0 && rects.every((rect) => rect.left >= -1 && rect.right <= innerWidth + 1),
          minDimension: rects.length ? Math.min(...rects.map((rect) => Math.min(rect.width, rect.height))) : 0,
        };
      });
      reservationControlsHorizontallyUnclipped = geometry.horizontallyUnclipped;
      reservationControlMinDimension = geometry.minDimension;
    }
    reservationAxe = await axeSeriousCritical(page);
  }
  return {
    task_identity: initial.taskIdentity, purpose: initial.purpose, semantic_steps: initial.stageCount,
    unique_primary_action: visibleIndexes.length === 1, reservation_state: reservationState, focus_transfer: focusTransfer,
    keyboard_reachable: keyboardReachable, focus_indicator_visible: focusIndicatorVisible,
    unavailable_information_honest: initial.unavailableInformationHonest,
    viewport: {
      id: viewport.id, width: viewport.width, height: viewport.height, mobile: viewport.width <= 390,
      primary_action_present: Boolean(primary), reservation_state_present: reservationState,
      document_overflow_px: await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth)),
      critical_inside_viewport: inside,
      primary_action_min_dimension_px: rect ? Math.min(rect.width, rect.height) : 0,
      reservation_controls_horizontally_unclipped: reservationControlsHorizontallyUnclipped,
      reservation_control_min_dimension_px: reservationControlMinDimension,
      initial_axe_serious_critical: initialAxe.count, reservation_axe_serious_critical: reservationAxe.count,
      initial_axe_violations: initialAxe.violations, reservation_axe_violations: reservationAxe.violations,
      main_count: initial.mainCount, h1_count: initial.h1Count,
      primary_action_diagnostics: {
        visible_count: visibleIndexes.length,
        candidates: await Promise.all(visibleIndexes.slice(0, 8).map(async (index) => {
          const candidate = candidates.nth(index);
          return {
            tag: await candidate.evaluate((element) => element.tagName.toLowerCase()),
            href: await candidate.getAttribute('href'),
            name: (await candidate.innerText()).replace(/\s+/g, ' ').trim().slice(0, 120),
          };
        })),
        focused_after_activation: focusedAfterActivation,
      },
      unavailable_information_excerpts: initial.unavailableInformationExcerpts,
      post_action_aria: await boundedAriaInventory(page, ['dialog', 'region', 'form', 'complementary', 'heading'], { total: 8 }),
    },
    price_claims: initial.priceClaims, inventory_claims: initial.inventoryClaims,
    social_proof_claims: initial.social, partner_logo_claims: initial.partnerImages,
  };
}

const severityRank = (text) => {
  if (/\b(?:SEV|P)[ -]?0\b|\bcritical\b|\bemergency\b/i.test(text)) return 0;
  if (/\b(?:SEV|P)[ -]?1\b|\bhigh\b|\bmajor\b/i.test(text)) return 1;
  if (/\b(?:SEV|P)[ -]?2\b|\bmedium\b|\bmoderate\b/i.test(text)) return 2;
  if (/\b(?:SEV|P)[ -]?3\b|\blow\b|\bminor\b/i.test(text)) return 3;
  return null;
};

async function evaluateIncident(page, viewport, origin) {
  const openActions = page.getByRole('button', { name: /open|view|inspect/i }).or(page.getByRole('link', { name: /open|view|inspect/i }));
  const visibleOpen = await visibleLocatorIndexes(openActions);
  const incidents = [];
  for (const index of visibleOpen) {
    const action = openActions.nth(index);
    const observed = await action.evaluate((element) => {
      const container = element.closest('tr,article,[role="row"],[role="listitem"]') || element.parentElement;
      const text = (container?.innerText || element.innerText || '').replace(/\s+/g, ' ').trim();
      const identity = text.match(/\bINC[- ]?\d+\b/i)?.[0]?.replace(/\s+/g, '-').toUpperCase() || null;
      const severityElement = [...(container?.querySelectorAll('*') || [])].find((item) => /\b(?:SEV|P)[ -]?[0-3]\b/i.test((item.textContent || '').trim()) && item.children.length === 0);
      const signature = (target) => {
        if (!target) return null;
        const style = getComputedStyle(target);
        return [style.fontWeight, style.fontSize, style.color, style.backgroundColor, style.borderWidth, style.borderStyle].join('|');
      };
      return { text, identity, markerSignature: signature(severityElement), containerSignature: signature(container) };
    });
    const rank = severityRank(observed.text);
    if (rank !== null && observed.identity) incidents.push({ ...observed, rank, action });
  }
  const deduped = [...new Map(incidents.map((item) => [item.identity, item])).values()];
  const ranks = [...new Set(deduped.map((item) => item.rank))];
  const minimum = ranks.length ? Math.min(...ranks) : null;
  const highest = minimum === null ? [] : deduped.filter((item) => item.rank === minimum);
  const top = highest[0] || null;
  const lower = top ? deduped.filter((item) => item.rank > top.rank) : [];
  const visuallyDistinct = Boolean(top && lower.length && lower.every((item) => item.markerSignature !== top.markerSignature || item.containerSignature !== top.containerSignature));
  const initialText = (await page.getByRole('main').innerText()).replace(/\s+/g, ' ');
  const affirmative = initialText.split(/(?<=[.!?])|\n+/).filter((sentence) => !/\b(?:sample|demo|mock|simulated|not live|non-production|not connected|does not (?:contact|connect)|no live)\b/i.test(sentence)).join(' ');
  const protectedClaims = [...affirmative.matchAll(/\b(?:live|production|real-time) (?:infrastructure|systems?|monitoring)|\breal (?:customers?|responders?|on-call staff)|\bcustomer impact(?:ed)?\b/gi)].map((match) => match[0]);
  const initialAxe = await axeSeriousCritical(page);
  let keyboardOpen = false;
  let sameDetail = false;
  let acknowledgedPersistent = false;
  let detailAxe = initialAxe;
  let acknowledgedAxe = initialAxe;
  let controlsUnclipped = true;
  let controlMin = 44;
  if (top) {
    keyboardOpen = await tabUntilFocused(page, top.action);
    if (keyboardOpen) {
      await page.keyboard.press('Enter');
      await afterPaint(page);
    }
    const detailRoots = page.getByRole('dialog').or(page.getByRole('complementary')).or(page.getByRole('region'));
    const visibleDetails = await visibleLocatorIndexes(detailRoots);
    let detail = null;
    for (const index of visibleDetails) {
      const candidate = detailRoots.nth(index);
      if ((await candidate.innerText()).toUpperCase().includes(top.identity)
        && await candidate.getByRole('button', { name: /acknowledge|take ownership|accept incident/i }).count() === 1) { detail = candidate; break; }
    }
    sameDetail = Boolean(detail);
    detailAxe = await axeSeriousCritical(page);
    if (detail) {
      const ack = detail.getByRole('button', { name: /acknowledge|take ownership|accept incident/i });
      if (await ack.count() === 1 && await ack.isVisible()) {
        const reached = await tabUntilFocused(page, ack);
        if (reached) await page.keyboard.press('Enter');
        await afterPaint(page);
        await page.waitForTimeout(550);
        const firstSignature = await detail.evaluate((element, identity) => {
          const text = (element.innerText || '').replace(/\s+/g, ' ');
          const button = [...element.querySelectorAll('button')].find((item) => /acknowledge|acknowledged|take ownership|accept incident/i.test(item.textContent || ''));
          return { same: text.toUpperCase().includes(identity) && /acknowledged|owned|accepted/i.test(text), buttonState: Boolean(button && (button.disabled || button.getAttribute('aria-pressed') === 'true' || /acknowledged|owned|accepted/i.test(button.textContent || ''))) };
        }, top.identity);
        await page.waitForTimeout(550);
        const secondSignature = await detail.evaluate((element, identity) => ({ same: (element.innerText || '').toUpperCase().includes(identity) && /acknowledged|owned|accepted/i.test(element.innerText || '') }), top.identity);
        acknowledgedPersistent = firstSignature.same && firstSignature.buttonState && secondSignature.same;
        acknowledgedAxe = await axeSeriousCritical(page);
      }
      const geometry = await detail.locator('button,input,select,textarea').evaluateAll((elements) => {
        const rects = elements.filter((element) => { const rect = element.getBoundingClientRect(); return rect.width > 0 && rect.height > 0; }).map((element) => element.getBoundingClientRect());
        return { unclipped: rects.every((rect) => rect.left >= -1 && rect.right <= innerWidth + 1), min: rects.length ? Math.min(...rects.map((rect) => Math.min(rect.width, rect.height))) : 44 };
      });
      controlsUnclipped = geometry.unclipped;
      controlMin = geometry.min;
    }
  }
  const scenario = { loading: false, empty: false, error: false, axe: 0 };
  for (const name of ['loading', 'empty', 'error']) {
    await page.goto(`${origin}/?omd-scenario=${name}`, { waitUntil: 'load' });
    await afterPaint(page);
    const main = page.getByRole('main');
    const text = (await main.innerText()).replace(/\s+/g, ' ');
    const possibleIncidentActions = page.getByRole('button', { name: /open|view|inspect|acknowledge/i }).or(page.getByRole('link', { name: /open|view|inspect/i }));
    let enabledIncidentActions = 0;
    for (const index of await visibleLocatorIndexes(possibleIncidentActions)) {
      if (await possibleIncidentActions.nth(index).evaluate((element) => Boolean(element.closest('tr,article,[role="row"],[role="listitem"],dialog,[role="dialog"]')))) enabledIncidentActions += 1;
    }
    if (name === 'loading') scenario.loading = (/loading/i.test(text) && (await page.locator('[aria-busy="true"], [role="progressbar"], [role="status"]').count()) > 0 && enabledIncidentActions === 0);
    if (name === 'empty') scenario.empty = /no open|nothing open|zero open/i.test(text) && enabledIncidentActions === 0;
    if (name === 'error') scenario.error = (await page.getByRole('alert').count()) === 1 && enabledIncidentActions === 0;
    scenario.axe += (await axeSeriousCritical(page)).count;
  }
  // Leave the controller screenshot on the normal product surface. Scenario
  // states are measured above, but an error-state-only screenshot would hide
  // the calibrated hierarchy and make the evidence package misleading.
  await page.goto(origin, { waitUntil: 'load' });
  await afterPaint(page);
  return {
    task_identity: /incident/i.test(initialText), sample_scope_visible: /\b(?:sample|demo|mock|simulated)\b/i.test(initialText),
    incident_count: deduped.length, distinct_severity_count: ranks.length, unique_highest_severity: highest.length === 1,
    highest_visually_distinct: visuallyDistinct, keyboard_open_highest: keyboardOpen, same_incident_detail: sameDetail,
    acknowledged_state_persistent: acknowledgedPersistent, protected_unknown_claims: protectedClaims,
    viewport: { id: viewport.id, width: viewport.width, height: viewport.height, mobile: viewport.width <= 390,
      document_overflow_px: await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth)),
      controls_horizontally_unclipped: controlsUnclipped, control_min_dimension_px: controlMin,
      initial_axe_serious_critical: initialAxe.count, detail_axe_serious_critical: detailAxe.count,
      acknowledged_axe_serious_critical: acknowledgedAxe.count, scenario_axe_serious_critical: scenario.axe,
      main_count: await page.getByRole('main').count(), h1_count: await page.getByRole('heading', { level: 1 }).count(),
      loading_state: scenario.loading, empty_state: scenario.empty, error_state: scenario.error },
  };
}

async function evaluateColdChain(page, viewport) {
  const main = page.getByRole('main');
  const initialText = (await main.innerText()).replace(/\s+/g, ' ');
  const shipmentIdentity = /\b[A-Z][A-Z0-9]{1,7}-\d{2,}\b/i;
  const collectRecords = async () => {
    const containers = page.getByRole('row').or(page.getByRole('article')).or(page.getByRole('listitem')).or(page.getByRole('button'));
    const recordsByIdentity = new Map();
    for (const index of await visibleLocatorIndexes(containers)) {
      const container = containers.nth(index);
      const text = (await container.innerText()).replace(/\s+/g, ' ').trim();
      const accessibleName = (await container.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim();
      const identity = accessibleName.match(shipmentIdentity)?.[0]?.toUpperCase()
        || text.match(shipmentIdentity)?.[0]?.toUpperCase()
        || null;
      if (!identity) continue;
      // Prefer a structural row/article/list item when both it and a nested
      // action expose the same shipment. A role=button record remains valid
      // when an implementation makes the complete row the keyboard target.
      if (recordsByIdentity.has(identity)) continue;
      const intentActions = container.getByRole('button', { name: /inspect|view|open/i }).or(container.getByRole('link', { name: /inspect|view|open/i }));
      const visibleIntentActions = await visibleLocatorIndexes(intentActions);
      const allActions = container.getByRole('button').or(container.getByRole('link'));
      const visibleAllActions = await visibleLocatorIndexes(allActions);
      const containerActionable = await container.evaluate((element) => element.tabIndex >= 0 || ['button', 'link'].includes(element.getAttribute('role') || ''));
      const priority = classifyColdChainPriority(text);
      recordsByIdentity.set(identity, {
        identity,
        urgent: priority.urgent,
        nonUrgent: priority.nonUrgent,
        container,
        action: visibleIntentActions.length ? intentActions.nth(visibleIntentActions[0])
          : visibleAllActions.length === 1 ? allActions.nth(visibleAllActions[0])
            : containerActionable ? container : null,
      });
    }
    return [...recordsByIdentity.values()];
  };
  const records = await collectRecords();
  const initialAxe = await axeSeriousCritical(page);
  const filterKinds = [
    ['checkbox', page.getByRole('checkbox', { name: /urgent/i })],
    ['switch', page.getByRole('switch', { name: /urgent/i })],
    ['button', page.getByRole('button', { name: /^urgent(?:\s|$)/i })],
    ['combobox', page.getByRole('combobox', { name: /urgent|priority|filter/i })],
  ];
  let filterKind = null;
  let filter = null;
  for (const [kind, candidate] of filterKinds) {
    const visible = await visibleLocatorIndexes(candidate);
    if (visible.length) { filterKind = kind; filter = candidate.nth(visible[0]); break; }
  }
  const filterKeyboard = await tabUntilFocused(page, filter);
  if (filterKeyboard && filterKind === 'combobox') {
    const options = await filter.locator('option').all();
    let urgentValue = null;
    for (const option of options) {
      if (/urgent/i.test(await option.innerText())) { urgentValue = await option.getAttribute('value'); break; }
    }
    if (urgentValue !== null) await filter.selectOption(urgentValue);
  } else if (filterKeyboard) await page.keyboard.press(filterKind === 'button' ? 'Enter' : 'Space');
  await afterPaint(page);
  const filteredAxe = await axeSeriousCritical(page);
  const filteredText = (await main.innerText()).replace(/\s+/g, ' ');
  const filteredRecordObjects = await collectRecords();
  const filteredRecords = filteredRecordObjects.map((item) => item.identity);
  let filterProgrammatic = false;
  if (filter) {
    if (filterKind === 'checkbox') filterProgrammatic = await filter.isChecked();
    else if (filterKind === 'switch') filterProgrammatic = await filter.getAttribute('aria-checked') === 'true';
    else if (filterKind === 'button') {
      const pressed = await filter.getAttribute('aria-pressed');
      const current = await filter.getAttribute('aria-current');
      filterProgrammatic = pressed === 'true' || ['true', 'page'].includes(current);
    }
    else if (filterKind === 'combobox') filterProgrammatic = /urgent/i.test(await filter.locator('option:checked').innerText());
  }
  const filterLabel = filter ? await filter.evaluate((element) => {
    const labels = element.labels ? [...element.labels].map((item) => item.innerText).join(' ') : '';
    return `${labels} ${element.innerText || ''} ${element.getAttribute('aria-label') || ''}`.replace(/\s+/g, ' ').trim();
  }) : '';
  const filterStateRegions = page.locator('[aria-live], [role="status"]');
  let filterSummaryVisible = false;
  for (const index of await visibleLocatorIndexes(filterStateRegions)) {
    if (/urgent (?:filter )?(?:active|only)|showing (?:only )?urgent|filtered to urgent/i.test((await filterStateRegions.nth(index).innerText()).replace(/\s+/g, ' '))) {
      filterSummaryVisible = true;
      break;
    }
  }
  const filterStateVisible = filterKind === 'button' ? /urgent/i.test(filterLabel) : filterSummaryVisible;
  const filterSelectedAndVisible = filterKeyboard && filterProgrammatic && filterStateVisible;
  const urgentIds = records.filter((item) => item.urgent).map((item) => item.identity).filter(Boolean);
  const filteredExact = filteredRecords.length === urgentIds.length && filteredRecords.every((id) => urgentIds.includes(id));
  const firstRecord = filteredRecordObjects[0] ?? null;
  const firstAction = firstRecord?.action ?? null;
  const activeIdentity = firstRecord?.identity ?? null;
  let keyboardOpen = false;
  const detailRoots = page.getByRole('complementary').or(page.getByRole('region'));
  const detailSignature = async () => {
    for (const index of await visibleLocatorIndexes(detailRoots)) {
      const candidate = detailRoots.nth(index);
      const text = (await candidate.innerText()).replace(/\s+/g, ' ');
      if (activeIdentity && text.toUpperCase().includes(activeIdentity) && await candidate.getByRole('combobox', { name: /owner/i }).count() === 1) return text;
    }
    return '';
  };
  const detailBefore = await detailSignature();
  let detailAfter = '';
  let actionReached = false;
  const selectedBefore = firstRecord ? await firstRecord.container.getAttribute('aria-selected') : null;
  if (firstAction) {
    const reached = await tabUntilFocused(page, firstAction);
    actionReached = reached;
    if (reached) await page.keyboard.press('Enter');
    await afterPaint(page);
    detailAfter = await detailSignature();
    const selectedAfter = activeIdentity ? await page.getByRole('row').or(page.getByRole('article')).or(page.getByRole('listitem')).or(page.getByRole('button')).filter({ hasText: activeIdentity }).first().getAttribute('aria-selected') : null;
    keyboardOpen = reached && Boolean(detailAfter) && (detailAfter !== detailBefore
      || (selectedBefore !== 'true' && selectedAfter === 'true')
      || detailAfter.toUpperCase().includes(activeIdentity));
  }
  let detail = null;
  for (const index of await visibleLocatorIndexes(detailRoots)) {
    const candidate = detailRoots.nth(index);
    if (activeIdentity && (await candidate.innerText()).toUpperCase().includes(activeIdentity) && await candidate.getByRole('combobox', { name: /owner/i }).count() === 1) { detail = candidate; break; }
  }
  const matchingEvidence = Boolean(detail && /sample (?:data|evidence|sensor|probe|event|reading|note|value)/i.test(await detail.innerText())
    && /(?:observed|temperature|activity|scan|reading|event|sensor|probe)/i.test(await detail.innerText()));
  const detailAxe = await axeSeriousCritical(page);
  let errorAssociated = false;
  let sampleOwnerOptions = false;
  let assignedPersistent = false;
  let selectedOwner = '';
  let assignmentStatusText = '';
  let assignedSourceRecordText = '';
  let errorAxe = detailAxe;
  let assignedAxe = detailAxe;
  let controlsUnclipped = true;
  let controlMin = 44;
  if (detail) {
    // Match the assignment action itself, not neighboring controls such as an
    // "Unassigned" queue filter that happens to contain the same substring.
    const submit = detail.getByRole('button', { name: /^assign(?: selected)?(?: owner)?$/i });
    const owner = detail.getByRole('combobox', { name: /owner/i });
    if (await submit.count() === 1 && await submit.isVisible() && await owner.count() === 1 && await owner.isVisible()) {
      await submit.press('Enter'); await afterPaint(page);
      const described = await owner.getAttribute('aria-describedby');
      const alerts = page.getByRole('alert');
      const visibleAlerts = await visibleLocatorIndexes(alerts);
      const alertText = visibleAlerts.length === 1 ? (await alerts.nth(visibleAlerts[0]).innerText()).trim() : '';
      errorAssociated = await owner.evaluate((element) => element === document.activeElement) && Boolean(described) && Boolean(alertText);
      errorAxe = await axeSeriousCritical(page);
      const options = await owner.locator('option').allTextContents();
      const ownerScope = await owner.evaluate((element) => {
        const labels = element.labels ? [...element.labels].map((item) => item.innerText).join(' ') : '';
        return `${labels} ${element.getAttribute('aria-label') || ''}`.replace(/\s+/g, ' ').trim();
      });
      const scopedOptionValues = await owner.locator('optgroup').evaluateAll((groups) => groups
        .filter((group) => /sample|demo|fictional/i.test(group.label || ''))
        .flatMap((group) => [...group.querySelectorAll('option')].map((option) => option.textContent || '')));
      const sampleOptions = [...new Set([
        ...options.filter((item) => isSampleOwnerOption(item, ownerScope)),
        ...scopedOptionValues.filter((item) => item.trim()),
      ])];
      sampleOwnerOptions = sampleOptions.length > 0;
      const chosen = sampleOptions[0] || options.find((item) => item.trim() && !/select|choose/i.test(item));
      if (chosen) {
        await owner.selectOption({ label: chosen });
        await submit.press('Enter'); await page.waitForTimeout(400); await afterPaint(page);
        const statuses = page.getByRole('status');
        const statusTexts = [];
        for (const index of await visibleLocatorIndexes(statuses)) statusTexts.push((await statuses.nth(index).innerText()).replace(/\s+/g, ' '));
        const statusText = statusTexts.join(' ');
        const ownerName = chosen.split('·')[0].trim();
        const refreshedRecords = await collectRecords();
        const sourceRecordText = activeIdentity ? (await refreshedRecords.find((item) => item.identity === activeIdentity)?.container.innerText()) || '' : '';
        selectedOwner = ownerName;
        assignmentStatusText = statusText;
        assignedSourceRecordText = sourceRecordText;
        assignedPersistent = Boolean(activeIdentity && statusText.includes(activeIdentity) && statusText.includes(ownerName) && sourceRecordText.includes(ownerName));
        assignedAxe = await axeSeriousCritical(page);
      }
    }
    const geometry = await detail.locator('button,select').evaluateAll((elements) => { const rects = elements.filter((element) => { const r = element.getBoundingClientRect(); return r.width > 0 && r.height > 0; }).map((element) => element.getBoundingClientRect()); return { unclipped: rects.every((r) => r.left >= -1 && r.right <= innerWidth + 1), min: rects.length ? Math.min(...rects.map((r) => Math.min(r.width, r.height))) : 44 }; });
    controlsUnclipped = geometry.unclipped; controlMin = geometry.min;
  }
  const visibleText = `${initialText} ${filteredText}`;
  const unqualified = visibleText.split(/(?<=[.!?])|\n+/).filter((sentence) => !/\b(?:sample|demo|fictional|unknown|not provided|not verified)\b/i.test(sentence)).join(' ');
  const protectedClaims = [...unqualified.matchAll(/\b(?:FDA|GDP|GMP)[ -]?(?:compliant|certified|approved)?\b|\b(?:regulatory|compliance) (?:verified|approved|certified)|\breal (?:shipments?|staff)\b/gi)].map((match) => match[0]);
  const criticalFieldsReachable = viewport.width > 390 || filteredRecords.length === urgentIds.length;
  const overflow = await documentOverflowObservation(page);
  return { task_identity: /cold[-\s]chain|shipment exception|exception queue/i.test(initialText), sample_scope_visible: /\b(?:sample|demo|fictional)\b/i.test(initialText), shipment_count: records.length, urgent_count: records.filter((item) => item.urgent).length, non_urgent_count: records.filter((item) => item.nonUrgent).length, routine_count: records.filter((item) => item.nonUrgent).length, filter_selected_and_visible: filterSelectedAndVisible, filtered_contents_exact: filteredExact, keyboard_open_sample: keyboardOpen, matching_evidence_detail: matchingEvidence, owner_error_associated: errorAssociated, sample_owner_options: sampleOwnerOptions, assigned_owner_confirmed_and_persistent: assignedPersistent, protected_unknown_claims: protectedClaims, viewport: { id: viewport.id, width: viewport.width, height: viewport.height, mobile: viewport.width <= 390, document_overflow_px: overflow.document_overflow_px, document_overflow_offenders: overflow.offenders, critical_fields_reachable: criticalFieldsReachable, controls_horizontally_unclipped: controlsUnclipped, control_min_dimension_px: controlMin, initial_axe_serious_critical: initialAxe.count, filtered_axe_serious_critical: filteredAxe.count, detail_axe_serious_critical: detailAxe.count, error_axe_serious_critical: errorAxe.count, assigned_axe_serious_critical: assignedAxe.count, initial_axe_violations: initialAxe.violations, filtered_axe_violations: filteredAxe.violations, detail_axe_violations: detailAxe.violations, error_axe_violations: errorAxe.violations, assigned_axe_violations: assignedAxe.violations, main_count: await page.getByRole('main').count(), h1_count: await page.getByRole('heading', { level: 1 }).count(), accessibility_inventory: await boundedAriaInventory(page, ['row', 'article', 'listitem', 'button', 'link', 'combobox', 'status', 'alert'], { total: 10 }), interaction_diagnostics: { filter_kind: filterKind, filter_keyboard: filterKeyboard, filter_programmatic: filterProgrammatic, filter_label: filterLabel, action_reached: actionReached, detail_before: detailBefore, detail_after: detailAfter, record_classification: records.map(({ identity, urgent, nonUrgent }) => ({ identity, urgent, non_urgent: nonUrgent })), urgent_ids: urgentIds, filtered_record_ids: filteredRecords, selected_owner: selectedOwner, assignment_status_text: assignmentStatusText.slice(0, 500), assigned_source_record_text: assignedSourceRecordText.replace(/\s+/g, ' ').slice(0, 500), assigned_status_persistent: assignedPersistent } } };
}

async function evaluateCaregiver(page, viewport) {
  const main = page.getByRole('main'); const stateAxe = []; const h1Counts = [];
  const checkState = async () => { stateAxe.push((await axeSeriousCritical(page)).count); h1Counts.push(await page.getByRole('heading', { level: 1 }).count()); };
  const progress = async (step) => {
    const visibleText = (await main.innerText()).replace(/\s+/g, ' ');
    const textExact = new RegExp(`Step ${step} of 3`, 'i').test(visibleText);
    const bar = page.getByRole('progressbar');
    const barExact = await bar.count() === 1 && await bar.isVisible() && Number(await bar.getAttribute('aria-valuenow')) === step && Number(await bar.getAttribute('aria-valuemax')) === 3;
    const current = page.locator('[aria-current="step"]');
    const currentExact = await current.count() === 1 && await current.isVisible() && new RegExp(`(?:^|\\s)${step}[.\\s]`).test((await current.innerText()).trim());
    return textExact && (barExact || currentExact);
  };
  const initialText = (await main.innerText()).replace(/\s+/g, ' '); const progress1 = await progress(1); await checkState();
  const next = page.getByRole('button', { name: /^Continue to preferences$|^Choose preferences$/i }); const nextKeyboard = await tabUntilFocused(page, next); if (nextKeyboard) await page.keyboard.press('Enter'); await afterPaint(page);
  const progress2 = await progress(2); const choices = page.getByRole('radio'); const noPreselection = await choices.count() >= 2 && await page.locator('input[type="radio"]:checked').count() === 0; await checkState();
  const reviewButton = page.getByRole('button', { name: /^Review choices$|^Continue to review$/i }); await reviewButton.press('Enter'); await afterPaint(page);
  const stayedOnTwo = await progress(2); let errorAssociated = false; let progress3 = false; let reviewEcho = false; let progress2Again = false; let preserved = false; let progress3Again = false; let statusText = ''; let noStaleCurrent = false;
  if (stayedOnTwo) {
    const alert = page.getByRole('alert'); const describedBy = await choices.first().getAttribute('aria-describedby'); const fieldsetDescribed = await choices.first().evaluate((element) => element.closest('fieldset')?.getAttribute('aria-describedby') || '');
    errorAssociated = await alert.count() === 1 && await alert.isVisible() && await choices.first().evaluate((element) => element === document.activeElement) && Boolean(describedBy || fieldsetDescribed); await checkState();
    const firstChoice = choices.first(); const selectedLabel = (await firstChoice.getAttribute('value') || '').trim(); await firstChoice.check(); await reviewButton.press('Enter'); await afterPaint(page);
    progress3 = await progress(3); const reviewText = (await main.innerText()).replace(/\s+/g, ' '); reviewEcho = selectedLabel.length > 0 && reviewText.includes(selectedLabel); await checkState();
    const back = page.getByRole('button', { name: /back to preferences|edit preference/i }); await back.press('Enter'); await afterPaint(page); progress2Again = await progress(2); preserved = await firstChoice.isChecked(); await checkState();
    if (preserved) {
      await reviewButton.press('Enter'); await afterPaint(page); progress3Again = await progress(3); const finish = page.getByRole('button', { name: /finish|complete setup/i }); await finish.press('Enter'); await afterPaint(page);
      const status = page.getByRole('status'); statusText = await status.count() === 1 ? (await status.innerText()).replace(/\s+/g, ' ') : ''; noStaleCurrent = await page.locator('[aria-current="step"]:visible').count() === 0 && await page.locator('[role="progressbar"]:visible').count() === 0; await checkState();
    }
  } else await checkState();
  const controls = await page.locator('button,input').evaluateAll((elements) => { const rects = elements.filter((element) => { const r = element.getBoundingClientRect(); return r.width > 0 && r.height > 0; }).map((element) => element.closest('label')?.getBoundingClientRect() || element.getBoundingClientRect()); return { unclipped: rects.every((r) => r.left >= -1 && r.right <= innerWidth + 1), min: rects.length ? Math.min(...rects.map((r) => Math.min(r.width, r.height))) : 44 }; });
  const unqualified = initialText.split(/(?<=[.!?])|\n+/).filter((sentence) => !/\b(?:does not|no |not |unknown|choose|select)\b/i.test(sentence)).join(' '); const protectedClaims = [...unqualified.matchAll(/\b(?:diagnosed with|diagnosis is|spouse|parent|child|sibling|consent (?:granted|recorded|confirmed))\b/gi)].map((match) => match[0]);
  return { task_identity: /care|coordination|caregiver/i.test(initialText), purpose_honest: /does not infer|without assumptions|no diagnosis/i.test(initialText), progress_all_steps: progress1 && progress2 && stayedOnTwo && progress3 && progress2Again && progress3Again, no_silent_preselection: noPreselection, empty_choice_blocked: stayedOnTwo, preference_error_associated: errorAssociated, review_echoes_choice: reviewEcho, back_preserves_choice: preserved, complete_announced: /complete|ready/i.test(statusText) && noStaleCurrent, protected_unknown_claims: protectedClaims, viewport: { id: viewport.id, width: viewport.width, height: viewport.height, mobile: viewport.width <= 390, document_overflow_px: await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth)), controls_horizontally_unclipped: controls.unclipped, control_min_dimension_px: controls.min, axe_serious_critical: stateAxe.reduce((sum, value) => sum + value, 0), main_count: await page.getByRole('main').count(), h1_count_per_state: h1Counts } };
}

async function evaluateCheckout(page, viewport, origin) {
  const main = page.getByRole('main'); const axeCounts = []; const h1Counts = [];
  const checkState = async () => { axeCounts.push((await axeSeriousCritical(page)).count); h1Counts.push(await page.getByRole('heading', { level: 1 }).count()); };
  const initialText = (await main.innerText()).replace(/\s+/g, ' '); await checkState();
  const totalCandidates = page.getByText(/total/i); let totalVisible = false; let totalUnclipped = false;
  for (const index of await visibleLocatorIndexes(totalCandidates)) {
    const candidate = totalCandidates.nth(index); const observation = await candidate.evaluate((element) => { const group = element.closest('.total,dl,div,section,article') || element.parentElement; const text = (group?.innerText || '').replace(/\s+/g, ' '); const rect = group?.getBoundingClientRect(); return { hasAmount: /[$€£¥₩]\s?\d|\d[.,]\d{2}\s?(?:USD|EUR|GBP|KRW)/i.test(text), unclipped: Boolean(rect && rect.width > 0 && rect.left >= -1 && rect.right <= innerWidth + 1) }; });
    if (observation.hasAmount) { totalVisible = true; totalUnclipped = observation.unclipped; break; }
  }
  const affirmativeInitial = initialText.split(/(?<=[.!?])|\n+/).filter((sentence) => !/\b(?:not|no |unknown|before confirmation)\b/i.test(sentence)).join(' ');
  const premature = [...affirmativeInitial.matchAll(/\b(?:payment (?:successful|complete|paid)|paid successfully|booking confirmed|purchase complete)\b/gi)].map((match) => match[0]);
  let email = page.getByRole('textbox', { name: /email/i });
  if (await email.count() === 0 || !await email.isVisible()) { const contact = page.getByRole('button', { name: /continue to contact|contact details/i }); if (await contact.count() === 1) { const reached = await tabUntilFocused(page, contact); if (reached) await page.keyboard.press('Enter'); await afterPaint(page); } email = page.getByRole('textbox', { name: /email/i }); }
  const name = page.getByRole('textbox', { name: /name/i }); const submit = page.getByRole('button', { name: /confirm/i });
  await submit.press('Enter'); await afterPaint(page); const emptyAlerts = page.getByRole('alert'); const emptyBlocked = await emptyAlerts.count() >= 1 && !/confirmed/i.test((await main.innerText()).replace(/\s+/g, ' ')); await checkState();
  await name.fill('Sample Guest'); await email.fill('a@'); await submit.press('Enter'); await afterPaint(page);
  const emailDescribed = await email.getAttribute('aria-describedby'); const emailAlert = emailDescribed ? page.locator(`#${emailDescribed}`) : page.getByRole('alert').filter({ hasText: /email/i });
  const invalidBlocked = await emailAlert.count() >= 1 && await emailAlert.isVisible() && !/booking confirmed|purchase complete/i.test((await main.innerText()).replace(/\s+/g, ' ')); const errorAssociated = invalidBlocked && await email.evaluate((element) => element === document.activeElement) && Boolean(emailDescribed); await checkState();
  let busy = false; let confirmed = false;
  if (invalidBlocked) {
    await email.fill('test@example.com'); await submit.press('Enter'); await page.waitForTimeout(35);
    busy = await submit.getAttribute('aria-busy') === 'true' || await page.getByRole('status').filter({ hasText: /confirming|submitting|processing/i }).count() > 0; await page.waitForTimeout(180); await afterPaint(page);
    const confirmedText = (await main.innerText()).replace(/\s+/g, ' '); confirmed = /sample booking confirmed|booking confirmed|place is recorded/i.test(confirmedText); await checkState();
  } else { confirmed = /sample booking confirmed|booking confirmed|place is recorded/i.test((await main.innerText()).replace(/\s+/g, ' ')); await checkState(); }
  const controls = await page.locator('button,input,a').evaluateAll((elements) => { const rects = elements.filter((element) => { const r = element.getBoundingClientRect(); return r.width > 0 && r.height > 0; }).map((element) => element.getBoundingClientRect()); return { unclipped: rects.every((r) => r.left >= -1 && r.right <= innerWidth + 1), min: rects.length ? Math.min(...rects.filter((r) => r.width >= 40).map((r) => Math.min(r.width, r.height))) : 44 }; });
  await page.goto(`${origin}/?omd-scenario=declined`, { waitUntil: 'load' }); await afterPaint(page); const declineAlert = page.getByRole('alert'); const recovery = page.getByRole('link', { name: /change details|return to booking|try again/i }); const declined = await declineAlert.count() === 1 && /declined|not confirmed/i.test(await declineAlert.innerText()) && await recovery.count() === 1 && await recovery.isVisible(); await checkState();
  const protectedClaims = [...affirmativeInitial.matchAll(/\b(?:save \d|discount|coupon|limited seats?|only \d+ (?:seats?|spots?) left|testimonial|rated \d|trusted by)\b/gi)].map((match) => match[0]);
  return { task_identity: /class|workshop|booking/i.test(initialText), sample_scope_visible: /\b(?:sample|fictional|demonstration)\b/i.test(initialText), total_visible_before_confirm: totalVisible, empty_contact_blocked: emptyBlocked, invalid_email_blocked: invalidBlocked, email_error_associated: errorAssociated, submitting_observable: busy, confirmed_after_action: confirmed, declined_recovery_reachable: declined, premature_success_claims: premature, protected_unknown_claims: protectedClaims, viewport: { id: viewport.id, width: viewport.width, height: viewport.height, mobile: viewport.width <= 390, document_overflow_px: await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth)), total_unclipped: totalUnclipped, controls_horizontally_unclipped: controls.unclipped, control_min_dimension_px: controls.min, axe_serious_critical: axeCounts.reduce((sum, value) => sum + value, 0), main_count: await page.getByRole('main').count(), h1_count_per_state: h1Counts } };
}

async function evaluateDeletion(page, viewport, origin) {
  const main = page.getByRole('main'); const axeCounts = []; const h1Counts = [];
  const checkState = async () => { axeCounts.push((await axeSeriousCritical(page)).count); h1Counts.push(await page.getByRole('heading', { level: 1 }).count()); };
  const initialText = (await main.innerText()).replace(/\s+/g, ' '); await checkState();
  const continueButton = page.getByRole('button', { name: /continue to confirmation|review confirmation|confirm removal/i });
  if (await continueButton.count() === 1 && await continueButton.isVisible()) { const reached = await tabUntilFocused(page, continueButton); if (reached) await page.keyboard.press('Enter'); await afterPaint(page); }
  const scopeObservation = await main.evaluate((element) => {
    const lists = [...element.querySelectorAll('ul,ol,dl')].filter((node) => { const r = node.getBoundingClientRect(); return r.width > 0 && r.height > 0; });
    const childCount = Math.max(0, ...lists.map((node) => node.matches('dl') ? node.querySelectorAll('dt,dd').length : node.querySelectorAll(':scope > li').length));
    const root = [...element.querySelectorAll('h2,h3,strong')].find((node) => /(?:parent )?dataset|sample coastal survey|sample arctic notes/i.test(node.textContent || ''));
    const rect = root?.closest('section,article,div')?.getBoundingClientRect();
    return { hierarchy: Boolean(root && childCount >= 2), unclipped: Boolean(rect && rect.left >= -1 && rect.right <= innerWidth + 1) };
  });
  const ack = page.getByRole('checkbox', { name: /acknowledge|understand/i });
  const phrase = page.getByRole('textbox', { name: /type|confirmation/i });
  const phraseText = await phrase.evaluate((element) => { const label = element.labels?.[0]?.innerText || ''; const match = label.match(/(?:Type|enter)\s+(.+)/i); return (match?.[1] || '').trim(); });
  const approve = page.getByRole('button', { name: /delete sample dataset|approve sample removal|approve deletion/i });
  const cancelButton = page.getByRole('button', { name: /cancel (?:deletion|removal)/i });
  const cancelReachable = await cancelButton.count() === 1 && await cancelButton.isVisible() ? await tabUntilFocused(page, cancelButton) : false; if (cancelReachable) await page.keyboard.press('Shift+Tab');
  await phrase.fill(phraseText); await approve.press('Enter'); await afterPaint(page);
  const blockedWithoutAck = !/deletion approved|removal approved/i.test((await main.innerText()).replace(/\s+/g, ' ')) && await ack.evaluate((element) => element === document.activeElement); await checkState();
  await ack.check(); await phrase.fill('WRONG PHRASE'); await approve.press('Enter'); await afterPaint(page);
  const describedBy = await phrase.getAttribute('aria-describedby'); const alert = describedBy ? page.locator(`#${describedBy}`) : page.getByRole('alert');
  const wrongBlocked = !/deletion approved|removal approved/i.test((await main.innerText()).replace(/\s+/g, ' '));
  const errorAssociated = wrongBlocked && await alert.count() >= 1 && await alert.isVisible() && await phrase.evaluate((element) => element === document.activeElement) && Boolean(describedBy); await checkState();
  await phrase.fill(phraseText); await approve.press('Enter'); await afterPaint(page);
  const approved = /deletion approved|removal approved/i.test((await main.innerText()).replace(/\s+/g, ' ')); await checkState();
  const controls = await page.locator('button,input[type="text"],label:has(input[type="checkbox"])').evaluateAll((elements) => { const rects = elements.filter((element) => { const r = element.getBoundingClientRect(); return r.width > 0 && r.height > 0; }).map((element) => element.getBoundingClientRect()); return { unclipped: rects.every((r) => r.left >= -1 && r.right <= innerWidth + 1), min: rects.length ? Math.min(...rects.map((r) => Math.min(r.width, r.height))) : 0 }; });
  await page.goto(origin, { waitUntil: 'load' }); await afterPaint(page); const freshContinue = page.getByRole('button', { name: /continue to confirmation|review confirmation|confirm removal/i }); if (await freshContinue.count() === 1 && await freshContinue.isVisible()) { await freshContinue.press('Enter'); await afterPaint(page); }
  const freshCancel = page.getByRole('button', { name: /cancel (?:deletion|removal)/i }); const freshCancelKeyboard = await freshCancel.count() === 1 && await freshCancel.isVisible() ? await tabUntilFocused(page, freshCancel) : false; if (freshCancelKeyboard) await page.keyboard.press('Enter'); await afterPaint(page);
  const cancelStatus = page.getByRole('status'); const cancelled = freshCancelKeyboard && await cancelStatus.count() >= 1 && /cancelled|remains unchanged|remains available/i.test((await cancelStatus.allInnerTexts()).join(' ')); await checkState();
  const affirmative = initialText.split(/(?<=[.!?])|\n+/).filter((sentence) => !/\b(?:not provided|not verified|not specified|unknown|no retention|no legal|no audit|no compliance)\b/i.test(sentence)).join(' ');
  const protectedClaims = [...affirmative.matchAll(/\b(?:retained for \d|retention (?:period|policy) (?:is|of)|legally (?:required|compliant)|legal basis (?:is|confirmed)|audit(?:ed| log(?:ged|ging)?) (?:is|enabled|complete)|certified|compliant with)\b/gi)].map((match) => match[0]);
  return { task_identity: /delete|deletion|removal/i.test(initialText) && /dataset|research/i.test(initialText), sample_scope_visible: /\b(?:sample|fictional|demonstration)\b/i.test(initialText), scope_parent_child_hierarchy: scopeObservation.hierarchy, exact_phrase_discoverable: phraseText.length >= 8, phrase_without_ack_blocked: blockedWithoutAck, wrong_phrase_blocked: wrongBlocked, validation_error_associated: errorAssociated, approve_requires_both_gates: blockedWithoutAck && wrongBlocked && approved, cancel_keyboard_reachable: cancelReachable && freshCancelKeyboard, cancelled_state_announced: cancelled, protected_unknown_claims: protectedClaims, viewport: { id: viewport.id, width: viewport.width, height: viewport.height, mobile: viewport.width <= 390, document_overflow_px: await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth)), scope_unclipped: scopeObservation.unclipped, controls_horizontally_unclipped: controls.unclipped, control_min_dimension_px: controls.min, axe_serious_critical: axeCounts.reduce((sum, value) => sum + value, 0), main_count: await page.getByRole('main').count(), h1_count_per_state: h1Counts } };
}

async function evaluateSearch(page, viewport, origin) {
  const main = page.getByRole('main'); const axeCounts = []; const h1Counts = [];
  const checkState = async () => { axeCounts.push((await axeSeriousCritical(page)).count); h1Counts.push(await page.getByRole('heading', { level: 1 }).count()); };
  const initialText = (await main.innerText()).replace(/\s+/g, ' '); await checkState();
  const resultButtons = () => page.getByRole('button', { name: /^(?:open|view) /i });
  const initialCount = await resultButtons().count(); const firstButton = resultButtons().first();
  const firstTitle = initialCount ? await firstButton.evaluate((element) => element.closest('li,article,tr')?.querySelector('h2,h3,strong,[role="rowheader"]')?.textContent?.trim() || element.getAttribute('aria-label') || '') : '';
  const query = page.getByRole('searchbox'); const submit = page.getByRole('button', { name: /search|update results/i });
  await query.fill(firstTitle); await submit.press('Enter'); await afterPaint(page); const searchCount = await resultButtons().count(); await checkState();
  const selects = page.getByRole('combobox'); const chosen = [];
  for (let index = 0; index < Math.min(2, await selects.count()); index += 1) {
    const options = await selects.nth(index).locator('option').allTextContents(); const value = options.slice(1).find((item) => firstTitle && initialText.includes(item)) || options[1];
    if (value) { await selects.nth(index).selectOption({ label: value }); chosen.push(value); await afterPaint(page); }
  }
  const active = page.locator('[aria-label="Active filters"]'); const activeText = await active.count() === 1 && await active.isVisible() ? (await active.innerText()).replace(/\s+/g, ' ') : '';
  const filteredCount = await resultButtons().count(); const countStatus = (await page.getByRole('status').allInnerTexts()).join(' '); await checkState();
  const clear = page.getByRole('button', { name: /^Clear filters$/i }); await clear.press('Enter'); await afterPaint(page);
  const cleared = await selects.evaluateAll((elements) => elements.every((element) => !element.value)) && (!await active.count() || !await active.isVisible() || !(await active.innerText()).trim()) && await query.inputValue() === firstTitle && await resultButtons().count() === searchCount; await checkState();
  await query.fill(`no-match-${crypto.randomUUID()}`); await submit.press('Enter'); await afterPaint(page); const noResults = page.getByRole('status').filter({ hasText: /no .*records|no matching/i }); const recovery = page.getByRole('button', { name: /clear search and filters|reset search and filters/i }); const distinctNoResults = await resultButtons().count() === 0 && await noResults.count() === 1 && await noResults.isVisible() && await recovery.count() === 1 && await recovery.isVisible() && await page.getByRole('alert').count() === 0; await checkState();
  const recoveryVisible = await recovery.count() === 1 && await recovery.isVisible(); if (recoveryVisible) await recovery.press('Enter'); await afterPaint(page);
  const open = resultButtons().first(); const openAvailable = await open.count() === 1 && await open.isVisible(); const openedTitle = openAvailable ? await open.evaluate((element) => element.closest('li,article,tr')?.querySelector('h2,h3,strong,[role="rowheader"]')?.textContent?.trim() || '') : ''; const keyboardOpen = openAvailable ? await tabUntilFocused(page, open) : false; if (keyboardOpen) await page.keyboard.press('Enter'); await afterPaint(page);
  const detail = page.getByRole('dialog').or(page.locator('section[aria-labelledby]:visible').filter({ hasText: openedTitle })).last(); const detailMatch = keyboardOpen && await detail.count() >= 1 && await detail.isVisible() && (await detail.innerText()).includes(openedTitle); await checkState();
  const controls = await page.locator('button,input,select').evaluateAll((elements) => { const rects = elements.filter((element) => { const r = element.getBoundingClientRect(); return r.width > 0 && r.height > 0; }).map((element) => element.getBoundingClientRect()); return { unclipped: rects.every((r) => r.left >= -1 && r.right <= innerWidth + 1), min: rects.length ? Math.min(...rects.map((r) => Math.min(r.width, r.height))) : 0 }; });
  await page.goto(`${origin}/?omd-scenario=error`, { waitUntil: 'load' }); await afterPaint(page); const errorAlert = page.getByRole('alert'); const retry = page.getByRole('link', { name: /retry/i }); const errorRecovery = await errorAlert.count() === 1 && await errorAlert.isVisible() && await retry.count() === 1 && await retry.isVisible(); await checkState();
  const affirmative = initialText.split(/(?<=[.!?])|\n+/).filter((sentence) => !/\b(?:not affiliated|fictional|demonstration|does not claim|does not represent|not official)\b/i.test(sentence)).join(' ');
  const protectedClaims = [...affirmative.matchAll(/\b(?:official government|government affiliated|agency certified|real people|complete records?|authoritative (?:archive|coverage)|live government data|current official data)\b/gi)].map((match) => match[0]);
  return { task_identity: /search/i.test(initialText) && /records?/i.test(initialText), fictional_scope_visible: /\bfictional\b/i.test(initialText), initial_results_available: initialCount >= 1, search_updates_results: searchCount >= 1 && searchCount <= initialCount, two_filters_selected: chosen.length === 2, active_filter_values_visible: chosen.length === 2 && chosen.every((value) => activeText.includes(value)), filtered_count_contextual: filteredCount >= 0 && /\d+ fictional (?:record|result)/i.test(countStatus), clear_contract_honored: cleared, no_results_distinct: distinctNoResults, opened_record_identity_matches: detailMatch, error_recovery_reachable: errorRecovery, protected_unknown_claims: protectedClaims, viewport: { id: viewport.id, width: viewport.width, height: viewport.height, mobile: viewport.width <= 390, document_overflow_px: await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth)), controls_horizontally_unclipped: controls.unclipped, control_min_dimension_px: controls.min, axe_serious_critical: axeCounts.reduce((sum, value) => sum + value, 0), main_count: await page.getByRole('main').count(), h1_count_per_state: h1Counts } };
}

async function evaluateEditorial(page, viewport) {
  const main = page.getByRole('main'); const axeCounts = []; const h1Counts = [];
  const checkState = async () => { axeCounts.push((await axeSeriousCritical(page)).count); h1Counts.push(await page.getByRole('heading', { level: 1 }).count()); };
  const initialText = (await main.innerText()).replace(/\s+/g, ' '); await checkState();
  const outline = await main.locator('h1,h2,h3,h4,h5,h6').evaluateAll((headings) => { const levels = headings.filter((element) => { const r = element.getBoundingClientRect(); return r.width > 0 && r.height > 0; }).map((element) => Number(element.tagName.slice(1))); return { levels, valid: levels.length >= 4 && levels[0] === 1 && levels.filter((level) => level === 1).length === 1 && levels.every((level, index) => index === 0 || level <= levels[index - 1] + 1) }; });
  const nav = page.getByRole('navigation', { name: /article sections|notebook chapters/i }); const links = nav.getByRole('link'); const second = links.nth(1); const target = (await second.getAttribute('href') || '').replace(/^#/, ''); const keyboardNav = await tabUntilFocused(page, second); if (keyboardNav) await page.keyboard.press('Enter'); await afterPaint(page);
  const targetHeading = page.locator(`#${target}`).getByRole('heading').first(); const sectionNavigation = keyboardNav && target.length > 0 && await targetHeading.count() === 1 && await targetHeading.isVisible() && (await page.evaluate(() => location.hash.replace(/^#/, ''))) === target;
  const current = await second.getAttribute('aria-current'); const activeCurrent = sectionNavigation && ['true', 'page', 'location'].includes(current || ''); await checkState();
  const evidence = await main.evaluate((element) => { const figure = [...element.querySelectorAll('figure')].find((node) => { const r = node.getBoundingClientRect(); return r.width > 0 && r.height > 0; }); const caption = figure?.querySelector('figcaption'); const citation = [...element.querySelectorAll('cite,[aria-label*="Source" i],[aria-label*="Citation" i]')].find((node) => { const r = node.getBoundingClientRect(); return r.width > 0 && r.height > 0; }); const fr = figure?.getBoundingClientRect(); return { separate: Boolean(caption && citation && caption !== citation && !caption.contains(citation) && !citation.contains(caption) && (caption.textContent || '').trim() !== (citation.textContent || '').trim()), unclipped: Boolean(fr && fr.left >= -1 && fr.right <= innerWidth + 1) }; });
  const email = page.getByRole('textbox', { name: /email/i }); const submit = page.getByRole('button', { name: /subscribe|join sample updates/i });
  await submit.press('Enter'); await afterPaint(page); const emptyBlocked = !/subscribed/i.test((await main.innerText()).replace(/\s+/g, ' ')); await checkState();
  await email.fill('a@'); await submit.press('Enter'); await afterPaint(page); const describedBy = await email.getAttribute('aria-describedby'); const error = describedBy ? page.locator(`#${describedBy}`) : page.getByRole('alert').filter({ hasText: /email/i }); const malformedBlocked = !/subscribed/i.test((await main.innerText()).replace(/\s+/g, ' ')); const associated = malformedBlocked && await error.count() === 1 && await error.isVisible() && await email.evaluate((element) => element === document.activeElement) && Boolean(describedBy); await checkState();
  await email.fill('test@example.com'); await submit.press('Enter'); await afterPaint(page); const status = page.getByRole('status'); const subscribed = await status.count() >= 1 && /subscribed/i.test((await status.allInnerTexts()).join(' ')); await checkState();
  const controls = await page.locator('input,button').evaluateAll((elements) => { const rects = elements.filter((element) => { const r = element.getBoundingClientRect(); return r.width > 0 && r.height > 0; }).map((element) => element.getBoundingClientRect()); return { unclipped: rects.every((r) => r.left >= -1 && r.right <= innerWidth + 1), min: rects.length ? Math.min(...rects.map((r) => Math.min(r.width, r.height))) : 0 }; });
  const affirmative = initialText.split(/(?<=[.!?])|\n+/).filter((sentence) => !/\b(?:no author|no .*claim|fictional|invented|demonstration|not formal)\b/i.test(sentence)).join(' ');
  const protectedClaims = [...affirmative.matchAll(/\b(?:phd|professor|certified ecologist|expert researcher|read by \d|\d+ (?:readers|subscribers)|trusted by|sponsored by|funded by|partnered with)\b/gi)].map((match) => match[0]);
  return { task_identity: /field notes|notebook|editorial/i.test(initialText) && /ecolog|habitat/i.test(initialText), sample_scope_visible: /\b(?:fictional|invented|sample)\b/i.test(initialText), heading_outline_valid: outline.valid, second_section_navigation: sectionNavigation, active_section_current: activeCurrent, caption_citation_separate: evidence.separate, empty_email_blocked: emptyBlocked, malformed_email_blocked: malformedBlocked, email_error_associated: associated, subscription_announced: subscribed, protected_unknown_claims: protectedClaims, viewport: { id: viewport.id, width: viewport.width, height: viewport.height, mobile: viewport.width <= 390, document_overflow_px: await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth)), controls_horizontally_unclipped: controls.unclipped, evidence_unclipped: evidence.unclipped, form_control_min_dimension_px: controls.min, axe_serious_critical: axeCounts.reduce((sum, value) => sum + value, 0), main_count: await page.getByRole('main').count(), h1_count_per_state: h1Counts } };
}

async function evaluateTransit(page, viewport) {
  const main = page.getByRole('main'); const axeCounts = []; const h1Counts = [];
  const checkState = async () => { axeCounts.push((await axeSeriousCritical(page)).count); h1Counts.push(await page.getByRole('heading', { level: 1 }).count()); };
  const initialText = (await main.innerText()).replace(/\s+/g, ' '); await checkState();
  const initialControls = await page.locator('button,select,textarea,.issue-option').evaluateAll((elements) => { const rects = elements.filter((element) => { const r = element.getBoundingClientRect(); return r.width > 0 && r.height > 0; }).map((element) => element.getBoundingClientRect()); return { unclipped: rects.every((r) => r.left >= -1 && r.right <= innerWidth + 1), min: rects.length ? Math.min(...rects.map((r) => Math.min(r.width, r.height))) : 0 }; });
  const reviewAction = page.getByRole('button', { name: /review report|prepare review/i });
  const initialSubmitVisible = await page.getByRole('button', { name: /submit/i }).count() > 0 && await page.getByRole('button', { name: /submit/i }).isVisible();
  await reviewAction.press('Enter'); await afterPaint(page);
  const radios = page.getByRole('radio'); const select = page.getByRole('combobox', { name: /issue type/i });
  const issueControl = await select.count() === 1 ? select : radios.first(); const describedBy = await issueControl.getAttribute('aria-describedby');
  const error = describedBy ? page.locator(`#${describedBy}`) : page.getByRole('alert').filter({ hasText: /issue/i });
  const noReviewText = !/review fictional report/i.test((await main.innerText()).replace(/\s+/g, ' '));
  const emptyBlocked = noReviewText && await error.count() === 1 && await error.isVisible();
  const errorAssociated = emptyBlocked && await issueControl.evaluate((element) => element === document.activeElement) && Boolean(describedBy || await error.count()); await checkState();
  let issueValue;
  if (await select.count() === 1) { const options = await select.locator('option').evaluateAll((items) => items.map((item) => ({ value: item.value, text: item.textContent?.trim() || '' })).filter((item) => item.value)); issueValue = options[0]?.text || ''; await select.selectOption(options[0]?.value); }
  else { issueValue = (await radios.first().getAttribute('value')) || (await radios.first().evaluate((element) => element.parentElement?.innerText?.trim() || '')); await radios.first().check(); }
  const detail = page.getByRole('textbox', { name: /optional detail/i }); await detail.fill('Bench light flickers after dusk.');
  await reviewAction.press('Enter'); await afterPaint(page); const reviewText = (await main.innerText()).replace(/\s+/g, ' ');
  const submit = page.getByRole('button', { name: /submit (?:sample|fictional)? report/i });
  const submitAvailable = await submit.count() === 1 && await submit.isVisible(); const reviewRequired = !initialSubmitVisible && submitAvailable && /review/i.test(reviewText);
  const reviewEcho = issueValue.length > 0 && reviewText.toLowerCase().includes(issueValue.toLowerCase()); const detailEcho = reviewText.includes('Bench light flickers after dusk.'); await checkState();
  if (submitAvailable) { await submit.press('Enter'); await afterPaint(page); } const statuses = (await page.getByRole('status').allInnerTexts()).join(' '); const submitted = /(?:saved|complete|submitted)/i.test(statuses); const disclosure = /(?:fictional|sample|demo)/i.test(statuses) && /(?:not sent|nothing was sent|saved locally|demo only)/i.test(statuses); await checkState();
  const consentControls = page.getByRole('checkbox', { name: /location/i }); let noPreconsent = true; for (let index = 0; index < await consentControls.count(); index += 1) if (await consentControls.nth(index).isChecked()) noPreconsent = false;
  const affirmative = initialText.split(/(?<=[.!?])|\n+/).filter((sentence) => !/\b(?:fictional|sample|demo|not connected|not affiliated|does not|never|no precise|not sent)\b/i.test(sentence)).join(' ');
  const protectedClaims = [...affirmative.matchAll(/\b(?:submitted to|sent to|reported to|official transit authority|current location|gps coordinates?|central station platform \d+)\b/gi)].map((match) => match[0]);
  if (/\bprecise location\s*:\s*(?!not\b|unknown\b|not shared\b)\S+/i.test(initialText)) protectedClaims.push('precise location');
  return { task_identity: /(?:transit|stop)/i.test(initialText) && /(?:issue|report|note)/i.test(initialText), fictional_scope_visible: /(?:fictional|sample|demo)/i.test(initialText), empty_issue_blocked: emptyBlocked, issue_error_associated: errorAssociated, review_required_before_submit: reviewRequired, review_echoes_issue: reviewEcho, optional_detail_echoed: detailEcho, fictional_submission_disclosed: disclosure, submitted_announced: submitted, no_preconsent_geolocation: noPreconsent && protectedClaims.length === 0, protected_unknown_claims: protectedClaims, viewport: { id: viewport.id, width: viewport.width, height: viewport.height, mobile: viewport.width <= 390, document_overflow_px: await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth)), controls_horizontally_unclipped: initialControls.unclipped, task_control_min_dimension_px: initialControls.min, axe_serious_critical: axeCounts.reduce((sum, value) => sum + value, 0), main_count: await page.getByRole('main').count(), h1_count_per_state: h1Counts } };
}

async function evaluateGrant(page, viewport) {
  const main = page.getByRole('main'); const axeCounts = []; const h1Counts = [];
  const checkState = async () => { axeCounts.push((await axeSeriousCritical(page)).count); h1Counts.push(await page.getByRole('heading', { level: 1 }).count()); };
  const initialText = (await main.innerText()).replace(/\s+/g, ' '); await checkState();
  const items = main.locator('article'); const itemTexts = await items.allInnerTexts(); const statusTextual = itemTexts.length >= 3 && itemTexts.every((text) => /\b(?:verified|pending|unresolved)\b/i.test(text));
  const pendingIndex = itemTexts.findIndex((text) => /\bpending\b/i.test(text)); const pending = items.nth(pendingIndex); let classified = false;
  if (pendingIndex >= 0) { const select = pending.getByRole('combobox'); const button = pending.getByRole('button', { name: /mark.*verified|verify evidence/i }); if (await select.count() === 1) await select.selectOption({ label: 'Verified' }); else if (await button.count() === 1) await button.press('Enter'); await afterPaint(page); classified = /\bverified\b/i.test((await pending.innerText()).replace(/\s+/g, ' ')); } await checkState();
  const fieldAudit = await main.evaluate((element) => { const names = ['outcomes', 'budget', 'dates', 'funder requirements']; return names.map((name) => { const candidates = [...element.querySelectorAll('dt,strong')].filter((node) => (node.textContent || '').trim().toLowerCase() === name); const label = candidates[0]; const container = label?.tagName === 'DT' ? label.nextElementSibling : label?.parentElement; const text = (container?.textContent || '').replace(/\s+/g, ' ').trim(); return { name, text, unresolved: /unresolved|unknown|not provided/i.test(text), fabricated: /\$\s?\d|\b\d{4}-\d{2}-\d{2}\b|\b(?:december|january|february|march|april|may|june|july|august|september|october|november) \d{4}\b|requires? \d+|achieved|increased by \d/i.test(text) }; }); });
  const protectedUnresolved = fieldAudit.length === 4 && fieldAudit.every((item) => item.unresolved && !item.fabricated);
  const initialControls = await page.locator('button,select').evaluateAll((elements) => { const rects = elements.filter((element) => { const r = element.getBoundingClientRect(); return r.width > 0 && r.height > 0; }).map((element) => element.getBoundingClientRect()); return { unclipped: rects.every((r) => r.left >= -1 && r.right <= innerWidth + 1), min: rects.length ? Math.min(...rects.map((r) => Math.min(r.width, r.height))) : 0 }; });
  const submit = page.getByRole('button', { name: /submit draft|review and submit draft/i }); await submit.press('Enter'); await afterPaint(page);
  const warning = page.getByRole('alertdialog').or(page.getByRole('alert')).filter({ hasText: /unresolved/i }); const warningVisible = await warning.count() >= 1 && await warning.first().isVisible(); const warningText = warningVisible ? (await warning.first().innerText()).replace(/\s+/g, ' ') : ''; const unresolvedWarning = warningVisible && /4 unresolved/i.test(warningText) && !/draft submitted/i.test((await main.innerText()).replace(/\s+/g, ' ')); await checkState();
  const confirm = page.getByRole('button', { name: /confirm draft|submit draft with unresolved/i }); const confirmAvailable = await confirm.count() === 1 && await confirm.isVisible(); if (confirmAvailable) { await confirm.press('Enter'); await afterPaint(page); }
  const statuses = (await page.getByRole('status').allInnerTexts()).join(' '); const submitted = /draft submitted/i.test(statuses); const countPersists = submitted && /4 unresolved/i.test(statuses); await checkState();
  const protectedClaims = fieldAudit.filter((item) => item.fabricated).map((item) => `${item.name}: ${item.text}`);
  return { task_identity: /grant/i.test(initialText) && /evidence/i.test(initialText), sample_scope_visible: /(?:fictional|sample)/i.test(initialText), every_item_status_textual: statusTextual, pending_classified: classified, protected_fields_unresolved: protectedUnresolved, unresolved_warning_before_submit: unresolvedWarning, unresolved_count_persists: countPersists, draft_submitted_announced: submitted, protected_unknown_claims: protectedClaims, viewport: { id: viewport.id, width: viewport.width, height: viewport.height, mobile: viewport.width <= 390, document_overflow_px: await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth)), controls_horizontally_unclipped: initialControls.unclipped, task_control_min_dimension_px: initialControls.min, axe_serious_critical: axeCounts.reduce((sum, value) => sum + value, 0), main_count: await page.getByRole('main').count(), h1_count_per_state: h1Counts } };
}

async function evaluateRecovery(page, viewport) {
  const main = page.getByRole('main'); const axeCounts = []; const h1Counts = [];
  const checkState = async () => { axeCounts.push((await axeSeriousCritical(page)).count); h1Counts.push(await page.getByRole('heading', { level: 1 }).count()); };
  const initialText = (await main.innerText()).replace(/\s+/g, ' '); await checkState();
  const initialControls = await page.locator('button,input[type=file]').evaluateAll((elements) => { const rects = elements.filter((element) => { const r = element.getBoundingClientRect(); return r.width > 0 && r.height > 0; }).map((element) => element.getBoundingClientRect()); return { unclipped: rects.every((r) => r.left >= -1 && r.right <= innerWidth + 1), min: rects.length ? Math.min(...rects.map((r) => Math.min(r.width, r.height))) : 0 }; });
  const file = page.locator('input[type=file]'); if (await file.count() === 1) await file.setInputFiles({ name: 'sample.csv', mimeType: 'text/csv', buffer: Buffer.from('name,email\nAlex,alex@example.test\nRowan,rowan-at-example\nMina,mina@example.test') });
  const load = page.getByRole('button', { name: /validate sample roster|use local sample csv/i }); await load.press('Enter'); await page.waitForTimeout(60); await afterPaint(page);
  const rows = main.locator('tbody tr, article.card'); const rowTexts = await rows.allInnerTexts(); const validRows = rowTexts.filter((text) => /\bvalid\b/i.test(text) && !/\binvalid\b/i.test(text)); const validNames = validRows.map((text) => text.match(/(?:Alex|Mina) (?:Sample|Example)/)?.[0]).filter(Boolean); const invalidIndex = rowTexts.findIndex((text) => /\binvalid\b/i.test(text)); const invalid = rows.nth(invalidIndex); const alert = invalid.getByRole('alert'); const recovery = invalid.getByRole('button', { name: /exclude|correct/i }); const describedBy = await recovery.count() === 1 ? await recovery.getAttribute('aria-describedby') : null;
  const loaded = rowTexts.length >= 3 && validNames.length >= 2 && invalidIndex >= 0; const errorAnnounced = await alert.count() === 1 && await alert.isVisible(); const recoverable = loaded && errorAnnounced && await recovery.count() === 1 && await recovery.isVisible() && Boolean(describedBy); await checkState();
  let keyboardRecovery = false; if (await recovery.count() === 1 && await recovery.isVisible()) { keyboardRecovery = await tabUntilFocused(page, recovery); if (keyboardRecovery) await page.keyboard.press('Enter'); await afterPaint(page); }
  const afterRecovery = (await main.innerText()).replace(/\s+/g, ' '); const preservedBeforeRetry = validNames.every((name) => afterRecovery.includes(name)) && /2 valid sample rows preserved/i.test(afterRecovery);
  const retry = page.getByRole('button', { name: /retry/i }); const retryAvailable = await retry.count() === 1 && await retry.isEnabled(); if (retryAvailable) { await retry.press('Enter'); await afterPaint(page); } const finalStatuses = (await page.getByRole('status').allInnerTexts()).join(' '); const completionAnnounced = /(?:complete|imported)/i.test(finalStatuses); const counts = /(?:imported 2|2 of 2|2 fictional sample rows).*(?:0 invalid|0 errors)/i.test(finalStatuses); const preservedFinal = validNames.every((name) => finalStatuses.includes(name)); await checkState();
  const affirmative = initialText.split(/(?<=[.!?])|\n+/).filter((sentence) => !/\b(?:fictional|sample|demo|not real|does not upload|no real|no production|local)\b/i.test(sentence)).join(' '); const claims = [...affirmative.matchAll(/\b(?:real volunteers?|uploaded to production|production records? (?:created|saved)|synced to (?:the )?server)\b/gi)].map((match) => match[0]);
  return { task_identity: /volunteer/i.test(initialText) && /(?:roster|csv|import)/i.test(initialText), sample_local_only_disclosed: /(?:fictional|sample)/i.test(initialText) && /(?:local|not upload|no real|no production)/i.test(initialText), sample_rows_loaded: loaded, row_error_associated_and_recoverable: recoverable && keyboardRecovery, valid_row_identities_preserved: preservedBeforeRetry && preservedFinal, state_transitions_announced: errorAnnounced && completionAnnounced, completion_counts_unambiguous: counts, completion_announced: completionAnnounced, protected_unknown_claims: claims, viewport: { id: viewport.id, width: viewport.width, height: viewport.height, mobile: viewport.width <= 390, document_overflow_px: await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth)), controls_horizontally_unclipped: initialControls.unclipped, task_control_min_dimension_px: initialControls.min, axe_serious_critical: axeCounts.reduce((sum, value) => sum + value, 0), main_count: await page.getByRole('main').count(), h1_count_per_state: h1Counts } };
}

export async function checkboxState(locator) {
  return locator.evaluate((element) => element.checked === true
    || element.getAttribute('aria-checked') === 'true'
    || element.getAttribute('aria-pressed') === 'true');
}

export async function setCheckboxStateWithKeyboard(page, locator, checked) {
  if (await checkboxState(locator) === checked) return true;
  await locator.focus();
  await page.keyboard.press('Space');
  await afterPaint(page);
  return (await checkboxState(locator)) === checked;
}

async function evaluateLocale(page, viewport) {
  const main = page.getByRole('main'); const axeCounts = []; const h1Counts = []; const cjkUnclipped = []; const localeDiagnostics = [];
  const checkState = async () => { axeCounts.push((await axeSeriousCritical(page)).count); h1Counts.push(await page.getByRole('heading', { level: 1 }).count()); };
  const initialText = (await main.innerText()).replace(/\s+/g, ' '); await checkState();
  const locales = [{ code: 'ko', label: /한국어/, script: /[가-힣]/ }, { code: 'en', label: /English/, script: /[A-Za-z]/ }, { code: 'ja', label: /日本語/, script: /[ぁ-ゖァ-ヺ]/ }, { code: 'zh-CN', label: /简体中文/, script: /[\u3400-\u9fff]/ }, { code: 'zh-TW', label: /繁體中文/, script: /[\u3400-\u9fff]/ }];
  async function localeSelect() {
    const candidates = page.getByRole('combobox');
    for (let index = 0; index < await candidates.count(); index += 1) {
      const candidate = candidates.nth(index);
      const values = await candidate.locator('option').evaluateAll((options) => options.map((option) => option.value));
      if (locales.every((locale) => values.includes(locale.code))) return candidate;
    }
    return null;
  }
  async function localeButton(locale) {
    const candidates = page.getByRole('button', { name: locale.label });
    for (let index = 0; index < await candidates.count(); index += 1) if (await candidates.nth(index).isVisible()) return candidates.nth(index);
    return null;
  }
  async function switchTo(locale) {
    const select = await localeSelect(); const button = select ? null : await localeButton(locale);
    if (select) await select.selectOption(locale.code);
    else if (button) await button.press('Enter');
    else { localeDiagnostics.push({ requested: locale.code, mechanism: 'missing', actual_lang: await page.locator('html').getAttribute('lang'), selected: false, script_match: false, label_match: false }); cjkUnclipped.push(false); await checkState(); return false; }
    await afterPaint(page);
    const lang = await page.locator('html').getAttribute('lang'); const text = (await main.innerText()).replace(/\s+/g, ' ');
    const currentSelect = await localeSelect(); const currentButton = currentSelect ? null : await localeButton(locale);
    const selected = currentSelect
      ? (await currentSelect.inputValue()) === locale.code && locale.label.test(await currentSelect.locator('option:checked').innerText())
      : Boolean(currentButton) && ['true', 'page'].includes((await currentButton.getAttribute('aria-pressed')) || (await currentButton.getAttribute('aria-current')) || '');
    const scriptMatch = locale.script.test(text);
    const selectedLabel = currentSelect ? await currentSelect.locator('option:checked').innerText() : currentButton ? await currentButton.innerText() : '';
    const labelMatch = locale.label.test(selectedLabel);
    const box = await page.getByRole('heading', { level: 1 }).boundingBox(); cjkUnclipped.push(!['ja', 'zh-CN', 'zh-TW'].includes(locale.code) || Boolean(box && box.x >= -1 && box.x + box.width <= viewport.width + 1));
    const pass = lang === locale.code && scriptMatch && selected && labelMatch;
    localeDiagnostics.push({ requested: locale.code, mechanism: currentSelect ? 'select' : 'button', actual_lang: lang, selected, script_match: scriptMatch, label_match: labelMatch, selected_label: selectedLabel.slice(0, 80) });
    await checkState(); return pass;
  }
  const initialLocaleChecks = [];
  for (const locale of locales) initialLocaleChecks.push(await switchTo(locale));
  await switchTo(locales[1]); const checks = page.getByRole('checkbox'); const checklistTotal = await checks.count(); const hasChecklist = checklistTotal >= 2;
  if (hasChecklist) await setCheckboxStateWithKeyboard(page, checks.first(), true);
  const progressSnapshot = async () => {
    const statuses = (await page.getByRole('status').allInnerTexts()).map((text) => text.replace(/\s+/g, ' ').trim()).filter(Boolean);
    const bar = page.getByRole('progressbar');
    return {
      checked: await page.getByRole('checkbox').evaluateAll((items) => items.filter((item) => item.checked === true
        || item.getAttribute('aria-checked') === 'true'
        || item.getAttribute('aria-pressed') === 'true').length),
      total: await page.getByRole('checkbox').count(),
      bar_now: await bar.count() === 1 ? Number(await bar.getAttribute('aria-valuenow')) : null,
      bar_max: await bar.count() === 1 ? Number(await bar.getAttribute('aria-valuemax')) : null,
      status_texts: statuses.slice(0, 6).map((text) => text.slice(0, 180)),
    };
  };
  const textShowsProgress = (snapshot, amount, total) => snapshot.status_texts.some((text) => new RegExp(`(?:${amount}\\D{0,12}${total}|${total}\\D{0,12}${amount})`, 'i').test(text));
  const progressSemanticsExact = (snapshot, amount, total) => textShowsProgress(snapshot, amount, total)
    && ((snapshot.bar_now === null && snapshot.bar_max === null) || (snapshot.bar_now === amount && snapshot.bar_max === total));
  const progress1 = await progressSnapshot(); await checkState(); await switchTo(locales[2]); const progressJapanese = await progressSnapshot(); await switchTo(locales[1]); const firstPreserved = hasChecklist && await checkboxState(page.getByRole('checkbox').first()); const progressBack = await progressSnapshot();
  if (hasChecklist) {
    const currentChecks = page.getByRole('checkbox');
    for (let index = 0; index < await currentChecks.count(); index += 1) await setCheckboxStateWithKeyboard(page, currentChecks.nth(index), true);
  }
  const completeEnglish = (await main.innerText()).replace(/\s+/g, ' '); await switchTo(locales[0]); await switchTo(locales[1]); const completionPreserved = hasChecklist && (await checkboxState(checks.first())) && (await checkboxState(checks.nth(1))) && /(?:complete|2 of 2)/i.test((await main.innerText()).replace(/\s+/g, ' '));
  const langBeforeUnavailable = await page.locator('html').getAttribute('lang');
  // The user-facing affordance may describe the state before the state is
  // opened ("Translation status" / "Translation availability") instead of
  // putting the failure outcome in the control name. The proof remains the
  // subsequently exposed alert and the unchanged document language.
  const unavailable = page.getByRole('button', { name: /unavailable translation|translation (?:status|availability)/i });
  let unavailableTrigger = 'missing';
  if (await unavailable.count() === 1 && await unavailable.isVisible()) {
    await unavailable.press('Enter'); await afterPaint(page); unavailableTrigger = 'explicit-state-control';
  } else if (await switchTo(locales[4])) unavailableTrigger = 'zh-TW-locale-control';
  const alerts = page.getByRole('alert');
  let unavailableAlert = null;
  for (const index of await visibleLocatorIndexes(alerts)) {
    const candidate = alerts.nth(index);
    if (hasUnavailableTranslationSemantics(await candidate.innerText())) { unavailableAlert = candidate; break; }
  }
  const selectedUnavailableLocale = await localeSelect();
  let selectedLocaleCode = selectedUnavailableLocale ? await selectedUnavailableLocale.inputValue() : null;
  if (!selectedUnavailableLocale) {
    for (const locale of locales) {
      const button = await localeButton(locale);
      if (button && ['true', 'page'].includes((await button.getAttribute('aria-pressed')) || (await button.getAttribute('aria-current')) || '')) {
        selectedLocaleCode = locale.code; break;
      }
    }
  }
  const langAfterUnavailable = await page.locator('html').getAttribute('lang');
  const unavailableSelectionExact = selectedLocaleCode === langAfterUnavailable;
  const unavailableHonest = unavailableTrigger !== 'missing' && Boolean(unavailableAlert)
    && unavailableSelectionExact
    && (unavailableTrigger === 'explicit-state-control'
      ? langAfterUnavailable === langBeforeUnavailable
      : langAfterUnavailable === 'zh-TW'); await checkState();
  const unavailableDiagnostics = {
    control_count: await unavailable.count(),
    control_visible: await unavailable.count() === 1 ? await unavailable.isVisible() : false,
    trigger: unavailableTrigger,
    selected_locale: selectedLocaleCode,
    selected_locale_exact: unavailableSelectionExact,
    alert_count: unavailableAlert ? 1 : 0,
    alert_visible: Boolean(unavailableAlert),
    alert_text: unavailableAlert ? (await unavailableAlert.innerText()).replace(/\s+/g, ' ').trim().slice(0, 300) : '',
    lang_before: langBeforeUnavailable,
    lang_after: await page.locator('html').getAttribute('lang'),
  };
  const initialControls = await page.locator('button,select,.check').evaluateAll((elements) => { const rects = elements.filter((element) => { const r = element.getBoundingClientRect(); return r.width > 0 && r.height > 0; }).map((element) => element.getBoundingClientRect()); return { unclipped: rects.every((r) => r.left >= -1 && r.right <= innerWidth + 1), min: rects.length ? Math.min(...rects.map((r) => Math.min(r.width, r.height))) : 0 }; });
  const allText = (await main.innerText()).replace(/\s+/g, ' '); const claims = detectLocaleProtectedClaims(allText);
  const progressPreserved = hasChecklist && [progress1, progressJapanese, progressBack].every((snapshot) => snapshot.checked === 1 && snapshot.total === checklistTotal && progressSemanticsExact(snapshot, 1, checklistTotal)) && firstPreserved;
  const completionSnapshot = await progressSnapshot();
  const completionText = (await main.innerText()).replace(/\s+/g, ' ');
  const allComplete = completionSnapshot.checked === checklistTotal && completionSnapshot.total === checklistTotal
    && ((completionSnapshot.bar_now === null && completionSnapshot.bar_max === null) || (completionSnapshot.bar_now === checklistTotal && completionSnapshot.bar_max === checklistTotal));
  return { task_identity: /(?:clinic|visit|受診|진료|就诊|就診)/i.test(initialText) && /(?:checklist|preparation|준비|準備|准备)/i.test(initialText), fictional_not_medical_advice: /(?:fictional|sample)/i.test(initialText) && /not medical advice|does not infer a diagnosis/i.test(initialText), all_five_locales_exact: initialLocaleChecks.length === 5 && initialLocaleChecks.every(Boolean), selected_label_lang_script_agree: initialLocaleChecks.every(Boolean), progress_textual_and_persistent: progressPreserved, completion_persists_after_return: completionPreserved || (allComplete && (/(?:complete|completed)/i.test(`${completeEnglish} ${completionText}`) || textShowsProgress(completionSnapshot, checklistTotal, checklistTotal))), translation_unavailable_honest: unavailableHonest, protected_unknown_claims: claims, viewport: { id: viewport.id, width: viewport.width, height: viewport.height, mobile: viewport.width <= 390, document_overflow_px: await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth)), cjk_content_unclipped: cjkUnclipped.every(Boolean), controls_horizontally_unclipped: initialControls.unclipped, task_control_min_dimension_px: initialControls.min, axe_serious_critical: axeCounts.reduce((sum, value) => sum + value, 0), main_count: await page.getByRole('main').count(), h1_count_per_state: h1Counts, locale_switch_diagnostics: localeDiagnostics.slice(0, 12), progress_diagnostics: { first: progress1, japanese: progressJapanese, returned: progressBack, complete: completionSnapshot }, unavailable_translation_diagnostics: unavailableDiagnostics, accessibility_inventory: await boundedAriaInventory(page, ['combobox', 'checkbox', 'progressbar', 'status', 'alert'], { total: 10 }) } };
}

const invoked = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invoked) {
  const parsed = cliArgs(process.argv.slice(2));
  const taskId = parsed['task-id'];
  const workspace = resolve(parsed.workspace || '.');
  const outPath = resolve(parsed.out || join(workspace, '.benchmark', `${taskId}-score.json`));
  if (!['neighborhood-library-landing', 'incident-response-dashboard', 'cold-chain-operations', 'caregiver-onboarding', 'community-class-checkout', 'research-data-deletion', 'public-record-search', 'field-notes-editorial', 'mobile-transit-report', 'grant-evidence-intake', 'volunteer-import-recovery', 'clinic-visit-prep-locales'].includes(taskId)) throw new Error(`task adapter is not calibrated yet: ${taskId}`);
  if (existsSync(outPath)) throw new Error(`exclusive output already exists: ${outPath}`);
  const taskBytes = readFileSync(taskSetPath);
  const adapterBytes = readFileSync(adapterSetPath);
  const taskSet = JSON.parse(taskBytes);
  const adapters = JSON.parse(adapterBytes);
  if (adapters.task_set_sha256 !== sha(taskBytes)) throw new Error('adapter task authority drift');
  if (!taskSet.tasks.some((item) => item.id === taskId) || !adapters.adapters.some((item) => item.task_id === taskId)) throw new Error('task or adapter missing');
  const entry = join(workspace, 'index.html');
  if (!existsSync(entry)) throw new Error('index.html is missing');
  const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };
  const server = createServer((request, response) => {
    const raw = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname);
    const relative = raw === '/' ? 'index.html' : normalize(raw).replace(/^[/\\]+/, '');
    const file = resolve(workspace, relative);
    if (file !== workspace && !file.startsWith(`${workspace}/`)) return response.writeHead(403).end('Forbidden');
    try { response.writeHead(200, { 'content-type': mime[extname(file)] || 'application/octet-stream' }); response.end(readFileSync(file)); }
    catch { response.writeHead(404).end('Not found'); }
  });
  await new Promise((done) => server.listen(0, '127.0.0.1', done));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ executablePath: chromeExecutable(), headless: true, args: ['--disable-background-networking', '--disable-component-update', '--no-first-run'] });
  const observations = [];
  const consoleErrors = [];
  const pageErrors = [];
  const externalRequests = [];
  const screenshots = join(dirname(outPath), 'screenshots');
  mkdirSync(screenshots, { recursive: true });
  try {
    for (const viewport of [
      { id: 'desktop-1440', width: 1440, height: 900 }, { id: 'mobile-390', width: 390, height: 844 },
      { id: 'mobile-320', width: 320, height: 720 }, { id: 'zoom-200-reflow-equivalent', width: 720, height: 450 },
    ]) {
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, reducedMotion: 'reduce', locale: 'en-US' });
      const page = await context.newPage();
      page.on('console', (message) => { if (message.type() === 'error') consoleErrors.push(message.text()); });
      page.on('pageerror', (error) => pageErrors.push(error.message));
      await page.route('**/*', async (route) => {
        const url = new URL(route.request().url());
        if (url.origin !== origin && !['data:', 'blob:'].includes(url.protocol)) { externalRequests.push(url.href); await route.abort('blockedbyclient'); }
        else await route.continue();
      });
      await page.goto(origin, { waitUntil: 'load' });
      observations.push(taskId === 'neighborhood-library-landing' ? await evaluateLanding(page, viewport, origin) : taskId === 'incident-response-dashboard' ? await evaluateIncident(page, viewport, origin) : taskId === 'cold-chain-operations' ? await evaluateColdChain(page, viewport) : taskId === 'caregiver-onboarding' ? await evaluateCaregiver(page, viewport) : taskId === 'community-class-checkout' ? await evaluateCheckout(page, viewport, origin) : taskId === 'research-data-deletion' ? await evaluateDeletion(page, viewport, origin) : taskId === 'public-record-search' ? await evaluateSearch(page, viewport, origin) : taskId === 'field-notes-editorial' ? await evaluateEditorial(page, viewport) : taskId === 'mobile-transit-report' ? await evaluateTransit(page, viewport) : taskId === 'grant-evidence-intake' ? await evaluateGrant(page, viewport) : taskId === 'volunteer-import-recovery' ? await evaluateRecovery(page, viewport) : await evaluateLocale(page, viewport));
      await page.screenshot({ path: join(screenshots, `${viewport.id}.png`), fullPage: true });
      await context.close();
    }
  } finally { await browser.close(); await new Promise((done) => server.close(done)); }
  const first = observations[0];
  const landingEvidence = {
    schema_version: '0.1', task_id: taskId, task_set_sha256: sha(taskBytes), adapter_set_sha256: sha(adapterBytes),
    task_identity: observations.every((item) => item.task_identity), purpose: observations.every((item) => item.purpose),
    semantic_steps: Math.min(...observations.map((item) => item.semantic_steps)),
    unique_primary_action: observations.every((item) => item.unique_primary_action),
    primary_action_present: observations.every((item) => item.viewport.primary_action_present),
    reservation_state: observations.every((item) => item.reservation_state), focus_transfer: observations.every((item) => item.focus_transfer),
    keyboard_reachable: observations.every((item) => item.keyboard_reachable),
    focus_indicator_visible: observations.every((item) => item.focus_indicator_visible),
    unavailable_information_honest: observations.every((item) => item.unavailable_information_honest),
    viewports: observations.map((item) => item.viewport), price_claims: first.price_claims, inventory_claims: first.inventory_claims,
    social_proof_claims: first.social_proof_claims, partner_logo_claims: first.partner_logo_claims,
    console_errors: [...new Set(consoleErrors)], page_errors: [...new Set(pageErrors)], external_requests: [...new Set(externalRequests)],
  };
  const incidentEvidence = {
    schema_version: '0.1', task_id: taskId, task_set_sha256: sha(taskBytes), adapter_set_sha256: sha(adapterBytes),
    task_identity: observations.every((item) => item.task_identity), sample_scope_visible: observations.every((item) => item.sample_scope_visible),
    incident_count: Math.min(...observations.map((item) => item.incident_count)), distinct_severity_count: Math.min(...observations.map((item) => item.distinct_severity_count)),
    unique_highest_severity: observations.every((item) => item.unique_highest_severity), highest_visually_distinct: observations.every((item) => item.highest_visually_distinct),
    keyboard_open_highest: observations.every((item) => item.keyboard_open_highest), same_incident_detail: observations.every((item) => item.same_incident_detail),
    acknowledged_state_persistent: observations.every((item) => item.acknowledged_state_persistent),
    protected_unknown_claims: [...new Set(observations.flatMap((item) => item.protected_unknown_claims))],
    viewports: observations.map((item) => item.viewport), console_errors: [...new Set(consoleErrors)], page_errors: [...new Set(pageErrors)], external_requests: [...new Set(externalRequests)],
  };
  const coldChainEvidence = {
    schema_version: '0.1', task_id: taskId, task_set_sha256: sha(taskBytes), adapter_set_sha256: sha(adapterBytes),
    task_identity: observations.every((item) => item.task_identity), sample_scope_visible: observations.every((item) => item.sample_scope_visible),
    shipment_count: Math.min(...observations.map((item) => item.shipment_count)), urgent_count: Math.min(...observations.map((item) => item.urgent_count)), non_urgent_count: Math.min(...observations.map((item) => item.non_urgent_count)), routine_count: Math.min(...observations.map((item) => item.routine_count)),
    filter_selected_and_visible: observations.every((item) => item.filter_selected_and_visible), filtered_contents_exact: observations.every((item) => item.filtered_contents_exact),
    keyboard_open_sample: observations.every((item) => item.keyboard_open_sample), matching_evidence_detail: observations.every((item) => item.matching_evidence_detail),
    owner_error_associated: observations.every((item) => item.owner_error_associated), sample_owner_options: observations.every((item) => item.sample_owner_options), assigned_owner_confirmed_and_persistent: observations.every((item) => item.assigned_owner_confirmed_and_persistent),
    protected_unknown_claims: [...new Set(observations.flatMap((item) => item.protected_unknown_claims))], viewports: observations.map((item) => item.viewport),
    console_errors: [...new Set(consoleErrors)], page_errors: [...new Set(pageErrors)], external_requests: [...new Set(externalRequests)],
  };
  const caregiverEvidence = { schema_version: '0.1', task_id: taskId, task_set_sha256: sha(taskBytes), adapter_set_sha256: sha(adapterBytes), task_identity: observations.every((item) => item.task_identity), purpose_honest: observations.every((item) => item.purpose_honest), progress_all_steps: observations.every((item) => item.progress_all_steps), no_silent_preselection: observations.every((item) => item.no_silent_preselection), empty_choice_blocked: observations.every((item) => item.empty_choice_blocked), preference_error_associated: observations.every((item) => item.preference_error_associated), review_echoes_choice: observations.every((item) => item.review_echoes_choice), back_preserves_choice: observations.every((item) => item.back_preserves_choice), complete_announced: observations.every((item) => item.complete_announced), protected_unknown_claims: [...new Set(observations.flatMap((item) => item.protected_unknown_claims))], viewports: observations.map((item) => item.viewport), console_errors: [...new Set(consoleErrors)], page_errors: [...new Set(pageErrors)], external_requests: [...new Set(externalRequests)] };
  const checkoutEvidence = { schema_version: '0.1', task_id: taskId, task_set_sha256: sha(taskBytes), adapter_set_sha256: sha(adapterBytes), task_identity: observations.every((item) => item.task_identity), sample_scope_visible: observations.every((item) => item.sample_scope_visible), total_visible_before_confirm: observations.every((item) => item.total_visible_before_confirm), empty_contact_blocked: observations.every((item) => item.empty_contact_blocked), invalid_email_blocked: observations.every((item) => item.invalid_email_blocked), email_error_associated: observations.every((item) => item.email_error_associated), submitting_observable: observations.every((item) => item.submitting_observable), confirmed_after_action: observations.every((item) => item.confirmed_after_action), declined_recovery_reachable: observations.every((item) => item.declined_recovery_reachable), premature_success_claims: [...new Set(observations.flatMap((item) => item.premature_success_claims))], protected_unknown_claims: [...new Set(observations.flatMap((item) => item.protected_unknown_claims))], viewports: observations.map((item) => item.viewport), console_errors: [...new Set(consoleErrors)], page_errors: [...new Set(pageErrors)], external_requests: [...new Set(externalRequests)] };
  const deletionEvidence = { schema_version: '0.1', task_id: taskId, task_set_sha256: sha(taskBytes), adapter_set_sha256: sha(adapterBytes), task_identity: observations.every((item) => item.task_identity), sample_scope_visible: observations.every((item) => item.sample_scope_visible), scope_parent_child_hierarchy: observations.every((item) => item.scope_parent_child_hierarchy), exact_phrase_discoverable: observations.every((item) => item.exact_phrase_discoverable), phrase_without_ack_blocked: observations.every((item) => item.phrase_without_ack_blocked), wrong_phrase_blocked: observations.every((item) => item.wrong_phrase_blocked), validation_error_associated: observations.every((item) => item.validation_error_associated), approve_requires_both_gates: observations.every((item) => item.approve_requires_both_gates), cancel_keyboard_reachable: observations.every((item) => item.cancel_keyboard_reachable), cancelled_state_announced: observations.every((item) => item.cancelled_state_announced), protected_unknown_claims: [...new Set(observations.flatMap((item) => item.protected_unknown_claims))], viewports: observations.map((item) => item.viewport), console_errors: [...new Set(consoleErrors)], page_errors: [...new Set(pageErrors)], external_requests: [...new Set(externalRequests)] };
  const searchEvidence = { schema_version: '0.1', task_id: taskId, task_set_sha256: sha(taskBytes), adapter_set_sha256: sha(adapterBytes), task_identity: observations.every((item) => item.task_identity), fictional_scope_visible: observations.every((item) => item.fictional_scope_visible), initial_results_available: observations.every((item) => item.initial_results_available), search_updates_results: observations.every((item) => item.search_updates_results), two_filters_selected: observations.every((item) => item.two_filters_selected), active_filter_values_visible: observations.every((item) => item.active_filter_values_visible), filtered_count_contextual: observations.every((item) => item.filtered_count_contextual), clear_contract_honored: observations.every((item) => item.clear_contract_honored), no_results_distinct: observations.every((item) => item.no_results_distinct), opened_record_identity_matches: observations.every((item) => item.opened_record_identity_matches), error_recovery_reachable: observations.every((item) => item.error_recovery_reachable), protected_unknown_claims: [...new Set(observations.flatMap((item) => item.protected_unknown_claims))], viewports: observations.map((item) => item.viewport), console_errors: [...new Set(consoleErrors)], page_errors: [...new Set(pageErrors)], external_requests: [...new Set(externalRequests)] };
  const editorialEvidence = { schema_version: '0.1', task_id: taskId, task_set_sha256: sha(taskBytes), adapter_set_sha256: sha(adapterBytes), task_identity: observations.every((item) => item.task_identity), sample_scope_visible: observations.every((item) => item.sample_scope_visible), heading_outline_valid: observations.every((item) => item.heading_outline_valid), second_section_navigation: observations.every((item) => item.second_section_navigation), active_section_current: observations.every((item) => item.active_section_current), caption_citation_separate: observations.every((item) => item.caption_citation_separate), empty_email_blocked: observations.every((item) => item.empty_email_blocked), malformed_email_blocked: observations.every((item) => item.malformed_email_blocked), email_error_associated: observations.every((item) => item.email_error_associated), subscription_announced: observations.every((item) => item.subscription_announced), protected_unknown_claims: [...new Set(observations.flatMap((item) => item.protected_unknown_claims))], viewports: observations.map((item) => item.viewport), console_errors: [...new Set(consoleErrors)], page_errors: [...new Set(pageErrors)], external_requests: [...new Set(externalRequests)] };
  const transitEvidence = { schema_version: '0.1', task_id: taskId, task_set_sha256: sha(taskBytes), adapter_set_sha256: sha(adapterBytes), task_identity: observations.every((item) => item.task_identity), fictional_scope_visible: observations.every((item) => item.fictional_scope_visible), empty_issue_blocked: observations.every((item) => item.empty_issue_blocked), issue_error_associated: observations.every((item) => item.issue_error_associated), review_required_before_submit: observations.every((item) => item.review_required_before_submit), review_echoes_issue: observations.every((item) => item.review_echoes_issue), optional_detail_echoed: observations.every((item) => item.optional_detail_echoed), fictional_submission_disclosed: observations.every((item) => item.fictional_submission_disclosed), submitted_announced: observations.every((item) => item.submitted_announced), no_preconsent_geolocation: observations.every((item) => item.no_preconsent_geolocation), protected_unknown_claims: [...new Set(observations.flatMap((item) => item.protected_unknown_claims))], viewports: observations.map((item) => item.viewport), console_errors: [...new Set(consoleErrors)], page_errors: [...new Set(pageErrors)], external_requests: [...new Set(externalRequests)] };
  const grantEvidence = { schema_version: '0.1', task_id: taskId, task_set_sha256: sha(taskBytes), adapter_set_sha256: sha(adapterBytes), task_identity: observations.every((item) => item.task_identity), sample_scope_visible: observations.every((item) => item.sample_scope_visible), every_item_status_textual: observations.every((item) => item.every_item_status_textual), pending_classified: observations.every((item) => item.pending_classified), protected_fields_unresolved: observations.every((item) => item.protected_fields_unresolved), unresolved_warning_before_submit: observations.every((item) => item.unresolved_warning_before_submit), unresolved_count_persists: observations.every((item) => item.unresolved_count_persists), draft_submitted_announced: observations.every((item) => item.draft_submitted_announced), protected_unknown_claims: [...new Set(observations.flatMap((item) => item.protected_unknown_claims))], viewports: observations.map((item) => item.viewport), console_errors: [...new Set(consoleErrors)], page_errors: [...new Set(pageErrors)], external_requests: [...new Set(externalRequests)] };
  const recoveryEvidence = { schema_version: '0.1', task_id: taskId, task_set_sha256: sha(taskBytes), adapter_set_sha256: sha(adapterBytes), task_identity: observations.every((item) => item.task_identity), sample_local_only_disclosed: observations.every((item) => item.sample_local_only_disclosed), sample_rows_loaded: observations.every((item) => item.sample_rows_loaded), row_error_associated_and_recoverable: observations.every((item) => item.row_error_associated_and_recoverable), valid_row_identities_preserved: observations.every((item) => item.valid_row_identities_preserved), state_transitions_announced: observations.every((item) => item.state_transitions_announced), completion_counts_unambiguous: observations.every((item) => item.completion_counts_unambiguous), completion_announced: observations.every((item) => item.completion_announced), protected_unknown_claims: [...new Set(observations.flatMap((item) => item.protected_unknown_claims))], viewports: observations.map((item) => item.viewport), console_errors: [...new Set(consoleErrors)], page_errors: [...new Set(pageErrors)], external_requests: [...new Set(externalRequests)] };
  const localeEvidence = { schema_version: '0.1', task_id: taskId, task_set_sha256: sha(taskBytes), adapter_set_sha256: sha(adapterBytes), task_identity: observations.every((item) => item.task_identity), fictional_not_medical_advice: observations.every((item) => item.fictional_not_medical_advice), all_five_locales_exact: observations.every((item) => item.all_five_locales_exact), selected_label_lang_script_agree: observations.every((item) => item.selected_label_lang_script_agree), progress_textual_and_persistent: observations.every((item) => item.progress_textual_and_persistent), completion_persists_after_return: observations.every((item) => item.completion_persists_after_return), translation_unavailable_honest: observations.every((item) => item.translation_unavailable_honest), protected_unknown_claims: [...new Set(observations.flatMap((item) => item.protected_unknown_claims))], viewports: observations.map((item) => item.viewport), console_errors: [...new Set(consoleErrors)], page_errors: [...new Set(pageErrors)], external_requests: [...new Set(externalRequests)] };
  const evidence = taskId === 'neighborhood-library-landing' ? landingEvidence : taskId === 'incident-response-dashboard' ? incidentEvidence : taskId === 'cold-chain-operations' ? coldChainEvidence : taskId === 'caregiver-onboarding' ? caregiverEvidence : taskId === 'community-class-checkout' ? checkoutEvidence : taskId === 'research-data-deletion' ? deletionEvidence : taskId === 'public-record-search' ? searchEvidence : taskId === 'field-notes-editorial' ? editorialEvidence : taskId === 'mobile-transit-report' ? transitEvidence : taskId === 'grant-evidence-intake' ? grantEvidence : taskId === 'volunteer-import-recovery' ? recoveryEvidence : localeEvidence;
  const scoring = taskId === 'neighborhood-library-landing' ? scoreLandingEvidence(evidence) : taskId === 'incident-response-dashboard' ? scoreIncidentEvidence(evidence) : taskId === 'cold-chain-operations' ? scoreColdChainEvidence(evidence) : taskId === 'caregiver-onboarding' ? scoreCaregiverEvidence(evidence) : taskId === 'community-class-checkout' ? scoreCheckoutEvidence(evidence) : taskId === 'research-data-deletion' ? scoreDeletionEvidence(evidence) : taskId === 'public-record-search' ? scoreSearchEvidence(evidence) : taskId === 'field-notes-editorial' ? scoreEditorialEvidence(evidence) : taskId === 'mobile-transit-report' ? scoreTransitEvidence(evidence) : taskId === 'grant-evidence-intake' ? scoreGrantEvidence(evidence) : taskId === 'volunteer-import-recovery' ? scoreRecoveryEvidence(evidence) : scoreLocaleEvidence(evidence);
  const result = { schema_version: '0.1', methodology_epoch: 'autopilot-greenfield-observable-outcomes-v2', task_id: taskId, ...scoring, evidence };
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, `${JSON.stringify(result, null, 2)}\n`, { encoding: 'utf8', flag: 'wx' });
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
}
