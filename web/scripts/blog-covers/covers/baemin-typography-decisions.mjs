/**
 * Cover: the post's own example, set in the site's face (not Baemin's): the invitation title of the
 * "일요일 한 끼" meal-club screen above its information line, verbatim from the post
 * ("일요일 12:30 · 2인분 · 8,000원"), each labelled with its role. The post's point is that a title and
 * information take different type roles; no Baemin typeface or colour is drawn.
 */
export const slug = "baemin-typography-decisions";
export const titles = {
  ko: "배민의 글자를 DESIGN.md에 옮기기",
  en: "Baemin's typography, into DESIGN.md",
};

const COPY = {
  ko: { example: "일요일 한 끼", roleTitle: "제목", roleInfo: "정보" },
  en: { example: "Sunday Table", roleTitle: "Title", roleInfo: "Information" },
};

export const pictureCss = `
.spec{position:absolute;left:40px;right:40px;top:50%;transform:translateY(-50%);background:#ffffff;border-radius:20px;padding:40px 36px 44px;box-shadow:0 1px 2px rgba(20,20,60,.04),0 16px 40px -16px rgba(40,30,120,.16)}
.role{display:inline-flex;align-items:center;height:30px;padding:0 12px;border-radius:999px;background:#f6f6fe;box-shadow:inset 0 0 0 1px #d8d8ff;color:#6749e2;font-size:17px;font-weight:650}
.big{margin:14px 0 30px;font-size:78px;font-weight:800;line-height:1.1;letter-spacing:-0.03em;color:#13131a}
.rule{height:1px;background:#e5e6eb;margin:0 0 26px}
.info{margin-top:14px;font-size:27px;font-weight:600;line-height:1.3;color:#13131a;font-variant-numeric:tabular-nums;white-space:nowrap}
`;

export function picture(locale) {
  const c = COPY[locale];
  return '<div class="spec"><span class="role">' + c.roleTitle + '</span><p class="big">' + c.example + '</p><div class="rule"></div><span class="role">' + c.roleInfo + '</span><p class="info">일요일 12:30 · 2인분 · 8,000원</p></div>';
}
