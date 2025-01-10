// src/features/article/queries.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getArticles,
  getArticleBySlug,
  getArticlesByCategory,
  getArticlesByTag,
  getArticlesByAuthor,
  createOrUpdateArticle,
  deleteArticle,
  createOrUpdateCategory,
  deleteCategory,
  createOrUpdateTag,
  deleteTag,
  addTagsToArticle,
  getArticleCategories,
  getArticleStatuses,
  uploadImage,
} from "./api";
import { Article, CategoryArticle, StatusArticle } from "./types";

/**
 * Hook pour récupérer tous les articles.
 */
export const useArticles = () => {
  const { data, refetch, isLoading, isError } = useQuery<Article[], Error>({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  return { articles: data, refetch, isLoading, isError };
};

/**
 * Hook pour récupérer un article par son slug.
 */
export const useArticleBySlug = (slug: string) => {
  const { data, refetch, isLoading, isError } = useQuery<Article, Error>({
    queryKey: ["article", slug],
    queryFn: () => getArticleBySlug(slug),
    enabled: !!slug,
  });

  return { article: data, refetch, isLoading, isError };
};

/**
 * Hook pour récupérer les articles par catégorie.
 */
export const useArticlesByCategory = (categoryName: string) => {
  const { data, refetch, isLoading, isError } = useQuery<Article[], Error>({
    queryKey: ["articlesByCategory", categoryName],
    queryFn: () => getArticlesByCategory(categoryName),

    enabled: !!categoryName,
  });

  return { articles: data, refetch, isLoading, isError };
};

/**
 * Hook pour récupérer les articles par tag.
 */
export const useArticlesByTag = (tagName: string) => {
  const { data, refetch, isLoading, isError } = useQuery<Article[], Error>({
    queryKey: ["articlesByTag", tagName],
    queryFn: () => getArticlesByTag(tagName),
    enabled: !!tagName,
  });

  return { articles: data, refetch, isLoading, isError };
};

/**
 * Hook pour récupérer les articles par auteur.
 */
export const useArticlesByAuthor = (authorId: string) => {
  const { data, refetch, isLoading, isError } = useQuery<Article[], Error>({
    queryKey: ["articlesByAuthor", authorId],
    queryFn: () => getArticlesByAuthor(authorId),
    enabled: !!authorId, // Active uniquement si un authorId est fourni
  });

  return { articles: data, refetch, isLoading, isError };
};

/**
 * Hook pour créer ou mettre à jour un article.
 */
export const useCreateOrUpdateArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createOrUpdateArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
};

/**
 * Hook pour supprimer un article.
 */
export const useDeleteArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
};

/**
 * Hook pour créer ou mettre à jour une catégorie.
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
 * Hook pour supprimer une catégorie.
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
 * Hook pour créer ou mettre à jour un tag.
 */
export const useCreateOrUpdateTag = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createOrUpdateTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};

/**
 * Hook pour supprimer un tag.
 */
export const useDeleteTag = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTag,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};

/**
 * Hook pour ajouter des tags à un article.
 */
export const useAddTagsToArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { articleId: string; tagIds: string[] }) =>
      addTagsToArticle(data.articleId, data.tagIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
};

/**
 * Hook pour récupérer toutes les catégories d'articles.
 */
export const useArticleCategories = () => {
  const { data, refetch, isLoading, isError } = useQuery<
    CategoryArticle[],
    Error
  >({
    queryKey: ["articleCategories"],
    queryFn: getArticleCategories,
  });

  return { categories: data, refetch, isLoading, isError };
};

/**
 * Hook pour récupérer tous les statuts d'articles.
 */
export const useArticleStatuses = () => {
  const { data, refetch, isLoading, isError } = useQuery<
    StatusArticle[],
    Error
  >({
    queryKey: ["articleStatuses"],
    queryFn: getArticleStatuses,
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
      queryClient.invalidateQueries({ queryKey: ["article"] });
    },
  });
};
