# DESIGN.md Core v2

Status: **Draft interoperability contract**
Format version: **2.0.0**
Primary artifact: **`DESIGN.md` at the project root**
Optional authority package: **`.omd/system/`**

This document defines a compact, vendor-neutral `DESIGN.md` that can be pasted
into a general chat, attached to a design tool, or read by a coding agent without
requiring a particular CLI, skill, or runtime. It also defines an optional typed
System Graph for tools that need deterministic generation, migration, and proof.

The words MUST, MUST NOT, REQUIRED, SHOULD, SHOULD NOT, and MAY are normative.

## 1. Goals and non-goals

Core v2 has four goals:

1. A standalone `DESIGN.md` remains useful when it is the only file a consumer
   receives.
2. The visible document reads like a project design contract, not like vendor
   telemetry or a tool export.
3. A typed System Graph can hold detail that would make the Markdown repetitive,
   expensive to prompt, or difficult to validate.
4. Existing Google-compatible and OmD 0.1 documents can migrate without silently
   losing prose, evidence, unknown fields, or uncertainty.

Core v2 does not claim to be an official Google format or the same specification.
It provides a compatible import/export profile for Google-style `DESIGN.md` input
while preserving the common file convention and keeping OmD implementation metadata
outside the visible document.

Core v2 is not:

- a replacement for source code, component tests, or platform accessibility APIs;
- permission to infer missing brand facts;
- a requirement to install OmD before using the Markdown; or
- a license to promote a reference observation into a project token.

## 2. Artifact model and authority

Core v2 separates the portable projection from the machine model. A graph becomes
canonical only after an adopting writer emits a valid `portable-core` manifest;
schema-valid candidate bytes alone never establish authority.

```text
DESIGN.md                         portable, human/agent-readable projection
.omd/system/manifest.json         profile, authority, paths, exact hashes
.omd/system/graph.json            typed graph (canonical only after adoption)
.omd/system/provenance.json       optional evidence-level detail
.omd/system/coverage.json         optional conformance and coverage detail
.omd/system/adoption-receipt.json optional OmD proof-profile compiler receipt
```

The first five artifacts above define the interoperable Core document/sidecar
model. The adoption receipt is an OmD reference proof profile, not a requirement
for reading or using a standalone Core `DESIGN.md`. Another implementation MAY
use a different auditable authority-transition mechanism, provided it does not
weaken the owner-controlled, exact-byte adoption rules below or claim OmD receipt
compatibility.

The following authority rules apply, in order:

1. If a valid `portable-core` manifest and hash-bound graph exist, `graph.json` is
   canonical and `DESIGN.md` is its portable projection.
2. A valid `migration-candidate` manifest is explicitly non-authoritative. The
   source DESIGN.md named by `authority.source_sha256` remains canonical while the
   candidate graph and projection are reviewed. Consumers MUST NOT treat this profile
   as a Bound System.
3. If the package is absent or invalid, `DESIGN.md` is evaluated independently.
   It remains a standalone portable contract only when the Portable Core usefulness
   requirements pass. A structural-only document remains readable but incomplete.
   A consumer MUST NOT pretend that deterministic graph authority exists.
4. Source code may prove runtime conformance, but code does not silently rewrite
   declared design intent. Drift is reported and then resolved explicitly.
5. A stale or mismatched hash invalidates the binding, not the Markdown itself.
6. Unknown or unresolved values are absent from prescriptive sections, tokens, and
   generated code. A consequential unresolved decision MAY be named in Governance.

The graph is canonical so that one semantic system can project to Markdown,
CSS/Tailwind, DTCG-compatible tokens, SwiftUI, Compose, and future adapters without
turning the Markdown into a database. The Markdown remains the portable interface.

## 3. Visible-file policy

`DESIGN.md` MUST NOT begin with YAML frontmatter. It MUST NOT expose an `omd`
version, generator name, repository URL, quality tier, extraction timestamp, model,
or evidence ledger above the title. This prevents tool metadata from competing with
the design contract and keeps the file neutral when pasted into another product.

The first visible line is:

```markdown
# <Product or project name> Design System
```

Stable section anchors use generic HTML comments immediately before each H2. They
are invisible when rendered, meaningful to an agent reading raw Markdown, and safe
for consumers that ignore them. No vendor name appears in the marker.

