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
  ["Utilisation facultative", "Interactions de jeu limitées et événements de progression uniquement si vous acceptez les analytics. La file locale est effacée au retrait du consentement."],
  ["Diagnostic et sécurité", "Version de l’application, plateforme, codes d’erreur, contexte technique limité et métadonnées réseau nécessaires à la stabilité, à la reconnexion et à la prévention des abus."],
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
        <h2 className="mb-3 text-2xl font-bold text-white">Périmètre de la version 0.4</h2>
        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-5">
          <p>
            La version de lancement est earned-only : elle n’intègre ni achat en argent réel,
            ni publicité, ni suivi publicitaire, ni récompense aléatoire payante. Elle ne collecte
            donc ni historique d’achat, ni identifiant publicitaire pour ces finalités.
          </p>
          <p className="mt-3" lang="en">
            Launch version 0.4 is earned-only. It contains no real-money purchase,
            advertising, ad tracking or paid randomized reward, and does not collect
            purchase history or advertising identifiers for those purposes.
          </p>
        </div>
        <p className="mt-4">
          Si une version ultérieure active une fonctionnalité commerciale ou publicitaire,
          cette politique et les déclarations des stores seront mises à jour avant sa publication.
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
          <li>Sécuriser les parties, restaurer les sessions réseau et prévenir les abus.</li>
          <li>Respecter les obligations légales et traiter les demandes de droits.</li>
          <li>Avec votre consentement, mesurer l’utilisation afin d’améliorer l’équilibrage et l’ergonomie.</li>
        </ul>
        <p className="mt-4">
          Les analytics de jeu sont désactivés avant consentement et votre choix peut être modifié dans les
          paramètres. Le refus des analytics ne bloque aucune fonctionnalité du jeu.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-white">4. Prestataires et destinataires</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Google Cloud Platform : hébergement sécurisé des services et bases de données.</li>
          <li>Apple App Store et Google Play : distribution de l’application et services propres à la plateforme.</li>
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
          données de profil, progression, parties, relations sociales, analytics et diagnostics liés sont
          supprimées. Un journal d’exécution minimal et non rattachable au joueur est conservé pour prouver
          l’achèvement de la demande.
        </p>
        <p className="mt-4">
          Les événements analytics bruts acceptés avec consentement et les rapports d’erreur client sont
          conservés au maximum 90 jours. La file analytics présente sur l’appareil est limitée à 23 heures
          et supprimée immédiatement lors du retrait du consentement. Les journaux techniques de sécurité
          peuvent être conservés jusqu’à 90 jours, sauf nécessité plus longue liée à un incident ou à une
          obligation légale.
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
            virtual balances, match and social history, and limited stability or anti-abuse diagnostics.
            An email address is processed only when a player voluntarily links or recovers an account.
          </p>
          <p>
            Data is used to provide and secure the game, synchronize progress, restore network sessions,
            provide support, meet legal obligations and, with consent, measure product usage. Raw consented
            analytics and client error reports are retained for no more than 90 days. Service providers include
            Google Cloud Platform; Apple and Google Play distribute the application.
          </p>
          <p>
            Game analytics are consent-gated. Account deletion can be initiated in the app or on our{" "}
            <a className="font-semibold text-cyan-300 hover:text-cyan-200" href="/rift-dice/delete-account">
              account deletion page
            </a>
            . A seven-day cancellation period applies before associated account and gameplay data is deleted.
            A minimal non-player-linked completion record is retained to audit the deletion.
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
