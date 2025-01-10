import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
      <div className="flex space-x-4">
        <a
          href="#"
          className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}