```markdown
<!-- design-md:section experience -->
## 1. Experience
```

A renderer MUST ignore these comments visually. A Core v2 parser MUST use the
comment ID rather than translated heading text. Structural Core, Portable Core,
and Bound System all require the seven comments in exact order. A document without
them may be imported heuristically as unmarked source material, but it cannot claim
Core v2 conformance until a lossless migration emits the stable anchors.

The document SHOULD normally remain between 600 and 1,800 words. This is a context
budget, not a reason to omit critical constraints. Repeated evidence, exhaustive
token scales, component matrices, and migration records belong in the System Graph
or sidecars.

## 4. Seven stable semantic sections

The seven IDs, order, and default English headings are stable for the 2.x line.
Heading prose may be localized; anchor IDs do not change.

| Order | Stable ID | Default heading | Required purpose |
|---:|---|---|---|
| 1 | `experience` | Experience | Product intent, audience/tasks, design direction, principles and explicit avoidances |
| 2 | `foundations` | Foundations | Semantic color, spacing, shape, elevation and motion rules |
| 3 | `typography-assets` | Typography & Assets | Type roles/metrics, font availability, imagery/icon/logo authority and licenses |
| 4 | `components-states` | Components & States | Component anatomy, variants, interaction contract and applicable states |
| 5 | `layout-platforms` | Layout & Platforms | Layout, density, responsive/reflow behavior and platform-specific adaptation |
| 6 | `content-locales` | Content & Locales | Voice, terminology, formatting and locale-specific product behavior |
| 7 | `governance` | Governance | Application priority, provenance classes, unknowns, exceptions and change rules |

### 4.1 Experience

This section answers what the product is, who acts, what must feel distinctive, and
which principles decide ambiguous cases. It MUST identify the product or surface
scope and at least one primary task. It SHOULD include three to five concrete design
traits and explicit avoidances. Product history or personas appear only when backed
by project authority; generic persona fiction is prohibited.

### 4.2 Foundations

This section defines semantic roles before raw scales. Exact renderable values MUST
be stated where known. Color rules pair names with values and intended use. Spacing,
shape, elevation, and motion describe both values and decision rules. Reduced-motion
behavior is REQUIRED when motion exists. A plausible substitute is never written as
a known value.

### 4.3 Typography & Assets

Typography defines role, family when known, size, weight, line height, and tracking
needed by the target surfaces. An officially known but unavailable font keeps its
metadata and loses only its live specimen. A system or fallback stack MUST NOT be
presented as the brand face.

Assets distinguish project-owned, official, licensed sourced, generated original,
and unresolved items. Logo, image, icon, font, and illustration claims include source
and license status in the graph. A low-quality generic asset is not an acceptable
final fallback; an unresolved asset is omitted or blocks the affected deliverable.

### 4.4 Components & States

Components are named by product role, not framework primitive alone. Each declaration
describes anatomy, variants, token references, accessibility semantics, and the states
that apply. Interactive components account for default, hover where a pointer exists,
focus-visible, disabled, loading, error, and success when those states are meaningful.
The graph's optional `interaction` model preserves compatibility with structural imports,
but a package that claims `component_state_coverage` MUST close it for every component.
An interactive component declares all seven canonical states in
`state_applicability`; each entry is either `applicable` or `not-applicable`.
`default` and `focus-visible` MUST be applicable. Every other applicable state MUST
appear in the component's `states` list, while `not-applicable` is allowed only with a
reason and MUST NOT also appear in that list. A non-interactive component declares
`kind: non-interactive` and a reason instead of a state-applicability map.

### 4.5 Layout & Platforms

Layout preserves task priority as space changes; it does not merely shrink desktop
columns. The contract covers the minimum supported width, 200% reflow, touch targets,
reading order, and overflow policy. Shared semantic intent belongs in the core; web,
iOS, Android, and desktop implementations belong in named platform profiles.

### 4.6 Content & Locales

This section defines voice, terminology, labels, error/recovery language, and locale
behavior. A locale is not complete merely because strings were translated. Applicable
profiles cover font/script support, expansion and line breaking, number/date/currency,
address/name conventions, register, legal constraints, cultural imagery, and layout
stress. Locale claims MUST identify the actual supported locale, not an adjacent one.

