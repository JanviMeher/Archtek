export const whyChooseUs = [
  {
    id: "designed",
    title: "Designed, Not Assembled",
    description:
      "We don't fit homes into templates—we shape every space from the ground up.",
    icon: "blueprint",
  },
  {
    id: "vision",
    title: "Vision Before Budget",
    description:
      "We first define the design direction, then build a clear budget around the vision.",
    icon: "compass",
  },
  {
    id: "planning",
    title: "Segmented Smart Planning",
    description:
      "Each area is planned by purpose, material, finish, and execution priority.",
    icon: "grid",
  },
  {
    id: "architecture",
    title: "Architecture-Led Interiors",
    description:
      "Our work balances structure, space, light, proportion, and detail.",
    icon: "structure",
  },
  {
    id: "unique",
    title: "No Catalogue Thinking",
    description:
      "Every project is created uniquely—not picked from standard packages.",
    icon: "spark",
  },
  {
    id: "identity",
    title: "From Idea to Identity",
    description:
      "We create spaces that don't just look good—they feel designed specifically for you.",
    icon: "home",
  },
] as const;

export const whyArchtek = [
  {
    title: "Transparent",
    description:
      "We believe in complete transparency throughout the design process to help make your dream home a reality.",
    icon: "transparency",
  },
  {
    title: "Best Price",
    description:
      "Our in-house production enables us to offer competitive pricing without compromising on quality.",
    icon: "price",
  },
  {
    title: "Quality",
    description:
      "As a vertically integrated design company, we ensure premium craftsmanship and attention to every detail.",
    icon: "quality",
  },
] as const;

export const brandAssociations = [
  {
    category: "Furniture & Decor",
    brands: ["Pepperfry", "Blum", "O Decor"],
    icon: "sofa",
  },
  {
    category: "Door & Window",
    brands: ["Fenesta", "Armstrong", "Hettich"],
    icon: "door",
  },
  {
    category: "Paints & Wall Paneling",
    brands: ["Greenlam", "Merino", "Asian Paints", "ICA Pidilite", "CenturyPly"],
    icon: "paint",
  },
  {
    category: "Flooring & Ceiling",
    brands: ["Saint-Gobain", "Nexion", "Simpolo"],
    icon: "floor",
  },
  {
    category: "Lighting",
    brands: ["Häfele", "Philips", "LED Lum", "Anchor by Panasonic", "Crompton"],
    icon: "light",
  },
  {
    category: "Bathware",
    brands: ["Kohler", "Kajaria", "Jaquar"],
    icon: "bath",
  },
] as const;

export const designProcessPayments = [
  { stage: "Advance Booking", payment: "₹25,000" },
  { stage: "First Draft", payment: "40% (less ₹25,000 already paid)" },
  { stage: "Design Closure & Sign-off", payment: "35%" },
  { stage: "During Construction", payment: "20%" },
  { stage: "Before Handover", payment: "5%" },
] as const;

export const projectProcessSteps = [
  "Booking",
  "Onboarding",
  "Design",
  "Order",
  "Estimate",
  "Manufacturing",
  "Quality Check",
  "Delivery",
  "Installation",
  "On-site Civil/Electrical/POP Work",
  "Carpentry",
  "Final Finishing",
  "Handover",
] as const;

export const turnkeyWorkflow = [
  {
    title: "Consultation",
    items: [
      "Talk to your designer",
      "Share requirements",
      "Discuss style preferences",
      "Define project vision",
    ],
  },
  {
    title: "Estimate",
    items: ["Receive a detailed project estimate."],
  },
  {
    title: "Advance Booking",
    items: ["Retainer: ₹25,000"],
  },
  {
    title: "Design First Draft",
    items: ["2D Layout", "3D Layout", "Moodboard"],
    payment: "5%",
  },
  {
    title: "Design Closure",
    payment: "10%",
  },
  {
    title: "Project Sign-off",
    payment: "40%",
  },
  {
    title: "Manufacturing & Execution",
    payment: "45%",
  },
  {
    title: "Delivery",
    items: ["Materials reach site."],
  },
  {
    title: "Handover",
    items: ["Final walkthrough, documentation, and support."],
  },
] as const;

