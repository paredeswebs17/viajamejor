import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogSectionProps {
  showTitle?: boolean;
  onArticleSelect: (articleId: string) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ showTitle = true }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

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
    <section id="consejos" className="relative py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showTitle && (
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Empieza por aquí</h2>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Desliza para ver más →</p>
              <div className="hidden lg:flex items-center space-x-2">
                <button
                  onClick={() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
                    }
                  }}
                  className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={() => {
                    if (scrollRef.current) {
                      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
                    }
                  }}
                  className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Scroll horizontal optimizado */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pl-4 sm:pl-0 pb-4 scrollbar-hide snap-x snap-mandatory" ref={scrollRef}>
            {articles.map((article, index) => (
              <Link
                key={article.id}
                to={article.url}
                className={`flex-shrink-0 w-64 sm:w-96 group snap-start ${index === articles.length - 1 ? 'pr-4 sm:pr-0' : ''}`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={article.image.includes('?') ? article.image + '&auto=compress&cs=tinysrgb&w=600' : article.image + '?auto=compress&cs=tinysrgb&w=600'}
                      alt={`${article.title} - ${article.category} - Viaja Mejor`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    {/* Badge destacado */}
                    {article.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                          <Star className="h-3 w-3 mr-1" />
                          DESTACADO
                        </span>
                      </div>
                    )}

                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                        {article.category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-sky-200 transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center text-white/90">
                        <span className="text-xs sm:text-sm font-medium">Leer artículo</span>
                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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

      </div>
    </section>
  );
};

export default BlogSection;