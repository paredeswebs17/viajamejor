import { trackArticleView, trackButtonClick } from '../utils/analytics';
import { Link } from 'react-router-dom';

// Define props interface
interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  featured?: boolean;
  articleId: string;
  url: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  excerpt, 
  image, 
  category, 
  articleId, 
  url
}) => {
  const handleClick = () => {
    // Track article view
    trackArticleView(articleId, title);
    trackButtonClick('read_article', 'blog_card');
  };

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ring-2 ring-sky-500" aria-labelledby={`article-title-${articleId}`}>
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" loading="lazy" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <Link to={url} onClick={handleClick}>
          <h3 id={`article-title-${articleId}`} className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-sky-500 transition-colors cursor-pointer">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <Link
          to={url}
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium py-2 px-4 rounded-lg hover:from-blue-600 hover:to-emerald-600 transition-all duration-200"
          aria-label={`Leer artículo completo sobre ${title}`}
        >
          Leer artículo completo
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;