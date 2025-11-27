import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité de Ghota Tech Solutions. Informations sur la collecte et le traitement des données personnelles, cookies et RGPD.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/politique-confidentialite',
  },
};

export default function PolitiqueConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
