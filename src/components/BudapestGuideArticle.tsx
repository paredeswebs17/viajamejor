import { ArrowLeft, Share2, MapPin, Euro, Star, Clock, CheckCircle, Calendar, Plane, CreditCard, Shield, Backpack } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import TableOfContents from './TableOfContents';
import RelatedArticles from './RelatedArticles';
import AffiliateBox from './AffiliateBox';
import FAQSection from './FAQSection';

interface BudapestGuideArticleProps {
  onBack: () => void;
}

const BudapestGuideArticle: React.FC<BudapestGuideArticleProps> = ({ onBack }) => {
  const breadcrumbs = [
    { label: 'Inicio', href: '/' },
    { label: 'Guías', href: '/guias' },
    { label: 'Budapest en 4 Días' }
  ];

  const tocSections = [
    { id: 'itinerario', title: 'Tu Itinerario Optimizado' },
    { id: 'dia-1', title: 'Día 1: Corazón Imperial y Cultura Judía' },
    { id: 'dia-2', title: 'Día 2: Realeza y Romanticismo Danubiano' },
    { id: 'dia-3', title: 'Día 3: Relajación Termal y Elegancia Imperial' },
    { id: 'dia-4', title: 'Día 4: Autenticidad Local y Vistas Finales' },
    { id: 'presupuestos', title: 'Presupuestos Realistas' },
    { id: 'transporte', title: 'Conexiones y Transporte' },
    { id: 'finanzas', title: 'Estrategia Financiera' },
    { id: 'timing', title: 'Cuándo Ir' },
    { id: 'alojamiento', title: 'Dónde Dormir' },
    { id: 'gastronomia', title: 'Gastronomía Auténtica' }
  ];

  const faqs = [
    {
      question: "¿Es segura Budapest para turistas?",
      answer: "Muy segura. Budapest es una de las capitales más seguras de Europa. Solo toma precauciones normales en zonas de fiesta nocturna y ten cuidado con carteristas en transporte público durante horas punta."
    },
    {
      question: "¿Hablan inglés en Budapest?",
      answer: "En sitios turísticos siempre encontrarás personal que habla inglés. Los jóvenes húngaros dominan el inglés muy bien. En restaurantes locales puede ser más limitado, pero con gestos y Google Translate te las arreglas perfectamente."
    },
    {
      question: "¿Cuánto efectivo necesito para 4 días?",
      answer: "Recomiendo cambiar 50-80€ a florines húngaros para transportes públicos, mercados y sitios pequeños. La mayoría de restaurantes y atracciones aceptan tarjeta, pero siempre es útil tener algo de efectivo."
    }
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Header del artículo */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-lg transition-all duration-200 font-medium border border-sky-200 hover:border-sky-300 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a Guías
        </button>
        
        <div className="mb-6">
          <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Guía Completa
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Descubre Budapest en 4 Días: La Capital Más Sorprendente de Europa
        </h1>

        <div className="flex items-center justify-between text-gray-600 text-sm mb-8">
          <div className="flex items-center space-x-4">
            <span className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
              <Clock className="h-3 w-3 mr-1" />
              15 min lectura
            </span>
            <span className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
              <MapPin className="h-3 w-3 mr-1" />
              Budapest, Hungría
            </span>
          </div>
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Budapest en 4 Días: Guía Completa',
                  text: 'Descubre Budapest con esta guía detallada',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('¡Enlace copiado al portapapeles!');
                }).catch(() => {
                  window.open(`https://twitter.com/intent/tweet?text=Budapest en 4 Días: Guía Completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
                });
              }
            }}
            className="inline-flex items-center text-gray-600 hover:text-sky-600 bg-gray-50 hover:bg-sky-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium border border-gray-200 hover:border-sky-300"
          >
            <Share2 className="h-4 w-4 mr-2" />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      {/* Imagen destacada */}
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
          alt="Vista panorámica de Budapest con el Parlamento y el Danubio al atardecer"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      <TableOfContents sections={tocSections} />

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Budapest es esa ciudad que te sorprende desde el primer momento.</strong> La "Perla del Danubio" 
            combina la elegancia imperial de Viena con los precios de Europa del Este. Después de visitarla varias veces, 
            he creado este itinerario optimizado para que veas lo mejor en 4 días sin perderte nada esencial.
          </p>
        </div>

        {/* Itinerario optimizado */}
        <section id="itinerario" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tu Itinerario Optimizado</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-sky-500 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Jornada</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Experiencias Clave</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">1er Día</td>
                  <td className="border border-gray-300 px-4 py-3">Majestuoso Parlamento + Caminata histórica + Sinagoga Central + Torre de San Esteban</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">2º Día</td>
                  <td className="border border-gray-300 px-4 py-3">Fortaleza Real + Mirador de Pescadores + Travesía del Danubio + Paseo nocturno</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">3er Día</td>
                  <td className="border border-gray-300 px-4 py-3">Aguas termales históricas + Monumentos imperiales + Avenida elegante + Café legendario</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">4º Día</td>
                  <td className="border border-gray-300 px-4 py-3">Mercados auténticos + Mirador panorámico + Exploración libre</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-4">
            <p className="text-emerald-800 text-sm mb-0">
              <strong>📍 Ubicación estratégica recomendada:</strong> Distrito central para maximizar tiempo y minimizar transportes.
            </p>
          </div>
        </section>

        {/* Día 1 */}
        <section id="dia-1" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">JORNADA 1: Corazón Imperial y Cultura Judía</h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                🔥 Primera Parada - Edificio Parlamentario (9:00h)
              </h3>
              <p className="text-gray-700 mb-4">
                El imponente edificio gubernamental húngaro te dejará sin palabras. Su arquitectura neogótica rivaliza con Westminster.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                  <h4 className="font-semibold text-sky-800 mb-2">Detalles prácticos:</h4>
                  <ul className="text-sky-700 text-sm space-y-1">
                    <li>• <strong>Inversión:</strong> 16€ aproximadamente</li>
                    <li>• <strong>Tiempo necesario:</strong> 1h 30min</li>
                    <li>• <strong>Acceso:</strong> Solo con reserva previa</li>
                    <li>• <strong>Idioma:</strong> Audio-guía española disponible</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <p className="text-orange-800 text-sm">
                    <strong>⚠️ Consejo clave:</strong> Reserva 48h antes o te quedarás sin entrada
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🚶 Descubrimiento a Pie - Tour Gratuito (11:00h)
              </h3>
              <p className="text-gray-700 mb-4">
                Conoce los secretos de Budapest con guías locales apasionados.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-800 mb-2">Lo que descubrirás:</h4>
                <ul className="text-emerald-700 text-sm space-y-1">
                  <li>• Leyendas urbanas fascinantes</li>
                  <li>• Rincones fotogénicos ocultos</li>
                  <li>• Historia de la ocupación soviética</li>
                  <li>• Tradiciones gastronómicas locales</li>
                  <li>• <strong>Finaliza:</strong> Entrada de la Sinagoga Principal</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🕍 Patrimonio Judío - Gran Sinagoga (13:30h)
              </h3>
              <p className="text-gray-700 mb-4">
                La comunidad judía más grande de Europa del Este tiene aquí su corazón.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Experiencia incluye:</h4>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• <strong>Costo:</strong> 12€ entrada completa</li>
                    <li>• <strong>Duración:</strong> 75 minutos</li>
                    <li>• <strong>Espacios:</strong> Templo + Museo + Jardín memorial</li>
                    <li>• <strong>Impacto:</strong> Uno de los lugares más emotivos</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Opciones gastronómicas:</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• <strong>Frici Papa:</strong> Platos tradicionales desde 8€</li>
                    <li>• <strong>Spinoza Café:</strong> Ambiente intelectual, 12-15€</li>
                    <li>• <strong>Street food:</strong> Lángos por 3-4€</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Día 2 */}
        <section id="dia-2" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">JORNADA 2: Realeza y Romanticismo Danubiano</h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🏰 Ascenso Real - Colina del Castillo (9:00h)
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">🚡 Funicular histórico</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <strong>Precio:</strong> 4€ ida/vuelta</li>
                    <li>• <strong>Experiencia:</strong> Nostálgica</li>
                    <li>• <strong>Ventaja:</strong> Sin esfuerzo</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">🚶 Caminata</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• <strong>Precio:</strong> Gratis</li>
                    <li>• <strong>Tiempo:</strong> 15 min subida</li>
                    <li>• <strong>Ventaja:</strong> Buen ejercicio matutino</li>
                  </ul>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="text-emerald-800 text-sm">
                  <strong>💡 Recomendación:</strong> Subir en funicular, bajar andando para disfrutar las vistas
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🌉 Gran Final - Navegación Nocturna (18:00h) ⭐ <span className="text-orange-500">IMPRESCINDIBLE</span>
              </h3>
              <p className="text-gray-700 mb-4">
                La manera más mágica de despedir el día en Budapest.
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
                <h4 className="font-semibold text-orange-800 mb-3">Detalles del crucero:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• <strong>Duración:</strong> 70 minutos</li>
                    <li>• <strong>Precio:</strong> 12-15€</li>
                    <li>• <strong>Incluye:</strong> Audio-guía española + bebida</li>
                  </ul>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• <strong>Timing perfecto:</strong> Atardecer + iluminación</li>
                    <li>• <strong>Vista única:</strong> Parlamento dorado reflejado</li>
                    <li>• <strong>⚠️ Reserva:</strong> Se agotan rápidamente</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Día 3 */}
        <section id="dia-3" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">JORNADA 3: Relajación Termal y Elegancia Imperial</h2>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🌊 Mañana Termal - Baños Széchenyi (9:00h) ⭐ <span className="text-emerald-500">EXPERIENCIA ÚNICA</span>
            </h3>
            <p className="text-gray-700 mb-4">
              Los baños termales más auténticos de Europa. ¡Funciona incluso con nieve!
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">🏊 Széchenyi (Recomendado)</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• <strong>Inversión:</strong> 18€ acceso completo</li>
                  <li>• <strong>Piscinas:</strong> 18 diferentes (3 al aire libre)</li>
                  <li>• <strong>Temperaturas:</strong> Entre 18°C y 38°C</li>
                  <li>• <strong>Tiempo ideal:</strong> 3 horas relajándote</li>
                  <li>• <strong>Llevar:</strong> Toalla + chanclas</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-2">🛁 Gellért (Alternativa)</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• <strong>Estilo:</strong> Art Nouveau, más sofisticado</li>
                  <li>• <strong>Ventaja:</strong> Completamente cubierto</li>
                  <li>• <strong>Precio:</strong> Similar al Széchenyi</li>
                  <li>• <strong>Perfil:</strong> Menos auténtico, más instagrameable</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-lg p-6">
              <h4 className="font-semibold text-emerald-800 mb-3">☕ Experiencia Legendaria - New York Café (18:30h)</h4>
              <p className="text-emerald-700 mb-3">El café más hermoso del mundo según muchos viajeros.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-emerald-700 text-sm space-y-1">
                  <li>• <strong>Ambiente:</strong> Palaciego, techos dorados</li>
                  <li>• <strong>Precios:</strong> 8-15€ café + pastel</li>
                </ul>
                <ul className="text-emerald-700 text-sm space-y-1">
                  <li>• <strong>Tiempo:</strong> 1 hora mínimo</li>
                  <li>• <strong>Tip:</strong> Reserva mesa o espera 30 min</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Día 4 */}
        <section id="dia-4" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">JORNADA 4: Autenticidad Local y Vistas Finales</h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🛒 Mañana Auténtica - Mercado Central (9:00h)
              </h3>
              <p className="text-gray-700 mb-4">Experimenta Budapest como un local.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">🌶️ Planta baja - Productos locales:</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• <strong>Páprika húngara:</strong> Desde 2€, mejor souvenir</li>
                    <li>• <strong>Salami húngaro:</strong> Calidad excepcional</li>
                    <li>• <strong>Vinos Tokaj:</strong> Dulce tradicional, desde 15€</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">🍽️ Primera planta - Gastronomía:</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• <strong>Lángos:</strong> Pan frito tradicional (3-4€)</li>
                    <li>• <strong>Goulash auténtico:</strong> En puestos locales (6-8€)</li>
                    <li>• <strong>Strudel:</strong> Postre tradicional (2-3€)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🗻 Ascensión Panorámica - Colina Gellért (10:30h)
              </h3>
              <p className="text-gray-700 mb-4">Las vistas más espectaculares de toda Budapest.</p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <h5 className="font-semibold text-green-800 text-sm mb-1">🚶 Caminata</h5>
                  <p className="text-green-700 text-xs">30-40 min, gratis, buen ejercicio</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h5 className="font-semibold text-blue-800 text-sm mb-1">🚌 Autobús 27</h5>
                  <p className="text-blue-700 text-xs">1.5€, hasta arriba directamente</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <h5 className="font-semibold text-orange-800 text-sm mb-1">🚕 Taxi</h5>
                  <p className="text-orange-700 text-xs">8-10€, cómodo pero menos aventurero</p>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                <h4 className="font-semibold text-sky-800 mb-2">En la cima:</h4>
                <ul className="text-sky-700 text-sm space-y-1">
                  <li>• <strong>Estatua de la Libertad:</strong> Símbolo de la ciudad</li>
                  <li>• <strong>Mirador:</strong> 360° de Budapest completo</li>
                  <li>• <strong>Costo:</strong> Totalmente gratuito</li>
                  <li>• <strong>Mejor momento:</strong> Mañana para luz perfecta</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Presupuestos */}
        <section id="presupuestos" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💰 Presupuestos Realistas (por persona, 4 días)</h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Backpack className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">PLAN MOCHILERO</h3>
                <div className="text-3xl font-bold text-green-600 mt-2">€100/día</div>
              </div>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Alojamiento:</strong> Hostal céntrico (20€/noche)</li>
                <li>• <strong>Alimentación:</strong> Mercados + cocina (25€/día)</li>
                <li>• <strong>Entradas:</strong> Solo esenciales (12€/día)</li>
                <li>• <strong>Transporte:</strong> A pie + tranvía (8€/día)</li>
              </ul>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                <p className="text-green-800 text-sm font-semibold">🎯 Total 4 días: ~400€</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm border-2 border-sky-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">PLAN CONFORT</h3>
                <div className="text-3xl font-bold text-sky-600 mt-2">€180/día</div>
                <span className="bg-sky-500 text-white px-2 py-1 rounded-full text-xs font-medium">Recomendado</span>
              </div>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Alojamiento:</strong> Hotel 3* céntrico (70€/noche)</li>
                <li>• <strong>Alimentación:</strong> Restaurantes locales (45€/día)</li>
                <li>• <strong>Entradas:</strong> Todas las principales (20€/día)</li>
                <li>• <strong>Transporte:</strong> Mix a pie + taxis (12€/día)</li>
              </ul>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 mt-4">
                <p className="text-sky-800 text-sm font-semibold">🎯 Total 4 días: ~720€</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">PLAN PREMIUM</h3>
                <div className="text-3xl font-bold text-purple-600 mt-2">€300/día</div>
              </div>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Alojamiento:</strong> Hotel 4*/5* histórico (130€/noche)</li>
                <li>• <strong>Alimentación:</strong> Restaurantes top (70€/día)</li>
                <li>• <strong>Entradas:</strong> Todo + tours privados (35€/día)</li>
                <li>• <strong>Transporte:</strong> Taxis + transfers (20€/día)</li>
              </ul>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mt-4">
                <p className="text-purple-800 text-sm font-semibold">🎯 Total 4 días: ~1.200€</p>
              </div>
            </div>
          </div>
        </section>

        {/* Transporte */}
        <section id="transporte" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🚗 Conexiones y Transporte Inteligente</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Plane className="h-5 w-5 text-sky-500 mr-2" />
                Desde el Aeropuerto Ferenc Liszt
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">💰 Opción más económica:</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• <strong>Autobús 100E:</strong> 2.5€, directo al centro (45 min)</li>
                    <li>• <strong>Horarios:</strong> Cada 20 min, 4:00h-00:30h</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">🚗 Opción más cómoda:</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <strong>Transfer privado:</strong> 25€, con cartel (30 min)</li>
                    <li>• <strong>Taxi oficial:</strong> 25-30€, parada autorizada</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🚊 Moverse por Budapest</h3>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-sky-800 mb-2">Sistema más eficiente:</h4>
                <ul className="text-sky-700 text-sm space-y-1">
                  <li>• <strong>A pie:</strong> Centro completamente caminable</li>
                  <li>• <strong>Tranvía 2:</strong> Bordea el Danubio, muy escénico</li>
                  <li>• <strong>Metro M1:</strong> Línea histórica hacia Andrássy</li>
                  <li>• <strong>Precio unitario:</strong> 1.5€ por trayecto</li>
                </ul>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                <p className="text-emerald-800 text-sm">
                  <strong>📱 App imprescindible:</strong> BKK Info (transporte público oficial)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Estrategia financiera */}
        <section id="finanzas" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💳 Estrategia Financiera - Ahorra en Grande</h2>
          
          <AffiliateBox
            title="Revolut - Tarjeta Sin Comisiones"
            description="Mi tarjeta favorita para viajar. Sin comisiones por cambio de divisa, retiros gratis hasta 200€/mes."
            bullets={[
              "0% comisiones en pagos internacionales",
              "Retiros gratis hasta 200€/mes",
              "Cambio de divisa al tipo real",
              "App móvil súper intuitiva",
              "Bloqueo/desbloqueo instantáneo"
            ]}
            ctaText="Conseguir Revolut GRATIS"
            url="https://revolut.com/referral/?referral-code=antoni22jf!AUG1-25-AR-CL1H-CRY&geo-redirect"
            variant="highlight"
            platform="Revolut"
          />

          <AffiliateBox
            title="N26 - Banco Digital Europeo"
            description="Perfecto como tarjeta de respaldo. IBAN alemán real y 3 retiradas gratis al mes en eurozona."
            bullets={[
              "IBAN alemán real",
              "3 retiradas gratis/mes en eurozona", 
              "Pagos sin comisiones en euros",
              "App móvil completa",
              "Notificaciones instantáneas"
            ]}
            ctaText="Abrir cuenta N26"
            url="https://n26.com/es-es"
            variant="ghost"
            platform="N26"
          />

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
            <h3 className="font-semibold text-yellow-800 mb-3">💱 Moneda y Pagos</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-yellow-700 text-sm"><strong>Divisa local:</strong> Florín húngaro (HUF)</p>
              </div>
              <div>
                <p className="text-yellow-700 text-sm"><strong>Cambio aproximado:</strong> 1€ = 380 HUF</p>
              </div>
              <div>
                <p className="text-yellow-700 text-sm"><strong>Regla de oro:</strong> Siempre pagar en florines</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timing perfecto */}
        <section id="timing" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🌡️ Timing Perfecto - Cuándo Ir</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm border-2 border-emerald-300">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">🌸</span>
                <h3 className="text-xl font-bold text-gray-900">Primavera (Abril-Mayo)</h3>
                <span className="ml-auto bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">IDEAL</span>
              </div>
              <div className="space-y-3">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                  <p className="text-emerald-800 text-sm"><strong>Ventajas:</strong> Clima perfecto, menos multitudes, precios medios</p>
                  <p className="text-emerald-800 text-sm"><strong>Temperatura:</strong> 15-22°C, ideal para caminar</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <p className="text-orange-800 text-sm"><strong>Desventajas:</strong> Lluvia ocasional</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm border-2 border-orange-300">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">🍂</span>
                <h3 className="text-xl font-bold text-gray-900">Otoño (Sep-Oct)</h3>
                <span className="ml-auto bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">RECOMENDADO</span>
              </div>
              <div className="space-y-3">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <p className="text-orange-800 text-sm"><strong>Ventajas:</strong> Colores hermosos, clima agradable</p>
                  <p className="text-orange-800 text-sm"><strong>Temperatura:</strong> 12-20°C</p>
                  <p className="text-orange-800 text-sm"><strong>Ideal para:</strong> Fotografía y paseos</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">☀️</span>
                <h3 className="text-xl font-bold text-gray-900">Verano (Jun-Ago)</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-yellow-800 text-sm"><strong>Ventajas:</strong> Días largos, terrazas, festivales</p>
                  <p className="text-yellow-800 text-sm"><strong>Desventajas:</strong> Más caro, más turistas</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">❄️</span>
                <h3 className="text-xl font-bold text-gray-900">Invierno (Nov-Mar)</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-blue-800 text-sm"><strong>Ventajas:</strong> Balnearios auténticos, mercados navideños</p>
                  <p className="text-blue-800 text-sm"><strong>Desventajas:</strong> Días cortos, frío intenso</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alojamiento */}
        <section id="alojamiento" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🏨 Dónde Dormir - Zonas Estratégicas</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm border-2 border-sky-300">
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-900">DISTRITO V - CENTRO</h3>
                <span className="ml-auto bg-sky-500 text-white px-2 py-1 rounded-full text-xs font-medium">MEJOR UBICACIÓN</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                  <p className="text-sky-800 text-sm"><strong>Ventaja:</strong> Todo andando, máximo tiempo útil</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                  <p className="text-emerald-800 text-sm"><strong>Precio medio:</strong> 50-120€/noche</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <p className="text-orange-800 text-sm"><strong>Recomendado:</strong> Para primeras visitas</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center mb-3">
                  <h3 className="text-lg font-bold text-gray-900">DISTRITO VII - BARRIO JUDÍO</h3>
                  <span className="ml-auto bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">MÁS AUTÉNTICO</span>
                </div>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>Ventaja:</strong> Vida nocturna, ruin bars</li>
                  <li>• <strong>Precio medio:</strong> 40-100€/noche</li>
                  <li>• <strong>Perfecto para:</strong> Viajeros jóvenes</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center mb-3">
                  <h3 className="text-lg font-bold text-gray-900">DISTRITO I - CASTILLO</h3>
                  <span className="ml-auto bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">MÁS ROMÁNTICO</span>
                </div>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>Ventaja:</strong> Vistas al Danubio, histórico</li>
                  <li>• <strong>Precio medio:</strong> 80-200€/noche</li>
                  <li>• <strong>Ideal para:</strong> Parejas, lunas de miel</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gastronomía */}
        <section id="gastronomia" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🍽️ Gastronomía Auténtica - Probado y Recomendado</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Platos Imprescindibles</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Goulash:</strong> El plato nacional, sopa especiada con carne</li>
                <li>• <strong>Schnitzel húngaro:</strong> Versión local del vienés</li>
                <li>• <strong>Lángos:</strong> Street food icónico, pan frito con toppings</li>
                <li>• <strong>Kürtőskalács:</strong> Postre cilíndrico dulce, irresistible</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Restaurantes por Zonas</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-800 text-sm mb-1">CENTRO:</h4>
                  <ul className="text-blue-700 text-xs space-y-1">
                    <li>• <strong>Menza:</strong> Húngara moderna (12-18€)</li>
                    <li>• <strong>Central Kávéház:</strong> Histórico (8-15€)</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-800 text-sm mb-1">BARRIO JUDÍO:</h4>
                  <ul className="text-purple-700 text-xs space-y-1">
                    <li>• <strong>Frici Papa:</strong> Comida de abuela (8-12€)</li>
                    <li>• <strong>Mazel Tov:</strong> Mediterráneo único (10-15€)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Errores a evitar */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-red-900 mb-6">🚨 Errores Típicos que Evitar</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="text-red-800 space-y-2">
              <li>• <strong>No llevar efectivo suficiente</strong> - Muchos sitios pequeños solo aceptan florines</li>
              <li>• <strong>Saltarse las reservas del Parlamento</strong> - Se agotan días antes</li>
              <li>• <strong>No contratar seguro de viaje</strong> - Cobertura médica esencial</li>
            </ul>
            <ul className="text-red-800 space-y-2">
              <li>• <strong>Ir sin tarjetas sin comisiones</strong> - Pierdes 20-30€ en cambios</li>
              <li>• <strong>No probar la gastronomía local</strong> - Es deliciosa y económica</li>
              <li>• <strong>Evitar los balnearios en invierno</strong> - ¡Es cuando mejor se disfrutan!</li>
            </ul>
          </div>
        </div>

        {/* Protección de viaje */}
        <AffiliateBox
          title="Seguro IATI Estándar - Protección Completa"
          description="Cobertura médica de 200.000€ para tu viaje a Budapest. Incluye COVID-19, deportes y reembolso de vuelos cancelados."
          price="~12€"
          discount="5%"
          bullets={[
            "Cobertura médica: 200.000€",
            "Incluye COVID-19 y deportes",
            "Reembolso vuelos cancelados",
            "Atención 24/7 en español",
            "Sin adelantar dinero"
          ]}
          ctaText="Contratar con 5% descuento"
          url="https://www.iatiseguros.com?r=37344279073491"
          variant="default"
          platform="IATI Seguros"
        />

        {/* Kit digital */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📱 Kit Digital Imprescindible</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">📱 BKK Info</h3>
              <p className="text-gray-600 text-sm">Transporte público oficial de Budapest</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🚗 Bolt</h3>
              <p className="text-gray-600 text-sm">Taxis más económicos que Uber</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🌐 Google Translate</h3>
              <p className="text-gray-600 text-sm">Húngaro es muy diferente a otros idiomas</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🗺️ Maps.me</h3>
              <p className="text-gray-600 text-sm">Mapas offline detallados</p>
            </div>
          </div>
        </div>

        {/* Productos esenciales */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">🎯 Productos Esenciales para Budapest</h2>
          
          <AffiliateBox
            title="Mochila Cabina Ryanair 40x20x25"
            description="Compatible con todas las aerolíneas low-cost. Perfecta para tu viaje a Budapest sin cargos extra."
            price="Desde 35€"
            bullets={[
              "Medidas exactas Ryanair",
              "Compartimentos organizados",
              "Puerto USB integrado",
              "Bolsillo antirrobo",
              "Resistente al agua"
            ]}
            ctaText="Ver en Amazon"
            url="https://www.amazon.es/Hayayu-40x20x25-Mochilas-Senderismo-Impermeable/dp/B0CBVFL64Z?tag=viajamejor-21"
            variant="ghost"
            platform="Amazon"
          />

          <AffiliateBox
            title="Power Bank INIU 10000mAh"
            description="Batería externa compacta y rápida. Perfecta para días largos explorando Budapest."
            price="Desde 20€"
            bullets={[
              "10000mAh de capacidad",
              "Carga rápida",
              "Tamaño compacto",
              "2-3 cargas completas del móvil",
              "Indicador LED de batería"
            ]}
            ctaText="Ver en Amazon"
            url="https://www.amazon.es/INIU-10000mAh-Cargador-Portatil-Tel%C3%A9fono/dp/B08VD632WJ?tag=viajamejor-21"
            variant="ghost"
            platform="Amazon"
          />
        </div>

        {/* Conclusión */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💫 ¿Te ha ayudado esta guía?</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Budapest es una ciudad que enamora a primera vista.</strong> Con este itinerario optimizado 
            aprovecharás cada momento y cada euro invertido. Los balnearios termales, la arquitectura imperial 
            y la gastronomía húngara te dejarán recuerdos para toda la vida.
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>¿Tienes alguna pregunta específica sobre Budapest?</strong> Escríbeme y te ayudo a personalizar 
            tu itinerario según tus intereses y presupuesto.
          </p>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Listo para descubrir Budapest?</h3>
          <p className="text-lg mb-6 opacity-90">
            Encuentra los mejores vuelos a Budapest y empieza a planificar tu aventura
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://kiwi.tpk.lv/z2gZyZ3E"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-sky-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block text-center"
            >
              🛫 Buscar Vuelos a Budapest
            </a>
            <button
              onClick={onBack}
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-sky-500 transition-colors"
            >
              Ver Más Guías
            </button>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Dudas Frecuentes sobre Budapest" />
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Guías" currentArticleId="budapest-4-dias" />
    </article>
  );
};

export default BudapestGuideArticle;