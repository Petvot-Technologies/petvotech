export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  type: string;
  description: string;
  /** Path to dashboard/project UI image (e.g. in public/case-studies/) */
  dashboardImage?: string;
  imagePlaceholder?: string;
  challenge: string;
  solution: string;
  results?: string[];
  techOrFeatures?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-enterprise-learning-management-system",
    title: "AI-Powered Enterprise Learning Management System",
    tagline: "Intelligent learning at scale",
    type: "Learning Management System",
    dashboardImage: "/case-studies/lms-dashboard.png",
    description: "An enterprise-grade LMS that uses AI to personalize learning paths, automate assessments, and deliver measurable training outcomes.",
    challenge:
      "The client needed a modern learning platform that could scale across regions, support multiple content types, and provide actionable insights—without the complexity and cost of legacy enterprise LMS solutions.",
    solution:
      "We built a cloud-native LMS with AI-driven recommendations, automated grading and feedback, progress analytics, and seamless integration with existing HR and compliance systems. The platform supports blended learning, certifications, and role-based access at enterprise scale.",
    results: [
      "Scalable to thousands of learners across regions",
      "AI-powered content recommendations and adaptive learning paths",
      "Reduced admin overhead with automated reporting and compliance tracking",
      "Single platform for onboarding, upskilling, and certifications",
    ],
    techOrFeatures: [
      "AI/ML for personalization and assessment",
      "Cloud-native architecture",
      "Multi-tenant support",
      "Integrations (HRIS, SSO, content providers)",
      "Analytics and reporting dashboard",
    ],
  },
  {
    slug: "finstream-automation",
    title: "FinStream Automation",
    tagline: "End-to-end finance workflow automation",
    type: "Finance & Automation",
    dashboardImage: "/case-studies/finstream-dashboard.png",
    description: "A custom automation platform that streamlines financial workflows, reconciliation, and reporting for a growing fintech operation.",
    challenge:
      "Manual, spreadsheet-driven finance processes were slowing growth and increasing error risk. The team needed a single system to automate data flows, reconciliation, and regulatory reporting without replacing core banking systems overnight.",
    solution:
      "We designed and implemented FinStream Automation—a workflow engine that connects existing systems, automates reconciliation and approval flows, and generates audit-ready reports. The solution was built in phases to minimize disruption while delivering quick wins.",
    results: [
      "Faster reconciliation and fewer manual errors",
      "Automated approval workflows and audit trails",
      "Unified reporting for operations and compliance",
      "Foundation for future scaling and new product lines",
    ],
    techOrFeatures: [
      "Workflow automation engine",
      "System integrations (core banking, ERP, data sources)",
      "Reconciliation and exception handling",
      "Reporting and compliance outputs",
      "Role-based access and audit logging",
    ],
  },
  {
    slug: "saas-event-booking-ticketing-platform",
    title: "SaaS Event Booking & Ticketing Platform",
    tagline: "From signup to sold-out events",
    type: "SaaS · Events",
    dashboardImage: "/case-studies/event-dashboard.png",
    description: "A full-featured SaaS platform for event organizers to create events, sell tickets, manage attendees, and analyze performance.",
    challenge:
      "Event organizers were juggling multiple tools for registration, payments, and attendee management. They needed one platform that could handle everything from free workshops to paid conferences, with flexibility for different event types and pricing models.",
    solution:
      "We built a multi-tenant SaaS platform with event creation and listing, configurable ticketing (free/paid, tiers, early bird), secure payments, check-in and badge printing, and an organizer dashboard with real-time analytics. The product is white-label ready and scales for high-traffic events.",
    results: [
      "Single platform for creation, ticketing, and attendee management",
      "Flexible pricing and ticket types (free, paid, tiers)",
      "Integrated payments and refunds",
      "Real-time analytics and post-event reporting",
    ],
    techOrFeatures: [
      "Multi-tenant SaaS architecture",
      "Event creation and ticketing engine",
      "Payment gateway integration",
      "Check-in and attendee management",
      "Organizer dashboard and analytics",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((c) => c.slug);
}
