import { LucideIcon } from "lucide-react";
import { openWhatsApp } from "../../utils/whatsapp";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features?: string[]; // Rend 'features' facultative
  icon: LucideIcon;
  popular?: boolean;
}

export default function PricingCard({
  title,
  price,
  description,
  features = [], // Définit une valeur par défaut si 'features' est absente
  icon: Icon,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border ${
        popular ? "border-[#FFD700]" : "border-gray-200"
      } bg-white p-6 shadow-sm transition-transform hover:scale-105`}
    >
      {/* Badge "Plus populaire" */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FFD700] px-4 py-1 text-sm font-semibold">
          Plus populaire
        </div>
      )}

      {/* Titre et Icône */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <Icon className="h-6 w-6 text-[#FFD700]" />
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-600">{description}</p>

      {/* Prix */}
      <p className="mt-6">
        {price === "Sur devis" ? (
          <span className="text-4xl font-bold text-gray-900">{price}</span>
        ) : (
          <span className="flex items-baseline">
            <span className="text-xs text-gray-500 mr-1">à partir de</span>
            <span className="text-4xl font-bold text-gray-900">
              {price.replace("À partir de ", "")}
            </span>
          </span>
        )}
      </p>

      {/* Liste des fonctionnalités */}
      {features.length > 0 && (
        <ul className="my-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="rounded-full bg-[#FFD700]/10 p-1">
                <svg
                  className="h-4 w-4 text-[#FFD700]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="ml-3 text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Bouton de réservation */}
      <button
        onClick={() => openWhatsApp(title)}
        className="mt-auto w-full rounded-lg bg-black py-3 text-white hover:bg-black/90 transition-colors"
      >
        Réserver maintenant
      </button>
    </div>
  );
}
