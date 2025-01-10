import React from 'react';
import { Clock } from 'lucide-react';
import { useVehicleManagement } from '../../../../hooks/useVehicleManagement';
import StatusSelect from './StatusSelect';
import StatusBadge from './StatusBadge';

export default function ComingSoonVehicles() {
  const { comingSoonVehicles, updateVehicleStatus } = useVehicleManagement();

  if (comingSoonVehicles.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-gray-900">Véhicules à venir</h2>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
          <Clock className="w-4 h-4 mr-2" />
          {comingSoonVehicles.length} véhicules
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comingSoonVehicles.map((vehicle) => (
          <div 
            key={vehicle.id} 
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">
              {vehicle.brand} {vehicle.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{vehicle.type}</p>
            <p className="text-sm text-gray-600 mb-4">{vehicle.description}</p>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Statut actuel
                </label>
                <StatusBadge status={vehicle.status} />
              </div>
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Modifier le statut
                </label>
                <StatusSelect
                  value={vehicle.status}
                  onChange={(status) => updateVehicleStatus(vehicle.id, status)}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}