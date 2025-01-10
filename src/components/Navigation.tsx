import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../utils/constants';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const location = useLocation();

  const handleClick = () => {
    setIsMenuOpen(false);
    if (location.pathname === window.location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {navigationLinks.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={handleClick}
            className="text-white hover:text-primary transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black/90 md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigationLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleClick}
                className="block px-3 py-2 text-white hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}