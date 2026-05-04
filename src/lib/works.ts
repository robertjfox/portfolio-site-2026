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
    name: "Internal Retail Intelligence Platform",
    slug: "analytics_dashboard",
    icon: "grid",
    color: "#6366f1",
    tags: ["Next.js", "SQL Server", "T-SQL", "Dashboards", "Integrations"],
    summary:
      "Centralized internal dashboard that replaced 12+ legacy reports with team-specific tools for executives, buyers, HR, warehouse staff, stores, and marketing.",
    about:
      "A centralized Next.js operating dashboard built on top of Fox's legacy SQL Server retail stack. It consolidated more than a dozen fragmented POS, inventory, purchase order, image, HR, warehouse, and store-level reports into one internal platform with live dashboards, merchandising tools, executive reporting, weekly newsletters, AI-assisted content workflows, and operational alerts.",
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
    company: "Fox's",
    name: "E-commerce Site",
    slug: "ecommerce_site",
    icon: "globe",
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
    slug: "generative_ai_styling_app",
    icon: "shirt",
    color: "#ec4899",
    tags: ["Gemini", "SerpAPI", "Vision Models", "Structured Outputs", "LLMs"],
    summary:
      "Generative styling app combining persistent user context, product search, and image generation.",
    about:
      'A styling app that turns natural-language prompts like "wedding in austin" into shoppable outfits, with persistent style context across sessions and a TikTok-style feed for browsing looks.',
    sections: [
      {
        title: "Context",
        body: "Fashion discovery is fundamentally a personal-context problem dressed up as a search problem. Most shopping flows treat each session as stateless, so users end up doing the work the system should be doing: translating vague intent into search terms, mentally composing outfits across fragmented results, and re-explaining their taste every visit. Curait was an attempt to push that work onto the model.",
      },
      {
        title: "Constraints",
        body: 'Three things made this harder than a typical RAG or chat product:\n\n- Style context had to persist meaningfully across sessions without bloating every prompt with the user\'s full history. Naive approaches either forget what the user likes or burn tokens re-establishing context on every request.\n\n- Vision-language models can describe a product image well but rank visual options poorly when given them one at a time. Asking "is this dress good for the user?" five times in parallel produces inconsistent answers.\n\n- The pipeline chains four external services per outfit: LLM for ideation, SerpAPI for product retrieval, vision model for ranking, and Gemini for avatar rendering. Each adds latency, cost, and a failure mode. End-to-end response time and unit economics had to be tolerable for a feed-style UX where users swipe through dozens of outfits per session.',
      },
      {
        title: "Approach",
        body: "I split the pipeline into a deterministic stage and a model stage so expensive vision calls only run on a pre-filtered candidate set. SerpAPI returns ~40 results per item; a deterministic filter cuts that down on hard constraints before anything reaches a vision model. Predictable latency, lower spend.\n\nFor ranking, I render candidates into a single numbered grid and have the vision model rank them in one pass. Pairwise vision calls were slow and inconsistent; relative ranking against a composite image is fast, cheap, and more accurate.\n\nUser context lives in a distilled profile updated from onboarding and in-app behavior, short enough to fit in every prompt without dominating it. Outfit ideation produces structured outputs so downstream SerpAPI calls are fully parameterized, with no parsing model prose into queries.",
      },
      {
        title: "Tradeoffs",
        body: "To keep the feed UX feeling instant, I pre-generate the next outfit in the background while the user views the current one. This trades cost for experience; pre-generated outfits are wasted whenever a user closes the app or jumps threads, but the perceived latency win was worth it.\n\nThe flip side: pre-caching makes it trivial to swipe faster than the backend can keep up. So I simulate a brief loading state on cached outfits to pace the user. It looks like work, but it is really backpressure: the artificial delay keeps swipe rate aligned with generation rate and prevents the queue from blowing out.\n\nThe grid-ranking trick works because thumbnails are uniform; it would break for products that need detail inspection, like fit or fabric. Acceptable for discovery, not for purchase confirmation.\n\nI cut real-time outfit regeneration from in-session feedback. Latency budget did not support it, and the swipe UX makes misses cheap.",
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
      "Clinical LLM chat interface backed by RAG retrieval, including source ingestion, embeddings, and retrieval pipelines across {30M+} indexed clinical articles. Now used {500K+} times by {30K+} prescribers.",
    sections: [
      {
        title: "Problem",
        body: "Prescribers and clinical staff needed fast answers from trusted clinical reference material, but the source content was too large and fragmented to navigate during real workflows. A generic chatbot was not enough: responses had to stay grounded in authoritative clinical data, expose the supporting context, and handle repeated use at production scale.",
      },
      {
        title: "Solution",
        body: "Built a clinical RAG chat product around source ingestion, embeddings, vector search, and retrieval pipelines spanning {30M+} indexed clinical articles so answers could be generated from the right reference content instead of model memory alone. The system paired an LLM chat interface with clinical-data-backed retrieval, making it easier for prescribers to ask natural-language questions while keeping responses tied to authoritative source material.",
      },
    ],
  },
  {
    company: "ReachRx",
    name: "ReachRx iOS App",
    slug: "reachrx_ios_app",
    icon: "user",
    color: "#ef4444",
    tags: ["Swift", "iOS", "Maps", "Messaging", "Scheduling"],
    summary:
      "Rep prospecting iOS app for finding doctor offices, viewing office contacts, messaging staff, and scheduling meetings with prescribers.",
    about:
      "Native iOS prospecting tool for pharmaceutical reps. Reps could explore a map of doctor offices, see office staff and prescribers inside each location, communicate directly with users in those offices, and schedule meetings to get in front of prescribers.",
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
      "Customer-facing surfaces on avantstay.com for one of the largest U.S. luxury short-term rental managers, serving {~330K} monthly visits across a {2,500-home} portfolio. Included landing pages, property search, property detail pages, and post-checkout workflows.",
  },
  {
    company: "Rentroom",
    name: "Rental Management Web App",
    slug: "rental_management_web_app",
    icon: "file",
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
    slug: "tenant_ios_app",
    icon: "bag",
    color: "#38bdf8",
    tags: ["Swift", "iOS", "Stripe", "REST APIs", "Mobile UX"],
    summary:
      "Tenant payments app with potential to route $250M+ in annual rent across 20,000+ units.",
    about:
      "Tenant-facing iOS app for property management workflows, giving renters mobile access to rent payments, maintenance requests, and building communication. At a conservative rent estimate across {20,000+} units, the payment flow represents {$250M+} in potential annual rent volume.",
  },
];

