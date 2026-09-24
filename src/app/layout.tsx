import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ghota Tech Solutions | IA privée, IA sur GCP et DevOps à Lyon",
    template: "%s | Ghota Tech Solutions"
  },
  description: "Mickaël Villers, ingénieur DevOps et IA à Lyon. Je déploie des LLM privés sur votre infra, je mets vos apps IA en production sur Google Cloud et j'optimise votre plateforme. 9 ans d'expérience (HomeServe, M6).",
  keywords: [
    "IA privée",
    "LLM local",
    "LLM on-premise",
    "IA souveraine",
    "Déploiement LLM",
    "Gemini Google Cloud",
    "Vertex AI",
    "Consultant IA Lyon",
    "LLMOps",
    "DevOps Lyon",
    "Expert DevOps freelance",
    "Consultant DevOps",
    "CI/CD",
    "Kubernetes",
    "Google Cloud Platform",
    "GCP",
    "Docker",
    "Terraform",
    "GitHub Actions",
    "GitLab CI",
    "Infrastructure as Code",
    "Cloud migration",
    "FinOps",
    "Automatisation déploiement",
    "Conteneurisation",
    "Monitoring",
    "Observabilité"
  ],
  authors: [{ name: "Mickaël Villers", url: "https://www.linkedin.com/in/micka%C3%ABl-villers-1b1a6496/" }],
  creator: "Mickaël Villers",
  publisher: "Ghota Tech Solutions",
  metadataBase: new URL('https://ghotatechsolutions.com'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ghotatechsolutions.com',
    title: 'Ghota Tech Solutions | IA privée, IA sur GCP et DevOps à Lyon',
    description: 'LLM privés sur votre infra, apps IA en production sur Google Cloud, plateforme et FinOps. Mickaël Villers, Lyon.',
    siteName: 'Ghota Tech Solutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ghota Tech Solutions - IA et DevOps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghota Tech Solutions | IA privée, IA sur GCP et DevOps',
    description: 'LLM privés, apps IA en production sur Google Cloud, plateforme et FinOps. Lyon.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

import { GoogleTagManager } from '@next/third-parties/google'
import CookieConsent from '@/components/CookieConsent';

// Données structurées JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://ghotatechsolutions.com/#organization',
      name: 'Ghota Tech Solutions',
      url: 'https://ghotatechsolutions.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ghotatechsolutions.com/icon.svg',
      },
      sameAs: [
        'https://www.linkedin.com/in/micka%C3%ABl-villers-1b1a6496/',
        'https://www.malt.fr/profile/mickaelvillers',
        'https://x.com/MickaelV79228',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '268 RUE PAUL BERT',
        addressLocality: 'Lyon',
        postalCode: '69003',
        addressCountry: 'FR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@ghotatechsolutions.com',
        contactType: 'customer service',
        availableLanguage: ['French'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://ghotatechsolutions.com/#website',
      url: 'https://ghotatechsolutions.com',
      name: 'Ghota Tech Solutions',
      publisher: {
        '@id': 'https://ghotatechsolutions.com/#organization',
      },
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://ghotatechsolutions.com/#localbusiness',
      name: 'Ghota Tech Solutions',
      description: 'IA privée, IA sur Google Cloud et DevOps à Lyon. 9 ans d\'expérience en Kubernetes, GCP, Terraform et CI/CD.',
      url: 'https://ghotatechsolutions.com',
      telephone: '+33 6 37 83 58 81',
      email: 'contact@ghotatechsolutions.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '268 RUE PAUL BERT',
        addressLocality: 'Lyon',
        postalCode: '69003',
        addressRegion: 'Auvergne-Rhône-Alpes',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 45.7578,
        longitude: 4.8624,
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Lyon',
        },
        {
          '@type': 'Country',
          name: 'France',
        },
      ],
      priceRange: '€€€',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://ghotatechsolutions.com/#person',
      name: 'Mickaël Villers',
      jobTitle: 'Ingénieur DevOps et IA',
      worksFor: {
        '@id': 'https://ghotatechsolutions.com/#organization',
      },
      sameAs: [
        'https://www.linkedin.com/in/micka%C3%ABl-villers-1b1a6496/',
        'https://www.malt.fr/profile/mickaelvillers',
        'https://x.com/MickaelV79228',
      ],
      knowsAbout: [
        'Large Language Models',
        'LLM self-hosting',
        'MLX',
        'Gemini',
        'Vertex AI',
        'DevOps',
        'CI/CD',
        'Kubernetes',
        'Google Cloud Platform',
        'Docker',
        'Terraform',
        'GitHub Actions',
        'GitLab CI',
        'Infrastructure as Code',
        'FinOps',
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://ghotatechsolutions.com/#service',
      name: 'IA privée, IA sur Google Cloud et DevOps',
      provider: {
        '@id': 'https://ghotatechsolutions.com/#organization',
      },
      serviceType: 'Conseil IA et DevOps',
      areaServed: 'France',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Offres Ghota Tech Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'IA privée',
              description: 'Choix, mesure et installation de LLM open source sur votre infrastructure, sans envoyer vos données à une API externe',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'IA sur Google Cloud',
              description: 'Mise en production d\'applications IA sur GCP : Gemini, Cloud Run, Terraform, CI/CD',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Plateforme & FinOps',
              description: 'Kubernetes, Terraform, CI/CD et réduction de la facture cloud sur GCP et AWS',
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
      <body className={`${geist.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased`}>
        <GoogleTagManager gtmId="GTM-K22W23KR" />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
