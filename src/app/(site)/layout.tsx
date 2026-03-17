"use client";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Header />

      <main className="px-6 pt-16 pb-20 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-6">
          {/* Left sidebar — 4 of 12 columns */}
          <AnimatedSection delay={0.1} className="col-span-12 md:col-span-4 md:sticky md:top-24 md:self-start">
            <Sidebar />
          </AnimatedSection>

          {/* Right content — 8 of 12 columns */}
          <div className="col-span-12 md:col-span-8 flex flex-col gap-0">{children}</div>
        </div>
      </main>
    </div>
  );
}
