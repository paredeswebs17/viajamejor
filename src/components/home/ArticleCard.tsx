import { Link } from 'react-router-dom';

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const ArticleCard = ({ title, description, image, link, date, readTime, featured }: ArticleCardProps) => {
  return (
    <Link
      to={link}
      className="block bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative"
    >
      {featured && (
        <div className="absolute top-4 left-4 bg-[#ff6b35] text-white px-3 py-1 rounded-full text-xs font-bold z-10">
          MÁS LEÍDO
        </div>
      )}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 mb-2 text-lg leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="text-xs text-gray-500">
          📅 {date} | ⏱️ {readTime}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
