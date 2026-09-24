import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { CONTACT_LABEL, X_URL, career, mailto, offers, projects, type Project } from '@/lib/content';

// Tailles des tuiles de la grille de projets (6 colonnes en desktop).
const spans: Record<string, string> = {
  'Who Will Break It?': 'lg:col-span-4',
  RoastMyPic: 'lg:col-span-2',
  Lettrio: 'lg:col-span-2',
  'Los Arditos': 'lg:col-span-2',
  Flexwall: 'lg:col-span-2',
  'Rive Verte': 'lg:col-span-3',
  'Kitten Clash Arena': 'lg:col-span-3',
  Outilis: 'lg:col-span-3',
  Outilio: 'lg:col-span-3',
};

const labFacts = [
  {
    value: '366 000 vues',
    text: 'pour mon test de Darkbloom, qui promet 120 à 200 $ par mois à un Mac qui sert de l’IA. J’ai mesuré 4,11 $ en 24 h, soit environ 125 $ par mois : le bas de la fourchette.',
  },
  {
    value: '142 000 vues',
    text: 'pour une journée à optimiser mon serveur LLM local pour le code agentique. Pour mon usage, MTP battait DFlash2, contrairement à ce que tout X annonçait.',
  },
  {
    value: '5 100 abonnés',
    text: 'sur X et 1,8 million d’impressions en trois mois, en publiant des mesures plutôt que des opinions.',
  },
];

function ProjectTile({ p }: { p: Project }) {
  return (
    <a href={p.href} target="_blank" rel="noopener noreferrer" className={`group block ${spans[p.name] ?? 'lg:col-span-2'}`}>
      <div className="overflow-hidden rounded-xl border border-border bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={`Page d’accueil de ${p.name}`}
          width={1200}
          height={750}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary">{p.name}</h3>
        <span className="shrink-0 text-xs text-muted-foreground">{p.href.replace('https://', '')}</span>
      </div>
      <p className="mt-1 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">{p.what}</p>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />

      <main id="contenu">
        {/* Accroche */}
        <section aria-labelledby="hero-title" className="pt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.55fr_1fr] md:py-24 lg:gap-16 lg:px-8">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Mickaël Villers, ingénieur DevOps et IA à Lyon</p>
              <h1
                id="hero-title"
                className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground [text-wrap:pretty] md:text-5xl lg:text-[3.5rem]"
              >
                Je mets l’IA en production, chez vous.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                LLM privés sur votre infrastructure, applications IA sur Google Cloud, et une infra cloud qui coûte moins.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a
                  href={mailto('Projet : ')}
                  className="rounded-full bg-foreground px-6 py-3.5 text-base font-semibold text-background transition hover:bg-primary active:translate-y-px"
                >
                  {CONTACT_LABEL}
                </a>
                <Link href="#projets" className="text-base font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground">
                  Voir mes projets
                </Link>
              </div>
            </div>

            <div className="relative w-full max-w-[15rem] md:mx-auto md:max-w-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mickael-villers.jpg"
                alt="Mickaël Villers"
                width={640}
                height={800}
                fetchPriority="high"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_24px_60px_-24px_rgba(20,22,26,0.35)]"
              />
            </div>
          </div>
        </section>

        {/* Projets */}
        <section id="projets" className="scroll-mt-16 border-t border-border" aria-labelledby="projets-title">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <h2 id="projets-title" className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Neuf sites en ligne, que j’ai conçus et codés
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Mes propres produits, et des sites livrés à des clients. Tout est en ligne, vous pouvez cliquer.
            </p>
            <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-6">
              {projects.map((p) => (
                <ProjectTile key={p.name} p={p} />
              ))}
            </div>
          </div>
        </section>

        {/* Offres */}
        <section className="border-t border-border bg-card" aria-labelledby="offres-title">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <h2 id="offres-title" className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Ce que je peux faire pour vous
            </h2>
            <div className="mt-12 divide-y divide-border border-t border-border">
              {offers.map((offer) => (
                <Link
                  key={offer.id}
                  href={`/services#${offer.id}`}
                  className="group grid gap-4 py-10 md:grid-cols-[1fr_1.3fr] md:gap-16"
                >
                  <div>
                    <p className="text-sm font-medium text-primary">{offer.kicker}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary">
                      {offer.title}
                    </h3>
                  </div>
                  <div>
                    <p className="leading-relaxed text-muted-foreground">{offer.pitch}</p>
                    <p className="mt-4 text-sm text-foreground">
                      <span className="font-medium">Déjà fait : </span>
                      {offer.proof}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Labo IA */}
        <section id="labo" className="scroll-mt-16 border-t border-border" aria-labelledby="labo-title">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <h2 id="labo-title" className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-[2.6rem]">
              Je teste les modèles sur ma machine avant de vous les conseiller.
            </h2>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {labFacts.map((f) => (
                <div key={f.value}>
                  <p className="tabular text-4xl font-semibold tracking-tight text-primary">{f.value}</p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              ))}
            </div>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground"
            >
              Voir mes tests sur X
            </a>
          </div>
        </section>

        {/* Parcours */}
        <section className="border-t border-border bg-muted/60" aria-labelledby="parcours-title">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
            <h2 id="parcours-title" className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Neuf ans en production, du code à la plateforme
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {career.slice(1).map((job) => (
                <div key={job.company}>
                  <p className="text-lg font-semibold text-foreground">{job.company}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{job.role}, {job.period}</p>
                </div>
              ))}
            </div>
            <Link
              href="/a-propos"
              className="mt-12 inline-block font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground"
            >
              Mon parcours en détail
            </Link>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
