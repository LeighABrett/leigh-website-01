export interface CaseStudyImage {
  src: string;
  alt: string;
  aspectRatio?: string;
}

export interface CaseStudyMeta {
  label: string;
  value: string;
}

export type ArrowDirection = "up" | "up-right" | "right" | "down" | "left";

export interface ImpactCard {
  metric: string;
  arrow?: ArrowDirection;
  title: string;
  description: string;
}

export interface CreditGroup {
  label: string;
  members: string[];
}

export interface PressItem {
  publication: string;
  headline: string;
  url: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  heroImages: CaseStudyImage[];
  galleryImages: CaseStudyImage[];
  metadata: CaseStudyMeta[];
  storySummary: string;
  storyLede: string;
  storyBody: string[];
  credits: CreditGroup[];
  impact: ImpactCard[];
  press: PressItem[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "walmart-marketplace",
    title: "Walmart Marketplace",
    subtitle: "Redesigning the seller experience for a $10B+ enterprise platform.",
    heroImages: [
      { src: "", alt: "Seller Center dashboard redesign", aspectRatio: "16/10" },
      { src: "", alt: "Mobile app home screen", aspectRatio: "3/4" },
      { src: "", alt: "Design pattern library components", aspectRatio: "4/3" },
      { src: "", alt: "Seller onboarding flow", aspectRatio: "16/9" },
      { src: "", alt: "Enterprise design system tokens", aspectRatio: "1/1" },
    ],
    galleryImages: [
      { src: "", alt: "Seller Center dashboard redesign", aspectRatio: "16/10" },
      { src: "", alt: "Mobile app home screen", aspectRatio: "3/4" },
      { src: "", alt: "Design pattern library components", aspectRatio: "4/3" },
      { src: "", alt: "Seller onboarding flow", aspectRatio: "16/9" },
      { src: "", alt: "Enterprise design system tokens", aspectRatio: "1/1" },
      { src: "", alt: "Listing management interface", aspectRatio: "16/10" },
      { src: "", alt: "Mobile app seller analytics", aspectRatio: "3/4" },
      { src: "", alt: "Component documentation page", aspectRatio: "4/3" },
      { src: "", alt: "Cross-platform design language", aspectRatio: "16/9" },
    ],
    metadata: [
      { label: "Role", value: "Senior Director of Design" },
      { label: "Client", value: "Walmart" },
      { label: "Duration", value: "2021 \u2013 2025" },
      { label: "Industry", value: "Retail / eCommerce" },
      { label: "Stage", value: "Enterprise" },
    ],
    storySummary:
      "Walmart Marketplace is a $10B+ enterprise platform supporting hundreds of thousands of sellers across web and mobile. When I joined in 2021, the seller experience was fragmented across legacy systems with inconsistent design patterns and poor usability. The platform needed a unified design vision that could scale across markets and devices...",
    storyLede:
      "Walmart Marketplace is a $10B+ enterprise platform supporting hundreds of thousands of sellers across web and mobile. When I joined in 2021, the seller experience was fragmented across legacy systems with inconsistent design patterns and poor usability.",
    storyBody: [
      "The platform needed a unified design vision that could scale across the US, Canada, Mexico and Chile while supporting the complexity of enterprise seller workflows.",
      "I scaled the design organisation from zero to over sixty, including directors, managers and embedded product designers across multiple product teams. Together we defined a unified design strategy and introduced generative AI into seller support workflows and operational tooling.",
      "The centrepiece of the programme was the redesign of Seller Center, the primary interface for marketplace sellers. We reduced onboarding time by 82%, increased listing volume by 41% and drove fourfold growth in active sellers.",
      "We also launched Walmart\u2019s first native seller mobile app for iOS and Android, achieving 91% weekly retention and a 4.8 App Store rating. The app gave sellers real-time access to performance data, inventory management and customer communications.",
      "To ensure consistency and velocity at scale, I created Walmart\u2019s first enterprise design pattern library \u2014 67 reusable components adopted by more than 100 designers and product teams. The library reduced production time by 50% and saved approximately $18M annually.",
      "The work was recognised with Walmart\u2019s Innovation and Acceleration Award in 2023, and the team earned multiple Fast Company Innovation by Design awards.",
    ],
    credits: [
      {
        label: "Walmart Design",
        members: [
          "Leigh Brett \u2014 Senior Director of Design",
          "Design Directors, Managers and Product Designers (60+ team)",
        ],
      },
      {
        label: "Partners",
        members: [
          "Product Management",
          "Engineering",
          "Data Science",
          "Seller Operations",
        ],
      },
    ],
    impact: [
      {
        metric: "82%",
        arrow: "down",
        title: "Faster Onboarding",
        description:
          "Reduced seller onboarding time through a redesigned Seller Center experience.",
      },
      {
        metric: "41%",
        arrow: "up-right",
        title: "Increased Listings",
        description:
          "Growth in listing volume driven by simplified product upload and management flows.",
      },
      {
        metric: "4\u00d7",
        arrow: "up",
        title: "Seller Growth",
        description:
          "Fourfold increase in active sellers on the Walmart Marketplace platform.",
      },
      {
        metric: "4.8",
        arrow: "up-right",
        title: "App Store Rating",
        description:
          "First native seller mobile app launched on iOS and Android with 91% weekly retention.",
      },
      {
        metric: "$18M",
        arrow: "left",
        title: "Annual Savings",
        description:
          "Enterprise design pattern library with 67 components reduced production time by 50%.",
      },
      {
        metric: "60+",
        arrow: "up",
        title: "Design Team",
        description:
          "Scaled the design organisation from zero, including directors, managers and embedded designers.",
      },
    ],
    press: [
      {
        publication: "Fast Company",
        headline: "Walmart Marketplace\u2019s design-led transformation earned an Innovation by Design award.",
        url: "#",
      },
      {
        publication: "Walmart Global Tech",
        headline: "How Walmart Marketplace redesigned Seller Center to scale for hundreds of thousands of sellers.",
        url: "#",
      },
      {
        publication: "Product Design Weekly",
        headline: "Building a 60-person design organisation from zero inside one of the world\u2019s largest retailers.",
        url: "#",
      },
      {
        publication: "Enterprise UX",
        headline: "The pattern library that saved Walmart $18M a year and unified design across four markets.",
        url: "#",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAdjacentCaseStudies(slug: string): {
  prev: CaseStudy | undefined;
  next: CaseStudy | undefined;
} {
  const index = caseStudies.findIndex((cs) => cs.slug === slug);
  return {
    prev: index > 0 ? caseStudies[index - 1] : caseStudies[caseStudies.length - 1],
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : caseStudies[0],
  };
}
