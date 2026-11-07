"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Listing } from "../propertyData";

type ListingFilters = {
  search: string;
  kind: "Any" | "Buy" | "Rent";
  bedrooms: string;
  budget: string;
};

const pageSizeOptions = [10, 20, 30, 50, 100];

function filterListings(listings: Listing[], { search, kind, bedrooms, budget }: ListingFilters) {
  return listings.filter((listing) => {
    const matchesLocation = `${listing.neighborhood} ${listing.address}`.toLowerCase().includes(search.trim().toLowerCase());
    const matchesKind = kind === "Any" || listing.kind === kind;
    const matchesBedrooms = listing.beds >= Number(bedrooms);
    const maximumPrice = Number(budget);
    const budgetMatchesType = maximumPrice <= 7500
      ? listing.kind === "Rent"
      : listing.kind === "Buy";
    const matchesBudget = maximumPrice === 0
      || (budgetMatchesType && listing.price <= maximumPrice);
    return matchesLocation && matchesKind && matchesBedrooms && matchesBudget;
  });
}

function SearchPanel({
  search, setSearch, kind, setKind, bedrooms, setBedrooms, budget, setBudget,
}: {
  search: string;
  setSearch: (value: string) => void;
  kind: "Any" | "Buy" | "Rent";
  setKind: (value: "Any" | "Buy" | "Rent") => void;
  bedrooms: string;
  setBedrooms: (value: string) => void;
  budget: string;
  setBudget: (value: string) => void;
}) {
  const budgetOptions = kind === "Rent"
    ? [
        { value: "5000", label: "Up to $5,000 / mo" },
        { value: "7500", label: "Up to $7,500 / mo" },
      ]
    : kind === "Buy"
      ? [
          { value: "2000000", label: "Up to $2M" },
          { value: "3000000", label: "Up to $3M" },
        ]
      : [
          { value: "5000", label: "Up to $5,000 / mo rent" },
          { value: "7500", label: "Up to $7,500 / mo rent" },
          { value: "2000000", label: "Up to $2M purchase" },
          { value: "3000000", label: "Up to $3M purchase" },
        ];

  return (
    <form className="search-panel" onSubmit={(event) => event.preventDefault()}>
      <label className="search-location">
        <span>LOCATION</span>
        <input aria-label="Search a neighborhood" onChange={(event) => setSearch(event.target.value)} placeholder="Neighborhood or ZIP code" value={search} />
        <span className="search-pin">⌖</span>
      </label>
      <label>
        <span>PROPERTY TYPE</span>
        <select
          aria-label="Property type"
          onChange={(event) => setKind(event.target.value as "Any" | "Buy" | "Rent")}
          value={kind}
        >
          <option value="Any">Buy or rent</option>
          <option value="Buy">For sale</option>
          <option value="Rent">For rent</option>
        </select>
      </label>
      <label>
        <span>BEDROOMS</span>
        <select aria-label="Minimum bedrooms" onChange={(event) => setBedrooms(event.target.value)} value={bedrooms}>
          <option value="0">Any beds</option>
          <option value="1">1+ beds</option>
          <option value="2">2+ beds</option>
          <option value="3">3+ beds</option>
          <option value="4">4+ beds</option>
        </select>
      </label>
      <label>
        <span>MAX BUDGET</span>
        <select aria-label="Maximum budget" onChange={(event) => setBudget(event.target.value)} value={budget}>
          <option value="0">Any price</option>
          {budgetOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="search-button">
        <span>⌕</span> Find a home
      </button>
    </form>
  );
}

export default function HomeSearch({ listings }: { listings: Listing[] }) {
  const [search, setSearch] = useState("");
  const [kind, setKind] = useState<"Any" | "Buy" | "Rent">("Any");
  const [bedrooms, setBedrooms] = useState("0");
  const [budget, setBudget] = useState("0");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);
  const [transition, setTransition] = useState<"idle" | "exiting" | "entering">("idle");
  const filtersRef = useRef<ListingFilters>({ search, kind, bedrooms, budget });
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
    }
  }, []);

  const filteredListings = useMemo(
    () => filterListings(listings, { search, kind, bedrooms, budget }),
    [listings, search, kind, bedrooms, budget],
  );
  const pageCount = Math.max(1, Math.ceil(filteredListings.length / pageSize));
  const firstPageNumber = Math.max(1, Math.min(page - 2, pageCount - 4));
  const visiblePages = Array.from(
    { length: Math.min(pageCount, 5) },
    (_, index) => firstPageNumber + index,
  );
  const firstVisibleListing = filteredListings.length ? (page - 1) * pageSize + 1 : 0;
  const lastVisibleListing = Math.min(page * pageSize, filteredListings.length);
  const [displayedListings, setDisplayedListings] = useState(
    filteredListings.slice(0, pageSize),
  );

  function transitionToPage(nextListings: Listing[], nextPage: number, nextPageSize: number) {
    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
    }

    setTransition("exiting");
    transitionTimer.current = setTimeout(() => {
      const startIndex = (nextPage - 1) * nextPageSize;
      setDisplayedListings(nextListings.slice(startIndex, startIndex + nextPageSize));
      setTransition("entering");
      transitionTimer.current = setTimeout(() => {
        setTransition("idle");
        transitionTimer.current = null;
      }, 500);
    }, 180);
  }

  function updateFilters(updates: Partial<ListingFilters>) {
    const nextFilters = { ...filtersRef.current, ...updates };
    filtersRef.current = nextFilters;
    setSearch(nextFilters.search);
    setKind(nextFilters.kind);
    setBedrooms(nextFilters.bedrooms);
    setBudget(nextFilters.budget);
    setPage(1);
    transitionToPage(filterListings(listings, nextFilters), 1, pageSize);
  }

  function changePage(nextPage: number) {
    if (nextPage < 1 || nextPage > pageCount || nextPage === page) return;
    setPage(nextPage);
    transitionToPage(filteredListings, nextPage, pageSize);
  }

  function changePageSize(nextPageSize: number) {
    if (nextPageSize === pageSize) return;
    setPageSize(nextPageSize);
    setPage(1);
    transitionToPage(filteredListings, 1, nextPageSize);
  }

  return (
    <section className="listings-section" id="homes">
      <div className="listings-heading">
        <div><span className="section-eyebrow">A GOOD PLACE TO BEGIN</span><h2>Find your <em>somewhere.</em></h2></div>
        <a href="mailto:hello@homestead.example">Not sure where to start? Let&apos;s talk ↗</a>
      </div>
      <div className="page-size-control">
        <label>
          Show
          <select aria-label="Homes per page" onChange={(event) => changePageSize(Number(event.target.value))} value={pageSize}>
            {pageSizeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
          per page
        </label>
      </div>
      <SearchPanel
        search={search}
        setSearch={(value) => updateFilters({ search: value })}
        kind={kind}
        setKind={(value) => updateFilters({ kind: value, ...(value === kind ? {} : { budget: "0" }) })}
        bedrooms={bedrooms}
        setBedrooms={(value) => updateFilters({ bedrooms: value })}
        budget={budget}
        setBudget={(value) => updateFilters({ budget: value })}
      />
      <div className="results-heading">
        <div>
          <h3>Places to put down roots</h3>
          <span>{filteredListings.length} thoughtfully chosen {filteredListings.length === 1 ? "home" : "homes"}</span>
        </div>
        <button type="button" className="sort-button" onClick={() => updateFilters({ search: "", kind: "Any", bedrooms: "0", budget: "0" })}>
          Clear filters <span>↻</span>
        </button>
      </div>
      <div className={`listing-results${transition === "exiting" ? " is-exiting" : transition === "entering" ? " is-entering" : ""}`} aria-live="polite">
        {displayedListings.length ? (
          <div className="listing-grid">
            {displayedListings.map((home) => (
              <article className="listing-card" key={home.slug}>
                <Link className="listing-card-link" href={`/homes/${home.slug}`} aria-label={`View details for ${home.name}`}>
                  <div className="listing-image">
                    {home.badge && <span className="listing-badge">{home.badge}</span>}
                    <span className="favorite-button" aria-hidden="true">♡</span>
                    <Image src={home.image} alt={`${home.propertyType} in ${home.neighborhood}`} fill sizes="(max-width: 560px) 100vw, (max-width: 850px) 50vw, 33vw" />
                  </div>
                  <div className="listing-content">
                    <span className="listing-neighborhood">{home.neighborhood} · {home.kind === "Buy" ? "FOR SALE" : "FOR RENT"}</span>
                    <div className="listing-title">
                      <h4>{home.name}</h4>
                      <strong>{home.priceLabel}{home.kind === "Rent" && <small> / mo</small>}</strong>
                    </div>
                    <p>{home.address}</p>
                    <div className="listing-features">
                      <span><b>{home.beds}</b> beds</span>
                      <span><b>{home.baths}</b> baths</span>
                      <span><b>{home.area.toLocaleString("en-US")}</b> sq ft</span>
                      <span className="listing-more" aria-hidden="true">↗</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <span>⌕</span>
            <h3>No homes found just yet.</h3>
            <p>Try a different neighborhood or loosen your filters to see more places.</p>
            <button className="clear-button" onClick={() => updateFilters({ search: "", kind: "Any", bedrooms: "0", budget: "0" })} type="button">
              Clear all filters
            </button>
          </div>
        )}
      </div>
      <div className="listing-pagination">
        <span className="pagination-summary" aria-live="polite">
          Showing {firstVisibleListing}–{lastVisibleListing} of {filteredListings.length}
        </span>
        <nav className="pagination-controls" aria-label="Property pages">
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
    </section>
  );
}
