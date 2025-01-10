import useVehicleStore from "../../../../libs/vehicle/store";

export default function VehicleStats() {
  const { vehicles } = useVehicleStore();

  // Si `vehicles` est null, renvoyer des statistiques par défaut
  const stats = (vehicles || []).reduce(
    (acc, vehicle) => {
      if (vehicle.status.name === "Disponible") acc.available++;
      if (vehicle.status.name === "En location") acc.rented++;
      if (vehicle.status.name === "En maintenance") acc.maintenance++;
      if (vehicle.status.name === "Réservé") acc.reserved++;
      return acc;
    },
    { available: 0, rented: 0, maintenance: 0, reserved: 0 }
  );

  const cards = [
    {
      name: "Disponibles",
      value: stats.available,
      color: "bg-green-100 text-green-800",
    },
    {
      name: "En location",
      value: stats.rented,
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "En maintenance",
      value: stats.maintenance,
      color: "bg-red-100 text-red-800",
    },
    {
      name: "Réservés",
      value: stats.reserved,
      color: "bg-yellow-100 text-yellow-800",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.name}
          className="bg-white overflow-hidden rounded-lg border border-gray-200"
        >
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className={`p-3 ${card.color} rounded-lg`}></div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {card.name}
                  </dt>
                  <dd className="text-2xl font-semibold text-gray-900">
                    {card.value}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
