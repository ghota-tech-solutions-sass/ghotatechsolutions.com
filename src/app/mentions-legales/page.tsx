import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MentionsLegales() {
  return (
    <>
      <SEO 
        title="Mentions légales"
        description="Mentions légales de Ghota Tech Solutions - Informations juridiques et légales de la société."
        canonical="/mentions-legales"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions légales</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Informations légales</h2>
                <p className="mb-4">
                  Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour 
                  la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs 
                  et visiteurs du site les informations suivantes :
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Éditeur du site</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Dénomination sociale :</strong> Ghota Tech Solutions (GTS)</li>
                    <li><strong>Forme juridique :</strong> Société par actions simplifiée unipersonnelle (SASU)</li>
                    <li><strong>SIREN :</strong> 988597209</li>
                    <li><strong>Siège social :</strong> [Adresse du siège social]</li>
                    <li><strong>Email :</strong> villers@ghotatechsolutions.com</li>
                    <li><strong>Représentant légal :</strong> Mickaël Villers (Président)</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hébergement</h2>
                <p className="mb-4">
                  Le site ghotatechsolutions.com est hébergé par :
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    [Nom de l'hébergeur]<br />
                    [Adresse de l'hébergeur]<br />
                    [Téléphone de l'hébergeur]
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Propriété intellectuelle</h2>
                <p className="mb-4 text-gray-700">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et 
                  la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
                  documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="mb-4 text-gray-700">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement 
                  interdite sauf autorisation expresse du directeur de la publication.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsabilité</h2>
                <p className="mb-4 text-gray-700">
                  Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à 
                  différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p className="mb-4 text-gray-700">
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir 
                  le signaler par email, à l'adresse villers@ghotatechsolutions.com, en décrivant le problème de la 
                  façon la plus précise possible.
                </p>
                <p className="mb-4 text-gray-700">
                  Ghota Tech Solutions ne pourra être tenue responsable des dommages directs et indirects causés au 
                  matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel 
                  ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liens hypertextes</h2>
                <p className="mb-4 text-gray-700">
                  Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en cliquant sur 
                  ces liens, il sortira du site ghotatechsolutions.com. Ce dernier n'a pas de contrôle sur les pages web 
                  sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Collecte d'informations</h2>
                <p className="mb-4 text-gray-700">
                  En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, 
                  la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 
                  24 octobre 1995.
                </p>
                <p className="mb-4 text-gray-700">
                  A l'occasion de l'utilisation du site ghotatechsolutions.com, peuvent êtres recueillies : l'URL des 
                  liens par l'intermédiaire desquels l'utilisateur a accédé au site, le fournisseur d'accès de 
                  l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.
                </p>
                <p className="mb-4 text-gray-700">
                  En tout état de cause, Ghota Tech Solutions ne collecte des informations personnelles relatives à 
                  l'utilisateur que pour le besoin de certains services proposés par le site. L'utilisateur fournit ces 
                  informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Droit applicable et attribution de juridiction</h2>
                <p className="text-gray-700">
                  Tout litige en relation avec l'utilisation du site ghotatechsolutions.com est soumis au droit français. 
                  Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
                <p className="text-gray-700">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse : 
                  <a href="mailto:villers@ghotatechsolutions.com" className="text-blue-600 hover:text-blue-800 ml-1">
                    villers@ghotatechsolutions.com
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