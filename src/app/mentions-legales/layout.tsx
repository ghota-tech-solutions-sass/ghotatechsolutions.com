import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales de Ghota Tech Solutions. Informations sur l\'éditeur, l\'hébergement et les conditions d\'utilisation du site.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/mentions-legales',
  },
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
