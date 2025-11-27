import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos - Mickaël Villers, Expert DevOps',
  description: 'Mickaël Villers, expert DevOps avec +9 ans d\'expérience. Spécialiste GCP, Kubernetes, Terraform, CI/CD. Missions chez HomeServe, Bedrock (M6), Cegid. Basé à Lyon.',
  keywords: [
    'Mickaël Villers',
    'Expert DevOps Lyon',
    'Consultant DevOps freelance',
    'Ingénieur DevOps',
    'Parcours DevOps',
    'Expérience Kubernetes',
    'Spécialiste GCP',
    'Freelance DevOps Lyon',
  ],
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'À propos de Mickaël Villers | Ghota Tech Solutions',
    description: 'Expert DevOps avec +9 ans d\'expérience. GCP, Kubernetes, Terraform, CI/CD. Basé à Lyon.',
    url: 'https://ghotatechsolutions.com/a-propos',
    type: 'profile',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
