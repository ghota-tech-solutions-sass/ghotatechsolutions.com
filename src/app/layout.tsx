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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
