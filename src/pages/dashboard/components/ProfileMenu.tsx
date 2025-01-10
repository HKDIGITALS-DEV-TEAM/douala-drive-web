import { useState, useRef, useEffect } from "react";
import { User, Settings, LogOut } from "lucide-react";
import ProfileForm from "./profile/ProfileForm";
import useAuthStore from "../../../libs/auth/store";
import { useUserProfile } from "../../../libs/auth/queries";
import { keycloak } from "../../../libs/auth/keycloak";

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { user, setUser, clearToken } = useAuthStore();
  const { userProfile, isLoading } = useUserProfile();

  // Met à jour le store avec les infos utilisateur si elles changent
  useEffect(() => {
    if (!user && userProfile) {
      setUser(userProfile);
    }
  }, [user, userProfile, setUser]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    clearToken(); // Supprime le token du store
    keycloak.logoutKeycloak(); // Déconnecte de Keycloak
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
      >
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <User className="w-5 h-5" />
        </div>
        <span className="hidden md:block font-medium">
          {isLoading ? "Chargement..." : user?.name || "Utilisateur"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          {/* Paramètres */}
          <button
            onClick={() => {
              setShowProfileForm(true);
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Settings className="w-4 h-4 mr-3" />
            Paramètres
          </button>

          {/* Déconnexion */}
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Déconnexion
          </button>
        </div>
      )}

      {showProfileForm && (
        <ProfileForm onClose={() => setShowProfileForm(false)} />
      )}
    </div>
  );
}
