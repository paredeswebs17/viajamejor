import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "¿Cuál es la mejor época para encontrar vuelos baratos?",
      answer: "La mejor época para encontrar vuelos baratos es entre 6-8 semanas antes del viaje para vuelos europeos, y 8-12 semanas para vuelos intercontinentales. Los martes y miércoles suelen tener los precios más bajos."
    },
    {
      question: "¿Necesito seguro de viaje para todos mis viajes?",
      answer: "Sí, recomiendo contratar seguro de viaje para todos los viajes al extranjero. Una emergencia médica puede costar miles de euros. Yo uso IATI Seguros porque ofrece cobertura mundial y atención 24/7 en español."
    },
    {
      question: "¿Qué tarjeta es mejor para viajar sin comisiones?",
      answer: "Revolut es mi favorita para viajar. Permite retirar hasta 200€ al mes sin comisiones, cambio de divisa al tipo real, y pagos sin comisiones en cualquier moneda."
    },
    {
      question: "¿Cuánto dinero necesito para viajar por el Sudeste Asiático?",
      answer: "En el Sudeste Asiático puedes viajar cómodamente con 25-35€ al día incluyendo alojamiento, comida y transporte local. En Tailandia he llegado a gastar solo 15€/día."
    }
  ];

  return (
    <section id="preguntas-frecuentes" className="py-6 sm:py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none"
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="text-sm font-semibold text-gray-900 pr-3">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-4 w-4 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-4 pb-3">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sky-600 font-medium text-sm hover:text-sky-700 transition-colors"
          >
            ¿Más preguntas? Escríbenos →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;