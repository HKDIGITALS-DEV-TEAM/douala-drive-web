import React from 'react';
import { Vehicle } from '../../../../types/vehicle';

const statusConfig = {
  available: {
    label: 'Disponible',
    className: 'bg-green-100 text-green-800'
  },
  rented: {
    label: 'En location',
    className: 'bg-blue-100 text-blue-800'
  },
  maintenance: {
    label: 'En maintenance',
    className: 'bg-red-100 text-red-800'
  },
  reserved: {
    label: 'Réservé',
    className: 'bg-yellow-100 text-yellow-800'
  },
  coming_soon: {
    label: 'Bientôt disponible',
    className: 'bg-purple-100 text-purple-800'
  }
};

interface StatusBadgeProps {
  status: Vehicle['status'];
  className?: string;
}

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${config.className} ${className}`}>
      {config.label}
    </span>
  );
}