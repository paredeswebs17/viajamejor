import React from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ExternalLink } from 'lucide-react';

interface LondonGuideArticleProps {
  onBack: () => void;
}

const LondonGuideArticle: React.FC<LondonGuideArticleProps> = ({ onBack }) => {

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-xl transition-all duration-200 font-medium border border-sky-200 hover:border-sky-300 mb-6 shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a guías
        </button>

        <div className="mb-6">
          <span className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
            Guía Británica
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Londres en 3 Días: La Capital que Fusiona Historia Milenaria y Vanguardia Global
        </h1>

        <div className="flex flex-col gap-4 mb-6 items-start">
          <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
            <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
              <Clock className="h-3 w-3 mr-1" />
              18 min
            </span>
            <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
              <MapPin className="h-3 w-3 mr-1" />
              Londres
            </span>
          </div>
          
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Londres en 3 Días: Guía Completa con Big Ben, Palacios y Museos',
                  text: 'Descubre la capital británica con nuestro itinerario optimizado',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('Enlace copiado al portapapeles');
                }).catch(() => {
                  window.open(`https://twitter.com/intent/tweet?text=Londres en 3 Días: Guía Completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
                });
              }
            }}
            className="inline-flex items-center text-gray-600 hover:text-red-600 bg-gray-100 hover:bg-red-50 px-3 py-2 rounded-full transition-all duration-200 text-xs border border-gray-200 hover:border-red-300 self-start shadow-sm hover:shadow-md"
          >
            <Share2 className="h-3 w-3 mr-1" />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      <div className="mb-8">
        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
          alt="Big Ben y el Palacio de Westminster iluminados al atardecer junto al río Támesis"
          className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* SECCIÓN 1: ¿POR QUÉ VISITAR LONDRES? */}
      <div className="bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">¿Por qué visitar Londres?</h2>

        <div className="space-y-4 text-gray-700">
          <p className="text-base leading-relaxed">
            Londres no es solo una ciudad: es un universo donde cada época de la historia convive en perfecta armonía. Aquí, el Londres medieval de la Torre de Londres dialoga con los rascacielos de cristal de la City; los pubs centenarios comparten calle con restaurantes de cocina fusión de 50 países; y las ceremonias reales del Palacio de Buckingham contrastan con el arte urbano de Shoreditch.
          </p>

          <p className="text-base leading-relaxed">
            Pero Londres es mucho más que el Big Ben y la realeza británica. Es perderte en los pasillos del Museo Británico contemplando la Piedra de Rosetta. Es cruzar el Millennium Bridge mientras el sol se refleja en la cúpula de St Paul's. Es descubrir que un fish & chips de verdad no tiene nada que ver con lo que sirven en otros países. Es sentir el subidón de adrenalina al ver la ciudad iluminarse desde el London Eye al anochecer. Es caminar por mercados como Borough Market rodeado de quesos artesanales, panes recién horneados y vendedores que te ofrecen probar de todo.
          </p>

          <p className="text-base leading-relaxed font-medium text-gray-900">
            Si buscas una ciudad donde la tradición británica más aristocrática convive con la multiculturalidad más vibrante del planeta, donde cada barrio tiene personalidad propia y donde nunca sabes qué te espera al doblar la esquina, Londres es tu destino perfecto.
          </p>
        </div>
      </div>

      {/* SECCIÓN 2: LLEGADA Y CONEXIONES */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">✈️ Llegada y Conexiones desde los Aeropuertos</h2>

        <p className="text-gray-700 mb-6">Londres cuenta con 6 aeropuertos, pero los 4 principales son:</p>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Desde Aeropuerto de Heathrow (LHR)</h3>

          <div className="mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="font-bold text-gray-900 mb-3">🚄 Heathrow Express - El Tren Más Rápido (Recomendado)</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 mb-3">
                <div>
                  <p><strong>Precio:</strong> Desde 29 € (online)</p>
                  <p><strong>Horario:</strong> 05:00-23:30 (cada 15 min)</p>
                  <p><strong>Duración:</strong> 15 minutos (T2/T3), 21 min (T5)</p>
                </div>
                <div>
                  <p><strong>Destino:</strong> London Paddington (directo sin paradas)</p>
                  <p><strong>Ventajas:</strong> WiFi gratis, mucho espacio para equipaje, enchufes</p>
                  <p><strong>✨ Niños -15 años:</strong> ¡GRATIS con adulto!</p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href="https://gyg.me/JSudzJeY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Comprar Billete Heathrow Express
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">🚇 Piccadilly Line (Metro) - La Más Económica</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p><strong>Precio:</strong> €6.60 con Oyster/Contactless</p>
                <p><strong>Duración:</strong> 50-60 minutos</p>
              </div>
              <div>
                <p><strong>Destino:</strong> Covent Garden, Leicester Square, Piccadilly Circus</p>
                <p><strong>Ventajas:</strong> Económico y directo</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <h4 className="font-bold text-gray-900 mb-3">🚕 Traslado Privado - Máximo Confort</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-700 mb-1"><strong>Precio:</strong> Desde €76-100 (hasta 4 personas)</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Duración:</strong> 45-90 min (según tráfico)</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-1"><strong>Ideal para:</strong> Familias, grupos, mucho equipaje</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Ventajas:</strong> Puerta a puerta, sin esperas</p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="https://gyg.me/tqu0VpSP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Reservar Traslado Privado
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Desde Aeropuerto de Gatwick (LGW)</h3>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">🚄 Gatwick Express - Rápido al Centro</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p><strong>Precio:</strong> €23 (online adelantado)</p>
                <p><strong>Duración:</strong> 30 minutos sin paradas</p>
              </div>
              <div>
                <p><strong>Destino:</strong> London Victoria Station</p>
                <p><strong>Frecuencia:</strong> Cada 15 minutos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Desde Aeropuerto de Stansted (STN)</h3>

          <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 rounded-xl p-4">
            <h4 className="font-bold text-gray-900 mb-3">🚄 Stansted Express</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p><strong>Precio:</strong> €22-27 (online adelantado)</p>
                <p><strong>Duración:</strong> 47 minutos</p>
              </div>
              <div>
                <p><strong>Destino:</strong> Liverpool Street Station</p>
                <p><strong>Horario:</strong> 05:30-00:30</p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="https://gyg.me/YQaBsBwy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Comprar Billete Stansted Express
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Desde Aeropuerto de Luton (LTN)</h3>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">🚄 Luton Airport Express + Thameslink</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p><strong>Precio:</strong> €20-23 (online adelantado)</p>
                <p><strong>Duración:</strong> 40-50 minutos total</p>
              </div>
              <div>
                <p><strong>Destino:</strong> St Pancras, Farringdon, Blackfriars</p>
                <p><strong>Cómo:</strong> Shuttle bus gratuito 5 min + tren</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
            <h4 className="font-bold text-gray-900 mb-3">🚌 National Express / easyBus - Económico</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p><strong>Precio:</strong> Desde €9-14 (online)</p>
                <p><strong>Duración:</strong> 60-90 minutos</p>
              </div>
              <div>
                <p><strong>Destino:</strong> Victoria Coach Station</p>
                <p><strong>Ventaja:</strong> Muy económico pero más lento</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: DÓNDE ALOJARSE */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center">
          🏨 Dónde Alojarse en Londres
        </h2>
        <p className="text-gray-600 mb-6">Las mejores zonas y hoteles recomendados para tu estancia</p>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🎭</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Covent Garden - Centro Turístico Premium</h3>
                <p className="text-sm text-gray-600">La ubicación perfecta para tu primera vez en Londres</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-4 border border-sky-200 flex flex-col">
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-2">The Z Hotel Covent Garden ⭐⭐⭐</h4>
                  <p className="text-xs text-gray-600 mb-2">📍 Covent Garden</p>
                  <p className="text-sm text-gray-700 mb-3">Hotel boutique compacto pero perfecto. A pasos de todo lo importante.</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
                  <span className="text-lg font-bold text-sky-600">€€</span>
                  <a
                    href="https://booking.tpk.lv/jQQDRGEV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Ver en Booking
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-4 border border-cyan-200 flex flex-col">
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-2">Hub by Premier Inn Covent Garden ⭐⭐⭐</h4>
                  <p className="text-xs text-gray-600 mb-2">📍 Covent Garden</p>
                  <p className="text-sm text-gray-700 mb-3">Moderno, funcional, céntrico. Diseño inteligente en espacios pequeños.</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
                  <span className="text-lg font-bold text-cyan-600">€€</span>
                  <a
                    href="https://booking.tpk.lv/0H9SyaZT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Ver en Booking
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-200 flex flex-col">
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-2">Strand Palace Hotel ⭐⭐⭐</h4>
                  <p className="text-xs text-gray-600 mb-2">📍 Covent Garden/Strand</p>
                  <p className="text-sm text-gray-700 mb-3">Hotel histórico renovado. Ubicación inmejorable cerca Trafalgar.</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
                  <span className="text-lg font-bold text-indigo-600">€€€</span>
                  <a
                    href="https://booking.tpk.lv/TWEebJLj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Ver en Booking
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800">
                <strong>✅ Por qué elegir esta zona:</strong> El corazón absoluto de Londres turístico. A 5-10 minutos andando de: Trafalgar Square, Big Ben, London Eye, West End (teatros), Museo Británico. Zona peatonal llena de restaurantes, cafés, tiendas.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🚇</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">King's Cross / St Pancras - Hub de Transporte</h3>
                <p className="text-sm text-gray-600">Perfecta conexión con todo Londres y Europa</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-200 flex flex-col">
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-2">The Standard London ⭐⭐⭐⭐</h4>
                  <p className="text-xs text-gray-600 mb-2">📍 King's Cross</p>
                  <p className="text-sm text-gray-700 mb-3">Diseño moderno espectacular en la estación St Pancras.</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
                  <span className="text-lg font-bold text-emerald-600">€€€</span>
                  <a
                    href="https://booking.tpk.lv/xbg7sSQv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Ver en Booking
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200 flex flex-col">
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-2">Megaro Hotel ⭐⭐⭐</h4>
                  <p className="text-xs text-gray-600 mb-2">📍 King's Cross</p>
                  <p className="text-sm text-gray-700 mb-3">Boutique con carácter. Excelente desayuno incluido.</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
                  <span className="text-lg font-bold text-teal-600">€€</span>
                  <a
                    href="https://booking.tpk.lv/dXJgWO4A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Ver en Booking
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200 flex flex-col">
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-2">Travelodge London Kings Cross ⭐⭐</h4>
                  <p className="text-xs text-gray-600 mb-2">📍 King's Cross</p>
                  <p className="text-sm text-gray-700 mb-3">Económico y funcional. Perfecto presupuestos ajustados.</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
                  <span className="text-lg font-bold text-blue-600">€</span>
                  <a
                    href="https://booking.tpk.lv/gn16EI6z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Ver en Booking
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800">
                <strong>✅ Por qué elegir esta zona:</strong> Conexión directa con 6 líneas de metro. Eurostar a París/Bruselas desde aquí. A 10 min del centro en metro. Andén 9¾ de Harry Potter en King's Cross.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🌉</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Southwark / London Bridge - Orilla Sur Moderna</h3>
                <p className="text-sm text-gray-600">Vistas al Támesis y ambiente auténtico</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200 flex flex-col">
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-2">Hilton London Bankside ⭐⭐⭐⭐</h4>
                  <p className="text-xs text-gray-600 mb-2">📍 Southwark</p>
                  <p className="text-sm text-gray-700 mb-3">Moderno con vistas al río. Cerca Borough Market y Tate Modern.</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
                  <span className="text-lg font-bold text-orange-600">€€€</span>
                  <a
                    href="https://booking.tpk.lv/0u1aLCCU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Ver en Booking
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-200 flex flex-col">
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-2">citizenM London Bankside ⭐⭐⭐</h4>
                  <p className="text-xs text-gray-600 mb-2">📍 Southwark</p>
                  <p className="text-sm text-gray-700 mb-3">Diseño holandés innovador. Tecnología de última generación.</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
                  <span className="text-lg font-bold text-pink-600">€€</span>
                  <a
                    href="https://booking.tpk.lv/lD32rUSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Ver en Booking
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 border border-purple-200 flex flex-col">
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-2">Premier Inn London Southwark ⭐⭐⭐</h4>
                  <p className="text-xs text-gray-600 mb-2">📍 Southwark</p>
                  <p className="text-sm text-gray-700 mb-3">Cadena confiable británica. Desayuno buffet excelente.</p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2 mt-auto">
                  <span className="text-lg font-bold text-purple-600">€</span>
                  <a
                    href="https://booking.tpk.lv/XrBYkB5u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Ver en Booking
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800">
                <strong>✅ Por qué elegir esta zona:</strong> A pasos de Borough Market, Tate Modern, Shakespeare's Globe. Vistas increíbles del Támesis y skyline. Más local y menos turístico que Westminster.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 4: ITINERARIO */}
      <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">📅 Itinerario de 3 Días por Londres</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-red-600 to-blue-600 text-white">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">DÍA</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EXPERIENCIAS LONDINENSES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 1</td>
                <td className="border border-gray-300 px-4 py-3">Big Ben + Westminster Abbey + St James's Park + Buckingham Palace + Trafalgar Square + Covent Garden + Neal's Yard + London Eye + South Bank nocturno</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 2</td>
                <td className="border border-gray-300 px-4 py-3">Borough Market + Tower Bridge + Torre de Londres + Sky Garden + The Shard + Catedral San Pablo + Millennium Bridge + Paseo en barco Támesis</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 3</td>
                <td className="border border-gray-300 px-4 py-3">Museo Británico + Piccadilly Circus + Chinatown + Oxford Street + Carnaby Street + Notting Hill + Hyde Park al atardecer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Separador decorativo */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
        </div>
      </div>

      {/* DÍA 1 - COMPLETO Y DETALLADO */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-gradient-to-br from-red-600 to-pink-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">1</span>
          DÍA 1: Del Parlamento al Cielo de Londres
        </h2>

        {/* Despertar Parlamentario */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mr-3"></div>
            Despertar Parlamentario (9:00h)
          </h3>
          <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Big Ben y Palacio de Westminster - El Icono Británico</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
                alt="Big Ben y Palacio de Westminster junto al Támesis"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Comenzamos nuestra aventura londinense frente al símbolo más reconocible de la ciudad. El Big Ben (oficialmente Torre Elizabeth desde 2012) no es el reloj, sino la campana de 13 toneladas que repica dentro. La torre data de 1859 y sus 96 metros de altura han dominado el skyline de Westminster durante más de 160 años.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">📋 Información Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Visita Interior: Reabierta tras restauración</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Tours: Solo con guía en inglés</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Precio: €35-41 por persona</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Duración: 90 minutos, 334 escalones</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">📸 Mejores Fotos:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Desde Westminster Bridge (vista clásica)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>South Bank (frente, con London Eye)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Cabina roja en Parliament Street</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Westminster Abbey */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mr-3"></div>
            Abadía de Westminster (9:45h)
          </h3>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Westminster Abbey - Donde se Corona a los Reyes</h4>
            <p className="text-gray-700 mb-4">
              A solo 5 minutos andando del Big Ben se encuentra una de las iglesias más importantes del mundo. Desde 1066, todas las coronaciones británicas (excepto dos) han tenido lugar aquí. La última fue la del Rey Carlos III en mayo de 2023.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">⭐ Imprescindibles que Ver:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>Coronation Chair (trono desde 1308)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Poets' Corner (Chaucer, Dickens)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Tumba del Guerrero Desconocido</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Capilla de Enrique VII</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Entrada: €36 adultos (online)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Incluye: Audioguía en español</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Duración: 1.5-2 horas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>⚠️ No se permiten fotos interior</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* St James's Park + Buckingham */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
            St James's Park + Palacio de Buckingham (12:00h)
          </h3>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Paseo Real por el Parque + Residencia del Rey Carlos III</h4>
            <p className="text-gray-700 mb-4">
              Dejamos la Abadía y cruzamos hacia el parque real más antiguo de Londres (1532). Este oasis verde de 23 hectáreas fue jardín privado de Enrique VIII y hoy conecta Westminster con Buckingham Palace. Al final del parque emerge la fachada más fotografiada de Londres, con 775 habitaciones.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🦆 Highlights del Parque:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Lago con pelícanos desde 1664</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Blue Bridge con vistas simultáneas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>60.000 flores en primavera/verano</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎭 Cambio de Guardia:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Frecuencia: Lun/Mié/Vie a las 11:00h</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Domingos: Sunday Parade a las 10:00h</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Duración: 45 minutos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>¡Completamente GRATUITO!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Trafalgar Square */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-3"></div>
            Trafalgar Square (14:30h)
          </h3>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">El Corazón de Londres</h4>
            <p className="text-gray-700 mb-4">
              Considerada el "centro" de Londres, desde aquí se miden todas las distancias oficiales del Reino Unido. Esta plaza monumental fue diseñada en 1830 para conmemorar la victoria del Almirante Nelson en la Batalla de Trafalgar (1805).
            </p>

            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
              <h5 className="font-semibold text-gray-900 mb-2">🎨 National Gallery - Galería Nacional:</h5>
              <div className="text-sm text-gray-700 space-y-2">
                <p>Uno de los museos de arte más importantes del mundo, ¡con entrada GRATUITA!</p>
                <ul className="space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Más de 2.300 pinturas (1250-1900)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Van Gogh, Da Vinci, Velázquez, Monet</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Horario: 10:00-18:00 (viernes hasta 21:00)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Entrada: GRATIS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Covent Garden + Neal's Yard */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
            Covent Garden + Neal's Yard (15:00h)
          </h3>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Mercado Histórico con Encanto + Callejón Mágico de Colores</h4>
            <p className="text-gray-700 mb-4">
              Desde 1654 este fue el mercado de frutas y verduras más importante de Londres. Hoy es un vibrante centro de tiendas, restaurantes, artistas callejeros y el Apple Market con artesanía británica. A solo 2 minutos andando se esconde Neal's Yard: un pequeño callejón de edificios pintados en colores vibrantes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🏛️ Qué Ver en Covent Garden:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Apple Market: Artesanía británica</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Artistas callejeros de calidad</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Royal Opera House</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Arquitectura victoriana impresionante</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🌈 Neal's Yard:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Fachadas de colores Instagram-friendly</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Neal's Yard Remedies (cosmética)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Cafés orgánicos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>📸 Mejor hora: 14:00-16:00h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* London Eye */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-sky-400 to-blue-400 rounded-full mr-3"></div>
            London Eye - Cielo de Londres al Atardecer (17:00h)
          </h3>
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">La Noria Más Alta de Europa</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg"
                alt="London Eye iluminado al atardecer junto al río Támesis"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Cerramos el día subiendo a 135 metros de altura en la noria de observación más icónica del mundo. Inaugurada en el año 2000, el London Eye se ha convertido en el monumento de pago más visitado del Reino Unido.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎡 Datos Fascinantes:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Altura: 135 metros</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>32 cápsulas (25 personas cada una)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Duración: 30 minutos rotación</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Pasajeros/año: 3.75 millones</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎫 Tipos de Entradas:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Standard: €33-41 (online adelantado)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Fast Track: €47-56 (cola prioritaria)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Ahorro online: hasta 25%</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <p className="text-xs text-sky-600 mb-2">💡 Mejor momento: Atardecer (16:00-16:30h en noviembre). Ves la ciudad de día y de noche en la misma vuelta.</p>
            </div>
          </div>
        </div>

        {/* South Bank nocturno */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mr-3"></div>
            South Bank - Paseo Nocturno Mágico (18:30h)
          </h3>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">La Orilla Cultural del Támesis</h4>
            <p className="text-gray-700 mb-4">
              Desde el London Eye hasta el Puente de Westminster se extiende el paseo peatonal más vibrante de Londres. De noche, con todo iluminado, es simplemente mágico.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🌉 Qué Verás:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Golden Jubilee Bridges iluminados</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Southbank Centre (conciertos gratis)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Street performers y artistas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Skate park bajo el puente</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">📸 Fotos Nocturnas:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>London Eye reflejado en el Támesis</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Big Ben iluminado desde South Bank</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Westminster Bridge con luces doradas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DÍA 2 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">2</span>
          DÍA 2: De la Torre Medieval a las Alturas del Shard
        </h2>

        {/* Borough Market */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
            Borough Market - Desayuno Gastronómico (9:00h)
          </h3>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">El Paraíso Gastronómico de Londres</h4>
            <p className="text-gray-700 mb-4">
              Comenzamos el día en el mercado de comida más antiguo de Londres (1014 d.C.). Hoy es el epicentro de la gastronomía gourmet, orgánica y artesanal de la ciudad.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🧀 Qué Encontrarás:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Más de 100 puestos de comida</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Bread Ahead (donuts €4.70)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Ostras frescas desde €1.80</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">📅 Horarios:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Lun-Jue: 10:00-17:00</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Sáb: 8:00-17:00 (más ambiente)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Dom: Cerrado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tower Bridge + Torre Londres - Versión Compacta */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-3"></div>
            Tower Bridge + Torre de Londres (10:00h - 13:00h)
          </h3>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">El Puente Más Famoso + 1000 Años de Historia Real</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg"
                alt="Tower Bridge y Torre de Londres"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              El puente basculante más fotografiado de Londres (1894) te lleva a la fortaleza normanda que alberga las Joyas de la Corona Británica.
            </p>
            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
              <h5 className="font-semibold text-gray-900 mb-2">💎 Torre de Londres - Imprescindibles:</h5>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>Crown Jewels: Imperial State Crown con 2.868 diamantes</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Precio: €41 (online adelantado)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Duración: 2.5-3 horas MÍNIMO</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Yeoman Tours GRATIS incluidos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sky Garden + Shard + St Paul's - Compacto */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-amber-400 rounded-full mr-3"></div>
            Vistas Aéreas + Catedral (14:00h - 17:30h)
          </h3>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Sky Garden (GRATIS) → The Shard → St Paul's</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-1">🌿 Sky Garden</h5>
                <p className="text-xs text-gray-700">Piso 35, 155m altura. ¡GRATIS! (reserva online).</p>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-1">🏙️ The Shard</h5>
                <p className="text-xs text-gray-700">310m, vistas hasta 64km. €33-37 online.</p>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-1">⛪ St Paul's</h5>
                <p className="text-xs text-gray-700">Cúpula 111m. €27 entrada. 528 escalones.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Crucero Támesis */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mr-3"></div>
            Crucero por el Támesis (18:30h)
          </h3>
          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Londres desde el Agua - Cierre Perfecto del Día</h4>
            <p className="text-gray-700 mb-4">
              Termina el día navegando por el río que ha sido testigo de 2.000 años de historia. Ver la ciudad iluminada desde el agua es inolvidable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🚤 City Cruises:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Precio: €22 (online)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Duración: 40-50 minutos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Audio guía español incluida</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🌉 Qué Verás:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Tower Bridge iluminado</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>The Shard rascacielos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Big Ben + Westminster</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DÍA 3 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-gradient-to-br from-emerald-500 to-green-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">3</span>
          DÍA 3: De los Tesoros del Mundo a los Parques Reales
        </h2>

        {/* British Museum + Piccadilly + Shopping - Compacto */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-yellow-400 rounded-full mr-3"></div>
            British Museum + Piccadilly + Shopping (9:00h - 15:30h)
          </h3>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Tesoros de la Humanidad + Centro Comercial</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/6061618/pexels-photo-6061618.jpeg"
                alt="British Museum Great Court"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🏛️ British Museum (GRATIS):</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>Piedra de Rosetta (Room 4)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Momias Egipcias (62-63)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Horario: 10:00-17:00</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🛍️ Shopping:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Carnaby St: Tiendas vintage</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Oxford St: Selfridges, Primark</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Chinatown: Almuerzo €9-18</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Notting Hill */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-rose-400 rounded-full mr-3"></div>
            Notting Hill - Barrio Instagrameable (15:30h)
          </h3>
          <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Casitas de Colores + Portobello Market</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/12705658/pexels-photo-12705658.jpeg"
                alt="Notting Hill casas coloridas"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              El barrio residencial más bonito de Londres. Casas victorianas de colores pastel y el mercadillo de antigüedades más famoso del mundo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🛍️ Portobello Market:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Sábado: Día completo (8:00-19:00)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Antigüedades, vintage, comida</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">📸 Fotos Instagram:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>St Luke's Mews (colores pastel)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Notting Hill Bookshop (película)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Hyde Park */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
            Hyde Park - Paseo Real al Atardecer (17:30h)
          </h3>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Los Pulmones Verdes de Londres</h4>
            <p className="text-gray-700 mb-4">
              Terminamos el viaje con un paseo relajado por el parque real más famoso. 253 hectáreas de naturaleza en pleno centro.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">⭐ Puntos Imprescindibles:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Serpentine Lake</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Diana Memorial Fountain</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Estatua Peter Pan</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎄 Winter Wonderland:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>21 Nov - 5 Ene</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Entrada gratis (atracciones se pagan)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Mercado navideño + pista hielo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MÁS LUGARES QUE VER */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎯 Más Lugares Imprescindibles en Londres</h2>
        <p className="text-gray-700 mb-6">Si tienes más días o quieres profundizar en la ciudad, estos lugares también merecen tu visita:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🏰 Castillo de Windsor</h3>
            <p className="text-sm text-gray-700 mb-2">El castillo habitado más antiguo del mundo. Residencia oficial de la Reina.</p>
            <div className="text-xs text-gray-600">
              <p><strong>Precio:</strong> €33-35 | <strong>Duración:</strong> Día completo</p>
              <p><strong>Cómo llegar:</strong> Tren desde Paddington (50 min)</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🎭 Teatro del West End</h3>
            <p className="text-sm text-gray-700 mb-2">El equivalente británico de Broadway. Más de 40 teatros con musicales y obras.</p>
            <div className="text-xs text-gray-600">
              <p><strong>Precio:</strong> €29-176 | <strong>Duración:</strong> 2-3 horas</p>
              <p><strong>Shows populares:</strong> El Rey León, Wicked, Hamilton</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🏛️ Museos Gratuitos</h3>
            <p className="text-sm text-gray-700 mb-2">Londres tiene los mejores museos del mundo ¡y son GRATIS!</p>
            <div className="text-xs text-gray-600">
              <p>• Natural History Museum (dinosaurios)</p>
              <p>• Science Museum (interactivo)</p>
              <p>• V&A Museum (arte y diseño)</p>
              <p>• Tate Modern (arte contemporáneo)</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🌳 Kew Gardens</h3>
            <p className="text-sm text-gray-700 mb-2">Jardín botánico Patrimonio de la UNESCO. 121 hectáreas de belleza natural.</p>
            <div className="text-xs text-gray-600">
              <p><strong>Precio:</strong> €21-23 | <strong>Duración:</strong> 3-4 horas</p>
              <p><strong>Highlights:</strong> Palm House, Treetop Walkway</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🎨 Camden Market</h3>
            <p className="text-sm text-gray-700 mb-2">Mercado alternativo con arte urbano, comida internacional y moda vintage.</p>
            <div className="text-xs text-gray-600">
              <p><strong>Precio:</strong> Gratis | <strong>Mejor día:</strong> Sábado-Domingo</p>
              <p><strong>Ambiente:</strong> Punk, rock, alternativo</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🏟️ Estadio de Wembley</h3>
            <p className="text-sm text-gray-700 mb-2">El estadio más icónico del fútbol. Tours detrás de escena disponibles.</p>
            <div className="text-xs text-gray-600">
              <p><strong>Tour:</strong> €28 | <strong>Duración:</strong> 75 minutos</p>
              <p>Incluye vestuarios, túnel, Copa FA</p>
            </div>
          </div>
        </div>
      </div>

      {/* HERRAMIENTAS DE VIAJE */}
      <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          💳 Herramientas de Viaje Esenciales
        </h2>
        <p className="text-gray-600 mb-6">Servicios esenciales para viajar sin preocupaciones</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">💳</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Revolut</h3>
                <p className="text-sm text-gray-600">Tarjeta sin comisiones para viajar</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Viaja sin preocuparte por las comisiones bancarias. Paga en libras sin cargos adicionales, retira efectivo sin comisiones.
            </p>
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">✅ Ventajas para Londres:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Sin comisiones por pago en libras</li>
                <li>• Retiros gratuitos en cajeros</li>
                <li>• Control total desde la app</li>
              </ul>
            </div>
            <a
              href="https://revolut.com/referral/?referral-code=antoni22jf!DEC1-25-AR-CH1H-CRY&geo-redirect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm w-full justify-center"
            >
              💳 Consigue tu Tarjeta Revolut
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">IATI Seguros</h3>
                <p className="text-sm text-gray-600">Seguro de viaje completo</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Viaja tranquilo con asistencia médica 24/7, cobertura de cancelación y pérdida de equipaje.
            </p>
            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">✅ Cobertura:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Asistencia médica en el extranjero</li>
                <li>• Cobertura de cancelación</li>
                <li>• Asistencia 24/7 en español</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-300 rounded-lg p-3 mb-4">
              <p className="text-center font-bold text-orange-800 text-sm">
                🎁 ¡Descuento 5% ya aplicado!
              </p>
            </div>
            <a
              href="https://www.iatiseguros.com/?r=37344279073491"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm w-full justify-center"
            >
              🛡️ Contratar IATI con 5% Descuento
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* GUÍA GASTRONÓMICA */}
      <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 border border-orange-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">🍽️ Guía Gastronómica de Londres</h2>
        <p className="text-gray-600 mb-6">Londres es una de las capitales gastronómicas del mundo. Aquí encontrarás de todo:</p>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-orange-800 mb-4">🇬🇧 Comida Británica Tradicional</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Fish & Chips</h4>
                <p className="text-sm text-gray-700 mb-2">El plato nacional británico. Pescado rebozado + patatas fritas.</p>
                <p className="text-xs text-orange-700"><strong>Dónde:</strong> Poppies (Spitalfields) | <strong>Precio:</strong> €14-19</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Sunday Roast</h4>
                <p className="text-sm text-gray-700 mb-2">Carne asada + Yorkshire pudding + verduras + gravy. Solo domingos.</p>
                <p className="text-xs text-orange-700"><strong>Dónde:</strong> The Harwood Arms | <strong>Precio:</strong> €23-35</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Afternoon Tea</h4>
                <p className="text-sm text-gray-700 mb-2">Té + sándwiches + scones + pasteles. Experiencia muy británica.</p>
                <p className="text-xs text-orange-700"><strong>Dónde:</strong> Sketch | <strong>Precio:</strong> €41-88</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Pub Food</h4>
                <p className="text-sm text-gray-700 mb-2">Bangers & mash, pies, ploughman's lunch en ambiente de pub.</p>
                <p className="text-xs text-orange-700"><strong>Dónde:</strong> The Churchill Arms | <strong>Precio:</strong> €14-21</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-red-800 mb-4">🌍 Comida Internacional</h3>
            <p className="text-sm text-gray-700 mb-4">Londres es una de las ciudades más multiculturales. Gastronomía de 180+ países:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🍛 India</h4>
                <p className="text-xs text-gray-700">Brick Lane: La mejor comida india fuera de India.</p>
                <p className="text-xs text-red-700"><strong>€9-18</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🍜 China</h4>
                <p className="text-xs text-gray-700">Chinatown: Dim sum, pato pequinés, hot pot auténtico.</p>
                <p className="text-xs text-red-700"><strong>€12-29</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🍕 Italia</h4>
                <p className="text-xs text-gray-700">Soho: Pizzas napolitanas y pasta fresca.</p>
                <p className="text-xs text-red-700"><strong>€14-23</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🌮 México</h4>
                <p className="text-xs text-gray-700">Wahaca, Chilango: Tacos y burritos auténticos.</p>
                <p className="text-xs text-red-700"><strong>€9-18</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🍱 Japón</h4>
                <p className="text-xs text-gray-700">Ramen, sushi, katsu curry de alta calidad.</p>
                <p className="text-xs text-red-700"><strong>€14-35</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🥙 Medio Oriente</h4>
                <p className="text-xs text-gray-700">Edgware Road: Shawarma, falafel, mezze libanés.</p>
                <p className="text-xs text-red-700"><strong>€7-14</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-pink-800 mb-4">🏪 Mercados Gastronómicos</h3>
            <div className="space-y-3">
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Borough Market</h4>
                <p className="text-sm text-gray-700">El mercado gourmet por excelencia. Ostras, quesos, panes artesanales.</p>
                <p className="text-xs text-gray-600">Lun-Jue 10:00-17:00 | Sáb 8:00-17:00 | Presupuesto: €12-23</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Camden Market</h4>
                <p className="text-sm text-gray-700">Street food internacional. Thai, indio, mexicano, vegano.</p>
                <p className="text-xs text-gray-600">Todos los días 10:00-18:00 | Presupuesto: €9-18</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Old Spitalfields Market</h4>
                <p className="text-sm text-gray-700">Mix de comida y moda. Los jueves mercado de antigüedades.</p>
                <p className="text-xs text-gray-600">Lun-Vie 10:00-20:00 | Presupuesto: €9-18</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-orange-300 rounded-xl p-4">
            <h4 className="font-bold text-gray-900 mb-2">💡 Consejos para Comer Barato en Londres:</h4>
            <ul className="text-sm text-gray-800 space-y-1">
              <li>• Pret A Manger: Sándwiches €4.70-7 (calidad-precio excelente)</li>
              <li>• Greggs: Bakery británica económica (salchichas rolls €2.35)</li>
              <li>• Tesco Meal Deal: Sándwich + bebida + snack = €4.60</li>
              <li>• Mercados: Siempre más barato que restaurantes</li>
              <li>• Lunch deals: Muchos restaurantes ofrecen menú 12:00-15:00 (50% off)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* TRANSPORTE */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🚇 Sistema de Transporte Público</h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-semibold text-blue-600 mb-2">🚇 Metro ("The Tube")</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 11 líneas de colores</li>
                <li>• Frecuencia: 2-5 minutos</li>
                <li>• Night Tube Vie-Sáb: 24h</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-semibold text-red-600 mb-2">🚌 Autobuses Rojos</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 700+ líneas</li>
                <li>• Horario: 24 horas</li>
                <li>• Piso superior = vistas</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-semibold text-green-600 mb-2">💳 Pago</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Contactless (recomendado)</li>
                <li>• Tope: €10/día</li>
                <li>• Autobús: €2.05/viaje</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-800">
              <strong>💡 Truco:</strong> Usa autobuses cuando puedas (€6.15 día ilimitado vs €10 metro). Evita hora pico (6:30-9:30, 16:00-19:00).
            </p>
          </div>
        </div>
      </div>

      {/* CONSEJOS FINALES */}
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-6 sm:p-8 shadow-md mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">💡 Consejos Finales para tu Viaje a Londres</h2>

        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-sky-800 mb-3">🌧️ Clima y Qué Llevar</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Paraguas:</strong> IMPRESCINDIBLE todo el año. Llueve sin previo aviso</li>
              <li>• <strong>Capas:</strong> El tiempo cambia cada hora. Lleva chaqueta ligera incluso en verano</li>
              <li>• <strong>Calzado:</strong> Zapatillas cómodas. Caminarás 15-20km diarios</li>
              <li>• <strong>Noviembre:</strong> 8-12°C. Frío pero no extremo. Abrigo medio + bufanda</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-sky-800 mb-3">📱 Internet y Conectividad</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>SIM:</strong> EE, Vodafone, Three (desde €12/mes con datos ilimitados)</li>
              <li>• <strong>WiFi:</strong> Todos los cafés, pubs y museos tienen WiFi gratuito</li>
              <li>• <strong>Metro:</strong> WiFi gratuito en todas las estaciones (pero no en túneles)</li>
              <li>• <strong>Apps útiles:</strong> Citymapper (transporte), Google Maps offline</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-sky-800 mb-3">🚨 Seguridad</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Londres es MUY segura, pero vigila tus pertenencias en metro (hora punta)</li>
              <li>• Carteristas en zonas turísticas: Oxford Street, Piccadilly, Leicester Square</li>
              <li>• No dejes el móvil en mesas de terrazas (hurto frecuente)</li>
              <li>• Emergencias: Llama al 999 (policía, bomberos, ambulancia)</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-sky-800 mb-3">💷 Dinero</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Moneda:</strong> Libra esterlina. Precios en esta guía ya convertidos a € (tasa 1£ ≈ 1.17€)</li>
              <li>• <strong>Pago:</strong> Contactless EVERYWHERE. Apenas necesitas efectivo</li>
              <li>• <strong>Propinas:</strong> 10-12.5% en restaurantes. No obligatorio en pubs</li>
              <li>• <strong>Cajeros:</strong> Evita Euronet/Travelex (comisiones altas). Usa bancos</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-sky-800 mb-3">🗣️ Idioma</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• El inglés británico es DIFERENTE al americano (lift=ascensor, tube=metro)</li>
              <li>• "Queue" = hacer cola. Los británicos son OBSESIVOS con las colas</li>
              <li>• "Cheers" = gracias / salud / adiós (palabra comodín)</li>
              <li>• Casi nadie habla español, pero todo está señalizado claramente</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-sky-800 mb-3">⚡ Trucos de Locales</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• En escaleras mecánicas: Derecha quieto, izquierda caminar (REGLA SAGRADA)</li>
              <li>• Free museums: Llega temprano (10:00) para evitar colas</li>
              <li>• Evita comer en Leicester Square / Piccadilly (trampas turísticas)</li>
              <li>• Pubs: Pides en barra, pagas al momento, llevas tu bebida</li>
              <li>• Atardecer: Ve a Primrose Hill o Parliament Hill (vistas gratis)</li>
              <li>• West End: Entradas de último minuto en TKTS Leicester Square (hasta 50% off)</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 rounded-xl p-4">
            <h4 className="font-bold text-green-900 mb-2">✅ Checklist Final Antes de Viajar:</h4>
            <ul className="text-sm text-green-900 space-y-1">
              <li>☐ Pasaporte válido (6 meses mínimo)</li>
              <li>☐ Seguro de viaje contratado (IATI recomendado)</li>
              <li>☐ Tarjeta sin comisiones (Revolut, N26, Wise)</li>
              <li>☐ Reservas de hotel confirmadas</li>
              <li>☐ Entradas principales compradas online (London Eye, Torre)</li>
              <li>☐ App Citymapper descargada</li>
              <li>☐ Adaptador de enchufe UK (tipo G)</li>
              <li>☐ Lista offline de direcciones importantes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* PRESUPUESTOS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">💰 Presupuestos Detallados - Noviembre 2025</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-green-800 mb-3">🎒 Mochilero</h3>
            <div className="text-2xl font-bold text-green-600 mb-2">€70-100/día</div>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Hostel: €29-41</li>
              <li>• Comida: €23-29</li>
              <li>• Transporte: €6-9</li>
              <li>• Atracciones: €14-20</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-blue-800 mb-3">🏨 Estándar</h3>
            <div className="text-2xl font-bold text-blue-600 mb-2">€140-187/día</div>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Hotel 3*: €82-111</li>
              <li>• Comida: €41-53</li>
              <li>• Transporte: €9-12</li>
              <li>• Atracciones: €18-35</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-purple-800 mb-3">👑 Lujo</h3>
            <div className="text-2xl font-bold text-purple-600 mb-2">€293-470+/día</div>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• Hotel 5*: €176-293</li>
              <li>• Comida: €94-152</li>
              <li>• Transporte: €23-47</li>
              <li>• Atracciones: €47-94</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600 text-sm mt-8">
        <p className="mb-2">
          Guía actualizada Noviembre 2025 | Información verificada y precios actuales
        </p>
        <p>¡Que disfrutes Londres al máximo!</p>
      </div>
    </article>
  );
};

export default LondonGuideArticle;
