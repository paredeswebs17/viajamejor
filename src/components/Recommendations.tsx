import { ExternalLink, Plane, Shield, CreditCard, Camera, Backpack, Smartphone, Bed } from 'lucide-react';
import MobileCollapsible from './MobileCollapsible';
import { useEffect, useState } from 'react';

const Recommendations = () => {
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

  const categories = [
    {
      title: "Equipamiento de Viaje",
      icon: <Backpack className="h-6 w-6" />,
      items: [
        {
          name: "Mochila Cabina 40x20x25 (compatible con Ryanair)",
          description: "Perfecta para aerolíneas low-cost. Antirrobo, puerto USB y cumple con medidas 40x20x25cm.",
          price: "Desde 28€",
          affiliate: "https://www.amazon.es/Hayayu-40x20x25-Mochilas-Senderismo-Impermeable/dp/B0CBVFL64Z?tag=viajamejor-21"
        },
        {
          name: "Adaptador Universal TESSAN",
          description: "Funciona en más de 150 países. Tiene USB-C y carga rápida.",
          price: "Desde 20€",
          affiliate: "https://www.amazon.es/TESSAN-Adaptador-Universal-Internacional-Americano/dp/B0B2DRC76L?tag=viajamejor-21"
        },
        {
          name: "Batería Externa INIU 10000mAh",
          description: "Pequeña, ligera y suficiente para un par de cargas completas. Compatible con todos los dispositivos.",
          price: "Desde 22€",
          affiliate: "https://www.amazon.es/INIU-10000mAh-Cargador-Portatil-Tel%C3%A9fono/dp/B08VD632WJ?tag=viajamejor-21"
        },
        {
          name: "Báscula Digital para Maletas MYCARBON",
          description: "Evita sorpresas en el aeropuerto. Precisión digital y pantalla retroiluminada.",
          price: "Desde 12€",
          affiliate: "https://www.amazon.es/MYCARBON-Equipaje-Port%C3%A1til-Electr%C3%B3nica-Retroiluminada/dp/B01IDJM8OA?tag=viajamejor-21"
        },
        {
          name: "Almohada Viscoelástica de Viaje",
          description: "Comodidad extra para vuelos largos. Incluye antifaz y tapones de regalo.",
          price: "Desde 14€",
          affiliate: "https://www.amazon.es/SOMLAW-Almohada-Viscoel%C3%A1stica-Memoria-Viajando/dp/B0B96TP1WX?tag=viajamejor-21"
        },
        {
          name: "Maleta Amazon Basics Mediana",
          description: "Rígida, ligera y con ruedas giratorias 360º. Excelente relación calidad-precio.",
          price: "Desde 43€",
          affiliate: "https://www.amazon.es/Amazon-Basics-Expandible-Equipaje-Giratorias/dp/B071VG5N9D?tag=viajamejor-21"
        },
        {
          name: "Maleta Amazon Basics Grande",
          description: "Tamaño grande, ideal para viajes largos. Carcasa rígida y ruedas giratorias.",
          price: "Desde 76€",
          affiliate: "https://www.amazon.es/AmazonBasics-Maleta-r%C3%ADgida-giratoria-Negro/dp/B071HHX6VF?tag=viajamejor-21"
        },
        {
          name: "Auriculares Inalámbricos Cancelación Ruido",
          description: "Ligeros, cómodos y con cancelación activa de ruido. Perfectos para vuelos largos y trayectos donde quieras desconectar del ruido.",
          price: "Desde 29€",
          affiliate: "https://www.amazon.es/Auriculares-Inalámbricos-Controlador-Impermeable-Inalambricos/dp/B0BCKHQGJN?tag=viajamejor-21"
        }
      ]
    },
    {
      title: "Vuelos y Transporte",
      icon: <Plane className="h-6 w-6" />,
      items: [
        {
          name: "Kiwi.com",
          description: "Perfecto para vuelos con escalas complicadas. Su garantía de conexión me ha salvado varias veces.",
          price: "Gratis",
          affiliate: "https://kiwi.tpk.lv/z2gZyZ3E",
        }
      ]
    },
    {
      title: "Alojamiento",
      icon: <Bed className="h-6 w-6" />,
      items: [
        {
          name: "Booking.com",
          description: "Para hoteles de última hora y cancelación gratuita. Su programa Genius me da descuentos extra.",
          price: "Gratis",
          affiliate: "https://www.booking.com/",
          featured: true
        },
        {
          name: "Airbnb",
          description: "Para estancias largas y experiencias locales. Uso los filtros para encontrar sitios con cocina.",
          price: "Gratis",
          affiliate: "https://www.airbnb.es/",
        },
        {
          name: "Hostelworld",
          description: "Para hostels y conocer gente. Las reseñas son muy fiables y puedes reservar solo la primera noche.",
          price: "Gratis",
          affiliate: "https://www.hostelworld.com",
        }
      ]
    },
    {
      title: "Actividades y Tours",
      icon: <Camera className="h-6 w-6" />,
      items: [
        {
          name: "GetYourGuide",
          description: "Más variedad de actividades y tours únicos. Perfecto para experiencias especiales.",
          price: "Desde 15€",
          affiliate: "https://gyg.me/vHQMITYm",
        }
      ]
    },
    {
      title: "Seguros de Viaje",
      icon: <Shield className="h-6 w-6" />,
      items: [
        {
          name: "IATI Seguros",
          description: "El seguro que uso siempre. Me cubrió una emergencia médica de 3.000€ en Tailandia sin problemas.",
          price: "Desde 20€",
          affiliate: "https://www.iatiseguros.com?r=37344279073491",
          featured: true
        }
      ]
    },
    {
      title: "Finanzas de Viaje",
      icon: <CreditCard className="h-6 w-6" />,
      items: [
        {
          name: "Revolut",
          description: "Mi tarjeta favorita para viajar. Sin comisiones en el extranjero y cambio al tipo real.",
          price: "Gratis",
          affiliate: "https://revolut.com/referral/?referral-code=antoni22jf!JUL1-25-AR-CB-CRY&geo-redirect",
          featured: true
        },
        {
          name: "N26",
          description: "Banco digital perfecto para nómadas. Cuenta gratuita y tarjeta sin comisiones.",
          price: "Gratis",
          affiliate: "https://n26.com/es-es",
        }
      ]
    },
    {
      title: "Apps y Herramientas Digitales",
      icon: <Smartphone className="h-6 w-6" />,
      items: [
        {
          name: "NordVPN",
          description: "La VPN que uso para navegar seguro y acceder a Netflix de otros países. Súper rápida y fiable.",
          price: "Desde 3€/mes",
          affiliate: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=127437&url_id=902",
          featured: true
        },
      ]
    }
  ];

  // Función para determinar el texto del botón
  const getButtonText = (affiliate: string) => {
    if (affiliate.includes('amazon.es') || affiliate.includes('amazon.com')) {
      return "Ver oferta en Amazon";
    }
    return "Ver oferta";
  };

  return (
    <section id="recomendaciones" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mis Herramientas y Recomendaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Después de 8 años viajando, estas son las herramientas, productos y servicios que realmente uso 
            y recomiendo. Solo incluyo cosas que he probado personalmente y que me han funcionado bien.
          </p>
        </div>

        <div className="space-y-12">
          {!isMobile && categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-sky-500"
                    style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h4>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">{item.description}</p>
                    
                    <div className="flex items-center justify-between mb-4 mt-auto">
                      <span className="text-lg font-semibold text-emerald-600">{item.price}</span>
                    </div>
                    
                    <a
                      href={item.affiliate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-medium py-3 px-4 rounded-lg hover:from-sky-600 hover:to-emerald-600 transition-all duration-200 mt-auto block flex items-center justify-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {getButtonText(item.affiliate)}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {isMobile && categories.map((category, categoryIndex) => (
            <MobileCollapsible 
              key={categoryIndex} 
              title={category.title}
              defaultOpen={categoryIndex === 0 ? true : false}
              noBorder={true}
              noHighlight={true}
              titleClassName="text-lg font-bold flex items-center"
            >
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ring-2 ring-sky-500">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h4>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                    
                    <div className="flex items-center justify-between mb-4 mt-auto">
                      <span className="text-lg font-semibold text-emerald-600">{item.price}</span>
                    </div>
                    
                    <a
                      href={item.affiliate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-medium py-3 px-4 rounded-lg hover:from-sky-600 hover:to-emerald-600 transition-all duration-200 block flex items-center justify-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {getButtonText(item.affiliate)}
                    </a>
                  </div>
                ))}
              </div>
            </MobileCollapsible>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Tienes alguna pregunta sobre estos productos?</h3>
          <p className="text-lg mb-6 opacity-90">
            He usado todo lo que recomiendo aquí. Si tienes dudas sobre algún producto o servicio, 
            escríbeme y te cuento mi experiencia personal.
          </p>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-sky-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Pregúntame lo que quieras
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;