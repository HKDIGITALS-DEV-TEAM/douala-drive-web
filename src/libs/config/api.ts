import { Configuration } from "./types";

const BASE_URL = import.meta.env.VITE_API_URL;

/**
 * Récupère toutes les configurations.
 */
export const getConfigurations = async (): Promise<Configuration[]> => {
  const response = await fetch(`${BASE_URL}/configurations`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des configurations.");
  }
  return response.json();
};

/**
 * Récupère une configuration par nom.
 */
export const getConfigurationByName = async (
  name: string
): Promise<Configuration> => {
  const response = await fetch(
    `${BASE_URL}/configurations/${encodeURIComponent(name)}`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération de la configuration.");
  }
  return response.json();
};
