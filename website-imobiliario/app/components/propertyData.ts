export type Listing = {
  slug: string;
  name: string;
  neighborhood: string;
  address: string;
  price: number;
  priceLabel: string;
  beds: number;
  baths: number;
  area: number;
  kind: "Buy" | "Rent";
  image: string;
  propertyType: string;
  description: string;
  highlights: string[];
  badge?: string;
};

export const listings: Listing[] = [
  {
    slug: "willow-place-townhouse",
    name: "Residence 01",
    neighborhood: "Brooklyn Heights",
    address: "28 Willow Place, Brooklyn",
    price: 2450000,
    priceLabel: "$2,450,000",
    beds: 4,
    baths: 3,
    area: 2480,
    kind: "Buy",
    image: "/images/residence-01.jpg",
    propertyType: "Townhouse",
    description:
      "A warm, thoughtfully kept townhouse on a quiet, tree-lined block. Generous living spaces and a welcoming neighborhood setting make this a lovely place to settle in and make your own.",
    highlights: ["Bright, generous living areas", "Quiet tree-lined block", "Close to neighborhood cafés and parks"],
    badge: "JUST LISTED",
  },
  {
    slug: "south-oxford-residence",
    name: "Residence 02",
    neighborhood: "Fort Greene",
    address: "76 South Oxford Street, Brooklyn",
    price: 1850000,
    priceLabel: "$1,850,000",
    beds: 3,
    baths: 2,
    area: 1820,
    kind: "Buy",
    image: "/images/residence-02.jpg",
    propertyType: "Brownstone",
    description:
      "A gracious Fort Greene home with room to gather, unwind, and grow. Set among the neighborhood's historic brownstones, it brings a calm, residential feel within easy reach of local favorites.",
    highlights: ["Classic brownstone character", "Comfortable gathering spaces", "Near Fort Greene Park"],
  },
  {
    slug: "eighth-street-apartment",
    name: "Residence 03",
    neighborhood: "Park Slope",
    address: "415 8th Street, Brooklyn",
    price: 6200,
    priceLabel: "$6,200",
    beds: 2,
    baths: 2,
    area: 1320,
    kind: "Rent",
    image: "/images/residence-03.jpg",
    propertyType: "Apartment",
    description:
      "A sunlit Park Slope apartment with a thoughtful layout and comfortable proportions. Enjoy a slower morning at home, then step out to the shops, cafés, and green spaces that make this neighborhood special.",
    highlights: ["Two full bathrooms", "Sunlit living spaces", "Walkable Park Slope location"],
    badge: "OPEN HOUSE",
  },
  {
    slug: "kane-street-home",
    name: "Residence 04",
    neighborhood: "Cobble Hill",
    address: "192 Kane Street, Brooklyn",
    price: 3200000,
    priceLabel: "$3,200,000",
    beds: 5,
    baths: 4,
    area: 3100,
    kind: "Buy",
    image: "/images/residence-04.jpg",
    propertyType: "Townhouse",
    description:
      "A spacious Cobble Hill residence with room for everyone. Its generous footprint makes everyday living and hosting feel effortless, while the surrounding streets offer the charm of a close-knit Brooklyn neighborhood.",
    highlights: ["Five well-proportioned bedrooms", "Room to host and gather", "Cobble Hill neighborhood setting"],
  },
  {
    slug: "president-street-residence",
    name: "Residence 05",
    neighborhood: "Carroll Gardens",
    address: "38 President Street, Brooklyn",
    price: 4800,
    priceLabel: "$4,800",
    beds: 2,
    baths: 1,
    area: 1080,
    kind: "Rent",
    image: "/images/residence-05.jpg",
    propertyType: "Apartment",
    description:
      "A bright, inviting Carroll Gardens home with an easy flow and a comfortable neighborhood feel. A great fit for anyone looking for a welcoming place close to the area's favorite local spots.",
    highlights: ["Light-filled interiors", "Easy, comfortable layout", "Near Carroll Gardens cafés and shops"],
  },
  {
    slug: "south-portland-apartment",
    name: "Residence 06",
    neighborhood: "Fort Greene",
    address: "11 South Portland Avenue, Brooklyn",
    price: 3950,
    priceLabel: "$3,950",
    beds: 1,
    baths: 1,
    area: 890,
    kind: "Rent",
    image: "/images/residence-06.jpg",
    propertyType: "Apartment",
    description:
      "A lovely Fort Greene apartment with a welcoming feel and a layout that makes the most of its space. Step outside to leafy streets, neighborhood restaurants, and the everyday energy of Brooklyn.",
    highlights: ["Well-planned one-bedroom layout", "A leafy Fort Greene block", "Close to neighborhood dining"],
  },
];