### 4.7 Governance

This section tells an unfamiliar agent how to apply the contract. It MUST include:

- priority when the document, existing code, a user instruction, and a reference
  differ;
- the rule that unknown means absent at the smallest unresolved boundary;
- whether the document describes a project system, evidence-backed reconstruction,
  or portable brief;
- the permitted extension/change process; and
- consequential unresolved decisions, if any, without suggested fallback values.

The visible section SHOULD use short rules. Per-field evidence and validation receipts
belong in the sidecars.

## 5. Portable use without OmD

A consumer receiving only `DESIGN.md` MUST be able to:

1. identify the product scope and primary task from Experience;
2. render known foundations without inventing unknown values;
3. build declared components and states;
4. adapt the result to the requested layout, platform, and locale; and
5. explain any request that conflicts with Governance.

This applies to a generic chat attachment as well as Claude Design, Open Design,
coding agents, and human review. Consumers do not need to understand the sidecars or
the producer. A tool-specific adapter MAY add instructions around the document but
MUST NOT rewrite its meaning or treat a missing extension as permission to guess.

Portability acceptance is fail-closed:

- the standalone Markdown MUST remain understandable without a sidecar;
- Experience MUST establish the product or surface scope and at least one primary
  task rather than merely naming an aesthetic;
- Foundations MUST provide at least one actionable value/rule or an explicit known
  constraint that prevents invention;
- prescriptive sections MUST omit unresolved values rather than carry legacy
  placeholders such as `[FILL IN]`, `TBD`, or `UNKNOWN`;
- Governance MUST state the document's authority kind, application/conflict
  priority, unknown-absence rule, and change/extension/exception process;
- Claude Design, Open Design, and generic chat use MUST NOT require an OmD install,
  OmD command, OmD skill, or `.omd/system/` package;
- the top of the visible file MUST NOT contain vendor, tool, model, extraction,
  verification, quality-tier, or generator metadata; and
- an unavailable sidecar MUST reduce the conformance claim to Portable Core rather
  than make the document unusable.

Recommended standalone prompt:

```text
Use the attached DESIGN.md as the design contract for this task. Preserve its
semantic roles, component states, layout priorities, locale behavior, and unknowns.
Do not infer values that the document does not establish. Explain any unavoidable
deviation before implementing it.
```

## 6. System Graph contract

An adopted canonical graph and a non-authoritative migration candidate both conform to
`spec/schema/design-system-graph-v2.schema.json`. Its schema ID is:

```text
https://oh-my-design.kr/schema/design-system-graph-v2.schema.json
```

The schema ID MUST resolve to bytes identical to the schema shipped in the
package. A validator MAY use its packaged copy offline; it MUST NOT silently
substitute a different schema when the public endpoint is unavailable.

The graph uses `schema_version: "2.0.0"` and mirrors the seven semantic sections in
these required properties:

```text
experience
foundations
typography_assets
components_states
layout_platforms
content_locales
governance
```

The seven section containers are structurally required, but their internal fields are
optional. An empty container means the input establishes no prescriptive value for
that section; it is not permission to synthesize one. JSON Schema validity proves
shape and forward compatibility only. Portable Core completeness and higher
conformance are separate coverage/validator results. For example, a legacy document
that never established a minimum width remains valid with `layout_platforms: {}` and
fails or remains incomplete on the responsive coverage axis; a migrator never inserts
320px or 200% merely to satisfy schema.

### Projection locale

The graph declares the visible document language in `projection.locale`. New writers
MUST emit exactly one of `en`, `ko`, `ja`, `zh-cn`, or `zh-tw`. A 2.x reader MUST
treat a missing locale on an older graph as `en` without rewriting the source merely
to add the default. The locale controls canonical section headings and every emitted
claim marker's `lang`; it does not translate, transliterate, or normalize the
user-owned `identity.name`. The H1 remains `# <identity.name> Design System` in every
locale so identity extraction is byte-stable.

Canonical writers use these exact H2 headings. Stable anchor IDs and section order do
not change with locale:

