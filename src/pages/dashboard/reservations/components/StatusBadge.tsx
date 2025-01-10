import React from 'react';
import { Reservation } from '../../../../types/reservation';

const statusConfig = {
  pending: {
    label: 'En attente',
    className: 'bg-yellow-100 text-yellow-800'
  },
  confirmed: {
    label: 'Confirmée',
    className: 'bg-blue-100 text-blue-800'
  },
  in_progress: {
    label: 'En cours',
    className: 'bg-green-100 text-green-800'
  },
  completed: {
    label: 'Terminée',
    className: 'bg-green-100 text-green-800'
  },
  cancelled: {
    label: 'Annulée',
    className: 'bg-red-100 text-red-800'
  }
};

interface StatusBadgeProps {
  status: Reservation['status'];
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${config.className}`}>
      {config.label}
    </span>
  );
}