import React from 'react';
import { Comment } from '../../types/blog';
import { formatDate } from '../../utils/dateUtils';

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <p className="text-gray-500 italic">Aucun commentaire pour le moment.</p>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">{comment.author}</span>
            <span className="text-sm text-gray-500">{formatDate(comment.date)}</span>
          </div>
          <p className="text-gray-700">{comment.content}</p>
        </div>
      ))}
    </div>
  );
}