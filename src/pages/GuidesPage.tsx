import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { MapPin, Euro, Star, CheckCircle, Mail } from 'lucide-react';

const GuidesPage = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const guides = [
    {
      id: 'demo',
      title: 'Guía Demo - Prueba de Formato',
      description: 'Guía de ejemplo para probar el formato y estructura de las guías de viaje. Basada en Roma con toda la información práctica.',
      image: 'https://images.pexels.com/photos/6199223/pexels-photo-6199223.jpeg',
      continent: 'Europa',
      featured: true,
      available: true,
      badge: '🧪 Demo',
      price: '0€',
      rating: 5.0,
      url: '/guia-demo'
    },
    {
      id: 'christmas',
      title: 'Mercados Navideños de Europa 2025-2026',
      description: 'Descubre los mejores mercados navideños de Budapest, Praga, Viena y Roma. Fechas, horarios, precios y consejos prácticos.',
      image: 'https://images.pexels.com/photos/19361199/pexels-photo-19361199.jpeg',
      continent: 'Europa',
      featured: true,
      available: true,
      badge: '🎄 Navidad',
      url: '/mercados-navidenos-europa'
    },
    {
      id: 'budapest',
      title: 'Budapest en 4 Días',
      description: 'La perla del Danubio te espera. Descubre castillos, balnearios termales únicos y la vibrante vida nocturna de la capital húngara.',
      image: 'https://images.pexels.com/photos/73796/budapest-hungary-parliament-building-73796.jpeg',
      price: '70€',
      rating: 4.9,
      continent: 'Europa',
      budget: '€€',
      featured: true,
      available: true,
      badge: '🔥 Popular',
      url: '/budapest-4-dias'
    },
    {
      id: 'prague',
      title: 'Praga en 3 días',
      description: 'Ciudad de cuento con arquitectura medieval y cerveza increíble',
      image:'https://images.pexels.com/photos/3046347/pexels-photo-3046347.jpeg',
      price: '60€',
      rating: 4.8,
      continent: 'Europa',
      budget: '€€',
      featured: true,
      available: true,
      badge: '🏰 Medieval',
      url: '/praga-3-dias'
    },
    {
      id: 'vienna',
      title: 'Viena en 3 días',
      description: 'Capital imperial de la música clásica, palacios Habsburgo y cultura cafetera',
      image: 'https://images.pexels.com/photos/8568542/pexels-photo-8568542.jpeg',
      price: '85€',
      rating: 4.9,
      continent: 'Europa',
      budget: '€€€',
      featured: true,
      available: true,
      badge: '🎼 Musical',
      url: '/viena-3-dias'
    },
    {
      id: 'amsterdam',
      title: 'Ámsterdam en 3 días',
      description: 'Canales UNESCO, arte holandés y cultura única. Descubre los museos más importantes y pueblos con molinos.',
      image: 'https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg',
      price: '90€',
      rating: 4.8,
      continent: 'Europa',
      budget: '€€€',
      featured: true,
      available: true,
      badge: '🚲 Bici',
      url: '/amsterdam-3-dias'
    },
    {
      id: 'roma',
      title: 'Roma en 3 días',
      description: 'Ciudad Eterna con Coliseo, Vaticano, Fontana di Trevi y Trastevere. Historia milenaria y gastronomía italiana.',
      image: 'https://images.pexels.com/photos/6199223/pexels-photo-6199223.jpeg',
      price: '80€',
      rating: 4.9,
      continent: 'Europa',
      budget: '€€€',
      featured: true,
      available: true,
      badge: '🏛️ Histórica',
      url: '/roma-3-dias'
    },
    {
      id: 'berlin',
      title: 'Berlín en 4 días',
      description: 'Historia, arte urbano y vida nocturna en la capital alemana',
      image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&q=80',
      continent: 'Europa',
      available: false,
      badge: '🆕 Nuevo',
      url: '#'
    },
    {
      id: 'santorini',
      title: 'Santorini en 5 días',
      description: 'Atardeceres únicos, pueblos blancos y vinos volcánicos en las Cícladas',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80',
      continent: 'Europa',
      available: false,
      url: '#'
    },
    {
      id: 'istanbul',
      title: 'Estambul en 4 días',
      description: 'Puente entre Europa y Asia, mezquitas históricas y bazares milenarios',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80',
      continent: 'Europa/Asia',
      available: false,
      url: '#'
    },
    {
      id: 'azores',
      title: 'Azores en 6 días',
      description: 'Islas volcánicas, lagos de cráter y aguas termales en el Atlántico',
      image: 'https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=600',
      continent: 'Europa',
      available: false,
      url: '#'
    },
    {
      id: 'lisboa',
      title: 'Lisboa en 3 días',
      description: 'Tranvías históricos, fado auténtico y pastéis de nata irresistibles',
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=600&q=80',
      continent: 'Europa',
      available: false,
      url: '#'
    },
    {
      id: 'sardinia',
      title: 'Cerdeña en 7 días',
      description: 'Playas paradisíacas, cultura nuraghi y gastronomía mediterránea auténtica',
      image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=600',
      continent: 'Europa',
      available: false,
      url: '#'
    },
    {
      id: 'croatia',
      title: 'Croacia en 8 días',
      description: 'Costa dálmata, parques nacionales y ciudades medievales junto al Adriático',
      image: 'https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=600',
      continent: 'Europa',
      available: false,
      url: '#'
    },
    {
      id: 'sri-lanka',
      title: 'Sri Lanka en 10 días',
      description: 'Templos budistas, plantaciones de té, safaris y playas vírgenes',
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=600&q=80',
      continent: 'Asia',
      available: false,
      url: '#'
    }
  ];

  const faqs = [
    {
      question: "¿Qué incluyen las guías de viaje?",
      answer: "Cada guía incluye itinerario detallado día por día, presupuesto real desglosado, mapa interactivo con ubicaciones marcadas, enlaces directos para reservas, consejos de transporte local, recomendaciones de restaurantes probados y trucos para ahorrar dinero."
    },
    {
      question: "¿Las guías se actualizan regularmente?",
      answer: "Sí, actualizamos nuestras guías cada 6 meses con nuevos precios, restaurantes, atracciones y consejos basados en feedback de otros viajeros. Los suscriptores reciben las actualizaciones automáticamente."
    },
    {
      question: "¿Puedo usar las guías sin conexión a internet?",
      answer: "Absolutamente. Todas nuestras guías están disponibles en formato PDF descargable para que puedas acceder a toda la información sin necesidad de internet durante tu viaje."
    }
  ];

  const featuredGuides = guides.filter(guide => guide.featured);
  const otherGuides = guides.filter(guide => !guide.featured);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch('https://formspree.io/f/mwpqebpb', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target as HTMLFormElement),
      });

      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    } catch (error) {
      console.error('Error al suscribirse:', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Guías de Viaje Detalladas - Itinerarios y Presupuestos Reales | Viaja Mejor</title>
        <meta name="description" content="Guías de viaje completas con itinerarios detallados, presupuestos reales y mapas interactivos. Budapest, Berlín, Praga y más destinos." />
        <meta name="keywords" content="guías de viaje, itinerarios detallados, presupuesto viaje, guía budapest, guía berlín, mapas de viaje" />
        <link rel="canonical" href="https://viajamejor.net/guias" />
        
        <meta property="og:title" content="Guías de Viaje Detalladas - Itinerarios y Presupuestos Reales" />
        <meta property="og:description" content="Descubre nuestras guías completas con itinerarios día por día y presupuestos reales para viajar mejor." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://viajamejor.net/guias" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white pt-20 md:pt-36 lg:pt-48 pb-10 md:pb-14 lg:pb-16 min-h-[350px] md:min-h-[450px] lg:min-h-[550px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3490665/pexels-photo-3490665.jpeg"
            alt="Guías de viaje"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/60 to-[#0d9488]/65"></div>
        </div>

        {/* Floating Circles */}
        <div className="absolute top-10 left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float z-10"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/15 rounded-full blur-3xl animate-float z-10" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-20 max-w-6xl mx-auto text-center px-4 w-full">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
            Guías de Viaje
          </h1>

          <p className="text-base text-white/90 mb-6">
            Itinerarios detallados para que viajes más y gastes menos
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span>📍 20+ Destinos</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Euro className="h-4 w-4 mr-2" />
              <span>💰 Presupuestos Reales</span>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Featured Guides */}
      {featuredGuides.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Guías Completas Disponibles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredGuides.map((guide) => (
                <div key={guide.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                  <div className="relative">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {guide.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {guide.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {guide.description}
                    </p>

                    <div className="flex-1">
                      {guide.id === 'christmas' ? (
                        <div className="space-y-2 mb-6">
                          <div className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                            <span>✓ 4 ciudades europeas</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                            <span>✓ Fechas y horarios 2025-2026</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                            <span>✓ Mejores mercados y especialidades</span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center gap-6 mb-4">
                            <div className="flex items-center">
                              <Euro className="h-5 w-5 text-emerald-500 mr-2" />
                              <span className="text-xl font-bold text-emerald-600">{guide.price?.replace('€', '') || 'N/A'}</span>
                              <span className="text-gray-500 ml-1 text-sm">aprox./día</span>
                            </div>

                            <div className="flex items-center">
                              <Star className="h-5 w-5 text-orange-500 mr-1" />
                              <span className="font-semibold text-gray-900">{guide.rating}</span>
                              <span className="text-orange-500 ml-1">★★★★★</span>
                            </div>
                          </div>

                          <div className="space-y-2 mb-6">
                            <div className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                              <span>✓ Itinerario hora por hora</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                              <span>✓ Enlaces de reservas</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                              <span>✓ Consejos locales</span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <a
                      href={guide.url}
                      className="block w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center"
                    >
                      📖 Ver Guía
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Guides Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Más destinos increíbles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherGuides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-48 object-cover"
                  />
                  {guide.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {guide.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="bg-sky-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {guide.continent}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {guide.description}
                  </p>
                  
                  {guide.available && (
                    <div className="flex items-center justify-between mb-4">
                      {guide.price && (
                        <div className="flex items-center">
                          <Euro className="h-4 w-4 text-emerald-500 mr-1" />
                          <span className="font-bold text-emerald-600">{guide.price.replace('€', '')}</span>
                          <span className="text-gray-500 text-sm ml-1">aprox./día</span>
                        </div>
                      )}
                      
                      {guide.rating && (
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-1" />
                          <span className="font-semibold text-gray-900 text-sm">{guide.rating}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <button
                    onClick={() => guide.available && guide.url ? window.location.href = guide.url : null}
                    disabled={!guide.available}
                    className={`w-full font-semibold py-3 px-4 rounded-lg transition-all duration-200 ${
                      guide.available
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {guide.available ? '📖 Ver Guía' : 'Próximamente'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-sky-500 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {isSubscribed ? (
              <div className="py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Gracias por suscribirte!</h3>
                <p className="text-gray-600">
                  Serás el primero en conocer nuestras nuevas guías de viaje.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    ¿Quieres ser el primero en conocer nuestras nuevas guías?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Únete a nuestra lista y recibe notificaciones cuando publiquemos nuevas guías detalladas.
                  </p>
                </div>

                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                    required
                  />
                  <input type="hidden" name="subject" value="Suscripción Newsletter - Guías de Viaje" />
                  <input type="hidden" name="message" value="Nueva suscripción al newsletter desde la página de guías" />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Suscribirme
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Preguntas frecuentes sobre nuestras guías
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {expandedFaq === index ? (
                      <div className="w-5 h-5 text-gray-500">−</div>
                    ) : (
                      <div className="w-5 h-5 text-gray-500">+</div>
                    )}
                  </div>
                </button>
                
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GuidesPage;