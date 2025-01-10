import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';

const categories = [
  {
    name: 'Location en ville',
    price: '65 000 FCFA',
    description: 'Pour vos déplacements urbains en toute élégance',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1632245889029-e406faaa34cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Location hors ville',
    price: '80 000 FCFA',
    description: 'Explorez le Cameroun dans le plus grand confort',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Évènements',
    price: '85 000 FCFA',
    description: 'Rendez vos occasions spéciales encore plus mémorables',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Categories() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos services de location
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Des solutions adaptées à tous vos besoins
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.name}
                  </h3>
                  <category.icon className="h-6 w-6 text-[#FFD700]" />
                </div>
                <p className="mt-2 text-gray-600">{category.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-semibold text-[#FFD700]">
                    À partir de {category.price}/jour
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-black hover:text-[#FFD700] transition-colors duration-200"
                  >
                    En savoir plus →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}