import { useState, useEffect } from 'react';

export function useBlogInteractions(postId: string) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Load likes from localStorage
    const storedLikes = localStorage.getItem(`post_likes_${postId}`);
    const storedIsLiked = localStorage.getItem(`post_liked_${postId}`);
    
    if (storedLikes) setLikes(parseInt(storedLikes));
    if (storedIsLiked) setIsLiked(storedIsLiked === 'true');
  }, [postId]);

  const toggleLike = () => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    const newIsLiked = !isLiked;

    setLikes(newLikes);
    setIsLiked(newIsLiked);

    // Save to localStorage
    localStorage.setItem(`post_likes_${postId}`, newLikes.toString());
    localStorage.setItem(`post_liked_${postId}`, newIsLiked.toString());
  };

  return { likes, isLiked, toggleLike };
}