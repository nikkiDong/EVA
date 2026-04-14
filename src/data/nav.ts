export interface NavItem {
  label: string;
  path: string;
  dropdown?: { label: string; path: string; hash?: string }[];
  cta?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Coaching", path: "/coaching" },
  { label: "Consulting", path: "/consulting" },
  { label: "Speaking", path: "/speaking" },
  {
    label: "About",
    path: "/about",
    dropdown: [
      { label: "Our Story", path: "/about", hash: "story" },
      { label: "Meet the Founder", path: "/about", hash: "founder" },
      { label: "Testimonials", path: "/about", hash: "testimonials" },
    ],
  },
  { label: "Events", path: "/events" },
  { label: "EVOLVE Community", path: "/evolve-community" },
  { label: "Connect", path: "/contact", cta: true },
];
