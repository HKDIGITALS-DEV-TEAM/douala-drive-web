import { useEffect } from "react";
import BlogGrid from "../components/blog/BlogGrid";
import useArticleStore from "../libs/article/store";
import { useArticles } from "../libs/article/queries";

export default function BlogPage() {
  const { articles: articlesFromStore, setArticles } = useArticleStore();
  const { articles, isLoading, isError } = useArticles();

  useEffect(() => {
    if (articles && !articlesFromStore) {
      setArticles(articles); // Synchronise avec le store
    }
  }, [articles, articlesFromStore, setArticles]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }

  if (isError || !articlesFromStore) {
    return <div className="min-h-screen flex items-center justify-center">Erreur de chargement.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-8">
          Notre Blog
        </h1>
        <BlogGrid posts={articlesFromStore} />
      </div>
    </div>
  );
}
