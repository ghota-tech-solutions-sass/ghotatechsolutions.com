import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="glass rounded-2xl p-12 border border-white/10">
            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Page introuvable
            </h2>
            <p className="text-gray-400 mb-8">
              La page que vous recherchez n&apos;existe pas ou a été déplacée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors hover:shadow-lg hover:shadow-blue-500/25"
              >
                Retour à l&apos;accueil
              </Link>
              <Link
                href="/services"
                className="glass text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
