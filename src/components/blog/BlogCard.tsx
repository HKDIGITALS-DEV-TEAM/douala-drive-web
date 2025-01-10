import { Link } from "react-router-dom";
import { Article } from "../../libs/article/types";

interface BlogCardProps {
  post: Article;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={post.image || "/default.jpg"} // Image par défaut
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p className="text-gray-600 mt-2">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug || "inconnu"}`} // Utilisation de slug
          className="text-[#FFD700] mt-4 block"
        >
          Lire la suite →
        </Link>
      </div>
    </article>
  );
}
