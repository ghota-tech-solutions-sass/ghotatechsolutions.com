import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400 border-t border-slate-800" role="contentinfo" aria-label="Pied de page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Company info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">
                <span className="text-blue-500">Ghota Tech Solutions</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Votre partenaire DevOps pour des infrastructures fiables, scalables et optimisées.
              Nous transformons vos défis techniques en avantages compétitifs.
            </p>

          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-blue-400 transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Nos Produits</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://lettrio.app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  Lettrio &mdash; Courriers officiels par IA
                </a>
              </li>
              <li>
                <a href="https://outilis.fr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  Outilis.fr &mdash; Outils en ligne gratuits
                </a>
              </li>
              <li>
                <a href="https://roastmypic.ai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  RoastMyPic &mdash; Roast de photos par IA
                </a>
              </li>
              <li>
                <Link href="/rift-dice" className="hover:text-cyan-300 transition-colors">
                  Rift Dice &mdash; Jeu de stratégie mobile
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@ghotatechsolutions.com"
                  className="hover:text-blue-400 transition-colors break-words"
                  aria-label="Envoyer un email à Ghota Tech Solutions"
                >
                  contact@ghotatechsolutions.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/villers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
                  aria-label="Profil LinkedIn de Mickaël Villers"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>

              <li className="pt-4 border-t border-slate-800 mt-4">
                <Link href="/mentions-legales" className="block text-sm hover:text-blue-400 transition-colors mb-2">
                  Mentions légales
                </Link>
                <Link href="/politique-confidentialite" className="block text-sm hover:text-blue-400 transition-colors">
                  Politique de confidentialité
                </Link>
                <Link href="/rift-dice/support" className="mt-2 block text-sm hover:text-cyan-300 transition-colors">
                  Support Rift Dice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Ghota Tech Solutions. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
