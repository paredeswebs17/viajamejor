import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  image: string;
  url: string;
  badge?: string;
  organized?: boolean;
}

const ExploreDestinations = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
      id: 'athens',
      title: 'Atenas en 3 días',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg',
      url: '/atenas-3-dias',
      badge: '🏛️'
    },
    {
      id: 'christmas',
      title: 'Mercados Navideños de Europa',
      image: 'https://images.pexels.com/photos/19361199/pexels-photo-19361199.jpeg',
      url: '/mercados-navidenos-europa',
      badge: '🎄'
    },
    {
      id: 'morocco-organizado',
      title: 'Marruecos Organizado',
      image: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg',
      url: '/marruecos-organizado',
      badge: '🇲🇦',
      organized: true,
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal mb-10">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[.25em] text-teal-600 font-medium">
                Guías de viaje
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mt-3 tracking-tight">
                Explora destinos
              </h2>
              <p className="text-gray-500 text-sm md:text-base font-light mt-3">
                Itinerarios completos día a día
              </p>
            </div>
            <Link
              to="/guias"
              className="hidden sm:inline-flex items-center gap-1.5 text-teal-600 hover:text-teal-700 text-xs font-semibold uppercase tracking-[.12em] transition-colors"
            >
              Ver todas
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="reveal">
          <div className="relative -mx-6 lg:-mx-10">
            <div className="flex overflow-x-auto gap-5 pb-4 scrollbar-hide snap-x snap-mandatory scroll-pl-6 lg:scroll-pl-10">
              <div className="flex-shrink-0" style={{ minWidth: '4px' }} aria-hidden="true" />
              {guides.map((guide) => (
                <Link
                  key={guide.id}
                  to={guide.url}
                  className="flex-shrink-0 w-64 sm:w-72 group snap-start"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {guide.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="text-2xl">{guide.badge}</span>
                      </div>
                    )}

                    {guide.organized && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-teal-600 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-[.14em]">
                          Organizado
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-serif text-lg md:text-xl text-white leading-tight mb-2">
                        {guide.title}
                      </h3>
                      <div className="flex items-center text-white/80 group-hover:text-teal-300 transition-colors">
                        <span className="text-xs font-medium uppercase tracking-wider">
                          {guide.organized ? 'Ver rutas' : 'Ver guía'}
                        </span>
                        <ChevronRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="flex-shrink-0" style={{ minWidth: '4px' }} aria-hidden="true" />
            </div>
          </div>
        </div>

        <Link
          to="/guias"
          className="flex sm:hidden items-center justify-center gap-1.5 text-teal-600 hover:text-teal-700 font-semibold transition-colors mt-8 text-sm uppercase tracking-wider"
        >
          Ver todas las guías
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default ExploreDestinations;
