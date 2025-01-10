import React from 'react';

export default function VehicleStatusChart() {
  return (
    <div className="relative">
      <div className="flex items-center justify-center h-64">
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-600">
            Graphique de l'état des véhicules
          </p>
          <p className="text-xs text-gray-500">
            (Intégrer ici un graphique circulaire avec Chart.js ou une autre bibliothèque)
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-semibold text-green-600">4</div>
          <div className="text-sm text-gray-500">Disponibles</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-yellow-600">2</div>
          <div className="text-sm text-gray-500">Réservés</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-gray-600">4</div>
          <div className="text-sm text-gray-500">À venir</div>
        </div>
      </div>
    </div>
  );
}