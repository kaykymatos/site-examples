"use client";

import { useMemo, useState } from "react";

type Listing = {
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
  badge?: string;
};

const listings: Listing[] = [
  { name: "Residence 01", neighborhood: "Brooklyn Heights", address: "28 Willow Place, Brooklyn", price: 2450000, priceLabel: "$2,450,000", beds: 4, baths: 3, area: 2480, kind: "Buy", image: "home-willow", badge: "JUST LISTED" },
  { name: "Residence 02", neighborhood: "Fort Greene", address: "76 South Oxford Street, Brooklyn", price: 1850000, priceLabel: "$1,850,000", beds: 3, baths: 2, area: 1820, kind: "Buy", image: "home-parkside" },
  { name: "Residence 03", neighborhood: "Park Slope", address: "415 8th Street, Brooklyn", price: 6200, priceLabel: "$6,200", beds: 2, baths: 2, area: 1320, kind: "Rent", image: "home-gramercy", badge: "OPEN HOUSE" },
  { name: "Residence 04", neighborhood: "Cobble Hill", address: "192 Kane Street, Brooklyn", price: 3200000, priceLabel: "$3,200,000", beds: 5, baths: 4, area: 3100, kind: "Buy", image: "home-maple" },
  { name: "Residence 05", neighborhood: "Carroll Gardens", address: "38 President Street, Brooklyn", price: 4800, priceLabel: "$4,800", beds: 2, baths: 1, area: 1080, kind: "Rent", image: "home-sunroom" },
  { name: "Residence 06", neighborhood: "Fort Greene", address: "11 South Portland Avenue, Brooklyn", price: 3950, priceLabel: "$3,950", beds: 1, baths: 1, area: 890, kind: "Rent", image: "home-garden" },
];

function Header() {
  return <header className="realty-header"><a className="realty-logo" href="#home"><span className="logo-mark">⌂</span><span>PROPERTY ADVISORS<small>BROOKLYN · NEW YORK</small></span></a><nav aria-label="Main navigation"><a href="#homes">Find a home</a><a href="#about">Our approach</a><a href="#contact">Contact</a></nav><a className="header-contact" href="mailto:hello@property.example">Get in touch</a></header>;
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
        <input
          aria-label="Search a neighborhood"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Neighborhood or ZIP code"
          value={search}
        />
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
        <select
          aria-label="Minimum bedrooms"
          onChange={(event) => setBedrooms(event.target.value)}
          value={bedrooms}
        >
          <option value="0">Any beds</option>
          <option value="1">1+ beds</option>
          <option value="2">2+ beds</option>
          <option value="3">3+ beds</option>
          <option value="4">4+ beds</option>
        </select>
      </label>
      <label>
        <span>MAX BUDGET</span>
        <select
          aria-label="Maximum budget"
          onChange={(event) => setBudget(event.target.value)}
          value={budget}
        >
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

function HomeSearch() {
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

  return <section className="listings-section" id="homes"><div className="listings-heading"><div><span className="section-eyebrow">A GOOD PLACE TO BEGIN</span><h2>Find your <em>somewhere.</em></h2></div><a href="mailto:hello@homestead.example">Not sure where to start? Let&apos;s talk ↗</a></div><SearchPanel search={search} setSearch={setSearch} kind={kind} setKind={setKind} bedrooms={bedrooms} setBedrooms={setBedrooms} budget={budget} setBudget={setBudget} /><div className="results-heading"><div><h3>Places to put down roots</h3><span>{filteredListings.length} thoughtfully chosen {filteredListings.length === 1 ? "home" : "homes"}</span></div><button type="button" className="sort-button" onClick={() => { setSearch(""); setKind("Any"); setBedrooms("0"); setBudget("0"); }}>Clear filters <span>↻</span></button></div>{filteredListings.length ? <div className="listing-grid">{filteredListings.map((home) => <article className="listing-card" key={home.name}><a className={`listing-image ${home.image}`} href="#contact" aria-label={`Learn more about ${home.name}`}>{home.badge && <span className="listing-badge">{home.badge}</span>}<span className="favorite-button" aria-hidden="true">♡</span></a><div className="listing-content"><span className="listing-neighborhood">{home.neighborhood} · {home.kind === "Buy" ? "FOR SALE" : "FOR RENT"}</span><div className="listing-title"><h4>{home.name}</h4><strong>{home.priceLabel}{home.kind === "Rent" && <small> / mo</small>}</strong></div><p>{home.address}</p><div className="listing-features"><span><b>{home.beds}</b> beds</span><span><b>{home.baths}</b> baths</span><span><b>{home.area.toLocaleString("en-US")}</b> sq ft</span><a href="#contact" aria-label={`Contact us about ${home.name}`}>↗</a></div></div></article>)}</div> : <div className="no-results"><span>⌕</span><h3>No homes found just yet.</h3><p>Try a different neighborhood or loosen your filters to see more places.</p><button className="clear-button" onClick={() => { setSearch(""); setKind("Any"); setBedrooms("0"); setBudget("0"); }} type="button">Clear all filters</button></div>}</section>;
}

function Hero() {
  return <section className="realty-hero" id="home"><div className="hero-backdrop" /><div className="hero-overlay" /><div className="hero-copy"><span className="hero-eyebrow">REAL ESTATE, WITH A LITTLE MORE HEART</span><h1>Find a place<br />to <em>feel at home.</em></h1><p>Good homes. Good people. A more personal way to find your next chapter in Brooklyn.</p><a className="hero-cta" href="#homes">Explore available homes <span>↓</span></a></div><div className="hero-caption"><span>FORT GREENE · BROOKLYN</span><span>40°41&apos;N 73°58&apos;W</span></div><div className="hero-feature"><span>THE NEIGHBORHOOD EDIT</span><strong>Find a little<br />room to grow.</strong><a href="#about">Get to know us ↗</a></div></section>;
}

function About() {
  return <section className="about-section" id="about"><div className="about-image" role="img" aria-label="A sunlit modern home interior with a calm neutral palette" /><div className="about-copy"><span className="section-eyebrow">A MORE PERSONAL KIND OF REALTY</span><h2>A home is more than<br />an <em>address.</em></h2><p>It&apos;s where Sunday mornings stretch out. Where the neighborhood starts feeling like yours. Where life unfolds, one ordinary, lovely day at a time.</p><p>Our local advisors help you find the place and the feeling that comes with it. No pressure. No scripts. Just good people who know Brooklyn and really listen.</p><a href="mailto:hello@property.example">A little more about us <span>↗</span></a></div></section>;
}

function Footer() {
  return <footer className="realty-footer" id="contact"><div className="footer-main"><div><span className="section-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2>Let&apos;s find<br /><em>your somewhere.</em></h2></div><div className="footer-contact"><p>Tell us what you&apos;re looking for.<br />We&apos;ll take it from there.</p><a href="mailto:hello@property.example">hello@property.example ↗</a></div></div><div className="footer-bottom"><a className="realty-logo" href="#home"><span className="logo-mark">⌂</span><span>PROPERTY ADVISORS<small>BROOKLYN · NEW YORK</small></span></a><span>Brooklyn, NY · Here when you need us.</span><span>© 2024 · Sample property website</span></div></footer>;
}

export default function PropertyExperience() {
  return <main className="realty-page"><Header /><Hero /><HomeSearch /><About /><Footer /></main>;
}
