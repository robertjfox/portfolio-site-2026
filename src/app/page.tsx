"use client";

import { useState, useEffect, useCallback } from "react";

const EXPERIENCE = [
  {
    role: "director of technology & operations",
    company: "fox's",
    period: "aug 2023 - present",
    color: "#6366f1",
    about:
      "{16-store} specialty retailer with {$58m} in annual revenue and {1.3m} annual e-commerce visitors. i own software architecture and internal platform development across inventory, e-commerce, pos, marketing, and store operations.",
    did: "architected and rebuilt an inventory intelligence platform used daily by a {9-person} buying team, consolidating {1,000+} vendors, {20,000+} annual skus, per-sku imagery, sell-through data, and store-level inventory across 16 locations. built and deployed ai-powered product imagery workflows for foxs.com.",
    projects: [
      {
        name: "analytics dashboard",
        about:
          "inventory intelligence platform replacing spreadsheet-based reporting — consolidates vendors, annual skus, per-sku imagery, sell-through data, and store-level inventory across 16 locations.",
      },
      {
        name: "ecom ai image gen platform",
        about:
          "ai-powered product imagery workflow that transforms vendor product photos into e-commerce-ready images for foxs.com, replacing outsourced model photography and eliminating {~$100k} in annual production cost.",
      },
      {
        name: "foxs.com ecommerce site",
        about:
          "consumer-facing e-commerce platform with {1.3m} annual visitors, supporting product catalog, checkout, marketing, and fulfillment workflows across the store portfolio.",
      },
    ],
  },
  {
    role: "founding software engineer",
    company: "reachrx",
    period: "oct 2022 - sep 2023",
    color: "#ef4444",
    about:
      "ai-powered healthcare platform connecting pharmaceutical representatives with prescribers and clinical staff; company raised {$6m} during my tenure.",
    did: "first engineering hire. built core product surfaces end-to-end across native ios, web application, and python backend services, owning architecture decisions and product implementation as the company searched for product-market fit.",
    projects: [
      {
        name: "clinical data backed llm chat",
        about:
          "clinical llm chat interface backed by rag retrieval, including source ingestion, embeddings, and retrieval pipelines for authoritative clinical reference content; now used {500k+} times by {30k+} prescribers.",
      },
      {
        name: "reachrx ios app",
        about:
          "native ios product connecting pharmaceutical reps, prescribers, and clinical staff for scheduling, clinical information access, prototype validation, and front-line feedback loops.",
      },
    ],
  },
  {
    role: "lead software engineer",
    company: "avantstay",
    period: "sep 2020 - oct 2022",
    color: "#6db896",
    about:
      "one of the largest u.s. luxury short-term rental managers, with consumer booking and internal property-management systems across a {2,000+} property portfolio.",
    did: "promoted to lead within months of joining. contributed to consumer booking and internal property-management systems, built customer-facing surfaces on avantstay.com, and led engineering interviews and candidate evaluation during rapid growth.",
    projects: [
      {
        name: "consumer booking site",
        about:
          "customer-facing surfaces on avantstay.com, including landing pages, property search, property detail pages, and post-checkout workflows.",
      },
      {
        name: "bookings tapechart",
        about:
          "property-by-date booking grid with dynamic pricing, real-time demand inputs, and {75+} seasonal pricing tiers; became a core daily tool for revenue management.",
      },
    ],
  },
  {
    role: "software engineer",
    company: "rentroom",
    period: "mar 2020 - sep 2020",
    color: "#38bdf8",
    about:
      "property management saas platform serving landlords and property managers.",
    did: "built features for rent collection, maintenance ticketing, and tenant-facing workflows.",
    projects: [
      {
        name: "rental management web app",
        about:
          "property management platform features for landlords, property managers, and tenants, including rent collection, maintenance ticketing, and tenant-facing workflows.",
      },
    ],
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

function projectImages(name: string): string[] {
  const folder = name.replace(/[^a-z0-9. ]/g, "").replace(/ +/g, "_");
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
  const [focused, setFocused] = useState<number | null>(null);
  const [collapsedProjects, setCollapsedProjects] = useState<Set<string>>(
    () => new Set(),
  );
  const [carousel, setCarousel] = useState<{
    images: string[];
    index: number;
  } | null>(null);
  const [showIntroAnimation, setShowIntroAnimation] = useState(true);
  const detail = focused !== null ? EXPERIENCE[focused] : null;
  const introComplete = focused !== null;

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntroAnimation(false), 1700);
    return () => window.clearTimeout(timer);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (carousel) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocused((f) =>
          f === null ? 0 : Math.min(f + 1, EXPERIENCE.length - 1),
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocused((f) => (f === null ? 0 : Math.max(f - 1, 0)));
      }
    },
    [carousel],
  );

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
    const handler = carousel ? handleCarouselKeyDown : handleKeyDown;
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [carousel, handleCarouselKeyDown, handleKeyDown]);

  return (
    <div className="h-screen text-[22px] overflow-hidden">
      <div className="h-full flex flex-col">
        <div className="flex flex-col lg:flex-row flex-1 min-h-0">
          {/* Left column */}
          <div
            className={`lg:w-[40%] shrink-0 overflow-y-auto p-6 md:p-8 lg:p-10 intro-left ${!introComplete ? "intro-centered" : ""}`}
          >
            <h1
              className="text-prompt text-[40px] sm:text-[52px] tracking-tight leading-none"
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
              robert fox
            </h1>

            <p
              className="text-text mt-3 leading-relaxed"
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
              product-minded software engineer with 6+ years building
              production systems across healthcare, hospitality, property
              management, and retail. strongest at translating ambiguous
              business workflows into shipped software, ai tools, integrations,
              and internal platforms.
            </p>

            <div className="mt-8 space-y-1">
              {EXPERIENCE.map((exp, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setFocused(i);
                    setCollapsedProjects(new Set());
                  }}
                  className="block text-left cursor-pointer w-full px-2 py-0.5 -mx-2 transition-colors"
                  style={{
                    ...(showIntroAnimation
                      ? {
                          opacity: 0,
                          animation: "fade-in 0.5s ease-out forwards",
                          animationDelay: `${0.35 + i * 0.08}s`,
                        }
                      : {}),
                    ...(focused === i
                      ? { background: "#e8eaf0", color: "#000000" }
                      : {}),
                  }}
                >
                  <span
                    style={{ color: focused === i ? "#000000" : exp.color }}
                  >
                    {exp.company}
                  </span>
                  <span
                    style={{ color: focused === i ? "#333" : undefined }}
                    className={focused !== i ? "text-text-muted" : ""}
                  >
                    {" "}
                    ·{" "}
                  </span>
                  <span
                    style={{ color: focused === i ? "#000000" : undefined }}
                    className={focused !== i ? "text-text-bold" : ""}
                  >
                    {exp.role}
                  </span>
                </button>
              ))}
            </div>

          </div>

          {/* Right column — detail */}
          <div
            className={`flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 lg:pt-14 intro-right ${!introComplete ? "intro-hidden" : ""}`}
          >
            {detail && (
              <div key={focused} className="animate-fade-in">
                <div className="text-[28px] sm:text-[32px] leading-none">
                  <span style={{ color: detail.color }}>{detail.company}</span>
                  <span className="text-text-muted"> · </span>
                  <span className="text-text-bold">{detail.role}</span>
                  <span className="text-text-muted"> · {detail.period}</span>
                </div>

                <div
                  className="collapsible-section"
                  style={{ gridTemplateRows: "1fr" }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div className="mt-6">
                      <div className="text-text-muted text-[16px] uppercase tracking-widest mb-2">
                        company
                      </div>
                      <p className="text-text leading-relaxed">
                        {renderAbout(detail.about, detail.color)}
                      </p>
                    </div>

                    <div className="mt-6 mb-1">
                      <div className="text-text-muted text-[16px] uppercase tracking-widest mb-2">
                        {detail.period.includes("present")
                          ? "what i do"
                          : "what i did"}
                      </div>
                      <p className="text-text leading-relaxed">
                        {renderAbout(detail.did, detail.color)}
                      </p>
                    </div>
                  </div>
                </div>

                {detail.projects.length > 0 && (
                  <div className="mt-6">
                    <div className="text-text-muted text-[16px] uppercase tracking-widest mb-3">
                      featured work
                    </div>
                    <div className="space-y-1">
                      {detail.projects.map((proj) => {
                        const images = projectImages(proj.name);
                        const isOpen = !collapsedProjects.has(proj.name);
                        return (
                          <div key={proj.name}>
                            <button
                              onClick={() =>
                                setCollapsedProjects((current) => {
                                  const next = new Set(current);
                                  if (isOpen) {
                                    next.add(proj.name);
                                  } else {
                                    next.delete(proj.name);
                                  }
                                  return next;
                                })
                              }
                              className="block text-left cursor-pointer w-full px-2 py-1 -mx-2 transition-colors hover:bg-[#ffffff08] rounded"
                              style={{ color: detail.color }}
                            >
                              <span>{isOpen ? "▾" : "▸"}</span>{" "}
                              <span>{proj.name}</span>
                            </button>
                            {isOpen && (
                              <div className="mt-2 mb-3 animate-fade-in">
                                <p className="text-text leading-relaxed">
                                  {renderAbout(proj.about, detail.color)}
                                </p>
                                <div className="flex gap-3 mt-4">
                                  {images.slice(0, 3).map((src, j) => (
                                    <img
                                      key={j}
                                      src={src}
                                      alt={`${proj.name} screenshot ${j + 1}`}
                                      className="aspect-video rounded object-cover border border-[#2a2a2a] cursor-pointer hover:border-[#555] transition-colors"
                                      style={{
                                        width: "calc((100% - 1rem) / 3)",
                                      }}
                                      onClick={() =>
                                        setCarousel({ images, index: j })
                                      }
                                    />
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {carousel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setCarousel(null)}
        >
          <button
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
          <img
            src={carousel.images[carousel.index]}
            alt=""
            className="max-h-[85vh] max-w-[85vw] object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
          <button
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
          <div className="absolute bottom-6 text-white/40 text-[16px]">
            {carousel.index + 1} / {carousel.images.length}
          </div>
        </div>
      )}
    </div>
  );
}
