import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { career, LINKEDIN_URL, MALT_URL, X_URL } from '@/lib/content';

const skills = [
  {
    group: 'IA',
    items: ['LLM open source (Qwen, Laguna…)', 'MLX sur Apple Silicon', 'Gemini (texte, image)', 'Synthèse vocale locale', 'Agents de code', 'Bancs de mesure'],
  },
  {
    group: 'Cloud',
    items: ['Google Cloud (Cloud Run, GKE)', 'AWS (EKS)', 'Cloudflare Workers', 'FinOps'],
  },
  {
    group: 'Plateforme',
    items: ['Kubernetes, Helm', 'Terraform, Terragrunt', 'GitHub Actions, GitLab CI', 'Prometheus, Grafana'],
  },
  {
    group: 'Code',
    items: ['TypeScript, Node.js, Bun', 'Next.js, React', 'PHP, Symfony'],
  },
];

const principles = [
  {
    title: 'Mesurer avant de recommander',
    text: 'Une fiche technique ou un benchmark d’éditeur ne dit rien de vos données. Je teste sur votre cas, plusieurs fois, et je vous montre les chiffres.',
  },
  {
    title: 'Dire ce qui ne marche pas',
    text: 'Je garde les résultats défavorables. Si un modèle rate 1 cas sur 5, vous le savez avant de le mettre devant vos clients.',
  },
  {
    title: 'Être là quand ça coince',
    text: 'Chez Bedrock comme chez HomeServe, je suis le point d’appui de toutes les équipes dev et data : incident en production, question d’archi, pipeline bloqué.',
  },
  {
    title: 'Laisser une équipe autonome',
    text: 'Tout est décrit en code (Terraform, CI/CD) et documenté. Vous pouvez reprendre la main sans moi.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main id="contenu" className="pt-16">
        <header className="relative border-b border-border">
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.4fr_1fr] md:py-28 lg:px-8">
            <div>
              <p className="text-sm font-medium text-primary">À propos</p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground md:text-5xl">
                Mickaël Villers
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">Ingénieur DevOps et IA, à Lyon</p>
              <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  J’ai commencé comme développeur PHP et JavaScript, puis j’ai passé la majorité de ma carrière à faire
                  tourner des plateformes cloud : le streaming de M6 chez Bedrock, puis la plateforme de HomeServe.
                </p>
                <p>
                  En parallèle, je me suis plongé dans l’IA : je fais tourner les derniers modèles
                  open source sur ma propre machine, je les mesure, et je construis mes produits avec. Ghota Tech
                  Solutions, c’est ma société, pour faire profiter les entreprises de ces deux métiers à la fois.
                </p>
              </div>
            </div>

            <aside className="self-end overflow-hidden rounded-xl border border-border bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mickael-villers.jpg"
                alt="Mickaël Villers"
                width={640}
                height={800}
                className="aspect-square w-full object-cover object-[50%_30%]"
              />
              <div className="p-6">
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Basé à</dt>
                  <dd className="text-foreground">Lyon 3e</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Expérience</dt>
                  <dd className="text-foreground">9 ans et plus</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Langues</dt>
                  <dd className="text-foreground">Français, anglais</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Société</dt>
                  <dd className="text-right text-foreground">Ghota Tech Solutions, EURL</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-sm font-medium">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">LinkedIn</a>
                <a href={MALT_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">Malt</a>
                <a href={X_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">X</a>
              </div>
              </div>
            </aside>
          </div>
        </header>

        <section className="border-b border-border" aria-labelledby="principes-title">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 id="principes-title" className="text-3xl font-semibold tracking-tight text-foreground">
              Ma façon de travailler
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((p) => (
                <div key={p.title} className="border-t-2 border-foreground pt-5">
                  <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-card" aria-labelledby="parcours-title">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1fr_2fr] lg:px-8">
            <h2 id="parcours-title" className="text-3xl font-semibold tracking-tight text-foreground">
              Parcours
            </h2>
            <ol className="divide-y divide-border border-y border-border">
              {career.map((job) => (
                <li key={job.company} className="grid gap-2 py-6 sm:grid-cols-[8rem_1fr]">
                  <span className="tabular font-mono text-sm text-muted-foreground">{job.period}</span>
                  <div>
                    <p className="font-medium text-foreground">{job.role}</p>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-border" aria-labelledby="competences-title">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="competences-title" className="text-3xl font-semibold tracking-tight text-foreground">
                Outils du quotidien
              </h2>
              <Link href="/#labo" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
                Ce que je mesure en ce moment →
              </Link>
            </div>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3 className="text-sm font-semibold text-primary">{s.group}</h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection title="Travaillons ensemble" />
      </main>

      <Footer />
    </>
  );
}
