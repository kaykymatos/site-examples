import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Workspace — Make work feel more human",
  description: "A calmer, clearer way to plan projects and bring your team together.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
