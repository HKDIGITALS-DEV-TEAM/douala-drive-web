import React, { useState } from 'react';
import { Comment } from '../../types/blog';

interface CommentFormProps {
  onSubmit: (comment: Omit<Comment, 'id' | 'date'>) => void;
}

export default function CommentForm({ onSubmit }: CommentFormProps) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    onSubmit({
      author: name.trim(),
      content: content.trim(),
    });

    setName('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nom
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring focus:ring-[#FFD700] focus:ring-opacity-50"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
          Commentaire
        </label>
        <textarea
          id="comment"
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring focus:ring-[#FFD700] focus:ring-opacity-50"
          required
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded-md hover:bg-black/90 transition-colors"
      >
        Publier le commentaire
      </button>
    </form>
  );
}