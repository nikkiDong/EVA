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
    badge: "Virtual",
    price: "$197",
    date: "March 15, 2026 · 10:00 AM EST",
    title: "Evolve 2026: Leadership Masterclass",
    description: "A half-day virtual intensive on building SMART systems for organizational leadership and workforce development.",
    cta: "Register Now →",
  },
  {
    badge: "In-Person",
    price: "$349",
    date: "April 22, 2026 · All Day",
    title: "Business Development Bootcamp",
    description: "An immersive full-day experience covering strategy, systems design, and actionable growth plans for your enterprise.",
    cta: "Register Now →",
    bgStyle: "linear-gradient(135deg,#2d2d3f,#1a1a2e)",
  },
  {
    badge: "Program",
    price: "$899",
    date: "Ongoing · 8-Week Cohort",
    title: "M.O.V.E.-U Lab™ Cohort",
    description: "Join a cohort of driven leaders in our signature 8-week innovation lab — includes coaching, resources, and certification.",
    cta: "Enroll Now →",
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
    name: "Starter",
    price: "$29",
    period: "Billed monthly",
    features: [
      "Access to blog & resource library",
      "Monthly newsletter with insights",
      "Community discussion forum",
      "10% off events & workshops",
    ],
    cta: "Get Started",
    variant: "default",
  },
  {
    name: "Professional",
    price: "$99",
    period: "Billed monthly",
    features: [
      "Everything in Starter",
      "Monthly group coaching session",
      "Exclusive webinars & masterclasses",
      "25% off events & workshops",
      "Priority event registration",
    ],
    cta: "Join Now",
    variant: "featured",
  },
  {
    name: "Executive",
    price: "$249",
    period: "Billed monthly",
    features: [
      "Everything in Professional",
      "1-on-1 coaching session monthly",
      "Free access to all virtual events",
      "Direct access to the Founder",
      "Custom growth plan & roadmap",
    ],
    cta: "Contact Us",
    variant: "default",
  },
];
