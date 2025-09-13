import React from 'react';
import { ArrowLeft, Share2, MapPin, Clock, Euro, Star, Calendar, CheckCircle, Heart, Camera, Coffee, Utensils } from 'lucide-react';
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
            🔥 Guía Destacada
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Budapest en 4 Días: La Perla del Danubio
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-8">
          <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <Clock className="h-4 w-4 mr-2" />
            4 días completos
          </span>
          <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <Euro className="h-4 w-4 mr-2" />
            Desde 70€/día
          </span>
          <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <Star className="h-4 w-4 mr-2" />
            Nivel: Fácil
          </span>
          <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <Calendar className="h-4 w-4 mr-2" />
            Todo el año
          </span>
          
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Budapest en 4 Días: La Perla del Danubio',
                  text: 'Guía completa para descubrir Budapest',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('¡Enlace copiado al portapapeles!');
                }).catch(() => {
                  window.open(`https://twitter.com/intent/tweet?text=Budapest en 4 Días&url=${encodeURIComponent(window.location.href)}`, '_blank');
                });
              }
            }}
            className="inline-flex items-center text-gray-600 hover:text-sky-600 bg-gray-50 hover:bg-sky-50 px-3 py-1 rounded-full transition-all duration-200 font-medium border border-gray-200 hover:border-sky-300"
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
          alt="Vista panorámica de Budapest con el Parlamento y el río Danubio al atardecer"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-12 border border-amber-200">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Budapest es esa ciudad que te enamora desde el primer momento.</strong> La capital húngara combina 
            la grandeza imperial de Viena con la autenticidad de Europa del Este, todo ello a precios que no te van 
            a arruinar. Después de visitarla tres veces, puedo decirte que 4 días son perfectos para descubrir sus 
            tesoros sin prisas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            Esta guía te llevará por los imprescindibles: desde el majestuoso Parlamento hasta los relajantes 
            balnearios termales, pasando por el romántico Castillo de Buda y los vibrantes ruin pubs. Todo con 
            horarios optimizados, precios actualizados y trucos que solo conocen los locales.
          </p>
        </div>

        {/* Planning Estratégico */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">📋</span>
            Planning Estratégico
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Aspecto</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Recomendación</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Precio/Info</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">🏨 Alojamiento</td>
                  <td className="border border-gray-300 px-4 py-3">Distrito V (centro) o VII (judío)</td>
                  <td className="border border-gray-300 px-4 py-3">40-80€/noche</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">✈️ Vuelos</td>
                  <td className="border border-gray-300 px-4 py-3">Wizz Air, Ryanair desde España</td>
                  <td className="border border-gray-300 px-4 py-3">80-150€ ida/vuelta</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">🎫 Budapest Card</td>
                  <td className="border border-gray-300 px-4 py-3">72h recomendada</td>
                  <td className="border border-gray-300 px-4 py-3">8.900 HUF (≈ 23€)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">🍽️ Comidas</td>
                  <td className="border border-gray-300 px-4 py-3">Mercados + restaurantes locales</td>
                  <td className="border border-gray-300 px-4 py-3">25-40€/día</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">🌡️ Mejor época</td>
                  <td className="border border-gray-300 px-4 py-3">Abril-Junio, Septiembre-Octubre</td>
                  <td className="border border-gray-300 px-4 py-3">15-25°C ideal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Nueva sección de transporte */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">🚗</span>
            Llegada y Conexiones Inteligentes
          </h2>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-xl mr-2">✈️</span>
              Desde Aeropuerto Ferenc Liszt
            </h3>
            
            <div className="mb-6">
              <h4 className="text-md font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-lg mr-2">🚌</span>
                Bus 100E Airport Express - La Conexión Más Directa
              </h4>
              
              <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Información esencial:</h5>
                    <ul className="text-sm text-gray-700 space-y-2 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span><strong>Precio:</strong> 2.200 HUF (≈ 5,5€) por trayecto</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span><strong>Horario:</strong> 24 horas al día, 7 días a la semana</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span><strong>Frecuencia:</strong> Cada 6-10 min (día) / 20-40 min (noche)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span><strong>Tiempo de viaje:</strong> 40-45 minutos hasta el centro</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Paradas en la ciudad:</h5>
                    <ul className="text-sm text-gray-700 space-y-2 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Deák Ferenc tér (centro neurálgico)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Astoria (conexión metro)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Kálvin tér (conexión metro)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Cómo comprar:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <h6 className="font-semibold text-gray-900 text-sm mb-1">En el bus:</h6>
                      <p className="text-xs text-gray-600">Pago directo con tarjeta (Pay&GO)</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <h6 className="font-semibold text-gray-900 text-sm mb-1">BudapestGO app:</h6>
                      <p className="text-xs text-gray-600">"Airport shuttle bus single ticket"</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                      <h6 className="font-semibold text-gray-900 text-sm mb-1">En el aeropuerto:</h6>
                      <p className="text-xs text-gray-600">Oficinas BKK o máquinas expendedoras</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-100 border border-green-300 rounded-xl p-4 mt-4">
                  <p className="text-green-800 text-sm mb-2">
                    <span className="font-semibold">💡 Consejo:</span> El pago con tarjeta en el bus es lo más rápido - compras y validas al mismo tiempo.
                  </p>
                  <p className="text-orange-800 text-sm">
                    <span className="font-semibold">⚠️ Importante:</span> Este billete SOLO funciona en el 100E. No es válido para otros transportes públicos.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-md font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-lg mr-2">🚗</span>
                Transfer Privado - Opción Premium
              </h4>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <ul className="text-sm text-gray-700 space-y-2 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span><strong>Precio:</strong> 8.000 HUF (≈ 22€)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span><strong>Ventaja:</strong> Te esperan con cartel + equipaje incluido</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-sm text-gray-700 space-y-2 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span><strong>Duración:</strong> 25-30 minutos</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span><strong>Reservar:</strong> Transfer Budapest</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-xl mr-2">🚊</span>
              Moverse por Budapest
            </h3>
            
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Lo más eficiente:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <ul className="text-sm text-gray-700 space-y-2 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span><strong>A pie:</strong> Centro histórico completamente caminable</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span><strong>Tranvía 2:</strong> Bordea el Danubio, muy pintoresco</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-sm text-gray-700 space-y-2 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span><strong>Metro M1:</strong> Línea histórica (1896) hacia Andrássy</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span><strong>Precio:</strong> 450 HUF (≈ 1,2€) por trayecto</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Apps imprescindibles:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-2">BudapestGO</h5>
                    <p className="text-sm text-gray-700">Oficial de transporte público</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-2">Bolt</h5>
                    <p className="text-sm text-gray-700">Taxis más baratos que Uber en Budapest</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador decorativo */}
        <div className="flex items-center justify-center my-12">
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="flex-shrink-0 px-4">
            <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">1</span>
            </div>
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* DÍA 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">🏛️</span>
            DÍA 1: Poder Imperial y Herencia Cultural
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resumen del día:</h3>
            <p className="text-gray-700 mb-4">
              <strong>Parlamento + Recorrido histórico + Sinagoga + Basílica</strong>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold text-blue-600">⏰ Duración</div>
                <div className="text-gray-700">8-9 horas</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-green-600">💰 Coste</div>
                <div className="text-gray-700">≈ 45€</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-purple-600">🚶 Caminata</div>
                <div className="text-gray-700">6-7 km</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-orange-600">📸 Highlights</div>
                <div className="text-gray-700">4 principales</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">9:00 - Parlamento Húngaro</h4>
              <p className="text-gray-700 mb-3">
                <strong>Empezamos fuerte.</strong> El Parlamento de Budapest es uno de los más bonitos del mundo. 
                La visita guiada te lleva por las salas más espectaculares, incluida la Cámara de la Corona.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>💰 Precio:</strong> 6.000 HUF (≈ 15€)</p>
                    <p><strong>⏰ Duración:</strong> 50 minutos</p>
                  </div>
                  <div>
                    <p><strong>🎫 Reserva:</strong> Online obligatoria</p>
                    <p><strong>📸 Fotos:</strong> Prohibidas en interior</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">11:00 - Paseo por el Danubio</h4>
              <p className="text-gray-700 mb-3">
                Camina por el Corso hasta la Plaza Vörösmarty. Las vistas del Castillo desde aquí son espectaculares, 
                especialmente con la luz de la mañana.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 text-sm">
                  <strong>📸 Foto perfecta:</strong> Desde el Puente de las Cadenas hacia el Castillo de Buda.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">14:00 - Almuerzo en Frici Papa</h4>
              <p className="text-gray-700 mb-3">
                Restaurante local auténtico donde comen los húngaros. El goulash aquí es legendario y los precios, 
                muy razonables para la calidad.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>🍽️ Plato estrella:</strong> Goulash tradicional</p>
                    <p><strong>💰 Precio medio:</strong> 15-20€ por persona</p>
                  </div>
                  <div>
                    <p><strong>📍 Ubicación:</strong> Kazinczy utca 55</p>
                    <p><strong>⭐ Valoración:</strong> 4.6/5 (Google)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">16:00 - Gran Sinagoga</h4>
              <p className="text-gray-700 mb-3">
                La sinagoga más grande de Europa y segunda del mundo. El museo judío anexo cuenta la historia 
                de la comunidad judía húngara de manera muy emotiva.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>💰 Precio:</strong> 4.000 HUF (≈ 10€)</p>
                    <p><strong>⏰ Duración:</strong> 1-1.5 horas</p>
                  </div>
                  <div>
                    <p><strong>👕 Dress code:</strong> Hombros y piernas cubiertos</p>
                    <p><strong>🎧 Audio:</strong> Incluida en español</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">18:30 - Basílica de San Esteban</h4>
              <p className="text-gray-700 mb-3">
                Sube a la cúpula para las mejores vistas de 360° de Budapest. El atardecer desde aquí es mágico, 
                y puedes ver tanto Buda como Pest perfectamente.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>💰 Cúpula:</strong> 800 HUF (≈ 2€)</p>
                    <p><strong>🏛️ Basílica:</strong> Entrada gratuita</p>
                  </div>
                  <div>
                    <p><strong>🌅 Mejor hora:</strong> 1h antes del atardecer</p>
                    <p><strong>📱 Tip:</strong> Compra online para evitar colas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador decorativo */}
        <div className="flex items-center justify-center my-12">
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="flex-shrink-0 px-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">2</span>
            </div>
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* DÍA 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">🏰</span>
            DÍA 2: Realeza Medieval y Romance Danubiano
          </h2>
          
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resumen del día:</h3>
            <p className="text-gray-700 mb-4">
              <strong>Castillo + Bastión Pescadores + Crucero nocturno</strong>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold text-emerald-600">⏰ Duración</div>
                <div className="text-gray-700">7-8 horas</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-green-600">💰 Coste</div>
                <div className="text-gray-700">≈ 55€</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-purple-600">🚶 Caminata</div>
                <div className="text-gray-700">4-5 km</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-orange-600">📸 Highlights</div>
                <div className="text-gray-700">5 principales</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">10:00 - Castillo de Buda</h4>
              <p className="text-gray-700 mb-3">
                <strong>El corazón histórico de Budapest.</strong> El complejo del castillo alberga la Galería Nacional 
                y el Museo de Historia. Las vistas desde las terrazas son impresionantes.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>💰 Entrada:</strong> 3.200 HUF (≈ 8€)</p>
                    <p><strong>⏰ Duración:</strong> 2-3 horas</p>
                  </div>
                  <div>
                    <p><strong>🚡 Funicular:</strong> 1.400 HUF (≈ 3,5€)</p>
                    <p><strong>🆓 Alternativa:</strong> Subir andando (15 min)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-pink-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">13:30 - Bastión de los Pescadores</h4>
              <p className="text-gray-700 mb-3">
                <strong>Las vistas más fotografiadas de Budapest.</strong> Este mirador neogótico ofrece panorámicas 
                perfectas del Parlamento y el Danubio. La entrada a las torres es de pago, pero las vistas básicas son gratuitas.
              </p>
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>🆓 Terrazas:</strong> Acceso gratuito</p>
                    <p><strong>💰 Torres:</strong> 1.000 HUF (≈ 2,5€)</p>
                  </div>
                  <div>
                    <p><strong>📸 Mejor hora:</strong> Mañana (menos gente)</p>
                    <p><strong>☕ Café:</strong> Fisherman's Bastion Café</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">15:00 - Iglesia de Matías</h4>
              <p className="text-gray-700 mb-3">
                Justo al lado del Bastión. Esta iglesia gótica ha sido testigo de coronaciones reales. 
                Su interior policromado es espectacular, especialmente los frescos del techo.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>💰 Precio:</strong> 2.200 HUF (≈ 5,5€)</p>
                    <p><strong>⏰ Duración:</strong> 45 minutos</p>
                  </div>
                  <div>
                    <p><strong>👑 Historia:</strong> Coronaciones reales</p>
                    <p><strong>🎨 Destacado:</strong> Frescos policromados</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">17:00 - Barrio del Castillo</h4>
              <p className="text-gray-700 mb-3">
                Pasea por las calles empedradas del barrio medieval. Perfecto para comprar souvenirs auténticos 
                y tomar un café con vistas antes de bajar al centro.
              </p>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                <p className="text-indigo-800 text-sm">
                  <strong>☕ Recomendación:</strong> Café Pierrot para un descanso con vistas al Danubio.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">19:30 - Crucero nocturno por el Danubio</h4>
              <p className="text-gray-700 mb-3">
                <strong>El broche de oro perfecto.</strong> Ver Budapest iluminada desde el río es una experiencia 
                mágica. El Parlamento y el Castillo brillan como joyas en la noche.
              </p>
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>💰 Precio:</strong> 4.500 HUF (≈ 12€)</p>
                    <p><strong>⏰ Duración:</strong> 1 hora</p>
                  </div>
                  <div>
                    <p><strong>🍷 Incluye:</strong> Bebida de bienvenida</p>
                    <p><strong>🌙 Mejor hora:</strong> Al atardecer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador decorativo */}
        <div className="flex items-center justify-center my-12">
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="flex-shrink-0 px-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">3</span>
            </div>
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* DÍA 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">♨️</span>
            DÍA 3: Aguas Milenarias y Esplendor Imperial
          </h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resumen del día:</h3>
            <p className="text-gray-700 mb-4">
              <strong>Balnearios Széchenyi + Plaza Héroes + Andrássy + New York Café</strong>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold text-purple-600">⏰ Duración</div>
                <div className="text-gray-700">6-7 horas</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-green-600">💰 Coste</div>
                <div className="text-gray-700">≈ 40€</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-purple-600">♨️ Relax</div>
                <div className="text-gray-700">3-4 horas</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-orange-600">📸 Highlights</div>
                <div className="text-gray-700">3 principales</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">10:00 - Balnearios Széchenyi</h4>
              <p className="text-gray-700 mb-3">
                <strong>La experiencia más auténtica de Budapest.</strong> Estos balnearios termales centenarios 
                son donde los locales se relajan. Las piscinas exteriores funcionan incluso en invierno.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>💰 Precio:</strong> 6.200 HUF (≈ 16€)</p>
                    <p><strong>⏰ Horario:</strong> 6:00 - 22:00</p>
                  </div>
                  <div>
                    <p><strong>🧴 Lleva:</strong> Toalla y chanclas</p>
                    <p><strong>♨️ Temperatura:</strong> 27-40°C</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">14:30 - Plaza de los Héroes</h4>
              <p className="text-gray-700 mb-3">
                Icónica plaza con el Monumento del Milenio. Perfecta para fotos y para entender la historia húngara. 
                Los museos de alrededor son opcionales si vas corto de tiempo.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>📸 Foto obligatoria:</strong> Con las estatuas de los líderes húngaros de fondo.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">15:30 - Avenida Andrássy</h4>
              <p className="text-gray-700 mb-3">
                Paseo por los Campos Elíseos de Budapest. Arquitectura elegante, tiendas de lujo y cafés históricos. 
                El metro M1 que pasa por debajo es Patrimonio de la Humanidad.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 text-sm">
                  <strong>🚇 Curiosidad:</strong> El metro M1 es el segundo más antiguo del mundo (1896).
                </p>
              </div>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">17:00 - New York Café</h4>
              <p className="text-gray-700 mb-3">
                <strong>"El café más bonito del mundo".</strong> Decoración dorada espectacular, techos pintados 
                y ambiente de época. Caro pero merece la pena para una ocasión especial.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>☕ Café:</strong> 1.500 HUF (≈ 4€)</p>
                    <p><strong>🍰 Tarta:</strong> 2.500 HUF (≈ 6,5€)</p>
                  </div>
                  <div>
                    <p><strong>📱 Reserva:</strong> Recomendable</p>
                    <p><strong>👗 Dress code:</strong> Smart casual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador decorativo */}
        <div className="flex items-center justify-center my-12">
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="flex-shrink-0 px-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">4</span>
            </div>
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* DÍA 4 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">🎭</span>
            DÍA 4: Autenticidad Local y Despedida
          </h2>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resumen del día:</h3>
            <p className="text-gray-700 mb-4">
              <strong>Mercado Central + Colina Gellért + Exploración libre</strong>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold text-red-600">⏰ Duración</div>
                <div className="text-gray-700">5-6 horas</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-green-600">💰 Coste</div>
                <div className="text-gray-700">≈ 30€</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-purple-600">🛍️ Shopping</div>
                <div className="text-gray-700">Souvenirs</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-orange-600">📸 Highlights</div>
                <div className="text-gray-700">2 principales</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">10:00 - Gran Mercado Central</h4>
              <p className="text-gray-700 mb-3">
                <strong>El alma gastronómica de Budapest.</strong> Mercado centenario donde encontrar los mejores 
                productos locales, souvenirs auténticos y probar especialidades húngaras a precios locales.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>🥘 Prueba:</strong> Lángos, salami húngaro</p>
                    <p><strong>🛍️ Souvenirs:</strong> Paprika, artesanías</p>
                  </div>
                  <div>
                    <p><strong>⏰ Horario:</strong> 6:00 - 18:00 (L-S)</p>
                    <p><strong>💰 Presupuesto:</strong> 15-25€ comida+souvenirs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">13:00 - Colina Gellért</h4>
              <p className="text-gray-700 mb-3">
                <strong>Las mejores vistas panorámicas de toda Budapest.</strong> La subida vale la pena: desde aquí 
                ves toda la ciudad extendida a tus pies. Perfecto para fotos de despedida.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>🥾 Subida:</strong> 20-30 minutos andando</p>
                    <p><strong>🆓 Precio:</strong> Completamente gratis</p>
                  </div>
                  <div>
                    <p><strong>📸 Mejor hora:</strong> 2h antes del atardecer</p>
                    <p><strong>🍺 Después:</strong> Cerveza en Gellért Hill Café</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">16:00 - Tiempo libre y despedida</h4>
              <p className="text-gray-700 mb-3">
                Últimas compras, café en alguna terraza con vistas, o simplemente pasear por el centro disfrutando 
                de la arquitectura. Budapest se disfruta también sin prisas.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="text-purple-800 text-sm">
                  <strong>💡 Sugerencia:</strong> Vuelve al Parlamento al atardecer para fotos con luz dorada.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Presupuesto Detallado */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">💰</span>
            Presupuesto Detallado (4 días)
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Categoría</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Económico</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Medio</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">🏨 Alojamiento (4 noches)</td>
                  <td className="border border-gray-300 px-4 py-3">120€</td>
                  <td className="border border-gray-300 px-4 py-3">200€</td>
                  <td className="border border-gray-300 px-4 py-3">320€</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">🍽️ Comidas</td>
                  <td className="border border-gray-300 px-4 py-3">80€</td>
                  <td className="border border-gray-300 px-4 py-3">120€</td>
                  <td className="border border-gray-300 px-4 py-3">200€</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">🎫 Atracciones</td>
                  <td className="border border-gray-300 px-4 py-3">60€</td>
                  <td className="border border-gray-300 px-4 py-3">80€</td>
                  <td className="border border-gray-300 px-4 py-3">120€</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">🚊 Transporte local</td>
                  <td className="border border-gray-300 px-4 py-3">25€</td>
                  <td className="border border-gray-300 px-4 py-3">35€</td>
                  <td className="border border-gray-300 px-4 py-3">60€</td>
                </tr>
                <tr className="bg-gradient-to-r from-emerald-100 to-green-100">
                  <td className="border border-gray-300 px-4 py-3 font-bold">💸 TOTAL</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-emerald-600">285€</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-emerald-600">435€</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-emerald-600">700€</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <p className="text-emerald-800 text-sm mb-0">
              <strong>💡 Mi recomendación:</strong> El presupuesto medio (≈ 110€/día) te permite disfrutar Budapest 
              cómodamente sin privarte de nada importante. Incluye balnearios, buenas comidas y todas las atracciones principales.
            </p>
          </div>
        </div>

        {/* Consejos Finales para Ahorrar */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">💡</span>
            Consejos Finales para Ahorrar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">✅ Haz esto:</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Compra Budapest Card 72h (ahorro real)</li>
                  <li>• Come en mercados y restaurantes locales</li>
                  <li>• Usa transporte público (muy eficiente)</li>
                  <li>• Visita balnearios por la mañana (menos gente)</li>
                  <li>• Reserva Parlamento online con antelación</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">❌ Evita esto:</h3>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Restaurantes en zonas súper turísticas</li>
                  <li>• Taxis desde el aeropuerto (usa 100E)</li>
                  <li>• Cambiar dinero en el aeropuerto</li>
                  <li>• Ir a balnearios en fin de semana</li>
                  <li>• Comprar souvenirs en atracciones</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white mt-12">
          <h3 className="text-2xl font-bold mb-4">¿Listo para enamorarte de Budapest?</h3>
          <p className="text-lg mb-6 opacity-90">
            Con esta guía tienes todo lo necesario para disfrutar 4 días perfectos en la Perla del Danubio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://kiwi.tpk.lv/z2gZyZ3E"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-sky-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              ✈️ Buscar Vuelos a Budapest
            </a>
            <button
              onClick={onBack}
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-sky-500 transition-colors"
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