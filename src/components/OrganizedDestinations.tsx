import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const OrganizedDestinations = () => {
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

  const destinations = [
    {
      id: 'morocco',
      title: 'Marruecos Organizado',
      subtitle: 'Guía local · Todo en español',
      image: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg',
      url: '/marruecos-organizado',
      badge: '🇲🇦',
      rating: '★ 5.0',
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="reveal mb-12">
          <span className="text-[10px] uppercase tracking-[.25em] text-teal-600 font-medium">
            Viajes a medida
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mt-3 tracking-tight">
            Destinos organizados
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-light mt-4">
            Con guía local · Todo en español
          </p>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              to={dest.url}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="text-2xl">{dest.badge}</span>
                </div>

                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                  <span className="bg-teal-600 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-[.14em]">
                    Organizado
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm text-amber-700 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    {dest.rating} TripAdvisor
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl md:text-2xl text-white leading-tight mb-1">
                    {dest.title}
                  </h3>
                  <p className="text-white/60 text-xs mb-3">
                    {dest.subtitle}
                  </p>
                  <div className="flex items-center text-white/80 group-hover:text-teal-300 transition-colors">
                    <span className="text-xs font-medium uppercase tracking-wider">Ver rutas</span>
                    <ChevronRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizedDestinations;
