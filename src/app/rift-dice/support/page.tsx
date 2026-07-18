import type { Metadata } from "next";
import RiftDicePageShell from "@/components/RiftDicePageShell";

export const metadata: Metadata = {
  title: "Support Rift Dice",
  description: "Assistance officielle de Rift Dice: Circuit War.",
  alternates: { canonical: "/rift-dice/support" },
};

export default function RiftDiceSupport() {
  return (
    <RiftDicePageShell
      eyebrow="Assistance officielle • Official support"
      title="Support Rift Dice"
      description="Aide pour le compte, les achats, la connexion et le fonctionnement du jeu. Help with your account, purchases, connectivity and gameplay."
    >
      <section>
        <h2 className="mb-3 text-2xl font-bold text-white">Nous contacter / Contact us</h2>
        <p>
          Écrivez à{" "}
          <a className="font-semibold text-cyan-300 hover:text-cyan-200" href="mailto:contact@ghotatechsolutions.com?subject=Support%20Rift%20Dice">
            contact@ghotatechsolutions.com
          </a>{" "}
          avec l’objet « Support Rift Dice ». Vous pouvez écrire en français ou en anglais.
        </p>
        <p className="mt-3">
          Email us with the subject “Rift Dice Support”. Support is available in French and English.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-white">Informations utiles / Helpful details</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Version du jeu et plateforme (iOS ou Android).</li>
          <li>Identifiant joueur affiché dans les paramètres, si disponible.</li>
          <li>Description du problème et étapes pour le reproduire.</li>
          <li>Capture d’écran sans donnée de paiement ni information sensible.</li>
        </ul>
        <p className="mt-4 text-sm text-amber-200">
          Ne transmettez jamais votre mot de passe, numéro de carte bancaire, reçu complet ou jeton d’achat.
          Never send a password, card number, full receipt or purchase token.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-white">Achats / Purchases</h2>
        <p>
          Pour restaurer un achat éligible, ouvrez la Boutique puis utilisez « Restaurer les achats ».
          Pour un achat facturé mais absent, joignez uniquement la référence de commande masquée et la date.
        </p>
        <p className="mt-3">
          To restore an eligible purchase, open the Shop and select “Restore purchases”. If a charged
          purchase is missing, provide only a masked order reference and the purchase date.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-bold text-white">Compte invité / Guest account</h2>
        <p>
          Un compte invité peut être perdu après suppression de l’application ou changement d’appareil s’il
          n’a pas été lié. Utilisez la fonction de liaison du profil dès qu’elle est proposée dans votre version.
        </p>
        <p className="mt-3">
          An unlinked guest account may be lost after uninstalling the game or changing devices. Use the
          profile-linking option when it is available in your version.
        </p>
      </section>
    </RiftDicePageShell>
  );
}

