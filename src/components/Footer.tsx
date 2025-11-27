import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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
            <div className="space-y-2 text-sm">
              <p>SIREN : 988 597 209</p>
              <p>SIRET : 988 597 209 00010</p>
              <p>TVA : FR52 988 597 209</p>
            </div>
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

          {/* Contact & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contact@ghotatechsolutions.com"
                  className="hover:text-blue-400 transition-colors break-words"
                >
                  contact@ghotatechsolutions.com
                </a>
              </li>
              <li>
                <p className="text-gray-400">
                  268 RUE PAUL BERT<br />
                  69003 LYON
                </p>
              </li>
              <li className="pt-4 border-t border-slate-800 mt-4">
                <Link href="/mentions-legales" className="block text-sm hover:text-blue-400 transition-colors mb-2">
                  Mentions légales
                </Link>
                <Link href="/politique-confidentialite" className="block text-sm hover:text-blue-400 transition-colors">
                  Politique de confidentialité
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