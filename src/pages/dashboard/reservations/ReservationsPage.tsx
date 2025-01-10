import React from 'react';
import ReservationsList from './components/ReservationsList';
import ReservationStats from './components/ReservationStats';
import ReservationCharts from './components/ReservationCharts';
import { useReservations } from '../../../hooks/useReservations';

export default function ReservationsPage() {
  const { reservations, stats, updateReservationStatus } = useReservations();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Suivi des réservations</h1>
      </div>

      <ReservationStats stats={stats} />
      <ReservationCharts reservations={reservations} />
      <ReservationsList 
        reservations={reservations}
        onUpdateStatus={updateReservationStatus}
      />
    </div>
  );
}