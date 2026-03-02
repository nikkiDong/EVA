export interface BlogPost {
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  bgStyle?: string;
}

export const blogPosts: BlogPost[] = [
  {
    category: "Leadership",
    date: "March 1, 2026",
    readTime: "5 min read",
    title: "5 Systems Every Growing Business Needs in 2026",
    excerpt: "Discover the five foundational systems that separate businesses that scale from those that stall — and how to implement them today.",
  },
  {
    category: "Coaching",
    date: "February 20, 2026",
    readTime: "4 min read",
    title: "Why Executive Coaching Is No Longer Optional",
    excerpt: "The modern business landscape demands leaders invest in themselves. Here's why coaching has become a competitive necessity.",
    bgStyle: "linear-gradient(135deg,#3a2d1e,#1a1a2e)",
  },
  {
    category: "Innovation",
    date: "February 12, 2026",
    readTime: "6 min read",
    title: "From Idea to Impact: The M.O.V.E.-U Framework",
    excerpt: "A behind-the-scenes look at our signature innovation framework and how organizations are using it to drive real change.",
    bgStyle: "linear-gradient(135deg,#2d3f2d,#1a1a2e)",
  },
  {
    category: "Workforce Dev",
    date: "February 5, 2026",
    readTime: "5 min read",
    title: "Building a Workforce That Thrives Through Change",
    excerpt: "How to develop resilient teams that don't just survive organizational transitions — they use them as catalysts for growth.",
    bgStyle: "linear-gradient(135deg,#2d2d4f,#1a1a2e)",
  },
  {
    category: "Org Development",
    date: "January 28, 2026",
    readTime: "7 min read",
    title: "The Cost of Misalignment: Why Culture Eats Strategy",
    excerpt: "When your team isn't aligned, even the best strategies fail. Here's how to diagnose and fix organizational misalignment.",
    bgStyle: "linear-gradient(135deg,#3f2d2d,#1a1a2e)",
  },
  {
    category: "Business Dev",
    date: "January 15, 2026",
    readTime: "4 min read",
    title: "Revenue Systems: Stop Chasing, Start Building",
    excerpt: "The difference between businesses that plateau and those that scale is the systems underneath. Learn how to build yours.",
    bgStyle: "linear-gradient(135deg,#2d3a3f,#1a1a2e)",
  },
];
