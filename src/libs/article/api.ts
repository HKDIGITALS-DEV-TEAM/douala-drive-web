import {
  Article,
  ArticleRequest,
  CategoryArticle,
  StatusArticle,
  Tag,
} from "./types";
import { getAuthHeaders } from "../../libs/auth/utils";

const BASE_URL = import.meta.env.VITE_API_URL;

/**
 * Récupère la liste de tous les articles.
 */
export const getArticles = async (): Promise<Article[]> => {
  const response = await fetch(`${BASE_URL}/public/articles`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des articles.");
  }
  return response.json();
};

/**
 * Récupère les détails d'un article par son slug.
 */
export const getArticleBySlug = async (slug: string): Promise<Article> => {
  const response = await fetch(`${BASE_URL}/public/articles/${slug}`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération de l'article.");
  }
  return response.json();
};

/**
 * Récupère les articles par catégorie.
 */
export const getArticlesByCategory = async (
  categoryName: string
): Promise<Article[]> => {
  const response = await fetch(
    `${BASE_URL}/public/articles/category/${categoryName}`);
  if (!response.ok) {
    throw new Error(
      "Erreur lors de la récupération des articles par catégorie."
    );
  }
  return response.json();
};

/**
 * Récupère les articles par tag.
 */
export const getArticlesByTag = async (tagName: string): Promise<Article[]> => {
  const response = await fetch(`${BASE_URL}/public/articles/tag/${tagName}`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des articles par tag.");
  }
  return response.json();
};

/**
 * Récupère les articles par ID d'auteur.
 */
export const getArticlesByAuthor = async (
  authorId: string
): Promise<Article[]> => {
  const response = await fetch(
    `${BASE_URL}/public/articles/author/${authorId}`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des articles par auteur.");
  }
  return response.json();
};

/**
 * Crée ou met à jour un article.
 */
export const createOrUpdateArticle = async (
  articleData: ArticleRequest
): Promise<Article> => {
  const response = await fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      ...getAuthHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la création ou mise à jour de l'article.");
  }
  return response.json();
};

/**
 * Supprime un article par son ID.
 */
export const deleteArticle = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la suppression de l'article.");
  }
};

/**
 * Crée ou met à jour une catégorie d'article.
 */
export const createOrUpdateCategory = async (categoryData: {
  id?: string;
  name: string;
}): Promise<CategoryArticle> => {
  const response = await fetch(`${BASE_URL}/articles/categories`, {
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
 * Supprime une catégorie par son ID.
 */
export const deleteCategory = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/articles/categories/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la suppression de la catégorie.");
  }
};

/**
 * Crée ou met à jour un tag.
 */
export const createOrUpdateTag = async (tagData: {
  id?: string;
  name: string;
}): Promise<Tag> => {
  const response = await fetch(`${BASE_URL}/articles/tags`, {
    method: "POST",
    headers: {
      ...getAuthHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tagData),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la création ou mise à jour du tag.");
  }
  return response.json();
};

/**
 * Supprime un tag par son ID.
 */
export const deleteTag = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/articles/tags/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la suppression du tag.");
  }
};

/**
 * Ajoute un ou plusieurs tags à un article.
 */
export const addTagsToArticle = async (
  articleId: string,
  tagIds: string[]
): Promise<void> => {
  const response = await fetch(`${BASE_URL}/articles/${articleId}/tags`, {
    method: "PATCH",
    headers: {
      ...getAuthHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tags: tagIds }),
  });
  if (!response.ok) {
    throw new Error("Erreur lors de l'ajout des tags à l'article.");
  }
};

/**
 * Récupère toutes les catégories d'articles.
 */
export const getArticleCategories = async (): Promise<CategoryArticle[]> => {
  const response = await fetch(`${BASE_URL}/public/categories/articles`);
  if (!response.ok) {
    throw new Error(
      "Erreur lors de la récupération des catégories d'articles."
    );
  }
  return response.json();
};

/**
 * Récupère toutes les statuts d'articles.
 */
export const getArticleStatuses = async (): Promise<StatusArticle[]> => {
  const response = await fetch(`${BASE_URL}/public/statuses/articles`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des statuts d'articles.");
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

  const response = await fetch(`${BASE_URL}/articles/upload`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Erreur lors de l'upload de l'image.");
  }

  return response.json() as Promise<{ message: string; filename: string }>;
};
