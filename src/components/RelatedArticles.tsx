import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedArticle {
  title: string;
  url: string;
  category: string;
  readTime: string;
  description: string;
}

interface RelatedArticlesProps {
  currentCategory: string;
  currentArticleId: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  currentCategory,
  currentArticleId
}) => {
  const allArticles: RelatedArticle[] = [
    {
      title: 'Cómo encontrar vuelos baratos: 10 trucos infalibles',
      url: '/vuelos/vuelos-baratos',
      category: 'Vuelos',
      readTime: '8 min',
      description: 'Aprende a ahorrar hasta 300€ en billetes'
    },
    {
      title: 'Mejores tarjetas para viajar sin comisiones',
      url: '/finanzas/tarjetas-sin-comisiones',
      category: 'Finanzas',
      readTime: '9 min',
      description: 'Revolut, N26, Wise comparados'
    },
    {
      title: 'Booking vs Airbnb vs Hostelworld',
      url: '/alojamiento/booking-vs-airbnb',
      category: 'Alojamiento',
      readTime: '6 min',
      description: 'Cuándo usar cada plataforma'
    },
    {
      title: 'Destinos baratos para 2026: 15 favoritos',
      url: '/destinos/paises-baratos-2026',
      category: 'Destinos',
      readTime: '10 min',
      description: 'Países donde gasté menos de 30€/día'
    },
    {
      title: 'Seguro de viaje: por qué uso IATI',
      url: '/seguros/iati-experiencia',
      category: 'Seguros',
      readTime: '7 min',
      description: 'Mi experiencia real con emergencia médica'
    },
    {
      title: '8 objetos imprescindibles para tu próximo viaje',
      url: '/equipaje/8-objetos-imprescindibles',
      category: 'Equipaje',
      readTime: '12 min',
      description: 'Equipaje esencial y dónde comprarlo barato'
    }
  ];

  const relatedByCategory = allArticles.filter(article =>
    article.category === currentCategory && !article.url.includes(currentArticleId)
  );

  const otherArticles = allArticles.filter(article =>
    article.category !== currentCategory && !article.url.includes(currentArticleId)
  );

  const finalRelated = [...relatedByCategory, ...otherArticles].slice(0, 3);

  if (finalRelated.length === 0) return null;

  return (
    <div className="border-t border-stone-200 pt-12">
      <span className="text-[10px] uppercase tracking-[.25em] text-gray-400 font-semibold mb-3 block">
        Sigue leyendo
      </span>
      <h3 className="font-serif text-2xl text-gray-900 mb-8">También te puede interesar</h3>
      <div className="space-y-3">
        {finalRelated.map((article, index) => (
          <Link
            key={index}
            to={article.url}
            className="group flex items-center justify-between bg-white border border-stone-200 rounded-sm p-5 hover:border-stone-300 hover:shadow-sm transition-all"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1.5">
                <span className="text-[9px] uppercase tracking-[.15em] text-teal-600 font-semibold">
                  {article.category}
                </span>
                <span className="text-[9px] text-gray-400">{article.readTime}</span>
              </div>
              <h4 className="font-serif text-base text-gray-900 group-hover:text-teal-700 transition-colors truncate">
                {article.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1 hidden sm:block">{article.description}</p>
            </div>
            <ArrowRight size={16} className="text-gray-300 group-hover:text-teal-600 group-hover:translate-x-1 transition-all ml-4 flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
