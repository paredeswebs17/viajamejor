import { ExternalLink, Plane, Shield, Backpack, Hotel } from 'lucide-react';

const Recommendations = () => {
  const quickCategories = [
    {
      title: "Vuelos",
      icon: <Plane className="h-8 w-8" />,
      color: "bg-green-500",
      textColor: "text-white",
      description: "Encuentra ofertas",
      url: "https://kiwi.tpk.lv/z2gZyZ3E"
    },
    {
      title: "Alojamiento", 
      icon: <Hotel className="h-8 w-8" />,
      color: "bg-pink-500",
      textColor: "text-white",
      description: "Hoteles baratos",
      url: "https://www.booking.com/"
    },
    {
      title: "Seguros",
      icon: <Shield className="h-8 w-8" />,
      color: "bg-purple-500", 
      textColor: "text-white",
      description: "IATI 5% dto",
      url: "https://www.iatiseguros.com?r=37344279073491"
    },
    {
      title: "Equipaje",
      icon: <Backpack className="h-8 w-8" />,
      color: "bg-blue-500",
      textColor: "text-white", 
      description: "Productos útiles",
      url: "/equipaje/8-objetos-imprescindibles"
    }
  ];

  const topProducts = [
    {
      name: "Revolut",
      description: "Tarjeta sin comisiones para viajar",
      price: "Gratis",
      affiliate: "https://revolut.com/referral/?referral-code=antoni22jf!AUG1-25-AR-CL1H-CRY&geo-redirect"
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
    <section id="recomendaciones" className="relative py-8 sm:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick categories - 2x2 grid on mobile */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
            Ofertas y recomendaciones
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {quickCategories.map((category, index) => (
              <a
                key={index}
                href={category.url}
                target={category.url.startsWith('http') ? "_blank" : undefined}
                rel={category.url.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`${category.color} ${category.textColor} rounded-lg p-4 text-center hover:opacity-90 transition-opacity h-28 flex flex-col justify-center items-center`}
              >
                {category.icon}
                <span className="font-semibold text-sm mt-1">{category.title}</span>
                <span className="text-xs opacity-90">{category.description}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Top products - Compact list */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Productos que uso
          </h3>
          <div className="space-y-2">
            {topProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-gray-900 text-sm">{product.name}</h4>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5">{product.description}</p>
                  <span className="text-sm font-semibold text-emerald-600">{product.price}</span>
                </div>
                <a
                  href={product.affiliate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-500 text-white px-3 py-1 rounded text-xs font-medium hover:bg-sky-600 transition-colors flex items-center space-x-1"
                >
                  <span>Ver</span>
                  <ExternalLink className="h-3 w-3" />
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