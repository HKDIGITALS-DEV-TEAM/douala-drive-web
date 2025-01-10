import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions Générales de Vente</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Objet</h2>
            <p className="text-gray-600">
              Les présentes conditions générales de vente régissent les relations contractuelles entre Douala Drive, ci-après dénommée "le loueur", et toute personne physique ou morale souhaitant bénéficier des services de location de véhicules, ci-après dénommée "le locataire".
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Conditions de Location</h2>
            <div className="space-y-4">
              <h3 className="font-medium">2.1 Éligibilité</h3>
              <p className="text-gray-600">Le locataire doit :</p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Être âgé d'au moins 21 ans</li>
                <li>Être titulaire d'un permis de conduire valide depuis plus de 2 ans</li>
                <li>Présenter une pièce d'identité valide</li>
                <li>Disposer d'un moyen de paiement accepté par le loueur</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Tarification et Paiement</h2>
            <div className="space-y-4 text-gray-600">
              <p>Les tarifs incluent :</p>
              <ul className="list-disc pl-6">
                <li>La mise à disposition du véhicule pour la durée convenue</li>
                <li>L'assurance responsabilité civile</li>
                <li>L'assistance 24h/24</li>
                <li>L'entretien du véhicule</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Réservation et Annulation</h2>
            <div className="space-y-4 text-gray-600">
              <p>4.1 La réservation est confirmée après :</p>
              <ul className="list-disc pl-6">
                <li>Validation de la disponibilité du véhicule</li>
                <li>Versement d'un acompte de 30% du montant total</li>
              </ul>
              <p>4.2 Conditions d'annulation :</p>
              <ul className="list-disc pl-6">
                <li>Plus de 48h avant : remboursement intégral</li>
                <li>Moins de 48h : 50% de l'acompte retenu</li>
                <li>Non-présentation : acompte non remboursé</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Utilisation du Véhicule</h2>
            <div className="space-y-4 text-gray-600">
              <p>Le locataire s'engage à :</p>
              <ul className="list-disc pl-6">
                <li>Utiliser le véhicule en bon père de famille</li>
                <li>Respecter le code de la route</li>
                <li>Ne pas sous-louer le véhicule</li>
                <li>Signaler immédiatement tout incident ou dommage</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Assurance et Responsabilité</h2>
            <p className="text-gray-600">
              Le véhicule est couvert par une assurance tous risques. Une franchise reste à la charge du locataire en cas de sinistre responsable. Le montant de la franchise est indiqué dans le contrat de location.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Protection des Données</h2>
            <p className="text-gray-600">
              Les données personnelles collectées sont utilisées uniquement dans le cadre de la location et conformément à notre politique de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Droit Applicable</h2>
            <p className="text-gray-600">
              Les présentes conditions sont soumises au droit camerounais. Tout litige relatif à leur interprétation et/ou à leur exécution relève des tribunaux compétents de Douala.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}