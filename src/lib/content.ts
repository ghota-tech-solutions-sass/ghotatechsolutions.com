// Contenu éditorial partagé par l'accueil, /services et /a-propos.
// Règle : chaque chiffre publié ici doit déjà être public (post LinkedIn, thread X,
// page du projet). Pas de métrique interne (revenus, rétention, analytics).

export const CONTACT_EMAIL = 'contact@ghotatechsolutions.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/micka%C3%ABl-villers-1b1a6496/';
export const MALT_URL = 'https://www.malt.fr/profile/mickaelvillers';
export const X_URL = 'https://x.com/MickaelV79228';

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
  cta: string;
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
    cta: 'Parler de mon projet d’IA privée',
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
    cta: 'Mettre mon app IA en production',
  },
  {
    id: 'plateforme',
    kicker: 'Plateforme & FinOps',
    title: 'Une infra cloud qui coûte moins et casse moins',
    pitch:
      'Neuf ans de DevOps sur de gros volumes : streaming chez M6, plateforme chez HomeServe. Je reprends vos pipelines, votre Kubernetes et votre facture cloud.',
    forWho: 'Équipes tech sur GCP ou AWS qui veulent aller plus vite en dépensant moins.',
    deliverables: [
      'Audit de la facture cloud et plan de réduction chiffré',
      'Migration CI/CD (GitLab, Jenkins → GitHub Actions)',
      'Kubernetes (GKE, EKS), Terraform, observabilité',
      'Mission en régie ou au forfait',
    ],
    proof: 'Chez HomeServe : 100+ dépôts migrés de GitLab vers GitHub, plusieurs milliers d’euros économisés par mois sur le cloud.',
    cta: 'Faire auditer mon infra',
  },
];

export type Experiment = {
  title: string;
  claim: string;
  figures: { value: string; label: string }[];
  link?: { href: string; label: string };
};

export const experiments: Experiment[] = [
  {
    title: 'DFlash2 contre MTP, mesuré sur un MacBook M5 Max',
    claim:
      'Tout X parlait de DFlash2 pour accélérer Qwen 27B. Je l’ai mesuré sur ma machine : pour mon usage de code, MTP faisait mieux.',
    figures: [
      { value: '75 000', label: 'vues sur le thread' },
      { value: '323', label: 'enregistrements' },
    ],
    link: { href: X_URL, label: 'Voir mes benchs sur X' },
  },
  {
    title: 'Un site de réservation en une journée, 100 % en local',
    claim:
      'Design, réservation, calcul du prix, parcours GPX, back-office et déploiement sur Cloud Run, avec Qwen 3.8 Flash Next et opencode, sans aucune API cloud. Une fonctionnalité, un prompt.',
    figures: [
      { value: '1 jour', label: 'pour la V1' },
      { value: '0 €', label: 'd’API' },
    ],
    link: { href: 'https://losarditos.com', label: 'losarditos.com' },
  },
  {
    title: 'Ma stack IA locale, en production tous les jours',
    claim:
      'Un seul serveur d’inférence MLX sert six outils (agents de code, assistant, automatisations). Chaque modèle est gardé ou retiré sur mesure, jamais sur la fiche technique.',
    figures: [
      { value: '6', label: 'outils branchés' },
      { value: '128 Go', label: 'de mémoire unifiée' },
    ],
  },
];

export type Project = {
  name: string;
  href: string;
  what: string;
  stack: string;
  fact: string;
};

