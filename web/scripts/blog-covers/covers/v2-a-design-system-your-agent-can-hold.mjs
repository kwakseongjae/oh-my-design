/**
 * Cover: the derivation chain the post walks, verbatim and in its order, as seven linked steps.
 */
export const slug = "v2-a-design-system-your-agent-can-hold";
export const titles = {
  ko: "v2.0.0, 에이전트가 붙들 수 있는 디자인 시스템",
  en: "v2.0.0, a design system your agent can hold",
};

const CHAIN = {
  ko: ["철학", "결정 표", "토큰", "컴포넌트 계약", "레이아웃 문법", "빌드", "렌더 비평"],
  en: ["philosophy", "decision table", "tokens", "component contracts", "layout grammar", "build", "render critique"],
};

export const pictureCss = `
.chain{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;gap:12px;padding:0 0 0 56px}
.step{position:relative;display:flex;align-items:center;gap:16px}
.step b{position:relative;z-index:1;flex:none;width:52px;height:52px;border-radius:999px;display:grid;place-items:center;background:#ffffff;box-shadow:inset 0 0 0 2px #d3d3db;font-size:21px;font-weight:700;color:#5a5a63;font-variant-numeric:tabular-nums}
.step span{display:inline-flex;align-items:center;height:52px;padding:0 24px;border-radius:999px;background:#ffffff;box-shadow:inset 0 0 0 1px #e5e6eb;font-size:26px;font-weight:650;color:#13131a;white-space:nowrap}
.step:not(:last-child)::after{content:"";position:absolute;left:25px;top:52px;width:2px;height:12px;background:#d3d3db}
.step:first-child b{background:#6749e2;box-shadow:none;color:#ffffff}
`;

export function picture(locale) {
  return '<div class="chain">' + CHAIN[locale].map((s, i) => '<div class="step"><b>' + (i + 1) + "</b><span>" + s + "</span></div>").join("") + "</div>";
}
