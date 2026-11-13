import {
  Bot,
  Workflow,
  CodeXml,
  Layers,
  Smartphone,
  Plug,
  Sparkles,
  Zap,
  Boxes,
  ShieldCheck,
  Users,
  Target,
  Search,
  Compass,
  Hammer,
  Rocket,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Company                                                                    */
/* -------------------------------------------------------------------------- */

export const site = {
  name: "Stratus Labs",
  legalName: "Stratus Labs LLC",
  tagline: "Engineered for what's next.",
  description:
    "Stratus Labs LLC is an AI-first software engineering company. We design and build AI agents, automation, SaaS products, and custom web and mobile applications for ambitious businesses.",
  // Set NEXT_PUBLIC_SITE_URL to the custom domain once it's live. On Vercel it
  // falls back to the project's production URL; locally, to localhost.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  email: "contact@stratuslabs.pro",
  address: {
    street: "205 W Main Street",
    city: "Taylors",
    region: "SC",
    postalCode: "29687",
    country: "United States",
  },
  // Add real profile URLs here, e.g. { label: "LinkedIn", href: "https://..." }.
  // The footer only renders this block when at least one link exists.
  socials: [] as { label: string; href: string }[],
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Services                                                                   */
/* -------------------------------------------------------------------------- */

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  accent: string;
};

export const services: Service[] = [
  {
    title: "AI Agent Development",
    description:
      "Autonomous agents that reason, call your tools, and complete multi-step work, with guardrails, evaluations, and human review where it matters.",
    icon: Bot,
    tags: ["Tool use", "RAG", "Evals"],
    accent: "#4f7cff",
  },
  {
    title: "AI Automation",
    description:
      "Replace brittle manual workflows with AI pipelines that read documents, route requests, and trigger actions across your stack.",
    icon: Workflow,
    tags: ["Pipelines", "Doc AI", "Orchestration"],
    accent: "#22d3ee",
  },
  {
    title: "Custom Software Development",
    description:
      "Production-grade systems engineered around your business logic: typed, tested, documented, and built to be maintained.",
    icon: CodeXml,
    tags: ["Architecture", "Testing", "CI/CD"],
    accent: "#8b5cf6",
  },
  {
    title: "SaaS Development",
    description:
      "Multi-tenant products with authentication, billing, roles, and analytics, taken from first commit to paying customers.",
    icon: Layers,
    tags: ["Multi-tenant", "Billing", "MVPs"],
    accent: "#4f7cff",
  },
  {
    title: "Web & Mobile Applications",
    description:
      "Fast, accessible web apps and cross-platform mobile apps that feel native and ship on a predictable cadence.",
    icon: Smartphone,
    tags: ["React", "Next.js", "iOS & Android"],
    accent: "#22d3ee",
  },
  {
    title: "API & System Integration",
    description:
      "Connect CRMs, ERPs, payment rails, cloud services, and LLM providers through clean, observable APIs.",
    icon: Plug,
    tags: ["REST & GraphQL", "Webhooks", "Cloud"],
    accent: "#8b5cf6",
  },
];

export const capabilities = [
  "AI Chatbots & LLM Integration",
  "MVP Development for Startups",
  "Cloud & API Integrations",
  "Mobile App Development",
  "Retrieval-Augmented Generation",
  "Workflow Orchestration",
];

/* -------------------------------------------------------------------------- */
/*  Why choose us                                                              */
/* -------------------------------------------------------------------------- */

export type Reason = {
  title: string;
  description: string;
  icon: LucideIcon;
  visual?: "models" | "stack" | "growth";
};

export const reasons: Reason[] = [
  {
    title: "AI-first approach",
    description:
      "We design around what models do well, and engineer the rest: retrieval, tooling, evaluation, and fallbacks.",
    icon: Sparkles,
    visual: "models",
  },
  {
    title: "Fast development cycles",
    description: "Short sprints, weekly demos, and working software in your hands early.",
    icon: Zap,
  },
  {
    title: "Expert engineering",
    description: "Senior-level code reviews, typed codebases, and tests that let you move without fear.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable architecture",
    description:
      "Systems designed for your next stage of growth: clean boundaries, observable services, and infrastructure as code.",
    icon: Boxes,
    visual: "stack",
  },
  {
    title: "Transparent collaboration",
    description: "Shared roadmaps, open repos, and direct access to the engineers building your product.",
    icon: Users,
  },
  {
    title: "Business-focused solutions",
    description:
      "Every feature maps to an outcome: revenue, retention, or hours saved. We measure what we ship.",
    icon: Target,
    visual: "growth",
  },
];

/**
 * PLACEHOLDER FIGURES. These are sample values to demonstrate the layout and
 * are labeled as such on the page. Replace them with verified numbers (or
 * remove the block) before launch.
 */
export const stats = [
  { value: 25, suffix: "+", label: "Products shipped" },
  { value: 2, suffix: " wk", label: "Sprint cadence" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Uptime target" },
  { value: 24, suffix: " h", label: "Response time" },
];

/* -------------------------------------------------------------------------- */
/*  Team                                                                       */
/* -------------------------------------------------------------------------- */

export type TeamMember = {
  name: string;
  initials: string;
  role: string;
  location: string;
  bio: string;
  /** Path to a real headshot in /public, e.g. "/team/chad-choquette.jpg". */
  photo?: string;
  /** Zoom into the face: scale factor and transform origin (CSS). */
  photoCrop?: { scale: number; origin: string };
  accent: [string, string];
};

export const team: TeamMember[] = [
  {
    name: "Chad Choquette",
    initials: "CC",
    role: "Founder & Engineering Lead",
    location: "Taylors, South Carolina, United States",
    bio: "Leading engineering strategy and product development at Stratus Labs LLC, focusing on building scalable software solutions, AI-powered systems, and innovative technology products.",
    photo: "/team/chad-choquette.jpg",
    photoCrop: { scale: 1.45, origin: "50% 20%" },
    accent: ["#4f7cff", "#8b5cf6"],
  },
  {
    name: "James Oli",
    initials: "JO",
    role: "Service Maintainer & AI Engineer",
    location: "Bamban, Tarlac, Philippines",
    bio: "Focused on maintaining technology services, developing AI-powered solutions, and supporting reliable, intelligent software systems.",
    photo: "/team/james-oli.jpg",
    photoCrop: { scale: 1.2, origin: "50% 38%" },
    accent: ["#22d3ee", "#4f7cff"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Process                                                                    */
/* -------------------------------------------------------------------------- */

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "Understand business goals and requirements.",
    icon: Search,
    deliverables: ["Stakeholder workshops", "Requirements map", "Feasibility check"],
  },
  {
    step: "02",
    title: "Strategize",
    description: "Create the architecture and development roadmap.",
    icon: Compass,
    deliverables: ["System architecture", "Milestone roadmap", "Scope & estimates"],
  },
  {
    step: "03",
    title: "Build",
    description: "Develop, test, and refine the solution.",
    icon: Hammer,
    deliverables: ["Weekly demos", "Automated testing", "CI/CD pipeline"],
  },
  {
    step: "04",
    title: "Launch & Scale",
    description: "Deploy, optimize, and continuously improve.",
    icon: Rocket,
    deliverables: ["Production rollout", "Monitoring & alerts", "Iteration cycles"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Featured (demo) projects                                                   */
/* -------------------------------------------------------------------------- */

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  mockup: "chat" | "workflow" | "dashboard";
};

export const projects: Project[] = [
  {
    title: "AI Customer Support Platform",
    category: "AI Agents",
    description:
      "An LLM-powered help desk that resolves routine tickets, drafts replies grounded in your knowledge base, and escalates edge cases to a human.",
    tags: ["Next.js", "OpenAI", "PostgreSQL", "RAG"],
    mockup: "chat",
  },
  {
    title: "Intelligent Workflow Automation",
    category: "Automation",
    description:
      "A document intake pipeline that classifies, extracts, and routes data into downstream systems, with a review queue for low-confidence cases.",
    tags: ["Python", "Queues", "AWS"],
    mockup: "workflow",
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "SaaS",
    description:
      "Multi-tenant analytics with real-time metrics, cohort views, and natural-language questions over your data.",
    tags: ["React", "Supabase", "TypeScript"],
    mockup: "dashboard",
  },
];

/* -------------------------------------------------------------------------- */
/*  Tech stack                                                                 */
/* -------------------------------------------------------------------------- */

export const techStack = [
  { name: "React", category: "Interface", color: "#22d3ee" },
  { name: "Next.js", category: "Framework", color: "#e6e8ee" },
  { name: "TypeScript", category: "Language", color: "#4f7cff" },
  { name: "Node.js", category: "Runtime", color: "#4ade80" },
  { name: "Python", category: "Language", color: "#facc15" },
  { name: "OpenAI", category: "AI Models", color: "#a5b4fc" },
  { name: "PostgreSQL", category: "Database", color: "#60a5fa" },
  { name: "Supabase", category: "Backend", color: "#34d399" },
  { name: "AWS", category: "Cloud", color: "#fb923c" },
  { name: "Docker", category: "Containers", color: "#38bdf8" },
];
