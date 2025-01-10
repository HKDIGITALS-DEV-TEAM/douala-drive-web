import { useState, useEffect } from 'react';
import { Reservation } from '../types/reservation';

// Données de démonstration
const mockReservations: Reservation[] = [
  {
    id: '1',
    clientName: 'Jean Dupont',
    clientPhone: '+237 600000000',
    clientEmail: 'jean@example.com',
    vehicleId: '1',
    vehicleName: 'GMC Sierra',
    startDate: '2024-03-20',
    endDate: '2024-03-22',
    status: 'confirmed',
    totalAmount: '160 000 FCFA',
    paymentStatus: 'partial',
    createdAt: '2024-03-15'
  },
  // Ajoutez d'autres réservations de démonstration ici
];

export function useReservations() {
  const [reservations, setReservations] = useState<Reservation[]>(mockReservations);

  const stats = {
    pending: reservations.filter(r => r.status === 'pending').length,
    confirmed: reservations.filter(r => r.status === 'confirmed').length,
    in_progress: reservations.filter(r => r.status === 'in_progress').length,
    completed: reservations.filter(r => r.status === 'completed').length,
    cancelled: reservations.filter(r => r.status === 'cancelled').length,
    total: reservations.length
  };

  const updateReservationStatus = (id: string, status: Reservation['status']) => {
    setReservations(prev => 
      prev.map(reservation => 
        reservation.id === id ? { ...reservation, status } : reservation
      )
    );
  };

  return {
    reservations,
    stats,
    updateReservationStatus
  };
}