| Locale | Experience | Foundations | Typography & Assets | Components & States | Layout & Platforms | Content & Locales | Governance |
|---|---|---|---|---|---|---|---|
| `en` | Experience | Foundations | Typography & Assets | Components & States | Layout & Platforms | Content & Locales | Governance |
| `ko` | 경험 | 기반 | 타이포그래피와 에셋 | 컴포넌트와 상태 | 레이아웃과 플랫폼 | 콘텐츠와 로케일 | 거버넌스 |
| `ja` | エクスペリエンス | 基盤 | タイポグラフィとアセット | コンポーネントと状態 | レイアウトとプラットフォーム | コンテンツとロケール | ガバナンス |
| `zh-cn` | 体验 | 基础 | 字体与资产 | 组件与状态 | 布局与平台 | 内容与本地化 | 治理 |
| `zh-tw` | 體驗 | 基礎 | 字型與資產 | 元件與狀態 | 版面與平台 | 內容與在地化 | 治理 |

All controlled Governance prose comes from the exact copy table below for the same
locale. A compiler MUST NOT review one locale and bind another: review preview,
compiled graph, projection hash, and final `DESIGN.md` preserve the selected locale
as one transaction.

Token records follow DTCG-compatible field names (`$type`, `$value`, `$description`,
`$extensions`) so token exporters do not need to reinterpret a proprietary token
shape. Core v2 does not claim full DTCG conformance; an exporter is responsible for
validating its selected DTCG version.

### Portable claim declarations

Portable Core certification is stricter than Structural Core recognition. Arbitrary
prose is readable but cannot prove its own meaning. A document claiming Portable Core
MUST include these invisible, vendor-neutral declarations in the stated section:

```markdown
<!-- design-md:claim scope kind=product-surface lang=en -->
<!-- design-md:claim primary-tasks kind=user-outcomes count=<list-count> lang=en -->
<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
<!-- design-md:claim authority kind=project-system lang=en -->
<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
```

Each declaration body ends with `<!-- design-md:claim-end -->`. This explicit
boundary prevents an adjacent explanatory subsection from silently becoming part
of the machine-declared claim.

`scope`, `primary-tasks`, and `foundations` bind content from their marker through
the next claim marker or section. Their `kind` values are fixed as shown above, and
`count` MUST equal the rendered primary-task list count. Scope is substantive prose;
Primary tasks contains at least one Markdown list item; Foundations contains at least
one known rule/value or explicit constraint. A migrator MUST NOT add these markers
unless the source establishes the corresponding meaning. Every present required claim
marker MUST declare `lang`; the seven declarations MUST use one supported value and
MUST match `projection.locale`. Missing, unsupported, or mixed claim locales remain
readable Structural Core but fail Portable Core conformance. The English compatibility
default applies only to an older graph missing `projection.locale`: its canonical
renderer emits `lang=en`; it does not excuse a missing `lang` in native Core Markdown.

Portable Core conformance validates explicit declarations and controlled governance
semantics; it does not prove that a project fact is true. Bound and Production-Proven
conformance add graph, provenance, implementation, and route evidence. A validator
MAY reject obvious contradictions as defense in depth, but MUST NOT market declaration
parsing as factual verification.

The four Governance declarations use controlled semantics. `kind` is one of
`project-system`, `evidence-backed-reconstruction`, or `portable-brief`; `order` and
the two policies use exactly the values above. `lang` selects a normative controlled
copy bundled by the validator (`en`, `ko`, `ja`, `zh-cn`, or `zh-tw`). Authority,
ordered priority, Unknowns, and Changes text MUST exactly match that copy. An
unfamiliar tool may ignore the comments and use the prose normally. A writer that
omits them still produces a readable Structural Core document, but MUST NOT claim
Portable Core until a compatible compiler or review step emits and validates the
declarations. Presence alone never overrides contradictory prose.

The controlled copy is part of this normative contract, not an OmD-private lookup.
Implementations MUST use the following exact Unicode strings for the selected `lang`:

