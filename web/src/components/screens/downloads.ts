/**
 * Downloads of a service's screens (components/screens/service-screens.tsx): one screen, one type on one device, or
 * everything on both devices. What is downloadable is exactly what the page shows: the first-viewport stills (never
 * the small renditions, never a blocked or withheld screen, and in the published state there are no full pages),
 * fetched from the same URLs the page loads (/screens-img once published, /screens-local in a local preview; both on
 * this site, so fetch works). Zips are built in the browser with fflate, stored without compression (JPEGs do not
 * shrink), and every zip carries a README.txt in Korean and English.
 *
 * Names are ASCII and stable: <service>-<device>-<type>-<key>.jpg inside the zip (folders mobile/ and desktop/ in the
 * whole set), <service>-<type>-<device>.zip for one type and <service>-screens.zip for everything. The type is its slug
 * (lib/screens/screen-types.ts), the key is the walk's.
 */

import type { Device } from "@/lib/screens/model";
import { typeSlug } from "@/lib/screens/screen-types";
import { SCREENS_CONTACT_EMAIL, screenRemovalHref } from "@/lib/screens/contact";
import { koDate } from "./notice-copy";

export const screenFileName = (slug: string, device: Device, type: string, key: string): string =>
  `${slug}-${device}-${typeSlug(type)}-${key}.jpg`;

export const typeZipName = (slug: string, type: string, device: Device): string => `${slug}-${typeSlug(type)}-${device}.zip`;

export const allZipName = (slug: string): string => `${slug}-screens.zip`;

export interface ReadmeFacts {
  names: { en: string; ko: string };
  /** The service's screens pages, absolute. */
  urls: { en: string; ko: string };
  /** YYYY-MM-DD or null. */
  shot: string | null;
  signedOut: boolean;
  /** The files in this zip whose people (nicknames, uploaded photos) were hidden before the still was taken. */
  masked: string[];
  slug: string;
  email?: string;
}

/**
 * The README.txt every zip carries: whose the screens are, where and when they were shot, which had people hidden,
 * and how to ask for a takedown. Korean first, then English. Unknown means absent: no date line without a date, no
 * "signed out" unless the walk says so, no hidden-people line when no file in the zip had any.
 */
export function readmeText(f: ReadmeFacts, email: string = f.email ?? SCREENS_CONTACT_EMAIL): string {
  const takedown = screenRemovalHref(f.slug);
  const ko = [
    `${f.names.ko} 서비스 화면 (oh-my-design)`,
    "",
    `화면의 권리는 각 회사에 있습니다. 이 묶음에는 ${f.names.ko}의 화면이 들어 있습니다.`,
    `출처: ${f.urls.ko}`,
    f.shot || f.signedOut ? `찍은 때: ${[f.shot ? koDate(f.shot) : null, f.signedOut ? "로그아웃 상태" : null].filter(Boolean).join(", ")}` : null,
    f.masked.length ? `닉네임과 올린 사진을 가린 화면: ${f.masked.join(", ")}` : null,
    `화면을 내려 달라는 요청: ${takedown}${email ? ` 또는 ${email}` : ""}`,
  ];
  const en = [
    `${f.names.en} product screens (oh-my-design)`,
    "",
    `Each screen belongs to its company. This set holds screens of ${f.names.en}.`,
    `Source: ${f.urls.en}`,
    f.shot || f.signedOut ? `Shot: ${[f.shot, f.signedOut ? "signed out" : null].filter(Boolean).join(", ")}` : null,
    f.masked.length ? `Nicknames and uploaded photos hidden in: ${f.masked.join(", ")}` : null,
    `To ask for a screen to be taken down: ${takedown}${email ? ` or ${email}` : ""}`,
  ];
  return [...ko, "", "---", "", ...en].filter((l) => l !== null).join("\n") + "\n";
}

export interface DownloadItem {
  /** The still's URL on this site. */
  url: string;
  /** Its path inside the zip. */
  path: string;
  /** The screen's title, to name it when it cannot be fetched. */
  title: string;
}

/** Fetches every item, a few at a time, reporting progress; what fails is returned by name, the rest by path. */
export async function fetchItems(
  items: DownloadItem[],
  onProgress: (done: number) => void,
  fetcher: typeof fetch = fetch,
): Promise<{ files: Record<string, Uint8Array>; missing: DownloadItem[] }> {
  const files: Record<string, Uint8Array> = {};
  const missing: DownloadItem[] = [];
  let next = 0;
  let done = 0;
  const worker = async () => {
    while (next < items.length) {
      const item = items[next++];
      try {
        const res = await fetcher(item.url);
        if (!res.ok) throw new Error(String(res.status));
        files[item.path] = new Uint8Array(await res.arrayBuffer());
      } catch {
        missing.push(item);
      }
      onProgress(++done);
    }
  };
  await Promise.all(Array.from({ length: Math.min(4, items.length) }, worker));
  return { files, missing: items.filter((i) => missing.includes(i)) };
}

/** The zip's bytes: every file stored as it is, README.txt first. fflate is loaded only when someone downloads. */
export async function zipBytes(files: Record<string, Uint8Array>, readme: string): Promise<Uint8Array> {
  const { zipSync } = await import("fflate");
  return zipSync({ "README.txt": new TextEncoder().encode(readme), ...files }, { level: 0 });
}

/** Hands the bytes to the browser as a file. */
export function saveBytes(bytes: Uint8Array, name: string, type = "application/zip"): void {
  const url = URL.createObjectURL(new Blob([bytes as BlobPart], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
