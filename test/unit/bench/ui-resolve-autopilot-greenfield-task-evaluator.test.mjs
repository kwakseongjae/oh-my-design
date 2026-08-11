import { describe, expect, it } from 'vitest';
import { classifyColdChainPriority, detectLocaleProtectedClaims, hasHonestUnavailableLibraryInformation, isSampleOwnerOption, scoreCaregiverEvidence, scoreCheckoutEvidence, scoreColdChainEvidence, scoreDeletionEvidence, scoreEditorialEvidence, scoreGrantEvidence, scoreIncidentEvidence, scoreLandingEvidence, scoreLocaleEvidence, scoreRecoveryEvidence, scoreSearchEvidence, scoreTransitEvidence, setCheckboxStateWithKeyboard } from '../../../benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs';

describe('greenfield evidence phrase classification', () => {
  it.each([
    'Maya Chen · Receiving · sample owner',
    'Alex Rivera · demo staff',
    'Fictional assignee · Night shift',
  ])('accepts explicitly scoped owner option: %s', (value) => expect(isSampleOwnerOption(value)).toBe(true));

  it.each(['Maya Chen · Receiving', 'Jordan Lee · Owner', 'Select owner', 'Select a sample owner'])('rejects unscoped or placeholder owner option: %s', (value) => expect(isSampleOwnerOption(value)).toBe(false));

  it.each([
    ['Urgent', { urgent: true, nonUrgent: false }],
    ['Urgent review', { urgent: true, nonUrgent: false }],
    ['Non-urgent', { urgent: false, nonUrgent: true }],
    ['Routine review', { urgent: false, nonUrgent: true }],
  ])('classifies cold-chain priority without treating Non-urgent as Urgent: %s', (value, expected) => {
    expect(classifyColdChainPriority(value)).toEqual(expected);
  });

  it.each([
    'This page is a concept preview: the catalog, fees, availability, pickup instructions, and reservation destination are not provided here.',
    'No catalog or availability is shown.',
    'Pricing is unavailable; contact the library to confirm inventory.',
  ])('accepts an explicit library-information absence boundary: %s', (value) => {
    expect(hasHonestUnavailableLibraryInformation(value)).toBe(true);
  });

  it.each([
    'Availability is live and confirmed.',
    'Browse the catalog and reserve a tool today.',
    'The library is not crowded, and availability updates live.',
  ])('does not mistake an affirmative or unrelated sentence for an absence boundary: %s', (value) => {
    expect(hasHonestUnavailableLibraryInformation(value)).toBe(false);
  });

  it.each([
    'These are fictional examples for this demo, not medical advice.',
    'This checklist does not provide medical advice or suggest a diagnosis.',
    'This is not medical advice and does not replace a diagnosis.',
  ])('does not turn a disclaimer into an affirmative claim: %s', (value) => expect(detectLocaleProtectedClaims(value)).toEqual([]));

  it('still rejects affirmative medical claims', () => {
    expect(detectLocaleProtectedClaims('Medical advice: take 20 mg. Your doctor recommends this.')).toEqual(['Medical advice', 'take 20 mg', 'doctor recommends']);
  });
});

const valid = () => ({
  task_identity: true, purpose: true, semantic_steps: 3, unique_primary_action: true,
  reservation_state: true, focus_transfer: true, keyboard_reachable: true, primary_action_present: true,
  focus_indicator_visible: true, unavailable_information_honest: true,
  viewports: [1440, 390, 320, 720].map((width) => ({
    document_overflow_px: 0, critical_inside_viewport: true, mobile: width <= 390,
    primary_action_present: true, reservation_state_present: true,
    primary_action_min_dimension_px: width <= 390 ? 48 : 44,
    reservation_controls_horizontally_unclipped: true,
    reservation_control_min_dimension_px: width <= 390 ? 48 : 44,
    initial_axe_serious_critical: 0, reservation_axe_serious_critical: 0, main_count: 1, h1_count: 1,
  })),
  price_claims: [], inventory_claims: [], social_proof_claims: [], partner_logo_claims: [],
  console_errors: [], page_errors: [], external_requests: [],
});

