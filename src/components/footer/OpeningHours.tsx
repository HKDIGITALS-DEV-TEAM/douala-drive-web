import { Clock } from "lucide-react";
import { useConfigStore } from "../../libs/config/store";
import { OpeningHour } from "../../libs/config/types";

export default function OpeningHours() {
  const { configuration } = useConfigStore();

  // Horaires par défaut en cas d'absence de configuration
  const defaultHours = [
    { day: "Lundi - Samedi", hours: "08:00 - 18:00" },
    { day: "Dimanche", hours: "Sur rendez-vous" },
  ];

  const openingHours =
    (configuration?.openingHours as OpeningHour[]) || defaultHours;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Horaires d'ouverture</h3>
      <ul className="space-y-3">
        {openingHours.map((entry, index) => (
          <li key={index} className="flex items-start">
            <Clock className="w-5 h-5 mr-2 text-[#FFD700] shrink-0 mt-1" />
            <div>
              <p className="font-medium">{entry.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
