export const THEME = {
  colors: {
    primary: '#E3B505', // Mustard yellow
  }
} as const;

export const navigationLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Catalogue', href: '/catalog' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
] as const;