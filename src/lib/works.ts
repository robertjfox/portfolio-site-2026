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
    };
  }[];
  tags: string[];
  slug: string;
  icon: string;
};

export const SELECTED_WORKS: SelectedWork[] = [
  {
    company: "Fox's Reports",
    name: "Internal Dashboard",
    slug: "analytics_dashboard",
    icon: "grid",
    color: "#6366f1",
    tags: ["Next.js", "SQL Server", "T-SQL", "Dashboards", "Integrations"],
    summary:
      "Business intelligence platform consolidating Fox's legacy reporting, inventory, product, image, and operational data into one internal system.",
    about:
      "Fox's internal business intelligence platform consolidates legacy reporting tools and scattered operational data into one system used daily by {9} buyers, executives, {20+} warehouse staff, and a {5-person} e-commerce team.",
    sections: [
      {
        title: "Problem",
        body: "Numerous legacy reports were acting as the source of truth for buying, inventory, warehouse, and store operations.\n\nData was scattered across purchase orders, warehouse ticketing, per-store invoices, and other operational systems.\n\nProduct images lived locally on each buyer's computer, with no centralized image store for e-commerce, stores, or internal tools.\n\nThe reporting experience was slow and static: non-interactive print-style reports, long loading times, and little ability to drill into the data.",
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
    company: "Fox's",
    name: "E-commerce AI Image Generation Platform",
    slug: "ecom_ai_image_gen_platform",
    icon: "sparkles",
    color: "#6366f1",
    tags: ["Gemini", "Vision Models", "Image Generation", "Automation", "APIs"],
    summary:
      "AI image workflow used daily by a 5-person e-commerce team, cutting ~$100K in annual production cost.",
    about:
      "AI-powered product imagery workflow used daily by a {5-person} e-commerce team. Transforms vendor product photos into e-commerce-ready assets for foxs.com, replacing outsourced model photography and eliminating {~$100K} in annual production cost.",
  },
  {
    company: "Curait.ai",
    name: "Generative AI Styling App",
    slug: "generative_ai_styling_app",
    icon: "shirt",
    color: "#ec4899",
    tags: ["Gemini", "SerpAPI", "Vision Models", "Structured Outputs", "LLMs"],
    summary:
      "Generative styling app combining persistent user context, product search, and image generation.",
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
    summary:
      "AEC recruiting marketplace for job posts, recruiter claims, and placement tracking.",
    about:
      "Built an AEC recruiting marketplace connecting construction firms with independent recruiters: job posting, recruiter claim flow, candidate workflow, and placement tracking end-to-end. Built for an established solo recruiter scaling beyond their own placements.\n\nThe interesting design problem: it is a marketplace and an ATS sharing one candidate workflow.",
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
        body: "Every action on either side writes to a shared event timeline visible to all parties. In a contingency marketplace, payout depends on attribution: a shared log is what makes disputes resolvable instead of arguable.",
        media: {
          kind: "screenshots",
          fileNumber: 2,
          alt: "Candidate detail view with event stream",
        },
      },
      {
        title: "Architecture",
        body: "The {Admin Layer} is the structural call: recruiter approval, role approval, bounty negotiation, and payouts all flow through one review surface instead of being scattered across features.",
        media: {
          kind: "diagrams",
          fileNumber: 1,
          alt: "Convene architecture diagram",
        },
      },
    ],
  },
  {
    company: "ReachRx",
    name: "Clinical Data-Backed LLM Chat",
    slug: "clinical_data_backed_llm_chat",
    icon: "message",
    color: "#ef4444",
    tags: ["LLMs", "RAG", "Embeddings", "Python", "Vector Search"],
    summary: "Clinical RAG chat used 500K+ times by 30K+ prescribers.",
    about:
      "Clinical LLM chat interface backed by RAG retrieval, including source ingestion, embeddings, and retrieval pipelines across {1M+} clinical sources. Now used {500K+} times by {30K+} prescribers.",
    sections: [
      {
        title: "Problem",
        body: "Prescribers and clinical staff needed fast answers from trusted clinical reference material while they were actively working.\n\nThe relevant information was spread across too many clinical sources for manual lookup to be practical.\n\nA generic chatbot was not enough: answers needed to be grounded, source-aware, and reliable at production scale.",
      },
      {
        title: "Solution",
        body: "Built a clinical RAG chat product around source ingestion, embeddings, vector search, and retrieval pipelines spanning {1M+} clinical sources so answers could be generated from the right reference content instead of model memory alone. The system paired an LLM chat interface with clinical-data-backed retrieval, making it easier for prescribers to ask natural-language questions while keeping responses tied to authoritative source material.",
      },
      {
        title: "Conversation Actions",
        body: "The chat flow also supported workflow-specific actions around the clinical answer: prior authorization templating, insurance checks, and pharma contact forms for specific drugs.",
      },
    ],
  },
  {
    company: "AvantStay",
    name: "Internal Dashboard",
    slug: "internal_dashboard",
    icon: "trend",
    color: "#6db896",
    tags: [
      "React",
      "TypeScript",
      "Tape Chart",
      "Pricing Logic",
      "Real-Time Data",
    ],
    summary:
      "Company-wide internal dashboard used by 500+ people to manage $300M+ in annual booking revenue across a 2,500-home portfolio.",
    about:
      "Company-wide internal dashboard used by {500+} people across AvantStay to manage {$300M+} in annual booking revenue across a {2,500-home} portfolio. This case study highlights the tape chart: a multi-property calendar tool that brought booking data, blocks, nightly pricing, availability, and downstream operational workflows into one view for revenue and operations teams.",
    sections: [
      {
        title: "Tape Chart",
        body: "I led the tape chart project as AvantStay migrated off Streamline, a third-party property management tool. The goal was to bring a business-critical calendar workflow in-house, giving teams one internal view for pricing, availability, reservations, blocks, and the operational handoffs tied to each property stay.",
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
    summary:
      "Booking web experience for avantstay.com, serving ~330K monthly visits across a 2,500-home portfolio.",
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
    tags: ["React", "TypeScript", "Swift", "Twilio"],
    summary:
      "Property management platform with a landlord web app and tenant iOS app, used by 500+ landlords across 20,000+ units.",
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
  tagline: string;
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
    tagline: "Retail intelligence, and AI imagery workflow.",
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
    tagline: "Generative AI styling product.",
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
    tagline: "AEC recruiting marketplace.",
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
    tagline: "Clinical data-backed LLM chat.",
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
    tagline: "Consumer booking site and internal revenue dashboard.",
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
    tagline: "Property management platform for landlords and tenants.",
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
