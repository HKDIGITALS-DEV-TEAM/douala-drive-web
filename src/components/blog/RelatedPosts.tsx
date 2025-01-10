import { useEffect, useState } from "react";
import { useArticles } from "../../libs/article/queries";
import BlogCard from "./BlogCard";
import { Article } from "../../libs/article/types";

interface RelatedPostsProps {
  currentPostId: string;
}

export default function RelatedPosts({ currentPostId }: RelatedPostsProps) {
  const { articles, isLoading, isError } = useArticles(); // Hook pour récupérer les articles
  const [relatedPosts, setRelatedPosts] = useState<Article[]>([]);

  useEffect(() => {
    if (articles && currentPostId) {
      const filteredPosts = articles.filter(
        (post) => post.id !== currentPostId
      );
      setRelatedPosts(filteredPosts.slice(0, 4)); // Par exemple, affiche les 4 premiers articles similaires
    }
  }, [articles, currentPostId]);

  if (isLoading) {
    return (
      <div className="text-gray-500">Chargement des articles similaires...</div>
    );
  }

  if (isError || relatedPosts.length === 0) {
    return null; // Pas d'articles similaires à afficher
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Articles similaires
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {relatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
