export type SelectedWork = {
  company: string;
  name: string;
  color: string;
  summary: string;
  about: string;
  sections?: {
    title: string;
    body: string;
    media?: {
      kind: "screenshots" | "diagrams";
      fileNumber: number;
      alt: string;
      placement?: "before" | "after";
      layout?: "block" | "row";
    };
  }[];
  tags: string[];
  slug: string;
  icon: string;
};

export const SELECTED_WORKS: SelectedWork[] = [
  {
    company: "Fox's",
    name: "Outfit Generation Agent",
    slug: "outfit_generation_agent",
    icon: "shirt",
    color: "#6366f1",
    tags: ["Agents", "Vision Models", "Image Generation", "Shopify", "trigger.dev", "Meta Ads"],
    summary: "Auto-builds shop-the-look outfits from Shopify arrivals",
    about:
      "{Shop-the-looks} are one of Fox's primary marketing units, running on foxs.com and in Meta Ads. Each look pairs a new arrival with a complete outfit so customers can buy the full set in one place.",
    sections: [
      {
        title: "Problem",
        body: "Each shop-the-look takes meaningful merchandiser time to assemble — picking the anchor, deciding on a concept, and hand-picking compatible items category by category.\n\nWith {~1,500} in-stock SKUs and dozens of new arrivals weekly, the decision space for any single outfit is enormous, and the team can only ever ship a fraction of viable looks.",
      },
      {
        title: "Solution",
        body: "An agentic workflow running on {trigger.dev} anchors on each newly published Shopify item, iteratively builds a full outfit from the recent in-stock catalog, renders it as imagery, and routes it to the e-commerce team.",
      },
    ],
  },
  {
    company: "Fox's",
    name: "Product Image Platform",
    slug: "ecom_ai_image_gen_platform",
    icon: "sparkles",
    color: "#6366f1",
    tags: ["Gemini", "OpenAI", "Vision Models", "Parallel Processing"],
    summary: "Replaces outsourced model photography with AI imagery",
    about:
      "AI-powered product imagery workflow used daily by a {5-person} e-commerce team. Transforms vendor product photos into e-commerce-ready assets for foxs.com, replacing outsourced model photography and eliminating {~$100K} in annual production cost.",
    sections: [
      {
        title: "Problem",
        body: "Product imagery relied on expensive, slow-to-schedule models.\n\nCoordinating shoots pulled the e-commerce team into manual production work.\n\nEach new arrival waited on a model shoot before it could go live.",
      },
      {
        title: "Solution",
        body: "AI workflow that converts vendor photos into on-brand product assets.\n\nFront, back, on-model, and standalone variants generated in parallel.\n\nRoughly {10x faster} and {~100x cheaper} than outsourced model shoots.",
      },
    ],
  },
  {
    company: "Fox's Reports",
    name: "Retail Intelligence Dashboard",
    slug: "analytics_dashboard",
    icon: "grid",
    color: "#6366f1",
    tags: ["Next.js", "SQL Server", "Dashboards", "Integrations", "Legacy Systems", "Marketing Automation"],
    summary: "Unified BI across buying, inventory, and warehouse",
    about:
      "Fox's internal business intelligence platform consolidates legacy reporting tools and scattered operational data into one system used daily by {9} buyers, executives, {20+} warehouse staff, and a {5-person} e-commerce team.",
    sections: [
      {
        title: "Problem",
        body: "Legacy reports drove buying, inventory, warehouse, and store ops.\n\nData fragmented across POs, warehouse tickets, and per-store invoices.\n\nProduct images lived on buyers' laptops with no central store.\n\nReporting was slow, static, and non-interactive.",
      },
      {
        title: "Solution",
        body: "I built a centralized business intelligence platform on top of the existing retail data stack. It brings purchase history, vendor data, warehouse activity, store-level invoices, SKU performance, pricing, sell-through, and product images into one internal system. The result is a single operating layer for buying, executive reporting, warehouse workflows, and e-commerce production.",
      },
      {
        title: "Buying Workflow",
        body: "The system helps a team of {9} buyers manage roughly {1,000} annual vendors and make decisions that inform more than {$28M} in annual inventory spend. It tracks {20K} unique SKUs, each with sell-through, pricing, inventory, vendor, and image data, so buyers can make decisions from one place instead of stitching context together from reports and local folders.",
      },
    ],
  },
  {
    company: "Curait.ai",
    name: "Generative AI Styling App",
    slug: "generative_ai_styling_app",
    icon: "shirt",
    color: "#ec4899",
    tags: ["Gemini", "SerpAPI", "Vision Models", "Structured Outputs", "LLMs", "Context Refinement"],
    summary: "Natural-language outfit intent into shoppable looks",
    about:
      "A styling app that turns natural-language outfit intent into shoppable looks, with persistent style context across sessions and a TikTok-style feed for browsing outfits.",
    sections: [
      {
        title: "Problem",
        body: "Online shopping is organized vendor by vendor, but outfit intent is not.\n\nUsers need broad search across stores, then compression based on occasion, formality, budget, body preferences, and taste history.\n\nCurait turns that open-ended search problem into shoppable outfits.",
      },
      {
        title: "Tradeoffs",
        body: "Quality vs speed: longer model reasoning improves outfits, but hurts feed latency.\n\nContext vs friction: richer onboarding improves personalization, but delays the first useful result.\n\nGeneral vs overfit: the profile has to capture taste without overreacting to one request or recent interaction.\n\nPerceived latency vs cost: pre-generating future outfits feels faster, but wastes compute when users stop swiping.",
      },
    ],
  },
  {
    company: "Convene",
    name: "AEC Recruiting Marketplace",
    slug: "aec_recruiting_marketplace",
    icon: "user",
    color: "#f97316",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    summary: "Construction firms and recruiters on one pipeline",
    about:
      "Built an AEC recruiting marketplace connecting construction firms with independent recruiters: job posting, recruiter claim flow, candidate workflow, and placement tracking end-to-end. Built for an established solo recruiter scaling beyond their own placements.",
    sections: [
      {
        title: "Marketplace Surface",
        body: "The marketplace starts with active roles that make the bounty, location, company, and status legible at a glance. For construction firms, this is the public demand side of the system; for recruiters, it is the inventory they can claim and work through the shared candidate flow.",
        media: {
          kind: "screenshots",
          fileNumber: 3,
          alt: "Active AEC marketplace role cards",
        },
      },
      {
        title: "Candidate Pipeline",
        body: "Recruiters and hiring managers work the same pipeline from opposite sides. Each card surfaces the next action for whoever is looking at it: answer a question, select a timeslot, download an offer letter, so the dashboard doubles as a queue.",
        media: {
          kind: "screenshots",
          fileNumber: 1,
          alt: "Candidate pipeline view",
        },
      },
      {
        title: "Candidate Detail + Event Stream",
        body: "Candidate submission\n\nReview and feedback\n\nMulti-interview loop — time suggestions, calendar invites, rescheduling\n\nOffer letter versioning\n\nFeedback and document storage\n\nHiring decision",
        media: {
          kind: "screenshots",
          fileNumber: 2,
          alt: "Candidate detail view with event stream",
          layout: "row",
        },
      },
    ],
  },
  {
    company: "ReachRx",
    name: "Clinical AI Chat",
    slug: "clinical_data_backed_llm_chat",
    icon: "message",
    color: "#ef4444",
    tags: ["LLMs", "RAG", "Embeddings", "Vector Search", "Data Pipelines", "Web App", "iOS App"],
    summary: "RAG chat used 500K+ times by 30K+ prescribers",
    about:
      "Clinical LLM chat interface backed by RAG retrieval, including source ingestion, embeddings, and retrieval pipelines across {1M+} clinical sources. Now used {500K+} times by {30K+} prescribers.",
    sections: [
      {
        title: "Problem",
        body: "Prescribers needed fast answers from trusted sources while actively working.\n\nRelevant info spanned too many sources for manual lookup.\n\nA generic chatbot wasn't enough — answers had to be grounded, sourced, and reliable at scale.",
      },
      {
        title: "Solution",
        body: "Clinical RAG chat with source ingestion, embeddings, and vector search across {1M+} sources.\n\nAnswers grounded in retrieved reference content, not model memory.\n\nNatural-language Q&A for prescribers, tied to authoritative source material.",
      },
      {
        title: "Conversation Actions",
        body: "The chat flow also supported workflow-specific actions around the clinical answer: prior authorization templating, insurance checks, and pharma contact forms for specific drugs.",
      },
    ],
  },
  {
    company: "AvantStay",
    name: "Bookings Tape Chart",
    slug: "internal_dashboard",
    icon: "trend",
    color: "#6db896",
    tags: [
      "React",
      "TypeScript",
      "GraphQL",
      "Tape Chart",
      "Pricing Logic",
      "Real-Time Data",
    ],
    summary: "Multi-property booking calendar and pricing engine",
    about:
      "A property-by-date calendar that replaced fragmented third-party booking workflows with one internal view of pricing, availability, reservations, owner stays, blocks, and operational state across AvantStay's portfolio.",
    sections: [
      {
        title: "Problem",
        body: "Streamline charged per property and didn't fit internal workflows.\n\nTeams needed fast answers on availability, pricing, reservations, and conflicts.\n\nBooking state spread across systems made cross-team coordination hard.",
      },
      {
        title: "Solution",
        body: "One property-by-date view of pricing, availability, reservations, owner stays, blocks, and conflicts.\n\nRows are homes, columns are dates, cells show nightly state with multi-day spans.\n\nOne shared operational surface for managing booking state across the portfolio.",
      },
      {
        title: "System Design",
        body: "The tape chart sat on top of a property-date state engine that merged raw pricing, availability, reservation, and block data into one canonical state model consumed by the UI.",
        media: {
          kind: "diagrams",
          fileNumber: 1,
          alt: "Bookings Tape Chart system diagram",
          placement: "before",
        },
      },
      {
        title: "What I Owned",
        body: "Led the engineering pod across PMs, developers, revenue stakeholders, operations, and guest-experience teams.\n\nScoped the system, broke it into engineering milestones, coordinated implementation, made architecture decisions, reviewed work, and translated complex operational requirements into a usable internal tool.",
      },
      {
        title: "Challenges",
        body: "Seasonal pricing: tiered seasonal pricing windows per market sat on top of the base algorithm. A home's nightly rate depended on market, date range, season tier, demand, and availability — resolved into one property-date state for accurate nightly pricing alongside reservations, owner stays, and blocks.\n\nDense, responsive UI: the tape chart had to make many homes, dates, reservation spans, blocks, owner stays, pricing cells, and conflict states readable at a glance — balancing density and clarity while keeping the calendar responsive.",
      },
    ],
  },
  {
    company: "AvantStay",
    name: "Consumer Booking Site",
    slug: "consumer_booking_site",
    icon: "globe",
    color: "#6db896",
    tags: ["React", "Next.js", "TypeScript", "GraphQL", "Search"],
    summary: "Search, property pages, and checkout on avantstay.com",
    about:
      "Customer-facing booking surfaces on avantstay.com for one of the largest U.S. luxury short-term rental managers, serving {~330K} monthly visits across a {2,500-home} portfolio. My work touched the full guest journey: landing pages, property search, map browsing, property detail pages, checkout, and post-checkout flows.",
    sections: [
      {
        title: "Checkout + Post-Checkout",
        body: "I worked on the booking and post-booking flow after a guest chose a property: checkout, Stripe and Affirm payment integrations, user agreement signing, value-added service upsells, Persona identity verification, and adding additional guests to a booking.",
      },
    ],
  },
  {
    company: "Rentroom",
    name: "Rental Management Platform",
    slug: "rental_management_web_app",
    icon: "file",
    color: "#38bdf8",
    tags: ["React", "TypeScript", "Node.js", "Swift", "Twilio"],
    summary: "Landlord web + tenant iOS across 20K+ units",
    about:
      "Rentroom is a property management platform for landlords and tenants: a web app for landlords and supers, and an iOS app for tenants. The product covers leases, rent collection, maintenance, tenant communication, and day-to-day property operations across {500+} landlords, {20,000+} units, and {$15M} in rental payment volume.",
    sections: [
      {
        title: "Maintenance System",
        body: "I built the maintenance workflow across both sides of the product. The key product move was turning maintenance from scattered texts and calls into a shared ticket record across tenant, landlord, and SMS communication. Tenants could submit a ticket from the iOS app with photos and a short description. Landlords and supers could monitor, triage, and respond from the web app. Messaging was tied to the ticket itself, with Twilio routing updates and replies over SMS.",
      },
    ],
  },
];