```json
{
  "en": {
    "authority": {
      "project-system": "This document is the project design contract for the declared scope.",
      "evidence-backed-reconstruction": "This document is an evidence-backed reconstruction, not authority for an unrelated target project.",
      "portable-brief": "This document is a portable design brief for the declared scope."
    },
    "priority": ["Direct user instructions for the requested scope.", "Repository facts.", "This system contract.", "Reference inspiration."],
    "unknowns": "Omit only the smallest unresolved value or group. Do not replace it with a plausible default.",
    "changes": "Record, review, and validate changes before adoption."
  },
  "ko": {
    "authority": {
      "project-system": "이 문서는 명시된 범위의 프로젝트 디자인 계약이다.",
      "evidence-backed-reconstruction": "이 문서는 근거 기반 재구성이며, 관련 없는 대상 프로젝트의 권위가 아니다.",
      "portable-brief": "이 문서는 명시된 범위의 이식 가능한 디자인 브리프다."
    },
    "priority": ["요청 범위의 명시적 사용자 지침.", "저장소 사실.", "이 시스템 계약.", "레퍼런스 영감."],
    "unknowns": "가장 작은 미확정 값이나 그룹만 생략한다. 그럴듯한 기본값으로 대체하지 않는다.",
    "changes": "채택 전에 변경을 기록하고 검토하고 검증한다."
  },
  "ja": {
    "authority": {
      "project-system": "この文書は、宣言された範囲のプロジェクトデザイン契約です。",
      "evidence-backed-reconstruction": "この文書は根拠に基づく再構成であり、無関係な対象プロジェクトの権威ではありません。",
      "portable-brief": "この文書は、宣言された範囲の移植可能なデザインブリーフです。"
    },
    "priority": ["依頼範囲に対する明示的なユーザー指示。", "リポジトリの事実。", "このシステム契約。", "リファレンスからの着想。"],
    "unknowns": "未確定の最小の値またはグループだけを省略します。もっともらしい既定値で置き換えません。",
    "changes": "採用前に変更を記録し、レビューし、検証します。"
  },
  "zh-cn": {
    "authority": {
      "project-system": "本文档是所声明范围内的项目设计契约。",
      "evidence-backed-reconstruction": "本文档是基于证据的重构，不是无关目标项目的权威依据。",
      "portable-brief": "本文档是所声明范围内的可移植设计简报。"
    },
    "priority": ["针对请求范围的明确用户指令。", "代码仓库事实。", "本系统契约。", "参考灵感。"],
    "unknowns": "只省略最小的未确定值或分组。不得用看似合理的默认值替代。",
    "changes": "采用前记录、审查并验证变更。"
  },
  "zh-tw": {
    "authority": {
      "project-system": "本文件是所聲明範圍內的專案設計契約。",
      "evidence-backed-reconstruction": "本文件是以證據為基礎的重構，不是無關目標專案的權威依據。",
      "portable-brief": "本文件是所聲明範圍內的可攜式設計簡報。"
    },
    "priority": ["針對請求範圍的明確使用者指示。", "程式碼儲存庫事實。", "本系統契約。", "參考靈感。"],
    "unknowns": "只省略最小的未確定值或群組。不得以看似合理的預設值替代。",
    "changes": "採用前記錄、審查並驗證變更。"
  }
}
```

Every consequential graph decision has one source class:

- `prompt-fact`
- `repository-fact`
- `verified-reference-inspiration`
- `agent-proposed-greenfield-decision`
- `unresolved`

Reference inspiration may guide a new proposal but never becomes a fact about the
target product. `unresolved` decisions have no value and cannot be referenced by a
token or component.

### Extension point

The manifest and graph each expose a root `extensions` object. Extension keys MUST
be reverse-DNS identifiers such as `com.example.accessibility-audit`. Extension
values are opaque JSON. A reader that does not understand an extension MUST preserve
its key and value during a read/write or migration cycle. Core fields do not accept
arbitrary additional properties; extensions are the only portable expansion point.

An extension MUST NOT override a Core field. A required extension that changes Core
meaning needs a new profile or major format version.

## 7. Manifest and projection rules

The manifest conforms to
`spec/schema/design-md-core-manifest-v2.schema.json`. Its schema ID is:

```text
https://oh-my-design.kr/schema/design-md-core-manifest-v2.schema.json
```

This schema ID follows the same byte-parity and offline-validation rule as the
System Graph schema.

### 7.1 Sidecar and OmD proof-profile schemas

Core defines two neutral structured sidecars that MAY accompany the portable
document and graph. Their public schema IDs are:

```text
https://oh-my-design.kr/schema/design-system-provenance-v2.schema.json
https://oh-my-design.kr/schema/design-system-coverage-v2.schema.json
```