const validIncident = () => ({
  task_identity: true, sample_scope_visible: true, incident_count: 3, distinct_severity_count: 2,
  unique_highest_severity: true, highest_visually_distinct: true, keyboard_open_highest: true,
  same_incident_detail: true, acknowledged_state_persistent: true, protected_unknown_claims: [],
  viewports: [1440, 390, 320, 720].map((width) => ({
    mobile: width <= 390, document_overflow_px: 0, controls_horizontally_unclipped: true,
    control_min_dimension_px: 44, initial_axe_serious_critical: 0, detail_axe_serious_critical: 0,
    acknowledged_axe_serious_critical: 0, scenario_axe_serious_critical: 0, main_count: 1, h1_count: 1,
    loading_state: true, empty_state: true, error_state: true,
  })),
  console_errors: [], page_errors: [], external_requests: [],
});

const validColdChain = () => ({
  task_identity: true, sample_scope_visible: true, shipment_count: 3, urgent_count: 2, non_urgent_count: 1, routine_count: 1,
  filter_selected_and_visible: true, filtered_contents_exact: true, keyboard_open_sample: true,
  matching_evidence_detail: true, owner_error_associated: true, sample_owner_options: true, assigned_owner_confirmed_and_persistent: true,
  protected_unknown_claims: [], viewports: [1440, 390, 320, 720].map((width) => ({
    mobile: width <= 390, document_overflow_px: 0, critical_fields_reachable: true,
    controls_horizontally_unclipped: true, control_min_dimension_px: 44,
    initial_axe_serious_critical: 0, filtered_axe_serious_critical: 0, detail_axe_serious_critical: 0,
    error_axe_serious_critical: 0, assigned_axe_serious_critical: 0, main_count: 1, h1_count: 1,
  })), console_errors: [], page_errors: [], external_requests: [],
});

const validCaregiver = () => ({
  task_identity: true, purpose_honest: true, progress_all_steps: true, no_silent_preselection: true,
  empty_choice_blocked: true, preference_error_associated: true, review_echoes_choice: true,
  back_preserves_choice: true, complete_announced: true, protected_unknown_claims: [],
  viewports: [1440, 390, 320, 720].map((width) => ({ mobile: width <= 390, document_overflow_px: 0,
    controls_horizontally_unclipped: true, control_min_dimension_px: 44, axe_serious_critical: 0,
    main_count: 1, h1_count_per_state: [1, 1, 1, 1, 1, 1] })), console_errors: [], page_errors: [], external_requests: [],
});

const validCheckout = () => ({ task_identity:true,sample_scope_visible:true,total_visible_before_confirm:true,empty_contact_blocked:true,invalid_email_blocked:true,email_error_associated:true,submitting_observable:true,confirmed_after_action:true,declined_recovery_reachable:true,premature_success_claims:[],protected_unknown_claims:[],viewports:[1440,390,320,720].map(width=>({mobile:width<=390,document_overflow_px:0,total_unclipped:true,controls_horizontally_unclipped:true,control_min_dimension_px:48,axe_serious_critical:0,main_count:1,h1_count_per_state:[1,1,1,1,1]})),console_errors:[],page_errors:[],external_requests:[] });
describe('greenfield checkout observable-outcome scoring',()=>{
  it('accepts a sample checkout journey',()=>expect(scoreCheckoutEvidence(validCheckout())).toMatchObject({score:100,ui_resolved:true}));
  it.each([['hidden total',v=>{v.total_visible_before_confirm=false},'journey'],['invalid email accepted',v=>{v.invalid_email_blocked=false},'journey'],['premature success',v=>{v.premature_success_claims=['Payment successful']},'evidence_honesty']])('rejects %s',(_n,mutate,group)=>{const value=validCheckout();mutate(value);const result=scoreCheckoutEvidence(value);expect(result.groups[group].pass).toBe(false);expect(result.ui_resolved).toBe(false)});
});

