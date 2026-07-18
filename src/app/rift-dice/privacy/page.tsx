import type { Metadata } from "next";
import RiftDicePageShell from "@/components/RiftDicePageShell";

export const metadata: Metadata = {
  title: "Confidentialité Rift Dice",
  description: "Politique de confidentialité de l’application Rift Dice: Circuit War.",
  alternates: { canonical: "/rift-dice/privacy" },
};

const collectedData = [
  ["Compte et profil", "Identifiant joueur, nom d’affichage, paramètres et, uniquement si vous choisissez de lier le compte, adresse e-mail ou identifiant de connexion de plateforme."],
  ["Progression", "Collection de dés, decks, monnaies virtuelles, quêtes, classement, historique de parties, amis et récompenses."],
  ["Achats", "Produit, plateforme, état de transaction, historique de restauration ou remboursement et preuves techniques hachées. Ghota Tech Solutions ne reçoit pas votre numéro de carte bancaire."],
  ["Utilisation et diagnostic", "Interactions de jeu si vous acceptez les analytics, version de l’application, plateforme, erreurs et données techniques nécessaires à la stabilité et à la lutte contre la fraude."],
  ["Publicité récompensée", "AdMob peut traiter des informations techniques et publicitaires selon votre région, vos choix de consentement et la configuration de l’app. Rift Dice ne vend pas vos données personnelles."],
];

export default function RiftDicePrivacy() {
  return (
    <RiftDicePageShell
      eyebrow="Dernière mise à jour • 18 juillet 2026"
      title="Confidentialité de Rift Dice"
      description="Cette politique décrit le traitement des données dans Rift Dice: Circuit War sur iOS et Android. An English summary is included below."
    >
      <section>
        <h2 className="mb-3 text-2xl font-bold text-white">1. Responsable du traitement</h2>
        <p>
          Ghota Tech Solutions est responsable des données traitées pour le fonctionnement de Rift Dice.
          Contact :{" "}
          <a className="font-semibold text-cyan-300 hover:text-cyan-200" href="mailto:contact@ghotatechsolutions.com">
            contact@ghotatechsolutions.com
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-white">2. Données traitées</h2>
        <div className="space-y-4">
          {collectedData.map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-white/5 bg-slate-900/60 p-5">
              <h3 className="mb-2 text-lg font-bold text-slate-100">{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-white">3. Finalités et bases juridiques</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Exécuter le service : compte, parties, progression, sauvegarde et support.</li>
          <li>Sécuriser les parties, vérifier les achats et prévenir les abus.</li>
          <li>Respecter les obligations légales, remboursements et demandes de droits.</li>
          <li>Avec votre consentement, mesurer l’utilisation et proposer une publicité récompensée adaptée aux choix autorisés.</li>
        </ul>
        <p className="mt-4">
          Les analytics de jeu sont désactivés avant consentement et votre choix peut être modifié dans les
          paramètres. Le refus des analytics ne bloque pas les fonctionnalités payantes.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-white">4. Prestataires et destinataires</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Google Cloud Platform : hébergement sécurisé des services et bases de données.</li>
          <li>Apple App Store et Google Play : paiement, restauration, remboursement et distribution.</li>
          <li>Google AdMob : publicités récompensées et gestion du consentement, lorsqu’elles sont disponibles.</li>
        </ul>
        <p className="mt-4">
          Les données peuvent être traitées hors de l’Espace économique européen avec les garanties prévues
          par la réglementation applicable. Nous ne vendons ni ne louons vos données personnelles.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-white">5. Conservation et suppression</h2>
        <p>
          Les données de compte sont conservées tant que le compte est actif. Une demande de suppression
          déclenche un délai de grâce de sept jours, pendant lequel elle peut être annulée. À son terme, les
          données associées sont supprimées ou rendues non rattachables, sous réserve des éléments que nous
          devons conserver pour les obligations légales, les remboursements et la prévention de la fraude.
        </p>
        <p className="mt-4">
          Consultez la page{" "}
          <a className="font-semibold text-cyan-300 hover:text-cyan-200" href="/rift-dice/delete-account">
            Suppression de compte
          </a>{" "}
          pour initier une demande depuis l’app ou le web.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-white">6. Vos droits</h2>
        <p>
          Selon votre lieu de résidence, vous pouvez demander l’accès, la rectification, la portabilité,
          l’effacement, la limitation ou l’opposition au traitement. Rift Dice propose également un export du
          compte depuis l’application. Contactez-nous à l’adresse ci-dessus. Vous pouvez saisir la CNIL en France.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-white">7. Sécurité et mineurs</h2>
        <p>
          Les échanges réseau utilisent le chiffrement en transit. Les preuves d’achat sensibles ne sont pas
          envoyées aux analytics. Rift Dice n’est pas conçu comme un service destiné spécifiquement aux enfants
          et nous ne demandons pas sciemment à un enfant de fournir son adresse e-mail.
        </p>
      </section>

      <section className="border-t border-white/10 pt-8" lang="en">
        <h2 className="mb-4 text-2xl font-bold text-white">English summary</h2>
        <div className="space-y-4">
          <p>
            Ghota Tech Solutions processes a player identifier, profile and settings, game progression, decks,
            virtual balances, match and social history, purchase status, and stability or anti-fraud diagnostics.
            An email address is processed only when a player voluntarily links or recovers an account.
          </p>
          <p>
            Data is used to provide and secure the game, synchronize progress, verify purchases, provide support,
            meet legal obligations and, with consent, measure product usage or provide rewarded advertising.
            Service providers include Google Cloud Platform, Apple, Google Play and Google AdMob.
          </p>
          <p>
            Game analytics are consent-gated. Account deletion can be initiated in the app or on our{" "}
            <a className="font-semibold text-cyan-300 hover:text-cyan-200" href="/rift-dice/delete-account">
              account deletion page
            </a>
            . A seven-day cancellation period applies before associated account data is deleted or de-identified,
            except for records that must be retained for legal, refund or fraud-prevention purposes.
          </p>
          <p>
            To exercise access, correction, portability, objection or deletion rights, email{" "}
            <a className="font-semibold text-cyan-300 hover:text-cyan-200" href="mailto:contact@ghotatechsolutions.com">
              contact@ghotatechsolutions.com
            </a>
            .
          </p>
        </div>
      </section>
    </RiftDicePageShell>
  );
}

