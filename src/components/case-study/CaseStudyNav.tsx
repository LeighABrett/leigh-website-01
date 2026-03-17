"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyNav({
  prev,
  next,
}: {
  prev?: CaseStudy;
  next?: CaseStudy;
}) {
  return (
    <AnimatedSection className="border-t border-border px-6 py-20 md:px-10 lg:px-16">
      <div className="flex items-center justify-between">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="group flex items-center gap-6 transition-colors"
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground transition-transform group-hover:-translate-x-2"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <div className="hidden md:block">
              <p className="text-xs text-muted">Previous</p>
              <p className="text-lg font-semibold tracking-tight text-foreground">
                {prev.title}
              </p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center gap-6 text-right transition-colors"
          >
            <div className="hidden md:block">
              <p className="text-xs text-muted">Next</p>
              <p className="text-lg font-semibold tracking-tight text-foreground">
                {next.title}
              </p>
            </div>
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground transition-transform group-hover:translate-x-2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </AnimatedSection>
  );
}
