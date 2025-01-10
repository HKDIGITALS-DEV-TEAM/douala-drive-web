import React, { useState, useEffect } from "react";
import { X, Wand2 } from "lucide-react";
import AIPromptForm from "../../../../components/admin/blog/AIPromptForm";
import { generateArticleContent } from "../../../../services/openai";
import slugify from "slugify";
import { Article, ArticleRequest } from "../../../../libs/article/types";
import {
  useArticleCategories,
  useArticleStatuses,
  useCreateOrUpdateArticle
} from "../../../../libs/article/queries";
import useArticleStore from "../../../../libs/article/store";
import useAuthStore from "../../../../libs/auth/store"; // Pour récupérer l'utilisateur connecté
import logger from "../../../../libs/logger";
import { uploadImage } from "../../../../libs/article/api";

interface ArticleFormProps {
  article?: Article | null;
  onClose: () => void;
}

export default function ArticleForm({ article, onClose }: ArticleFormProps) {
  const { mutate: createOrUpdateArticle } = useCreateOrUpdateArticle();
  const { categoriesArticle, setCategoriesArticle } = useArticleStore();
  const { statusesArticle, setStatusesArticle } = useArticleStore();
  const { categories, refetch: refetchCategories } = useArticleCategories();
  const { statuses, refetch: refetchStatuses } = useArticleStatuses();
  const { user } = useAuthStore(); // Récupération de l'utilisateur connecté
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [useFileInput, setUseFileInput] = useState<boolean>(true); // Bascule URL/Fichier

  const [formData, setFormData] = useState<ArticleRequest>({
    id: article?.id || "", // Assurez-vous que l'ID est toujours une chaîne
    title: article?.title || "",
    slug: article?.slug || "",
    excerpt: article?.excerpt || "",
    content: article?.content || "",
    image: article?.image || null,
    status_id: article?.status?.id || "",
    author_id: article?.author?.id || user?.id || "", // Par défaut, utilisateur connecté
    category_id: article?.category?.id || "",
    tags: article?.tags?.map((tag) => tag.id) || [],
  });

  const [previewImage, setPreviewImage] = useState<string | null>(
    article?.image || null
  );
  const [showAIForm, setShowAIForm] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Récupère les catégories lorsque le composant est monté
  useEffect(() => {
    if (categories) {
      setCategoriesArticle(categories);
    } else {
      refetchCategories();
    }
  }, [categories, refetchCategories, setCategoriesArticle]);

  // Récupère les statuts lorsque le composant est monté
  useEffect(() => {
    if (statuses) {
      setStatusesArticle(statuses);
    } else {
      refetchStatuses();
    }
  }, [statuses, refetchStatuses, setStatusesArticle]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let imageUrl = formData.image;

    // Génération automatique du slug si non fourni
    if (!formData.slug) {
      setFormData((prev) => ({
        ...prev,
        slug: slugify(formData.title, { lower: true, strict: true }),
      }));
    }

    // Upload de la photo si elle est modifiée
    if (photoFile && useFileInput) {
      try {
        const response = await uploadImage(photoFile);
        imageUrl = response.filename;
      } catch (error) {
        logger.error("Erreur lors de l'upload de l'image :", error);
        return;
      }
    }

    const articleData: ArticleRequest = {
      ...formData,
      image: imageUrl,
    };

    const isUpdate = !!article?.id;

    //const { id, ...dataToSend } = articleData; // Exclut `id` du corps de la requête

    createOrUpdateArticle(
      { ...articleData, id: isUpdate ? article.id : undefined }, // Gère l'ID selon le contexte
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

  const handleAIGeneration = async (prompt: string) => {
    try {
      setIsGenerating(true);
      const generatedContent = await generateArticleContent(prompt);
      setFormData((prev) => ({
        ...prev,
        content: generatedContent,
      }));
    } catch (error) {
      logger.error("Erreur:", error);
    } finally {
      setIsGenerating(false);
      setShowAIForm(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {article ? "Modifier l'article" : "Nouvel article"}
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
                Titre
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                    slug: slugify(e.target.value, {
                      lower: true,
                      strict: true,
                    }), // Génère le slug dynamiquement
                  })
                }
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                required
              />
            </div>

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
                {categoriesArticle?.map((category) => (
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
                {statusesArticle?.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.name}
                  </option>
                ))}
              </select>
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Extrait
            </label>
            <textarea
              value={formData.excerpt || ""}
              onChange={(e) =>
                setFormData({ ...formData, excerpt: e.target.value })
              }
              rows={2}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Contenu
              </label>
              <button
                type="button"
                onClick={() => setShowAIForm(!showAIForm)}
                className="text-sm text-primary hover:text-primary/80 flex items-center"
              >
                <Wand2 className="w-4 h-4 mr-1" />
                Générer avec ChatGPT
              </button>
            </div>
            {showAIForm && (
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <AIPromptForm
                  onGenerate={handleAIGeneration}
                  isGenerating={isGenerating}
                />
              </div>
            )}
            <textarea
              value={formData.content || ""}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              rows={10}
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
              {article ? "Mettre à jour" : "Publier"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
