import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos - Mickaël Villers, ingénieur DevOps et IA',
  description: 'Mickaël Villers, ingénieur DevOps et IA à Lyon. 9 ans d\'expérience (HomeServe, Bedrock/M6, Cegid), LLM open source mesurés en local, apps IA sur Google Cloud.',
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
    description: 'Ingénieur DevOps et IA, 9 ans d\'expérience. LLM privés, Google Cloud, Kubernetes. Lyon.',
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
