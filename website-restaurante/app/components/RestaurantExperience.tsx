import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Story from "./sections/Story";
import Visit from "./sections/Visit";
import { getDishes } from "../services/dishService";

export default async function RestaurantExperience() {
  const dishes = await getDishes();

  return <main className="restaurant-page"><Header /><Hero /><Menu dishes={dishes} /><Story /><Visit /><Footer /></main>;
}
