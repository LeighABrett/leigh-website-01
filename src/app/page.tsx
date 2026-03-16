"use client";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ContactFooter } from "@/components/ContactFooter";
import { AnimatedSection, AnimatedDiv } from "@/components/AnimatedSection";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-sm font-semibold tracking-tight text-foreground">
      {children}
    </h2>
  );
}

function Divider() {
  return <div className="border-t border-border" />;
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
    <AnimatedDiv
      delay={delay}
      className="grid gap-6 border-b border-border py-10 md:grid-cols-[1fr_1.5fr]"
    >
      <div>
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted">{company}</p>
        <p className="text-sm text-muted">{dates}</p>
        <p className="text-sm text-muted">{location}</p>
      </div>
      <div className="flex flex-col gap-4">
        <ul className="flex flex-col gap-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-sm leading-relaxed text-muted">
              • {bullet}
            </li>
          ))}
        </ul>
        {subsections?.map((sub, i) => (
          <div key={i} className="mt-2">
            <h4 className="mb-2 text-sm font-semibold text-foreground">
              {sub.heading}
            </h4>
            <ul className="flex flex-col gap-2">
              {sub.bullets.map((bullet, j) => (
                <li key={j} className="text-sm leading-relaxed text-muted">
                  • {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedDiv>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Header />

      <main className="px-6 pt-16 md:px-10 lg:px-16">
        {/* Hero: Sidebar + Content */}
        <div className="grid gap-12 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
          {/* Left sidebar */}
          <AnimatedSection delay={0.1}>
            <Sidebar />
          </AnimatedSection>

          {/* Right content */}
          <div className="flex flex-col gap-0">
            {/* Experience */}
            <AnimatedSection>
              <SectionHeading>Experience</SectionHeading>
              <Divider />
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
              <Divider />
              <div className="pt-10">
                <SectionHeading>Skills</SectionHeading>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                  <AnimatedDiv delay={0.05}>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">
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
                        <li key={s} className="text-sm text-muted">
                          • {s}
                        </li>
                      ))}
                    </ul>
                  </AnimatedDiv>

                  <AnimatedDiv delay={0.1}>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">
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
                        <li key={s} className="text-sm text-muted">
                          • {s}
                        </li>
                      ))}
                    </ul>
                  </AnimatedDiv>

                  <AnimatedDiv delay={0.15}>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">
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
                        <li key={s} className="text-sm text-muted">
                          • {s}
                        </li>
                      ))}
                    </ul>
                  </AnimatedDiv>

                  <AnimatedDiv delay={0.2}>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">
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
                        <li key={s} className="text-sm text-muted">
                          • {s}
                        </li>
                      ))}
                    </ul>
                  </AnimatedDiv>

                  <AnimatedDiv delay={0.25}>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">
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
                        <li key={s} className="text-sm text-muted">
                          • {s}
                        </li>
                      ))}
                    </ul>
                  </AnimatedDiv>
                </div>
              </div>
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection className="mt-16">
              <Divider />
              <div className="pt-10">
                <SectionHeading>Education</SectionHeading>
                <div className="grid gap-4 md:grid-cols-[1fr_1.5fr]">
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-foreground">
                      Loughborough University
                    </h3>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      Bachelor of Fine Arts in Graphic Design
                    </h4>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Recommendations & Certifications */}
            <AnimatedSection className="mt-16">
              <Divider />
              <div className="grid gap-12 pt-10 md:grid-cols-2">
                <div>
                  <SectionHeading>Recommendations</SectionHeading>
                  <div className="flex flex-col gap-8">
                    <AnimatedDiv delay={0.05}>
                      <p className="text-sm leading-relaxed text-muted">
                        &ldquo;Leigh brings a rare combination of strategic
                        thinking and hands-on design leadership. He has the
                        ability to simplify complex product problems and align
                        teams around a clear vision.&rdquo;
                      </p>
                      <p className="mt-2 text-sm text-foreground">
                        Former colleague, Product Leader
                      </p>
                    </AnimatedDiv>

                    <AnimatedDiv delay={0.1}>
                      <p className="text-sm leading-relaxed text-muted">
                        &ldquo;Leigh creates an environment where designers can
                        do their best work. He balances high standards for design
                        quality with strong mentorship and support.&rdquo;
                      </p>
                      <p className="mt-2 text-sm text-foreground">
                        Senior Designer
                      </p>
                    </AnimatedDiv>

                    <AnimatedDiv delay={0.15}>
                      <p className="text-sm leading-relaxed text-muted">
                        &ldquo;Working with Leigh improved collaboration between
                        design and engineering. His systems thinking and focus on
                        clarity helped our teams ship better products
                        faster.&rdquo;
                      </p>
                      <p className="mt-2 text-sm text-foreground">
                        Engineering Partner
                      </p>
                    </AnimatedDiv>
                  </div>
                </div>

                <div>
                  <SectionHeading>Certifications</SectionHeading>
                  <AnimatedDiv delay={0.1}>
                    <p className="text-sm text-muted">
                      Certified Professional in User Experience (CPUX), 2022
                    </p>
                  </AnimatedDiv>
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
