import React from 'react';
import { Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';

interface ReservationStats {
  pending: number;
  confirmed: number;
  in_progress: number;
  completed: number;
  cancelled: number;
  total: number;
}

interface ReservationStatsProps {
  stats: ReservationStats;
}

export default function ReservationStats({ stats }: ReservationStatsProps) {
  const cards = [
    {
      name: 'En attente',
      value: stats.pending,
      icon: Clock,
      color: 'text-yellow-600',
      bg: 'bg-yellow-100'
    },
    {
      name: 'Confirmées',
      value: stats.confirmed,
      icon: Calendar,
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    },
    {
      name: 'En cours',
      value: stats.in_progress,
      icon: Calendar,
      color: 'text-green-600',
      bg: 'bg-green-100'
    },
    {
      name: 'Terminées',
      value: stats.completed,
      icon: CheckCircle,
      color: 'text-green-600',
      bg: 'bg-green-100'
    },
    {
      name: 'Annulées',
      value: stats.cancelled,
      icon: XCircle,
      color: 'text-red-600',
      bg: 'bg-red-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {cards.map((card) => (
        <div key={card.name} className="bg-white overflow-hidden rounded-lg border border-gray-200">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className={`p-3 ${card.bg} rounded-lg`}>
                  <card.icon className={`h-6 w-6 ${card.color}`} />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {card.name}
                  </dt>
                  <dd className="text-2xl font-semibold text-gray-900">
                    {card.value}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}