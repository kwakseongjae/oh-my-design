"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ComponentVariant {
  id: string;
  label: string;
  preview: React.ReactNode;
}

export function ComponentModal({
  open,
  onClose,
  title,
  description,
  variants,
  selected,
  onSelect,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  variants: ComponentVariant[];
  selected: string;
  onSelect: (id: string) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 z-50 m-auto flex max-h-[85vh] max-w-3xl flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-4">
              <div>
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
              <button onClick={onClose} className="rounded-full p-2 hover:bg-muted transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Variants grid */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {variants.map((v) => {
                  const isActive = selected === v.id;
                  return (
                    <motion.button
                      key={v.id}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onSelect(v.id)}
                      className={`group relative flex flex-col overflow-hidden rounded-xl border-2 text-left transition-all ${
                        isActive
                          ? "border-foreground shadow-md"
                          : "border-border/50 hover:border-border dark:border-border"
                      }`}
                    >
                      <div className="relative w-full overflow-hidden bg-muted/30 dark:bg-muted/60 p-6">
                        {v.preview}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-foreground"
                          >
                            <Check className="h-3.5 w-3.5 text-background" />
                          </motion.div>
                        )}
                      </div>
                      <div className="border-t p-3">
                        <div className="text-sm font-medium">{v.label}</div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t px-6 py-4 flex justify-end">
              <Button onClick={onClose}>Done</Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
