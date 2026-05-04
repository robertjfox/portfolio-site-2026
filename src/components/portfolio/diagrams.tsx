import { DiagramIcon } from "./icons";

const FOX_REPORTS_DATA_SOURCES = [
  "Legacy SQL Server retail data",
  "12+ legacy reports",
  "Store-level operational systems",
  "Manual spreadsheets",
  "HR + staffing reports",
  "Warehouse workflows",
  "Fragmented product image shares",
  "Purchase orders + inventory history",
];

const FOX_REPORTS_OUTPUTS = [
  "Executive KPI views",
  "Store manager reporting",
  "Buyer merchandising tools",
  "HR staffing visibility",
  "Warehouse + inventory workflows",
  "Marketing + newsletter tools",
];

const FOX_REPORTS_INTEGRATIONS = [
  "Centralized local image server",
  "Mailchimp newsletters",
  "Gemini image workflows",
  "Twilio sale alerts",
];

const FOX_REPORTS_TECH_FLOW = [
  {
    icon: "stack",
    title: "Legacy Report Sprawl",
    body: "More than a dozen reports lived across old SQL Server tables, spreadsheets, store workflows, HR reporting, warehouse processes, purchase data, inventory movement, and product image folders.",
  },
  {
    icon: "grid",
    title: "Centralized Dashboard",
    body: "A Next.js internal platform normalized those reports into one shared operating dashboard instead of one-off spreadsheets and disconnected workflows.",
  },
  {
    icon: "file",
    title: "Shared Data + Image Layer",
    body: "Operational data and fragmented product image paths were consolidated so every tool could reliably use product imagery and live business context.",
  },
  {
    icon: "message",
    title: "Role-Specific Tools",
    body: "Executives, buyers, HR, warehouse staff, store managers, and marketing teams each got focused tools built from the same source of truth.",
  },
];

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

export function FoxReportsDiagram() {
  const color = "#6366f1";

  return (
    <section className="mt-10 rounded-2xl">
      <div>
        <h2 className="text-[21px] sm:text-[26px] leading-none text-prompt">
          Problem Statement
        </h2>
        <p className="mt-4 max-w-5xl text-[17px] leading-relaxed text-[#f1f1f6]">
          Fox&apos;s was running critical reporting through a patchwork of legacy
          SQL Server reports, manual spreadsheets, store workflows, HR reporting,
          warehouse processes, and fragmented image shares. I built a
          centralized internal dashboard that consolidated 12+ legacy reports
          into one operating layer for executives, buyers, HR, warehouse staff,
          stores, and marketing.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-[21px] sm:text-[26px] leading-none text-prompt">
          System Overview
        </h2>

        <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_0.9fr_1fr] lg:items-stretch">
          <div
            className="rounded-2xl border bg-white/[0.075] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_52px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            style={{ borderColor: `${color}88` }}
          >
            <div className="flex items-center gap-3">
              <DiagramIcon name="stack" color={color} />
              <h3 className="text-[17px] leading-tight" style={{ color }}>
              Legacy Inputs
              </h3>
            </div>
            <div className="mt-4 grid gap-2">
              {FOX_REPORTS_DATA_SOURCES.map((source) => (
                <div
                  key={source}
                  className="rounded-lg bg-white/[0.03] px-3 py-2 text-[13px] text-[#f1f1f6]"
                >
                  {source}
                </div>
              ))}
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center rounded-2xl border bg-white/[0.09] p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_22px_58px_rgba(0,0,0,0.34)] backdrop-blur-xl"
            style={{ borderColor: `${color}99` }}
          >
            <DiagramIcon name="grid" color={color} />
            <h3 className="mt-5 text-[22px] leading-tight" style={{ color }}>
              Centralized Operating Dashboard
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#f1f1f6]">
              A Next.js internal platform that replaced scattered reporting
              with one source of truth for sales, inventory, staffing,
              merchandising, warehouse, store, and marketing workflows.
            </p>
            <div className="mt-5 grid w-full gap-2">
              <div className="rounded-lg bg-white/[0.04] px-3 py-2 text-[13px] text-[#f1f1f6]">
                SQL Server reporting layer
              </div>
              <div className="rounded-lg bg-white/[0.04] px-3 py-2 text-[13px] text-[#f1f1f6]">
                Local product image server
              </div>
              <div className="rounded-lg bg-white/[0.04] px-3 py-2 text-[13px] text-[#f1f1f6]">
                Multi-user dashboard UI
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div
              className="rounded-2xl border bg-white/[0.075] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_52px_rgba(0,0,0,0.3)] backdrop-blur-xl"
              style={{ borderColor: `${color}88` }}
            >
              <div className="flex items-center gap-3">
                <DiagramIcon name="trend" color={color} />
                <h3 className="text-[17px] leading-tight" style={{ color }}>
                  Tools By Team
                </h3>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {FOX_REPORTS_OUTPUTS.map((output) => (
                  <div
                    key={output}
                    className="rounded-lg bg-white/[0.03] px-3 py-2 text-[13px] text-[#f1f1f6]"
                  >
                    {output}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl border bg-white/[0.075] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_52px_rgba(0,0,0,0.3)] backdrop-blur-xl"
              style={{ borderColor: `${color}77` }}
            >
              <div className="flex items-center gap-3">
                <DiagramIcon name="globe" color={color} />
                <h3 className="text-[17px] leading-tight" style={{ color }}>
                  Image + Marketing Layer
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {FOX_REPORTS_INTEGRATIONS.map((integration) => (
                  <span
                    key={integration}
                    className="rounded-full border px-3 py-1.5 text-[12px]"
                    style={{ borderColor: `${color}99`, color }}
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-[21px] sm:text-[26px] leading-none text-prompt">
          What Changed
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FOX_REPORTS_TECH_FLOW.map((step) => (
            <div key={step.title} className="flex min-h-52 flex-col rounded-2xl border bg-white/[0.075] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_52px_rgba(0,0,0,0.3)] backdrop-blur-xl" style={{ borderColor: `${color}88` }}>
              <DiagramIcon name={step.icon} color={color} />
              <h3 className="mt-4 text-[16px] leading-tight" style={{ color }}>
                {step.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-[#f1f1f6]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div>
          <h2 className="text-[21px] sm:text-[26px] leading-none text-prompt">
            The Hard Part
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#f1f1f6]">
            The hard part was not making charts. It was turning years of
            disconnected reports, legacy SQL Server data, store-specific
            workflows, HR visibility, warehouse operations, and fragmented image
            files into one reliable internal product that multiple departments
            could actually use.
          </p>
        </div>

        <div>
          <h2 className="text-[21px] sm:text-[26px] leading-none text-prompt">
            Impact
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#f1f1f6]">
            The platform became the bridge between Fox&apos;s legacy retail systems
            and day-to-day decision-making. Executives, buyers, HR, warehouse
            staff, store managers, and marketing teams could work from the same
            centralized dashboard instead of chasing separate reports and
            spreadsheets.
          </p>
        </div>
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

