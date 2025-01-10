import React from 'react';
import { Vehicle } from '../../../../types/vehicle';

interface StatusSelectProps {
  value: Vehicle['status'];
  onChange: (status: Vehicle['status']) => void;
  className?: string;
}

const statusOptions = [
  { value: 'available', label: 'Disponible' },
  { value: 'rented', label: 'En location' },
  { value: 'maintenance', label: 'En maintenance' },
  { value: 'reserved', label: 'Réservé' },
  { value: 'coming_soon', label: 'Bientôt disponible' }
];

export default function StatusSelect({ value, onChange, className = '' }: StatusSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Vehicle['status'])}
      className={`rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 ${className}`}
    >
      {statusOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}