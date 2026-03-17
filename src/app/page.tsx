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
  "vibing",
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
      className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:brightness-110 active:scale-95 md:h-12 md:w-12 lg:h-[58px] lg:w-[58px]"
      style={{
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
      className={`${inter.className} relative flex min-h-dvh flex-col antialiased transition-colors duration-500 px-5 py-6 md:px-10 md:py-12 lg:px-[120px] lg:py-[85px]`}
      style={{
        backgroundColor: bg,
        color: fg,
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
          className="h-10 w-auto md:h-14 lg:h-[80px]"
          priority
        />

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="https://www.linkedin.com/in/leighbrett"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 min-w-[100px] items-center justify-center rounded-[60px] bg-[#ee3800] text-[14px] font-medium tracking-tight text-white transition-all hover:brightness-110 active:scale-95 md:h-12 md:min-w-[140px] md:text-[18px] lg:h-[58px] lg:min-w-[182px] lg:text-[24px]"
            style={{ letterSpacing: "-0.04em" }}
          >
            LinkedIn
          </a>
          <LandingThemeToggle />
        </div>
      </motion.nav>

      {/* Hero — heading + subtitle grouped together */}
      <div className="flex flex-1 flex-col justify-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[11vw] font-medium leading-[1.05] tracking-[-0.06em] md:text-[6.5vw] lg:text-[6.94vw]"
            style={{ maxFontSize: "100px" } as React.CSSProperties}
          >
            <span className="md:hidden">
              Hi, I&rsquo;m Leigh. I design products, build teams, and define strategy for companies that want to move fast.
            </span>
            <span className="hidden md:inline" style={{ fontSize: "min(6.94vw, 100px)" }}>
              Hi, I&rsquo;m Leigh. I design products, build teams, and define strategy for companies that want to move fast.
            </span>
          </motion.h1>

          {/* Subtitle with rotating verb — fixed height so line wrapping doesn't shift heading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative mt-5 h-[3em] text-[5vw] font-normal leading-[1.25] tracking-[-0.025em] md:mt-8 md:h-[2em] md:text-[2.5vw] lg:mt-16 lg:text-[2.71vw]"
          >
            I&rsquo;m busy{" "}
            <RotatingVerb />{" "}
            something new with AI, so come back soon
          </motion.p>
        </div>
      </div>
    </div>
  );
}
