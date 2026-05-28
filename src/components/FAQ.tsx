import { ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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
      question: "¿Qué debo llevar en mi equipaje de mano para un viaje largo?",
      answer: "Los imprescindibles son: adaptador universal, power bank de 20.000 mAh, auriculares con cancelación de ruido, almohada de viaje, botella reutilizable, organizador de cables, tapones para oídos, antifaz, y una muda de ropa de repuesto. Todo debe caber en una mochila de 40L máximo."
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
    <section ref={sectionRef} id="preguntas-frecuentes" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="reveal text-center mb-14">
          <span className="text-[10px] uppercase tracking-[.25em] text-teal-600 font-medium">
            Resolvemos tus dudas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mt-3 tracking-tight">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="reveal space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white rounded-sm overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="text-sm md:text-base font-medium text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openItems.includes(index) ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-teal-600 font-medium text-sm hover:text-teal-700 transition-colors"
          >
            ¿Más preguntas? Escríbenos →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
