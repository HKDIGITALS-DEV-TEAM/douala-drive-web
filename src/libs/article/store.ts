import { create } from "zustand";
import { Article, CategoryArticle, StatusArticle, Tag } from "./types";
import { persist } from "zustand/middleware";

type ArticleState = {
  selectedArticle: Article | null;
  setSelectedArticle: (article: Article) => void;
  clearSelectedArticle: () => void;
  articles: Article[] | null; // Ajoutez une liste d'article
  setArticles: (articles: Article[]) => void;
  tags: Tag[] | null;
  setTags: (tags: Tag[]) => void;
  categoriesArticle: CategoryArticle[] | null;
  setCategoriesArticle: (categoriesArticle: CategoryArticle[]) => void;
  statusesArticle: StatusArticle[] | null;
  setStatusesArticle: (statusesArticle: CategoryArticle[]) => void;
};

const useArticleStore = create<ArticleState>()(
  persist(
    (set) => ({
      selectedArticle: null,
      setSelectedArticle: (article) =>
        set(() => ({ selectedArticle: article })),
      clearSelectedArticle: () => set(() => ({ selectedArticle: null })),
      articles: null,
      setArticles: (articles) => set(() => ({ articles })),
      tags: null,
      setTags: (tags) => set(() => ({ tags })),
      categoriesArticle: null,
      setCategoriesArticle: (categoriesArticle) =>
        set(() => ({ categoriesArticle })),
      statusesArticle: null,
      setStatusesArticle: (statusesArticle) => set(() => ({ statusesArticle })),
    }),
    {
      name: "article-store",
    }
  )
);

export default useArticleStore;
