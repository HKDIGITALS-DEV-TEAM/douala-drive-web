import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import BlogList from '../../components/admin/blog/BlogList';
import BlogForm from '../../components/admin/blog/BlogForm';
import { useBlogManagement } from '../../hooks/useBlogManagement';
import { BlogPost } from '../../types/blog';

export default function AdminBlog() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const { posts, createPost, updatePost, deletePost } = useBlogManagement();

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
    setEditingPost(null);
  };

  const handleSave = async (post: BlogPost) => {
    if (editingPost) {
      await updatePost(post);
    } else {
      await createPost(post);
    }
    handleClose();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Gestion du blog</h1>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-black/90"
        >
          <Plus className="w-5 h-5 mr-2" />
          Nouvel article
        </button>
      </div>

      <BlogList 
        posts={posts} 
        onEdit={handleEdit}
        onDelete={deletePost}
      />

      {isFormOpen && (
        <BlogForm
          post={editingPost}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
}