export interface EditionRoom {
  name: string;
  items: string[];
}

export interface Edition {
  slug: string;
  name: string;
  tagline: string;
  startingPrice: string;
  suitableFor: string[];
  rooms: EditionRoom[];
  highlight?: string;
}

export const editions: Edition[] = [
  {
    slug: "select",
    name: "Select Edition",
    tagline: "Thoughtful interiors for modern homes",
    startingPrice: "₹7 Lakhs",
    suitableFor: ["2BHK", "3BHK"],
    rooms: [
      {
        name: "Foyer",
        items: ["Custom shoe storage", "Concealed cabinets"],
      },
      {
        name: "Living Room",
        items: ["TV display unit", "Aluminium profile detailing", "Glass shutters"],
      },
      {
        name: "Dining Room",
        items: ["Premium dining setup", "Curated seating arrangement"],
      },
      {
        name: "Master Bedroom",
        items: [
          "Custom wardrobe",
          "Soft-close shutters",
          "Queen-size bed",
          "Upholstered headboard",
          "Bedside tables",
        ],
      },
      {
        name: "Guest Bedroom",
        items: ["Custom wardrobe", "Queen-size bed", "Bedside tables"],
      },
      {
        name: "Modular Kitchen",
        items: [
          "Tailor-made modular kitchen",
          "Premium base & overhead cabinets",
          "Hettich hardware",
          "Faber hob & chimney",
        ],
      },
    ],
  },
  {
    slug: "signature",
    name: "Signature Edition",
    tagline: "Elevated design with refined detailing",
    startingPrice: "₹12 Lakhs",
    suitableFor: ["2BHK", "3BHK"],
    rooms: [
      {
        name: "Foyer",
        items: ["Shoe rack", "Storage cabinets"],
      },
      {
        name: "Living Room",
        items: ["Premium TV unit", "Prayer unit", "Glass shutters"],
      },
      {
        name: "Dining Room",
        items: ["6-seater dining setup", "Custom partition"],
      },
      {
        name: "Master Bedroom",
        items: [
          "3-door wardrobe",
          "Dressing unit",
          "Study table",
          "Queen-size bed",
          "Bedside tables",
        ],
      },
      {
        name: "Kids Room",
        items: ["Wardrobe", "Study table", "Queen-size bed", "Bedside table"],
      },
      {
        name: "Guest Bedroom",
        items: ["Wardrobe", "Queen-size bed", "Bedside table"],
      },
      {
        name: "Modular Kitchen",
        items: ["Top & bottom cabinets", "Premium hardware", "Hob & chimney"],
      },
      {
        name: "Kitchen Accessories",
        items: [
          "Cutlery tray",
          "Plate rack",
          "Plain basket",
          "Bottle pull-out",
          "Waste bin pull-out",
          "Detergent holder",
        ],
      },
    ],
  },
  {
    slug: "bespoke",
    name: "Bespoke Edition",
    tagline: "Luxury interiors tailored to your lifestyle",
    startingPrice: "₹17 Lakhs",
    suitableFor: ["3BHK", "4BHK+", "Luxury Homes"],
    highlight: "Our most comprehensive residential package",
    rooms: [
      {
        name: "Foyer",
        items: ["Custom shoe rack", "Round mirror", "Cement texture feature wall"],
      },
      {
        name: "Living Room",
        items: [
          "Premium TV unit",
          "Prayer unit",
          "Designer curtains",
          "Wall panelling",
          "Decorative wall clock",
          "Sofa with lounge seating",
          "Accent cushions",
          "Designer carpet",
          "Centre table",
        ],
      },
      {
        name: "Dining Room",
        items: [
          "6-seater dining",
          "Custom partition",
          "Wash counter",
          "Frameless mirror",
          "Feature wall",
        ],
      },
      {
        name: "Master Bedroom",
        items: [
          "King-size storage bed",
          "Full-height wardrobe",
          "Dressing unit",
          "Study unit",
          "Roman blinds",
          "Accent chair",
          "Wallpaper feature wall",
          "Mattress",
          "Complete bed setting",
        ],
      },
      {
        name: "Kids Room",
        items: [
          "Queen-size bed",
          "Full-height wardrobe",
          "Study unit",
          "Wallpaper",
          "Mattress",
        ],
      },
      {
        name: "Guest Bedroom",
        items: [
          "Queen-size bed",
          "Full-height wardrobe",
          "Roman blinds",
          "Wallpaper",
          "Premium paint finish",
        ],
      },
      {
        name: "Modular Kitchen",
        items: ["Premium modular kitchen", "Hettich hardware", "Faber hob & chimney"],
      },
      {
        name: "Kitchen Accessories",
        items: [
          "Cutlery tray",
          "Plate rack",
          "Plain basket",
          "Bottle pull-out",
          "Waste bin pull-out",
          "Detergent holder",
        ],
      },
    ],
  },
  {
    slug: "commercial",
    name: "Commercial Edition",
    tagline: "Workspaces designed for productivity and brand presence",
    startingPrice: "On consultation",
    suitableFor: ["Offices", "Retail", "Corporate"],
    rooms: [
      {
        name: "Reception & Waiting Area",
        items: [
          "Reception desk",
          "Brand integration",
          "Visitor seating",
          "Ambient lighting",
        ],
      },
      {
        name: "Workstations",
        items: ["Ergonomic layouts", "Modular desks", "Cable management"],
      },
      {
        name: "Manager Cabins",
        items: [
          "Executive desk",
          "Storage",
          "Acoustic privacy",
          "Premium finishes",
        ],
      },
      {
        name: "Conference Room",
        items: [
          "AV-ready meeting room",
          "Acoustic treatment",
          "Smart lighting",
          "Conference table",
        ],
      },
      {
        name: "Director's Cabin",
        items: [
          "Premium executive workspace",
          "Custom furniture",
          "Feature wall",
          "Luxury finishes",
        ],
      },
      {
        name: "Pantry & Breakout Zone",
        items: ["Storage", "Lounge seating", "Durable finishes"],
      },
      {
        name: "Client Lounge",
        items: ["Visitor seating", "Brand-focused interiors", "Ambient lighting"],
      },
    ],
  },
];

