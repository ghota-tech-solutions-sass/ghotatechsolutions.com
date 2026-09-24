import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import SocialLinks from '@/components/SocialLinks';
import { ScrollReveal } from '@/components/ScrollReveal';
import { career, clients, experiments, offers, projects, steps } from '@/lib/content';

const heroFacts = [
  { value: '9 ans', label: 'd’expérience dev et ops en production (HomeServe, M6)' },
  { value: '1 jour', label: 'pour livrer un site client avec un LLM 100 % local' },
  { value: '9,3 M', label: 'de clics traités en 82 h par un de mes jeux' },
];

export default function Home() {
  return (
    <>
      <Navigation />

      <main id="contenu">
        {/* Accroche */}
        <section className="grain relative overflow-hidden pt-16" aria-labelledby="hero-title">
          <div
            className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-primary/[0.07] blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-6xl gap-14 px-4 pb-20 pt-20 sm:px-6 md:pt-28 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:px-8">
            <div>
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/mickael-villers.jpg"
                  alt="Mickaël Villers"
                  width={56}
                  height={70}
                  className="h-14 w-14 rounded-full object-cover object-[50%_35%] ring-1 ring-white/10"
                />
                <p className="text-sm font-medium text-muted-foreground">
                  <span className="block text-foreground">Mickaël Villers</span>
                  Ingénieur DevOps et IA · Lyon
                </p>
              </div>
              <h1
                id="hero-title"
                className="mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-6xl"
              >
                Je mets l’IA en production.
                <span className="block text-muted-foreground">Chez vous ou sur Google Cloud.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                J’installe des LLM privés sur votre infrastructure, je déploie vos applications IA sur GCP et je
                rends votre plateforme cloud moins chère. Chaque modèle que je recommande, je l’ai d’abord mesuré
                sur ma propre machine.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href="#contact"
                  className="rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition hover:brightness-110 active:translate-y-px"
                >
                  Parler de votre projet
                </Link>
                <Link href="#offres" className="text-base font-medium text-foreground underline-offset-4 hover:underline">
                  Voir ce que je propose ↓
                </Link>
              </div>
              <SocialLinks className="mt-8" withLabels />
            </div>

            <dl className="divide-y divide-border rounded-xl border border-border bg-card/70 backdrop-blur-sm">
              {heroFacts.map((fact) => (
                <div key={fact.value} className="flex items-baseline gap-5 px-6 py-5">
                  <dt className="tabular min-w-[5.5rem] font-mono text-2xl font-medium text-primary">{fact.value}</dt>
                  <dd className="text-sm leading-snug text-muted-foreground">{fact.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative border-y border-border bg-muted/40">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-4 py-5 text-sm sm:px-6 lg:px-8">
              <span className="text-muted-foreground">Missions réalisées pour</span>
              {clients.map((client) => (
                <span key={client} className="font-medium text-foreground/80">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Offres */}
        <section id="offres" className="scroll-mt-20" aria-labelledby="offres-title">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-primary">Ce que je fais pour vous</p>
              <h2 id="offres-title" className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Trois façons de travailler ensemble
              </h2>
            </div>

            <div className="mt-14 divide-y divide-border border-y border-border">
              {offers.map((offer, i) => (
                <ScrollReveal key={offer.id} width="100%" delay={0.05}>
                  <article className="grid gap-6 py-10 md:grid-cols-[4rem_1fr_1fr] md:gap-10">
                    <span className="tabular font-mono text-sm text-muted-foreground">0{i + 1}</span>
                    <div>
                      <p className="text-sm font-medium text-primary">{offer.kicker}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{offer.title}</h3>
                      <p className="mt-4 leading-relaxed text-muted-foreground">{offer.pitch}</p>
                    </div>
                    <div className="flex flex-col justify-between gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Pour qui : </span>
                          {offer.forWho}
                        </p>
                        <p className="mt-4 border-l-2 border-primary/60 pl-4 text-sm leading-relaxed text-foreground/90">
                          {offer.proof}
                        </p>
                      </div>
                      <Link
                        href={`/services#${offer.id}`}
                        className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        Le détail de l’offre →
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Labo IA */}
        <section id="labo" className="scroll-mt-20 border-t border-border bg-muted/30" aria-labelledby="labo-title">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-end">
              <div>
                <p className="text-sm font-medium text-primary">Labo IA</p>
                <h2 id="labo-title" className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  Je teste avant de conseiller
                </h2>
              </div>
              <p className="max-w-xl leading-relaxed text-muted-foreground">
                Sur un MacBook M5 Max de 128 Go, je fais tourner les modèles open source dès leur sortie et je publie
                ce que je mesure, y compris quand le résultat contredit l’annonce. C’est ce banc d’essai que
                j’applique ensuite à vos données.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {experiments.map((exp) => (
                <article key={exp.title} className="flex flex-col rounded-xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">{exp.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{exp.claim}</p>
                  <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
                    {exp.figures.map((f) => (
                      <div key={f.label}>
                        <dt className="sr-only">{f.label}</dt>
                        <dd className="tabular font-mono text-xl font-medium text-foreground">{f.value}</dd>
                        <dd className="mt-1 text-xs text-muted-foreground">{f.label}</dd>
                      </div>
                    ))}
                  </dl>
                  {exp.link && (
                    <a
                      href={exp.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      {exp.link.label} →
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Réalisations */}
        <section id="realisations" className="scroll-mt-20 border-t border-border" aria-labelledby="realisations-title">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-primary">Réalisations</p>
              <h2 id="realisations-title" className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Des produits en ligne, pas des maquettes
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Je conçois, code et héberge mes propres produits. Tout est en ligne, vous pouvez cliquer.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-background p-7 transition-colors hover:bg-card"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">{p.name}</h3>
                    <span className="text-sm text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{p.what}</p>
                  <p className="mt-5 text-sm font-medium text-foreground/90">{p.fact}</p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{p.stack}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Méthode */}
        <section className="border-t border-border bg-muted/30" aria-labelledby="methode-title">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-primary">Comment ça se passe</p>
            <h2 id="methode-title" className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Des chiffres avant les promesses
            </h2>
            <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
              {steps.map((s) => (
                <li key={s.n}>
                  <span className="tabular font-mono text-sm text-primary">{s.n}</span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Parcours */}
        <section className="border-t border-border" aria-labelledby="parcours-title">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-[1fr_1.6fr] lg:px-8">
            <div>
              <p className="text-sm font-medium text-primary">Parcours</p>
              <h2 id="parcours-title" className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Développeur, puis DevOps, puis IA
              </h2>
              <Link
                href="/a-propos"
                className="mt-6 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Mon parcours complet →
              </Link>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {career.slice(0, 3).map((job) => (
                <li key={job.company} className="grid gap-2 py-5 sm:grid-cols-[7rem_1fr]">
                  <span className="tabular font-mono text-sm text-muted-foreground">{job.period}</span>
                  <div>
                    <p className="font-medium text-foreground">
                      {job.role} · <span className="text-muted-foreground">{job.company}</span>
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{job.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
