import React from 'react';
import { ArrowRight, Star, Users, MapPin } from 'lucide-react';
import { trackButtonClick } from '../utils/analytics';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    trackButtonClick('hero_cta', 'hero_section');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gray-50 pt-20 pb-6 max-h-[40vh] sm:max-h-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Compact title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">
            Viaja <span className="text-sky-600">más</span>, gasta <span className="text-emerald-600">menos</span>
          </h1>

          {/* Simple subtitle */}
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            Consejos y recursos para tu próxima aventura
          </p>

          {/* Stats - Hidden on mobile */}
          <div className="hidden sm:flex flex-wrap justify-center gap-3 mb-4 text-sm">
            <div className="flex items-center bg-white rounded-lg px-3 py-1 shadow-sm">
              <Users className="h-3 w-3 mr-1 text-sky-500" />
              <span className="text-gray-700">+50k lectores</span>
            </div>
            <div className="flex items-center bg-white rounded-lg px-3 py-1 shadow-sm">
              <Star className="h-3 w-3 mr-1 text-amber-500" />
              <span className="text-gray-700">+244k vistas</span>
            </div>
            <div className="flex items-center bg-white rounded-lg px-3 py-1 shadow-sm">
              <MapPin className="h-3 w-3 mr-1 text-emerald-500" />
              <span className="text-gray-700">40+ países</span>
            </div>
          </div>

          {/* Compact CTA */}
          <button
            onClick={() => scrollToSection('consejos')}
            className="bg-sky-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center space-x-2 mx-auto"
          >
            <span>Ver consejos</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;