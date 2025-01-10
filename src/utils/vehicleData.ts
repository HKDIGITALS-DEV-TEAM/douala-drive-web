import { Vehicle } from '../types/vehicle';

export const vehicles: Vehicle[] = [
  {
    id: "gmc-pickup",
    name: "GMC Sierra",
    brand: "GMC",
    type: "Pick-up",
    color: "Marron",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    price: "80 000 FCFA",
    available: true,
    features: [
      "Chauffeur professionnel",
      "Climatisation",
      "4x4",
      "5 places",
      "GPS intégré"
    ],
    description: "Pick-up robuste et élégant, parfait pour vos déplacements professionnels et aventures tout-terrain."
  },
  {
    id: "jetour-suv",
    name: "JETOUR X90 Plus",
    brand: "JETOUR",
    type: "SUV Grand Luxe",
    color: "Noir",
    image: "https://images.unsplash.com/photo-1670513756460-00d3de8dc57d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    price: "85 000 FCFA",
    available: true,
    features: [
      "Chauffeur professionnel",
      "Intérieur cuir",
      "7 places",
      "Toit panoramique",
      "Système audio premium"
    ],
    description: "SUV luxueux offrant un confort exceptionnel et des équipements haut de gamme pour vos déplacements."
  }
];

// JETOUR vehicles coming soon
export const comingSoonVehicles: Vehicle[] = [
  {
    id: "jetour-x90",
    name: "X90",
    brand: "JETOUR",
    type: "SUV",
    color: "Multiple",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    price: "À déterminer",
    available: false,
    comingSoon: true,
    features: [],
    description: "Le SUV familial par excellence, alliant confort et technologie."
  },
  {
    id: "jetour-x70-plus",
    name: "X70 Plus",
    brand: "JETOUR",
    type: "SUV",
    color: "Multiple",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    price: "À déterminer",
    available: false,
    comingSoon: true,
    features: [],
    description: "SUV compact premium avec des finitions haut de gamme."
  },
  {
    id: "jetour-dashing",
    name: "Dashing",
    brand: "JETOUR",
    type: "SUV",
    color: "Multiple",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    price: "À déterminer",
    available: false,
    comingSoon: true,
    features: [],
    description: "Le SUV sportif qui allie performance et élégance."
  },
  {
    id: "jetour-t2",
    name: "T2",
    brand: "JETOUR",
    type: "SUV",
    color: "Multiple",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    price: "À déterminer",
    available: false,
    comingSoon: true,
    features: [],
    description: "Le nouveau SUV compact qui redéfinit les standards du segment."
  }
];