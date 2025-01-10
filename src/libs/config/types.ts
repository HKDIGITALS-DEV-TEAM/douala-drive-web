/**
 * Type représentant une configuration globale.
 */
export interface Configuration {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  openingHours: OpeningHour[];
  rates: Rate[];
  createdAt: string;
  updatedAt: string;
}

/**
 * Type représentant les heures d'ouverture d'une configuration.
 */
export interface OpeningHour {
  id: string;
  label: string;
  configurationId: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Type représentant un tarif associé à une configuration.
 */
export interface Rate {
  id: string;
  title: string;
  icon: string;
  excerpt: string;
  price: string;
  description: string;
  configurationId: string;
  createdAt: string;
  updatedAt: string;
}
