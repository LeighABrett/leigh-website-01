"use client";

import { AnimatedSection, AnimatedDiv } from "@/components/AnimatedSection";
import { PlaceholderImage } from "./PlaceholderImage";
import type { CaseStudyImage } from "@/data/case-studies";

function isLandscape(aspectRatio?: string): boolean {
  if (!aspectRatio) return true;
  const [w, h] = aspectRatio.split("/").map(Number);
  return w >= h;
}

export function HeroSection({
  title,
  subtitle,
  heroImages,
  onOpenGallery,
}: {
  title: string;
  subtitle: string;
  heroImages: CaseStudyImage[];
  onOpenGallery: () => void;
}) {
  return (
    <section className="overflow-hidden pb-20 pt-8">
      <AnimatedSection className="px-6 md:px-10 lg:px-16">
        <div className="mb-12 grid grid-cols-12 gap-6 items-end">
          <p className="col-span-12 md:col-span-2 text-xs font-semibold tracking-tight text-muted pb-1">
            Case Study
          </p>
          <div className="col-span-12 md:col-span-10">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-lg text-muted">{subtitle}</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedDiv delay={0.15}>
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 md:px-10 lg:px-16 scrollbar-hide">
          {heroImages.map((img, i) => {
            const landscape = isLandscape(img.aspectRatio);
            return (
              <div
                key={i}
                className="h-[400px] flex-shrink-0 md:h-[480px] lg:h-[520px]"
                style={{
                  width: landscape ? "clamp(560px, 57vw, 820px)" : "clamp(280px, 28vw, 410px)",
                }}
              >
                <PlaceholderImage
                  alt={img.alt}
                  className="h-full w-full"
                />
              </div>
            );
          })}
          <div
            onClick={onOpenGallery}
            className="group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-foreground/[0.04] h-[400px] md:h-[480px] lg:h-[520px]"
            style={{ width: "clamp(280px, 28vw, 410px)" }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative h-[200px] w-[200px]">
                <div className="absolute left-[10%] top-[5%] h-[140px] w-[110px] rotate-[-6deg] rounded-2xl bg-foreground/[0.08]" />
                <div className="absolute right-[10%] top-[10%] h-[140px] w-[110px] rotate-[4deg] rounded-2xl bg-foreground/[0.10]" />
                <div className="absolute bottom-[5%] left-[20%] h-[140px] w-[110px] rotate-[1deg] rounded-2xl bg-foreground/[0.12]" />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-8">
              <span className="inline-flex h-[45px] items-center gap-3 rounded-[96px] border border-border px-6 text-sm text-foreground transition-colors group-hover:bg-foreground/5">
                Explore the gallery
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </AnimatedDiv>
    </section>
  );
}