export const projects: Project[] = [
  {
    name: 'Who Will Break It?',
    href: 'https://whowillbreakit.com',
    what: 'Un seul œuf pour tout Internet. Il casse à un nombre secret, le dernier clic gagne le lot du sponsor.',
    stack: 'Cloudflare Workers, Durable Objects',
    fact: 'Manche 1 : 9 285 219 clics, 2 707 joueurs, 99 pays en 82 h.',
  },
  {
    name: 'RoastMyPic',
    href: 'https://roastmypic.ai',
    what: 'Vous envoyez une photo, l’IA la note et vous la refait en quatre styles.',
    stack: 'Gemini (Nano Banana Pro), Cloud Run, PostgreSQL, Next.js',
    fact: 'Génération d’images en production sur GCP.',
  },
  {
    name: 'Lettrio',
    href: 'https://lettrio.app',
    what: 'Des courriers administratifs rédigés par IA, en plusieurs langues.',
    stack: 'Gemini, Cloud Run, Terraform, Stripe',
    fact: 'Paiement, génération PDF et SEO multilingue.',
  },
  {
    name: 'Los Arditos',
    href: 'https://losarditos.com',
    what: 'Site de location de vélos électriques à Malte, avec réservation et parcours GPX.',
    stack: 'Next.js, Cloud Run, code écrit par un LLM local',
    fact: 'Client réel, V1 livrée en une journée.',
  },
  {
    name: 'Flexwall',
    href: 'https://flexwall.lol',
    what: 'Une page publique de tuiles en direct, branchées sur vos vrais comptes : revenus Stripe, activité GitHub, toute API.',
    stack: 'GCP, Terraform, connecteurs d’API',
    fact: 'Plateforme en ligne, déployée en continu.',
  },
  {
    name: 'Kitten Clash Arena',
    href: 'https://kittenclash.com',
    what: 'Adoptez un chaton, entraînez-le et affrontez d’autres joueurs dans une arène en ligne.',
    stack: 'Cloud Run, Terraform, Sign in with Apple',
    fact: 'Gratuit, sans téléchargement, dans le navigateur.',
  },
  {
    name: 'Outilis',
    href: 'https://outilis.fr',
    what: 'Salaire brut/net, prêt immobilier, factures, QR codes, mots de passe : les outils du quotidien.',
    stack: 'Next.js',
    fact: '92 outils gratuits, sans inscription.',
  },
  {
    name: 'Outilio',
    href: 'https://outilio.fr',
    what: 'Location d’outils entre particuliers : perceuse, bétonnière, tondeuse.',
    stack: 'Next.js',
    fact: 'Place de marché entre particuliers.',
  },
  {
    name: 'Rive Verte',
    href: 'https://rive-verte.fr',
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
    period: '2025 →',
    text: 'Conseil DevOps et IA, et développement de mes propres produits.',
  },
  {
    role: 'Ingénieur DevOps (freelance)',
    company: 'HomeServe France',
    period: 'mai 2023 →',
    text: 'Équipe Platform : CI/CD, infra cloud, FinOps (plusieurs milliers d’euros économisés par mois), migration de 100+ dépôts GitLab vers GitHub, Keycloak, sécurité.',
  },
  {
    role: 'DevOps Engineer',
    company: 'Bedrock Streaming (M6)',
    period: '2020 → 2023',
    text: 'AWS et Kubernetes à l’échelle du streaming, migration Jenkins vers GitHub Actions, pré-scaling Kubernetes, réduction des coûts, tests de charge.',
  },
  {
    role: 'Missions freelance',
    company: 'Les Mini Mondes, Journal du Coin, LIM, Syned',
    period: '2020 → 2023',
    text: 'Migrations vers Google Cloud, Terraform, Kubernetes, CI/CD et monitoring.',
  },
  {
    role: 'Développeur puis Dev/Ops',
    company: 'KeyOpsTech, HEVA, Cegid',
    period: '2014 → 2020',
    text: 'PHP/Symfony, AngularJS, React, premiers pipelines de déploiement et migration vers GKE.',
  },
];

export const clients = ['HomeServe', 'Bedrock (M6)', 'Cegid', 'Les Mini Mondes', 'Journal du Coin', 'HEVA'];

export const steps = [
  { n: '01', title: 'Un appel de 30 minutes', text: 'Vous m’expliquez le besoin. Je vous dis franchement si l’IA est la bonne réponse, ou pas.' },
  { n: '02', title: 'Une mesure avant tout devis', text: 'Je teste sur un échantillon de vos données. Vous voyez des chiffres avant de signer quoi que ce soit de gros.' },
  { n: '03', title: 'Un prototype qui tourne', text: 'En deux à trois semaines, sur votre infra ou la mienne.' },
  { n: '04', title: 'La mise en production', text: 'Terraform, CI/CD, monitoring, documentation. Votre équipe peut reprendre la main.' },
];
