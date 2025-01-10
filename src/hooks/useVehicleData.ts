import { useState, useEffect } from 'react';
import { Vehicle } from '../types/vehicle';
import { vehicles as initialVehicles, comingSoonVehicles } from '../utils/vehicleData';

// Hook centralisé pour la gestion des véhicules
export function useVehicleData() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const storedVehicles = localStorage.getItem('vehicles');
    if (storedVehicles) {
      setVehicles(JSON.parse(storedVehicles));
    } else {
      const allVehicles = [...initialVehicles, ...comingSoonVehicles];
      setVehicles(allVehicles);
      localStorage.setItem('vehicles', JSON.stringify(allVehicles));
    }
  }, []);

  const getAvailableVehicles = () => 
    vehicles.filter(v => v.status === 'available');

  const getComingSoonVehicles = () =>
    vehicles.filter(v => v.status === 'coming_soon');

  const updateVehicles = (newVehicles: Vehicle[]) => {
    setVehicles(newVehicles);
    localStorage.setItem('vehicles', JSON.stringify(newVehicles));
  };

  return {
    vehicles,
    availableVehicles: getAvailableVehicles(),
    comingSoonVehicles: getComingSoonVehicles(),
    updateVehicles,
  };
}