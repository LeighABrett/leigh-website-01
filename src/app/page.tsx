"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/London",
      });
      setTime(formatted);
    }
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <span className="text-caption text-muted tabular-nums" style={{ fontVariantNumeric: "tabular-nums" }}>
      London, UK · {time}
    </span>
  );
}

function LandingThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex h-8 w-8 items-center justify-end text-muted transition-colors hover:text-accent"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <svg
            width="16"
            height="16"
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
            width="16"
            height="16"
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
  return (
    <div className="page-padding relative min-h-dvh bg-background-surface text-foreground antialiased transition-colors duration-500">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center justify-between mb-[var(--space-lg)]"
      >
        <span className="text-secondary font-bold tracking-tight">
          Leigh Brett
        </span>

        <div className="flex items-center gap-1.5">
          <LiveClock />
          <LandingThemeToggle />
        </div>
      </motion.nav>

      {/* Content */}
      <div style={{ maxWidth: "var(--content-max-width)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-content-heading">
            <span className="text-semi">Products get complicated. I make them simple.</span> Design leadership for platforms, services, and teams at scale.
          </p>

          <hr className="divider" />

          <p className="text-content mb-[var(--space-md)]">
            Currently working independently with enterprise and consumer platforms on <span className="text-semi">raising design quality</span>, <span className="text-semi">experience architecture</span>, and <span className="text-semi">AI integration</span>.
          </p>

          <p className="text-content mb-[var(--space-md)]">
            Previously, five years as <span className="text-semi">Senior Director of Design at Walmart</span>. Built the Marketplace design organisation from <span className="text-semi">0 to 60</span>, grew the seller platform from <span className="text-semi">$4B to $10B</span>, and created a pattern library saving <span className="text-semi">$18M a year</span>.
          </p>

          <p className="text-content mb-[var(--space-md)]">
            Before that, <span className="text-semi">co-founded a consultancy</span> leading global platform design for Sony Pictures, Ericsson, AT&amp;T, WarnerMedia, and DirecTV.
          </p>

          <p className="text-content mb-[var(--space-md)]">
            <span className="text-semi">Over 20+ years</span>, I&apos;ve also worked with Sky, Disney, BBC, Universal Music, Microsoft, Barclays, Johnson &amp; Johnson, and AOL.
          </p>

          <div className="flex items-center gap-6 pt-[var(--space-lg)]">
            <a
              href="https://www.linkedin.com/in/leighbrett"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="mailto:leigh.brett@icloud.com"
              className="text-secondary underline transition-colors hover:text-accent"
            >
              Contact
            </a>
            <a
              href="https://www.themessymiddle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline transition-colors hover:text-accent"
            >
              Reading
            </a>
            <a
              href="https://open.spotify.com/artist/6rqXNMsClfcGgr3LggF7xL?si=BzisOJbnSeCzfSGnPn8njQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline transition-colors hover:text-accent"
            >
              Listening
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
