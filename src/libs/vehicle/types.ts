/**
 * Type représentant un véhicule.
 */
export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: Category;
  color: string;
  image: string | null;
  video: string | null;
  price: number;
  status: Status;
  features: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Type représentant une catégorie de véhicule.
 */
export interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Type représentant un statut de véhicule.
 */
export interface Status {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface VehicleRequest {
  id: string | undefined;
  name: string;
  brand: string;
  category_id: string;
  color: string;
  image: string | null; // Peut être un lien ou un chemin local
  video: string | null;
  price: number;
  status_id: string;
  features: string | null; // Optionnel
  description: string | null; // Optionnel
}
