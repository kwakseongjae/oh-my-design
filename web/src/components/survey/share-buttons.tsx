"use client";

import { useState, useEffect } from "react";
import { Check, Link2, MoreHorizontal } from "lucide-react";
import { event } from "@/lib/gtag";

/**
 * Region-aware share button row.
 *
 * - KR: KakaoTalk, X, Copy, Download (img)
 * - Global: X, WhatsApp, LinkedIn, Copy, Download
 * - Mobile: 3 primary + native share as "More"
 */

interface ShareButtonsProps {
  typeCode: string;
  typeName: string;
  tagline: string;
}

function detectLocale(): "kr" | "global" {
  if (typeof window === "undefined") return "global";
  const host = window.location.hostname;
  if (host.endsWith(".kr") || host.includes("korea")) return "kr";
  const lang = navigator.language || "";
  if (lang.startsWith("ko")) return "kr";
  return "global";
}

export function ShareButtons({ typeCode, typeName, tagline }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [locale, setLocale] = useState<"kr" | "global">("global");
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    setLocale(detectLocale());
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/result/${typeCode}`
      : `https://oh-my-design.kr/result/${typeCode}`;

  const shareText =
    locale === "kr"
      ? `내 디자인 타입: ${typeName} — "${tagline}"\n당신의 타입은?`
      : `My design type: ${typeName} — "${tagline}"\nWhat's yours?`;

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);
  const encodedTextWithUrl = encodeURIComponent(`${shareText}\n${shareUrl}`);

  /* ─── Share handlers ─────────────────────────────────── */

  const track = (method: string) => event("curation_share", { method, type_code: typeCode });

  const handleCopy = async () => {
    track("copy_link");
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const openX = () => {
    track("twitter");
    window.open(
      `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}&hashtags=OhMyDesign,DesignType`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const openWhatsApp = () => {
    track("whatsapp");
    window.open(`https://wa.me/?text=${encodedTextWithUrl}`, "_blank", "noopener,noreferrer");
  };

  const openLinkedIn = () => {
    track("linkedin");
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const openThreads = () => {
    track("threads");
    window.open(`https://www.threads.net/intent/post?text=${encodedTextWithUrl}`, "_blank", "noopener,noreferrer");
  };

  const openTelegram = () => {
    track("telegram");
    window.open(
      `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const openKakao = () => {
    track("kakao");
    // Kakao requires SDK; fallback to copy + alert for now
    // TODO: integrate Kakao JavaScript SDK with NEXT_PUBLIC_KAKAO_JS_KEY
    handleCopy();
  };

  const openNativeShare = async () => {
    track("web_share_native");
    if (navigator.share) {
      try {
        await navigator.share({ title: `My Design Type: ${typeName}`, text: shareText, url: shareUrl });
      } catch {
        /* user cancelled */
      }
    }
  };

  /* ─── Channel definitions ────────────────────────────── */

  type Channel = {
    id: string;
    label: string;
    color: string;
    onClick: () => void;
    icon: React.ReactNode;
  };

  const channels: Record<string, Channel> = {
    kakao: {
      id: "kakao",
      label: "KakaoTalk",
      color: "#FEE500",
      onClick: openKakao,
      icon: (
        <svg viewBox="0 0 24 24" fill="#191919" className="h-5 w-5">
          <path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.8 6.7-.2.7-.7 2.7-.8 3.1-.1.5.2.5.4.4.2-.1 2.7-1.8 3.8-2.5.6.1 1.2.1 1.8.1 5.5 0 10-3.6 10-8S17.5 3 12 3z" />
        </svg>
      ),
    },
    x: {
      id: "x",
      label: "X",
      color: "#000000",
      onClick: openX,
      icon: (
        <svg viewBox="0 0 24 24" fill="#ffffff" className="h-4 w-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    whatsapp: {
      id: "whatsapp",
      label: "WhatsApp",
      color: "#25D366",
      onClick: openWhatsApp,
      icon: (
        <svg viewBox="0 0 24 24" fill="#ffffff" className="h-5 w-5">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.3 1.2 4.7L2 22l5.4-1.4c1.4.8 3 1.2 4.6 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
        </svg>
      ),
    },
    linkedin: {
      id: "linkedin",
      label: "LinkedIn",
      color: "#0A66C2",
      onClick: openLinkedIn,
      icon: (
        <svg viewBox="0 0 24 24" fill="#ffffff" className="h-4 w-4">
          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8 17v-7H5.5v7H8zm-1.25-8.27a1.45 1.45 0 100-2.9 1.45 1.45 0 000 2.9zM18.5 17v-3.8c0-2.3-1.22-3.36-2.87-3.36-1.33 0-1.92.73-2.25 1.25v-1.09H11v7h2.38v-3.92c0-1.04.4-1.7 1.33-1.7.87 0 1.3.6 1.3 1.7V17h2.5z" />
        </svg>
      ),
    },
    threads: {
      id: "threads",
      label: "Threads",
      color: "#000000",
      onClick: openThreads,
      icon: (
        <svg viewBox="0 0 24 24" fill="#ffffff" className="h-4 w-4">
          <path d="M17.8 11.2c-.1 0-.2 0-.2-.1-.1-1-.4-1.7-.9-2.2-.7-.7-1.8-1.1-3.2-1.1h-.1c-1.7 0-3.1.7-3.8 1.9l1.4.9c.5-.8 1.4-1.1 2.5-1 .8 0 1.4.2 1.8.7.3.3.5.7.6 1.3-.7-.1-1.4-.2-2.2-.2-2.2.1-3.6 1.4-3.5 3.1.1.9.5 1.6 1.3 2 .7.4 1.5.6 2.4.5 1.3-.1 2.2-.6 2.9-1.5.5-.7.8-1.5.9-2.6.5.3.9.7 1.1 1.2.4.8.4 2.2-.7 3.3-.9.9-2 1.4-3.6 1.4-1.8 0-3.2-.6-4.1-1.8C8.9 16 8.5 14.4 8.5 12c0-2.4.4-4 1.3-5.2 1-1.2 2.3-1.8 4.2-1.8 1.7 0 3 .5 3.9 1.5.7.8 1.1 1.8 1.2 3l1.5-.1c-.1-1.5-.6-2.9-1.6-4-1.2-1.3-2.9-2-5-2h-.1C11 3.5 9.4 4.2 8.2 5.5c-1.3 1.5-1.9 3.6-1.9 6.5s.7 5 2 6.5c1.3 1.5 3.1 2.2 5.4 2.2 1.9 0 3.4-.5 4.6-1.8 1.5-1.5 1.5-3.5.9-4.8-.4-1-1.3-1.8-2.4-2.3l-1 .4z" />
        </svg>
      ),
    },
    telegram: {
      id: "telegram",
      label: "Telegram",
      color: "#26A5E4",
      onClick: openTelegram,
      icon: (
        <svg viewBox="0 0 24 24" fill="#ffffff" className="h-4 w-4">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.6 7L14.7 17c-.1.6-.5.7-1 .4l-2.8-2-1.3 1.3c-.1.1-.3.3-.5.3l.2-2.6 4.9-4.4c.2-.2-.1-.3-.3-.1l-6 3.8-2.6-.8c-.6-.2-.6-.6.1-.8l10.2-3.9c.5-.2.9.1.7.8z" />
        </svg>
      ),
    },
    copy: {
      id: "copy",
      label: copied ? "Copied" : "Copy link",
      color: "transparent",
      onClick: handleCopy,
      icon: copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />,
    },
  };

  // Primary channels by locale
  const primaryIds = locale === "kr"
    ? ["kakao", "x", "copy"]
    : ["x", "whatsapp", "copy"];

  // Secondary channels shown in "More" popover
  const secondaryIds = locale === "kr"
    ? ["whatsapp", "linkedin", "threads", "telegram"]
    : ["linkedin", "threads", "telegram", "kakao"];

  return (
    <div className="flex items-center gap-2">
      {primaryIds.map((id) => {
        const c = channels[id];
        const isCopy = c.id === "copy";
        return (
          <button
            key={c.id}
            onClick={c.onClick}
            aria-label={c.label}
            className={`group flex items-center justify-center rounded-full transition-all active:scale-[0.92] ${
              isCopy
                ? "h-10 w-10 sm:h-10 sm:w-auto sm:px-4 sm:gap-1.5 text-xs font-medium bg-foreground/5 ring-1 ring-inset ring-foreground/10 hover:bg-foreground/10 hover:ring-foreground/20 dark:bg-white/[0.06] dark:ring-white/10 dark:hover:bg-white/[0.10] dark:hover:ring-white/20"
                : "h-10 w-10 hover:scale-105"
            } ${copied && isCopy ? "bg-primary text-primary-foreground ring-0" : ""}`}
            style={!isCopy ? { backgroundColor: c.color } : undefined}
          >
            {c.icon}
            {isCopy && <span className="hidden sm:inline">{c.label}</span>}
          </button>
        );
      })}

      {/* More menu — opens popover or native share */}
      <MorePopover
        channels={secondaryIds.map((id) => channels[id]).filter(Boolean)}
        canNativeShare={canNativeShare}
        onNativeShare={openNativeShare}
      />
    </div>
  );
}

/* ─── More popover ──────────────────────────────────────── */

function MorePopover({
  channels,
  canNativeShare,
  onNativeShare,
}: {
  channels: { id: string; label: string; color: string; onClick: () => void; icon: React.ReactNode }[];
  canNativeShare: boolean;
  onNativeShare: () => void;
}) {
  const [open, setOpen] = useState(false);

  // On mobile with native share, just trigger native share on tap
  useEffect(() => {
    if (open) {
      const close = () => setOpen(false);
      document.addEventListener("click", close);
      return () => document.removeEventListener("click", close);
    }
  }, [open]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (canNativeShare) {
      onNativeShare();
    } else {
      setOpen((o) => !o);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        aria-label="More sharing options"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 ring-1 ring-inset ring-foreground/10 transition-all hover:bg-foreground/10 hover:ring-foreground/20 active:scale-[0.92] dark:bg-white/[0.06] dark:ring-white/10 dark:hover:bg-white/[0.10] dark:hover:ring-white/20"
      >
        <MoreHorizontal className="h-4 w-4" />
      </button>
      {open && !canNativeShare && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-border bg-popover shadow-lg z-10 overflow-hidden"
        >
          {channels.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                c.onClick();
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-muted"
            >
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full flex-shrink-0"
                style={{ backgroundColor: c.color }}
              >
                {c.icon}
              </span>
              {c.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
