import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SEO 
        title="Politique de confidentialité"
        description="Politique de confidentialité de Ghota Tech Solutions - Protection de vos données personnelles et respect de votre vie privée."
        canonical="/politique-confidentialite"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <p className="text-blue-800">
                  <strong>Dernière mise à jour :</strong> [Date de mise à jour]
                </p>
                <p className="text-blue-800 mt-2">
                  Ghota Tech Solutions s'engage à protéger votre vie privée. Cette politique de confidentialité 
                  explique comment nous collectons, utilisons et protégeons vos informations personnelles.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informations que nous collectons</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.1 Données collectées directement</h3>
                <p className="mb-4 text-gray-700">
                  Lorsque vous nous contactez par email à l'adresse villers@ghotatechsolutions.com, nous collectons :
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Votre adresse email</li>
                  <li>Votre nom (si vous le fournissez)</li>
                  <li>Le contenu de vos messages</li>
                  <li>Toute autre information que vous choisissez de partager</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.2 Données collectées automatiquement</h3>
                <p className="mb-4 text-gray-700">
                  Lors de votre visite sur notre site, nous pouvons collecter automatiquement :
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Votre adresse IP</li>
                  <li>Le type de navigateur et sa version</li>
                  <li>Les pages visitées et le temps passé sur le site</li>
                  <li>La date et l'heure de votre visite</li>
                  <li>Les informations sur votre appareil (type, système d'exploitation)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Comment nous utilisons vos informations</h2>
                <p className="mb-4 text-gray-700">
                  Nous utilisons les informations collectées pour :
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Répondre à vos demandes de renseignements</li>
                  <li>Vous fournir des informations sur nos services</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Analyser l'utilisation de notre site pour des fins statistiques</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Base légale du traitement</h2>
                <p className="mb-4 text-gray-700">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), nous traitons vos données personnelles sur la base de :
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Consentement :</strong> lorsque vous nous contactez volontairement</li>
                  <li><strong>Intérêt légitime :</strong> pour améliorer nos services et analyser l'utilisation du site</li>
                  <li><strong>Obligation légale :</strong> lorsque la loi l'exige</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Partage de vos informations</h2>
                <p className="mb-4 text-gray-700">
                  Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. 
                  Nous ne partageons vos informations que dans les cas suivants :
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour respecter une obligation légale</li>
                  <li>Avec des prestataires de services qui nous aident à exploiter notre site (hébergement, analytics)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies et technologies similaires</h2>
                <p className="mb-4 text-gray-700">
                  Notre site utilise des cookies et technologies similaires pour :
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Assurer le bon fonctionnement du site</li>
                  <li>Analyser le trafic et l'utilisation du site</li>
                  <li>Personnaliser votre expérience</li>
                </ul>
                <p className="mb-4 text-gray-700">
                  Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela pourrait affecter 
                  certaines fonctionnalités du site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Sécurité de vos données</h2>
                <p className="mb-4 text-gray-700">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger 
                  vos données personnelles contre :
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>L'accès non autorisé</li>
                  <li>La modification, la divulgation ou la destruction</li>
                  <li>La perte accidentelle</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Conservation des données</h2>
                <p className="mb-4 text-gray-700">
                  Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles 
                  elles ont été collectées, ou selon les exigences légales applicables.
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Emails de contact :</strong> 3 ans après le dernier contact</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Vos droits</h2>
                <p className="mb-4 text-gray-700">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Droit d'accès :</strong> obtenir confirmation que vos données sont traitées</li>
                  <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                </ul>
                <p className="mb-4 text-gray-700">
                  Pour exercer ces droits, contactez-nous à : 
                  <a href="mailto:villers@ghotatechsolutions.com" className="text-blue-600 hover:text-blue-800 ml-1">
                    villers@ghotatechsolutions.com
                  </a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Transferts internationaux</h2>
                <p className="mb-4 text-gray-700">
                  Vos données personnelles sont principalement traitées dans l'Union Européenne. En cas de transfert 
                  vers des pays tiers, nous nous assurons que des garanties appropriées sont mises en place.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modifications de cette politique</h2>
                <p className="mb-4 text-gray-700">
                  Nous pouvons modifier cette politique de confidentialité de temps à autre. Les modifications seront 
                  publiées sur cette page avec une date de mise à jour révisée.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact</h2>
                <p className="mb-4 text-gray-700">
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Responsable du traitement :</strong> Ghota Tech Solutions<br />
                    <strong>Email :</strong> 
                    <a href="mailto:villers@ghotatechsolutions.com" className="text-blue-600 hover:text-blue-800 ml-1">
                      villers@ghotatechsolutions.com
                    </a>
                  </p>
                </div>
                <p className="mt-4 text-gray-700">
                  Vous avez également le droit de déposer une plainte auprès de la Commission Nationale de l'Informatique 
                  et des Libertés (CNIL) si vous estimez que vos droits ne sont pas respectés.
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