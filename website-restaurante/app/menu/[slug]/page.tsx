import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dishes } from "../../components/dishData";
import Footer from "../../components/sections/Footer";
import Header from "../../components/sections/Header";

type DishDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

function findDish(slug: string) {
  return dishes.find((dish) => dish.slug === slug);
}

export function generateStaticParams() {
  return dishes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: DishDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const dish = findDish(slug);

  return {
    title: dish ? `${dish.name} | Neighborhood Kitchen` : "Dish not found | Neighborhood Kitchen",
    description: dish?.description,
  };
}

export default async function DishDetailsPage({ params }: DishDetailsPageProps) {
  const { slug } = await params;
  const dish = findDish(slug);

  if (!dish) {
    notFound();
  }

  return (
    <main className="restaurant-page">
      <Header />
      <section className="dish-details">
        <Link className="dish-back-link" href="/#menu">
          ← Back to the menu
        </Link>

        <div className="dish-detail-layout">
          <div className="dish-detail-photo">
            <Image src={dish.image} alt={dish.name} fill priority sizes="(max-width: 760px) 100vw, 58vw" />
            {dish.tag && <span className="dish-tag">{dish.tag}</span>}
          </div>

          <div className="dish-detail-copy">
            <span className="section-kicker">{dish.category.toUpperCase()}</span>
            <h1>{dish.name}</h1>
            <strong className="dish-detail-price">{dish.price}</strong>
            <p className="dish-detail-description">{dish.details}</p>

            <section className="dish-ingredients">
              <h2>On the plate</h2>
              <ul>
                {dish.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
              </ul>
            </section>

            <p className="dish-allergy-note">
              Our menu changes with the seasons. Please let us know about any allergies when you book.
            </p>
            <a className="dish-reserve-link" href="tel:+15551234567">
              Come enjoy it with us <span>↗</span>
            </a>
          </div>
        </div>

        <div className="dish-detail-footer">
          <p>Thoughtful plates, ingredients that speak for themselves, and just enough butter.</p>
          <Link href="/#menu">Explore the full menu ↗</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
