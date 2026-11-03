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

function Header() {
  return (
    <header className="restaurant-header"><a className="restaurant-logo" href="#home">KITCHEN<span>✳</span><small>NEIGHBORHOOD DINING</small></a><nav aria-label="Main navigation"><a href="#story">Our story</a><a href="#menu">Menu</a><a href="#visit">Find us</a></nav><a className="reserve-button" href="tel:+15551234567">Call to reserve <span>↗</span></a></header>
  );
}

function Hero() {
  return <section className="restaurant-hero" id="home"><div className="hero-image" role="img" aria-label="Fresh pasta with tomatoes and greens" /><div className="hero-shade" /><div className="hero-copy"><span className="hero-kicker">GOOD FOOD. GOOD COMPANY.</span><h1>A table is<br />always <em>waiting.</em></h1><p>Seasonal plates, a well-poured glass, and room for one more. Welcome to our kitchen.</p><div className="hero-actions"><a className="light-button" href="tel:+15551234567">Call to reserve <span>↗</span></a><a className="menu-anchor" href="#menu">Explore the menu <span>↓</span></a></div></div><div className="hero-hours"><span>OPEN TONIGHT</span><strong>5 — 10 PM</strong><span>NO. 118 · BROOKLYN</span></div><span className="hero-edition">A LITTLE TASTE OF ITALY, RIGHT AROUND THE CORNER</span></section>;
}

function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("All");
  const visibleDishes = activeCategory === "All" ? dishes : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <section className="menu-section" id="menu"><div className="section-intro"><span className="section-kicker">MADE WITH WHAT&apos;S GOOD</span><h2>A few things<br /><em>from our kitchen.</em></h2><p>Thoughtful plates, ingredients that speak for themselves, and just enough butter.</p></div><div className="menu-controls" aria-label="Filter menu by category">{categories.map((category) => <button className={activeCategory === category ? "category-button active" : "category-button"} key={category} onClick={() => setActiveCategory(category)} type="button" aria-pressed={activeCategory === category}>{category}</button>)}</div><div className="dish-grid">{visibleDishes.map((dish) => <article className="dish-card" key={dish.name}><div className={`dish-image ${dish.image}`} role="img" aria-label={`Photo of ${dish.name.toLowerCase()}`}>{dish.tag && <span className="dish-tag">{dish.tag}</span>}</div><div className="dish-title"><h3>{dish.name}</h3><span>{dish.price}</span></div><p>{dish.description}</p></article>)}</div><p className="menu-note">Our menu changes with the seasons. Please let us know about any allergies when you book.</p></section>
  );
}

function StoryAndVisit() {
  return <><section className="story-section" id="story"><div className="story-photo" role="img" aria-label="A colorful platter of fresh seasonal vegetables" /><div className="story-copy"><span className="section-kicker">A NEIGHBORHOOD KIND OF PLACE</span><h2>Come as you are.<br /><em>Stay a little.</em></h2><p>Our kitchen started with a simple idea: the best nights aren&apos;t planned, they just happen around a table.</p><p>We cook the food we love, pour wines from people we admire, and save you a seat whenever you need one.</p><a className="story-link" href="#visit">A little more about us <span>↗</span></a></div></section><section className="visit-section" id="visit"><div><span className="section-kicker">YOUR SEAT IS WAITING</span><h2>Meet us<br /><em>at the table.</em></h2></div><div className="visit-detail"><div><span>FIND US</span><p>118 Wythe Avenue<br />Brooklyn, NY 11249</p></div><div><span>COME ON IN</span><p>Tuesday — Sunday<br />5:00 pm — 10:00 pm</p><p className="closed-note">Closed Mondays · Walk-ins welcome</p></div><a className="reservation-button" href="tel:+15551234567"><span className="reservation-icon" aria-hidden="true">◷</span>Call to reserve a table <span>↗</span></a></div></section></>;
}

export default function RestaurantExperience() {
  return <main className="restaurant-page"><Header /><Hero /><Menu /><StoryAndVisit /><footer className="restaurant-footer"><a className="restaurant-logo" href="#home">KITCHEN<span>✳</span><small>NEIGHBORHOOD DINING</small></a><span>Made with care in Brooklyn, New York</span><a href="mailto:hello@restaurant.example">GET IN TOUCH ↗</a><small>© 2024 · SAMPLE RESTAURANT WEBSITE</small></footer></main>;
}