const validDeletion = () => ({ task_identity: true, sample_scope_visible: true, scope_parent_child_hierarchy: true, exact_phrase_discoverable: true, phrase_without_ack_blocked: true, wrong_phrase_blocked: true, validation_error_associated: true, approve_requires_both_gates: true, cancel_keyboard_reachable: true, cancelled_state_announced: true, protected_unknown_claims: [], viewports: [1440, 390, 320, 720].map((width) => ({ mobile: width <= 390, document_overflow_px: 0, scope_unclipped: true, controls_horizontally_unclipped: true, control_min_dimension_px: 48, axe_serious_critical: 0, main_count: 1, h1_count_per_state: [1, 1, 1, 1, 1] })), console_errors: [], page_errors: [], external_requests: [] });
describe('greenfield deletion approval observable-outcome scoring', () => {
  it('accepts a two-gate destructive approval journey', () => expect(scoreDeletionEvidence(validDeletion())).toMatchObject({ score: 100, ui_resolved: true }));
  it.each([
    ['confirmation bypass', (value) => { value.phrase_without_ack_blocked = false; value.approve_requires_both_gates = false; }, 'journey'],
    ['flat scope', (value) => { value.scope_parent_child_hierarchy = false; }, 'journey'],
    ['hidden cancel', (value) => { value.cancel_keyboard_reachable = false; }, 'journey'],
    ['invented audit policy', (value) => { value.protected_unknown_claims = ['audit logging is enabled']; }, 'evidence_honesty'],
  ])('rejects %s', (_name, mutate, group) => { const value = validDeletion(); mutate(value); const result = scoreDeletionEvidence(value); expect(result.groups[group].pass).toBe(false); expect(result.ui_resolved).toBe(false); });
});

const validSearch = () => ({ task_identity: true, fictional_scope_visible: true, initial_results_available: true, search_updates_results: true, two_filters_selected: true, active_filter_values_visible: true, filtered_count_contextual: true, clear_contract_honored: true, no_results_distinct: true, opened_record_identity_matches: true, error_recovery_reachable: true, protected_unknown_claims: [], viewports: [1440, 390, 320, 720].map((width) => ({ mobile: width <= 390, document_overflow_px: 0, controls_horizontally_unclipped: true, control_min_dimension_px: 48, axe_serious_critical: 0, main_count: 1, h1_count_per_state: [1, 1, 1, 1, 1, 1] })), console_errors: [], page_errors: [], external_requests: [] });
describe('greenfield record search observable-outcome scoring', () => {
  it('accepts search, filter, clear, empty, open, and error recovery', () => expect(scoreSearchEvidence(validSearch())).toMatchObject({ score: 100, ui_resolved: true }));
  it.each([
    ['invisible filter values', (value) => { value.active_filter_values_visible = false; }, 'journey'],
    ['broken clear', (value) => { value.clear_contract_honored = false; }, 'journey'],
    ['missing no-results', (value) => { value.no_results_distinct = false; }, 'journey'],
    ['official claim', (value) => { value.protected_unknown_claims = ['authoritative archive']; }, 'evidence_honesty'],
  ])('rejects %s', (_name, mutate, group) => { const value = validSearch(); mutate(value); const result = scoreSearchEvidence(value); expect(result.groups[group].pass).toBe(false); expect(result.ui_resolved).toBe(false); });
});

