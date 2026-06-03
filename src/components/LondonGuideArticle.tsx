import React, { useState, useRef } from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import StickyTableOfContents from './StickyTableOfContents';

interface LondonGuideArticleProps {
  onBack: () => void;
}

const LondonGuideArticle: React.FC<LondonGuideArticleProps> = ({ onBack }) => {
  const [expandedAirport, setExpandedAirport] = useState<string | null>(null);
  const [expandedZone, setExpandedZone] = useState<string | null>(null);

  const westminsterRef = useRef<HTMLDivElement>(null);
  const kingsCrossRef = useRef<HTMLDivElement>(null);
  const southwarkRef = useRef<HTMLDivElement>(null);

  const toggleAirport = (airportId: string) => {
    setExpandedAirport(expandedAirport === airportId ? null : airportId);
  };

  const toggleZone = (zoneId: string) => {
    const newExpandedZone = expandedZone === zoneId ? null : zoneId;
    setExpandedZone(newExpandedZone);

    if (newExpandedZone === zoneId) {
      setTimeout(() => {
        const refMap: { [key: string]: React.RefObject<HTMLDivElement> } = {
          'westminster': westminsterRef,
          'kings-cross': kingsCrossRef,
          'southwark': southwarkRef
        };

        const ref = refMap[zoneId];
        if (ref?.current) {
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };
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

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <p className="text-sm text-blue-900">
            <strong>Haz clic en tu aeropuerto de llegada</strong> para ver todas las opciones de transporte disponibles con precios actualizados.
          </p>
        </div>

        {/* Heathrow Accordion Button */}
        <button
          onClick={() => toggleAirport('heathrow')}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">✈️</span>
            <span className="font-bold text-lg">Aeropuerto de Heathrow (LHR)</span>
          </div>
          {expandedAirport === 'heathrow' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </button>

        {/* Heathrow Content */}
        {expandedAirport === 'heathrow' && (
          <div className="mb-8 animate-fadeIn">
            <h3 className="text-lg font-bold text-gray-900 mb-4 mt-4">📍 Desde Aeropuerto de Heathrow (LHR)</h3>

          <div className="border-2 border-green-400 bg-green-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🔥 🚂 Heathrow Express - El Tren Más Rápido
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Conexión directa a London Paddington sin paradas
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
              <p className="text-sm text-blue-800">
                <strong>💡 ¿Cuándo vale la pena pagar 29€?</strong> Si llegas cansado de un vuelo largo, con equipaje pesado, o tu hotel está en zona Paddington/Hyde Park/Notting Hill. Ahorras 35 minutos vs el metro y llegas descansado.
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
              className="btn-hotel"
            >
              <span>Ver horarios y reservar</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <div className="border-2 border-yellow-400 bg-yellow-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🚇 Piccadilly Line (Metro) - Opción Más Económica
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Opción económica y directa al centro de Londres
            </p>

            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-3">
              <p className="text-sm text-yellow-800">
                <strong>💡 Elige el metro si:</strong> Viajas con mochila ligera, no tienes prisa, y tu hotel está cerca de alguna parada de Piccadilly Line (Covent Garden, Leicester Square, King's Cross). Ahorras 22€ vs el tren expreso.
              </p>
            </div>

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
              <p className="text-sm text-orange-900 mb-2">
                <strong>🎯 Vale la pena si viajas en grupo:</strong>
              </p>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>✓ 2 personas: 46€/persona (vs 29€ Heathrow Express)</li>
                <li>✓ 3 personas: 32€/persona</li>
                <li>✓ 4 personas: 28€/persona</li>
                <li>✓ También ideal si llegas de madrugada o con mucho equipaje</li>
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
              className="btn-hotel"
            >
              <span>Reservar transfer con precio fijo</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
          </div>
        )}

        {/* Gatwick Accordion Button */}
        <button
          onClick={() => toggleAirport('gatwick')}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">✈️</span>
            <span className="font-bold text-lg">Aeropuerto de Gatwick (LGW)</span>
          </div>
          {expandedAirport === 'gatwick' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </button>

        {/* Gatwick Content */}
        {expandedAirport === 'gatwick' && (
          <div className="mb-8 animate-fadeIn">
            <h3 className="text-lg font-bold text-gray-900 mb-4 mt-4">📍 Desde Aeropuerto de Gatwick (LGW)</h3>

          <div className="border-2 border-green-400 bg-green-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🔥 🚂 Gatwick Express - El Tren Más Rápido
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Conexión directa sin paradas a London Victoria Station
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
              <p className="text-sm text-blue-800">
                <strong>¿Cuándo vale la pena pagar 23€?</strong> Si tu hotel está en zona Victoria/Westminster o llegas cansado y quieres llegar rápido. Ahorras 2 horas vs el bus y llegas descansado. Perfecto si llegas de noche o con equipaje pesado.
              </p>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: Desde 23€ (online, compra anticipada)
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 30 minutos sin paradas
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Horario: 05:00-00:00 (cada 15 min)
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
              href="https://ticket.gatwickexpress.com/search"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Ver horarios y reservar</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <div className="border-2 border-yellow-400 bg-yellow-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🚌 National Express Bus - Opción Más Económica
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Traslado en autobús desde Gatwick al centro de Londres
            </p>

            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-3">
              <p className="text-sm text-yellow-800">
                <strong>Elige el bus si:</strong> Tu prioridad es ahorrar dinero (12€ vs 23€ del tren). Ideal si no tienes prisa, llegas de día, y tu hotel está cerca de Victoria Station. Eso sí, tarda el doble que el tren (90 min vs 30 min).
              </p>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: Desde 12€ por trayecto
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 90 minutos aproximadamente
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
                Económico pero más lento que el tren
              </div>
            </div>

            <a
              href="https://gyg.me/giqjZdgf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Reservar bus Gatwick-Victoria</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <div className="border-2 border-orange-400 bg-orange-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🚖 Traslado Privado - Máximo Confort
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Servicio puerta a puerta desde el aeropuerto a tu hotel
            </p>

            <div className="bg-orange-100 border-l-4 border-orange-500 p-3 mb-3">
              <p className="text-sm text-orange-900 mb-2">
                <strong>Vale la pena si viajas en grupo:</strong>
              </p>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>✓ 2 personas: 61€/persona (vs 23€ Gatwick Express)</li>
                <li>✓ 3 personas: 41€/persona</li>
                <li>✓ 4 personas: 34€/persona</li>
                <li>✓ También ideal si llegas de madrugada/noche o con mucho equipaje</li>
              </ul>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: Desde 58€ (tarifa fija para hasta 4 personas)
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 60-90 min según tráfico
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
                Conductor profesional esperándote con cartel
              </div>
            </div>

            <a
              href="https://gyg.me/TklPCVj6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Reservar transfer con precio fijo</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
          </div>
        )}

        {/* Stansted Accordion Button */}
        <button
          onClick={() => toggleAirport('stansted')}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">✈️</span>
            <span className="font-bold text-lg">Aeropuerto de Stansted (STN)</span>
          </div>
          {expandedAirport === 'stansted' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </button>

        {/* Stansted Content */}
        {expandedAirport === 'stansted' && (
          <div className="mb-8 animate-fadeIn">
            <h3 className="text-lg font-bold text-gray-900 mb-4 mt-4">📍 Desde Aeropuerto de Stansted (STN)</h3>

          <div className="border-2 border-green-400 bg-green-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🔥 🚂 Stansted Express - El Tren Más Rápido
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Conexión directa sin paradas a London Liverpool Street
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
              <p className="text-sm text-blue-800">
                <strong>¿Cuándo vale la pena pagar 26€?</strong> Si tu hotel está en zona City/Shoreditch o necesitas llegar rápido al centro. Ahorras 90 minutos vs el bus. Perfecto para vuelos que llegan temprano o tarde cuando no quieres perder tiempo.
              </p>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: Desde 26€ (online, compra anticipada)
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 47 minutos sin paradas
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Horario: 05:30-00:30 (cada 15 min)
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                WiFi gratis, espacio equipaje, enchufes
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Destino: Liverpool Street (conexión con metro)
              </div>
            </div>

            <a
              href="https://gyg.me/YQaBsBwy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Ver horarios y reservar</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <div className="border-2 border-yellow-400 bg-yellow-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🚌 National Express Bus - Opción Más Económica
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Traslado en autobús desde Stansted al centro de Londres
            </p>

            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-3">
              <p className="text-sm text-yellow-800">
                <strong>Elige el bus si:</strong> Vuelas con Ryanair/easyJet y quieres ahorrar (19€ vs 26€ del tren). Ideal si llegas de día, no tienes prisa, y tu hotel está cerca de Victoria o Liverpool Street. Tarda casi el doble (90 min vs 47 min).
              </p>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: Desde 19€ por trayecto
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 90 minutos aproximadamente
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Destino: Victoria o Liverpool Street
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Salidas cada 15-20 minutos
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                La opción más económica disponible
              </div>
            </div>

            <a
              href="https://gyg.me/cHSEHroI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Reservar bus Stansted-Londres</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
          </div>
        )}

        {/* Luton Accordion Button */}
        <button
          onClick={() => toggleAirport('luton')}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">✈️</span>
            <span className="font-bold text-lg">Aeropuerto de Luton (LTN)</span>
          </div>
          {expandedAirport === 'luton' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </button>

        {/* Luton Content */}
        {expandedAirport === 'luton' && (
          <div className="mb-8 animate-fadeIn">
            <h3 className="text-lg font-bold text-gray-900 mb-4 mt-4">📍 Desde Aeropuerto de Luton (LTN)</h3>

          <div className="border-2 border-green-400 bg-green-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🔥 🚂 Luton Airport Express + Tren - Opción Rápida
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Bus shuttle al Luton Airport Parkway + tren a London St Pancras
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
              <p className="text-sm text-blue-800">
                <strong>¿Cuándo vale la pena?</strong> Si tu hotel está en zona King's Cross/St Pancras o necesitas conexión rápida con Eurostar. Es la opción más rápida (55 min total) pero requiere cambio de bus a tren. Ideal si viajas ligero.
              </p>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: Bus (3€) + Tren (desde 17€) = 20€ total
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 55 minutos (10 min bus + 45 min tren)
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Horario tren: 05:00-00:00 (cada 10-15 min)
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Destino: St Pancras International
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-yellow-500 mr-2">⚠</span>
                Requiere transbordo bus → tren
              </div>
            </div>

            <a
              href="https://www.thetrainline.com/es/aeropuertos/reino-unido/londres-luton?phcode=1011l44887.&utm_campaign=viviendodeviaje&utm_medium=affiliate&utm_source=network&cm=0a1e.1011l44887&phcam=1100l229&~campaign_id=1100l229&~click_id=1100lBMGj2me&pztracking=true&app_clickref=1100lBMGj2me"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-hotel"
            >
              <span>Ver horarios de tren</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <div className="border-2 border-yellow-400 bg-yellow-50 rounded-xl p-4 mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              🚌 National Express Bus - Sin Transbordos
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Traslado directo en autobús desde Luton al centro de Londres
            </p>

            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-3">
              <p className="text-sm text-yellow-800">
                <strong>Elige el bus si:</strong> Prefieres no hacer transbordos (directo desde terminal hasta Victoria) o viajas con equipaje pesado. Es la opción más cómoda sin cambios, aunque tarda un poco más (90 min vs 55 min). Precio similar al tren.
              </p>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Precio: Desde 16€ por trayecto
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Duración: 90 minutos aproximadamente
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Destino: Victoria Station (directo)
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Salidas cada 20-30 minutos
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Sin transbordos, más cómodo con equipaje
              </div>
            </div>

            <a
              href="https://gyg.me/JbY1XRHh"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-hotel"
            >
              <span>Reservar bus Luton-Victoria</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
          </div>
        )}
      </div>

      {/* SECCIÓN 3: DÓNDE ALOJARSE */}
      <div id="donde-dormir" className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center">
          🏨 Dónde Alojarse en Londres
        </h2>
        <p className="text-gray-600 mb-6">Las mejores zonas y hoteles recomendados para tu estancia</p>

        <div className="space-y-6">
          <div ref={westminsterRef} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">Westminster / Covent Garden - Centro Histórico y Teatral</h3>
                <p className="text-sm text-gray-600 mb-2">El corazón turístico de Londres: monumentos + teatros + restaurantes</p>
                <p className="font-semibold text-lg text-blue-600">
                  💰 Precio medio: 90-180€/noche
                </p>
              </div>
            </div>

            <button
              onClick={() => toggleZone('westminster')}
              className="w-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏨</span>
                <div className="text-left">
                  <span className="font-bold text-lg block">
                    {expandedZone === 'westminster' ? 'Ocultar hoteles' : 'Ver 3 hoteles recomendados'}
                  </span>
                  <span className="text-sm text-sky-100 block">
                    Hoteles en el corazón de Londres
                  </span>
                </div>
              </div>
              {expandedZone === 'westminster' ?
                <ChevronUp className="w-6 h-6 group-hover:transform group-hover:-translate-y-1 transition-transform" /> :
                <ChevronDown className="w-6 h-6 group-hover:transform group-hover:translate-y-1 transition-transform" />
              }
            </button>

            {expandedZone === 'westminster' && (
              <div className="animate-fadeIn border-t border-gray-200 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
              <div className="bg-white rounded-2xl p-5 border-2 border-sky-200 flex flex-col shadow-lg hover:shadow-xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">The Z Hotel Strand</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed"><strong>Ubicación inmejorable en pleno corazón de Londres.</strong> Hotel moderno con habitaciones compactas pero inteligentemente diseñadas, equipadas con aire acondicionado, TV satélite y baño privado completo. Incluye bar, WiFi gratis y desayuno buffet con opciones sin gluten.</p>
                  <div className="bg-sky-50 border-l-4 border-sky-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-sky-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Teatro Savoy (2 min), Teatro Lyceum (4 min), Trafalgar Square (5 min), Ópera Real y Galería Nacional a poca distancia. Metro Charing Cross a 400m.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/L9dEChO8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
                  >
                    <span className="mr-2">Ver disponibilidad</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border-2 border-cyan-200 flex flex-col shadow-lg hover:shadow-xl hover:border-cyan-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Park Plaza Victoria London</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed"><strong>Hotel moderno ideal para familias y viajeros que buscan comodidad.</strong> Habitaciones amplias con aire acondicionado, TV de pantalla plana y WiFi gratis. Incluye restaurante italiano TOZI, bar de cócteles elegante y Leisure Club completo con gimnasio, sauna y sala de vapor.</p>
                  <div className="bg-cyan-50 border-l-4 border-cyan-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-cyan-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Victoria Station (2 min), Palacio de Buckingham (5 min), Westminster Abbey y Big Ben (1.6 km), Parliament Square. Ubicación perfecta para el cambio de guardia.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/nIEfXSJO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
                  >
                    <span className="mr-2">Ver disponibilidad</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border-2 border-blue-200 flex flex-col shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">The Resident Victoria</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed"><strong>Perfecto para estancias largas o viajeros independientes.</strong> Habitaciones con WiFi gratis y cocina pequeña completamente equipada (nevera, microondas, fregadero con filtro Brita, cafetera Nespresso). Incluye escritorio, caja fuerte para portátil y recepción 24h.</p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-blue-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Palacio de Buckingham (300m), Parque St James (700m), Westminster Abbey (1 km). Aeropuerto London City a 13 km. Ideal para ahorrar en comidas preparándote algo rápido.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/3TjF71Re"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
                  >
                    <span className="mr-2">Ver disponibilidad</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                  <p className="text-sm text-green-800">
                    <strong>✅ Por qué elegir esta zona:</strong> La ubicación TOP para primera visita. A 5-15 min andando de: Big Ben, Abadía de Westminster, Buckingham Palace, Trafalgar Square, London Eye, West End (teatros), National Gallery, Covent Garden Market. Perfecta combinación de monumentos históricos + vida nocturna + restaurantes de clase mundial.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div ref={kingsCrossRef} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🎨</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">Camden & King's Cross - Alternativo y Perfectamente Conectado</h3>
                <p className="text-sm text-gray-600 mb-2">Ambiente auténtico de Camden + conexión internacional insuperable</p>
                <p className="font-semibold text-lg text-blue-600">
                  💰 Precio medio: 80-150€/noche
                </p>
              </div>
            </div>

            <button
              onClick={() => toggleZone('kings-cross')}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏨</span>
                <div className="text-left">
                  <span className="font-bold text-lg block">
                    {expandedZone === 'kings-cross' ? 'Ocultar hoteles' : 'Ver 3 hoteles recomendados'}
                  </span>
                  <span className="text-sm text-red-100 block">
                    Hoteles en Camden & King's Cross
                  </span>
                </div>
              </div>
              {expandedZone === 'kings-cross' ?
                <ChevronUp className="w-6 h-6 group-hover:transform group-hover:-translate-y-1 transition-transform" /> :
                <ChevronDown className="w-6 h-6 group-hover:transform group-hover:translate-y-1 transition-transform" />
              }
            </button>

            {expandedZone === 'kings-cross' && (
              <div className="animate-fadeIn border-t border-gray-200 pt-4">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
              <div className="bg-white rounded-2xl p-5 border-2 border-sky-200 flex flex-col shadow-lg hover:shadow-xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Tavistock Hotel</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed"><strong>Hotel completo con terraza, restaurante y bar.</strong> WiFi gratis, recepción 24h y conserjería. Habitaciones con escritorio, TV, caja fuerte, hervidor y baño privado. Algunas con vistas al jardín. Desayuno buffet, continental o inglés/irlandés disponible.</p>
                  <div className="bg-sky-50 border-l-4 border-sky-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-sky-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Euston Station (7 min), Museo Británico (10 min), King's Cross St. Pancras (Eurostar), Ópera Real. Aeropuerto London City a 14 km. Perfecto si llegas/sales de Stansted/Luton.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/5NxF9hAu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
                  >
                    <span className="mr-2">Ver disponibilidad</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border-2 border-cyan-200 flex flex-col shadow-lg hover:shadow-xl hover:border-cyan-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Morton Hotel</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed"><strong>Hotel con restaurante, bar y conserjería.</strong> WiFi gratis en todo el alojamiento. Habitaciones con aire acondicionado, escritorio, cafetera, nevera, caja fuerte, TV y baño privado con bañera o ducha. Recepción 24h (personal habla inglés y ruso). Parking privado disponible por un suplemento.</p>
                  <div className="bg-cyan-50 border-l-4 border-cyan-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-cyan-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Museo Británico (7 min), Euston Station (10 min), Ópera Real, Teatro Dominion, Tottenham Court Road. Aeropuerto London City a 14 km. A 1,9 km del centro.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/syLZxUWd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
                  >
                    <span className="mr-2">Ver disponibilidad</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border-2 border-blue-200 flex flex-col shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Pullman London St Pancras</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed"><strong>Hotel premium junto a la Biblioteca Británica.</strong> WiFi gratuita, centro de fitness y servicio de habitaciones 24h. Cuenta con el GA KingsX - Bar & Kitchen y 17 salas de reuniones. Ubicación ideal para conexiones internacionales.</p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-blue-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Terminal Eurostar (3 min), St Pancras (10 min), Kings Cross y Euston (5 min). Museo Británico, Covent Garden, Oxford Street, West End y The City a 10 min en metro. Perfecto para Eurostar.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/gaF2pTGa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
                  >
                    <span className="mr-2">Ver disponibilidad</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                  <p className="text-sm text-green-800">
                    <strong>✅ Por qué elegir esta zona:</strong> Combinas lo MEJOR de dos mundos: el ambiente auténtico y alternativo de Camden (mercados, música, street art) con la conexión de transporte INSUPERABLE de King's Cross/St Pancras. Tienes 6 líneas de metro, tren directo a Stansted/Luton, Eurostar a París/Bruselas, y estás a 15 min del British Museum. También puedes visitar el Andén 9¾ de Harry Potter. Zona más "local" y económica que Westminster, perfecta si buscas autenticidad sin renunciar a comodidad.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div ref={southwarkRef} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🎨</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">Southwark / South Bank - Zona Cultural y Moderna</h3>
                <p className="text-sm text-gray-600 mb-2">Arte, gastronomía y vistas al Támesis</p>
                <p className="font-semibold text-lg text-blue-600">
                  💰 Precio medio: 90-200€/noche
                </p>
              </div>
            </div>

            <button
              onClick={() => toggleZone('southwark')}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏨</span>
                <div className="text-left">
                  <span className="font-bold text-lg block">
                    {expandedZone === 'southwark' ? 'Ocultar hoteles' : 'Ver 3 hoteles recomendados'}
                  </span>
                  <span className="text-sm text-purple-100 block">
                    Hoteles en Southwark / South Bank
                  </span>
                </div>
              </div>
              {expandedZone === 'southwark' ?
                <ChevronUp className="w-6 h-6 group-hover:transform group-hover:-translate-y-1 transition-transform" /> :
                <ChevronDown className="w-6 h-6 group-hover:transform group-hover:translate-y-1 transition-transform" />
              }
            </button>

            {expandedZone === 'southwark' && (
              <div className="animate-fadeIn border-t border-gray-200 pt-4">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
              <div className="bg-white rounded-2xl p-5 border-2 border-sky-200 flex flex-col shadow-lg hover:shadow-xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">ibis London Blackfriars</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed"><strong>Hotel moderno con servicio completo 24 horas.</strong> Habitaciones con WiFi gratuita, TV de pantalla plana, baño privado y vistas a la ciudad. Incluyen utensilios de planchado y artículos de aseo gratuitos. Dispone de recepción 24 horas y menú de comida y bebida disponible todo el día. El restaurante Charlie's Corner ofrece bar con cerveza artesanal, café y aperitivos en ambiente moderno con buena música.</p>
                  <div className="bg-sky-50 border-l-4 border-sky-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-sky-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Estación Waterloo (5 min), Tate Modern (10 min), London Eye y Big Ben (20 min andando). Desde Waterloo tomas línea Jubilee y en 10 min llegas a Bond Street para Oxford Street. Aeropuerto London City a 13 km.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/J6DZf62g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
                  >
                    <span className="mr-2">Ver disponibilidad</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border-2 border-cyan-200 flex flex-col shadow-lg hover:shadow-xl hover:border-cyan-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">citizenM London Bankside</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed"><strong>Hotel moderno y elegante con tecnología de última generación.</strong> WiFi alta velocidad gratis en todas las instalaciones. Habitaciones con iPad control para iluminación ambiental, persianas, temperatura y TV. Chromecast gratuito para Netflix, Prime, Disney+. Baño privado con ducha efecto lluvia. Recepción 24h, zonas de estar estilo moderno con ordenadores iMac gratis e impresión gratuita. CanteenM 24h con bocadillos y platos calientes. Bar con cerveza de barril, champán y cócteles. Desayuno buffet disponible.</p>
                  <div className="bg-cyan-50 border-l-4 border-cyan-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-cyan-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Tate Modern (2 min), Borough Market, Puente del Milenio (600m), Puente de Londres (500m), Catedral San Pablo (10 min), Estación Waterloo (1.6 km). Aeropuerto London City a 12 km.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/cp2brt0T"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
                  >
                    <span className="mr-2">Ver disponibilidad</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border-2 border-blue-200 flex flex-col shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">H10 London Waterloo</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed"><strong>Edificio elegante de nueva construcción con restaurante de vanguardia.</strong> WiFi gratis. Habitaciones con decoración elegante, ventanales con vistas al barrio de Lambeth, aire acondicionado, TV LCD, caja fuerte para portátil y minibar. Restaurante Three O Two con cocina mediterránea. Bar Circus con vinos selectos y aperitivos ligeros. Desayuno buffet diario con platos calientes y continentales.</p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-blue-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Estación de metro Waterloo (5 min), Parliament Square y Big Ben (15 min), London Eye (15 min), Shakespeare's Globe (20 min).
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/95kgpIh5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
                  >
                    <span className="mr-2">Ver disponibilidad</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                  <p className="text-sm text-green-800">
                    <strong>✅ Por qué elegir esta zona:</strong> South Bank es el corazón cultural moderno de Londres. Tienes en 10 min andando: Tate Modern (arte contemporáneo gratis), Shakespeare's Globe, Borough Market (comida top), London Eye, Tower Bridge. Zona con los mejores restaurantes y pubs junto al río. Vistas increíbles del skyline. Perfecta si buscas ambiente más alternativo y gastronómico que Westminster.
                  </p>
                </div>
              </div>
            )}
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
                className="btn-hotel mb-3"
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
                className="btn-hotel"
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

            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-4">
              <p className="text-sm text-orange-900 mb-2">
                <strong>⚠️ Las entradas se agotan con facilidad.</strong>
              </p>
              <p className="text-sm text-orange-800">
                Si compras en taquilla, puedes esperar colas de hasta 90 minutos. Reservando online aseguras tu horario y entras directamente.
              </p>
            </div>

            <a
              href="https://gyg.me/S9Iuw1Z2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Reservar entrada con audioguía en español</span>
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
              className="btn-hotel"
            >
              <span>Ver calendario del Cambio de Guardia</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2">
              <p className="text-sm text-amber-800">
                <strong>⚠️ En invierno:</strong> El cambio de guardia es menos frecuente (lunes, miércoles, viernes y domingos). Siempre verifica en el calendario oficial antes de tu visita.
              </p>
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

            <div className="bg-sky-100 border-l-4 border-sky-500 p-4 mb-4">
              <p className="text-sm text-sky-900 mb-2">
                <strong>⚠️ Los slots de atardecer (17:00-18:30) se agotan rápido</strong>
              </p>
              <p className="text-sm text-sky-800">
                Si compras en taquilla, puedes esperar hasta 90 minutos de cola + no garantizas tu horario preferido. Reservando online con antelación, pagas menos y entras sin esperas.
              </p>
            </div>

            <a
              href="https://gyg.me/wJCBE1BZ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Reservar entrada sin colas</span>
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
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Sáb: 8:00-17:00</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Dom: 10:00-16:00</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">Abierto todos los días, pero sábado tiene más ambiente</p>
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
                className="btn-hotel"
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

            <div className="bg-amber-100 border-l-4 border-amber-600 p-4 mb-4">
              <p className="text-sm text-amber-900 mb-2">
                <strong>⚠️ ATENCIÓN:</strong> La Torre de Londres es el segundo monumento de pago más visitado del Reino Unido (solo superado por Windsor).
              </p>
              <p className="text-sm text-amber-800 mb-2">
                <strong>Las entradas se agotan días antes</strong>, especialmente en verano y fines de semana. La cola para comprar en taquilla puede superar las 2 horas.
              </p>
              <p className="text-sm text-amber-800">
                💡 Reserva online para asegurar tu visita + audioguía incluida + acceso sin colas.
              </p>
            </div>

            <div className="mb-4">
              <h5 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h5>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span><span>Precio: 40€ online (audioguía incluida)</span></li>
                <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span><span>Horario diciembre: 9:00-16:30 (última entrada 15:00)</span></li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></span><span>Duración: 2.5-3 horas mínimo</span></li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span><span>Audioguía en español incluida</span></li>
              </ul>
            </div>

            <div className="mt-4">
              <a
                href="https://gyg.me/ex4u6Ux1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hotel"
              >
                <span>Reservar entrada con audioguía incluida</span>
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
      <p className="text-xs text-emerald-600">💡 <strong>Importante:</strong> Sky Garden se llena rápido. Reserva tu slot gratuito con 3 semanas de antelación en skygarden.london. Si no hay disponibilidad, ve a The Shard como alternativa de pago.</p>
    </div>

    <a
      href="https://skygarden.london/booking/"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="btn-hotel"
    >
      <span>Reservar Sky Garden (Gratis)</span>
      <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
      </svg>
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
      className="btn-hotel"
    >
      <span>Reservar The Shard</span>
      <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
      </svg>
    </a>
  </div>

  {/* NUEVO - Comparativa directa para ayudar a decidir */}
  <div className="bg-gradient-to-r from-emerald-50 to-sky-50 border-2 border-gray-300 rounded-xl p-6 shadow-md">
    <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
      🤔 ¿Cuál elegir: Sky Garden o The Shard?
    </h4>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div className="bg-emerald-100 rounded-xl p-4 border-2 border-emerald-300">
        <h5 className="font-bold text-emerald-800 mb-3 flex items-center">
          <span className="text-2xl mr-2">🌿</span>
          Elige Sky Garden si:
        </h5>
        <ul className="text-sm text-emerald-900 space-y-2">
          <li className="flex items-start">
            <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
            <span>Quieres ahorrar dinero (¡100% GRATIS!)</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
            <span>Planificas tu viaje con 2-3 semanas de antelación</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
            <span>Te gusta la naturaleza (jardín tropical único)</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
            <span>Prefieres ambiente más tranquilo y relajado</span>
          </li>
          <li className="flex items-start">
            <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
            <span>155m de altura son suficientes para ti</span>
          </li>
        </ul>
      </div>

      <div className="bg-sky-100 rounded-xl p-4 border-2 border-sky-300">
        <h5 className="font-bold text-sky-800 mb-3 flex items-center">
          <span className="text-2xl mr-2">🏙️</span>
          Elige The Shard si:
        </h5>
        <ul className="text-sm text-sky-900 space-y-2">
          <li className="flex items-start">
            <span className="text-sky-600 mr-2 mt-0.5">✓</span>
            <span>Reservas de última hora (disponibilidad inmediata)</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-600 mr-2 mt-0.5">✓</span>
            <span>Quieres las vistas MÁS ALTAS posibles (310m)</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-600 mr-2 mt-0.5">✓</span>
            <span>Viajas en grupo grande (todos entran seguro)</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-600 mr-2 mt-0.5">✓</span>
            <span>Prefieres experiencia más "premium" con bar champagne</span>
          </li>
          <li className="flex items-start">
            <span className="text-sky-600 mr-2 mt-0.5">✓</span>
            <span>Quieres ver hasta 64km en días despejados</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-white rounded-xl p-4 border border-gray-200">
      <p className="text-sm text-gray-800 text-center">
        <strong>💡 Mi recomendación personal:</strong> Intenta reservar Sky Garden primero (es gratis y la experiencia es increíble). Si no hay disponibilidad para tus fechas, The Shard es tu mejor alternativa y vale cada euro de los 38€. Ambos son espectaculares, solo cambia la altura y el precio.
      </p>
    </div>
  </div>
</div>

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

    {/* NUEVO - Contexto de si vale la pena */}
    <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mb-4">
      <p className="text-sm text-amber-900 mb-2">
        <strong>💭 ¿Vale la pena si ya visité Westminster Abbey?</strong>
      </p>
      <p className="text-sm text-amber-800">
        SÍ, son experiencias muy diferentes. Westminster es gótica medieval y llena de tumbas reales. San Pablo es barroca, arquitectónicamente más espectacular, y tiene las mejores vistas de Londres desde su cúpula (528 escalones hasta la Golden Gallery). Si solo puedes una, Westminster tiene más historia; si puedes ambas, San Pablo impresiona más visualmente.
      </p>
    </div>

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

    <a
      href="https://gyg.me/BhcGPPuJ"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="btn-hotel"
    >
      <span>Reservar entrada con audioguía</span>
      <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
      </svg>
    </a>
  </div>
</div>

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

    {/* NUEVO - Contexto de por qué vale la pena */}
    <div className="bg-cyan-100 border-l-4 border-cyan-500 p-4 mb-4">
      <p className="text-sm text-cyan-900 mb-2">
        <strong>🎯 ¿Por qué hacer el crucero?</strong>
      </p>
      <ul className="text-sm text-cyan-800 space-y-1">
        <li>✓ Descansas los pies después de caminar todo el día</li>
        <li>✓ Ves Tower Bridge, The Shard y la City desde una perspectiva única</li>
        <li>✓ Al atardecer/anochecer, Londres iluminado desde el río es mágico</li>
        <li>✓ Audioguía en español cuenta historias fascinantes del Támesis</li>
        <li>✓ Alternativa perfecta si tienes niños cansados de caminar</li>
      </ul>
    </div>

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
      className="btn-hotel"
    >
      <span>Reservar crucero Westminster-Greenwich</span>
      <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
      </svg>
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

      <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mb-4">
        <p className="text-sm text-amber-900 mb-2">
          <strong>¿Por qué es una visita obligada?</strong>
        </p>
        <p className="text-sm text-amber-800 mb-2">
          Este no es "un museo más". Aquí está la <strong>Piedra de Rosetta original</strong> (la que descifró los jeroglíficos egipcios), momias de 3.000 años, los mármoles del Partenón, y tesoros de todas las civilizaciones antiguas. Y todo <strong>GRATIS</strong>.
        </p>
        <p className="text-sm text-amber-800">
          Si solo tienes tiempo para UN museo en Londres, que sea este.
        </p>
      </div>

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
          <h5 className="font-semibold text-gray-900 mb-2">🎄 Winter Wonderland 2026:</h5>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span><strong>14 Nov - 1 Ene 2026</strong></li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Entrada: Gratis off-peak (mañanas entre semana), 5-7.50€ peak (tardes/fines de semana)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Horario: 10:00-22:00</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Mercado navideño + pista hielo + atracciones</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-100 to-green-100 border-2 border-red-300 rounded-lg p-3 mb-3">
        <p className="text-xs text-red-900">
          <strong>🎅 Winter Wonderland (14 Nov - 1 Ene):</strong> Si viajas en diciembre, Hyde Park se transforma en un enorme mercado navideño con pista de patinaje, atracciones, circo, Ice Kingdom y mercadillos. Entrada al recinto gratis en horarios off-peak (mañanas entre semana). Las atracciones se pagan aparte (11-18€).
        </p>
      </div>

      <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm mb-4">
        <p className="text-xs text-green-600">💡 <strong>Reserva Winter Wonderland:</strong> Si quieres entrar, RESERVA online con antelación. Los horarios peak (tardes/fines de semana) se agotan rápido.</p>
      </div>

      <a
        href="http://hydeparkwinterwonderland.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-hotel"
      >
        <span>Reservar Winter Wonderland</span>
        <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
        </svg>
      </a>
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

            <div className="mb-3 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7978845/pexels-photo-7978845.jpeg"
                alt="Warner Bros Studio Tour Harry Potter"
                className="w-full h-32 object-cover"
              />
            </div>

            <p className="text-sm text-gray-700 mb-3">Visita los estudios donde se filmaron las películas de Harry Potter. Una experiencia mágica imprescindible para los fans. Viaja en el autobús oficial de Harry Potter para hacer la experiencia aún más mágica.</p>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-3">
              <p className="text-xs text-purple-900 mb-2">
                <strong>¿Vale la pena?</strong>
              </p>
              <p className="text-xs text-purple-800 mb-2">
                SI eres fan de Harry Potter, este es uno de los mejores tours del mundo. Ves los sets REALES (Gran Comedor, Callejón Diagon, Bosque Prohibido), los decorados originales, y cómo se hicieron los efectos especiales. El autobús oficial temático de Harry Potter hace que la experiencia empiece desde el momento en que subes.
              </p>
              <p className="text-xs text-purple-800">
                <strong>SE AGOTA con semanas de antelación.</strong> No dejes la reserva para última hora.
              </p>
            </div>

            <div className="text-xs text-gray-600 mb-3">
              <p><strong>Precio:</strong> Desde 104€</p>
              <p><strong>Duración:</strong> Medio día (incluye transporte desde Londres)</p>
              <p><strong>Incluye:</strong> Autobús oficial de Harry Potter + entrada</p>
            </div>

            <a
              href="https://gyg.me/xkkGcCEI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Reservar tour Warner Bros</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🏰 Tour Windsor, Stonehenge y Oxford</h3>

            <div className="mb-3 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/18271653/pexels-photo-18271653.jpeg"
                alt="Castillo de Windsor"
                className="w-full h-32 object-cover"
              />
            </div>

            <p className="text-sm text-gray-700 mb-3">Tour de día completo que combina tres de los lugares más emblemáticos cerca de Londres: el Castillo de Windsor (residencia oficial de la Familia Real), Stonehenge (el monumento prehistórico más famoso) y Oxford (la ciudad universitaria más antigua de Inglaterra).</p>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-3">
              <p className="text-xs text-purple-900 mb-2">
                <strong>¿Vale la pena?</strong>
              </p>
              <p className="text-xs text-purple-800">
                Perfecto si quieres ver lo mejor de los alrededores de Londres en un solo día. Tres lugares icónicos con transporte incluido y guía experto. Ideal para optimizar tiempo si tienes pocos días en la ciudad.
              </p>
            </div>

            <div className="text-xs text-gray-600 mb-3">
              <p><strong>Duración:</strong> Día completo (aprox. 11 horas)</p>
              <p><strong>Incluye:</strong> Transporte + guía + entradas</p>
              <p><strong>Visitas:</strong> Castillo de Windsor, Stonehenge, Oxford</p>
            </div>

            <a
              href="https://gyg.me/r6Q7PP0g"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Reservar tour Windsor, Stonehenge y Oxford</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-bold text-purple-800 mb-3">🎭 Teatro del West End</h3>
            <p className="text-sm text-gray-700 mb-3">El equivalente británico de Broadway. Más de 40 teatros con musicales y obras.</p>
            <div className="text-xs text-gray-600 mb-3">
              <p><strong>Precio:</strong> 29-176 € | <strong>Duración:</strong> 2-3 horas</p>
              <p><strong>Shows populares:</strong> El Rey León, Wicked, Hamilton</p>
            </div>

            <a
              href="https://www.getyourguide.es/londres-l57?partner_id=87T0WPE&cmp=short-url&interestFilters=tc-128&partner_id=87T0WPE&utm_medium=online_publisher"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Ver entradas y tours del West End</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
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
            <p className="text-sm text-gray-700 mb-3">Jardín botánico Patrimonio de la UNESCO. 121 hectáreas de belleza natural.</p>
            <div className="text-xs text-gray-600 mb-3">
              <p><strong>Precio:</strong> desde 15 € | <strong>Duración:</strong> 3-4 horas</p>
              <p><strong>Highlights:</strong> Palm House, Treetop Walkway</p>
            </div>

            <a
              href="https://gyg.me/dpxxmHiq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Reservar entradas a Kew Gardens</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
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
            <p className="text-sm text-gray-700 mb-3">El estadio más icónico del fútbol. Tours detrás de escena disponibles.</p>
            <div className="text-xs text-gray-600 mb-3">
              <p><strong>Tour:</strong> 28 € | <strong>Duración:</strong> 75 minutos</p>
              <p>Incluye vestuarios, túnel, Copa FA</p>
            </div>

            <a
              href="https://gyg.me/0y2ZQ7ee"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Reservar tour al Estadio de Wembley</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* HERRAMIENTAS DE VIAJE */}
      <div id="recomendaciones" className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          💳 Herramientas Esenciales para Londres
        </h2>
        <p className="text-gray-600 mb-6">Servicios esenciales para viajar sin preocupaciones</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🎟️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">London Pass</h3>
                <p className="text-sm text-gray-600">Pase turístico todo incluido</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Acceso a más de 90 atracciones icónicas de Londres. Incluye Tower of London, Westminster Abbey, Tower Bridge y mucho más.
            </p>
            <div className="bg-amber-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">✅ Incluye:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• +90 atracciones y monumentos</li>
                <li>• Entrada rápida en muchos sitios</li>
                <li>• Guía digital incluida</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-2 border-amber-300 rounded-lg p-3 mb-4">
              <p className="text-center font-bold text-amber-800 text-sm">
                💰 ¡Ahorra hasta 50% en atracciones!
              </p>
            </div>
            <a
              href="https://gyg.me/ZhlZvYap"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm w-full justify-center"
            >
              🎟️ Consigue tu London Pass
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
          {/* COMIDA BRITÁNICA */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-orange-800 mb-4">🇬🇧 Comida Británica Tradicional</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Fish & Chips</h4>
                <p className="text-sm text-gray-700 mb-2">El plato nacional británico. Pescado rebozado + patatas fritas.</p>
                <p className="text-xs text-orange-700 mb-1">
                  <strong>Dónde:</strong> <a href="https://www.google.com/maps/place/Poppies+Fish+&+Chips,+Spitalfields/@51.5202235,-0.0740232,15z/data=!4m2!3m1!1s0x0:0x5765082b2389d926" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">Poppies</a> (Spitalfields)
                </p>
                <p className="text-xs text-orange-700"><strong>Precio:</strong> 14-19 €</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Sunday Roast</h4>
                <p className="text-sm text-gray-700 mb-2">Carne asada + Yorkshire pudding + verduras + gravy. Solo domingos.</p>
                <p className="text-xs text-orange-700 mb-1">
                  <strong>Dónde:</strong> <a href="https://www.google.com/maps?cid=1697893083040979884" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">The Harwood Arms</a> o <a href="https://www.google.com/maps/search/?api=1&query=Blacklock+Shoreditch&query_place_id=ChIJ44hFhjgddkgRdPaKatX_eGY" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">Blacklock</a>
                </p>
                <p className="text-xs text-orange-700"><strong>Precio:</strong> 18-35 €</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Afternoon Tea</h4>
                <p className="text-sm text-gray-700 mb-2">Té + sándwiches + scones + pasteles. Experiencia muy británica.</p>
                <p className="text-xs text-orange-700 mb-1">
                  <strong>Dónde:</strong> <a href="https://www.google.com/maps/place/sketch+london/data=!4m2!3m1!1s0x4876052a8fed866b:0xb07500db019d0324" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">Sketch</a> (premium) o <a href="https://www.google.com/maps?cid=6003543345049875234" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">The Wolseley</a>
                </p>
                <p className="text-xs text-orange-700"><strong>Precio:</strong> 28-88 €</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">English Breakfast</h4>
                <p className="text-sm text-gray-700 mb-2">Huevos, bacon, salchichas, judías, champiñones, tomate. Contundente.</p>
                <p className="text-xs text-orange-700 mb-1">
                  <strong>Dónde:</strong> <a href="https://www.google.com/maps?cid=9434034666759318914" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">The Breakfast Club</a> 
                
                </p>
                <p className="text-xs text-orange-700"><strong>Precio:</strong> 9-16 €</p>
              </div>
            </div>
          </div>

          {/* COMIDA INTERNACIONAL */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-red-800 mb-4">🌍 Comida Internacional</h3>
            <p className="text-sm text-gray-700 mb-4">Londres tiene gastronomía de 180+ países. Las mejores zonas:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🍛 India (Brick Lane)</h4>
                <p className="text-xs text-gray-700 mb-2">
                  <a href="https://www.google.com/maps?cid=11256896404490944630" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-900">Dishoom</a>, <a href="https://www.google.com/maps/place/Tayyabs/@51.5172755,-0.0660612,17z/data=!3m1!4b1!4m6!3m5!1s0x48761ccb72da71b1:0x187b9124f0a57a52!8m2!3d51.5172755!4d-0.0634863!16s%2Fg%2F1hd_71hn7" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-900">Tayyabs</a>
                </p>
                <p className="text-xs text-red-700"><strong>9-23 €</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🍜 China (Chinatown)</h4>
                <p className="text-xs text-gray-700 mb-2">
                  Dim sum, pato pequinés. <a href="https://www.google.com/maps/search/?api=1&query=Four+Seasons&query_place_id=ChIJ38EZXNIEdkgRyF8HpbgisDY" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-900">Four Seasons</a>
                </p>
                <p className="text-xs text-red-700"><strong>12-29 €</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🍕 Italia (Soho)</h4>
                <p className="text-xs text-gray-700 mb-2">
                  <a href="https://www.google.com/maps?cid=196478056344732283" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-900">Bancone</a> (pasta fresca), <a href="https://www.google.com/maps?cid=12972146974105785916" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-900">Lina Stores</a>
                </p>
                <p className="text-xs text-red-700"><strong>14-28 €</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🌮 México</h4>
                <p className="text-xs text-gray-700 mb-2">
                  <a href="https://www.google.com/maps?cid=14338869259752875139" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-900">Wahaca</a>, <a href="https://www.google.com/maps?cid=613574514351542124" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-900">Chilango</a>
                </p>
                <p className="text-xs text-red-700"><strong>9-18 €</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🍱 Japón</h4>
                <p className="text-xs text-gray-700 mb-2">
                  <a href="https://www.google.com/maps/search/?api=1&query=Kanada-Ya&query_place_id=ChIJvSKkyDIbdkgRLQT2dF3O2KY&ucbcb=1" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-900">Kanada-Ya</a> (ramen), <a href="https://www.google.com/maps?cid=8024483903378743198" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-900">Bone Daddies</a>
                </p>
                <p className="text-xs text-red-700"><strong>14-35 €</strong></p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-1">🥙 Medio Oriente</h4>
                <p className="text-xs text-gray-700 mb-2">
                  <a href="https://www.google.com/maps/place/Ranoush+Juice/@51.5148255,-0.1654777,17z/data=!3m1!4b1!4m6!3m5!1s0x487605353109a111:0xa2d5e279c8e0e693!8m2!3d51.5148222!4d-0.1629028!16s%2Fg%2F1tgkgs4p" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-900">Ranoush Juice</a> (Edgware Rd)
                </p>
                <p className="text-xs text-red-700"><strong>7-14 €</strong></p>
              </div>
            </div>
          </div>

          {/* MERCADOS */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-pink-800 mb-4">🏪 Mercados Gastronómicos</h3>
            <div className="space-y-3">
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">
                  <a href="https://www.google.com/maps/place/Borough+Market/@51.50544,-0.0932493,17z/data=!3m1!4b1!4m5!3m4!1s0x4876035775cf660f:0x3128e7e59ca044b9!8m2!3d51.50544!4d-0.0910606" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-900">Borough Market</a>
                </h4>
                <p className="text-sm text-gray-700">El mercado gourmet por excelencia. Ostras, quesos, panes artesanales.</p>
                <p className="text-xs text-gray-600">Lun-Jue 10:00-17:00 | Sáb 8:00-17:00 | Dom 10:00-16:00 | 12-23 €</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">
                  <a href="https://www.google.com/maps/place/Camden+Market/data=!4m2!3m1!1s0x0:0x47659eff1785ef08" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-900">Camden Market</a>
                </h4>
                <p className="text-sm text-gray-700">Street food internacional. Thai, indio, mexicano, vegano.</p>
                <p className="text-xs text-gray-600">Todos los días 10:00-18:00 | 9-18 €</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">
                  <a href="https://www.google.com/maps/place/Old+Spitalfields+Market/data=!4m2!3m1!1s0x0:0xa2f23eab2602d4bc" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-900">Old Spitalfields Market</a>
                </h4>
                <p className="text-sm text-gray-700">Mix de comida y moda. Los jueves mercado de antigüedades.</p>
                <p className="text-xs text-gray-600">Lun-Vie 10:00-20:00 | 9-18 €</p>
              </div>
            </div>
          </div>

          {/* CONSEJOS */}
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-orange-300 rounded-xl p-4">
            <h4 className="font-bold text-gray-900 mb-3">💡 Consejos para Comer Barato:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-800">
              <div>
                <p className="font-semibold mb-1">✅ Cadenas económicas:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Pret A Manger: 5-7 €</li>
                  <li>• Greggs: 2,50-3 €</li>
                  <li>• Leon: 6-9 € (comida sana)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-1">✅ Trucos:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Tesco Meal Deal: 4-5 €</li>
                  <li>• Lunch deals: 12:00-15:00 (50% off)</li>
                  <li>• App "Too Good To Go": comida a 1/3</li>
                </ul>
              </div>
            </div>
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
                <li>• Metro viaje: 2,80€</li>
                <li>• Autobús viaje: 1,75€</li>
                <li>• Tope diario metro: 8,50€</li>
                <li>• Tope diario bus: 5,25€</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-sm text-yellow-800">
              <strong>💡 Truco:</strong> Usa autobuses cuando puedas (tope 5,25€/día vs 8,50€ metro). Evita hora pico (6:30-9:30, 16:00-19:00).
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
              <li>• <strong>Temperaturas:</strong> Verano 20-25°C (fresco), Invierno 5-10°C (húmedo pero no extremo)</li>
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
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">💰 Presupuestos Detallados - Noviembre 2026</h2>
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
          Guía actualizada diciembre 2026 | Precios y horarios verificados
        </p>
        <p className="text-xs text-gray-500">
          Recomendamos verificar horarios y precios en páginas oficiales antes de tu visita, ya que pueden sufrir cambios.
        </p>
      </div>
    </article>
    </>
  );
};

export default LondonGuideArticle;
