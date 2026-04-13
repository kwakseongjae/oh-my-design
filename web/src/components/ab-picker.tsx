"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export interface ABOption {
  id: string;
  label: string;
  description: string;
  preview: React.ReactNode;
}

export interface ABQuestion {
  id: string;
  title: string;
  subtitle: string;
  optionA: ABOption;
  optionB: ABOption;
}

export function ABPicker({
  question,
  selected,
  onSelect,
}: {
  question: ABQuestion;
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-base font-semibold">{question.title}</h3>
        <p className="text-sm text-muted-foreground">{question.subtitle}</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[question.optionA, question.optionB].map((opt) => {
          const isSelected = selected === opt.id;
          return (
            <motion.button
              key={opt.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(opt.id)}
              className={`group relative flex flex-col overflow-hidden rounded-xl border-2 text-left transition-all ${
                isSelected
                  ? "border-foreground shadow-lg"
                  : "border-border/50 hover:border-border dark:border-border"
              }`}
            >
              {/* Preview area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/30 dark:bg-muted/50">
                {opt.preview}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-foreground"
                  >
                    <Check className="h-3.5 w-3.5 text-background" />
                  </motion.div>
                )}
              </div>
              {/* Label */}
              <div className="p-3">
                <div className="text-sm font-medium">{opt.label}</div>
                <div className="text-xs text-muted-foreground">{opt.description}</div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
