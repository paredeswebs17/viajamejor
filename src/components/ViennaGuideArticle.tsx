import React, { useState, useRef } from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import StickyTableOfContents from './StickyTableOfContents';

interface ViennaGuideArticleProps {
onBack: () => void;
}

const ViennaGuideArticle: React.FC<ViennaGuideArticleProps> = ({ onBack }) => {
  const [expandedAirport, setExpandedAirport] = useState<string | null>(null);
  const [expandedZone, setExpandedZone] = useState<string | null>(null);

  const centroHistoricoRef = useRef<HTMLDivElement>(null);
  const leopoldstadtRef = useRef<HTMLDivElement>(null);

  const toggleAirport = (airportId: string) => {
    setExpandedAirport(expandedAirport === airportId ? null : airportId);
  };

  const toggleZone = (zoneId: string) => {
    const newExpandedZone = expandedZone === zoneId ? null : zoneId;
    setExpandedZone(newExpandedZone);

    if (newExpandedZone === zoneId) {
      setTimeout(() => {
        const refMap: { [key: string]: React.RefObject<HTMLDivElement> } = {
          'centro-historico': centroHistoricoRef,
          'leopoldstadt-landstrasse': leopoldstadtRef
        };

        const ref = refMap[zoneId];
        if (ref?.current) {
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const sections = [
    { id: 'por-que-visitar', title: '¿Por qué visitar Viena?' },
    { id: 'llegada-aeropuerto', title: 'Llegada y Aeropuerto' },
    { id: 'donde-dormir', title: 'Dónde Alojarse' },
    { id: 'itinerario', title: 'Itinerario Imperial' },
    { id: 'dia-1', title: 'Día 1: Entrada Triunfal a la Capital Musical', level: 2 },
    { id: 'dia-2', title: 'Día 2: Arte, Diversión y Arquitectura Única', level: 2 },
    { id: 'dia-3', title: 'Día 3: Hofburg, Sacher y Gran Final Musical', level: 2 },
    { id: 'mas-lugares', title: 'Más Lugares en Viena' },
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
className="inline-flex items-center text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-xl transition-all duration-200 font-medium border border-sky-200 hover:border-sky-300 mb-6 shadow-sm hover:shadow-md"
>
<ArrowLeft className="h-4 w-4 mr-2" />
Volver a guías
</button>

    <div className="mb-6">
      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
        Guía Imperial
      </span>
    </div>

    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
      Viena en 3 Días: Capital Imperial de la Música y el Arte
    </h1>

    <div className="flex flex-col gap-4 mb-6 items-start">
      <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
          <Clock className="h-3 w-3 mr-1" />
          18 min
        </span>
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
          <MapPin className="h-3 w-3 mr-1" />
          Viena
        </span>
      </div>
      
      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: 'Viena en 3 Días: Guía Imperial Completa con Música Clásica y Palacios',
              text: 'Descubre la capital musical de Europa con nuestro itinerario optimizado',
              url: window.location.href,
            })
            .catch((error) => console.log('Error sharing', error));
          } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
              alert('Enlace copiado al portapapeles');
            }).catch(() => {
              window.open(`https://twitter.com/intent/tweet?text=Viena en 3 Días: Guía Imperial&url=${encodeURIComponent(window.location.href)}`, '_blank');
            });
          }
        }}
        className="inline-flex items-center text-gray-600 hover:text-purple-600 bg-gray-100 hover:bg-purple-50 px-3 py-2 rounded-full transition-all duration-200 text-xs border border-gray-200 hover:border-purple-300 self-start shadow-sm hover:shadow-md"
      >
        <Share2 className="h-3 w-3 mr-1" />
        <span>Compartir</span>
      </button>
    </div>
  </div>

  <div className="mb-8">
    <img
      src="https://images.pexels.com/photos/8568542/pexels-photo-8568542.jpeg"
      alt="Ópera Estatal de Viena iluminada por la noche con su majestuosa fachada neorrenacentista"
      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
    />
  </div>

  {/* SECCIÓN 1: ¿POR QUÉ VISITAR VIENA? */}
  <div id="por-que-visitar" className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">¿Por qué visitar Viena?</h2>

    <div className="space-y-4 text-gray-700">
      <p className="text-base leading-relaxed">
        Viena es la capital imperial de Europa, una ciudad donde la historia, la música y el arte se fusionan en cada esquina. Con sus majestuosos palacios, cafés centenarios y una tradición musical sin igual, es el destino perfecto para quienes buscan cultura y elegancia.
      </p>

      <p className="text-base leading-relaxed">
        Pero Viena es mucho más que Mozart y Sissi. Es disfrutar de un Sachertorte en un café histórico mientras lees el periódico en un atril de madera. Es pasear por el Palacio de Schönbrunn imaginando la vida de los Habsburgo. Es asistir a un concierto de música clásica en uno de los auditorios más prestigiosos del mundo. Es caminar por calles imperiales que parecen detenidas en el tiempo.
      </p>

      <p className="text-base leading-relaxed font-medium text-gray-900">
        Si buscas una ciudad que combine arquitectura imperial impresionante, tradición musical legendaria, gastronomía refinada y un ambiente cultural único, Viena es tu destino perfecto.
      </p>
    </div>
  </div>

  {/* SECCIÓN 2: LLEGADA Y CONEXIONES */}
  <div id="llegada-aeropuerto" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">✈️ Llegada y Conexiones desde el Aeropuerto</h2>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
      <p className="text-sm text-blue-900">
        <strong>Haz clic en el aeropuerto de llegada</strong> para ver todas las opciones de transporte disponibles con precios actualizados.
      </p>
    </div>

    <button
      onClick={() => toggleAirport('vienna')}
      className="w-full bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">✈️</span>
        <span className="font-bold text-lg">Aeropuerto de Viena (VIE)</span>
      </div>
      {expandedAirport === 'vienna' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
    </button>

    {expandedAirport === 'vienna' && (
      <div className="mb-8 animate-fadeIn">
        <h3 className="text-lg font-bold text-gray-900 mb-4 mt-4">📍 Desde Aeropuerto de Viena (VIE)</h3>

        <div className="mb-6">
        <h4 className="text-md font-bold text-gray-900 mb-4">🚄 CAT City Airport Train - La Opción Premium</h4>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">Información esencial:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="text-sm text-gray-700 space-y-2 list-none">
                  <li className="flex items-start"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Precio:</strong> desde 14€</span></li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Horario:</strong> 06:09-23:39 cada 30 min</span></li>
                </ul>
                <ul className="text-sm text-gray-700 space-y-2 list-none">
                  <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Duración:</strong> 16 minutos sin paradas</span></li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Destino:</strong> Wien-Mitte (conexión U3/U4)</span></li>
                </ul>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-3">Ventajas:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="text-sm text-gray-700 space-y-2 list-none">
                  <li className="flex items-start"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Tren más rápido al centro</span></li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Asientos amplios con WiFi</span></li>
                </ul>
                <ul className="text-sm text-gray-700 space-y-2 list-none">
                  <li className="flex items-start"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Sin restricciones de equipaje</span></li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Compra online anticipada</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="https://gyg.me/fLZy1uTy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🚄 Comprar CAT online
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
        <h4 className="font-bold text-gray-900 mb-3">🚌 Vienna Airport Lines - Autobús Directo</h4>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">VAL2: Línea Morzinplatz/Schwedenplatz</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p><strong>Precio:</strong> 11 € adulto</p>
                <p><strong>Duración:</strong> 20-30 min</p>
              </div>
              <div>
                <p><strong>Destino:</strong> Centro histórico directo</p>
                <p><strong>Horario:</strong> 03:00-23:30</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">VAL1: Línea Westbahnhof</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p><strong>Precio:</strong> 11 € adulto</p>
                <p><strong>Duración:</strong> 35-45 min</p>
              </div>
              <div>
                <p><strong>Destino:</strong> Estación Oeste + conexiones</p>
                <p><strong>Paradas:</strong> Múltiples hoteles</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">VAL3: Línea Estación Central</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p><strong>Precio:</strong> 11 € adulto</p>
                <p><strong>Duración:</strong> 25-35 min</p>
              </div>
              <div>
                <p><strong>Destino:</strong> Wien Hauptbahnhof</p>
                <p><strong>Conexiones:</strong> Todas las líneas metro</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <a href="https://www.viennaairportlines.at/en/informationen/unser-streckennetz" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            🚌 Horarios y rutas Vienna Airport Lines
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
        <h4 className="font-bold text-gray-900 mb-3">🚕 Traslado Privado - Máximo Confort</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-700 mb-1"><strong>Precio:</strong> Desde 75 € (hasta 3 personas)</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Duración:</strong> 30-50 min (según tráfico)</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Ventajas:</strong> Puerta a puerta</p>
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-1"><strong>Ideal para:</strong> Grupos, familias, equipaje</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Reserva:</strong> 24h antes recomendado</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Incluye:</strong> Espera + ayuda equipaje</p>
          </div>
        </div>
        <div className="mt-4">
          <a href="https://gyg.me/8wpM6c41" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            🚕 Reservar traslado privado
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
      </div>
      </div>
    )}
  </div>

  {/* SECCIÓN 3: DÓNDE ALOJARSE */}
  <div id="donde-dormir" className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center">
      🏨 Dónde Alojarse en Viena
    </h2>
    <p className="text-gray-600 mb-6">Las mejores zonas y hoteles recomendados para tu estancia</p>

    <div className="space-y-6">
      <div ref={centroHistoricoRef} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
            <span className="text-2xl">🏛️</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Centro Histórico</h3>
            <p className="text-sm text-gray-600">La ubicación más cómoda para visitar Viena</p>
          </div>
        </div>

        <button
          onClick={() => toggleZone('centro-historico')}
          className="w-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏨</span>
            <div className="text-left">
              <span className="font-bold text-lg block">
                {expandedZone === 'centro-historico' ? 'Ocultar hoteles' : 'Ver 3 hoteles recomendados'}
              </span>
              <span className="text-sm text-sky-100 block">
                Hoteles 4⭐ en el corazón de Viena
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
          <div className="bg-white rounded-2xl p-5 border-2 border-sky-200 flex flex-col shadow-lg hover:shadow-xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">🏨</span>
              <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
            </div>
            <div className="flex-grow">
              <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Buxbaum Beletage Design & Boutique Hotel</h4>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel boutique rodeado de edificios históricos que ofrece aire acondicionado y sauna.</p>
              <div className="bg-sky-50 border-l-4 border-sky-400 rounded-r-lg p-3 mb-4">
                <p className="text-xs text-sky-800 leading-relaxed">
                  <span className="text-base mr-1">📍</span>
                  <strong>Qué hay cerca:</strong> Catedral de San Esteban (2 min a pie), calles comerciales Kärntner Strasse y Graben (3 min), Ópera Estatal (10 min), metro Schwedenplatz (4 min) y Stephansplatz (7 min), aeropuerto (20 min en coche).
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <a
                href="https://booking.tpk.lv/02HJo6CR"
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
              <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Hotel Royal</h4>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel que ofrece WiFi gratuita e incluye 2 excelentes restaurantes italianos. Las habitaciones están insonorizadas y tienen aire acondicionado, TV por cable, zona de estar, minibar y baño.</p>
              <div className="bg-cyan-50 border-l-4 border-cyan-400 rounded-r-lg p-3 mb-4">
                <p className="text-xs text-cyan-800 leading-relaxed">
                  <span className="text-base mr-1">📍</span>
                  <strong>Qué hay cerca:</strong> Catedral de San Esteban (muy cerca), calles comerciales Graben y Kärntner Straße (al inicio), metro Stephansplatz (a pocos pasos).
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <a
                href="https://booking.tpk.lv/E1u4RhD6"
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
              <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Hotel Capricorno</h4>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">Elegante hotel que ofrece habitaciones insonorizadas con aire acondicionado, TV vía satélite con canales Sky, tableta con WiFi gratuita, minibar y caja fuerte.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-3 mb-4">
                <p className="text-xs text-blue-800 leading-relaxed">
                  <span className="text-base mr-1">📍</span>
                  <strong>Qué hay cerca:</strong> Catedral de San Esteban (8 min a pie), metro Schwedenplatz (intercambiador U1/U4 a 100 m), tranvía turístico amarillo que recorre el Ring, diversos pubs y restaurantes en las inmediaciones.
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <a
                href="https://booking.tpk.lv/RVD7nB3P"
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
            <strong>✅ Por qué elegir esta zona:</strong> El corazón de Viena, cerca del Palacio Hofburg, Catedral de San Esteban y la Ópera. Todo a pie o metro cercano, muchos restaurantes y cafés, zona segura y animada.
          </p>
        </div>
          </div>
        )}
      </div>

      <div ref={leopoldstadtRef} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
            <span className="text-2xl">🚇</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Leopoldstadt y Landstraße</h3>
            <p className="text-sm text-gray-600">Zonas bien conectadas con excelente relación calidad-precio</p>
          </div>
        </div>

        <button
          onClick={() => toggleZone('leopoldstadt-landstrasse')}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏨</span>
            <div className="text-left">
              <span className="font-bold text-lg block">
                {expandedZone === 'leopoldstadt-landstrasse' ? 'Ocultar hoteles' : 'Ver 3 hoteles recomendados'}
              </span>
              <span className="text-sm text-emerald-100 block">
                Mejor relación calidad-precio
              </span>
            </div>
          </div>
          {expandedZone === 'leopoldstadt-landstrasse' ?
            <ChevronUp className="w-6 h-6 group-hover:transform group-hover:-translate-y-1 transition-transform" /> :
            <ChevronDown className="w-6 h-6 group-hover:transform group-hover:translate-y-1 transition-transform" />
          }
        </button>

        {expandedZone === 'leopoldstadt-landstrasse' && (
          <div className="animate-fadeIn border-t border-gray-200 pt-4">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
          <div className="bg-white rounded-2xl p-5 border-2 border-emerald-200 flex flex-col shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">🏨</span>
              <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
            </div>
            <div className="flex-grow">
              <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Henriette Stadthotel Vienna</h4>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel que ofrece WiFi gratuita y habitaciones amplias y luminosas con aire acondicionado, TV de pantalla plana y baño con secador de pelo. Sirve un desayuno buffet abundante y cuenta con recepción 24 horas.</p>
              <div className="bg-emerald-50 border-l-4 border-emerald-400 rounded-r-lg p-3 mb-4">
                <p className="text-xs text-emerald-800 leading-relaxed">
                  <span className="text-base mr-1">📍</span>
                  <strong>Qué hay cerca:</strong> Metro Nestroyplatz (a pocos pasos), catedral de San Esteban (2 paradas de metro), parque de atracciones Prater (10 min a pie), centro internacional de Viena y centro de exposiciones Messe Wien (poca distancia en metro).
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <a
                href="https://booking.tpk.lv/is1dcdUr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
              >
                <span className="mr-2">Ver disponibilidad</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border-2 border-teal-200 flex flex-col shadow-lg hover:shadow-xl hover:border-teal-300 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">🏨</span>
              <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
            </div>
            <div className="flex-grow">
              <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Hotel Spiess & Spiess</h4>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel ecológico que ofrece habitaciones y suites elegantes e hipoalergénicas con aire acondicionado, suelo radiante, TV de pantalla plana y baño de lujo. Cuenta con sauna y zona de relajación gratuita. Desayuno premium con productos ecológicos de la zona.</p>
              <div className="bg-teal-50 border-l-4 border-teal-400 rounded-r-lg p-3 mb-4">
                <p className="text-xs text-teal-800 leading-relaxed">
                  <span className="text-base mr-1">📍</span>
                  <strong>Qué hay cerca:</strong> Metro Rochusgasse línea U3 (100 m), plaza Stephansplatz (5 min en metro), estación de trenes al aeropuerto (1 parada de metro), aparcamiento Erdberg (3 paradas).
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <a
                href="https://booking.tpk.lv/JHRNWZHd"
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
              <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐</span>
            </div>
            <div className="flex-grow">
              <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">ibis Styles Wien Messe Prater</h4>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel con habitaciones con aire acondicionado, escritorio y TV de pantalla plana. Sirve desayuno buffet o continental a diario. Ofrece servicio de alquiler de coche.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-3 mb-4">
                <p className="text-xs text-blue-800 leading-relaxed">
                  <span className="text-base mr-1">📍</span>
                  <strong>Qué hay cerca:</strong> Canal del Danubio (junto), parque Prater y noria gigante (400 m), Messe Wien y estadio Ernst Happel (cerca), centro de la ciudad (10 min a pie), Donauinsel (pocos minutos en metro), aeropuerto internacional de Viena (16 km).
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <a
                href="https://booking.tpk.lv/mNvXHjff"
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
            <strong>✅ Por qué elegir esta zona:</strong> Distritos bien conectados al centro con ambiente más local y auténtico. Perfectos para quienes buscan mejor relación calidad-precio sin renunciar a la comodidad.
          </p>
        </div>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* SECCIÓN 4: ITINERARIO IMPERIAL */}
  <div id="itinerario" className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Itinerario Imperial</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
        <thead>
          <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">JORNADA</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EXPERIENCIAS IMPERIALES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 1</td>
            <td className="border border-gray-300 px-4 py-3">Rathausplatz + Parlamento + Café Central + Graben + Reloj Anker + Catedral San Esteban + Casa Mozart + Schönbrunn</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 2</td>
            <td className="border border-gray-300 px-4 py-3">Prater + Hundertwasserhaus + Stadtpark + Iglesia San Carlos Borromeo + Palacio Belvedere ("El Beso" Klimt)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 3</td>
            <td className="border border-gray-300 px-4 py-3">Palacio Hofburg (Sisi + Biblioteca + Equitación) + Café Sacher + Ópera + Kärntner Straße + Concierto final</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
    </div>
  </div>

  {/* DÍA 1 - COMPLETO Y DETALLADO */}
  <div id="dia-1" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">1</span>
      DÍA 1: Entrada Triunfal a la Capital Musical
    </h2>

    {/* Despertar Imperial */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mr-3"></div>
        Despertar Imperial (9:00h)
      </h3>
      <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Rathausplatz y Ayuntamiento de Viena - Majestuosidad Neogótica</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/29982307/pexels-photo-29982307.jpeg"
            alt="Ayuntamiento de Viena (Rathaus) con su impresionante arquitectura neogótica"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Comenzamos nuestra aventura imperial en una de las plazas más emblemáticas de Viena, donde se alza majestuoso el Wiener Rathaus (Ayuntamiento de Viena). 
          Este edificio neogótico, construido entre 1872 y 1883, es una obra maestra arquitectónica que rivaliza con los mejores ayuntamientos europeos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Visita al Interior del Ayuntamiento:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Entrada gratuita con audioguía en español</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Horarios: Lun-Vie 8:00-18:00 (excepto eventos)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Salas históricas: Festsaal, Gemeinderat</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Duración recomendada: 30-45 minutos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Exposiciones temporales frecuentes</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Eventos en Rathausplatz durante el año:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Mercado de Navidad (Nov-Ene): Uno de los más grandes</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Cine al aire libre (Jul-Sep): Películas clásicas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Pista de patinaje (Ene-Mar): 8.000 m² de hielo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Festival de música (May-Jun): Conciertos gratuitos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Wiener Festwochen: Teatro y ópera</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <h5 className="font-semibold text-gray-900 mb-2">🏛️ Edificios Adyacentes Destacables:</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <h6 className="font-medium text-gray-900 mb-1">Burgtheater (Teatro Nacional):</h6>
              <p className="mb-2">Considerado uno de los teatros más importantes del mundo germanohablante. Su fachada neoclásica contrasta con el ayuntamiento.</p>
            </div>
            <div>
              <h6 className="font-medium text-gray-900 mb-1">Parlamento de Austria:</h6>
              <p className="mb-2">Edificio neoclásico inaugurado en 1883, sede del poder legislativo austriaco. Destaca la fuente de Pallas Atenea en su entrada.</p>
            </div>
          </div>
        </div>

        <div>
          <a href="https://www.wien.info/es/ver-y-experimentar/monumentos-a-z/ayuntamiento-de-viena-343218" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🏛️ Reservar visita guiada Ayuntamiento</span>
            <ExternalLink className="external-icon" />
          </a>
          <p className="text-xs text-red-600 mt-2">💡 Tip: Llega temprano para evitar grupos turísticos y conseguir las mejores fotos de la plaza vacía.</p>
        </div>
      </div>
    </div>

    {/* Cultura Cafetera */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mr-3"></div>
        Cultura Cafetera Auténtica (10:30h)
      </h3>
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Café Central - Patrimonio Cultural UNESCO desde 2011</h4>
        <div className="mb-4">
          <img
      src="https://images.pexels.com/photos/19599495/pexels-photo-19599495.jpeg"
            alt="Interior histórico del Café Central con sus características bóvedas y ambiente imperial"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Los cafés vieneses son oficialmente Patrimonio Cultural Inmaterial de la Humanidad desde 2011. Café Central, inaugurado en 1876, 
          fue el epicentro intelectual de Viena durante los siglos XIX y XX, frecuentado por figuras como Freud, Trosky, Stalin, y el escritor Peter Altenberg.
        </p>

        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <h5 className="font-semibold text-gray-900 mb-3">📖 Historia Fascinante del Café Central:</h5>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h6 className="font-medium text-gray-900 mb-1">Personajes Históricos Ilustres:</h6>
                <ul className="space-y-1 text-xs">
                  <li>• <strong>Leon Trotsky:</strong> Jugaba al ajedrez aquí antes de la Revolución Rusa</li>
                  <li>• <strong>Sigmund Freud:</strong> Desarrolló ideas para sus teorías psicoanalíticas</li>
                  <li>• <strong>Peter Altenberg:</strong> Vivía prácticamente en el café</li>
                  <li>• <strong>Arthur Schnitzler:</strong> Escribió varias obras aquí</li>
                  <li>• <strong>Adolf Loos:</strong> Arquitecto, diseñó su famoso movimiento</li>
                </ul>
              </div>
              <div>
                <h6 className="font-medium text-gray-900 mb-1">Arquitectura y Diseño:</h6>
                <ul className="space-y-1 text-xs">
                  <li>• <strong>Estilo:</strong> Historicismo del siglo XIX</li>
                  <li>• <strong>Techos:</strong> Bóvedas altas con arcos</li>
                  <li>• <strong>Mobiliario:</strong> Sillas Thonet originales</li>
                  <li>• <strong>Iluminación:</strong> Lámparas de araña históricas</li>
                  <li>• <strong>Periódicos:</strong> Más de 200 diarios internacionales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>

    {/* Corazón Histórico + Reloj Mágico */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-3"></div>
        Corazón Histórico + Reloj Mágico (11:30h)
      </h3>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Graben, Columna de la Peste y el Famoso Reloj Anker</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/24355655/pexels-photo-24355655.jpeg"
            alt="Famoso Reloj Anker en Hoher Markt con sus figuras históricas y mecanismo art nouveau"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          La calle Graben, cuyo nombre deriva de "graben" (foso en alemán antiguo), fue originalmente una zanja defensiva romana. 
          Hoy es una de las calles comerciales más elegantes de Europa, que nos lleva hasta el fascinante Reloj Anker en Hoher Markt, la plaza más antigua de Viena.
        </p>


        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
          <h5 className="font-semibold text-gray-900 mb-3">⛪ Columna de la Peste (Pestsäule) - Monumento Barroco Único:</h5>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 text-sm text-gray-700">
            <div>
              <p className="mb-2">
                Erigida en 1693 por orden del emperador Leopoldo I como agradecimiento por el fin de la peste de 1679 que mató a un tercio de la población vienesa. 
                Es una de las columnas votivas barrocas más impresionantes de Europa.
              </p>
            </div>
            <div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-4 mb-4">
          <h5 className="font-semibold text-gray-900 mb-3">🕐 El Reloj Anker - Obra Maestra Mecánica de 1914:</h5>
          <div className="space-y-3 text-sm text-gray-700">
            <p className="mb-2">
              Situado en Hoher Markt (la plaza más antigua de Viena), el Ankeruhr es una obra maestra del art nouveau creada por Franz von Matsch. 
              Construido entre 1911 y 1914, conecta dos edificios de la compañía de seguros Anker.
            </p>
            

            <div className="bg-amber-100 border border-amber-300 rounded-lg p-3">
              <p className="font-medium text-amber-800 mb-1">🎭 Espectáculo de las 12:00h - ¡No te lo pierdas!</p>
              <p className="text-amber-700 text-xs">
                Cada hora sale una figura y al mediodía, las 12 figuras desfilan durante 15 minutos acompañadas de música especial. Es el momento más mágico y fotogénico. 
                Llega 10 minutos antes para conseguir buen sitio y prepara la cámara.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-emerald-500 rounded-lg p-4 mb-4 mt-4">
          <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
            <span className="mr-2">🎯</span>
            Free Tour por el Centro Histórico de Viena en Español
          </h5>
          <p className="text-sm text-gray-700 mb-3">
            Explora los rincones más monumentales de Viena con un guía local experto. Descubre la historia de Austria y la dinastía de los Habsburgo, la importancia de Viena en la música clásica y ópera, y la cultura gastronómica austriaca con sus famosas cafeterías, punto de encuentro de filósofos y artistas.
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-4 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Duración: 2h 15min</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Inicio: Maria-Theresien-Platz</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Incluye: Ópera, Hofburg, Catedral de San Esteban y más</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Pago: En forma de propinas</li>
          </ul>
          <a href="https://www.freetour.com/es/vienna/free-tour-paseo-por-el-centro-de-viena?referralID=rFW5gyO0D7w7JOqo&campaign=CentroViena"
             target="_blank"
             rel="noopener noreferrer"
             className="btn-hotel">
            <span>🏰 Reservar free tour del Centro Histórico</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>

    {/* Catedral de San Esteban */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
        Catedral de San Esteban - Corazón Espiritual (13:00h)
      </h3>
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Stephansdom - 800 Años de Historia Vienesa</h4>
        <div className="mb-4">
          <img
      src="https://images.pexels.com/photos/10621005/pexels-photo-10621005.jpeg"
            alt="Catedral de San Esteban (Stephansdom) con su icónica torre gótica y tejado de tejas coloridas"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          La Catedral de San Esteban es el símbolo más reconocible de Viena y el corazón espiritual de Austria. 
          Con más de 800 años de historia, ha sido testigo de coronaciones imperiales, bodas reales y momentos cruciales de la historia europea.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🏰 Arquitectura y Dimensiones:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Torre Sur: 136,44 metros (la más alta)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Longitud: 107 metros</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Tejado: 250.000 tejas de colores</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Estilo: Gótico y románico</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Construcción: 1137-1511</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">⛪ Visitas y Horarios:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Entrada libre: Lun-Sáb 6:00-22:00, Dom 7:00-22:00</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Horario para visitas: Lun-Sáb 9:00-11:30 y 13:00-16:30, Dom 13:00-16:30</li>
            </ul>
          </div>
        </div>

        <div>
          <a href="https://gyg.me/EH2OPBYr" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🎫 Tour guiado con subida a torres y museo Dom</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>


    {/* Schönbrunn Tarde */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
        Palacio Schönbrunn - Versalles Austriaco (14:00h)
      </h3>
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">El Versalles de los Habsburgo</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/29689489/pexels-photo-29689489.jpeg"
            alt="Palacio Schönbrunn"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Schönbrunn, residencia de verano de los emperadores austriacos, es uno de los palacios barrocos más importantes de Europa. 
          Con 1.441 habitaciones, fue el centro del poder del Imperio Austro-Húngaro y hogar de María Teresa y Sisí.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">⏰ Horarios y Consejos:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Horarios: 8:30-17:00 (invierno), 8:30-17:30 (verano)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Duración: 2-3 horas completo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Transporte: U4 Schönbrunn (15 min desde centro)</li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
            <a href="https://gyg.me/E0OqaGOy" target="_blank" rel="noopener noreferrer"
               className="btn-hotel">
              <span>🏰 Tour con guía a Palacio y Jardines</span>
              <ExternalLink className="external-icon" />
            </a>
        </div>
      </div>
    </div>
 

   {/* Casa de Mozart */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-3"></div>
        Casa de Mozart - Genio Musical (17:30h)
      </h3>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Mozarthaus Vienna - Donde Vivió el Genio</h4>
        <p className="text-gray-700 mb-4">
          En el número 5 de Domgasse, a solo 2 minutos de la Catedral, se encuentra la única vivienda conservada de Mozart en Viena. 
          Aquí compuso "Las Bodas de Fígaro" y vivió sus años más prósperos (1784-1787).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎼 Información Práctica:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Entrada: 14 € adultos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Horario: 10:00-19:00 diario</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Duración: 45-60 minutos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Audioguía incluida</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>3 plantas de exposición</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎵 Obras Compuestas Aquí:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Las Bodas de Fígaro (1786)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Conciertos para piano K. 482, 488</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Cuartetos de cuerda "Haydn"</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Sonatas para piano</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Música de cámara diversa</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <a href="https://gyg.me/WsBGbqro" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🎼 Entradas Casa de Mozart</span>
            <ExternalLink className="external-icon" />
          </a>
           <a href="https://gyg.me/dVkRMS4u" target="_blank" rel="noopener noreferrer"
               className="btn-hotel">
              <span>👑 Concierto clásico en la casa de Mozart</span>
              <ExternalLink className="external-icon" />
            </a>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
    </div>
  </div>

  {/* DÍA 2 */}
  <div id="dia-2" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">2</span>
      DÍA 2: Arte, Diversión y Arquitectura Única
    </h2>

    {/* Prater */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
        Prater - Diversión Imperial (9:30h)
      </h3>
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Wiener Prater - Parque de Atracciones Histórico</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/5734998/pexels-photo-5734998.jpeg"
            alt="La famosa Noria Gigante (Riesenrad) del Prater de Viena"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El Prater es mucho más que un parque de atracciones: es una institución vienesa desde 1766. 
          Su famosa noria gigante (Wiener Riesenrad) de 1897 es uno de los símbolos más reconocibles de Viena y aparece en innumerables películas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎡 La Noria Gigante (Riesenrad):</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Altura: 64,75 metros</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Construida: 1897</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Precio: 15 € adultos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Duración: 15-20 minutos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Vistas: 360° de Viena</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎠 Otras Atracciones del Prater:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Entrada al parque: Gratuita</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Atracciones individuales: 2-8 €</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Restaurantes tradicionales</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Museo de cera Madame Tussauds</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Planetario de Viena</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <a href="https://gyg.me/iCPMo7F4" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🎡 Entradas Noria Gigante</span>
            <ExternalLink className="external-icon" />
          </a>
          <a href="https://www.prater.at/" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🎠 Información Prater completo</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>

    {/* Hundertwasserhaus */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mr-3"></div>
        Hundertwasserhaus - Arquitectura Única (11:30h)
      </h3>
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Casa Hundertwasser - Arquitectura Revolucionaria</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/16632436/pexels-photo-16632436.jpeg"
            alt="Hundertwasserhaus con su fachada multicolor, ventanas asimétricas y diseño arquitectónico único"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          La Hundertwasserhaus es una de las obras arquitectónicas más fotografiadas de Viena. Diseñada por Friedensreich Hundertwasser entre 1983-1985, 
          representa una revolución contra la arquitectura "racional" con sus líneas onduladas, colores vibrantes y ventanas asimétricas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🏠 Características Únicas:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>52 apartamentos de vivienda social</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>250 ventanas todas diferentes</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Jardines en terrazas y tejados</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Suelos ondulados (no hay líneas rectas)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Fachada multicolor única</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎨 Filosofía Arquitectónica:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Integración con la naturaleza</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Derecho a la ventana personal</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Arquitectura ecológica pionera</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Arte como forma de vida</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

{/* Stadtpark + San Carlos Borromeo */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full mr-3"></div>
        Stadtpark + Iglesia San Carlos Borromeo (12:30h)
      </h3>
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Stadtpark - El Parque de los Músicos y la Iglesia Barroca más Bella</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/27442550/pexels-photo-27442550.jpeg"
            alt="Stadtpark con la famosa estatua dorada de Johann Strauss II y la majestuosa Iglesia de San Carlos Borromeo"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El Stadtpark alberga la estatua más fotografiada de Viena: Johann Strauss II bañado en oro. A pocos minutos caminando, 
          la Iglesia de San Carlos Borromeo (Karlskirche) te deslumbrará con su impresionante cúpula y columnas barrocas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎼 Stadtpark - Parque de los Músicos:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Estatua dorada de Johann Strauss II (1921)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Estatuas de Schubert, Bruckner, Lehar</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Kursalon: salón de conciertos histórico</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Jardines románticos y senderos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Entrada gratuita las 24h</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">⛪ Iglesia San Carlos Borromeo (Karlskirche):</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Obra maestra del barroco austriaco (1737)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Entrada: 8 € (incluye subida a cúpula)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Frescos espectaculares en la cúpula</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Columnas inspiradas en la de Trajano</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Vistas panorámicas desde arriba</li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
            <a href="https://gyg.me/ghHUAcrV" target="_blank" rel="noopener noreferrer"
               className="btn-hotel">
              <span>⛪ Concierto las Cuatro Estaciones de Vivaldi en Karlskirche</span>
              <ExternalLink className="external-icon" />
            </a>
        </div>
      </div>
    </div>
    
    {/* Belvedere */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-amber-400 rounded-full mr-3"></div>
        Palacio Belvedere - "El Beso" de Klimt (14:00h)
      </h3>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Belvedere - Arte y Jardines Barrocos</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/5997778/pexels-photo-5997778.jpeg"
            alt="Palacio Belvedere Superior con sus jardines barrocos y arquitectura imperial austriaca"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El Palacio Belvedere alberga la colección de arte austriaco más importante del mundo, incluyendo "El Beso" de Gustav Klimt. 
          Construido como residencia de verano del Príncipe Eugenio de Saboya, es una obra maestra del barroco austriaco.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎨 Obras Maestras Imprescindibles:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>"El Beso" - Gustav Klimt (1907-1908)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>"Judith I" - Gustav Klimt (1901)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Obras de Egon Schiele</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Colección de arte medieval</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Esculturas barrocas</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🏛️ Información Práctica:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Entrada: 20 € (Belvedere Superior)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Horario: 10:00-18:00 diario</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Duración: 2-3 horas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Jardines: Entrada gratuita</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <a href="https://gyg.me/pvL78q94" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🎨 Entradas al Belvedere Superior</span>
            <ExternalLink className="external-icon" />
          </a>
          <a href="https://gyg.me/7y5TyzcF" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>👨‍🎨 Tour con guía al Palacio Belvedere</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
    </div>
  </div>

  {/* DÍA 3 */}
  <div id="dia-3" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-emerald-500 to-green-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">3</span>
      DÍA 3: Hofburg, Sacher y Gran Final Musical
    </h2>

    {/* Palacio Hofburg */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-amber-400 rounded-full mr-3"></div>
        Palacio Hofburg - Poder Imperial (9:00h)
      </h3>
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Hofburg - Centro del Imperio Austro-Húngaro</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/15488513/pexels-photo-15488513.jpeg"
            alt="Palacio Hofburg con la majestuosa cúpula de la Biblioteca Nacional y arquitectura imperial"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El Palacio Hofburg fue la residencia principal de los emperadores austriacos durante más de 600 años. 
          Este complejo palaciego alberga los Apartamentos Imperiales, el Museo Sisí , la Biblioteca Nacional y la famosa Escuela Española de Equitación.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">👑 Apartamentos Imperiales + Museo Sisí:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Horario: 9:00-17:30 diario</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Duración: 2-2,30 horas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>19 habitaciones históricas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Objetos personales de Sisí</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">📚 Biblioteca Nacional (Prunksaal):</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Entrada: 12 € (biblioteca más bella del mundo)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Horario: 10:00-18:00 (mar-dom)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-brown-400 rounded-full mr-3"></span>200.000 volúmenes históricos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Frescos barrocos espectaculares</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Globos terrestres históricos únicos</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🐎 Escuela Española de Equitación:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Visita guiada: 24 €</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Caballos Lipizzanos únicos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Tradición desde 1572</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Reserva obligatoria</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <a href="https://gyg.me/dzn5QZh5" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>👑 Entradas Museo Sisí, Hofburg y Jardines</span>
            <ExternalLink className="external-icon" />
          </a>
          <a href="https://gyg.me/SQGXoIHF" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🐎 Escuela Española Equitación</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>

    {/* Café Sacher */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-amber-400 rounded-full mr-3"></div>
        Café Sacher - Dulce Imperial (15:30h)
      </h3>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Hotel Sacher - La Sachertorte Original</h4>
        <p className="text-gray-700 mb-4">
          El Hotel Sacher es una institución vienesa desde 1876. Su famosa Sachertorte, creada en 1832 por Franz Sacher, 
          es el postre más famoso de Austria y solo aquí se sirve la receta original y secreta.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🏨 Ambiente del Hotel Sacher:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Decoración imperial auténtica</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Clientela internacional de lujo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Servicio de guante blanco</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación frente a la Ópera</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Tradición familiar desde 1876</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Kärntner Straße */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-3"></div>
        Kärntner Straße - Elegancia y Compras (17:00h)
      </h3>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Kärntner Straße - La Quinta Avenida de Viena</h4>
        <p className="text-gray-700 mb-4">
          La Kärntner Straße es la calle comercial más famosa de Viena, que conecta la Ópera con la Catedral de San Esteban. 
          Esta elegante avenida peatonal combina boutiques de lujo, cafés tradicionales y arquitectura imperial en un paseo único.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🛍️ Compras y Boutiques:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Swarovski: cristales austriacos famosos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Tiendas de moda internacional</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Souvenirs típicos austriacos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Librería Morawa (multiidioma)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Perfumerías y joyas tradicionales</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">☕ Cafés y Ambiente:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-brown-400 rounded-full mr-3"></span>Ambiente peatonal y relajado</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Música callejera de calidad</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Terrazas para observar gente</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Arquitectura histórica preservada</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Perfecto para pasear antes del concierto</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

   {/* Ópera Final + Concierto */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mr-3"></div>
        Ópera de Viena + Concierto Final (19:30h)
      </h3>
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Wiener Staatsoper - Gran Final Musical de tu Viaje Imperial</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/8568542/pexels-photo-8568542.jpeg"
            alt="Ópera Estatal de Viena iluminada por la noche con su majestuosa fachada neorrenacentista"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          La Ópera Estatal de Viena es considerada una de las casas de ópera más importantes del mundo. 
          Inaugurada en 1869, ha sido el escenario de los mejores cantantes y directores de la historia de la música clásica. 
          Cerrar tu viaje imperial con un concierto aquí es la experiencia perfecta para culminar tus 3 días en la capital musical de Europa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎭 Opciones para Asistir en taquilla:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Entradas de pie: 3-4 € (¡increíble!)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Asientos económicos: 15-40 €</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Palcos premium: 100-300 €</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Visitas guiadas: 12 € (sin función)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Temporada: Sep-Jun</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎼 Alternativas para el Concierto Final:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Musikverein: Sala Dorada (conciertos clásicos)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Konzerthaus: Música de cámara</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Kursalon: Conciertos de Strauss</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Iglesias: Conciertos de música sacra</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Palacio Schönbrunn: Conciertos en salones imperiales</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <a href="https://gyg.me/ghHUAcrV" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🎭 Concierto en Karlskirche</span>
            <ExternalLink className="external-icon" />
          </a>
          <a href="https://gyg.me/bbOpdWgB" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🎼 Musikverein (Sala Dorada)</span>
            <ExternalLink className="external-icon" />
          </a>
          <a href="https://www.wiener-staatsoper.at/en/" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🎵 Todos los conciertos disponibles</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* MÁS COSAS QUE VER EN VIENA Y ALREDEDORES */}
  <div id="mas-lugares" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🗺️ Más Cosas que Ver en Viena y Alrededores</h2>

    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">En la Ciudad:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2">Naschmarkt</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-start"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Mercado más famoso de Viena</span></li>
              <li className="flex items-start"><span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Gastronomía internacional y local</span></li>
              <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Perfecto para desayunar o almorzar</span></li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2">MuseumsQuartier</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-start"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Complejo cultural con varios museos</span></li>
              <li className="flex items-start"><span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Mumok: Museo de Arte Moderno</span></li>
              <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Leopold Museum con colección Schiele</span></li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2">Light of Creation - Iglesia Votiva</h4>
            <p className="text-sm text-gray-700 mb-3">Espectáculo de luz inmersivo que transforma el interior de la histórica Iglesia Votiva en una experiencia visual única.</p>
            <a
              href="https://gyg.me/oyQziOhd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Ver Espectáculo de Luz</span>
              <ExternalLink className="external-icon" />
            </a>
          </div>

        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Excursiones de un Día:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2">Tour Guiado a Hallstatt y Salzburgo</h4>
            <p className="text-sm text-gray-700 mb-3">Descubre dos de los lugares más emblemáticos de Austria en un solo día. Visita el pintoresco pueblo de Hallstatt junto al lago y la ciudad natal de Mozart.</p>
            <a
              href="https://gyg.me/R9CKgxH7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Ver Tour a Hallstatt y Salzburgo</span>
              <ExternalLink className="external-icon" />
            </a>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2">Hallstatt, Salzburgo, Melk, Alpes y Lagos</h4>
            <p className="text-sm text-gray-700 mb-3">Excursión completa que combina lo mejor de Austria: pueblos alpinos, la abadía de Melk, lagos cristalinos y las majestuosas montañas de los Alpes.</p>
            <a
              href="https://gyg.me/E6a2Ta7o"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Ver Tour Completo</span>
              <ExternalLink className="external-icon" />
            </a>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2">Excursión Guiada a Bratislava y Budapest</h4>
            <p className="text-sm text-gray-700 mb-3">Visita dos capitales europeas en un día: Bratislava, la joya de Eslovaquia, y Budapest, la perla del Danubio. Una experiencia única entre tres países.</p>
            <a
              href="https://gyg.me/UYIdvdFi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Ver Tour a Bratislava y Budapest</span>
              <ExternalLink className="external-icon" />
            </a>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2">Tour Guiado de Praga</h4>
            <p className="text-sm text-gray-700 mb-3">Descubre la Ciudad de las Cien Torres en una excursión de día completo desde Viena. Explora el casco histórico, el Puente de Carlos y el Castillo de Praga.</p>
            <a
              href="https://gyg.me/qVUeP4MV"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hotel"
            >
              <span>Ver Tour a Praga</span>
              <ExternalLink className="external-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* SECCIÓN: HERRAMIENTAS DE VIAJE */}
  <div id="recomendaciones" className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
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

  {/* RESTAURANTES */}
  <div id="gastronomia" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🍽️ Guía Gastronómica Completa - Probado Personalmente</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <h3 className="text-lg font-bold text-red-800 mb-3">🥩 Cocina Tradicional Austriaca</h3>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-1">Figlmüller</h4>
            <p className="text-xs text-gray-600 mb-1">Wollzeile 5 • €€ • Reserva obligatoria</p>
            <p className="text-sm text-gray-700">El schnitzel más famoso de Viena. Enorme, crujiente y auténtico.</p>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-1">Plachutta</h4>
            <p className="text-xs text-gray-600 mb-1">Wollzeile 38 • €€€ • Elegante</p>
            <p className="text-sm text-gray-700">El mejor tafelspitz (carne hervida) de Viena.</p>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-1">Gasthaus Pöschl</h4>
            <p className="text-xs text-gray-600 mb-1">Weihburggasse 17 • €€ • Auténtico</p>
            <p className="text-sm text-gray-700">Ambiente local genuino. Goulash, schnitzel y cervezas austriacas.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h3 className="text-lg font-bold text-blue-800 mb-3">🌍 Cocina Internacional</h3>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-1">Motto am Fluss</h4>
            <p className="text-xs text-gray-600 mb-1">Franz-Josefs-Kai 2 • €€€ • Vistas al Danubio</p>
            <p className="text-sm text-gray-700">Cocina moderna con vistas espectaculares. Perfecto para cenas románticas.</p>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-1">Labstelle Wien</h4>
            <p className="text-xs text-gray-600 mb-1">Lugeck 6 • €€ • Moderno</p>
            <p className="text-sm text-gray-700">Fusión austriaca-asiática innovadora. Ambiente joven y creativo.</p>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-1">Naschmarkt</h4>
            <p className="text-xs text-gray-600 mb-1">Linke Wienzeile • € • Mercado</p>
            <p className="text-sm text-gray-700">Mercado con comida internacional. Perfecto para almorzar variado y económico.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-2">
        <a href="https://www.figlmueller.at/" target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
          🥩 Reservar Figlmüller
          <ExternalLink className="h-3 w-3 ml-2" />
        </a>
        <a href="https://www.plachutta.at/" target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
          👑 Reservar Plachutta
          <ExternalLink className="h-3 w-3 ml-2" />
        </a>
      </div>
    </div>
  </div>

  {/* Sistema de Transporte Público */}
  <div id="transporte" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🚇 Sistema de Transporte Público de Viena</h2>
    
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
      <h4 className="font-bold text-gray-900 mb-4">Red Integrada de Transporte</h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h5 className="font-semibold text-blue-600 mb-2">🚇 Metro (U-Bahn)</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• 5 líneas activas: U1, U2, U3, U4, U6</li>
            <li>• Nota: U5 en construcción (apertura 2030)</li>
            <li>• Frecuencia: 2-5 minutos (2-4 en hora punta)</li>
            <li>• Horario: 05:00-00:30</li>
            <li>• Viernes y sábados: servicio 24h</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h5 className="font-semibold text-red-600 mb-2">🚊 Tranvías</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Red histórica extensa (225 km)</li>
            <li>• Conecta todos los distritos</li>
            <li>• Frecuencia: 4-8 minutos</li>
            <li>• Acceso a atracciones turísticas</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h5 className="font-semibold text-green-600 mb-2">🚌 Autobuses</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Complementa metro y tranvías</li>
            <li>• Líneas nocturnas disponibles</li>
            <li>• Zonas periféricas</li>
            <li>• Mismos billetes</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h5 className="font-semibold text-gray-900 mb-3">Información Práctica del Sistema:</h5>

        <div className="mb-4">
          <h6 className="font-semibold text-blue-700 mb-2">Billetes disponibles hasta 31 dic 2026:</h6>
          <div className="text-sm text-gray-700 space-y-1 ml-3">
            <p>• Billete sencillo: 2,40€ (válido 80 min)</p>
            <p>• Billete 24h: 8,00€</p>
            <p>• Billete 48h: 14,10€</p>
            <p>• Billete 72h: 17,10€</p>
          </div>
        </div>

        <div className="mb-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <h6 className="font-semibold text-yellow-800 mb-2">⚠️ A partir de 1 enero 2026:</h6>
          <div className="text-sm text-yellow-900 space-y-1 ml-3">
            <p>• Billete sencillo: 2,40€ (válido 80 min)</p>
            <p>• Billete 24h: 8,00€</p>
            <p>• Billete 7 días: información por confirmar</p>
            <p className="font-semibold mt-2">⚠️ NOTA: Los billetes de 48h y 72h desaparecen</p>
          </div>
        </div>

        <div>
          <h6 className="font-semibold text-gray-900 mb-2">Información General:</h6>
          <div className="text-sm text-gray-700 space-y-1 ml-3">
            <p>• Validación: Obligatoria antes de viajar</p>
            <p>• Multa sin billete: 105€ (pago inmediato)</p>
            <p>• App oficial: WienMobil (compra digital)</p>
            <p>• Zona: Centro cubierto por zona 100</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* CONSEJOS FINALES */}
  <div id="consejos" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 shadow-md mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎯 Consejos Finales para tu Viaje Imperial</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">✅ Imprescindibles que NO puedes perderte:</h3>
        <ul className="text-sm text-gray-700 space-y-2 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>Reloj Anker a las 12:00h (espectáculo completo)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>"El Beso" de Klimt en Belvedere</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-brown-400 rounded-full mr-3"></span>Sachertorte original en Hotel Sacher</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Entradas de pie en la Ópera (3€)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Café vienés auténtico en Café Central</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Jardines de Schönbrunn al atardecer</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Consejos de Viajero Experimentado:</h3>
        <ul className="text-sm text-gray-700 space-y-2 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Compra Vienna City Card si visitas 4+ atracciones</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Reserva restaurantes con 1-2 días de antelación</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Lleva efectivo: muchos sitios no aceptan tarjeta</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Aprende "Danke" y "Bitte" - los vieneses lo aprecian</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Domingo: muchas tiendas cerradas, museos abiertos</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Propina: 5-10% en restaurantes, redondear en cafés</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Consejos para Ahorrar en Viena:</h3>
        <ul className="text-sm text-gray-700 space-y-2 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Vienna City Card: Descuentos en atracciones + transporte incluido</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Supermercados: Billa, Spar, Hofer para comida económica</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Entradas de pie en Ópera: Solo 3-4€ para espectáculos de 100€+</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Jardines de palacios: Gratuitos y espectaculares</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Iglesias históricas: Entrada libre en la mayoría</li>
        </ul>
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-4">
          <a href="https://gyg.me/MTSmqRRG" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            ⛪ Vienna PASS: 1, 2, 3 o 6 días de visitas turísticas
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  {/* PRESUPUESTOS */}
  <div id="presupuestos" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">💰 Presupuestos Detallados por Estilo - Septiembre 2026</h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-green-800 mb-3">🎒 Mochilero</h3>
        <div className="text-2xl font-bold text-green-600 mb-2">65-85€/día</div>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• Hostel: 25-35€</li>
          <li>• Comida: 20-25€</li>
          <li>• Transporte: 8€ (72h)</li>
          <li>• Atracciones: 12-17€</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-blue-800 mb-3">🏨 Estándar</h3>
        <div className="text-2xl font-bold text-blue-600 mb-2">120-160€/día</div>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Hotel 3*: 70-90€</li>
          <li>• Comida: 35-45€</li>
          <li>• Transporte: 8€</li>
          <li>• Atracciones: 15-25€</li>
        </ul>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-purple-800 mb-3">👑 Lujo</h3>
        <div className="text-2xl font-bold text-purple-600 mb-2">250-400€/día</div>
        <ul className="text-sm text-purple-700 space-y-1">
          <li>• Hotel 5*: 150-250€</li>
          <li>• Comida: 80-120€</li>
          <li>• Transporte: 20€</li>
          <li>• Atracciones: 30-50€</li>
        </ul>
      </div>
    </div>

  </div>

  {/* Footer */}
  <div className="text-center text-gray-600 text-sm mt-8">
    <p className="mb-2">
      Guía actualizada en Septiembre 2026 | Información verificada y precios actuales
    </p>
    <p>
      Que disfrutes Viena al máximo!
    </p>
  </div>
</article>
</>
);
};

export default ViennaGuideArticle;