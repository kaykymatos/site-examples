"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories, dishes, type MenuCategory } from "../dishData";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("All");
  const [displayedCategory, setDisplayedCategory] = useState<MenuCategory>("All");
  const [transition, setTransition] = useState<"idle" | "exiting" | "entering">("idle");
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const visibleDishes = displayedCategory === "All" ? dishes : dishes.filter((dish) => dish.category === displayedCategory);

  useEffect(() => () => {
    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
    }
  }, []);

  function changeCategory(category: MenuCategory) {
    if (category === activeCategory) return;

    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
    }

    setActiveCategory(category);
    setTransition("exiting");
    transitionTimer.current = setTimeout(() => {
      setDisplayedCategory(category);
      setTransition("entering");
      transitionTimer.current = null;
    }, 180);
  }

  return (
    <section className="menu-section" id="menu">
      <div className="section-intro">
        <span className="section-kicker">MADE WITH WHAT&apos;S GOOD</span>
        <h2>A few things<br /><em>from our kitchen.</em></h2>
        <p>Thoughtful plates, ingredients that speak for themselves, and just enough butter.</p>
      </div>
      <div className="menu-controls" aria-label="Filter menu by category">
        {categories.map((category) => (
          <button
            className={activeCategory === category ? "category-button active" : "category-button"}
            key={category}
            onClick={() => changeCategory(category)}
            type="button"
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
      <div
        key={displayedCategory}
        className={`dish-grid${transition === "exiting" ? " is-exiting" : transition === "entering" ? " is-entering" : ""}`}
        aria-live="polite"
      >
        {visibleDishes.map((dish) => (
          <article className="dish-card" key={dish.slug}>
            <Link className="dish-card-link" href={`/menu/${dish.slug}`} aria-label={`View details for ${dish.name}`}>
              <div className="dish-image">
                {dish.tag && <span className="dish-tag">{dish.tag}</span>}
                <Image src={dish.image} alt={dish.name} fill sizes="(max-width: 460px) 100vw, (max-width: 760px) 50vw, 33vw" />
              </div>
              <div className="dish-title"><h3>{dish.name}</h3><span>{dish.price}</span></div>
              <p>{dish.description}</p>
              <span className="dish-card-more">Discover this dish ↗</span>
            </Link>
          </article>
        ))}
      </div>
      <p className="menu-note">Our menu changes with the seasons. Please let us know about any allergies when you book.</p>
    </section>
  );
}
