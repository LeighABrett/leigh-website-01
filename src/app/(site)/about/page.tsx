"use client";

import { AnimatedSection, AnimatedDiv } from "@/components/AnimatedSection";

const clients = [
  { name: "Walmart", logo: "/logos/walmart.svg" },
  { name: "Sony Pictures", logo: "/logos/sony-pictures.svg" },
  { name: "WarnerMedia", logo: "/logos/warnermedia.svg" },
  { name: "AT&T", logo: "/logos/att.svg" },
  { name: "BBC", logo: "/logos/bbc.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Johnson & Johnson", logo: "/logos/jnj.svg" },
  { name: "Fortnum & Mason", logo: "/logos/fortnum.svg" },
];

export default function About() {
  return (
    <>
      {/* About Me */}
      <AnimatedSection>
        <h2 className="mb-8 text-xs font-semibold tracking-tight text-foreground">
          About Me
        </h2>
        <div className="flex flex-col gap-6">
          <AnimatedDiv delay={0.1}>
            <p className="text-[22px] leading-[1.4] text-foreground">
              Coming soon — a longer, more personal introduction. For now, the
              short version: I&apos;m a design leader who has spent over two
              decades building products, teams and systems across enterprise
              platforms, marketplaces and consumer technology.
            </p>
          </AnimatedDiv>

          <AnimatedDiv delay={0.15}>
            <p className="text-[22px] leading-[1.4] text-foreground">
              I work at the intersection of product strategy, design systems and
              execution. I care deeply about craft and hold a high bar for
              usability, clarity and visual detail. I work closely with product
              and engineering teams to ensure what ships is intuitive, resilient
              and built to scale.
            </p>
          </AnimatedDiv>

          <AnimatedDiv delay={0.2}>
            <p className="text-[22px] leading-[1.4] text-foreground">
              Increasingly my focus is on how generative AI can improve product
              development and design workflows — helping teams move faster
              without sacrificing judgement, quality or intent.
            </p>
          </AnimatedDiv>
        </div>
      </AnimatedSection>

      {/* Client List */}
      <AnimatedSection className="mt-16">
        <div className="border-t-[0.5px] border-border pt-10">
          <h2 className="mb-8 text-xs font-semibold tracking-tight text-foreground">
            Client List
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {clients.map((client, i) => (
              <AnimatedDiv
                key={client.name}
                delay={0.05 * i}
                className="flex h-16 items-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-6 w-auto opacity-60 transition-opacity hover:opacity-100"
                />
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
