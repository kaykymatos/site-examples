import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import SelectedWork from "./sections/SelectedWork";

export default function PortfolioExperience() {
  return <main className="portfolio-page"><Header /><Hero /><SelectedWork /><About /><Experience /><Contact /></main>;
}
