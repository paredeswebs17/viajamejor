import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

interface RelatedLink {
  title: string;
  description: string;
  href: string;
}

interface RelatedLinksProps {
  links: RelatedLink[];
  title?: string;
}

const RelatedLinks: React.FC<RelatedLinksProps> = ({ links, title = "Sigue leyendo" }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-3 my-4">
      <h3 className="font-bold text-gray-900 mb-2 flex items-center text-sm">
        <BookOpen className="h-4 w-4 mr-1 text-sky-500" />
        {title}
      </h3>
      <div className="space-y-2">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="block p-2 bg-white rounded-lg hover:shadow-sm transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-sky-600 transition-colors text-sm">
                  {link.title}
                </h4>
                <p className="text-xs text-gray-600 mt-0.5">{link.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-sky-500 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedLinks;