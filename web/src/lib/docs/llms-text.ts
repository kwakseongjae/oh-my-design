import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { DocsLocale } from "./locales";

const LLMS_FILE_BY_LOCALE: Record<DocsLocale, string> = {
  en: "llms.txt",
  ko: "llms.ko.txt",
  ja: "llms.ja.txt",
  "zh-cn": "llms.zh-cn.txt",
  "zh-tw": "llms.zh-tw.txt",
};

export function docsLlmsText(locale: DocsLocale): string {
  return readFileSync(join(process.cwd(), "public", LLMS_FILE_BY_LOCALE[locale]), "utf8");
}
