import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  rating: string;
  price: string;
  affiliate: string;
}

const ProductCard = ({ name, description, image, rating, price, affiliate }: ProductCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="w-full sm:w-32 h-32 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-3 flex-1">{description}</p>
        <div className="text-sm text-yellow-500 mb-2">{rating}</div>
        <div className="flex items-center justify-between gap-4">
          <div className="text-lg font-bold text-[#28a745]">{price}</div>
          <a
            href={affiliate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-5 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm whitespace-nowrap"
          >
            ✅ Ver Oferta
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
