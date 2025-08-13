import React from 'react';
import { Link } from 'react-router-dom';
import { Star, TrendingUp, Users, Target } from 'lucide-react';
import BlogCard from './BlogCard';
import AffiliateBox from './AffiliateBox';

interface BlogSectionProps {
  showTitle?: boolean;
  onArticleSelect: (articleId: string) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ showTitle = true }) => {
  const articles = [
    {
      id: 'travel-essentials',
      title: '8 objetos imprescindibles para tu próximo viaje (y dónde comprarlos baratos)',
      excerpt: 'La mochila perfecta, adaptadores universales, power banks que duran... Todo lo que necesitas para viajar cómodo sin gastar de más.',
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
      title: 'Cómo encontrar vuelos baratos: mis 10 trucos infalibles',
      excerpt: 'Skyscanner, fechas flexibles, VPN y más secretos para conseguir vuelos hasta 70% más baratos. Método paso a paso.',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min',
      category: 'Vuelos',
      savings: 'Ahorra 300€+',
      url: '/vuelos/vuelos-baratos',
      views: '67.3k'
    },
    {
      id: 'accommodation',
      title: 'Dónde reservo mis hoteles: Booking vs Airbnb vs Hostelworld',
      excerpt: 'Comparativa real de las tres plataformas que uso. Cuándo elegir cada una y cómo conseguir los mejores precios.',
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
      title: 'Las mejores tarjetas para viajar al extranjero sin comisiones',
      excerpt: 'Revolut, N26, Wise... Comparativa completa para no pagar ni un euro extra en el extranjero. Con enlaces directos.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '9 min',
      category: 'Finanzas',
      savings: '0€ comisiones',
      url: '/finanzas/tarjetas-sin-comisiones',
      views: '28.7k'
    },
    {
      id: 'cheap-destinations',
      title: 'Destinos baratos para 2025: mis 15 favoritos donde gasté menos de 30€/día',
      excerpt: 'Países increíbles con presupuestos detallados. Albania, Vietnam, Georgia y más destinos donde tu dinero rinde al máximo.',
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '10 min',
      category: 'Destinos',
      savings: '20-30€/día',
      url: '/destinos/paises-baratos-2025',
      views: '51.8k'
    },
    {
      id: 'travel-insurance',
      title: 'Seguro de viaje: por qué uso IATI y mi experiencia real usándolo',
      excerpt: 'Mi experiencia con una emergencia médica de 3.000€ en Tailandia y cómo IATI me lo cubrió todo. Incluye descuento.',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min',
      category: 'Seguros',
      savings: '5% descuento',
      url: '/seguros/iati-experiencia',
      views: '19.4k'
    }
  ];

  return (
    <section id="consejos" className="relative py-8 sm:py-12 bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-6 sm:mb-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-sky-100 to-emerald-100 rounded-full px-3 py-1 mb-3">
              <Target className="h-3 w-3 mr-1 text-sky-600" />
              <span className="text-xs font-medium text-gray-700">Consejos probados en 40+ países</span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Mis Consejos de <span className="text-sky-600">Viaje</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              Todo lo que he aprendido viajando por más de 40 países. Consejos prácticos, 
              herramientas útiles y productos que realmente funcionan para viajar más gastando menos.
            </p>

            {/* Stats */}
            <div className="hidden sm:flex flex-wrap justify-center gap-3 text-xs">
              <div className="flex items-center bg-white rounded-lg px-3 py-1 shadow-sm">
                <Users className="h-3 w-3 mr-1 text-sky-500" />
                <span className="text-gray-700">+50k lectores</span>
              </div>
              <div className="flex items-center bg-white rounded-lg px-3 py-1 shadow-sm">
                <Star className="h-3 w-3 mr-1 text-amber-500" />
                <span className="text-gray-700">+244k vistas</span>
              </div>
              <div className="flex items-center bg-white rounded-lg px-3 py-1 shadow-sm">
                <TrendingUp className="h-3 w-3 mr-1 text-emerald-500" />
                <span className="text-gray-700">Ahorro promedio: 400€</span>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <BlogCard
              key={article.id}
              {...article}
              articleId={article.id}
            />
          ))}
        </div>

        {/* CTA intercalado */}
        {showTitle && (
          <div className="mt-6">
            <AffiliateBox
              title="🎯 ¿Empezando a planificar tu viaje?"
              description="Te recomiendo empezar con estas herramientas que uso en cada viaje para ahorrar tiempo y dinero"
              variant="highlight"
              ctaText="Ver herramientas esenciales"
              onClick={() => document.getElementById('recomendaciones')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;