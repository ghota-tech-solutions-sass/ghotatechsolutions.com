import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MentionsLegales() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-slate-950 py-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass rounded-2xl p-8 md:p-12 border border-white/10">
            <h1 className="text-4xl font-bold text-white mb-8">Mentions légales</h1>

            <div className="prose prose-lg prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Informations légales</h2>
                <p className="mb-4 text-gray-400">
                  Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour
                  la Confiance dans l&apos;économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs
                  et visiteurs du site les informations suivantes :
                </p>

                <div className="bg-slate-900/50 p-6 rounded-lg mb-6 border border-white/5">
                  <h3 className="text-xl font-semibold text-white mb-3">Éditeur du site</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><strong className="text-white">Dénomination sociale :</strong> Ghota Tech Solutions (GTS)</li>
                    <li><strong className="text-white">Forme juridique :</strong> Société par actions simplifiée unipersonnelle (SASU)</li>
                    <li><strong className="text-white">SIREN :</strong> 988597209</li>
                    <li><strong className="text-white">Siège social :</strong> 268 RUE PAUL BERT 69003 LYON</li>
                    <li><strong className="text-white">Email :</strong> contact@ghotatechsolutions.com</li>
                    <li><strong className="text-white">Représentant légal :</strong> Mickaël Villers (Président)</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Hébergement</h2>
                <p className="mb-4 text-gray-400">
                  Le site ghotatechsolutions.com est hébergé par :
                </p>
                <div className="bg-slate-900/50 p-6 rounded-lg border border-white/5">
                  <p className="text-gray-400">
                    <strong className="text-white">Google Cloud Platform (Cloud Run)</strong><br />
                    Google Ireland Limited<br />
                    Gordon House, Barrow Street<br />
                    Dublin 4, Irlande<br /><br />
                    <span className="text-sm">Région d&apos;hébergement : Europe West 1 (Belgique)</span>
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Propriété intellectuelle</h2>
                <p className="mb-4 text-gray-400">
                  L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et
                  la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les
                  documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="mb-4 text-gray-400">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement
                  interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Responsabilité</h2>
                <p className="mb-4 text-gray-400">
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à
                  différentes périodes de l&apos;année, mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p className="mb-4 text-gray-400">
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir
                  le signaler par email, à l&apos;adresse <span className="text-blue-400">contact@ghotatechsolutions.com</span>, en décrivant le problème de la
                  façon la plus précise possible.
                </p>
                <p className="mb-4 text-gray-400">
                  Ghota Tech Solutions ne pourra être tenue responsable des dommages directs et indirects causés au
                  matériel de l&apos;utilisateur, lors de l&apos;accès au site, et résultant soit de l&apos;utilisation d&apos;un matériel
                  ne répondant pas aux spécifications indiquées, soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Liens hypertextes</h2>
                <p className="mb-4 text-gray-400">
                  Des liens hypertextes peuvent être présents sur le site. L&apos;utilisateur est informé qu&apos;en cliquant sur
                  ces liens, il sortira du site ghotatechsolutions.com. Ce dernier n&apos;a pas de contrôle sur les pages web
                  sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Collecte d&apos;informations</h2>
                <p className="mb-4 text-gray-400">
                  En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978,
                  la loi n° 2004-801 du 6 août 2004, l&apos;article L. 226-13 du Code pénal, le Règlement Général sur la
                  Protection des Données (RGPD) et la Directive Européenne du 24 octobre 1995.
                </p>
                <p className="mb-4 text-gray-400">
                  Ce site ne dispose pas de base de données et ne stocke aucune information personnelle sur ses serveurs.
                  Le seul moyen de nous contacter est par email.
                </p>
                <p className="mb-4 text-gray-400">
                  Si vous acceptez les cookies, des données de navigation anonymisées peuvent être collectées via
                  Google Analytics (pages visitées, durée de visite, source de trafic). Ces données sont utilisées
                  uniquement à des fins statistiques pour améliorer le site.
                </p>
                <p className="mb-4 text-gray-400">
                  Pour plus d&apos;informations sur la collecte et le traitement de vos données, consultez notre{' '}
                  <a href="/politique-confidentialite" className="text-blue-400 hover:text-blue-300 transition-colors">
                    politique de confidentialité
                  </a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Droit applicable et attribution de juridiction</h2>
                <p className="text-gray-400">
                  Tout litige en relation avec l&apos;utilisation du site ghotatechsolutions.com est soumis au droit français.
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
                <p className="text-gray-400">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l&apos;adresse :
                  <a href="mailto:contact@ghotatechsolutions.com" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">
                    contact@ghotatechsolutions.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}