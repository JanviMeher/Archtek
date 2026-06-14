export type ProjectCategory = "residential" | "commercial" | "interiors";

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  location?: string;
  typology: string;
  category: ProjectCategory;
  featured: boolean;
  excerpt: string;
  description: string[];
  specs: ProjectSpec[];
  images: {
    hero: string;
    gallery: { src: string; alt: string; layout?: "full" | "half" }[];
  };
  relatedSlugs: string[];
}

function galleryFromDir(
  slug: string,
  files: string[],
  altPrefix: string,
  heroFile?: string
): Project["images"] {
  const heroName = heroFile ?? files[0];
  const hero = `/images/projects/${slug}/${heroName}`;
  const rest = files.filter((f) => f !== heroName);

  return {
    hero,
    gallery: rest.map((file, index) => ({
      src: `/images/projects/${slug}/${file}`,
      alt: `${altPrefix} — view ${index + 1}`,
      layout: index % 3 === 1 || index % 3 === 2 ? ("half" as const) : ("full" as const),
    })),
  };
}

const lonavalaFiles = [
  "01-lonavala.png",
  "02-lonavala.png",
  "03-lonavala.png",
  "04-lonavala.png",
  "05-lonavala.png",
  "06-lonavala.png",
  "07-lonavala.png",
];

const pokharnaFiles = Array.from({ length: 17 }, (_, i) =>
  `${String(i + 1).padStart(2, "0")}-pokharna.jpg`
);

const infinityFiles = [
  "01-infinity.png",
  "02-infinity.png",
  "03-infinity.png",
  "04-infinity.png",
  "05-infinity.png",
];

