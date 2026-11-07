"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories, type Dish, type MenuCategory } from "../dishData";

const pageSizeOptions = [10, 20, 30, 50, 100];

export default function Menu({ dishes }: { dishes: Dish[] }) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("All");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);
  const [transition, setTransition] = useState<"idle" | "exiting" | "entering">("idle");
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const filteredDishes = activeCategory === "All"
    ? dishes
    : dishes.filter((dish) => dish.category === activeCategory);
  const pageCount = Math.max(1, Math.ceil(filteredDishes.length / pageSize));
  const firstPageNumber = Math.max(1, Math.min(page - 2, pageCount - 4));
  const visiblePages = Array.from(
    { length: Math.min(pageCount, 5) },
    (_, index) => firstPageNumber + index,
  );
  const firstVisibleDish = filteredDishes.length ? (page - 1) * pageSize + 1 : 0;
  const lastVisibleDish = Math.min(page * pageSize, filteredDishes.length);
  const [displayedDishes, setDisplayedDishes] = useState(dishes.slice(0, pageSize));

  useEffect(() => () => {
    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
    }
  }, []);

  function transitionToPage(category: MenuCategory, nextPage: number, nextPageSize: number) {
    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
    }

    setTransition("exiting");
    transitionTimer.current = setTimeout(() => {
      const nextDishes = category === "All"
        ? dishes
        : dishes.filter((dish) => dish.category === category);
      const startIndex = (nextPage - 1) * nextPageSize;
      setDisplayedDishes(nextDishes.slice(startIndex, startIndex + nextPageSize));
      setTransition("entering");
      transitionTimer.current = setTimeout(() => {
        setTransition("idle");
        transitionTimer.current = null;
      }, 500);
    }, 180);
  }

  function changeCategory(category: MenuCategory) {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setPage(1);
    transitionToPage(category, 1, pageSize);
  }

  function changePage(nextPage: number) {
    if (nextPage < 1 || nextPage > pageCount || nextPage === page) return;
    setPage(nextPage);
    transitionToPage(activeCategory, nextPage, pageSize);
  }

  function changePageSize(nextPageSize: number) {
    if (nextPageSize === pageSize) return;
    setPageSize(nextPageSize);
    setPage(1);
    transitionToPage(activeCategory, 1, nextPageSize);
  }

  return (
    <section className="menu-section" id="menu">
      <div className="section-intro">
        <span className="section-kicker">MADE WITH WHAT&apos;S GOOD</span>
        <h2>A few things<br /><em>from our kitchen.</em></h2>
        <p>Thoughtful plates, ingredients that speak for themselves, and just enough butter.</p>
      </div>
      <div className="page-size-control">
        <label>
          Show
          <select aria-label="Dishes per page" onChange={(event) => changePageSize(Number(event.target.value))} value={pageSize}>
            {pageSizeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
          per page
        </label>
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
        className={`dish-grid${transition === "exiting" ? " is-exiting" : transition === "entering" ? " is-entering" : ""}`}
        aria-live="polite"
      >
        {displayedDishes.map((dish) => (
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
      <div className="menu-pagination">
        <span className="pagination-summary" aria-live="polite">
          Showing {firstVisibleDish}–{lastVisibleDish} of {filteredDishes.length}
        </span>
        <nav className="pagination-controls" aria-label="Menu pages">
          <button type="button" onClick={() => changePage(page - 1)} disabled={page === 1} aria-label="Previous page">←</button>
          {firstPageNumber > 1 && (
            <>
              <button type="button" onClick={() => changePage(1)} aria-label="Page 1">1</button>
              <span aria-hidden="true">…</span>
            </>
          )}
          {visiblePages.map((pageNumber) => (
            <button
              type="button"
              key={pageNumber}
              onClick={() => changePage(pageNumber)}
              aria-label={`Page ${pageNumber}`}
              aria-current={pageNumber === page ? "page" : undefined}
            >
              {pageNumber}
            </button>
          ))}
          {visiblePages[visiblePages.length - 1] < pageCount && (
            <>
              <span aria-hidden="true">…</span>
              <button type="button" onClick={() => changePage(pageCount)} aria-label={`Page ${pageCount}`}>{pageCount}</button>
            </>
          )}
          <button type="button" onClick={() => changePage(page + 1)} disabled={page === pageCount} aria-label="Next page">→</button>
        </nav>
      </div>
      <p className="menu-note">Our menu changes with the seasons. Please let us know about any allergies when you book.</p>
    </section>
  );
}
