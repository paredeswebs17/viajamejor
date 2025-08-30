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
    ? "bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 border-2 border-orange-300"
    : "bg-gradient-to-r from-emerald-50 to-sky-50 border-2 border-emerald-300";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className={`${bgClass} rounded-xl p-6 my-6 shadow-lg hover:shadow-xl transition-all duration-200`}>
      {/* Disclosure + Badge urgencia */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs text-gray-600">📝 <em>Enlace de afiliado - Sin coste extra</em></div>
        {discount && (
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
            ¡OFERTA LIMITADA!
          </div>
        )}
      </div>
      
      <div className="flex items-start space-x-4">
        {image && (
          <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex-shrink-0 flex items-center justify-center">
            <img src={image} alt={title} className="w-12 h-12 object-contain" />
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-xl mb-2">
            🔥 {title}
          </h3>
          <p className="text-gray-700 text-sm mb-3 font-medium">{description}</p>
          
          {bullets && (
            <ul className="text-sm text-gray-600 mb-4 space-y-1">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {discount && (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{discount}
                </span>
              )}
              {price && (
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-emerald-600 text-xl">{price}</span>
                  {originalPrice && (
                    <span className="text-gray-400 line-through text-sm">{originalPrice}</span>
                  )}
                </div>
              )}
            </div>
            
            <button
              onClick={handleClick}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 text-lg flex items-center space-x-2"
            >
              <span>🚀 {ctaText.toUpperCase()}</span>
              {url && <ExternalLink className="h-5 w-5" />}
            </button>
          </div>
          
          {platform && (
            <div className="text-xs text-gray-500 mt-2">
              Disponible en {platform}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AffiliateBox;