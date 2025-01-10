import Keycloak, { KeycloakInstance } from "keycloak-js";

// Déclarez une instance globale
let keycloakInstance: KeycloakInstance | null = null;

/**
 * Initialise Keycloak.
 * @param onLoad - Mode de chargement initial ("login-required" ou "check-sso").
 * @returns Instance Keycloak initialisée.
 */
export const initKeycloak = async (
  onLoad: "login-required" | "check-sso" = "check-sso"
): Promise<KeycloakInstance> => {
  if (!keycloakInstance) {
    keycloakInstance = new Keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL,
      realm: import.meta.env.VITE_KEYCLOAK_REALM,
      clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
    });

    await keycloakInstance.init({
      onLoad,
      checkLoginIframe: false,
    });
  }

  return keycloakInstance;
};

/**
 * Récupère le token de Keycloak.
 * @returns Token ou null si indisponible.
 */
export const getKeycloakToken = (): string | null => {
  return keycloakInstance?.token || null;
};

/**
 * Déconnecte l'utilisateur de Keycloak et le redirige vers la page d'accueil.
 */
export const logoutKeycloak = (): void => {
  keycloakInstance?.logout({
    redirectUri: window.location.origin, // Redirection vers la page d'accueil
  });
};

/**
 * Exporte l'instance Keycloak.
 */
export const keycloak = {
  get instance(): KeycloakInstance | null {
    return keycloakInstance;
  },
  initKeycloak,
  getKeycloakToken,
  logoutKeycloak,
};
