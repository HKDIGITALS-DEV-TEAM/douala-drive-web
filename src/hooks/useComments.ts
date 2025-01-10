import { useState, useEffect } from 'react';
import { Comment } from '../types/blog';

export function useComments(postId: string) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    // Load comments from localStorage
    const storedComments = localStorage.getItem(`post_comments_${postId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [postId]);

  const addComment = (newComment: Omit<Comment, 'id' | 'date'>) => {
    const comment: Comment = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...newComment,
    };

    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    
    // Save to localStorage
    localStorage.setItem(`post_comments_${postId}`, JSON.stringify(updatedComments));
  };

  return { comments, addComment };
}