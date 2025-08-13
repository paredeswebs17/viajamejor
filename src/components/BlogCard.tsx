import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Star, TrendingUp, Eye } from 'lucide-react';
import { trackArticleView, trackButtonClick } from '../utils/analytics';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  featured?: boolean;
  articleId: string;
  readTime: string;
  savings?: string;
  url: string;
  views?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  excerpt, 
  image, 
  category, 
  articleId, 
  readTime,
  savings,
  featured = false,
  url,
  views
}) => {
  const handleClick = () => {
    trackArticleView(articleId, title);
    trackButtonClick('read_article', 'blog_card');
  };

  return (
    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden relative">
      {/* Badge de destacado */}
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
            <Star className="h-3 w-3 mr-1" />
            DESTACADO
          </span>
        </div>
      )}

      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Stats overlay */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-3 text-white text-sm">
          <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
            <Clock className="h-3 w-3" />
            <span className="text-xs">{readTime}</span>
          </div>
          {views && (
            <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
              <Eye className="h-3 w-3" />
              <span className="text-xs">{views}</span>
            </div>
          )}
          {savings && (
            <div className="flex items-center space-x-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full px-2 py-1 shadow-lg">
              <TrendingUp className="h-3 w-3" />
              <span className="text-xs font-medium">{savings}</span>
            </div>
          )}
        </div>

        <div className="absolute top-4 right-4">
          <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <Link to={url} onClick={handleClick}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-sky-600 transition-colors cursor-pointer group-hover:text-sky-600">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
        
        <Link 
          to={url}
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <span>Leer artículo completo</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;