import { useEffect } from "react";
import VehicleCard from "./VehicleCard";
import { useVehicles } from "../../libs/vehicle/queries";
import useVehicleStore from "../../libs/vehicle/store";

export default function Catalog() {
  const { vehicles, isLoading, isError } = useVehicles();
  const { vehicles: vehiclesFromStore, setVehicles } = useVehicleStore();

  useEffect(() => {
    if (!vehiclesFromStore && vehicles) {
      setVehicles(vehicles); // Met à jour le store
    }
  }, [vehicles, vehiclesFromStore, setVehicles]);

  const vehiclesToUse = vehiclesFromStore || vehicles;

  if (isLoading) {
    return <div>Chargement des véhicules...</div>;
  }

  if (isError || !vehiclesToUse) {
    return <div>Erreur lors de la récupération des véhicules.</div>;
  }

  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Véhicules
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Nos véhicules de marques
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {vehiclesToUse.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  );
}
