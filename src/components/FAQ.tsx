import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import MobileCollapsible from './MobileCollapsible';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

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
      answer: "La mejor época para encontrar vuelos baratos es entre 6-8 semanas antes del viaje para vuelos europeos, y 8-12 semanas para vuelos intercontinentales. Los martes y miércoles suelen tener los precios más bajos, y evita las fechas de alta demanda como Navidad, Semana Santa y puentes largos."
    },
    {
      question: "¿Necesito seguro de viaje para todos mis viajes?",
      answer: "Sí, recomiendo contratar seguro de viaje para todos los viajes al extranjero. Una emergencia médica puede costar miles de euros. Yo uso IATI Seguros porque ofrece cobertura mundial, atención 24/7 en español y no necesitas adelantar dinero en caso de emergencia."
    },
    {
      question: "¿Qué tarjeta es mejor para viajar sin comisiones?",
      answer: "Revolut es mi favorita para viajar. Permite retirar hasta 200€ al mes sin comisiones, cambio de divisa al tipo real, y pagos sin comisiones en cualquier moneda. Como alternativa, Wise es excelente para transferencias internacionales y N26 para viajes por Europa."
    },
    {
      question: "¿Cuánto dinero necesito para viajar por el Sudeste Asiático?",
      answer: "En el Sudeste Asiático puedes viajar cómodamente con 25-35€ al día incluyendo alojamiento, comida y transporte local. En Tailandia he llegado a gastar solo 15€/día durmiendo en hostels y comiendo comida local. Los vuelos suelen costar entre 400-600€ desde España."
    },
    {
      question: "¿Qué debo llevar en mi equipaje de mano para un viaje largo?",
      answer: "Los imprescindibles son: adaptador universal, power bank de 20.000 mAh, auriculares con cancelación de ruido, almohada de viaje, botella reutilizable, organizador de cables, tapones para oídos, antifaz, y una muda de ropa de repuesto. Todo debe caber en una mochila de 40L máximo."
    },
    {
      question: "¿Es seguro usar Airbnb o es mejor reservar hoteles?",
      answer: "Ambos son seguros si eliges bien. Uso Booking para estancias cortas y cuando quiero cancelación flexible. Airbnb es ideal para estancias largas (una semana o más) o viajes en grupo. Siempre leo las reseñas y verifico que el anfitrión tenga buena puntuación y responda rápido."
    },
    {
      question: "¿Cómo puedo viajar barato por Europa?",
      answer: "Para viajar barato por Europa: usa aerolíneas low-cost como Ryanair, reserva hostels o apartamentos en Airbnb, come en supermercados, usa transporte público, viaja en temporada baja (octubre-marzo excepto Navidad), y considera destinos menos turísticos como Albania, Polonia o Rumanía."
    },
    {
      question: "¿Qué apps necesito para viajar?",
      answer: "Las apps esenciales son: Skyscanner (vuelos baratos), Google Maps y Maps.me (navegación offline), Google Translate (traducción offline), Revolut/Wise (pagos sin comisiones), NordVPN (seguridad), XE Currency (cambio de divisas), y las apps de tu seguro de viaje y aerolíneas."
    }
  ];

  return (
    <section id="preguntas-frecuentes" className="py-8 sm:py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-gray-600">
            Las dudas más comunes sobre viajar barato y consejos de viaje
          </p>
        </div>

        <div className="space-y-2">
          {!isMobile && faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-gray-50 rounded-lg border ${openItems.includes(index) ? 'border-sky-500' : 'border-gray-200'} overflow-hidden`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100 focus:outline-none"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-base font-semibold text-gray-900 pr-3">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-4 w-4 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div 
                  id={`faq-answer-${index}`}
                  className="px-4 pb-3"
                >
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
          
          {isMobile && (
            <MobileCollapsible 
              title="Preguntas Frecuentes" 
              defaultOpen={false}
              noBorder={true} 
              noHighlight={true}
              titleClassName="text-base font-bold"
            >
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <p className="font-semibold mb-1 text-sm">{faq.question}</p>
                    <p className="text-gray-700 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </MobileCollapsible>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-3">
            ¿No encuentras la respuesta que buscas?
          </p>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-sm px-4 py-2"
          >
            Pregúntanos directamente
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;