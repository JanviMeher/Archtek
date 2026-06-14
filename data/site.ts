export const siteConfig = {
  name: "Archtek Design Studio",
  shortName: "Archtek",
  tagline: "Architecture and interiors shaped around how you live and work.",
  description:
    "Pune-based architecture and interior design studio founded in 2015. Residential, commercial, and 3D visualization services across Maharashtra.",
  url: "https://www.archtekds.com",
  founded: 2015,
  projectCount: 120,
  address: {
    line1: "402, Crescent Park, Pan Card Club Road",
    line2: "Opp. Westport, Baner",
    city: "Pune",
    pincode: "411045",
    full: "402, Crescent Park, Pan Card Club Road, Opp. Westport, Baner, Pune - 411045",
  },
  phone: "+91 9545488585",
  phoneHref: "tel:+919545488585",
  whatsapp: "https://wa.me/919545488585",
  email: "info@archtekds.com",
  officeHours: "Mon–Sat, 10:00 AM – 6:00 PM",
  social: {
    instagram: "https://www.instagram.com/archtekdesignstudio/",
    linkedin: "https://linkedin.com/company/archtek-design-studio",
  },
  navLinks: [
    { label: "Projects", href: "/projects" },
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

export const philosophyPillars = [
  {
    title: "Context",
    description:
      "Every site has climate, culture, and constraints. We design from place — not from templates.",
  },
  {
    title: "Function",
    description:
      "Beautiful spaces must work daily. Layout, light, and flow come before ornament.",
  },
  {
    title: "Craft",
    description:
      "Materials, details, and supervision ensure what we draw is what you experience.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "Site visit, brief, budget alignment, and feasibility study.",
  },
  {
    step: "02",
    title: "Design",
    description: "Concept, 3D visualization, and detailed drawings for approval.",
  },
  {
    step: "03",
    title: "Develop",
    description: "Working drawings, BOQ, vendor coordination, and site supervision.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "Handover, snagging, and post-occupancy support where needed.",
  },
] as const;

export const projectTypes = [
  "Residential",
  "Commercial",
  "Interior Design",
  "Mixed-use",
  "Retail",
  "Hospitality",
  "Other",
] as const;

export const budgetRanges = [
  "Under ₹25 Lakhs",
  "₹25–50 Lakhs",
  "₹50 Lakhs – 1 Crore",
  "₹1–3 Crore",
  "Above ₹3 Crore",
  "Prefer not to say",
] as const;