type ProjectAssetCounts = {
  screenshots: number;
  diagrams: number;
};

const PROJECT_ASSETS: Record<string, ProjectAssetCounts> = {
  analytics_dashboard: { screenshots: 3, diagrams: 0 },
  ecom_ai_image_gen_platform: { screenshots: 3, diagrams: 0 },
  ecommerce_site: { screenshots: 3, diagrams: 0 },
  clinical_data_backed_llm_chat: { screenshots: 3, diagrams: 1 },
  reachrx_ios_app: { screenshots: 1, diagrams: 0 },
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
    tagline: "Retail intelligence, e-commerce, and AI imagery.",
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
    tagline: "Clinical LLM chat and pharma rep iOS app.",
    bio: "ReachRx built tools for pharmaceutical representatives, prescribers, and clinical staff, including clinical reference access and scheduling workflows.",
    role: "I worked across mobile product development and clinical AI experiences, including an iOS app and a clinical data-backed LLM chat product.",
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
    tagline: "Property management web app and tenant iOS app.",
    bio: "Rentroom is a property management platform for landlords and tenants, covering payments, maintenance, communication, and operational workflows.",
    role: "I built web and mobile product surfaces for landlords and tenants, including rent collection, maintenance ticketing, and tenant-facing mobile workflows.",
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
