import React, { useState } from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import StickyTableOfContents from './StickyTableOfContents';

interface RomaGuideArticleProps {
onBack: () => void;
}

const RomaGuideArticle: React.FC<RomaGuideArticleProps> = ({ onBack }) => {
  const [expandedAirport, setExpandedAirport] = useState<string | null>(null);
  const [expandedZone, setExpandedZone] = useState<string | null>(null);

  const toggleAirport = (airportId: string) => {
    setExpandedAirport(expandedAirport === airportId ? null : airportId);
  };

  const toggleZone = (zoneId: string) => {
    setExpandedZone(expandedZone === zoneId ? null : zoneId);
  };

  const sections = [
    { id: 'por-que-visitar', title: '¿Por qué visitar Roma?' },
    { id: 'llegada-aeropuerto', title: 'Llegada y Conexiones' },
    { id: 'donde-dormir', title: 'Dónde Alojarse' },
    { id: 'itinerario', title: 'Itinerario Romano' },
    { id: 'dia-1', title: 'Día 1: Centro Histórico y Plazas Icónicas', level: 2 },
    { id: 'dia-2', title: 'Día 2: Roma Antigua - Coliseo y Foro Romano', level: 2 },
    { id: 'dia-3', title: 'Día 3: El Vaticano - Arte, Fe y Poder', level: 2 },
    { id: 'mas-lugares', title: 'Más Lugares en Roma' },
    { id: 'recomendaciones', title: 'Tarjeta y Seguro de Viaje' },
    { id: 'gastronomia', title: 'Gastronomía' },
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
className="inline-flex items-center text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-xl transition-all duration-200 font-medium border border-red-200 hover:border-red-300 mb-6 shadow-sm hover:shadow-md"
>
<ArrowLeft className="h-4 w-4 mr-2" />
Volver a guías
</button>

    <div className="mb-6">
      <span className="bg-gradient-to-r from-red-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
        Guía Completa
      </span>
    </div>

    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
      Roma en 3 Días: Ciudad Eterna, Historia y Arte Milenario
    </h1>

    <div className="flex flex-col gap-4 mb-6 items-start">
      <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
          <Clock className="h-3 w-3 mr-1" />
          18 min
        </span>
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
          <MapPin className="h-3 w-3 mr-1" />
          Roma
        </span>
      </div>
      
      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: 'Roma en 3 Días: Guía Completa con Coliseo, Vaticano y más',
              text: 'Descubre la Ciudad Eterna con nuestro itinerario optimizado',
              url: window.location.href,
            })
            .catch((error) => console.log('Error sharing', error));
          } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
              alert('Enlace copiado al portapapeles');
            }).catch(() => {
              window.open(`https://twitter.com/intent/tweet?text=Roma en 3 Días: Guía Completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
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
      src="https://images.pexels.com/photos/6199223/pexels-photo-6199223.jpeg"
      alt="Coliseo Romano al atardecer con turistas"
      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
    />
  </div>

  <div id="por-que-visitar" className="bg-gradient-to-r from-amber-50 to-red-50 border border-amber-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">¿Por qué visitar Roma?</h2>

    <div className="space-y-4 text-gray-700">
      <p className="text-base leading-relaxed">
        Roma no es solo una ciudad, es un museo al aire libre donde cada esquina cuenta una historia de más de 2.500 años.
        Pocas ciudades en el mundo pueden presumir de tener el Coliseo, el Vaticano y la Fontana di Trevi a pocos kilómetros de distancia.
      </p>

      <p className="text-base leading-relaxed">
        Pero Roma es mucho más que monumentos antiguos. Es perderte por el barrio de Trastevere y descubrir una trattoria familiar
        donde comer auténtica pasta carbonara por 12€. Es tomar un helado artesanal mientras paseas por plazas barrocas.
        Es sentir que viajas en el tiempo sin necesidad de museos caros, porque la historia está literalmente bajo tus pies.
      </p>

      <p className="text-base leading-relaxed font-medium text-gray-900">
        Si buscas una ciudad que combine historia, cultura, gastronomía y ese encanto italiano que no se encuentra en ningún otro lugar,
        Roma te está esperando.
      </p>
    </div>
  </div>

  <div id="llegada-aeropuerto" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">✈️ Llegada y Conexiones desde el Aeropuerto</h2>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
      <p className="text-sm text-blue-900">
        <strong>Haz clic en el aeropuerto de llegada</strong> para ver todas las opciones de transporte disponibles con precios actualizados.
      </p>
    </div>

    <button
      onClick={() => toggleAirport('fiumicino')}
      className="w-full bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">✈️</span>
        <span className="font-bold text-lg">Aeropuerto de Fiumicino (FCO)</span>
      </div>
      {expandedAirport === 'fiumicino' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
    </button>

    {expandedAirport === 'fiumicino' && (
      <div className="mb-8 animate-fadeIn">
        <h3 className="text-lg font-bold text-gray-900 mb-4 mt-4">🛬 Desde Aeropuerto de Fiumicino (FCO)</h3>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
        <h4 className="font-bold text-gray-900 mb-3">🚄 Tren Leonardo Express - La Opción Más Rápida</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> 17 € por persona</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Horario:</strong> 06:08 - 23:23</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Duración:</strong> 32 minutos directo</p>
            <p className="text-sm text-gray-700"><strong>Frecuencia:</strong> Cada 15-30 minutos</p>
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-2"><strong>Destino:</strong> Roma Termini (centro ciudad)</p>
          </div>
        </div>
        <div className="bg-green-100 rounded-lg p-3 mt-4">
          <p className="text-green-800 text-sm font-medium">💡 La opción más eficiente y rápida. Evitas el tráfico romano y llegas directo al centro en media hora.</p>
        </div>
        <a
          href="https://gyg.me/Oz7nP1yy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm mt-4"
        >
          <span>🚄 Reservar Leonardo Express</span>
          <ExternalLink className="h-3 w-3 ml-2" />
        </a>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
        <h4 className="font-bold text-gray-900 mb-3">🚌 Autobuses - Alternativa Económica</h4>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-sm font-semibold text-gray-900 mb-2">Bus Shuttle</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 mb-3">
              <div>
                <p><strong>Precio:</strong> 7 € online</p>
                <p><strong>Duración:</strong> 55 minutos (según tráfico)</p>
                <p><strong>Horario:</strong> 04:45 - 01:15</p>
              </div>
              <div>
                <p><strong>Destino:</strong> Roma Termini</p>
                <p><strong>Frecuencia:</strong> Cada 30-45 minutos</p>
                <p><strong>Parada:</strong> Terminal 3 (bien señalizado)</p>
              </div>
            </div>
            <a
              href="https://gyg.me/30nhyxKT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
            >
              <span>🚌 Reservar Bus Aeropuerto</span>
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
        <h4 className="font-bold text-gray-900 mb-3">🚕 Traslado Privado - Máximo Confort</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-700 mb-1"><strong>Traslado privado:</strong> Desde 28 € por persona</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Duración:</strong> 40 min (según tráfico)</p>
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-1"><strong>Ideal para:</strong> Grupos, familias, equipaje</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Ventajas:</strong> Puerta a puerta sin paradas</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Reserva:</strong> Online con antelación recomendado</p>
          </div>
        </div>
        <a
          href="https://gyg.me/BLaJgf2A"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
        >
          <span>🚕 Reservar Traslado Privado</span>
          <ExternalLink className="h-3 w-3 ml-2" />
        </a>
      </div>
      </div>
    )}
  </div>


  <div id="donde-dormir" className="bg-gradient-to-br from-amber-50 via-red-50 to-orange-50 border border-amber-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center">
      🏨 Dónde Alojarse en Roma
    </h2>
    <p className="text-gray-600 mb-6">Las mejores zonas y hoteles recomendados para tu estadía</p>

    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-amber-500 rounded-xl flex items-center justify-center mr-4">
            <span className="text-2xl">🏛️</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Centro Histórico</h3>
            <p className="text-sm text-gray-600">La ubicación más cómoda para visitar Roma a pie</p>
          </div>
        </div>

        <button
          onClick={() => toggleZone('centro-historico')}
          className="w-full bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏨</span>
            <div className="text-left">
              <span className="font-bold text-lg block">
                {expandedZone === 'centro-historico' ? 'Ocultar hoteles' : 'Ver 2 hoteles recomendados'}
              </span>
              <span className="text-sm text-red-100 block">
                Hoteles en el corazón de Roma
              </span>
            </div>
          </div>
          {expandedZone === 'centro-historico' ?
            <ChevronUp className="w-6 h-6 group-hover:transform group-hover:-translate-y-1 transition-transform" /> :
            <ChevronDown className="w-6 h-6 group-hover:transform group-hover:translate-y-1 transition-transform" />
          }
        </button>

        {expandedZone === 'centro-historico' && (
          <div className="animate-fadeIn border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              <div className="bg-white rounded-2xl p-5 border-2 border-red-200 flex flex-col shadow-lg hover:shadow-xl hover:border-red-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Hotel Smeraldo</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel en el centro de Roma con habitaciones con aire acondicionado, WiFi gratuita y terraza en la azotea con vistas al centro histórico. Incluye TV de pantalla plana y baño privado con secador de pelo.</p>
                  <div className="bg-red-50 border-l-4 border-red-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-red-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Plaza Campo de' Fiori (200 m), Panteón (5 min a pie), Piazza Navona (5 min a pie), Fontana di Trevi (10 min a pie), mercado diario y vida nocturna animada.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/IHfFpFIB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
                  >
                    <span className="mr-2">Ver disponibilidad</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border-2 border-amber-200 flex flex-col shadow-lg hover:shadow-xl hover:border-amber-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Terrace Pantheon Relais</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel elegante con terraza panorámica y habitaciones con aire acondicionado, TV de pantalla plana, hervidor eléctrico y baño privado moderno. Desayuno buffet con productos dulces y salados.</p>
                  <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-amber-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Panteón (200 m), Piazza Navona (5 min a pie), Plaza Campo de' Fiori (450 m), Fontana di Trevi (8 min a pie), centro histórico.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/AD5vS3Hf"
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

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800">
                <strong>✅ Por qué elegir esta zona:</strong> Camina a todos los monumentos principales (Trevi, Panteón, Navona).
                Calles llenas de vida, restaurantes auténticos y ambiente romano genuino.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
            <span className="text-2xl">⛪</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Vaticano / Prati</h3>
            <p className="text-sm text-gray-600">Zona tranquila y elegante, cerca del Vaticano</p>
          </div>
        </div>

        <button
          onClick={() => toggleZone('vaticano-prati')}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏨</span>
            <div className="text-left">
              <span className="font-bold text-lg block">
                {expandedZone === 'vaticano-prati' ? 'Ocultar hoteles' : 'Ver 2 hoteles recomendados'}
              </span>
              <span className="text-sm text-purple-100 block">
                Hoteles cerca del Vaticano
              </span>
            </div>
          </div>
          {expandedZone === 'vaticano-prati' ?
            <ChevronUp className="w-6 h-6 group-hover:transform group-hover:-translate-y-1 transition-transform" /> :
            <ChevronDown className="w-6 h-6 group-hover:transform group-hover:translate-y-1 transition-transform" />
          }
        </button>

        {expandedZone === 'vaticano-prati' && (
          <div className="animate-fadeIn border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              <div className="bg-white rounded-2xl p-5 border-2 border-purple-200 flex flex-col shadow-lg hover:shadow-xl hover:border-purple-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Donna Laura Palace</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel con vistas al río Tíber que ofrece centro de fitness, sauna, bañera de hidromasaje y bar. Habitaciones estilo clásico con aire acondicionado, TV de pantalla plana y minibar. Restaurante con cocina italiana tradicional y terraza en la azotea.</p>
                  <div className="bg-purple-50 border-l-4 border-purple-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-purple-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Vaticano (2 km), Piazza del Popolo (1 km), metro Lepanto (10 min a pie), barrio elegante de Prati, vistas al río Tíber.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/jd418WFK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
                  >
                    <span className="mr-2">Ver disponibilidad</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border-2 border-indigo-200 flex flex-col shadow-lg hover:shadow-xl hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Hotel Isa Design</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel boutique moderno en el exclusivo barrio de Prati. Zonas de estar elegantes con terraza panorámica en la azotea. Habitaciones con aire acondicionado, WiFi gratuita, zapatillas y secador de pelo. Diseño único en cada habitación.</p>
                  <div className="bg-indigo-50 border-l-4 border-indigo-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-indigo-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Vaticano (15 min a pie por el Tíber), Panteón y Piazza Navona (al otro lado del río), barrio elegante de Prati, restaurantes y tiendas locales.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/58AldYai"
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

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <strong>✅ Por qué elegir esta zona:</strong> Barrio elegante y auténtico con restaurantes locales.
                Metro directo al centro. Perfecto para visitar el Vaticano.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
            <span className="text-2xl">🌿</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Trastevere</h3>
            <p className="text-sm text-gray-600">Barrio bohemio con encanto auténtico y vida nocturna</p>
          </div>
        </div>

        <button
          onClick={() => toggleZone('trastevere')}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📍</span>
            <div className="text-left">
              <span className="font-bold text-lg block">
                {expandedZone === 'trastevere' ? 'Ocultar detalles' : 'Ver detalles de esta zona'}
              </span>
              <span className="text-sm text-green-100 block">
                Información y hoteles
              </span>
            </div>
          </div>
          {expandedZone === 'trastevere' ?
            <ChevronUp className="w-6 h-6 group-hover:transform group-hover:-translate-y-1 transition-transform" /> :
            <ChevronDown className="w-6 h-6 group-hover:transform group-hover:translate-y-1 transition-transform" />
          }
        </button>

        {expandedZone === 'trastevere' && (
          <div className="animate-fadeIn border-t border-gray-200 pt-4">
            <p className="text-gray-700 mb-4">
              Barrio pintoresco con calles adoquinadas, ambiente bohemio y los mejores restaurantes de Roma.
              Por la noche cobra vida con terrazas y trattorias tradicionales.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-sm text-gray-700"><strong>✅ Ventajas:</strong></p>
                <ul className="text-sm text-gray-600 space-y-1 mt-2">
                  <li>• Ambiente auténtico romano</li>
                  <li>• Mejores restaurantes de la ciudad</li>
                  <li>• Vida nocturna animada</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-lg p-3">
                <p className="text-sm text-gray-700"><strong>⚠️ Considera:</strong></p>
                <ul className="text-sm text-gray-600 space-y-1 mt-2">
                  <li>• Algo alejado del centro</li>
                  <li>• Ruidoso por las noches</li>
                  <li>• Calles empedradas</li>
                </ul>
              </div>
            </div>

            <a
              href="https://booking.tpk.lv/91nRuLrC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
            >
              🏨 Ver Hoteles en Trastevere
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </div>
        )}
      </div>
    </div>

  </div>

  <div id="itinerario" className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Itinerario Romano</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
        <thead>
          <tr className="bg-gradient-to-r from-red-500 to-amber-500 text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">JORNADA</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EXPERIENCIAS ROMANAS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 1</td>
            <td className="border border-gray-300 px-4 py-3">Plaza de España + Fontana di Trevi + Panteón + Piazza Navona + Museos Capitolinos + Monumento Vittorio Emanuele II</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 2</td>
            <td className="border border-gray-300 px-4 py-3">Coliseo + Arco de Constantino + Palatino + Foro Romano + Circo Máximo + Bocca della Verità + Trastevere</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 3</td>
            <td className="border border-gray-300 px-4 py-3">Museos Vaticanos + Capilla Sixtina + Basílica San Pedro + Castillo Sant'Angelo + Piazza del Popolo</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-amber-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
    </div>
  </div>

  {/* DÍA 1 */}
  <div id="dia-1" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-red-500 to-amber-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">1</span>
      DÍA 1: Centro Histórico y Plazas Icónicas
    </h2>

    {/* Plaza de España y Fontana di Trevi */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-amber-400 rounded-full mr-3"></div>
        Despertar Romano - Centro Histórico (9:00h)
      </h3>
      <div className="bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Plaza de España y Fontana di Trevi</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/5067076/pexels-photo-5067076.jpeg"
            alt="Plaza de España con sus famosas escalinatas"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Comenzamos en la Plaza de España con sus icónicas escalinatas de 135 peldaños (1723-1725), un lugar perfecto para 
          iniciar el día. Desde aquí caminamos por Via Condotti, la calle de tiendas de lujo de Roma, hasta llegar a la impresionante Fontana di Trevi.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🏛️ Plaza de España:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Escalinata de la Trinità dei Monti (135 escalones)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>Fuente de la Barcaccia de Bernini</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Via Condotti: Shopping de lujo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Iglesia Trinità dei Monti en la cima</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">⛲ Fontana di Trevi:</h5>
            <p className="text-sm text-gray-700 mb-2">
              La fuente barroca más famosa del mundo (1762). Con 26 metros de altura y 49 de ancho, es un espectáculo 
              impresionante escondido entre las callejuelas romanas. ¡No olvides tirar una moneda de espaldas para volver a Roma!
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Mejor momento:</strong> Muy temprano (7-8am) o por la noche iluminada para evitar multitudes.
            </p>
          </div>
        </div>

        <div className="bg-white border-l-4 border-emerald-500 rounded-lg p-4">
          <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
            <span className="mr-2">🎯</span>
            Free Tour por Roma - Los Monumentos Más Icónicos
          </h5>
          <p className="text-sm text-gray-700 mb-3">
            El tour más completo para ver lo más importante del centro histórico de Roma en un único recorrido. Descubre cómo esta ciudad llegó a ser la "capital del mundo" mientras visitas sus monumentos más icónicos con un guía experto.
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-4 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Duración: 2h 45min</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Inicio: Piazza di San Pietro in Vincoli</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Incluye: Coliseo, Fontana di Trevi, Panteón...</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Pago: En forma de propinas</li>
          </ul>
          <a href="https://www.freetour.com/es/rome/free-tour-por-roma-los-monumentos-mas-iconicos?referralID=rFW5gyO0D7w7JOqo&campaign=CentroRoma"
             target="_blank"
             rel="noopener noreferrer"
             className="btn-hotel">
            <span>🏛️ Reservar free tour del Centro Histórico</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>

    {/* Panteón y Piazza Navona */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-3"></div>
        Panteón de Agripa y Piazza Navona (11:30h)
      </h3>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">El Panteón y la Piazza Navona</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/2676602/pexels-photo-2676602.jpeg"
            alt="Panteón de Agripa en Roma"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El Panteón de Agripa (año 126 d.C.) es el edificio romano mejor conservado del mundo. Su cúpula de 43 metros 
          de diámetro fue la más grande del mundo durante 1.300 años. La entrada es gratuita pero recomendamos hacer visita guiada.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
          <h5 className="font-semibold text-gray-900 mb-3">🏛️ Panteón de Agripa:</h5>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Entrada:</strong> 5 €</p>
            <p><strong>Horario:</strong> 9:00-19:00 (lunes a sábado) / 9:00-18:00 (domingo)</p>
            <p><strong>Interior:</strong> Cúpula con óculo central de 9 metros, tumbas de Rafael y reyes italianos</p>
            <p><strong>Recomendación:</strong> Visita guiada para entender su historia arquitectónica única</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <h5 className="font-semibold text-gray-900 mb-2">🍦 Parada obligatoria: Giolitti</h5>
          <p className="text-sm text-gray-700">
            La Heladería Giolitti (desde 1900) está muy cerca del Panteón. Los romanos presumen de hacer los mejores helados 
            del mundo, ¡y no se equivocan! Prueba los sabores clásicos como pistacho, stracciatella o limón.
          </p>
        </div>

        <h5 className="font-semibold text-gray-900 mb-3">🎭 Piazza Navona - La Plaza Barroca:</h5>
        <p className="text-sm text-gray-700 mb-3">
          A 5 minutos caminando del Panteón encontrarás la Piazza Navona, construida sobre el antiguo Estadio de Domiciano. 
          Es una de las plazas más hermosas de Roma con tres fuentes impresionantes:
        </p>
        <ul className="text-sm text-gray-700 space-y-1 mb-3">
          <li>• <strong>Fontana dei Quattro Fiumi (Bernini):</strong> Los cuatro ríos más importantes del mundo conocido</li>
          <li>• <strong>Fontana del Moro:</strong> En el extremo sur de la plaza</li>
          <li>• <strong>Fontana del Nettuno:</strong> En el extremo norte</li>
          <li>• <strong>Sant'Agnese in Agone:</strong> Iglesia barroca de Borromini</li>
        </ul>

        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <a href="https://gyg.me/x7n9VjY6" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🏛️ Visita Guiada por el Panteón</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>

    {/* Museos Capitolinos y Terraza */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
        Museos Capitolinos y Atardecer (15:00h)
      </h3>
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Arte Clásico y las Mejores Vistas del Foro</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/9386106/pexels-photo-9386106.jpeg"
            alt="Museo Capitolino"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Los Museos Capitolinos (Musei Capitolini) son los museos públicos más antiguos del mundo (1471). 
          Albergan la famosa Loba Capitolina amamantando a Rómulo y Remo, símbolo de Roma.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎨 Obras Destacadas:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Loba Capitolina (símbolo de Roma)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Estatua ecuestre de Marco Aurelio</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Galería de pintura con Caravaggio</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Escultura del Niño del Espino</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">📋 Info Práctica:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Precio: Desde 36€</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Duración: 3-5 horas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Horario: 9:30-19:30 diario</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Ubicación: Plaza del Campidoglio</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-100 border border-green-300 rounded-lg p-3 mb-4">
          <p className="font-medium text-green-800 mb-1">📸 Vistas Secretas del Foro Romano</p>
          <p className="text-green-700 text-xs mb-2">
            Justo al lado de los Museos Capitolinos está uno de los mejores miradores del Foro Romano (gratuito). 
            Busca el mirador en Via del Campidoglio para fotos espectaculares sin pagar entrada.
          </p>
        </div>

        <h5 className="font-semibold text-gray-900 mb-3">🌅 Terraza de las Cuadrigas - Atardecer Romano:</h5>
        <p className="text-sm text-gray-700 mb-3">
          Termina el día en la Terrazza delle Quadrighe del Monumento a Vittorio Emanuele II (también llamado Altare della Patria o "máquina de escribir" por los locales).
          Es uno de los mejores miradores de Roma con vistas 360° de la ciudad.
        </p>
        <ul className="text-sm text-gray-700 space-y-1 mb-4">
          <li>• <strong>Precio:</strong> 15-17€ con ascensor panorámico</li>
          <li>• <strong>Vistas:</strong> Coliseo, Foros, Vaticano, toda Roma</li>
          <li>• <strong>Horario:</strong> 9:30-19:30 (verano hasta 19:45)</li>
          <li>• <strong>Mejor momento:</strong> Atardecer (1 hora antes del sunset)</li>
        </ul>

        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <p className="text-xs text-purple-600 mb-3">💡 Tip: El atardecer desde esta terraza es mágico. Llega con tiempo para conseguir buen sitio y ver cómo la luz dorada baña Roma.</p>
          <a href="https://gyg.me/Kpaf4B2q" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🏛️ Visita Guiada Museos Capitolinos</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
    </div>
  </div>

  {/* DÍA 2 */}
  <div id="dia-2" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-amber-500 to-red-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">2</span>
      DÍA 2: Roma Antigua - Coliseo y Foro Romano
    </h2>

    {/* Coliseo */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-red-400 rounded-full mr-3"></div>
        El Coliseo - Maravilla del Mundo (9:00h)
      </h3>
      <div className="bg-gradient-to-r from-amber-50 to-red-50 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">El Anfiteatro Flavio - Símbolo de Roma</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg"
            alt="Coliseo Romano iluminado"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El Coliseo (80 d.C.) es una de las 7 Maravillas del Mundo Moderno. Con capacidad para 50.000-80.000 espectadores, 
          fue el anfiteatro más grande del Imperio Romano. Aquí se celebraban combates de gladiadores y espectáculos públicos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎫 Precios 2026 (Web Oficial):</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>Entrada básica (24h): 18€</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Con Arena (48h): 24€</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Con Arena + Subterráneos (48h): 24€</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Menores de 18 años: GRATIS</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">📋 Incluye con tu entrada:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Coliseo (1er y 2do nivel)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Foro Romano completo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Monte Palatino</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Validez: 24h o 48h según tipo</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
          <p className="font-medium text-red-800 mb-1">🚨 IMPORTANTE - Sistema de Reservas 2026</p>
          <p className="text-red-700 text-xs mb-3">
            ⚠️ Nueva web oficial: ticketing.colosseo.it • Las entradas se abren SOLO 30 días antes de tu visita • 
            Se agotan en pocas horas tras abrirse • Hay cola virtual online antes de poder comprar • 
            Si están agotadas, usa proveedores autorizados con disponibilidad
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <h5 className="font-semibold text-gray-900 mb-2">💡 Formas de Visitar el Coliseo:</h5>
          <div className="space-y-2 text-sm text-gray-700 mb-3">
            <p><strong>1. Web Oficial:</strong> La más barata (18€) pero entradas limitadas, se agotan rápido</p>
            <p><strong>2. Visita Guiada:</strong> La más recomendada. Sin colas + guía experto. Desde 39 € </p>
          </div>
          <p className="text-xs text-amber-600 mb-3">🎯 Recomendación: Visita guiada en español que incluye Coliseo + Arena + Foro + Palatino. Mucho más interesante con explicaciones.</p>
          <div className="flex flex-wrap gap-2">
            <a href="https://gyg.me/J0uUGFpb" target="_blank" rel="noopener noreferrer"
               className="btn-hotel">
              <span>🏟️ Tour Guiado Coliseo + Foro + Palatino</span>
              <ExternalLink className="external-icon" />
            </a>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <h5 className="font-semibold text-green-800 mb-2">🎟️ Entrada GRATIS el Primer Domingo del Mes</h5>
          <p className="text-green-700 text-xs">
            El primer domingo de cada mes la entrada es gratuita (incluye Foro y Palatino). 
            Hay que recoger tickets en taquilla por orden de llegada. ¡Llega muy temprano porque se forman colas enormes!
          </p>
        </div>
      </div>
    </div>

    {/* Foro Romano y Palatino */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
        Foro Romano y Monte Palatino (11:30h)
      </h3>
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">El Corazón de la Roma Antigua</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/6220444/pexels-photo-6220444.jpeg"
            alt="Foro Romano con ruinas antiguas"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El Foro Romano era el centro neurálgico de la vida pública romana: política, comercio, religión y justicia. 
          El Monte Palatino fue donde se fundó Roma y donde vivían los emperadores en lujosos palacios.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🏛️ Foro Romano - Imprescindibles:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Arco de Tito (victoria sobre Jerusalén)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Templo de Saturno (8 columnas)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Curia Julia (Senado Romano)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Basílica de Majencio</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Casa de las Vestales</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">👑 Monte Palatino:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Domus Augustana (palacio imperial)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Casa de Livia y Augusto</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Jardines Farnesianos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Vistas espectaculares al Foro</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Museo Palatino</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
          <p className="font-medium text-yellow-800 mb-1">⏱️ Duración Total del Recorrido</p>
          <p className="text-yellow-700 text-xs">
            Visitar Coliseo + Foro + Palatino lleva todo la mañana (4-5 horas mínimo). 
            Con guía es mucho más didáctico porque solo quedan ruinas y sin contexto es difícil imaginar su esplendor original.
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4">
          <h5 className="font-semibold text-gray-900 mb-2">🍝 Restaurante con vistas al Coliseo:</h5>
          <p className="text-sm text-gray-700">
            <strong>Royal Art Cafè Roma:</strong> Terraza preciosa con vistas directas al Coliseo.
            Perfecto para comer después de la visita. Reserva mesa con antelación, especialmente la terraza.
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <a href="https://gyg.me/J0uUGFpb" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🏛️ Tour Guiado Coliseo + Foro + Palatino</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>

    {/* Trastevere */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
        Bocca della Verità y Barrio Trastevere (17:00h)
      </h3>
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">La Boca de la Verdad y el Barrio Más Auténtico</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/34010785/pexels-photo-34010785.jpeg"
            alt="Calles del barrio Trastevere en Roma"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>

        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <h5 className="font-semibold text-gray-900 mb-2">👄 Bocca della Verità (Boca de la Verdad):</h5>
          <p className="text-sm text-gray-700 mb-2">
            Máscara de mármol (siglo I) en el pórtico de la iglesia Santa Maria in Cosmedin. 
            La leyenda dice que quien miente pierde la mano al introducirla en la boca.
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Entrada:</strong> Gratuita</li>
            <li>• <strong>Horario:</strong> 9:30-17:50</li>
            <li>• <strong>Ubicación:</strong> Piazza Bocca della Verità</li>
            <li>• <strong>Tip:</strong> Suele haber cola para hacerse la foto</li>
          </ul>
        </div>

        <h5 className="font-semibold text-gray-900 mb-3">🏘️ Trastevere - El Barrio Bohemio:</h5>
        <p className="text-sm text-gray-700 mb-3">
          El barrio más con encanto de Roma, con calles adoquinadas, hiedra en las fachadas, trattorias tradicionales 
          y un ambiente bohemio único. Por la tarde-noche cobra vida con romanos cenando en terrazas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎯 Qué ver en Trastevere:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Basílica Santa Maria in Trastevere</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Plaza Santa Maria (corazón del barrio)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Callejear sin rumbo fijo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Villa Farnesina (palacio renacentista)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🍰 Tiramisú obligatorio:</h5>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Tiramisù Trastevere:</strong> Lo preparan AL MOMENTO delante de ti. 
              Puedes elegir los ingredientes y ver cómo lo montan capa a capa. ¡Buenísimo!
            </p>
            <p className="text-sm text-gray-700">
              <strong>Two Sizes:</strong> Otra excelente opción para probar tiramisú de calidad.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mb-4">
          <p className="text-xs text-purple-600 mb-3">💡 Tip: Trastevere es perfecto para cenar. Reserva mesa en Cambio Trastevere, Ivo a Trastevere o Santo Trastevere.</p>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <a href="https://gyg.me/GTN3t260" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🍕 Tour a Pie de Comida Callejera en Trastevere</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
    </div>
  </div>

  {/* DÍA 3 */}
  <div id="dia-3" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">3</span>
      DÍA 3: El Vaticano - Arte, Fe y Poder
    </h2>

    {/* Museos Vaticanos */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full mr-3"></div>
        Museos Vaticanos y Capilla Sixtina (9:00h)
      </h3>
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">La Mayor Colección de Arte del Mundo</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/28733354/pexels-photo-28733354.jpeg"
            alt="Museos Vaticanos interior"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Los Museos Vaticanos albergan 54 museos con más de 70.000 obras. Son 7 km de recorrido total con arte egipcio, 
          griego, romano, renacentista y contemporáneo. La Capilla Sixtina con los frescos de Miguel Ángel es el broche final.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎨 Obras Maestras Imprescindibles:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Capilla Sixtina: Creación de Adán y Juicio Final</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Estancias de Rafael: Escuela de Atenas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Galería de los Mapas (120 metros)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Laocoonte y sus hijos (escultura)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Torso del Belvedere (inspiró a Miguel Ángel)</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
          <p className="font-medium text-red-800 mb-1">🚨 IMPORTANTE - Sistema de Reservas Vaticano</p>
          <p className="text-red-700 text-xs mb-3">
            ⚠️ Solo se puede reservar con 60 DÍAS de antelación máximo • Web oficial solo en italiano e inglés • 
            Los domingos están CERRADOS (excepto último domingo del mes gratuito con colas enormes) • 
            Reserva con antelación para asegurar tu entrada
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <h5 className="font-semibold text-gray-900 mb-2">💡 Formas de Visitar el Vaticano:</h5>
          <div className="space-y-2 text-sm text-gray-700 mb-3">
            <p><strong>1. Web Oficial:</strong> La más barata (25€ total) pero difícil de conseguir entrada</p>
            <p><strong>2. Visita Guiada en Español:</strong> La más recomendada. Sin colas + explicaciones (65-120€)</p>
          </div>
          <p className="text-xs text-purple-600 mb-3">🎯 Recomendación: Visita guiada de 3 horas en español. Los Museos Vaticanos son inabarcables sin guía que te explique qué ver.</p>
          <div className="flex flex-wrap gap-2">
            <a href="https://gyg.me/wIqPOyE9" target="_blank" rel="noopener noreferrer"
               className="btn-hotel">
              <span>🎨 Tour Guiado Museos Vaticanos + Sixtina</span>
              <ExternalLink className="external-icon" />
            </a>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h5 className="font-semibold text-gray-900 mb-2">⏱️ Info Práctica:</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Horario:</strong> Lunes a sábado 8:00-20:00 (última entrada 18:00)</li>
            <li>• <strong>Cerrado:</strong> Domingos (excepto último del mes)</li>
            <li>• <strong>Duración:</strong> Mínimo 3-4 horas para ver lo imprescindible</li>
            <li>• <strong>Dress code:</strong> Hombros y rodillas cubiertas (obligatorio)</li>
            <li>• <strong>Prohibido:</strong> Hablar en la Capilla Sixtina (silencio absoluto)</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Basílica San Pedro */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-3"></div>
        Basílica de San Pedro (13:00h)
      </h3>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">La Iglesia Más Grande del Mundo</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/12044711/pexels-photo-12044711.jpeg"
            alt="Museos Vaticanos interior"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          La Basílica de San Pedro es la iglesia más grande del cristianismo (22.000 m²). Construida sobre la tumba del apóstol Pedro, 
          fue diseñada por Bramante, Miguel Ángel, Bernini y otros genios del Renacimiento y Barroco.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">⛪ Obras Maestras:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>La Piedad de Miguel Ángel (única obra firmada)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Baldaquino de Bernini (29 metros altura)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Cúpula de Miguel Ángel (136m altura)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Plaza de San Pedro con columnata Bernini</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎫 Precios y Acceso:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Basílica: GRATIS (por Plaza San Pedro)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Cúpula a pie: 8€ (551 escalones)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Cúpula con ascensor: 10€ (320 escalones)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Horario: 7:00-19:00 (verano) / 7:00-18:00 (invierno)</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-100 border border-green-300 rounded-lg p-3 mb-4">
          <p className="font-medium text-green-800 mb-1">💡 Consejo para evitar colas</p>
          <p className="text-green-700 text-xs">
            La entrada a la Basílica por la Plaza suele tener colas largas (1-2 horas). 
            Llega temprano (antes de las 9am) o última hora de la tarde. El control de seguridad es estricto.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
            <a href="https://gyg.me/JNMNOu6o" target="_blank" rel="noopener noreferrer"
               className="btn-hotel">
              <span>🎨 Visita Guiada: Basílica, Tumbas Papales y La Piedad</span>
              <ExternalLink className="external-icon" />
            </a>
          </div>
      </div>
    </div>

    {/* Castillo Sant'Angelo */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full mr-3"></div>
        Castillo de Sant'Angelo (16:00h)
      </h3>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">De Mausoleo a Fortaleza Papal</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/31077446/pexels-photo-31077446.jpeg"
            alt="Castillo Sant'Angelo y puente en Roma"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El Castillo Sant'Angelo fue construido como mausoleo del emperador Adriano (139 d.C.). 
          Después se convirtió en fortaleza papal conectada al Vaticano por el Passetto di Borgo, pasaje secreto de escape.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🏰 Qué Ver:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>Apartamentos Papales (decoración renacentista)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Terraza panorámica con vistas 360°</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Passetto: Pasadizo secreto al Vaticano</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Prisiones históricas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Puente Sant'Angelo con ángeles de Bernini</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">📋 Info Práctica:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Precio: 14-16€</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Horario: 9:00-19:30</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Duración: 1,5-2 horas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Audioguía: Disponible</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <p className="text-xs text-amber-600 mb-3">💡 Tip: Sube a la terraza al atardecer para vistas espectaculares de Roma y el Vaticano. El puente Sant'Angelo es uno de los más fotogénicos.</p>
          <a href="https://gyg.me/kzz9A7do" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🏰 Visita Guiada Castillo Sant'Angelo</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>

    {/* Piazza del Popolo */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mr-3"></div>
        Piazza del Popolo y Atardecer (18:30h)
      </h3>
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">La Plaza del Pueblo y Terraza Pincio</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/28238173/pexels-photo-28238173.jpeg"
            alt="Piazza del Popolo"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Piazza del Popolo es una de las plazas más grandes y espectaculares de Roma. En su centro destaca el 
          Obelisco Flaminio egipcio de 3.200 años de antigüedad dedicado a Ramsés II.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">⛲ Piazza del Popolo:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Obelisco Flaminio (24 metros)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Iglesias gemelas: Santa Maria dei Miracoli y in Montesanto</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Basílica Santa Maria del Popolo (obras Caravaggio)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Puerta del Popolo (entrada antigua a Roma)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🌅 Terrazza del Pincio:</h5>
            <p className="text-sm text-gray-700 mb-2">
              Mirador con las mejores vistas de la Piazza del Popolo y Roma al atardecer. 
              Está en los Jardines de Villa Borghese, justo al lado de la plaza.
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Acceso:</strong> Gratuito</li>
              <li>• <strong>Mejor momento:</strong> Atardecer (golden hour)</li>
              <li>• <strong>Vistas:</strong> 360° de Roma</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-100 border border-green-300 rounded-lg p-3">
          <p className="font-medium text-green-800 mb-1">💡 Perfecto final del día</p>
          <p className="text-green-700 text-xs">
            Termina tu tercer día viendo el atardecer desde la Terrazza del Pincio. 
            Las vistas son espectaculares y es un momento mágico para despedirte de Roma.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div id="mas-lugares" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">➕ Más Lugares que Ver en Roma</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
        <h3 className="font-semibold text-gray-900 mb-3">🏛️ Otros Lugares Históricos:</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li><strong>Termas de Caracalla:</strong> Enormes termas romanas del año 216 d.C.</li>
          <li><strong>Villa Borghese:</strong> Parque enorme con museo Galería Borghese (reserva obligatoria)</li>
          <li><strong>Basílica San Juan de Letrán:</strong> Catedral de Roma, sede del Papa</li>
          <li><strong>Circo Máximo:</strong> Donde se celebraban las carreras de cuadrigas</li>
          <li><strong>Campo dei Fiori:</strong> Mercado local diurno, vida nocturna por la noche</li>
        </ul>
      </div>
      
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <h3 className="font-semibold text-gray-900 mb-3">⛪ Iglesias y Catacumbas:</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li><strong>Catacumbas:</strong> Túneles subterráneos de los primeros cristianos (Via Appia)</li>
          <li><strong>Basílica Santa Maria Maggiore:</strong> Una de las 4 basílicas mayores</li>
          <li><strong>San Pietro in Vincoli:</strong> Moisés de Miguel Ángel (gratis)</li>
          <li><strong>Santa Maria in Cosmedin:</strong> Bocca della Verità</li>
          <li><strong>Scala Santa:</strong> Las escaleras que subió Jesús (se suben de rodillas)</li>
        </ul>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <h3 className="font-semibold text-gray-900 mb-3">🎭 Experiencias Únicas:</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li><strong>Welcome to Rome:</strong> Museo interactivo sobre historia de Roma</li>
          <li><strong>Ghetto Judío:</strong> Barrio histórico con mejor comida kosher</li>
          <li><strong>Aventino:</strong> Mirar por cerradura = vista San Pedro perfecta</li>
          <li><strong>Testaccio:</strong> Barrio gourmet con mercado y vida nocturna</li>
          <li><strong>Appian Way:</strong> Calzada romana antigua para pasear/bici</li>
        </ul>
      </div>
      
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <h3 className="font-semibold text-gray-900 mb-3">🚂 Excursiones de un Día:</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li><strong>Tivoli:</strong> Villa d'Este y Villa Adriana (30 min tren)</li>
          <li><strong>Ostia Antica:</strong> Pompeya sin turistas (25 min tren)</li>
          <li><strong>Florencia:</strong> Arte renacentista (1h30 tren alta velocidad)</li>
          <li><strong>Nápoles + Pompeya:</strong> Ciudad vibrante + ruinas (1h tren)</li>
          <li><strong>Castelgandolfo:</strong> Residencia verano del Papa con jardines</li>
        </ul>
      </div>
    </div>

    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-6">
      <a href="https://gyg.me/dqdnZ6xS" target="_blank" rel="noopener noreferrer"
         className="btn-hotel">
        <span>🌊 Excursión a Pompeya, Costa Amalfitana y Positano</span>
        <ExternalLink className="external-icon" />
      </a>
    </div>

    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-4">
      <a href="https://gyg.me/p48HIjTK" target="_blank" rel="noopener noreferrer"
         className="btn-hotel">
        <span>🏛️ Excursión a Florencia y Pisa</span>
        <ExternalLink className="external-icon" />
      </a>
    </div>

    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-4">
      <a href="https://gyg.me/kqtptdDS" target="_blank" rel="noopener noreferrer"
         className="btn-hotel">
        <span>🍷 Excursión a la Toscana y Montepulciano con almuerzo y vinos</span>
        <ExternalLink className="external-icon" />
      </a>
    </div>
  </div>

  <div id="recomendaciones" className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
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
          Viaja sin preocuparte por las comisiones bancarias. Revolut te permite pagar en euros sin cargos adicionales,
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

  <div id="gastronomia" className="bg-gradient-to-br from-amber-50 via-red-50 to-orange-50 border border-amber-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 flex items-center">
      🍝 Dónde Comer Bien en Roma
    </h2>
    <p className="text-gray-600 mb-6">Los mejores restaurantes organizados por zonas, probados y recomendados</p>

    <div className="space-y-6">
      <div className="bg-white border border-red-200 rounded-xl p-5 shadow-md">
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
          <span className="text-2xl mr-2">📍</span>
          Trastevere (ambiente local y muy buen comer)
        </h3>
        <p className="text-sm text-gray-600 mb-4">El barrio más auténtico de Roma, perfecto para probar la cocina tradicional</p>

        <div className="space-y-3">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-100">
            <h4 className="font-bold text-gray-900 mb-1">Da Enzo al 29</h4>
            <p className="text-sm text-gray-700 mb-2">Trattoria imprescindible, la mejor cocina romana</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Trattoria+Da+Enzo+al+29,+29+Via+dei+Vascellari,+Roma,+Lazio&query_place_id=ChIJfy613ThgLxMR-Kr1iDROgrU"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-1">Tonnarello</h4>
            <p className="text-sm text-gray-700 mb-2">Pastas romanas clásicas</p>
            <a
              href="https://www.google.com/maps/place/Tonnarello,+V.+della+Paglia,+1%2F2%2F3,+00153+Roma+RM,+Italia/@41.889804,12.4693004,16z/data=!4m6!3m5!1s0x132f603881103955:0x40ce99886a2ccd58!8m2!3d41.889804!4d12.4693004!16s%2Fg%2F11bzt49h25"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-1">Nannarella</h4>
            <p className="text-sm text-gray-700 mb-2">Trattoria tradicional</p>
            <a
              href="https://www.google.com/maps/place/Nannarella,+Osteria,+Roma+Trastevere/@41.8889194,12.4707297,18z/data=!3m1!4b1!4m5!3m4!1s0x132f61e8881c2df3:0x219e0ff8b9b1ba94!8m2!3d41.8889194!4d12.4707297"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-1">Otello</h4>
            <p className="text-sm text-gray-700 mb-2">Trattoria familiar auténtica</p>
            <a
              href="https://www.google.com/maps/place/Otello,+Via+della+Pelliccia,+47%2F53,+00153+Roma+RM,+Italia/@41.8903949,12.4691832,16z/data=!4m6!3m5!1s0x132f60477bad7269:0x9817fc42c77843b2!8m2!3d41.8903949!4d12.4691832!16s%2Fg%2F1tj6l5sg"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-1">Trapizzino</h4>
            <p className="text-sm text-gray-700 mb-2">Comida rápida típica romana (invento local)</p>
            <a
              href="https://www.google.com/maps/place/Trapizzino+%7C+Trastevere,+Piazza+Trilussa,+46,+00153+Roma+RM,+Italia/@41.891494,12.4698437,16z/data=!4m6!3m5!1s0x132f6047a4202f85:0x764672d7a398ae61!8m2!3d41.891494!4d12.4698437!16s%2Fg%2F11d_z0cfn_"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-1">Supplì Roma</h4>
            <p className="text-sm text-gray-700 mb-2">Comida italiana para llevar (supplì y street food)</p>
            <a
              href="https://www.google.com/maps/place/Suppl%C3%AC+Roma,+Via+di+S.+Francesco+a+Ripa,+137,+00153+Roma+RM,+Italia/@41.8871466,12.4717456,16z/data=!4m6!3m5!1s0x132f6039d2a05089:0x2e6db3fc819f52fc!8m2!3d41.8871466!4d12.4717456!16s%2Fg%2F1tdtyms1"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white border border-amber-200 rounded-xl p-5 shadow-md">
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
          <span className="text-2xl mr-2">📍</span>
          Monti (cerca del Coliseo, muy buen ambiente)
        </h3>
        <p className="text-sm text-gray-600 mb-4">Zona alternativa con excelentes opciones gastronómicas</p>

        <div className="space-y-3">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-1">La Taverna dei Monti</h4>
            <p className="text-sm text-gray-700 mb-2">Clásico italiano</p>
            <a
              href="https://www.google.com/maps?cid=14212988574978379481"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-1">La Nuova Piazzetta</h4>
            <p className="text-sm text-gray-700 mb-2">Trattoria local</p>
            <a
              href="https://www.google.com/maps/place/La+Nuova+Piazzetta,+Vicolo+del+Buon+Consiglio,+23%2Fa,+00184+Roma+RM,+Italia/@41.894635,12.4907566,16z/data=!4m14!1m7!3m6!1s0x132f61ae0f0809b1:0xc53eadce28458ed9!2sLa+Taverna+Dei+Monti,+Via+del+Boschetto,+41,+00184+Roma+RM,+Italia!8m2!3d41.8982185!4d12.4903152!16s%2Fg%2F1v_hw5hh!3m5!1s0x132f61b3e4df46e5:0x50ba1a32752983bb!8m2!3d41.8933246!4d12.489191!16s%2Fg%2F1tl6ncbl"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white border border-blue-200 rounded-xl p-5 shadow-md">
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
          <span className="text-2xl mr-2">📍</span>
          Centro Histórico (Navona / Panteón / Trevi)
        </h3>
        <p className="text-sm text-gray-600 mb-4">En pleno corazón turístico, opciones de calidad</p>

        <div className="space-y-3">
          <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg p-4 border border-blue-100">
            <h4 className="font-bold text-gray-900 mb-1">Armando al Pantheon</h4>
            <p className="text-sm text-gray-700 mb-2">Romano de toda la vida (reservar con antelación)</p>
            <a
              href="https://www.google.com/maps/place/data=!4m2!3m1!1s0x132f6051d8fd0673:0x91fde7e0e4de70fe?sa=X&ved=1t:8290&ictx=111"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-4 border border-amber-100">
            <h4 className="font-bold text-gray-900 mb-1">Roscioli</h4>
            <p className="text-sm text-gray-700 mb-2">Icónico (calidad premium, caro pero excelente)</p>
            <a
              href="https://www.google.com/maps/place/data=!4m2!3m1!1s0x132f6048ccbe3ee1:0x260f74732f55ad49?sa=X&ved=1t:8290&ictx=111"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-1">Osteria da Fortunata</h4>
            <p className="text-sm text-gray-700 mb-2">Pasta fresca hecha a mano (espectáculo verla hacer)</p>
            <a
              href="https://www.google.com/maps/place/Osteria+da+Fortunata,+Via+del+Pellegrino,+11%2F12,+00186+Roma+RM,+Italia/@41.8962969,12.4713115,17z/data=!4m9!1m2!2m1!1sOsteria+da+Fortunata!3m5!1s0x132f60458de1f227:0xe393531b25d31389!8m2!3d41.8962969!4d12.4713115!16s%2Fg%2F11b6dgd4__"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-300 rounded-xl p-5 shadow-md">
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
          <span className="text-2xl mr-2">📍</span>
          Termini (zona estación central)
        </h3>
        <p className="text-sm text-gray-600 mb-4">Opción práctica cerca de la estación</p>

        <div className="space-y-3">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-1">Mercado Central</h4>
            <p className="text-sm text-gray-700 mb-2">Mercado gastronómico moderno con varios puestos de comida</p>
            <a
              href="https://www.google.com/maps/place/Mercado+Central,+Via+Giovanni+Giolitti,+36,+00185+Roma+RM,+Italia/@41.8988083,12.5034472,16z/data=!4m6!3m5!1s0x132f61a3aebdd395:0xc6574c1d49c0664d!8m2!3d41.8988083!4d12.5034472!16s%2Fg%2F11c1tr6ydp"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-5 shadow-md">
        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
          <span className="text-2xl mr-2">🍨</span>
          Gelaterías Imprescindibles
        </h3>
        <p className="text-sm text-gray-600 mb-4">Los mejores gelatos artesanales de Roma</p>

        <div className="space-y-3">
          <div className="bg-white rounded-lg p-4 border border-pink-100">
            <h4 className="font-bold text-gray-900 mb-1">Giolitti</h4>
            <p className="text-sm text-gray-700 mb-2">Histórico desde 1900</p>
            <a
              href="https://www.google.com/maps/place/Giolitti/@41.9010589,12.4772467,15z/data=!4m5!3m4!1s0x0:0x38610a40a28f8107!8m2!3d41.9010589!4d12.4772467?ucbcb=1"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>

          <div className="bg-white rounded-lg p-4 border border-pink-100">
            <h4 className="font-bold text-gray-900 mb-1">Venchi</h4>
            <p className="text-sm text-gray-700 mb-2">Chocolate y gelato (cadena de calidad, en Via del Corso)</p>
            <a
              href="https://www.google.com/maps/place/Venchi+Cioccolato+e+Gelato+Via+del+Corso,+Via+del+Corso,+335,+00186+Roma+RM,+Italia/@41.9001204,12.4806874,16z/data=!4m6!3m5!1s0x132f6052598314d7:0x3cda2674f907a036!8m2!3d41.9001204!4d12.4806874!16s%2Fg%2F11c37_ljkz"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>

          <div className="bg-white rounded-lg p-4 border border-pink-100">
            <h4 className="font-bold text-gray-900 mb-1">Gelateria La Romana</h4>
            <p className="text-sm text-gray-700 mb-2">Gelato artesanal desde 1947</p>
            <a
              href="https://www.google.com/maps/place/Gelateria+La+Romana+dal+1947,+Via+Venti+Settembre,+60,+00184+Roma+RM,+Italia/@41.9078115,12.4989565,17z/data=!4m9!1m2!2m1!1sGelateria+La+Romana!3m5!1s0x132f61a8f18667fd:0x43fdabdab2d62dbf!8m2!3d41.9078115!4d12.4989565!16s%2Fg%2F1q5bqmffh"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Ver en Google Maps
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="transporte" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🚇 Sistema de Transporte Público de Roma</h2>
    
    <div className="bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 rounded-xl p-6">
      <h4 className="font-bold text-gray-900 mb-4">Red ATAC (Metro + Autobús + Tranvía)</h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h5 className="font-semibold text-red-600 mb-2">🚇 Metro</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• 3 líneas: A (roja), B (azul), C (verde)</li>
            <li>• Frecuencia: 5-10 minutos</li>
            <li>• Horario: 5:30-23:30 (viernes/sábado hasta 1:30)</li>
            <li>• Cubre principales atracciones</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h5 className="font-semibold text-blue-600 mb-2">🚌 Autobuses</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Red muy extensa</li>
            <li>• Algunos 24 horas</li>
            <li>• Frecuencia: 10-15 min</li>
            <li>• Conectan todo Roma</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h5 className="font-semibold text-green-600 mb-2">🚊 Tranvías</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• 6 líneas principales</li>
            <li>• Conectan centro y barrios</li>
            <li>• Tranvía 8 va a Trastevere</li>
            <li>• Mismo billete que metro/bus</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <h5 className="font-semibold text-gray-900 mb-3">Billetes y Tarifas (2026):</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="mb-2"><strong>Billete sencillo (BIT):</strong> 1,50€ (100 min)</p>
            <p className="mb-2"><strong>Bono 24 horas:</strong> 7€</p>
            <p className="mb-2"><strong>Bono 48 horas:</strong> 12,50€</p>
            <p className="mb-2"><strong>Bono 72 horas:</strong> 18€ (perfecto para este planning)</p>
          </div>
          <div>
            <p className="mb-2"><strong>Bono 7 días:</strong> 24€</p>
            <p className="mb-2"><strong>Dónde comprar:</strong> Estancos, metro, quioscos</p>
            <p className="mb-2"><strong>Validar:</strong> Siempre al subir (máquinas amarillas)</p>
            <p className="mb-2"><strong>Multa sin ticket:</strong> 50€ + precio billete</p>
          </div>
        </div>
      </div>

      <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
        <p className="font-medium text-red-800 mb-1">⚠️ Importante sobre el transporte en Roma</p>
        <p className="text-red-700 text-xs">
          El metro de Roma NO llega a todos los sitios turísticos (no hay metro cerca del Panteón, Fontana di Trevi, Campo dei Fiori...). 
          Muchas veces es mejor caminar o usar autobús. ¡Los taxis son caros y el tráfico es denso!
        </p>
      </div>

      <div className="bg-green-100 border border-green-300 rounded-lg p-3">
        <p className="font-medium text-green-800 mb-1">💡 Consejo Pro</p>
        <p className="text-green-700 text-xs">
          El centro histórico de Roma es muy caminable. Plaza España → Trevi → Panteón → Navona se hace perfectamente andando (30-40 min total). 
          Usa el metro/bus solo para distancias largas (ej: Vaticano ↔ Coliseo).
        </p>
      </div>
    </div>
  </div>

  <div id="consejos" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-6 sm:p-8 shadow-md mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎯 Consejos Finales para tu Viaje a Roma</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">✅ Imprescindibles que NO puedes perderte:</h3>
          <ul className="text-sm text-gray-700 space-y-2 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Coliseo con guía (reserva 30 días antes)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>Museos Vaticanos y Capilla Sixtina (60 días antes)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Tirar moneda en Fontana di Trevi de espaldas</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Cenar en Trastevere al atardecer</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Probar tiramisú preparado al momento</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Caminar sin rumbo por el centro histórico</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Consejos de Viajero Experimentado:</h3>
          <ul className="text-sm text-gray-700 space-y-2 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Reserva entradas online SIEMPRE (Coliseo, Vaticano se agotan)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Vístete apropiado para iglesias (hombros y rodillas cubiertos)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Cuidado con carteristas en metro y zonas turísticas</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Agua de fuentes públicas (nasone) es potable y gratis</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>Evita restaurantes con menú turístico en fotos</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>Los romanos cenan tarde (21:00-22:00)</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
        <h3 className="text-lg font-bold text-yellow-800 mb-3">💡 Consejos para Ahorrar en Roma:</h3>
        <ul className="text-sm text-yellow-700 space-y-2 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Evita restaurantes en zonas turísticas (cerca Coliseo, Trevi, Vaticano)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Come aperitivo (spritz + buffet libre) en lugar de cena (18:00-21:00)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Supermercados: Conad, Carrefour Express para comida económica</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Agua: Rellena botellas en las fuentes públicas (nasone) ¡Es gratis y potable!</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Museos gratis: Primer domingo del mes (Coliseo, Museos Capitolinos)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Mercado Central Termini: Gran variedad de comida a buen precio</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Pizza al taglio: Pizza por trozos, económica y deliciosa</li>
        </ul>
      </div>
    </div>
  </div>

  <div id="presupuestos" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">💰 Presupuestos Detallados por Estilo</h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-green-800 mb-3">🎒 Mochilero</h3>
        <div className="text-2xl font-bold text-green-600 mb-2">60-80€/día</div>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• Hostel: 25-35€</li>
          <li>• Comida: 20-25€</li>
          <li>• Transporte: 5-10€</li>
          <li>• Atracciones: 10-15€</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-blue-800 mb-3">🏨 Estándar</h3>
        <div className="text-2xl font-bold text-blue-600 mb-2">120-160€/día</div>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Hotel 3*: 70-90€</li>
          <li>• Comida: 30-45€</li>
          <li>• Transporte: 10€</li>
          <li>• Atracciones: 15-25€</li>
        </ul>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-purple-800 mb-3">👑 Lujo</h3>
        <div className="text-2xl font-bold text-purple-600 mb-2">250-400€/día</div>
        <ul className="text-sm text-purple-700 space-y-1">
          <li>• Hotel 5*: 150-250€</li>
          <li>• Comida: 70-100€</li>
          <li>• Transporte: 20€</li>
          <li>• Atracciones: 30-50€</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Footer */}
  <div className="text-center text-gray-600 text-sm mt-8">
    <p className="mb-2">
      Guía actualizada en Octubre 2026 | Información verificada y precios actuales
    </p>
    <p>
      ¡Que disfrutes Roma al máximo! 🇮🇹
    </p>
  </div>
</article>
</>
);
};

export default RomaGuideArticle;