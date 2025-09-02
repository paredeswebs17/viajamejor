import { ArrowLeft, Share2, MapPin, Clock, Euro, Star, Calendar, Camera, Utensils, Train } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface BudapestGuideArticleProps {
  onBack: () => void;
}

const BudapestGuideArticle: React.FC<BudapestGuideArticleProps> = ({ onBack }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Header del artículo */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-lg transition-all duration-200 font-medium border border-sky-200 hover:border-sky-300 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a guías
        </button>
        
        <div className="mb-6">
          <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Guía de Viaje
          </span>
        </div>
        
        <div className="flex items-start justify-between">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight flex-1">
            Budapest en 4 Días: Guía Completa con Itinerario y Presupuesto
          </h1>
          
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
            className="inline-flex items-center text-gray-600 hover:text-sky-600 bg-gray-50 hover:bg-sky-50 px-2 py-1 rounded-lg transition-all duration-200 font-medium border border-gray-200 hover:border-sky-300 ml-4 flex-shrink-0"
          >
            <Share2 className="h-3 w-3 mr-1" />
            <span className="text-xs">Compartir</span>
          </button>
        </div>
      </div>

      {/* Imagen destacada */}
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
          alt="Vista panorámica del Parlamento de Budapest al atardecer desde el Danubio"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Budapest es una de esas ciudades que te enamoran desde el primer momento.</strong> La perla del Danubio 
            combina historia imperial, arquitectura espectacular, balnearios únicos y una vida nocturna vibrante. 
            Todo esto con precios que no te arruinarán el presupuesto.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            En esta guía te cuento exactamente cómo aprovechar 4 días en Budapest, qué ver cada día, dónde comer, 
            cuánto gastar y todos los trucos para que tu viaje sea perfecto. He estado tres veces y cada visita 
            me ha sorprendido con algo nuevo.
          </p>
        </div>

        {/* Información práctica */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Información práctica</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Euro className="h-5 w-5 text-emerald-500 mr-2" />
                Presupuesto diario
              </h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Mochilero:</strong> 40-60€/día</li>
                <li>• <strong>Medio:</strong> 80-120€/día</li>
                <li>• <strong>Cómodo:</strong> 150-200€/día</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Calendar className="h-5 w-5 text-sky-500 mr-2" />
                Mejor época
              </h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Primavera:</strong> Abril-Mayo (ideal)</li>
                <li>• <strong>Verano:</strong> Junio-Agosto (calor)</li>
                <li>• <strong>Otoño:</strong> Septiembre-Octubre (perfecto)</li>
                <li>• <strong>Invierno:</strong> Diciembre-Febrero (frío, pero balnearios)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Itinerario día por día */}
        <div className="space-y-12">
          
          {/* Día 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Día 1: Poder Imperial y Herencia Cultural
            </h2>
            
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
              <p className="text-sky-800 text-sm mb-0">
                <strong>Ruta del día:</strong> Parlamento → Tour gratuito → Sinagoga → Frici Papa → Basílica → Szimpla Kert
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-sky-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-6 w-6 text-sky-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">9:00 - Parlamento Húngaro</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Empieza temprano en el edificio más icónico de Budapest. La visita guiada dura 45 minutos y te 
                    lleva por las salas más impresionantes, incluida la sala de la cúpula donde se guardan las joyas 
                    de la corona húngara.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Entrada: 22€ | Duración: 45 min</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">11:00 - Free Walking Tour</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Únete a un tour gratuito que te dará contexto histórico perfecto para el resto del viaje. 
                    Suelen empezar en Vörösmarty Square y cubren los puntos principales del centro.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Gratis (propina opcional) | Duración: 2.5h</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">14:30 - Gran Sinagoga</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    La sinagoga más grande de Europa y segunda del mundo. El museo judío anexo es muy interesante 
                    y el memorial del Holocausto en el jardín es conmovedor.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Entrada: 25€ | Duración: 1.5h</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Utensils className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">16:30 - Almuerzo en Frici Papa</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    El mejor goulash de Budapest según los locales. Ambiente auténtico, precios justos y porciones 
                    generosas. Prueba también el schnitzel húngaro.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Comida: 12-18€ | Duración: 1h</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">18:00 - Basílica de San Esteban</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Sube a la cúpula para las mejores vistas de Budapest. Si tienes suerte, puedes escuchar el 
                    órgano durante la misa vespertina (gratis).
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Cúpula: 8€ | Duración: 1h</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Star className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">21:00 - Szimpla Kert (Ruin Pub)</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    El ruin pub más famoso de Budapest. Ambiente único en un edificio abandonado convertido en bar. 
                    Prueba la cerveza local y disfruta del ambiente bohemio.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Cerveza: 3-5€ | Duración: 2-3h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Día 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Día 2: Realeza Medieval y Romance Danubiano
            </h2>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>Ruta del día:</strong> Funicular → Castillo → Bastión → Iglesia Matías → Ruszwurm → Puente Cadenas → Zapatos Danubio → Párisi Udvar → Crucero
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Train className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">9:00 - Funicular del Castillo</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Sube al Castillo de Buda en el histórico funicular. Es caro para lo que es, pero la experiencia 
                    merece la pena. Alternativamente, puedes subir andando en 15 minutos.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Funicular: 4€ | A pie: gratis</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">9:30 - Castillo de Buda</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Explora el complejo del castillo, incluyendo la Galería Nacional Húngara. Las vistas desde 
                    las terrazas son espectaculares, especialmente hacia el Parlamento.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Entrada: 18€ | Duración: 2h</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Camera className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">12:00 - Bastión de los Pescadores</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Las mejores vistas panorámicas de Budapest. Es gratis acceder a la parte baja, pero vale la 
                    pena pagar por subir a las torres para fotos épicas.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Torres: 3€ | Duración: 45 min</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Utensils className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">14:00 - Ruszwurm Confectionery</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    La pastelería más antigua de Budapest (1827). Prueba el strudel de manzana y el café vienés. 
                    Es pequeña pero con mucho encanto histórico.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Postre + café: 8-12€</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">20:00 - Crucero nocturno por el Danubio</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Termina el día con un crucero nocturno. Ver Budapest iluminada desde el río es mágico. 
                    Hay opciones con cena, pero también cruceros simples más económicos.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Crucero: 15-25€ | Duración: 1h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Día 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Día 3: Aguas Milenarias y Esplendor Imperial
            </h2>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <p className="text-orange-800 text-sm mb-0">
                <strong>Ruta del día:</strong> Széchenyi → Plaza Héroes → Castillo Vajdahunyad → Andrássy → Ópera → New York Café
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">9:00 - Balnearios Széchenyi</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Los balnearios más famosos de Budapest. Aguas termales naturales, piscinas al aire libre 
                    y saunas. Perfecto para relajarse y vivir una experiencia única húngara.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Entrada: 22€ | Duración: 3-4h</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">14:00 - Plaza de los Héroes</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Monumento impresionante que conmemora la historia húngara. Perfecto para fotos y está justo 
                    al lado del parque Városliget.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Gratis | Duración: 30 min</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Camera className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">19:00 - New York Café</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    El café más bonito del mundo según muchos. Es caro, pero la experiencia de tomar un café 
                    en este palacio dorado es única. Reserva mesa o ve temprano.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Café + postre: 15-25€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Día 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              Día 4: Autenticidad Local y Despedida
            </h2>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
              <p className="text-purple-800 text-sm mb-0">
                <strong>Ruta del día:</strong> Mercado Central → Colina Gellért → Váci utca → Puente Libertad → Exploración libre
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Utensils className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">10:00 - Mercado Central</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    El mercado más auténtico de Budapest. Perfecto para comprar souvenirs, probar comida local 
                    y llevarte especias húngaras. El lángos de aquí es increíble.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Comida: 5-10€ | Duración: 1.5h</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Camera className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">12:00 - Colina Gellért</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Sube a la Ciudadela para las mejores vistas panorámicas de toda Budapest. Es una caminata 
                    de 20 minutos pero las vistas compensan el esfuerzo.
                  </p>
                  <div className="flex items-center text-xs text-gray-600">
                    <Euro className="h-3 w-3 mr-1" />
                    <span>Gratis | Duración: 2h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consejos prácticos */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Consejos prácticos para Budapest</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">💰 Dinero y pagos</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Moneda: Forint húngaro (HUF)</li>
                <li>• 1€ ≈ 380-400 HUF (varía)</li>
                <li>• Tarjeta aceptada en casi todos lados</li>
                <li>• Propinas: 10-15% en restaurantes</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🚊 Transporte</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Budapest Card: 25€ (48h) con transporte</li>
                <li>• Metro, tranvía y bus muy eficientes</li>
                <li>• Centro histórico se recorre andando</li>
                <li>• Taxis: usa Bolt o Uber</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Presupuesto detallado */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Presupuesto detallado (4 días)</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg">
              <thead>
                <tr className="bg-sky-500 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Concepto</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Mochilero</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Medio</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cómodo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Alojamiento (4 noches)</td>
                  <td className="border border-gray-300 px-4 py-3">80€</td>
                  <td className="border border-gray-300 px-4 py-3">200€</td>
                  <td className="border border-gray-300 px-4 py-3">400€</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Comidas</td>
                  <td className="border border-gray-300 px-4 py-3">60€</td>
                  <td className="border border-gray-300 px-4 py-3">120€</td>
                  <td className="border border-gray-300 px-4 py-3">200€</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Atracciones</td>
                  <td className="border border-gray-300 px-4 py-3">80€</td>
                  <td className="border border-gray-300 px-4 py-3">100€</td>
                  <td className="border border-gray-300 px-4 py-3">150€</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Transporte local</td>
                  <td className="border border-gray-300 px-4 py-3">20€</td>
                  <td className="border border-gray-300 px-4 py-3">30€</td>
                  <td className="border border-gray-300 px-4 py-3">50€</td>
                </tr>
                <tr className="bg-emerald-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium"><strong>TOTAL</strong></td>
                  <td className="border border-gray-300 px-4 py-3"><strong>240€</strong></td>
                  <td className="border border-gray-300 px-4 py-3"><strong>450€</strong></td>
                  <td className="border border-gray-300 px-4 py-3"><strong>800€</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Nota:</strong> Precios no incluyen vuelos desde España (150-300€ según temporada)</p>
          </div>
        </div>

        {/* Conclusión */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi conclusión sobre Budapest</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Budapest es una ciudad que lo tiene todo: historia, cultura, gastronomía y precios razonables.</strong> 
            En 4 días puedes ver lo esencial sin prisas y disfrutar de experiencias únicas como los balnearios termales 
            o los ruin pubs.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Lo que más me gusta es que puedes adaptar el presupuesto a tus necesidades. Desde hostels económicos hasta 
            hoteles de lujo, desde comida callejera hasta restaurantes gourmet. Budapest se adapta a ti.
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>¿Has estado en Budapest? ¿Añadirías algo más al itinerario?</strong> Escríbeme y comparte tu 
            experiencia. Siempre estoy actualizando las guías con nuevos consejos de otros viajeros.
          </p>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Te ha ayudado esta guía?</h3>
          <p className="text-lg mb-6 opacity-90">
            Descubre más guías detalladas y consejos para viajar mejor
          </p>
          <button
            onClick={onBack}
            className="bg-white text-sky-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Ver Más Guías
          </button>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Guías" currentArticleId="budapest-4-dias" />
    </article>
  );
};

export default BudapestGuideArticle;