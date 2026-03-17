"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import type { ImpactCard, ArrowDirection } from "@/data/case-studies";

function ArrowIcon({ direction }: { direction: ArrowDirection }) {
  const rotation: Record<ArrowDirection, string> = {
    right: "0",
    "up-right": "-45",
    up: "-90",
    left: "180",
    down: "90",
  };

  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-foreground"
      style={{ transform: `rotate(${rotation[direction]}deg)` }}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ImpactSection({ items }: { items: ImpactCard[] }) {
  return (
    <AnimatedSection className="overflow-hidden py-20">
      <div className="flex flex-col gap-12">
        <h2 className="px-6 text-[26px] font-semibold tracking-tight text-foreground md:px-10 md:text-[34px] lg:px-16">
          Impact
        </h2>
        <div className="-mx-0 flex gap-4 overflow-x-auto px-6 pb-4 md:px-10 lg:px-16 scrollbar-hide">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex w-[300px] flex-shrink-0 flex-col rounded-2xl bg-foreground/[0.04] p-8 pb-12 md:w-[362px]"
              style={{ minHeight: "520px" }}
            >
              <div className="flex flex-1 items-start">
                {item.arrow && <ArrowIcon direction={item.arrow} />}
              </div>
              <div>
                <p className="text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                  {item.metric}
                </p>
                <h3 className="mt-4 text-[16px] leading-[1.3] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-[16px] leading-[1.35] text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
