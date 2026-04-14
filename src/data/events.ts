export interface Event {
  badge: string;
  price: string;
  date: string;
  title: string;
  description: string;
  cta: string;
  bgStyle?: string;
}

export const events: Event[] = [
  {
    badge: "Retreat",
    price: "By Invitation",
    date: "Dates to be announced",
    title: "EVOLVE Retreat 2027",
    description: "A high-touch retreat experience for visionary CEOs and founders ready to reset, realign, and grow with intention. Join the waitlist for updates, early access, and future details.",
    cta: "Join the Waitlist →",
  },
  {
    badge: "Virtual",
    price: "TBD",
    date: "Coming soon · Virtual",
    title: "Virtual Strategy Intensive",
    description: "A focused live session designed to help leaders sharpen strategy, strengthen systems, and identify next steps for sustainable growth.",
    cta: "Request Info →",
    bgStyle: "linear-gradient(135deg,#2d2d3f,#1a1a2e)",
  },
  {
    badge: "Preview",
    price: "Complimentary / TBD",
    date: "Coming soon · Virtual",
    title: "EVOLVE Community Preview Session",
    description: "An introductory live experience for leaders interested in the EVOLVE Community — including coaching style, membership benefits, and growth support structure.",
    cta: "Register Interest →",
    bgStyle: "linear-gradient(135deg,#3a2d1e,#1a1a2e)",
  },
];

export interface MembershipPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  variant: 'default' | 'featured';
}

export const membershipPlans: MembershipPlan[] = [
  {
    name: "EVOLVE Clarity",
    price: "$49",
    period: "Billed monthly",
    features: [
      "Private community access",
      "One monthly live strategy session",
      "Curated resources and reflections",
      "Early announcements and updates",
    ],
    cta: "Join Clarity",
    variant: "default",
  },
  {
    name: "EVOLVE Momentum",
    price: "$149",
    period: "Billed monthly",
    features: [
      "Everything in Clarity",
      "Two live group coaching sessions per month",
      "Hot-seat coaching opportunities",
      "Event discounts",
      "Planning prompts, templates, and tools",
    ],
    cta: "Join Momentum",
    variant: "featured",
  },
  {
    name: "EVOLVE Expansion",
    price: "$349",
    period: "Billed monthly",
    features: [
      "Everything in Momentum",
      "One monthly small-group advisory circle",
      "Quarterly growth mapping session",
      "Priority access to events and retreats",
      "Priority Q&A support",
    ],
    cta: "Join Expansion",
    variant: "default",
  },
];
