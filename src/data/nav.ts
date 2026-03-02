export interface NavItem {
  label: string;
  path: string;
  dropdown?: { label: string; path: string; hash?: string }[];
  cta?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    dropdown: [
      { label: "Our Story", path: "/about", hash: "story" },
      { label: "Meet the Founder", path: "/about", hash: "founder" },
      { label: "Testimonials", path: "/about", hash: "testimonials" },
    ],
  },
  {
    label: "Our Services",
    path: "/services",
    dropdown: [
      { label: "Coaching", path: "/services", hash: "coaching" },
      { label: "Business Development", path: "/services", hash: "bizdev" },
      { label: "Organizational Development", path: "/services", hash: "orgdev" },
      { label: "Innovation", path: "/services", hash: "innovation" },
    ],
  },
  { label: "Speaking", path: "/speaking" },
  { label: "Blog", path: "/blog" },
  { label: "Events & Shop", path: "/events" },
  { label: "Contact", path: "/contact", cta: true },
];
