import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LegalLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Informations légales</h3>
      <ul className="space-y-3">
        <li>
          <Link to="/cgv" className="flex items-center hover:text-[#FFD700]">
            <FileText className="w-5 h-5 mr-2 text-[#FFD700]" />
            Conditions générales de vente
          </Link>
        </li>
        <li>
          <Link to="/cgu" className="flex items-center hover:text-[#FFD700]">
            <FileText className="w-5 h-5 mr-2 text-[#FFD700]" />
            Conditions générales d'utilisation
          </Link>
        </li>
        <li>
          <Link to="/privacy" className="flex items-center hover:text-[#FFD700]">
            <FileText className="w-5 h-5 mr-2 text-[#FFD700]" />
            Politique de confidentialité
          </Link>
        </li>
        <li>
          <Link to="/faq" className="flex items-center hover:text-[#FFD700]">
            <FileText className="w-5 h-5 mr-2 text-[#FFD700]" />
            FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
}