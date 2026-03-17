"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const VERBS = [
  "designing",
  "prototyping",
  "vibe coding",
  "iterating",
  "crafting",
  "building",
  "refining",
  "shipping",
];

function RotatingVerb() {
  const [index, setIndex] = useState(0);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % VERBS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.offsetWidth);
    }
  }, [index]);

  return (
    <>
      <span
        ref={measureRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 whitespace-nowrap opacity-0"
        style={{ font: "inherit" }}
      >
        {VERBS[index]}
      </span>

      <motion.span
        className="relative inline-flex overflow-hidden align-bottom"
        animate={{ width: width || "auto" }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ height: "1.15em" }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={VERBS[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute bottom-0 left-0 whitespace-nowrap text-[#ee3800]"
          >
            {VERBS[index]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
}

function LandingThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-full transition-all hover:brightness-110 active:scale-95"
      style={{
        height: "clamp(36px, 4.03vw, 58px)",
        width: "clamp(36px, 4.03vw, 58px)",
        backgroundColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)",
      }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </motion.div>
    </button>
  );
}

export default function LandingPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0a0a0a" : "#ffffff";
  const fg = isDark ? "#ffffff" : "#0a0a0a";
  const logoSrc = isDark ? "/leigh-logo.svg" : "/leigh-logo-dark.svg";

  return (
    <div
      className={`${inter.className} relative flex min-h-dvh flex-col antialiased transition-colors duration-500`}
      style={{
        backgroundColor: bg,
        color: fg,
        padding: "clamp(24px, 5.9vw, 85px) clamp(24px, 8.33vw, 120px)",
      }}
    >
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center justify-between"
      >
        <Image
          src={logoSrc}
          alt="Leigh"
          width={152}
          height={63}
          className="w-auto"
          style={{ height: "clamp(48px, 5.5vw, 80px)" }}
          priority
        />

        <div className="flex items-center" style={{ gap: "clamp(8px, 1vw, 14px)" }}>
          <a
            href="https://www.linkedin.com/in/leighbrett"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-[60px] bg-[#ee3800] font-medium text-white transition-all hover:brightness-110 active:scale-95"
            style={{
              height: "clamp(36px, 4.03vw, 58px)",
              minWidth: "clamp(100px, 12.64vw, 182px)",
              fontSize: "clamp(13px, 1.67vw, 24px)",
              letterSpacing: "-0.04em",
            }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:leigh.brett@icloud.com"
            className="flex items-center justify-center rounded-[60px] bg-[#ee3800] font-medium text-white transition-all hover:brightness-110 active:scale-95"
            style={{
              height: "clamp(36px, 4.03vw, 58px)",
              minWidth: "clamp(100px, 12.64vw, 182px)",
              fontSize: "clamp(13px, 1.67vw, 24px)",
              letterSpacing: "-0.04em",
            }}
          >
            Email
          </a>
          <LandingThemeToggle />
        </div>
      </motion.nav>

      {/* Hero — heading + subtitle grouped together */}
      <div className="flex flex-1 flex-col justify-center">
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(32px, 4.4vw, 63px)" }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-medium"
            style={{
              fontSize: "clamp(28px, 6.94vw, 100px)",
              lineHeight: "1.05",
              letterSpacing: "-0.06em",
            }}
          >
            Hi, I&rsquo;m Leigh. I design products, build teams, and define
            strategy for companies that want to move fast.
          </motion.h1>

          {/* Subtitle with rotating verb */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative font-normal"
            style={{
              fontSize: "clamp(16px, 2.71vw, 39px)",
              letterSpacing: "-0.025em",
              lineHeight: "1.2",
            }}
          >
            I&rsquo;m busy{" "}
            <RotatingVerb />{" "}
            something new with AI, so please come back soon
          </motion.p>
        </div>
      </div>
    </div>
  );
}
