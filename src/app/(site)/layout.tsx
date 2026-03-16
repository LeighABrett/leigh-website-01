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
        <div className="grid gap-12 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
          {/* Left sidebar — persistent across pages */}
          <AnimatedSection delay={0.1} className="md:sticky md:top-20 md:self-start">
            <Sidebar />
          </AnimatedSection>

          {/* Right content — swapped on navigation */}
          <div className="flex flex-col gap-0">{children}</div>
        </div>
      </main>
    </div>
  );
}
