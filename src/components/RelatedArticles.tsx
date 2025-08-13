import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

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
  // Hacer estas props opcionales para compatibilidad
  onArticleSelect?: (articleId: string) => void;
  onBack?: () => void;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ 
  currentCategory, 
  currentArticleId,
  onArticleSelect,
  onBack 
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
      title: 'Destinos baratos para 2025: 15 favoritos',
      url: '/destinos/paises-baratos-2025',
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

  // Filtrar artículos relacionados por categoría y excluir el actual
  const relatedByCategory = allArticles.filter(article => 
    article.category === currentCategory && !article.url.includes(currentArticleId)
  );
  
  // Si no hay suficientes de la misma categoría, añadir otros populares
  const otherArticles = allArticles.filter(article => 
    article.category !== currentCategory && !article.url.includes(currentArticleId)
  );
  
  const finalRelated = [...relatedByCategory, ...otherArticles].slice(0, 3);

  if (finalRelated.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6 my-8 border border-sky-200">
      <div className="flex items-center mb-4">
        <BookOpen className="h-5 w-5 text-sky-600 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">También te puede interesar</h3>
      </div>
      <div className="space-y-4">
        {finalRelated.map((article, index) => (
          <Link
            key={index}
            to={article.url}
            className="block bg-white p-4 rounded-lg hover:shadow-md transition-all group border border-gray-100"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 group-hover:text-sky-600 transition-colors mb-1">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">{article.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded mr-2">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-sky-500 transition-colors ml-4 flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;