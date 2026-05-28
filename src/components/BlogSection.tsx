import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

interface BlogSectionProps {
  showTitle?: boolean;
  onArticleSelect: (articleId: string) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ showTitle = true }) => {
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

  const articles = [
    {
      id: 'travel-essentials',
      title: '8 objetos imprescindibles para tu próximo viaje',
      excerpt: 'La mochila perfecta, adaptadores universales, power banks que duran...',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '12 min',
      category: 'Equipaje',
      featured: true,
      savings: 'Ahorra 40%',
      url: '/equipaje/8-objetos-imprescindibles',
      views: '45.2k'
    },
    {
      id: 'cheap-flights',
      title: 'Cómo encontrar vuelos baratos: 10 trucos infalibles',
      excerpt: 'Skyscanner, fechas flexibles, VPN y más secretos para conseguir vuelos...',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min',
      category: 'Vuelos',
      savings: 'Ahorra 300€+',
      url: '/vuelos/vuelos-baratos',
      views: '67.3k'
    },
    {
      id: 'accommodation',
      title: 'Booking vs Airbnb vs Hostelworld',
      excerpt: 'Comparativa real de las tres plataformas que uso...',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min',
      category: 'Alojamiento',
      featured: true,
      savings: 'Hasta 50% menos',
      url: '/alojamiento/booking-vs-airbnb',
      views: '32.1k'
    },
    {
      id: 'travel-cards',
      title: 'Mejores tarjetas para viajar sin comisiones',
      excerpt: 'Revolut, N26, Wise... Comparativa completa para no pagar ni un euro extra...',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '9 min',
      category: 'Finanzas',
      savings: '0€ comisiones',
      url: '/finanzas/tarjetas-sin-comisiones',
      views: '28.7k'
    },
    {
      id: 'cheap-destinations',
      title: 'Destinos baratos para 2025: 15 favoritos',
      excerpt: 'Países increíbles con presupuestos detallados. Albania, Vietnam, Georgia...',
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '10 min',
      category: 'Destinos',
      savings: '20-30€/día',
      url: '/destinos/paises-baratos-2025',
      views: '51.8k'
    },
    {
      id: 'travel-insurance',
      title: 'Seguro de viaje: por qué uso IATI',
      excerpt: 'Mi experiencia con una emergencia médica de 3.000€ en Tailandia...',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min',
      category: 'Seguros',
      savings: '5% descuento',
      url: '/seguros/iati-experiencia',
      views: '19.4k'
    }
  ];

  return (
    <section ref={sectionRef} id="consejos" className="relative py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {showTitle && (
          <div className="reveal mb-10">
            <span className="text-[10px] uppercase tracking-[.25em] text-teal-600 font-medium">
              Recursos esenciales
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mt-3 tracking-tight">
              Empieza por aquí
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-light mt-3 max-w-lg">
              Artículos probados para ahorrar en cada aspecto del viaje
            </p>
          </div>
        )}

        <div className="reveal">
          <div className="flex overflow-x-auto gap-5 pb-4 scrollbar-hide snap-x snap-mandatory -mx-6 px-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={article.url}
                className="flex-shrink-0 w-64 sm:w-72 group snap-start"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src={article.image}
                    alt={`${article.title} - ${article.category}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                  {article.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-900 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        <Star size={10} className="text-amber-500" />
                        Destacado
                      </span>
                    </div>
                  )}

                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-lg md:text-xl text-white leading-tight mb-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-teal-300 text-xs font-semibold">
                        {article.savings}
                      </span>
                      <div className="flex items-center text-white/70 group-hover:text-teal-300 transition-colors">
                        <span className="text-xs font-medium uppercase tracking-wider">Leer</span>
                        <ArrowRight size={12} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
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

export default BlogSection;
