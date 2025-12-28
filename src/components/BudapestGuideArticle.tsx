import React, { useState, useRef } from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import StickyTableOfContents from './StickyTableOfContents';

interface BudapestGuideArticleProps {
  onBack: () => void;
}

const BudapestGuideArticle: React.FC<BudapestGuideArticleProps> = ({ onBack }) => {
  const [expandedZone, setExpandedZone] = useState<string | null>(null);
  const [expandedAirport, setExpandedAirport] = useState<string | null>(null);

  const centroPestRef = useRef<HTMLDivElement>(null);
  const castilloBudaRef = useRef<HTMLDivElement>(null);

  const toggleZone = (zoneId: string) => {
    const newExpandedZone = expandedZone === zoneId ? null : zoneId;
    setExpandedZone(newExpandedZone);

    if (newExpandedZone === zoneId) {
      setTimeout(() => {
        const refMap: { [key: string]: React.RefObject<HTMLDivElement> } = {
          'centro-pest': centroPestRef,
          'castillo-buda': castilloBudaRef
        };

        const ref = refMap[zoneId];
        if (ref?.current) {
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const toggleAirport = (airportId: string) => {
    setExpandedAirport(expandedAirport === airportId ? null : airportId);
  };

  const sections = [
    { id: 'por-que-visitar', title: '¿Por qué visitar Budapest?' },
    { id: 'llegada-aeropuerto', title: 'Llegada y Aeropuerto' },
    { id: 'donde-dormir', title: 'Dónde Alojarse' },
    { id: 'itinerario', title: 'Itinerario de 4 Días' },
    { id: 'dia-1', title: 'Día 1: Poder Imperial y Herencia Cultural', level: 2 },
    { id: 'dia-2', title: 'Día 2: Realeza Medieval y Romance Danubiano', level: 2 },
    { id: 'dia-3', title: 'Día 3: Aguas Milenarias y Esplendor Imperial', level: 2 },
    { id: 'dia-4', title: 'Día 4: Autenticidad Local y Despedida Panorámica', level: 2 },
    { id: 'excursiones', title: 'Excursiones desde Budapest' },
    { id: 'recomendaciones', title: 'Tarjeta y Seguro de Viaje' },
    { id: 'gastronomia', title: 'Gastronomía Húngara' },
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
      <span className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
        Guía Completa
      </span>
    </div>
    
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
      Budapest en 4 Días: Tu Aventura Húngara Completa
    </h1>

    <div className="flex flex-col gap-4 mb-6 items-start">
      <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
          <Clock className="h-3 w-3 mr-1" />
          15 min
        </span>
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
          <MapPin className="h-3 w-3 mr-1" />
          Budapest
        </span>
      </div>
      
      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: 'Budapest en 4 Días: Guía Completa con Itinerario y Presupuesto',
              text: 'Descubre Budapest con nuestro itinerario optimizado',
              url: window.location.href,
            })
            .catch((error) => console.log('Error sharing', error));
          } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
              alert('Enlace copiado al portapapeles');
            }).catch(() => {
              window.open(`https://twitter.com/intent/tweet?text=Budapest en 4 Días: Guía Completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
            });
          }
        }}
        className="inline-flex items-center text-gray-600 hover:text-sky-600 bg-gray-100 hover:bg-sky-50 px-3 py-2 rounded-full transition-all duration-200 text-xs border border-gray-200 hover:border-sky-300 self-start shadow-sm hover:shadow-md"
      >
        <Share2 className="h-3 w-3 mr-1" />
        <span>Compartir</span>
      </button>
    </div>
  </div>

  <div className="mb-8">
    <img
      src="https://images.pexels.com/photos/73796/budapest-hungary-parliament-building-73796.jpeg"
      alt="Vista panorámica del Parlamento de Budapest al atardecer con el río Danubio"
      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
    />
  </div>

  {/* SECCIÓN 1: ¿POR QUÉ VISITAR BUDAPEST? */}
  <div id="por-que-visitar" className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">¿Por qué visitar Budapest?</h2>

    <div className="space-y-4 text-gray-700">
      <p className="text-base leading-relaxed">
        Budapest es la joya escondida de Europa Central, una ciudad que sorprende por su belleza, su historia y lo económica que resulta comparada con otras capitales europeas. Dividida por el majestuoso Danubio, combina la elegancia de París con los precios de Europa del Este.
      </p>

      <p className="text-base leading-relaxed">
        Pero Budapest es mucho más que el Parlamento iluminado y sus famosos baños termales. Es perderte por el Barrio Judío y descubrir sus ruin bars únicos en el mundo. Es cruzar el Puente de las Cadenas al atardecer mientras la ciudad se enciende. Es disfrutar de un auténtico goulash en un bistró local por 8€ y sentir que tu presupuesto rinde el doble que en otras capitales.
      </p>

      <p className="text-base leading-relaxed font-medium text-gray-900">
        Si buscas una ciudad que combine arquitectura imperial, termas centenarias, vida nocturna vibrante y precios más que razonables, Budapest es tu destino perfecto.
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
      onClick={() => toggleAirport('ferenc-liszt')}
      className="w-full bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">✈️</span>
        <span className="font-bold text-lg">Aeropuerto Ferenc Liszt (BUD)</span>
      </div>
      {expandedAirport === 'ferenc-liszt' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
    </button>

    {expandedAirport === 'ferenc-liszt' && (
      <div className="mb-8 animate-fadeIn">
        <h3 className="text-lg font-bold text-gray-900 mb-4 mt-4">📍 Desde Aeropuerto Ferenc Liszt</h3>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
        <h4 className="font-bold text-gray-900 mb-3">🚌 Bus 100E Airport Express - La Opción Más Práctica</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> 2.200 HUF (≈ 5,5€)</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Horario:</strong> 24h/7 días</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Duración:</strong> 40-45 minutos</p>
            <p className="text-sm text-gray-700"><strong>Frecuencia:</strong> Cada 20-30 minutos</p>
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-2"><strong>Paradas principales:</strong> Deák Ferenc tér (centro), Astoria, Kálvin tér</p>
            <p className="text-sm text-gray-700"><strong>Compra:</strong> Tarjeta en el bus o app BudapestGO</p>
          </div>
        </div>
        <div className="bg-green-100 rounded-lg p-3 mt-4">
          <p className="text-green-800 text-sm font-medium">💡 Opción más económica y directa al centro. Pago con tarjeta contactless disponible.</p>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-4 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="font-bold text-gray-900 mb-3">🚗 Transfer Privado - Máximo Confort</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> Desde 18€</p>
            <p className="text-sm text-gray-700"><strong>Duración:</strong> 25-30 minutos</p>
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-2"><strong>Ideal para:</strong> Grupos, familias, equipaje</p>
            <p className="text-sm text-gray-700"><strong>Ventajas:</strong> Puerta a puerta, sin esperas</p>
          </div>
        </div>
        <a
          href="https://gyg.me/zzfjHbKu"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hotel"
        >
          <span>🚗 Reservar Transfer Privado</span>
          <ExternalLink className="external-icon" />
        </a>
      </div>
      </div>
    )}
  </div>

  {/* SECCIÓN 3: DÓNDE ALOJARSE - NUEVA */}
  <div id="donde-dormir" className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center">
      🏨 Dónde Alojarse en Budapest
    </h2>
    <p className="text-gray-600 mb-6">Las mejores zonas y hoteles recomendados para tu estancia</p>

    <div className="space-y-6">
      <div ref={centroPestRef} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
            <span className="text-2xl">🏛️</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Centro de Pest</h3>
            <p className="text-sm text-gray-600 mb-2">La ubicación más cómoda para visitar Budapest</p>
            <p className="font-semibold text-lg text-blue-600">
              💰 Precio medio: 70-140€/noche
            </p>
          </div>
        </div>

        <button
          onClick={() => toggleZone('centro-pest')}
          className="flex items-center gap-2 text-black hover:text-gray-800 transition-colors font-medium mb-4"
        >
          {expandedZone === 'centro-pest' ?
            <ChevronUp className="w-5 h-5" /> :
            <ChevronDown className="w-5 h-5" />
          }
          <span>
            {expandedZone === 'centro-pest' ? 'Ocultar' : 'Ver'} hoteles recomendados
          </span>
        </button>

        {expandedZone === 'centro-pest' && (
          <div className="animate-fadeIn border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div className="hotel-card border-l-4 border-sky-400 bg-sky-100/60">
            <div className="hotel-header">
              <h3 className="hotel-name">Callas House</h3>
              <div className="hotel-stars">⭐⭐⭐⭐</div>
            </div>

            <div className="hotel-location">
              <span className="location-icon">📍</span>
              <span>Centro de Pest</span>
            </div>

            <p className="hotel-description">
              <strong>Hotel moderno en pleno corazón de Budapest.</strong> Perfecto para explorar la ciudad a pie. Ubicación privilegiada cerca de las principales atracciones turísticas y zonas comerciales.
            </p>

            <div className="bg-sky-50 border border-sky-200 rounded p-2 mb-3 mt-3">
              <p className="text-xs text-sky-700">
                📍 <strong>Qué hay cerca:</strong> Parlamento Húngaro, Basílica de San Esteban, Avenida Andrássy. Metro cercano para conexiones rápidas. Zona segura con muchos restaurantes y cafés.
              </p>
            </div>

            <a href="https://booking.tpk.lv/wmbhJqcN" target="_blank" rel="noopener noreferrer" className="btn-hotel">
              <span>Ver disponibilidad y precios</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <div className="hotel-card border-l-4 border-teal-400 bg-teal-100/60">
            <div className="hotel-header">
              <h3 className="hotel-name">Barceló Budapest</h3>
              <div className="hotel-stars">⭐⭐⭐⭐</div>
            </div>

            <div className="hotel-location">
              <span className="location-icon">📍</span>
              <span>Centro de Pest</span>
            </div>

            <p className="hotel-description">
              <strong>Hotel de cadena internacional con todas las comodidades.</strong> Excelente ubicación céntrica con servicios de alta calidad. Ideal para quienes buscan confort y profesionalidad garantizada.
            </p>

            <div className="bg-teal-50 border border-teal-200 rounded p-2 mb-3 mt-3">
              <p className="text-xs text-teal-700">
                📍 <strong>Qué hay cerca:</strong> Centro histórico de Budapest, excelente acceso a transporte público. Rodeado de restaurantes, tiendas y atracciones turísticas principales.
              </p>
            </div>

            <a href="https://booking.tpk.lv/qi1gAX1t" target="_blank" rel="noopener noreferrer" className="btn-hotel">
              <span>Ver disponibilidad y precios</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <div className="hotel-card border-l-4 border-violet-400 bg-violet-100/60">
            <div className="hotel-header">
              <h3 className="hotel-name">Hotel Oktogon Haggenmacher</h3>
              <div className="hotel-stars">⭐⭐⭐⭐</div>
            </div>

            <div className="hotel-location">
              <span className="location-icon">📍</span>
              <span>Oktogon, Centro de Pest</span>
            </div>

            <p className="hotel-description">
              <strong>Hotel elegante junto a la Avenida Andrássy.</strong> Ubicación premium con excelente transporte. Perfecto para explorar tanto el centro como las zonas más elegantes de la ciudad.
            </p>

            <div className="bg-violet-50 border border-violet-200 rounded p-2 mb-3 mt-3">
              <p className="text-xs text-violet-700">
                📍 <strong>Qué hay cerca:</strong> Plaza Oktogon, Avenida Andrássy (Patrimonio UNESCO), Teatro de la Ópera. Acceso directo al metro M1 (línea histórica).
              </p>
            </div>

            <a href="https://booking.tpk.lv/hTegcgZC" target="_blank" rel="noopener noreferrer" className="btn-hotel">
              <span>Ver disponibilidad y precios</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
              <p className="text-sm text-green-800">
                <strong>✅ Por qué elegir esta zona:</strong> El corazón de Budapest, cerca del Parlamento, Basílica de San Esteban y la Avenida Andrássy. Todo a pie o metro cercano, muchos restaurantes y cafés, zona segura y animada.
              </p>
            </div>
          </div>
        )}
      </div>

      <div ref={castilloBudaRef} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
            <span className="text-2xl">🏰</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Castillo de Buda</h3>
            <p className="text-sm text-gray-600 mb-2">Zona histórica con encanto y vistas panorámicas</p>
            <p className="font-semibold text-lg text-blue-600">
              💰 Precio medio: 80-160€/noche
            </p>
          </div>
        </div>

        <button
          onClick={() => toggleZone('castillo-buda')}
          className="flex items-center gap-2 text-black hover:text-gray-800 transition-colors font-medium mb-4"
        >
          {expandedZone === 'castillo-buda' ?
            <ChevronUp className="w-5 h-5" /> :
            <ChevronDown className="w-5 h-5" />
          }
          <span>
            {expandedZone === 'castillo-buda' ? 'Ocultar' : 'Ver'} hoteles recomendados
          </span>
        </button>

        {expandedZone === 'castillo-buda' && (
          <div className="animate-fadeIn border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="hotel-card border-l-4 border-emerald-400 bg-emerald-100/60">
            <div className="hotel-header">
              <h3 className="hotel-name">Leon Hotel & Lounge</h3>
              <div className="hotel-stars">⭐⭐⭐⭐</div>
            </div>

            <div className="hotel-location">
              <span className="location-icon">📍</span>
              <span>Castillo de Buda</span>
            </div>

            <p className="hotel-description">
              <strong>Hotel boutique en zona histórica de Buda.</strong> Ambiente elegante y tranquilo con vistas al Danubio. Ideal para quienes buscan una experiencia más exclusiva y relajante en la parte alta de la ciudad.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded p-2 mb-3 mt-3">
              <p className="text-xs text-emerald-700">
                📍 <strong>Qué hay cerca:</strong> Castillo de Buda, Bastión de los Pescadores, Iglesia de Matías. Vistas panorámicas del Danubio y Pest. Zona tranquila y romántica.
              </p>
            </div>

            <a href="https://booking.tpk.lv/qZFhW1kp" target="_blank" rel="noopener noreferrer" className="btn-hotel">
              <span>Ver disponibilidad y precios</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <div className="hotel-card border-l-4 border-cyan-400 bg-cyan-100/60">
            <div className="hotel-header">
              <h3 className="hotel-name">Monastery Boutique Hotel</h3>
              <div className="hotel-stars">⭐⭐⭐⭐</div>
            </div>

            <div className="hotel-location">
              <span className="location-icon">📍</span>
              <span>Castillo de Buda</span>
            </div>

            <p className="hotel-description">
              <strong>Hotel boutique único en edificio histórico.</strong> Diseño exclusivo en la zona del Castillo de Buda. Combina arquitectura histórica con comodidades modernas para una experiencia memorable.
            </p>

            <div className="bg-cyan-50 border border-cyan-200 rounded p-2 mb-3 mt-3">
              <p className="text-xs text-cyan-700">
                📍 <strong>Qué hay cerca:</strong> Distrito del Castillo, calles adoquinadas históricas. Ambiente auténtico con galerías, museos y miradores. Perfecto para amantes de la historia.
              </p>
            </div>

            <a href="https://booking.tpk.lv/q3Q85yF6" target="_blank" rel="noopener noreferrer" className="btn-hotel">
              <span>Ver disponibilidad y precios</span>
              <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
              <p className="text-sm text-green-800">
                <strong>✅ Por qué elegir esta zona:</strong> Zona tranquila y pintoresca en la colina de Buda, con el Castillo, Bastión de los Pescadores y vistas espectaculares del Danubio. Ideal para ambiente más relajado y romántico.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* SECCIÓN 4: ITINERARIO - Planning Estratégico */}
  <div id="itinerario" className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Itinerario de Budapest</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
        <thead>
          <tr className="bg-gradient-to-r from-sky-500 to-blue-500 text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">JORNADA</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EXPERIENCIAS DEL DÍA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 1</td>
            <td className="border border-gray-300 px-4 py-3">Parlamento + Recorrido histórico + Sinagoga Principal + Basílica de San Esteban</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 2</td>
            <td className="border border-gray-300 px-4 py-3">Fortaleza de Buda + Mirador de Pescadores + Travesía de puentes + Navegación nocturna</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 3</td>
            <td className="border border-gray-300 px-4 py-3">Aguas termales Széchenyi + Plaza Imperial + Boulevard Andrássy + Café histórico</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 4</td>
            <td className="border border-gray-300 px-4 py-3">Mercado tradicional + Colina panorámica + Exploración libre</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
    </div>
  </div>

  {/* DÍAS 1-4: Itinerarios detallados */}
  <div id="dia-1" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-sky-500 to-emerald-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">1</span>
      DÍA 1: Poder Imperial y Herencia Cultural
    </h2>
    
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mr-3"></div>
        Arranque Matutino (9:00h)
      </h3>
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Parlamento Húngaro - Símbolo Nacional</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/12165534/pexels-photo-12165534.jpeg"
            alt="Parlamento Húngaro desde el Danubio con su imponente cúpula neogótica"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Inicia tu aventura húngara en el edificio gubernamental más espectacular de Europa. Sus cúpulas doradas y arquitectura neogótica te transportarán a la época imperial.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Información esencial:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Inversión: 10.000 HUF (Aprox. 27 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Duración: 90 Min. con audioguía</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Reserva: OBLIGATORIA con 24-48h anticipación</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Consejo: Llega 15 min antes para controles</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Incluye:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Corona de San Esteban</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Joyas reales</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Salas ceremoniales</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Audioguía en español</li>
            </ul>
          </div>
        </div>
        <a href="https://gyg.me/gMPSGtKr" target="_blank" rel="noopener noreferrer"
           className="btn-hotel">
          <span>🏛️ Reservar entradas oficiales del Parlamento</span>
          <ExternalLink className="external-icon" />
        </a>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full mr-3"></div>
        Inmersión Local (11:00h)
      </h3>
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Recorrido Histórico</h4>
        <p className="text-gray-700 mb-4">
          Conecta con la auténtica Budapest a través de guías locales apasionados.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Detalles del tour:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Costo: Según recorrido</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Duración: 2h 30min aprox.</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Inicio: Plaza Vörösmarty (punto céntrico)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Descubrirás:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Secretos históricos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Mejores rincones fotogénicos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Final: Entrada de la Sinagoga Central</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Idioma: Español disponible</li>
            </ul>
          </div>
        </div>
        <a href="https://gyg.me/RzYQ9OzH" target="_blank" rel="noopener noreferrer"
           className="btn-hotel mt-8">
          <span>🚶‍♂️ Reservar tour con guía local</span>
          <ExternalLink className="external-icon" />
        </a>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
        Patrimonio Judío (13:30h)
      </h3>
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Gran Sinagoga - Memoria Viva</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/7614748/pexels-photo-7614748.jpeg"
            alt="Gran Sinagoga de Budapest con su arquitectura morisca y torres gemelas"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          La segunda sinagoga más grande del planeta y centro de la comunidad judía europea.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Experiencia completa:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Entrada: 13.000 HUF (Aprox. 33 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Tiempo: 75-90 Min.</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Arquitectura: Estilo morisco-bizantino único</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Incluye:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Templo principal</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Museo Judío</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Jardín Memorial</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Impacto emocional garantizado</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <a href="https://jewishtourhungary.com/es/cart" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🕍 Entradas oficiales Gran Sinagoga</span>
            <ExternalLink className="external-icon" />
          </a>
          <a href="https://gyg.me/vbht7C3s" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🎯 Tour Patrimonio Judío completo</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-3"></div>
        Culminación del Día (16:00h)
      </h3>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Basílica de San Esteban + Mirador Panorámico</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/2984324/pexels-photo-2984324.jpeg"
            alt="Basílica de San Esteban con su imponente cúpula neoclásica dominando el skyline"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Termina el día en las alturas con vistas que quitan el aliento.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Opciones de visita:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Solo basílica: 600 HUF (Aprox. 2 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Combo completo: 2.900 HUF (Aprox. 8 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Recomendación: Combo completo al atardecer</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">En la cima:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Ascensor: Te lleva a 96 metros</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Vista 360 grados: Todo Budapest + Danubio</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Mejor momento: 2h antes del atardecer</li>
            </ul>
          </div>
        </div>
        <a href="https://gyg.me/BQZi7YH9" target="_blank" rel="noopener noreferrer"
           className="btn-hotel">
          <span>⛪ Reservar entradas Basílica San Esteban</span>
          <ExternalLink className="external-icon" />
        </a>

        <div className="bg-orange-100 border border-orange-300 rounded-xl p-4 mt-4">
          <p className="text-orange-800 text-sm">
            Consejo de experto: Sube 2 horas antes del atardecer para ver la transformación de la ciudad de día a noche.
          </p>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mr-3"></div>
        Vida Nocturna Alternativa (21:00h)
      </h3>
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Szimpla Kert - Revolución de los Ruin Bars</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/33980771/pexels-photo-33980771.jpeg"
            alt="Interior de Szimpla Kert, el famoso ruin bar de Budapest con decoración ecléctica"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Experimenta el concepto que Budapest exportó al mundo entero.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">La experiencia:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Concepto: Edificios en ruinas convertidos en bares</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Entrada: Gratuita</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Bebidas: Cervezas 3-5 €, cócteles 6-8 €</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Ambiente único:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Arte urbano ecléctico</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Decoración surrealista</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Música live</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Tip: Llega 21:00-22:00</li>
            </ul>
          </div>
        </div>
        <a href="https://szimpla.hu/" target="_blank" rel="noopener noreferrer"
           className="btn-hotel">
          <span>🍺 Szimpla Kert oficial</span>
          <ExternalLink className="external-icon" />
        </a>
        <p className="text-xs text-emerald-600 mt-1">Mercadillo dominical 9:00-14:00h</p>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
    </div>
  </div>

  <div id="dia-2" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-emerald-500 to-sky-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">2</span>
      DÍA 2: Realeza Medieval y Romance Danubiano
    </h2>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-sky-400 to-blue-400 rounded-full mr-3"></div>
        Ascenso Real (9:00h)
      </h3>
      <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Funicular Histórico al Castillo</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/19310795/pexels-photo-19310795.jpeg"
            alt="Castillo de Buda iluminado por la noche reflejándose en el Danubio"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Comienza como la realeza húngara, ascendiendo en el funicular centenario.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Opciones de subida:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Funicular: 1.500 HUF (Aprox. 4 €) ida/vuelta</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Caminata: Gratis + 15 min subida</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Recomendación: Sube en funicular, baja andando</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Complejo del Castillo:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Exterior gratis: Jardines + vistas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Galería Nacional: 3.200 HUF (Aprox. 9 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Museo Historia: 2.800 HUF (Aprox. 7 €)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
        Joya Arquitectónica (10:30h)
      </h3>
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Bastión de los Pescadores - El Mirador Más Famoso</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/1750352/pexels-photo-1750352.jpeg"
            alt="Bastión de los Pescadores con sus torres neorrománicas y vistas al Parlamento"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El lugar más fotografiado de Budapest por una razón poderosa.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Niveles de acceso:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Terrazas inferiores: GRATIS</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Torres superiores: 1.000 HUF (Aprox. 3 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Mejor momento: 10:30-11:30h</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Vista icónica:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Parlamento dorado reflejado</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Danubio serpenteante</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Luz perfecta, menos gente</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-3"></div>
        Final Mágico (18:00h)
      </h3>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Crucero Nocturno por el Danubio - MOMENTO CUMBRE</h4>
        <p className="text-gray-700 mb-4">
          La experiencia más romántica y fotogénica de Budapest.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Detalles del crucero:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Duración: 70 Min. de pura magia</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 4.000 HUF (Aprox. 12 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Incluye: Audio-guía español + bebida</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Vista única:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Parlamento dorado iluminado</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Castillo con luces</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Todos los puentes</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Timing: Atardecer + noche</li>
            </ul>
          </div>
        </div>
        <a href="https://gyg.me/YnvSUuzy" target="_blank" rel="noopener noreferrer"
           className="btn-hotel mt-4">
          <span>🛥️ Reservar Crucero Nocturno por el Danubio</span>
          <ExternalLink className="external-icon" />
        </a>
        <div className="bg-orange-100 border border-orange-300 rounded-xl p-4 mt-4">
          <p className="text-orange-800 text-sm">
            SE AGOTA: Reserva con anticipación, especialmente fines de semana.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
    </div>
  </div>

  <div id="dia-3" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">3</span>
      DÍA 3: Aguas Milenarias y Esplendor Imperial
    </h2>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full mr-3"></div>
        Relajación Termal Matutina (9:00h)
      </h3>
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Balnearios Széchenyi - Ritual Húngaro Milenario</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/33980770/pexels-photo-33980770.jpeg"
            alt="Balnearios Széchenyi con sus piscinas termales al aire libre y arquitectura neobarroca"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Sumérgete en la tradición termal más auténtica de Europa. Funciona incluso con nieve!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Guía completa:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Días laborables: 15.000 HUF (Aprox. 39€) día completo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Fines de semana: 16.500 HUF (Aprox. 42€) día completo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Piscinas: 18 diferentes</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Temperaturas: 18°C a 38°C</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Tiempo ideal: 3-4 horas</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Qué llevar:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Toalla personal + chanclas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Bañador obligatorio</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Gorro (solo piscina natación)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Vestuarios con taquillas incluidas</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-orange-800 mb-2">IMPORTANTE - Nueva restricción</h3>
          <p className="text-orange-700 text-sm">
            Desde agosto 2025, solo se permite entrada a mayores de 14 años en los balnearios Széchenyi.
          </p>
        </div>

        <a href="https://gyg.me/cTU7N3tH" target="_blank" rel="noopener noreferrer"
           className="btn-hotel mb-4">
          <span>🏊‍♂️ Entradas oficiales Széchenyi</span>
          <ExternalLink className="external-icon" />
        </a>
        <p className="text-xs text-gray-600 mt-1 mb-4">Horario: 6:00-22:00 todos los días</p>
        
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <h5 className="font-semibold text-gray-900 mb-2">Alternativa Elegante: Balneario Gellért</h5>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Estilo: Art Nouveau, más sofisticado</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ventaja: Completamente cubierto (perfecto invierno)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Ambiente: Menos auténtico, más instagrameable</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-3"></div>
        Monumentos Imperiales (13:30h)
      </h3>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Plaza de los Héroes - Epicentro Húngaro</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/5687558/pexels-photo-5687558.jpeg"
            alt="Plaza de los Héroes con el Monumento del Milenio y las columnatas semicirculares"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El monumento más patriótico de Hungría te cuenta mil años de historia.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Qué verás:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Entrada: Completamente GRATIS</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Monumentos: 7 estatuas tribus fundadoras</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Historia: Mil años de conquistas</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Castillo Vajdahunyad:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Historia: Exposición Universal 1896</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Precio: 2.000 HUF (Aprox. 5 €) interior</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Foto obligada: Con Escultura del Anónimo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-3"></div>
        Experiencia Legendaria (18:30h)
      </h3>
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">New York Café - El Más Hermoso del Mundo</h4>
        <div className="mb-6">
          <img
src="https://images.pexels.com/photos/20763018/pexels-photo-20763018.jpeg"
            alt="New York Café"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Donde se reunía la élite intelectual de Budapest en la Belle Époque.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">La experiencia completa:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Ambiente: Techos dorados + espejos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precios: 8-15 € café + pastel</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Historia: Inaugurado 1894</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Consejos prácticos:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Reservas: Solo necesario para cenas después de las 18:00h</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Valor: Es experiencia, no solo café</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Música live: Desde 11:00h</li>
            </ul>
          </div>
        </div>
        <a href="https://newyorkcafe.hu/en/" target="_blank" rel="noopener noreferrer"
           className="btn-hotel">
          <span>☕ Reservas New York Café</span>
          <ExternalLink className="external-icon" />
        </a>
        <p className="text-xs text-gray-600 mt-1">Horario: 8:00-24:00 (lun-mié), 8:00-01:00 (jue-dom)</p>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full"></div>
    </div>
  </div>

  <div id="dia-4" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-orange-500 to-red-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">4</span>
      DÍA 4: Autenticidad Local y Despedida Panorámica
    </h2>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
        Inmersión Cultural (9:00h)
      </h3>
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Mercado Central - Corazón Gastronómico</h4>
        <div className="mb-6">
          <img
src="https://images.pexels.com/photos/28994573/pexels-photo-28994573.jpeg"
            alt="Mercado Central"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El mercado cubierto más espectacular de Europa Central.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Planta baja - Productos locales:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Páprika húngara: Desde 2 €</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Salami de Szeged: Calidad mundial</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Vinos Tokaj: Desde 12 €</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Foie gras húngaro: Especialidad nacional</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Primera planta - Gastronomía:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Lángos: Pan frito tradicional (3-4 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Goulash auténtico: Puestos familiares (6-8 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Chimney cake: Kürtőskalács (2-3 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Tiempo: 1-2 horas explorando</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mr-3"></div>
        Ascensión Final (10:30h)
      </h3>
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Colina Gellért - Mirador Supremo de Budapest</h4>
        <div className="mb-6">
          <img
src="https://images.pexels.com/photos/30734949/pexels-photo-30734949.jpeg"
            alt="Las vistas más impresionantes de toda la capital húngara"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Las vistas más impresionantes de toda la capital húngara.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Opciones de ascenso:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Caminata: 35-40 min, gratis</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Autobús 27: 530 HUF (Aprox. 1.5 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Taxi: 2.500 HUF (Aprox. 7 €)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">En la cima:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Estatua Libertad: 14 metros</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Mirador Citadella: Panorámica 360 grados</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Costo: Totalmente gratuito</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
    </div>
  </div>

  {/* SECCIÓN: EXCURSIONES DESDE BUDAPEST */}
  <div id="excursiones" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🚌 Excursiones desde Budapest</h2>
    <p className="text-gray-600 mb-6">Descubre los alrededores de Budapest con estas excursiones guiadas en español</p>

    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-bold text-gray-900 mb-3">⛵ Recodo del Danubio - Excursión de un día</h3>
        <p className="text-sm text-gray-700 mb-4">
          Descubre tres pueblos pintorescos a orillas del Danubio: Szentendre, Visegrád y Esztergom.
          Visita la Basílica más grande de Hungría, un castillo medieval y un encantador pueblo de artistas.
        </p>
        <ul className="text-sm text-gray-700 space-y-2 list-none mb-4">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Duración: Día completo</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Incluye: Transporte + Guía en español</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Pueblos: Szentendre, Visegrád, Esztergom</li>
        </ul>
        <a
          href="https://gyg.me/7hpr6KGa"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hotel"
        >
          <span>⛵ Reservar Excursión al Danubio</span>
          <ExternalLink className="external-icon" />
        </a>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 shadow-sm hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-bold text-gray-900 mb-3">👑 Palacio Real de Gödöllő - Tour Sissi Emperatriz</h3>
        <p className="text-sm text-gray-700 mb-4">
          Visita el palacio barroco favorito de la Emperatriz Sissi, uno de los más grandes de Hungría.
          Descubre la vida de la realeza austro-húngara en este impresionante palacio real.
        </p>
        <ul className="text-sm text-gray-700 space-y-2 list-none mb-4">
          <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Duración: Medio día</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Incluye: Transporte + Guía + Entrada</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Historia: Emperatriz Sissi y Francisco José</li>
        </ul>
        <a
          href="https://gyg.me/UgxQq7sn"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hotel"
        >
          <span>👑 Reservar Tour Palacio Gödöllő</span>
          <ExternalLink className="external-icon" />
        </a>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200 shadow-sm hover:shadow-lg transition-all duration-300">
        <h3 className="text-lg font-bold text-gray-900 mb-3">🍷 Pueblo Vinícola de Páty con Degustaciones</h3>
        <p className="text-sm text-gray-700 mb-4">
          Escapa a la campiña húngara y descubre la cultura vinícola local.
          Visita bodegas tradicionales, degusta vinos locales y disfruta de la gastronomía típica.
        </p>
        <ul className="text-sm text-gray-700 space-y-2 list-none mb-4">
          <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Duración: Medio día</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Incluye: Transporte + Degustaciones</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Experiencia: Bodegas + Vinos locales</li>
        </ul>
        <a
          href="https://gyg.me/2Ben0KFS"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hotel"
        >
          <span>🍷 Reservar Tour Vinícola</span>
          <ExternalLink className="external-icon" />
        </a>
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
          Viaja sin preocuparte por las comisiones bancarias. Revolut te permite pagar en forints húngaros sin cargos adicionales,
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

  {/* SECCIÓN: GASTRONOMÍA HÚNGARA */}
  <div id="gastronomia" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🍝 Gastronomía Húngara - Sabores Auténticos</h2>

    <div className="mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Platos que Debes Probar:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">Goulash (Gulyás)</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Sopa nacional con carne + páprika</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 6-12 € según restaurante</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Mejor en: Frici Papa, Menza</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">Lángos</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Pan frito con crema agria + queso</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 3-5 € en puestos callejeros</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Mejor en: Mercado Central planta superior</li>
          </ul>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">Schnitzel húngaro</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Versión local más especiada</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 8-15 €</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Acompañamiento: Patatas + ensalada</li>
          </ul>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">Kürtőskalács (Chimney Cake)</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Postre cilíndrico dulce con canela</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 2-4 €</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Dónde: Puestos callejeros zona turística</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">Restaurantes Verificados:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">
            <a href="https://www.google.com/maps/place/Budapest,+Mazel+Tov,+Ak%C3%A1cfa+u.+47,+1073+Hungr%C3%ADa/@47.5002778,19.0655242,17z/data=!4m6!3m5!1s0x4741dc68eb5c0b91:0xf5991cd91e93b8f8!8m2!3d47.5002778!4d19.0655242!16s%2Fg%2F11b6qhjx3q" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">Mazel Tov</a> ⭐ 4.6
          </h4>
          <p className="text-sm text-gray-700 mb-2">Gastronomía mediterránea y de Oriente Medio en un patio cubierto con vegetación. Hummus, mezze y shawarma excepcionales.</p>
          <p className="text-xs text-orange-700 mb-1"><strong>Dónde:</strong> Akácfa u. 47, District VII (Barrio Judío)</p>
          <p className="text-xs text-orange-700"><strong>Precio:</strong> 12-25 €</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">
            <a href="https://www.google.com/maps/place/Budapest,+Restaurant+Menza,+Liszt+Ferenc+t%C3%A9r+2,+1061+Hungr%C3%ADa/@47.5039639,19.0628165,17z/data=!4m6!3m5!1s0x4741dc6e9b62d4d5:0x361daa1bec9740fe!8m2!3d47.5039639!4d19.0628165!16s%2Fg%2F1v6p31kz" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">Menza</a> ⭐ 4.4
          </h4>
          <p className="text-sm text-gray-700 mb-2">Cocina húngara moderna con diseño retro de los años 70. Goulash, pancakes Hortobágyi y ambiente animado.</p>
          <p className="text-xs text-orange-700 mb-1"><strong>Dónde:</strong> Liszt Ferenc tér 2, District VI</p>
          <p className="text-xs text-orange-700"><strong>Precio:</strong> 12-20 €</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">
            <a href="https://www.google.com/maps/place/Budapest,+Bistro+hungaro,+Steindl+Imre+u.+13,+1051+Hungr%C3%ADa/@47.5034835,19.0479192,17z/data=!4m6!3m5!1s0x4741dc14183e4511:0x2356a71b716602c5!8m2!3d47.5034835!4d19.0479192!16s%2Fg%2F1hhmyj4hm" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">Hungarikum Bisztró</a> ⭐ 4.7
          </h4>
          <p className="text-sm text-gray-700 mb-2">Alta cocina húngara cerca del Parlamento. Música tradicional en vivo, goulash excepcional y servicio atento.</p>
          <p className="text-xs text-orange-700 mb-1"><strong>Dónde:</strong> Steindl Imre u. 13, District V</p>
          <p className="text-xs text-orange-700"><strong>Precio:</strong> 15-25 € | Reserva obligatoria</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">
            <a href="https://www.google.com/maps/place/Budapest,+Parisi+6,+P%C3%A1rizsi+u.+6b,+1052+Hungr%C3%ADa/@47.4941428,19.0536826,17z/data=!4m6!3m5!1s0x4741dc41484216ab:0x2d967a7684dbcc83!8m2!3d47.4941428!4d19.0536826!16s%2Fg%2F11cjg959zf" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">Parisi 6</a> ⭐ 4.7
          </h4>
          <p className="text-sm text-gray-700 mb-2">Cocina húngara sofisticada con toque moderno. Pato crujiente, beef stew de la abuela y postres tradicionales.</p>
          <p className="text-xs text-orange-700 mb-1"><strong>Dónde:</strong> Párizsi u. 6b, District V (Centro)</p>
          <p className="text-xs text-orange-700"><strong>Precio:</strong> 14-22 €</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">
            <a href="https://www.google.com/maps/place/Budapest,+The+Magic+Budapest,+Haj%C3%B3s+u.+25,+1065+Hungr%C3%ADa/@47.5040676,19.0574011,17z/data=!4m6!3m5!1s0x4741dd2111cfa28f:0xa4fa6fc46f2e2e90!8m2!3d47.5040676!4d19.0574011!16s%2Fg%2F11h7_nnxp3" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">The Magic Budapest</a> ⭐ 4.4
          </h4>
          <p className="text-sm text-gray-700 mb-2">Restaurante temático de Harry Potter con ambiente mágico. Ideal para familias. Waffles, burgers y decoración encantada.</p>
          <p className="text-xs text-orange-700 mb-1"><strong>Dónde:</strong> Hajós u. 25, District VI</p>
          <p className="text-xs text-orange-700"><strong>Precio:</strong> 12-18 € | Reserva recomendada</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">
            <a href="https://www.google.com/maps/place/Budapest,+Frici+papa,+Kir%C3%A1ly+u.+55,+1077+Hungr%C3%ADa/@47.5023394,19.0637114,17z/data=!4m6!3m5!1s0x4741dc6ecddec10b:0xab18bc439df2bad4!8m2!3d47.5023394!4d19.0637114!16s%2Fg%2F11r96t66s" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">Frici Papa</a> ⭐ 4.3
          </h4>
          <p className="text-sm text-gray-700 mb-2">Comida casera tradicional húngara como la de la abuela. Goulash auténtico, porciones enormes y precios económicos.</p>
          <p className="text-xs text-orange-700 mb-1"><strong>Dónde:</strong> Király u. 55, District VII</p>
          <p className="text-xs text-orange-700"><strong>Precio:</strong> 8-12 € | Solo efectivo</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">
            <a href="https://www.google.com/maps/place/Budapest,+Trofea+Grill+Restaurant,+Kir%C3%A1ly+u.+30-32,+1061+Hungr%C3%ADa/@47.4999491,19.0593719,17z/data=!4m6!3m5!1s0x4741dc6980a21f35:0xba72d6dc4d9e4947!8m2!3d47.4999491!4d19.0593719!16s%2Fg%2F11r9pzrkc" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">Trofea Grill Restaurant</a> ⭐ 4.6
          </h4>
          <p className="text-sm text-gray-700 mb-2">Buffet libre ilimitado con +100 platos. Incluye bebidas (champagne, cerveza, vino). Gambas, salmón, atún y ternera premium.</p>
          <p className="text-xs text-orange-700 mb-1"><strong>Dónde:</strong> Király u. 30-32, District VI</p>
          <p className="text-xs text-orange-700"><strong>Precio:</strong> 26€ almuerzo | 39€ cena (todo incluido)</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">Lángos en Mercado Central</h4>
          <p className="text-sm text-gray-700 mb-2">Pan frito húngaro tradicional con crema agria y queso. Auténtico y económico en la planta superior del mercado.</p>
          <p className="text-xs text-yellow-700 mb-1"><strong>Dónde:</strong> Nagy Vásárcsarnok (planta superior)</p>
          <p className="text-xs text-yellow-700"><strong>Precio:</strong> 3-5 €</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 rounded-xl p-4 shadow-sm">
        <p className="text-sm text-gray-700 mb-2">
          <strong>💡 Consejo Local:</strong> Los húngaros almuerzan entre 13:00-14:00, una hora antes que en España. Para evitar multitudes, ve a las 12:30 o después de las 14:30.
        </p>
        <p className="text-sm text-gray-700">
          <strong>🥘 Platos imprescindibles:</strong> Goulash (sopa de carne + páprika), Lángos (pan frito), Pörkölt (guiso), Kürtőskalács (chimney cake de postre).
        </p>
      </div>
    </div>
  </div>

  {/* SECCIÓN: SISTEMA DE TRANSPORTE PÚBLICO */}
  <div id="transporte" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🚇 Sistema de Transporte Público de Budapest</h2>

    <div className="mb-6">
      <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-5 border border-blue-200 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Billetes y Precios</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <h4 className="font-semibold mb-2">Billete Sencillo:</h4>
            <ul className="space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>1 viaje: 1,30 €</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Válido 80 min sin transbordo</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Pases Turísticos:</h4>
            <ul className="space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>24h: 7 € (ilimitado)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>72h: 14 € (ilimitado)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>7 días: 19 € (ilimitado)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-2">🚇 Metro</h3>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>4 líneas (M1, M2, M3, M4)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>M1: Patrimonio UNESCO</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Horario: 4:30-23:00h</li>
        </ul>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-2">🚊 Tranvía</h3>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Línea 2: Panorámica del Danubio</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Línea 4 y 6: Principales avenidas</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Frecuencia: 5-10 min</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-2">🚌 Autobús</h3>
        <ul className="text-sm text-gray-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Red extensa por toda la ciudad</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Líneas nocturnas disponibles</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Bus 100E: Aeropuerto-Centro</li>
        </ul>
      </div>
    </div>

    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
      <p className="text-sm text-yellow-800 font-semibold mb-2">⚠️ Importante:</p>
      <ul className="text-sm text-yellow-700 space-y-1 list-none">
        <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Valida SIEMPRE tu billete al subir</li>
        <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Inspecciones frecuentes: Multa 60 €</li>
        <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>App BKK Futár: Horarios en tiempo real</li>
      </ul>
    </div>
  </div>

  {/* SECCIÓN: CONSEJOS FINALES */}
  <div id="consejos" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 shadow-md mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎯 Consejos Finales para tu Viaje a Budapest</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">✅ Imprescindibles que NO puedes perderte:</h3>
          <ul className="text-sm text-gray-700 space-y-2 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Parlamento iluminado de noche desde Bastión de los Pescadores</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Baños termales Széchenyi (reserva online)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-sky-400 rounded-full mr-3"></span>Crucero nocturno por el Danubio</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>Ruin bars en Barrio Judío (Szimpla Kert)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Probar goulash auténtico y lángos recién hecho</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Caminar por el Puente de las Cadenas al atardecer</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Consejos de Viajero Experimentado:</h3>
          <ul className="text-sm text-gray-700 space-y-2 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Valida SIEMPRE tu billete de transporte (multas 60 €)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>Usa solo taxis amarillos oficiales o apps (Bolt, Főtaxi)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Agua del grifo es potable y gratis - lleva botella reutilizable</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>Evita restaurantes sin precios en el menú</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>Propinas 10-15% (muchos incluyen cargo por servicio - revisa cuenta)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>No cambies dinero en la calle ni uses cajeros Euronet</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
        <h3 className="text-lg font-bold text-yellow-800 mb-3">💡 Consejos para Ahorrar en Budapest:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ul className="text-sm text-yellow-700 space-y-2 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Menú del día (Napi Menü): 2 platos por 6-9 € al mediodía</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Street food: Karavan, Bors GasztroBár, lángos desde 2-5 €</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Mercado Central: Comida local económica en piso superior</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Supermercados: Aldi, Lidl, Spar para comida barata</li>
          </ul>
          <ul className="text-sm text-yellow-700 space-y-2 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Agua: Pide del grifo en restaurantes (csapvíz - "chop-veez") ¡Gratis!</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Museos gratis: Días nacionales (15 marzo, 20 agosto, 23 octubre)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Happy hours ruin bars (16:00-19:00): Bebidas mitad de precio</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Cerveza local: 1,50-3 € (vs importada 4-6 €)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

    <div id="presupuestos" className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Presupuestos Reales y Detallados</h2>
  
  <div className="mb-6">
    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-bold text-emerald-800 mb-4">ESTILO MOCHILERO - 85 €/día</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (3 noches):</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hostales céntricos: Budapest Citi Guesthouse</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Distrito V o VII</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Precio: 40€/noche</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Alimentación (4 días):</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Desayuno: Mercados + panadería (3-5 €)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Almuerzo: Puestos callejeros (5-8 €)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Cena: Supermercado + cocina (8-12 €)</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl p-3 mt-4 text-xs text-gray-600">
        <p className="text-center">
          <span className="font-medium">El precio total incluye:</span> Media aproximada de gastos en atracciones principales, transporte público, y experiencias básicas según este estilo de viaje
        </p>
      </div>
      <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
        <p className="text-emerald-800 font-semibold text-center">
          Total 4 días: 340€ por persona
        </p>
      </div>
    </div>
  </div>

  <div className="mb-6">
    <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-bold text-sky-800 mb-4">ESTILO CONFORT - 125 €/día</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (3 noches):</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hoteles 3*: T62 Hotel, THREE Corners Hotel Anna</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Centro absoluto</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Precio: 70€/noche (incluye desayuno)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Alimentación (4 días):</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Desayuno: Hotel incluido</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Almuerzo: Restaurantes locales (12-18 €)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Cena: Experiencias gastronómicas (15-25 €)</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl p-3 mt-4 text-xs text-gray-600">
        <p className="text-center">
          <span className="font-medium">El precio total incluye:</span> Media aproximada de gastos en todas las atracciones, tours con guía, transporte variado, y experiencias de nivel medio
        </p>
      </div>
      <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
        <p className="text-sky-800 font-semibold text-center">
          Total 4 días: 500€ por persona
        </p>
      </div>
    </div>
  </div>

  <div className="mb-6">
    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-bold text-purple-800 mb-4">ESTILO PREMIUM - 200 €/día</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (3 noches):</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hoteles 4*/5*: Hotel Vision Budapest, Hotel Clark Budapest</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Frente al Danubio</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Precio: 150€/noche (spa + servicios premium)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Alimentación (4 días):</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Restaurantes top: Onyx, Costes</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Experiencias culinarias + maridajes</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>New York Café + cafés históricos</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl p-3 mt-4 text-xs text-gray-600">
        <p className="text-center">
          <span className="font-medium">El precio total incluye:</span> Media aproximada de gastos en tours privados VIP, experiencias exclusivas, transporte privado, y actividades de lujo
        </p>
      </div>
      <div className="bg-white rounded-xl p-4 mt-4 shadow-sm">
        <p className="text-purple-800 font-semibold text-center">
          Total 4 días: 800€ por persona
        </p>
      </div>
    </div>
  </div>
</div>

  <div className="text-center text-gray-600 text-sm mt-8">
    <p className="mb-2">
      Guía actualizada en Septiembre 2025 | Información verificada y precios actuales
    </p>
    <p>
      Que disfrutes Budapest al máximo!
    </p>
  </div>
</article>
</>
);


};

export default BudapestGuideArticle;