type ProjectAssetCounts = {
  screenshots: number;
  diagrams: number;
};

const PROJECT_ASSETS: Record<string, ProjectAssetCounts> = {
  analytics_dashboard: { screenshots: 3, diagrams: 0 },
  ecom_ai_image_gen_platform: { screenshots: 3, diagrams: 0 },
  outfit_generation_agent: { screenshots: 3, diagrams: 0 },
  clinical_data_backed_llm_chat: { screenshots: 3, diagrams: 1 },
  consumer_booking_site: { screenshots: 3, diagrams: 0 },
  internal_dashboard: { screenshots: 4, diagrams: 1 },
  rental_management_web_app: { screenshots: 6, diagrams: 0 },
  generative_ai_styling_app: { screenshots: 0, diagrams: 1 },
  aec_recruiting_marketplace: { screenshots: 3, diagrams: 1 },
};

function buildAssetUrls(
  work: SelectedWork,
  kind: "screenshots" | "diagrams",
  count: number,
): string[] {
  return Array.from(
    { length: count },
    (_, i) =>
      `/featured_projects/${work.slug}/${kind}/${String(i + 1).padStart(2, "0")}.png`,
  );
}

export function projectScreenshots(work: SelectedWork): string[] {
  return buildAssetUrls(
    work,
    "screenshots",
    PROJECT_ASSETS[work.slug]?.screenshots ?? 0,
  );
}

