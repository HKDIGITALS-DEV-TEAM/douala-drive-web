import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteUserAccount,
  getUserProfile,
  updateUserProfile,
  uploadProfilePicture,
} from "./api";
import { UserProfile } from "./types";

/**
 * Hook pour récupérer le profil utilisateur.
 */
export const useUserProfile = () => {
  const { data, refetch, isLoading, isError } = useQuery<UserProfile, Error>({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
  });

  return { userProfile: data, refetch, isLoading, isError };
};

/**
 * Hook pour mettre à jour les informations de profil.
 */
export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation<
    UserProfile,
    Error,
    { userId: string; profileData: Partial<UserProfile> }
  >({
    mutationFn: ({ userId, profileData }) =>
      updateUserProfile(userId, profileData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
};

/**
 * Hook pour uploader une photo de profil.
 */
export const useUploadProfilePicture = () => {
  const queryClient = useQueryClient();

  return useMutation<UserProfile, Error, { userId: string; file: File }>({
    mutationFn: ({ userId, file }) => uploadProfilePicture(userId, file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
};

/**
 * Hook pour supprimer un compte utilisateur.
 */
export const useDeleteUserAccount = () => {
  return useMutation<void, Error, { userId: string }>({
    mutationFn: ({ userId }) => deleteUserAccount(userId),
  });
};
