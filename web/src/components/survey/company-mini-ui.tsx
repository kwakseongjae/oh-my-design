"use client";

/**
 * Company Mini UI — Scene renderers using real company design tokens.
 *
 * Each renderer creates a miniature mockup that faithfully represents
 * the company's design language: colors, radius, shadow, spacing.
 * Content uses realistic dummy text and image placeholders.
 */

import { COMPANY_TOKENS, type CompanyTokens } from "@/lib/survey/quiz-data";

/* ── Main Component ─────────────────────────────────────── */

export function CompanyMiniUI({
  companyId,
  sceneType,
  className = "",
}: {
  companyId: string;
  sceneType: string;
  className?: string;
}) {
  const tokens = COMPANY_TOKENS[companyId];
  if (!tokens) return <div className={className}>Unknown: {companyId}</div>;

  const renderer = SCENE_RENDERERS[sceneType];
  if (!renderer) return <div className={className}>Unknown scene: {sceneType}</div>;

  return <div className={className}>{renderer(tokens)}</div>;
}

/* ── Helpers ─────────────────────────────────────────────── */

type SceneRenderer = (t: CompanyTokens) => React.ReactNode;

const SCENE_RENDERERS: Record<string, SceneRenderer> = {
  landing: renderLanding,
  navigation: renderNavigation,
  dashboard: renderDashboard,
  notifications: renderNotifications,
  card: renderCard,
  dropdown: renderDropdown,
  buttonInput: renderButtonInput,
  fullApp: renderFullApp,
  palette: renderPalette,
  typography: renderTypography,
  theme: renderTheme,
};

/** Image placeholder block with a subtle gradient */
function ImgBlock({ bg, radius = "4px", className = "" }: { bg: string; radius?: string; className?: string }) {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        borderRadius: radius,
        background: `linear-gradient(135deg, ${bg}18 0%, ${bg}08 100%)`,
        border: `1px solid ${bg}10`,
      }}
    />
  );
}

/* ── Landing Page ───────────────────────────────────────── */

