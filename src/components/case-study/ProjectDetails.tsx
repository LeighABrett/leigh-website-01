"use client";

import { AnimatedSection, AnimatedDiv } from "@/components/AnimatedSection";
import { PillButton } from "./PillButton";
import type { CaseStudyMeta } from "@/data/case-studies";

export function ProjectDetails({
  metadata,
  storySummary,
  onOpenStory,
}: {
  metadata: CaseStudyMeta[];
  storySummary: string;
  onOpenStory: () => void;
}) {
  return (
    <AnimatedSection className="px-6 py-20 md:px-10 lg:px-16">
      <div className="grid grid-cols-12 gap-6">
        <AnimatedDiv delay={0.05} className="col-span-12 md:col-span-3">
          <dl className="flex flex-col">
            {metadata.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-1 py-4 ${i > 0 ? "border-t-[0.5px] border-border" : ""}`}
              >
                <dt className="text-[16px] font-medium text-foreground">
                  {item.label}
                </dt>
                <dd className="text-[16px] leading-[1.35] text-muted">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </AnimatedDiv>

        <AnimatedDiv delay={0.1} className="col-span-12 md:col-span-7 md:col-start-5">
          <div className="relative">
            <p className="text-[22px] leading-[1.3] tracking-tight text-foreground md:text-[28px] lg:text-[36px] lg:leading-[1.05] lg:tracking-[-0.02em]">
              {storySummary}
            </p>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
          </div>
          <div className="mt-8">
            <PillButton onClick={onOpenStory}>Read the full story</PillButton>
          </div>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
}
