"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import s from "./hangul.module.css";

/** A shell command that wraps at its spaces instead of scrolling, with a copy button. */
export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={s.command}>
      <pre className={`${s.code} ${s.commandCode} ${s.mono}`}>
        {/* Wrap only at the spaces: each token stays whole. */}
        <code>
          {command.split(" ").map((part, i) => (
            <span key={i}>
              {i > 0 ? " " : null}
              <span className={s.token}>{part}</span>
            </span>
          ))}
        </code>
      </pre>
      <button type="button" onClick={copy} className={s.copyBtn}>
        {copied ? (
          <Check className="size-4" aria-hidden />
        ) : (
          <Copy className="size-4" aria-hidden />
        )}
        <span aria-live="polite">{copied ? "복사했습니다" : "복사"}</span>
      </button>
    </div>
  );
}
