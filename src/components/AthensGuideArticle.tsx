import React, { useState } from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import StickyTableOfContents from './StickyTableOfContents';

interface AthensGuideArticleProps {
  onBack: () => void;
}

const AthensGuideArticle: React.FC<AthensGuideArticleProps> = ({ onBack }) => {
  const [expandedAirport, setExpandedAirport] = useState<string | null>(null);

  const toggleAirport = (airportId: string) => {
    setExpandedAirport(expandedAirport === airportId ? null : airportId);
  };

  const sections = [
    { id: 'por-que-visitar', title: '¿Por qué visitar Atenas?' },
    { id: 'llegada-aeropuerto', title: 'Llegada desde el Aeropuerto' },
    { id: 'donde-dormir', title: 'Dónde Dormir en Atenas' },
    { id: 'itinerario', title: 'Itinerario de 3 Días' },
    { id: 'dia-1', title: 'Día 1: Acrópolis y Centro Histórico', level: 2 },
    { id: 'dia-2', title: 'Día 2: Templos, Estadios y Museos', level: 2 },
    { id: 'dia-3', title: 'Día 3: Excursiones desde Atenas', level: 2 },
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
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
              Guía Griega
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Atenas en 3 Días: La Cuna de la Civilización Occidental Entre Ruinas Milenarias
          </h1>

          <div className="flex flex-col gap-4 mb-6 items-start">
            <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
              <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
                <Clock className="h-3 w-3 mr-1" />
                16 min
              </span>
              <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
                <MapPin className="h-3 w-3 mr-1" />
                Atenas
              </span>
            </div>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Atenas en 3 Días: Guía Completa con Acrópolis, Partenón y Ruinas',
                    text: 'Descubre la capital de Grecia con nuestro itinerario optimizado',
                    url: window.location.href,
                  })
                  .catch((error) => console.log('Error sharing', error));
                } else {
                  navigator.clipboard.writeText(window.location.href).then(() => {
                    alert('Enlace copiado al portapapeles');
                  }).catch(() => {
                    window.open(`https://twitter.com/intent/tweet?text=Atenas en 3 Días: Guía Completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
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
            src="https://images.pexels.com/photos/5380087/pexels-photo-5380087.jpeg"
            alt="Vista del Partenón en la Acrópolis de Atenas al atardecer"
            className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* SECCIÓN 1: ¿POR QUÉ VISITAR ATENAS? */}
        <div id="por-que-visitar" className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">¿Por qué visitar Atenas?</h2>

          <div className="space-y-4 text-gray-700">
            <p className="text-base leading-relaxed">
              Atenas no es simplemente una ciudad: es un museo al aire libre donde cada piedra cuenta 2.500 años de historia. Aquí, las ruinas de la democracia más antigua del mundo conviven con una vibrante escena cultural moderna; las columnas del Partenón dialogan con el arte urbano de Psyrri; y las leyendas de dioses olímpicos se mezclan con el bullicio de tavernas donde los atenienses debaten sobre fútbol y política con la misma pasión que sus ancestros debatían filosofía en el Ágora.
            </p>

            <p className="text-base leading-relaxed">
              Pero Atenas es mucho más que el Partenón y la Acrópolis. Es subir a la Colina del Areópago y contemplar el atardecer sobre el templo donde Sócrates paseaba hace 2.400 años. Es perderte en las estrechas calles de Plaka rodeado del aroma de souvlaki recién hecho y aceitunas kalamata. Es descubrir que la arquitectura neoclásica del siglo XIX se funde perfectamente con vestigios helenísticos. Es probar la auténtica moussaka en una taverna familiar donde la receta ha pasado por cinco generaciones. Es caminar por el mismo mercado (Ágora) donde se vendían productos hace más de dos milenios.
            </p>

            <p className="text-base leading-relaxed font-medium text-gray-900">
              Si buscas una ciudad donde la historia antigua no está encerrada en museos sino viva en cada esquina, donde la mitología griega cobra sentido al ver los templos que aprendiste en el colegio, y donde la gastronomía mediterránea alcanza su máxima expresión, Atenas es tu destino perfecto.
            </p>
          </div>
        </div>

        {/* SECCIÓN 2: LLEGADA DESDE EL AEROPUERTO */}
        <div id="llegada-aeropuerto" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">✈️ Llegada desde el Aeropuerto de Atenas</h2>

          <p className="text-gray-700 mb-6">El Aeropuerto Internacional Eleftherios Venizelos (ATH) se encuentra a 33 km del centro de Atenas. Estas son tus opciones de transporte:</p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-blue-900">
              <strong>Haz clic en tu método de transporte preferido</strong> para ver detalles completos con precios actualizados y horarios.
            </p>
          </div>

          {/* Metro Accordion */}
          <button
            onClick={() => toggleAirport('metro')}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚇</span>
              <span className="font-bold text-lg">Metro Línea 3 (Azul) - Opción Más Popular</span>
            </div>
            {expandedAirport === 'metro' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          {expandedAirport === 'metro' && (
            <div className="mb-8 animate-fadeIn">
              <div className="border-2 border-green-400 bg-green-50 rounded-xl p-4 mb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  🔥 🚇 Metro Línea 3 - La Forma Más Económica y Directa
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  Conexión directa al centro de Atenas con paradas en Monastiraki, Syntagma y más
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                  <p className="text-sm text-blue-800">
                    <strong>💡 ¿Cuándo elegir el metro?</strong> Si tu hotel está cerca de cualquier parada de la Línea 3 (Monastiraki, Syntagma, Plaka). Es la opción MÁS barata (10€) y muy eficiente. El único inconveniente es que con equipaje pesado puede ser incómodo en hora punta.
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Precio: 10€ por persona (ida)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Duración: 40 minutos hasta Syntagma
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Horario: 6:30-23:30 (cada 30 min)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    Paradas útiles: Monastiraki, Syntagma, Akropoli
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-yellow-500 mr-2">⚠</span>
                    Puede estar lleno en hora punta con equipaje
                  </div>
                </div>

                <div className="bg-green-100 border-l-4 border-green-500 p-3">
                  <p className="text-sm text-green-900">
                    <strong>💡 Compra el billete en las máquinas del aeropuerto.</strong> Acepta tarjeta y efectivo. El ticket de 10€ es válido solo para el trayecto aeropuerto-centro.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Bus X95 Accordion */}
          <button
            onClick={() => toggleAirport('bus')}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚌</span>
              <span className="font-bold text-lg">Bus Expreso X95 - Servicio 24 Horas</span>
            </div>
            {expandedAirport === 'bus' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          {expandedAirport === 'bus' && (
            <div className="mb-8 animate-fadeIn">
              <div className="border-2 border-orange-400 bg-orange-50 rounded-xl p-4 mb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  🚌 Bus Expreso X95 - Opción 24 Horas
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  Autobús directo desde el aeropuerto a Plaza Syntagma
                </p>

                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 mb-3">
                  <p className="text-sm text-orange-800">
                    <strong>💡 Elige el bus si:</strong> Llegas fuera del horario del metro (antes 6:30 o después 23:30), o prefieres no cargar equipaje por escaleras. Es más lento (60-90 min vs 40 min del metro) pero funciona 24/7 y cuesta lo mismo.
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-orange-500 mr-2">✓</span>
                    Precio: 5,50€ por persona
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-orange-500 mr-2">✓</span>
                    Duración: 60-90 min (depende del tráfico)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-orange-500 mr-2">✓</span>
                    Horario: 24 horas (cada 20-40 min)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-orange-500 mr-2">✓</span>
                    Destino: Plaza Syntagma
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-orange-500 mr-2">✓</span>
                    Espacio para equipaje
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
                  <p className="text-xs text-orange-600">💡 <strong>Importante:</strong> Compra el billete en la parada del bus o en las máquinas. No se vende a bordo.</p>
                </div>
              </div>
            </div>
          )}

          {/* Transfer Privado Accordion */}
          <button
            onClick={() => toggleAirport('transfer')}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚖</span>
              <span className="font-bold text-lg">Transfer Privado - Máximo Confort</span>
            </div>
            {expandedAirport === 'transfer' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          {expandedAirport === 'transfer' && (
            <div className="mb-8 animate-fadeIn">
              <div className="border-2 border-purple-400 bg-purple-50 rounded-xl p-4 mb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  🚖 Transfer Privado - Puerta a Puerta
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  Servicio exclusivo desde el aeropuerto directamente a tu hotel
                </p>

                <div className="bg-purple-100 border-l-4 border-purple-500 p-3 mb-3">
                  <p className="text-sm text-purple-900 mb-2">
                    <strong>🎯 Vale la pena si viajas en grupo:</strong>
                  </p>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>✓ 2 personas: 27€/persona (vs 10€ metro)</li>
                    <li>✓ 3 personas: 18€/persona</li>
                    <li>✓ 4+ personas: 14€/persona</li>
                    <li>✓ También perfecto si llegas de madrugada o con mucho equipaje</li>
                  </ul>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-purple-500 mr-2">✓</span>
                    Precio: Desde 54€ (hasta 4 personas)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-purple-500 mr-2">✓</span>
                    Duración: 35-50 min según tráfico
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-purple-500 mr-2">✓</span>
                    Conductor esperándote con cartel
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-purple-500 mr-2">✓</span>
                    Puerta a puerta, sin paradas
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="text-purple-500 mr-2">✓</span>
                    Tarifa fija sin sorpresas
                  </div>
                </div>

                <a
                  href="https://gyg.me/AyvHieCl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hotel"
                >
                  <span>Reservar transfer privado</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* CONTENIDO ADICIONAL - El usuario continuará añadiendo más secciones */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 text-center">
          <p className="text-gray-700 font-medium">
            📝 Contenido en construcción - Continuará con más secciones...
          </p>
        </div>
      </article>
    </>
  );
};

export default AthensGuideArticle;
