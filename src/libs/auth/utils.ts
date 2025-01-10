import { getKeycloakToken } from "./keycloak";

/**
 * Retourne les en-têtes avec le token d'authentification.
 */
export const getAuthHeaders = (): HeadersInit => {
  const token = getKeycloakToken();
  if (!token) {
    throw new Error("Token d'authentification manquant.");
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};
