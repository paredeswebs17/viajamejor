import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
      badge: '🇲🇦',
      href: '/viajes-organizados/marruecos',
    }
  ];

  return (
    <section id="viajes-organizados" ref={sectionRef} className="relative py-20 md:py-28 bg-slate-50">
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
              to={dest.href}
              className="group relative block"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gray-900/40 transition-colors duration-300 group-hover:bg-gray-900/30" />

                <div className="absolute bottom-0 left-0 right-0 p-6 pt-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-2 drop-shadow-md">
                    {dest.title}
                  </h3>
                  <p className="text-white/90 text-base drop-shadow-sm">
                    {dest.subtitle}
                  </p>
                  <span className="inline-block mt-4 text-sm uppercase tracking-[.15em] text-white font-medium border-b border-white/50 pb-0.5 group-hover:border-white transition-colors drop-shadow-sm">
                    Ver rutas
                  </span>
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
