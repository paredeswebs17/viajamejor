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
          <span className="bg-gradient-to-r from-red-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
            Guía Capital
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
                  title: 'Londres en 3 Días: Guía Completa con Itinerario Optimizado',
                  text: 'Descubre la capital británica con historia, cultura y modernidad',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('Enlace copiado al portapapeles');
                }).catch(() => {
                  window.open(`https://twitter.com/intent/tweet?text=Londres en 3 Días&url=${encodeURIComponent(window.location.href)}`, '_blank');
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
          alt="Tower Bridge y el skyline de Londres al atardecer con el río Támesis"
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
            Pero Londres es mucho más que el Big Ben y la Reina. Es perderte en los pasillos del Museo Británico contemplando la Piedra de Rosetta. Es cruzar el Millennium Bridge mientras el sol se refleja en la cúpula de St Paul's. Es descubrir que un fish & chips de verdad no tiene nada que ver con lo que sirven en otros países. Es sentir el subidón de adrenalina al ver la ciudad iluminarse desde el London Eye al anochecer.
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

        {/* Heathrow */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Desde Aeropuerto de Heathrow (LHR)</h3>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-blue-900 mb-3">🚄 Elizabeth Line - La Opción Moderna (Recomendada)</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Precio:</strong> £12.80 (zona 1)</li>
              <li><strong>Horario:</strong> 05:12-23:48 (cada 5-10 min)</li>
              <li><strong>Duración:</strong> 30-40 minutos directos</li>
              <li><strong>Destino:</strong> Paddington, Bond Street, Tottenham Court Road, Liverpool Street</li>
              <li><strong>Ventajas:</strong> Tren moderno, sin cambios, asientos cómodos, WiFi, maletas sin restricción</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-purple-900 mb-3">🚇 Piccadilly Line (Metro) - La Más Económica</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Precio:</strong> £5.60 con Oyster/Contactless</li>
              <li><strong>Duración:</strong> 50-60 minutos</li>
              <li><strong>Destino:</strong> Directo a Covent Garden, Leicester Square, Piccadilly Circus</li>
              <li><strong>Ventajas:</strong> Económico y directo</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-green-900 mb-3">🚌 National Express - Autobús Económico</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Precio:</strong> Desde £6</li>
              <li><strong>Duración:</strong> 40-90 min (según tráfico)</li>
              <li><strong>Destino:</strong> Victoria Coach Station</li>
            </ul>
          </div>
        </div>

        {/* Gatwick */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">�� Desde Aeropuerto de Gatwick (LGW)</h3>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-red-900 mb-3">🚄 Gatwick Express - Rápido al Centro</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Precio:</strong> £19.90 (online adelantado)</li>
              <li><strong>Duración:</strong> 30 minutos sin paradas</li>
              <li><strong>Destino:</strong> London Victoria Station</li>
              <li><strong>Frecuencia:</strong> Cada 15 minutos</li>
              <li><strong>Horario:</strong> 05:00-00:35</li>
            </ul>
          </div>
        </div>

        {/* Stansted */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Desde Aeropuerto de Stansted (STN)</h3>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <h4 className="font-bold text-orange-900 mb-3">🚄 Stansted Express</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Precio:</strong> £19-23 (online adelantado)</li>
              <li><strong>Duración:</strong> 47 minutos</li>
              <li><strong>Destino:</strong> Liverpool Street Station</li>
              <li><strong>Frecuencia:</strong> Cada 15-30 minutos</li>
            </ul>
          </div>
        </div>

        {/* Luton */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Desde Aeropuerto de Luton (LTN)</h3>

          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4">
            <h4 className="font-bold text-cyan-900 mb-3">🚄 Luton Airport Express</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Precio:</strong> £17-20</li>
              <li><strong>Duración:</strong> 25 min al aeropuerto + 30 min a Londres</li>
              <li><strong>Destino:</strong> St Pancras International</li>
              <li><strong>Nota:</strong> Shuttle bus obligatorio aeropuerto-estación (5 min)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: DÓNDE ALOJARSE */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🏨 Dónde Alojarse en Londres</h2>

        {/* Covent Garden */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Covent Garden - Centro Turístico Premium</h3>
          <p className="text-gray-700 mb-4">La ubicación perfecta para tu primera vez en Londres</p>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h4 className="font-bold text-blue-900 mb-2">The Z Hotel Covent Garden ⭐⭐⭐</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>📍 Covent Garden</li>
                <li>💰 €€</li>
                <li>✨ Hotel boutique compacto pero perfecto</li>
                <li>🎯 A pasos de todo lo importante</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <h4 className="font-bold text-purple-900 mb-2">Hub by Premier Inn Covent Garden ⭐⭐⭐</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>📍 Covent Garden</li>
                <li>💰 €€</li>
                <li>✨ Moderno, funcional, céntrico</li>
                <li>🎯 Diseño inteligente en espacios pequeños</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h4 className="font-bold text-green-900 mb-2">Strand Palace Hotel ⭐⭐⭐</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>📍 Covent Garden/Strand</li>
                <li>💰 €€€</li>
                <li>✨ Hotel histórico renovado</li>
                <li>🎯 Ubicación inmejorable cerca Trafalgar</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>💡 Por qué elegir esta zona:</strong> El corazón absoluto de Londres turístico. A 5-10 minutos andando de: Trafalgar Square, Big Ben, London Eye, West End, Museo Británico. Zona peatonal llena de restaurantes, cafés, tiendas. Ambiente vibrante día y noche.
            </p>
          </div>
        </div>

        {/* King's Cross */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">King's Cross / St Pancras - Hub de Transporte</h3>
          <p className="text-gray-700 mb-4">Perfecta conexión con todo Londres y Europa</p>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h4 className="font-bold text-red-900 mb-2">The Standard London ⭐⭐⭐⭐</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>📍 King's Cross</li>
                <li>💰 €€€</li>
                <li>✨ Diseño moderno espectacular</li>
                <li>🎯 En la estación St Pancras</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <h4 className="font-bold text-orange-900 mb-2">Travelodge London Kings Cross ⭐⭐</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>📍 King's Cross</li>
                <li>💰 €</li>
                <li>✨ Económico y funcional</li>
                <li>🎯 Perfecto presupuestos ajustados</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>💡 Por qué elegir esta zona:</strong> Conexión directa con 6 líneas de metro. Eurostar a París/Bruselas desde aquí. A 10 min del centro en metro. Andén 9¾ de Harry Potter. Más económico que Covent Garden.
            </p>
          </div>
        </div>

        {/* Southwark */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Southwark / London Bridge - Orilla Sur Moderna</h3>
          <p className="text-gray-700 mb-4">Vistas al Támesis y ambiente auténtico</p>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
              <h4 className="font-bold text-teal-900 mb-2">Hilton London Bankside ⭐⭐⭐⭐</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>📍 Southwark</li>
                <li>💰 €€€</li>
                <li>✨ Moderno con vistas al río</li>
                <li>🎯 Cerca Borough Market y Tate Modern</li>
              </ul>
            </div>

            <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4">
              <h4 className="font-bold text-cyan-900 mb-2">citizenM London Bankside ⭐⭐⭐</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>📍 Southwark</li>
                <li>💰 €€</li>
                <li>✨ Diseño holandés innovador</li>
                <li>🎯 Tecnología de última generación</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>💡 Por qué elegir esta zona:</strong> A pasos de Borough Market, Tate Modern, Shakespeare's Globe. Vistas increíbles del Támesis y skyline. Más local y menos turístico que Westminster. Excelente gastronomía.
            </p>
          </div>
        </div>
      </div>

      {/* SECCIÓN 4: ITINERARIO */}
      <div className="bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">📅 Itinerario de 3 Días por Londres</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">DÍA</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">EXPERIENCIAS LONDINENSES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">DÍA 1</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Big Ben + Westminster Abbey + St James's Park + Buckingham Palace + Trafalgar Square + Covent Garden + Neal's Yard + London Eye + South Bank nocturno</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">DÍA 2</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Borough Market + Tower Bridge + Torre de Londres + Sky Garden + The Shard + Catedral San Pablo + Millennium Bridge + Paseo en barco Támesis</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">DÍA 3</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Museo Británico + Piccadilly Circus + Chinatown + Oxford Street + Carnaby Street + Notting Hill + Hyde Park al atardecer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* DÍA 1 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">📍 DÍA 1: Del Parlamento al Cielo de Londres</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-red-700 mb-3">🏛️ Big Ben y Palacio de Westminster (9:00h)</h3>
            <p className="text-gray-700 mb-3">
              Comenzamos nuestra aventura londinense frente al símbolo más reconocible de la ciudad. El Big Ben (oficialmente Torre Elizabeth) no es el reloj, sino la campana de 13 toneladas que repica dentro. La torre data de 1859 y sus 96 metros han dominado el skyline de Westminster durante más de 160 años.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3">
              <h4 className="font-semibold text-gray-900 mb-2">📋 Información Práctica:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Visita Interior:</strong> Reabierta tras restauración 2017-2022</li>
                <li>• <strong>Tours:</strong> Solo con guía en inglés, muy limitados</li>
                <li>• <strong>Precio:</strong> £30-35 por persona</li>
                <li>• <strong>Duración:</strong> 90 minutos, 334 escalones</li>
                <li>• <strong>Edad mínima:</strong> 11 años</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🏛️ Palacio de Westminster (Houses of Parliament):</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Visitas guiadas:</strong> Sábados + algunos días laborables</li>
                <li>• <strong>Precio:</strong> £28 adultos (audio en español incluida)</li>
                <li>• <strong>Duración:</strong> 75-90 minutos</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo recomendado:</strong> 30-45 minutos (exterior + fotos)</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-700 mb-3">⛪ Westminster Abbey (9:45h)</h3>
            <p className="text-gray-700 mb-3">
              A solo 5 minutos andando del Big Ben se encuentra una de las iglesias más importantes del mundo. Desde 1066, todas las coronaciones británicas (excepto dos) han tenido lugar aquí. La última fue la del Rey Carlos III en mayo de 2023.
            </p>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-3">
              <h4 className="font-semibold text-gray-900 mb-2">⭐ Imprescindibles que Ver:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Coronation Chair:</strong> Trono usado desde 1308</li>
                <li>• <strong>Poets' Corner:</strong> Tumbas de Chaucer, Dickens, Hardy</li>
                <li>• <strong>Tumba del Guerrero Desconocido:</strong> Único que no se puede pisar</li>
                <li>• <strong>Capilla de Enrique VII:</strong> Obra maestra del gótico</li>
                <li>• <strong>Tumbas Reales:</strong> Isabel I, María I de Escocia</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Horario:</strong> Lun-Vie 9:30-15:30, Sáb 9:00-15:00</li>
                <li>• <strong>Entrada:</strong> £29 adultos (online adelantado)</li>
                <li>• <strong>Incluye:</strong> Audioguía en español</li>
                <li>• <strong>Duración:</strong> 1.5-2 horas recomendadas</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo recomendado:</strong> 1.5-2 horas</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-700 mb-3">🌳 St James's Park y Buckingham Palace (12:00h)</h3>
            <p className="text-gray-700 mb-3">
              Cruzamos hacia el parque real más antiguo de Londres (1532). Este oasis verde de 23 hectáreas conecta Westminster con Buckingham Palace. Al final del parque emerge la fachada más fotografiada de Londres con sus 775 habitaciones.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-3">
              <h4 className="font-semibold text-gray-900 mb-2">👑 Changing of the Guard - Cambio de Guardia:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Horario:</strong> 11:00h (10:00h domingos)</li>
                <li>• <strong>Frecuencia:</strong> Lun/Mié/Vie/Dom (verano), días alternos (invierno)</li>
                <li>• <strong>Duración:</strong> 45 minutos</li>
                <li>• <strong>Entrada:</strong> GRATUITO</li>
                <li>• <strong>Mejor lugar:</strong> Frente a las rejas principales (llega 10:30h mínimo)</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🎫 Visita Interior del Palacio:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Temporada:</strong> Finales julio - finales septiembre</li>
                <li>• <strong>Entrada:</strong> £33 adultos</li>
                <li>• <strong>Incluye:</strong> State Rooms, jardines, audioguía español</li>
                <li>• <strong>Duración:</strong> 2-2.5 horas</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo recomendado:</strong> 45 minutos - 1 hora</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-700 mb-3">🍽️ Almuerzo en Zona Centro (13:30h)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <h4 className="font-semibold text-orange-900 mb-2">Opciones Rápidas:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pret A Manger: £4-7</li>
                  <li>• Leon: £6-10</li>
                  <li>• Wasabi: £5-9</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <h4 className="font-semibold text-green-900 mb-2">Restaurantes:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Dishoom: €€</li>
                  <li>• Flat Iron: £12-15</li>
                  <li>• The Ivy Market Grill: €€€</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-700 mb-3">🎨 Trafalgar Square (14:30h)</h3>
            <p className="text-gray-700 mb-3">
              Considerada el "centro" de Londres, desde aquí se miden todas las distancias oficiales del Reino Unido. Esta plaza monumental fue diseñada en 1830 para conmemorar la victoria del Almirante Nelson en la Batalla de Trafalgar (1805).
            </p>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🎨 National Gallery - Galería Nacional (GRATIS):</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Más de 2.300 pinturas (1250-1900)</li>
                <li>• Van Gogh, Leonardo da Vinci, Velázquez, Monet</li>
                <li>• <strong>Horario:</strong> 10:00-18:00 (viernes hasta 21:00)</li>
                <li>• <strong>Visita rápida:</strong> 1 hora obras principales</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo recomendado:</strong> 30-45 minutos</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-700 mb-3">🎭 Covent Garden y Neal's Yard (15:00h)</h3>
            <p className="text-gray-700 mb-3">
              Desde 1654 este fue el mercado de frutas y verduras más importante de Londres. Hoy es un vibrante centro de tiendas, restaurantes y artistas callejeros.
            </p>

            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-3">
              <h4 className="font-semibold text-gray-900 mb-2">🏛️ Qué Ver en Covent Garden:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Apple Market:</strong> Artesanía, antigüedades, joyas hechas a mano</li>
                <li>• <strong>Jubilee Market:</strong> Souvenirs, ropa vintage</li>
                <li>• <strong>Artistas callejeros:</strong> Músicos, magos, acróbatas (gratis)</li>
                <li>• <strong>Royal Opera House:</strong> Fachada neoclásica impresionante</li>
              </ul>
            </div>

            <div className="bg-rainbow-50 border-4 border-yellow-300 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🌈 Neal's Yard - El Rincón Secreto de Colores:</h4>
              <p className="text-sm text-gray-700 mb-2">
                ¡A solo 2 minutos andando! Un pequeño callejón de edificios pintados en colores vibrantes (amarillo, fucsia, azul, verde) que contrasta totalmente con el gris londinense.
              </p>
              <p className="text-sm text-gray-700">
                <strong>📸 Foto Perfecta:</strong> Colócate en el centro del patio para capturar los 4 edificios de colores. Mejor hora: 14:00-16:00h.
              </p>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo total:</strong> 1-1.5 horas</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-700 mb-3">🎡 London Eye al Atardecer (17:00h)</h3>
            <p className="text-gray-700 mb-3">
              Cerramos el día subiendo a 135 metros de altura en la noria de observación más icónica del mundo. Inaugurada en el año 2000, el London Eye se ha convertido en el monumento de pago más visitado del Reino Unido.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3">
              <h4 className="font-semibold text-gray-900 mb-2">🎫 Tipos de Entradas (2025):</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Standard:</strong> £33-42 taquilla / £28-35 online (ahorro 25%)</li>
                <li>• <strong>Fast Track:</strong> £45-57 / £40-48 online (ahorra 30-45 min cola)</li>
                <li>• <strong>Flexible Fast Track:</strong> £53 (cualquier hora del día)</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🌆 Vistas Panorámicas:</h4>
              <p className="text-sm text-gray-700 mb-2">Desde arriba verás hasta 40 km en día despejado:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Big Ben y Palacio Westminster</li>
                <li>• Buckingham Palace</li>
                <li>• St Paul's Cathedral</li>
                <li>• The Shard</li>
                <li>• Torre de Londres y Tower Bridge</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-3">
              <p className="text-sm text-yellow-800">
                <strong>💡 Mejor Momento:</strong> Atardecer (16:00-16:30h en noviembre). Ves la ciudad de día y de noche en misma vuelta. Luces de Londres encendiéndose = mágico.
              </p>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo total:</strong> 1.5 horas (cola + vuelta)</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-700 mb-3">🌉 Paseo Nocturno South Bank (18:30h)</h3>
            <p className="text-gray-700 mb-3">
              Desde el London Eye hasta el Puente de Westminster se extiende el paseo peatonal más vibrante de Londres. De noche, con todo iluminado, es simplemente mágico.
            </p>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🌉 Qué Verás:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Golden Jubilee Bridges con luces LED</li>
                <li>• Southbank Centre (conciertos gratis a veces)</li>
                <li>• Street performers, músicos, estatuas humanas</li>
                <li>• London Eye iluminado cambiando de colores</li>
                <li>• Big Ben iluminado desde South Bank</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo:</strong> 30-45 minutos paseando</p>
          </div>
        </div>
      </div>

      {/* DÍA 2 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">📍 DÍA 2: De la Torre Medieval a las Alturas del Shard</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-blue-700 mb-3">🧀 Borough Market (9:00h)</h3>
            <p className="text-gray-700 mb-3">
              Comenzamos el día en el mercado de comida más antiguo de Londres (1014 d.C.). Aunque su origen es medieval, hoy es el epicentro de la gastronomía gourmet, orgánica y artesanal de la ciudad.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🧀 Qué Encontrarás:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Más de 100 puestos de comida del mundo</li>
                <li>• Queserías artesanales (pruebas gratis)</li>
                <li>• Bread Ahead: Donuts rellenos legendarios £4</li>
                <li>• Ostras frescas desde £1.50/unidad</li>
                <li>• Raclette: Queso fundido £8</li>
                <li>• Monmouth Coffee (el mejor de Londres)</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo:</strong> 45 min - 1 hora</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-700 mb-3">🌉 Tower Bridge (10:00h)</h3>
            <p className="text-gray-700 mb-3">
              A 5 minutos de Borough Market se alza el símbolo arquitectónico más fotografiado de Londres. Construido entre 1886-1894, este puente basculante levadizo sigue funcionando varias veces al día.
            </p>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🎫 Tower Bridge Exhibition:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Precio:</strong> £12.30 adultos (online £11.10)</li>
                <li>• <strong>Incluye:</strong> Glass Floor (pasarela cristal 42m altura)</li>
                <li>• <strong>Victorian Engine Rooms:</strong> Sala máquinas original</li>
                <li>• <strong>Duración:</strong> 45-60 minutos</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo:</strong> 30 min exterior / +45 min si entras</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-700 mb-3">🏰 Torre de Londres (10:40h)</h3>
            <p className="text-gray-700 mb-3">
              Llegamos al castillo más famoso de Inglaterra, una fortaleza normanda del siglo XI que ha sido palacio real, prisión, arsenal, zoológico y hoy alberga las Joyas de la Corona Británica.
            </p>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-3">
              <h4 className="font-semibold text-gray-900 mb-2">💎 Crown Jewels - Joyas de la Corona:</h4>
              <p className="text-sm text-gray-700 mb-2">La exhibición más valiosa del mundo (valor incalculable):</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Imperial State Crown: 2.868 diamantes, 17 zafiros</li>
                <li>• Cullinan I: Diamante tallado más grande del mundo (530.2 quilates)</li>
                <li>• Corona de San Eduardo: Usada solo para coronaciones</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-3">
              <h4 className="font-semibold text-gray-900 mb-2">🎖️ Yeoman Warders Tour - Beefeaters (GRATIS):</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Frecuencia:</strong> Cada 30 minutos</li>
                <li>• <strong>Primer tour:</strong> 10:00h / Último: 14:30h</li>
                <li>• <strong>Duración:</strong> 60 minutos</li>
                <li>• <strong>Idioma:</strong> Solo inglés (muy entretenidos)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Precio:</strong> £34.80 adultos (online £33.20)</li>
                <li>• <strong>Horario Nov:</strong> Mar-Sáb 9:00-16:30, Dom-Lun 10:00-16:30</li>
                <li>• <strong>Incluye:</strong> Todo (Joyas, Yeoman tours, exhibiciones)</li>
                <li>• <strong>Duración:</strong> 2.5-3 horas MÍNIMO</li>
              </ul>
            </div>

            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mt-3">
              <p className="text-sm text-cyan-800">
                <strong>💡 Truco:</strong> Ve DIRECTO a las Joyas al entrar (9:00h = sin cola). Después haz el Yeoman Tour (10:30h) y finalmente White Tower.
              </p>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo total:</strong> 2.5-3 horas</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-700 mb-3">🌿 Sky Garden (14:00h)</h3>
            <p className="text-gray-700 mb-3">
              Subimos al piso 35 del edificio "Walkie Talkie" para disfrutar del jardín público más alto de Londres. ¡Y lo mejor: la entrada es COMPLETAMENTE GRATIS!
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🌿 Información del Sky Garden:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Altura:</strong> 155 metros (piso 35-37)</li>
                <li>• <strong>Entrada:</strong> GRATIS (reserva obligatoria online 3-7 días antes)</li>
                <li>• <strong>Web:</strong> skygarden.london</li>
                <li>• <strong>Vistas:</strong> 360° sobre Londres y el Támesis</li>
                <li>• <strong>Jardín tropical interior + terrazas exteriores</strong></li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo:</strong> 1-1.5 horas</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-700 mb-3">🏙️ The Shard (15:40h)</h3>
            <p className="text-gray-700 mb-3">
              A 310 metros de altura, The Shard es el edificio más alto de Europa Occidental. Su plataforma de observación ofrece las vistas más espectaculares de toda la ciudad.
            </p>

            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🎫 The View from The Shard:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Precio:</strong> £34-37 taquilla / £28-32 online</li>
                <li>• <strong>Altura mirador:</strong> 244 metros (piso 72)</li>
                <li>• <strong>Incluye:</strong> 3 niveles de observación</li>
                <li>• <strong>Vistas:</strong> Hasta 64 km en día claro</li>
                <li>• <strong>Mejor momento:</strong> Atardecer (ves día+noche)</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo:</strong> 45-60 minutos</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-700 mb-3">⛪ Catedral de San Pablo (17:00h)</h3>
            <p className="text-gray-700 mb-3">
              Cruzamos el Millennium Bridge y llegamos a la catedral anglicana más importante del Reino Unido. Su cúpula de 111 metros domina el skyline de la City desde 1710.
            </p>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🏛️ Qué Ver:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Whispering Gallery:</strong> 257 escalones, acústica única</li>
                <li>• <strong>Stone Gallery:</strong> 378 escalones, vista exterior</li>
                <li>• <strong>Golden Gallery:</strong> 528 escalones TOTAL (lo más alto)</li>
                <li>• <strong>Cripta:</strong> Tumbas de Nelson, Wellington, Wren</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-3">
              <h4 className="font-semibold text-gray-900 mb-2">🎫 Información:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Precio:</strong> £25 adultos (£23 online)</li>
                <li>• <strong>Horario:</strong> Lun-Sáb 8:30-16:30</li>
                <li>• <strong>Incluye:</strong> Audioguía, cripta, cúpulas</li>
                <li>• <strong>⚠️ Importante:</strong> 528 escalones, NO hay ascensor</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo:</strong> 45-60 min (exterior) / +45 min si subes cúpulas</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-blue-700 mb-3">🚤 Crucero por el Támesis (18:30h)</h3>
            <p className="text-gray-700 mb-3">
              Terminamos el día navegando por el río. Ver la ciudad iluminada desde el agua es una experiencia inolvidable.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🚤 City Cruises - River Red Rover (Recomendado):</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Precio:</strong> £21.50 taquilla / £19 online</li>
                <li>• <strong>Duración:</strong> 40-50 minutos (Westminster ↔ Tower Bridge)</li>
                <li>• <strong>Frecuencia:</strong> Cada 30 minutos</li>
                <li>• <strong>Incluye:</strong> Audio guía en español</li>
                <li>• <strong>Tipo:</strong> Hop-on Hop-off</li>
              </ul>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mt-3">
              <h4 className="font-semibold text-gray-900 mb-2">🌉 Qué Verás:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Tower Bridge iluminado</li>
                <li>• The Shard, Tate Modern, Millennium Bridge</li>
                <li>• St Paul's Cathedral cúpula iluminada</li>
                <li>• London Eye cambiando de colores</li>
                <li>• Big Ben y Houses of Parliament</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo:</strong> 40-50 minutos</p>
          </div>
        </div>
      </div>

      {/* DÍA 3 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">📍 DÍA 3: De los Tesoros del Mundo a los Parques Reales</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-green-700 mb-3">🏛️ British Museum (9:00h)</h3>
            <p className="text-gray-700 mb-3">
              Comenzamos el último día en uno de los museos más importantes del planeta. Fundado en 1753, el British Museum alberga 8 millones de objetos que abarcan 2 millones de años de historia humana. ¡Entrada COMPLETAMENTE GRATIS!
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
              <h4 className="font-semibold text-gray-900 mb-2">⭐ Top 10 Obras Imprescindibles:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>1. <strong>Piedra de Rosetta</strong> (Room 4) - Clave jeroglíficos egipcios</li>
                <li>2. <strong>Mármoles del Partenón</strong> (Room 18) - Del Partenón de Atenas</li>
                <li>3. <strong>Momias Egipcias</strong> (Rooms 62-63) - Colección más completa</li>
                <li>4. <strong>Moai Isla de Pascua</strong> (Room 24) - 2.5 metros, 4 toneladas</li>
                <li>5. <strong>Busto de Ramsés II</strong> (Room 4) - 7.5 toneladas</li>
                <li>6. <strong>Tesoro de Sutton Hoo</strong> (Room 41) - Entierro anglosajón</li>
                <li>7. <strong>Ajedrez de Lewis</strong> (Room 40) - Piezas nórdicas s.XII</li>
                <li>8. <strong>Cilindro de Ciro</strong> (Room 52) - Primer "derechos humanos"</li>
                <li>9. <strong>Momias de Gebelein</strong> (Room 64) - ¡6.000 años!</li>
                <li>10. <strong>Gran Corte</strong> - Techo cristal de Norman Foster</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Horario:</strong> 10:00-17:00 todos los días (viernes hasta 20:30h)</li>
                <li>• <strong>Entrada:</strong> GRATIS (donación voluntaria)</li>
                <li>• <strong>Audioguía:</strong> £7 (muy recomendada)</li>
                <li>• <strong>Visita exprés:</strong> 1.5 horas obras principales</li>
                <li>• <strong>Visita completa:</strong> 2.5-3 horas</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-3">
              <p className="text-sm text-yellow-800">
                <strong>💡 Consejo:</strong> Llega a las 10:00h en punto (poca gente). Descarga la app gratuita antes (British Museum app). Free tours gratuitos 11:00-15:00h.
              </p>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo recomendado:</strong> 2-2.5 horas</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-green-700 mb-3">📺 Piccadilly Circus (12:00h)</h3>
            <p className="text-gray-700 mb-3">
              Después del museo, nos plantamos en el cruce más famoso de Londres. Las pantallas LED gigantes han iluminado esta intersección desde 1910, convirtiéndola en el icono del Londres moderno.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">📺 Highlights:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Pantallas LED gigantes (800 m² desde 2017)</li>
                <li>• Estatua de Eros (realmente Anteros, 1893)</li>
                <li>• Primera estatua de aluminio del mundo</li>
                <li>• <strong>Foto clásica:</strong> Desde escaleras memorial con pantallas de fondo</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo:</strong> 15-20 minutos</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-green-700 mb-3">🏮 Chinatown - Almuerzo (12:20h)</h3>
            <p className="text-gray-700 mb-3">
              A solo 2 minutos de Piccadilly nos sumergimos en el barrio chino más vibrante de Europa. Arcos tradicionales, faroles rojos y restaurantes auténticos cantoneses.
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🥟 Dónde Comer:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Dumplings' Legend:</strong> £15-25, muy auténtico</li>
                <li>• <strong>Joy King Lau:</strong> £12-20, favorito locales</li>
                <li>• <strong>Four Seasons:</strong> Pato pequinés £18</li>
                <li>• <strong>Baozi Inn:</strong> Comida callejera £8-12</li>
                <li>• <strong>Wong Kei:</strong> Básico pero bueno £8-12</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo:</strong> 45 min - 1 hora</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-green-700 mb-3">🛍️ Carnaby, Regent y Oxford Street (13:30h)</h3>
            <p className="text-gray-700 mb-3">
              Después de comer, nos lanzamos a las 3 calles comerciales más famosas de Londres. Desde boutiques vintage hasta gigantes del retail mundial.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
                <h4 className="font-semibold text-pink-900 mb-2">🎨 CARNABY ST</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Epicentro Swinging 60s</li>
                  <li>• Tiendas independientes</li>
                  <li>• Vintage stores</li>
                  <li>• Dr. Martens, Lush</li>
                  <li>• Calle peatonal</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <h4 className="font-semibold text-purple-900 mb-2">🏬 REGENT ST</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Elegancia eduardiana</li>
                  <li>• Hamleys (7 plantas)</li>
                  <li>• Liberty London</li>
                  <li>• Apple Store</li>
                  <li>• Arquitectura protegida</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h4 className="font-semibold text-blue-900 mb-2">🛒 OXFORD ST</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• 2.4 km, 300+ tiendas</li>
                  <li>• Selfridges (desde 1909)</li>
                  <li>• Primark (5 plantas)</li>
                  <li>• M&S, John Lewis</li>
                  <li>• ⚠️ Muy masificada</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>💡 Estrategia Eficiente:</strong> Carnaby St (30 min) → Regent St: Hamleys + Liberty (30-45 min) → Oxford St: Selfridges (30 min)
              </p>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo total:</strong> 1-1.5 horas</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-green-700 mb-3">🎨 Notting Hill (15:30h)</h3>
            <p className="text-gray-700 mb-3">
              Dejamos atrás el bullicio y nos adentramos en el barrio residencial más bonito y fotogénico de Londres. Casas victorianas de colores pastel y el mercadillo más famoso del mundo.
            </p>

            <div className="bg-rainbow-50 border-4 border-pink-300 rounded-lg p-4 mb-3">
              <h4 className="font-semibold text-gray-900 mb-2">🛍️ Portobello Road Market:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>SÁBADO:</strong> ¡DÍA COMPLETO! Antigüedades (8:00-19:00)</li>
                <li>• Lun-Mié: Solo tiendas fijas</li>
                <li>• Jue-Vie: Tiendas + algunos puestos</li>
                <li>• <strong>Si NO es sábado:</strong> Igual vale por las calles de colores</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-pink-50 via-yellow-50 to-blue-50 border border-pink-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">📸 Instagram Imprescindibles:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>1. <strong>St Luke's Mews:</strong> Casas colores pastel (rosa, azul, amarillo)</li>
                <li>2. <strong>Lancaster Road:</strong> Hilera casas azul pastel idénticas</li>
                <li>3. <strong>Notting Hill Bookshop:</strong> La librería de la película</li>
                <li>4. <strong>Electric Cinema:</strong> Cine más antiguo UK (1910)</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo:</strong> 1.5-2 horas</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-green-700 mb-3">🌳 Hyde Park al Atardecer (17:30h)</h3>
            <p className="text-gray-700 mb-3">
              Terminamos el viaje con un paseo relajado por el parque real más famoso de la ciudad. Con 253 hectáreas, Hyde Park + Kensington Gardens forman uno de los espacios verdes urbanos más grandes de Europa.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-3">
              <h4 className="font-semibold text-gray-900 mb-2">⭐ Puntos Imprescindibles:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Serpentine Lake:</strong> Lago artificial, puedes alquilar barca £12/hora</li>
                <li>• <strong>Diana Memorial Fountain:</strong> En memoria Princesa Diana (2004)</li>
                <li>• <strong>Albert Memorial:</strong> 54 metros altura, gótico victoriano</li>
                <li>• <strong>Estatua Peter Pan:</strong> Desde 1912, junto al lago</li>
                <li>• <strong>Italian Gardens:</strong> Jardines victorianos con fuentes</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🚶‍♂️ Ruta Recomendada (1 hora):</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>1. Entrada: Lancaster Gate (metro)</li>
                <li>2. Italian Gardens → fotos (10 min)</li>
                <li>3. Long Water → estatua Peter Pan (15 min)</li>
                <li>4. Serpentine Bridge → cruzar (5 min)</li>
                <li>5. Diana Memorial Fountain → sentarse (15 min)</li>
                <li>6. Albert Memorial → fotos (10 min)</li>
                <li>7. Salida: High Street Kensington (metro)</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-3">
              <p className="text-sm text-orange-800">
                <strong>💡 Mejor Hora:</strong> Atardecer 16:00-16:30h (noviembre). Luces doradas atravesando árboles. Menos gente que mediodía.
              </p>
            </div>

            <p className="text-sm text-gray-600 mt-3">⏰ <strong>Tiempo:</strong> 1 hora de paseo relajado</p>
          </div>
        </div>
      </div>

      {/* MÁS LUGARES */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">➕ Más Cosas que Ver en Londres</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">🎸 En la Ciudad:</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Abbey Road:</strong> Paso cebra Beatles, webcam 24/7</li>
              <li><strong>Churchill War Rooms:</strong> Búnker II Guerra Mundial £28</li>
              <li><strong>HMS Belfast:</strong> Barco guerra Támesis £26.50</li>
              <li><strong>Shakespeare's Globe:</strong> Teatro recreado £19 tours</li>
              <li><strong>Royal Observatory Greenwich:</strong> Meridiano 0° £18</li>
              <li><strong>Tate Britain:</strong> Arte británico 1500-hoy GRATIS</li>
              <li><strong>Wembley Stadium:</strong> Tours disponibles £25</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">🚂 Excursiones de Un Día:</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Stonehenge + Bath + Windsor:</strong> Tour día completo £90-120</li>
              <li><strong>Oxford o Cambridge:</strong> Universidades medievales, 1h tren</li>
              <li><strong>Castillo Windsor:</strong> Residencia real £30, 30 min tren</li>
              <li><strong>Harry Potter Studio:</strong> Sets reales £53.50 (reserva meses antes)</li>
              <li><strong>Acantilados Dover:</strong> Acantilados blancos, tour £75-90</li>
            </ul>
          </div>
        </div>
      </div>

      {/* HERRAMIENTAS DE VIAJE */}
      <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center">
          💳 Herramientas de Viaje
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
              Viaja sin preocuparte por las comisiones bancarias. Revolut te permite pagar en libras sin cargos adicionales,
              retirar efectivo sin comisiones y cambiar divisas al mejor tipo de cambio.
            </p>

            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">✅ Ventajas para tu viaje:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Sin comisiones por pago en el extranjero</li>
                <li>• Cambio de divisa al tipo real</li>
                <li>• Retiros gratuitos en cajeros</li>
                <li>• Control total desde la app</li>
                <li>• Tarjetas virtuales desechables</li>
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
                <p className="text-sm text-gray-600">Seguro de viaje con cobertura completa</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Viaja tranquilo con un seguro que te cubre ante cualquier imprevisto. IATI ofrece asistencia médica 24/7,
              cobertura de cancelación, pérdida de equipaje y mucho más.
            </p>

            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">✅ Por qué contratar seguro:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Asistencia médica en el extranjero</li>
                <li>• Cobertura de cancelación de viaje</li>
                <li>• Pérdida o robo de equipaje</li>
                <li>• Asistencia 24/7 en español</li>
                <li>• Repatriación incluida</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-300 rounded-lg p-3 mb-4">
              <p className="text-center font-bold text-orange-800 text-sm">
                🎁 ¡Descuento exclusivo del 5% ya aplicado en el enlace!
              </p>
            </div>

            <a
              href="https://www.iatiseguros.com/?r=37344279073491"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm w-full justify-center"
            >
              🛡️ Contratar Seguro IATI con 5% Descuento
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-amber-800">
            <strong>💡 Consejo:</strong> Prepara estos dos elementos antes de tu viaje. La tarjeta Revolut te ahorrará dinero en cada pago,
            y el seguro IATI te dará tranquilidad durante todo el viaje.
          </p>
        </div>
      </div>

      {/* GUÍA GASTRONÓMICA */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🍽️ Guía Gastronómica - Probado Personalmente</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-blue-800 mb-3">🐟 Fish & Chips Auténticos</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Poppies Spitalfields:</strong> £12-18, estilo años 50, porciones enormes</li>
              <li><strong>The Golden Hind:</strong> £10-15, desde 1914, favorito locales</li>
              <li><strong>Hook Camden Town:</strong> £12-16, pescado sostenible, versión gourmet</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-orange-800 mb-3">🌍 Cocina Internacional</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Dishoom:</strong> £12-25, indio Bombay años 60</li>
              <li><strong>Padella:</strong> £8-12, pasta fresca, cola 30-60 min (vale la pena)</li>
              <li><strong>Hoppers:</strong> £10-18, sri lankés, crepes rellenos</li>
              <li><strong>Bao:</strong> £8-15, taiwanés, bao buns</li>
              <li><strong>Barrafina:</strong> £15-30, tapas españolas, estrella Michelin</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-green-800 mb-3">🥐 Desayunos y Brunch</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>The Breakfast Club:</strong> £8-15, pancakes, decoración kitsch</li>
              <li><strong>Dishoom:</strong> £10-14, naan roll con bacon, chai tea</li>
              <li><strong>Granger & Co:</strong> £12-18, australiano, aguacate smash</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-purple-800 mb-3">☕ Cafeterías</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Monmouth Coffee:</strong> £3-5, mejor café Londres, Borough Market</li>
              <li><strong>Attendant:</strong> £3-6, en antiguos baños victorianos</li>
              <li><strong>TAP Coffee:</strong> £3-5, specialty coffee</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-amber-800 mb-3">🍺 Pubs Históricos</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Ye Olde Cheshire Cheese:</strong> £12-20, desde 1538, Fleet St</li>
              <li><strong>The Churchill Arms:</strong> £10-15, fachada flores, Thai food</li>
              <li><strong>The Lamb & Flag:</strong> £10-16, desde 1772, Covent Garden</li>
            </ul>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-pink-800 mb-3">🍰 Afternoon Tea</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Sketch:</strong> £68-88, baños forma huevos, rosa Instagram</li>
              <li><strong>Fortnum & Mason:</strong> £58-78, desde 1707, proveedores reales</li>
              <li><strong>The Wolseley:</strong> £35-48, art déco elegante</li>
            </ul>
          </div>
        </div>
      </div>

      {/* TRANSPORTE PÚBLICO */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🚇 Sistema de Transporte Público</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Red Integrada de Londres</h3>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">🚇 Underground (Metro - "The Tube"):</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>11 líneas de colores</strong></li>
                <li>• <strong>Más útiles:</strong> Piccadilly (azul), Circle (amarillo), District (verde), Jubilee (gris), Central (rojo), Northern (negro), Elizabeth (morado)</li>
                <li>• <strong>Frecuencia:</strong> 2-5 min hora punta, 5-10 min resto</li>
                <li>• <strong>Horario:</strong> Lun-Sáb ~05:30-00:30, Dom ~07:00-23:30</li>
                <li>• <strong>Night Tube:</strong> Vie-Sáb 24h (Central, Jubilee, Northern, Piccadilly, Victoria)</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🚌 Autobuses Rojos:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>700+ líneas</strong> cubren TODA la ciudad</li>
                <li>• <strong>Horario:</strong> 24 horas (líneas nocturnas "N")</li>
                <li>• <strong>Pago:</strong> Solo contactless/Oyster (NO efectivo desde 2014)</li>
                <li>• <strong>Ventajas:</strong> Ves la ciudad, piso superior = vistas</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">💳 Cómo Pagar el Transporte</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Opción 1: Contactless (RECOMENDADO)</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pasa tu tarjeta bancaria contactless</li>
                  <li>• Pasa tu móvil (Apple Pay/Google Pay)</li>
                  <li>• Mismo precio que Oyster</li>
                  <li>• Tope diario automático</li>
                  <li>• No compras nada extra</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h4 className="font-semibold text-green-900 mb-2">Opción 2: Oyster Card</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Tarjeta recargable TfL</li>
                  <li>• Compra: £7 (£5 retornables)</li>
                  <li>• Recargas en máquinas estaciones</li>
                  <li>• Mismo precio que contactless</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-800">
                <strong>❌ NO Recomendado:</strong> Billetes papel individuales (carísimos: £6.70 vs £3.20)
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">💰 Precios 2025</h3>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Zonas 1-2 (centro turístico):</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Topes Diarios:</strong> £8.50/día (lun-dom)</li>
                <li>• <strong>Metro/DLR/Overground:</strong> £3.20 pico, £2.80 fuera pico</li>
                <li>• <strong>Autobús:</strong> £1.75 (ilimitados autobuses £5.25/día)</li>
              </ul>
            </div>

            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
              <p className="text-sm text-cyan-800">
                <strong>💡 Truco Ahorro:</strong> Usa autobuses cuando puedas (£5.25 día ilimitado vs £8.50 metro). Muévete andando en el centro (distancias cortas).
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">📱 Apps Imprescindibles</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <h4 className="font-semibold text-purple-900 mb-2">Citymapper</h4>
                <p className="text-xs text-gray-700">Mejor app para moverte. Tiempos real, calorías. GRATIS</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <h4 className="font-semibold text-blue-900 mb-2">TfL Go</h4>
                <p className="text-xs text-gray-700">Oficial Transport London. Estado líneas en directo.</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <h4 className="font-semibold text-green-900 mb-2">Google Maps</h4>
                <p className="text-xs text-gray-700">Funciona perfectamente. Descarga mapa offline.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
          <h4 className="font-semibold text-gray-900 mb-2">💡 Consejos Transporte:</h4>
          <ul className="text-sm text-amber-800 space-y-1">
            <li>✅ Estate a la DERECHA en escaleras mecánicas (izquierda = adelantar)</li>
            <li>✅ Di "excuse me" para pasar</li>
            <li>✅ Mind the gap: Ojo hueco entre andén y tren</li>
            <li>❌ No comas/bebas en metro (multa £80)</li>
            <li>❌ No pongas pies en asientos (multa £50)</li>
          </ul>
        </div>
      </div>

      {/* CONSEJOS FINALES */}
      <div className="bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">✅ Consejos Finales para tu Viaje a Londres</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🎯 Imprescindibles que NO Puedes Perderte:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✅ Subir al London Eye al atardecer (día + noche en una vuelta)</li>
              <li>✅ Ver las Joyas de la Corona en la Torre de Londres</li>
              <li>✅ Contemplar la Piedra de Rosetta en el British Museum</li>
              <li>✅ Cruzar Tower Bridge andando (vistas espectaculares)</li>
              <li>✅ Fish & Chips auténtico en pub o takeaway local</li>
              <li>✅ Pasear por Notting Hill (aunque no sea sábado)</li>
              <li>✅ Fotos con cabinas rojas + autobuses de dos pisos</li>
              <li>✅ Perderte en Borough Market probando todo</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Consejos de Viajero Experimentado:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Transporte:</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Usa contactless (NO Oyster si tienes tarjeta sin comisiones)</li>
                  <li>• Descarga Citymapper antes de llegar</li>
                  <li>• Autobuses: siéntate arriba adelante (vistas 10/10)</li>
                  <li>• Night Tube vie-sáb = salir hasta tarde sin taxi</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-green-900 mb-2">Dinero:</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Lleva Revolut o N26 (sin comisiones)</li>
                  <li>• Mayoría sitios aceptan tarjeta (incluso £1)</li>
                  <li>• Propina: 10-12.5% restaurantes (revisa si incluida)</li>
                  <li>• Redondea en pubs (ej: £4.80 → da £5)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-purple-900 mb-2">Cultura Británica:</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Haz cola (queueing es religión)</li>
                  <li>• Di "sorry" por todo</li>
                  <li>• "Cheers" = gracias informal</li>
                  <li>• Pub: Pides en barra, NO propina</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-900 mb-2">Clima Noviembre:</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Temperatura: 7-12°C</li>
                  <li>• Lluvia frecuente (lleva paraguas)</li>
                  <li>• Oscurece: 16:00-16:30h</li>
                  <li>• Capas de ropa (indoor siempre caliente)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🚫 Errores Comunes a Evitar:</h3>
            <ul className="text-sm text-red-700 space-y-1">
              <li>❌ Confundir Tower Bridge con London Bridge</li>
              <li>❌ Pagar billetes metro individuales (3x más caro)</li>
              <li>❌ No reservar Westminster Abbey/Torre Londres (colas 1h+)</li>
              <li>❌ Ignorar museos gratuitos (son de nivel mundial)</li>
              <li>❌ Llevar maleta grande en metro hora punta</li>
              <li>❌ Esperar sol (noviembre = gris, disfruta igual)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* PRESUPUESTOS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">💰 Presupuestos Detallados - 2025</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 border border-green-300 rounded-xl p-4">
            <h3 className="text-lg font-bold text-green-800 mb-3">💼 Mochilero</h3>
            <p className="text-2xl font-bold text-green-900 mb-4">£60-85/día</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>🏨 Alojamiento:</strong> £25-35/noche (hostel dormitorio)</li>
              <li><strong>🍽️ Comida:</strong> £20-25/día (supermercados + Pret)</li>
              <li><strong>🚇 Transporte:</strong> £5-8/día (solo autobuses)</li>
              <li><strong>🎫 Atracciones:</strong> £12-17/día (museos gratis + 1 pago cada 2-3 días)</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-300 rounded-xl p-4">
            <h3 className="text-lg font-bold text-blue-800 mb-3">🎒 Estándar</h3>
            <p className="text-2xl font-bold text-blue-900 mb-4">£120-160/día</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>🏨 Alojamiento:</strong> £70-95/noche (hotel 3★)</li>
              <li><strong>🍽️ Comida:</strong> £35-45/día (restaurantes medios)</li>
              <li><strong>🚇 Transporte:</strong> £8-10/día (metro sin límite)</li>
              <li><strong>🎫 Atracciones:</strong> £15-30/día (1-2 atracciones/día)</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-300 rounded-xl p-4">
            <h3 className="text-lg font-bold text-purple-800 mb-3">💎 Lujo</h3>
            <p className="text-2xl font-bold text-purple-900 mb-4">£250-400+/día</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>🏨 Alojamiento:</strong> £150-250+/noche (hotel 4-5★)</li>
              <li><strong>🍽️ Comida:</strong> £80-130/día (fine dining)</li>
              <li><strong>🚇 Transporte:</strong> £20-40/día (taxis/Uber)</li>
              <li><strong>🎫 Atracciones:</strong> £40-80/día (fast-track + tours privados)</li>
            </ul>
          </div>
        </div>
      </div>

    </article>
  );
};

export default LondonGuideArticle;
