import Link from 'next/link';
import { CONTACT_EMAIL, LINKEDIN_URL, MALT_URL, X_URL } from '@/lib/content';

const linkClass = 'transition-colors hover:text-foreground';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background text-muted-foreground" aria-label="Pied de page">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="text-lg font-semibold tracking-tight text-foreground">Ghota Tech Solutions</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">
              Mickaël Villers, ingénieur DevOps et IA à Lyon. IA privée, IA sur Google Cloud,
              plateforme et FinOps.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Le site</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/services" className={linkClass}>Offres</Link></li>
              <li><Link href="/#labo" className={linkClass}>Labo IA</Link></li>
              <li><Link href="/#realisations" className={linkClass}>Réalisations</Link></li>
              <li><Link href="/a-propos" className={linkClass}>À propos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Mes produits</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="https://whowillbreakit.com" target="_blank" rel="noopener noreferrer" className={linkClass}>Who Will Break It?</a></li>
              <li><a href="https://roastmypic.ai" target="_blank" rel="noopener noreferrer" className={linkClass}>RoastMyPic</a></li>
              <li><a href="https://lettrio.app" target="_blank" rel="noopener noreferrer" className={linkClass}>Lettrio</a></li>
              <li><a href="https://outilis.fr" target="_blank" rel="noopener noreferrer" className={linkClass}>Outilis</a></li>
              <li><Link href="/rift-dice" className={linkClass}>Rift Dice</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkClass} break-all`}>{CONTACT_EMAIL}</a>
              </li>
              <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a></li>
              <li><a href={MALT_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>Malt</a></li>
              <li><a href={X_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>X (Twitter)</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Ghota Tech Solutions, EURL, Lyon.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/mentions-legales" className={linkClass}>Mentions légales</Link>
            <Link href="/politique-confidentialite" className={linkClass}>Confidentialité</Link>
            <Link href="/rift-dice/support" className={linkClass}>Support Rift Dice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
