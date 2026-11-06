export const categories = ["All", "For the table", "Pasta & mains", "Something sweet"] as const;

export type MenuCategory = (typeof categories)[number];
export type DishCategory = Exclude<MenuCategory, "All">;

export type Dish = {
  slug: string;
  name: string;
  description: string;
  price: string;
  category: DishCategory;
  image: string;
  tag?: string;
  details: string;
  ingredients: string[];
};

export const dishes: Dish[] = [
  {
    slug: "burrata-stone-fruit",
    name: "Burrata & stone fruit",
    description: "Heirloom tomato, grilled peach, basil oil, sourdough.",
    price: "$18",
    category: "For the table",
    image: "/images/burrata.jpg",
    tag: "A HOUSE FAVORITE",
    details:
      "Creamy burrata meets peak-season heirloom tomato and warm grilled peach. Finished with fragrant basil oil and served with sourdough for sharing.",
    ingredients: ["Fresh burrata", "Heirloom tomato", "Grilled peach", "Basil oil", "Sourdough"],
  },
  {
    slug: "roasted-carrots",
    name: "Roasted carrots",
    description: "Whipped ricotta, pistachio, hot honey, mint.",
    price: "$15",
    category: "For the table",
    image: "/images/carrots.jpg",
    details:
      "Slow-roasted carrots served over cloud-light whipped ricotta, with a little crunch from pistachio, a drizzle of hot honey, and fresh mint.",
    ingredients: ["Roasted carrots", "Whipped ricotta", "Pistachio", "Hot honey", "Fresh mint"],
  },
  {
    slug: "cacio-e-pepe",
    name: "Cacio e pepe",
    description: "Tonnarelli, pecorino romano, cracked black pepper.",
    price: "$26",
    category: "Pasta & mains",
    image: "/images/pasta.jpg",
    tag: "ALWAYS ON THE MENU",
    details:
      "A Roman classic made simply and served generously: fresh tonnarelli tossed in a silky sauce of pecorino romano and freshly cracked black pepper.",
    ingredients: ["Fresh tonnarelli", "Pecorino romano", "Cracked black pepper"],
  },
  {
    slug: "sunday-chicken",
    name: "Sunday chicken",
    description: "Half-roasted chicken, lemon jus, crispy potatoes.",
    price: "$32",
    category: "Pasta & mains",
    image: "/images/roast-chicken.jpg",
    details:
      "A half chicken roasted until golden and tender, served with bright lemon jus and crisp, golden potatoes. The kind of Sunday supper worth slowing down for.",
    ingredients: ["Half-roasted chicken", "Lemon jus", "Crispy potatoes"],
  },
  {
    slug: "olive-oil-cake",
    name: "Olive oil cake",
    description: "Seasonal citrus, mascarpone, a little sea salt.",
    price: "$13",
    category: "Something sweet",
    image: "/images/olive-cake.jpg",
    details:
      "Tender olive oil cake paired with seasonal citrus and a spoonful of mascarpone. Finished with a delicate pinch of sea salt.",
    ingredients: ["Olive oil cake", "Seasonal citrus", "Mascarpone", "Sea salt"],
  },
  {
    slug: "chocolate-budino",
    name: "Chocolate budino",
    description: "Dark chocolate pudding, flaky salt, whipped cream.",
    price: "$14",
    category: "Something sweet",
    image: "/images/chocolate-cake.jpg",
    details:
      "Rich, silky dark chocolate pudding topped with freshly whipped cream and a finishing touch of flaky salt.",
    ingredients: ["Dark chocolate pudding", "Whipped cream", "Flaky salt"],
  },
];
