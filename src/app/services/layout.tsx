import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services DevOps - CI/CD, Kubernetes, Cloud, Terraform',
  description: "Services DevOps : CI/CD, Kubernetes, migration cloud GCP, Infrastructure as Code Terraform, monitoring, et déploiement d'IA et de LLM en local ou cloud. Expert DevOps & IA à Lyon.",
  keywords: [
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
    title: 'Services DevOps | Ghota Tech Solutions',
    description: 'CI/CD, Kubernetes, Cloud GCP, Terraform, Monitoring. Expert DevOps freelance à Lyon.',
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
