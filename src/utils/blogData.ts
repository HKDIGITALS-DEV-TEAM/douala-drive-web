import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Les avantages de la location de voiture avec chauffeur',
    excerpt: 'Découvrez pourquoi opter pour un service de location avec chauffeur peut transformer vos déplacements.',
    content: `
      <p>La location de voiture avec chauffeur est devenue une solution de plus en plus prisée pour les déplacements professionnels et personnels. Voici pourquoi :</p>

      <h2>1. Confort et tranquillité d'esprit</h2>
      <p>Avec un chauffeur professionnel aux commandes, vous pouvez vous détendre, travailler ou simplement profiter du voyage. Plus besoin de vous soucier de la circulation ou du stationnement.</p>

      <h2>2. Sécurité optimale</h2>
      <p>Nos chauffeurs sont des professionnels expérimentés qui connaissent parfaitement les routes et les conditions de circulation locales. Ils suivent régulièrement des formations pour garantir votre sécurité.</p>

      <h2>3. Flexibilité et personnalisation</h2>
      <p>Le service s'adapte à vos besoins : horaires flexibles, itinéraires sur mesure, et véhicules adaptés à vos préférences.</p>

      <h2>4. Image professionnelle</h2>
      <p>Pour vos rendez-vous d'affaires, arriver dans une voiture conduite par un chauffeur professionnel renforce votre image et votre crédibilité.</p>
    `,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    author: 'Jean Dupont',
    date: '15 Mars 2024',
    category: 'Conseils',
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'Guide complet pour choisir le véhicule idéal',
    excerpt: 'Comment sélectionner le véhicule parfait pour vos besoins spécifiques ?',
    content: `
      <p>Choisir le bon véhicule est essentiel pour une expérience de location réussie. Voici notre guide pour vous aider à faire le meilleur choix :</p>

      <h2>1. Définissez vos besoins</h2>
      <ul>
        <li>Nombre de passagers</li>
        <li>Type de déplacement (ville, route, tout-terrain)</li>
        <li>Durée de location</li>
        <li>Budget disponible</li>
      </ul>

      <h2>2. Types de véhicules</h2>
      <p>Chaque catégorie de véhicule a ses avantages :</p>
      <ul>
        <li>SUV : confort et polyvalence</li>
        <li>Pick-up : robustesse et capacité de chargement</li>
        <li>Berline : élégance et efficacité</li>
      </ul>

      <h2>3. Équipements essentiels</h2>
      <p>Vérifiez la présence des équipements importants pour votre confort et votre sécurité.</p>
    `,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    author: 'Marie Martin',
    date: '10 Mars 2024',
    category: 'Guide',
    readTime: '7 min'
  },
  {
    id: '3',
    title: 'Les meilleures destinations autour de Douala',
    excerpt: 'Explorez les plus beaux endroits autour de Douala en toute sérénité.',
    content: `
      <p>Douala regorge de destinations magnifiques à explorer. Voici notre sélection des meilleurs endroits à visiter :</p>

      <h2>1. Kribi</h2>
      <p>Célèbre pour ses plages de sable fin et ses chutes de la Lobé, Kribi est l'endroit idéal pour un week-end détente.</p>

      <h2>2. Limbé</h2>
      <p>Avec son jardin botanique et ses plages de sable noir, Limbé offre un dépaysement total à seulement quelques heures de Douala.</p>

      <h2>3. Mont Cameroun</h2>
      <p>Pour les amateurs de randonnée, le Mont Cameroun propose des vues spectaculaires et une expérience unique.</p>

      <h2>Conseils de voyage</h2>
      <ul>
        <li>Planifiez votre itinéraire à l'avance</li>
        <li>Prévoyez des pauses régulières</li>
        <li>Emportez de l'eau et des snacks</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1421&q=80',
    author: 'Paul Kamga',
    date: '5 Mars 2024',
    category: 'Voyage',
    readTime: '6 min'
  }
];