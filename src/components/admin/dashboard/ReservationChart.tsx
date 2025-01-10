import React from 'react';

export default function ReservationChart() {
  return (
    <div className="relative">
      <div className="flex items-center justify-center h-64">
        <div className="space-y-2 text-center">
          <p className="text-sm text-gray-600">
            Graphique des réservations mensuelles
          </p>
          <p className="text-xs text-gray-500">
            (Intégrer ici un graphique linéaire avec Chart.js ou une autre bibliothèque)
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-semibold text-primary">24</div>
          <div className="text-sm text-gray-500">Ce mois</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-gray-900">18</div>
          <div className="text-sm text-gray-500">Mois dernier</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold text-green-600">+33%</div>
          <div className="text-sm text-gray-500">Croissance</div>
        </div>
      </div>
    </div>
  );
}