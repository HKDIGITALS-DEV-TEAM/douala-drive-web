import { Bell } from "lucide-react";
import ProfileMenu from "./ProfileMenu";

export default function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-sm mt-2"
            >
              <img
                src="/logo.png"
                alt="Douala Drive Logo"
                className="h-8 w-auto"
              />
            </a>
            <span className="ml-4 text-lg font-semibold text-gray-900">
              Tableau de bord
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Bell className="h-6 w-6" />
            </button>
            <ProfileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
