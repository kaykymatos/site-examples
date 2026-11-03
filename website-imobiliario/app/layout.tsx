import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brooklyn Property Advisors — Find a place to feel at home",
  description: "A sample collection of homes and a more personal way to find your next chapter in Brooklyn.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
