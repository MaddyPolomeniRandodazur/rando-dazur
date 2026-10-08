import type { Metadata } from "next";
import SiteAnalytics from "../components/SiteAnalytics";
import TemporaryUpdateNotice from "../components/TemporaryUpdateNotice";
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
      <body><TemporaryUpdateNotice>{children}</TemporaryUpdateNotice><SiteAnalytics locale={"en"} /></body>
    </html>
  );
}