export const designSolutions = [
  {
    title: "Living / Dining Room",
    icon: "living",
    items: ["TV Unit", "TV Back Panelling", "Crockery Unit", "Bar Unit", "Bookshelf"],
  },
  {
    title: "Bedroom",
    icon: "bedroom",
    items: ["Wardrobes", "TV Unit", "Storage Bed", "Dressing Unit", "Study Unit"],
  },
  {
    title: "Kitchen",
    icon: "kitchen",
    items: ["Countertops", "Backsplashes", "Accessories", "Storage", "Shutters"],
  },
  {
    title: "Innovative Storage",
    icon: "storage",
    items: [
      "Janitor Unit",
      "Skirting Drawer",
      "Pantry Pull-out",
      "Appliance Garage",
      "Hidden Bar Cabinet",
      "Magic Corner",
    ],
  },
  {
    title: "Interior Design Services",
    icon: "interior",
    items: [
      "False Ceiling",
      "Wall Panelling",
      "Lighting",
      "Furnishing",
      "Appliances",
      "Décor",
    ],
  },
  {
    title: "Home Improvement Services",
    icon: "improvement",
    items: [
      "Painting",
      "Bathroom Remodeling",
      "Tiling",
      "Plumbing",
      "Electrical",
      "Civil Work",
      "Deep Cleaning",
    ],
  },
] as const;

export function getEditionBySlug(slug: string): Edition | undefined {
  return editions.find((e) => e.slug === slug);
}
