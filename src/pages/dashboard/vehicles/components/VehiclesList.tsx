import {
  useUpdateVehicleStatus,
  useDeleteVehicle,
  useStatuses,
} from "../../../../libs/vehicle/queries";
import useVehicleStore from "../../../../libs/vehicle/store";
import { useEffect } from "react";
import { Vehicle } from "../../../../libs/vehicle/types";

interface VehiclesListProps {
  vehicles: Vehicle[];
  onEdit: (vehicle: Vehicle) => void;
  onClose: () => void;
}

export default function VehiclesList({ vehicles, onEdit }: VehiclesListProps) {
  const { mutate: updateVehicleStatus } = useUpdateVehicleStatus();
  const { mutate: deleteVehicle } = useDeleteVehicle();
  const { statuses, refetch: fetchStatuses } = useStatuses();
  const { statuses: statusesFromStore, setStatuses } = useVehicleStore();

  // Charge les statuts dans le store s'ils sont absents
  useEffect(() => {
    if (!statusesFromStore || statusesFromStore.length === 0) {
      fetchStatuses().then((response) => {
        if (response.data) {
          setStatuses(response.data);
        }
      });
    }
  }, [statusesFromStore, fetchStatuses, setStatuses]);

  const handleStatusChange = (id: string, statusId: string) => {
    updateVehicleStatus({ id, status: statusId });
  };

  const handleDelete = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce véhicule ?")) {
      deleteVehicle(id);
    }
  };

  if (!vehicles.length) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-500">
        Aucun véhicule disponible
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Véhicule
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Catégorie
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prix
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-3 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded object-cover"
                        src={vehicle.image || "/placeholder-image.png"}
                        alt={vehicle.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {vehicle.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {vehicle.brand}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {vehicle.category.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{vehicle.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={vehicle.status.id}
                    onChange={(e) =>
                      handleStatusChange(vehicle.id, e.target.value)
                    }
                    className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  >
                    {(statusesFromStore || statuses)?.map((status) => (
                      <option
                        key={status.id}
                        value={status.id}
                        selected={status.id === vehicle.status.id}
                      >
                        {status.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => onEdit(vehicle)}
                    className="text-primary hover:text-primary/80 mr-4"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(vehicle.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
