import { useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { trackMenuClick } from '../utils/analytics';

// Define props interface
interface HeaderProps {
  currentView?: 'home' | 'article';
  onNavigateHome?: () => void;
}

// Navigation items for reusability
const navigationItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'consejos', label: 'Consejos de Viaje' },
  { id: 'recomendaciones', label: 'Recomendaciones' },
  { id: 'sobre-nosotros', label: 'Sobre Nosotros' },
  { id: 'contacto', label: 'Contacto' }
];

const Header: React.FC<HeaderProps> = ({ currentView = 'home', onNavigateHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Track menu click
    trackMenuClick(sectionId);
    
    // Si estamos en un artículo, primero volver al home
    if (currentView === 'article' && onNavigateHome) {
      onNavigateHome();
      // Esperar un poco para que se renderice el home y luego hacer scroll
      setTimeout(() => {
        scrollToSectionSimple(sectionId);
      }, 100);
    } else {
      // Si ya estamos en home, hacer scroll directo
      scrollToSectionSimple(sectionId);
    }
    setIsMenuOpen(false);
  };

  const scrollToSectionSimple = (sectionId: string) => {    
    // Buscar la sección
    const section = document.getElementById(sectionId);
    
    if (!section) {
      console.error('❌ No se encontró la sección:', sectionId);
      return;
    }
    
    // Usar scrollIntoView nativo que respeta scroll-margin-top
    section.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleLogoClick = () => {
    if (currentView === 'article' && onNavigateHome) {
      onNavigateHome();
    } else {
      scrollToSection('inicio');
    }
  };

  // Render navigation item
  const renderNavItem = (item: { id: string, label: string }) => (
    <button 
      key={item.id}
      onClick={() => scrollToSection(item.id)} 
      className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
      aria-label={`Navegar a ${item.label}`}
    >
      {item.label}
    </button>
  );

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            aria-label="Ir a inicio"
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
          </div>
          
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
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="mobile-menu-item block w-full text-left text-gray-700 hover:text-sky-500 hover:bg-sky-50 font-medium rounded-lg transition-colors"
              >
                Inicio
              </button>
              {navigationItems.slice(1).map(item => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="mobile-menu-item block w-full text-left text-gray-700 hover:text-sky-500 hover:bg-sky-50 font-medium rounded-lg transition-colors"
                  aria-label={`Navegar a ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;