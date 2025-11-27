import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ghota Tech Solutions | Expert DevOps & Cloud à Lyon",
    template: "%s | Ghota Tech Solutions"
  },
  description: "Expert DevOps freelance à Lyon. +9 ans d'expérience en CI/CD, Kubernetes, GCP, Terraform. Accompagnement dans la modernisation de vos infrastructures cloud. Devis gratuit.",
  keywords: [
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
  authors: [{ name: "Mickaël Villers", url: "https://www.linkedin.com/in/villers/" }],
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
    title: 'Ghota Tech Solutions | Expert DevOps & Cloud à Lyon',
    description: 'Expert DevOps freelance à Lyon. +9 ans d\'expérience. CI/CD, Kubernetes, GCP, Terraform. Modernisez vos infrastructures cloud.',
    siteName: 'Ghota Tech Solutions',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Ghota Tech Solutions - Expert DevOps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghota Tech Solutions | Expert DevOps & Cloud',
    description: 'Expert DevOps freelance à Lyon. CI/CD, Kubernetes, GCP, Terraform.',
    images: ['/og-image.svg'],
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
  verification: {
    google: 'votre-code-verification-google',
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
        'https://www.linkedin.com/in/villers/',
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
      description: 'Expert DevOps freelance à Lyon. +9 ans d\'expérience en CI/CD, Kubernetes, GCP, Terraform.',
      url: 'https://ghotatechsolutions.com',
      telephone: '',
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
      jobTitle: 'Expert DevOps & Cloud',
      worksFor: {
        '@id': 'https://ghotatechsolutions.com/#organization',
      },
      sameAs: [
        'https://www.linkedin.com/in/villers/',
      ],
      knowsAbout: [
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
      name: 'Services DevOps',
      provider: {
        '@id': 'https://ghotatechsolutions.com/#organization',
      },
      serviceType: 'Conseil DevOps',
      areaServed: 'France',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services DevOps',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'CI/CD & Automatisation',
              description: 'Mise en place de pipelines CI/CD avec GitHub Actions, GitLab CI',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Cloud & Conteneurs',
              description: 'Migration et architecture sur GCP, Kubernetes, Docker',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Infrastructure as Code',
              description: 'Automatisation avec Terraform et Terragrunt',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Observabilité & Monitoring',
              description: 'Mise en place de solutions de monitoring et alerting',
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
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <GoogleTagManager gtmId="GTM-K22W23KR" />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
