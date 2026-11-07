import { dishes, type Dish } from "../components/dishData";

export async function getDishes(): Promise<Dish[]> {
  return dishes;
}

export async function getDishBySlug(slug: string): Promise<Dish | undefined> {
  const menu = await getDishes();
  return menu.find((dish) => dish.slug === slug);
}
