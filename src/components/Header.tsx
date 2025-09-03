import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import { trackMenuClick } from '../utils/analytics';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navigationItems = [
    { id: 'inicio', label: 'Inicio', href: '/' },
    { id: 'guias', label: 'Guías', href: '/guias' },
    { id: 'consejos', label: 'Consejos', href: '/#consejos' },
    { id: 'recomendaciones', label: 'Recomendaciones', href: '/#recomendaciones' },
    { id: 'contacto', label: 'Contacto', href: '/#contacto' }
  ];

  const handleMenuClick = (itemId: string, href: string) => {
    trackMenuClick(itemId);
    setIsMenuOpen(false);
    
    // Si es un enlace con ancla y estamos en home, hacer scroll
    if (href.startsWith('/#') && isHomePage) {
      const sectionId = href.substring(2);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const renderNavItem = (item: { id: string, label: string, href: string }) => {
    if (item.href.startsWith('/#') && !isHomePage) {
      // Si no estamos en home y es un enlace con ancla, usar Link
      return (
        <Link
          key={item.id}
          to={item.href}
          className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
          onClick={() => handleMenuClick(item.id, item.href)}
        >
          {item.label}
        </Link>
      );
    } else if (item.href === '/') {
      // Para el enlace de inicio, siempre usar Link
      return (
        <Link
          key={item.id}
          to={item.href}
          className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
          onClick={() => handleMenuClick(item.id, item.href)}
        >
          {item.label}
        </Link>
      );
    } else {
      // Para enlaces con ancla en la misma página, usar button
      return (
        <button
          key={item.id}
          onClick={() => handleMenuClick(item.id, item.href)}
          className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
        >
          {item.label}
        </button>
      );
    }
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/"
            className="flex items-center group"
            onClick={() => trackMenuClick('logo')}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Compass className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
            <div className="ml-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                Viaja
              </span>
              <span className="text-2xl font-bold text-gray-800 ml-1">
                Mejor
              </span>
              <div className="text-xs text-gray-500 font-medium tracking-wide -mt-1">
                TU COMPAÑERO DE VIAJES
              </div>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8" role="navigation">
            {navigationItems.map(renderNavItem)}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (  
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg" style={{ backgroundColor: 'rgba(245, 250, 255, 0.95)', backdropFilter: 'blur(4px)' }}>
              {navigationItems.map((item) => (
                item.href.startsWith('/#') && !isHomePage ? (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-sky-500 hover:bg-sky-50 font-medium rounded-lg transition-colors"
                    onClick={() => handleMenuClick(item.id, item.href)}
                  >
                    {item.label}
                  </Link>
                ) : item.href === '/' ? (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-sky-500 hover:bg-sky-50 font-medium rounded-lg transition-colors"
                    onClick={() => handleMenuClick(item.id, item.href)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id, item.href)}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-sky-500 hover:bg-sky-50 font-medium rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;