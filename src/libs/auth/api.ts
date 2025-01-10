import { getKeycloakToken } from "./keycloak";
import { jwtDecode } from "jwt-decode";
import { UserProfile } from "./types";

const BASE_URL = import.meta.env.VITE_API_URL;

/**
 * Décode le token JWT et retourne le username.
 */
const getUsernameFromToken = (): string | null => {
  const token = getKeycloakToken();
  if (!token) return null;

  try {
    const decoded: { preferred_username?: string } = jwtDecode(token);
    return decoded.preferred_username || null;
  } catch (error) {
    console.error("Erreur lors du décodage du token :", error);
    return null;
  }
};

/**
 * Récupère le profil utilisateur à partir de l'API.
 */
export const getUserProfile = async (): Promise<UserProfile> => {
  const token = getKeycloakToken();
  const username = getUsernameFromToken();

  if (!token || !username) {
    throw new Error("Token ou username non disponible.");
  }

  const response = await fetch(`${BASE_URL}/users/${username}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération du profil utilisateur.");
  }

  return response.json() as Promise<UserProfile>;
};

/**
 * Met à jour les informations de profil d'un utilisateur.
 * @param userId - Identifiant de l'utilisateur
 * @param profileData - Données à mettre à jour
 */
export const updateUserProfile = async (
  userId: string,
  profileData: Partial<Pick<UserProfile, "name" | "phone" | "fidelity_points">>
): Promise<UserProfile> => {
  const token = getKeycloakToken();
  if (!token) {
    throw new Error("Token non disponible.");
  }

  const response = await fetch(`${BASE_URL}/users/${userId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileData),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la mise à jour du profil.");
  }

  return response.json() as Promise<UserProfile>;
};

/**
 * Upload une image de profil.
 * @param userId - Identifiant de l'utilisateur
 * @param file - Fichier image
 */
export const uploadProfilePicture = async (
  userId: string,
  file: File
): Promise<UserProfile> => {
  const token = getKeycloakToken();
  if (!token) {
    throw new Error("Token non disponible.");
  }

  const formData = new FormData();
  formData.append("profilePicture", file);

  const response = await fetch(`${BASE_URL}/users/${userId}/profile-picture`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Erreur lors de l'upload de la photo de profil.");
  }

  return response.json() as Promise<UserProfile>;
};

/**
 * Télécharge l'image de profil d'un utilisateur.
 * @param profilePicture - Nom de l'image de profil de l'utilisateur
 */
export const downloadProfilePicture = async (
  profilePicture: string
): Promise<Blob> => {
  const token = getKeycloakToken();
  if (!token) {
    throw new Error("Token non disponible.");
  }

  const response = await fetch(
    `${BASE_URL}/users/profile-picture/${profilePicture}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Erreur lors du téléchargement de la photo de profil.");
  }

  return response.blob();
};

/**
 * Supprime le compte utilisateur.
 * @param userId - Identifiant de l'utilisateur
 */
export const deleteUserAccount = async (userId: string): Promise<void> => {
  const token = getKeycloakToken();
  if (!token) {
    throw new Error("Token non disponible.");
  }

  const response = await fetch(`${BASE_URL}/users/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la suppression du compte utilisateur.");
  }
};
