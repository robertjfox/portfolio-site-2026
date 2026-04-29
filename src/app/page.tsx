"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type SelectedWork = {
  company: string;
  name: string;
  color: string;
  summary: string;
  about: string;
  tags: string[];
  slug?: string;
};

const SELECTED_WORKS: SelectedWork[] = [
  {
    company: "Fox's",
    name: "Analytics Dashboard",
    slug: "analytics_dashboard",
    color: "#6366f1",
    tags: ["React", "TypeScript", "SQL", "Data Modeling", "ETL"],
    summary:
      "Inventory intelligence dashboard driving $25M in annual purchasing decisions across 20K+ SKUs.",
    about:
      "Inventory intelligence platform replacing spreadsheet-based reporting for a {16-store} specialty retailer. Drives {$25M} in annual purchasing decisions by consolidating {100} vendors, {20K+} annual SKUs, per-SKU imagery, sell-through data, and store-level inventory across 16 locations for {9 buyers}.",
  },
  {
    company: "Fox's",
    name: "E-commerce AI Image Generation Platform",
    slug: "ecom_ai_image_gen_platform",
    color: "#6366f1",
    tags: ["Gemini", "Vision Models", "Image Generation", "Automation", "APIs"],
    summary:
      "AI image workflow used daily by a 4-person e-commerce team, cutting ~$100K in annual production cost.",
    about:
      "AI-powered product imagery workflow used daily by a {4-person} e-commerce team. Transforms vendor product photos into e-commerce-ready assets for foxs.com, replacing outsourced model photography and eliminating {~$100K} in annual production cost.",
  },
  {
    company: "Fox's",
    name: "Foxs.com E-commerce Site",
    slug: "foxs.com_ecommerce_site",
    color: "#6366f1",
    tags: ["Next.js", "React", "TypeScript", "E-commerce APIs", "Search"],
    summary:
      "E-commerce platform serving 1.3M annual visitors for a $58M retail business.",
    about:
      "Consumer-facing e-commerce platform with {1.3M} annual visitors, supporting product catalog, checkout, marketing, fulfillment workflows, and the operational needs of a {$58M} retail business.",
  },
  {
    company: "Curait.ai",
    name: "Generative AI Styling App",
    color: "#ec4899",
    tags: ["Gemini", "SerpAPI", "Vision Models", "Structured Outputs", "LLMs"],
    summary:
      "Generative styling app combining persistent user context, product search, and image generation.",
    about:
      "Built a generative AI styling app that maintains persistent user style context, generates structured outfits, retrieves products via SerpAPI, ranks options with vision models, and renders final outfit visualizations using Gemini image generation.",
  },
  {
    company: "Convene",
    name: "AEC Recruiting Marketplace",
    color: "#f97316",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    summary:
      "AEC recruiting marketplace for job posts, recruiter claims, and placement tracking.",
    about:
      "Built an AEC recruiting marketplace connecting construction firms with independent recruiters, including job posting, recruiter claim flow, and placement tracking.",
  },
  {
    company: "Convene",
    name: "Prospecting LLM",
    color: "#f97316",
    tags: ["LLMs", "Prompt Engineering", "Web Search", "Automation", "Data Enrichment"],
    summary:
      "LLM prospecting tool automating research and qualification across both sides of a marketplace.",
    about:
      "Designed an LLM-powered lead generation tool for sourcing both prospective clients and candidates, automating outreach research and qualification across both sides of the marketplace.",
  },
  {
    company: "ReachRx",
    name: "Clinical Data-Backed LLM Chat",
    slug: "clinical_data_backed_llm_chat",
    color: "#ef4444",
    tags: ["LLMs", "RAG", "Embeddings", "Python", "Vector Search"],
    summary:
      "Clinical RAG chat used 500K+ times by 30K+ prescribers.",
    about:
      "Clinical LLM chat interface backed by RAG retrieval, including source ingestion, embeddings, and retrieval pipelines for authoritative clinical reference content. Now used {500K+} times by {30K+} prescribers.",
  },
  {
    company: "ReachRx",
    name: "ReachRx iOS App",
    slug: "reachrx_ios_app",
    color: "#ef4444",
    tags: ["Swift", "iOS", "REST APIs", "Mobile Auth", "Push Notifications"],
    summary:
      "Native iOS app for rep scheduling, clinical access, and fast product-market fit testing.",
    about:
      "Native iOS product connecting pharmaceutical reps, prescribers, and clinical staff for scheduling, clinical information access, prototype validation, and front-line feedback loops while the company searched for product-market fit.",
  },
  {
    company: "AvantStay",
    name: "Consumer Booking Site",
    slug: "consumer_booking_site",
    color: "#6db896",
    tags: ["React", "Next.js", "TypeScript", "GraphQL", "Search"],
    summary:
      "Booking web experience for avantstay.com, serving ~330K monthly visits across a 2,500-home portfolio.",
    about:
      "Customer-facing surfaces on avantstay.com for one of the largest U.S. luxury short-term rental managers, serving {~330K} monthly visits across a {2,500-home} portfolio. Included landing pages, property search, property detail pages, and post-checkout workflows.",
  },
  {
    company: "AvantStay",
    name: "AvantStay Internal Dashboard",
    color: "#6db896",
    tags: ["React", "TypeScript", "Grid UI", "Pricing Logic", "Real-Time Data"],
    summary:
      "Internal dashboard used by 100+ team members to manage $300M+ in annual booking revenue.",
    about:
      "Internal dashboard used by {100+} team members to manage {$300M+} in annual booking revenue, combining property availability, demand signals, dynamic pricing, and {75+} seasonal pricing tiers for daily revenue operations.",
  },
  {
    company: "Rentroom",
    name: "Rental Management Web App",
    slug: "rental_management_web_app",
    color: "#38bdf8",
    tags: ["React", "TypeScript", "Ruby on Rails", "PostgreSQL", "Stripe"],
    summary:
      "Property management SaaS used by 500+ landlords across 20,000+ units.",
    about:
      "Property management platform used by {500+} landlords across {20,000+} units, including rent collection, maintenance ticketing, and tenant-facing workflows.",
  },
  {
    company: "Rentroom",
    name: "Tenant iOS App",
    color: "#38bdf8",
    tags: ["Swift", "iOS", "Stripe", "REST APIs", "Mobile UX"],
    summary:
      "Tenant payments app with potential to route $250M+ in annual rent across 20,000+ units.",
    about:
      "Tenant-facing iOS app for property management workflows, giving renters mobile access to rent payments, maintenance requests, and building communication. At a conservative rent estimate across {20,000+} units, the payment flow represents {$250M+} in potential annual rent volume.",
  },
];

