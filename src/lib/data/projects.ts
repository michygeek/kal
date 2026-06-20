export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  completionDate: string;
  image: string;
  scope: string;
  description: string;
};

export const projectCategories = [
  "All",
  "Construction",
  "Roads",
  "Bridges",
  "Water Projects",
  "Electrification",
  "Environmental Projects",
] as const;

export const projects: Project[] = [
  {
    slug: "primary-health-care-center-ogugu",
    title: "Primary Health Care Center, Ogugu",
    category: "Construction",
    location: "Ogugu, Nigeria",
    completionDate: "2025",
    image: "/images/site/phc-ogugu-facade.jpg",
    scope: "Building construction, finishing and signage installation",
    description:
      "Construction of a Primary Health Care Center and hospital facility at Ogugu, including building works, interior and exterior finishing, brickwork facade detailing and signage installation to serve the local community.",
  },
  {
    slug: "residential-building-construction",
    title: "Multi-Storey Residential Building Construction",
    category: "Construction",
    location: "Nigeria",
    completionDate: "In Progress",
    image: "/images/site/residential-building-construction.jpg",
    scope: "Block work, structural framing and roofing on a multi-storey residential building",
    description:
      "Ongoing construction of a multi-storey residential building, including block walling, reinforced concrete framing, and twin-roof structural carpentry ahead of roofing and finishing works.",
  },
  {
    slug: "foundation-excavation-works",
    title: "Foundation Excavation & Reinforcement Works",
    category: "Construction",
    location: "Nigeria",
    completionDate: "In Progress",
    image: "/images/site/foundation-excavation-works.jpg",
    scope: "Deep foundation excavation and reinforcement bar placement",
    description:
      "Excavation and reinforcement works for a deep foundation trench ahead of concrete casting, carried out under challenging waterlogged soil conditions typical of the site terrain.",
  },
  {
    slug: "wuse-zone-4-access-road",
    title: "Wuse Zone 4 Access Road & Street Lighting",
    category: "Roads",
    location: "Abuja, FCT",
    completionDate: "2023",
    image: "/images/site/road-streetlights.png",
    scope: "Road construction, drainage and solar street lighting installation",
    description:
      "Construction and rehabilitation of an urban access road including drainage systems, shoulder construction and solar-powered street lighting to improve safety and connectivity within the estate.",
  },
  {
    slug: "estate-residential-building",
    title: "Multi-Storey Residential Estate Building",
    category: "Construction",
    location: "Abuja, FCT",
    completionDate: "2022",
    image: "/images/site/building-construction-1.png",
    scope: "Building construction, structural works and finishing",
    description:
      "Design and construction of a multi-storey residential building on raft foundation, including structural steel works, interior finishing and external works.",
  },
  {
    slug: "estate-perimeter-facade",
    title: "Residential Estate Perimeter & Facade Works",
    category: "Construction",
    location: "Enugu, Enugu State",
    completionDate: "2021",
    image: "/images/site/building-facade.png",
    scope: "Facade construction, perimeter fencing and decorative finishing",
    description:
      "Architectural facade and perimeter wall construction for a residential estate, combining structural masonry with decorative finishing details.",
  },
  {
    slug: "borehole-water-supply-scheme",
    title: "Community Borehole & Water Supply Scheme",
    category: "Water Projects",
    location: "Enugu State",
    completionDate: "2022",
    image: "/images/site/borehole-drilling-rig.png",
    scope: "Borehole drilling, pump house construction and distribution network",
    description:
      "Geophysical survey, borehole drilling and construction of an elevated storage tank and distribution network to serve a rural community water supply scheme.",
  },
  {
    slug: "elevated-storage-tank",
    title: "Elevated Water Storage Tank Construction",
    category: "Water Projects",
    location: "Abuja, FCT",
    completionDate: "2021",
    image: "/images/site/elevated-water-tank.png",
    scope: "Steel tank fabrication, erection and pipe reticulation",
    description:
      "Design and construction of an elevated steel water storage tank with internal lining, external coating and pipe reticulation network.",
  },
  {
    slug: "drainage-flood-control",
    title: "Urban Drainage & Flood Control Works",
    category: "Environmental Projects",
    location: "Enugu, Enugu State",
    completionDate: "2023",
    image: "/images/site/drainage-trench-workers.png",
    scope: "Drainage excavation, culvert construction and erosion control",
    description:
      "Investigation, design and construction of surface drainage channels and box culverts to control erosion and seasonal flooding within a residential layout.",
  },
  {
    slug: "box-culvert-construction",
    title: "Box Culvert & Road Crossing",
    category: "Bridges",
    location: "Enugu State",
    completionDate: "2020",
    image: "/images/site/culvert-formwork.png",
    scope: "Culvert formwork, reinforcement and concrete works",
    description:
      "Construction of reinforced concrete box culverts beneath a road crossing, including timber formwork, steel reinforcement and concrete casting.",
  },
  {
    slug: "highway-rehabilitation",
    title: "Highway Rehabilitation Project",
    category: "Roads",
    location: "Abuja - Enugu Corridor",
    completionDate: "2024",
    image: "/images/site/bitumen-spray-truck.png",
    scope: "Earthworks, bitumen application and road rehabilitation",
    description:
      "Rehabilitation of a deteriorated highway section including earthworks, bitumen and chipping application, and drainage system reconstruction.",
  },
  {
    slug: "road-compaction-works",
    title: "Estate Road Compaction & Surfacing",
    category: "Roads",
    location: "Abuja, FCT",
    completionDate: "2022",
    image: "/images/site/road-roller-compaction-1.png",
    scope: "Sub-base compaction, surfacing and shoulder construction",
    description:
      "Sub-base preparation, compaction and surfacing works for an estate internal road network, delivered to specification ahead of schedule.",
  },
  {
    slug: "building-foundation-piling",
    title: "Commercial Building Foundation & Piling",
    category: "Construction",
    location: "Abuja, FCT",
    completionDate: "2023",
    image: "/images/site/foundation-trench-rebar.png",
    scope: "Piling, raft foundation and reinforcement works",
    description:
      "Piling and raft foundation construction for a commercial building, including steel reinforcement compaction works ahead of superstructure works.",
  },
  {
    slug: "industrial-water-borehole",
    title: "Industrial Borehole & Treatment Plant",
    category: "Water Projects",
    location: "Enugu State",
    completionDate: "2021",
    image: "/images/site/drilling-rig-workers.png",
    scope: "Borehole drilling, water treatment plant installation",
    description:
      "Drilling and equipping of an industrial-grade borehole with installation of an aeration and filtration water treatment plant.",
  },
  {
    slug: "estate-electrification",
    title: "Estate Internal Electrification Network",
    category: "Electrification",
    location: "Abuja, FCT",
    completionDate: "2023",
    image: "/images/site/road-streetlights.png",
    scope: "Power distribution network and electrical installations",
    description:
      "Design and installation of an internal power distribution network, including transformer siting and street lighting for a residential estate.",
  },
];
