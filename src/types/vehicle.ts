export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  type: string;
  color: string;
  image: string;
  price: string;
  status: 'available' | 'rented' | 'maintenance' | 'reserved' | 'coming_soon';
  features: string[];
  description: string;
  lastMaintenanceDate?: string;
  nextMaintenanceDate?: string;
  currentRenter?: string;
  rentalStartDate?: string;
  rentalEndDate?: string;
}

export interface VehicleStats {
  available: number;
  rented: number;
  maintenance: number;
  reserved: number;
  coming_soon: number;
  total: number;
}