Provenance records the source class and evidence for individual decisions.
Coverage records declared coverage groups and computed checks. Their presence
does not make an assertion true by itself: a consumer still evaluates the named
evidence, license scope, freshness, and applicable implementation proof.
They are optional for standalone Core interchange; the OmD reference compiler
requires both when producing an adopted graph-backed package.

The OmD reference adoption transaction adds three receipt schemas:

```text
https://oh-my-design.kr/schema/design-md-core-adoption-review-v2.schema.json
https://oh-my-design.kr/schema/design-md-core-adoption-receipt-v2.schema.json
https://oh-my-design.kr/schema/design-md-core-project-checkpoint-v2.schema.json
```

These three receipts are the **OmD proof profile**, not part of the standalone
Core document format. They bind an identified authority decision to exact input,
compiler-output, and destination-package hashes. A standalone `DESIGN.md` does
not need them, and their presence MUST NOT be presented as factual, licensing,
visual-quality, accessibility, or runtime proof.

All five schema IDs above MUST resolve to bytes identical to the corresponding
packaged files under `spec/schema/`. Offline validators MAY use those packaged
copies and MUST NOT substitute a different schema silently.

### 7.2 Exact authority transition

Generation, review preparation, and compilation are separate authority states.
Before a System Graph becomes canonical, an implementation MUST:

1. keep the graph, provenance, coverage, and any migration report
   non-authoritative;
2. render the exact candidate graph and `DESIGN.md` bytes for review;
3. obtain an approval bound to those exact inputs and preview bytes from the
   project owner, or from a pre-registered external authority controller acting
   under the project's owner policy;
4. compile the approved inputs into a fresh immutable package and emit final
   hashes itself;
5. obtain a package checkpoint bound to those exact compiled artifacts; and
6. adopt the package into the project as one rollback-safe transaction.

The agent that proposes, renders, reviews, or implements the design MUST NOT
self-approve either authority transition. A reviewer identifier names the actual
project owner or pre-registered external authority controller; it is not a label
an agent may assign to itself. Manual hash transcription is not an equivalent
approval mechanism.

OmD's local proof profile provides deterministic byte and artifact-chain
integrity, not cryptographic identity authentication. Reviewer identifiers are
attestations; deployments that require authenticated approval MUST add an
external signature or owner-policy control without weakening these bindings.

An adopted Bound System uses this identity:

```json
{
  "schema_version": "2.0.0",
  "format": "design-md-core",
  "format_version": "2.0.0",
  "profile": "portable-core"
}
```

The manifest binds the exact SHA-256 of the graph and `DESIGN.md`. Projection is
deterministic under these rules:

1. Emit UTF-8 with LF line endings and exactly one trailing newline.
2. Emit no YAML frontmatter and no generator banner.
3. Emit one H1, then the seven anchors/H2 sections in stable order.
4. Omit unknown values from prescriptive prose and tables.
5. Prefer semantic role names; pair renderable values with the role when known.
6. Summarize repeated token/component detail rather than embedding the graph as JSON.
7. Do not copy provenance ledgers, timestamps, model names, confidence scores, or
   internal quality tiers into the visible top matter.
8. A byte change to either authority or projection requires new hashes before the
   binding is valid.
9. Preserve `projection.locale` from owner review through compilation; older graphs
   without it render as English, while every newly compiled graph records it explicitly.

A staged automated migration instead uses `profile: "migration-candidate"` and this
closed authority shape:

```json
{
  "status": "non-authoritative",
  "canonical": "source-design-md",
  "source_sha256": "<64 lowercase hexadecimal characters>",
  "candidate_graph_path": ".omd/system/graph.json",
  "candidate_projection_path": "DESIGN.md"
}
```

The candidate manifest may hash-bind review artifacts, but it MUST NOT contain the
`portable-core` authority shape or declare `canonical: "system-graph"`. Adoption is a
separate, explicit operation: production validators must pass, the owner accepts the
candidate, and an adopting writer replaces the candidate manifest with a
`portable-core` manifest whose authority is the System Graph. Changing only the
profile string is insufficient because the authority object is profile-bound by the
closed schema.

Projection is idempotent: rendering an unchanged graph twice produces identical
bytes. Parsing and re-rendering a Core v2 document MUST preserve all Core meaning and
all opaque extension values, though non-semantic Markdown formatting may normalize.

