import React, { useState, useEffect } from 'react';
import { List, X } from 'lucide-react';

interface TOCSection {
  id: string;
  title: string;
  level?: number;
}

interface StickyTableOfContentsProps {
  sections: TOCSection[];
}

const StickyTableOfContents: React.FC<StickyTableOfContentsProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / windowHeight) * 100;
      setReadProgress(Math.min(progress, 100));

      let currentSection = '';

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = section.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleSectionClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Botón flotante para móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-gradient-to-r from-sky-500 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-2 border-white"
        aria-label="Abrir índice"
      >
        {isOpen ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
      </button>

      {/* Overlay para móvil */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Índice sticky */}
      <div
        className={`
          fixed z-50 bg-white rounded-2xl shadow-2xl border border-gray-200
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          lg:translate-x-0
          top-24 right-6 w-80 max-h-[calc(100vh-120px)] overflow-hidden
        `}
      >
        {/* Barra de progreso */}
        <div className="relative h-1 bg-gray-100">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-300"
            style={{ width: `${readProgress}%` }}
          />
        </div>

        {/* Header */}
        <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-sky-50 to-blue-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <List className="h-5 w-5 text-sky-600" />
              <h3 className="font-bold text-gray-900 text-sm">Índice del artículo</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-600">
            {Math.round(readProgress)}% leído
          </div>
        </div>

        {/* Lista de secciones */}
        <nav className="overflow-y-auto max-h-[calc(100vh-220px)] p-4 space-y-1">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            const level = section.level || 1;

            return (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`
                  block w-full text-left px-4 py-3 rounded-lg transition-all duration-200
                  ${level === 2 ? 'pl-8 text-sm' : 'text-sm font-medium'}
                  ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md transform scale-105'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-sky-600'
                  }
                `}
              >
                <div className="flex items-start space-x-2">
                  <span className={`
                    flex-shrink-0 mt-0.5
                    ${isActive ? 'text-white' : 'text-sky-500'}
                  `}>
                    {level === 1 ? '•' : '◦'}
                  </span>
                  <span className="flex-1 leading-tight">
                    {section.title}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Footer con info adicional */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 text-center">
          <p className="text-xs text-gray-600">
            {sections.length} secciones
          </p>
        </div>
      </div>
    </>
  );
};

export default StickyTableOfContents;
