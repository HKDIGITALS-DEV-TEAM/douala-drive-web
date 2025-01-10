import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getVehicles,
  getVehicleById,
  getVehiclesByCategory,
  updateVehicleStatus,
  deleteCategory,
  createOrUpdateCategory,
  deleteVehicle,
  createOrUpdateVehicle,
  getCategories,
  getStatuses,
  uploadImage,
} from "./api";
import { Category, Status, Vehicle } from "./types";

/**
 * Hook pour récupérer tous les véhicules.
 */
export const useVehicles = () => {
  const { data, refetch, isLoading, isError } = useQuery<Vehicle[], Error>({
    queryKey: ["vehicles"],
    queryFn: getVehicles,
  });

  return { vehicles: data, refetch, isLoading, isError };
};

/**
 * Hook pour récupérer un véhicule par son ID.
 */
export const useVehicleById = (id: string) => {
  const { data, refetch, isLoading, isError } = useQuery<Vehicle, Error>({
    queryKey: ["vehicle", id],
    queryFn: () => getVehicleById(id),
    enabled: !!id,
  });

  return { vehicle: data, refetch, isLoading, isError };
};

/**
 * Hook pour récupérer les véhicules par catégorie.
 */
export const useVehiclesByCategory = (categoryName: string) => {
  const { data, refetch, isLoading, isError } = useQuery<Vehicle[], Error>({
    queryKey: ["vehiclesByCategory", categoryName],
    queryFn: () => getVehiclesByCategory(categoryName),

    enabled: !!categoryName,
  });

  return { vehicles: data, refetch, isLoading, isError };
};

/**
 * Hook pour mettre à jour le statut d'un véhicule.
 */
export const useUpdateVehicleStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { id: string; status: string }) =>
      updateVehicleStatus(data.id, data.status),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vehicles"] });
    },
  });
};

/**
 * Hook pour créer ou mettre à jour un véhicule.
 */
export const useCreateOrUpdateVehicle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createOrUpdateVehicle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vehicles"] });
    },
  });
};

/**
 * Hook pour supprimer un véhicule.
 */
export const useDeleteVehicle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteVehicle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vehicles"] });
    },
  });
};

/**
 * Hook pour créer ou mettre à jour une catégorie de véhicule.
 */
export const useCreateOrUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createOrUpdateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};

/**
 * Hook pour supprimer une catégorie de véhicule.
 */
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};

/**
 * Hook pour récupérer toutes les catégories.
 */
export const useCategories = () => {
  const { data, refetch, isLoading, isError } = useQuery<
    Category[],
    Error
  >({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { categories: data, refetch, isLoading, isError };
};

/**
 * Hook pour récupérer tous les statuts.
 */
export const useStatuses = () => {
  const { data, refetch, isLoading, isError } = useQuery<
    Status[],
    Error
  >({
    queryKey: ["statuses"],
    queryFn: getStatuses,
  });

  return { statuses: data, refetch, isLoading, isError };
};

/**
 * Hook pour uploader une image.
 */
export const useUploadImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => uploadImage(file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vehicle"] });
    },
  });
};
