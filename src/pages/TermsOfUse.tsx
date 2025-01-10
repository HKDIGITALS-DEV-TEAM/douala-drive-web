import React from 'react';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Acceptation des Conditions</h2>
            <p className="text-gray-600">
              En accédant et en utilisant le site web de Douala Drive, vous acceptez d'être lié par les présentes conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Services Proposés</h2>
            <div className="space-y-4 text-gray-600">
              <p>Notre site permet aux utilisateurs de :</p>
              <ul className="list-disc pl-6">
                <li>Consulter notre catalogue de véhicules</li>
                <li>Effectuer des réservations en ligne</li>
                <li>Contacter notre service client</li>
                <li>Accéder aux informations sur nos services</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Compte Utilisateur</h2>
            <div className="space-y-4 text-gray-600">
              <p>3.1 Création de compte :</p>
              <ul className="list-disc pl-6">
                <li>Les informations fournies doivent être exactes et à jour</li>
                <li>L'utilisateur est responsable de la confidentialité de ses identifiants</li>
                <li>Un seul compte par personne est autorisé</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Réservations</h2>
            <div className="space-y-4 text-gray-600">
              <p>Pour effectuer une réservation :</p>
              <ul className="list-disc pl-6">
                <li>Sélectionner un véhicule disponible</li>
                <li>Choisir les dates de location</li>
                <li>Fournir les informations requises</li>
                <li>Procéder au paiement selon les CGV</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Propriété Intellectuelle</h2>
            <p className="text-gray-600">
              Tous les contenus présents sur le site (textes, images, logos, etc.) sont la propriété exclusive de Douala Drive ou de ses partenaires. Toute reproduction non autorisée est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Responsabilités</h2>
            <div className="space-y-4 text-gray-600">
              <p>6.1 Douala Drive s'engage à :</p>
              <ul className="list-disc pl-6">
                <li>Assurer la disponibilité du site dans la mesure du possible</li>
                <li>Sécuriser les données des utilisateurs</li>
                <li>Fournir des informations exactes sur les véhicules</li>
              </ul>
              <p>6.2 L'utilisateur s'engage à :</p>
              <ul className="list-disc pl-6">
                <li>Ne pas perturber le fonctionnement du site</li>
                <li>Ne pas collecter les données d'autres utilisateurs</li>
                <li>Respecter les droits de propriété intellectuelle</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Protection des Données</h2>
            <p className="text-gray-600">
              Les données personnelles sont traitées conformément à notre politique de confidentialité, dans le respect du RGPD et des lois locales sur la protection des données.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Modification des CGU</h2>
            <p className="text-gray-600">
              Douala Drive se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés des modifications importantes par email ou notification sur le site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Droit Applicable</h2>
            <p className="text-gray-600">
              Les présentes CGU sont régies par le droit camerounais. Tout litige sera soumis à la compétence exclusive des tribunaux de Douala.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}