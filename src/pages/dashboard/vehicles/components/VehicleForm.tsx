import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { VehicleRequest, Vehicle } from "../../../../libs/vehicle/types";
import {
  useCategories,
  useStatuses,
  useCreateOrUpdateVehicle,
} from "../../../../libs/vehicle/queries";
import logger from "../../../../libs/logger";
import { uploadImage } from "../../../../libs/vehicle/api";

interface VehicleFormProps {
  vehicle?: Vehicle | null;
  onSave: () => void;
  onClose: () => void;
}

export default function VehicleForm({ vehicle, onClose }: VehicleFormProps) {
  const { categories, refetch: refetchCategories } = useCategories();
  const { statuses, refetch: refetchStatuses } = useStatuses();
  const { mutate: createOrUpdateVehicle } = useCreateOrUpdateVehicle();

  const [formData, setFormData] = useState<VehicleRequest>({
    id: vehicle?.id || "",
    name: vehicle?.name || "",
    brand: vehicle?.brand || "",
    category_id: vehicle?.category?.id || "",
    color: vehicle?.color || "#ffffff",
    image: vehicle?.image || null,
    price: vehicle?.price || 0,
    status_id: vehicle?.status?.id || "",
    features: vehicle?.features || null,
    description: vehicle?.description || null,
    video: vehicle?.video || null,
  });

  const [useFileInput, setUseFileInput] = useState<boolean>(true);
  const [useVideoFileInput, setUseVideoFileInput] = useState<boolean>(true);
  const [previewImage, setPreviewImage] = useState<string | null>(
    formData.image
  );
  const [previewVideo, setPreviewVideo] = useState<string | null>(
    formData.video
  );
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  useEffect(() => {
    if (!categories) refetchCategories();
    if (!statuses) refetchStatuses();
  }, [categories, statuses, refetchCategories, refetchStatuses]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let imageUrl = formData.image;
    let videoUrl = formData.video;

    if (photoFile && useFileInput) {
      try {
        const response = await uploadImage(photoFile);
        imageUrl = response.filename;
      } catch (error) {
        logger.error("Erreur lors de l'upload de l'image :", error);
        return;
      }
    }

    if (videoFile && useVideoFileInput) {
      try {
        const response = await uploadImage(videoFile); // Réutilisation de l'upload pour les vidéos
        videoUrl = response.filename;
      } catch (error) {
        logger.error("Erreur lors de l'upload de la vidéo :", error);
        return;
      }
    }

    const vehicleData: VehicleRequest = {
      ...formData,
      image: imageUrl,
      video: videoUrl,
    };

    const isUpdate = !!vehicle?.id;

    //const { id, ...dataToSend } = vehicleData; // Exclut `id` du corps de la requête

    createOrUpdateVehicle(
      { ...vehicleData, id: isUpdate ? vehicle.id : undefined }, // Gère l'ID selon le contexte
      {
        onSuccess: () => {
          onClose();
        },
        onError: (error) => {
          logger.error("Erreur lors de la création/mise à jour :", error);
        },
      }
    );
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
      setPhotoFile(file);
      setFormData({ ...formData, image: file.name });
    }
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setPreviewImage(url);
    setFormData({ ...formData, image: url });
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setPreviewVideo(URL.createObjectURL(file)); // Prévisualisation de la vidéo locale
      setFormData({ ...formData, video: file.name });
    }
  };

  const handleVideoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setPreviewVideo(url);
    setFormData({ ...formData, video: url });
  };

  const handleFeatureChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const features = e.target.value
      .split("\n")
      .filter((f) => f.trim())
      .join(",");
    setFormData({ ...formData, features });
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, color: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {vehicle ? "Modifier le véhicule" : "Ajouter un véhicule"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Marque
              </label>
              <input
                type="text"
                value={formData.brand}
                onChange={(e) =>
                  setFormData({ ...formData, brand: e.target.value })
                }
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie
              </label>
              <select
                value={formData.category_id}
                onChange={(e) =>
                  setFormData({ ...formData, category_id: e.target.value })
                }
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                required
              >
                <option value="">Sélectionner une catégorie</option>
                {categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Statut
              </label>
              <select
                value={formData.status_id}
                onChange={(e) =>
                  setFormData({ ...formData, status_id: e.target.value })
                }
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                required
              >
                <option value="">Sélectionner un statut</option>
                {statuses?.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Couleur
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="color"
                value={formData.color}
                onChange={handleColorChange}
                className="h-10 w-10 border rounded"
              />
              <input
                type="text"
                value={formData.color}
                onChange={handleColorChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                placeholder="#ffffff"
              />
            </div>
          </div>

          {/* Basculer entre Fichier et URL */}
          <div className="flex items-center mb-4">
            <label className="text-sm font-medium text-gray-700 mr-2">
              Utiliser un fichier ?
            </label>
            <input
              type="checkbox"
              checked={useFileInput}
              onChange={() => setUseFileInput(!useFileInput)}
              className="rounded focus:ring-primary"
            />
          </div>

          {useFileInput ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image (Fichier)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image (URL)
              </label>
              <input
                type="url"
                value={formData.image || ""}
                onChange={handleImageUrlChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
          )}

          {previewImage && (
            <div className="mt-4">
              <img
                src={previewImage}
                alt="Prévisualisation"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          )}

          {/* Vidéo */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vidéo de présentation
            </label>
            <div className="flex items-center mb-4">
              <label className="text-sm font-medium text-gray-700 mr-2">
                Utiliser un fichier ?
              </label>
              <input
                type="checkbox"
                checked={useVideoFileInput}
                onChange={() => setUseVideoFileInput(!useVideoFileInput)}
                className="rounded focus:ring-primary"
              />
            </div>
            {useVideoFileInput ? (
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            ) : (
              <input
                type="url"
                value={formData.video || ""}
                onChange={handleVideoUrlChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                placeholder="Lien vers la vidéo"
              />
            )}
          </div>

          {previewVideo && (
            <div className="mt-4">
              <video
                src={previewVideo}
                controls
                className="w-full h-48 rounded-md"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Caractéristiques
            </label>
            <textarea
              value={(formData.features || "").split(",").join("\n")}
              onChange={handleFeatureChange}
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={formData.description || ""}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prix
            </label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: parseInt(e.target.value) })
              }
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-black/90"
            >
              {vehicle ? "Mettre à jour" : "Ajouter"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
