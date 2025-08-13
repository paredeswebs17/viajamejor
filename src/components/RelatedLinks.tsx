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
    <div className="bg-gray-50 rounded-xl p-6 my-8">
      <h3 className="font-bold text-gray-900 mb-4 flex items-center">
        <BookOpen className="h-5 w-5 mr-2 text-sky-500" />
        {title}
      </h3>
      <div className="space-y-3">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="block p-3 bg-white rounded-lg hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900 group-hover:text-sky-600 transition-colors">
                  {link.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{link.description}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-sky-500 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedLinks;