import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ghota Tech Solutions - Votre partenaire DevOps expert",
  description: "Ghota Tech Solutions accompagne votre entreprise dans la modernisation de vos infrastructures avec des solutions DevOps personnalisées : CI/CD, Kubernetes, Cloud, Observabilité et Sécurité.",
  keywords: ["DevOps", "CI/CD", "Kubernetes", "Cloud", "GCP", "Docker", "Automatisation", "Observabilité", "Sécurité"],
  authors: [{ name: "Mickaël Villers", url: "https://ghotatechsolutions.com" }],
  creator: "Mickaël Villers",
  publisher: "Ghota Tech Solutions",
  metadataBase: new URL('https://ghotatechsolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ghotatechsolutions.com',
    title: 'Ghota Tech Solutions - Votre partenaire DevOps expert',
    description: 'Ghota Tech Solutions accompagne votre entreprise dans la modernisation de vos infrastructures avec des solutions DevOps personnalisées.',
    siteName: 'Ghota Tech Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghota Tech Solutions - Votre partenaire DevOps expert',
    description: 'Solutions DevOps personnalisées pour votre entreprise',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

import { GoogleTagManager } from '@next/third-parties/google'
import CookieConsent from '@/components/CookieConsent';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              // Définir le consentement par défaut à "denied" AVANT le chargement de GTM
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });

              // Restaurer le consentement si déjà accepté
              const savedConsent = localStorage.getItem('cookie_consent');
              if (savedConsent === 'granted') {
                gtag('consent', 'update', {
                  'analytics_storage': 'granted',
                  'ad_storage': 'granted',
                  'ad_user_data': 'granted',
                  'ad_personalization': 'granted'
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <GoogleTagManager gtmId="GTM-K22W23KR" />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
