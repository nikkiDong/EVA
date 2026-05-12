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
    // Per Troy 2026-04-25: retreat location confirmed as Delaware coast
    // (boardwalk / coastal — NOT Caribbean). Specific dates still TBD.
    badge: "Retreat",
    price: "By Invitation",
    date: "Dates to be announced · Delaware Coast",
    title: "EVOLVE Retreat 2027",
    description: "A high-touch retreat for visionary CEOs and founders ready to reset, realign, and grow with intention. Set along the Delaware coastline — quiet boardwalks, Atlantic shoreline, and the kind of distance that makes new clarity possible. Join the waitlist for updates, early access, and future details.",
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

/* ── All 13 EVOLVE Community membership features (Troy's approved list) ── */
export const membershipFeatures: string[] = [
  "Access to the EVOLVE Community",
  "Networking, referrals & relationship-building",
  "Monthly Real Talk Session",
  "Shared discussion & community engagement",
  "Visibility with other members",
  "Monthly Strategic Share",
  "Monthly Deep Dive discussion",
  "Peer Strategy Admin Session",
  "Learning-centered conversation & insight",
  "Monthly Office Session",
  "Marketplace adaptation, decision-making & current business realities",
  "Primary access to connecting through coaching, retreats & events",
  "Tools & resources",
];

export interface MembershipPlan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  tagline: string;
  includedCount: number;   // how many features (from the top) are included
  footerText: string;
  cta: string;
  variant: 'default' | 'featured';
}

export const membershipPlans: MembershipPlan[] = [
  {
    name: "EVOLVE Prime",
    monthlyPrice: "$39",
    annualPrice: "$390",
    tagline: "Connection, conversation, and community to position for what's next.",
    includedCount: 5,
    footerText: "Being in the room, building connection, and positioning for what's next.",
    cta: "Join Prime",
    variant: "default",
  },
  {
    name: "EVOLVE Prestige",
    monthlyPrice: "$69",
    annualPrice: "$690",
    tagline: "Deeper evolution, strategic growth, and intentional development.",
    includedCount: 9,
    footerText: "Moving with deliberate intentionality toward stronger growth, momentum, and viability.",
    cta: "Join Prestige",
    variant: "featured",
  },
  {
    name: "EVOLVE Premier",
    monthlyPrice: "$149",
    annualPrice: "$1,490",
    tagline: "Elevated access, stronger support, and sustainability-focused growth.",
    includedCount: 13,
    footerText: "Elevated access, strategic relevance, and a more immersive EVOLVE experience for sustainability.",
    cta: "Join Premier",
    variant: "default",
  },
];
