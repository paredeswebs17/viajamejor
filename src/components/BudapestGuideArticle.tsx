import { ArrowLeft, Share2, MapPin, Euro, Clock, Calendar, Star, CheckCircle, Heart, Camera, Utensils, Coffee, Building, Waves, TreePine, Users, Plane, Train, Car, Bed, Shield, Phone, Wifi, CreditCard } from 'lucide-react';
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
          Volver a Guías
        </button>
        
        <div className="mb-6">
          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            🔥 Guía Popular
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Budapest en 4 Días: Guía Completa con Itinerario y Presupuesto Real
        </h1>

        <div className="flex flex-col gap-4 mb-6 items-start">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
              <Euro className="h-4 w-4 mr-1" />
              <span className="font-semibold">100-120€/día</span>
            </div>
            <div className="flex items-center bg-sky-100 text-sky-800 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4 mr-1" />
              <span>4 días perfectos</span>
            </div>
            <div className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
              <Star className="h-4 w-4 mr-1" />
              <span>4.9/5 ⭐⭐⭐⭐⭐</span>
            </div>
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
            className="inline-flex items-center text-gray-600 hover:text-sky-600 bg-gray-50 hover:bg-sky-50 px-2 py-1 rounded-lg transition-all duration-200 text-sm border border-gray-200 hover:border-sky-300 self-start"
          >
            <Share2 className="h-4 w-4 mr-2" />
            <span>Compartir guía</span>
          </button>
        </div>
      </div>

      {/* Imagen destacada */}
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
          alt="Vista panorámica del Parlamento de Budapest al atardecer reflejándose en el Danubio"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Budapest es una de esas ciudades que te enamoran desde el primer momento.</strong> La capital húngara 
            combina historia imperial, arquitectura impresionante, balnearios únicos y una vida nocturna vibrante. 
            Y lo mejor: es mucho más barata que París, Londres o Ámsterdam.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            En esta guía te comparto mi itinerario optimizado para 4 días, con presupuestos reales, enlaces directos 
            para reservas y todos los trucos que he aprendido en mis visitas a esta ciudad increíble.
          </p>
        </div>

        {/* Timing perfecto */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🕐 Timing perfecto para visitar Budapest</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-800 mb-2">⭐ Época ideal: Mayo-Septiembre</h3>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• Clima perfecto para caminar</li>
                <li>• Balnearios al aire libre abiertos</li>
                <li>• Terrazas y cruceros funcionando</li>
                <li>• Días largos (hasta 21h de luz en junio)</li>
              </ul>
            </div>
            
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <h3 className="font-semibold text-sky-800 mb-2">⭐ Recomendado: Abril-Junio, Septiembre-Octubre</h3>
              <ul className="text-sky-700 text-sm space-y-1">
                <li>• Menos turistas que en verano</li>
                <li>• Precios más bajos en alojamiento</li>
                <li>• Clima agradable para caminar</li>
                <li>• Perfecto para fotos sin multitudes</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
            <h3 className="font-semibold text-orange-800 mb-2">❄️ Invierno (Dic-Feb): Mercados navideños y balnearios</h3>
            <p className="text-orange-700 text-sm">
              Si no te importa el frío, Budapest en invierno tiene su encanto: mercados navideños, balnearios humeantes 
              con nieve alrededor, y precios súper bajos. Eso sí, anochece a las 16h.
            </p>
          </div>
        </div>

        {/* Presupuesto detallado */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Presupuesto real para 4 días</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <h3 className="font-bold text-green-800 text-lg mb-2">💚 Mochilero</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">€280-320</div>
              <div className="text-sm text-green-700 space-y-1">
                <div>🏠 Hostel: €15-20/noche</div>
                <div>🍽️ Comida: €25-30/día</div>
                <div>🎫 Atracciones: €15-20/día</div>
                <div>🚇 Transporte: €8/día</div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <h3 className="font-bold text-blue-800 text-lg mb-2">💙 Cómodo</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">€400-480</div>
              <div className="text-sm text-blue-700 space-y-1">
                <div>🏨 Hotel 3*: €40-50/noche</div>
                <div>🍽️ Comida: €40-50/día</div>
                <div>🎫 Atracciones: €25-30/día</div>
                <div>🚇 Transporte: €12/día</div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <h3 className="font-bold text-purple-800 text-lg mb-2">💜 Lujo</h3>
              <div className="text-2xl font-bold text-purple-600 mb-2">€600-800</div>
              <div className="text-sm text-purple-700 space-y-1">
                <div>🏨 Hotel 4-5*: €80-120/noche</div>
                <div>🍽️ Comida: €60-80/día</div>
                <div>🎫 Atracciones: €40-50/día</div>
                <div>🚗 Taxi/Uber: €20/día</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm mb-0">
              <strong>💡 Estos precios NO incluyen vuelos.</strong> Añade 150-300€ para vuelos desde España según la época. 
              Los precios son por persona y basados en mi experiencia real visitando Budapest.
            </p>
          </div>
        </div>

        {/* Itinerario día por día */}
        <div className="space-y-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">📅 Itinerario día por día</h2>
          
          {/* Día 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold mr-4 shadow-lg">1</span>
              Día 1: Poder Imperial y Herencia Cultural
            </h2>
            <p className="text-gray-600 mb-6 italic">Parlamento + Recorrido histórico + Sinagoga + Basílica</p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-sky-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">🏛️ 9:00 - Parlamento Húngaro (visita guiada)</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Empieza fuerte con el edificio más impresionante de Budapest. La visita guiada te lleva por el interior 
                  neogótico, incluyendo la sala de la cúpula donde se guardan las joyas de la corona húngara.
                </p>
                <div className="bg-sky-50 rounded-lg p-3 text-sm">
                  <p className="text-sky-800 mb-1"><strong>💰 Precio:</strong> €18 (reserva online con antelación)</p>
                  <p className="text-sky-800 mb-1"><strong>⏰ Duración:</strong> 50 minutos</p>
                  <p className="text-sky-800"><strong>📍 Tip:</strong> Reserva con 2-3 días de antelación, se agota rápido</p>
                </div>
              </div>

              <div className="border-l-4 border-emerald-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">👟 11:00 - Paseo por el centro histórico</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Camina por la Plaza Kossuth, cruza el Puente de las Cadenas (icónico para fotos), y explora la 
                  Plaza Vörösmarty. Perfecto para orientarte y hacer las primeras fotos épicas.
                </p>
                <div className="bg-emerald-50 rounded-lg p-3 text-sm">
                  <p className="text-emerald-800 mb-1"><strong>💰 Precio:</strong> Gratis</p>
                  <p className="text-emerald-800 mb-1"><strong>⏰ Duración:</strong> 2 horas caminando tranquilo</p>
                  <p className="text-emerald-800"><strong>📸 Foto obligada:</strong> Parlamento desde el Puente de las Cadenas</p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">🕍 14:00 - Gran Sinagoga + Barrio Judío</h3>
                <p className="text-gray-700 text-sm mb-2">
                  La sinagoga más grande de Europa y una lección de historia imprescindible. El barrio judío es 
                  perfecto para perderse entre cafés vintage y tiendas de diseño local.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 text-sm">
                  <p className="text-purple-800 mb-1"><strong>💰 Precio:</strong> €12 sinagoga + museo</p>
                  <p className="text-purple-800 mb-1"><strong>⏰ Duración:</strong> 1.5 horas</p>
                  <p className="text-purple-800"><strong>🎧 Incluye:</strong> Audioguía en español</p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">☕ 16:00 - Pausa gastronómica en el barrio judío</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Momento perfecto para probar la gastronomía local y recargar energías antes de la tarde.
                </p>
                <div className="bg-orange-50 rounded-lg p-3 text-sm space-y-2">
                  <p className="text-orange-800"><strong>🥔 Frici Papa:</strong> Las mejores patatas rellenas de la ciudad (€4-6)</p>
                  <p className="text-orange-800"><strong>🍷 Mazel Tov:</strong> Ambiente único en patio interior (platos €8-12)</p>
                  <p className="text-orange-800"><strong>☕ Spinoza Café:</strong> Perfecto para café y pasteles (café 3-4€, pasteles 4-5€)</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">⛪ 18:00 - Basílica de San Esteban</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Termina el día subiendo a la cúpula para las mejores vistas de Budapest al atardecer. 
                  La subida vale cada euro: vistas 360° de toda la ciudad.
                </p>
                <div className="bg-red-50 rounded-lg p-3 text-sm">
                  <p className="text-red-800 mb-1"><strong>💰 Precio:</strong> €6 cúpula + €2 basílica</p>
                  <p className="text-red-800 mb-1"><strong>⏰ Mejor momento:</strong> 1 hora antes del atardecer</p>
                  <p className="text-red-800"><strong>📸 Vista:</strong> Parlamento, Danubio y Castillo desde arriba</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-lg p-4 mt-6">
              <p className="text-gray-800 text-sm mb-0">
                <strong>💡 Presupuesto día 1:</strong> €45-55 (sin alojamiento ni cenas). Día intenso pero perfecto 
                para entender la grandeza de Budapest.
              </p>
            </div>
          </div>

          {/* Día 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold mr-4 shadow-lg">2</span>
              Día 2: Realeza Medieval y Romance Danubiano
            </h2>
            <p className="text-gray-600 mb-6 italic">Castillo + Bastión Pescadores + Crucero nocturno</p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">🏰 9:30 - Castillo de Buda</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Sube en el funicular histórico (o camina si quieres ahorrar) hasta el complejo del castillo. 
                  El Palacio Real alberga la Galería Nacional y el Museo de Historia de Budapest.
                </p>
                <div className="bg-emerald-50 rounded-lg p-3 text-sm">
                  <p className="text-emerald-800 mb-1"><strong>💰 Precio:</strong> €8 Galería + €6 funicular (opcional)</p>
                  <p className="text-emerald-800 mb-1"><strong>⏰ Duración:</strong> 2-3 horas</p>
                  <p className="text-emerald-800"><strong>🎨 Imprescindible:</strong> Galería Nacional Húngara</p>
                </div>
              </div>

              <div className="border-l-4 border-sky-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">🐟 12:30 - Bastión de los Pescadores</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Las vistas más fotografiadas de Budapest. Este mirador neogótico ofrece panorámicas perfectas 
                  del Parlamento y el Danubio. Gratis en la parte baja, €3 para subir a las torres.
                </p>
                <div className="bg-sky-50 rounded-lg p-3 text-sm">
                  <p className="text-sky-800 mb-1"><strong>💰 Precio:</strong> Gratis (€3 torres superiores)</p>
                  <p className="text-sky-800 mb-1"><strong>📸 Mejor luz:</strong> Mañana para fotos del Parlamento</p>
                  <p className="text-sky-800"><strong>☕ Tip:</strong> Café en la terraza con vistas (€4-6)</p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">🍽️ 14:00 - Almuerzo en Buda</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Aprovecha para comer en el lado de Buda antes de volver al centro. Zona menos turística = precios mejores.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 text-sm">
                  <p className="text-purple-800 mb-1"><strong>🍲 Recomendado:</strong> Goulash auténtico en Pest-Buda Bistro</p>
                  <p className="text-purple-800 mb-1"><strong>💰 Precio:</strong> €12-18 menú completo</p>
                  <p className="text-purple-800"><strong>🍺 Incluye:</strong> Cerveza húngara Dreher o Soproni</p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">🌅 20:00 - Crucero nocturno por el Danubio</h3>
                <p className="text-gray-700 text-sm mb-2">
                  El broche de oro perfecto. Ver Budapest iluminada desde el río es mágico. Incluye bebida 
                  y comentarios sobre los monumentos que vas viendo.
                </p>
                <div className="bg-orange-50 rounded-lg p-3 text-sm">
                  <p className="text-orange-800 mb-1"><strong>💰 Precio:</strong> €15-25 según temporada</p>
                  <p className="text-orange-800 mb-1"><strong>⏰ Duración:</strong> 1 hora</p>
                  <p className="text-orange-800"><strong>🍷 Incluye:</strong> 1 bebida + audioguía</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-lg p-4 mt-6">
              <p className="text-gray-800 text-sm mb-0">
                <strong>💡 Presupuesto día 2:</strong> €40-60. Día más relajado pero con las vistas más espectaculares 
                de todo el viaje.
              </p>
            </div>
          </div>

          {/* Día 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold mr-4 shadow-lg">3</span>
              Día 3: Aguas Milenarias y Esplendor Imperial
            </h2>
            <p className="text-gray-600 mb-6 italic">Balnearios Széchenyi + Plaza Héroes + Andrássy + New York Café</p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">♨️ 9:00 - Balnearios Széchenyi</h3>
                <p className="text-gray-700 text-sm mb-2">
                  LA experiencia de Budapest. Estos balnearios termales de 1913 son únicos en el mundo. 
                  Aguas a diferentes temperaturas, saunas, y la experiencia de bañarte en aguas termales 
                  centenarias rodeado de arquitectura imperial.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 text-sm">
                  <p className="text-purple-800 mb-1"><strong>💰 Precio:</strong> €22 día completo (incluye taquilla)</p>
                  <p className="text-purple-800 mb-1"><strong>⏰ Mejor momento:</strong> Mañana temprano, menos gente</p>
                  <p className="text-purple-800 mb-1"><strong>🧴 Lleva:</strong> Toalla, chanclas y gorro de baño (obligatorio)</p>
                  <p className="text-purple-800"><strong>🌡️ Temperaturas:</strong> 27°C a 40°C en diferentes piscinas</p>
                </div>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">🏛️ 14:00 - Plaza de los Héroes + Parque Városliget</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Monumento impresionante dedicado a los líderes húngaros. Perfecto para fotos y para entender 
                  la historia del país. El parque alrededor es ideal para un paseo relajado.
                </p>
                <div className="bg-pink-50 rounded-lg p-3 text-sm">
                  <p className="text-pink-800 mb-1"><strong>💰 Precio:</strong> Gratis</p>
                  <p className="text-pink-800 mb-1"><strong>📸 Mejor luz:</strong> Tarde para fotos doradas</p>
                  <p className="text-pink-800"><strong>🚇 Acceso:</strong> Metro línea M1 (la más antigua del continente)</p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">🛍️ 16:00 - Avenida Andrássy</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Los Campos Elíseos de Budapest. Perfecta para caminar, hacer compras y admirar la arquitectura 
                  de los palacios. Conecta la Plaza de los Héroes con el centro.
                </p>
                <div className="bg-orange-50 rounded-lg p-3 text-sm">
                  <p className="text-orange-800 mb-1"><strong>💰 Precio:</strong> Gratis caminar</p>
                  <p className="text-orange-800 mb-1"><strong>🏛️ Paradas:</strong> Ópera, Casa del Terror (opcional €10)</p>
                  <p className="text-orange-800"><strong>🛍️ Compras:</strong> Tiendas locales y marcas internacionales</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">☕ 18:30 - New York Café</h3>
                <p className="text-gray-700 text-sm mb-2">
                  El café más bonito del mundo según muchos. Decoración dorada, techos pintados, ambiente de 
                  película. Caro pero merece la pena para una ocasión especial.
                </p>
                <div className="bg-red-50 rounded-lg p-3 text-sm">
                  <p className="text-red-800 mb-1"><strong>💰 Precio:</strong> €8-12 café + pastel</p>
                  <p className="text-red-800 mb-1"><strong>📸 Imprescindible:</strong> Fotos del interior dorado</p>
                  <p className="text-red-800"><strong>⏰ Tip:</strong> Ve entre semana, fines de semana está lleno</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mt-6">
              <p className="text-gray-800 text-sm mb-0">
                <strong>💡 Presupuesto día 3:</strong> €50-70. Día de relax y cultura, perfecto para desconectar 
                en los balnearios.
              </p>
            </div>
          </div>

          {/* Día 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold mr-4 shadow-lg">4</span>
              Día 4: Autenticidad Local y Despedida
            </h2>
            <p className="text-gray-600 mb-6 italic">Mercado Central + Colina Gellért + Exploración libre</p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">🏪 10:00 - Mercado Central</h3>
                <p className="text-gray-700 text-sm mb-2">
                  El mercado más auténtico de Budapest. Perfecto para comprar souvenirs, probar comida local 
                  y llevarte productos húngaros únicos como pimentón o palinka.
                </p>
                <div className="bg-orange-50 rounded-lg p-3 text-sm">
                  <p className="text-orange-800 mb-1"><strong>🥘 Prueba:</strong> Lángos (pan frito húngaro) €3-5</p>
                  <p className="text-orange-800 mb-1"><strong>🛍️ Souvenirs:</strong> Pimentón húngaro, artesanías</p>
                  <p className="text-orange-800"><strong>⏰ Mejor momento:</strong> Mañana, más productos frescos</p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">⛰️ 12:00 - Colina Gellért + Ciudadela</h3>
                <p className="text-gray-700 text-sm mb-2">
                  La subida vale la pena: vistas panorámicas de toda Budapest, la Estatua de la Libertad, 
                  y perspectivas únicas del Danubio. Perfecto para las últimas fotos épicas.
                </p>
                <div className="bg-red-50 rounded-lg p-3 text-sm">
                  <p className="text-red-800 mb-1"><strong>💰 Precio:</strong> Gratis</p>
                  <p className="text-red-800 mb-1"><strong>🥾 Dificultad:</strong> Subida moderada (30 min)</p>
                  <p className="text-red-800"><strong>📸 Mejor momento:</strong> Mediodía para luz perfecta</p>
                </div>
              </div>

              <div className="border-l-4 border-emerald-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">🍽️ 15:00 - Almuerzo de despedida</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Última comida húngara en un restaurante tradicional. Momento perfecto para probar platos 
                  que no hayas probado aún.
                </p>
                <div className="bg-emerald-50 rounded-lg p-3 text-sm">
                  <p className="text-emerald-800 mb-1"><strong>🍲 Recomendado:</strong> Frici Papa o Bock Bisztró</p>
                  <p className="text-emerald-800 mb-1"><strong>💰 Precio:</strong> €15-25 menú completo</p>
                  <p className="text-emerald-800"><strong>🥘 Prueba:</strong> Schnitzel húngaro o goulash tradicional</p>
                </div>
              </div>

              <div className="border-l-4 border-sky-500 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">🎯 17:00 - Tiempo libre + Últimas compras</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Explora zonas que te hayan gustado, compra últimos souvenirs, o simplemente disfruta de un 
                  café en alguna terraza observando la vida local.
                </p>
                <div className="bg-sky-50 rounded-lg p-3 text-sm">
                  <p className="text-sky-800 mb-1"><strong>🛍️ Zona comercial:</strong> Váci utca (peatonal)</p>
                  <p className="text-sky-800 mb-1"><strong>☕ Alternativa:</strong> Café en Central Market Hall</p>
                  <p className="text-sky-800"><strong>🎁 Souvenirs:</strong> Pimentón, vinos húngaros, artesanías</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 mt-6">
              <p className="text-gray-800 text-sm mb-0">
                <strong>💡 Presupuesto día 4:</strong> €30-50. Día más relajado para disfrutar sin prisas 
                antes de la despedida.
              </p>
            </div>
          </div>
        </div>

        {/* Información práctica */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Información práctica</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Plane className="h-5 w-5 text-sky-500 mr-2" />
                Cómo llegar
              </h3>
              <div className="space-y-3 text-sm">
                <div className="bg-sky-50 rounded-lg p-3">
                  <p className="text-sky-800 mb-1"><strong>✈️ Vuelo:</strong> 2h desde Madrid, 2.5h desde Barcelona</p>
                  <p className="text-sky-800 mb-1"><strong>💰 Precio:</strong> €150-300 ida y vuelta</p>
                  <p className="text-sky-800"><strong>🏢 Aeropuerto:</strong> Budapest Ferenc Liszt (BUD)</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-emerald-800 mb-1"><strong>🚌 Aeropuerto → Centro:</strong> Bus 100E (€3)</p>
                  <p className="text-emerald-800 mb-1"><strong>🚇 Metro:</strong> Línea M3 hasta Deák Ferenc tér</p>
                  <p className="text-emerald-800"><strong>⏰ Tiempo:</strong> 45 minutos al centro</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Bed className="h-5 w-5 text-emerald-500 mr-2" />
                Dónde alojarse
              </h3>
              <div className="space-y-3 text-sm">
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-green-800 mb-1"><strong>💚 Presupuesto:</strong> Maverick City Lodge (€18-25/noche)</p>
                  <p className="text-green-800"><strong>📍 Zona:</strong> Centro, cerca del Parlamento</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-blue-800 mb-1"><strong>💙 Cómodo:</strong> Hotel Moments (€45-65/noche)</p>
                  <p className="text-blue-800"><strong>📍 Zona:</strong> Andrássy út, muy céntrico</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-purple-800 mb-1"><strong>💜 Lujo:</strong> Four Seasons Gresham (€200-350/noche)</p>
                  <p className="text-purple-800"><strong>📍 Zona:</strong> Frente al Puente de las Cadenas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transporte */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Train className="h-6 w-6 text-sky-500 mr-3" />
            Transporte en Budapest
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <h3 className="font-semibold text-sky-800 mb-3">🎫 Budapest Card</h3>
              <p className="text-sky-700 text-sm mb-2">
                Incluye transporte público ilimitado + descuentos en atracciones + entrada gratis a algunos museos.
              </p>
              <ul className="text-sky-700 text-sm space-y-1">
                <li>• 24h: €25</li>
                <li>• 48h: €35</li>
                <li>• 72h: €45</li>
                <li>• 96h: €55</li>
              </ul>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-800 mb-3">🚇 Transporte público</h3>
              <p className="text-emerald-700 text-sm mb-2">
                Sistema eficiente de metro, tranvía y autobús. Funciona hasta medianoche.
              </p>
              <ul className="text-emerald-700 text-sm space-y-1">
                <li>• Billete sencillo: €1.20</li>
                <li>• Pase 24h: €5</li>
                <li>• Pase 72h: €12</li>
                <li>• Pase 7 días: €16</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
            <h3 className="font-semibold text-orange-800 mb-2">🚶‍♂️ Mi recomendación</h3>
            <p className="text-orange-700 text-sm">
              Para 4 días, compra la Budapest Card de 96h (€55). Te ahorras dinero en transporte + descuentos en atracciones. 
              El centro es caminable, pero para ir a los balnearios o al aeropuerto la necesitarás.
            </p>
          </div>
        </div>

        {/* Apps y herramientas útiles */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Phone className="h-6 w-6 text-purple-500 mr-3" />
            Apps y herramientas útiles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-800 mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Google Maps (offline)
                </h3>
                <p className="text-purple-700 text-sm">
                  Descarga el mapa de Budapest antes de viajar. Funciona perfectamente offline y tiene todas las 
                  atracciones marcadas.
                </p>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h3 className="font-semibold text-emerald-800 mb-2 flex items-center">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Revolut
                </h3>
                <p className="text-emerald-700 text-sm">
                  Perfecta para pagar sin comisiones. Hungría usa forint (HUF), pero muchos sitios aceptan euros 
                  (aunque el cambio no es favorable).
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                <h3 className="font-semibold text-sky-800 mb-2 flex items-center">
                  <Wifi className="h-4 w-4 mr-2" />
                  BKK Futár
                </h3>
                <p className="text-sky-700 text-sm">
                  App oficial del transporte público de Budapest. Horarios en tiempo real, rutas optimizadas 
                  y avisos de retrasos.
                </p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-orange-800 mb-2 flex items-center">
                  <Camera className="h-4 w-4 mr-2" />
                  Google Translate
                </h3>
                <p className="text-orange-700 text-sm">
                  Descarga húngaro offline. La función de cámara es perfecta para traducir menús y carteles 
                  en tiempo real.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Consejos finales */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Mis consejos finales para Budapest</h2>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Reserva el Parlamento con antelación:</strong> Se agota rápido, especialmente en verano.</span>
            </p>
            <p className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Lleva gorro de baño a los balnearios:</strong> Es obligatorio, o tendrás que comprarlo allí (€5).</span>
            </p>
            <p className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Cambia dinero en casas de cambio:</strong> Mejor tipo que en bancos o aeropuerto.</span>
            </p>
            <p className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Cena después de las 19h:</strong> Los restaurantes húngaros abren tarde para cenar.</span>
            </p>
            <p className="flex items-start">
              <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
              <span><strong>Aprende "köszönöm" (gracias):</strong> Los húngaros aprecian mucho el esfuerzo.</span>
            </p>
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Listo para enamorarte de Budapest?</h3>
          <p className="text-lg mb-6 opacity-90">
            Con esta guía tienes todo lo necesario para vivir 4 días perfectos en la perla del Danubio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://kiwi.tpk.lv/z2gZyZ3E"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block text-center"
            >
              ✈️ Buscar Vuelos a Budapest
            </a>
            <button
              onClick={onBack}
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-orange-500 transition-colors"
            >
              📖 Ver Más Guías
            </button>
          </div>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Guías" currentArticleId="budapest-4-dias" />
    </article>
  );
};

export default BudapestGuideArticle;