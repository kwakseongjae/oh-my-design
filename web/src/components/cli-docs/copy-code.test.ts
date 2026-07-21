import { describe, expect, it, vi } from "vitest";
import {
  copyStatusMessage,
  copyTextWithTextarea,
  runCopyAttempt,
} from "./copy-code";

describe("copyStatusMessage", () => {
  it("announces only the localized outcome, never the copied payload", () => {
    expect(copyStatusMessage("copied", "Copied", "Copy failed")).toBe("Copied");
    expect(copyStatusMessage("failed", "Copied", "Copy failed")).toBe("Copy failed");
    expect(copyStatusMessage("idle", "Copied", "Copy failed")).toBe("");
    expect(copyStatusMessage("copying", "Copied", "Copy failed")).toBe("");
  });
});

describe("runCopyAttempt", () => {
  it("uses the Clipboard API once and reports one successful outcome", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    const fallback = vi.fn(() => true);
    const onSuccess = vi.fn();

    await expect(runCopyAttempt({ text: "hello", writeText, fallback, onSuccess })).resolves.toBe(true);
    expect(writeText).toHaveBeenCalledOnce();
    expect(fallback).not.toHaveBeenCalled();
    expect(onSuccess).toHaveBeenCalledOnce();
  });

  it("falls back after an API rejection and tracks only the successful result", async () => {
    const writeText = vi.fn().mockRejectedValue(new Error("denied"));
    const fallback = vi.fn(() => true);
    const onSuccess = vi.fn();

    await expect(runCopyAttempt({ text: "hello", writeText, fallback, onSuccess })).resolves.toBe(true);
    expect(fallback).toHaveBeenCalledOnce();
    expect(onSuccess).toHaveBeenCalledOnce();
  });

  it("waits for a slow API resolution without starting a second copy attempt", async () => {
    let resolveWrite!: () => void;
    const writeText = vi.fn(() => new Promise<void>((resolve) => { resolveWrite = resolve; }));
    const fallback = vi.fn(() => true);
    const onSuccess = vi.fn();
    const result = runCopyAttempt({ text: "hello", writeText, fallback, onSuccess });

    await Promise.resolve();
    expect(fallback).not.toHaveBeenCalled();
    expect(onSuccess).not.toHaveBeenCalled();
    resolveWrite();

    await expect(result).resolves.toBe(true);
    expect(fallback).not.toHaveBeenCalled();
    expect(onSuccess).toHaveBeenCalledOnce();
  });

  it("uses the fallback when the Clipboard API is missing", async () => {
    const fallback = vi.fn(() => true);
    const onSuccess = vi.fn();

    await expect(runCopyAttempt({ text: "hello", fallback, onSuccess })).resolves.toBe(true);
    expect(fallback).toHaveBeenCalledOnce();
    expect(onSuccess).toHaveBeenCalledOnce();
  });

  it("turns a throwing fallback into one failure without analytics", async () => {
    const onSuccess = vi.fn();
    await expect(runCopyAttempt({
      text: "hello",
      fallback: () => { throw new Error("blocked"); },
      onSuccess,
    })).resolves.toBe(false);
    expect(onSuccess).not.toHaveBeenCalled();
  });
});

describe("copyTextWithTextarea", () => {
  it("removes its temporary node and restores button focus even when copy throws", () => {
    const textarea = {
      value: "",
      style: {} as CSSStyleDeclaration,
      setAttribute: vi.fn(),
      select: vi.fn(),
      remove: vi.fn(),
    };
    const clipboardDocument = {
      createElement: vi.fn(() => textarea),
      body: { appendChild: vi.fn() },
      execCommand: vi.fn(() => { throw new Error("blocked"); }),
    };
    const restoreTarget = { focus: vi.fn() };

    expect(copyTextWithTextarea(
      "hello",
      restoreTarget,
      clipboardDocument as unknown as Pick<Document, "body" | "createElement" | "execCommand">,
    )).toBe(false);
    expect(textarea.remove).toHaveBeenCalledOnce();
    expect(restoreTarget.focus).toHaveBeenCalledWith({ preventScroll: true });
  });
});
