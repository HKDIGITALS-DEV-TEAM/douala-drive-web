interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
}

interface PricingPlans {
  city: PricingPlan;
  outOfCity: PricingPlan;
  events: PricingPlan;
  business: PricingPlan;
}

export const pricingPlans: PricingPlans = {
  city: {
    title: "Location en ville",
    price: "À partir de 65 000 FCFA",
    description: "Pour vos déplacements urbains en toute élégance",
    features: [
      "Chauffeur professionnel dédié",
      "Kilométrage illimité en ville",
      "Assurance tous risques incluse",
      "Service personnalisé",
      "Assistance 24/7"
    ]
  },
  outOfCity: {
    title: "Location hors ville",
    price: "À partir de 80 000 FCFA",
    description: "Explorez le Cameroun dans le plus grand confort",
    features: [
      "Chauffeur professionnel expérimenté",
      "Kilométrage illimité",
      "Assurance tous risques incluse",
      "GPS et assistance routière 24/7",
      "Kit de secours et confort"
    ]
  },
  events: {
    title: "Évènements",
    price: "À partir de 85 000 FCFA",
    description: "Rendez vos occasions spéciales encore plus mémorables",
    features: [
      "Chauffeur professionnel en tenue",
      "Service VIP personnalisé",
      "Décoration sur demande",
      "Flexibilité horaire",
      "Carburant inclus"
    ]
  },
  business: {
    title: "Entreprises",
    price: "Sur devis",
    description: "Solutions personnalisées pour les professionnels",
    features: [
      "Contrats sur mesure",
      "Facturation entreprise",
      "Chauffeurs dédiés",
      "Service prioritaire 24/7",
      "Tarifs préférentiels"
    ]
  }
};