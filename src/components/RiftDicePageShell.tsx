import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

type RiftDicePageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function RiftDicePageShell({
  eyebrow,
  title,
  description,
  children,
}: RiftDicePageShellProps) {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen overflow-hidden bg-slate-950 py-24 text-slate-100">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/rift-dice"
            className="mb-8 inline-flex min-h-11 items-center text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
          >
            ← Rift Dice: Circuit War
          </Link>

          <header className="mb-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-fuchsia-300">
              {eyebrow}
            </p>
            <h1 className="mb-5 text-4xl font-black tracking-tight text-white md:text-5xl">
              {title}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">{description}</p>
          </header>

          <article className="glass rounded-3xl border border-white/10 p-6 shadow-2xl shadow-cyan-950/30 md:p-10">
            <div className="space-y-9 leading-relaxed text-slate-300">{children}</div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

