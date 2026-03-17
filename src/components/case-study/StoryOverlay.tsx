"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { CreditGroup } from "@/data/case-studies";

export function StoryOverlay({
  isOpen,
  onClose,
  lede,
  body,
  credits,
}: {
  isOpen: boolean;
  onClose: () => void;
  lede: string;
  body: string[];
  credits: CreditGroup[];
}) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="story-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/40"
            onClick={onClose}
          />
          <motion.div
            key="story-overlay"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-x-0 bottom-0 z-[101] max-h-[90vh] overflow-y-auto rounded-t-3xl bg-background"
            role="dialog"
            aria-modal="true"
            aria-label="Full story"
          >
            <div className="sticky top-0 z-[102] flex justify-end p-6 md:p-8">
              <button
                onClick={onClose}
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-foreground/5"
                aria-label="Close story"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="mx-auto max-w-3xl px-6 pb-20 md:px-10">
              <p className="text-[26px] font-semibold leading-[1.3] tracking-tight text-foreground md:text-[34px]">
                {lede}
              </p>

              <div className="mt-10 flex flex-col gap-6">
                {body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[16px] leading-[1.6] text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="my-12 border-t border-border" />

              <div className="grid gap-10 md:grid-cols-2">
                {credits.map((group) => (
                  <dl key={group.label}>
                    <dt className="mb-2 text-xs font-semibold tracking-tight text-foreground">
                      {group.label}
                    </dt>
                    {group.members.map((member) => (
                      <dd
                        key={member}
                        className="text-[15px] leading-[1.5] text-muted"
                      >
                        {member}
                      </dd>
                    ))}
                  </dl>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
