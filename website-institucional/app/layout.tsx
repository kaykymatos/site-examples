import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Independent Creative Studio — Brands with meaning",
  description: "An independent creative company building thoughtful brands and digital experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
