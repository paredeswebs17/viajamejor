import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BlogCard from './BlogCard';
import { trackArticleView, trackButtonClick } from '../utils/analytics';

interface BlogSectionProps {
  showTitle?: boolean;
  onArticleSelect: (articleId: string) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ showTitle = true }) => {
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

  const handleClick = (articleId: string, title: string) => {
    trackArticleView(articleId);
    trackButtonClick('article_read', title);
  };

  return (
    <section id="consejos" className="relative py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Empieza por aquí
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Desliza para ver todos los consejos →
            </p>
          </div>
        )}

        {/* Horizontal scroll for mobile, grid for desktop */}
        <div className="block sm:hidden">
          <div className="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide">
            {articles.map((article) => (
              <div key={article.id} className="flex-shrink-0 w-72">
                <Link to={article.url} className="block">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden h-32">
                    <div className="flex h-full">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-24 h-full object-cover flex-shrink-0" 
                      />
                      <div className="p-3 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="bg-sky-500 text-white px-2 py-0.5 rounded text-xs font-medium">
                            {article.category}
                          </span>
                          <h3 className="text-sm font-bold text-gray-900 mt-1 line-clamp-2">
                            {article.title}
                          </h3>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                          <span>{article.readTime}</span>
                          {article.savings && (
                            <span className="bg-emerald-100 text-emerald-700 px-1 py-0.5 rounded">
                              {article.savings}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div className="flex-shrink-0 w-16 flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Grid for tablet and desktop */}
        <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <BlogCard
              key={article.id}
              {...article}
              articleId={article.id}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;