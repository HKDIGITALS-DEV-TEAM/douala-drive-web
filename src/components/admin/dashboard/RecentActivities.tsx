import React from 'react';
import { MessageSquare, Car, FileText } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'message',
    title: 'Nouveau message',
    description: 'Jean Dupont a envoyé une demande de réservation',
    time: 'Il y a 5 minutes',
    icon: MessageSquare,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 2,
    type: 'vehicle',
    title: 'Véhicule réservé',
    description: 'GMC Sierra réservé pour le weekend prochain',
    time: 'Il y a 2 heures',
    icon: Car,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 3,
    type: 'blog',
    title: 'Nouvel article',
    description: 'Article "Les avantages de la location" publié',
    time: 'Il y a 4 heures',
    icon: FileText,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
];

export default function RecentActivities() {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {activities.map((activity, activityIdx) => (
          <li key={activity.id}>
            <div className="relative pb-8">
              {activityIdx !== activities.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span className={`h-8 w-8 rounded-full ${activity.iconBg} flex items-center justify-center ring-8 ring-white`}>
                    <activity.icon className={`h-5 w-5 ${activity.iconColor}`} aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="mt-0.5 text-sm text-gray-500">{activity.description}</p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    {activity.time}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}