export function projectDiagrams(work: SelectedWork): string[] {
  return buildAssetUrls(
    work,
    "diagrams",
    PROJECT_ASSETS[work.slug]?.diagrams ?? 0,
  );
}

export type Company = {
  slug: string;
  name: string;
  color: string;
  logo: string;
  website: string;
  matches: string[];
  bio: string;
  role: string;
};

export const COMPANIES: Company[] = [
  {
    slug: "foxs",
    name: "Fox's",
    color: "#6366f1",
    logo: "/logos/foxs.png",
    website: "https://foxs.com",
    matches: ["Fox's", "Fox's Reports"],
    bio: "Fox's is a multi-store women's fashion retailer with a long-running retail operation, e-commerce business, merchandising workflow, and store-level sales process.",
    role: "I built internal tools, reporting systems, e-commerce workflows, and AI-assisted image generation products that connected legacy retail data to day-to-day business operations.",
  },
  {
    slug: "curait",
    name: "Curait",
    color: "#ec4899",
    logo: "/logos/curait.png",
    website: "https://curait.ai",
    matches: ["Curait.ai"],
    bio: "Curait.ai is a generative AI styling product focused on helping people move from open-ended outfit intent to personalized, shoppable recommendations.",
    role: "I built the core styling workflow across user context, product search, vision-model ranking, structured outfit generation, and image rendering.",
  },
  {
    slug: "convene",
    name: "Convene",
    color: "#f97316",
    logo: "/logos/convene.png",
    website: "https://hirewithconvene.com",
    matches: ["Convene"],
    bio: "Convene is a recruiting marketplace for the architecture, engineering, and construction industry, connecting firms with independent recruiters and qualified talent.",
    role: "I built marketplace workflows for job posting, recruiter claims, candidate workflow, and placement tracking across both sides of the marketplace.",
  },
  {
    slug: "reachrx",
    name: "ReachRx",
    color: "#ef4444",
    logo: "/logos/reachrx.png",
    website: "https://reachrx.ai",
    matches: ["ReachRx"],
    bio: "ReachRx built clinical AI tools for prescribers and clinical staff, including fast access to authoritative clinical reference content.",
    role: "I worked on the clinical data-backed LLM chat product, including RAG retrieval, source ingestion, embeddings, and retrieval pipelines for authoritative clinical material.",
  },
  {
    slug: "avantstay",
    name: "AvantStay",
    color: "#6db896",
    logo: "/logos/avantstay.png",
    website: "https://avantstay.com",
    matches: ["AvantStay"],
    bio: "AvantStay is a luxury short-term rental company operating a large portfolio of vacation homes across consumer booking and internal revenue operations.",
    role: "I built customer-facing booking surfaces and internal dashboard tooling that supported search, property detail, checkout, pricing, availability, and revenue workflows.",
  },
  {
    slug: "rentroom",
    name: "Rentroom",
    color: "#38bdf8",
    logo: "/logos/rentroom.png",
    website: "https://rentroom.com",
    matches: ["Rentroom"],
    bio: "Rentroom is a property management platform for landlords and tenants, covering payments, maintenance, communication, and operational workflows.",
    role: "I built Rentroom's web app for landlords and supers and the iOS app for tenants, including rent collection, maintenance ticketing, and Twilio-backed tenant communication.",
  },
];

