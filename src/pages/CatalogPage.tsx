import { useEffect } from "react";
import VehicleGrid from "../components/catalog/VehicleGrid";
import VehicleFilters from "../components/catalog/VehicleFilters";
import useVehicleStore from "../libs/vehicle/store";
import { useVehicles } from "../libs/vehicle/queries";
import { useVehicleFilters } from "../hooks/useVehicleFilters";

export default function CatalogPage() {
  const { vehicles: fetchedVehicles, isLoading, isError } = useVehicles();
  const { vehicles: vehiclesFromStore, setVehicles } = useVehicleStore();
  const { filters, filteredVehicles, updateFilters } = useVehicleFilters(
    vehiclesFromStore || []
  );

  useEffect(() => {
    if (!vehiclesFromStore && fetchedVehicles) {
      setVehicles(fetchedVehicles);
    }
  }, [fetchedVehicles, vehiclesFromStore, setVehicles]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Chargement des véhicules...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Erreur lors de la récupération des véhicules.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Notre Catalogue de Véhicules
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Découvrez notre sélection de véhicules premium avec chauffeur
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <VehicleFilters filters={filters} updateFilters={updateFilters} />
          <VehicleGrid vehicles={filteredVehicles} />
        </div>
      </div>
    </div>
  );
}
