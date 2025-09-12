import { ArrowLeft, Share2, MapPin, Clock, Euro, Star, Calendar, Plane, Train, Car, Hotel, Utensils, Camera, Shield, CheckCircle, AlertTriangle } from 'lucide-react';
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
          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            🔥 Guía Popular
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Budapest en 4 Días: Guía Completa con Itinerario y Presupuesto Real
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center bg-emerald-100 px-3 py-1 rounded-full">
            <Euro className="h-4 w-4 text-emerald-600 mr-1" />
            <span className="font-semibold text-emerald-700">Desde 70€/día</span>
          </div>
          <div className="flex items-center bg-orange-100 px-3 py-1 rounded-full">
            <Star className="h-4 w-4 text-orange-600 mr-1" />
            <span className="font-semibold text-orange-700">4.9/5 ★★★★★</span>
          </div>
          <div className="flex items-center bg-sky-100 px-3 py-1 rounded-full">
            <Clock className="h-4 w-4 text-sky-600 mr-1" />
            <span className="font-semibold text-sky-700">4 días perfectos</span>
          </div>
          <div className="flex items-center bg-purple-100 px-3 py-1 rounded-full">
            <Calendar className="h-4 w-4 text-purple-600 mr-1" />
            <span className="font-semibold text-purple-700">Todo el año</span>
          </div>
        </div>

        <div className="flex items-center justify-end text-gray-600 text-sm space-x-6 mb-8">
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
          alt="Vista panorámica del Parlamento de Budapest al atardecer reflejándose en el Danubio"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Budapest es una de esas ciudades que te enamoran desde el primer momento.</strong> La perla del Danubio 
            combina historia imperial, arquitectura espectacular, cultura de balnearios únicos y una vida nocturna vibrante. 
            Y lo mejor: puedes disfrutarlo todo sin arruinarte.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            Esta guía te llevará por los imprescindibles de Budapest en 4 días perfectos, con itinerarios optimizados, 
            presupuestos reales y todos los trucos para aprovechar al máximo tu tiempo y dinero en la capital húngara.
          </p>
        </div>

        {/* Información práctica */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Información Práctica Esencial</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">💰 Presupuesto diario</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>Económico:</strong> 50-70€/día</li>
                  <li>• <strong>Medio:</strong> 70-100€/día</li>
                  <li>• <strong>Cómodo:</strong> 100-150€/día</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌡️ Mejor época</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>Primavera:</strong> Abril-Mayo (ideal)</li>
                  <li>• <strong>Verano:</strong> Junio-Agosto (calor, turistas)</li>
                  <li>• <strong>Otoño:</strong> Septiembre-Octubre (perfecto)</li>
                  <li>• <strong>Invierno:</strong> Nov-Mar (frío, balnearios geniales)</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">💳 Moneda y pagos</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>Moneda:</strong> Forint húngaro (HUF)</li>
                  <li>• <strong>1€ ≈</strong> 400 HUF (aprox.)</li>
                  <li>• <strong>Tarjetas:</strong> Aceptadas en casi todos lados</li>
                  <li>• <strong>Efectivo:</strong> Útil para mercados y propinas</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🗣️ Idioma</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>Oficial:</strong> Húngaro (difícil)</li>
                  <li>• <strong>Inglés:</strong> Bien en zonas turísticas</li>
                  <li>• <strong>Alemán:</strong> Muchos lo hablan</li>
                  <li>• <strong>Apps:</strong> Google Translate offline</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Llegada y Conexiones */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Plane className="h-6 w-6 text-sky-500 mr-3" />
            Llegada y Conexiones Inteligentes
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🛬 Desde el Aeropuerto Budapest Ferenc Liszt</h3>
              <p className="text-gray-700 mb-4">
                El aeropuerto está a 16 km del centro. Tienes varias opciones según tu presupuesto y preferencias:
              </p>
            </div>

            {/* Bus 100E - Información detallada */}
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                🚌 <strong>Bus 100E Airport Express - La Conexión Más Directa</strong>
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">📊 Información esencial:</h5>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Precio:</strong> 2.200 HUF (≈ 5,5€) por trayecto</li>
                    <li>• <strong>Horario:</strong> 24 horas al día, 7 días a la semana</li>
                    <li>• <strong>Frecuencia:</strong> Cada 6-10 min (día) / 20-40 min (noche)</li>
                    <li>• <strong>Tiempo de viaje:</strong> 40-45 minutos hasta el centro</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">🚏 Paradas en la ciudad:</h5>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Deák Ferenc tér</strong> (centro neurálgico)</li>
                    <li>• <strong>Astoria</strong> (conexión metro)</li>
                    <li>• <strong>Kálvin tér</strong> (conexión metro)</li>
                  </ul>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2">🎫 Cómo comprar:</h5>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>En el bus:</strong> Pago directo con tarjeta (Pay&GO)</li>
                  <li>• <strong>BudapestGO app:</strong> "Airport shuttle bus single ticket"</li>
                  <li>• <strong>En el aeropuerto:</strong> Oficinas BKK o máquinas expendedoras</li>
                </ul>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-3">
                <p className="text-emerald-800 text-sm mb-0">
                  💡 <strong>Consejo:</strong> El pago con tarjeta en el bus es lo más rápido - compras y validas al mismo tiempo.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-orange-800 text-sm mb-0">
                  ⚠️ <strong>Importante:</strong> Este billete SOLO funciona en el 100E. No es válido para otros transportes públicos.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">🚕 Taxi</h4>
                <p className="text-gray-600 text-sm mb-2">25-35€ al centro</p>
                <p className="text-gray-600 text-sm">Rápido pero caro. Usa Bolt o Uber.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">🚇 Metro + Bus</h4>
                <p className="text-gray-600 text-sm mb-2">≈ 3€ con transporte público</p>
                <p className="text-gray-600 text-sm">Más lento pero muy económico.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">🚐 Transfer privado</h4>
                <p className="text-gray-600 text-sm mb-2">40-60€</p>
                <p className="text-gray-600 text-sm">Cómodo para grupos o con mucho equipaje.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Itinerario día por día */}
        <div className="space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">🗓️ Itinerario Día por Día</h2>
          
          {/* Día 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Día 1: Poder Imperial y Herencia Cultural
            </h3>
            
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
              <p className="text-sky-800 text-sm mb-0">
                <strong>🎯 Objetivo del día:</strong> Parlamento + Recorrido histórico + Sinagoga + Basílica
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-sky-500 pl-4">
                <h4 className="font-semibold text-gray-900">9:00 - Parlamento Húngaro (visita guiada)</h4>
                <p className="text-gray-600 text-sm">Reserva online con antelación. Visita de 45 min. Precio: 6.000 HUF (≈15€)</p>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-semibold text-gray-900">11:00 - Paseo por el Danubio</h4>
                <p className="text-gray-600 text-sm">Zapatos en el Danubio (memorial) + vistas del Castillo de Buda</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">13:00 - Almuerzo en Frici Papa</h4>
                <p className="text-gray-600 text-sm">Comida húngara auténtica. Goulash: 2.500 HUF (≈6€)</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">15:00 - Gran Sinagoga</h4>
                <p className="text-gray-600 text-sm">La sinagoga más grande de Europa. Entrada: 4.000 HUF (≈10€)</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">17:00 - Basílica de San Esteban</h4>
                <p className="text-gray-600 text-sm">Sube a la cúpula para vistas panorámicas. Entrada: 2.000 HUF (≈5€)</p>
              </div>
              
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900">19:30 - Cena en Bock Bisztró</h4>
                <p className="text-gray-600 text-sm">Cocina moderna húngara. Menú: 8.000-12.000 HUF (≈20-30€)</p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-6">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>💰 Presupuesto del día:</strong> 70-90€ (incluyendo comidas, entradas y transporte)
              </p>
            </div>
          </div>

          {/* Día 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Día 2: Realeza Medieval y Romance Danubiano
            </h3>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>🎯 Objetivo del día:</strong> Castillo + Bastión Pescadores + Crucero nocturno
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-sky-500 pl-4">
                <h4 className="font-semibold text-gray-900">9:30 - Castillo de Buda</h4>
                <p className="text-gray-600 text-sm">Palacio Real + Galería Nacional. Entrada: 3.200 HUF (≈8€)</p>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-semibold text-gray-900">12:00 - Bastión de los Pescadores</h4>
                <p className="text-gray-600 text-sm">Vistas icónicas + Iglesia de Matías. Entrada torre: 1.000 HUF (≈2,5€)</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">14:00 - Almuerzo en Pest-Buda</h4>
                <p className="text-gray-600 text-sm">Terraza con vistas al Danubio. Menú: 4.000-6.000 HUF (≈10-15€)</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">16:00 - Laberinto del Castillo</h4>
                <p className="text-gray-600 text-sm">Cuevas subterráneas medievales. Entrada: 2.500 HUF (≈6€)</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">18:00 - Descanso en hotel</h4>
                <p className="text-gray-600 text-sm">Prepárate para la noche. Ducha y cambio de ropa.</p>
              </div>
              
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900">20:00 - Crucero nocturno por el Danubio</h4>
                <p className="text-gray-600 text-sm">Budapest iluminado desde el agua. Precio: 4.000-8.000 HUF (≈10-20€)</p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-6">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>💰 Presupuesto del día:</strong> 60-80€ (incluyendo crucero y comidas)
              </p>
            </div>
          </div>

          {/* Día 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Día 3: Aguas Milenarias y Esplendor Imperial
            </h3>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
              <p className="text-purple-800 text-sm mb-0">
                <strong>🎯 Objetivo del día:</strong> Balnearios Széchenyi + Plaza Héroes + Andrássy + New York Café
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-sky-500 pl-4">
                <h4 className="font-semibold text-gray-900">9:00 - Balnearios Széchenyi</h4>
                <p className="text-gray-600 text-sm">El balneario más famoso. Entrada: 6.200 HUF (≈15€). Lleva bañador y chanclas.</p>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-semibold text-gray-900">13:00 - Plaza de los Héroes</h4>
                <p className="text-gray-600 text-sm">Monumento del Milenio + Museo de Bellas Artes (opcional)</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">14:30 - Paseo por Andrássy út</h4>
                <p className="text-gray-600 text-sm">Avenida elegante + Ópera + tiendas. Patrimonio de la UNESCO.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">16:30 - New York Café</h4>
                <p className="text-gray-600 text-sm">El café más bonito del mundo. Café + pastel: 3.000-5.000 HUF (≈8-12€)</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">19:00 - Cena en Menza</h4>
                <p className="text-gray-600 text-sm">Cocina húngara moderna. Ambiente local. Menú: 5.000-8.000 HUF (≈12-20€)</p>
              </div>
              
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900">21:30 - Vida nocturna en ruin pubs</h4>
                <p className="text-gray-600 text-sm">Szimpla Kert (el más famoso) o Instant-Fogas. Cerveza: 800-1.200 HUF (≈2-3€)</p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-6">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>💰 Presupuesto del día:</strong> 65-85€ (incluyendo balnearios y vida nocturna)
              </p>
            </div>
          </div>

          {/* Día 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              Día 4: Autenticidad Local y Despedida
            </h3>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <p className="text-orange-800 text-sm mb-0">
                <strong>🎯 Objetivo del día:</strong> Mercado Central + Colina Gellért + Exploración libre
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-sky-500 pl-4">
                <h4 className="font-semibold text-gray-900">10:00 - Mercado Central</h4>
                <p className="text-gray-600 text-sm">Compras de souvenirs + desayuno húngaro. Lángos: 1.500 HUF (≈4€)</p>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-semibold text-gray-900">12:00 - Colina Gellért</h4>
                <p className="text-gray-600 text-sm">Ciudadela + Estatua de la Libertad. Mejores vistas de Budapest (gratis)</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">14:30 - Almuerzo en Frici Papa</h4>
                <p className="text-gray-600 text-sm">Última comida húngara. Schnitzel: 3.200 HUF (≈8€)</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900">16:00 - Exploración libre</h4>
                <p className="text-gray-600 text-sm">Barrio judío, tiendas, cafés o relax en un balneario</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">18:00 - Cena de despedida</h4>
                <p className="text-gray-600 text-sm">Onyx (si quieres lujo) o Kádár Étkezde (auténtico y barato)</p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mt-6">
              <p className="text-emerald-800 text-sm mb-0">
                <strong>💰 Presupuesto del día:</strong> 50-70€ (día más relajado)
              </p>
            </div>
          </div>
        </div>

        {/* Dónde alojarse */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Hotel className="h-6 w-6 text-purple-500 mr-3" />
            🏨 Dónde Alojarse: Mejores Zonas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <h3 className="font-semibold text-sky-800 mb-2">🏛️ Distrito V (Centro)</h3>
              <p className="text-sky-700 text-sm mb-2">
                <strong>Para quién:</strong> Primera vez, comodidad máxima
              </p>
              <p className="text-sky-700 text-sm mb-2">
                <strong>Ventajas:</strong> Cerca de todo, fácil orientación
              </p>
              <p className="text-sky-700 text-sm">
                <strong>Precio:</strong> 80-150€/noche
              </p>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-800 mb-2">🕍 Distrito VII (Barrio Judío)</h3>
              <p className="text-emerald-700 text-sm mb-2">
                <strong>Para quién:</strong> Vida nocturna, ambiente alternativo
              </p>
              <p className="text-emerald-700 text-sm mb-2">
                <strong>Ventajas:</strong> Ruin pubs, restaurantes, cultura
              </p>
              <p className="text-emerald-700 text-sm">
                <strong>Precio:</strong> 60-120€/noche
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-3">🏨 Mis recomendaciones específicas:</h3>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">💰 Presupuesto: Maverick City Lodge</h4>
                <p className="text-gray-600 text-sm">Hostel moderno en el barrio judío. Desde 25€/noche en dormitorio.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">🏨 Medio: Hotel Moments Budapest</h4>
                <p className="text-gray-600 text-sm">4 estrellas cerca del Parlamento. Desde 90€/noche.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">✨ Lujo: Aria Hotel Budapest</h4>
                <p className="text-gray-600 text-sm">5 estrellas con spa. Desde 200€/noche. Experiencia única.</p>
              </div>
            </div>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mt-6">
            <p className="text-sky-800 text-sm mb-0">
              👉 <strong>
                <a href="https://www.booking.com/" target="_blank" rel="noopener noreferrer">
                  Reserva tu alojamiento en Booking con cancelación gratuita
                </a>
              </strong>
            </p>
          </div>
        </div>

        {/* Qué comer */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Utensils className="h-6 w-6 text-orange-500 mr-3" />
            🍽️ Qué Comer: Sabores Auténticos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🥘 Platos imprescindibles:</h3>
              <div className="space-y-2">
                <div className="bg-orange-50 rounded-lg p-3">
                  <h4 className="font-semibold text-orange-800">Goulash (Gulyás)</h4>
                  <p className="text-orange-700 text-sm">Sopa de carne con paprika. 2.000-3.500 HUF (≈5-9€)</p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-3">
                  <h4 className="font-semibold text-red-800">Lángos</h4>
                  <p className="text-red-700 text-sm">Pan frito con crema agria. 1.200-2.000 HUF (≈3-5€)</p>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-3">
                  <h4 className="font-semibold text-yellow-800">Schnitzel húngaro</h4>
                  <p className="text-yellow-700 text-sm">Más grueso que el vienés. 2.800-4.500 HUF (≈7-11€)</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🍷 Bebidas típicas:</h3>
              <div className="space-y-2">
                <div className="bg-purple-50 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-800">Vinos húngaros</h4>
                  <p className="text-purple-700 text-sm">Tokaj (dulce) o Egri Bikavér (tinto). Copa: 1.500-3.000 HUF</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-800">Pálinka</h4>
                  <p className="text-blue-700 text-sm">Aguardiente de frutas. ¡Cuidado, es fuerte! 800-1.500 HUF</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="font-semibold text-green-800">Cerveza local</h4>
                  <p className="text-green-700 text-sm">Dreher, Soproni. 600-1.200 HUF (≈1,5-3€)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Presupuesto detallado */}
        <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Presupuesto Detallado (4 días)</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 border border-emerald-200">
              <h3 className="font-bold text-emerald-800 mb-3">🎒 Mochilero</h3>
              <ul className="text-emerald-700 text-sm space-y-2">
                <li>• <strong>Alojamiento:</strong> 100€ (hostel)</li>
                <li>• <strong>Comidas:</strong> 80€ (mercados + básico)</li>
                <li>• <strong>Transporte:</strong> 20€ (público)</li>
                <li>• <strong>Atracciones:</strong> 40€ (básicas)</li>
                <li>• <strong>Total:</strong> <strong>240€</strong></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-sky-200">
              <h3 className="font-bold text-sky-800 mb-3">🏨 Estándar</h3>
              <ul className="text-sky-700 text-sm space-y-2">
                <li>• <strong>Alojamiento:</strong> 280€ (hotel 3-4★)</li>
                <li>• <strong>Comidas:</strong> 160€ (restaurantes)</li>
                <li>• <strong>Transporte:</strong> 40€ (taxi ocasional)</li>
                <li>• <strong>Atracciones:</strong> 80€ (completas)</li>
                <li>• <strong>Total:</strong> <strong>560€</strong></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <h3 className="font-bold text-purple-800 mb-3">✨ Premium</h3>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• <strong>Alojamiento:</strong> 600€ (hotel 5★)</li>
                <li>• <strong>Comidas:</strong> 320€ (alta cocina)</li>
                <li>• <strong>Transporte:</strong> 80€ (taxis + transfers)</li>
                <li>• <strong>Atracciones:</strong> 120€ (VIP + extras)</li>
                <li>• <strong>Total:</strong> <strong>1.120€</strong></li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-emerald-200 rounded-lg p-4 mt-6">
            <p className="text-emerald-800 text-sm mb-0">
              <strong>💡 Mi recomendación:</strong> El presupuesto estándar te permite disfrutar Budapest cómodamente 
              sin privarte de nada importante. Los balnearios y la buena comida merecen la inversión extra.
            </p>
          </div>
        </div>

        {/* Consejos finales */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Consejos Finales para Triunfar</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">✅ Qué SÍ hacer:</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Reservar el Parlamento con antelación</li>
                <li>• Llevar bañador para los balnearios</li>
                <li>• Probar el goulash auténtico</li>
                <li>• Caminar por Andrássy út al atardecer</li>
                <li>• Visitar al menos un ruin pub</li>
                <li>• Subir a la Colina Gellért para las vistas</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">❌ Qué NO hacer:</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Comer solo en zonas turísticas</li>
                <li>• Cambiar dinero en el aeropuerto</li>
                <li>• Ir a balnearios sin reservar en verano</li>
                <li>• Perderte el crucero nocturno</li>
                <li>• Olvidar llevar efectivo para propinas</li>
                <li>• Subestimar las distancias caminando</li>
              </ul>
            </div>
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
              href="https://www.booking.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              🏨 Reservar Alojamiento
            </a>
            <a 
              href="https://kiwi.tpk.lv/z2gZyZ3E"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-orange-500 transition-colors inline-block"
            >
              ✈️ Buscar Vuelos
            </a>
          </div>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Guías" currentArticleId="budapest-4-dias" />
    </article>
  );
};

export default BudapestGuideArticle;