import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, title = "Preguntas frecuentes" }) => {
  const [openItems, setOpenItems] = useState(new Set<number>());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
              {openItems.has(index) ? 
                <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" /> : 
                <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
              }
            </button>
            
            {openItems.has(index) && (
              <div className="px-6 pb-4">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;