import { DiagramIcon } from "./icons";

function flowCardStyle(color: string) {
  return {
    borderColor: `${color}99`,
    background: `linear-gradient(135deg, ${color}2f 0%, rgba(255,255,255,0.10) 42%, ${color}18 100%)`,
    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.32), inset 0 -1px 0 rgba(255,255,255,0.08), 0 22px 60px rgba(0,0,0,0.34), 0 0 34px ${color}21`,
  };
}

function statCardStyle(color: string) {
  return {
    borderColor: `${color}66`,
    background: `linear-gradient(135deg, ${color}26 0%, rgba(255,255,255,0.11) 55%, ${color}14 100%)`,
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.28), 0 16px 42px rgba(0,0,0,0.25)",
  };
}

function FlowCardDecor({ color }: { color: string }) {
  return (
    <>
      <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      <span
        className="pointer-events-none absolute -right-12 -top-16 h-36 w-36 rounded-full blur-3xl"
        style={{ backgroundColor: `${color}33` }}
      />
    </>
  );
}

function StatCardDecor({ color }: { color: string }) {
  return (
    <>
      <span className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
      <span
        className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full blur-2xl"
        style={{ backgroundColor: `${color}26` }}
      />
    </>
  );
}

function FlowArrow({
  color,
  hidden,
  breakpoint = "lg",
}: {
  color: string;
  hidden?: boolean;
  breakpoint?: "md" | "lg";
}) {
  if (hidden) return null;
  const visibilityClass = breakpoint === "md" ? "md:block" : "lg:block";
  return (
    <div
      aria-hidden="true"
      className={`absolute -right-3 top-1/2 z-10 hidden h-0.5 w-6 -translate-y-1/2 ${visibilityClass}`}
      style={{ backgroundColor: `${color}cc` }}
    >
      <span
        className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-r-2 border-t-2"
        style={{ borderColor: color }}
      />
    </div>
  );
}

const ECOM_AI_WORKFLOW = [
  {
    number: "01",
    icon: "cloud",
    title: "Batch Product Uploads",
    body: "Product images come in as iOS photo uploads or directly from Fox's centralized image database, then get grouped by SKU for production.",
  },
  {
    number: "02",
    icon: "sparkles",
    title: "Parallel Gemini Processing",
    body: "Gemini processes batches in parallel, generating front, back, on-model, and standalone product assets from the selected source imagery.",
  },
  {
    number: "03",
    icon: "user",
    title: "Human In The Loop",
    body: "The team can generate, review, edit, and refine each image with prompting before approving assets for commerce use.",
  },
  {
    number: "04",
    icon: "globe",
    title: "Push To Shopify",
    body: "Approved assets are pushed into Shopify with the right product context so they can move into the live storefront workflow.",
  },
];

const ECOM_AI_OUTCOMES = [
  { icon: "user", label: "Team", value: "5-person daily workflow" },
  { icon: "dollar", label: "Cost", value: "~100x cheaper production flow" },
  { icon: "trend", label: "Speed", value: "~10x faster imagery turnaround" },
  { icon: "globe", label: "Scale", value: "5K annual SKUs supported" },
];

const REACHRX_STATS = [
  { icon: "stack", value: "1M+", label: "Clinical sources indexed" },
  { icon: "message", value: "500K+", label: "Chat uses" },
  { icon: "user", value: "30K+", label: "Prescribers" },
];

const AVANTSTAY_INTERNAL_STATS = [
  { icon: "user", value: "500+", label: "Internal users" },
  { icon: "dollar", value: "$300M+", label: "Annual booking revenue managed" },
  { icon: "globe", value: "2,500", label: "Homes in portfolio" },
];

const AVANTSTAY_BOOKING_FEATURES = [
  {
    icon: "globe",
    title: "Landing Pages",
    body: "First customer-facing surfaces I touched, including conversion-focused pages for owners and guests.",
  },
  {
    icon: "search",
    title: "Search + Map",
    body: "Property search, filters, availability inputs, and map-based browsing across markets.",
  },
  {
    icon: "home",
    title: "Property Detail Pages",
    body: "Gallery, amenities, house rules, room details, location, and availability modules.",
  },
  {
    icon: "dollar",
    title: "Checkout + Payments",
    body: "Booking checkout flow with Stripe and Affirm payment integrations.",
  },
  {
    icon: "check",
    title: "Post-Checkout",
    body: "Agreements, upsells, Persona identity verification, and adding guests to a booking.",
  },
];

const FOXS_INTERNAL_STATS = [
  { icon: "user", value: "30+", label: "Daily users" },
  { icon: "stack", value: "20K", label: "Annual SKUs" },
  { icon: "dollar", value: "$28M+", label: "Annual inventory spend informed" },
  { icon: "globe", value: "1,000", label: "Annual vendors managed" },
];

const FOXS_INTERNAL_FEATURES = [
  {
    icon: "trend",
    title: "Central Performance Dashboard",
    body: "Executive view into sales, inventory, sell-through, and business performance.",
  },
  {
    icon: "grid",
    title: "Interactive Master Vendor Table",
    body: "Vendor data in one searchable working surface for buyers and leadership.",
  },
  {
    icon: "search",
    title: "Vendor Detail + Best Sellers",
    body: "Drilldowns for vendor performance, best sellers, pricing, and SKU movement.",
  },
  {
    icon: "file",
    title: "Distribution + Process Lists",
    body: "Reports that support daily warehouse distribution and processing decisions.",
  },
  {
    icon: "message",
    title: "Store Email Automation",
    body: "Weekly per-store email templates generated from new arrivals unique to each store.",
  },
];

const CURAIT_TECHNICAL_MOVES = [
  {
    icon: "user",
    title: "Context Distillation",
    body: "Onboarding and behavior are compressed into a short taste profile that can ride along in every generation prompt.",
  },
  {
    icon: "parallel",
    title: "Non-Blocking Parallelization",
    body: "Product search, filtering, ranking, and image generation run concurrently wherever possible so one slow external call does not freeze the feed.",
  },
  {
    icon: "grid",
    title: "Single-Pass Ranking",
    body: "Candidate products are rendered into one numbered grid so the vision model ranks relative options in one call instead of isolated yes/no checks.",
  },
  {
    icon: "timer",
    title: "Latency UX",
    body: "The full input-to-output path takes about 10 seconds per outfit, so the next result is generated in the background and cached results are paced.",
  },
];

export function CuraitArchitectureDiagram() {
  const color = "#ec4899";

  return (
    <section className="mt-10 rounded-2xl">
      <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-text">
        System design
      </h2>
      <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#f1f1f6]">
        The core design challenge was hiding a roughly 10-second multi-service
        pipeline behind a feed: preserve user taste, search broadly, rank visual
        options, render the outfit, and prefetch the next result without blocking
        the interface.
      </p>
      <div className="mt-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CURAIT_TECHNICAL_MOVES.map((move) => (
            <div
              key={move.title}
              className="relative overflow-hidden rounded-2xl border p-4 backdrop-blur-2xl"
              style={statCardStyle(color)}
            >
              <StatCardDecor color={color} />
              <div className="relative">
                <DiagramIcon
                  name={move.icon}
                  color={color}
                  className="h-12 w-12"
                />
                <h3 className="mt-4 text-[14px] leading-tight" style={{ color }}>
                  {move.title}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-[#d7d7df]">
                  {move.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReachRxNumbersDiagram() {
  const color = "#ef4444";

  return (
    <section className="mt-10 rounded-2xl">
      <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-text">
        By the numbers
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {REACHRX_STATS.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-2xl border p-5 backdrop-blur-2xl"
            style={statCardStyle(color)}
          >
            <StatCardDecor color={color} />
            <div className="relative flex items-start gap-3">
              <DiagramIcon name={stat.icon} color={color} />
              <div>
                <p
                  className="text-[24px] font-bold leading-none"
                  style={{ color }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] leading-snug text-[#d7d7df]">
                  {stat.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AvantStayNumbersDiagram() {
  const color = "#6db896";

  return (
    <section className="mt-10 rounded-2xl">
      <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-text">
        By the numbers
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {AVANTSTAY_INTERNAL_STATS.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-2xl border p-5 backdrop-blur-2xl"
            style={statCardStyle(color)}
          >
            <StatCardDecor color={color} />
            <div className="relative flex items-start gap-3">
              <DiagramIcon name={stat.icon} color={color} />
              <div>
                <p
                  className="text-[24px] font-bold leading-none"
                  style={{ color }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] leading-snug text-[#d7d7df]">
                  {stat.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AvantStayBookingFeaturesDiagram() {
  const color = "#6db896";

  return (
    <section className="mt-10 rounded-2xl">
      <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-text">
        Feature areas
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {AVANTSTAY_BOOKING_FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="relative overflow-hidden rounded-2xl border p-3 backdrop-blur-2xl"
            style={statCardStyle(color)}
          >
            <StatCardDecor color={color} />
            <div className="relative">
              <DiagramIcon
                name={feature.icon}
                color={color}
                className="h-9 w-9"
              />
              <h3 className="mt-3 text-[13px] leading-tight" style={{ color }}>
                {feature.title}
              </h3>
              <p className="mt-2 text-[11px] leading-relaxed text-[#d7d7df]">
                {feature.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FoxsInternalNumbersDiagram() {
  const color = "#6366f1";

  return (
    <section className="mt-10 rounded-2xl">
      <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-text">
        By the numbers
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {FOXS_INTERNAL_STATS.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-2xl border p-5 backdrop-blur-2xl"
            style={statCardStyle(color)}
          >
            <StatCardDecor color={color} />
            <div className="relative flex items-start gap-3">
              <DiagramIcon name={stat.icon} color={color} />
              <div>
                <p
                  className="text-[24px] font-bold leading-none"
                  style={{ color }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] leading-snug text-[#d7d7df]">
                  {stat.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FoxsInternalFeaturesDiagram() {
  const color = "#6366f1";

  return (
    <section className="mt-10 rounded-2xl">
      <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-text">
        Highlighted features
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {FOXS_INTERNAL_FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="relative overflow-hidden rounded-2xl border p-3 backdrop-blur-2xl"
            style={statCardStyle(color)}
          >
            <StatCardDecor color={color} />
            <div className="relative">
              <DiagramIcon
                name={feature.icon}
                color={color}
                className="h-9 w-9"
              />
              <h3 className="mt-3 text-[13px] leading-tight" style={{ color }}>
                {feature.title}
              </h3>
              <p className="mt-2 text-[11px] leading-relaxed text-[#d7d7df]">
                {feature.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EcomAiSystemDiagram() {
  const color = "#6366f1";

  return (
    <section className="mt-10 rounded-2xl">
      <div>
        <h2 className="text-[21px] sm:text-[26px] leading-none text-prompt">
          Problem Statement
        </h2>
        <p className="mt-4 max-w-5xl text-[17px] leading-relaxed text-[#f1f1f6]">
          Product imagery depended on a small pool of models who were expensive,
          not always available, and slow to schedule. That created delays,
          added production cost, and pulled the e-commerce team into manual
          coordination work. This workflow turns vendor photos into on-brand
          product assets roughly{" "}
          <span className="font-bold" style={{ color }}>
            10x faster
          </span>{" "}
          and about{" "}
          <span className="font-bold" style={{ color }}>
            100x cheaper
          </span>
          .
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-[21px] sm:text-[26px] leading-none text-prompt">
          System Overview
        </h2>
      </div>

      <div className="mx-auto mt-7 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ECOM_AI_WORKFLOW.map((step, i) => (
          <div key={step.number} className="relative">
            <div
              className="relative flex h-full min-h-56 flex-col overflow-hidden rounded-2xl border p-4 backdrop-blur-2xl"
              style={{
                borderColor: `${color}99`,
                background: `linear-gradient(135deg, ${color}2f 0%, rgba(255,255,255,0.10) 42%, ${color}18 100%)`,
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.32), inset 0 -1px 0 rgba(255,255,255,0.08), 0 22px 60px rgba(0,0,0,0.34), 0 0 34px rgba(99,102,241,0.13)",
              }}
            >
              <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <span
                className="pointer-events-none absolute -right-12 -top-16 h-36 w-36 rounded-full blur-3xl"
                style={{ backgroundColor: `${color}33` }}
              />
              <div className="relative flex items-start justify-between gap-3">
                <DiagramIcon name={step.icon} color={color} />
                <span className="text-[12px] font-bold" style={{ color }}>
                  {step.number}
                </span>
              </div>
              <h3 className="relative mt-5 text-[15px] leading-tight text-[#f4f4fb]">
                {step.title}
              </h3>
              <div
                className="relative my-3 h-px w-full"
                style={{ backgroundColor: `${color}44` }}
              />
              <p className="relative text-[12px] leading-relaxed text-[#d7d7df]">
                {step.body}
              </p>
            </div>
            {i < ECOM_AI_WORKFLOW.length - 1 && (
              <div
                aria-hidden="true"
                className="absolute -right-4 top-1/2 z-10 hidden h-0.5 w-8 -translate-y-1/2 lg:block"
                style={{ backgroundColor: `${color}cc` }}
              >
                <span
                  className="absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-45 border-r-2 border-t-2"
                  style={{ borderColor: color }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-7">
        <h3 className="text-[21px] sm:text-[26px] leading-none text-prompt">
          Outcomes
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ECOM_AI_OUTCOMES.map((outcome) => (
            <div
              key={outcome.label}
              className="relative flex items-center gap-3 overflow-hidden rounded-2xl border p-3 backdrop-blur-2xl"
              style={{
                borderColor: `${color}66`,
                background: `linear-gradient(135deg, ${color}26 0%, rgba(255,255,255,0.11) 55%, ${color}14 100%)`,
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.28), 0 16px 42px rgba(0,0,0,0.25)",
              }}
            >
              <span className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
              <span
                className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full blur-2xl"
                style={{ backgroundColor: `${color}26` }}
              />
              <DiagramIcon name={outcome.icon} color={color} />
              <div className="relative">
                <p className="text-[12px] leading-none" style={{ color }}>
                  {outcome.label}
                </p>
                <p className="mt-2 text-[13px] leading-snug text-[#f1f1f6]">
                  {outcome.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const OUTFIT_AGENT_FLOW = [
  {
    number: "01",
    icon: "cloud",
    title: "Daily Shopify Scan",
    body: "Scans foxs.com daily for newly published items. Each becomes the seed for an outfit concept.",
  },
  {
    number: "02",
    icon: "parallel",
    title: "Iterative Outfit Build",
    body: "Per category: an LLM text pass narrows to 16, then a vision pass over a grid picks the winner.",
  },
  {
    number: "03",
    icon: "sparkles",
    title: "Image Generation",
    body: "Selected products go to gpt-image-2 — a flatlay and an on-figure model shot per look.",
  },
  {
    number: "04",
    icon: "message",
    title: "Review + Publish",
    body: "Each outfit posts to Microsoft Teams. The team edits in the dashboard and pushes to Meta Ads.",
  },
];

const OUTFIT_ITERATIVE_LOOP = [
  {
    number: "01",
    icon: "stack",
    title: "Category Candidates",
    body: "Every in-stock SKU for the next slot — say ~300 dresses or ~200 shoes.",
  },
  {
    number: "02",
    icon: "search",
    title: "Text-Pass Shortlist",
    body: "An LLM scores candidates on metadata against the concept and prior picks. Top 16 advance.",
  },
  {
    number: "03",
    icon: "grid",
    title: "Single-Call Vision Grid",
    body: "The 16 finalists composite into one 4×4 grid. One vision call picks the winner — not sixteen.",
  },
  {
    number: "04",
    icon: "parallel",
    title: "Append + Recurse",
    body: "The winner joins the outfit and feeds the next category. Loops until every slot is filled.",
  },
];

const OUTFIT_AGENT_OUTCOMES = [
  {
    icon: "sparkles",
    label: "Concepts",
    value: "5,000+ outfit concepts per year",
  },
  {
    icon: "timer",
    label: "Time saved",
    value: "~2,500 human hours per year",
  },
  {
    icon: "trend",
    label: "Ad volume",
    value: "10x more Meta Ads — more shots at engaging content",
  },
];

export function OutfitAgentSystemDiagram() {
  const color = "#6366f1";

  return (
    <section className="mt-10 rounded-2xl">
      <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-text">
        End-to-end pipeline
      </h2>
      <div className="mt-5 grid gap-4 md:grid-cols-4">
        {OUTFIT_AGENT_FLOW.map((step, i) => (
          <div key={step.number} className="relative">
            <div
              className="relative flex h-full flex-col overflow-hidden rounded-xl border p-3 backdrop-blur-2xl"
              style={flowCardStyle(color)}
            >
              <FlowCardDecor color={color} />
              <div className="relative flex items-start justify-between gap-2">
                <DiagramIcon
                  name={step.icon}
                  color={color}
                  className="h-10 w-10"
                />
                <span className="text-[11px] font-bold" style={{ color }}>
                  {step.number}
                </span>
              </div>
              <h3 className="relative mt-3 text-[13px] leading-tight text-[#f4f4fb]">
                {step.title}
              </h3>
              <div
                className="relative my-2 h-px w-full"
                style={{ backgroundColor: `${color}44` }}
              />
              <p className="relative text-[11px] leading-relaxed text-[#d7d7df]">
                {step.body}
              </p>
            </div>
            <FlowArrow
              color={color}
              breakpoint="md"
              hidden={i === OUTFIT_AGENT_FLOW.length - 1}
            />
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-text">
          Inside the iterative outfit build
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {OUTFIT_ITERATIVE_LOOP.map((step, i) => (
            <div key={step.number} className="relative">
              <div
                className="relative flex h-full flex-col overflow-hidden rounded-xl border p-3 backdrop-blur-2xl"
                style={flowCardStyle(color)}
              >
                <FlowCardDecor color={color} />
                <div className="relative flex items-start justify-between gap-2">
                  <DiagramIcon
                    name={step.icon}
                    color={color}
                    className="h-7 w-7"
                  />
                  <span className="text-[11px] font-bold" style={{ color }}>
                    {step.number}
                  </span>
                </div>
                <h3 className="relative mt-3 text-[13px] leading-tight text-[#f4f4fb]">
                  {step.title}
                </h3>
                <div
                  className="relative my-2 h-px w-full"
                  style={{ backgroundColor: `${color}44` }}
                />
                <p className="relative text-[11px] leading-relaxed text-[#d7d7df]">
                  {step.body}
                </p>
              </div>
              <FlowArrow
                color={color}
                breakpoint="md"
                hidden={i === OUTFIT_ITERATIVE_LOOP.length - 1}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export function OutfitAgentOutcomes() {
  const color = "#6366f1";

  return (
    <section>
      <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-text">
        Outcomes
      </h2>
      <div className="mt-4 space-y-3">
        {OUTFIT_AGENT_OUTCOMES.map((outcome) => (
          <div
            key={outcome.label}
            className="relative flex items-center gap-3 overflow-hidden rounded-2xl border p-4 backdrop-blur-2xl"
            style={statCardStyle(color)}
          >
            <StatCardDecor color={color} />
            <DiagramIcon name={outcome.icon} color={color} />
            <div className="relative">
              <p className="text-[12px] leading-none" style={{ color }}>
                {outcome.label}
              </p>
              <p className="mt-2 text-[15px] leading-snug text-[#f1f1f6]">
                {outcome.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const RENTROOM_STATS = [
  { icon: "user", value: "500+", label: "Landlords" },
  { icon: "stack", value: "20,000+", label: "Units" },
  { icon: "dollar", value: "$15M", label: "Rental payment volume" },
];

const RENTROOM_MAINTENANCE_FLOW = [
  {
    number: "01",
    icon: "user",
    title: "Tenant Submits (iOS)",
    body: "Tenant snaps photos, describes the issue, and submits a maintenance ticket from the iOS app. Unit + tenant context attach automatically.",
  },
  {
    number: "02",
    icon: "file",
    title: "Lands in Landlord Web",
    body: "Portfolio-wide ticket dashboard with filters by property, unit, status, and priority — including the tenant's photos and full history.",
  },
  {
    number: "03",
    icon: "message",
    title: "Tenant Updates via SMS",
    body: "Landlord types in the web ticket. Twilio routes the update to the tenant as SMS, so follow-up communication stays tied to the same request.",
  },
  {
    number: "04",
    icon: "check",
    title: "Thread Stays on Ticket",
    body: "Tenant SMS replies route back into the same ticket thread. One auditable record of what was said, when, and what changed.",
  },
];

export function RentroomNumbersDiagram() {
  const color = "#38bdf8";

  return (
    <section className="mt-10 rounded-2xl">
      <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-text">
        By the numbers
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {RENTROOM_STATS.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-2xl border p-5 backdrop-blur-2xl"
            style={statCardStyle(color)}
          >
            <StatCardDecor color={color} />
            <div className="relative flex items-start gap-3">
              <DiagramIcon name={stat.icon} color={color} />
              <div>
                <p
                  className="text-[24px] font-bold leading-none"
                  style={{ color }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] leading-snug text-[#d7d7df]">
                  {stat.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function RentroomMaintenanceDiagram() {
  const color = "#38bdf8";

  return (
    <section className="mt-10 rounded-2xl">
      <div>
        <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-text">
          Maintenance flow
        </h2>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#f1f1f6]">
          A broken thing in a unit becomes a tracked ticket and a closed-loop
          SMS thread. One auditable record per ticket, no one has to leave
          their app.
        </p>

        <div className="mx-auto mt-7 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RENTROOM_MAINTENANCE_FLOW.map((step, i) => (
            <div key={step.number} className="relative">
              <div
                className="relative flex h-full min-h-56 flex-col overflow-hidden rounded-2xl border p-4 backdrop-blur-2xl"
                style={flowCardStyle(color)}
              >
                <FlowCardDecor color={color} />
                <div className="relative flex items-start justify-between gap-3">
                  <DiagramIcon name={step.icon} color={color} />
                  <span className="text-[12px] font-bold" style={{ color }}>
                    {step.number}
                  </span>
                </div>
                <h3 className="relative mt-5 text-[15px] leading-tight text-[#f4f4fb]">
                  {step.title}
                </h3>
                <div
                  className="relative my-3 h-px w-full"
                  style={{ backgroundColor: `${color}44` }}
                />
                <p className="relative text-[12px] leading-relaxed text-[#d7d7df]">
                  {step.body}
                </p>
              </div>
              <FlowArrow
                color={color}
                hidden={i === RENTROOM_MAINTENANCE_FLOW.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

