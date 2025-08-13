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
    <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 my-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center space-x-2">
          <List className="h-5 w-5 text-sky-500" />
          <span className="font-semibold text-gray-900">Índice del artículo</span>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-sky-500" /> : <ChevronDown className="h-5 w-5 text-sky-500" />}
      </button>
      
      {isOpen && (
        <nav className="mt-4 space-y-2">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => handleSectionClick(section.id)}
              className="block w-full text-left text-sm text-gray-600 hover:text-sky-600 pl-7 py-1 transition-colors"
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