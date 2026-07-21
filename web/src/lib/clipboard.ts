export type ClipboardWriter = (text: string) => Promise<void>;

export async function runCopyAttempt({
  text,
  writeText,
  fallback,
  onSuccess,
}: {
  text: string;
  writeText?: ClipboardWriter;
  fallback: () => boolean;
  onSuccess?: () => void;
}): Promise<boolean> {
  let copied = false;

  if (writeText) {
    try {
      await writeText(text);
      copied = true;
    } catch {
      // Browser permissions can reject the async API while the original click
      // still permits a synchronous selection fallback.
    }
  }

  if (!copied) {
    try {
      copied = fallback();
    } catch {
      copied = false;
    }
  }

  if (copied && onSuccess) {
    try {
      onSuccess();
    } catch {
      // Telemetry must never turn a completed copy into a visible failure.
    }
  }

  return copied;
}

export function copyTextWithTextarea(
  text: string,
  restoreTarget: Pick<HTMLElement, "focus"> | null = null,
  clipboardDocument: Pick<Document, "body" | "createElement" | "execCommand"> = document,
): boolean {
  const textarea = clipboardDocument.createElement("textarea");
  let appended = false;

  try {
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";
    clipboardDocument.body.appendChild(textarea);
    appended = true;
    textarea.select();
    return clipboardDocument.execCommand("copy");
  } catch {
    return false;
  } finally {
    if (appended) textarea.remove();
    restoreTarget?.focus({ preventScroll: true });
  }
}

export async function copyText(
  text: string,
  options: {
    restoreTarget?: Pick<HTMLElement, "focus"> | null;
    onSuccess?: () => void;
  } = {},
): Promise<boolean> {
  const canUseNavigator = typeof navigator !== "undefined";
  const canUseDocument = typeof document !== "undefined";

  return runCopyAttempt({
    text,
    writeText: canUseNavigator && navigator.clipboard?.writeText
      ? (value) => navigator.clipboard.writeText(value)
      : undefined,
    fallback: () => canUseDocument
      ? copyTextWithTextarea(text, options.restoreTarget ?? null)
      : false,
    onSuccess: options.onSuccess,
  });
}