function renderLanding(t: CompanyTokens) {
  const isWarm = ["airbnb", "notion", "claude", "kakao", "toss"].includes(t.id);

  // Vercel / Tesla style: stark, headline-driven, monochrome
  if (t.id === "vercel" || t.id === "tesla" || (!isWarm && !t.darkNative)) {
    return (
      <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: "#fff", color: "#171717", borderRadius: "8px" }}>
        {/* Minimal nav */}
        <div className="flex items-center justify-between px-3 py-2" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <div className="flex items-center gap-1.5">
            {t.id === "vercel" ? (
              <div className="h-3.5 w-3.5" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", background: "#171717" }} />
            ) : (
              <div className="h-3.5 w-3.5" style={{ background: t.primary, borderRadius: t.radius }} />
            )}
            <img src={t.darkNative ? "/logo-white.png" : "/logo.png"} alt="omd" className="h-2.5 object-contain" />
          </div>
          <div className="flex items-center gap-3">
            {["Products", "Solutions", "Pricing"].map((s) => (
              <span key={s} className="text-[7px]" style={{ opacity: 0.35 }}>{s}</span>
            ))}
          </div>
          <div className="px-2.5 py-0.5 text-[7px] font-medium" style={{ background: "#171717", color: "#fff", borderRadius: t.radius }}>
            Sign Up
          </div>
        </div>

        {/* Hero: centered headline, tight tracking, stark */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 text-center">
          <div className="text-[14px] font-semibold leading-tight" style={{ letterSpacing: "-0.04em" }}>
            Your complete platform<br />for the web.
          </div>
          <div className="text-[8px] mt-2 max-w-[80%]" style={{ opacity: 0.35 }}>
            Build and deploy your next project in seconds. The frontend cloud for developers.
          </div>
          <div className="flex gap-2 mt-3">
            <div className="px-3 py-1 text-[7px] font-medium" style={{ background: "#171717", color: "#fff", borderRadius: t.radius }}>
              Start Deploying
            </div>
            <div className="px-3 py-1 text-[7px]" style={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: t.radius, opacity: 0.6 }}>
              Get a Demo
            </div>
          </div>
        </div>

        {/* Minimal feature cards */}
        <div className="flex gap-1.5 px-3 pb-3">
          {["Preview", "Analytics", "Edge"].map((label) => (
            <div key={label} className="flex-1 p-2" style={{ border: "1px solid rgba(0,0,0,0.06)", borderRadius: t.radius }}>
              <div className="text-[7px] font-medium" style={{ opacity: 0.6 }}>{label}</div>
              <div className="text-[6px] mt-0.5" style={{ opacity: 0.2 }}>Ship faster with zero config.</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Airbnb / Notion style: warm, search-or-content driven, rounded, inviting
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: t.bg, color: t.fg, borderRadius: "8px" }}>
      {/* Warm nav with prominent search or CTA */}
      <div className="flex items-center justify-between px-3 py-2" style={{ borderBottom: `1px solid ${t.border || "transparent"}` }}>
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded-full flex-shrink-0" style={{ background: t.primary }} />
          <img src={t.darkNative ? "/logo-white.png" : "/logo.png"} alt="omd" className="h-2.5 object-contain" />
        </div>
        {t.id === "airbnb" ? (
          /* Airbnb: pill search bar */
          <div className="flex-1 max-w-[140px] mx-3 flex items-center justify-center gap-2 px-3 py-1 text-[7px]" style={{
            border: "1px solid #ddd", borderRadius: "9999px", boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
          }}>
            <span style={{ fontWeight: 600 }}>Anywhere</span>
            <span style={{ color: "#ddd" }}>|</span>
            <span style={{ opacity: 0.5 }}>Any week</span>
            <span style={{ color: "#ddd" }}>|</span>
            <div className="h-4 w-4 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(to right, #E61E4D, #D70466)" }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {["Templates", "Blog", "Pricing"].map((s) => (
              <span key={s} className="text-[7px]" style={{ opacity: 0.4 }}>{s}</span>
            ))}
          </div>
        )}
        <div className="px-2.5 py-0.5 text-[7px] font-medium" style={{
          background: t.id === "airbnb" ? "transparent" : t.primary,
          color: t.id === "airbnb" ? t.fg : "#fff",
          border: t.id === "airbnb" ? `1px solid ${t.border}` : "none",
          borderRadius: "9999px",
        }}>
          {t.id === "airbnb" ? "Sign up" : "Get Started"}
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col px-3 py-3 gap-2">
        {t.id === "airbnb" ? (
          /* Airbnb: category pills + listing cards */
          <>
            <div className="flex gap-2 overflow-hidden">
              {["Beach", "Cabin", "Design", "Lake", "Ski"].map((cat, i) => (
                <div key={cat} className="flex flex-col items-center gap-0.5 flex-shrink-0" style={{ opacity: i === 0 ? 1 : 0.4 }}>
                  <div className="h-4 w-4 rounded" style={{ background: `${t.fg}10` }} />
                  <span className="text-[6px]">{cat}</span>
                  {i === 0 && <div className="w-full h-0.5" style={{ background: t.fg }} />}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-1.5 flex-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col">
                  <div className="aspect-square rounded-xl" style={{ background: `linear-gradient(135deg, ${t.primary}20, ${t.primary}08)` }} />
                  <div className="mt-1">
                    <div className="text-[7px] font-medium">Malibu, US</div>
                    <div className="text-[6px]" style={{ opacity: 0.4 }}>Ocean view villa</div>
                    <div className="text-[7px] mt-0.5"><strong>$285</strong> <span style={{ opacity: 0.4 }}>night</span></div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Notion-style: text content, warm and inviting */
          <>
            <div className="text-[12px] font-semibold leading-snug">
              Write, plan, and get<br />organized. All in one place.
            </div>
            <div className="text-[8px] leading-relaxed" style={{ opacity: 0.4, maxWidth: "90%" }}>
              A new tool that blends your everyday work apps into one. The all-in-one workspace for you and your team.
            </div>
            <div className="flex gap-2 mt-1">
              <div className="px-3 py-1 text-[7px] font-medium" style={{ background: t.primary, color: "#fff", borderRadius: t.radius }}>
                Get started free
              </div>
            </div>
            <div className="mt-auto flex gap-1.5">
              {["Docs", "Wikis", "Projects"].map((label) => (
                <div key={label} className="flex-1 p-1.5" style={{ borderRadius: t.radius, background: `${t.primary}06`, border: `1px solid ${t.border}` }}>
                  <div className="text-[7px] font-medium" style={{ opacity: 0.6 }}>{label}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Navigation Bar ─────────────────────────────────────── */

function renderNavigation(t: CompanyTokens) {
  const isWarm = ["claude", "notion", "airbnb", "kakao", "toss"].includes(t.id);

  // Apple-style: dense nav, many small items, product-focused, sharp, minimal
  if (t.id === "apple" || (!isWarm && !t.darkNative)) {
    return (
      <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: "#fff", color: "#1d1d1f", borderRadius: "8px" }}>
        {/* Apple-style dense nav */}
        <div className="flex items-center justify-center gap-4 px-3 py-2" style={{ background: "rgba(245,245,247,0.8)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          {["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods"].map((s) => (
            <span key={s} className="text-[7px]" style={{ opacity: 0.7 }}>{s}</span>
          ))}
          <div className="flex gap-2 ml-2">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.4 }}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.4 }}><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/></svg>
          </div>
        </div>

        {/* Hero: product-focused, cinematic */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-4" style={{ background: "#f5f5f7" }}>
          <div className="text-[12px] font-semibold" style={{ letterSpacing: "-0.03em" }}>MacBook Pro</div>
          <div className="text-[9px] mt-0.5" style={{ opacity: 0.5 }}>Mind-blowing. Head-turning.</div>
          <div className="flex gap-3 mt-2">
            <span className="text-[7px]" style={{ color: "#0071e3" }}>Learn more &gt;</span>
            <span className="text-[7px]" style={{ color: "#0071e3" }}>Buy &gt;</span>
          </div>
          <div className="mt-3 w-3/4 h-12 rounded" style={{ background: "linear-gradient(180deg, #e8e8ed 0%, #d2d2d7 100%)" }} />
        </div>
      </div>
    );
  }

  // Claude-style: warm parchment, editorial, serif-like, literary spacing
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: t.bg, color: t.fg, borderRadius: "8px" }}>
      {/* Warm editorial nav */}
      <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: `1px solid ${t.border || "transparent"}` }}>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full flex-shrink-0" style={{ background: t.primary }} />
          <img src={t.darkNative ? "/logo-white.png" : "/logo.png"} alt="omd" className="h-2.5 object-contain" />
        </div>
        <div className="flex items-center gap-5">
          {["Research", "Blog", "About"].map((s) => (
            <span key={s} className="text-[8px]" style={{ opacity: 0.45 }}>{s}</span>
          ))}
        </div>
        <div className="px-3 py-1 text-[7px] font-medium" style={{
          background: t.primary,
          color: "#fff",
          borderRadius: "9999px",
        }}>
          Try Now
        </div>
      </div>

      {/* Content: editorial, text-heavy */}
      <div className="flex-1 p-4 space-y-3">
        <div className="text-[13px] font-semibold leading-snug" style={{ fontFamily: "Georgia, serif" }}>
          A thoughtful approach to building useful AI
        </div>
        <div className="text-[8px] leading-relaxed" style={{ opacity: 0.45, maxWidth: "90%" }}>
          We build AI systems that are safe, beneficial, and understandable. Our research focuses on creating reliable and interpretable models.
        </div>
        <div className="flex gap-2 pt-1">
          <div className="px-3 py-1 text-[7px] font-medium" style={{ background: t.primary, color: "#fff", borderRadius: "9999px" }}>
            Read more
          </div>
          <div className="px-3 py-1 text-[7px]" style={{ color: t.primary, opacity: 0.8 }}>
            Learn more &rarr;
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Dashboard ──────────────────────────────────────────── */

