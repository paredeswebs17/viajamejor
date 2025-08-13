import { Star, Users, MapPin } from 'lucide-react';
import { trackButtonClick } from '../utils/analytics';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="gradient-text">Viaja más, gasta menos.</span>
              <br />
              Consejos y herramientas para tu próxima aventura.
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Hola, somos tus compañeros de viajes. Te ayudamos a descubrir el mundo de forma inteligente, 
              ahorrando dinero y evitando los errores que nosotros ya cometimos. Aquí encontrarás todo lo que 
              necesitas para viajar como un experto.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  trackButtonClick('ver_consejos', 'hero_section');
                  document.getElementById('consejos')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary text-lg px-8 py-4 justify-center" 
                aria-label="Ver consejos de viaje"
              >
                Ver Mis Consejos de Viaje
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6 text-sky-500" />
                </div>
                <span className="text-2xl font-bold text-gray-900">40+</span>
                <span className="text-sm text-gray-600">Países visitados</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-emerald-500" />
                </div>
                <span className="text-2xl font-bold text-gray-900">5K+</span>
                <span className="text-sm text-gray-600">Lectores mensuales</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-orange-500" />
                </div>
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <span className="text-sm text-gray-600">Valoración</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Paisaje tropical paradisíaco con aguas cristalinas"
                className="w-full h-full object-cover" 
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-900">Viajando ahora mismo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;