## 8. Conformance levels

Structural recognition and conformance are deliberately separate. A parser may
classify a document with one H1 and the seven correctly ordered anchors as
`structural-core` even when every section body is empty. That classification proves
only that the file can be parsed as Core v2. It is not a **Portable Core** claim, must
not be advertised as useful standalone context, and must fail `design-md validate`
until the portable requirements below pass.

Claims use the narrowest level actually proven:

| Level | Requirements |
|---|---|
| **Portable Core** | Structurally valid and vendor-neutral standalone Markdown; product/surface scope; at least one primary task; actionable foundations or explicit known constraints; governance authority, application priority, unknown-absence, and change rules; no required sidecar, OmD install, skill, or command |
| **Bound System** | Portable Core plus valid `portable-core` manifest/graph and exact bidirectional hashes |
| **Proven System** | Bound System plus valid provenance, coverage, token closure, contrast, state, responsive, motion, asset/license and locale checks |
| **Runtime Conformant** | Proven System plus same-route evidence that implementation matches the bound system |

A portable file without sidecars is useful and valid but MUST NOT claim deterministic
provenance or runtime conformance. An implementation passing visual review alone is
not Proven System or Runtime Conformant.

Compiler and schema success prove only deterministic rendering, declared Core
semantics, closed data shape, exact-byte bindings, and the checks the validator
actually performed. They do not independently prove that a prompt or repository
claim is true, that reference inspiration applies to the target project, that a
font/image/logo license permits the intended use, that an asset is available, or
that the implemented interface has high visual quality. Those questions require
their own provenance, evidence/license review, asset inspection, and same-route
implementation validation. A receipt proves who approved which bytes; it does not
upgrade the truth or quality of those bytes.

Validators SHOULD expose the distinction in machine-readable output instead of a
single ambiguous `valid` boolean. The Core validator uses this shape:

```json
{
  "level": "structural-core",
  "structurally_valid": true,
  "portable_core": false,
  "checks": {
    "product_surface_scope": { "pass": false, "evidence": ["markdown:experience"] }
  },
  "reasons": [
    {
      "code": "missing-product-surface-scope",
      "message": "Experience does not establish a useful product or surface scope."
    }
  ]
}
```

Reason codes and evidence pointers are stable machine data; wording may be clarified
without changing the code. A validator MAY use a hash-bound graph to disambiguate
typed primary tasks, foundation rules, and Governance fields, but it MUST confirm
that the standalone Markdown carries the corresponding meaning. A sidecar cannot
make an otherwise empty projection Portable Core.

Migration is evaluated differently from adoption. A lossless automated migration
may emit a structurally valid but incomplete `migration-candidate`; its report records
`portable_core: false` and precise reasons while the source remains authoritative.
This is an honest staged result, not a failed preservation operation. A
`portable-core` manifest or explicit validation claim, however, fails closed on any
of those reasons.

## 9. Versioning

Core v2 uses semantic versioning:

- **major**: removes or changes Core meaning, authority, required section IDs, or
  required schema fields;
- **minor**: adds optional fields, profiles, platform adapters, or extension guidance;
- **patch**: clarifies prose or tightens a rule without changing valid data shape.

A 2.x reader MUST accept unknown optional minor fields only when the schema allows
them and MUST preserve unknown `extensions`. It MUST fail closed on an unknown major
version or a missing required Core field. Producers write the newest version they
support and never downgrade silently.

## 10. Compatibility policy: dual-read, single-write

During the 2.x migration window, readers support:

1. Bound Core v2 (`manifest.json` + `graph.json` + `DESIGN.md`);
2. portable-only Core v2 with anchors;
3. OmD 0.1 YAML frontmatter and 15-section documents;
4. repository-era 13- or 16-section variants; and
5. unmarked Google-compatible documents.

Writers emit only Core v2. They never re-emit legacy YAML frontmatter or legacy
13/15/16-section layouts. This is the **dual-read, single-write** rule.

Legacy input remains authoritative until migration validation completes. Migration
is staged and atomic:

1. inventory and classify the input format;
2. parse headings, frontmatter, prose, tokens, evidence, and unknown blocks;
3. map statements into the graph without changing evidence class;
4. store unrecognized content in the opaque
   `dev.oh-my-design.migration` extension with original heading/order/text;
