"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PlaceholderImage } from "@/components/case-study/PlaceholderImage";
import { caseStudies } from "@/data/case-studies";

/* ── Word-by-word reveal ── */
function WordReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={className} style={{ display: "flex", flexWrap: "wrap", gap: "0 0.3em" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.15 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: i * 0.04, ease: "easeOut" }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

/* ── Transparent nav over hero ── */
function WorkNav() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-6 md:px-10 lg:px-16"
    >
      <Link
        href="/"
        className="text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-60"
      >
        Leigh Brett
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-white/60 transition-opacity hover:opacity-100"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back
        </Link>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}

/* ── Project card ── */
function ProjectCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      {/* Full-bleed hero image with title overlay */}
      <div className="relative overflow-hidden" style={{ height: "82vh", minHeight: "500px" }}>
        <PlaceholderImage className="h-full w-full !rounded-none" />
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute bottom-8 left-6 font-normal tracking-[-0.05em] text-white md:bottom-12 md:left-10 lg:left-16"
          style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1 }}
        >
          {study.title}
        </motion.h2>
      </div>

      {/* White detail card */}
      <div className="mx-4 rounded-3xl bg-white p-8 md:mx-6 md:p-12 lg:mx-8 lg:p-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          {/* Left: metadata + description + CTA */}
          <div className="flex flex-col gap-12">
            {/* Metadata rows with dotted separators */}
            <dl className="flex flex-col gap-0">
              {study.metadata.map((meta, i) => (
                <div
                  key={meta.label}
                  className="flex items-baseline justify-between py-4"
                  style={
                    i > 0
                      ? { borderTop: "1px dotted rgba(0,0,0,0.15)" }
                      : undefined
                  }
                >
                  <dt className="text-[16px] text-black/50">{meta.label}</dt>
                  <dd className="text-[16px] font-semibold text-black">
                    {meta.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Description heading */}
            <h3
              className="font-normal leading-[1.35] text-black"
              style={{ fontSize: "28px" }}
            >
              {study.title} &mdash; {study.subtitle}
            </h3>

            {/* View Project button */}
            <Link
              href={`/work/${study.slug}`}
              className="inline-flex h-16 w-fit items-center gap-2 rounded-full bg-black px-6 text-[16px] font-semibold text-white transition-opacity hover:opacity-80"
              style={{ borderRadius: "552px" }}
            >
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Right: featured image */}
          <Link href={`/work/${study.slug}`} className="group">
            <PlaceholderImage
              alt={study.heroImages[0]?.alt || study.title}
              className="h-full min-h-[300px] w-full transition-transform duration-700 group-hover:scale-[1.02] md:min-h-[400px]"
            />
          </Link>
        </div>

        {/* Footer: status + number */}
        <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-4">
          <span className="text-[16px] text-black/50">Completed</span>
          <span className="text-[16px] text-black/50">{num}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Scrolling marquee ── */
function Marquee() {
  return (
    <div className="overflow-hidden py-6">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center gap-6"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="flex items-center gap-6">
            <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Leigh Brett
            </span>
            <span className="text-white/20">&#x25C6;</span>
            <span className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Design Executive
            </span>
            <span className="text-white/20">&#x25C6;</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Page ── */
export default function WorkPage() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-[1440px]">
        {/* Hero with cycling images + transparent nav */}
        <section className="relative">
          <WorkNav />
          <div className="relative overflow-hidden" style={{ height: "82vh", minHeight: "600px" }}>
            <PlaceholderImage className="h-full w-full !rounded-none !bg-white/[0.06]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:px-10 md:pb-12 lg:px-16 lg:pb-16">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4 text-[16px] font-semibold text-white"
              >
                Selected Work
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-normal tracking-[-0.05em] text-white"
                style={{ fontSize: "clamp(56px, 8vw, 96px)", lineHeight: 1 }}
              >
                Selected Projects
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Intro card */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-4 rounded-3xl bg-white p-8 md:mx-6 md:p-12 lg:mx-8 lg:p-16"
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div>
              <WordReveal
                text="Each project is the culmination of strategy, craft, and leadership — shaped by collaboration and built with clarity, rigour, and purpose."
                className="text-[28px] font-normal leading-[1.35] text-black md:text-[36px]"
              />
              <p className="mt-8 text-[16px] leading-[1.5] text-black/50">
                I partner with global enterprises and high-growth companies to
                design products, build teams, and define design strategy that
                drives measurable business outcomes.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end md:pt-2">
              <p className="text-[16px] font-semibold text-black">Product Design</p>
              <p className="text-[16px] font-semibold text-black">Design Leadership</p>
              <p className="text-[16px] font-semibold text-black">Design Systems</p>
              <p className="text-[16px] font-semibold text-black">Enterprise UX</p>
              <p className="text-[16px] font-semibold text-black">Team Building</p>
            </div>
          </div>

          <h4 className="mt-16 text-[28px] font-normal text-black">
            Selected clients
          </h4>
          <div className="mt-6 grid grid-cols-3 gap-4 md:grid-cols-6">
            {["Walmart", "Sam\u2019s Club", "Bonobos", "Allswell", "Moosejaw", "Hayneedle"].map(
              (client) => (
                <div
                  key={client}
                  className="flex h-20 items-center justify-center rounded-2xl bg-black/[0.04]"
                >
                  <span className="text-xs font-medium text-black/30 uppercase tracking-wider">
                    {client}
                  </span>
                </div>
              )
            )}
          </div>
        </motion.section>

        {/* Project cards */}
        <div className="mt-0 flex flex-col gap-0">
          {caseStudies.map((study, i) => (
            <ProjectCard key={study.slug} study={study} index={i} />
          ))}
        </div>

        {/* Scrolling marquee */}
        <Marquee />
      </div>
    </div>
  );
}
