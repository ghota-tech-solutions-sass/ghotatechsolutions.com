import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services DevOps - CI/CD, Kubernetes, Cloud, Terraform',
  description: 'Découvrez nos services DevOps : CI/CD avec GitHub Actions et GitLab, Kubernetes, migration cloud GCP, Infrastructure as Code avec Terraform, monitoring et observabilité. Expert DevOps à Lyon.',
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
