import type { Metadata } from "next";
import "../globals.css";
import { getHomeMetadata } from "../lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getHomeMetadata("en");
}

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>{children}</body>
    </html>
  );
}
