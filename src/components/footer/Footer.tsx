import React from 'react';
import ContactInfo from './ContactInfo';
import LegalLinks from './LegalLinks';
import OpeningHours from './OpeningHours';
import SocialLinks from './SocialLinks';
import AdminButton from './AdminButton';
import HKDigitalsCredit from './HKDigitalsCredit';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <ContactInfo />
          <OpeningHours />
          <LegalLinks />
          <SocialLinks />
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Douala Drive. Tous droits réservés.
          </p>
          <AdminButton />
          <HKDigitalsCredit />
        </div>
      </div>
    </footer>
  );
}