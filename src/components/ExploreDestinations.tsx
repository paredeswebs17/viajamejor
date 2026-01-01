import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  image: string;
  url: string;
  badge?: string;
}

const ExploreDestinations = () => {
  const guides: Guide[] = [
    {
      id: 'budapest',
      title: 'Budapest en 4 Días',
      image: 'https://images.pexels.com/photos/73796/budapest-hungary-parliament-building-73796.jpeg',
      url: '/budapest-4-dias',
      badge: '🔥'
    },
    {
      id: 'london',
      title: 'Londres en 3 días',
      image: 'https://images.pexels.com/photos/5380087/pexels-photo-5380087.jpeg',
      url: '/londres-3-dias',
      badge: '🎡'
    },
    {
      id: 'prague',
      title: 'Praga en 3 días',
      image: 'https://images.pexels.com/photos/3046347/pexels-photo-3046347.jpeg',
      url: '/praga-3-dias',
      badge: '🏰'
    },
    {
      id: 'vienna',
      title: 'Viena en 3 días',
      image: 'https://images.pexels.com/photos/8568542/pexels-photo-8568542.jpeg',
      url: '/viena-3-dias',
      badge: '🎼'
    },
    {
      id: 'amsterdam',
      title: 'Ámsterdam en 3 días',
      image: 'https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg',
      url: '/amsterdam-3-dias',
      badge: '🚲'
    },
    {
      id: 'roma',
      title: 'Roma en 3 días',
      image: 'https://images.pexels.com/photos/6199223/pexels-photo-6199223.jpeg',
      url: '/roma-3-dias',
      badge: '🏛️'
    },
    {
      id: 'christmas',
      title: 'Mercados Navideños de Europa',
      image: 'https://images.pexels.com/photos/19361199/pexels-photo-19361199.jpeg',
      url: '/mercados-navidenos-europa',
      badge: '🎄'
    }
  ];

  return (
    <section className="relative py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Explora Destinos</h2>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Desliza para ver más →</p>
            <Link
              to="/guias"
              className="hidden sm:flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors group text-sm"
            >
              Ver todas
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pl-4 sm:pl-0 pb-4 scrollbar-hide snap-x snap-mandatory">
            {guides.map((guide, index) => (
              <Link
                key={guide.id}
                to={guide.url}
                className={`flex-shrink-0 w-64 sm:w-96 group snap-start ${index === guides.length - 1 ? 'pr-4 sm:pr-0' : ''}`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    {guide.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-2xl shadow-lg">
                          {guide.badge}
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-sky-200 transition-colors">
                        {guide.title}
                      </h3>
                      <div className="flex items-center text-white/90">
                        <span className="text-xs sm:text-sm font-medium">Ver guía completa</span>
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Link
          to="/guias"
          className="flex sm:hidden items-center justify-center text-sky-600 hover:text-sky-700 font-semibold transition-colors group mt-6"
        >
          Ver todas las guías
          <ChevronRight className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ExploreDestinations;
