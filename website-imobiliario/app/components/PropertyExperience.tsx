import About from "./sections/About";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import HomeSearch from "./sections/HomeSearch";
import { getListings } from "../services/propertyService";

export default async function PropertyExperience() {
  const listings = await getListings();

  return <main className="realty-page"><Header /><Hero /><HomeSearch listings={listings} /><About /><Footer /></main>;
}
