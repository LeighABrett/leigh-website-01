"use client";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ContactFooter } from "@/components/ContactFooter";
import { AnimatedSection, AnimatedDiv } from "@/components/AnimatedSection";

export default function About() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Header showBack />

      <main className="px-6 pt-16 md:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
          {/* Left sidebar */}
          <AnimatedSection delay={0.1}>
            <Sidebar />
          </AnimatedSection>

          {/* Right content */}
          <div className="flex flex-col gap-0">
            {/* About Me */}
            <AnimatedSection>
              <h2 className="mb-8 text-sm font-semibold tracking-tight text-foreground">
                About Me
              </h2>
              <div className="flex flex-col gap-6">
                <AnimatedDiv delay={0.1}>
                  <p className="text-base leading-relaxed text-foreground">
                    Coming soon — a longer, more personal introduction. For now,
                    the short version: I&apos;m a design leader who has spent
                    over two decades building products, teams and systems across
                    enterprise platforms, marketplaces and consumer technology.
                  </p>
                </AnimatedDiv>

                <AnimatedDiv delay={0.15}>
                  <p className="text-base leading-relaxed text-foreground">
                    I work at the intersection of product strategy, design
                    systems and execution. I care deeply about craft and hold a
                    high bar for usability, clarity and visual detail. I work
                    closely with product and engineering teams to ensure what
                    ships is intuitive, resilient and built to scale.
                  </p>
                </AnimatedDiv>

                <AnimatedDiv delay={0.2}>
                  <p className="text-base leading-relaxed text-foreground">
                    Increasingly my focus is on how generative AI can improve
                    product development and design workflows — helping teams move
                    faster without sacrificing judgement, quality or intent.
                  </p>
                </AnimatedDiv>
              </div>
            </AnimatedSection>

            {/* Client List */}
            <AnimatedSection className="mt-16">
              <div className="border-t border-border pt-10">
                <h2 className="mb-8 text-sm font-semibold tracking-tight text-foreground">
                  Client List
                </h2>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                  {[
                    "Walmart",
                    "Sony Pictures",
                    "WarnerMedia",
                    "AT&T",
                    "BBC",
                    "Microsoft",
                    "Johnson & Johnson",
                    "Fortnum & Mason",
                  ].map((client, i) => (
                    <AnimatedDiv
                      key={client}
                      delay={0.05 * i}
                      className="flex h-16 items-center"
                    >
                      <p className="text-sm font-medium tracking-tight text-muted">
                        {client}
                      </p>
                    </AnimatedDiv>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}
