import { useState, useEffect, useMemo } from 'react';
import { Vehicle, VehicleStats } from '../types/vehicle';
import { vehicles as initialVehicles, comingSoonVehicles } from '../utils/vehicleData';

export function useVehicleManagement() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const storedVehicles = localStorage.getItem('vehicles');
    if (storedVehicles) {
      setVehicles(JSON.parse(storedVehicles));
    } else {
      // Convertir les véhicules initiaux au nouveau format
      const formattedVehicles = [
        ...initialVehicles.map(v => ({
          ...v,
          status: v.available ? 'available' : 'maintenance'
        })),
        ...comingSoonVehicles.map(v => ({
          ...v,
          status: 'coming_soon'
        }))
      ] as Vehicle[];
      setVehicles(formattedVehicles);
      localStorage.setItem('vehicles', JSON.stringify(formattedVehicles));
    }
  }, []);

  const saveVehicles = (newVehicles: Vehicle[]) => {
    localStorage.setItem('vehicles', JSON.stringify(newVehicles));
    setVehicles(newVehicles);
  };

  const addVehicle = (vehicle: Vehicle) => {
    const newVehicles = [...vehicles, vehicle];
    saveVehicles(newVehicles);
  };

  const updateVehicle = (updatedVehicle: Vehicle) => {
    const newVehicles = vehicles.map(vehicle =>
      vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle
    );
    saveVehicles(newVehicles);
  };

  const updateVehicleStatus = (id: string, status: Vehicle['status']) => {
    const newVehicles = vehicles.map(vehicle =>
      vehicle.id === id ? { ...vehicle, status } : vehicle
    );
    saveVehicles(newVehicles);
  };

  const deleteVehicle = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
      const newVehicles = vehicles.filter(vehicle => vehicle.id !== id);
      saveVehicles(newVehicles);
    }
  };

  const stats: VehicleStats = useMemo(() => {
    return vehicles.reduce((acc, vehicle) => ({
      ...acc,
      [vehicle.status]: (acc[vehicle.status] || 0) + 1,
      total: acc.total + 1
    }), {
      available: 0,
      rented: 0,
      maintenance: 0,
      reserved: 0,
      coming_soon: 0,
      total: 0
    } as VehicleStats);
  }, [vehicles]);

  const availableVehicles = useMemo(() => 
    vehicles.filter(v => v.status !== 'coming_soon'),
    [vehicles]
  );

  const comingSoonVehicles = useMemo(() => 
    vehicles.filter(v => v.status === 'coming_soon'),
    [vehicles]
  );

  return {
    vehicles: availableVehicles,
    comingSoonVehicles,
    stats,
    addVehicle,
    updateVehicle,
    updateVehicleStatus,
    deleteVehicle,
  };
}