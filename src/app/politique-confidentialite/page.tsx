import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background py-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-card border shadow-sm rounded-2xl p-8 md:p-12 border border-border">
            <h1 className="text-4xl font-bold text-foreground mb-8">Politique de confidentialité</h1>

            <div className="prose prose-lg prose-invert max-w-none">
              <div className="bg-transparent border-l-4 border-primary p-6 mb-8 rounded-r-lg">
                <p className="text-primary m-0">
                  <strong>Dernière mise à jour :</strong> 28 novembre 2025
                </p>
                <p className="text-primary mt-2 m-0">
                  Ghota Tech Solutions s&apos;engage à protéger votre vie privée. Cette politique de confidentialité
                  explique comment nous collectons, utilisons et protégeons vos informations personnelles.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informations que nous collectons</h2>

                <h3 className="text-xl font-semibold text-foreground mb-3">1.1 Données collectées directement</h3>
                <p className="mb-4 text-muted-foreground">
                  Lorsque vous nous contactez par email à l&apos;adresse <span className="text-primary">contact@ghotatechsolutions.com</span>, nous collectons :
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Votre adresse email</li>
                  <li>Votre nom (si vous le fournissez)</li>
                  <li>Le contenu de vos messages</li>
                  <li>Toute autre information que vous choisissez de partager</li>
                </ul>
                <p className="mb-4 text-muted-foreground">
                  <strong className="text-foreground">Important :</strong> Notre site ne dispose pas de base de données.
                  Nous ne stockons aucune information personnelle sur nos serveurs. Vos données de contact
                  sont uniquement traitées via notre service de messagerie email.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">1.2 Données collectées automatiquement</h3>
                <p className="mb-4 text-muted-foreground">
                  Lors de votre visite sur notre site, et uniquement si vous avez accepté les cookies,
                  nous collectons automatiquement via Google Analytics :
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Votre adresse IP (anonymisée)</li>
                  <li>Le type de navigateur et sa version</li>
                  <li>Les pages visitées et le temps passé sur le site</li>
                  <li>La date et l&apos;heure de votre visite</li>
                  <li>Les informations sur votre appareil (type, système d&apos;exploitation)</li>
                  <li>La source de trafic (comment vous avez trouvé notre site)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Comment nous utilisons vos informations</h2>
                <p className="mb-4 text-muted-foreground">
                  Nous utilisons les informations collectées pour :
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Répondre à vos demandes de renseignements</li>
                  <li>Vous fournir des informations sur nos services</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Analyser l&apos;utilisation de notre site pour des fins statistiques</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Base légale du traitement</h2>
                <p className="mb-4 text-muted-foreground">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), nous traitons vos données personnelles sur la base de :
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Consentement :</strong> lorsque vous nous contactez volontairement</li>
                  <li><strong className="text-foreground">Intérêt légitime :</strong> pour améliorer nos services et analyser l&apos;utilisation du site</li>
                  <li><strong className="text-foreground">Obligation légale :</strong> lorsque la loi l&apos;exige</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Partage de vos informations</h2>
                <p className="mb-4 text-muted-foreground">
                  Nous ne vendons, n&apos;échangeons ni ne louons vos informations personnelles à des tiers.
                  Nous ne partageons vos informations que dans les cas suivants :
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour respecter une obligation légale</li>
                  <li>Avec des prestataires de services qui nous aident à exploiter notre site</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Nos prestataires</h3>
                <p className="mb-4 text-muted-foreground">
                  Si vous acceptez les cookies analytics, des données peuvent être partagées avec :
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Google LLC</strong> (États-Unis) : Google Tag Manager et Google Analytics pour l&apos;analyse du trafic. Google est certifié dans le cadre du EU-US Data Privacy Framework.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookies et technologies similaires</h2>
                <p className="mb-4 text-muted-foreground">
                  Notre site utilise des cookies et technologies similaires. Nous utilisons Google Tag Manager (GTM)
                  pour gérer nos balises de tracking de manière centralisée.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Google Tag Manager et Google Analytics</h3>
                <p className="mb-4 text-muted-foreground">
                  Nous utilisons les services suivants de Google :
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Google Tag Manager :</strong> pour gérer le déploiement de nos balises de tracking</li>
                  <li><strong className="text-foreground">Google Analytics 4 :</strong> pour analyser le trafic et comprendre comment les visiteurs utilisent notre site</li>
                </ul>
                <p className="mb-4 text-muted-foreground">
                  Ces services peuvent collecter des informations telles que votre adresse IP, le type de navigateur,
                  les pages visitées, et d&apos;autres données d&apos;utilisation. Ces données sont traitées par Google
                  conformément à leur <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">politique de confidentialité</a>.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Consent Mode v2</h3>
                <p className="mb-4 text-muted-foreground">
                  Nous avons implémenté Google Consent Mode v2 pour respecter vos choix de consentement.
                  Ce système permet de :
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Par défaut :</strong> Tous les cookies de tracking sont désactivés jusqu&apos;à ce que vous donniez votre consentement</li>
                  <li><strong className="text-foreground">Si vous acceptez :</strong> Les cookies analytics et publicitaires sont activés</li>
                  <li><strong className="text-foreground">Si vous refusez :</strong> Aucun cookie de tracking n&apos;est déposé, Google ne collecte que des données agrégées et anonymes</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">5.3 Types de cookies utilisés</h3>
                <div className="bg-muted p-4 rounded-lg border border-border mb-4">
                  <p className="text-muted-foreground m-0">
                    <strong className="text-foreground">Cookies strictement nécessaires :</strong><br />
                    <span className="text-sm">cookie_consent : stocke votre choix de consentement (localStorage)</span>
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg border border-border mb-4">
                  <p className="text-muted-foreground m-0">
                    <strong className="text-foreground">Cookies analytics (soumis à consentement) :</strong><br />
                    <span className="text-sm">_ga, _ga_* : cookies Google Analytics pour l&apos;analyse du trafic (durée : 2 ans)</span>
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">5.4 Gestion de vos préférences</h3>
                <p className="mb-4 text-muted-foreground">
                  Lors de votre première visite, une bannière vous permet de choisir d&apos;accepter ou de refuser les cookies.
                  Votre choix est mémorisé dans le stockage local de votre navigateur.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Pour modifier votre choix, vous pouvez :
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>Supprimer les données de site dans les paramètres de votre navigateur pour que la bannière réapparaisse</li>
                  <li>Désactiver les cookies dans les paramètres de votre navigateur</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Sécurité de vos données</h2>
                <p className="mb-4 text-muted-foreground">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger
                  vos données personnelles contre :
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li>L&apos;accès non autorisé</li>
                  <li>La modification, la divulgation ou la destruction</li>
                  <li>La perte accidentelle</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Conservation des données</h2>
                <p className="mb-4 text-muted-foreground">
                  Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles
                  elles ont été collectées, ou selon les exigences légales applicables.
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Emails de contact :</strong> 3 ans après le dernier contact</li>
                  <li><strong className="text-foreground">Données de navigation :</strong> 13 mois maximum</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Vos droits</h2>
                <p className="mb-4 text-muted-foreground">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Droit d&apos;accès :</strong> obtenir confirmation que vos données sont traitées</li>
                  <li><strong className="text-foreground">Droit de rectification :</strong> corriger vos données inexactes</li>
                  <li><strong className="text-foreground">Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
                  <li><strong className="text-foreground">Droit à la limitation :</strong> restreindre le traitement de vos données</li>
                  <li><strong className="text-foreground">Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                  <li><strong className="text-foreground">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
                </ul>
                <p className="mb-4 text-muted-foreground">
                  Pour exercer ces droits, contactez-nous à :
                  <a href="mailto:contact@ghotatechsolutions.com" className="text-primary hover:underline ml-1 transition-colors">
                    contact@ghotatechsolutions.com
                  </a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Transferts internationaux</h2>
                <p className="mb-4 text-muted-foreground">
                  Vos données personnelles sont principalement traitées dans l&apos;Union Européenne. En cas de transfert
                  vers des pays tiers, nous nous assurons que des garanties appropriées sont mises en place.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Modifications de cette politique</h2>
                <p className="mb-4 text-muted-foreground">
                  Nous pouvons modifier cette politique de confidentialité de temps à autre. Les modifications seront
                  publiées sur cette page avec une date de mise à jour révisée.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact</h2>
                <p className="mb-4 text-muted-foreground">
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :
                </p>
                <div className="bg-muted p-6 rounded-lg border border-border">
                  <p className="text-muted-foreground m-0">
                    <strong className="text-foreground">Responsable du traitement :</strong> Ghota Tech Solutions<br />
                    <strong className="text-foreground">Email :</strong>
                    <a href="mailto:contact@ghotatechsolutions.com" className="text-primary hover:underline ml-1 transition-colors">
                      contact@ghotatechsolutions.com
                    </a>
                  </p>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Vous avez également le droit de déposer une plainte auprès de la Commission Nationale de l&apos;Informatique
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