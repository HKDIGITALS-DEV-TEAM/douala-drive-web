import React, { useState, useEffect } from "react";
import { X, Save, Trash2 } from "lucide-react";
import PhotoUpload from "../../../../components/admin/profile/PhotoUpload";
import {
  useUpdateUserProfile,
  useUploadProfilePicture,
  useDeleteUserAccount,
} from "../../../../libs/auth/queries";
import useAuthStore from "../../../../libs/auth/store";
import { UserProfile } from "../../../../libs/auth/types";
import logger from "../../../../libs/logger";
import { logoutKeycloak } from "../../../../libs/auth/keycloak";

interface ProfileFormProps {
  onClose: () => void;
}

export default function ProfileForm({ onClose }: ProfileFormProps) {
  const { user, setUser, clearToken } = useAuthStore();
  const { mutate: updateUserProfile } = useUpdateUserProfile();
  const { mutate: uploadProfilePicture } = useUploadProfilePicture();
  const { mutate: deleteUserAccount } = useDeleteUserAccount();

  const [formData, setFormData] = useState<Partial<UserProfile>>({});
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData(user);
      setPreviewImage(
        user.profilePicture
          ? `${import.meta.env.VITE_API_URL}/users/profile-picture/${
              user.profilePicture
            }`
          : null
      );
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Filtrer uniquement les champs autorisés pour la mise à jour
    const allowedFields: (keyof UserProfile)[] = [
      "name",
      "phone",
      "fidelity_points",
    ];
    const filteredData = Object.keys(formData)
      .filter((key) => allowedFields.includes(key as keyof UserProfile)) // Cast explicite
      .reduce((obj, key) => {
        const value = formData[key as keyof UserProfile];
        if (value !== null && value !== undefined) {
          // Ajoute uniquement les valeurs définies
          (obj as Record<string, string | number>)[key] = value; // Ajout de cast explicite
        }
        return obj;
      }, {} as Record<string, string | number>); // Typage correct pour l'objet final

    const updatedData = {
      userId: user?.id || "",
      profileData: filteredData,
    };

    // Upload de la photo si elle est modifiée
    if (photoFile) {
      uploadProfilePicture(
        { userId: user?.id || "", file: photoFile },
        {
          onSuccess: (updatedUser) => {
            setUser(updatedUser); // Met à jour le store avec le nouvel utilisateur
            logger.info("Photo de profil mise à jour avec succès");
          },
          onError: (error) => {
            logger.error(
              "Erreur lors de l'upload de la photo de profil :",
              error
            );
          },
        }
      );
    }

    // Mise à jour des informations utilisateur
    updateUserProfile(updatedData, {
      onSuccess: (updatedUser) => {
        setUser(updatedUser); // Met à jour le store avec les nouvelles informations
        logger.info("Profil mis à jour avec succès");
        onClose();
      },
      onError: (error) => {
        logger.error("Erreur lors de la mise à jour du profil :", error);
      },
    });
  };

  const handlePhotoChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => setPreviewImage(reader.result as string);
    reader.readAsDataURL(file);
    setPhotoFile(file);
  };

  const handleDeleteAccount = () => {
    deleteUserAccount(
      { userId: user?.id || "" },
      {
        onSuccess: () => {
          logger.info("Compte utilisateur supprimé avec succès");
          // Déconnexion après suppression du compte
          clearToken();
          logoutKeycloak(); // Redirige l'utilisateur vers la page d'accueil ou la page de login Keycloak
          onClose();
        },
        onError: (error) => {
          logger.error("Erreur lors de la suppression du compte :", error);
        },
      }
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Modifier mon profil</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Photo de profil */}
          <PhotoUpload
            currentPhoto={
              previewImage ||
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
            onPhotoChange={handlePhotoChange}
          />

          {/* Informations personnelles */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Informations personnelles</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={formData.name || ""}
                  readOnly
                  className="w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="text"
                  value={formData.phone || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email || ""}
                readOnly
                className="w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Points de fidélité
              </label>
              <input
                type="number"
                value={formData.fidelity_points || 0}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fidelity_points: parseInt(e.target.value),
                  })
                }
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between pt-6 border-t">
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(true)}
              className="flex items-center px-4 py-2 text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-5 h-5 mr-2" /> Supprimer mon compte
            </button>
            <div className="space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-black/90"
              >
                <Save className="w-5 h-5 mr-2" /> Enregistrer
              </button>
            </div>
          </div>
        </form>

        {/* Modal de confirmation de suppression */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-medium mb-4">
                Confirmer la suppression
              </h3>
              <p className="text-gray-600 mb-6">
                Êtes-vous sûr de vouloir supprimer votre compte ? Cette action
                est irréversible.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Annuler
                </button>
                <button
                  onClick={handleDeleteAccount}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Supprimer définitivement
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
