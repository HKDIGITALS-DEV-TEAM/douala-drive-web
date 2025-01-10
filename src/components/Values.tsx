import React from 'react';
import { Award, HeartHandshake, Clock, Shield } from 'lucide-react';

const values = [
  {
    name: 'Excellence',
    description: 'Une flotte premium avec chauffeurs professionnels qualifiés',
    icon: Award,
  },
  {
    name: 'Service client',
    description: 'Une équipe disponible 24/7 pour un service personnalisé',
    icon: HeartHandshake,
  },
  {
    name: 'Ponctualité',
    description: 'La garantie d\'un service précis et respectueux de votre temps',
    icon: Clock,
  },
  {
    name: 'Sécurité',
    description: 'Des chauffeurs expérimentés et une flotte entretenue régulièrement',
    icon: Shield,
  },
];

export default function Values() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos valeurs
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Ce qui nous distingue et fait notre fierté
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name} className="text-center">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-[#FFD700]/10">
                <value.icon className="h-8 w-8 text-[#FFD700]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-7 text-gray-900">
                {value.name}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}