5. render the complete Core v2 candidate into a fresh sibling temporary
   directory and emit only a `migration-candidate`
   manifest whose authority remains the source DESIGN.md;
6. validate schema, hashes, semantic coverage, unresolved absence, and required
   conformance checks;
7. produce a machine migration report (`mapped`, `merged`, `unmapped`, `dropped`);
8. validate every staged byte, then atomically rename the complete temporary
   directory to a fresh destination; existing destinations are never merged or
   overwritten, even with a force flag;
9. replace the canonical file only when `dropped` is empty and an explicit adoption
   step has emitted a valid `portable-core` manifest.

An intentional human-authorized omission is recorded as an explicit Governance
change and therefore counts as `mapped`, not `dropped`. Automated migration never
applies a report with a non-empty `dropped` set.

### Legacy-to-Core mapping

| Legacy content | Core destination |
|---|---|
| Visual theme, brand narrative, principles, personas | Experience |
| Colors, spacing, depth/elevation, radii, motion | Foundations |
| Typography, fonts, imagery, icons, logos, licenses | Typography & Assets |
| Component styling and states | Components & States |
| Layout and responsive behavior | Layout & Platforms |
| Voice and tone | Content & Locales |
| Do/don't rules, agent guide, evidence, unknowns | Governance |
| Unrecognized or duplicate sections | Opaque migration extension, then reviewed |

Duplicate rules are merged only when their meaning and authority match. Conflicts are
preserved as conflicts; a migrator MUST NOT choose the most plausible value.

### Reference-catalog migration

Catalog migration MUST retain narrative depth separately from project-prescriptive
tokens. Official product use, a live surface observation, an officially distributed
asset, a declared-only face, and an unresolved claim are distinct evidence domains.
The Core projection may summarize them, while the graph/provenance sidecars preserve
the distinction. No migration status or recent timestamp can promote a claim.

Mass migration proceeds through canaries before the full catalog:

1. one deep verified reference, one partial reference, one legacy reference, and one
   structurally atypical reference;
2. the current verified-v2 set;
3. high-demand references;
4. remaining references in bounded batches;
5. future references written directly as Core v2.

Each batch compares old/new semantic inventory, rendered Builder output, agent prompt
utility, and loss report. The old parser remains read-only until two releases and a
clean observation window confirm parity.

## 11. Future generation and refactoring rules

All new design-system creation and refactoring entry points target the graph first and
write Core v2 only. A generator MUST:

1. detect existing code, an existing system, portable-only DESIGN.md, and greenfield
   projects before choosing `reuse`, `reconstruct`, `refresh`, or `establish`;
2. preserve repository facts and user preferences with their authority class;
3. ask only for a consequential missing decision that changes the system;
4. never generate filler for an unknown field;
5. write or update the graph, render the Markdown deterministically, and then validate
   hashes and conformance;
6. preserve opaque extensions during refactoring; and
7. refuse a partial write that would leave the graph and Markdown disagreeing.

A linter SHOULD reject new YAML frontmatter, missing/reordered anchors, legacy section
output, promoted unresolved paths, stale hashes, and unknown non-extension fields.
A refactor SHOULD report semantic changes rather than a Markdown-only line diff.

## 12. Structural authoring skeleton

```markdown
# Product Design System

<!-- design-md:section experience -->
## 1. Experience

Describe the product scope, primary task, design direction, principles, and avoidances.

<!-- design-md:section foundations -->
## 2. Foundations

Declare known semantic color, spacing, shape, elevation, and motion roles.

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

Declare type roles and verified font/asset authority. Omit unknown substitutes.

<!-- design-md:section components-states -->
## 4. Components & States

Describe component anatomy, variants, semantics, and applicable states.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Describe layout priority, responsive/reflow behavior, and platform adaptation.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Describe voice, terminology, formatting, and supported locale behavior.

<!-- design-md:section governance -->
## 7. Governance

State application priority, unknown-absence, evidence scope, and change rules.
```

This skeleton shows only the seven-section shape. It is neither Portable Core nor
valid evidence: it intentionally omits the normative claim declarations and contains
instructions instead of project decisions. A generator replaces the instructions with
project-backed decisions, omits values it cannot establish, and uses the canonical
compiler to emit the claim declarations and bindings.