function renderDashboard(t: CompanyTokens) {
  const isDense = ["stripe", "raycast", "clickhouse", "sentry"].includes(t.id);
  const metrics = isDense
    ? [{ label: "Revenue", val: "$48.2K" }, { label: "Users", val: "12,847" }, { label: "Conv.", val: "3.2%" }]
    : [{ label: "Revenue", val: "$48.2K" }, { label: "Users", val: "12,847" }];
  const rows = isDense
    ? ["Deploy v2.1 to production", "Fix authentication timeout", "Update dependency tree", "Add unit test coverage"]
    : ["Deploy v2.1 to production", "Fix authentication timeout"];

  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: t.bg, color: t.fg, borderRadius: "8px" }}>
      {/* Header */}
      <div className={`flex items-center justify-between px-3 ${isDense ? "py-1.5" : "py-2.5"}`} style={{ borderBottom: `1px solid ${t.border || "transparent"}` }}>
        <span className="text-[9px] font-semibold">Dashboard</span>
        <div className="flex gap-1">
          <div className={`${isDense ? "h-4 w-12" : "h-5 w-14"} rounded text-[7px] flex items-center justify-center`} style={{ border: `1px solid ${t.border || t.fg + "20"}`, opacity: 0.5 }}>
            7 days
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className={`grid ${isDense ? "grid-cols-3 gap-1.5 p-2" : "grid-cols-2 gap-2.5 p-3"}`}>
        {metrics.map((m) => (
          <div key={m.label} className={isDense ? "p-1.5" : "p-2.5"} style={{
            borderRadius: t.radius,
            border: `1px solid ${t.border || "transparent"}`,
            boxShadow: t.shadow !== "none" ? t.shadow : "none",
          }}>
            <div className={`text-[${isDense ? "7" : "8"}px]`} style={{ opacity: 0.4 }}>{m.label}</div>
            <div className={`${isDense ? "text-xs" : "text-sm"} font-bold mt-0.5`}>{m.val}</div>
          </div>
        ))}
      </div>

      {/* Activity list */}
      <div className={isDense ? "px-2 pb-2" : "px-3 pb-3"}>
        <div className="text-[7px] font-medium mb-1" style={{ opacity: 0.4 }}>Recent Activity</div>
        <div style={{ borderRadius: t.radius, border: `1px solid ${t.border || "transparent"}`, overflow: "hidden" }}>
          {rows.map((row, i, arr) => (
            <div key={row} className={`flex items-center gap-2 text-[7px] ${isDense ? "px-2 py-1" : "px-3 py-2"}`}
              style={{ borderBottom: i < arr.length - 1 ? `1px solid ${t.border || "transparent"}` : "none" }}>
              <div className={`${isDense ? "h-1.5 w-1.5" : "h-2 w-2"} rounded-full flex-shrink-0`}
                style={{ background: i === 1 ? "#f59e0b" : t.primary }} />
              <span style={{ opacity: 0.7 }}>{row}</span>
              <span className="ml-auto text-[6px]" style={{ opacity: 0.25 }}>2m ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Notifications ──────────────────────────────────────── */

function renderNotifications(t: CompanyTokens) {
  const isDense = ["clickhouse", "sentry", "raycast", "stripe"].includes(t.id);
  const items = [
    { text: "Build #847 completed successfully", type: "success", time: "2m" },
    { text: "PR #42 ready for review", type: "info", time: "5m" },
    { text: "Deploy to production failed", type: "error", time: "12m" },
    ...(isDense ? [
      { text: "New comment on issue #128", type: "info", time: "18m" },
      { text: "Security scan passed", type: "success", time: "25m" },
    ] : []),
  ];
  const dotColor = { success: t.primary, info: t.accent || t.primary, error: "#ef4444" };

  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: t.bg, color: t.fg, borderRadius: "8px" }}>
      <div className={`flex items-center justify-between ${isDense ? "px-2.5 py-1.5" : "px-4 py-2.5"}`}
        style={{ borderBottom: `1px solid ${t.border || "transparent"}` }}>
        <span className="text-[9px] font-semibold">Notifications</span>
        <span className="text-[7px]" style={{ color: t.primary }}>Mark all read</span>
      </div>
      {items.map((item, i) => (
        <div key={i} className={`flex items-start ${isDense ? "gap-1.5 px-2.5 py-1.5" : "gap-2.5 px-4 py-3"}`}
          style={{ borderBottom: i < items.length - 1 ? `1px solid ${t.border || "transparent"}` : "none" }}>
          <div className={`${isDense ? "h-1.5 w-1.5 mt-1" : "h-2 w-2 mt-0.5"} rounded-full flex-shrink-0`}
            style={{ background: dotColor[item.type as keyof typeof dotColor] }} />
          <div className="flex-1 min-w-0">
            <div className={`text-[${isDense ? "7" : "8"}px] leading-snug`} style={{ opacity: 0.8 }}>{item.text}</div>
          </div>
          <span className={`text-[${isDense ? "6" : "7"}px] flex-shrink-0`} style={{ opacity: 0.25 }}>{item.time}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Card ────────────────────────────────────────────────── */

function renderCard(t: CompanyTokens) {
  const hasElevation = t.shadow !== "none";
  const cards = [
    { title: "API Performance", desc: "Average response time across all endpoints", metric: "142ms" },
    { title: "Error Rate", desc: "Percentage of failed requests this week", metric: "0.03%" },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-2.5 p-3 overflow-hidden" style={{ background: t.bg, color: t.fg, borderRadius: "8px" }}>
      {cards.map((c, i) => (
        <div key={i} className="p-3" style={{
          borderRadius: t.radius,
          border: hasElevation ? `1px solid ${t.border || "transparent"}` : `1px solid ${t.border || t.fg + "15"}`,
          boxShadow: hasElevation ? t.shadow : "none",
        }}>
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="text-[9px] font-semibold" style={{ opacity: 0.8 }}>{c.title}</div>
              <div className="text-[7px] mt-0.5" style={{ opacity: 0.35 }}>{c.desc}</div>
            </div>
            <div className="text-[11px] font-bold" style={{ color: t.primary }}>{c.metric}</div>
          </div>
          <ImgBlock bg={t.primary} radius={t.radius} className="w-full h-5" />
        </div>
      ))}
    </div>
  );
}

/* ── Dropdown ───────────────────────────────────────────── */

function renderDropdown(t: CompanyTokens) {
  const hasElevation = t.shadow !== "none";

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-2.5 overflow-hidden" style={{ background: t.bg, color: t.fg, borderRadius: "8px" }}>
      {/* Input with label */}
      <div className="w-full max-w-[200px]">
        <div className="text-[8px] font-medium mb-1" style={{ opacity: 0.5 }}>Department</div>
        <div className="flex items-center justify-between px-2.5 py-1.5 text-[8px]" style={{
          borderRadius: t.radius,
          border: `1px solid ${t.border || t.fg + "20"}`,
        }}>
          <span style={{ opacity: 0.7 }}>Select department</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ opacity: 0.3 }}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Dropdown */}
      <div className="w-full max-w-[200px] overflow-hidden" style={{
        borderRadius: t.radius,
        border: hasElevation ? `1px solid ${t.border || t.fg + "08"}` : `1px solid ${t.border || t.fg + "15"}`,
        boxShadow: hasElevation ? t.shadow : "none",
      }}>
        {["Engineering", "Design", "Marketing", "Sales"].map((item, i) => (
          <div key={item} className="flex items-center gap-2 px-2.5 py-1.5 text-[8px]" style={{
            borderBottom: i < 3 ? `1px solid ${t.border || t.fg + "08"}` : "none",
            background: i === 0 ? `${t.primary}10` : "transparent",
            fontWeight: i === 0 ? 600 : 400,
          }}>
            {i === 0 && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={t.primary} strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
            <span style={{ color: i === 0 ? t.primary : t.fg, opacity: i === 0 ? 1 : 0.6 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Button + Input ─────────────────────────────────────── */

function renderButtonInput(t: CompanyTokens) {
  const btnRadius = parseInt(t.radius) >= 12 ? "9999px" : parseInt(t.radius) <= 4 ? t.radius : t.radius;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-4 overflow-hidden" style={{ background: t.bg, color: t.fg, borderRadius: "8px" }}>
      {/* Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        <div className="px-4 py-1.5 text-[9px] font-medium" style={{
          background: t.primary,
          color: t.darkNative ? t.bg : "#fff",
          borderRadius: btnRadius,
        }}>Deploy Now</div>
        <div className="px-4 py-1.5 text-[9px] font-medium" style={{
          border: `1px solid ${t.border || t.fg + "25"}`,
          borderRadius: btnRadius,
          opacity: 0.7,
        }}>Cancel</div>
        <div className="px-3 py-1.5 text-[9px]" style={{
          color: t.primary,
          borderRadius: btnRadius,
          opacity: 0.8,
        }}>Learn more</div>
      </div>

      {/* Input */}
      <div className="w-full max-w-[220px] space-y-1.5">
        <div className="text-[7px] font-medium" style={{ opacity: 0.4 }}>Email address</div>
        <div className="px-2.5 py-1.5 text-[8px]" style={{
          borderRadius: t.radius,
          border: `1px solid ${t.border || t.fg + "20"}`,
          opacity: 0.5,
        }}>
          developer@example.com
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 justify-center">
        {["React", "TypeScript", "Next.js"].map((tag, i) => (
          <div key={tag} className="px-2 py-0.5 text-[7px] font-medium" style={{
            borderRadius: btnRadius,
            background: i === 0 ? t.primary : i === 1 ? `${t.primary}15` : "transparent",
            color: i === 0 ? (t.darkNative ? t.bg : "#fff") : i === 1 ? t.primary : t.fg,
            border: i === 2 ? `1px solid ${t.border || t.fg + "20"}` : "none",
            opacity: i === 2 ? 0.6 : 1,
          }}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Full App (Comprehensive) ───────────────────────────── */

function renderFullApp(t: CompanyTokens) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: t.bg, color: t.fg, borderRadius: "8px" }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-2.5 py-1.5" style={{ borderBottom: `1px solid ${t.border || "transparent"}` }}>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3" style={{ background: t.primary, borderRadius: t.radius }} />
          <img src={t.darkNative ? "/logo-white.png" : "/logo.png"} alt="omd" className="h-2.5 object-contain" />
        </div>
        <div className="px-2 py-0.5 text-[6px] font-medium" style={{ background: t.primary, color: t.darkNative ? t.bg : "#fff", borderRadius: t.radius }}>
          New
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-16 p-1.5 flex flex-col gap-0.5 flex-shrink-0" style={{ borderRight: `1px solid ${t.border || "transparent"}` }}>
          {["Home", "Projects", "Tasks", "Settings"].map((item, i) => (
            <div key={item} className="flex items-center gap-1.5 px-1.5 py-1" style={{
              background: i === 0 ? `${t.primary}12` : "transparent",
              borderRadius: t.radius,
            }}>
              <div className="h-2 w-2 rounded-sm flex-shrink-0" style={{ background: i === 0 ? t.primary : `${t.fg}20` }} />
              <span className="text-[6px]" style={{ opacity: i === 0 ? 1 : 0.35 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-2 space-y-2 overflow-hidden">
          <div className="text-[9px] font-semibold">Dashboard</div>
          <div className="grid grid-cols-2 gap-1.5">
            {[{ l: "Users", v: "2,847" }, { l: "Revenue", v: "$14.2K" }].map((m) => (
              <div key={m.l} className="p-1.5" style={{ borderRadius: t.radius, border: `1px solid ${t.border || "transparent"}`, boxShadow: t.shadow !== "none" ? t.shadow : "none" }}>
                <div className="text-[6px]" style={{ opacity: 0.35 }}>{m.l}</div>
                <div className="text-[10px] font-bold">{m.v}</div>
              </div>
            ))}
          </div>
          <ImgBlock bg={t.primary} radius={t.radius} className="w-full h-6" />
        </div>
      </div>
    </div>
  );
}

/* ── Palette (Saturation) ───────────────────────────────── */

function renderPalette(_t: CompanyTokens) {
  const isMuted = _t.id === "muted" || _t.saturation === "muted";
  const colors = isMuted
    ? ["#8b9fad", "#9db5a0", "#b5a08b", "#a08bb5", "#8badb5"]
    : ["#2563eb", "#16a34a", "#ea580c", "#9333ea", "#0891b2"];
  const names = isMuted
    ? ["Slate", "Sage", "Sand", "Mauve", "Teal"]
    : ["Blue", "Green", "Orange", "Purple", "Cyan"];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-3 overflow-hidden" style={{ background: "#fff", color: "#09090b", borderRadius: "8px" }}>
      <div className="flex gap-2">
        {colors.map((c, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="h-10 w-10 rounded-lg" style={{ background: c }} />
            <span className="text-[6px]" style={{ opacity: 0.4 }}>{names[i]}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-1">
        <div className="px-4 py-1.5 text-[9px] font-medium text-white rounded-md" style={{ background: colors[0] }}>Primary</div>
        <div className="px-3 py-1.5 text-[9px] rounded-md" style={{ background: `${colors[0]}18`, color: colors[0] }}>Secondary</div>
      </div>
    </div>
  );
}

/* ── Typography ─────────────────────────────────────────── */

function renderTypography(_t: CompanyTokens) {
  const isGeo = _t.id === "geometric" || _t.typography === "geometric";
  const font = isGeo ? "'Inter', system-ui, sans-serif" : "'Georgia', 'Source Serif Pro', serif";
  const ls = isGeo ? "-0.02em" : "0em";

  return (
    <div className="w-full h-full flex flex-col p-4 gap-3 overflow-hidden" style={{ background: "#fff", color: "#09090b", borderRadius: "8px" }}>
      <div>
        <div className="text-base font-semibold leading-tight" style={{ fontFamily: font, letterSpacing: ls }}>
          {isGeo ? "Build better products" : "Welcome back, team"}
        </div>
        <div className="text-[9px] mt-1.5 leading-relaxed" style={{ fontFamily: font, opacity: 0.45 }}>
          {isGeo
            ? "Ship fast with confidence. Our platform helps teams move quickly without sacrificing quality or reliability."
            : "Pick up where you left off. Your workspace is ready with everything you need to collaborate and create today."}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="px-3 py-1 text-[8px] font-medium text-white rounded-md bg-neutral-900" style={{ fontFamily: font }}>Get Started</div>
        <div className="px-2 py-0.5 text-[7px] rounded border border-neutral-200" style={{ fontFamily: font }}>v2.0</div>
      </div>
      <div className="rounded-lg border border-neutral-200 p-2.5 space-y-1" style={{ fontFamily: font }}>
        <div className="text-[9px] font-semibold" style={{ letterSpacing: ls }}>Section Title</div>
        <div className="flex gap-4">
          {[{ l: "Users", v: "2,847" }, { l: "Uptime", v: "99.9%" }].map((m) => (
            <div key={m.l}>
              <div className="text-[11px] font-bold">{m.v}</div>
              <div className="text-[7px]" style={{ opacity: 0.35 }}>{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Theme (Dark/Light) ─────────────────────────────────── */

function renderTheme(_t: CompanyTokens) {
  const isDark = _t.id === "dark";
  const bg = isDark ? "#09090b" : "#ffffff";
  const fg = isDark ? "#fafafa" : "#09090b";
  const border = isDark ? "#27272a" : "#e4e4e7";
  const primary = isDark ? "#3b82f6" : "#18181b";

  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: bg, color: fg, borderRadius: "8px", border: `1px solid ${border}` }}>
      <div className="flex items-center justify-between px-3 py-2" style={{ borderBottom: `1px solid ${border}` }}>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded" style={{ background: primary }} />
          <img src={isDark ? "/logo-white.png" : "/logo.png"} alt="omd" className="h-2.5 object-contain" />
        </div>
        <div className="px-2 py-0.5 text-[7px] font-medium" style={{ background: primary, color: bg, borderRadius: "6px" }}>Sign Up</div>
      </div>
      <div className="flex-1 p-3 space-y-2">
        <div className="text-[10px] font-semibold">Welcome back</div>
        <div className="text-[7px] leading-relaxed" style={{ opacity: 0.4 }}>Your dashboard is ready. Here is what happened today.</div>
        <div className="rounded-lg p-2" style={{ border: `1px solid ${border}` }}>
          <div className="text-[7px] font-medium" style={{ opacity: 0.5 }}>Revenue</div>
          <div className="text-[11px] font-bold mt-0.5">$24,521</div>
        </div>
        <div className="rounded-lg p-2" style={{ border: `1px solid ${border}` }}>
          <div className="flex items-center gap-1.5 text-[7px]">
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: primary }} />
            <span style={{ opacity: 0.6 }}>Deploy completed</span>
            <span className="ml-auto" style={{ opacity: 0.25 }}>2m</span>
          </div>
        </div>
      </div>
    </div>
  );
}
