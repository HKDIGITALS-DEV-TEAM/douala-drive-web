import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Collecte des Données</h2>
            <div className="space-y-4 text-gray-600">
              <p>Nous collectons les informations suivantes :</p>
              <ul className="list-disc pl-6">
                <li>Informations d'identification (nom, prénom, adresse)</li>
                <li>Coordonnées (email, téléphone)</li>
                <li>Documents officiels (permis de conduire)</li>
                <li>Données de paiement</li>
                <li>Données de navigation sur notre site</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Utilisation des Données</h2>
            <div className="space-y-4 text-gray-600">
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6">
                <li>Gérer vos réservations de véhicules</li>
                <li>Assurer le service client</li>
                <li>Améliorer nos services</li>
                <li>Respecter nos obligations légales</li>
                <li>Vous informer sur nos services (avec votre accord)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Protection des Données</h2>
            <p className="text-gray-600">
              Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Conservation des Données</h2>
            <div className="space-y-4 text-gray-600">
              <p>Nous conservons vos données :</p>
              <ul className="list-disc pl-6">
                <li>Pendant la durée de notre relation commerciale</li>
                <li>Selon les obligations légales applicables</li>
                <li>3 ans après le dernier contact pour la prospection</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Vos Droits</h2>
            <div className="space-y-4 text-gray-600">
              <p>Vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6">
                <li>Accès à vos données personnelles</li>
                <li>Rectification des données inexactes</li>
                <li>Effacement des données</li>
                <li>Opposition au traitement</li>
                <li>Portabilité des données</li>
                <li>Retrait du consentement</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Cookies</h2>
            <div className="space-y-4 text-gray-600">
              <p>Nous utilisons des cookies pour :</p>
              <ul className="list-disc pl-6">
                <li>Améliorer la navigation sur le site</li>
                <li>Mémoriser vos préférences</li>
                <li>Analyser l'utilisation du site</li>
                <li>Personnaliser votre expérience</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Partage des Données</h2>
            <p className="text-gray-600">
              Vos données peuvent être partagées avec nos prestataires de services (assurance, maintenance) dans la stricte mesure nécessaire à l'exécution de nos services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Contact</h2>
            <p className="text-gray-600">
              Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, contactez notre délégué à la protection des données à privacy@doualadrive.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}