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
    { id: 'planning', title: 'Planning Estratégico' },
    { id: 'dia-1', title: 'Día 1: Poder Imperial y Herencia Cultural' },
    { id: 'dia-2', title: 'Día 2: Realeza Medieval y Romance Danubiano' },
    { id: 'dia-3', title: 'Día 3: Aguas Milenarias y Esplendor Imperial' },
    { id: 'dia-4', title: 'Día 4: Autenticidad Local y Despedida Panorámica' },
    { id: 'presupuestos', title: 'Presupuestos Reales y Detallados' },
    { id: 'transporte', title: 'Llegada y Conexiones Inteligentes' },
    { id: 'finanzas', title: 'Estrategia Financiera' },
    { id: 'timing', title: 'Cuándo Ir - Timing Perfecto' },
    { id: 'alojamiento', title: 'Ubicación Estratégica' },
    { id: 'gastronomia', title: 'Gastronomía Húngara' },
    { id: 'errores', title: 'Errores Costosos que Evitar' }
  ];

  const faqs = [
    {
      question: "¿Es mejor pagar en euros o florines?",
      answer: "Siempre florines. Cuando te ofrezcan pagar en euros, di 'NO' - te cobrarán 8-12% más."
    },
    {
      question: "¿Qué llevar a los balnearios?",
      answer: "Imprescindible: Toalla + chanclas + bañador. No necesario: Gorro (solo en piscina de natación). Opcional: Alquilan toallas desechables (no muy cómodas)."
    },
    {
      question: "¿Merece la pena Budapest Card?",
      answer: "Para 4 días SÍ. Incluye transporte ilimitado + entradas gratuitas a museos principales. Precio: 85€ para 4 días. Ahorro: 15-25€ si visitas 4+ atracciones."
    },
    {
      question: "¿Es seguro caminar de noche?",
      answer: "Muy seguro en centro. Precauciones normales en barrio de fiesta después 2:00h."
    },
    {
      question: "¿Cuánto cuestan las bebidas?",
      answer: "Cerveza local: 2-4€ en bares normales. Ruin bars: 3-6€. Cócteles: 6-10€ en sitios normales, 12-18€ en terrazas premium."
    },
    {
      question: "¿Funcionan balnearios en invierno?",
      answer: "¡MEJOR en invierno! Experiencia única: piscina 38°C con nieve alrededor."
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
          Budapest en 4 Días: Tu Aventura Húngara Completa
        </h1>

        <div className="flex items-center justify-between text-gray-600 text-sm mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <span className="flex items-center text-xs sm:text-sm">
              <Clock className="h-3 w-3 mr-1" />
              <span className="sm:hidden">15 min</span>
              <span className="hidden sm:inline">15 min lectura</span>
            </span>
            <span className="flex items-center text-xs sm:text-sm">
              <MapPin className="h-3 w-3 mr-1" />
              <span className="sm:hidden">Budapest</span>
              <span className="hidden sm:inline">Budapest, Hungría</span>
            </span>
          </div>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Budapest en 4 Días: Tu Aventura Húngara Completa',
                  text: 'Guía completa para descubrir Budapest',
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
        
        {/* Planning Estratégico */}
        <section id="planning" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Planning Estratégico</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-sky-500 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">JORNADA</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EXPERIENCIAS DEL DÍA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">DÍA 1</td>
                  <td className="border border-gray-300 px-4 py-3">Parlamento + Recorrido histórico gratuito + Sinagoga Principal + Basílica de San Esteban</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">DÍA 2</td>
                  <td className="border border-gray-300 px-4 py-3">Fortaleza de Buda + Mirador de Pescadores + Travesía de puentes + Navegación nocturna</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">DÍA 3</td>
                  <td className="border border-gray-300 px-4 py-3">Aguas termales Széchenyi + Plaza Imperial + Boulevard Andrássy + Café histórico</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">DÍA 4</td>
                  <td className="border border-gray-300 px-4 py-3">Mercado tradicional + Colina panorámica + Exploración libre</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Día 1 */}
        <section id="dia-1" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🏛️ DÍA 1: Poder Imperial y Herencia Cultural</h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Arranque Matutino (9:00h)
              </h3>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                🔥 Parlamento Húngaro - Símbolo Nacional
              </h4>
              <p className="text-gray-700 mb-4">
                Inicia tu aventura húngara en el edificio gubernamental más espectacular de Europa. Sus cúpulas doradas y arquitectura neogótica te transportarán a la época imperial.
              </p>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-4">
                <h5 className="font-semibold text-sky-800 mb-2">Información esencial:</h5>
                <ul className="text-sky-700 text-sm space-y-1">
                  <li>• <strong>Inversión:</strong> 6.000 HUF (≈ 16€)</li>
                  <li>• <strong>Duración:</strong> 90 minutos con audioguía</li>
                  <li>• <strong>Reserva:</strong> OBLIGATORIA con 24-48h anticipación</li>
                  <li>• <strong>Incluye:</strong> Corona de San Esteban + joyas reales + salas ceremoniales</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-orange-800 text-sm">
                  <strong>⚠️ Consejo clave:</strong> Llega 15 min antes para controles de seguridad
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🚶 Recorrido Histórico Gratuito (11:00h)
              </h4>
              <p className="text-gray-700 mb-4">
                Conecta con la auténtica Budapest a través de guías locales apasionados.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h5 className="font-semibold text-emerald-800 mb-2">Detalles del tour:</h5>
                <ul className="text-emerald-700 text-sm space-y-1">
                  <li>• <strong>Costo:</strong> Completamente gratis (propina opcional)</li>
                  <li>• <strong>Duración:</strong> 2h 30min</li>
                  <li>• <strong>Inicio:</strong> Plaza Vörösmarty (punto céntrico)</li>
                  <li>• <strong>Descubrirás:</strong> Secretos históricos + mejores rincones fotogénicos</li>
                  <li>• <strong>Final:</strong> Entrada de la Sinagoga Central</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🕍 Gran Sinagoga - Memoria Viva (13:30h)
              </h4>
              <p className="text-gray-700 mb-4">
                La segunda sinagoga más grande del planeta y centro de la comunidad judía europea.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">Experiencia completa:</h5>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• <strong>Entrada:</strong> 4.500 HUF (≈ 12€)</li>
                    <li>• <strong>Incluye:</strong> Templo principal + Museo Judío + Jardín Memorial</li>
                    <li>• <strong>Tiempo:</strong> 75-90 minutos</li>
                    <li>• <strong>Arquitectura:</strong> Estilo morisco-bizantino único</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h5 className="font-semibold text-yellow-800 mb-2">Pausa gastronómica:</h5>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• <strong>Frici Papa:</strong> Goulash tradicional (8-12€)</li>
                    <li>• <strong>Spinoza Café:</strong> Ambiente bohemio (10-15€)</li>
                    <li>• <strong>Mazel Tov:</strong> Mediterráneo en patio histórico (12-18€)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                ⛪ Basílica de San Esteban + Mirador Panorámico (16:00h)
              </h4>
              <p className="text-gray-700 mb-4">
                Culmina el día en las alturas con vistas que quitan el aliento.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">Opciones de visita:</h5>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <strong>Solo basílica:</strong> 600 HUF (≈ 2€)</li>
                    <li>• <strong>Combo completo:</strong> 2.900 HUF (≈ 8€)</li>
                    <li>• <strong>Incluye:</strong> Basílica + cúpula + tesoro</li>
                    <li>• <strong>Vista 360°:</strong> Todo Budapest + Danubio</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-800 mb-2">Vida nocturna alternativa:</h5>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• <strong>Szimpla Kert:</strong> Ruin bar pionero</li>
                    <li>• <strong>Concepto:</strong> Edificios en ruinas = bares eclécticos</li>
                    <li>• <strong>Bebidas:</strong> Cervezas 3-5€, cócteles 6-8€</li>
                    <li>• <strong>Ambiente:</strong> Arte urbano + música live</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Día 2 */}
        <section id="dia-2" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🏰 DÍA 2: Realeza Medieval y Romance Danubiano</h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ascenso Real (9:00h)
              </h3>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🚠 Funicular Histórico al Castillo
              </h4>
              <p className="text-gray-700 mb-4">
                Comienza como la realeza húngara, ascendiendo en el funicular centenario.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">🚡 Funicular histórico</h5>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <strong>Precio:</strong> 1.500 HUF (≈ 4€) ida/vuelta</li>
                    <li>• <strong>Experiencia:</strong> Nostálgica</li>
                    <li>• <strong>Ventaja:</strong> Sin esfuerzo</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-800 mb-2">🚶 Caminata</h5>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• <strong>Precio:</strong> Gratis</li>
                    <li>• <strong>Tiempo:</strong> 15 min subida</li>
                    <li>• <strong>Ventaja:</strong> Ejercicio + vistas graduales</li>
                  </ul>
                </div>
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
                <h5 className="font-semibold text-sky-800 mb-2">🏰 Complejo del Castillo de Buda</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sky-700 text-sm mb-2"><strong>Exploración exterior (gratis):</strong></p>
                    <ul className="text-sky-700 text-sm space-y-1">
                      <li>• Jardines con vistas al Danubio</li>
                      <li>• Cambio de guardia cada hora</li>
                      <li>• Terrazas panorámicas</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sky-700 text-sm mb-2"><strong>Interior (opcional):</strong></p>
                    <ul className="text-sky-700 text-sm space-y-1">
                      <li>• Galería Nacional: 3.200 HUF (≈ 9€)</li>
                      <li>• Museo de Historia: 2.800 HUF (≈ 7€)</li>
                      <li>• Tiempo: 2-3 horas si entras</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                👑 Bastión de los Pescadores - El Mirador Más Famoso (10:30h)
              </h4>
              <p className="text-gray-700 mb-4">
                El lugar más fotografiado de Budapest por una razón poderosa.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h5 className="font-semibold text-emerald-800 mb-2">Niveles de acceso:</h5>
                  <ul className="text-emerald-700 text-sm space-y-1">
                    <li>• <strong>Terrazas inferiores:</strong> GRATIS con vistas espectaculares</li>
                    <li>• <strong>Torres superiores:</strong> 1.000 HUF (≈ 3€)</li>
                    <li>• <strong>Mejor momento:</strong> 10:30-11:30h (luz perfecta)</li>
                    <li>• <strong>Vista icónica:</strong> Parlamento dorado reflejado</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">⛪ Iglesia de Matías (11:30h)</h5>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• <strong>Precio:</strong> 2.200 HUF (≈ 6€)</li>
                    <li>• <strong>Historia:</strong> 700 años de ceremonias reales</li>
                    <li>• <strong>Arquitectura:</strong> Techos policromados únicos</li>
                    <li>• <strong>Tiempo:</strong> 45 minutos explorando</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🥐 Ruszwurm - Confitería desde 1827 (12:30h)
              </h4>
              <p className="text-gray-700 mb-4">
                La pastelería más antigua de Budapest, donde el tiempo se detuvo.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h5 className="font-semibold text-yellow-800 mb-2">La experiencia auténtica:</h5>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• <strong>Especialidad:</strong> Krémes (milhojas húngara tradicional)</li>
                  <li>• <strong>Precio:</strong> 2-3€ por pieza + café</li>
                  <li>• <strong>Ambiente:</strong> Solo 4 mesas, decoración original s.XIX</li>
                  <li>• <strong>Por qué ir:</strong> Sabores que no han cambiado en 200 años</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🌉 Travesía Icónica - Puente de las Cadenas (14:00h)
              </h4>
              <p className="text-gray-700 mb-4">
                El puente que unió para siempre Buda y Pest en 1849.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">Actividad esencial:</h5>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <strong>Tiempo:</strong> 15 minutos cruzando tranquilo</li>
                    <li>• <strong>Fotos obligadas:</strong> Desde el centro con leones</li>
                    <li>• <strong>Historia:</strong> Primera conexión permanente</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h5 className="font-semibold text-red-800 mb-2">👞 Memorial Zapatos (14:30h)</h5>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• <strong>Significado:</strong> 60 pares de zapatos de bronce</li>
                    <li>• <strong>Historia:</strong> Homenaje víctimas Holocausto</li>
                    <li>• <strong>Tiempo:</strong> 15 minutos de reflexión</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                ⛵ Crucero Nocturno por el Danubio (18:00h) ⭐ <span className="text-orange-500">MOMENTO CUMBRE</span>
              </h4>
              <p className="text-gray-700 mb-4">
                La experiencia más romántica y fotogénica de Budapest.
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
                <h5 className="font-semibold text-orange-800 mb-3">Detalles del crucero:</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• <strong>Duración:</strong> 70 minutos de pura magia</li>
                    <li>• <strong>Precio:</strong> 4.000 HUF (≈ 12€)</li>
                    <li>• <strong>Incluye:</strong> Audio-guía español + bebida</li>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🌊 DÍA 3: Aguas Milenarias y Esplendor Imperial</h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Relajación Termal Matutina (9:00h)
              </h3>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                ♨️ Balnearios Széchenyi - Ritual Húngaro Milenario ⭐ <span className="text-emerald-500">EXPERIENCIA ÚNICA</span>
              </h4>
              <p className="text-gray-700 mb-4">
                Sumérgete en la tradición termal más auténtica de Europa. ¡Funciona incluso con nieve!
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">🏊 Széchenyi (Recomendado)</h5>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <strong>Precio:</strong> 6.800 HUF (≈ 18€) día completo</li>
                    <li>• <strong>Piscinas:</strong> 18 diferentes (3 exteriores icónicas)</li>
                    <li>• <strong>Temperaturas:</strong> 18°C a 38°C</li>
                    <li>• <strong>Qué llevar:</strong> Toalla + chanclas + bañador</li>
                    <li>• <strong>Tiempo ideal:</strong> 3-4 horas relajándote</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">🛁 Gellért (Alternativa)</h5>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• <strong>Estilo:</strong> Art Nouveau, más sofisticado</li>
                    <li>• <strong>Ventaja:</strong> Completamente cubierto</li>
                    <li>• <strong>Precio:</strong> Similar al Széchenyi</li>
                    <li>• <strong>Perfil:</strong> Menos auténtico, más instagrameable</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🏛️ Plaza de los Héroes - Epicentro Húngaro (13:30h)
              </h4>
              <p className="text-gray-700 mb-4">
                El monumento más patriótico de Hungría te cuenta mil años de historia.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h5 className="font-semibold text-emerald-800 mb-2">Qué verás:</h5>
                  <ul className="text-emerald-700 text-sm space-y-1">
                    <li>• <strong>Entrada:</strong> Completamente GRATIS</li>
                    <li>• <strong>Monumentos:</strong> 7 estatuas tribus fundadoras</li>
                    <li>• <strong>Historia:</strong> Mil años de conquistas húngaras</li>
                    <li>• <strong>Extra invernal:</strong> Pista de patinaje</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h5 className="font-semibold text-orange-800 mb-2">🏰 Castillo Vajdahunyad</h5>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• <strong>Historia:</strong> Construido para Exposición 1896</li>
                    <li>• <strong>Precio:</strong> 2.000 HUF (≈ 5€) interior / Gratis exterior</li>
                    <li>• <strong>Estilo:</strong> Mezcla arquitectónica húngara</li>
                    <li>• <strong>Foto obligada:</strong> Con "Escultura del Anónimo"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🛣️ Avenida Andrássy - Champs-Élysées Húngaro (15:00h)
              </h4>
              <p className="text-gray-700 mb-4">
                Paseo arquitectónico por la avenida más elegante de Budapest.
              </p>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-4">
                <h5 className="font-semibold text-sky-800 mb-2">Recorrido recomendado:</h5>
                <ul className="text-sky-700 text-sm space-y-1">
                  <li>• <strong>Distancia:</strong> 2.5 km desde Plaza Héroes hasta centro</li>
                  <li>• <strong>Arquitectura:</strong> Palacetes imperiales austro-húngaros</li>
                  <li>• <strong>Metro histórico:</strong> M1, primera línea continental (1896)</li>
                  <li>• <strong>Tiempo:</strong> 45 min caminando pausado</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h5 className="font-semibold text-purple-800 mb-2">🎭 Ópera Nacional Húngara (17:00h)</h5>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• <strong>Tour guiado:</strong> 3.500 HUF (≈ 9€) - interiores dorados</li>
                  <li>• <strong>Solo exterior:</strong> Gratis - fachada neo-renacentista</li>
                  <li>• <strong>Espectáculo:</strong> 15-80€ según función</li>
                  <li>• <strong>Historia:</strong> Inaugurada 1884, rivaliza con Viena</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-lg p-6">
              <h4 className="font-semibold text-emerald-800 mb-3">☕ New York Café - El Más Hermoso del Mundo (18:30h)</h4>
              <p className="text-emerald-700 mb-3">Donde se reunía la élite intelectual de Budapest en la Belle Époque.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-emerald-700 text-sm space-y-1">
                  <li>• <strong>Ambiente:</strong> Techos dorados + espejos + arañas</li>
                  <li>• <strong>Precios:</strong> 8-15€ café + pastel húngaro</li>
                  <li>• <strong>Historia:</strong> Inaugurado 1894, punto escritores</li>
                </ul>
                <ul className="text-emerald-700 text-sm space-y-1">
                  <li>• <strong>Recomendación:</strong> Reserva mesa o espera 30-45 min</li>
                  <li>• <strong>Valor:</strong> Es una experiencia, no solo un café</li>
                  <li>• <strong>Tip:</strong> Ve al final del día para atmósfera dorada</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Día 4 */}
        <section id="dia-4" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🌅 DÍA 4: Autenticidad Local y Despedida Panorámica</h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Inmersión Cultural (9:00h)
              </h3>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🏪 Mercado Central - Corazón Gastronómico
              </h4>
              <p className="text-gray-700 mb-4">
                El mercado cubierto más espectacular de Europa Central.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h5 className="font-semibold text-red-800 mb-2">🌶️ Planta baja - Productos locales:</h5>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• <strong>Páprika húngara:</strong> Desde 2€, mejor souvenir</li>
                    <li>• <strong>Salami de Szeged:</strong> Calidad mundial</li>
                    <li>• <strong>Vinos Tokaj:</strong> Dulce tradicional, desde 12€</li>
                    <li>• <strong>Foie gras húngaro:</strong> Especialidad nacional</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h5 className="font-semibold text-yellow-800 mb-2">🍽️ Primera planta - Gastronomía:</h5>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• <strong>Lángos:</strong> Pan frito tradicional (3-4€)</li>
                    <li>• <strong>Goulash auténtico:</strong> Puestos familiares (6-8€)</li>
                    <li>• <strong>Chimney cake:</strong> Kürtőskalács dulce (2-3€)</li>
                    <li>• <strong>Tiempo:</strong> 1-2 horas explorando</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                ⛰️ Colina Gellért - Mirador Supremo (10:30h)
              </h4>
              <p className="text-gray-700 mb-4">
                Las vistas más impresionantes de toda la capital húngara.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <h5 className="font-semibold text-green-800 text-sm mb-1">🚶 Caminata</h5>
                  <p className="text-green-700 text-xs">35-40 min, gratis, ejercicio + vistas graduales</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h5 className="font-semibold text-blue-800 text-sm mb-1">🚌 Autobús 27</h5>
                  <p className="text-blue-700 text-xs">530 HUF (≈ 1.5€), directo hasta arriba</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <h5 className="font-semibold text-orange-800 text-sm mb-1">🚕 Taxi</h5>
                  <p className="text-orange-700 text-xs">2.500 HUF (≈ 7€), cómodo para familias</p>
                </div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                <h5 className="font-semibold text-sky-800 mb-2">En la cima:</h5>
                <ul className="text-sky-700 text-sm space-y-1">
                  <li>• <strong>Estatua de la Libertad:</strong> 14 metros, símbolo liberación</li>
                  <li>• <strong>Mirador Citadella:</strong> Panorámica 360° Budapest completo</li>
                  <li>• <strong>Costo:</strong> Totalmente gratuito</li>
                  <li>• <strong>Mejor momento:</strong> Mañana para luz fotográfica perfecta</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                🎯 Exploración Libre (12:30h)
              </h4>
              <p className="text-gray-700 mb-4">
                Opciones según tu perfil de viajero:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">Para compradores:</h5>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Váci utca: Calle peatonal principal</li>
                    <li>• Central Market: Souvenirs auténticos</li>
                    <li>• Fashion Street: Marcas internacionales</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">Para culturales:</h5>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Casa del Terror: Era comunista (3.000 HUF)</li>
                    <li>• Museo Nacional: Historia completa</li>
                    <li>• Barrio Castillo: Callejuelas medievales</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-800 mb-2">Para relajados:</h5>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Isla Margarita: Parque en el Danubio</li>
                    <li>• Café Gerbeaud: Histórico desde 1858</li>
                    <li>• Paseo libre: Tu Budapest secreto</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
              <h4 className="font-semibold text-orange-800 mb-3">🌅 Último Atardecer Húngaro (17:00h)</h4>
              <p className="text-orange-700 mb-3">Opciones para el gran final:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• <strong>Puente Libertad:</strong> Atardecer gratuito romántico</li>
                </ul>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• <strong>High Note SkyBar:</strong> Cóctel panorámica (12-18€)</li>
                </ul>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• <strong>Parlamento iluminado:</strong> Última foto perfecta</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Presupuestos */}
        <section id="presupuestos" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💰 Presupuestos Reales y Detallados</h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Backpack className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">ESTILO MOCHILERO</h3>
                <div className="text-3xl font-bold text-green-600 mt-2">€100/día</div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 font-semibold mb-1">Alojamiento (€20/noche):</p>
                  <p className="text-green-700">Hostales céntricos: Maverick City Lodge, Caravan Hostel</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 font-semibold mb-1">Alimentación (€25/día):</p>
                  <p className="text-green-700">Mercados + panadería + supermercado + cocina hostal</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 font-semibold mb-1">Entradas (€12/día):</p>
                  <p className="text-green-700">Solo imprescindibles: Parlamento + Basílica + crucero</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 font-semibold mb-1">Transporte (€8/día):</p>
                  <p className="text-green-700">Mayoría a pie + transporte ocasional</p>
                </div>
              </div>
              <div className="bg-green-100 border border-green-300 rounded-lg p-3 mt-4">
                <p className="text-green-800 text-sm font-bold">🎯 Total 4 días: ≈ €400</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm border-2 border-sky-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-8 w-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">ESTILO CONFORT</h3>
                <div className="text-3xl font-bold text-sky-600 mt-2">€180/día</div>
                <span className="bg-sky-500 text-white px-2 py-1 rounded-full text-xs font-medium">Recomendado</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                  <p className="text-sky-800 font-semibold mb-1">Alojamiento (€70/noche):</p>
                  <p className="text-sky-700">Hoteles 3*: Roombach Hotel, Leo Boutique Rooms</p>
                </div>
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                  <p className="text-sky-800 font-semibold mb-1">Alimentación (€45/día):</p>
                  <p className="text-sky-700">Desayuno hotel + restaurantes locales + experiencias</p>
                </div>
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                  <p className="text-sky-800 font-semibold mb-1">Entradas (€20/día):</p>
                  <p className="text-sky-700">Todas principales + algunos tours guiados</p>
                </div>
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                  <p className="text-sky-800 font-semibold mb-1">Transporte (€12/día):</p>
                  <p className="text-sky-700">Mix caminar + taxis ocasionales + transfers</p>
                </div>
              </div>
              <div className="bg-sky-100 border border-sky-300 rounded-lg p-3 mt-4">
                <p className="text-sky-800 text-sm font-bold">🎯 Total 4 días: ≈ €720</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">ESTILO PREMIUM</h3>
                <div className="text-3xl font-bold text-purple-600 mt-2">€300/día</div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <p className="text-purple-800 font-semibold mb-1">Alojamiento (€130/noche):</p>
                  <p className="text-purple-700">Hoteles 4*/5*: Four Seasons, Aria Hotel</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <p className="text-purple-800 font-semibold mb-1">Alimentación (€70/día):</p>
                  <p className="text-purple-700">Restaurantes top: Onyx, Costes, Bock Bisztró</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <p className="text-purple-800 font-semibold mb-1">Entradas (€35/día):</p>
                  <p className="text-purple-700">Todo + tours privados + experiencias VIP</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <p className="text-purple-800 font-semibold mb-1">Transporte (€20/día):</p>
                  <p className="text-purple-700">Transfers privados + taxis + experiences premium</p>
                </div>
              </div>
              <div className="bg-purple-100 border border-purple-300 rounded-lg p-3 mt-4">
                <p className="text-purple-800 text-sm font-bold">🎯 Total 4 días: ≈ €1.200</p>
              </div>
            </div>
          </div>
        </section>

        {/* Transporte */}
        <section id="transporte" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🚗 Llegada y Conexiones Inteligentes</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Plane className="h-5 w-5 text-sky-500 mr-2" />
                Desde Aeropuerto Ferenc Liszt
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">💰 Opción más económica:</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• <strong>Bus 100E:</strong> 900 HUF (≈ 2.5€)</li>
                    <li>• <strong>Destino:</strong> Plaza Deák Ferenc (centro absoluto)</li>
                    <li>• <strong>Frecuencia:</strong> Cada 20 min, 4:00h-00:30h</li>
                    <li>• <strong>Duración:</strong> 45 minutos</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">🚗 Opción más cómoda:</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <strong>Transfer privado:</strong> 8.000 HUF (≈ 22€)</li>
                    <li>• <strong>Ventaja:</strong> Te esperan con cartel + equipaje</li>
                    <li>• <strong>Duración:</strong> 25-30 minutos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🚊 Sistema de Transporte Urbano</h3>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-sky-800 mb-2">Lo más eficiente:</h4>
                <ul className="text-sky-700 text-sm space-y-1">
                  <li>• <strong>A pie:</strong> Centro histórico completamente caminable</li>
                  <li>• <strong>Tranvía 2:</strong> Bordea el Danubio, muy pintoresco</li>
                  <li>• <strong>Metro M1:</strong> Línea histórica (1896) hacia Andrássy</li>
                  <li>• <strong>Precio:</strong> 530 HUF (≈ 1.5€) por trayecto</li>
                </ul>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                <p className="text-emerald-800 text-sm">
                  <strong>📱 Apps imprescindibles:</strong> BKK Info (oficial) + Bolt (taxis baratos)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Estrategia financiera */}
        <section id="finanzas" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">💳 Estrategia Financiera - Ahorro Inteligente</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-3">💱 Moneda y Pagos</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-yellow-700 text-sm"><strong>Divisa:</strong> Florín húngaro (HUF)</p>
              </div>
              <div>
                <p className="text-yellow-700 text-sm"><strong>Cambio aproximado:</strong> 1€ = 380 HUF</p>
              </div>
              <div>
                <p className="text-yellow-700 text-sm"><strong>Regla de oro:</strong> SIEMPRE pagar en florines</p>
              </div>
            </div>
          </div>

          <AffiliateBox
            title="Revolut - Tarjeta Sin Comisiones"
            description="Mi tarjeta favorita para viajar. Sin comisiones por cambio de divisa, retiros gratis hasta 200€/mes."
            bullets={[
              "Perfecto para: Sacar efectivo sin comisiones",
              "Ahorro real: 15-25€ en cambio de divisa",
              "Ventaja: Cambio al tipo interbancario real",
              "0% comisiones ocultas",
              "Notificaciones instantáneas"
            ]}
            ctaText="Conseguir GRATIS"
            url="https://revolut.com/referral/?referral-code=antoni22jf!AUG1-25-AR-CL1H-CRY&geo-redirect"
            variant="highlight"
            platform="Revolut"
          />

          <AffiliateBox
            title="N26 - Banco Digital Europeo"
            description="Perfecto como tarjeta de respaldo. IBAN alemán real y pagos directos sin comisiones."
            bullets={[
              "Perfecto para: Pagos directos en tiendas",
              "Beneficio: Notificaciones instantáneas + control total",
              "Sin sorpresas: 0% comisiones ocultas",
              "IBAN alemán real",
              "App móvil completa"
            ]}
            ctaText="Activar gratis"
            url="https://n26.com/es-es"
            variant="ghost"
            platform="N26"
          />
        </section>

        {/* Timing perfecto */}
        <section id="timing" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🌡️ Cuándo Ir - Timing Perfecto</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm border-2 border-emerald-300">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">🌸</span>
                <h3 className="text-xl font-bold text-gray-900">Primavera (Abril-Mayo)</h3>
                <span className="ml-auto bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">ÉPOCA IDEAL</span>
              </div>
              <div className="space-y-3">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                  <p className="text-emerald-800 text-sm"><strong>Temperatura:</strong> 15-22°C, perfecta para caminar</p>
                  <p className="text-emerald-800 text-sm"><strong>Ventajas:</strong> Menos turistas + precios medios + clima perfecto</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <p className="text-orange-800 text-sm"><strong>Desventajas:</strong> Lluvia ocasional (lleva paraguas plegable)</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm border-2 border-orange-300">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">🍂</span>
                <h3 className="text-xl font-bold text-gray-900">Otoño (Sep-Oct)</h3>
                <span className="ml-auto bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">MUY RECOMENDADO</span>
              </div>
              <div className="space-y-3">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <p className="text-orange-800 text-sm"><strong>Temperatura:</strong> 12-20°C</p>
                  <p className="text-orange-800 text-sm"><strong>Ventajas:</strong> Colores otoñales + menos multitudes + luz fotográfica</p>
                  <p className="text-orange-800 text-sm"><strong>Perfecto para:</strong> Fotografía + paseos + terrazas</p>
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
                  <p className="text-yellow-800 text-sm"><strong>Temperatura:</strong> 22-28°C</p>
                  <p className="text-yellow-800 text-sm"><strong>Ventajas:</strong> Días largos + terrazas + festivales + balnearios aire libre</p>
                  <p className="text-yellow-800 text-sm"><strong>Desventajas:</strong> Más caro + más gente + calor ocasional</p>
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
                  <p className="text-blue-800 text-sm"><strong>Temperatura:</strong> -2°C a 8°C</p>
                  <p className="text-blue-800 text-sm"><strong>Ventajas:</strong> Balnearios más auténticos + mercados navideños + Budapest nevado</p>
                  <p className="text-blue-800 text-sm"><strong>Consejo:</strong> Los balnearios en nieve son experiencia única</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alojamiento */}
        <section id="alojamiento" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🏨 Ubicación Estratégica - Dónde Alojarse</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm border-2 border-sky-300">
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-900">DISTRITO V - CENTRO ABSOLUTO</h3>
                <span className="ml-auto bg-sky-500 text-white px-2 py-1 rounded-full text-xs font-medium">PRIMERA VEZ</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                  <p className="text-sky-800 text-sm"><strong>Ventaja:</strong> Todo andando + tiempo máximo aprovechado</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                  <p className="text-emerald-800 text-sm"><strong>Precio medio:</strong> 60-120€/noche</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <p className="text-orange-800 text-sm"><strong>Hoteles:</strong> Roombach Hotel, Intercontinental</p>
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
                  <li>• <strong>Ventaja:</strong> Ruin bars + vida local + menos turístico</li>
                  <li>• <strong>Precio medio:</strong> 45-100€/noche</li>
                  <li>• <strong>Hoteles:</strong> Leo Boutique Rooms, Mystery Hotel</li>
                  <li>• <strong>Ideal para:</strong> Jóvenes + vida nocturna</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center mb-3">
                  <h3 className="text-lg font-bold text-gray-900">DISTRITO I - ZONA CASTILLO</h3>
                  <span className="ml-auto bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">MÁS ROMÁNTICO</span>
                </div>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>Ventaja:</strong> Vistas Danubio + ambiente histórico + tranquilo</li>
                  <li>• <strong>Precio medio:</strong> 90-200€/noche</li>
                  <li>• <strong>Hoteles:</strong> Hilton Budapest, St. George Residence</li>
                  <li>• <strong>Perfecto para:</strong> Parejas + lunas de miel + familias</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gastronomía */}
        <section id="gastronomia" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🍽️ Gastronomía Húngara - Sabores Auténticos</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Platos que Debes Probar</h3>
              <div className="space-y-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <h4 className="font-semibold text-red-800 text-sm mb-1">Goulash (Gulyás):</h4>
                  <p className="text-red-700 text-sm">Sopa nacional con carne + verduras + páprika. Precio: 6-12€</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-800 text-sm mb-1">Schnitzel húngaro:</h4>
                  <p className="text-blue-700 text-sm">Versión local más especiada que el vienés. Precio: 8-15€</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <h4 className="font-semibold text-green-800 text-sm mb-1">Lángos:</h4>
                  <p className="text-green-700 text-sm">Pan frito con crema agria + queso. Precio: 3-5€</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-800 text-sm mb-1">Kürtőskalács:</h4>
                  <p className="text-purple-700 text-sm">Postre cilíndrico dulce con canela. Precio: 2-4€</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Restaurantes Verificados</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-800 text-sm mb-1">COMIDA TRADICIONAL:</h4>
                  <ul className="text-blue-700 text-xs space-y-1">
                    <li>• <strong>Frici Papa:</strong> Comida de abuela (8-12€)</li>
                    <li>• <strong>Menza:</strong> Húngara moderna, retro (12-18€)</li>
                    <li>• <strong>Gundel:</strong> Histórico de lujo (25-40€)</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-800 text-sm mb-1">EXPERIENCIAS ÚNICAS:</h4>
                  <ul className="text-purple-700 text-xs space-y-1">
                    <li>• <strong>New York Café:</strong> Obligatorio una vez (15-25€)</li>
                    <li>• <strong>Café Gerbeaud:</strong> Desde 1858 (8-15€)</li>
                    <li>• <strong>Central Kávéház:</strong> Ambiente intelectual (10-18€)</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <h4 className="font-semibold text-green-800 text-sm mb-1">VIDA NOCTURNA:</h4>
                  <ul className="text-green-700 text-xs space-y-1">
                    <li>• <strong>Szimpla Kert:</strong> Ruin bar pionero (8-15€)</li>
                    <li>• <strong>Mazel Tov:</strong> Mediterráneo en ruinas (12-18€)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Errores a evitar */}
        <section id="errores" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🚨 Errores Costosos que Evitar</h2>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Error #1: Gestión de dinero</h4>
                  <p className="text-red-700 text-sm"><strong>Problema:</strong> Usar tarjetas con comisiones altas</p>
                  <p className="text-red-700 text-sm"><strong>Solución:</strong> Revolut + N26 gratis</p>
                  <p className="text-red-700 text-sm"><strong>Ahorro:</strong> 20-30€ en 4 días</p>
                </div>
                <div className="bg-white border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Error #2: Reservas última hora</h4>
                  <p className="text-red-700 text-sm"><strong>Problema:</strong> Parlamento + cruceros se agotan</p>
                  <p className="text-red-700 text-sm"><strong>Solución:</strong> Reservar 48h antes mínimo</p>
                </div>
                <div className="bg-white border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Error #3: Saltarse balnearios</h4>
                  <p className="text-red-700 text-sm"><strong>Problema:</strong> "No me gustan piscinas públicas"</p>
                  <p className="text-red-700 text-sm"><strong>Realidad:</strong> Es la experiencia más única</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Error #4: No probar comida local</h4>
                  <p className="text-red-700 text-sm"><strong>Problema:</strong> Quedarse en comida internacional</p>
                  <p className="text-red-700 text-sm"><strong>Pérdida:</strong> Gastronomía húngara deliciosa + económica</p>
                </div>
                <div className="bg-white border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Error #5: Viajar sin seguro</h4>
                  <p className="text-red-700 text-sm"><strong>Riesgo:</strong> Gastos médicos + cancelaciones</p>
                  <p className="text-red-700 text-sm"><strong>Solución:</strong> IATI desde 12€ para 4 días</p>
                </div>
                <div className="bg-white border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">❌ Error #6: Pagar en euros</h4>
                  <p className="text-red-700 text-sm"><strong>Problema:</strong> Te cobran 8-12% más automáticamente</p>
                  <p className="text-red-700 text-sm"><strong>Solución:</strong> Siempre di "NO" y paga en florines</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Protección de viaje */}
        <AffiliateBox
          title="Seguro IATI Estándar - Protección Completa"
          description="Cobertura médica de 200.000€ para tu viaje a Budapest. Incluye COVID-19, deportes y reembolso de vuelos cancelados."
          price="12-15€"
          discount="5%"
          bullets={[
            "Cobertura médica: 200.000€ en Europa",
            "Incluye COVID-19 + deportes + robo equipaje",
            "Reembolso vuelos cancelados + hoteles",
            "Atención 24/7 en español",
            "Sin adelantar dinero"
          ]}
          ctaText="5% descuento exclusivo"
          url="https://www.iatiseguros.com?r=37344279073491"
          variant="default"
          platform="IATI Seguros"
        />

        {/* Kit digital */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📱 Kit de Supervivencia Digital</h2>
          <p className="text-gray-700 mb-4">Apps que salvarán tu viaje:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">📱 BKK Info</h3>
              <p className="text-gray-600 text-sm">Transporte público oficial, horarios tiempo real, planificador rutas</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🚗 Bolt</h3>
              <p className="text-gray-600 text-sm">Taxis más económicos, precios fijos sin sorpresas, disponible 24/7</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🌐 Google Translate</h3>
              <p className="text-gray-600 text-sm">Húngaro muy diferente, función cámara para menús, descarga offline</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🗺️ Maps.me</h3>
              <p className="text-gray-600 text-sm">Mapas offline detallados, funciona sin internet, marca favoritos</p>
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
              "Medidas exactas Ryanair: 40x25x20cm",
              "Compartimentos organizados inteligentemente",
              "Puerto USB integrado",
              "Bolsillo antirrobo oculto",
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
              "10000mAh capacidad real",
              "Carga rápida inteligente",
              "Tamaño compacto y ligero",
              "2-3 cargas completas del móvil",
              "Indicador LED de batería restante"
            ]}
            ctaText="Ver en Amazon"
            url="https://www.amazon.es/INIU-10000mAh-Cargador-Portatil-Tel%C3%A9fono/dp/B08VD632WJ?tag=viajamejor-21"
            variant="ghost"
            platform="Amazon"
          />

          <AffiliateBox
            title="Adaptador Universal TESSAN"
            description="Funciona en más de 150 países incluyendo Hungría. Múltiples puertos USB para cargar todos tus dispositivos."
            price="Desde 15€"
            bullets={[
              "Compatible con enchufes húngaros tipo C/F",
              "4 puertos USB + 1 USB-C",
              "Funciona en +150 países",
              "Tamaño compacto para viajes",
              "Certificaciones de seguridad"
            ]}
            ctaText="Ver en Amazon"
            url="https://www.amazon.es/TESSAN-Adaptador-Universal-Internacional-Americano/dp/B0B2DRC76L?tag=viajamejor-21"
            variant="ghost"
            platform="Amazon"
          />
        </div>

        {/* Experiencias bonus */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎁 Bonus: Experiencias Secretas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Para Aventureros:</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Cuevas Castillo Buda: Laberinto subterráneo (8€)</li>
                <li>• Isla Margarita en bici: Alquiler 5€/día</li>
                <li>• Mercadillo Ecseri: Antigüedades (sábados)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Para Románticos:</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Cena en Danubio: Cruceros con cena (35-50€)</li>
                <li>• Atardecer Bastión: Sin multitudes 19:00h</li>
                <li>• Paseo nocturno puentes: Iluminación dorada</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Para Gourmets:</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Tour gastronómico: 6 especialidades (45€)</li>
                <li>• Mercado productores: Sábados Hold utca</li>
                <li>• Clases cocina húngara: Goulash auténtico (35€)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusión */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💫 ¿Te Ha Servido Esta Guía?</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Budapest es una ciudad que enamora a primera vista.</strong> Con este itinerario optimizado 
            aprovecharás cada momento y cada euro invertido. Los balnearios termales, la arquitectura imperial 
            y la gastronomía húngara te dejarán recuerdos para toda la vida.
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>¿Tienes alguna pregunta específica sobre Budapest?</strong> Escríbenos y te ayudamos a personalizar 
            tu itinerario según tus intereses y presupuesto.
          </p>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Listo para descubrir Budapest?</h3>
          <p className="text-lg mb-6 opacity-90">
            Encuentra los mejores vuelos a Budapest y empieza a planificar tu aventura húngara
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
      <FAQSection faqs={faqs} title="Preguntas Resueltas por Viajeros Reales" />
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Guías" currentArticleId="budapest-4-dias" />
    </article>
  );
};

export default BudapestGuideArticle;