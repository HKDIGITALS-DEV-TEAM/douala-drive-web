import { MapPin, Phone, Mail } from "lucide-react";
import { useConfigStore } from "../../libs/config/store";

export default function ContactInfo() {
  const { configuration } = useConfigStore();

  // Informations par défaut en cas d'absence de configuration
  const defaultContact = {
    address: "Douala, Cameroun",
    phone: "+237 670 45 90 29",
    email: "contact@doualadrive.com",
  };

  const contactInfo = configuration || defaultContact;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact</h3>
      <ul className="space-y-3">
        <li className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-primary" />
          <span>{contactInfo.address}</span>
        </li>
        <li className="flex items-center">
          <Phone className="w-5 h-5 mr-2 text-primary" />
          <a href={`tel:${contactInfo.phone}`} className="hover:text-primary">
            {contactInfo.phone}
          </a>
        </li>
        <li className="flex items-center">
          <Mail className="w-5 h-5 mr-2 text-primary" />
          <a
            href={`mailto:${contactInfo.email}`}
            className="hover:text-primary"
          >
            {contactInfo.email}
          </a>
        </li>
      </ul>
    </div>
  );
}
