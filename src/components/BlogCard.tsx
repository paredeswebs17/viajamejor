import React from 'react';
import { Link } from 'react-router-dom';
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
  category,
  articleId,
  url
}) => {
  const handleClick = () => {
    trackArticleView(articleId, title);
    trackButtonClick('read_article', 'blog_card');
  };

  const handleClick = () => {
    trackArticleView(articleId, title);
    trackButtonClick('read_article', 'blog_card');
  };

  return (
    <article className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 overflow-hidden relative">
      {/* Badge de destacado */}
      {featured && (
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold flex items-center shadow-sm">
            <Star className="h-2 w-2 mr-1" />
            DESTACADO
          </span>
        </div>
      )}

      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-24 sm:h-32 object-cover" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Stats overlay */}
        <div className="absolute bottom-1 left-2 flex items-center space-x-2 text-white text-xs">
          <div className="flex items-center space-x-1 bg-black/40 backdrop-blur-sm rounded-full px-1.5 py-0.5">
            <Clock className="h-2 w-2" />
            <span className="text-xs">{readTime}</span>
          </div>
          {views && (
            <div className="hidden sm:flex items-center space-x-1 bg-black/40 backdrop-blur-sm rounded-full px-1.5 py-0.5">
              <Eye className="h-2 w-2" />
              <span className="text-xs">{views}</span>
            </div>
          )}
          {savings && (
            <div className="flex items-center space-x-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full px-1.5 py-0.5 shadow-sm">
              <TrendingUp className="h-2 w-2" />
              <span className="text-xs font-medium">{savings}</span>
            </div>
          )}
        </div>

        <div className="absolute top-2 right-2">
          <span className="bg-sky-500 text-white px-2 py-0.5 rounded-full text-xs font-medium shadow-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-3 sm:p-4 flex flex-col h-full">
        <Link to={url} onClick={handleClick}>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-sky-600 transition-colors cursor-pointer group-hover:text-sky-600">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed flex-1">
          {excerpt}
        </p>
        
        <Link 
          to={url}
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-1 shadow-sm text-sm mt-auto"
        >
          <span>Leer artículo completo</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
        <Link 
          to={url}
          onClick={handleClick}
          className="mt-4 w-full bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-1 shadow-sm text-sm"
        >
          <span>Leer artículo completo</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;