import { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';
import { blogPosts as initialPosts } from '../utils/blogData';

export function useBlogManagement() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Charger les articles depuis le localStorage ou utiliser les données initiales
    const storedPosts = localStorage.getItem('blog_posts');
    setPosts(storedPosts ? JSON.parse(storedPosts) : initialPosts);
  }, []);

  const savePosts = (newPosts: BlogPost[]) => {
    localStorage.setItem('blog_posts', JSON.stringify(newPosts));
    setPosts(newPosts);
  };

  const createPost = async (post: BlogPost) => {
    const newPosts = [...posts, { ...post, id: Date.now().toString() }];
    savePosts(newPosts);
  };

  const updatePost = async (updatedPost: BlogPost) => {
    const newPosts = posts.map(post => 
      post.id === updatedPost.id ? updatedPost : post
    );
    savePosts(newPosts);
  };

  const deletePost = async (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      const newPosts = posts.filter(post => post.id !== id);
      savePosts(newPosts);
    }
  };

  return {
    posts,
    createPost,
    updatePost,
    deletePost
  };
}