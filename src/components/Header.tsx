import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              aria-label="Retour à l'accueil"
            >
              <img 
                src="https://doualadrive.com/wp-content/uploads/2024/12/cropped-logo-site-1.webp" 
                alt="Douala Drive Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </nav>
    </header>
  );
}