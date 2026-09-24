import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-card border shadow-sm rounded-2xl p-12 border border-border">
            <h1 className="text-8xl font-semibold tracking-tight text-primary mb-4">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Page introuvable
            </h2>
            <p className="text-muted-foreground mb-8">
              La page que vous recherchez n&apos;existe pas ou a été déplacée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-primary hover:brightness-110 text-foreground px-6 py-3 rounded-full font-semibold transition-colors  "
              >
                Retour à l&apos;accueil
              </Link>
              <Link
                href="/services"
                className="bg-card border shadow-sm text-foreground hover:bg-muted px-6 py-3 rounded-full font-semibold transition-colors"
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
