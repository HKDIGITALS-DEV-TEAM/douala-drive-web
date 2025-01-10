import { useState, useMemo } from "react";
import { Vehicle } from "../libs/vehicle/types";

export interface VehicleFilters {
  category?: string; // Filtrage par catégorie
  status?: string; // Filtrage par statut
}

export function useVehicleFilters(vehicles: Vehicle[]) {
  const [filters, setFilters] = useState<VehicleFilters>({
    category: "",
    status: "",
  });

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      // Filtre par catégorie
      if (filters.category && vehicle.category.name !== filters.category) {
        return false;
      }

      // Filtre par statut
      if (filters.status && vehicle.status.name !== filters.status) {
        return false;
      }

      return true;
    });
  }, [vehicles, filters]);

  const updateFilters = (newFilters: Partial<VehicleFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return {
    filters,
    filteredVehicles,
    updateFilters,
  };
}
