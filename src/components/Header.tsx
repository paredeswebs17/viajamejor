import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, ChevronRight } from 'lucide-react';
import { trackMenuClick } from '../utils/analytics';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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

    if (itemId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('/#') && isHomePage) {
      const sectionId = href.substring(2);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const isActiveRoute = (item: { id: string; href: string }) => {
    if (item.id === 'guias') return location.pathname === '/guias';
    if (item.id === 'inicio') return location.pathname === '/';
    return false;
  };

  const renderNavItem = (item: { id: string; label: string; href: string }) => {
    const active = isActiveRoute(item);
    const baseClasses = `relative py-2 px-1 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
      active
        ? 'text-sky-600'
        : scrolled
          ? 'text-gray-700 hover:text-sky-600'
          : 'text-gray-700 hover:text-sky-600'
    }`;

    const underline = (
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-300 rounded-full ${
          active ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    );

    if (item.id === 'guias' || item.id === 'inicio' || (item.href.startsWith('/#') && !isHomePage)) {
      return (
        <Link
          key={item.id}
          to={item.href}
          className={`${baseClasses} group`}
          onClick={() => handleMenuClick(item.id, item.href)}
        >
          {item.label}
          {underline}
        </Link>
      );
    }

    return (
      <button
        key={item.id}
        onClick={() => handleMenuClick(item.id, item.href)}
        className={`${baseClasses} group`}
      >
        {item.label}
        {underline}
      </button>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.04)]'
            : 'bg-white/70 backdrop-blur-md'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-18">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center group"
              onClick={() => trackMenuClick('logo')}
            >
              <div className="relative">
                <div className={`w-9 h-9 bg-gradient-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
                  <Compass className="h-5 w-5 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="ml-2.5">
                <div className="flex items-baseline">
                  <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                    Viaja
                  </span>
                  <span className="text-xl font-bold text-gray-800 ml-0.5">
                    Mejor
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8" role="navigation">
              {navigationItems.map(renderNavItem)}
            </nav>

            {/* Mobile toggle */}
            <button
              className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
                isMenuOpen
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            >
              <span className="sr-only">{isMenuOpen ? 'Cerrar' : 'Menu'}</span>
              <div className="relative w-5 h-5">
                <span
                  className={`absolute left-0 block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'top-2.5 rotate-45' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute left-0 top-2.5 block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'top-2.5 -rotate-45' : 'top-4'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Subtle border */}
        <div className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-100 transform transition-all duration-300 ease-out ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navigationItems.map((item) => {
              const active = isActiveRoute(item);
              const content = (
                <div className="flex items-center justify-between">
                  <span className={`font-medium ${active ? 'text-sky-600' : 'text-gray-800'}`}>
                    {item.label}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${active ? 'text-sky-500' : 'text-gray-400'}`} />
                </div>
              );

              const classes = `block w-full text-left px-4 py-3.5 rounded-xl transition-all duration-200 ${
                active
                  ? 'bg-sky-50/80 border border-sky-100'
                  : 'hover:bg-gray-50 border border-transparent'
              }`;

              if (item.id === 'guias' || item.id === 'inicio' || (item.href.startsWith('/#') && !isHomePage)) {
                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    className={classes}
                    onClick={() => handleMenuClick(item.id, item.href)}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id, item.href)}
                  className={classes}
                >
                  {content}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
