"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import { event } from "@/lib/gtag";
import {
  DOC_HTML_LANG,
  DOC_LOCALES,
  DOC_LOCALE_LABELS,
  docsHref,
  isDocsLocale,
  type DocsLocale,
  type DocsPage,
} from "@/lib/docs/locales";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export function LanguageSwitcher({
  locale,
  page,
  label,
}: {
  locale: DocsLocale;
  page: DocsPage;
  label: string;
}) {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = DOC_HTML_LANG[locale];

    return () => {
      document.documentElement.lang = "en";
    };
  }, [locale]);

  return (
    <Select
      modal={false}
      value={locale}
      onValueChange={(nextLocale) => {
        if (!nextLocale || !isDocsLocale(nextLocale) || nextLocale === locale) return;
        document.documentElement.lang = DOC_HTML_LANG[nextLocale];
        event("cli_locale_change", { from: locale, to: nextLocale, page });
        router.push(docsHref(nextLocale, page), { scroll: false });
      }}
    >
      <SelectTrigger
        aria-label={label}
        className="h-9 min-w-36 gap-2 border-border/70 bg-background px-3 text-xs font-medium text-foreground shadow-none hover:border-foreground/20 hover:bg-muted/60 sm:min-w-40"
      >
        <span className="flex min-w-0 flex-1 items-center gap-2 text-left">
          <Languages className="size-4 shrink-0 text-primary" aria-hidden="true" />
          <span lang={DOC_HTML_LANG[locale]} className="truncate">
            {DOC_LOCALE_LABELS[locale]}
          </span>
        </span>
      </SelectTrigger>
      <SelectContent
        align="end"
        alignItemWithTrigger={false}
        positionMethod="fixed"
        className="min-w-52 rounded-xl p-1.5 shadow-none"
      >
        {DOC_LOCALES.map((item) => (
          <SelectItem
            key={item}
            value={item}
            className={`min-h-10 rounded-lg px-2.5 py-2 text-xs ${
              item === locale ? "bg-primary/10 font-medium text-primary" : "text-foreground/80"
            }`}
          >
            <span lang={DOC_HTML_LANG[item]}>{DOC_LOCALE_LABELS[item]}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
