import { ArrowLeft, Share2, MapPin, Clock, Euro, Star, Wifi, Smartphone, Shield, Plug } from 'lucide-react';
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
            Guía Completa
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Budapest en 4 Días: Guía Completa con Itinerario y Presupuesto
        </h1>

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
          alt="Vista panorámica del Parlamento de Budapest al atardecer desde el Danubio"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido de la guía */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Budapest es una de esas ciudades que te enamoran desde el primer momento.</strong> La capital húngara 
            combina historia imperial, arquitectura espectacular, balnearios únicos y una vida nocturna vibrante. 
            Todo esto con precios que no te arruinarán el presupuesto.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            En esta guía te cuento exactamente cómo aprovechar 4 días en Budapest, qué ver cada día, dónde alojarte, 
            qué comer y cuánto te va a costar todo. He estado tres veces y cada visita descubro algo nuevo.
          </p>
        </div>

        {/* Resumen rápido */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Resumen de tu viaje a Budapest</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🎯 Highlights imprescindibles</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Parlamento húngaro (tour guiado)</li>
                <li>• Castillo de Buda y vistas panorámicas</li>
                <li>• Bastión de los Pescadores al amanecer</li>
                <li>• Balnearios Széchenyi (experiencia única)</li>
                <li>• Crucero nocturno por el Danubio</li>
                <li>• Gran Sinagoga (la más grande de Europa)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">💰 Presupuesto por día</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• <strong>Mochilero:</strong> 45-60€/día</li>
                <li>• <strong>Medio:</strong> 80-120€/día</li>
                <li>• <strong>Cómodo:</strong> 150-200€/día</li>
                <li>• <strong>Transporte:</strong> 1.2€ por trayecto</li>
                <li>• <strong>Comida:</strong> 8-25€ por comida</li>
                <li>• <strong>Atracciones:</strong> 5-20€ entrada</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Día 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
            Día 1: Poder Imperial y Herencia Cultural
          </h2>
          
          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
            <p className="text-sky-800 text-sm mb-0">
              <strong>🎯 Objetivo del día:</strong> Parlamento + Recorrido histórico + Gran Sinagoga + Basílica
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-sky-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🏛️ 9:00 - Parlamento Húngaro (Tour Guiado)</h3>
              <p className="text-gray-700 text-sm mb-2">
                Empieza fuerte con el edificio más icónico de Budapest. El tour guiado te lleva por las salas más 
                espectaculares, incluida la Cúpula donde se guardan las Joyas de la Corona.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm">
                <p className="text-emerald-800 mb-1"><strong>💰 Precio:</strong> 18€ (reserva online con antelación)</p>
                <p className="text-emerald-800 mb-1"><strong>⏰ Duración:</strong> 1 hora</p>
                <p className="text-emerald-800 mb-0"><strong>💡 Tip:</strong> Llega 15 min antes, las colas pueden ser largas</p>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🚶‍♂️ 11:00 - Paseo por el Centro Histórico</h3>
              <p className="text-gray-700 text-sm mb-2">
                Camina hasta la Plaza Vörösmarty, pasa por la calle peatonal Váci utca (perfecta para compras) 
                y dirígete hacia el Mercado Central.
              </p>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 text-sm">
                <p className="text-sky-800 mb-0"><strong>📍 Ruta:</strong> Parlamento → Plaza Vörösmarty → Váci utca → Mercado Central (2.5 km caminando)</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🍽️ 13:00 - Almuerzo en Mercado Central</h3>
              <p className="text-gray-700 text-sm mb-2">
                El Mercado Central es perfecto para probar comida húngara auténtica a buen precio. Prueba el goulash, 
                lángos o schnitzel húngaro.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm">
                <p className="text-orange-800 mb-1"><strong>💰 Presupuesto:</strong> 8-15€ por persona</p>
                <p className="text-orange-800 mb-0"><strong>🥘 Recomendado:</strong> Goulash (6€) + Lángos (4€) + Cerveza local (3€)</p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🕍 15:00 - Gran Sinagoga</h3>
              <p className="text-gray-700 text-sm mb-2">
                La sinagoga más grande de Europa y segunda del mundo. El museo judío anexo cuenta la historia 
                de la comunidad judía húngara de forma muy emotiva.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-sm">
                <p className="text-purple-800 mb-1"><strong>💰 Precio:</strong> 12€ (incluye museo)</p>
                <p className="text-purple-800 mb-1"><strong>⏰ Duración:</strong> 1.5 horas</p>
                <p className="text-purple-800 mb-0"><strong>📸 Foto obligada:</strong> Fachada exterior con las torres gemelas</p>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">⛪ 17:00 - Basílica de San Esteban</h3>
              <p className="text-gray-700 text-sm mb-2">
                Sube a la cúpula para una de las mejores vistas de Budapest. Si tienes suerte con el tiempo, 
                el atardecer desde aquí es espectacular.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
                <p className="text-yellow-800 mb-1"><strong>💰 Precio:</strong> 8€ (cúpula) + 2€ (basílica)</p>
                <p className="text-yellow-800 mb-0"><strong>💡 Tip:</strong> Hay ascensor, pero también puedes subir andando (364 escalones)</p>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🍷 19:30 - Cena en Frici Papa</h3>
              <p className="text-gray-700 text-sm mb-2">
                Restaurante local auténtico donde comen los húngaros. Porciones generosas, precios justos y 
                ambiente familiar. Perfecto para probar la cocina tradicional.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm">
                <p className="text-red-800 mb-1"><strong>💰 Presupuesto:</strong> 15-25€ por persona</p>
                <p className="text-red-800 mb-0"><strong>📍 Ubicación:</strong> Kálvin tér 9 (cerca del Mercado Central)</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mt-6">
            <p className="text-gray-800 text-sm mb-0">
              <strong>💰 Total Día 1:</strong> 65-85€ por persona (incluyendo comidas, entradas y transporte)
            </p>
          </div>
        </div>

        {/* Día 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
            Día 2: Realeza Medieval y Romance Danubiano
          </h2>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
            <p className="text-emerald-800 text-sm mb-0">
              <strong>🎯 Objetivo del día:</strong> Castillo + Bastión de los Pescadores + Crucero nocturno
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-sky-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🏰 9:30 - Castillo de Buda</h3>
              <p className="text-gray-700 text-sm mb-2">
                Sube en funicular (o camina si quieres ahorrar) hasta el Castillo Real. Las vistas del Danubio 
                y Pest desde aquí son increíbles. Visita la Galería Nacional Húngara si te gusta el arte.
              </p>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 text-sm">
                <p className="text-sky-800 mb-1"><strong>💰 Funicular:</strong> 4€ ida y vuelta (o gratis caminando)</p>
                <p className="text-sky-800 mb-1"><strong>💰 Galería:</strong> 8€ (opcional)</p>
                <p className="text-sky-800 mb-0"><strong>⏰ Tiempo recomendado:</strong> 2-3 horas</p>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🏛️ 12:30 - Bastión de los Pescadores</h3>
              <p className="text-gray-700 text-sm mb-2">
                A 5 minutos caminando del Castillo. Es gratis y las vistas son espectaculares. Las torres de cuento 
                de hadas son perfectas para fotos. Si hay mucha gente, vuelve al atardecer.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm">
                <p className="text-emerald-800 mb-1"><strong>💰 Precio:</strong> Gratis (terraza superior 2€)</p>
                <p className="text-emerald-800 mb-0"><strong>📸 Mejor momento:</strong> Amanecer o atardecer para menos gente</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🍽️ 14:00 - Almuerzo en Ruszwurm</h3>
              <p className="text-gray-700 text-sm mb-2">
                La pastelería más antigua de Budapest (desde 1827). Prueba el strudel de manzana y un café húngaro. 
                Es pequeño pero con mucho encanto.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm">
                <p className="text-orange-800 mb-1"><strong>💰 Presupuesto:</strong> 8-12€ por persona</p>
                <p className="text-orange-800 mb-0"><strong>📍 Ubicación:</strong> Szentháromság utca 7 (en el barrio del Castillo)</p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🚶‍♂️ 16:00 - Exploración libre del Barrio del Castillo</h3>
              <p className="text-gray-700 text-sm mb-2">
                Pasea por las calles empedradas, visita la Iglesia de Matías, explora las murallas medievales. 
                Es un barrio perfecto para perderse y descubrir rincones únicos.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-sm">
                <p className="text-purple-800 mb-0"><strong>💡 Tip:</strong> Muchas calles son peatonales, perfecto para caminar tranquilo</p>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🛥️ 20:00 - Crucero nocturno por el Danubio</h3>
              <p className="text-gray-700 text-sm mb-2">
                La experiencia más romántica de Budapest. Ver el Parlamento y el Castillo iluminados desde el río 
                es mágico. Incluye una copa de champán y música en vivo.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="text-blue-800 mb-1"><strong>💰 Precio:</strong> 25-35€ por persona</p>
                <p className="text-blue-800 mb-1"><strong>⏰ Duración:</strong> 1.5 horas</p>
                <p className="text-blue-800 mb-0"><strong>🎫 Reserva:</strong> Online con antelación, se agotan rápido</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mt-6">
            <p className="text-gray-800 text-sm mb-0">
              <strong>💰 Total Día 2:</strong> 70-95€ por persona
            </p>
          </div>
        </div>

        {/* Día 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
            Día 3: Aguas Milenarias y Esplendor Imperial
          </h2>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <p className="text-orange-800 text-sm mb-0">
              <strong>🎯 Objetivo del día:</strong> Balnearios Széchenyi + Plaza de los Héroes + Andrássy + New York Café
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-sky-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">♨️ 10:00 - Balnearios Széchenyi</h3>
              <p className="text-gray-700 text-sm mb-2">
                La experiencia más única de Budapest. Aguas termales naturales en un complejo de 1913. 
                Hay piscinas de diferentes temperaturas, saunas y la famosa piscina exterior donde la gente juega al ajedrez.
              </p>
              <div className="bg-sky-50 border border-sky-200 rounded-lg p-3 text-sm">
                <p className="text-sky-800 mb-1"><strong>💰 Precio:</strong> 22€ día completo (incluye taquilla)</p>
                <p className="text-sky-800 mb-1"><strong>🎒 Lleva:</strong> Bañador, chanclas, toalla (o alquila allí por 5€)</p>
                <p className="text-sky-800 mb-0"><strong>⏰ Tiempo recomendado:</strong> 3-4 horas mínimo</p>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🏛️ 15:00 - Plaza de los Héroes</h3>
              <p className="text-gray-700 text-sm mb-2">
                Justo al lado de los balnearios. Monumento impresionante que conmemora los 1000 años de historia húngara. 
                Perfecto para fotos y está rodeado de museos si quieres entrar.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-sm">
                <p className="text-emerald-800 mb-1"><strong>💰 Precio:</strong> Gratis</p>
                <p className="text-emerald-800 mb-0"><strong>📸 Tip:</strong> Las mejores fotos son desde las escaleras del Museo de Bellas Artes</p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🛍️ 16:30 - Avenida Andrássy</h3>
              <p className="text-gray-700 text-sm mb-2">
                Patrimonio de la UNESCO. Pasea por esta elegante avenida llena de palacios, tiendas de lujo y cafés históricos. 
                Es como los Campos Elíseos de Budapest.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-sm">
                <p className="text-purple-800 mb-0"><strong>🚇 Transporte:</strong> Metro línea M1 (la más antigua del continente)</p>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">☕ 18:00 - New York Café</h3>
              <p className="text-gray-700 text-sm mb-2">
                "El café más bonito del mundo". Decoración dorada espectacular, techos pintados a mano, ambiente de 
                película. Es caro pero vale la pena para la experiencia.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
                <p className="text-yellow-800 mb-1"><strong>💰 Precio:</strong> 8-15€ por café y pastel</p>
                <p className="text-yellow-800 mb-0"><strong>📸 Imprescindible:</strong> Fotos del interior dorado</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mt-6">
            <p className="text-gray-800 text-sm mb-0">
              <strong>💰 Total Día 3:</strong> 60-80€ por persona
            </p>
          </div>
        </div>

        {/* Día 4 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
            Día 4: Autenticidad Local y Despedida
          </h2>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
            <p className="text-purple-800 text-sm mb-0">
              <strong>🎯 Objetivo del día:</strong> Mercado Central + Colina Gellért + Exploración libre
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🛒 10:00 - Mercado Central (compras)</h3>
              <p className="text-gray-700 text-sm mb-2">
                Vuelve al mercado para comprar souvenirs auténticos: paprika húngara, vinos locales, artesanías. 
                Los precios son mucho mejores que en las tiendas turísticas.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
                <p className="text-green-800 mb-1"><strong>🎁 Souvenirs recomendados:</strong> Paprika (3€), Vino Tokaj (15€), Cerámica (8-20€)</p>
                <p className="text-green-800 mb-0"><strong>💡 Tip:</strong> Regatear es aceptable, especialmente si compras varias cosas</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">⛰️ 12:00 - Colina Gellért y Ciudadela</h3>
              <p className="text-gray-700 text-sm mb-2">
                La subida vale la pena por las vistas panorámicas de toda Budapest. La Ciudadela en la cima tiene 
                la Estatua de la Libertad y las mejores vistas de 360° de la ciudad.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm">
                <p className="text-orange-800 mb-1"><strong>💰 Precio:</strong> Gratis</p>
                <p className="text-orange-800 mb-1"><strong>🥾 Dificultad:</strong> Subida moderada (20-30 min)</p>
                <p className="text-orange-800 mb-0"><strong>📸 Mejor momento:</strong> Mediodía para luz perfecta</p>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🍽️ 14:30 - Almuerzo en Gellért Brasserie</h3>
              <p className="text-gray-700 text-sm mb-2">
                Restaurante con terraza y vistas al Danubio. Perfecto para relajarse después de la subida a la colina. 
                Cocina húngara moderna con toque internacional.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                <p className="text-blue-800 mb-1"><strong>💰 Presupuesto:</strong> 18-28€ por persona</p>
                <p className="text-blue-800 mb-0"><strong>🍷 Recomendado:</strong> Prueba un vino húngaro local</p>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🎭 16:00 - Exploración libre</h3>
              <p className="text-gray-700 text-sm mb-2">
                Tiempo libre para revisitar tu lugar favorito, hacer compras de última hora, o simplemente pasear 
                por las calles de Pest. Recomiendo el barrio judío si no lo exploraste bien el primer día.
              </p>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-sm">
                <p className="text-indigo-800 mb-0"><strong>💡 Alternativas:</strong> Balnearios Gellért, Casa del Terror, o simplemente café en una terraza</p>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">🍽️ 19:00 - Cena de despedida</h3>
              <p className="text-gray-700 text-sm mb-2">
                Para la última noche, te recomiendo Bock Bisztró (si quieres algo especial) o Frici Papa (si prefieres 
                auténtico y económico). Ambos son excelentes opciones.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm">
                <p className="text-red-800 mb-1"><strong>💰 Bock Bisztró:</strong> 35-50€ (alta cocina húngara)</p>
                <p className="text-red-800 mb-0"><strong>💰 Frici Papa:</strong> 15-25€ (auténtico y económico)</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mt-6">
            <p className="text-gray-800 text-sm mb-0">
              <strong>💰 Total Día 4:</strong> 50-85€ por persona
            </p>
          </div>
        </div>

        {/* Presupuesto detallado */}
        <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Presupuesto detallado para 4 días</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-emerald-200">
              <h3 className="font-bold text-emerald-800 mb-4 text-center">🎒 Mochilero</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Alojamiento (4 noches):</span>
                  <span className="font-semibold">60-80€</span>
                </div>
                <div className="flex justify-between">
                  <span>Comidas:</span>
                  <span className="font-semibold">120-160€</span>
                </div>
                <div className="flex justify-between">
                  <span>Transporte local:</span>
                  <span className="font-semibold">20-25€</span>
                </div>
                <div className="flex justify-between">
                  <span>Atracciones:</span>
                  <span className="font-semibold">40-60€</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-emerald-800">
                  <span>TOTAL:</span>
                  <span>240-325€</span>
                </div>
                <p className="text-xs text-emerald-700 mt-2">
                  Hostales céntricos recomendados, comida en mercados y restaurantes locales
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200">
              <h3 className="font-bold text-sky-800 mb-4 text-center">🏨 Medio</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Alojamiento (4 noches):</span>
                  <span className="font-semibold">160-240€</span>
                </div>
                <div className="flex justify-between">
                  <span>Comidas:</span>
                  <span className="font-semibold">200-280€</span>
                </div>
                <div className="flex justify-between">
                  <span>Transporte local:</span>
                  <span className="font-semibold">25-30€</span>
                </div>
                <div className="flex justify-between">
                  <span>Atracciones:</span>
                  <span className="font-semibold">60-80€</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-sky-800">
                  <span>TOTAL:</span>
                  <span>445-630€</span>
                </div>
                <p className="text-xs text-sky-700 mt-2">
                  Hoteles 3-4*, mix restaurantes turísticos y locales
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-purple-200">
              <h3 className="font-bold text-purple-800 mb-4 text-center">✨ Cómodo</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Alojamiento (4 noches):</span>
                  <span className="font-semibold">320-480€</span>
                </div>
                <div className="flex justify-between">
                  <span>Comidas:</span>
                  <span className="font-semibold">320-400€</span>
                </div>
                <div className="flex justify-between">
                  <span>Transporte:</span>
                  <span className="font-semibold">40-60€</span>
                </div>
                <div className="flex justify-between">
                  <span>Atracciones:</span>
                  <span className="font-semibold">80-120€</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-purple-800">
                  <span>TOTAL:</span>
                  <span>760-1060€</span>
                </div>
                <p className="text-xs text-purple-700 mt-2">
                  Hoteles 4-5*, restaurantes de calidad, taxis ocasionales
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dónde alojarse */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏨 Dónde alojarse en Budapest</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🎯 Mejores barrios</h3>
              <div className="space-y-3">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                  <h4 className="font-semibold text-emerald-800 text-sm">Distrito V (Centro)</h4>
                  <p className="text-emerald-700 text-xs">Cerca de todo, pero más caro. Perfecto para estancias cortas.</p>
                </div>
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                  <h4 className="font-semibold text-sky-800 text-sm">Distrito VII (Barrio Judío)</h4>
                  <p className="text-sky-700 text-xs">Vida nocturna, ruin bars, ambiente joven. Muy recomendado.</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <h4 className="font-semibold text-orange-800 text-sm">Distrito VI (Andrássy)</h4>
                  <p className="text-orange-700 text-xs">Elegante, cerca del metro, buena relación calidad-precio.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🏨 Recomendaciones por presupuesto</h3>
              <div className="space-y-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <h4 className="font-semibold text-green-800 text-sm">💚 Económico (15-25€/noche)</h4>
                  <p className="text-green-700 text-xs">Hostales en barrio judío, habitaciones compartidas, ambiente social</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-800 text-sm">💙 Medio (40-80€/noche)</h4>
                  <p className="text-blue-700 text-xs">Hoteles 3*, apartamentos Airbnb, ubicación céntrica</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-800 text-sm">💜 Lujo (100-200€/noche)</h4>
                  <p className="text-purple-700 text-xs">Hoteles históricos, spas incluidos, vistas al Danubio</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mt-6">
            <p className="text-sky-800 text-sm mb-2">
              👉 <strong>
                <a href="https://www.booking.com/" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Booking para reservar
                </a>
              </strong>
            </p>
          </div>
        </div>

        {/* Qué comer */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🍽️ Qué comer en Budapest</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🥘 Platos imprescindibles</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Goulash (gulyás)</span>
                  <span className="font-semibold text-emerald-600">6-12€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Schnitzel húngaro</span>
                  <span className="font-semibold text-emerald-600">8-15€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Lángos (pan frito)</span>
                  <span className="font-semibold text-emerald-600">3-6€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Chimney cake (kürtőskalács)</span>
                  <span className="font-semibold text-emerald-600">3-5€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Fisherman's soup</span>
                  <span className="font-semibold text-emerald-600">8-14€</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🍺 Bebidas típicas</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Cerveza local (Dreher, Soproni)</span>
                  <span className="font-semibold text-sky-600">2-4€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pálinka (aguardiente)</span>
                  <span className="font-semibold text-sky-600">3-6€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Vino Tokaj (dulce)</span>
                  <span className="font-semibold text-sky-600">4-8€ copa</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Unicum (licor de hierbas)</span>
                  <span className="font-semibold text-sky-600">4-7€</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-6">
            <h3 className="font-semibold text-orange-800 mb-2">🍴 Mis restaurantes favoritos</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-orange-700 mb-1"><strong>Frici Papa:</strong> Auténtico, económico, porciones generosas</p>
                <p className="text-orange-700 mb-1"><strong>Gettó Gulyás:</strong> El mejor goulash de la ciudad</p>
                <p className="text-orange-700"><strong>Bock Bisztró:</strong> Alta cocina húngara moderna</p>
              </div>
              <div>
                <p className="text-orange-700 mb-1"><strong>New York Café:</strong> Experiencia única (caro pero vale la pena)</p>
                <p className="text-orange-700 mb-1"><strong>Central Market Hall:</strong> Comida de calle auténtica</p>
                <p className="text-orange-700"><strong>Ruszwurm:</strong> Pasteles tradicionales desde 1827</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kit digital del viajero */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📱 Kit digital del viajero</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Smartphone className="h-5 w-5 text-sky-500 mr-2" />
                Apps imprescindibles
              </h3>
              <div className="space-y-3">
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                  <h4 className="font-semibold text-sky-800 text-sm">BudapestGO</h4>
                  <p className="text-sky-700 text-xs">Transporte público en tiempo real, rutas optimizadas</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                  <h4 className="font-semibold text-emerald-800 text-sm">Google Translate</h4>
                  <p className="text-emerald-700 text-xs">Húngaro offline, cámara para menús</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <h4 className="font-semibold text-orange-800 text-sm">Maps.me</h4>
                  <p className="text-orange-700 text-xs">Mapas offline detallados, funciona sin internet</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-800 text-sm">Citymapper</h4>
                  <p className="text-purple-700 text-xs">Rutas optimizadas de transporte</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Shield className="h-5 w-5 text-emerald-500 mr-2" />
                Productos esenciales
              </h3>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">Mochila Cabina 40x20x25</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Compatible Ryanair, perfecta para 4 días</p>
                    <span className="text-sm font-semibold text-emerald-600">Desde 35€</span>
                  </div>
                  <a
                    href="https://www.amazon.es/Hayayu-40x20x25-Mochilas-Senderismo-Impermeable/dp/B0CBVFL64Z?tag=viajamejor-21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-1 text-xs ml-4"
                  >
                    <span>🚀 VER</span>
                  </a>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">Batería Externa INIU</h4>
                    <p className="text-xs text-gray-600 mt-0.5">10000mAh, carga rápida, compacta</p>
                    <span className="text-sm font-semibold text-emerald-600">Desde 20€</span>
                  </div>
                  <a
                    href="https://www.amazon.es/INIU-10000mAh-Cargador-Portatil-Tel%C3%A9fono/dp/B08VD632WJ?tag=viajamejor-21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-1 text-xs ml-4"
                  >
                    <span>🚀 VER</span>
                  </a>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">Almohada Viscoelástica</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Para vuelos cómodos, incluye antifaz</p>
                    <span className="text-sm font-semibold text-emerald-600">Desde 25€</span>
                  </div>
                  <a
                    href="https://www.amazon.es/SOMLAW-Almohada-Viscoel%C3%A1stica-Memoria-Viajando/dp/B0B96TP1WX?tag=viajamejor-21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-1 text-xs ml-4"
                  >
                    <span>🚀 VER</span>
                  </a>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">Adaptador Universal Tipo C</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Para enchufes europeos, compacto</p>
                    <span className="text-sm font-semibold text-emerald-600">8-12€</span>
                  </div>
                  <a
                    href="https://www.amazon.es/TESSAN-Adaptador-Universal-Internacional-Americano/dp/B0B2DRC76L?tag=viajamejor-21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-1 text-xs ml-4"
                  >
                    <span>🚀 VER</span>
                  </a>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">Seguro IATI con 5% descuento</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Cobertura médica completa para Europa</p>
                    <span className="text-sm font-semibold text-emerald-600">12-15€ para 4 días</span>
                  </div>
                  <a
                    href="https://www.iatiseguros.com?r=37344279073491"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-1 text-xs ml-4"
                  >
                    <span>🚀 VER</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transporte */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚇 Cómo moverse por Budapest</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🎫 Opciones de transporte</h3>
              <div className="space-y-3">
                <div className="bg-sky-50 border border-sky-200 rounded-lg p-3">
                  <h4 className="font-semibold text-sky-800 text-sm">Billete sencillo</h4>
                  <p className="text-sky-700 text-xs">1.2€ por trayecto, válido 80 minutos</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                  <h4 className="font-semibold text-emerald-800 text-sm">Pase 72 horas</h4>
                  <p className="text-emerald-700 text-xs">16€, perfecto para 4 días, incluye metro, bus, tranvía</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <h4 className="font-semibold text-orange-800 text-sm">Budapest Card</h4>
                  <p className="text-orange-700 text-xs">92€ para 4 días (96h), incluye transporte + descuentos</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🚶‍♂️ Consejos de transporte</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• <strong>Metro:</strong> 4 líneas, muy eficiente, funciona hasta 23:30</p>
                <p>• <strong>Tranvías:</strong> Líneas 4 y 6 conectan toda la ciudad</p>
                <p>• <strong>A pie:</strong> El centro es muy caminable, muchas atracciones están cerca</p>
                <p>• <strong>Taxis:</strong> Usa Bolt o Uber, más baratos que taxis tradicionales</p>
                <p>• <strong>Bicicletas:</strong> MOL Bubi (sistema público), 2€/día</p>
              </div>
            </div>
          </div>
        </div>

        {/* Consejos prácticos */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Consejos prácticos para Budapest</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🌡️ Cuándo ir</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <h4 className="font-semibold text-green-800">🌸 Primavera (Mar-May)</h4>
                  <p className="text-green-700 text-xs">Perfecto. Clima agradable, menos turistas, precios normales</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <h4 className="font-semibold text-yellow-800">☀️ Verano (Jun-Ago)</h4>
                  <p className="text-yellow-700 text-xs">Calor, muchos turistas, precios altos. Balnearios perfectos</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <h4 className="font-semibold text-orange-800">🍂 Otoño (Sep-Nov)</h4>
                  <p className="text-orange-700 text-xs">Ideal. Colores bonitos, clima suave, menos gente</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-800">❄️ Invierno (Dic-Feb)</h4>
                  <p className="text-blue-700 text-xs">Frío pero mágico. Mercados navideños, balnearios geniales</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">🎒 Qué llevar</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• <strong>Documentos:</strong> DNI o pasaporte (UE), seguro médico</p>
                <p>• <strong>Dinero:</strong> Euros y forints, muchos sitios aceptan tarjeta</p>
                <p>• <strong>Ropa:</strong> Cómoda para caminar, algo elegante para cenas</p>
                <p>• <strong>Bañador:</strong> Imprescindible para los balnearios</p>
                <p>• <strong>Adaptador:</strong> Tipo C/F (europeo estándar)</p>
                <p>• <strong>Medicinas:</strong> Básicas, farmacias abundantes pero caras</p>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mt-4">
                <p className="text-emerald-800 text-xs mb-0">
                  <strong>💡 Tip:</strong> Descarga mapas offline antes de viajar, el wifi público es limitado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Preguntas frecuentes sobre Budapest</h2>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">¿Vale la pena la Budapest Card?</h3>
              <p className="text-gray-700 text-sm">
                92€ para 4 días (96h). Incluye transporte público ilimitado + descuentos en atracciones. 
                Para 4 días SÍ si visitas 4+ atracciones, si no, mejor billetes sueltos.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">¿Es seguro Budapest?</h3>
              <p className="text-gray-700 text-sm">
                Muy seguro. Uno de los destinos más seguros de Europa. Cuidado normal con carteristas en zonas 
                turísticas y transporte público, pero nada más.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">¿Se puede pagar con euros?</h3>
              <p className="text-gray-700 text-sm">
                En algunos sitios turísticos sí, pero el cambio te lo dan en forints y a mal precio. 
                Mejor cambiar en casas de cambio oficiales o sacar de cajeros.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">¿Cuánto tiempo necesito para ver Budapest?</h3>
              <p className="text-gray-700 text-sm">
                4 días es perfecto para ver lo principal sin prisas. 3 días es el mínimo, 5-6 días si quieres 
                explorar a fondo y hacer excursiones a los alrededores.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">¿Los balnearios son mixtos?</h3>
              <p className="text-gray-700 text-sm">
                Sí, Széchenyi es mixto todos los días. Gellért tiene horarios separados algunos días. 
                Consulta horarios antes de ir si te importa.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusión */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi conclusión sobre Budapest</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Budapest es una ciudad que tiene de todo: historia, cultura, relax, diversión y precios razonables.</strong> 
            En 4 días puedes ver lo principal sin prisas y llevarte una idea muy completa de lo que ofrece la capital húngara.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Lo que más me gusta es que puedes combinar turismo cultural por la mañana con relax en los balnearios por la tarde. 
            Es una ciudad perfecta para todo tipo de viajeros: mochileros, parejas, familias, amigos...
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>¿Has estado en Budapest? ¿Añadirías algo más a este itinerario?</strong> Escríbeme y lo incluyo 
            en futuras actualizaciones. Siempre estoy mejorando las guías con feedback real de viajeros.
          </p>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Te ha servido esta guía?</h3>
          <p className="text-lg mb-6 opacity-90">
            Explora más destinos increíbles con nuestras guías detalladas
          </p>
          <button
            onClick={onBack}
            className="bg-white text-sky-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Ver Más Guías
          </button>
        </div>

        {/* Footer de la guía */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            <strong>Última actualización:</strong> Septiembre 2025 | 
            <strong> Próxima revisión:</strong> Marzo 2026
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Esta guía se actualiza regularmente con nuevos precios, restaurantes y consejos basados en experiencias reales.
          </p>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Guías" currentArticleId="budapest-4-dias" />
    </article>
  );
};

export default BudapestGuideArticle;