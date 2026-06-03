import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { MapPin, CheckCircle, Mail, ChevronDown, ArrowRight } from 'lucide-react';

const GuidesPage = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const guides = [
    {
      id: 'budapest',
      title: 'Budapest en 4 Días',
      subtitle: 'La perla del Danubio',
      description: 'Castillos, balnearios termales únicos y la vibrante vida nocturna de la capital húngara.',
      image: 'https://images.pexels.com/photos/73796/budapest-hungary-parliament-building-73796.jpeg',
      days: '4 días',
      budget: '70€/día',
      tag: 'Popular',
      tagColor: 'bg-rose-500',
      url: '/budapest-4-dias'
    },
    {
      id: 'prague',
      title: 'Praga en 3 Días',
      subtitle: 'Ciudad de cuento',
      description: 'Arquitectura medieval, cerveza artesanal y puentes mágicos sobre el Moldava.',
      image: 'https://images.pexels.com/photos/3046347/pexels-photo-3046347.jpeg',
      days: '3 días',
      budget: '60€/día',
      tag: 'Medieval',
      tagColor: 'bg-amber-500',
      url: '/praga-3-dias'
    },
    {
      id: 'vienna',
      title: 'Viena en 3 Días',
      subtitle: 'Capital imperial',
      description: 'Música clásica, palacios Habsburgo y la mejor cultura cafetera del mundo.',
      image: 'https://images.pexels.com/photos/8568542/pexels-photo-8568542.jpeg',
      days: '3 días',
      budget: '85€/día',
      tag: 'Elegante',
      tagColor: 'bg-slate-700',
      url: '/viena-3-dias'
    },
    {
      id: 'amsterdam',
      title: 'Ámsterdam en 3 Días',
      subtitle: 'Canales y cultura',
      description: 'Canales UNESCO, arte holandés y pueblos con molinos de viento.',
      image: 'https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg',
      days: '3 días',
      budget: '90€/día',
      tag: 'UNESCO',
      tagColor: 'bg-blue-500',
      url: '/amsterdam-3-dias'
    },
    {
      id: 'roma',
      title: 'Roma en 3 Días',
      subtitle: 'La Ciudad Eterna',
      description: 'Coliseo, Vaticano, Fontana di Trevi y la mejor gastronomía italiana.',
      image: 'https://images.pexels.com/photos/6199223/pexels-photo-6199223.jpeg',
      days: '3 días',
      budget: '80€/día',
      tag: 'Histórica',
      tagColor: 'bg-amber-600',
      url: '/roma-3-dias'
    },
    {
      id: 'london',
      title: 'Londres en 3 Días',
      subtitle: 'Historia y vanguardia',
      description: 'Big Ben, Tower Bridge, museos gratuitos y multiculturalidad vibrante.',
      image: 'https://images.pexels.com/photos/5380087/pexels-photo-5380087.jpeg',
      days: '3 días',
      budget: '95€/día',
      tag: 'Cosmopolita',
      tagColor: 'bg-slate-800',
      url: '/londres-3-dias'
    },
    {
      id: 'athens',
      title: 'Atenas en 3 Días',
      subtitle: 'Cuna de la civilización',
      description: 'Acrópolis, Partenón, Ágora Antigua y gastronomía griega auténtica.',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg',
      days: '3 días',
      budget: '65€/día',
      tag: 'Clásica',
      tagColor: 'bg-teal-600',
      url: '/atenas-3-dias'
    },
    {
      id: 'christmas',
      title: 'Mercados Navideños',
      subtitle: 'Europa 2025-2026',
      description: 'Los mejores mercados navideños de Budapest, Praga, Viena y Roma.',
      image: 'https://images.pexels.com/photos/19361199/pexels-photo-19361199.jpeg',
      days: 'Temporada',
      budget: 'Variable',
      tag: 'Navidad',
      tagColor: 'bg-red-600',
      url: '/mercados-navidenos-europa'
    },
  ];

  const comingSoon = [
    { title: 'Berlín en 4 días', image: 'https://images.pexels.com/photos/1128408/pexels-photo-1128408.jpeg', continent: 'Europa' },
    { title: 'Santorini en 5 días', image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg', continent: 'Europa' },
    { title: 'Estambul en 4 días', image: 'https://images.pexels.com/photos/2042032/pexels-photo-2042032.jpeg', continent: 'Europa/Asia' },
    { title: 'Lisboa en 3 días', image: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg', continent: 'Europa' },
    { title: 'Cerdeña en 7 días', image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg', continent: 'Europa' },
    { title: 'Croacia en 8 días', image: 'https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg', continent: 'Europa' },
  ];

  const faqs = [
    {
      question: "¿Qué incluyen las guías de viaje?",
      answer: "Cada guía incluye itinerario detallado día por día, presupuesto real desglosado, enlaces directos para reservas, consejos de transporte local, recomendaciones de restaurantes probados y trucos para ahorrar dinero."
    },
    {
      question: "¿Las guías se actualizan regularmente?",
      answer: "Sí, actualizamos nuestras guías cada 6 meses con nuevos precios, restaurantes, atracciones y consejos basados en feedback de otros viajeros."
    },
    {
      question: "¿Puedo usar las guías sin conexión a internet?",
      answer: "Absolutamente. Todas nuestras guías están disponibles en formato PDF descargable para que puedas acceder a toda la información sin necesidad de internet durante tu viaje."
    }
  ];

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
        <meta property="og:image" content="https://images.pexels.com/photos/3490665/pexels-photo-3490665.jpeg" />
      </Helmet>

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden flex items-end">
        <img
          src="https://images.pexels.com/photos/3490665/pexels-photo-3490665.jpeg"
          alt="Guías de viaje"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pb-12 md:pb-16 w-full">
          <span className="inline-block bg-teal-400 text-slate-900 text-[9px] uppercase tracking-[.2em] font-bold px-3 py-1.5 rounded-full mb-5">
            {guides.length} guías disponibles
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-4">
            Guías de Viaje
          </h1>
          <p className="text-white/60 text-lg font-light max-w-lg">
            Itinerarios detallados, presupuestos reales y consejos locales para que viajes más y mejor
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-slate-900 text-white border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-10 md:gap-16 text-center">
          <div>
            <span className="block text-2xl font-serif text-teal-400">{guides.length}</span>
            <span className="text-[9px] uppercase tracking-[.2em] text-white/40">guías completas</span>
          </div>
          <div>
            <span className="block text-2xl font-serif text-teal-400">10+</span>
            <span className="text-[9px] uppercase tracking-[.2em] text-white/40">ciudades</span>
          </div>
          <div>
            <span className="block text-2xl font-serif text-teal-400">100%</span>
            <span className="text-[9px] uppercase tracking-[.2em] text-white/40">gratuitas</span>
          </div>
          <div>
            <span className="block text-2xl font-serif text-teal-400">2026</span>
            <span className="text-[9px] uppercase tracking-[.2em] text-white/40">actualizadas</span>
          </div>
        </div>
      </div>

      {/* Available Guides Grid */}
      <div className="bg-stone-50">
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="mb-14">
            <span className="text-[10px] uppercase tracking-[.25em] text-gray-400 font-semibold mb-3 block">Explora</span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Guías disponibles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((guide) => (
              <a
                key={guide.id}
                href={guide.url}
                className="group bg-white rounded-sm overflow-hidden border border-stone-200 hover:border-stone-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 left-3">
                    <span className={`${guide.tagColor} text-white text-[8px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full`}>
                      {guide.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[9px] text-gray-400 uppercase tracking-wider font-medium">{guide.days}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-[9px] text-teal-600 uppercase tracking-wider font-semibold">{guide.budget}</span>
                  </div>

                  <h3 className="font-serif text-xl text-gray-900 mb-1 group-hover:text-teal-700 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-3">{guide.subtitle}</p>

                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {guide.description}
                  </p>

                  <div className="mt-5 flex items-center text-teal-600 text-xs font-semibold group-hover:text-teal-700 transition-colors">
                    Ver guía completa
                    <ArrowRight size={12} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Coming Soon */}
      <div className="bg-white">
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="mb-14">
            <span className="text-[10px] uppercase tracking-[.25em] text-gray-400 font-semibold mb-3 block">Próximamente</span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Más destinos en camino</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {comingSoon.map((guide, i) => (
              <div key={i} className="relative rounded-sm overflow-hidden group aspect-[4/3]">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="font-serif text-lg md:text-xl text-white mb-1">{guide.title}</h3>
                  <span className="text-[9px] uppercase tracking-wider text-white/50">{guide.continent}</span>
                  <span className="mt-3 bg-white/10 backdrop-blur-sm text-white text-[9px] uppercase tracking-wider font-medium px-3 py-1 rounded-full border border-white/20">
                    Próximamente
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Newsletter */}
      <div className="bg-teal-700">
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-20 md:py-28 text-center">
          {isSubscribed ? (
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-teal-200" />
              </div>
              <h3 className="font-serif text-2xl text-white mb-2">Gracias por suscribirte</h3>
              <p className="text-teal-100/60">Serás el primero en conocer nuestras nuevas guías.</p>
            </div>
          ) : (
            <>
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-6 w-6 text-teal-200" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-white mb-3">
                No te pierdas las nuevas guías
              </h2>
              <p className="text-teal-100/60 mb-8 max-w-md mx-auto">
                Recibe notificaciones cuando publiquemos nuevas guías detalladas con itinerarios y presupuestos.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors text-sm"
                  required
                />
                <input type="hidden" name="subject" value="Suscripción Newsletter - Guías de Viaje" />
                <input type="hidden" name="message" value="Nueva suscripción al newsletter desde la página de guías" />
                <button
                  type="submit"
                  className="bg-white text-teal-800 hover:bg-teal-50 font-semibold py-3.5 px-6 rounded-sm transition-colors text-sm shadow-lg"
                >
                  Suscribirme
                </button>
              </form>
            </>
          )}
        </section>
      </div>

      {/* What's included */}
      <div className="bg-slate-900">
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="text-center mb-14">
            <span className="text-[10px] uppercase tracking-[.25em] text-teal-400 font-semibold mb-3 block">Incluido</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white">¿Qué incluye cada guía?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <MapPin size={20} />, title: 'Itinerario día a día', desc: 'Hora por hora, optimizado para no perder tiempo' },
              { icon: <span className="text-lg">💰</span>, title: 'Presupuesto real', desc: 'Desglosado con precios actualizados 2026' },
              { icon: <span className="text-lg">🍽️</span>, title: 'Restaurantes probados', desc: 'Recomendaciones locales con precios' },
              { icon: <span className="text-lg">💡</span>, title: 'Trucos y tips', desc: 'Consejos que solo un local conoce' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-sm text-center hover:bg-white/[0.07] transition-colors">
                <div className="flex items-center justify-center mb-4 text-teal-400">{item.icon}</div>
                <h4 className="font-semibold text-white text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FAQ */}
      <div className="bg-white">
        <section className="max-w-3xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[.25em] text-gray-400 font-semibold mb-3 block">FAQ</span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Preguntas frecuentes</h2>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-sm overflow-hidden hover:border-gray-200 transition-colors">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium text-gray-900 text-sm">{faq.question}</h3>
                  <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${expandedFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default GuidesPage;
