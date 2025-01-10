import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Car } from 'lucide-react';

const navigation = [
  { name: 'Vue d\'ensemble', href: '/dashboard', icon: LayoutDashboard },
  // { name: 'Réservations', href: '/dashboard/reservations', icon: Calendar },
  { name: 'Articles', href: '/dashboard/articles', icon: FileText },
  { name: 'Véhicules', href: '/dashboard/vehicles', icon: Car },
];

export default function DashboardSidebar() {
  return (
    <nav className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)]">
      <div className="p-4">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-primary text-black'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}