const PROJECT_IMAGE_COUNTS: Record<string, number> = {
  analytics_dashboard: 3,
  ecom_ai_image_gen_platform: 3,
  "foxs.com_ecommerce_site": 3,
  clinical_data_backed_llm_chat: 3,
  reachrx_ios_app: 1,
  consumer_booking_site: 3,
  rental_management_web_app: 6,
};

function projectImages(work: SelectedWork): string[] {
  const folder =
    work.slug ??
    work.name
      .toLowerCase()
      .replace(/[^a-z0-9. ]/g, "")
      .replace(/ +/g, "_");
  const count = PROJECT_IMAGE_COUNTS[folder] ?? 0;
  return Array.from(
    { length: count },
    (_, i) =>
      `/featured_projects/${folder}/${String(i + 1).padStart(2, "0")}.png`,
  );
}

function renderAbout(text: string, color: string) {
  const parts = text.split(/(\{[^}]+\})/g);
  return parts.map((part, i) => {
    if (part.startsWith("{") && part.endsWith("}")) {
      return (
        <span key={i} style={{ color, fontWeight: "bold" }}>
          {part.slice(1, -1)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function Home() {
  const [carousel, setCarousel] = useState<{
    images: string[];
    index: number;
  } | null>(null);
  const [activeWorkName, setActiveWorkName] = useState<string | null>(null);
  const [showIntroAnimation, setShowIntroAnimation] = useState(true);
  const activeWork =
    SELECTED_WORKS.find((work) => work.name === activeWorkName) ?? null;

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntroAnimation(false), 1700);
    return () => window.clearTimeout(timer);
  }, []);

  const handleCarouselKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!carousel) return;
      if (e.key === "Escape") {
        setCarousel(null);
      } else if (e.key === "ArrowRight") {
        setCarousel((c) =>
          c ? { ...c, index: (c.index + 1) % c.images.length } : null,
        );
      } else if (e.key === "ArrowLeft") {
        setCarousel((c) =>
          c
            ? { ...c, index: (c.index - 1 + c.images.length) % c.images.length }
            : null,
        );
      }
    },
    [carousel],
  );

  useEffect(() => {
    if (!carousel) return;
    window.addEventListener("keydown", handleCarouselKeyDown);
    return () => window.removeEventListener("keydown", handleCarouselKeyDown);
  }, [carousel, handleCarouselKeyDown]);

  return (
    <div className="min-h-screen text-[17px]">
      <main
        className={`mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12 ${
          activeWork ? "py-7 md:py-9" : "py-8 md:py-12 lg:py-14"
        }`}
      >
        {!activeWork && (
          <header className="mb-7 md:mb-9">
            <h1
              className="text-prompt text-[28px] sm:text-[34px] tracking-tight leading-none"
              style={
                showIntroAnimation
                  ? {
                      opacity: 0,
                      animation: "fade-in 0.5s ease-out forwards",
                      animationDelay: "0s",
                    }
                  : undefined
              }
            >
              Robert Fox - Selected Works
            </h1>

            <p
              className="text-text mt-3 max-w-5xl leading-relaxed"
              style={
                showIntroAnimation
                  ? {
                      opacity: 0,
                      animation: "fade-in 0.5s ease-out forwards",
                      animationDelay: "0.15s",
                    }
                  : undefined
              }
            >
              Product-minded software engineer with 6+ years building production
              systems across healthcare, hospitality, property management, and
              retail. Strongest at translating ambiguous business workflows into
              shipped software, AI tools, integrations, and internal platforms.
            </p>
          </header>
        )}

        <section className={activeWork ? "" : "space-y-1"}>
          {(activeWork ? [activeWork] : SELECTED_WORKS).map((work, i) => {
            const images = projectImages(work);

            return (
              <article
                key={`${work.company}-${work.name}`}
                className="animate-fade-in"
                style={
                  showIntroAnimation
                    ? {
                        opacity: 0,
                        animation: "fade-in 0.5s ease-out forwards",
                        animationDelay: `${0.5 + i * 0.08}s`,
                      }
                    : undefined
                }
              >
                {!activeWork ? (
                  <button
                    type="button"
                    className="group block w-full cursor-pointer px-2 py-1.5 -mx-2 text-left transition-all duration-200 hover:bg-[#ffffff0a] hover:brightness-125 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current rounded"
                    style={{ color: work.color }}
                    onClick={() => setActiveWorkName(work.name)}
                  >
                    <span className="text-[19px] sm:text-[23px] leading-none underline decoration-transparent underline-offset-4 transition-colors duration-200 group-hover:decoration-current">
                      <span>{work.company}</span>
                      <span className="text-text-muted"> - </span>
                      <span>{work.name}</span>
                    </span>
                    <span className="mt-1 block max-w-5xl text-[14px] leading-snug text-text">
                      {work.summary}
                    </span>
                  </button>
                ) : (
                  <div className="animate-fade-in">
                    <button
                      type="button"
                      className="mb-8 cursor-pointer text-text-muted transition-colors hover:text-text-bold focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current rounded"
                      onClick={() => setActiveWorkName(null)}
                    >
                      ← Back
                    </button>

                    <h1
                      className="text-[19px] sm:text-[23px] leading-none"
                      style={{ color: work.color }}
                    >
                      <span>{work.company}</span>
                      <span className="text-text-muted"> - </span>
                      <span>{work.name}</span>
                    </h1>

                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border-2 px-3 py-1.5 text-[13px] leading-none"
                          style={{
                            borderColor: `${work.color}99`,
                            backgroundColor: `${work.color}26`,
                            color: work.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-7 text-text leading-relaxed">
                      {renderAbout(work.about, work.color)}
                    </p>

                    {images.length > 0 && (
                      <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {images.slice(0, 3).map((src, j) => (
                          <button
                            key={src}
                            type="button"
                            className="group/image relative aspect-video w-full overflow-hidden rounded border border-[#2a2a2a] cursor-pointer transition-all duration-300 hover:border-white/40 hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-current"
                            onClick={() => setCarousel({ images, index: j })}
                          >
                            <Image
                              src={src}
                              alt={`${work.name} screenshot ${j + 1}`}
                              fill
                              sizes="(min-width: 640px) 33vw, 100vw"
                              className="object-cover transition duration-300 group-hover/image:scale-[1.03] group-hover/image:brightness-110"
                            />
                            <span className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover/image:bg-white/[0.04]" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </section>
      </main>

      {carousel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setCarousel(null)}
        >
          <button
            type="button"
            className="absolute left-6 text-white/50 hover:text-white text-4xl cursor-pointer transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setCarousel({
                ...carousel,
                index:
                  (carousel.index - 1 + carousel.images.length) %
                  carousel.images.length,
              });
            }}
          >
            ‹
          </button>
          <div
            className="relative h-[85vh] w-[85vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={carousel.images[carousel.index]}
              alt=""
              fill
              sizes="85vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            className="absolute right-6 text-white/50 hover:text-white text-4xl cursor-pointer transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setCarousel({
                ...carousel,
                index: (carousel.index + 1) % carousel.images.length,
              });
            }}
          >
            ›
          </button>
          <div className="absolute bottom-6 text-white/40 text-[14px]">
            {carousel.index + 1} / {carousel.images.length}
          </div>
        </div>
      )}
    </div>
  );
}
