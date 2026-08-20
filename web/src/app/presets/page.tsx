/**
 * /presets — the OmD preset catalog. Server component reading the generated
 * projection of skills/omd-autopilot/references/presets/*.md (the markdown is
 * the source of truth; scripts/build-presets-data.mjs writes the projection).
 *
 * The point of the page: a preset is not a component you install, it is the
 * contract that tells a coding agent how to derive that component from your
 * declared philosophy — anatomy, states, a11y, and which values must come from
 * your decision table instead of a library default.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PRESETS, PRESET_TOTAL, PRESETS_BY_LAYER, type OmdPreset } from "@/data/presets.generated";

const SITE_URL = "https://oh-my-design.kr";

export const metadata: Metadata = {
  title: "Presets — oh-my-design",
  description:
    "Render-verified component and layout contracts an AI coding agent derives from your design philosophy. Anatomy, state matrices, accessibility, token slots, and the anti-slop gates each preset defends.",
  keywords: [
    "design system presets",
    "shadcn design system",
    "AI UI presets",
    "component contract",
    "oh-my-design presets",
  ],
  alternates: { canonical: `${SITE_URL}/presets` },
  openGraph: {
    title: "oh-my-design — Preset catalog",
    description:
      "Component and layout contracts with anatomy, states, accessibility, and token slots — the floor under AI-generated UI.",
    url: `${SITE_URL}/presets`,
    type: "website",
  },
};

const LAYERS: { id: string; label: string; blurb: string }[] = [
  {
    id: "fundamentals",
    label: "Fundamentals",
    blurb:
      "장르를 가리지 않는 기본기. 칠해지는 표면의 패딩 해부, 라우트 포커스, 마스트헤드·히어로·푸터처럼 어느 제품에서나 같은 방식으로 틀리는 것들.",
  },
  {
    id: "primitives",
    label: "Primitives",
    blurb:
      "컴포넌트 어휘. shadcn/ui·Radix 대응과 W3C ARIA APG 계약을 함께 명시해, 라이브러리를 쓰든 손으로 짜든 같은 계약을 지키게 한다.",
  },
  {
    id: "genres",
    label: "Genres",
    blurb:
      "화면 단위 조립. 커머스·마켓플레이스·에디토리얼처럼 도메인이 요구하는 정보 구조와 레이아웃 문법.",
  },
  {
    id: "flavors",
    label: "Flavors",
    blurb:
      "레퍼런스 카탈로그에서 유도한 성향 프로파일. 특정 계열이 무엇을 우선하고 무엇을 희생하는지를 토큰 성향으로 옮긴다.",
  },
];

function PresetCard({ preset }: { preset: OmdPreset }) {
  return (
    <li className="rounded-xl border border-border/60 bg-card/30 p-5">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <code className="font-mono text-[13px] font-bold text-primary">{preset.id}</code>
        <span className="text-[15px] font-semibold tracking-tight">{preset.title}</span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {preset.group}
        </span>
      </div>

      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{preset.summary}</p>

      {preset.base && (
        <p className="mt-3 text-[13px] leading-relaxed">
          <span className="font-semibold">Base</span>{" "}
          <span className="text-muted-foreground">{preset.base}</span>
        </p>
      )}

      {preset.tokenSlots && (
        <p className="mt-1.5 text-[13px] leading-relaxed">
          <span className="font-semibold">토큰 슬롯</span>{" "}
          <span className="text-muted-foreground">{preset.tokenSlots}</span>
        </p>
      )}

      {(preset.gates.length > 0 || preset.verified) && (
        <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
          {preset.gates.map((gate) => (
            <code
              key={gate}
              className="rounded-full border border-border/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
              title="이 프리셋이 방어하는 게이트"
            >
              {gate}
            </code>
          ))}
          {preset.verified && (
            <span className="ml-1 text-[11px] text-muted-foreground">{preset.verified}</span>
          )}
        </div>
      )}
    </li>
  );
}

export default function PresetsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "oh-my-design — Preset catalog",
    description:
      "Component and layout contracts an AI coding agent derives from a declared design philosophy.",
    url: `${SITE_URL}/presets`,
    numberOfItems: PRESET_TOTAL,
  };

  const layers = LAYERS.filter((layer) => (PRESETS_BY_LAYER[layer.id] ?? 0) > 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="oh-my-design" className="h-6 sm:h-7 block dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.png" alt="oh-my-design" className="h-6 sm:h-7 hidden dark:block" />
          </Link>
          <nav className="flex items-center gap-4 text-xs sm:text-sm">
            <Link href="/design-systems" className="text-muted-foreground hover:text-foreground">
              References
            </Link>
            <Link href="/docs/en" className="text-muted-foreground hover:text-foreground">
              Docs
            </Link>
            <a
              href="https://github.com/kwakseongjae/oh-my-design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-12 pb-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Presets · {PRESET_TOTAL} contracts
        </div>
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
        >
          프리셋 카탈로그
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          shadcn/ui·Radix는 <strong className="text-foreground">구조</strong>를 줍니다. OmD 프리셋은 그
          구조를 <strong className="text-foreground">당신이 선언한 철학에서 어떻게 유도할지</strong>를
          줍니다 — 해부, 상태 매트릭스, 접근성 계약, 그리고 어떤 값이 라이브러리 기본값이 아니라
          당신의 결정 표에서 와야 하는지(토큰 슬롯).
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          그래서 둘은 겹쳐 씁니다. 프로젝트가 shadcn을 쓰면 <code className="font-mono text-[13px]">Base</code>가
          시작점을 지정하고, 토큰 슬롯이 무엇을 프로젝트 토큰에 묶을지 지시합니다. 안 쓰면 같은 계약을
          손으로 구현합니다 — 계약은 동일합니다. 자기 프로젝트의 시스템은{" "}
          <code className="font-mono text-[13px]">npx oh-my-design-cli@latest book</code> 으로 로컬에서
          바로 열어 볼 수 있습니다.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        {layers.map((layer) => {
          const presets = PRESETS.filter((preset) => preset.layer === layer.id);
          return (
            <div key={layer.id} className="mb-14">
              <h2 className="text-xl font-bold tracking-tight">
                {layer.label}{" "}
                <span className="font-mono text-sm font-normal text-muted-foreground">
                  {presets.length}
                </span>
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {layer.blurb}
              </p>
              <ul className="mt-5 space-y-3">
                {presets.map((preset) => (
                  <PresetCard key={preset.id} preset={preset} />
                ))}
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  );
}
