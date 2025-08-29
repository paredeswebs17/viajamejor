import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  url: string;
}

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Datos de búsqueda (en una app real vendría de una API)
  const searchData: SearchResult[] = [
    {
      id: 'vuelos-baratos',
      title: 'Cómo encontrar vuelos baratos: 10 trucos infalibles',
      excerpt: 'Skyscanner, fechas flexibles, VPN y más secretos...',
      category: 'Vuelos',
      url: '/vuelos/vuelos-baratos'
    },
    {
      id: 'tarjetas-viaje',
      title: 'Mejores tarjetas para viajar sin comisiones',
      excerpt: 'Revolut, N26, Wise... Comparativa completa...',
      category: 'Finanzas',
      url: '/finanzas/tarjetas-sin-comisiones'
    },
    {
      id: 'equipaje-esencial',
      title: '8 objetos imprescindibles para tu próximo viaje',
      excerpt: 'Mochila cabina, adaptadores, power banks...',
      category: 'Equipaje',
      url: '/equipaje/8-objetos-imprescindibles'
    },
    {
      id: 'destinos-baratos',
      title: 'Destinos baratos para 2025: 15 favoritos',
      excerpt: 'Albania, Vietnam, Georgia... Países increíbles...',
      category: 'Destinos',
      url: '/destinos/paises-baratos-2025'
    },
    {
      id: 'alojamiento-comparativa',
      title: 'Booking vs Airbnb vs Hostelworld',
      excerpt: 'Comparativa real de las tres plataformas...',
      category: 'Alojamiento',
      url: '/alojamiento/booking-vs-airbnb'
    },
    {
      id: 'seguro-iati',
      title: 'Seguro de viaje: por qué uso IATI',
      excerpt: 'Mi experiencia con una emergencia médica...',
      category: 'Seguros',
      url: '/seguros/iati-experiencia'
    }
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length > 2) {
      setIsSearching(true);
      
      // Simular delay de búsqueda
      const timeoutId = setTimeout(() => {
        const filtered = searchData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setIsSearching(false);
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [query]);

  const handleClose = () => {
    setQuery('');
    setResults([]);
    onClose();
  };

  const handleResultClick = () => {
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
      <div className="max-w-2xl mx-auto mt-20 p-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center p-4 border-b border-gray-200">
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar consejos de viaje..."
              className="flex-1 text-lg outline-none"
            />
            <button
              onClick={handleClose}
              className="ml-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {query.length <= 2 && (
              <div className="p-6 text-center text-gray-500">
                <Search className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <p>Escribe al menos 3 caracteres para buscar</p>
              </div>
            )}

            {isSearching && (
              <div className="p-6 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500 mx-auto mb-3"></div>
                <p className="text-gray-500">Buscando...</p>
              </div>
            )}

            {query.length > 2 && !isSearching && results.length === 0 && (
              <div className="p-6 text-center text-gray-500">
                <p>No se encontraron resultados para "{query}"</p>
                <p className="text-sm mt-2">Prueba con términos como "vuelos", "hoteles", "equipaje"...</p>
              </div>
            )}

            {results.length > 0 && (
              <div className="p-2">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    to={result.url}
                    onClick={handleResultClick}
                    className="block p-4 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {result.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {result.excerpt}
                        </p>
                        <span className="inline-block bg-sky-100 text-sky-700 px-2 py-1 rounded-full text-xs font-medium">
                          {result.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Quick suggestions */}
          {query.length <= 2 && (
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-700 mb-2">Búsquedas populares:</p>
              <div className="flex flex-wrap gap-2">
                {['vuelos baratos', 'tarjetas viaje', 'equipaje', 'destinos baratos', 'seguro viaje'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-sky-50 hover:border-sky-200 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;