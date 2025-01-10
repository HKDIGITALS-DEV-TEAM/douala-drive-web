interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

export const faqData: FAQSection[] = [
  {
    title: "Réservations",
    items: [
      {
        question: "Comment puis-je réserver un véhicule ?",
        answer: "Vous pouvez réserver un véhicule directement sur notre site web en sélectionnant le véhicule de votre choix, ou en nous contactant par téléphone ou WhatsApp. Un acompte de 30% est requis pour confirmer votre réservation."
      },
      {
        question: "Quelle est la durée minimale de location ?",
        answer: "La durée minimale de location est de 24 heures. Pour des durées plus courtes, veuillez nous contacter directement pour discuter de vos besoins spécifiques."
      },
      {
        question: "Puis-je modifier ou annuler ma réservation ?",
        answer: "Oui, vous pouvez modifier ou annuler votre réservation jusqu'à 48 heures avant le début de la location. Des frais peuvent s'appliquer selon les conditions d'annulation."
      }
    ]
  },
  {
    title: "Conditions de Location",
    items: [
      {
        question: "Quels documents sont nécessaires pour louer un véhicule ?",
        answer: "Vous devez présenter un permis de conduire valide depuis plus de 2 ans, une pièce d'identité et un justificatif de domicile de moins de 3 mois."
      },
      {
        question: "Quel âge minimum faut-il avoir pour louer ?",
        answer: "L'âge minimum requis est de 21 ans avec un permis de conduire valide depuis au moins 2 ans."
      },
      {
        question: "La location inclut-elle l'assurance ?",
        answer: "Oui, tous nos véhicules sont couverts par une assurance tous risques. Une franchise reste à la charge du locataire en cas de sinistre responsable."
      }
    ]
  },
  {
    title: "Services et Options",
    items: [
      {
        question: "Les chauffeurs sont-ils inclus dans la location ?",
        answer: "Oui, tous nos services incluent un chauffeur professionnel pour assurer votre sécurité et votre confort."
      },
      {
        question: "Peut-on louer pour des événements spéciaux ?",
        answer: "Absolument ! Nous proposons des services spéciaux pour les mariages, cérémonies et événements professionnels avec des options de décoration sur demande."
      },
      {
        question: "Le carburant est-il inclus ?",
        answer: "Oui, le carburant est inclus dans nos tarifs pour tous les services de location avec chauffeur."
      }
    ]
  },
  {
    title: "Paiement",
    items: [
      {
        question: "Quels modes de paiement acceptez-vous ?",
        answer: "Nous acceptons les paiements par carte bancaire, virement bancaire et en espèces. Un acompte est requis à la réservation."
      },
      {
        question: "Y a-t-il une caution à verser ?",
        answer: "Non, aucune caution n'est requise pour nos services avec chauffeur. Le véhicule reste sous la responsabilité de notre chauffeur professionnel."
      },
      {
        question: "Proposez-vous des tarifs entreprise ?",
        answer: "Oui, nous proposons des tarifs préférentiels et des solutions sur mesure pour les entreprises avec possibilité de facturation mensuelle."
      }
    ]
  }
];