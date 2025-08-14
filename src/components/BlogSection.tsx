import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

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
    <section id="consejos" className="relative py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs mejorados */}
        <nav className="flex text-sm text-gray-600 font-medium mb-4 bg-gray-50 p-3 rounded-lg border border-gray-200">
          <span>Inicio</span> 
          <span className="mx-2 text-gray-400">/</span> 
          <span className="text-gray-900 font-semibold">Consejos de Viaje</span>
        </nav>
        
        {showTitle && (
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Empieza por aquí
              </h2>
              <p className="text-sm text-gray-500">
                Desliza para ver más →
              </p>
            </div>
          </div>
        )}

        {/* Scroll horizontal optimizado */}
        <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
          <div className="flex gap-4 pb-4 px-2">
            {articles.map(article => (
              <Link 
                key={article.id}
                to={article.url}
                className="min-w-[260px] max-w-[260px] flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <img 
                  className="w-full h-20 object-cover" 
                  src={article.image}
                  alt={`${article.title} - ${article.category} - Viaja Mejor`}
                  loading="lazy"
                />
                <div className="p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs bg-sky-500 text-white px-2 py-1 rounded font-medium">
                      {article.category}
                    </span>
                    {article.featured && (
                      <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded font-bold">
                        🌟 DESTACADO
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-sm font-semibold mb-2 line-clamp-2 text-gray-900">
                    {article.title}
                  </h3>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    {article.savings && (
                      <span className="text-xs bg-gradient-to-r from-emerald-500 to-green-500 text-white px-2 py-1 rounded font-bold">
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