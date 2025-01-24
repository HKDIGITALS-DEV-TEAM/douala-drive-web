import { useState } from "react";
import { Check, X } from "lucide-react";
import { Vehicle } from "../../libs/vehicle/types";
import { openWhatsApp } from "../../utils/whatsapp";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const vehicleImage =
    image ||
    "https://drive.google.com/file/d/17LcmmgDe9W4a56e6a6IPZpIcKrxPIvsy/view?usp=sharing";

  const featureList = features ? features.split(",") : [];
  const isAvailable = status.name === "Disponible";
  const isComingSoon = status.name === "En location";

  // Fonction pour ouvrir/fermer le modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Card avec aperçu */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105">
        <img
          src={vehicleImage}
          alt={`${brand} ${name}`}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3
            className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-[#FFD700]"
            onClick={toggleModal}
          >
            {brand} {name}
          </h3>
          <p className="text-gray-600">Catégorie: {category.name}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {/* Modal plein écran */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={toggleModal} // Fermer le modal en cliquant en dehors
        >
          <div
            className="relative bg-white rounded-2xl shadow-lg w-full max-w-4xl mx-auto p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Empêcher la fermeture en cliquant à l'intérieur
          >
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={vehicleImage}
              alt={`${brand} ${name}`}
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="p-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {brand} {name}
              </h2>
              <p className="text-gray-600 mb-2">Catégorie: {category.name}</p>
              <p className="text-gray-600 mb-2">Couleur: {color}</p>
              <p className="text-gray-600 mb-4">{description}</p>
              <p className="text-xl font-bold text-[#FFD700]">
                Prix : {price} /jour
              </p>

              {featureList.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-2">
                    Caractéristiques:
                  </h4>
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
                className={`mt-6 w-full py-3 rounded-lg transition-colors ${
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
        </div>
      )}
    </>
  );
}
