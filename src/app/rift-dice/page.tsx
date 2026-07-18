import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const links = [
  {
    href: "/rift-dice/support",
    label: "Support / Help",
    description: "Aide au compte, aux achats, à la connexion et au gameplay.",
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
              Les informations de disponibilité seront publiées ici.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

