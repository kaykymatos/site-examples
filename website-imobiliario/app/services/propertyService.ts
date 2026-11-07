import { listings, type Listing } from "../components/propertyData";

export async function getListings(): Promise<Listing[]> {
  return listings;
}

export async function getListingBySlug(slug: string): Promise<Listing | undefined> {
  const properties = await getListings();
  return properties.find((listing) => listing.slug === slug);
}
