import { BlogPost } from '../types/blog';
import { blogPosts } from './blogData';

export function getBlogPost(id: string | undefined): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getRelatedPosts(currentPostId: string): BlogPost[] {
  return blogPosts
    .filter(post => post.id !== currentPostId)
    .slice(0, 2);
}