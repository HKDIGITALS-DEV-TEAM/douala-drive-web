import { useComments } from '../../hooks/useComments';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

interface CommentsProps {
  postId: string;
}

export default function Comments({ postId }: CommentsProps) {
  const { comments, addComment } = useComments(postId);

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Commentaires ({comments.length})
      </h2>
      
      <CommentForm onSubmit={addComment} />
      <CommentList comments={comments} />
    </div>
  );
}