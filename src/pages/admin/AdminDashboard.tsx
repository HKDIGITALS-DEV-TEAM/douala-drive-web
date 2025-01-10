import { Car, MessageSquare, FileText, Users, TrendingUp, Calendar } from 'lucide-react';
import StatsCard from '../../components/admin/dashboard/StatsCard';
import RecentActivities from '../../components/admin/dashboard/RecentActivities';
import VehicleStatusChart from '../../components/admin/dashboard/VehicleStatusChart';
import ReservationChart from '../../components/admin/dashboard/ReservationChart';

const stats = [
  { 
    name: 'Véhicules', 
    value: '6', 
    change: '+2 ce mois',
    trend: 'up',
    icon: Car 
  },
  { 
    name: 'Messages', 
    value: '12', 
    change: '+5 aujourd\'hui',
    trend: 'up',
    icon: MessageSquare 
  },
  { 
    name: 'Articles', 
    value: '3', 
    change: '+1 cette semaine',
    trend: 'up',
    icon: FileText 
  },
  { 
    name: 'Visiteurs', 
    value: '1.2k', 
    change: '+15% ce mois',
    trend: 'up',
    icon: Users 
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Tableau de bord</h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Calendar className="w-4 h-4 inline-block mr-2" />
            Derniers 30 jours
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-black/90">
            <TrendingUp className="w-4 h-4 inline-block mr-2" />
            Générer un rapport
          </button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.name} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            État des véhicules
          </h2>
          <VehicleStatusChart />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Réservations mensuelles
          </h2>
          <ReservationChart />
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Activités récentes
          </h2>
          <RecentActivities />
        </div>
      </div>
    </div>
  );
}