import React from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ExternalLink } from 'lucide-react';
import StickyTableOfContents from './StickyTableOfContents';

interface LondonGuideArticleProps {
  onBack: () => void;
}

const LondonGuideArticle: React.FC<LondonGuideArticleProps> = ({ onBack }) => {
  const sections = [
    { id: 'por-que-visitar', title: '¿Por qué visitar Londres?' },
    { id: 'llegada-aeropuertos', title: 'Llegada y Aeropuertos' },
    { id: 'donde-dormir', title: 'Dónde Dormir en Londres' },
    { id: 'itinerario', title: 'Itinerario de 3 Días' },
    { id: 'dia-1', title: 'Día 1: Westminster y el Corazón Real', level: 2 },
    { id: 'dia-2', title: 'Día 2: Museos, Mercados y el Támesis', level: 2 },
    { id: 'dia-3', title: 'Día 3: City, Tower Bridge y Alternativas', level: 2 },
    { id: 'lugares-imprescindibles', title: 'Más Lugares Imprescindibles' },
    { id: 'recomendaciones', title: 'Tarjeta y Seguro de Viaje' },
    { id: 'gastronomia', title: 'Guía Gastronómica' },
    { id: 'transporte', title: 'Sistema de Transporte' },
    { id: 'consejos', title: 'Consejos Finales' },
    { id: 'presupuestos', title: 'Presupuestos Detallados' }
  ];

  return (
    <>
      <StickyTableOfContents sections={sections} />
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
          src="https://images.pexels.com/photos/5380087/pexels-photo-5380087.jpeg"
          alt="Big Ben y el Palacio de Westminster iluminados al atardecer junto al río Támesis"
          className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* SECCIÓN 1: ¿POR QUÉ VISITAR LONDRES? */}
      <div id="por-que-visitar" className="bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
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
      <div id="llegada-aeropuertos" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">✈️ Llegada y Conexiones desde los Aeropuertos</h2>

        <p className="text-gray-700 mb-6">Londres cuenta con 6 aeropuertos, pero los 4 principales son:</p>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Desde Aeropuerto de Heathrow (LHR)</h3>

          <div className="border-2 border-green-400 bg-green-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🔥 🚂 Heathrow Express - El Tren Más Rápido
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Conexión directa a London Paddington sin paradas
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
              <p className="text-sm text-blue-800">
                <strong>💡 ¿Cuándo vale la pena?</strong> Si llegas cansado, con equipaje pesado,
                o tu hotel está en zona Paddington/Hyde Park/Notting Hill. Ahorras 35 minutos vs el metro.
              </p>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: Desde 29€ (online, compra anticipada)
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 15 min (T2/T3), 21 min (T5)
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Horario: 05:00-23:30 (cada 15 min)
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                WiFi gratis, espacio equipaje, enchufes
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Niños -15 años: GRATIS con adulto
              </div>
            </div>

            <a
              href="https://gyg.me/JSudzJeY"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 px-4 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-800 transition"
            >
              Ver horarios y reservar →
            </a>
          </div>

          <div className="border-2 border-yellow-400 bg-yellow-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🚇 Piccadilly Line (Metro) - Opción Más Económica
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Opción económica y directa al centro de Londres
            </p>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: 6,60€ con Oyster/Contactless
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 50-60 minutos
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Destino: Covent Garden, Leicester Square, Piccadilly Circus
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Económico y directo
              </div>
            </div>
          </div>

          <div className="border-2 border-orange-400 bg-orange-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🚖 Traslado Privado - Máximo Confort
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Servicio puerta a puerta desde el aeropuerto a tu hotel
            </p>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-3 mb-3">
              <p className="text-sm text-orange-900">
                <strong>🎯 Ideal si:</strong>
              </p>
              <ul className="text-sm text-orange-800 space-y-1 mt-2">
                <li>✓ Llegas de madrugada o muy tarde (sin metro disponible)</li>
                <li>✓ Llevas equipaje pesado o cochecito de bebé</li>
                <li>✓ Tu hotel no está cerca de estaciones principales</li>
              </ul>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: Desde 46€ por persona (tarifa fija)
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 45-90 min según tráfico
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Ideal para familias, grupos o mucho equipaje
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Puerta a puerta, sin esperas
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Conductor profesional esperándote
              </div>
            </div>

            <a
              href="https://gyg.me/tqu0VpSP"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 px-4 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-800 transition"
            >
              Reservar transfer con precio fijo →
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Desde Aeropuerto de Gatwick (LGW)</h3>

          <div className="border-2 border-green-400 bg-green-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🔥 🚂 Gatwick Express - El Tren Más Rápido
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Conexión directa a London Victoria Station sin paradas
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: 23€ (online, compra anticipada)
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 30 minutos sin paradas
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Destino: London Victoria Station
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Frecuencia: Cada 15 minutos
              </div>
            </div>

            <a
              href="https://ticket.gatwickexpress.com/search"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 px-4 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-800 transition"
            >
              Ver horarios y reservar →
            </a>
          </div>

          <div className="border-2 border-yellow-400 bg-yellow-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🚌 National Express Bus - Opción Económica
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Traslado en autobús desde Gatwick al centro de Londres
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: Desde 10€ por trayecto
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 2.5 horas aproximadamente
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Destino: London Victoria Station
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Cancelación gratuita hasta 24 horas antes
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Menores de 15 años: GRATIS con adulto
              </div>
            </div>

            <a
              href="https://gyg.me/giqjZdgf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 px-4 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-800 transition"
            >
              Ver horarios y reservar →
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Desde Aeropuerto de Stansted (STN)</h3>

          <div className="border-2 border-green-400 bg-green-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🔥 🚂 Stansted Express - El Tren Más Rápido
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Conexión rápida a Liverpool Street Station en el centro de Londres
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: Desde 26€
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 47 minutos
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Destino: Liverpool Street Station
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Horario: 05:30-00:30
              </div>
            </div>

            <a
              href="https://gyg.me/YQaBsBwy"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 px-4 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-800 transition"
            >
              Ver horarios y reservar →
            </a>
          </div>

          <div className="border-2 border-yellow-400 bg-yellow-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🚌 National Express Bus - Opción Económica
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Traslado en autobús desde Stansted hasta London Victoria con paradas en destinos clave
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: Desde 19€ por trayecto
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 45 minutos - 2 horas según destino
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Destinos: London Victoria, Golders Green, Baker Street, Liverpool Street, Stratford
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Menores de 15 años: GRATIS
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Asientos de cuero, WiFi, aire acondicionado y tomas de corriente
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Salidas frecuentes día y noche
              </div>
            </div>

            <a
              href="https://gyg.me/cHSEHroI"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 px-4 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-800 transition"
            >
              Ver horarios y reservar →
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Desde Aeropuerto de Luton (LTN)</h3>

          <div className="border-2 border-green-400 bg-green-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🔥 🚂 Luton Airport Express - El Tren Más Rápido
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Combinación de shuttle bus gratuito y tren al centro de Londres
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: 20-23€ (online, compra anticipada)
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 40-50 minutos total
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Destino: St Pancras, Farringdon, Blackfriars
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Shuttle bus gratuito (5 min) + tren
              </div>
            </div>

            <a
              href="https://www.lutonairportexpress.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 px-4 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-800 transition"
            >
              Ver horarios y reservar →
            </a>
          </div>

          <div className="border-2 border-yellow-400 bg-yellow-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🚌 National Express Bus - Opción Económica
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Traslado en autobús desde Luton hasta London Victoria con paradas en destinos clave
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: Desde 15€ por trayecto
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 60-90 minutos
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Destinos: London Victoria, Golders Green, Baker Street
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Menores de 15 años: GRATIS
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Asientos de cuero, WiFi, aire acondicionado y tomas de corriente
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Salidas cada 30 minutos aprox. (24/7)
              </div>
            </div>

            <a
              href="https://gyg.me/JbY1XRHh"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 px-4 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-800 transition"
            >
              Ver horarios y reservar →
            </a>
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: DÓNDE ALOJARSE */}
      <div id="donde-dormir" className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center">
          🏨 Dónde Alojarse en Londres
        </h2>
        <p className="text-gray-600 mb-6">Las mejores zonas y hoteles recomendados para tu estancia</p>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Westminster / Covent Garden - Centro Histórico y Teatral</h3>
                <p className="text-sm text-gray-600">El corazón turístico de Londres: monumentos + teatros + restaurantes</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="hotel-card border-l-4 border-sky-400 bg-sky-100/60">
                <div className="hotel-header">
                  <h3 className="hotel-name">The Z Hotel Strand</h3>
                  <div className="hotel-stars">⭐⭐⭐</div>
                </div>

                <div className="hotel-location">
                  <span className="location-icon">📍</span>
                  <span>Westminster</span>
                </div>

                <p className="hotel-description">
                  <strong>Perfecto si buscas ubicación TOP sin gastar en lujo.</strong> Habitaciones pequeñas pero modernas. A 2 min de Teatro Savoy y 5 min de Trafalgar Square.
                </p>

                <div className="bg-sky-50 border border-sky-200 rounded p-2 mb-3">
                  <p className="text-xs text-sky-700">
                    💡 Las habitaciones son compactas (estilo japonés) pero la ubicación compensa. Ideal para dormir poco y explorar mucho.
                  </p>
                </div>

                <a href="https://booking.tpk.lv/L9dEChO8" target="_blank" rel="noopener noreferrer" className="btn-hotel">
                  <span>Ver disponibilidad y precios</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>

              <div className="hotel-card border-l-4 border-teal-400 bg-teal-100/60">
                <div className="hotel-header">
                  <h3 className="hotel-name">Park Plaza Victoria London</h3>
                  <div className="hotel-stars">⭐⭐⭐⭐</div>
                </div>

                <div className="hotel-location">
                  <span className="location-icon">📍</span>
                  <span>Westminster</span>
                </div>

                <p className="hotel-description">
                  <strong>Opción premium con servicios completos.</strong> Hotel moderno con restaurante italiano y gimnasio. A 2 min de Victoria Station y 5 min de Buckingham Palace.
                </p>

                <div className="bg-sky-50 border border-sky-200 rounded p-2 mb-3">
                  <p className="text-xs text-sky-700">
                    💡 Victoria Station conecta con Heathrow Express y Gatwick Express. Ubicación estratégica para moverse por toda la ciudad.
                  </p>
                </div>

                <a href="https://booking.tpk.lv/nIEfXSJO" target="_blank" rel="noopener noreferrer" className="btn-hotel">
                  <span>Ver disponibilidad y precios</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>

              <div className="hotel-card border-l-4 border-violet-400 bg-violet-100/60">
                <div className="hotel-header">
                  <h3 className="hotel-name">The Resident Victoria</h3>
                  <div className="hotel-stars">⭐⭐⭐⭐</div>
                </div>

                <div className="hotel-location">
                  <span className="location-icon">📍</span>
                  <span>Westminster</span>
                </div>

                <p className="hotel-description">
                  <strong>Ideal para estancias largas o quienes cocinan.</strong> Hotel con pequeña cocina con microondas. A 300m de Buckingham Palace y 1km de Abadía de Westminster.
                </p>

                <div className="bg-sky-50 border border-sky-200 rounded p-2 mb-3">
                  <p className="text-xs text-sky-700">
                    💡 La cocina te permite ahorrar en desayunos y cenas. Supermercados cerca. Perfecto para familias o estancias +3 días.
                  </p>
                </div>

                <a href="https://booking.tpk.lv/3TjF71Re" target="_blank" rel="noopener noreferrer" className="btn-hotel">
                  <span>Ver disponibilidad y precios</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800">
                <strong>✅ Por qué elegir esta zona:</strong> La ubicación TOP para primera visita. A 5-15 min andando de: Big Ben, Abadía de Westminster, Buckingham Palace, Trafalgar Square, London Eye, West End (teatros), National Gallery, Covent Garden Market. Perfecta combinación de monumentos históricos + vida nocturna + restaurantes de clase mundial.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🚇</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">King's Cross / St Pancras</h3>
                <p className="text-sm text-gray-600">Perfecta conexión con todo Londres</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="hotel-card border-l-4 border-orange-400 bg-orange-100/60">
                <div className="hotel-header">
                  <h3 className="hotel-name">Tavistock Hotel</h3>
                  <div className="hotel-stars">⭐⭐⭐</div>
                </div>

                <div className="hotel-location">
                  <span className="location-icon">📍</span>
                  <span>Camden</span>
                </div>

                <p className="hotel-description">
                  <strong>Gran relación calidad-precio en zona cultural.</strong> Hotel céntrico a 7 min de Euston Station y 10 min del Museo Británico. WiFi gratis, recepción 24h y restaurante.
                </p>

                <div className="bg-sky-50 border border-sky-200 rounded p-2 mb-3">
                  <p className="text-xs text-sky-700">
                    💡 Base perfecta para explorar museos gratis (British Museum, National Gallery). Zona segura con muchos restaurantes.
                  </p>
                </div>

                <a href="https://booking.tpk.lv/5NxF9hAu" target="_blank" rel="noopener noreferrer" className="btn-hotel">
                  <span>Ver disponibilidad y precios</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>

              <div className="hotel-card border-l-4 border-pink-400 bg-pink-100/60">
                <div className="hotel-header">
                  <h3 className="hotel-name">Morton Hotel</h3>
                  <div className="hotel-stars">⭐⭐⭐⭐</div>
                </div>

                <div className="hotel-location">
                  <span className="location-icon">📍</span>
                  <span>Camden</span>
                </div>

                <p className="hotel-description">
                  <strong>Tranquilidad en pleno centro cultural.</strong> A 7 min andando del Museo Británico. Metro Russell Square a 2 min. Zona tranquila cerca de Covent Garden.
                </p>

                <div className="bg-sky-50 border border-sky-200 rounded p-2 mb-3">
                  <p className="text-xs text-sky-700">
                    💡 Russell Square es una de las zonas más bonitas de Londres. Barrio residencial, sin ruido nocturno pero con todo cerca.
                  </p>
                </div>

                <a href="https://booking.tpk.lv/syLZxUWd" target="_blank" rel="noopener noreferrer" className="btn-hotel">
                  <span>Ver disponibilidad y precios</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>

              <div className="hotel-card border-l-4 border-amber-400 bg-amber-100/60">
                <div className="hotel-header">
                  <h3 className="hotel-name">Pullman London St Pancras</h3>
                  <div className="hotel-stars">⭐⭐⭐⭐</div>
                </div>

                <div className="hotel-location">
                  <span className="location-icon">📍</span>
                  <span>Camden</span>
                </div>

                <p className="hotel-description">
                  <strong>Conectividad absoluta desde la estación.</strong> En St Pancras Station (Eurostar y 6 líneas metro). A 15 min del Museo Británico y King's Cross.
                </p>

                <div className="bg-sky-50 border border-sky-200 rounded p-2 mb-3">
                  <p className="text-xs text-sky-700">
                    💡 Perfecto para llegadas tarde o salidas temprano. Si vas a París o Bruselas en Eurostar, duermes sobre la estación.
                  </p>
                </div>

                <a href="https://booking.tpk.lv/gaF2pTGa" target="_blank" rel="noopener noreferrer" className="btn-hotel">
                  <span>Ver disponibilidad y precios</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800">
                <strong>✅ Por qué elegir esta zona:</strong> Conexión directa con 6 líneas de metro. A 10 min del centro en metro. Andén 9¾ de Harry Potter en King's Cross.
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
              <div className="hotel-card border-l-4 border-rose-400 bg-rose-100/60">
                <div className="hotel-header">
                  <h3 className="hotel-name">ibis London Blackfriars</h3>
                  <div className="hotel-stars">⭐⭐⭐</div>
                </div>

                <div className="hotel-location">
                  <span className="location-icon">📍</span>
                  <span>Southwark</span>
                </div>

                <p className="hotel-description">
                  <strong>Económico y bien ubicado en la orilla sur.</strong> A 5 min de estación Waterloo. A 10 min andando del Tate Modern, 20 min del London Eye y Big Ben.
                </p>

                <div className="bg-sky-50 border border-sky-200 rounded p-2 mb-3">
                  <p className="text-xs text-sky-700">
                    💡 Waterloo es uno de los mayores hubs de transporte. Desde aquí llegas rápido a todo Londres. Zona con mucha vida local.
                  </p>
                </div>

                <a href="https://booking.tpk.lv/J6DZf62g" target="_blank" rel="noopener noreferrer" className="btn-hotel">
                  <span>Ver disponibilidad y precios</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>

              <div className="hotel-card border-l-4 border-cyan-400 bg-cyan-100/60">
                <div className="hotel-header">
                  <h3 className="hotel-name">citizenM London Bankside</h3>
                  <div className="hotel-stars">⭐⭐⭐⭐</div>
                </div>

                <div className="hotel-location">
                  <span className="location-icon">📍</span>
                  <span>Southwark</span>
                </div>

                <p className="hotel-description">
                  <strong>Hotel diseño y tecnológico en zona trendy.</strong> A 2 min del Tate Modern, 600m del Puente del Milenio. Estación Waterloo a 1.6km, Catedral San Pablo a 10 min.
                </p>

                <div className="bg-sky-50 border border-sky-200 rounded p-2 mb-3">
                  <p className="text-xs text-sky-700">
                    💡 citizenM es famoso por su diseño moderno y tecnología (iPad en habitación). Terraza con vistas espectaculares del Támesis.
                  </p>
                </div>

                <a href="https://booking.tpk.lv/cp2brt0T" target="_blank" rel="noopener noreferrer" className="btn-hotel">
                  <span>Ver disponibilidad y precios</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>

              <div className="hotel-card border-l-4 border-emerald-400 bg-emerald-100/60">
                <div className="hotel-header">
                  <h3 className="hotel-name">H10 London Waterloo</h3>
                  <div className="hotel-stars">⭐⭐⭐⭐</div>
                </div>

                <div className="hotel-location">
                  <span className="location-icon">📍</span>
                  <span>Southwark</span>
                </div>

                <p className="hotel-description">
                  <strong>Cadena española de confianza con buena relación calidad-precio.</strong> Metro Waterloo a 5 min. A 15 min andando del Big Ben y London Eye, 20 min del Shakespeare's Globe.
                </p>

                <div className="bg-sky-50 border border-sky-200 rounded p-2 mb-3">
                  <p className="text-xs text-sky-700">
                    💡 H10 combina estándares españoles con precios competitivos. Terraza rooftop con bar. Perfecto para explorar a pie la zona del Támesis.
                  </p>
                </div>

                <a href="https://booking.tpk.lv/95kgpIh5" target="_blank" rel="noopener noreferrer" className="btn-hotel">
                  <span>Ver disponibilidad y precios</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
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
      <div id="itinerario" className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
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
                <td className="border border-gray-300 px-4 py-3">Big Ben + Abadía de Westminster + St James's Park + Buckingham Palace + Trafalgar Square + Covent Garden + Neal's Yard + London Eye + South Bank nocturno</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 2</td>
                <td className="border border-gray-300 px-4 py-3">Borough Market + Tower Bridge + Torre de Londres + Sky Garden + The Shard + St Paul's Cathedral</td>
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
      <div id="dia-1" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
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
                src="https://images.pexels.com/photos/31147777/pexels-photo-31147777.jpeg"
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
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Precio: 35-41 € por persona</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Duración: 90 minutos, 334 escalones</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>⚠️ Muy difícil conseguir entradas (reservar con meses de antelación)</li>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://tickets.parliament.uk/timeslot/big-ben-tour"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-attraction mb-3"
              >
                <span>Comprar Entradas Big Ben</span>
                <svg
                  className="external-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href="https://www.parliament.uk/visiting/visiting-and-tours/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-attraction"
              >
                <span>Comprar Entradas Westminster</span>
                <svg
                  className="external-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
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
            <h4 className="text-lg font-bold text-gray-900 mb-3">Abadía de Westminster - Donde se Corona a los Reyes</h4>

            <div className="mb-4">
              <img         src="https://images.pexels.com/photos/9825872/pexels-photo-9825872.jpeg"
                alt="Big Ben y Palacio de Westminster junto al Támesis"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
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
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Entrada: 36 € adultos (online)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Incluye: Audioguía en español</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Duración: 1.5-2 horas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>⚠️ No se permiten fotos interior</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-3 mb-4">
              <p className="text-sm text-orange-900">
                <strong>⚠️ Las entradas se agotan</strong> con 2-3 días de antelación en temporada alta. Reserva online para asegurar tu horario y evitar colas de hasta 1 hora.
              </p>
            </div>

            <a
              href="https://gyg.me/S9Iuw1Z2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-attraction"
            >
              <span>Reservar entrada con audioguía en español →</span>
              <svg
                className="external-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
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
             <div className="mb-4">
              <img         src="https://images.pexels.com/photos/16387002/pexels-photo-16387002.jpeg"
                alt="Big Ben y Palacio de Westminster junto al Támesis"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
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
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Duración: 45 minutos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>⚠️ NO hay todos los días</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>¡Completamente GRATUITO!</li>
                </ul>
              </div>
            </div>

            <a
              href="https://www.householddivision.org.uk/changing-the-guard-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 px-4 bg-slate-700 text-white rounded-lg text-sm hover:bg-slate-800 transition"
            >
              Ver calendario del Cambio de Guardia →
            </a>
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
            <div className="mb-4">
              <img         src="https://images.pexels.com/photos/9596429/pexels-photo-9596429.jpeg"
                alt="Big Ben y Palacio de Westminster junto al Támesis"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Considerada el "centro" de Londres, desde aquí se miden todas las distancias oficiales del Reino Unido. Esta plaza monumental fue diseñada en 1830 para conmemorar la victoria del Almirante Nelson en la Batalla de Trafalgar (1805). En la plaza también se encuentra la National Gallery (Galería Nacional), uno de los museos de arte más importantes del mundo.
            </p>

            <h5 className="font-semibold text-gray-900 mb-2">🎨 National Gallery - Galería Nacional:</h5>
            <div className="text-sm text-gray-700 space-y-2 mb-4">
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

        {/* Tour Guiado Opcional */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mr-3"></div>
            Tour Guiado Westminster (Opcional - 14:00h)
          </h3>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              👥 Tour a Pie con Guía Local en Español
            </h4>
            <p className="text-gray-700 mb-4">
              Si quieres profundizar en la historia de Westminster, Buckingham y el Parlamento, este tour de 2.5 horas te cuenta las anécdotas que no aparecen en las audioguías.
            </p>

            <div className="bg-white rounded-lg p-3 border border-indigo-200 mb-4">
              <p className="text-sm text-indigo-800">
                <strong>🎯 Recomendado si:</strong>
              </p>
              <ul className="text-sm text-indigo-700 space-y-1 mt-2 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>Es tu primera vez en Londres</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>Quieres entender la historia británica de forma entretenida</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>Prefieres grupos pequeños (máx. 15 personas)</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Duración: 2.5 horas</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Precio: desde 20€</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">En español</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">Cancelación gratis</span>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-3 mb-4">
              <p className="text-sm text-amber-900">
                <strong>⏰ Nota:</strong> Si haces este tour, reemplaza la visita libre de Trafalgar Square y continúa el itinerario desde Covent Garden (15:30h aprox).
              </p>
            </div>

            <a
              href="https://gyg.me/jZ8VoE9q"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-attraction"
            >
              <span>Ver tour y reservar →</span>
              <svg
                className="external-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
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
            <div className="mb-4">
              <img         src="https://images.pexels.com/photos/16230677/pexels-photo-16230677.jpeg"
                alt="Covent Garden-Mercado Histórico con Encanto"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Desde 1654 este fue el mercado de frutas y verduras más importante de Londres. Hoy es un vibrante centro de tiendas, restaurantes, artistas callejeros y el Apple Market con artesanía británica. A solo 2 minutos andando se esconde Neal's Yard: un pequeño callejón de edificios pintados en colores vibrantes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🏛️ Qué ver en Covent Garden:</h5>
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
                src="https://images.pexels.com/photos/269128/pexels-photo-269128.jpeg"
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
                <h5 className="font-semibold text-gray-900 mb-2">🎫 Información de Entradas:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Precio desde 33€</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Se recomienda comprar online para evitar grandes colas</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mb-4">
              <p className="text-xs text-sky-600 mb-2">💡 Mejor momento: Atardecer, ves la ciudad de día y de noche en la misma vuelta.</p>
            </div>

            <div className="bg-sky-100 border-l-4 border-sky-500 p-3 mb-4">
              <p className="text-sm text-sky-900">
                <strong>💡 Truco de local:</strong> Los slots de 17:00-18:00 son los más solicitados. Si reservas online con 2-3 días de antelación, pagas menos y evitas hasta 90 min de cola.
              </p>
            </div>

            <a
              href="https://gyg.me/wJCBE1BZ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-attraction"
            >
              <span>Reservar entrada sin colas →</span>
              <svg
                className="external-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
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
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/415992/pexels-photo-415992.jpeg"
                alt="London Eye iluminado al atardecer junto al río Támesis"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
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
      <div id="dia-2" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
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
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/17974028/pexels-photo-17974028.jpeg"
                alt="Borough Market-El Paraíso Gastronómico de Londres"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Comenzamos el día en el mercado de comida más antiguo de Londres (1014 d.C.). Hoy es el epicentro de la gastronomía gourmet, orgánica y artesanal de la ciudad.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🧀 Qué Encontrarás:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Más de 100 puestos de comida</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Bread Ahead (donuts 4,70 €)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Ostras frescas desde 1,80 €</li>
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

        {/* Tower Bridge */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-3"></div>
            Tower Bridge (10:00h - 10:45h)
          </h3>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">🌉 El Puente Más Famoso de Londres</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg"
                alt="Tower Bridge - El puente basculante icónico de Londres"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              El puente basculante más fotografiado del mundo (1894). Aunque muchos lo confunden con el London Bridge, Tower Bridge es el icónico puente victoriano con sus dos torres góticas y pasarelas elevadas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Paseo exterior: GRATIS</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Subir torres: 18€</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Suelo de cristal en pasarela alta</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Sala de máquinas victoriana</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">📸 Mejores Fotos:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Desde South Bank</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Atardecer desde el río</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Con Torre de Londres al fondo</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Vista nocturna iluminado</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="https://gyg.me/tHBzdl4W"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-attraction"
              >
                <span>Comprar Entradas Tower Bridge</span>
                <svg
                  className="external-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Torre de Londres */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-red-400 rounded-full mr-3"></div>
            Torre de Londres (11:00h - 13:30h)
          </h3>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">👑 1000 Años de Historia Real</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/248193/pexels-photo-248193.jpeg"
                alt="Torre de Londres - Fortaleza histórica con las Joyas de la Corona"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Fortaleza normanda fundada en 1066 que ha sido palacio real, prisión, arsenal y ahora alberga las legendarias Joyas de la Corona Británica. Uno de los monumentos más importantes de Londres.
            </p>
            <div className="mb-4">
              <h5 className="font-semibold text-gray-900 mb-2">💎 Imprescindibles:</h5>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Crown Jewels: Imperial State Crown con 2.868 diamantes</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>White Tower: La torre normanda original</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Los cuervos de la Torre (leyenda real)</li>
              </ul>
            </div>
            <div className="mb-4">
              <h5 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h5>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span><span>Precio: 40€ online</span></li>
                <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span><span>Horario diciembre: 9:00-16:30 (última entrada 15:00)</span></li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></span><span>Duración: 2.5-3 horas mínimo</span></li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span><span>Audioguía incluida en el precio</span></li>
              </ul>
            </div>
            <div className="mt-4">
              <a
                href="https://gyg.me/ex4u6Ux1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-attraction"
              >
                <span>Comprar Entradas Torre de Londres</span>
                <svg
                  className="external-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Sky Garden + Shard - VISTAS AÉREAS */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-sky-400 rounded-full mr-3"></div>
            Vistas Aéreas (14:00h - 15:30h)
          </h3>

          {/* Sky Garden */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 mb-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">🌿 Sky Garden - El Jardín del Cielo (¡GRATIS!)</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/914838/pexels-photo-914838.jpeg"
                alt="Sky Garden - El Jardín del Cielo"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Después de la Torre, subimos al mirador GRATUITO más alto de Londres. El Sky Garden, en el piso 35-37 del rascacielos "Walkie Talkie", ofrece vistas 360° de la ciudad desde 155 metros de altura, rodeado de jardines tropicales exóticos y terrazas al aire libre. Además, puedes reservar para desayunar, almorzar, cenar o simplemente tomar algo mientras disfrutas de las vistas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Entrada: ¡COMPLETAMENTE GRATIS!</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Altura: 155 metros (piso 35-37)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Reserva: Obligatoria online (2-3 semanas antes)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Horario: 10:00-18:00 (Lun-Vie), 11:00-21:00 (Fin de semana)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🌟 Qué Ver:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Vistas 360° de Londres</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Jardín tropical en el cielo</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Terrazas al aire libre</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Bar y restaurante (opcional)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm mb-4">
              <p className="text-xs text-emerald-600">💡 <strong>Importante:</strong> Sky Garden se llena rápido. Reserva tu slot gratuito con 2-3 semanas de antelación en skygarden.london. Si no hay disponibilidad, ve a The Shard como alternativa de pago.</p>
            </div>

            <a
              href="https://skygarden.london/booking/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">📅</span>
              Reservar Sky Garden
            </a>
          </div>

          {/* The Shard */}
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 mb-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">🏙️ The Shard - El Rascacielos Más Alto de Europa Occidental</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/1676718/pexels-photo-1676718.jpeg"
                alt="The Shard - El Rascacielos Más Alto de Europa Occidental"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Si Sky Garden está lleno o prefieres vistas aún más altas, The Shard te eleva a 310 metros (pisos 68-72). Es el edificio más alto del Reino Unido y ofrece vistas hasta 64 kilómetros en días despejados. Su diseño de cristal piramidal lo hace inconfundible en el skyline londinense.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Entrada: desde 38€</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Altura: 310 metros (pisos 68-72)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Vistas: Hasta 64 km en días claros</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Horario: 10:00-22:00 (última entrada 20:00)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">⭐ Experiencia:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Vistas panorámicas 360°</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Telescopios interactivos</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Bar champagne en piso 72</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Baños en el cielo (¡literalmente!)</li>
                </ul>
              </div>
            </div>

            <a
              href="https://gyg.me/SS9ccWAt"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">🎫</span>
              Reservar The Shard
            </a>
          </div>
        </div>

        {/* St Paul's Cathedral */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-yellow-400 rounded-full mr-3"></div>
            Catedral de San Pablo (15:30h - 17:00h)
          </h3>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">⛪ Catedral de San Pablo - La Obra Maestra Barroca de Londres</h4>
             <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/14674677/pexels-photo-14674677.jpeg"
                alt="Catedral de San Pablo - La Obra Maestra Barroca de Londres"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Bajamos del cielo para entrar en la catedral anglicana más importante de Londres. Su icónica cúpula (111 metros) ha dominado el skyline durante más de 300 años. Aquí se celebró la boda del Príncipe Carlos y Lady Diana en 1981, y los funerales de Churchill y Thatcher.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>Entrada: desde 29€</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Incluye: Audioguía en español</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Duración: 1.5-2 horas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Horario: 08:30-16:30 (Lun-Sáb), Miér 10:00-16:30</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">⭐ Imprescindibles:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Whispering Gallery (257 escalones)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Golden Gallery (528 escalones, vistas top)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Cripta con tumbas de Nelson y Wellington</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Mosaicos victorianos espectaculares</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm mb-3">
              <p className="text-xs text-amber-600">💡 <strong>The Whispering Gallery:</strong> Galería circular donde un susurro en un lado se escucha perfectamente en el lado opuesto (42 metros de distancia). Efecto acústico único en el mundo.</p>
            </div>

            <a
              href="https://gyg.me/BhcGPPuJ"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">⛪</span>
              Reservar San Pablo
            </a>
          </div>
        </div>

        {/* Crucero Támesis */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mr-3"></div>
            Crucero por el Támesis (18:00h)
          </h3>
          <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg font-bold text-gray-900 mb-3">🚤 Crucero de Westminster a Greenwich por el Támesis</h4>
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/19518923/pexels-photo-19518923.jpeg"
                alt="Crucero de Westminster a Greenwich por el Támesis"
                className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
              />
            </div>
            <p className="text-gray-700 mb-4">
              Termina el día navegando por el río que ha sido testigo de 2.000 años de historia londinense. Este crucero te lleva desde Westminster hasta Greenwich, pasando por los monumentos más emblemáticos de Londres. Puedes hacer ida y vuelta o quedarte en Greenwich para explorar este histórico barrio marítimo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Precio: desde 24€ (ida y vuelta)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Salida: Westminster Pier</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Duración: 1-2 horas</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Audio guía en español incluida</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">🌉 Qué Verás:</h5>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Tower Bridge iluminado</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>The Shard y City Hall</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Big Ben y Westminster</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Greenwich: Cutty Sark y Observatorio</li>
                </ul>
              </div>
            </div>

            <a
              href="https://gyg.me/MH2pBZra"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">🎫</span>
              Reservar Crucero Westminster-Greenwich
            </a>
          </div>
        </div>
      </div>

{/* DÍA 3 */}
<div id="dia-3" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
    <span className="bg-gradient-to-br from-emerald-500 to-green-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">3</span>
    DÍA 3: De los Tesoros del Mundo a los Parques Reales
  </h2>

  {/* 1. BRITISH MUSEUM */}
  <div className="mb-8">
    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
      <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-yellow-400 rounded-full mr-3"></div>
      British Museum - Tesoros de la Humanidad (10:00h - 12:30h)
    </h3>
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <h4 className="text-lg font-bold text-gray-900 mb-3">🏛️ El Museo Más Visitado del Reino Unido (¡GRATIS!)</h4>
      <div className="mb-4">
        <img
          src="https://images.pexels.com/photos/32835061/pexels-photo-32835061.jpeg"
          alt="British Museum Great Court"
          className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
        />
      </div>
      <p className="text-gray-700 mb-4">
        El museo más importante de Londres con 8 millones de objetos que abarcan 2 millones de años de historia humana. La entrada es GRATUITA, solo pagas exposiciones temporales especiales.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h5 className="font-semibold text-gray-900 mb-2">⭐ Top 5 Imprescindibles:</h5>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>Piedra de Rosetta (Room 4)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Momias Egipcias (Rooms 62-63)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Esculturas del Partenón (Room 18)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Samurái Japonés (Rooms 92-94)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Great Court (cúpula de cristal)</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900 mb-2">🎫 Info Práctica:</h5>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Entrada: GRATIS</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Horario: 10:00-17:00 (Viernes hasta 20:30)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Duración: 2.5-3 horas</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Metro: Russell Square / Tottenham Court</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
        <p className="text-xs text-amber-600">💡 <strong>Consejo:</strong> Llega a las 10:00 en punto (apertura) para evitar colas. Descarga la app oficial del museo para tour autoguiado gratuito en español.</p>
      </div>
    </div>
  </div>

  {/* 2. PICCADILLY CIRCUS + SHOPPING */}
  <div className="mb-8">
    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
      <div className="w-1 h-6 bg-gradient-to-b from-rose-400 to-pink-400 rounded-full mr-3"></div>
      Piccadilly Circus + Shopping (12:30h - 15:30h)
    </h3>
    <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <h4 className="text-lg font-bold text-gray-900 mb-3">🎭 El "Times Square" de Londres</h4>
      <div className="mb-4">
        <img
          src="https://images.pexels.com/photos/4905523/pexels-photo-4905523.jpeg"
          alt="El Times Square de Londres"
          className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
        />
      </div>

      <p className="text-gray-700 mb-4">
        La plaza más famosa de Londres con pantallas LED gigantes, estatua de Eros, y el epicentro del West End. Desde aquí accedes a las mejores zonas de compras de la ciudad.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h5 className="font-semibold text-gray-900 mb-2">📍 Piccadilly Circus:</h5>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Pantallas LED icónicas (estilo Times Square)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Estatua de Eros (punto de encuentro)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Entrada a Soho y West End</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Metro: Piccadilly Circus</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900 mb-2">🛍️ Zonas de Shopping:</h5>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-start"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Carnaby St: Tiendas vintage/alternativas</span></li>
            <li className="flex items-start"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Oxford St: Selfridges, Primark, H&M</span></li>
            <li className="flex items-start"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Regent St: Hamleys (juguetes), Apple</span></li>
            <li className="flex items-start"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Liberty London: Grandes almacenes de lujo</span></li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300 rounded-lg p-3 mb-3">
        <p className="text-xs text-red-900">
          <strong>🍜 Almuerzo en Chinatown:</strong> A 5 min a pie de Piccadilly. Menús completos desde 10-20€. Recomendado: Bao buns, dim sum, ramen.
        </p>
      </div>

      <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
        <p className="text-xs text-rose-600">💡 <strong>Foto imprescindible:</strong> Cruza hacia la estatua de Eros para foto frontal con las pantallas LED de fondo. Mejor de noche, pero durante el día también es icónica.</p>
      </div>
    </div>
  </div>

  {/* 3. NOTTING HILL */}
  <div className="mb-8">
    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
      <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-rose-400 rounded-full mr-3"></div>
      Notting Hill - Barrio Instagrameable (15:30h - 17:30h)
    </h3>
    <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <h4 className="text-lg font-bold text-gray-900 mb-3">🏡 Casitas de Colores + Portobello Market</h4>
      <div className="mb-4">
        <img
          src="https://images.pexels.com/photos/30683430/pexels-photo-30683430.jpeg"
          alt="Notting Hill casas coloridas"
          className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
        />
      </div>
      <p className="text-gray-700 mb-4">
        El barrio residencial más bonito de Londres. Casas victorianas de colores pastel y el mercadillo de antigüedades más famoso del mundo. Popularizado por la película de Hugh Grant y Julia Roberts.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h5 className="font-semibold text-gray-900 mb-2">🛍️ Portobello Market:</h5>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Mejor día: Sábado (8:00-19:00) completo</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Lunes-Viernes: menos puestos (9:00-18:00)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Antigüedades, vintage, comida, ropa</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Metro: Notting Hill Gate / Ladbroke Grove</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900 mb-2">📸 Fotos Instagram:</h5>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>St Luke's Mews (colores pastel)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Notting Hill Bookshop (de la película)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Lancaster Road (casas azules/rosas)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Llega antes de 11:30 para evitar multitudes</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
        <p className="text-xs text-pink-600">💡 <strong>Consejo:</strong> Si NO es sábado, igualmente merece la pena visitar Notting Hill solo por las casas de colores y el ambiente. El mercado entre semana tiene menos puestos pero es más tranquilo.</p>
      </div>
    </div>
  </div>

  {/* 4. HYDE PARK */}
  <div className="mb-8">
    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
      <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
      Hyde Park - Paseo Real al Atardecer (17:30h - 19:00h)
    </h3>
    <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <h4 className="text-lg font-bold text-gray-900 mb-3">🌳 Los Pulmones Verdes de Londres</h4>
      <div className="mb-4">
        <img
          src="https://images.pexels.com/photos/32911277/pexels-photo-32911277.jpeg"
          alt="Los Pulmones Verdes de Londres"
          className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
        />
      </div>
      <p className="text-gray-700 mb-4">
        Terminamos el viaje con un paseo relajado por el parque real más famoso. 253 hectáreas de naturaleza en pleno centro de Londres. En diciembre, oscurece sobre las 16:00h, así que verás las luces navideñas encendidas.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h5 className="font-semibold text-gray-900 mb-2">⭐ Puntos Imprescindibles:</h5>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Serpentine Lake</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Diana Memorial Fountain</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Estatua Peter Pan</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Metro: Hyde Park Corner / Marble Arch</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900 mb-2">🎄 Winter Wonderland 2025:</h5>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span><strong>14 Nov - 1 Ene 2026</strong></li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Entrada: Gratis off-peak, 5-7.50€ peak</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Horario: 10:00-22:00</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Mercado navideño + pista hielo + atracciones</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-100 to-green-100 border-2 border-red-300 rounded-lg p-3 mb-3">
        <p className="text-xs text-red-900">
          <strong>🎅 Winter Wonderland (14 Nov - 1 Ene):</strong> Si viajas en diciembre, Hyde Park se transforma en un enorme mercado navideño con pista de patinaje, atracciones, circo, Ice Kingdom y mercadillos. Entrada al recinto gratis en horarios off-peak. Las atracciones se pagan aparte (11-18€).
        </p>
      </div>

      <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
        <p className="text-xs text-green-600">💡 <strong>Reserva Winter Wonderland:</strong> Si quieres entrar, RESERVA online con antelación en hydeparkwinterwonderland.com. Los horarios peak (tardes/fines de semana) se agotan rápido.</p>
      </div>
    </div>
  </div>
</div>

      {/* MÁS LUGARES QUE VER */}
      <div id="lugares-imprescindibles" className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎯 Más Lugares Imprescindibles en Londres</h2>
        <p className="text-gray-700 mb-6">Si tienes más días o quieres profundizar en la ciudad, estos lugares también merecen tu visita:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-purple-800 mb-3">⚡ Desde Londres: Harry Potter Warner Bros Studio Tour</h3>
            <p className="text-sm text-gray-700 mb-3">Visita los estudios donde se filmaron las películas de Harry Potter. Una experiencia mágica imprescindible para los fans.</p>
            <div className="text-xs text-gray-600 mb-3">
              <p><strong>Precio:</strong> Desde 96 €, según promociones</p>
              <p><strong>Duración:</strong> Tour de medio día</p>
            </div>
            <a
              href="https://gyg.me/EpCNOHAg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
            >
              Ver tour y reservar
            </a>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🏰 Castillo de Windsor</h3>
            <p className="text-sm text-gray-700 mb-2">El castillo habitado más antiguo del mundo. Residencia oficial de la Reina.</p>
            <div className="text-xs text-gray-600">
              <p><strong>Precio:</strong> 33-35 € | <strong>Duración:</strong> Día completo</p>
              <p><strong>Cómo llegar:</strong> Tren desde Paddington (50 min)</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🎭 Teatro del West End</h3>
            <p className="text-sm text-gray-700 mb-2">El equivalente británico de Broadway. Más de 40 teatros con musicales y obras.</p>
            <div className="text-xs text-gray-600">
              <p><strong>Precio:</strong> 29-176 € | <strong>Duración:</strong> 2-3 horas</p>
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
              <p><strong>Precio:</strong> 21-23 € | <strong>Duración:</strong> 3-4 horas</p>
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
              <p><strong>Tour:</strong> 28 € | <strong>Duración:</strong> 75 minutos</p>
              <p>Incluye vestuarios, túnel, Copa FA</p>
            </div>
          </div>
        </div>
      </div>

      {/* HERRAMIENTAS DE VIAJE */}
      <div id="recomendaciones" className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          💳 Tarjeta y Seguro de Viaje
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
      <div id="gastronomia" className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 border border-orange-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">🍽️ Guía Gastronómica de Londres</h2>
        <p className="text-gray-600 mb-6">Londres es una de las capitales gastronómicas del mundo. Aquí encontrarás de todo:</p>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-orange-800 mb-4">🇬🇧 Comida Británica Tradicional</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Fish & Chips</h4>
                <p className="text-sm text-gray-700 mb-2">El plato nacional británico. Pescado rebozado + patatas fritas.</p>
                <p className="text-xs text-orange-700"><strong>Dónde:</strong> Poppies (Spitalfields) | <strong>Precio:</strong> 14-19 €</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Sunday Roast</h4>
                <p className="text-sm text-gray-700 mb-2">Carne asada + Yorkshire pudding + verduras + gravy. Solo domingos.</p>
                <p className="text-xs text-orange-700"><strong>Dónde:</strong> The Harwood Arms | <strong>Precio:</strong> 23-35 €</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Afternoon Tea</h4>
                <p className="text-sm text-gray-700 mb-2">Té + sándwiches + scones + pasteles. Experiencia muy británica.</p>
                <p className="text-xs text-orange-700"><strong>Dónde:</strong> Sketch | <strong>Precio:</strong> 41-88 €</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Pub Food</h4>
                <p className="text-sm text-gray-700 mb-2">Bangers & mash, pies, ploughman's lunch en ambiente de pub.</p>
                <p className="text-xs text-orange-700"><strong>Dónde:</strong> The Churchill Arms | <strong>Precio:</strong> 14-21 €</p>
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
                <p className="text-xs text-red-700"><strong>9-18 €</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🍜 China</h4>
                <p className="text-xs text-gray-700">Chinatown: Dim sum, pato pequinés, hot pot auténtico.</p>
                <p className="text-xs text-red-700"><strong>12-29 €</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🍕 Italia</h4>
                <p className="text-xs text-gray-700">Soho: Pizzas napolitanas y pasta fresca.</p>
                <p className="text-xs text-red-700"><strong>14-23 €</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🌮 México</h4>
                <p className="text-xs text-gray-700">Wahaca, Chilango: Tacos y burritos auténticos.</p>
                <p className="text-xs text-red-700"><strong>9-18 €</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🍱 Japón</h4>
                <p className="text-xs text-gray-700">Ramen, sushi, katsu curry de alta calidad.</p>
                <p className="text-xs text-red-700"><strong>14-35 €</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🥙 Medio Oriente</h4>
                <p className="text-xs text-gray-700">Edgware Road: Shawarma, falafel, mezze libanés.</p>
                <p className="text-xs text-red-700"><strong>7-14 €</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-pink-800 mb-4">🏪 Mercados Gastronómicos</h3>
            <div className="space-y-3">
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Borough Market</h4>
                <p className="text-sm text-gray-700">El mercado gourmet por excelencia. Ostras, quesos, panes artesanales.</p>
                <p className="text-xs text-gray-600">Lun-Jue 10:00-17:00 | Sáb 8:00-17:00 | Presupuesto: 12-23 €</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Camden Market</h4>
                <p className="text-sm text-gray-700">Street food internacional. Thai, indio, mexicano, vegano.</p>
                <p className="text-xs text-gray-600">Todos los días 10:00-18:00 | Presupuesto: 9-18 €</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Old Spitalfields Market</h4>
                <p className="text-sm text-gray-700">Mix de comida y moda. Los jueves mercado de antigüedades.</p>
                <p className="text-xs text-gray-600">Lun-Vie 10:00-20:00 | Presupuesto: 9-18 €</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-orange-300 rounded-xl p-4">
            <h4 className="font-bold text-gray-900 mb-2">💡 Consejos para Comer Barato en Londres:</h4>
            <ul className="text-sm text-gray-800 space-y-1">
              <li>• Pret A Manger: Sándwiches 4,70-7 € (calidad-precio excelente)</li>
              <li>• Greggs: Bakery británica económica (salchichas rolls 2,35 €)</li>
              <li>• Tesco Meal Deal: Sándwich + bebida + snack = 4,60 €</li>
              <li>• Mercados: Siempre más barato que restaurantes</li>
              <li>• Lunch deals: Muchos restaurantes ofrecen menú 12:00-15:00 (50% off)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* TRANSPORTE */}
      <div id="transporte" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
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
                <li>• Tope: 10 €/día</li>
                <li>• Autobús: 2,05 €/viaje</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-800">
              <strong>💡 Truco:</strong> Usa autobuses cuando puedas (6,15 € día ilimitado vs 10 € metro). Evita hora pico (6:30-9:30, 16:00-19:00).
            </p>
          </div>
        </div>
      </div>

      {/* CONSEJOS FINALES */}
      <div id="consejos" className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-6 sm:p-8 shadow-md mb-8">
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
              <li>• <strong>SIM:</strong> EE, Vodafone, Three (desde 12 €/mes con datos ilimitados)</li>
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
      <div id="presupuestos" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">💰 Presupuestos Detallados - Noviembre 2025</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-green-800 mb-3">🎒 Mochilero</h3>
            <div className="text-2xl font-bold text-green-600 mb-2">70-100 €/día</div>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Hostel: 29-41 €</li>
              <li>• Comida: 23-29 €</li>
              <li>• Transporte: 6-9 €</li>
              <li>• Atracciones: 14-20 €</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-blue-800 mb-3">🏨 Estándar</h3>
            <div className="text-2xl font-bold text-blue-600 mb-2">140-187 €/día</div>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Hotel 3*: 82-111 €</li>
              <li>• Comida: 41-53 €</li>
              <li>• Transporte: 9-12 €</li>
              <li>• Atracciones: 18-35 €</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-purple-800 mb-3">👑 Lujo</h3>
            <div className="text-2xl font-bold text-purple-600 mb-2">293-470+ €/día</div>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• Hotel 5*: 176-293 €</li>
              <li>• Comida: 94-152 €</li>
              <li>• Transporte: 23-47 €</li>
              <li>• Atracciones: 47-94 €</li>
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
    </>
  );
};

export default LondonGuideArticle;
