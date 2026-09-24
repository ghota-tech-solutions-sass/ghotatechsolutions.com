import Link from 'next/link';
import { CONTACT_EMAIL, LINKEDIN_URL, MALT_URL, X_URL } from '@/lib/content';

const linkClass = 'transition-colors hover:text-foreground';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background text-sm text-muted-foreground" aria-label="Pied de page">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between lg:px-8">
        <div className="max-w-xs">
          <p className="font-semibold text-foreground">Ghota Tech Solutions</p>
          <p className="mt-2 leading-relaxed">Mickaël Villers, ingénieur DevOps et IA à Lyon.</p>
        </div>

        <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3 sm:gap-x-16" aria-label="Liens du pied de page">
          <Link href="/#projets" className={linkClass}>Projets</Link>
          <Link href="/services" className={linkClass}>Offres</Link>
          <Link href="/a-propos" className={linkClass}>À propos</Link>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a>
          <a href={X_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>X</a>
          <a href={MALT_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>Malt</a>
        </nav>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-border px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>&copy; {currentYear} Ghota Tech Solutions, EURL, Lyon. <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>{CONTACT_EMAIL}</a></p>
        <div className="flex gap-5">
          <Link href="/mentions-legales" className={linkClass}>Mentions légales</Link>
          <Link href="/politique-confidentialite" className={linkClass}>Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
