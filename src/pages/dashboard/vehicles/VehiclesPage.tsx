import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import VehicleStats from "./components/VehicleStats";
import VehiclesList from "./components/VehiclesList";
import VehicleForm from "./components/VehicleForm";
import { useVehicles } from "../../../libs/vehicle/queries";
import useVehicleStore from "../../../libs/vehicle/store";
import { Vehicle } from "../../../libs/vehicle/types";

export default function VehiclesPage() {
  const { vehicles, refetch: refetchVehicles } = useVehicles();
  const { vehicles: vehiclesFromStore, setVehicles } = useVehicleStore();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    if (vehicles) {
      setVehicles(vehicles);
    }
  }, [vehicles, setVehicles]);

  const handleEdit = (vehicle: Vehicle) => {
    setEditingVehicle(vehicle);
    setIsFormOpen(true);
  };

  const handleSave = () => {
    setIsFormOpen(false);
    setEditingVehicle(null);
    refetchVehicles();
  };

  const handleClose = () => {
    setIsFormOpen(false);
    setEditingVehicle(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Gestion des véhicules
        </h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-black/90"
        >
          <Plus className="w-5 h-5 mr-2" />
          Ajouter un véhicule
        </button>
      </div>

      <VehicleStats />
      <VehiclesList
        vehicles={vehiclesFromStore || []}
        onEdit={handleEdit}
        onClose={handleClose}
      />

      {isFormOpen && (
        <VehicleForm
          vehicle={editingVehicle}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
