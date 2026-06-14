export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image: string;
  isPartner?: boolean;
  focusAreas?: string[];
}

export const partners: TeamMember[] = [
  {
    name: "Abhishek Badale",
    role: "Co-founder & Partner — Architecture",
    isPartner: true,
    focusAreas: ["Residential", "Commercial", "Site supervision"],
    bio: "Abhishek co-founded Archtek in 2015 with a focus on context-driven architecture. With over a decade of practice in Pune and across Maharashtra, he leads design from concept through construction — ensuring drawings translate faithfully on site.",
    image: "/images/team/abhishek-badale.jpg",
  },
  {
    name: "Anand Munot",
    role: "Co-founder & Partner — Interiors",
    isPartner: true,
    focusAreas: ["Residential interiors", "Retail", "Hospitality"],
    bio: "Anand brings a material-first approach to interior design — balancing aesthetics with how spaces are lived in and maintained. He oversees the interior design studio and collaborates closely with architecture from early planning stages.",
    image: "/images/team/anand-munot.jpg",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Madhubala Badale",
    role: "Admin & HR",
    bio: "Keeps studio operations running smoothly — from client coordination to team culture.",
    image: "/images/team/madhubala-badale.jpg",
  },
  {
    name: "Toshali Munot",
    role: "Sr. Interior Designer",
    bio: "Leads interior concepts and detailing for residential and retail projects.",
    image: "/images/team/toshali-munot.jpg",
  },
  {
    name: "Shruti Chokda",
    role: "Interior Designer",
    bio: "Develops material palettes, furniture layouts, and 3D interior visualizations.",
    image: "/images/team/shruti-chokda.jpg",
  },
  {
    name: "Yog Malhotra",
    role: "Architect",
    bio: "Works on schematic design, working drawings, and site coordination.",
    image: "/images/team/yog-malhotra.jpg",
  },
  {
    name: "Vartika Verma",
    role: "Architect",
    bio: "Focuses on commercial projects and facade development.",
    image: "/images/team/vartika-verma.jpg",
  },
  {
    name: "Sahil Khuntwal",
    role: "Interior Designer",
    bio: "Supports design development, vendor liaison, and site inspections for interiors.",
    image: "/images/team/sahil-khuntwal.png",
  },
];

export const allTeam = [...partners, ...teamMembers];
