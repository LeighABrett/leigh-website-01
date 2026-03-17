"use client";

import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1440px] overflow-hidden">
      <CaseStudyHeader />
      <main>{children}</main>
    </div>
  );
}
