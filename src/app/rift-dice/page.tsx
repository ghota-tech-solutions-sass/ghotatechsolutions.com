import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const links = [
  {
    href: "/rift-dice/support",
    label: "Support / Help",
    description: "Aide au compte, à la connexion, à la progression et au gameplay.",
  },
  {
    href: "/rift-dice/privacy",
    label: "Confidentialité / Privacy",
    description: "Données collectées, finalités, prestataires et droits.",
  },
  {
    href: "/rift-dice/delete-account",
    label: "Supprimer mon compte / Delete account",
    description: "Demander la suppression du compte et des données associées.",
  },
];

const modes = [
  {
    icon: "⚔",
    title: "Duel classé",
    label: "Ranked Duel",
    description: "Trois vies, un adversaire de niveau proche et une pression de Faille partagée.",
    accent: "border-amber-300/25 bg-amber-300/5 text-amber-200",
  },
  {
    icon: "∞",
    title: "Infini",
    label: "Infinite",
    description: "Une difficulté progressive conçue pour mettre même les circuits stables sous tension.",
    accent: "border-fuchsia-300/25 bg-fuchsia-300/5 text-fuchsia-200",
  },
  {
    icon: "⌁",
    title: "Coopération",
    label: "Co-op",
    description: "Deux architectes, un réacteur partagé, des anneaux attribués et des pings tactiques.",
    accent: "border-cyan-300/25 bg-cyan-300/5 text-cyan-200",
  },
  {
    icon: "◎",
    title: "Entraînement",
    label: "Training Lab",
    description: "Pause, vitesse ×2 et expérimentation sans risque pour apprendre chaque interaction.",
    accent: "border-emerald-300/25 bg-emerald-300/5 text-emerald-200",
  },
];

export default function RiftDice() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen overflow-hidden bg-slate-950 py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <section className="mx-auto max-w-4xl py-10 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">
              Ghota Tech Solutions présente
            </p>
            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              Rift Dice
              <span className="block text-gradient">Circuit War</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Composez un deck de cinq dés, invoquez vos défenseurs sur trois anneaux,
              fusionnez leurs pouvoirs et alignez des circuits pour repousser la Faille.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
              Build a five-die deck, merge defenders and rotate the arena to create
              powerful circuits in a competitive mobile strategy game.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-bold uppercase tracking-[0.16em]">
              <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-emerald-200">
                Progression gagnée en jeu
              </span>
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-cyan-200">
                Sans publicité
              </span>
              <span className="rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-4 py-2 text-fuchsia-200">
                Sans achat intégré au lancement
              </span>
            </div>
          </section>

          <section className="py-8" aria-labelledby="rift-modes-title">
            <div className="mb-7 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-300">Quatre façons de jouer</p>
              <h2 id="rift-modes-title" className="mt-2 text-3xl font-black text-white md:text-4xl">
                Maîtrisez les anneaux à votre rythme
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {modes.map((mode) => (
                <article key={mode.title} className={`glass rounded-2xl border p-6 ${mode.accent}`}>
                  <div className="flex items-start gap-4">
                    <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950/50 text-2xl">
                      {mode.icon}
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-75">{mode.label}</p>
                      <h3 className="mt-1 text-xl font-black text-white">{mode.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{mode.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto my-10 grid max-w-5xl gap-5 md:grid-cols-3" aria-label="Progression Rift Dice">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-sm font-bold text-cyan-300">01 — Construisez</p>
              <h2 className="mt-2 text-xl font-black">Un deck de cinq dés</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">Débloquez les 20 dés en jouant, puis composez des synergies plutôt qu’une simple somme de puissance.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-sm font-bold text-fuchsia-300">02 — Alignez</p>
              <h2 className="mt-2 text-xl font-black">Des circuits résonants</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">Faites tourner les trois anneaux, fusionnez à puissance égale et transformez le placement en décision tactique.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-sm font-bold text-amber-300">03 — Progressez</p>
              <h2 className="mt-2 text-xl font-black">Sans payer pour gagner</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">Clés de victoire, quêtes, saison gratuite et coffres gagnés en jeu alimentent la collection.</p>
            </div>
          </section>

          <section className="grid gap-5 py-10 md:grid-cols-3" aria-label="Ressources Rift Dice">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="glass group rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50"
              >
                <h2 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-cyan-200">
                  {item.label}
                </h2>
                <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
              </Link>
            ))}
          </section>

          <section className="mx-auto mt-6 max-w-3xl rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/5 p-6 text-center text-slate-300">
            <p>
              Rift Dice: Circuit War est en préparation pour iPhone, iPad et Android.
              La version 0.4 est un lancement earned-only : aucun achat intégré,
              aucune publicité et aucune récompense aléatoire payante.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