const validEditorial = () => ({ task_identity: true, sample_scope_visible: true, heading_outline_valid: true, second_section_navigation: true, active_section_current: true, caption_citation_separate: true, empty_email_blocked: true, malformed_email_blocked: true, email_error_associated: true, subscription_announced: true, protected_unknown_claims: [], viewports: [1440, 390, 320, 720].map((width) => ({ mobile: width <= 390, document_overflow_px: 0, controls_horizontally_unclipped: true, evidence_unclipped: true, form_control_min_dimension_px: 48, axe_serious_critical: 0, main_count: 1, h1_count_per_state: [1, 1, 1, 1, 1] })), console_errors: [], page_errors: [], external_requests: [] });
describe('greenfield editorial observable-outcome scoring', () => {
  it('accepts structure, section navigation, evidence semantics, and signup', () => expect(scoreEditorialEvidence(validEditorial())).toMatchObject({ score: 100, ui_resolved: true }));
  it.each([
    ['broken heading order', (value) => { value.heading_outline_valid = false; }, 'journey'],
    ['caption and citation conflated', (value) => { value.caption_citation_separate = false; }, 'journey'],
    ['signup validation removed', (value) => { value.email_error_associated = false; }, 'journey'],
    ['invented readership', (value) => { value.protected_unknown_claims = ['read by 5000 readers']; }, 'evidence_honesty'],
  ])('rejects %s', (_name, mutate, group) => { const value = validEditorial(); mutate(value); const result = scoreEditorialEvidence(value); expect(result.groups[group].pass).toBe(false); expect(result.ui_resolved).toBe(false); });
});

const validTransit = () => ({ task_identity: true, fictional_scope_visible: true, empty_issue_blocked: true, issue_error_associated: true, review_required_before_submit: true, review_echoes_issue: true, optional_detail_echoed: true, fictional_submission_disclosed: true, submitted_announced: true, no_preconsent_geolocation: true, protected_unknown_claims: [], viewports: [1440, 390, 320, 720].map((width) => ({ mobile: width <= 390, document_overflow_px: 0, controls_horizontally_unclipped: true, task_control_min_dimension_px: 48, axe_serious_critical: 0, main_count: 1, h1_count_per_state: [1, 1, 1, 1] })), console_errors: [], page_errors: [], external_requests: [] });
describe('greenfield mobile transit report observable-outcome scoring', () => {
  it('accepts draft, validation, review, and fictional submission', () => expect(scoreTransitEvidence(validTransit())).toMatchObject({ score: 100, ui_resolved: true }));
  it.each([
    ['small touch target', (value) => { value.viewports[2].task_control_min_dimension_px = 32; }, 'responsive'],
    ['review skipped', (value) => { value.review_required_before_submit = false; }, 'journey'],
    ['location assumed', (value) => { value.no_preconsent_geolocation = false; }, 'evidence_honesty'],
    ['real submission claim', (value) => { value.protected_unknown_claims = ['submitted to official transit authority']; }, 'evidence_honesty'],
  ])('rejects %s', (_name, mutate, group) => { const value = validTransit(); mutate(value); const result = scoreTransitEvidence(value); expect(result.groups[group].pass).toBe(false); expect(result.ui_resolved).toBe(false); });
});

const validGrant = () => ({ task_identity: true, sample_scope_visible: true, every_item_status_textual: true, pending_classified: true, protected_fields_unresolved: true, unresolved_warning_before_submit: true, unresolved_count_persists: true, draft_submitted_announced: true, protected_unknown_claims: [], viewports: [1440, 390, 320, 720].map((width) => ({ mobile: width <= 390, document_overflow_px: 0, controls_horizontally_unclipped: true, task_control_min_dimension_px: 48, axe_serious_critical: 0, main_count: 1, h1_count_per_state: [1, 1, 1, 1] })), console_errors: [], page_errors: [], external_requests: [] });
describe('greenfield grant evidence observable-outcome scoring', () => {
  it('accepts textual classification, unresolved preservation, and warned submission', () => expect(scoreGrantEvidence(validGrant())).toMatchObject({ score: 100, ui_resolved: true }));
  it.each([
    ['unknowns filled', (value) => { value.protected_fields_unresolved = false; value.protected_unknown_claims = ['budget: $50,000']; }, 'journey'],
    ['status color only', (value) => { value.every_item_status_textual = false; }, 'journey'],
    ['warning removed', (value) => { value.unresolved_warning_before_submit = false; }, 'journey'],
    ['count lost', (value) => { value.unresolved_count_persists = false; }, 'journey'],
  ])('rejects %s', (_name, mutate, group) => { const value = validGrant(); mutate(value); const result = scoreGrantEvidence(value); expect(result.groups[group].pass).toBe(false); expect(result.ui_resolved).toBe(false); });
});

