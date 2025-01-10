import { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';
import { blogPosts as initialPosts } from '../utils/blogData';

export function useBlogData() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('blog_posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      setPosts(initialPosts);
      localStorage.setItem('blog_posts', JSON.stringify(initialPosts));
    }
  }, []);

  const updatePosts = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem('blog_posts', JSON.stringify(newPosts));
  };

  const addPost = (post: BlogPost) => {
    const newPosts = [...posts, { ...post, id: Date.now().toString() }];
    updatePosts(newPosts);
  };

  const editPost = (updatedPost: BlogPost) => {
    const newPosts = posts.map(post => 
      post.id === updatedPost.id ? updatedPost : post
    );
    updatePosts(newPosts);
  };

  const deletePost = (id: string) => {
    const newPosts = posts.filter(post => post.id !== id);
    updatePosts(newPosts);
  };

  return {
    posts,
    addPost,
    editPost,
    deletePost,
  };
}