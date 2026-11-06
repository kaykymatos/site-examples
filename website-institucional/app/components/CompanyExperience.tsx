import About from "./sections/About";
import FeaturedWork from "./sections/FeaturedWork";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import Services from "./sections/Services";

export default function CompanyExperience() {
  return <main className="company-page"><Header /><Intro /><About /><Services /><FeaturedWork /><Footer /></main>;
}
