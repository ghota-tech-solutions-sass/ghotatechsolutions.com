import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { mailto, offers, steps } from '@/lib/content';

const practical = [
  {
    q: 'Régie ou forfait ?',
    a: 'Les deux. En régie pour renforcer une équipe plateforme. Au forfait pour un audit, un banc de modèles ou une mise en production avec un livrable défini.',
  },
  {
    q: 'Où ?',
    a: 'Basé à Lyon 3e. Sur site à Lyon et alentours, à distance partout ailleurs.',
  },
  {
    q: 'Et le prix ?',
    a: 'Sur devis, après l’appel de 30 minutes. Pour un forfait, le prix est fixé avant de commencer.',
  },
  {
    q: 'Et si l’IA n’est pas la bonne réponse ?',
    a: 'Je vous le dis. Un script, une meilleure recherche ou un formulaire suffit souvent, et ça coûte beaucoup moins cher.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      <main id="contenu" className="pt-16">
        <header className="grain relative overflow-hidden border-b border-border">
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
            <p className="text-sm font-medium text-primary">Offres</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-foreground md:text-5xl">
              De l’idée à l’IA qui tourne en production
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Trois offres, selon l’endroit où vous en êtes. Toutes commencent de la même façon : on mesure avant de
              construire.
            </p>
            <nav className="mt-10 flex flex-wrap gap-3" aria-label="Aller à une offre">
              {offers.map((o) => (
                <a
                  key={o.id}
                  href={`#${o.id}`}
                  className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:border-white/20 hover:bg-white/[0.03]"
                >
                  {o.kicker}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {offers.map((offer, i) => (
          <section
            key={offer.id}
            id={offer.id}
            className={`scroll-mt-20 border-b border-border ${i % 2 === 1 ? 'bg-muted/30' : ''}`}
            aria-labelledby={`${offer.id}-title`}
          >
            <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1fr] lg:px-8">
              <div>
                <p className="tabular font-mono text-sm text-muted-foreground">0{i + 1} · {offer.kicker}</p>
                <h2 id={`${offer.id}-title`} className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
                  {offer.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{offer.pitch}</p>
                <p className="mt-6 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Pour qui : </span>
                  {offer.forWho}
                </p>
                <a
                  href={mailto(`${offer.kicker} : `)}
                  className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110 active:translate-y-px"
                >
                  {offer.cta}
                </a>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 md:p-8">
                <h3 className="text-sm font-semibold text-foreground">Ce que vous obtenez</h3>
                <ul className="mt-5 space-y-4">
                  {offer.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-border pt-5 text-sm leading-relaxed text-foreground/90">
                  <span className="font-medium text-primary">Déjà fait : </span>
                  {offer.proof}
                </p>
              </div>
            </div>
          </section>
        ))}

        <section className="border-b border-border" aria-labelledby="methode-title">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 id="methode-title" className="text-3xl font-semibold tracking-tight text-foreground">
              Comment ça se passe
            </h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-4 md:gap-8">
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

        <section className="bg-muted/30" aria-labelledby="pratique-title">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1fr_2fr] lg:px-8">
            <div>
              <h2 id="pratique-title" className="text-3xl font-semibold tracking-tight text-foreground">
                En pratique
              </h2>
              <Link href="/#realisations" className="mt-6 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline">
                Voir mes réalisations →
              </Link>
            </div>
            <dl className="grid gap-8 sm:grid-cols-2">
              {practical.map((item) => (
                <div key={item.q}>
                  <dt className="font-semibold text-foreground">{item.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <ContactSection title="Un projet en tête ?" />
      </main>

      <Footer />
    </>
  );
}
