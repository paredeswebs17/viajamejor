import { useEffect, useRef } from 'react';
import { ExternalLink, Plane, Shield, Backpack, Hotel } from 'lucide-react';

const Recommendations = () => {
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

  const quickCategories = [
    {
      title: "Vuelos",
      icon: <Plane className="h-6 w-6" />,
      description: "Encuentra ofertas",
      url: "https://kiwi.tpk.lv/z2gZyZ3E"
    },
    {
      title: "Alojamiento",
      icon: <Hotel className="h-6 w-6" />,
      description: "Hoteles baratos",
      url: "https://booking.tpk.lv/UianlEEu"
    },
    {
      title: "Seguros",
      icon: <Shield className="h-6 w-6" />,
      description: "IATI 5% dto",
      url: "https://www.iatiseguros.com?r=37344279073491"
    },
    {
      title: "Equipaje",
      icon: <Backpack className="h-6 w-6" />,
      description: "Productos útiles",
      url: "/equipaje/8-objetos-imprescindibles"
    }
  ];

  const topProducts = [
    {
      name: "Revolut",
      description: "Tarjeta sin comisiones para viajar",
      price: "Gratis",
      affiliate: "https://revolut.com/referral/?referral-code=antoni22jf!OCT1-25-AR-CH1H2-CRY&geo-redirect"
    },
    {
      name: "Batería Externa INIU",
      description: "Power bank 10000mAh compacta y rápida",
      price: "Desde 20€",
      affiliate: "https://www.amazon.es/INIU-10000mAh-Cargador-Portatil-Tel%C3%A9fono/dp/B08VD632WJ?tag=viajamejor-21"
    },
    {
      name: "Mochila Cabina",
      description: "Compatible Ryanair 40x20x25",
      price: "Desde 28€",
      affiliate: "https://www.amazon.es/Hayayu-40x20x25-Mochilas-Senderismo-Impermeable/dp/B0CBVFL64Z?tag=viajamejor-21"
    },
    {
      name: "Almohada Viscoelástica",
      description: "Almohada de viaje con antifaz incluido",
      price: "Desde 25€",
      affiliate: "https://www.amazon.es/SOMLAW-Almohada-Viscoel%C3%A1stica-Memoria-Viajando/dp/B0B96TP1WX?tag=viajamejor-21"
    }
  ];

  return (
    <section ref={sectionRef} id="recomendaciones" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="reveal mb-12">
          <span className="text-[10px] uppercase tracking-[.25em] text-teal-600 font-medium">
            Herramientas y ofertas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mt-3 tracking-tight">
            Recomendaciones
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-light mt-4 max-w-lg">
            Productos y servicios que uso en cada viaje
          </p>
        </div>

        {/* Quick categories */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {quickCategories.map((category, index) => (
            <a
              key={index}
              href={category.url}
              target={category.url.startsWith('http') ? "_blank" : undefined}
              rel={category.url.startsWith('http') ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center justify-center p-8 border border-gray-200 rounded-sm hover:border-teal-300 hover:bg-teal-50/30 transition-all duration-300"
            >
              <div className="text-gray-400 group-hover:text-teal-600 transition-colors mb-3">
                {category.icon}
              </div>
              <span className="font-semibold text-sm text-gray-900">{category.title}</span>
              <span className="text-xs text-gray-500 mt-1">{category.description}</span>
            </a>
          ))}
        </div>

        {/* Top products */}
        <div className="reveal">
          <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-8">
            Lo que llevo en la mochila
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-5 border border-gray-100 rounded-sm hover:border-gray-200 transition-colors"
              >
                <div className="flex-1 mr-4">
                  <h4 className="font-semibold text-gray-900 text-sm">{product.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{product.description}</p>
                  <span className="text-sm font-semibold text-teal-600 mt-1 inline-block">{product.price}</span>
                </div>
                <a
                  href={product.affiliate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-3 rounded-sm transition-colors flex-shrink-0"
                >
                  <span>Ver oferta</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
