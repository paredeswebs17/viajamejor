import { useEffect, useRef } from 'react';

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
      comingSoon: true,
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
            <div
              key={dest.id}
              className="relative cursor-default"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gray-800/60" />

                <div className="absolute top-4 left-4">
                  <span className="text-2xl">{dest.badge}</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-gray-700/90 text-white text-sm md:text-base font-bold px-6 py-3 rounded-full uppercase tracking-[.15em]">
                    Próximamente
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl md:text-2xl text-white/70 leading-tight mb-1">
                    {dest.title}
                  </h3>
                  <p className="text-white/40 text-xs">
                    {dest.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizedDestinations;
