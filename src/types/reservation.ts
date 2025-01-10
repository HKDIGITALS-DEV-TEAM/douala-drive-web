export type ReservationStatus = 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';

export interface Reservation {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  vehicleId: string;
  vehicleName: string;
  startDate: string;
  endDate: string;
  status: ReservationStatus;
  totalAmount: string;
  paymentStatus: 'pending' | 'partial' | 'completed';
  notes?: string;
  createdAt: string;
}