export function getCompany(slug: string): Company | undefined {
  return COMPANIES.find((c) => c.slug === slug);
}

export function getCompanyWorks(slug: string): SelectedWork[] {
  const company = getCompany(slug);
  if (!company) return [];
  return SELECTED_WORKS.filter((w) => company.matches.includes(w.company));
}

export function getCompanyWork(
  companySlug: string,
  projectSlug: string,
): SelectedWork | undefined {
  return getCompanyWorks(companySlug).find((w) => w.slug === projectSlug);
}

export const PORTFOLIO_COMPANY_ORDER = [
  "foxs",
  "reachrx",
  "avantstay",
  "rentroom",
  "curait",
  "convene",
];

export function orderedWorks(): { company: Company; work: SelectedWork }[] {
  return PORTFOLIO_COMPANY_ORDER.flatMap((slug) => {
    const company = getCompany(slug);
    if (!company) return [];
    return getCompanyWorks(slug).map((work) => ({ company, work }));
  });
}

export function getNextWork(
  companySlug: string,
  projectSlug: string,
): { company: Company; work: SelectedWork } | undefined {
  const list = orderedWorks();
  const i = list.findIndex(
    ({ company, work }) =>
      company.slug === companySlug && work.slug === projectSlug,
  );
  if (i === -1) return undefined;
  return list[(i + 1) % list.length];
}
