import React from 'react';
import { Shield, Award, Clock, Wallet, Users, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Sécurité garantie',
    description: 'Véhicules régulièrement entretenus et chauffeurs professionnels formés pour votre sécurité.'
  },
  {
    icon: Award,
    title: 'Service premium',
    description: 'Une flotte de véhicules haut de gamme et un service client d\'exception.'
  },
  {
    icon: Clock,
    title: 'Disponibilité 24/7',
    description: 'Une équipe disponible à tout moment pour répondre à vos besoins.'
  },
  {
    icon: Wallet,
    title: 'Tarifs transparents',
    description: 'Des prix clairs et compétitifs, sans frais cachés.'
  },
  {
    icon: Users,
    title: 'Chauffeurs expérimentés',
    description: 'Des professionnels qualifiés connaissant parfaitement la ville.'
  },
  {
    icon: HeartHandshake,
    title: 'Service personnalisé',
    description: 'Des solutions adaptées à vos besoins spécifiques.'
  }
];

export default function WhyChooseUs() {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pourquoi nous choisir ?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Découvrez ce qui fait de Douala Drive votre partenaire de confiance
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group relative transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary/30 to-primary/10 opacity-0 blur group-hover:opacity-100 transition duration-300" />
              <div className="relative h-full bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-4" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}