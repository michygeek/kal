export type ServiceCategory = {
  slug: string;
  title: string;
  icon: string; // lucide-react icon name
  summary: string;
  image: string;
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "civil-construction",
    title: "Civil Construction",
    icon: "Building2",
    summary:
      "Building construction, estate development, roads, bridges, drainage and structural works delivered to the highest engineering standards.",
    image: "/images/site/building-construction-1.png",
    items: [
      "Building Construction",
      "Estate Development",
      "Roads & Bridges",
      "Drainage Systems",
      "Structural Works",
      "Piling & Steel Reinforcement",
      "Raft Foundation Construction",
    ],
  },
  {
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    icon: "Zap",
    summary:
      "Rural electrification, power distribution, substations and industrial electrical works for communities, industry and government.",
    image: "/images/site/equip-transformer-install.png",
    items: [
      "Rural Electrification",
      "Power Distribution Networks",
      "Electrical Installations",
      "Substation Development",
      "Industrial Electrical Works",
      "Automated Indoor Devices",
    ],
  },
  {
    slug: "water-engineering",
    title: "Water Engineering",
    icon: "Droplets",
    summary:
      "Borehole drilling, water treatment, distribution networks, reservoirs and storage tank construction across sedimentary and basement terrain.",
    image: "/images/site/borehole-drilling-rig.png",
    items: [
      "Borehole Drilling",
      "Water Treatment",
      "Water Distribution Networks",
      "Reservoir Construction",
      "Storage Tanks",
      "Geophysical Survey & EIA",
    ],
  },
  {
    slug: "hydropower",
    title: "Hydropower",
    icon: "Waves",
    summary:
      "Feasibility studies, dam construction and energy systems for hydroelectric development from small-scale to utility-grade installations.",
    image: "/images/site/sheet-pile-wall.png",
    items: [
      "Feasibility Studies",
      "Hydroelectric Development",
      "Dam Construction",
      "Energy Systems",
      "Reservoir & Watershed Studies",
    ],
  },
  {
    slug: "environmental-services",
    title: "Environmental Services",
    icon: "Leaf",
    summary:
      "Environmental assessment, fumigation and pest control services protecting institutions, farmlands and facilities nationwide.",
    image: "/images/site/site-street-view.png",
    items: [
      "Environmental Impact Assessment",
      "Pest Control",
      "Fumigation Services",
      "Landscaping & Horticultural Design",
    ],
  },
  {
    slug: "procurement-supply",
    title: "Procurement & Supply",
    icon: "Package",
    summary:
      "Local and foreign procurement of engineering materials, industrial equipment and building materials at the right price, on time.",
    image: "/images/site/dump-truck-convoy.png",
    items: [
      "Engineering & Industrial Materials",
      "Building Materials Supply",
      "Office Equipment",
      "Procurement Management",
    ],
  },
  {
    slug: "project-management",
    title: "Project Management",
    icon: "ClipboardCheck",
    summary:
      "EPC contract administration, construction supervision and commissioning — a single point of accountability from design to handover.",
    image: "/images/site/crane-construction-site.png",
    items: [
      "EPC Projects",
      "Contract Administration",
      "Construction Supervision",
      "Commissioning & Handover",
    ],
  },
];
