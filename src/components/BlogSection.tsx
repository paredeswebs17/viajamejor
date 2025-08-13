import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import MobileCollapsible from './MobileCollapsible';

interface BlogSectionProps {
  onArticleSelect: (articleId: string) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ onArticleSelect }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const articles = [
    {
      id: 'travel-essentials',
      title: '8 objetos imprescindibles para tu próximo viaje (y dónde comprarlos baratos)',
      excerpt: 'Después de muchos viajes, tengo claro cuáles son los productos que realmente marcan la diferencia. Mochila perfecta, adaptadores que funcionan, power banks que duran... Te cuento qué uso yo y dónde conseguirlo al mejor precio.',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '12 min',
      category: 'Equipaje',
      featured: true
    },
    {
      id: 'cheap-flights',
      title: 'Cómo encontrar vuelos baratos: mis 10 trucos infalibles',
      excerpt: 'Te enseño paso a paso cómo uso Skyscanner y Kiwi.com para conseguir vuelos hasta 70% más baratos. Incluye mis fechas secretas, alertas automáticas y la estrategia que me ha ahorrado miles de euros.',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min',
      category: 'Vuelos'
    },
    {
      id: 'accommodation',
      title: 'Dónde reservo mis hoteles: Booking vs Airbnb vs Hostelworld',
      excerpt: 'Te explico cómo elijo entre estas tres plataformas según el tipo de viaje. Cuándo uso cada una, sus pros y contras, y mi estrategia personal para conseguir el mejor alojamiento al mejor precio. Incluye tabla comparativa y enlaces directos.',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min',
      category: 'Alojamiento',
      featured: true
    },
    {
      id: 'cheap-destinations',
      title: 'Destinos baratos para 2025: mis 15 favoritos donde gasté menos de 30€/día',
      excerpt: 'Países donde tu euro rinde al máximo. Te cuento cuánto gasté realmente en cada destino, dónde reservé los vuelos más baratos y mis alojamientos favoritos. Incluye presupuestos detallados y enlaces a las mejores ofertas.',
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '10 min',
      category: 'Destinos'
    },
    {
      id: 'premium-destinations',
      title: '10 destinos premium donde vale la pena gastar más (y cómo hacer que cada euro cuente)',
      excerpt: 'A veces hay lugares que merecen cada euro invertido. Islandia, Japón, Suiza, Maldivas... Te cuento por qué estos destinos justifican gastar más y cómo hacer que tu dinero rinda al máximo sin perder la esencia.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '18 min',
      category: 'Destinos Premium',
      featured: true
    },
    {
      id: 'travel-insurance',
      title: 'Seguro de viaje: por qué uso IATI y mi experiencia real usándolo',
      excerpt: 'Te cuento mi experiencia con una emergencia médica en Tailandia que me costó 3.000€ y cómo IATI me lo cubrió todo. Comparativa real entre IATI, Mondo y Chapka. Incluye mi descuento exclusivo.',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min',
      category: 'Seguros'
    },
    {
      id: 'travel-cards',
      title: 'Las mejores tarjetas para viajar al extranjero sin comisiones',
      excerpt: 'Una de las formas más tontas de perder dinero viajando es con comisiones bancarias. Te cuento qué tarjetas uso yo para no pagar ni un euro extra: Revolut, Wise, N26... Todas gratuitas y perfectas para viajar.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '9 min',
      category: 'Finanzas'
    },
    {
      id: 'travel-apps',
      title: 'Las mejores apps y herramientas que uso en cada viaje',
      excerpt: 'Olvídate de listas interminables. Estas son las 10 apps que realmente uso: desde NordVPN para navegar seguro, hasta Civitatis para reservar excursiones. Te explico para qué uso cada una y por qué las recomiendo.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min',
      category: 'Tecnología'
    }
  ];

  const categories = [
    { title: 'Equipaje y Esenciales', filter: 'Equipaje', defaultOpen: true },
    { title: 'Vuelos', filter: 'Vuelos' },
    { title: 'Alojamiento', filter: 'Alojamiento' },
    { title: 'Destinos', filter: 'Destinos' },
    { title: 'Destinos Premium', filter: 'Destinos Premium' },
    { title: 'Seguros', filter: 'Seguros' },
    { title: 'Finanzas', filter: 'Finanzas' },
    { title: 'Tecnología', filter: 'Tecnología' }
  ];

  return (
    <section id="consejos" className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mis Consejos de Viaje
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que he aprendido en mis viajes lo comparto contigo. Consejos prácticos, herramientas útiles y productos que realmente funcionan. Sin fluff, solo lo que necesitas saber.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!isMobile && articles.map((article) => (
            <BlogCard
              key={article.id}
              {...article}
              articleId={article.id}
              onArticleSelect={onArticleSelect}
            />
          ))}
        </div>

        {isMobile && (
          <div className="space-y-4">
            {categories.map((category, _index) => {
              const categoryArticles = articles.filter(article => article.category === category.filter);
              
              if (categoryArticles.length === 0) return null;
              
              return (
                <MobileCollapsible
                  key={category.filter}
                  title={category.title}
                  defaultOpen={category.defaultOpen}
                  noHighlight={true}
                  titleClassName="text-lg font-bold"
                >
                  {(isOpen) =>
                    isOpen && (
                      <div className="space-y-4">
                        {categoryArticles.map((article) => (
                          <BlogCard
                            key={article.id}
                            {...article}
                            articleId={article.id}
                            onArticleSelect={onArticleSelect}
                          />
                        ))}
                      </div>
                    )
                  }
                </MobileCollapsible>
              );
            })}
          </div>
        )}

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Te han gustado estos consejos?</h3>
            <p className="text-lg mb-6 opacity-90">
              Explora mis herramientas y recomendaciones para hacer tus viajes perfectos
            </p>
            <button
              onClick={() => document.getElementById('recomendaciones')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-sky-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Ver Mis Herramientas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;