import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offres - IA privée, IA sur Google Cloud, Plateforme & FinOps',
  description: "Trois offres : LLM privés installés sur votre infrastructure, applications IA mises en production sur Google Cloud (Gemini, Cloud Run, Terraform), et plateforme cloud Kubernetes/FinOps. Mickaël Villers, Lyon.",
  keywords: [
    'IA privée',
    'LLM on-premise',
    'Déploiement Gemini',
    'Consultant IA Lyon',
    'Services DevOps',
    'CI/CD pipeline',
    'GitHub Actions',
    'GitLab CI',
    'Kubernetes service',
    'Migration cloud',
    'GCP expert',
    'Terraform consulting',
    'Infrastructure as Code',
    'Monitoring DevOps',
    'Automatisation déploiement',
    'Déploiement IA',
    'Déploiement LLM',
    'MLOps',
    'Infrastructure IA',
    'IA self-hosted',
    'DevOps Lyon',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Offres IA et DevOps | Ghota Tech Solutions',
    description: 'LLM privés, IA sur Google Cloud, plateforme et FinOps. Mickaël Villers, Lyon.',
    url: 'https://ghotatechsolutions.com/services',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
