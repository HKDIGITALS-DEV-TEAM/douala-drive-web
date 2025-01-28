import { Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlissExperienceCTA() {
  return (
    <div className="relative bg-gradient-to-r from-[#FFD700]/10 via-white to-[#FFD700]/10 py-24">
      <div className="absolute inset-0 opacity-10 bg-bliss-pattern bg-cover" />{" "}
      {/* Ajoutez un motif subtil ou un gradient personnalisé */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Offrez-vous un séjour inoubliable avec{" "}
            <span className="text-[#FFD700]">Bliss Experience</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Combinez la location de nos véhicules haut de gamme avec des
            appartements de luxe proposés par notre partenaire pour une
            expérience unique.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center md:flex-row md:justify-between gap-8">
          {/* Logo du partenaire */}
          <div className="flex-shrink-0">
            <img
              src="/bliss-logo.jpg"
              alt="Bliss Experience Logo"
              className="w-48 h-auto mx-auto md:mx-0"
            />
          </div>

          {/* Détails et CTA */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Découvrez des appartements de luxe à Douala
            </h3>
            <p className="text-gray-600 mb-4">
              Avec Bliss Experience, vous bénéficiez d’un service premium pour
              un séjour confortable et inoubliable.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#FFD700]" />
                <a
                  href="mailto:blissexperiences@outlook.com"
                  className="text-gray-700 hover:underline"
                >
                  blissexperiences@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#FFD700]" />
                <a
                  href="tel:+237656950171"
                  className="text-gray-700 hover:underline"
                >
                  +237 6 56 95 01 71
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="https://blissexperiencestays.bookeddirectly.com"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#FFD700] hover:bg-[#FFD700]/90 transition-colors duration-200"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
