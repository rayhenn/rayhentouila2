import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rayhen Touila - Graphiste et Post-production",
  description:
    "Graphisme et post-production actuellement basé sur la côte d'azur. Concentré sur l'influence digital et la création de contenu sur internet, télétravail partout en france depuis Antibes.",
  generator: "Next.js",
  applicationName: "Rayhen Touila",
  keywords: [
    "freelance",
    "graphiste",
    "freelance graphiste",
    "monteur video",
    "motion design",
    "freelance monteur video",
    "creative",
    "creative",
    "creative engineer",
    "Influence digital",
    "reseaux sociaux",
    "Web",
    "derusher",
    "portfolio",
    "cote d'azur",
    "PACA",
    "Content creation",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Rayhen Touila - Graphiste et Post-production",
    description:
      "Graphisme et post-production actuellement basé sur la côte d'azur. Concentré sur l'influence digital et la création de contenu sur internet, télétravail partout en france depuis Antibes.",
    url: "https://www.victorwilliams.me/",
    siteName: "www.victorwilliams.me",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
        width: 1200,
        height: 630,
        alt: "Rayhen Touila - Graphiste et Post-production",
      },
    ],
    locale: "fr-FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayhen Touila - Graphiste et Post-production",
    description:
      "Graphisme et post-production actuellement basé sur la côte d'azur. Concentré sur l'influence digital et la création de contenu sur internet, télétravail partout en france depuis Antibes.",
    creator: "Rayhen Touila",
    creatorId: "1243720976552144897",
    images: [
      "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "content creation",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
