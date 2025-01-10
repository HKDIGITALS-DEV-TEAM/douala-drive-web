import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import ArticlesList from "./components/ArticlesList";
import ArticleForm from "./components/ArticleForm";
import { useArticles } from "../../../libs/article/queries";
import useArticleStore from "../../../libs/article/store";
import { Article } from "../../../libs/article/types";

export default function ArticlesPage() {
  const { articles, refetch } = useArticles();
  const { articles: articlesFromStore, setArticles } = useArticleStore();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null); // Typage explicite

  useEffect(() => {
    if (articles) {
      setArticles(articles);
    }
  }, [articles, setArticles]);

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
    setEditingArticle(null);
    refetch();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Gestion des articles
        </h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-black/90"
        >
          <Plus className="w-5 h-5 mr-2" />
          Nouvel article
        </button>
      </div>

      <ArticlesList articles={articlesFromStore || []} onEdit={handleEdit} />

      {isFormOpen && (
        <ArticleForm article={editingArticle} onClose={handleClose} />
      )}
    </div>
  );
}