export const projects: Project[] = [
  {
    slug: "lonavala-residence",
    title: "Private Residence, Lonavala",
    location: "Lonavala",
    typology: "Private Residence",
    category: "residential",
    featured: true,
    excerpt:
      "The Modern Private Residence in Lonavala is a stunning example of our innovative and functional design approach.",
    description: [
      "The Modern Private Residence in Lonavala is a stunning example of our innovative and functional design approach.",
      "Our design philosophy is evident in the Modern Residence, where aesthetics and practicality seamlessly blend to create a harmonious living space. This project truly reflects our commitment to excellence.",
    ],
    specs: [],
    images: galleryFromDir("lonavala-residence", lonavalaFiles, "Private Residence, Lonavala"),
    relatedSlugs: ["pokharna-residence", "infinity-square"],
  },
  {
    slug: "pokharna-residence",
    title: "Pokharna Residence",
    typology: "Private Residence",
    category: "residential",
    featured: true,
    excerpt: "Pokharna Residence — residential architecture by Archtek Design Studio.",
    description: [],
    specs: [],
    images: galleryFromDir("pokharna-residence", pokharnaFiles, "Pokharna Residence"),
    relatedSlugs: ["lonavala-residence", "infinity-square"],
  },
  {
    slug: "infinity-square",
    title: "Infinity Square",
    location: "Pune",
    typology: "Commercial Tower",
    category: "commercial",
    featured: true,
    excerpt:
      "The Office Building in Pune embodies our dedication to creating unique and inspiring facade design.",
    description: [
      "The Office Building in Pune embodies our dedication to creating unique and inspiring facade design — balancing identity, performance, and buildability at street level.",
    ],
    specs: [{ label: "Project type", value: "Commercial Tower" }],
    images: galleryFromDir("infinity-square", infinityFiles, "Infinity Square"),
    relatedSlugs: ["pokharna-residence", "lonavala-residence"],
  },
  {
    slug: "badales-residence",
    title: "Badale's Residence",
    typology: "Private Residence",
    category: "interiors",
    featured: false,
    excerpt: "Badale's Residence",
    description: [],
    specs: [],
    images: galleryFromDir("badales-residence", ["01-badales-residence-a802c1d5.png"], "Badale's Residence"),
    relatedSlugs: ["thakkars-residence", "gadgil-residence", "pokharna-residence-interiors"],
  },
  {
    slug: "bindra-engineering-office",
    title: "Bindra Engineering Office",
    typology: "Commercial Office",
    category: "interiors",
    featured: false,
    excerpt: "Bindra Engineering Office",
    description: [],
    specs: [],
    images: galleryFromDir("bindra-engineering-office", ["01-bindra-engineering-office-a4b2a5ad.jpg", "02-bindra-engineering-office-50fa0e18.jpg", "03-bindra-engineering-office-c98b305d.jpg", "04-bindra-engineering-office-a74bb637.jpg", "05-bindra-engineering-office-24ae0904.jpg", "06-bindra-engineering-office-b40bb629.jpg", "07-bindra-engineering-office-5f9dc44b.jpg"], "Bindra Engineering Office"),
    relatedSlugs: ["maharashtra-olympics-office", "santosh-steel-office", "jai-office"],
  },
  {
    slug: "bindras-mansion",
    title: "Bindra's Mansion",
    typology: "Private Residence",
    category: "interiors",
    featured: false,
    excerpt: "Bindra's Mansion",
    description: [],
    specs: [],
    images: galleryFromDir("bindras-mansion", ["01-bindras-mansion-1804b686.jpg", "02-bindras-mansion-e148202b.jpg", "03-bindras-mansion-e5a8b041.jpg", "04-bindras-mansion-fc508662.jpg", "05-bindras-mansion-1f49c304.jpg", "06-bindras-mansion-8a6e524e.jpg", "07-bindras-mansion-32871781.jpg", "08-bindras-mansion-53776328.jpg", "09-bindras-mansion-cf83ac28.jpg", "10-bindras-mansion-8a179d9c.jpg"], "Bindra's Mansion"),
    relatedSlugs: ["thakkars-residence", "gadgil-residence", "pokharna-residence-interiors"],
  },
  {
    slug: "chandaks-residence",
    title: "Chandak's Residence",
    typology: "Private Residence",
    category: "interiors",
    featured: false,
    excerpt: "Chandak's Residence",
    description: [],
    specs: [],
    images: galleryFromDir("chandaks-residence", ["01-chandaks-residence-a802c1d5.png"], "Chandak's Residence"),
    relatedSlugs: ["thakkars-residence", "gadgil-residence", "pokharna-residence-interiors"],
  },
  {
    slug: "gadgil-residence",
    title: "Gadgil Residence",
    typology: "Private Residence",
    category: "interiors",
    featured: false,
    excerpt: "Gadgil Residence",
    description: [],
    specs: [],
    images: galleryFromDir("gadgil-residence", ["01-gadgil-residence-27022a86.jpg", "02-gadgil-residence-a63e841f.jpg", "03-gadgil-residence-fa9bdb94.jpg", "04-gadgil-residence-369f252b.jpg", "05-gadgil-residence-02f415ed.jpg", "06-gadgil-residence-cd207b29.jpg", "07-gadgil-residence-35beb195.jpg", "08-gadgil-residence-9ab8f3dc.jpg", "09-gadgil-residence-a4097bac.jpg", "10-gadgil-residence-97acd42d.jpg", "11-gadgil-residence-29a1c829.jpg", "12-gadgil-residence-bdc64e99.jpg", "13-gadgil-residence-10ed9345.jpg", "14-gadgil-residence-5bac8d27.jpg", "15-gadgil-residence-0e276b28.jpg", "16-gadgil-residence-81c69270.jpg", "17-gadgil-residence-a366dee6.jpg", "18-gadgil-residence-27b33062.jpg"], "Gadgil Residence"),
    relatedSlugs: ["thakkars-residence", "pokharna-residence-interiors", "bindras-mansion"],
  },
  {
    slug: "gupta-residence",
    title: "Gupta Residence",
    typology: "Private Residence",
    category: "interiors",
    featured: false,
    excerpt: "Gupta Residence",
    description: [],
    specs: [],
    images: galleryFromDir("gupta-residence", ["01-gupta-residence-4b26e78c.jpg", "02-gupta-residence-47ae3931.jpg", "03-gupta-residence-020c131b.jpg", "04-gupta-residence-8fabdffb.png", "05-gupta-residence-ddb27cff.jpg", "06-gupta-residence-60310f4d.png"], "Gupta Residence"),
    relatedSlugs: ["thakkars-residence", "gadgil-residence", "pokharna-residence-interiors"],
  },
  {
    slug: "jai-office",
    title: "JAI Office",
    typology: "Commercial Office",
    category: "interiors",
    featured: false,
    excerpt: "JAI Office",
    description: [],
    specs: [],
    images: galleryFromDir("jai-office", ["01-jai-office-31abd0c7.png", "02-jai-office-a8933382.png", "03-jai-office-9af0971f.png", "04-jai-office-26e74119.png", "05-jai-office-b94d3022.png", "06-jai-office-e7ba8220.png", "07-jai-office-b8fb0411.png", "08-jai-office-2f78e835.png"], "JAI Office"),
    relatedSlugs: ["maharashtra-olympics-office", "santosh-steel-office", "bindra-engineering-office"],
  },
  {
    slug: "jjit-fintech-office",
    title: "JJIT Fintech Office",
    typology: "Commercial Office",
    category: "interiors",
    featured: false,
    excerpt: "JJIT Fintech Office",
    description: [],
    specs: [],
    images: galleryFromDir("jjit-fintech-office", ["01-jjit-fintech-office-ba0fafa6.jpg", "02-jjit-fintech-office-95fb4873.jpg", "03-jjit-fintech-office-7e5eaa61.jpg", "04-jjit-fintech-office-5978193a.jpg", "05-jjit-fintech-office-0a35790a.jpg", "06-jjit-fintech-office-7f9c5ec1.jpg"], "JJIT Fintech Office"),
    relatedSlugs: ["maharashtra-olympics-office", "santosh-steel-office", "jai-office"],
  },
  {
    slug: "kabra-residence-jalgaon",
    title: "Kabra Residence Jalgaon",
    location: "Jalgaon",
    typology: "Private Residence",
    category: "interiors",
    featured: false,
    excerpt: "Kabra Residence Jalgaon",
    description: [],
    specs: [],
    images: galleryFromDir("kabra-residence-jalgaon", ["01-kabra-residence-jalgaon-be11dccd.jpg", "02-kabra-residence-jalgaon-b9d0a3aa.jpg", "03-kabra-residence-jalgaon-d2b28eeb.jpg", "04-kabra-residence-jalgaon-e4de944c.jpg", "05-kabra-residence-jalgaon-709e1393.jpg", "06-kabra-residence-jalgaon-2718c82c.jpg", "07-kabra-residence-jalgaon-b7f0c776.jpg", "08-kabra-residence-jalgaon-5a53bb11.jpg"], "Kabra Residence Jalgaon"),
    relatedSlugs: ["thakkars-residence", "gadgil-residence", "pokharna-residence-interiors"],
  },
  {
    slug: "kabra-residence-mumbai",
    title: "Kabra Residence Mumbai",
    location: "Mumbai",
    typology: "Private Residence",
    category: "interiors",
    featured: false,
    excerpt: "Kabra Residence Mumbai",
    description: [],
    specs: [],
    images: galleryFromDir("kabra-residence-mumbai", ["01-kabra-residence-mumbai-a802c1d5.png"], "Kabra Residence Mumbai"),
    relatedSlugs: ["thakkars-residence", "gadgil-residence", "pokharna-residence-interiors"],
  },
  {
    slug: "maharashtra-olympics-office",
    title: "Maharashtra Olympics Office",
    typology: "Commercial Office",
    category: "interiors",
    featured: false,
    excerpt: "Maharashtra Olympics Office",
    description: [],
    specs: [],
    images: galleryFromDir("maharashtra-olympics-office", ["01-maharashtra-olympics-office-248129ed.jpg", "02-maharashtra-olympics-office-7694626c.jpg", "03-maharashtra-olympics-office-eac8a082.jpg", "04-maharashtra-olympics-office-13c6db78.jpg", "05-maharashtra-olympics-office-c0d03796.jpg", "06-maharashtra-olympics-office-0b643f50.jpg", "07-maharashtra-olympics-office-7a8418da.jpg", "08-maharashtra-olympics-office-433ba9ca.jpg", "09-maharashtra-olympics-office-02ee4ca9.jpg", "10-maharashtra-olympics-office-756eefdd.jpg", "11-maharashtra-olympics-office-b14e3778.jpg"], "Maharashtra Olympics Office"),
    relatedSlugs: ["santosh-steel-office", "jai-office", "bindra-engineering-office"],
  },
  {
    slug: "navals-residence",
    title: "Naval's Residence",
    typology: "Private Residence",
    category: "interiors",
    featured: false,
    excerpt: "Naval's Residence",
    description: [],
    specs: [],
    images: galleryFromDir("navals-residence", ["01-navals-residence-a802c1d5.png"], "Naval's Residence"),
    relatedSlugs: ["thakkars-residence", "gadgil-residence", "pokharna-residence-interiors"],
  },
  {
    slug: "neowies-heathcare-office",
    title: "Neowies Healthcare Office",
    typology: "Commercial Office",
    category: "interiors",
    featured: false,
    excerpt: "Neowies Healthcare Office",
    description: [],
    specs: [],
    images: galleryFromDir("neowies-heathcare-office", ["01-neowies-heathcare-office-a802c1d5.png"], "Neowies Healthcare Office"),
    relatedSlugs: ["maharashtra-olympics-office", "santosh-steel-office", "jai-office"],
  },
  {
    slug: "pokharna-residence-interiors",
    title: "Pokharna Residence",
    typology: "Private Residence",
    category: "interiors",
    featured: false,
    excerpt: "Pokharna Residence",
    description: [],
    specs: [],
    images: galleryFromDir("pokharna-residence-interiors", ["01-pokharna-residence-interiors-3b76bc46.jpg", "02-pokharna-residence-interiors-07ea64b7.jpg", "03-pokharna-residence-interiors-d0b37798.jpg", "04-pokharna-residence-interiors-83db9a9d.jpg", "05-pokharna-residence-interiors-f796d99b.jpg", "06-pokharna-residence-interiors-31de8818.jpg", "07-pokharna-residence-interiors-58946b30.jpg", "08-pokharna-residence-interiors-ed6f0212.jpg", "09-pokharna-residence-interiors-dd9515a0.jpg", "10-pokharna-residence-interiors-0bb6c55c.jpg", "11-pokharna-residence-interiors-42690ea0.jpg", "12-pokharna-residence-interiors-78c24558.jpg", "13-pokharna-residence-interiors-625458c8.jpg", "14-pokharna-residence-interiors-61f6204e.jpg", "15-pokharna-residence-interiors-fa1c55fa.jpg", "16-pokharna-residence-interiors-69eb7e9c.jpg", "17-pokharna-residence-interiors-e98fcfe9.jpg"], "Pokharna Residence"),
    relatedSlugs: ["thakkars-residence", "gadgil-residence", "bindras-mansion"],
  },
  {
    slug: "rathis-residence",
    title: "Rathi's Residence",
    typology: "Private Residence",
    category: "interiors",
    featured: false,
    excerpt: "Rathi's Residence",
    description: [],
    specs: [],
    images: galleryFromDir("rathis-residence", ["01-rathis-residence-a802c1d5.png"], "Rathi's Residence"),
    relatedSlugs: ["thakkars-residence", "gadgil-residence", "pokharna-residence-interiors"],
  },
  {
    slug: "santosh-steel-office",
    title: "Santosh Steel Office",
    typology: "Commercial Office",
    category: "interiors",
    featured: false,
    excerpt: "Santosh Steel Office",
    description: [],
    specs: [],
    images: galleryFromDir("santosh-steel-office", ["01-santosh-steel-office-b20279ca.jpg", "02-santosh-steel-office-3cdbb9cd.jpg", "03-santosh-steel-office-dfefb6d4.jpg", "04-santosh-steel-office-f28e88cc.jpg", "05-santosh-steel-office-bc21d249.jpg", "06-santosh-steel-office-d8beab22.jpg", "07-santosh-steel-office-d5f27e7d.jpg", "08-santosh-steel-office-e460e72e.jpg", "09-santosh-steel-office-64e1400b.jpg"], "Santosh Steel Office"),
    relatedSlugs: ["maharashtra-olympics-office", "jai-office", "bindra-engineering-office"],
  },
  {
    slug: "shindes-residence",
    title: "Shinde's Residence",
    typology: "Private Residence",
    category: "interiors",
    featured: false,
    excerpt: "Shinde's Residence",
    description: [],
    specs: [],
    images: galleryFromDir("shindes-residence", ["01-shindes-residence-7acab108.jpg", "02-shindes-residence-6a2bb9fb.jpg", "03-shindes-residence-efd5f751.jpg", "04-shindes-residence-4f3f7d3a.jpg", "05-shindes-residence-06534349.jpg", "06-shindes-residence-3d19640b.jpg", "07-shindes-residence-f6ce14f5.jpg"], "Shinde's Residence"),
    relatedSlugs: ["thakkars-residence", "gadgil-residence", "pokharna-residence-interiors"],
  },
  {
    slug: "solankis-residence",
    title: "Solanki's Residence",
    typology: "Private Residence",
    category: "interiors",
    featured: false,
    excerpt: "Solanki's Residence",
    description: [],
    specs: [],
    images: galleryFromDir("solankis-residence", ["01-solankis-residence-a802c1d5.png"], "Solanki's Residence"),
    relatedSlugs: ["thakkars-residence", "gadgil-residence", "pokharna-residence-interiors"],
  },
  {
    slug: "thakkars-residence",
    title: "Thakkar's Residence",
    typology: "Private Residence",
    category: "interiors",
    featured: false,
    excerpt: "Thakkar's Residence",
    description: [],
    specs: [],
    images: galleryFromDir("thakkars-residence", ["01-thakkars-residence-fadad7de.jpg", "02-thakkars-residence-5ccad937.jpg", "03-thakkars-residence-b68405ea.jpg", "04-thakkars-residence-cb30a80d.jpg", "05-thakkars-residence-54c4fdbd.jpg", "06-thakkars-residence-fdd5a09a.jpg", "07-thakkars-residence-98d6efae.jpg", "08-thakkars-residence-ea8184d0.jpg", "09-thakkars-residence-383acc1b.jpg", "10-thakkars-residence-3249a4b1.jpg", "11-thakkars-residence-a1ded842.jpg", "12-thakkars-residence-84746535.jpg", "13-thakkars-residence-de30d988.jpg", "14-thakkars-residence-650aa360.jpg", "15-thakkars-residence-8323b13c.jpg", "16-thakkars-residence-e6982c10.jpg", "17-thakkars-residence-8d483e64.jpg", "18-thakkars-residence-37577e90.jpg", "19-thakkars-residence-ad92c5d8.jpg", "20-thakkars-residence-28187a49.jpg"], "Thakkar's Residence"),
    relatedSlugs: ["gadgil-residence", "pokharna-residence-interiors", "bindras-mansion"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getRelatedProjects(slugs: string[]): Project[] {
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== undefined);
}

export function getProjectsByCategory(category: ProjectCategory | "all"): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}
