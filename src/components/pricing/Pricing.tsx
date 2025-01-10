import { useEffect } from "react";
import PricingCard from "./PricingCard";
import { useConfigurationByName } from "../../libs/config/queries";
import { useConfigStore } from "../../libs/config/store";
import { Briefcase, Building, Calendar, MapPin } from "lucide-react";

const getIconForRate = (index: number) => {
  const icons = [Building, MapPin, Calendar, Briefcase];
  return icons[index % icons.length];
};

export default function Pricing() {
  const { configuration, isLoading, isError } =
    useConfigurationByName("Douala Drive");
  const { configuration: configFromStore, setConfiguration } = useConfigStore();

  useEffect(() => {
    if (!configFromStore && configuration) {
      setConfiguration(configuration); // Met à jour le store
    }
  }, [configuration, configFromStore, setConfiguration]);

  const configToUse = configFromStore || configuration;

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (isError || !configToUse) {
    return <div>Erreur lors de la récupération des données.</div>;
  }

  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos tarifs
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Des solutions adaptées à tous vos besoins de transport
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {configToUse.rates.map((rate, index) => (
            <PricingCard
              key={rate.id}
              title={rate.title}
              price={rate.price}
              description={rate.excerpt}
              features={rate.description.split(",").map((f) => f.trim())}
              icon={getIconForRate(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
