import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { trackMenuClick } from '../utils/analytics';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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

  const renderNavLink = (item: { id: string; label: string; href: string }) => {
    const isActive = item.href === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(item.href.replace('/#', '/'));

    const className = `relative py-1 text-[13px] tracking-wide uppercase font-medium transition-colors duration-200 ${
      isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
    }`;

    const underline = isActive ? (
      <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-gray-900 rounded-full" />
    ) : (
      <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-gray-900 rounded-full transition-all duration-300 group-hover:w-full" />
    );

    if (item.id === 'guias' || item.id === 'inicio' || (item.href.startsWith('/#') && !isHomePage)) {
      return (
        <Link
          key={item.id}
          to={item.href}
          className={`group ${className}`}
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
        className={`group ${className}`}
      >
        {item.label}
        {underline}
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-[60px]">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            onClick={() => trackMenuClick('logo')}
          >
            <span className="font-serif text-[22px] tracking-tight text-gray-900 transition-opacity group-hover:opacity-70">
              viaja<span className="font-semibold">mejor</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-0.5" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" role="navigation">
            {navigationItems.map(renderNavLink)}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className={`absolute transition-all duration-200 ${isMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`}>
              <Menu size={18} strokeWidth={1.8} />
            </span>
            <span className={`absolute transition-all duration-200 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`}>
              <X size={18} strokeWidth={1.8} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-5 pb-6 pt-2 bg-white/95 backdrop-blur-md border-t border-gray-100/80">
          <div className="flex flex-col gap-1">
            {navigationItems.map((item) => {
              const isLink = item.id === 'guias' || item.id === 'inicio' || (item.href.startsWith('/#') && !isHomePage);

              if (isLink) {
                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="px-3 py-2.5 text-[14px] text-gray-600 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => handleMenuClick(item.id, item.href)}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id, item.href)}
                  className="text-left px-3 py-2.5 text-[14px] text-gray-600 hover:text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
