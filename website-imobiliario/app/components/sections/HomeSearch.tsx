"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { listings } from "../propertyData";

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
          onChange={(event) => {
            setKind(event.target.value as "Any" | "Buy" | "Rent");
            setBudget("0");
          }}
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

export default function HomeSearch() {
  const [search, setSearch] = useState("");
  const [kind, setKind] = useState<"Any" | "Buy" | "Rent">("Any");
  const [bedrooms, setBedrooms] = useState("0");
  const [budget, setBudget] = useState("0");

  const filteredListings = useMemo(() => listings.filter((listing) => {
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
  }), [search, kind, bedrooms, budget]);

  return <section className="listings-section" id="homes"><div className="listings-heading"><div><span className="section-eyebrow">A GOOD PLACE TO BEGIN</span><h2>Find your <em>somewhere.</em></h2></div><a href="mailto:hello@homestead.example">Not sure where to start? Let&apos;s talk ↗</a></div><SearchPanel search={search} setSearch={setSearch} kind={kind} setKind={setKind} bedrooms={bedrooms} setBedrooms={setBedrooms} budget={budget} setBudget={setBudget} /><div className="results-heading"><div><h3>Places to put down roots</h3><span>{filteredListings.length} thoughtfully chosen {filteredListings.length === 1 ? "home" : "homes"}</span></div><button type="button" className="sort-button" onClick={() => { setSearch(""); setKind("Any"); setBedrooms("0"); setBudget("0"); }}>Clear filters <span>↻</span></button></div>{filteredListings.length ? <div className="listing-grid">{filteredListings.map((home) => <article className="listing-card" key={home.slug}><Link className="listing-card-link" href={`/homes/${home.slug}`} aria-label={`View details for ${home.name}`}><div className="listing-image">{home.badge && <span className="listing-badge">{home.badge}</span>}<span className="favorite-button" aria-hidden="true">♡</span><Image src={home.image} alt={`${home.propertyType} in ${home.neighborhood}`} fill sizes="(max-width: 560px) 100vw, (max-width: 850px) 50vw, 33vw" /></div><div className="listing-content"><span className="listing-neighborhood">{home.neighborhood} · {home.kind === "Buy" ? "FOR SALE" : "FOR RENT"}</span><div className="listing-title"><h4>{home.name}</h4><strong>{home.priceLabel}{home.kind === "Rent" && <small> / mo</small>}</strong></div><p>{home.address}</p><div className="listing-features"><span><b>{home.beds}</b> beds</span><span><b>{home.baths}</b> baths</span><span><b>{home.area.toLocaleString("en-US")}</b> sq ft</span><span className="listing-more" aria-hidden="true">↗</span></div></div></Link></article>)}</div> : <div className="no-results"><span>⌕</span><h3>No homes found just yet.</h3><p>Try a different neighborhood or loosen your filters to see more places.</p><button className="clear-button" onClick={() => { setSearch(""); setKind("Any"); setBedrooms("0"); setBudget("0"); }} type="button">Clear all filters</button></div>}</section>;
}
