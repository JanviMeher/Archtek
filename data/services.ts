export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  scope: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "architecture",
    title: "Architecture",
    tagline: "From concept to construction",
    description:
      "End-to-end architectural services for residential, commercial, mixed-use, and institutional projects — with site supervision that protects design intent.",
    scope: [
      "Residential homes & villas",
      "Commercial & office buildings",
      "Mixed-use developments",
      "Institutional & healthcare",
      "Renovation & additions",
      "Site supervision & PMC support",
    ],
    image: "/images/projects/lonavala-residence/01-lonavala.png",
  },
  {
    id: "interiors",
    title: "Interior Design",
    tagline: "Spaces that feel lived-in",
    description:
      "Interior environments for homes, offices, retail, clinics, and hospitality — including custom furniture designed as part of the whole.",
    scope: [
      "Residential interiors",
      "Office & workplace design",
      "Retail & boutique fit-outs",
      "Clinics & healthcare",
      "Hospitality & F&B",
      "Custom furniture & lighting",
    ],
    image: "/images/projects/pokharna-residence/05-pokharna.jpg",
  },
  {
    id: "visualization",
    title: "3D Visualization",
    tagline: "See it before you build",
    description:
      "Photorealistic renders and walkthroughs for client presentations, approvals, and marketing — aligned with final design decisions.",
    scope: [
      "Exterior & interior renders",
      "Animated walkthroughs",
      "Material & lighting studies",
      "Pre-construction marketing assets",
      "Design iteration support",
    ],
    image: "/images/projects/infinity-square/02-infinity.png",
  },
];

export const clientTypes = [
  {
    title: "Homeowners",
    description: "Building or renovating a home in Pune or beyond — from plots to apartments.",
  },
  {
    title: "Developers",
    description: "Commercial, mixed-use, and residential projects needing design credibility and delivery.",
  },
  {
    title: "Brands & Businesses",
    description: "Retail, offices, clinics, and hospitality spaces that reflect your brand.",
  },
];

export const expandedProcess = [
  {
    step: "01",
    title: "Discovery & Brief",
    deliverables: "Site analysis, feasibility, budget framework, project schedule",
  },
  {
    step: "02",
    title: "Concept Design",
    deliverables: "Plans, elevations, 3D views, material direction, cost estimate",
  },
  {
    step: "03",
    title: "Design Development",
    deliverables: "Detailed drawings, specifications, vendor shortlists, approvals",
  },
  {
    step: "04",
    title: "Construction",
    deliverables: "Working drawings, BOQ, site visits, quality checks, snag lists",
  },
  {
    step: "05",
    title: "Handover",
    deliverables: "Final inspection, as-built documentation, maintenance guidance",
  },
];
