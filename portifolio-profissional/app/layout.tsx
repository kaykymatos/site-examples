import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Independent Designer — Professional Portfolio",
  description: "Sample brand, digital, and art direction work for an independent designer portfolio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
