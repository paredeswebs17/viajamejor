import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogSectionProps {
  showTitle?: boolean;
  onArticleSelect: (articleId: string) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ showTitle = true }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

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
    <section id="consejos" className="relative py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Empieza por aquí
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Desliza para ver más →
              </p>
              {/* Navigation arrows for desktop */}
              <div className="hidden lg:flex items-center space-x-2">
                <button
                  onClick={scrollLeft}
                  className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={scrollRight}
                  className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Horizontal scroll with larger cards for desktop */}
        <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
          <div className="flex gap-4 lg:gap-6 pb-4 px-4">
            {articles.map(article => (
              <Link 
                key={article.id}
                to={article.url}
                className="min-w-[280px] sm:min-w-[320px] lg:min-w-[380px] max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <img 
                  src={article.image}
                  alt={`${article.title} - ${article.category} - Viaja Mejor`}
                  className="w-full h-24 sm:h-32 lg:h-40 object-cover rounded-t-lg"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Error loading image:', article.image);
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.display = 'flex';
                    e.currentTarget.style.alignItems = 'center';
                    e.currentTarget.style.justifyContent = 'center';
                    e.currentTarget.innerHTML = '📷';
                  }}
                />
                <div className="p-3 lg:p-4">
                  <span className="text-xs bg-sky-500 text-white px-2 py-1 rounded font-medium">
                    {article.category}
                  </span>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mt-2 line-clamp-2 text-gray-900">
                    {article.title}
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    {article.savings && (
                      <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded font-medium">
                        {article.savings}
                      </span>
                    )}
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