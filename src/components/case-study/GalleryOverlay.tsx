"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlaceholderImage } from "./PlaceholderImage";
import type { CaseStudyImage } from "@/data/case-studies";

export function GalleryOverlay({
  isOpen,
  onClose,
  images,
}: {
  isOpen: boolean;
  onClose: () => void;
  images: CaseStudyImage[];
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
            key="gallery-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/40"
            onClick={onClose}
          />
          <motion.div
            key="gallery-overlay"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-x-0 bottom-0 z-[101] max-h-[90vh] overflow-y-auto rounded-t-3xl bg-background"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
          >
            <div className="sticky top-0 z-[102] flex justify-end p-6 md:p-8">
              <button
                onClick={onClose}
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-foreground/5"
                aria-label="Close gallery"
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

            <div className="grid grid-cols-2 gap-6 px-6 pb-20 md:px-10 lg:px-16">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={i % 3 === 0 ? "col-span-2" : "col-span-1"}
                >
                  <PlaceholderImage
                    aspectRatio={i % 3 === 0 ? "16/9" : img.aspectRatio}
                    alt={img.alt}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
