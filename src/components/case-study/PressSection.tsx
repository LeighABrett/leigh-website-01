"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import type { PressItem } from "@/data/case-studies";

export function PressSection({ items }: { items: PressItem[] }) {
  return (
    <AnimatedSection className="overflow-hidden py-20">
      <div className="flex flex-col gap-12">
        <h2 className="px-6 text-[26px] font-semibold tracking-tight text-foreground md:px-10 md:text-[34px] lg:px-16">
          Press
        </h2>
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 md:px-10 lg:px-16 scrollbar-hide">
          {items.map((item) => (
            <a
              key={item.headline}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-[300px] flex-shrink-0 flex-col gap-4 md:w-[362px]"
            >
              <div className="flex h-[200px] items-center justify-center rounded-2xl bg-foreground/[0.04] px-8 md:h-[240px]">
                <p className="text-lg font-semibold text-foreground/40">
                  {item.publication}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <h3 className="text-[16px] font-medium leading-[1.3] text-foreground transition-colors group-hover:text-muted">
                  {item.publication}
                </h3>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 flex-shrink-0 text-foreground"
                >
                  <polyline points="7 17 17 7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
              <p className="text-[16px] leading-[1.35] text-muted">
                {item.headline}
              </p>
            </a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
