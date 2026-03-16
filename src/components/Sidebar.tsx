"use client";

import { AnimatedDiv } from "./AnimatedSection";

export function Sidebar() {
  return (
    <div className="flex flex-col gap-6">
      <AnimatedDiv delay={0.1}>
        <p className="text-[15px] leading-[1.35] text-muted">
          Leigh Brett is a design executive with deep experience leading product
          design, UX and design systems for large-scale digital platforms. He has
          spent his career building high-performing design teams and delivering
          products used by millions of customers and enterprise users.
        </p>
      </AnimatedDiv>

      <AnimatedDiv delay={0.2}>
        <div className="flex flex-col">
          <div className="border-t-[0.5px] border-border" />
          <a
            href="mailto:leigh.brett@icloud.com"
            className="flex items-center justify-between py-3 text-xs font-semibold text-foreground transition-colors hover:text-muted"
          >
            Get in touch
            <span className="text-muted transition-colors group-hover:text-foreground">↗</span>
          </a>
          <div className="border-t-[0.5px] border-border" />
          <a
            href="https://www.linkedin.com/in/leighbrett"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-3 text-xs text-foreground transition-colors hover:text-muted"
          >
            LinkedIn
            <span className="text-muted transition-colors group-hover:text-foreground">↗</span>
          </a>
        </div>
      </AnimatedDiv>
    </div>
  );
}
