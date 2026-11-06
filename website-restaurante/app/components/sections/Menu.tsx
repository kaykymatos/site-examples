"use client";

import { useState } from "react";

const categories = ["All", "For the table", "Pasta & mains", "Something sweet"] as const;
type MenuCategory = (typeof categories)[number];

const dishes: { name: string; description: string; price: string; category: Exclude<MenuCategory, "All">; image: string; tag?: string }[] = [
  { name: "Burrata & stone fruit", description: "Heirloom tomato, grilled peach, basil oil, sourdough.", price: "$18", category: "For the table", image: "dish-burrata", tag: "A HOUSE FAVORITE" },
  { name: "Roasted carrots", description: "Whipped ricotta, pistachio, hot honey, mint.", price: "$15", category: "For the table", image: "dish-carrots" },
  { name: "Cacio e pepe", description: "Tonnarelli, pecorino romano, cracked black pepper.", price: "$26", category: "Pasta & mains", image: "dish-pasta", tag: "ALWAYS ON THE MENU" },
  { name: "Sunday chicken", description: "Half-roasted chicken, lemon jus, crispy potatoes.", price: "$32", category: "Pasta & mains", image: "dish-chicken" },
  { name: "Olive oil cake", description: "Seasonal citrus, mascarpone, a little sea salt.", price: "$13", category: "Something sweet", image: "dish-cake" },
  { name: "Chocolate budino", description: "Dark chocolate pudding, flaky salt, whipped cream.", price: "$14", category: "Something sweet", image: "dish-budino" },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("All");
  const visibleDishes = activeCategory === "All" ? dishes : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section className="menu-section" id="menu"><div className="section-intro"><span className="section-kicker">MADE WITH WHAT&apos;S GOOD</span><h2>A few things<br /><em>from our kitchen.</em></h2><p>Thoughtful plates, ingredients that speak for themselves, and just enough butter.</p></div><div className="menu-controls" aria-label="Filter menu by category">{categories.map((category) => <button className={activeCategory === category ? "category-button active" : "category-button"} key={category} onClick={() => setActiveCategory(category)} type="button" aria-pressed={activeCategory === category}>{category}</button>)}</div><div className="dish-grid">{visibleDishes.map((dish) => <article className="dish-card" key={dish.name}><div className={`dish-image ${dish.image}`} role="img" aria-label={`Photo of ${dish.name.toLowerCase()}`}>{dish.tag && <span className="dish-tag">{dish.tag}</span>}</div><div className="dish-title"><h3>{dish.name}</h3><span>{dish.price}</span></div><p>{dish.description}</p></article>)}</div><p className="menu-note">Our menu changes with the seasons. Please let us know about any allergies when you book.</p></section>
  );
}
