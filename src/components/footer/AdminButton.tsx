import React from 'react';
import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminButton() {
  return (
    <Link
      to="/dashboard"
      className="inline-flex items-center text-sm text-gray-400 hover:text-primary transition-colors mt-4"
    >
      <Lock className="w-4 h-4 mr-2" />
      Administration
    </Link>
  );
}