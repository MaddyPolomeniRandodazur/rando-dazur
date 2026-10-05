import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rando d’Azur | Randonnées de caractère sur la Riviera",
  description:
    "Explorez l’Estérel, le Cap d’Antibes, le Mercantour et le Verdon lors de randonnées privées et d’expériences outdoor avec Maddy Polomeni.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
