import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Bell } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function AdminHeader() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/logo.png"
              alt="Douala Drive Logo"
              className="h-8 w-auto"
            />
            <span className="ml-4 text-lg font-semibold text-gray-900">
              Administration
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Bell className="h-6 w-6" />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-500 hover:text-gray-700"
            >
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}