import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/sections/Footer";
import Header from "../../components/sections/Header";
import { getListingBySlug, getListings } from "../../services/propertyService";

type HomeDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const listings = await getListings();
  return listings.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: HomeDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const home = await getListingBySlug(slug);

  return {
    title: home ? `${home.name} | Brooklyn Property Advisors` : "Home not found | Brooklyn Property Advisors",
    description: home?.description,
  };
}

export default async function HomeDetailsPage({ params }: HomeDetailsPageProps) {
  const { slug } = await params;
  const home = await getListingBySlug(slug);

  if (!home) {
    notFound();
  }

  const isRental = home.kind === "Rent";
  const contactSubject = encodeURIComponent(`I'm interested in ${home.name} at ${home.address}`);
  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(`${home.address}, NY`)}`;

  return (
    <main className="realty-page">
      <Header />
      <section className="property-details">
        <Link className="property-back-link" href="/#homes">
          ← Back to available homes
        </Link>

        <div className="property-detail-heading">
          <div>
            <span className="section-eyebrow">{home.neighborhood} · {isRental ? "FOR RENT" : "FOR SALE"}</span>
            <h1>{home.name}</h1>
            <p>{home.address}</p>
          </div>
          <strong className="property-detail-price">
            {home.priceLabel}
            {isRental && <small> / mo</small>}
          </strong>
        </div>

        <div className="property-photo">
          <Image
            src={home.image}
            alt={`${home.propertyType} in ${home.neighborhood}`}
            fill
            priority
            sizes="(max-width: 850px) 100vw, 1170px"
          />
          {home.badge && <span className="listing-badge">{home.badge}</span>}
        </div>

        <div className="property-facts" aria-label="Property overview">
          <div><strong>{home.beds}</strong><span>Bedrooms</span></div>
          <div><strong>{home.baths}</strong><span>Bathrooms</span></div>
          <div><strong>{home.area.toLocaleString("en-US")}</strong><span>Square feet</span></div>
          <div><strong>{home.propertyType}</strong><span>Property type</span></div>
        </div>

        <div className="property-detail-grid">
          <div className="property-overview">
            <section className="property-copy">
              <span className="section-eyebrow">A CLOSER LOOK</span>
              <h2>A home with room to <em>feel at home.</em></h2>
              <p>{home.description}</p>
            </section>

            <section className="property-highlights">
              <h2>Home highlights</h2>
              <ul>
                {home.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </section>

            <section className="property-location">
              <div>
                <span className="section-eyebrow">THE NEIGHBORHOOD</span>
                <h2>{home.neighborhood}</h2>
                <p>{home.address}</p>
              </div>
              <a href={mapUrl} target="_blank" rel="noreferrer">View map ↗</a>
            </section>
          </div>

          <aside className="property-contact-panel">
            <span className="section-eyebrow">PICTURE YOURSELF HERE?</span>
            <h2>Let&apos;s take a closer look.</h2>
            <p>Get in touch with our team to learn more or arrange a visit.</p>
            <a href={`mailto:hello@property.example?subject=${contactSubject}`}>
              Ask about this home <span>↗</span>
            </a>
            <span className="property-contact-note">A local advisor will be happy to help.</span>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
