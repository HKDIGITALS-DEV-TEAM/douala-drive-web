import React from 'react';
import { Save } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Paramètres</h1>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <form className="space-y-6">
          {/* Informations de l'entreprise */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Informations de l'entreprise
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Nom de l'entreprise
                </label>
                <input
                  type="text"
                  id="companyName"
                  defaultValue="Douala Drive"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="contact@doualadrive.com"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  defaultValue="+237 000 000 000"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  defaultValue="Douala, Cameroun"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Réseaux sociaux
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                  Facebook
                </label>
                <input
                  type="url"
                  id="facebook"
                  placeholder="https://facebook.com/..."
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                  Instagram
                </label>
                <input
                  type="url"
                  id="instagram"
                  placeholder="https://instagram.com/..."
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-black/90"
            >
              <Save className="w-5 h-5 mr-2" />
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}