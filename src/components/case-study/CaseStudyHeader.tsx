"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";

export function CaseStudyHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 flex items-center justify-between bg-background/80 px-6 py-6 backdrop-blur-md md:px-10 lg:px-16"
    >
      <Link
        href="/"
        className="flex items-center gap-1.5 text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-muted"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back
      </Link>

      <ThemeToggle />
    </motion.header>
  );
}
