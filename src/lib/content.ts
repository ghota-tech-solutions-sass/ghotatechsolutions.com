// Contenu éditorial partagé par l'accueil, /services et /a-propos.
// Règle : chaque chiffre publié ici doit déjà être public (post LinkedIn, thread X,
// page du projet). Pas de métrique interne (revenus, rétention, analytics).

export const CONTACT_EMAIL = 'contact@ghotatechsolutions.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/micka%C3%ABl-villers-1b1a6496/';
export const MALT_URL = 'https://www.malt.fr/profile/mickaelvillers';
export const X_URL = 'https://x.com/MickaelV79228';

export const CONTACT_LABEL = 'Prendre contact';

export const mailto = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export type Offer = {
  id: string;
  kicker: string;
  title: string;
  pitch: string;
  forWho: string;
  deliverables: string[];
  proof: string;
};

export const offers: Offer[] = [
  {
    id: 'ia-privee',
    kicker: 'IA privée',
    title: 'Un LLM qui tourne chez vous, pas chez OpenAI',
    pitch:
      "Vos données restent sur vos machines ou dans votre cloud. Je choisis le modèle en le mesurant sur vos vrais documents, je l'installe, et je vous dis honnêtement ce qu'il sait faire et ce qu'il rate.",
    forWho: 'Santé, juridique, industrie, et toute équipe qui ne peut pas envoyer ses données à une API américaine.',
    deliverables: [
      'Banc de 3 à 5 modèles open source sur vos données : qualité, vitesse, coût',
      'Serveur d’inférence installé (poste Apple Silicon, serveur GPU ou cloud privé)',
      'Assistant ou automatisation branché sur un cas réel de votre équipe',
      'Rapport chiffré : ce qui marche, ce qui ne marche pas, ce que ça coûte par mois',
    ],
    proof: 'Six outils IA (agents de code, assistant) tournent chaque jour sur mes modèles 100 % locaux.',
  },
  {
    id: 'ia-gcp',
    kicker: 'IA sur Google Cloud',
    title: 'De la démo à une vraie app IA en production',
    pitch:
      'Vous avez un prototype avec Gemini ou un autre modèle, ou juste une idée. Je le mets en production sur GCP proprement : Cloud Run, Terraform, secrets, budget plafonné, déploiement automatique.',
    forWho: 'Startups et PME qui veulent sortir une fonctionnalité IA sans monter une équipe plateforme.',
    deliverables: [
      'Architecture GCP sur mesure, décrite en Terraform',
      'Intégration Gemini (texte, image) ou d’un modèle open source',
      'CI/CD, environnements de test et de prod, alertes de budget',
      'Coût par utilisateur mesuré avant le lancement',
    ],
    proof: 'Lettrio et RoastMyPic tournent exactement comme ça : Gemini, Cloud Run, Terraform.',
  },
  {
    id: 'plateforme',
    kicker: 'Plateforme & FinOps',
    title: 'Une infra cloud qui coûte moins et casse moins',
    pitch:
      'Neuf ans de DevOps sur de gros volumes : streaming chez M6, plateforme chez HomeServe. Je reprends vos pipelines, votre Kubernetes et votre facture cloud, et j’épaule vos équipes dev et data au quotidien.',
    forWho: 'Équipes tech sur GCP ou AWS qui veulent aller plus vite en dépensant moins.',
    deliverables: [
      'Audit FinOps de la facture cloud et plan de réduction chiffré',
      'Migration CI/CD (GitLab, Jenkins → GitHub Actions)',
      'Kubernetes (GKE, EKS), Terraform, observabilité',
      'Accompagnement des équipes dev et data : incidents, questions, déblocages',
      'Mission en régie ou au forfait',
    ],
    proof: 'Chez HomeServe : démarche FinOps qui économise plusieurs milliers d’euros par mois sur la facture cloud, et 100+ dépôts migrés de GitLab vers GitHub.',
  },
];

export type Project = {
  name: string;
  href: string;
  image: string;
  what: string;
  stack: string;
  fact: string;
};

