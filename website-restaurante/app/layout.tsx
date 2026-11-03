import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neighborhood Kitchen — Seasonal Dining",
  description: "Seasonal plates, a well-poured glass, and a welcoming neighborhood dining room in Brooklyn.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
