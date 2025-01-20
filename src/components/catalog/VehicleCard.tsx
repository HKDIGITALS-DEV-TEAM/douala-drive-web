import { Clock, Check } from "lucide-react";
import { Vehicle } from "../../libs/vehicle/types";
import { openWhatsApp } from "../../utils/whatsapp";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const {
    name,
    brand,
    category,
    color,
    image,
    price,
    status,
    features,
    description,
  } = vehicle;

  const isAvailable = status.name === "Disponible";
  const isComingSoon = status.name === "En location";

  // Ajout d'une image par défaut si "image" est null
  const vehicleImage =
    image ||
    "https://drive.google.com/file/d/17LcmmgDe9W4a56e6a6IPZpIcKrxPIvsy/view?usp=sharing";

  // Transforme la chaîne `features` en tableau (ou tableau vide si null/undefined)
  const featureList = features ? features.split(",") : [];

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img
          src={vehicleImage}
          alt={`${brand} ${name}`}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4">
          {isComingSoon ? (
            <span className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Bientôt disponible
            </span>
          ) : isAvailable ? (
            <span className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center">
              <Check className="w-4 h-4 mr-2" />
              Disponible
            </span>
          ) : (
            <span className="bg-red-600 text-white px-4 py-2 rounded-full">
              Non disponible
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {brand} {name}
            </h3>
            <div className="space-y-1 mt-2">
              <p className="text-gray-600">Catégorie: {category.name}</p>
              <p className="text-gray-600">Couleur: {color}</p>
            </div>
          </div>
          <p className="text-xl font-bold text-[#FFD700]"><span className="text-gray-600 text-sm">A partir de :</span> {price} /jour</p>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        {featureList.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Caractéristiques:</h4>
            <ul className="grid grid-cols-2 gap-2">
              {featureList.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm text-gray-600"
                >
                  <Check className="w-4 h-4 text-[#FFD700] mr-2" />
                  {feature.trim()}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() =>
            isAvailable && !isComingSoon && openWhatsApp(`${brand} ${name}`)
          }
          className={`w-full py-3 rounded-lg transition-colors ${
            isAvailable && !isComingSoon
              ? "bg-black text-white hover:bg-black/90"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isAvailable || isComingSoon}
        >
          {isComingSoon ? "Bientôt disponible" : "Réserver maintenant"}
        </button>
      </div>
    </div>
  );
}
