/**
 * The lines a page says once screens are published (lib/screens/public.server.ts screensPublished): whose screens
 * they are and when they were shot, how to ask for one to be taken down, and that people were hidden on a screen.
 * Shared by the /screens gallery (components/screens/copy.ts) and the item page's Screens tab
 * (brand-a/copy/item.ts). English plain; Korean 합니다체.
 */

export type NoticeScope = "gallery" | "service";

export interface ScreensNoticeCopy {
  /** Whose the screens are, then when (and how) they were shot when that is known. */
  rights: (scope: NoticeScope, shot: { from: string; to: string } | null, signedOut: boolean) => string;
  /** The takedown sentence around its links: before the form link, the form link's text, and the rest. */
  takedown: (email: boolean) => { before: string; form: string; between: string; after: string };
  /** Under a tile's title and in the large view of a screen with people hidden. */
  masked: string;
}

const koDate = (d: string) => {
  const [y, m, day] = d.split("-").map(Number);
  return `${y}년 ${m}월 ${day}일`;
};

/** "2026년 11월 21일~22일" within one month, the whole second date otherwise. */
function koRange(from: string, to: string): string {
  const [fy, fm] = from.split("-");
  const [ty, tm, td] = to.split("-").map(Number);
  return fy === String(ty) && Number(fm) === tm ? `${koDate(from)}~${td}일` : `${koDate(from)}~${koDate(to)}`;
}

export const SCREENS_NOTICE: Record<"en" | "ko", ScreensNoticeCopy> = {
  en: {
    rights: (scope, shot, signedOut) => {
      const whose = scope === "gallery" ? "Each screen belongs to its company." : "These screens belong to the company.";
      if (!shot) return whose;
      const when = shot.from === shot.to ? `on ${shot.from}` : `between ${shot.from} and ${shot.to}`;
      const who = scope === "gallery" ? "All were" : "They were";
      return `${whose} ${who} shot ${signedOut ? "signed out " : ""}${when}.`;
    },
    takedown: (email) => ({
      before: "To ask for a screen to be taken down, use the ",
      form: "request form on GitHub",
      between: email ? " or write to " : "",
      after: ".",
    }),
    masked: "Nicknames and uploaded photos are hidden",
  },
  ko: {
    rights: (scope, shot, signedOut) => {
      const whose = scope === "gallery" ? "화면의 권리는 각 회사에 있습니다." : "이 화면들의 권리는 이 회사에 있습니다.";
      if (!shot) return whose;
      const when = shot.from === shot.to ? koDate(shot.from) : koRange(shot.from, shot.to);
      const all = scope === "gallery" ? "모두 " : "";
      return `${whose} ${all}${signedOut ? "로그아웃 상태로 " : ""}${when}에 찍었습니다.`;
    },
    takedown: (email) => ({
      before: "화면을 내려 달라는 요청은 ",
      form: "GitHub 요청 양식",
      between: email ? "이나 " : "",
      after: email ? "로 받습니다." : "으로 받습니다.",
    }),
    masked: "닉네임과 올린 사진을 가렸습니다",
  },
};