const validRecovery = () => ({ task_identity: true, sample_local_only_disclosed: true, sample_rows_loaded: true, row_error_associated_and_recoverable: true, valid_row_identities_preserved: true, state_transitions_announced: true, completion_counts_unambiguous: true, completion_announced: true, protected_unknown_claims: [], viewports: [1440, 390, 320, 720].map((width) => ({ mobile: width <= 390, document_overflow_px: 0, controls_horizontally_unclipped: true, task_control_min_dimension_px: 48, axe_serious_critical: 0, main_count: 1, h1_count_per_state: [1, 1, 1, 1] })), console_errors: [], page_errors: [], external_requests: [] });
describe('greenfield volunteer import recovery observable-outcome scoring', () => {
  it('accepts sample load, row recovery, preservation, retry, and completion', () => expect(scoreRecoveryEvidence(validRecovery())).toMatchObject({ score: 100, ui_resolved: true }));
  it.each([
    ['row unrecoverable', (value) => { value.row_error_associated_and_recoverable = false; }, 'journey'],
    ['valid rows lost', (value) => { value.valid_row_identities_preserved = false; }, 'journey'],
    ['ambiguous completion', (value) => { value.completion_counts_unambiguous = false; }, 'journey'],
    ['real upload claim', (value) => { value.protected_unknown_claims = ['uploaded to production']; }, 'evidence_honesty'],
  ])('rejects %s', (_name, mutate, group) => { const value = validRecovery(); mutate(value); const result = scoreRecoveryEvidence(value); expect(result.groups[group].pass).toBe(false); expect(result.ui_resolved).toBe(false); });
});

const validLocale = () => ({ task_identity: true, fictional_not_medical_advice: true, all_five_locales_exact: true, selected_label_lang_script_agree: true, progress_textual_and_persistent: true, completion_persists_after_return: true, translation_unavailable_honest: true, protected_unknown_claims: [], viewports: [1440, 390, 320, 720].map((width) => ({ mobile: width <= 390, document_overflow_px: 0, cjk_content_unclipped: true, controls_horizontally_unclipped: true, task_control_min_dimension_px: 48, axe_serious_critical: 0, main_count: 1, h1_count_per_state: Array(15).fill(1) })), console_errors: [], page_errors: [], external_requests: [] });
describe('greenfield five-locale checklist observable-outcome scoring', () => {
  it('accepts exact locale switching with persistent progress', () => expect(scoreLocaleEvidence(validLocale())).toMatchObject({ score: 100, ui_resolved: true }));
  it.each([
    ['label and lang mismatch', (value) => { value.selected_label_lang_script_agree = false; }, 'journey'],
    ['CJK clipping', (value) => { value.viewports[2].cjk_content_unclipped = false; }, 'responsive'],
    ['progress lost', (value) => { value.progress_textual_and_persistent = false; }, 'journey'],
    ['medical advice', (value) => { value.protected_unknown_claims = ['take 20 mg']; }, 'evidence_honesty'],
  ])('rejects %s', (_name, mutate, group) => { const value = validLocale(); mutate(value); const result = scoreLocaleEvidence(value); expect(result.groups[group].pass).toBe(false); expect(result.ui_resolved).toBe(false); });
});

describe('greenfield five-locale checklist interaction', () => {
  it('uses the keyboard contract when a visible wrapper intercepts pointer clicks', async () => {
    let checked = false;
    let focused = false;
    const locator = {
      evaluate: async () => checked,
      focus: async () => { focused = true; },
    };
    const page = {
      keyboard: { press: async (key) => { expect(key).toBe('Space'); expect(focused).toBe(true); checked = true; } },
      evaluate: async () => undefined,
    };
    await expect(setCheckboxStateWithKeyboard(page, locator, true)).resolves.toBe(true);
    expect(checked).toBe(true);
  });
});

