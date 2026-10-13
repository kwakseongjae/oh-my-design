"use client";

import { useState } from "react";

async function copyText(t: string) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(t);
  const ta = document.createElement("textarea");
  ta.value = t;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    if (!document.execCommand("copy")) throw new Error("copy failed");
  } finally {
    ta.remove();
  }
}

export function CopyButton({ text, labels }: { text: string; labels: { copy: string; copied: string; failed: string } }) {
  const [state, setState] = useState<"idle" | "ok" | "fail">("idle");
  const label = state === "ok" ? labels.copied : state === "fail" ? labels.failed : labels.copy;
  return (
    <button
      type="button"
      className={`sq-copy${state === "ok" ? " sq-ok" : ""}`}
      data-copy={text}
      onClick={() => {
        copyText(text).then(
          () => setState("ok"),
          () => setState("fail"),
        ).finally(() => setTimeout(() => setState("idle"), 1600));
      }}
    >
      <span aria-live="polite">{label}</span>
    </button>
  );
}
