import React from 'react';
import { Heart, Share2 } from 'lucide-react';
import { useBlogInteractions } from '../../hooks/useBlogInteractions';
import ShareModal from './ShareModal';

interface PostActionsProps {
  postId: string;
}

export default function PostActions({ postId }: PostActionsProps) {
  const { likes, isLiked, toggleLike } = useBlogInteractions(postId);
  const [isShareModalOpen, setIsShareModalOpen] = React.useState(false);

  return (
    <div className="flex items-center gap-4 my-8">
      <button
        onClick={toggleLike}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
          isLiked 
            ? 'bg-red-50 text-red-600' 
            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
        }`}
      >
        <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
        <span>{likes}</span>
      </button>

      <button
        onClick={() => setIsShareModalOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
      >
        <Share2 className="w-5 h-5" />
        Partager
      </button>

      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
      />
    </div>
  );
}