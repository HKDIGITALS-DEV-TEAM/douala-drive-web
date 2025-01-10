import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Reservation } from '../../../../types/reservation';
import StatusBadge from './StatusBadge';
import StatusSelect from './StatusSelect';
import { formatDate } from '../../../../utils/dateUtils';

interface ReservationsListProps {
  reservations: Reservation[];
  onUpdateStatus: (id: string, status: Reservation['status']) => void;
}

export default function ReservationsList({ reservations, onUpdateStatus }: ReservationsListProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Véhicule
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dates
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Montant
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-3 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {reservation.clientName}
                  </div>
                  <div className="text-sm text-gray-500">
                    {reservation.clientPhone}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {reservation.vehicleName}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center text-sm text-gray-900">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(reservation.startDate)}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {formatDate(reservation.endDate)}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {reservation.totalAmount}
                  </div>
                  <div className="text-sm text-gray-500">
                    {reservation.paymentStatus === 'completed' ? 'Payé' : 
                     reservation.paymentStatus === 'partial' ? 'Acompte versé' : 
                     'En attente'}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <StatusSelect
                    value={reservation.status}
                    onChange={(status) => onUpdateStatus(reservation.id, status)}
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-primary hover:text-primary/80">
                    Détails
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}