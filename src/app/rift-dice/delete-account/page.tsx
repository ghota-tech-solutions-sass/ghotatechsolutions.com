import type { Metadata } from "next";
import RiftDicePageShell from "@/components/RiftDicePageShell";

export const metadata: Metadata = {
  title: "Suppression de compte Rift Dice",
  description: "Demander la suppression d’un compte Rift Dice et des données associées.",
  alternates: { canonical: "/rift-dice/delete-account" },
};

export default function RiftDiceDeleteAccount() {
  return (
    <RiftDicePageShell
      eyebrow="Contrôle des données • Data controls"
      title="Supprimer un compte Rift Dice"
      description="Vous pouvez initier la suppression dans le jeu ou envoyer une demande depuis cette page. You can start deletion in the game or submit a request from this page."
    >
      <section>
        <h2 className="mb-3 text-2xl font-bold text-white">Depuis l’application / In the app</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Ouvrez Profil puis Confidentialité.</li>
          <li>Sélectionnez « Supprimer le compte ».</li>
          <li>Confirmez une seconde fois dans le délai affiché.</li>
        </ol>
        <p className="mt-4">
          La demande reste annulable depuis le même écran pendant le délai de grâce de sept jours.
          The request can be cancelled from the same screen during the seven-day grace period.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-white">Demande web / Web request</h2>
        <p>
          Si vous ne pouvez plus ouvrir le jeu, envoyez une demande à{" "}
          <a
            className="font-semibold text-cyan-300 hover:text-cyan-200"
            href="mailto:contact@ghotatechsolutions.com?subject=Rift%20Dice%20-%20Suppression%20de%20compte%20%2F%20Account%20deletion&body=Identifiant%20joueur%20%2F%20Player%20ID%3A%0APlateforme%20%2F%20Platform%3A%0A"
          >
            contact@ghotatechsolutions.com
          </a>
          . Indiquez votre identifiant joueur et la plateforme. Nous demanderons une vérification minimale
          afin d’éviter la suppression du compte d’une autre personne.
        </p>
        <p className="mt-3">
          If you can no longer open the game, email us with your Player ID and platform. We will request
          minimal ownership verification before processing the deletion.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-white">Données supprimées / Data deleted</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Profil, paramètres et identifiants de liaison du compte.</li>
          <li>Collection, decks, monnaies virtuelles, quêtes et progression saisonnière.</li>
          <li>Historique de parties, relations sociales et données de diagnostic liées au compte.</li>
          <li>Player profile, settings, collection, decks, progression, match and social data.</li>
        </ul>
        <p className="mt-4">
          Les éléments strictement nécessaires au respect d’obligations comptables, au traitement des
          remboursements ou à la prévention de la fraude peuvent être conservés pour la durée légalement
          requise, avec les données de compte supprimées ou dissociées lorsque cela est possible.
        </p>
      </section>

      <section className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5">
        <h2 className="mb-2 text-xl font-bold text-amber-100">Attention / Important</h2>
        <p>
          La suppression est définitive après le délai de grâce : les achats consommables, la progression et
          les objets virtuels ne pourront pas être récupérés. Deleting the account is permanent after the grace
          period and consumed purchases, progress and virtual items cannot be recovered.
        </p>
      </section>
    </RiftDicePageShell>
  );
}

