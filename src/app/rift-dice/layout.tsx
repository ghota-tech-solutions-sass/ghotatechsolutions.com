import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rift Dice: Circuit War",
  description:
    "Jeu de stratégie mobile de Ghota Tech Solutions : composez votre deck, fusionnez vos dés et maîtrisez les circuits de la Faille.",
  alternates: {
    canonical: "/rift-dice",
  },
  openGraph: {
    title: "Rift Dice: Circuit War",
    description:
      "Un jeu de stratégie mobile de deck, fusion et tower defense compétitif.",
    url: "https://ghotatechsolutions.com/rift-dice",
    siteName: "Ghota Tech Solutions",
    type: "website",
  },
};

export default function RiftDiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}

