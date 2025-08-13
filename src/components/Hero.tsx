import React from 'react';
import { ArrowRight, Star, Users, MapPin } from 'lucide-react';
import { trackButtonClick } from '../utils/analytics';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    trackButtonClick('hero_cta', 'hero_section');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-sky-500 via-sky-600 to-emerald-500 text-white pt-24 pb-8 sm:pb-12 max-h-[50vh] sm:max-h-none">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
            <Star className="h-3 w-3 mr-2" />
            <span className="text-xs font-medium">40+ países visitados</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">
            Viaja <span className="text-amber-300">más</span>,
            <br />
            gasta <span className="text-emerald-300">menos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
            Consejos prácticos, herramientas probadas y trucos reales para viajar 
            inteligente con cualquier presupuesto.
          </p>

          {/* Stats - Hidden on mobile */}
          <div className="hidden sm:flex flex-wrap justify-center gap-4 mb-6 text-sm">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
              <Users className="h-3 w-3 mr-2" />
              <span>+50k lectores</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
              <MapPin className="h-3 w-3 mr-2" />
              <span>40+ países</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
              <Star className="h-3 w-3 mr-2" />
              <span>Ahorro: 400€</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection('consejos')}
              className="btn-primary text-base px-6 py-3 justify-center"
            >
              <span>Ver consejos de viaje</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
            
            <button
              onClick={() => scrollToSection('recomendaciones')}
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              Herramientas que uso
            </button>
          </div>
        </div>
      </div>

      {/* Wave Bottom - Smaller on mobile */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-6 sm:h-12 fill-gray-50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;