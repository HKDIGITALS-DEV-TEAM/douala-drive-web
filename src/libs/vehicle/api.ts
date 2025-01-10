import { Category, Status, Vehicle, VehicleRequest } from "./types";
import { getAuthHeaders } from "../../libs/auth/utils";

const BASE_URL = import.meta.env.VITE_API_URL;

/**
 * Récupère la liste de tous les véhicules.
 */
export const getVehicles = async (): Promise<Vehicle[]> => {
  const response = await fetch(`${BASE_URL}/public/vehicles`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des véhicules.");
  }
  return response.json();
};

/**
 * Récupère les détails d'un véhicule par son ID.
 */
export const getVehicleById = async (id: string): Promise<Vehicle> => {
  const response = await fetch(`${BASE_URL}/public/vehicles/${id}`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération du véhicule.");
  }
  return response.json();
};

/**
 * Récupère les véhicules par catégorie.
 */
export const getVehiclesByCategory = async (
  categoryName: string
): Promise<Vehicle[]> => {
  const response = await fetch(
    `${BASE_URL}/public/vehicles/category/${categoryName}`);
  if (!response.ok) {
    throw new Error(
      "Erreur lors de la récupération des véhicules par catégorie."
    );
  }
  return response.json();
};

/**
 * Met à jour le statut d'un véhicule.
 */
export const updateVehicleStatus = async (
  id: string,
  status: string
): Promise<Vehicle> => {
  const response = await fetch(`${BASE_URL}/vehicles/${id}/status`, {
    method: "PATCH",
    headers: {
      ...getAuthHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status_id: status }), // Statut dans le corps de la requête
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la mise à jour du statut du véhicule.");
  }
  return response.json();
};

/**
 * Crée ou met à jour un véhicule.
 */
export const createOrUpdateVehicle = async (
  vehicleData: VehicleRequest
): Promise<Vehicle> => {
  const response = await fetch(`${BASE_URL}/vehicles`, {
    method: "POST",
    headers: {
      ...getAuthHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vehicleData),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la création ou mise à jour du véhicule.");
  }
  return response.json();
};

/**
 * Supprime un véhicule par son ID.
 */
export const deleteVehicle = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/vehicles/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la suppression du véhicule.");
  }
};

/**
 * Crée ou met à jour une catégorie de véhicule.
 */
export const createOrUpdateCategory = async (categoryData: {
  id?: string;
  name: string;
}): Promise<Category> => {
  const response = await fetch(`${BASE_URL}/vehicles/categories`, {
    method: "POST",
    headers: {
      ...getAuthHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoryData),
  });
  if (!response.ok) {
    throw new Error(
      "Erreur lors de la création ou mise à jour de la catégorie."
    );
  }
  return response.json();
};

/**
 * Supprime une catégorie de véhicule par son ID.
 */
export const deleteCategory = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/vehicles/categories/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la suppression de la catégorie.");
  }
};

/**
 * Récupère toutes les catégories.
 */
export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${BASE_URL}/public/categories/vehicles`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des catégories.");
  }
  return response.json();
};

/**
 * Récupère toutes les statuts.
 */
export const getStatuses = async (): Promise<Status[]> => {
  const response = await fetch(`${BASE_URL}/public/statuses/vehicles`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des statuts.");
  }
  return response.json();
};

/**
 * Upload une image.
 * @param file - Fichier image
 */
export const uploadImage = async (
  file: File
): Promise<{ message: string; filename: string }> => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(`${BASE_URL}/vehicles/upload`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Erreur lors de l'upload de l'image.");
  }

  return response.json() as Promise<{ message: string; filename: string }>;
};
