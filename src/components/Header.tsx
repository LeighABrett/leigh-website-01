"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export function Header({ showBack }: { showBack?: boolean }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-start justify-between px-6 pt-8 pb-4 md:px-10 lg:px-16"
    >
      <Link href="/" className="group">
        <p className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
          Leigh Brett,
        </p>
        <p className="text-lg tracking-tight text-muted md:text-xl">
          Design Executive
        </p>
      </Link>

      <div className="flex items-center gap-6">
        <ThemeToggle />
        {showBack ? (
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-muted"
          >
            Back
          </Link>
        ) : (
          <Link
            href="/about"
            className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-muted"
          >
            About
          </Link>
        )}
      </div>
    </motion.header>
  );
}
