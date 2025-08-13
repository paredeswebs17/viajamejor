import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

interface AffiliateBoxProps {
  title: string;
  description: string;
  price?: string;
  originalPrice?: string;
  discount?: string;
  bullets?: string[];
  ctaText?: string;
  url?: string;
  variant?: 'default' | 'ghost' | 'highlight';
  platform?: string;
  image?: string;
  onClick?: () => void;
}

const AffiliateBox: React.FC<AffiliateBoxProps> = ({ 
  title, 
  description, 
  price, 
  originalPrice, 
  discount, 
  bullets, 
  ctaText = "Ver oferta", 
  url, 
  variant = "default",
  platform = "",
  image = null,
  onClick
}) => {
  const bgClass = variant === "ghost" 
    ? "bg-gray-50 border border-gray-200" 
    : variant === "highlight"
    ? "bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200"
    : "bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-200";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className={`${bgClass} rounded-lg p-3 sm:p-4 my-3`}>
      {/* Disclosure */}
      <div className="text-xs text-gray-500 mb-2">
        📝 <em>Enlace de afiliado - Sin coste extra para ti</em>
      </div>
      
      <div className="flex items-start space-x-3">
        {image && (
          <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex-shrink-0 flex items-center justify-center">
            <img src={image} alt={title} className="w-8 h-8 object-contain" />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-base mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
          
          {bullets && (
            <ul className="text-xs text-gray-600 mb-2 space-y-0.5">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-3 w-3 text-emerald-500 mr-1 mt-0.5 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {discount && (
                <span className="bg-red-500 text-white px-1.5 py-0.5 rounded text-xs font-medium">
                  -{discount}
                </span>
              )}
              {price && (
                <div>
                  <span className="font-bold text-emerald-600 text-base">{price}</span>
                  {originalPrice && (
                    <span className="text-gray-400 line-through text-xs ml-1">{originalPrice}</span>
                  )}
                </div>
              )}
            </div>
            
            <button
              onClick={handleClick}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-1.5 rounded-lg transition-colors flex items-center space-x-1 text-sm"
            >
              <span>{ctaText}</span>
              {url && <ExternalLink className="h-3 w-3" />}
            </button>
          </div>
          
          {platform && (
            <div className="text-xs text-gray-500 mt-1">
              Disponible en {platform}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AffiliateBox;