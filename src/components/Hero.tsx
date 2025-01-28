import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Vidéo en arrière-plan */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/presentation.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture de vidéo.
      </video>

      {/* Overlay noir pour le contraste */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenu du Hero */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Votre partenaire pour une expérience de transport
            <span className="text-primary"> haut de gamme</span> à Douala
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Découvrez notre flotte de véhicules premium et profitez d'un service
            d'exception
          </p>
          <Link
            to="/catalog"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-primary hover:bg-primary/90 transition-colors duration-200"
          >
            Voir nos véhicules
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
