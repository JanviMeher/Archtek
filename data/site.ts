export const siteConfig = {
  name: "Archtek Design Studio",
  shortName: "Archtek",
  tagline: "Crafting Spaces That Inspire",
  description:
    "Pune-based architecture and interior design studio. Turnkey home interiors, curated editions, and design-led spaces — from concept to handover.",
  url: "https://www.archtekds.com",
  founded: 2015,
  projectCount: 120,
  address: {
    line1: "402, Crescent Park",
    line2: "Pancard Club Road, Baner",
    city: "Pune",
    pincode: "411045",
    full: "402, Crescent Park, Pancard Club Road, Baner, Pune – 411045",
  },
  phone: "+91 9545488585",
  phoneHref: "tel:+919545488585",
  whatsapp: "https://wa.me/919545488585",
  email: "info@archtekds.com",
  officeHours: "Mon–Sat, 10:00 AM – 6:00 PM",
  social: {
    instagram: "https://www.instagram.com/archtekdesignstudio/",
    instagramHandle: "@archtekdesignstudio",
    linkedin: "https://linkedin.com/company/archtek-design-studio",
  },
  navLinks: [
    { label: "Projects", href: "/projects" },
    { label: "Editions", href: "/editions" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type ProjectCategory = "residential" | "commercial" | "interiors";

export const projectCategories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "interiors", label: "Interiors" },
];

export const projectStatuses = [
  "Planning",
  "Under Construction",
  "Ready to Move",
  "Renovation",
] as const;

export const configurations = ["1BHK", "2BHK", "3BHK", "4BHK+", "Villa", "Office", "Other"] as const;

export const possessionStatuses = [
  "Already in possession",
  "Within 3 months",
  "3–6 months",
  "6–12 months",
  "More than 12 months",
] as const;

export const budgetRanges = [
  "Under ₹7 Lakhs",
  "₹7–12 Lakhs",
  "₹12–17 Lakhs",
  "₹17–25 Lakhs",
  "Above ₹25 Lakhs",
  "Prefer not to say",
] as const;

export const projectTypes = [
  "Turnkey Interiors",
  "Design Only",
  "Architecture",
  "Commercial",
  "Renovation",
  "Other",
] as const;
