import React, { useState } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';

interface TOCSection {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: TOCSection[];
  onSectionClick?: (id: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections, onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSectionClick = (id: string) => {
    if (onSectionClick) {
      onSectionClick(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 my-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center space-x-1">
          <List className="h-4 w-4 text-sky-500" />
          <span className="font-semibold text-gray-900 text-sm">Índice del artículo</span>
        </div>
        {isOpen ? <ChevronUp className="h-4 w-4 text-sky-500" /> : <ChevronDown className="h-4 w-4 text-sky-500" />}
      </button>
      
      {isOpen && (
        <nav className="mt-2 space-y-1">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleSectionClick(section.id)}
              className="block w-full text-left text-xs text-gray-600 hover:text-sky-600 pl-5 py-0.5 transition-colors"
            >
              {index + 1}. {section.title}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
};

export default TableOfContents;