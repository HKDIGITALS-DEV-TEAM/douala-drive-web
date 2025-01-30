import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-8">Nos coordonnées</h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div className="ml-4">
            <h3 className="font-medium">Adresse</h3>
            <p className="text-gray-600 mt-1">Douala, Cameroun</p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div className="ml-4">
            <h3 className="font-medium">Téléphone</h3>
            <a
              href="tel:+237670459029"
              className="text-gray-600 mt-1 hover:text-primary"
            >
              +237 6 70 45 90 29
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div className="ml-4">
            <h3 className="font-medium">Email</h3>
            <a
              href="mailto:contact@doualadrive.com"
              className="text-gray-600 mt-1 hover:text-primary"
            >
              contact@doualadrive.com
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div className="ml-4">
            <h3 className="font-medium">Horaires d'ouverture</h3>
            <div className="text-gray-600 mt-1">
              <p>Lundi - Samedi: 08:00 - 18:00</p>
              <p>Dimanche: Sur rendez-vous</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
