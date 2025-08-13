import React from 'react';
import { ArrowRight, Star, Users, MapPin } from 'lucide-react';
import { trackButtonClick } from '../utils/analytics';

const Hero = () => {
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 sm:py-12 max-h-[50vh] sm:max-h-none">
    trackButtonClick('hero_cta', 'hero_section');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
  return (
    <section className="relative bg-gradient-to-br from-sky-500 via-sky-600 to-emerald-500 text-white pt-24 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
            <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">40+ países visitados</span>
                className="btn-primary text-base px-6 py-3 justify-center"

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Viaja <span className="text-amber-300">más</span>,
            <br />
            <div className="mt-6 hidden sm:grid grid-cols-3 gap-4 text-center">
          </h1>
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center mb-1">
                  <c className="h-4 w-4 text-sky-500" />
          <p className="text-xl sm:text-2xl text-sky-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                <span className="text-lg font-bold text-gray-900">40+</span>
            inteligente con cualquier presupuesto.
          </p>

                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mb-1">
                  <d className="h-4 w-4 text-emerald-500" />
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-lg font-bold text-gray-900">5K+</span>
              <span>+50k lectores</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-1">
                  <m className="h-4 w-4 text-orange-500" />
            </div>
                <span className="text-lg font-bold text-gray-900">4.9</span>
              <Star className="h-4 w-4 mr-2" />
              <span>Ahorro promedio: 400€</span>
            </div>
          </div>

          {/* CTAs */}
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
            <button
              onClick={() => scrollToSection('consejos')}
              className="bg-white text-sky-600 font-semibold px-8 py-4 rounded-xl hover:bg-sky-50 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Ver consejos de viaje</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-lg shadow-md">
              onClick={() => scrollToSection('recomendaciones')}
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              Herramientas que uso
            </button>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 fill-gray-50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;