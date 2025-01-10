import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Reservation } from '../../../../types/reservation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface ReservationChartsProps {
  reservations: Reservation[];
}

export default function ReservationCharts({ reservations }: ReservationChartsProps) {
  // Données pour le graphique en beignet des statuts
  const statusData = {
    labels: ['En attente', 'Confirmées', 'En cours', 'Terminées', 'Annulées'],
    datasets: [
      {
        data: [
          reservations.filter(r => r.status === 'pending').length,
          reservations.filter(r => r.status === 'confirmed').length,
          reservations.filter(r => r.status === 'in_progress').length,
          reservations.filter(r => r.status === 'completed').length,
          reservations.filter(r => r.status === 'cancelled').length,
        ],
        backgroundColor: [
          'rgba(234, 179, 8, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgba(234, 179, 8, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Données pour le graphique en barres des réservations par véhicule
  const vehicleData = {
    labels: Array.from(new Set(reservations.map(r => r.vehicleName))),
    datasets: [
      {
        label: 'Réservations par véhicule',
        data: Array.from(new Set(reservations.map(r => r.vehicleName))).map(
          vehicle => reservations.filter(r => r.vehicleName === vehicle).length
        ),
        backgroundColor: 'rgba(227, 181, 5, 0.8)',
        borderColor: 'rgba(227, 181, 5, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          État des réservations
        </h3>
        <div className="h-[300px] flex items-center justify-center">
          <Doughnut
            data={statusData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'bottom',
                },
              },
            }}
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Réservations par véhicule
        </h3>
        <div className="h-[300px]">
          <Bar
            data={vehicleData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    stepSize: 1,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}