export const projects: Project[] = [
  {
    name: 'Who Will Break It?',
    href: 'https://whowillbreakit.com',
    image: '/projets/wwbi.webp',
    what: 'Un seul œuf pour tout Internet. Il casse à un nombre secret, le dernier clic gagne le lot du sponsor.',
    stack: 'Cloudflare Workers, Durable Objects',
    fact: 'Manche 1 : 9 285 219 clics, 2 707 joueurs, 99 pays en 82 h.',
  },
  {
    name: 'RoastMyPic',
    href: 'https://roastmypic.ai',
    image: '/projets/roastmypic.webp',
    what: 'Vous envoyez une photo, l’IA la note et vous la refait en quatre styles.',
    stack: 'Gemini (Nano Banana Pro), Cloud Run, PostgreSQL, Next.js',
    fact: 'Génération d’images en production sur GCP.',
  },
  {
    name: 'Lettrio',
    href: 'https://lettrio.app',
    image: '/projets/lettrio.webp',
    what: 'Des courriers administratifs rédigés par IA, en plusieurs langues.',
    stack: 'Gemini, Cloud Run, Terraform, Stripe',
    fact: 'Paiement, génération PDF et SEO multilingue.',
  },
  {
    name: 'Los Arditos',
    href: 'https://losarditos.com',
    image: '/projets/losarditos.webp',
    what: 'Site de location de vélos électriques à Malte, avec réservation et parcours GPX.',
    stack: 'Next.js, Cloud Run, code écrit par un LLM local',
    fact: 'Client réel, V1 livrée en une journée.',
  },
  {
    name: 'Flexwall',
    href: 'https://flexwall.lol',
    image: '/projets/flexwall.webp',
    what: 'Une page publique de tuiles en direct, branchées sur vos vrais comptes : revenus Stripe, activité GitHub, toute API.',
    stack: 'GCP, Terraform, connecteurs d’API',
    fact: 'Plateforme en ligne, déployée en continu.',
  },
  {
    name: 'Kitten Clash Arena',
    href: 'https://kittenclash.com',
    image: '/projets/kittenclash.webp',
    what: 'Adoptez un chaton, entraînez-le et affrontez d’autres joueurs dans une arène en ligne.',
    stack: 'Cloud Run, Terraform, Sign in with Apple',
    fact: 'Gratuit, sans téléchargement, dans le navigateur.',
  },
  {
    name: 'Outilis',
    href: 'https://outilis.fr',
    image: '/projets/outilis.webp',
    what: 'Salaire brut/net, prêt immobilier, factures, QR codes, mots de passe : les outils du quotidien.',
    stack: 'Next.js',
    fact: '92 outils gratuits, sans inscription.',
  },
  {
    name: 'Rive Verte',
    href: 'https://rive-verte.fr',
    image: '/projets/riveverte.webp',
    what: 'Site du restaurant chinois Rive Verte à Lyon 7e : carte, horaires et réservation.',
    stack: 'Next.js, Supabase',
    fact: 'Site client livré sous la marque Ghota Tech.',
  },
];

export type Job = { role: string; company: string; period: string; text: string };

export const career: Job[] = [
  {
    role: 'Fondateur',
    company: 'Ghota Tech Solutions',
    period: 'depuis 2025',
    text: 'Conseil DevOps et IA, et développement de mes propres produits.',
  },
  {
    role: 'Ingénieur DevOps (freelance)',
    company: 'HomeServe France',
    period: 'depuis 2023',
    text: 'Équipe Platform, point d’appui de toutes les équipes dev et data (incidents, questions, déblocages) : CI/CD, infra cloud, FinOps (plusieurs milliers d’euros économisés par mois), migration de 100+ dépôts GitLab vers GitHub, Keycloak, sécurité.',
  },
  {
    role: 'DevOps Engineer',
    company: 'Bedrock Streaming (M6)',
    period: '2020-2023',
    text: 'Accompagnement de toutes les équipes dev et data sur leurs incidents et leurs questions. AWS et Kubernetes à l’échelle du streaming, migration Jenkins vers GitHub Actions, pré-scaling Kubernetes, réduction des coûts, tests de charge.',
  },
  {
    role: 'Missions freelance',
    company: 'Les Mini Mondes, Journal du Coin, LIM, Syned',
    period: '2020-2023',
    text: 'Migrations vers Google Cloud, Terraform, Kubernetes, CI/CD et monitoring.',
  },
  {
    role: 'Développeur puis Dev/Ops',
    company: 'KeyOpsTech, HEVA, Cegid',
    period: '2014-2020',
    text: 'PHP/Symfony, AngularJS, React, premiers pipelines de déploiement et migration vers GKE.',
  },
];

export const clients = ['HomeServe', 'Bedrock (M6)', 'Cegid', 'Les Mini Mondes', 'Journal du Coin', 'HEVA'];

export const steps: { title: string; text: string }[] = [
  { title: 'Un appel de 30 minutes', text: 'Vous m’expliquez le besoin. Je vous dis franchement si l’IA est la bonne réponse, ou pas.' },
  { title: 'Une mesure avant tout devis', text: 'Je teste sur un échantillon de vos données. Vous voyez les chiffres avant de vous engager sur un projet complet.' },
  { title: 'Un prototype qui tourne', text: 'En deux à trois semaines, sur votre infra ou la mienne.' },
  { title: 'La mise en production', text: 'Terraform, CI/CD, monitoring, documentation. Votre équipe peut reprendre la main.' },
];
