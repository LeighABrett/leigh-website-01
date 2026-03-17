"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { getCaseStudy, getAdjacentCaseStudies } from "@/data/case-studies";
import { HeroSection } from "@/components/case-study/HeroSection";
import { ProjectDetails } from "@/components/case-study/ProjectDetails";
import { ImpactSection } from "@/components/case-study/ImpactSection";
import { PressSection } from "@/components/case-study/PressSection";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import { GalleryOverlay } from "@/components/case-study/GalleryOverlay";
import { StoryOverlay } from "@/components/case-study/StoryOverlay";

export default function CaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const caseStudy = getCaseStudy(params.slug);
  const { prev, next } = getAdjacentCaseStudies(params.slug);

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);

  if (!caseStudy) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6">
        <p className="text-lg text-muted">Case study not found.</p>
      </div>
    );
  }

  return (
    <>
      <HeroSection
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        heroImages={caseStudy.heroImages}
        onOpenGallery={() => setGalleryOpen(true)}
      />

      <ProjectDetails
        metadata={caseStudy.metadata}
        storySummary={caseStudy.storySummary}
        onOpenStory={() => setStoryOpen(true)}
      />

      <ImpactSection items={caseStudy.impact} />

      {caseStudy.press.length > 0 && (
        <PressSection items={caseStudy.press} />
      )}

      <CaseStudyNav prev={prev} next={next} />

      <GalleryOverlay
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={caseStudy.galleryImages}
      />

      <StoryOverlay
        isOpen={storyOpen}
        onClose={() => setStoryOpen(false)}
        lede={caseStudy.storyLede}
        body={caseStudy.storyBody}
        credits={caseStudy.credits}
      />
    </>
  );
}
