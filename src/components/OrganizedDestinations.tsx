import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const OrganizedDestinations = () => {
  const destinations = [
    {
      id: 'morocco',
      title: 'Marruecos Organizado',
      subtitle: 'Guía local · Todo en español',
      image: 'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg',
      url: '/marruecos-organizado',
      badge: '🇲🇦',
      rating: '★ 5.0',
    }
    // Aquí añadiremos Japón, Jordania, etc.
  ];

  return (
    <section className="relative py-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Destinos Organizados</h2>
          <p className="text-sm text-gray-600">Viajes a medida con guía local · Todo en español</p>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pl-4 sm:pl-0 pb-4 scrollbar-hide snap-x snap-mandatory">
            {destinations.map((dest, index) => (
              <Link
                key={dest.id}
                to={dest.url}
                className={`flex-shrink-0 w-64 sm:w-96 group snap-start ${index === destinations.length - 1 ? 'pr-4 sm:pr-0' : ''}`}
              >
                <div
                  className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                  style={{ boxShadow: '0 4px 20px rgba(194,84,48,0.1)' }}
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Badge emoji top-left */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-2xl shadow-lg">
                        {dest.badge}
                      </span>
                    </div>

                    {/* Badge ORGANIZADO top-right — diferencial */}
                    <div className="absolute top-4 right-4">
                      <span
                        className="text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                        style={{ background: '#C25430', letterSpacing: '0.12em', fontSize: '9px' }}
                      >
                        Organizado
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-14 right-4">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.92)', color: '#B08020' }}
                      >
                        {dest.rating} TripAdvisor
                      </span>
                    </div>

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-white mb-1 transition-colors duration-200"
                        style={{ fontFamily: "'Georgia', serif", fontWeight: 300, fontStyle: 'italic' }}
                      >
                        {dest.title}
                      </h3>
                      <p className="text-white/70 text-xs mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                        {dest.subtitle}
                      </p>
                      <div className="flex items-center" style={{ color: '#E8C87A' }}>
                        <span className="text-xs sm:text-sm font-medium">Ver rutas</span>
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Borde inferior terracota en hover */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(90deg, #C25430, #D4A838)' }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OrganizedDestinations;
