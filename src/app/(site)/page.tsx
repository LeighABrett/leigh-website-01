"use client";

import { AnimatedSection, AnimatedDiv } from "@/components/AnimatedSection";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-xs font-semibold tracking-tight text-foreground">
      {children}
    </h2>
  );
}

function SectionDivider() {
  return <div className="border-t border-border" />;
}

function SubDivider() {
  return <div className="border-t-[0.5px] border-border" />;
}

function ExperienceEntry({
  title,
  company,
  dates,
  location,
  bullets,
  subsections,
  delay = 0,
}: {
  title: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
  subsections?: {
    heading: string;
    bullets: string[];
  }[];
  delay?: number;
}) {
  return (
    <>
      <SubDivider />
      <AnimatedDiv
        delay={delay}
        className="grid gap-6 py-10 md:grid-cols-[1fr_1.5fr]"
      >
        <div>
          <h3 className="text-[15px] font-semibold leading-[1.3] tracking-tight text-foreground">
            {title}
          </h3>
          <p className="mt-1 text-[15px] leading-[1.35] text-muted">{company}</p>
          <p className="text-[15px] leading-[1.35] text-muted">{dates}</p>
          <p className="text-[15px] leading-[1.35] text-muted">{location}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="mb-2 text-[15px] font-semibold leading-[1.3] text-foreground">
              Highlights
            </h4>
            <ul className="flex flex-col gap-2">
              {bullets.map((bullet, i) => (
                <li key={i} className="text-[15px] leading-[1.35] text-muted">
                  • {bullet}
                </li>
              ))}
            </ul>
          </div>
          {subsections?.map((sub, i) => (
            <div key={i} className="mt-2">
              <h4 className="mb-2 text-[15px] font-semibold leading-[1.3] text-foreground">
                {sub.heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {sub.bullets.map((bullet, j) => (
                  <li key={j} className="text-[15px] leading-[1.35] text-muted">
                    • {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedDiv>
    </>
  );
}

function RecommendationEntry({
  quote,
  name,
  title,
  delay = 0,
}: {
  quote: string;
  name: string;
  title: string;
  delay?: number;
}) {
  return (
    <AnimatedDiv delay={delay}>
      <SubDivider />
      <div className="py-8">
        <p className="text-[15px] leading-[1.5] text-muted">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="mt-3 text-[15px] leading-[1.35] text-foreground">
          {name}
        </p>
        <p className="text-[15px] leading-[1.35] text-muted">{title}</p>
      </div>
    </AnimatedDiv>
  );
}

const recommendations = [
  {
    quote:
      "Leigh Brett is the most fiercely loyal and supportive design leader I\u2019ve had the pleasure of working with. In a professional world filled with vague directives and empty platitudes, Leigh stands apart\u2014leading with clarity, conviction, and an unshakable commitment to quality. Meticulous in his craft and quick to laugh, he elevates the work of everyone around him, always pushing beyond the current way of thinking.",
    name: "Eric Smallwood",
    title: "Design Leader | UX Strategy",
  },
  {
    quote:
      "If you\u2019re looking for a seasoned, senior UX leader who will elevate your design organization to world-class status, look no further than Leigh. He has an uncanny ability to assess a product experience with a single glance, and with just one well-placed comment, make even the most seasoned designers rethink everything. His feedback is unfiltered and razor-sharp. His standards are relentless. But here\u2019s the thing\u2014his teams want to rise to them.",
    name: "Christopher Nelson",
    title: "Founder @ Multipass AI | Design Leader @ AT&T Incubation",
  },
  {
    quote:
      "I had the privilege of working alongside Leigh at Walmart Design, where we were part of a team that not only pushed the limits of design but did so with an incredible sense of shared purpose and mutual respect. Together, we fostered an environment where ideas flowed freely, and every challenge was met with both rigor and creativity. We earned numerous Fast Company Innovation by Design awards, and saw Walmart skyrocket to the top of the Omnichannel retail space.",
    name: "Chris Gielow",
    title: "Fractional UX Design Leader | Walmart, Intuit, Motorola",
  },
  {
    quote:
      "Leigh is a strong leader and a visionary. I have appreciated his directness and clear point of view in working with him over the past nearly two years. He charged me with taking our nascent team from an idea to a fully implemented and scaled horizontal answer to the redundancy of UI and code across Walmart\u2019s enterprise platforms. Without Leigh\u2019s deep understanding of the opportunity and the product space, and solid collaboration throughout, we would not have had the impact we\u2019ve had.",
    name: "Karin Little",
    title: "UX and Product Leader | User-Centered Strategy, Research and Design",
  },
  {
    quote:
      "I\u2019ve had the privilege of working alongside Leigh Brett, and I can confidently say he is one of the most collaborative and strategic UX leaders I\u2019ve worked with. Leigh played a critical role in shaping the future of Walmart Marketplace, driving user-centered solutions that streamlined the seller experience and enhanced platform usability. He was also instrumental in building a new enterprise design system, ensuring consistency and scalability across multiple products.",
    name: "John Reese",
    title: "Design Executive | Formerly Amazon, Walmart, Home Depot, PayPal",
  },
  {
    quote:
      "Leigh is a great design leader. I worked directly with him on the Walmart Seller app, and I appreciated how he held our team to the highest possible standard for design, made time for us every day, and created a safe space where we could show up as our authentic selves. If you\u2019re lucky enough to work with Leigh, you can be assured you\u2019ll have a strong leader who\u2019ll push for something that users will love and that you can be proud of.",
    name: "Kiran Mascarenhas, Ph.D.",
    title: "Senior Manager, AI Design, Conversation Design and Content Design",
  },
];

export default function Home() {
  return (
    <>
      {/* Experience */}
      <AnimatedSection>
        <SectionHeading>Experience</SectionHeading>
      </AnimatedSection>

      <ExperienceEntry
        title="Senior Director of Design"
        company="Walmart"
        dates="January 2021 – August 2025"
        location="San Diego, CA"
        delay={0.1}
        bullets={[
          "Led design strategy and execution for Walmart Marketplace, a $10B+ enterprise platform supporting sellers, partners and operational teams across web and mobile",
          "Scaled the design organisation from 0 to 60+, including directors, managers and embedded product designers across multiple product teams",
          "Defined and implemented a unified design strategy across the US, Canada, Mexico and Chile",
          "Partnered with data science teams to introduce generative AI into seller support workflows and operational tooling",
        ]}
        subsections={[
          {
            heading: "Seller Center Redesign",
            bullets: [
              "Led the redesign of Seller Center, reducing onboarding time by 82%, increasing listing volume by 41% and driving fourfold growth in active sellers",
            ],
          },
          {
            heading: "Seller Center Native Mobile App",
            bullets: [
              "Led the zero-to-one design effort for a native mobile app for Walmart Marketplace sellers",
              "Launched Walmart's first native seller mobile app (iOS and Android) achieving 91% weekly retention and a 4.8 App Store rating",
            ],
          },
          {
            heading: "Enterprise Design Pattern Library",
            bullets: [
              "Created Walmart's first enterprise design pattern library, reducing production time by 50% and saving approximately $18M annually",
              "67 reusable components created, adopted by more than 100 designers and product teams",
            ],
          },
        ]}
      />

      <ExperienceEntry
        title="Co-Founder & Chief Design Officer"
        company="Tall Concepts"
        dates="January 2017 – January 2021"
        location="San Diego, CA"
        delay={0.15}
        bullets={[
          "Co-founded a design consultancy delivering product strategy, design leadership and execution for startups and Fortune 500 clients across media, telecom and enterprise software",
          "Built and led a team of eight product designers delivering complex digital products across streaming media, SaaS and content platforms",
          "Designed a machine learning-powered recommendation engine and scalable design systems for Sony Pictures, resulting in more than $1M in operational savings",
          "Created a component-based publishing platform for WarnerMedia enabling rapid multi-channel campaign deployment",
        ]}
      />

      <ExperienceEntry
        title="VP of Experience Design"
        company="Piksel"
        dates="May 2012 – January 2017"
        location="San Diego, CA"
        delay={0.2}
        bullets={[
          "Led the global experience design organisation, overseeing cross-platform products across web, mobile, smart TVs and emerging devices used by millions of customers",
          "Scaled the US design team from 0 to 14 and led a global organisation of more than 20 designers",
          "Redesigned the AT&T U-verse platform across devices, increasing engagement and growing subscriptions by 20 percent",
          "Delivered a market-first smartwatch app enabling full set-top box control via Apple and Samsung watches",
        ]}
      />

      <ExperienceEntry
        title="Director of Experience Design & Earlier Roles"
        company="Piksel, SQLI, IBM Consulting, AOL"
        dates="December 2000 – May 2012"
        location="London, United Kingdom"
        delay={0.25}
        bullets={[
          "Led UX and product design across multiple industries including ecommerce, media and enterprise software",
          "Delivered digital products for clients including Microsoft, Sky, Barclays, Tesco, BBC, Universal and AT&T",
          "Led UX and visual design across AOL's UK portal, managing digital experiences for 22 media channels and millions of subscribers",
          "Built design teams and mentored designers across a range of experience levels",
        ]}
      />

      {/* Skills */}
      <AnimatedSection className="mt-16">
        <SectionDivider />
        <div className="pt-10">
          <SectionHeading>Skills</SectionHeading>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedDiv delay={0.05}>
              <h4 className="mb-3 text-[15px] font-normal leading-[1.3] text-foreground">
                Design Leadership
              </h4>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Design strategy",
                  "Design team leadership",
                  "Organisational design",
                  "Design operations",
                  "Cross-functional leadership",
                  "Mentorship and coaching",
                ].map((s) => (
                  <li key={s} className="text-[15px] leading-[1.35] text-muted">
                    • {s}
                  </li>
                ))}
              </ul>
            </AnimatedDiv>

            <AnimatedDiv delay={0.1}>
              <h4 className="mb-3 text-[15px] font-normal leading-[1.3] text-foreground">
                Product & UX
              </h4>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Product design",
                  "User experience design",
                  "Interaction design",
                  "Information architecture",
                  "Service design",
                  "Customer journey design",
                ].map((s) => (
                  <li key={s} className="text-[15px] leading-[1.35] text-muted">
                    • {s}
                  </li>
                ))}
              </ul>
            </AnimatedDiv>

            <AnimatedDiv delay={0.15}>
              <h4 className="mb-3 text-[15px] font-normal leading-[1.3] text-foreground">
                Design Systems
              </h4>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Design systems strategy",
                  "Component libraries",
                  "Pattern libraries",
                  "Design governance",
                  "Design tokens",
                  "Scalable interface systems",
                ].map((s) => (
                  <li key={s} className="text-[15px] leading-[1.35] text-muted">
                    • {s}
                  </li>
                ))}
              </ul>
            </AnimatedDiv>

            <AnimatedDiv delay={0.2}>
              <h4 className="mb-3 text-[15px] font-normal leading-[1.3] text-foreground">
                Product Strategy
              </h4>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Product vision and roadmap",
                  "Zero-to-one product development",
                  "Marketplace and platform products",
                  "Data-informed design",
                  "Customer research and insights",
                ].map((s) => (
                  <li key={s} className="text-[15px] leading-[1.35] text-muted">
                    • {s}
                  </li>
                ))}
              </ul>
            </AnimatedDiv>

            <AnimatedDiv delay={0.25}>
              <h4 className="mb-3 text-[15px] font-normal leading-[1.3] text-foreground">
                Tools
              </h4>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Figma",
                  "Framer",
                  "AI-assisted design tools",
                  "Design systems tooling",
                  "Prototyping tools",
                ].map((s) => (
                  <li key={s} className="text-[15px] leading-[1.35] text-muted">
                    • {s}
                  </li>
                ))}
              </ul>
            </AnimatedDiv>
          </div>
        </div>
      </AnimatedSection>

      {/* Education & Certifications */}
      <AnimatedSection className="mt-16">
        <SectionDivider />
        <div className="pt-10">
          <SectionHeading>Education</SectionHeading>
          <div className="grid gap-4 md:grid-cols-[1fr_1.5fr]">
            <div>
              <h3 className="text-[15px] font-normal leading-[1.35] tracking-tight text-foreground">
                Loughborough University
              </h3>
            </div>
            <div>
              <h4 className="text-[15px] font-normal leading-[1.3] text-foreground">
                Bachelor of Fine Arts in Graphic Design
              </h4>
            </div>
          </div>
          <AnimatedDiv delay={0.1} className="mt-6">
            <SubDivider />
            <div className="pt-6">
              <h3 className="mb-3 text-xs font-semibold tracking-tight text-foreground">
                Certifications
              </h3>
              <p className="text-[15px] leading-[1.35] text-muted">
                Certified Professional in User Experience (CPUX), 2022
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </AnimatedSection>

      {/* Recommendations */}
      <AnimatedSection className="mt-16">
        <SectionDivider />
        <div className="pt-10">
          <SectionHeading>Recommendations</SectionHeading>
          <div className="grid gap-0 md:grid-cols-2 md:gap-x-12">
            {recommendations.map((rec, i) => (
              <RecommendationEntry
                key={rec.name}
                quote={rec.quote}
                name={rec.name}
                title={rec.title}
                delay={0.05 * i}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
