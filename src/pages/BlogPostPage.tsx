import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useArticleBySlug } from "../libs/article/queries";
import RelatedPosts from "../components/blog/RelatedPosts";
import PostActions from "../components/blog/PostActions";
import Comments from "../components/blog/Comments";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>(); // Typage de slug
  console.log(slug);

  const navigate = useNavigate();
  const { article, isLoading, isError } = useArticleBySlug(slug || ""); // Gestion du slug

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Chargement...
      </div>
    );
  }

  if (isError || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">L'article demandé n'existe pas.</p>
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center text-[#FFD700] mt-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate("/blog")}
          className="inline-flex items-center text-gray-600 hover:text-[#FFD700] mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au blog
        </button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={article.image || "/default.jpg"}
            alt={article.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {article.title}
            </h1>
            <div
              className="text-gray-500 mt-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            ></div>
            <PostActions postId={article.id} />
            <Comments postId={article.id} />
          </div>
        </div>
        <RelatedPosts currentPostId={article.id} />
      </div>
    </div>
  );
}
