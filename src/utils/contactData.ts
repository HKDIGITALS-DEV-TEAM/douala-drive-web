interface ReservationReason {
  value: string;
  label: string;
}

export const reservationReasons: ReservationReason[] = [
  {
    value: 'information',
    label: 'Demande d\'information'
  },
  {
    value: 'reservation',
    label: 'Réservation de véhicule'
  },
  {
    value: 'event',
    label: 'Réservation pour un événement'
  },
  {
    value: 'business',
    label: 'Partenariat entreprise'
  },
  {
    value: 'other',
    label: 'Autre demande'
  }
];