describe('greenfield caregiver observable-outcome scoring', () => {
  it('accepts an implementation-neutral three-step journey', () => expect(scoreCaregiverEvidence(validCaregiver())).toMatchObject({ score: 100, ui_resolved: true }));
  it.each([
    ['missing progress', (value) => { value.progress_all_steps = false; }, 'journey'],
    ['lost back state', (value) => { value.back_preserves_choice = false; }, 'journey'],
    ['required choice bypass', (value) => { value.empty_choice_blocked = false; }, 'journey'],
    ['invented consent', (value) => { value.protected_unknown_claims = ['consent granted']; }, 'evidence_honesty'],
  ])('rejects %s', (_name, mutate, group) => { const evidence = validCaregiver(); mutate(evidence); const result = scoreCaregiverEvidence(evidence); expect(result.groups[group].pass).toBe(false); expect(result.ui_resolved).toBe(false); });
});

describe('greenfield cold-chain observable-outcome scoring', () => {
  it('accepts an implementation-neutral filter, inspect, and assign journey', () => {
    expect(scoreColdChainEvidence(validColdChain())).toMatchObject({ score: 100, critical_pass: true, ui_resolved: true });
  });
  it.each([
    ['clipped mobile queue', (value) => { value.viewports[2].document_overflow_px = 300; }, 'responsive'],
    ['hidden filter state', (value) => { value.filter_selected_and_visible = false; }, 'journey'],
    ['owner not persisted', (value) => { value.assigned_owner_confirmed_and_persistent = false; }, 'journey'],
    ['invented compliance', (value) => { value.protected_unknown_claims = ['GDP certified']; }, 'evidence_honesty'],
  ])('rejects %s', (_name, mutate, group) => {
    const evidence = validColdChain(); mutate(evidence);
    const result = scoreColdChainEvidence(evidence);
    expect(result.groups[group].pass).toBe(false); expect(result.ui_resolved).toBe(false);
  });
});

describe('greenfield incident observable-outcome scoring', () => {
  it('accepts an implementation-neutral incident journey', () => {
    expect(scoreIncidentEvidence(validIncident())).toMatchObject({ score: 100, critical_pass: true, ui_resolved: true });
  });
  it.each([
    ['flattened hierarchy', (value) => { value.highest_visually_distinct = false; }, 'journey'],
    ['missing acknowledgement', (value) => { value.acknowledged_state_persistent = false; }, 'journey'],
    ['broken keyboard action', (value) => { value.keyboard_open_highest = false; }, 'journey'],
    ['missing error state', (value) => { value.viewports[0].error_state = false; }, 'runtime'],
    ['fabricated live claim', (value) => { value.protected_unknown_claims = ['live infrastructure']; }, 'evidence_honesty'],
  ])('rejects %s', (_name, mutate, group) => {
    const evidence = validIncident(); mutate(evidence);
    const result = scoreIncidentEvidence(evidence);
    expect(result.groups[group].pass).toBe(false);
    expect(result.ui_resolved).toBe(false);
  });
});

describe('greenfield task observable-outcome scoring', () => {
  it('accepts a structurally neutral landing evidence contract', () => {
    expect(scoreLandingEvidence(valid())).toMatchObject({ score: 100, critical_pass: true, ui_resolved: true });
  });
  it.each([
    ['removed CTA', (value) => { value.unique_primary_action = false; }, 'journey'],
    ['mobile overflow', (value) => { value.viewports[2].document_overflow_px = 100; }, 'responsive'],
    ['social proof', (value) => { value.social_proof_claims = ['testimonial']; }, 'evidence_honesty'],
    ['post-open accessibility', (value) => { value.viewports[0].reservation_axe_serious_critical = 1; }, 'accessibility'],
    ['external dependency', (value) => { value.external_requests = ['https://example.com']; }, 'runtime'],
  ])('rejects %s', (_name, mutate, group) => {
    const evidence = valid(); mutate(evidence);
    const result = scoreLandingEvidence(evidence);
    expect(result.groups[group].pass).toBe(false);
    expect(result.ui_resolved).toBe(false);
  });
});
