"use client";

import { AnimatedDiv } from "./AnimatedSection";

export function Sidebar() {
  return (
    <div className="flex flex-col gap-6">
      <AnimatedDiv delay={0.1}>
        <p className="text-sm leading-relaxed text-muted">
          Leigh Brett is a design executive with deep experience leading product
          design, UX and design systems for large-scale digital platforms. He has
          spent his career building high-performing design teams and delivering
          products used by millions of customers and enterprise users.
        </p>
      </AnimatedDiv>

      <AnimatedDiv delay={0.2}>
        <div className="flex flex-col gap-3 border-t border-border pt-6">
          <a
            href="mailto:leigh.brett@gmail.com"
            className="flex items-center justify-between text-sm text-foreground transition-colors hover:text-muted"
          >
            leigh.brett@gmail.com
            <span className="text-muted">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/leighbrett"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-sm text-foreground transition-colors hover:text-muted"
          >
            LinkedIn
            <span className="text-muted">↗</span>
          </a>
        </div>
      </AnimatedDiv>
    </div>
  );
}
