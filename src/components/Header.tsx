"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export function Header() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 flex items-start justify-between bg-background/80 px-6 pt-8 pb-4 backdrop-blur-md md:px-10 lg:px-16"
    >
      <Link href="/" className="group">
        <p className="text-2xl font-semibold tracking-tight text-foreground">
          Leigh Brett,
        </p>
        <p className="text-2xl tracking-tight text-muted">
          Design Executive
        </p>
      </Link>

      <div className="flex items-center gap-6">
        {isAbout ? (
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
        ) : (
          <>
            <Link
              href="/work"
              className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-muted"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-muted"
            >
              About
            </Link>
          </>
        )}
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
