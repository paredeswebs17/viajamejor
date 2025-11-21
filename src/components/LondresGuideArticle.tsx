import React from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ExternalLink } from 'lucide-react';

interface LondresGuideArticleProps {
  onBack: () => void;
}

const LondresGuideArticle: React.FC<LondresGuideArticleProps> = ({ onBack }) => {

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-xl transition-all duration-200 font-medium border border-blue-200 hover:border-blue-300 mb-6 shadow-sm hover:shadow-md"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a guías
        </button>

        <div className="mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
            Guía Completa
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Londres en 3 Días: La Capital Británica al Completo
        </h1>

        <div className="flex flex-col gap-4 mb-6 items-start">
          <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
            <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
              <Clock className="h-3 w-3 mr-1" />
              20 min
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
                  title: 'Londres en 3 Días: Guía Completa',
                  text: 'Descubre Londres con este itinerario optimizado',
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
            className="inline-flex items-center text-gray-600 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 px-3 py-2 rounded-full transition-all duration-200 text-xs border border-gray-200 hover:border-blue-300 self-start shadow-sm hover:shadow-md"
          >
            <Share2 className="h-3 w-3 mr-1" />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      <div className="mb-8">
        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
          alt="Big Ben y el Parlamento de Londres"
          className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* INTRODUCCIÓN */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">¿Por qué visitar Londres?</h2>
        
        <p className="text-gray-700 mb-4">
          Londres es una de las ciudades más fascinantes del mundo, donde la historia milenaria convive con la modernidad más vanguardista. 
          Desde el icónico Big Ben hasta los modernos rascacielos de la City, pasando por palacios reales y museos de nivel mundial, 
          la capital británica ofrece una experiencia única que ningún viajero debería perderse.
        </p>

        <p className="text-gray-700 mb-4">
          Con más de 2.000 años de historia, Londres ha sido testigo de acontecimientos que han marcado el devenir de la humanidad. 
          Aquí encontrarás algunos de los museos más importantes del planeta (¡y muchos gratuitos!), mercados con siglos de tradición, 
          barrios con personalidad propia y una oferta gastronómica que va mucho más allá del típico fish & chips.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-6 mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-3">🎯 Lo mejor de Londres:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <ul className="text-sm text-gray-700 space-y-2 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Museos de primer nivel (¡muchos gratuitos!)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Historia británica en cada esquina</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Palacios reales y ceremonia del cambio de guardia</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Parques inmensos en pleno centro urbano</li>
              </ul>
            </div>
            <div>
              <ul className="text-sm text-gray-700 space-y-2 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Mercados históricos y modernos</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Barrios con personalidad única</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Shopping de nivel mundial</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Gastronomía internacional</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-4">
          Esta guía está diseñada para aprovechar al máximo vuestros 3 días en Londres, visitando los lugares imprescindibles 
          sin prisas pero sin pausa. Hemos optimizado las rutas para minimizar desplazamientos y poder visitar el máximo número 
          de lugares sin agotaros en el proceso.
        </p>

        <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
          <p className="font-medium text-blue-800 mb-1">💡 Consejo antes de empezar</p>
          <p className="text-blue-700 text-xs">
            Londres es una ciudad inmensa donde las distancias pueden engañar. Llevad el planning bien organizado, reservad con antelación 
            las principales atracciones y no dudéis en usar el transporte público cuando sea necesario. ¡Os ahorraréis tiempo y energía para disfrutar más!
          </p>
        </div>
      </div>

      {/* CÓMO LLEGAR DEL AEROPUERTO */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">✈️ Cómo Llegar del Aeropuerto al Centro</h2>

        <p className="text-gray-700 mb-6">
          Londres cuenta con varios aeropuertos internacionales. Los más importantes son Heathrow, Gatwick, Stansted y Luton. 
          Cada uno tiene diferentes opciones de transporte al centro de la ciudad.
        </p>

        {/* HEATHROW */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">🛬 Aeropuerto de Heathrow (LHR) - El Más Cercano</h3>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">🚇 Heathrow Express - La Opción Más Rápida</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> Desde 25£ online (37£ en estación)</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Duración:</strong> 15 minutos sin paradas</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Frecuencia:</strong> Cada 15 minutos</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Destino:</strong> Paddington Station (centro)</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Horario:</strong> 05:10 - 23:25</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Ideal para:</strong> Llegar rápido sin complicaciones</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">🚇 Metro Piccadilly Line - La Opción Económica</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> Desde 5,50£ (con tarjeta contactless)</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Duración:</strong> 45-60 minutos</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Frecuencia:</strong> Cada 5-10 minutos</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Paradas:</strong> Todo el centro de Londres</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Horario:</strong> 05:00 - 00:00 aprox</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Ideal para:</strong> Presupuestos ajustados</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h4 className="font-bold text-gray-900 mb-3">🚕 Traslado Privado - Máxima Comodidad</h4>
            <p className="text-sm text-gray-700 mb-3">
              Si viajas en grupo, con mucho equipaje o simplemente quieres comodidad total, el traslado privado es una excelente opción. 
              Te recogen en el aeropuerto y te llevan directo a tu hotel sin complicaciones.
            </p>
            <p className="text-sm text-gray-700 mb-4"><strong>Precio:</strong> Desde 60-80£ para 3-4 personas</p>
            <a
              href="https://www.civitatis.com/es/londres/traslado-aeropuerto-heathrow/?aid=10211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
            >
              <span>🚕 Reservar Traslado desde Heathrow</span>
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </div>
        </div>

        {/* GATWICK */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">🛬 Aeropuerto de Gatwick (LGW)</h3>
          
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">🚄 Gatwick Express</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> Desde 19,90£ online</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Duración:</strong> 30 minutos</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Frecuencia:</strong> Cada 15 minutos</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Destino:</strong> Victoria Station</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Horario:</strong> 05:00 - 00:00</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Compra:</strong> Online con descuento</p>
              </div>
            </div>
            <a
              href="https://www.civitatis.com/es/londres/traslado-aeropuerto-gatwick/?aid=10211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
            >
              <span>🚕 Traslado Privado desde Gatwick</span>
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </div>
        </div>

        {/* STANSTED */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">🛬 Aeropuerto de Stansted (STN)</h3>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">🚄 Stansted Express</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> Desde 19£ online</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Duración:</strong> 47 minutos</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Frecuencia:</strong> Cada 15-30 minutos</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Destino:</strong> Liverpool Street Station</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Horario:</strong> 05:30 - 00:30</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Compra:</strong> Anticipada más barato</p>
              </div>
            </div>
            <a
              href="https://www.civitatis.com/es/londres/traslado-aeropuerto-stansted/?aid=10211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
            >
              <span>🚕 Traslado Privado desde Stansted</span>
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </div>
        </div>

        {/* LUTON */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">🛬 Aeropuerto de Luton (LTN)</h3>
          
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">🚄 Tren + Shuttle Bus</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> Desde 17£ combinado</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Duración:</strong> 45-60 minutos total</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Frecuencia:</strong> Cada 10-15 minutos</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Proceso:</strong> Bus al Luton Airport Parkway + tren</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Destino:</strong> St Pancras International</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Horario:</strong> 24 horas</p>
              </div>
            </div>
            <a
              href="https://www.civitatis.com/es/londres/traslado-aeropuerto-luton/?aid=10211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
            >
              <span>🚕 Traslado Privado desde Luton</span>
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </div>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3">
          <p className="font-medium text-yellow-800 mb-1">💡 Consejo sobre aeropuertos</p>
          <p className="text-yellow-700 text-xs">
            Si podéis elegir, Heathrow es el aeropuerto más cercano y mejor conectado con el centro de Londres. 
            Gatwick también tiene buenas conexiones. Stansted y Luton están más alejados y el transporte puede llevar más tiempo.
          </p>
        </div>
      </div>

      {/* DÓNDE ALOJARSE */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🏨 Dónde Alojarse - Mejores Zonas</h2>
        
        <p className="text-gray-700 mb-6">
          Elegir bien la zona de alojamiento en Londres es fundamental para aprovechar vuestro tiempo al máximo. 
          Londres es enorme y las distancias pueden ser muy grandes, así que es importante estar bien situados.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-blue-800 mb-3">🎭 Covent Garden - Nuestra Favorita</h3>
            <div className="mb-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Por qué nos encanta:</strong> En pleno corazón de Londres, rodeado de teatros, restaurantes y a poca distancia 
                a pie de los principales puntos turísticos. Zona animada pero no ruidosa por la noche.
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Ideal para:</strong> Primeras visitas, quienes quieren recorrer Londres andando
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Precio:</strong> €€€ (medio-alto)
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm mb-2">
              <h4 className="font-semibold text-gray-900 mb-1">The Z Hotel Covent Garden</h4>
              <p className="text-xs text-gray-600 mb-2">Ubicación perfecta • Habitaciones modernas • Excelente relación calidad-precio</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-1">Page 8 Hotel</h4>
              <p className="text-xs text-gray-600 mb-2">Hotel boutique • Diseño elegante • Zona inmejorable</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🚇 South Bank / Waterloo</h3>
            <div className="mb-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Por qué es buena:</strong> Zona moderna junto al Támesis, cerca del London Eye y con excelentes conexiones. 
                Buena oferta de restaurantes y ambiente más local.
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Ideal para:</strong> Quienes buscan buena ubicación a mejor precio
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Precio:</strong> €€ (medio)
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-1">NOX Waterloo</h4>
              <p className="text-xs text-gray-600 mb-2">Precio competitivo • A 5 min del London Eye • Muy bien valorado</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-green-800 mb-3">🏙️ City of London</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Por qué elegirla:</strong> Barrio financiero que se queda tranquilo por las noches. Bien comunicado, 
              cerca de la Torre de Londres y Tower Bridge.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Ideal para:</strong> Viajeros que valoran la tranquilidad nocturna
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Precio:</strong> €€-€€€
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-amber-800 mb-3">🎨 Notting Hill</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Por qué nos gusta:</strong> Barrio con muchísimo encanto, casitas de colores, mercadillo de Portobello. 
              Ambiente más tranquilo y residencial.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Ideal para:</strong> Segundas o terceras visitas, amantes de barrios con personalidad
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Precio:</strong> €€€
            </p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
          <h3 className="text-lg font-bold text-red-800 mb-3">❌ Zonas que NO Recomendamos</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• <strong>Zona Termini/King's Cross:</strong> Aunque está mejor que hace años, todavía puede resultar un poco conflictiva de noche</li>
            <li>• <strong>Zonas alejadas del centro sin metro:</strong> Perderéis mucho tiempo en desplazamientos</li>
            <li>• <strong>Zonas de Zona 3-4:</strong> Para solo 3 días, mejor estar céntricos</li>
          </ul>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3">
          <p className="font-medium text-yellow-800 mb-1">💡 Consejo sobre alojamiento</p>
          <p className="text-yellow-700 text-xs">
            Reserva con la máxima antelación posible. Londres es cara y los hoteles bien ubicados se agotan rápido. 
            Para solo 3 días, merece la pena invertir un poco más en estar bien ubicados, ahorraréis tiempo y transporte.
          </p>
        </div>
      </div>

      {/* RESUMEN ITINERARIO */}
      <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">📅 Resumen del Itinerario</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-red-600 text-white">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">DÍA</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">QUÉ VISITAR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 1</td>
                <td className="border border-gray-300 px-4 py-3">Covent Garden, Trafalgar Square, St. James's Park, Buckingham Palace, Westminster, Big Ben, London Eye, Camden</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 2</td>
                <td className="border border-gray-300 px-4 py-3">Sky Garden, Torre de Londres, Tower Bridge, The Shard, Borough Market, Catedral San Pablo, Crucero por el Támesis</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 3</td>
                <td className="border border-gray-300 px-4 py-3">Notting Hill, Hyde Park, Museo Británico, Piccadilly Circus, Oxford Street, Regent Street, Carnaby Street</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Separador decorativo */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-blue-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-red-400 rounded-full"></div>
        </div>
      </div>

      {/* DÍA 1 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-gradient-to-br from-blue-600 to-red-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">1</span>
          DÍA 1: Londres Clásico - Del Palacio Real al Camden Alternativo
        </h2>

        {/* Covent Garden */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3"></div>
            Covent Garden y Neal's Yard (9:00h)
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Comienza el Día en uno de los Mercados Más Famosos</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/10556274/pexels-photo-10556274.jpeg"
                alt="Covent Garden Market en Londres"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Covent Garden es uno de los barrios más animados de Londres. Su mercado cubierto (Covent Garden Market) data del siglo XVII 
              y hoy es un lugar vibrante lleno de tiendas, cafeterías y artistas callejeros que actúan en la plaza central.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎭 Covent Garden Market:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Mercado cubierto histórico</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Artistas callejeros en directo</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Tiendas de artesanía y souvenirs</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Ambiente muy londinense</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🌈 Neal's Yard:</h5>
                <p className="text-sm text-gray-700 mb-2">
                  A pocos pasos está Neal's Yard, un pequeño callejón de fachadas de colores brillantes que rompe con el gris típico de Londres. 
                  Es perfecto para fotos y encontrarás tiendas de productos ecológicos y cosméticos naturales.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
              <h5 className="font-semibold text-gray-900 mb-2">☕ Desayuno recomendado:</h5>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Bill's Covent Garden:</strong> Perfecta para un buen desayuno inglés o brunch. Ambiente acogedor y comida de calidad.
              </p>
              <p className="text-sm text-gray-700">
                <strong>26 Grains (Neal's Yard):</strong> Cafetería pequeñita especializada en porridge y desayunos saludables. Todo delicioso.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <p className="text-xs text-blue-600 mb-3">💡 Tip: Si queréis conocer la zona con un guía, podéis hacer un free tour por Londres que comienza en Trafalgar Square (la siguiente parada).</p>
              <a href="https://www.civitatis.com/es/londres/free-tour-londres/?aid=10211" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                🚶 Free Tour por Londres
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Trafalgar Square */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-orange-400 rounded-full mr-3"></div>
            Trafalgar Square (10:30h)
          </h3>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">El Corazón de Londres</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg"
                alt="Trafalgar Square con la columna de Nelson"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Trafalgar Square es considerada el centro neurálgico de Londres. Esta inmensa plaza conmemora la victoria británica en la 
              Batalla de Trafalgar (1805) contra la flota franco-española, donde murió el almirante Nelson.
            </p>

            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
              <h5 className="font-semibold text-gray-900 mb-2">📍 Qué ver en Trafalgar Square:</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Columna de Nelson:</strong> 52 metros de altura con estatua del almirante</li>
                <li>• <strong>Los cuatro leones:</strong> Estatuas gigantes que custodian la columna</li>
                <li>• <strong>National Gallery:</strong> Museo de arte con entrada gratuita (más de 2.300 pinturas)</li>
                <li>• <strong>Fuentes:</strong> Dos fuentes ornamentales perfectas para fotos</li>
              </ul>
            </div>

            <div className="bg-green-100 border border-green-300 rounded-lg p-3">
              <p className="font-medium text-green-800 mb-1">🎄 Navidad en Trafalgar Square</p>
              <p className="text-green-700 text-xs">
                Cada año Noruega dona un enorme abeto navideño a la plaza como agradecimiento por la ayuda británica en la Segunda Guerra Mundial. 
                Es una tradición desde 1947 y el árbol se convierte en uno de los símbolos de la Navidad londinense.
              </p>
            </div>
          </div>
        </div>

        {/* St James Park y Buckingham */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
            St. James's Park y Buckingham Palace (11:15h)
          </h3>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">El Parque Real Más Antiguo y la Residencia Real</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/10519513/pexels-photo-10519513.jpeg"
                alt="Buckingham Palace visto desde St James Park"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Desde Trafalgar Square caminaremos por The Mall (la avenida ceremonial) hasta St. James's Park, el parque real más antiguo de Londres. 
              Sus jardines son preciosos en primavera y verano, y desde el puente sobre el lago hay vistas espectaculares hacia Buckingham Palace.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
              <h5 className="font-semibold text-gray-900 mb-3">👑 Buckingham Palace - Cambio de Guardia:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-700 mb-2"><strong>Horario:</strong> 11:00h (comienza la ceremonia)</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Duración:</strong> 45 minutos aproximadamente</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Frecuencia:</strong> Lunes, miércoles, viernes y domingos</p>
                </div>
                <div>
                  <p className="text-sm text-gray-700 mb-2"><strong>Mejor lugar:</strong> Frente a las verjas centrales del palacio</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Llegada:</strong> 10:15-10:30 para buen sitio</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Gratis:</strong> No se paga entrada para verlo</p>
                </div>
              </div>
            </div>

            <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
              <p className="font-medium text-red-800 mb-1">⚠️ Importante sobre el Cambio de Guardia</p>
              <p className="text-red-700 text-xs">
                El cambio de guardia NO se realiza todos los días. Consulta el calendario oficial en la web de la Casa Real británica antes de vuestra visita. 
                En invierno y con mal tiempo también puede cancelarse.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h5 className="font-semibold text-gray-900 mb-2">🏰 Visitar el Interior de Buckingham Palace:</h5>
              <p className="text-sm text-gray-700 mb-3">
                Los State Rooms (Salones de Estado) solo abren al público de julio a septiembre. La visita incluye las impresionantes estancias 
                donde la Reina recibía a jefes de Estado. Precio: desde 33£ adultos. Reserva obligatoria con mucha antelación.
              </p>
            </div>
          </div>
        </div>

        {/* Westminster y Big Ben */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-yellow-400 rounded-full mr-3"></div>
            Westminster, Abadía y Big Ben (12:30h)
          </h3>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Los Iconos Más Fotografiados de Londres</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg"
                alt="Big Ben y Parlamento de Westminster"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">⛪ Abadía de Westminster:</h5>
                <p className="text-sm text-gray-700 mb-2">
                  Lugar de coronación de todos los monarcas británicos desde 1066. Aquí se casaron el Príncipe Guillermo y Kate Middleton, 
                  y están enterradas grandes figuras como Isaac Newton, Charles Darwin y Stephen Hawking.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> 29£ adultos (reserva online)</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Duración:</strong> 1,5-2 horas</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🕐 Big Ben:</h5>
                <p className="text-sm text-gray-700 mb-2">
                  El reloj más famoso del mundo (1859). Su nombre oficial es Torre Elizabeth, pero todos lo conocen como Big Ben, 
                  que en realidad es el nombre de la campana principal de 13 toneladas.
                </p>
                <p className="text-sm text-gray-700 mb-2"><strong>Interior:</strong> Visitas muy limitadas (reserva con meses)</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Fotos:</strong> Desde Westminster Bridge (puente)</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
              <h5 className="font-semibold text-gray-900 mb-2">🏛️ Palacio de Westminster (Parlamento):</h5>
              <p className="text-sm text-gray-700 mb-3">
                Sede del Parlamento británico desde el siglo XVI. Es Patrimonio de la Humanidad y su arquitectura neogótica es impresionante. 
                Visitas guiadas disponibles en sábados y durante el verano (reserva online obligatoria).
              </p>
              <a href="https://www.civitatis.com/es/londres/visita-guiada-palacio-westminster/?aid=10211" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                🏛️ Tour Guiado por Westminster
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>

            <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
              <p className="font-medium text-blue-800 mb-1">📸 La foto más típica de Londres</p>
              <p className="text-blue-700 text-xs">
                La cabina roja de teléfono frente al Big Ben es una de las fotos más icónicas. La encontrarás en la esquina de 
                Bridge Street con Great George Street, justo al lado de la Abadía de Westminster.
              </p>
            </div>
          </div>
        </div>

        {/* London Eye */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
            London Eye (15:00h)
          </h3>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">La Noria Gigante con las Mejores Vistas</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/14356668/pexels-photo-14356668.jpeg"
                alt="London Eye junto al río Támesis"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              El London Eye es la noria más grande de Europa (135 metros de altura). Construido para celebrar el año 2000, 
              se ha convertido en uno de los símbolos de Londres. No es una noria convencional, sino cápsulas cerradas y climatizadas 
              donde puedes estar de pie o sentado mientras gira lentamente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎡 Información Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Precio: Desde 31£ (reserva online)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Duración: 30 minutos (vuelta completa)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>32 cápsulas con hasta 25 personas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Vistas: Big Ben, Westminster, St Paul's...</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">💡 Consejos:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Reserva online: Evita colas de horas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Mejor momento: Atardecer (golden hour)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Fast Track: Entrada prioritaria disponible</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Hay bar dentro de cada cápsula</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <p className="text-xs text-purple-600 mb-3">🎫 La entrada sin colas merece totalmente la pena. Las colas normales pueden ser de 2-3 horas en temporada alta.</p>
              <a href="https://www.civitatis.com/es/londres/entrada-london-eye/?aid=10211" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                🎡 Reservar London Eye Sin Colas
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Camden */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mr-3"></div>
            Barrio de Camden (17:30h)
          </h3>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">El Barrio Alternativo y Rockero de Londres</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg"
                alt="Camden Market con sus tiendas alternativas"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Camden Town es el barrio alternativo, rockero y bohemio de Londres. Famoso por su mercado (Camden Market), 
              sus tiendas de ropa vintage, discos, artesanía y su ambiente único. Por las tardes-noches cobra vida con gente joven 
              llenando los pubs y puestos de comida internacional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎸 Qué ver en Camden:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Camden Market (varios mercados juntos)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Stables Market (antiguos establos)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Camden Lock (junto al canal)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Tiendas alternativas y vintage</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🍜 Comida Internacional:</h5>
                <p className="text-sm text-gray-700 mb-2">
                  Camden Market es perfecto para cenar. Encontrarás puestos de comida de todo el mundo: japonesa, mexicana, 
                  india, tailandesa, italiana... Los precios son razonables y la calidad suele ser buena.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
              <h5 className="font-semibold text-gray-900 mb-2">🎵 Historia Rockera:</h5>
              <p className="text-sm text-gray-700">
                Camden fue el epicentro del movimiento punk británico en los 70-80. Amy Winehouse vivía aquí y hay una estatua 
                en su honor. Muchos músicos famosos tocaron en los pubs del barrio antes de ser conocidos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <p className="text-xs text-indigo-600 mb-3">🎭 Si queréis conocer Camden con guía local, hay un free tour muy interesante por el barrio.</p>
              <a href="https://www.civitatis.com/es/londres/free-tour-camden/?aid=10211" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                🚶 Free Tour por Camden
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Separador decorativo */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-blue-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-red-400 rounded-full"></div>
        </div>
      </div>

{/* Mapa del Día 1 */}

<div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    Mapa del Día 1: Ruta Completa
  </h3>

  <div className="bg-white rounded-xl p-4 mb-6 shadow-md border border-gray-100">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">1</div>
        <span className="text-xs sm:text-sm font-medium text-gray-700">Covent Garden</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">2</div>
        <span className="text-xs sm:text-sm font-medium text-gray-700">Trafalgar Square</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">3</div>
        <span className="text-xs sm:text-sm font-medium text-gray-700">St. James's Park</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">4</div>
        <span className="text-xs sm:text-sm font-medium text-gray-700">Buckingham Palace</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">5</div>
        <span className="text-xs sm:text-sm font-medium text-gray-700">Westminster Abbey</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">6</div>
        <span className="text-xs sm:text-sm font-medium text-gray-700">Big Ben</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">7</div>
        <span className="text-xs sm:text-sm font-medium text-gray-700">London Eye</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">8</div>
        <span className="text-xs sm:text-sm font-medium text-gray-700">Camden Town</span>
      </div>
    </div>
  </div>

  <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{ height: '500px' }}>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d39702.05788779644!2d-0.16284332589844098!3d51.52430525000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e2!4m5!1s0x487604ce176ac979%3A0x42af85654e23a0b4!2sCovent%20Garden%2C%20London%2C%20UK!3m2!1d51.5119!2d-0.1237!4m5!1s0x487604ce3941eb1f%3A0x1a5342fdf089c627!2sTrafalgar%20Square%2C%20London%2C%20UK!3m2!1d51.508!2d-0.1281!4m5!1s0x48760520cd5b5eb5%3A0xa26abf514d902a7!2sSt%20James's%20Park%2C%20London%2C%20UK!3m2!1d51.5023!2d-0.1357!4m5!1s0x48760520cd5b5eb5%3A0xa26abf514d902a7!2sBuckingham%20Palace%2C%20London%2C%20UK!3m2!1d51.5014!2d-0.1419!4m5!1s0x487604c4e4f1c0d1%3A0xd3d9e5f8ba7c83b0!2sWestminster%20Abbey%2C%20London%2C%20UK!3m2!1d51.4993!2d-0.1275!4m5!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sBig%20Ben%2C%20London%2C%20UK!3m2!1d51.5007!2d-0.1246!4m5!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sLondon%20Eye%2C%20London%2C%20UK!3m2!1d51.5033!2d-0.1195!4m5!1s0x48761b31e3777385%3A0xab60ff1847025329!2sCamden%20Town%2C%20London%2C%20UK!3m2!1d51.5414!2d-0.1428!5e0!3m2!1sen!2ses!4v1234567890123!5m2!1sen!2ses" 
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

  <div className="mt-6 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-xl p-4">
    <p className="text-sm text-gray-700 mb-2">
      <span className="font-semibold text-blue-900">📍 Distancia total:</span> Aproximadamente 7-8 km caminando
    </p>
    <p className="text-sm text-gray-700 mb-2">
      <span className="font-semibold text-blue-900">⏱️ Tiempo de recorrido:</span> Todo el día (9:00h - 20:00h)
    </p>
    <p className="text-sm text-gray-700 mb-2">
      <span className="font-semibold text-blue-900">🚇 Transporte:</span> Metro desde London Eye hasta Camden (Jubilee Line hasta Waterloo, luego Northern Line)
    </p>
    <a 
      href="https://www.google.com/maps/dir/Covent+Garden,+London/Trafalgar+Square,+London/St+James's+Park,+London/Buckingham+Palace,+London/Westminster+Abbey,+London/Big+Ben,+London/London+Eye,+London/Camden+Town,+London/@51.5243,-0.1428,13z/data=!3m1!4b1!4m50!4m49!1m5!1m1!1s0x487604ce176ac979:0x42af85654e23a0b4!2m2!1d-0.1237!2d51.5119!1m5!1m1!1s0x487604ce3941eb1f:0x1a5342fdf089c627!2m2!1d-0.1281!2d51.508!1m5!1m1!1s0x48760520cd5b5eb5:0xa26abf514d902a7!2m2!1d-0.1357!2d51.5023!1m5!1m1!1s0x48760520cd5b5eb5:0xa26abf514d902a7!2m2!1d-0.1419!2d51.5014!1m5!1m1!1s0x487604c4e4f1c0d1:0xd3d9e5f8ba7c83b0!2m2!1d-0.1275!2d51.4993!1m5!1m1!1s0x487604c38c8cd1d9:0xb78f2474b9a45aa9!2m2!1d-0.1246!2d51.5007!1m5!1m1!1s0x487604c7c7eb9be3:0x3918653583725b56!2m2!1d-0.1195!2d51.5033!1m5!1m1!1s0x48761b31e3777385:0xab60ff1847025329!2m2!1d-0.1428!2d51.5414!3e2" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm mt-3"
    >
      🗺️ Abrir Ruta en Google Maps
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  </div>
</div>
      {/* DÍA 2 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-gradient-to-br from-red-600 to-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">2</span>
          DÍA 2: Londres Monumental - De la Torre Medieval al Cielo de Cristal
        </h2>

        {/* Sky Garden */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-teal-400 rounded-full mr-3"></div>
            Sky Garden - Desayuno con Vistas (9:00h)
          </h3>
          <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Mirador Gratuito en las Alturas</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg"
                alt="Sky Garden con vistas panorámicas de Londres"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Comenzamos el día en el Sky Garden, un jardín público situado en la planta 35 del edificio conocido como "Walkie Talkie" 
              por su forma peculiar. Lo mejor es que la entrada es completamente GRATUITA, aunque hay que reservar hora online con antelación.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🌿 Sky Garden:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Entrada: GRATUITA (reserva online)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>Altura: 155 metros (planta 35)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Vistas 360° de Londres</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Jardín tropical en altura</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">☕ Darwin Brasserie:</h5>
                <p className="text-sm text-gray-700 mb-2">
                  Si reserváis mesa en Darwin Brasserie (el restaurante del Sky Garden) no necesitáis reservar entrada aparte. 
                  El desayuno está delicioso y las vistas son increíbles. No es barato pero la experiencia lo vale.
                </p>
              </div>
            </div>

            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
              <p className="font-medium text-yellow-800 mb-1">💡 Nuevo: The Garden at 120</p>
              <p className="text-yellow-700 text-xs">
                Hace poco han abierto otro mirador gratuito a pocos metros del Sky Garden: The Garden at 120. 
                La diferencia es que este es exterior (sin cristales) y no requiere reserva previa. Si hace buen tiempo, ¡visitad ambos!
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <p className="text-xs text-green-600 mb-3">🎫 Reserva tu entrada gratuita al Sky Garden con al menos 1 semana de antelación en la web oficial.</p>
            </div>
          </div>
        </div>

        {/* Torre de Londres */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full mr-3"></div>
            Torre de Londres (10:30h)
          </h3>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Fortaleza Medieval y Joyas de la Corona</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/14356731/pexels-photo-14356731.jpeg"
                alt="Torre de Londres junto al Támesis"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              La Torre de Londres (Tower of London) es uno de los castillos más famosos del mundo, con casi 1.000 años de historia. 
              Construida por Guillermo el Conquistador en 1066, ha sido fortaleza, palacio real, prisión, lugar de ejecución e incluso zoológico. 
              Hoy alberga las impresionantes Joyas de la Corona Británica.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">👑 Qué ver dentro:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>Joyas de la Corona (¡imprescindible!)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>La Estrella de África (diamante más grande)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Torre Blanca (la más antigua)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Cuervos de la Torre (leyenda)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Armería Real</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">📋 Información Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Precio: Desde 34,80£ (reserva online)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Duración: 2-3 horas mínimo</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Audioguía: Incluida en el precio</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Horario: 9:00-17:30 (verano hasta 18:00)</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
              <p className="font-medium text-red-800 mb-1">🐦‍⬛ La Leyenda de los Cuervos</p>
              <p className="text-red-700 text-xs">
                Según la leyenda, si los cuervos abandonan la Torre de Londres, la monarquía británica y el reino caerán. 
                Por eso siempre hay al menos 6 cuervos residentes cuidados por el Ravenmaster (Maestro de Cuervos). 
                ¡Incluso tienen sus propios nombres y están en la nómina real!
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <p className="text-xs text-amber-600 mb-3">💎 Las colas para ver las Joyas de la Corona pueden ser largas. Reserva entrada online para evitar esperas innecesarias.</p>
              <a href="https://www.civitatis.com/es/londres/entrada-torre-londres/?aid=10211" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                👑 Reservar Entrada Torre de Londres
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Tower Bridge */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-3"></div>
            Tower Bridge - Puente de la Torre (13:00h)
          </h3>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">El Puente Más Icónico de Londres</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg"
                alt="Tower Bridge iluminado al atardecer"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              El Tower Bridge (Puente de la Torre) es, sin duda, el puente más famoso y fotografiado de Londres. Construido entre 1886 y 1894, 
              es un puente levadizo que todavía funciona y se abre unas 800 veces al año para dejar pasar barcos grandes por el río Támesis.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🌉 Visitar el Interior:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Pasarelas de cristal en altura</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Salas de máquinas victorianas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>Exposición sobre su construcción</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Vistas espectaculares</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">📋 Info Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Precio: Desde 13,40£</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Duración: 1 hora aprox</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Horario: 9:30-18:00</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Cruzarlo: GRATIS</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-100 border border-green-300 rounded-lg p-3 mb-4">
              <p className="font-medium text-green-800 mb-1">📸 Mejores fotos del Tower Bridge</p>
              <p className="text-green-700 text-xs">
                Las mejores vistas del Tower Bridge son desde el otro lado del río. Cruzad el puente y volved para sacar fotos desde la orilla sur. 
                También son preciosas las vistas nocturnas con el puente iluminado.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <p className="text-xs text-blue-600 mb-3">💡 La visita al interior no es imprescindible para un primer viaje. Podéis dejarla para próximas visitas a Londres.</p>
              <a href="https://www.civitatis.com/es/londres/entrada-tower-bridge/?aid=10211" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                🌉 Entrada Tower Bridge Experience
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* The Shard */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mr-3"></div>
            The Shard - El Rascacielos (14:00h)
          </h3>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Las Vistas Más Impresionantes de Londres</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/4316108/pexels-photo-4316108.jpeg"
                alt="The Shard, el edificio más alto de Londres"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              The Shard (La Esquirla) es el edificio más alto de Europa Occidental con 310 metros de altura. Su mirador, 
              The View from The Shard, está en las plantas 68-72 y ofrece las mejores vistas panorámicas de toda Londres, 
              ¡se puede ver hasta 65 kilómetros en días despejados!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🏙️ The View from The Shard:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Altura: 244 metros (planta 72)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Vistas 360° de Londres</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Plataformas interior y exterior</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Visibilidad hasta 65 km</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">📋 Info Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: Desde 32£ (reserva online)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Mejor momento: Atardecer</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Horario: 10:00-22:00 (hasta 19:00 invierno)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Fast Track: Entrada prioritaria</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
              <p className="font-medium text-yellow-800 mb-1">🌅 Mejor hora para subir</p>
              <p className="text-yellow-700 text-xs">
                El atardecer es el momento más espectacular para subir al The Shard. Verás Londres con luz de día, el golden hour 
                y la ciudad iluminada por la noche. Los precios son más altos al atardecer pero la experiencia lo vale.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <p className="text-xs text-indigo-600 mb-3">👁️ Para nosotros, The Shard tiene las mejores vistas de Londres. Merece totalmente la pena la subida.</p>
              <a href="https://www.civitatis.com/es/londres/entrada-the-shard/?aid=10211" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                🏙️ Reservar The View from The Shard
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Borough Market */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mr-3"></div>
            Borough Market (15:30h)
          </h3>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">El Mercado Gastronómico Más Famoso</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/8844854/pexels-photo-8844854.jpeg"
                alt="Borough Market con puestos de comida"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Borough Market es uno de los mercados de alimentación más antiguos de Londres (existe desde el siglo XIII) y también 
              uno de los más visitados. Ha sabido reinventarse y hoy es un paraíso gastronómico con productos selectos, comida internacional 
              y puestos de todo tipo. Perfecto para comer algo o comprar productos gourmet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🍽️ Qué encontrar:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Comida para llevar (muy buena)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Productos locales británicos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Quesos artesanales</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Dulces y pasteles</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Cervezas craft</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">📋 Info Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Horario: Lun-Jue 10:00-17:00</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Vie: 10:00-18:00</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Sáb: 9:00-17:00</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>Dom: Cerrado</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
              <h5 className="font-semibold text-gray-900 mb-2">🍺 The George Inn:</h5>
              <p className="text-sm text-gray-700">
                Muy cerca de Borough Market está The George Inn, un pub histórico del siglo XVII que aún conserva todo su encanto original. 
                Se dice que Charles Dickens era cliente habitual. Perfecto para tomar una pinta después del mercado.
              </p>
            </div>

            <div className="bg-green-100 border border-green-300 rounded-lg p-3">
              <p className="font-medium text-green-800 mb-1">💡 Consejo</p>
              <p className="text-green-700 text-xs">
                Borough Market está más animado entre semana durante el mediodía. Los fines de semana hay más turistas pero también más puestos abiertos.
              </p>
            </div>
          </div>
        </div>

        {/* Millennium Bridge y St Paul */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full mr-3"></div>
            Millennium Bridge y Catedral San Pablo (16:30h)
          </h3>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Puente Peatonal y Catedral Icónica</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/6069207/pexels-photo-6069207.jpeg"
                alt="Catedral de San Pablo vista desde el Millennium Bridge"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            
            <h5 className="font-semibold text-gray-900 mb-3">🌉 Millennium Bridge:</h5>
            <p className="text-gray-700 mb-4">
              El Puente del Milenio es un puente peatonal moderno que conecta la zona de la Catedral de San Pablo con el Tate Modern y el Globe Theatre. 
              Quizás os suene de la película "Harry Potter y el Misterio del Príncipe" donde los mortífagos lo destruyen. 
              Es un paseo precioso, especialmente al atardecer.
            </p>

            <div className="bg-blue-100 border border-blue-300 rounded-lg p-3 mb-4">
              <p className="font-medium text-blue-800 mb-1">🎨 Curiosidad del Millennium Bridge</p>
              <p className="text-blue-700 text-xs">
                Si miráis al suelo mientras lo cruzáis, veréis pequeñas obras de arte en miniatura. Son chicles pintados por artistas callejeros. 
                ¡Una forma muy original de reutilizar algo tan poco estético!
              </p>
            </div>

            <h5 className="font-semibold text-gray-900 mb-3">⛪ Catedral de San Pablo:</h5>
            <p className="text-gray-700 mb-4">
              La Catedral de San Pablo (St Paul's Cathedral) es una de las iglesias más grandes del mundo y uno de los edificios más emblemáticos de Londres. 
              Fue diseñada por Christopher Wren después del Gran Incendio de Londres de 1666. Su cúpula ha dominado el skyline londinense durante más de 300 años.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎯 Qué ver dentro:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Interior impresionante</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Galería de los Susurros (acústica única)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Cripta con tumbas ilustres</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Subida a la cúpula (528 escalones)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">📋 Info Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: Desde 23£</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Duración: 1,5-2 horas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Audioguía: Incluida</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Horario: 8:30-16:30</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <p className="text-xs text-purple-600 mb-3">🎫 Si tenéis energía, subid a la cúpula. Las vistas merecen totalmente la pena, aunque son 528 escalones (¡no hay ascensor!).</p>
              <a href="https://www.civitatis.com/es/londres/entrada-catedral-san-pablo/?aid=10211" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                ⛪ Entrada Catedral San Pablo
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Crucero Támesis */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mr-3"></div>
            Crucero por el Río Támesis (18:30h)
          </h3>
          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Londres desde el Agua</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/1497444/pexels-photo-1497444.jpeg"
                alt="Crucero por el río Támesis al atardecer"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Terminamos el día con un relajante paseo en barco por el río Támesis. Es una forma diferente y muy agradable de ver Londres, 
              pasando por debajo de sus puentes más emblemáticos y viendo la ciudad desde otra perspectiva. Si lo hacéis al atardecer, 
              las vistas con la luz dorada son espectaculares.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🚢 Qué verás:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Big Ben y Parlamento</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>London Eye</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>Tower Bridge</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Torre de Londres</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>The Shard</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">📋 Info Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: Desde 18£</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Duración: 40-60 minutos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Comentarios en español</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Mejor: Al atardecer</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <p className="text-xs text-cyan-600 mb-3">⛴️ Es una experiencia muy relajante después de un día intenso de turismo. Perfecto para descansar las piernas y disfrutar de las vistas.</p>
              <a href="https://www.civitatis.com/es/londres/paseo-barco-tamesis/?aid=10211" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                🚢 Reservar Crucero por el Támesis
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Separador decorativo */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-blue-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-red-400 rounded-full"></div>
        </div>
      </div>

      {/* DÍA 3 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-gradient-to-br from-pink-600 to-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">3</span>
          DÍA 3: Londres de Contrastes - Del Encanto de Notting Hill al Corazón Cultural
        </h2>

        {/* Notting Hill */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-rose-400 rounded-full mr-3"></div>
            Notting Hill - Barrio con Encanto (9:00h)
          </h3>
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">El Barrio Más Bonito de Londres</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg"
                alt="Casas coloridas de Notting Hill"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Notting Hill es uno de nuestros barrios favoritos de Londres. Famoso por sus casitas de colores pastel, 
              el mercado de Portobello Road y por ser escenario de la película del mismo nombre con Hugh Grant y Julia Roberts. 
              Es un barrio más tranquilo y residencial, perfecto para comenzar el último día con calma.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🏘️ Qué ver en Notting Hill:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Portobello Road (mercadillo sábados)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>Casas de colores pastel</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>St Lukes Mews (calle de Love Actually)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>The Notting Hill Bookshop</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">☕ Desayuno recomendado:</h5>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Farm Girl Notting Hill:</strong> Cafetería moderna perfecta para desayunos y brunch. 
                  Comida deliciosa, ingredientes frescos y ambiente acogedor. Abre a las 8:30h.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
              <h5 className="font-semibold text-gray-900 mb-2">📚 The Notting Hill Bookshop:</h5>
              <p className="text-sm text-gray-700">
                La librería que aparece en la película "Notting Hill" realmente existe, aunque la fachada exterior que se ve en la peli 
                era de otro lugar. Dentro conserva ese encanto de librería independiente de barrio. Perfecta para curiosear un rato.
              </p>
            </div>

            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
              <p className="font-medium text-yellow-800 mb-1">🛍️ Portobello Road Market</p>
              <p className="text-yellow-700 text-xs">
                Si vuestro viaje coincide en sábado, podréis disfrutar del famoso mercadillo de Portobello Road. 
                Venden antigüedades, ropa vintage, artesanía y productos de segunda mano. Es el mercado callejero más grande de Londres. 
                Se monta solo los sábados por la mañana.
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <p className="text-xs text-pink-600 mb-3">🚶 Si queréis conocer el barrio en profundidad, hay un free tour muy interesante por Notting Hill.</p>
              <a href="https://www.civitatis.com/es/londres/free-tour-notting-hill/?aid=10211" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                🏘️ Free Tour por Notting Hill
                <ExternalLink className="h-3 w-3 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Hyde Park */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
            Hyde Park y Kensington Gardens (11:00h)
          </h3>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">El Parque Real Más Grande del Centro</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg"
                alt="Hyde Park con el lago Serpentine"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Hyde Park y Kensington Gardens forman juntos el espacio verde más grande del centro de Londres (253 hectáreas). 
              En primavera y verano es precioso recorrerlos, con flores, árboles centenarios y el lago Serpentine. 
              Si viajas en invierno o llueve, puedes saltarte esta parada o acortarla.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🌳 Qué ver:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Fuente Diana de Gales</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Estatua de Peter Pan</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>Albert Memorial (monumento impresionante)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Lago Serpentine (se puede remar)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Speakers' Corner (esquina de oradores)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎄 Winter Wonderland:</h5>
                <p className="text-sm text-gray-700 mb-2">
                  Si visitáis Londres en Navidad, en Hyde Park instalan Winter Wonderland, un enorme parque temático navideño con 
                  atracciones, mercadillos, pistas de hielo, espectáculos y mucho ambiente festivo. Es completamente gratuito 
                  (las atracciones se pagan aparte).
                </p>
              </div>
            </div>

            <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
              <p className="font-medium text-blue-800 mb-1">⏱️ Tiempo recomendado</p>
              <p className="text-blue-700 text-xs">
                Si vais con el tiempo justo o el clima no acompaña, podéis reducir esta parada o incluso saltárosla. 
                Con buen tiempo, es muy agradable pasear 30-45 minutos por el parque antes de ir al Museo Británico.
              </p>
            </div>
          </div>
        </div>

        {/* Museo Británico */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-yellow-400 rounded-full mr-3"></div>
            Museo Británico (12:30h)
          </h3>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Uno de los Mejores Museos del Mundo</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/8850981/pexels-photo-8850981.jpeg"
                alt="Interior del Museo Británico"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              El Museo Británico (British Museum) es uno de los museos más importantes y visitados del mundo, con más de 8 millones de objetos 
              que abarcan 2 millones de años de historia humana. Lo mejor de todo: la entrada es completamente GRATUITA, como la mayoría de 
              museos públicos de Londres.
            </p>

            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
              <h5 className="font-semibold text-gray-900 mb-3">🏛️ Obras Imprescindibles del Museo Británico:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <ul className="text-sm text-gray-700 space-y-1 list-none">
                    <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>Piedra de Rosetta (clave para descifrar jeroglíficos)</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Mármoles del Partenón (Grecia)</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Momias egipcias</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Busto de Ramsés II</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-sm text-gray-700 space-y-1 list-none">
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Estatua Moái de Isla de Pascua</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Tesoro de Sutton Hoo (anglosajón)</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Gato momificado egipcio</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Gran Atrio (arquitectura impresionante)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">📋 Info Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Entrada: GRATUITA</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>Horario: 10:00-17:00 (viernes hasta 20:30)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Tiempo: 2-3 horas mínimo</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Audioguía: Disponible (de pago)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">💡 Consejos:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Es inmenso, no intentéis verlo todo</li>
                  <li>• Coged mapa en la entrada</li>
                  <li>• Céntrate en tus períodos favoritos</li>
                  <li>• Un tour guiado ayuda mucho</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <p className="text-xs text-amber-600 mb-3">🎫 El museo es gratis pero un free tour o visita guiada hace la experiencia mucho más interesante.</p>
              <div className="flex flex-wrap gap-2">
                <a href="https://www.civitatis.com/es/londres/free-tour-museo-britanico/?aid=10211" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                  🏛️ Free Tour Museo Británico
                  <ExternalLink className="h-3 w-3 ml-2" />
                </a>
                <a href="https://www.civitatis.com/es/londres/visita-guiada-museo-britanico/?aid=10211" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
                  🎟️ Visita Guiada
                  <ExternalLink className="h-3 w-3 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Piccadilly Circus */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mr-3"></div>
            Piccadilly Circus y Chinatown (15:30h)
          </h3>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">El Times Square Londinense</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/1796736/pexels-photo-1796736.jpeg"
                alt="Piccadilly Circus con sus pantallas de neón"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Piccadilly Circus es una de las intersecciones más famosas del mundo, conocida por sus enormes pantallas de neón y publicidad. 
              Es el equivalente londinense a Times Square de Nueva York. Siempre está lleno de gente, artistas callejeros y ambiente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">📍 Qué ver:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Fuente de Eros (estatua de Anteros)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Pantallas gigantes de neón</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Edificios victorianos históricos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Ambiente animado 24/7</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🏮 Chinatown:</h5>
                <p className="text-sm text-gray-700 mb-2">
                  A pocos pasos de Piccadilly Circus está Chinatown, el barrio chino de Londres. Calles decoradas con faroles rojos, 
                  restaurantes asiáticos auténticos y un ambiente muy colorido. Perfecto si queréis comer algo diferente.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
              <h5 className="font-semibold text-gray-900 mb-2">❓ ¿Por qué se llama "Circus"?</h5>
              <p className="text-sm text-gray-700">
                No tiene nada que ver con circos. En latín, "circus" significa "círculo" o "rotonda", y se refiere a la forma circular 
                que tenía originalmente esta intersección de calles. Con el tiempo ha perdido esa forma pero conservó el nombre.
              </p>
            </div>

            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3">
              <p className="font-medium text-yellow-800 mb-1">🎭 Zona de teatros</p>
              <p className="text-yellow-700 text-xs">
                Esta zona (West End) es el Broadway londinense, repleto de teatros donde se representan musicales famosos. 
                Si os gusta el teatro, podéis pillar entradas para algún espectáculo nocturno como El Rey León, Wicked o Hamilton.
              </p>
            </div>
          </div>
        </div>

        {/* Shopping Streets */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full mr-3"></div>
            Oxford Street, Regent Street y Carnaby Street (16:30h)
          </h3>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Las Calles del Shopping Londinense</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/5480038/pexels-photo-5480038.jpeg"
                alt="Oxford Street con sus tiendas y decoraciones"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            
            <h5 className="font-semibold text-gray-900 mb-3">🛍️ Oxford Street:</h5>
            <p className="text-gray-700 mb-4">
              Oxford Street es una de las calles comerciales más famosas del mundo, con casi 2 kilómetros de tiendas. 
              Desde grandes almacenes históricos como Selfridges hasta tiendas más asequibles como Primark. Siempre está repleta de gente.
            </p>

            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
              <h5 className="font-semibold text-gray-900 mb-2">🏬 Selfridges:</h5>
              <p className="text-sm text-gray-700">
                Los grandes almacenes Selfridges están en Oxford Street desde 1909 y son toda una institución londinense. 
                Aunque no compréis nada, merece la pena entrar a ver su arquitectura y ambiente. Las puertas de entrada son originales de hace más de 100 años.
              </p>
            </div>

            <h5 className="font-semibold text-gray-900 mb-3">🎨 Regent Street:</h5>
            <p className="text-gray-700 mb-4">
              Regent Street es otra calle comercial icónica que conecta Oxford Circus con Piccadilly Circus. Su arquitectura es preciosa, 
              con edificios curvos y elegantes. En Navidad, las luces de Regent Street son espectaculares.
            </p>

            <h5 className="font-semibold text-gray-900 mb-3">🎸 Carnaby Street:</h5>
            <p className="text-gray-700 mb-4">
              Carnaby Street es una calle peatonal más pequeña pero con mucha historia. Fue el epicentro del movimiento "Swinging London" 
              en los años 60, cuando Londres se convirtió en la capital mundial de la moda y la música. Artistas, diseñadores y músicos se reunían aquí. 
              Se dice que aquí nació la minifalda de la mano de Mary Quant.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🛒 Qué encontrarás:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Marcas de lujo</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>High street (Zara, H&M...)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Primark (precios low cost)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Tiendas independientes</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">💡 Consejos:</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Siempre hay mucha gente</li>
                  <li>• En Navidad decoración preciosa</li>
                  <li>• Carnaby menos masificada</li>
                  <li>• Cuidado con carteristas</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-100 border border-green-300 rounded-lg p-3">
              <p className="font-medium text-green-800 mb-1">🎄 Navidad en Oxford Street</p>
              <p className="text-green-700 text-xs">
                Si visitáis Londres en Navidad, Oxford Street y Regent Street se llenan de luces y decoraciones espectaculares. 
                Son de las decoraciones navideñas más bonitas de la ciudad. El encendido oficial suele ser a mediados de noviembre.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MÁS LUGARES */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">➕ Más Lugares que Ver en Londres</h2>
        
        <p className="text-gray-700 mb-6">
          Si tenéis más días en Londres o queréis sustituir alguna parada del planning, aquí os dejamos otros lugares interesantes 
          que no hemos incluido en el itinerario de 3 días pero que merecen la pena.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">🏛️ Museos y Galerías:</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>National Gallery:</strong> En Trafalgar Square. Más de 2.300 pinturas europeas. GRATIS</li>
              <li><strong>Tate Modern:</strong> Arte moderno y contemporáneo. GRATIS</li>
              <li><strong>Museo de Historia Natural:</strong> Esqueleto de dinosaurio gigante. GRATIS</li>
              <li><strong>Victoria and Albert Museum:</strong> Artes decorativas. GRATIS</li>
              <li><strong>Churchill War Rooms:</strong> Búnker secreto de Churchill en la WWII</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">🎬 Para Fans de...</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Harry Potter:</strong> Estudios Warner, Andén 9¾ en King's Cross</li>
              <li><strong>Sherlock Holmes:</strong> Museo en Baker Street 221B</li>
              <li><strong>The Beatles:</strong> Abbey Road (paso de cebra famoso)</li>
              <li><strong>Shakespeare:</strong> Globe Theatre (réplica del teatro original)</li>
              <li><strong>Jack el Destripador:</strong> Tour nocturno por East End</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">🏰 Palacios y Edificios:</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Palacio de Kensington:</strong> Residencia de los Príncipes de Gales</li>
              <li><strong>Hampton Court Palace:</strong> Palacio de Enrique VIII (en las afueras)</li>
              <li><strong>Royal Albert Hall:</strong> Sala de conciertos más impresionante</li>
              <li><strong>Leadenhall Market:</strong> Mercado victoriano (El Caldero Chorreante de Harry Potter)</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">🚂 Excursiones de un Día:</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Stonehenge + Bath:</strong> Monumento prehistórico + ciudad georgiana</li>
              <li><strong>Oxford:</strong> Universidad más antigua de habla inglesa (1h tren)</li>
              <li><strong>Cambridge:</strong> Ciudad universitaria preciosa (50 min tren)</li>
              <li><strong>Windsor:</strong> Castillo real favorito de Isabel II (40 min tren)</li>
              <li><strong>Brighton:</strong> Ciudad costera con encanto (1h tren)</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">🌳 Parques y Naturaleza:</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Regent's Park:</strong> Con el zoo de Londres dentro</li>
              <li><strong>Greenwich Park:</strong> Meridiano de Greenwich + Observatorio</li>
              <li><strong>Richmond Park:</strong> El más grande, con ciervos en libertad</li>
              <li><strong>Primrose Hill:</strong> Colina con vistas panorámicas de Londres</li>
            </ul>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">🎪 Experiencias Únicas:</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Afternoon Tea:</strong> Experiencia del té de las 5 tradicional</li>
              <li><strong>Musical en West End:</strong> El Rey León, Wicked, Hamilton...</li>
              <li><strong>Mercados:</strong> Camden, Portobello, Borough, Brick Lane</li>
              <li><strong>Pub Crawl:</strong> Ruta de pubs tradicionales</li>
              <li><strong>HMS Belfast:</strong> Barco de guerra anclado en el Támesis</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-6">
          <div className="flex flex-wrap gap-3">
            <a href="https://www.civitatis.com/es/londres/estudios-warner-harry-potter/?aid=10211" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
              ⚡ Estudios Harry Potter
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
            <a href="https://www.civitatis.com/es/londres/excursion-stonehenge-bath/?aid=10211" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
              🗿 Stonehenge + Bath
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
            <a href="https://www.civitatis.com/es/londres/excursion-windsor-stonehenge-bath/?aid=10211" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
              👑 Windsor + Stonehenge + Bath
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* GUÍA GASTRONÓMICA */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🍽️ Guía Gastronómica</h2>
        
        <p className="text-gray-700 mb-6">
          La gastronomía británica ha evolucionado muchísimo y Londres es hoy una de las capitales gastronómicas del mundo. 
          Más allá del típico fish & chips, encontraréis una oferta increíble de restaurantes de todos los estilos y precios.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-blue-800 mb-3">🐟 Fish & Chips Auténtico</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">Poppies Fish & Chips</h4>
                <p className="text-xs text-gray-600 mb-1">Varios locales • €€ • Fish & chips tradicional</p>
                <p className="text-sm text-gray-700">Uno de los mejores fish & chips de Londres. Ambiente retro de los años 50.</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">The Sherlock Holmes Pub</h4>
                <p className="text-xs text-gray-600 mb-1">Cerca Trafalgar Square • €€ • Pub histórico</p>
                <p className="text-sm text-gray-700">Pub temático con buen fish & chips y ambiente británico auténtico.</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🍝 Comida Internacional</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">Bancone Covent Garden</h4>
                <p className="text-xs text-gray-600 mb-1">Covent Garden • €€ • Italiano</p>
                <p className="text-sm text-gray-700">Restaurante italiano recomendado por Guía Michelin. Pasta fresca buenísima.</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">Din Tai Fung</h4>
                <p className="text-xs text-gray-600 mb-1">Covent Garden • €€ • Dumplings chinos</p>
                <p className="text-sm text-gray-700">Cadena taiwanesa famosa por sus dumplings. Imprescindible.</p>
              </div>

              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">Shoryu Ramen</h4>
                <p className="text-xs text-gray-600 mb-1">Regent Street • €€ • Ramen japonés</p>
                <p className="text-sm text-gray-700">Auténtico ramen japonés. Varios locales por Londres.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-green-800 mb-3">☕ Desayunos y Brunch</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">Bill's</h4>
                <p className="text-xs text-gray-600 mb-1">Varios locales • €€ • Todo el día</p>
                <p className="text-sm text-gray-700">Desayunos, brunch y comidas. Todo delicioso, ambiente acogedor.</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">Farm Girl Notting Hill</h4>
                <p className="text-xs text-gray-600 mb-1">Notting Hill • €€ • Desayuno/brunch</p>
                <p className="text-sm text-gray-700">Cafetería moderna con ingredientes frescos. Abre a las 8:30h.</p>
              </div>

              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">26 Grains</h4>
                <p className="text-xs text-gray-600 mb-1">Neal's Yard, Covent Garden • €€ • Saludable</p>
                <p className="text-sm text-gray-700">Pequeñita pero todo está buenísimo. Especialidad en porridge.</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-amber-800 mb-3">🍔 Cadenas Recomendadas</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">Shake Shack</h4>
                <p className="text-xs text-gray-600 mb-1">Varios locales • €€ • Hamburguesas</p>
                <p className="text-sm text-gray-700">Cadena americana con hamburguesas de calidad. Siempre una buena opción.</p>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">Wagamama</h4>
                <p className="text-xs text-gray-600 mb-1">Varios locales • €€ • Asiática</p>
                <p className="text-sm text-gray-700">Cadena británica de comida asiática. Ramen, curry y noodles.</p>
              </div>

              <div className="bg-white rounded-lg p-3 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-1">Pret A Manger</h4>
                <p className="text-xs text-gray-600 mb-1">Por toda la ciudad • € • Bocadillos</p>
                <p className="text-sm text-gray-700">Sandwiches, ensaladas y café para llevar. Económico y de calidad.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">💡 Consejos para Comer en Londres:</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Los restaurantes en zonas turísticas suelen ser más caros y de peor calidad</li>
            <li>• Muchos pubs tienen comida decente a buen precio</li>
            <li>• Los mercados (Borough, Camden) tienen comida variada y buena</li>
            <li>• Cadenas como Pret A Manger perfectas para comida rápida</li>
            <li>• El agua del grifo es potable y gratis en restaurantes</li>
            <li>• La propina (10-12,5%) a veces ya viene incluida (service charge)</li>
          </ul>
        </div>
      </div>

      {/* PRESUPUESTO */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">💰 Presupuesto Estimado</h2>
        
        <p className="text-gray-700 mb-6">
          Londres tiene fama de ser cara, y es cierto que no es un destino económico. Sin embargo, con buena planificación 
          se puede disfrutar de la ciudad sin arruinarse. Aquí os dejamos presupuestos orientativos según vuestro estilo de viaje.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-green-800 mb-3">🎒 Presupuesto Ajustado</h3>
            <div className="text-2xl font-bold text-green-600 mb-2">70-100€/día</div>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Alojamiento: 30-40€ (hostel)</li>
              <li>• Comida: 20-30€</li>
              <li>• Transporte: 8,50€ (tope diario)</li>
              <li>• Atracciones: 10-20€</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-blue-800 mb-3">🏨 Presupuesto Medio</h3>
            <div className="text-2xl font-bold text-blue-600 mb-2">150-200€/día</div>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Alojamiento: 80-120€ (hotel 3*)</li>
              <li>• Comida: 40-50€</li>
              <li>• Transporte: 10-15€</li>
              <li>• Atracciones: 20-30€</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-purple-800 mb-3">👑 Presupuesto Alto</h3>
            <div className="text-2xl font-bold text-purple-600 mb-2">300-500€/día</div>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• Alojamiento: 180-300€ (hotel 4-5*)</li>
              <li>• Comida: 80-120€</li>
              <li>• Transporte: 20-30€</li>
              <li>• Atracciones: 40-60€</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
          <h4 className="font-semibold text-yellow-800 mb-2">💡 Consejos para Ahorrar en Londres:</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• <strong>Museos gratuitos:</strong> Museo Británico, National Gallery, Tate Modern, Natural History...</li>
            <li>• <strong>Transporte:</strong> Usa tarjeta contactless, tiene tope de 8,50£/día zonas 1-2</li>
            <li>• <strong>Comida:</strong> Supermercados (Tesco, Sainsbury's) y cadenas económicas (Pret)</li>
            <li>• <strong>Agua:</strong> Del grifo es potable y gratis en restaurantes</li>
            <li>• <strong>Atracciones:</strong> Reserva online para ahorrar vs compra en taquilla</li>
            <li>• <strong>Free tours:</strong> Excelente forma de conocer la ciudad pagando lo que quieras</li>
            <li>• <strong>Picnic en parques:</strong> Compra en super y come en Hyde Park o St James</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3">💳 Precios de Atracciones Principales:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <div>
              <p className="mb-1"><strong>Torre de Londres:</strong> desde 34,80£</p>
              <p className="mb-1"><strong>London Eye:</strong> desde 31£</p>
              <p className="mb-1"><strong>The Shard:</strong> desde 32£</p>
              <p className="mb-1"><strong>Abadía Westminster:</strong> 29£</p>
            </div>
            <div>
              <p className="mb-1"><strong>Tower Bridge:</strong> desde 13,40£</p>
              <p className="mb-1"><strong>Catedral San Pablo:</strong> desde 23£</p>
              <p className="mb-1"><strong>Crucero Támesis:</strong> desde 18£</p>
              <p className="mb-1"><strong>Buckingham Palace:</strong> desde 33£ (julio-sept)</p>
            </div>
          </div>
        </div>
      </div>

      {/* CÓMO MOVERSE */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🚇 Cómo Moverse por Londres</h2>
        
        <p className="text-gray-700 mb-6">
          El transporte público de Londres es uno de los mejores del mundo. Es extenso, puntual y relativamente fácil de usar. 
          Lo mejor es que con una tarjeta contactless podéis pagar directamente sin necesidad de comprar billetes.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-red-50 border border-blue-200 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">🚇 Metro de Londres (The Tube)</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">📍 Características:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 11 líneas de metro + DLR + Overground</li>
                <li>• Opera desde las 5:00-00:30 aprox</li>
                <li>• Night Tube viernes y sábados (líneas principales)</li>
                <li>• 272 estaciones en total</li>
                <li>• Muy bien conectado</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">🚌 Autobuses:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Más de 8.500 autobuses</li>
                <li>• Algunos funcionan 24 horas</li>
                <li>• Los rojos de dos plantas son icónicos</li>
                <li>• Misma tarifa que el metro</li>
                <li>• Buena cobertura de zonas sin metro</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4">
            <h4 className="font-semibold text-gray-900 mb-3">💳 Sistema de Pago - Tarjeta Contactless:</h4>
            <p className="text-sm text-gray-700 mb-3">
              <strong>La forma MÁS FÁCIL y ECONÓMICA de pagar el transporte es con tarjeta contactless sin comisiones</strong> 
              (como N26 o Revolut). Simplemente apoya la tarjeta al entrar y salir del metro o al subir al autobús.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p className="mb-1"><strong>Viaje sencillo:</strong> desde 2,80£</p>
                <p className="mb-1"><strong>Tope diario Zonas 1-2:</strong> 8,50£</p>
                <p className="mb-1"><strong>Tope semanal:</strong> 42,70£</p>
              </div>
              <div>
                <p className="mb-1"><strong>Funcionamiento:</strong> Toque al entrar y salir</p>
                <p className="mb-1"><strong>Una tarjeta = una persona</strong></p>
                <p className="mb-1"><strong>Calcula automáticamente el mejor precio</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
            <p className="font-medium text-yellow-800 mb-1">⚠️ Importante sobre tarjetas</p>
            <p className="text-yellow-700 text-xs">
              Asegúrate de que tu tarjeta NO cobra comisiones por cambio de divisa. Las tarjetas N26 y Revolut son perfectas 
              porque no cobran comisiones y funcionan exactamente igual que la Oyster Card. Una sola tarjeta solo puede usarla una persona.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2">🎫 Oyster Card (alternativa):</h4>
            <p className="text-sm text-gray-700 mb-2">
              Si no tienes tarjeta sin comisiones, puedes comprar una Oyster Card (5£ de depósito reembolsable) y recargarla. 
              Tiene los mismos precios y topes que el pago contactless. Se compra en cualquier estación de metro.
            </p>
          </div>
        </div>

        <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
          <p className="font-medium text-red-800 mb-1">🚖 Taxis y Uber</p>
          <p className="text-red-700 text-xs">
            Los taxis negros londinenses (black cabs) son icónicos pero MUY CAROS. Uber es más económico pero con el tráfico de Londres 
            puede salir caro también. Solo recomendable para distancias cortas o si vais varios y compartís gastos. 
            El transporte público es mucho más eficiente y barato.
          </p>
        </div>

        <div className="bg-green-100 border border-green-300 rounded-lg p-3">
          <p className="font-medium text-green-800 mb-1">🚶 Caminar por Londres</p>
          <p className="text-green-700 text-xs">
            El centro de Londres es muy caminable. Muchas veces es más rápido ir andando que coger el metro, 
            especialmente entre atracciones cercanas. Además, caminando descubres rincones que te perderías bajo tierra. 
            ¡Llevad calzado cómodo!
          </p>
        </div>
      </div>

      {/* MEJOR ÉPOCA */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🌤️ Mejor Época para Visitar Londres</h2>
        
        <p className="text-gray-700 mb-6">
          Londres se puede visitar todo el año, cada estación tiene su encanto. El clima británico es impredecible 
          (puede llover cualquier día del año), así que es importante ir preparado siempre. Aquí os contamos los pros y contras de cada época.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">🌸 Primavera (Marzo-Mayo)</h3>
            <div className="mb-3">
              <p className="text-sm text-gray-700 mb-1"><strong>Temperatura:</strong> 8-17°C</p>
              <p className="text-sm text-gray-700 mb-1"><strong>Lluvia:</strong> Moderada</p>
              <p className="text-sm text-gray-700 mb-1"><strong>Turistas:</strong> Alta (sobre todo mayo)</p>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>✅ Lo mejor:</strong></p>
            <ul className="text-sm text-gray-700 space-y-1 mb-2">
              <li>• Parques en flor (espectaculares en abril-mayo)</li>
              <li>• Días más largos</li>
              <li>• Temperatura agradable</li>
            </ul>
            <p className="text-sm text-gray-700 mb-1"><strong>❌ Lo peor:</strong></p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Precios más altos</li>
              <li>• Más turistas</li>
              <li>• Reservar con antelación</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">☀️ Verano (Junio-Agosto)</h3>
            <div className="mb-3">
              <p className="text-sm text-gray-700 mb-1"><strong>Temperatura:</strong> 14-24°C</p>
              <p className="text-sm text-gray-700 mb-1"><strong>Lluvia:</strong> Poca (pero puede llover)</p>
              <p className="text-sm text-gray-700 mb-1"><strong>Turistas:</strong> MUY alta</p>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>✅ Lo mejor:</strong></p>
            <ul className="text-sm text-gray-700 space-y-1 mb-2">
              <li>• Mejor clima del año</li>
              <li>• Días muy largos (oscurece a las 21h)</li>
              <li>• Festivales y eventos al aire libre</li>
            </ul>
            <p className="text-sm text-gray-700 mb-1"><strong>❌ Lo peor:</strong></p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Temporada alta → carísimo</li>
              <li>• Masificación turística</li>
              <li>• Colas en todas partes</li>
            </ul>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">🍂 Otoño (Septiembre-Noviembre)</h3>
            <div className="mb-3">
              <p className="text-sm text-gray-700 mb-1"><strong>Temperatura:</strong> 7-18°C</p>
              <p className="text-sm text-gray-700 mb-1"><strong>Lluvia:</strong> Moderada-alta</p>
              <p className="text-sm text-gray-700 mb-1"><strong>Turistas:</strong> Media (menos en septiembre)</p>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>✅ Lo mejor:</strong></p>
            <ul className="text-sm text-gray-700 space-y-1 mb-2">
              <li>• Septiembre aún con buen tiempo</li>
              <li>• Parques con colores otoñales preciosos</li>
              <li>• Menos turistas que verano</li>
              <li>• Precios más moderados</li>
            </ul>
            <p className="text-sm text-gray-700 mb-1"><strong>❌ Lo peor:</strong></p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Lluvia más frecuente</li>
              <li>• Días cada vez más cortos</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-3">❄️ Invierno (Diciembre-Febrero)</h3>
            <div className="mb-3">
              <p className="text-sm text-gray-700 mb-1"><strong>Temperatura:</strong> 2-8°C</p>
              <p className="text-sm text-gray-700 mb-1"><strong>Lluvia:</strong> Frecuente</p>
              <p className="text-sm text-gray-700 mb-1"><strong>Turistas:</strong> Baja (excepto Navidad)</p>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>✅ Lo mejor:</strong></p>
            <ul className="text-sm text-gray-700 space-y-1 mb-2">
              <li>• Precios más bajos (excepto Navidad)</li>
              <li>• Menos turistas</li>
              <li>• Navidad mágica en diciembre</li>
              <li>• Mercadillos navideños</li>
            </ul>
            <p className="text-sm text-gray-700 mb-1"><strong>❌ Lo peor:</strong></p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Frío y lluvia</li>
              <li>• Oscurece muy pronto (16:00h)</li>
              <li>• Algunos días muy grises</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">🎯 Nuestra Recomendación:</h4>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Mayo-Junio y Septiembre-Octubre</strong> son las mejores épocas para visitar Londres. Buen clima, 
            parques preciosos, menos masificación que julio-agosto y precios más razonables. Diciembre también es mágico 
            si no os importa el frío y queréis disfrutar del ambiente navideño.
          </p>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3">
          <p className="font-medium text-yellow-800 mb-1">🌂 Consejo sobre el clima</p>
          <p className="text-yellow-700 text-xs">
            En Londres puede llover cualquier día del año, incluso en verano. Llevad siempre un chubasquero o paraguas plegable. 
            La lluvia suele ser fina y constante (drizzle), no son tormentas fuertes. Los londinenses están acostumbrados 
            y la vida continúa con normalidad aunque llueva.
          </p>
        </div>
      </div>

      {/* TARJETAS TURÍSTICAS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎫 Tarjetas Turísticas - ¿Merece la Pena?</h2>
        
        <p className="text-gray-700 mb-6">
          Existen varias tarjetas turísticas que prometen ahorro en atracciones de Londres. Sin embargo, para un viaje de solo 3 días 
          donde ya tenéis un planning optimizado, normalmente NO suelen merecer la pena. Os explicamos por qué.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-blue-800 mb-3">🎟️ London Pass</h3>
            <div className="mb-3">
              <p className="text-sm text-gray-700 mb-2"><strong>Qué incluye:</strong></p>
              <ul className="text-sm text-gray-700 space-y-1 mb-3">
                <li>• Más de 90 atracciones</li>
                <li>• Torre de Londres</li>
                <li>• Abadía de Westminster</li>
                <li>• Tour en autobús turístico</li>
                <li>• Crucero por el Támesis</li>
                <li>• Catedral San Pablo</li>
              </ul>
              <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> Desde 109£ (1 día) hasta 174£ (3 días)</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-sm font-semibold text-gray-900 mb-1">❌ Por qué NO suele merecer la pena:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Necesitas visitar 3-4 atracciones/día para rentabilizar</li>
                <li>• Muchos museos top son GRATIS (Museo Británico, National Gallery...)</li>
                <li>• NO incluye London Eye ni The Shard</li>
                <li>• Presión de visitar muchas cosas rápido = agotamiento</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🎫 Go City London</h3>
            <div className="mb-3">
              <p className="text-sm text-gray-700 mb-2"><strong>Qué incluye:</strong></p>
              <ul className="text-sm text-gray-700 space-y-1 mb-3">
                <li>• Similar a London Pass</li>
                <li>• Sistema "Explorer" (eliges X atracciones)</li>
                <li>• o sistema "All-Inclusive" (días ilimitados)</li>
                <li>• Incluye algunas atracciones diferentes</li>
              </ul>
              <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> Desde 79£ (2 atracciones) hasta 184£ (7 atracciones)</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-sm font-semibold text-gray-900 mb-1">❌ Mismos problemas:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Solo rentable si haces MUCHAS cosas de pago</li>
                <li>• Con 3 días no da tiempo a rentabilizarla</li>
                <li>• Los mejores museos son gratis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
          <h4 className="font-semibold text-green-800 mb-3">✅ Nuestra Recomendación para 3 días:</h4>
          <p className="text-sm text-green-700 mb-3">
            Para un viaje de 3 días siguiendo nuestro planning, es MÁS BARATO y FLEXIBLE comprar las entradas individuales 
            que necesitéis con antelación online. Las tarjetas turísticas solo merecen la pena si:
          </p>
          <ul className="text-sm text-green-700 space-y-1">
            <li>✓ Vais a estar 5-7 días en Londres</li>
            <li>✓ Queréis visitar MUCHAS atracciones de pago</li>
            <li>✓ Os gusta el ritmo intenso de turismo</li>
            <li>✓ No os importa sacrificar tiempo en museos gratuitos</li>
          </ul>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3">
          <p className="font-medium text-yellow-800 mb-1">💡 Lo que SÍ recomendamos</p>
          <p className="text-yellow-700 text-xs">
            Comprad las entradas individuales online con antelación para: Torre de Londres, London Eye, The Shard, 
            Abadía de Westminster. Ahorraréis tiempo (sin colas) y dinero (suele ser más barato online que en taquilla). 
            El resto del tiempo aprovechad los museos gratuitos, free tours y pasear por la ciudad.
          </p>
        </div>
      </div>

      {/* CONSEJOS FINALES */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-6 sm:p-8 shadow-md mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎯 Consejos Finales + FAQ</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">✅ Imprescindibles para Londres:</h3>
              <ul className="text-sm text-gray-700 space-y-2 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Reservar alojamiento con máxima antelación</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Comprar entradas online (Torre Londres, London Eye...)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Tarjeta sin comisiones para transporte</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Adaptador enchufe tipo G (UK)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Paraguas o chubasquero siempre</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Calzado MUY cómodo</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Consejos de Viajero:</h3>
              <ul className="text-sm text-gray-700 space-y-2 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Cuidado con carteristas en metro y zonas turísticas</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>El agua del grifo es potable y gratis</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>En el metro, dejad salir antes de entrar</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Los londinenses hacen cola para todo</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Caminar por la izquierda en escaleras</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>Propina 10-12,5% (a veces incluida)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">❓ Preguntas Frecuentes (FAQ)</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <p className="font-semibold text-gray-900 mb-1">¿Se necesita visado para viajar a Londres desde España?</p>
                <p className="text-sm text-gray-700">No, los españoles pueden entrar a UK con DNI o pasaporte en vigor (máximo 6 meses de estancia).</p>
              </div>

              <div className="border-l-4 border-red-400 pl-4">
                <p className="font-semibold text-gray-900 mb-1">¿Cuánto dinero en efectivo debo llevar?</p>
                <p className="text-sm text-gray-700">Muy poco. Londres es casi 100% cashless. Con tarjeta sin comisiones es suficiente. Llevad 20-30£ en efectivo por si acaso.</p>
              </div>

              <div className="border-l-4 border-green-400 pl-4">
                <p className="font-semibold text-gray-900 mb-1">¿Es seguro Londres?</p>
                <p className="text-sm text-gray-700">Sí, es una ciudad muy segura. Sentido común habitual: cuidado con carteristas en zonas turísticas y metro. Evitad zonas solitarias de noche.</p>
              </div>

              <div className="border-l-4 border-purple-400 pl-4">
                <p className="font-semibold text-gray-900 mb-1">¿Hablan español en Londres?</p>
                <p className="text-sm text-gray-700">En zonas turísticas algunos trabajadores hablan español, pero no es común. El inglés básico es suficiente, los londinenses son amables y pacientes.</p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-4">
                <p className="font-semibold text-gray-900 mb-1">¿Puedo beber el agua del grifo?</p>
                <p className="text-sm text-gray-700">SÍ, el agua del grifo en Londres es totalmente potable y de buena calidad. En restaurantes os la darán gratis si la pedís (tap water).</p>
              </div>

              <div className="border-l-4 border-pink-400 pl-4">
                <p className="font-semibold text-gray-900 mb-1">¿Funcionan los móviles españoles en Londres?</p>
                <p className="text-sm text-gray-700">Desde el Brexit muchas operadoras españolas cobran roaming en UK. Consultad con vuestra compañía o llevad eSIM.</p>
              </div>

              <div className="border-l-4 border-orange-400 pl-4">
                <p className="font-semibold text-gray-900 mb-1">¿Es caro comer en Londres?</p>
                <p className="text-sm text-gray-700">Puede serlo en zonas turísticas. En barrios más locales, mercados y cadenas como Pret se come bien por 10-15£. Supermercados muy económicos.</p>
              </div>

              <div className="border-l-4 border-indigo-400 pl-4">
                <p className="font-semibold text-gray-900 mb-1">¿Con 3 días es suficiente?</p>
                <p className="text-sm text-gray-700">Para ver lo imprescindible sí. Ideal serían 4-5 días para hacerlo más relajado y añadir excursiones. Pero en 3 días bien organizados se ve mucho.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
            <p className="font-medium text-blue-800 mb-1">📱 Apps Útiles para Londres</p>
            <div className="text-blue-700 text-xs space-y-1">
              <p>• <strong>Citymapper:</strong> Mejor app para transporte público</p>
              <p>• <strong>TfL Go:</strong> App oficial de Transport for London</p>
              <p>• <strong>Google Maps:</strong> Para orientarte y buscar lugares</p>
              <p>• <strong>TheFork:</strong> Para reservar restaurantes con descuento</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600 text-sm mt-8 border-t border-gray-200 pt-6">
        <p className="mb-2">
          Guía actualizada en Noviembre 2025 | Información verificada y precios actuales
        </p>
        <p className="text-gray-500">
          ¡Esperamos que disfrutéis de Londres al máximo! 🇬🇧
        </p>
      </div>
    </article>
  );
};

export default LondresGuideArticle;
