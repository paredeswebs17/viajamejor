import React, { useState } from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">✈️ Llegada y Conexiones desde el Aeropuerto</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-blue-900">
              <strong>Haz clic en el aeropuerto de llegada</strong> para ver todas las opciones de transporte disponibles con precios actualizados.
            </p>
          </div>

          <button
            onClick={() => toggleAirport('eleftherios-venizelos')}
            className="w-full bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">✈️</span>
              <span className="font-bold text-lg">Aeropuerto Eleftherios Venizelos (ATH)</span>
            </div>
            {expandedAirport === 'eleftherios-venizelos' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          {expandedAirport === 'eleftherios-venizelos' && (
            <div className="mb-8 animate-fadeIn">
              <h3 className="text-lg font-bold text-gray-900 mb-4 mt-4">📍 Desde Aeropuerto Eleftherios Venizelos (33 km del centro)</h3>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">🚇 Metro Línea 3 (Azul) - La Opción Más Práctica</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> 10€ por persona</p>
                    <p className="text-sm text-gray-700 mb-2"><strong>Horario:</strong> 6:30-23:30</p>
                    <p className="text-sm text-gray-700 mb-2"><strong>Duración:</strong> 40 minutos hasta Syntagma</p>
                    <p className="text-sm text-gray-700"><strong>Frecuencia:</strong> Cada 30 minutos</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Paradas principales:</strong> Syntagma, Monastiraki, Akropoli</p>
                    <p className="text-sm text-gray-700"><strong>Compra:</strong> Máquinas en el aeropuerto (tarjeta o efectivo)</p>
                  </div>
                </div>
                <div className="bg-blue-100 rounded-lg p-3 mt-4">
                  <p className="text-blue-800 text-sm font-medium">💡 La opción más económica y directa. Perfecto si tu hotel está cerca de las paradas centrales. Puede estar lleno con equipaje en hora punta.</p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-4">
                <h4 className="font-bold text-gray-900 mb-3">🚌 Bus Expreso X95 - Servicio 24 Horas</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> 5,50€ por persona</p>
                    <p className="text-sm text-gray-700 mb-2"><strong>Horario:</strong> 24 horas / 7 días</p>
                    <p className="text-sm text-gray-700 mb-2"><strong>Duración:</strong> 60-90 minutos</p>
                    <p className="text-sm text-gray-700"><strong>Frecuencia:</strong> Cada 20-40 minutos</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Destino:</strong> Plaza Syntagma (centro)</p>
                    <p className="text-sm text-gray-700"><strong>Compra:</strong> Paradas o máquinas (NO a bordo)</p>
                  </div>
                </div>
                <div className="bg-orange-100 rounded-lg p-3 mt-4">
                  <p className="text-orange-800 text-sm font-medium">💡 Elige esta opción si llegas fuera del horario del metro (antes 6:30 o después 23:30). Más lento pero funciona 24/7 y tiene espacio para equipaje.</p>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-4 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="font-bold text-gray-900 mb-3">🚗 Transfer Privado - Máximo Confort</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> Desde 54€ (hasta 4 personas)</p>
                    <p className="text-sm text-gray-700"><strong>Duración:</strong> 35-50 minutos</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Ideal para:</strong> Grupos, familias, equipaje</p>
                    <p className="text-sm text-gray-700"><strong>Ventajas:</strong> Puerta a puerta, sin esperas</p>
                  </div>
                </div>
                <div className="bg-purple-100 rounded-lg p-3 mb-4">
                  <p className="text-purple-800 text-sm mb-2"><strong>🎯 Vale la pena si viajas en grupo:</strong></p>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>✓ 2 personas: 27€/persona (vs 10€ metro)</li>
                    <li>✓ 3 personas: 18€/persona</li>
                    <li>✓ 4+ personas: 14€/persona</li>
                  </ul>
                </div>
                <a
                  href="https://gyg.me/AyvHieCl"
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

        {/* SECCIÓN 3: DÓNDE DORMIR */}
        <div id="donde-dormir" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🏨 Dónde Dormir en Atenas</h2>

          <p className="text-gray-700 mb-6">
            La ubicación de tu hotel en Atenas es clave para aprovechar el viaje. Te recomiendo alojarte en el centro histórico para estar cerca de todos los monumentos principales:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <h3 className="font-bold text-blue-900 mb-3">🎯 Mejores Barrios para Alojarse:</h3>
            <div className="space-y-2 text-sm text-blue-800">
              <p>• <strong>Plaka:</strong> El barrio más encantador, a los pies de la Acrópolis. Caro pero merece la pena.</p>
              <p>• <strong>Monastiraki:</strong> Céntrico, animado, con buen transporte. Zona comercial y turística.</p>
              <p>• <strong>Syntagma:</strong> Corazón de Atenas moderna. Perfecto para transporte público.</p>
              <p>• <strong>Kolonaki:</strong> Barrio elegante y residencial. Más tranquilo y sofisticado.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-4">
            <h4 className="font-bold text-gray-900 mb-2">💡 Mi Recomendación:</h4>
            <p className="text-sm text-gray-800">
              Busca hotel en <strong>Plaka o Monastiraki</strong> para estar a 5-10 minutos andando de la Acrópolis. Reserva con 2-3 meses de antelación para mejores precios. Usa <strong>Booking.com</strong> para comparar opciones con cancelación gratuita.
            </p>
          </div>
        </div>

        {/* SECCIÓN 4: ITINERARIO */}
        <div id="itinerario" className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">📅 Itinerario de 3 Días por Atenas</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">DÍA</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EXPERIENCIAS ATENIENSES</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 1</td>
                  <td className="border border-gray-300 px-4 py-3">Acrópolis + Partenón + Colina del Areópago + Ágora Romana + Biblioteca de Adriano + Barrio de Monastiraki + Ágora de Atenas + Templo de Hefesto</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 2</td>
                  <td className="border border-gray-300 px-4 py-3">Templo de Zeus Olímpico + Estadio Panatenaico + Plaza Syntagma + Cambio de Guardia + Barrio de Plaka + Museo de la Acrópolis + Monte Licabeto al atardecer</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 3</td>
                  <td className="border border-gray-300 px-4 py-3">Excursión a Delfos / Meteora / Corinto-Micenas-Epidauro (día completo fuera de Atenas)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Separador decorativo */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full"></div>
          </div>
        </div>

        {/* DÍA 1 - COMPLETO Y DETALLADO */}
        <div id="dia-1" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">1</span>
              DÍA 1: La Acrópolis y el Legado de los Dioses
            </h2>

            {/* Acrópolis de Atenas */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-3"></div>
                Acrópolis de Atenas - El Monumento Más Importante (8:00h)
              </h3>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🏛️ La Ciudadela Sagrada de Atenas</h4>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg"
                    alt="Partenón en la Acrópolis de Atenas"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  Comenzamos el viaje en el lugar más emblemático de Grecia: la Acrópolis (significa "ciudad alta"). Esta roca sagrada de 156 metros domina Atenas desde hace 2.500 años. Aquí verás el Partenón, el templo más perfecto jamás construido, dedicado a Atenea, diosa protectora de la ciudad.
                </p>

                <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mb-4">
                  <p className="text-sm text-amber-900 mb-2">
                    <strong>⚠️ IMPORTANTE - Llega a primera hora (8:00h)</strong>
                  </p>
                  <p className="text-sm text-amber-800">
                    La Acrópolis recibe hasta 20.000 visitantes diarios en verano. Las colas de entrada pueden superar las 2 horas a partir de las 10:00h. Además, a primera hora evitas el calor intenso del mediodía (no hay sombra) y los grupos de cruceros que llegan a las 9:30h.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">⭐ Qué Verás:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>Partenón (447-432 a.C.)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Erecteión con las Cariátides</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Templo de Atenea Niké</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Propileos (entrada monumental)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Teatro de Dioniso</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Odeón de Herodes Ático</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Entrada: 20€ (12€ nov-mar)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Horario: 8:00-20:00 (verano)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Duración: 2-3 horas</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Calzado cómodo IMPRESCINDIBLE</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Lleva agua (no venden dentro)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <p className="text-sm text-blue-800">
                    <strong>💡 Truco:</strong> Entra por el acceso Sur (Dionisio Areopagita) en lugar del principal. Menos cola y pasas primero por el Teatro de Dioniso. Al salir, usa la salida Norte para subir directamente al Areópago.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://etickets.tap.gr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hotel mb-3"
                  >
                    <span>Comprar Entrada Oficial</span>
                    <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                  <a
                    href="https://gyg.me/Qj5yoL5g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hotel"
                  >
                    <span>Tour Guiado en Español</span>
                    <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Colina del Areópago */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mr-3"></div>
                Colina del Areópago - Atardecer de los Dioses (11:00h)
              </h3>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">⚖️ El Tribunal de los Dioses</h4>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/7218638/pexels-photo-7218638.jpeg"
                    alt="Vista desde la Colina del Areópago"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  Al salir de la Acrópolis, sube esta roca lisa donde los atenienses celebraban juicios hace 2.500 años. Según la mitología, aquí fue juzgado Ares, el dios de la guerra. Las vistas del Partenón y de Atenas son espectaculares.
                </p>

                <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-4">
                  <p className="text-sm text-orange-900 mb-2">
                    <strong>📸 EL MEJOR ATARDECER DE ATENAS</strong>
                  </p>
                  <p className="text-sm text-orange-800">
                    Aunque subas ahora para ver las vistas, te recomiendo VOLVER al atardecer (18:00-19:00h en verano, 16:30-17:30h en invierno). Ver el sol ponerse detrás del Partenón mientras Atenas se ilumina es una de las experiencias más mágicas de Grecia. Es gratuito y la roca tiene espacio para todos.
                  </p>
                </div>

                <div className="text-sm text-gray-700 space-y-1">
                  <p className="font-semibold mb-1">📍 Curiosidades:</p>
                  <ul className="space-y-1 list-none">
                    <li className="flex items-start"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Aquí predicó San Pablo en el año 51 d.C.</span></li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Roca lisa y resbaladiza - lleva calzado con buen agarre</span></li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Entrada GRATUITA las 24 horas</span></li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>2 minutos de la salida de la Acrópolis</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ágora Romana */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
                Ágora Romana (11:30h)
              </h3>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🏛️ El Mercado Romano de Atenas</h4>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/11649392/pexels-photo-11649392.jpeg"
                    alt="Ágora Romana de Atenas con la Torre de los Vientos"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  Plaza pública construida entre el 19-11 a.C. durante el Imperio Romano. Aquí estaba el mercado central de Atenas hace 2.000 años. Destaca la Torre de los Vientos (50 a.C.), un reloj hidráulico octogonal que es el primer observatorio meteorológico de la historia.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">⭐ Qué Ver:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Torre de los Vientos (Horologion)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Puerta de Atenea Arquegetis</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Mezquita de Fethiye (s. XV)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Letrina pública romana</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🎫 Info Práctica:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Entrada: 8€ (incluida en pase combinado)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Horario: 8:00-20:00</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Duración: 30-45 minutos</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>A 3 min de Monastiraki</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-100 border-l-4 border-green-500 p-3">
                  <p className="text-sm text-green-900">
                    <strong>💰 Pase Combinado:</strong> Por 30€ accedes a: Acrópolis, Ágora Romana, Biblioteca de Adriano, Ágora Antigua, Kerameikos, y 2 sitios más. Válido 5 días. Si vas a visitar más de 2 lugares, sale rentable.
                  </p>
                </div>
              </div>
            </div>

            {/* Biblioteca de Adriano */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
                Biblioteca de Adriano (12:15h)
              </h3>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">📚 La Biblioteca de las 100 Columnas</h4>
                <p className="text-gray-700 mb-4">
                  Construida por el emperador Adriano en 132 d.C., no era solo una biblioteca sino un complejo cultural con salas de lectura, jardines y aulas. Llamada "de las 100 columnas" por las impresionantes columnas corintias que rodeaban el jardín interior (hoy quedan pocas).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="text-sm text-gray-700 space-y-1">
                    <p className="font-semibold mb-1">⭐ Highlights:</p>
                    <ul className="space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Fachada oeste conservada</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Restos de columnas corintias</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Iglesia bizantina en el interior</li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p className="font-semibold mb-1">🎫 Info:</p>
                    <ul className="space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Entrada: 6€ (incluida en pase)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Duración: 20-30 minutos</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Al lado del Ágora Romana</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Barrio de Monastiraki */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-yellow-400 rounded-full mr-3"></div>
                Monastiraki - Almuerzo y Shopping (13:00h)
              </h3>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🛍️ El Bazar de Atenas</h4>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/15339398/pexels-photo-15339398.jpeg"
                    alt="Plaza Monastiraki con vista a la Acrópolis"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  Barrio animado con bazares, mercadillos y la plaza más vibrante de Atenas. Aquí encontrarás desde antigüedades hasta imitaciones de souvenirs, restaurantes tradicionales y el famoso mercadillo de pulgas (Flea Market) que funciona todos los días pero está más completo los domingos.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🍽️ Dónde Comer:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Thanasis:</strong> Souvlaki y kebabs famosos (8-12€)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Savvas:</strong> Gyros tradicional (6-10€)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>MS Roof Garden:</strong> Terraza con vistas Acrópolis (15-25€)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🛍️ Qué Comprar:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Ojo griego (Mati)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Komboloi (rosarios griegos)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Sandalias de cuero artesanas</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Aceite de oliva y aceitunas</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-100 border-l-4 border-amber-500 p-3">
                  <p className="text-sm text-amber-900">
                    <strong>💡 Flea Market:</strong> Funciona todos los días (9:00-19:00) pero el DOMINGO es cuando hay más puestos. Encontrarás antigüedades, libros viejos, ropa vintage, joyas... ¡Regatea siempre!
                  </p>
                </div>
              </div>
            </div>

            {/* Ágora de Atenas */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-sky-400 to-blue-400 rounded-full mr-3"></div>
                Ágora de Atenas - Donde Nació la Democracia (14:30h)
              </h3>
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🏛️ El Corazón de la Antigua Atenas</h4>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/18757918/pexels-photo-18757918.jpeg"
                    alt="Templo de Hefesto en el Ágora de Atenas"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  El centro neurálgico de la antigua Atenas donde se reunía la ekklesia (asamblea democrática), se comerciaba, se celebraban eventos y Sócrates paseaba debatiendo con sus discípulos. Aquí nació la democracia occidental hace 2.500 años.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">⭐ Imprescindibles:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Templo de Hefesto:</strong> El templo griego mejor conservado del mundo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Stoa de Átalo:</strong> Pórtico reconstruido, ahora museo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Biblioteca de Pantainos:</strong> Ruinas de biblioteca del s. II</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🎫 Información:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Entrada: 10€ (incluida en pase)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Horario: 8:00-20:00</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Duración: 1.5-2 horas</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Museo incluido en la entrada</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-sky-100 border-l-4 border-sky-500 p-4 mb-4">
                  <p className="text-sm text-sky-900 mb-2">
                    <strong>📚 Dato Fascinante:</strong>
                  </p>
                  <p className="text-sm text-sky-800">
                    La palabra "Ágora" en griego significa "lugar de reunión". Este era el epicentro de la vida ateniense: mercado, tribunal, centro político y lugar de debate filosófico. Sócrates, Platón y Aristóteles caminaron por estas mismas piedras.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
                  <p className="text-xs text-sky-600">
                    💡 <strong>El Templo de Hefesto</strong> está tan bien conservado porque se convirtió en iglesia cristiana en el siglo VII, lo que lo protegió de la destrucción. ¡Aún conserva el techo original!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DÍA 2 - COMPLETO Y DETALLADO */}
          <div id="dia-2" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">2</span>
              DÍA 2: Templos Olímpicos, Estadios y Museos
            </h2>

            {/* Templo de Zeus Olímpico */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full mr-3"></div>
                Templo de Zeus Olímpico - El Olimpeion (9:00h)
              </h3>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">⚡ El Templo Más Grande de la Antigua Grecia</h4>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/8349098/pexels-photo-8349098.jpeg"
                    alt="Columnas del Templo de Zeus Olímpico"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  Comenzamos el día frente a las columnas más altas de Grecia. Este templo dedicado a Zeus tardó ¡700 años en construirse! (comenzó en el 515 a.C. y se terminó en el 131 d.C. bajo el emperador Adriano). En su apogeo tenía 104 columnas corintias de 17 metros de altura. Hoy quedan 15 en pie, pero su magnitud sigue siendo impresionante.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">⭐ Qué Ver:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-gold-400 rounded-full mr-3"></span>15 columnas corintias monumentales (17m)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Columna caída (muestra su interior)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Vistas de la Acrópolis desde el recinto</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Arco de Adriano (entrada histórica)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Entrada: 8€ (incluida en pase combinado)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Horario: 8:00-20:00 (verano)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Duración: 30-45 minutos</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>A 10 min andando de Syntagma</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mb-4">
                  <p className="text-sm text-amber-900 mb-2">
                    <strong>📏 Dato Impresionante:</strong>
                  </p>
                  <p className="text-sm text-amber-800">
                    El templo medía 96 x 40 metros, casi el tamaño de un campo de fútbol. Las columnas tienen 17 metros de altura y 2 metros de diámetro. En su interior había una estatua crisoelefantina (oro y marfil) de Zeus de 13 metros de altura.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
                  <p className="text-xs text-amber-600">
                    💡 <strong>Foto perfecta:</strong> Colócate junto al Arco de Adriano para tener en el mismo encuadre el arco, las columnas del Olimpeion y la Acrópolis al fondo. La mejor luz es por la mañana temprano.
                  </p>
                </div>
              </div>
            </div>

            {/* Estadio Panatenaico */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
                Estadio Panatenaico - Cuna de los Juegos Olímpicos (10:00h)
              </h3>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🏟️ El Único Estadio del Mundo Construido Completamente en Mármol</h4>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/20787843/pexels-photo-20787843.jpeg"
                    alt="Estadio Panatenaico de mármol blanco"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  Aquí se celebraron los primeros Juegos Olímpicos de la era moderna en 1896. El estadio original data del 330 a.C. y fue reconstruido completamente en mármol blanco del Monte Pentélico en 1896. Con capacidad para 45.000 espectadores, es una maravilla de la ingeniería antigua.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">⭐ Experiencia:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span>Baja a la pista y corre donde corrieron los primeros olímpicos modernos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span>Sube hasta las gradas superiores (vistas panorámicas)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span>Visita el pequeño museo con antorchas olímpicas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span>Haz foto en el podio olímpico</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🎫 Información:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Entrada: 10€</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Incluye audioguía en español</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Horario: 8:00-19:00 (mar-oct)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Duración: 45-60 minutos</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
                  <p className="text-sm text-green-900 mb-2">
                    <strong>🏅 Historia Olímpica:</strong>
                  </p>
                  <p className="text-sm text-green-800">
                    En los Juegos Panatenaicos originales (566 a.C.) competían solo ciudadanos atenienses. Los primeros Juegos Olímpicos modernos (1896) tuvieron 241 atletas de 14 países. En 2004, Atenas volvió a ser sede olímpica y este estadio acogió las pruebas de tiro con arco y la meta del maratón.
                  </p>
                </div>

                <a
                  href="https://www.panathenaicstadium.gr/en/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hotel"
                >
                  <span>Comprar entrada con audioguía</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Plaza Syntagma */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-3"></div>
                Plaza Syntagma - Cambio de Guardia (11:30h)
              </h3>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">💂 El Corazón de la Atenas Moderna</h4>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/18757926/pexels-photo-18757926.jpeg"
                    alt="Evzones guardia presidencial en Plaza Syntagma"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  La plaza principal de Atenas, frente al Parlamento Helénico. Aquí se celebra cada hora el cambio de guardia de los Evzones (guardia presidencial) frente a la Tumba del Soldado Desconocido. Los domingos a las 11:00h el cambio de guardia es más elaborado con toda la compañía.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">⏰ Horarios del Cambio:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Cada hora en punto (24 horas)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Domingos 11:00h: ceremonia completa</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Duración: 10-15 min (45 min domingos)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Entrada: GRATIS</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">👀 Curiosidades:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span>Uniforme tradicional con fustanella (falda) y tsarouhia (zapatos con pompón)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span>Cada zapato pesa 3 kg y tiene 60 clavos en la suela</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span>Paso ceremonial único: levantan pierna a 90 grados</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-100 border-l-4 border-blue-500 p-4">
                  <p className="text-sm text-blue-900 mb-2">
                    <strong>📸 Mejor Posición para Fotos:</strong>
                  </p>
                  <p className="text-sm text-blue-800">
                    Llega 15 minutos antes para conseguir sitio en primera fila. El mejor ángulo es desde el lado derecho mirando al Parlamento. Los domingos a las 11:00h llega con 30 minutos de antelación porque se llena mucho.
                  </p>
                </div>
              </div>
            </div>

            {/* Barrio de Plaka */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-rose-400 rounded-full mr-3"></div>
                Barrio de Plaka - Almuerzo Griego (12:30h)
              </h3>
              <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🏘️ El Barrio de los Dioses</h4>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/11649391/pexels-photo-11649391.jpeg"
                    alt="Calle pintoresca del barrio de Plaka"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  El barrio más antiguo y encantador de Atenas, construido sobre las ruinas de la antigua ciudad. Sus calles peatonales empedradas, casas neoclásicas del siglo XIX, buganvillas en los balcones y tabernas tradicionales crean una atmósfera mágica. Es llamado "el barrio de los Dioses" por estar a los pies de la Acrópolis.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🍽️ Dónde Comer:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Arcadia:</strong> Taverna familiar auténtica (12-20€)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Victory Cafe:</strong> Comida típica bien de precio (10-18€)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>To Kafeneio:</strong> Taverna tradicional escondida (15-25€)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Avocado:</strong> Opciones veganas y saludables (10-16€)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🛍️ Calles Principales:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Adrianou:</strong> La calle más animada con tiendas y restaurantes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Kydathineon:</strong> Joyerías y artesanías</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Mnisikleous:</strong> Escaleras con tabernas y vistas</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-pink-100 border-l-4 border-pink-500 p-4">
                  <p className="text-sm text-pink-900 mb-2">
                    <strong>🍷 Experiencia Auténtica:</strong>
                  </p>
                  <p className="text-sm text-pink-800">
                    No te pierdas probar una comida completa griega: empieza con tzatziki y ensalada griega, sigue con moussaka o souvlaki, y termina con loukoumades (buñuelos con miel). Acompáñalo con vino retsina o una cerveza Mythos fría. Presupuesto: 15-25€ por persona con bebida.
                  </p>
                </div>
              </div>
            </div>

            {/* Museo de la Acrópolis */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full mr-3"></div>
                Museo de la Acrópolis (14:30h)
              </h3>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🏛️ Los Tesoros de la Acrópolis Bajo Cristal</h4>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/15339394/pexels-photo-15339394.jpeg"
                    alt="Interior moderno del Museo de la Acrópolis"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  Museo ultra-moderno (2009) que alberga los tesoros originales de la Acrópolis. El edificio está construido sobre excavaciones arqueológicas visibles a través de suelos de cristal. Aquí verás las esculturas originales que han sido retiradas de la Acrópolis para su conservación, incluyendo las famosas Cariátides originales.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">⭐ Imprescindibles:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Sala del Partenón:</strong> Frisos originales del Partenón (planta 3)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Cariátides originales:</strong> Las 5 estatuas-columna del Erecteión</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Korai arcaicas:</strong> Estatuas femeninas pre-clásicas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Suelo de cristal:</strong> Ruinas arqueológicas visibles bajo tus pies</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🎫 Información:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Entrada: 15€ (10€ nov-mar)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Horario: 9:00-20:00 (Vie hasta 22:00)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Duración: 1.5-2 horas</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Cafetería con vistas a la Acrópolis</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Audioguía: 5€ (recomendada)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-100 border-l-4 border-purple-500 p-4 mb-4">
                  <p className="text-sm text-purple-900 mb-2">
                    <strong>🇬🇧 Los Mármoles del Partenón:</strong>
                  </p>
                  <p className="text-sm text-purple-800">
                    La sala del Partenón está incompleta porque el 50% de los frisos originales están en el Museo Británico de Londres (los llamados "Elgin Marbles"). Grecia los reclama desde hace 200 años. El museo ha dejado espacios vacíos donde estarían las piezas en Londres, con copias en yeso para mostrar cómo lucía completo.
                  </p>
                </div>

                <a
                  href="https://www.theacropolismuseum.gr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hotel"
                >
                  <span>Comprar entrada oficial</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Monte Licabeto */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mr-3"></div>
                Monte Licabeto - Atardecer Panorámico (17:30h)
              </h3>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🌅 El Punto Más Alto de Atenas (277m)</h4>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/12211393/pexels-photo-12211393.jpeg"
                    alt="Vista panorámica de Atenas desde el Monte Licabeto al atardecer"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  Terminamos el día con vistas 360° de toda Atenas desde el punto más alto de la ciudad. En la cima hay una pequeña capilla blanca (San Jorge), un restaurante panorámico y un teatro al aire libre. Al atardecer, ver la Acrópolis iluminarse mientras el sol se pone sobre el mar Egeo es simplemente mágico.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🚡 Cómo Subir:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Funicular:</strong> 10€ i/v (cada 10 min, 3 min trayecto)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>A pie:</strong> Gratis, sendero desde barrio Kolonaki (20-30 min subida)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Taxi:</strong> Te deja en la base del funicular</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🌟 Qué Hay:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Capilla de San Jorge</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Restaurante Orizontes (caro pero vistas TOP)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Café-bar más económico</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Teatro Lycabettus (conciertos verano)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-4">
                  <p className="text-sm text-orange-900 mb-2">
                    <strong>📸 Mejor Momento para Fotos:</strong>
                  </p>
                  <p className="text-sm text-orange-800">
                    Llega 45 minutos antes del atardecer para coger buen sitio. En verano (atardecer ~20:30h) está MUY lleno. En invierno (atardecer ~17:30h) hay menos gente. Las vistas son espectaculares tanto de día como de noche, pero el momento del atardecer es el más especial.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
                  <p className="text-xs text-orange-600">
                    💡 <strong>Alternativa sin colas:</strong> Si no quieres esperar el funicular o está lleno, la subida a pie desde Kolonaki tarda 20-30 minutos. El sendero es empinado pero está bien señalizado. Baja mejor en funicular (de noche el sendero no está iluminado).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DÍA 3 - EXCURSIONES DESDE ATENAS */}
          <div id="dia-3" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-gradient-to-br from-emerald-500 to-green-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">3</span>
              DÍA 3: Excursiones Legendarias desde Atenas
            </h2>

            <p className="text-gray-700 mb-6">
              Para el tercer día te recomendamos salir de Atenas y descubrir algunos de los lugares más legendarios de Grecia. Aquí tienes las 3 excursiones más populares:
            </p>

            {/* Excursión a Delfos */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-3"></div>
                Excursión a Delfos - El Ombligo del Mundo
              </h3>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🔮 El Oráculo Más Famoso de la Antigüedad</h4>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/15830388/pexels-photo-15830388.jpeg"
                    alt="Templo de Apolo en Delfos con las montañas al fondo"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  Delfos está a 180 km de Atenas (2.5 horas en coche) en las laderas del Monte Parnaso. En la antigua Grecia era considerado el "ombligo del mundo" y el centro espiritual de la civilización helénica. Aquí, la pitonisa Pitia pronunciaba profecías en trance que reyes y ciudadanos consultaban antes de tomar decisiones importantes.
                </p>

                <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-4">
                  <p className="text-sm text-blue-900 mb-2">
                    <strong>¿Por qué visitar Delfos?</strong>
                  </p>
                  <p className="text-sm text-blue-800">
                    Delfos combina historia, mitología y naturaleza espectacular. El yacimiento arqueológico está en la ladera de una montaña con vistas increíbles al valle. Es uno de los sitios arqueológicos mejor conservados de Grecia y Patrimonio de la Humanidad por la UNESCO. Además, el Museo Arqueológico de Delfos alberga el famoso Auriga de Delfos (estatua de bronce del 478 a.C.).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">⭐ Qué Verás:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Templo de Apolo:</strong> Donde la pitonisa pronunciaba los oráculos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Teatro de Delfos:</strong> 5.000 espectadores, vistas espectaculares</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Estadio Antiguo:</strong> Juegos Píticos cada 4 años</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Tholos de Atenea:</strong> Templo circular icónico</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Museo Arqueológico:</strong> El Auriga de Delfos y tesoros</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Tour guiado: Desde 95€</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Duración: Día completo (10-11h)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Incluye: Transporte + guía español</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Salida: 8:00-8:30h desde Atenas</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Almuerzo: En pueblo de Delfos</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-2 border-amber-300 rounded-xl p-4 mb-4">
                  <h5 className="font-bold text-gray-900 mb-2">📚 Curiosidad Mitológica:</h5>
                  <p className="text-sm text-gray-800">
                    Según la mitología, Zeus soltó dos águilas desde extremos opuestos del mundo y se encontraron en Delfos, marcándolo como el centro del mundo. La piedra Omphalos (ombligo) marcaba ese punto exacto en el Templo de Apolo. La palabra "pitonisa" viene de Pitia, la sacerdotisa del oráculo, que a su vez viene de Pitón, la serpiente que Apolo mató para fundar su santuario.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://gyg.me/DYkIGLUb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hotel mb-3"
                  >
                    <span>Tour Delfos con Guía Español</span>
                    <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                  <a
                    href="https://gyg.me/z8aMEqEU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hotel"
                  >
                    <span>Tour Delfos + Monasterio Hosios Lukas</span>
                    <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Excursión a Meteora */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
                Excursión a Meteora - Monasterios en el Cielo
              </h3>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🏔️ Los Monasterios Suspendidos Más Impresionantes del Mundo</h4>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/12903828/pexels-photo-12903828.jpeg"
                    alt="Monasterios de Meteora sobre pilares de roca gigantes"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  Meteora ("suspendido en el aire" en griego) está a 350 km de Atenas (4.5 horas en coche). Son monasterios ortodoxos construidos en lo alto de enormes pilares de roca de arenisca que se elevan hasta 400 metros sobre el valle de Tesalia. El primer monasterio se fundó en el siglo XIV para protegerse de invasores. Hoy quedan 6 monasterios activos de los 24 originales.
                </p>

                <div className="bg-purple-100 border-l-4 border-purple-500 p-4 mb-4">
                  <p className="text-sm text-purple-900 mb-2">
                    <strong>⚠️ IMPORTANTE - La Distancia:</strong>
                  </p>
                  <p className="text-sm text-purple-800 mb-2">
                    Meteora está a 4.5 horas de Atenas (360 km). El tour en autobús implica 9 horas de viaje total (ida y vuelta). Es cansado pero ABSOLUTAMENTE vale la pena. Las vistas son de otro planeta. Otra opción es tomar el tren nocturno y dormir en Kalambaka (pueblo base de Meteora) para visitarlo más tranquilo al día siguiente.
                  </p>
                  <p className="text-sm text-purple-800">
                    <strong>Alternativa:</strong> Tour de 2 días con noche en Kalambaka (más relajado pero requiere día extra).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">⭐ Los 6 Monasterios Activos:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gold-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Gran Meteoro:</strong> El más grande y antiguo (s. XIV)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Varlaam:</strong> Segundo en tamaño, frescos impresionantes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Roussanou:</strong> Monasterio de monjas, más accesible</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>San Nicolás Anapafsas:</strong> El más pequeño</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Santísima Trinidad:</strong> El más espectacular (salió en James Bond)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>San Esteban:</strong> Monasterio de monjas, fácil acceso</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🎫 Información Práctica:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Tour 1 día: Desde 89€</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Tour 2 días: Desde 219€ (+ hotel)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Duración 1 día: 13-14 horas</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Salida: 7:00-7:30h desde Atenas</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Entrada monasterios: 3€ cada uno</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Código vestimenta: Pantalón largo</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300 rounded-xl p-4 mb-4">
                  <h5 className="font-bold text-gray-900 mb-2">📸 Dato Curioso:</h5>
                  <p className="text-sm text-gray-800">
                    Originalmente, los monjes subían en cestas izadas con poleas y cuerdas. Cuando les preguntaban cada cuánto cambiaban las cuerdas, respondían: "Cuando Dios quiere que se rompan". Hoy hay escaleras talladas en la roca, pero algunas siguen siendo empinadas (300+ escalones en algunos).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://gyg.me/bChRUuFg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hotel mb-3"
                  >
                    <span>Tour Meteora 1 Día (Tren + Bus)</span>
                    <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                  <a
                    href="https://gyg.me/tXG3xGd0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hotel"
                  >
                    <span>Tour Meteora 2 Días con Hotel</span>
                    <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Excursión Corinto, Micenas, Epidauro */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
                Excursión a Corinto, Micenas y Epidauro - Ruta Argólida
              </h3>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">🏛️ Tres Joyas Arqueológicas en Un Día</h4>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/18271653/pexels-photo-18271653.jpeg"
                    alt="Teatro antiguo de Epidauro con acústica perfecta"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  Esta excursión combina tres de los yacimientos arqueológicos más importantes del Peloponeso, todos Patrimonio de la UNESCO. Perfecta si te apasiona la mitología griega: visitarás el reino de Agamenón, el teatro con mejor acústica del mundo antiguo, y cruzarás el famoso Canal de Corinto.
                </p>

                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-bold text-green-800 mb-2 flex items-center">
                      <span className="text-2xl mr-2">🏺</span>
                      1. Micenas - La Ciudad de Agamenón
                    </h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Capital de la civilización micénica (1600-1100 a.C.). Aquí reinó Agamenón, líder de los griegos en la Guerra de Troya. Verás la impresionante Puerta de los Leones (1250 a.C., la entrada monumental más antigua de Europa), las murallas ciclópeas, y las tumbas reales donde Schliemann descubrió la Máscara de Agamenón.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Puerta de los Leones (icónica)</li>
                      <li>• Tumbas reales circulares</li>
                      <li>• Palacio de Agamenón (ruinas)</li>
                      <li>• Tesoro de Atreo (tumba monumental)</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-bold text-green-800 mb-2 flex items-center">
                      <span className="text-2xl mr-2">🎭</span>
                      2. Epidauro - El Teatro Perfecto
                    </h5>
                    <p className="text-sm text-gray-700 mb-2">
                      El teatro antiguo mejor conservado de Grecia (s. IV a.C.). Su acústica es TAN perfecta que puedes escuchar una moneda caer en el escenario desde la última fila (14.000 espectadores de capacidad). Forma parte del Santuario de Asclepio, el dios griego de la medicina, que era un centro de curación en la antigüedad.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Teatro con 55 filas de asientos</li>
                      <li>• Prueba la acústica desde el escenario</li>
                      <li>• Santuario de Asclepio</li>
                      <li>• Museo arqueológico pequeño</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-bold text-green-800 mb-2 flex items-center">
                      <span className="text-2xl mr-2">⚓</span>
                      3. Canal de Corinto - Obra de Ingeniería
                    </h5>
                    <p className="text-sm text-gray-700 mb-2">
                      Canal excavado a través del istmo de Corinto (1881-1893) que conecta el Golfo de Corinto con el Mar Egeo. Tiene 6 km de largo y solo 21 metros de ancho, con paredes verticales de 90 metros de altura. Parada fotográfica espectacular (no se baja, solo se ve desde el puente).
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Parada de 10-15 minutos en el puente</li>
                      <li>• Vistas impresionantes del canal</li>
                      <li>• Si hay suerte, ves un barco pasando (muy justo)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
                  <p className="text-sm text-green-900 mb-2">
                    <strong>🎯 ¿Para quién es esta excursión?</strong>
                  </p>
                  <p className="text-sm text-green-800">
                    Ideal si te apasiona la mitología griega y la arqueología. Micenas es el escenario de la saga de Agamenón (Guerra de Troya, Orestíada). Epidauro te deja sin palabras con su acústica milenaria. Es menos espectacular visualmente que Delfos o Meteora, pero históricamente es impresionante. Perfecta para fans de la historia antigua.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🎫 Información:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Tour guiado: Desde 95€</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Duración: Día completo (10-11h)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Salida: 8:00-8:30h</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Incluye: Transporte + guía</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">⏱️ Tiempos:</h5>
                    <ul className="text-sm text-gray-700 space-y-1 list-none">
                      <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Canal Corinto: 15 min (parada foto)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Micenas: 1.5-2 horas visita</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Epidauro: 1 hora visita</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Almuerzo: Nafplio (pueblo costero)</li>
                    </ul>
                  </div>
                </div>

                <a
                  href="https://gyg.me/r9Q0sY6u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hotel"
                >
                  <span>Reservar Tour Argólida con Guía Español</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Comparativa de Excursiones */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-6 shadow-md mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                🤔 ¿Cuál Excursión Elegir?
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 border-2 border-blue-300">
                  <h5 className="font-bold text-blue-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🔮</span>
                    Elige Delfos si:
                  </h5>
                  <ul className="text-sm text-blue-900 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                      <span>Quieres el yacimiento arqueológico MÁS espectacular</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                      <span>Te fascina la mitología del Oráculo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                      <span>Valoras paisajes de montaña impresionantes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                      <span>Solo tienes 1 día para excursión (la MÁS completa)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                      <span>Es tu primera visita a Grecia</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-purple-300">
                  <h5 className="font-bold text-purple-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🏔️</span>
                    Elige Meteora si:
                  </h5>
                  <ul className="text-sm text-purple-900 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-0.5">✓</span>
                      <span>Buscas el paisaje MÁS único y fotogénico</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-0.5">✓</span>
                      <span>Te interesan monasterios bizantinos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-0.5">✓</span>
                      <span>No te importa viaje largo (9h ida/vuelta)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-0.5">✓</span>
                      <span>Ya has visto templos griegos clásicos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-0.5">✓</span>
                      <span>Tienes 2 días extra (ideal tour 2 días)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-green-300">
                  <h5 className="font-bold text-green-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">🏛️</span>
                    Elige Argólida si:
                  </h5>
                  <ul className="text-sm text-green-900 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span>Eres FAN de la mitología (Agamenón, Troya)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span>Quieres ver el teatro con mejor acústica del mundo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span>Prefieres visitar VARIOS sitios arqueológicos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span>Ya has visitado Delfos en otro viaje</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span>Estudias historia/arqueología griega</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-200 mt-4">
                <p className="text-sm text-gray-800 text-center">
                  <strong>💡 Mi recomendación personal:</strong> Si solo puedes hacer UNA excursión, elige <strong className="text-blue-600">Delfos</strong> (el más completo e impresionante). Si tienes días extra, <strong className="text-purple-600">Meteora</strong> es una experiencia única en el mundo. <strong className="text-green-600">Argólida</strong> es perfecta para fans hardcore de mitología griega.
                </p>
              </div>
            </div>
          </div>
          {/* MÁS LUGARES IMPRESCINDIBLES */}
          <div id="lugares-imprescindibles" className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎯 Más Lugares Imprescindibles en Atenas</h2>
            <p className="text-gray-700 mb-6">Si tienes más días o quieres profundizar en la ciudad, estos lugares también merecen tu visita:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-bold text-purple-800 mb-3">🏛️ Museo Arqueológico Nacional</h3>
                <div className="mb-3 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/15339395/pexels-photo-15339395.jpeg"
                    alt="Interior del Museo Arqueológico Nacional de Atenas"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <p className="text-sm text-gray-700 mb-3">El museo arqueológico más importante de Grecia con la colección más rica del mundo de arte griego antiguo. Máscaras de oro micénicas, estatuas clásicas, bronces, joyas y cerámicas de 7.000 años de historia.</p>
                <div className="text-xs text-gray-600 mb-3">
                  <p><strong>Precio:</strong> 12€ (6€ nov-mar) | <strong>Duración:</strong> 2-3 horas</p>
                  <p><strong>Highlights:</strong> Máscara de Agamenón, Mecanismo de Anticitera, Jinete de Artemisión</p>
                </div>
                <a
                  href="https://www.namuseum.gr/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hotel"
                >
                  <span>Más información y entradas</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-bold text-purple-800 mb-3">🏺 Kerameikos - Antigua Necrópolis</h3>
                <p className="text-sm text-gray-700 mb-3">El cementerio más grande de la antigua Atenas y barrio de los alfareros (de aquí viene la palabra "cerámica"). Tumbas monumentales, estelas funerarias y un pequeño museo con hallazgos originales. Muy tranquilo, poco turístico.</p>
                <div className="text-xs text-gray-600 mb-3">
                  <p><strong>Precio:</strong> 8€ (incluido en pase combinado)</p>
                  <p><strong>Duración:</strong> 1 hora | <strong>Barrio:</strong> Gazi (zona alternativa)</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-bold text-purple-800 mb-3">🏔️ Colina Filopappou</h3>
                <p className="text-sm text-gray-700 mb-3">Colina boscosa frente a la Acrópolis con senderos, pinos y vistas panorámicas. En la cima está el Monumento Filopappou (monumento funerario del 114-116 d.C.). Perfecta para senderismo urbano y fotos de la Acrópolis desde otro ángulo.</p>
                <div className="text-xs text-gray-600">
                  <p><strong>Precio:</strong> Gratis | <strong>Duración:</strong> 1-2 horas caminata</p>
                  <p><strong>Mejor momento:</strong> Atardecer alternativo al Areópago (menos gente)</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-bold text-purple-800 mb-3">🎨 Barrio de Psyrri - Arte Urbano</h3>
                <p className="text-sm text-gray-700 mb-3">El barrio alternativo y bohemio de Atenas. Calles llenas de murales de arte urbano, galerías underground, bares de moda y tabernas auténticas. De día es tranquilo, de noche se transforma en epicentro de vida nocturna ateniense.</p>
                <div className="text-xs text-gray-600">
                  <p><strong>Precio:</strong> Gratis | <strong>Mejor día:</strong> Fin de semana</p>
                  <p><strong>Ambiente:</strong> Hipster, alternativo, artístico</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-bold text-purple-800 mb-3">🌊 Cabo Sunion - Templo de Poseidón</h3>
                <div className="mb-3 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/16222898/pexels-photo-16222898.jpeg"
                    alt="Templo de Poseidón en Cabo Sunion al atardecer"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <p className="text-sm text-gray-700 mb-3">Templo de Poseidón (444 a.C.) en un acantilado a 70 km de Atenas. Las columnas de mármol blanco sobre el mar Egeo al atardecer son una postal inolvidable. Excursión de medio día perfecta si tienes tiempo extra.</p>
                <div className="text-xs text-gray-600 mb-3">
                  <p><strong>Tour:</strong> Desde 45€ (medio día) | <strong>Duración:</strong> 4-5 horas</p>
                  <p><strong>Incluye:</strong> Transporte + guía + tiempo en la playa</p>
                </div>
                <a
                  href="https://gyg.me/mNa0HJDh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hotel"
                >
                  <span>Reservar tour al atardecer</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-bold text-purple-800 mb-3">🌳 Jardín Nacional de Atenas</h3>
                <p className="text-sm text-gray-700 mb-3">El pulmón verde del centro de Atenas (15.5 hectáreas) justo detrás del Parlamento. Jardín botánico con estanques, pavos reales, ruinas antiguas escondidas, cafetería y zona infantil. Perfecto para descansar del turismo intenso.</p>
                <div className="text-xs text-gray-600">
                  <p><strong>Precio:</strong> Gratis | <strong>Horario:</strong> Amanecer-anochecer</p>
                  <p><strong>Ideal para:</strong> Picnic, descanso, familias con niños</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-bold text-purple-800 mb-3">🏛️ Biblioteca de Adriano (ampliada)</h3>
                <p className="text-sm text-gray-700 mb-3">Si te quedaste con ganas de más, puedes profundizar en la visita. Por la noche hay eventos culturales ocasionales con iluminación especial. También conecta con el barrio de Monastiraki para seguir explorando.</p>
                <div className="text-xs text-gray-600">
                  <p><strong>Tip:</strong> Combínala con visita al Ágora Romana (están pegados)</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-bold text-purple-800 mb-3">🍷 Tour de Vinos Griegos</h3>
                <p className="text-sm text-gray-700 mb-3">Grecia tiene 3.000 años de tradición vinícola. Tours de cata de vinos locales (Retsina, Assyrtiko, Agiorgitiko) en bodegas cercanas a Atenas o en wine bars del centro. Aprende sobre vinos que no se exportan.</p>
                <div className="text-xs text-gray-600 mb-3">
                  <p><strong>Tour:</strong> Desde 75€ | <strong>Duración:</strong> 3-4 horas</p>
                  <p><strong>Incluye:</strong> 4-6 vinos + quesos y embutidos griegos</p>
                </div>
                <a
                  href="https://gyg.me/T8PPmWLX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hotel"
                >
                  <span>Reservar tour de vinos</span>
                  <svg className="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* HERRAMIENTAS ESENCIALES PARA VIAJAR */}
          <div id="recomendaciones" className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              💳 Herramientas Esenciales para Atenas
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
                  Viaja sin preocuparte por las comisiones bancarias. Paga en euros sin cargos adicionales, retira efectivo sin comisiones.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Ventajas para Grecia:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Sin comisiones por pago en euros</li>
                    <li>• Retiros gratuitos en cajeros</li>
                    <li>• Control total desde la app</li>
                    <li>• Cambio de divisa al mejor tipo</li>
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
                    <li>• Repatriación incluida</li>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">🍽️ Guía Gastronómica de Atenas</h2>
            <p className="text-gray-600 mb-6">La gastronomía griega es patrimonio cultural con 4.000 años de historia. Aquí descubrirás los verdaderos sabores mediterráneos:</p>

            <div className="space-y-6">
              {/* COMIDA GRIEGA TRADICIONAL */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-orange-800 mb-4">🇬🇷 Platos Griegos Imprescindibles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">🍆 Moussaka</h4>
                    <p className="text-sm text-gray-700 mb-2">El plato nacional griego. Capas de berenjena, carne picada de cordero, patata y bechamel gratinada al horno. Es como una lasaña griega pero mucho mejor.</p>
                    <p className="text-xs text-orange-700 mb-1">
                      <strong>Dónde:</strong> <a href="https://www.google.com/maps/place/Arcadia+Restaurant/@37.9721749,23.7256449,17z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd3ed8f55555:0x5e5e5e5e5e5e5e5e!8m2!3d37.9721749!4d23.7282198!16s%2Fg%2F1tg_qw8q" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">Arcadia Restaurant</a>
                    </p>
                    <p className="text-xs text-orange-700"><strong>Precio:</strong> 12-16 €</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">🥙 Souvlaki & Gyros</h4>
                    <p className="text-sm text-gray-700 mb-2">Souvlaki: brochetas de carne (cerdo/pollo) marinadas. Gyros: carne asada vertical en pan pita con tzatziki, tomate, cebolla y patatas. La comida callejera más famosa de Grecia.</p>
                    <p className="text-xs text-orange-700 mb-1">
                      <strong>Dónde:</strong> <a href="https://www.google.com/maps/place/Thanasis/@37.9759841,23.7247891,17z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd31c0000001:0x5c5c5c5c5c5c5c5c!8m2!3d37.9759841!4d23.727364!16s%2Fg%2F1td1_cw7" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">Thanasis</a>, <a href="https://www.google.com/maps/place/Savvas+Grill+House/@37.9758716,23.7256603,17z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd3176c00001:0x4d4d4d4d4d4d4d4d!8m2!3d37.9758716!4d23.7282352!16s%2Fg%2F1tk_hw9p" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">Savvas</a>
                    </p>
                    <p className="text-xs text-orange-700"><strong>Precio:</strong> 6-10 € (wrap o plato)</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">🥗 Ensalada Griega (Horiatiki)</h4>
                    <p className="text-sm text-gray-700 mb-2">NO lleva lechuga. Solo tomate, pepino, pimiento verde, cebolla morada, aceitunas kalamata, queso feta en bloque grande y aceite de oliva virgen extra. Fresca y simple.</p>
                    <p className="text-xs text-orange-700"><strong>Precio:</strong> 7-10 €</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">🍢 Loukoumades</h4>
                    <p className="text-sm text-gray-700 mb-2">Buñuelos dorados fritos bañados en miel griega de tomillo y espolvoreados con canela y nueces. El postre más adictivo de Grecia. Se comen calientes.</p>
                    <p className="text-xs text-orange-700 mb-1">
                      <strong>Dónde:</strong> <a href="https://www.google.com/maps/place/Lukumades/@37.9755249,23.7261088,17z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd317f800001:0x3e3e3e3e3e3e3e3e!8m2!3d37.9755249!4d23.7286837!16s%2Fg%2F11bw3y_7jr" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-900">Lukumades (Plaka)</a>
                    </p>
                    <p className="text-xs text-orange-700"><strong>Precio:</strong> 5-8 € (ración)</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">🧀 Saganaki</h4>
                    <p className="text-sm text-gray-700 mb-2">Queso kefalotiri o graviera frito en sartén hasta que se dora. Se sirve caliente con un chorrito de limón. Crujiente por fuera, fundido por dentro. Aperitivo perfecto.</p>
                    <p className="text-xs text-orange-700"><strong>Precio:</strong> 7-9 €</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">🍆 Melitzanosalata</h4>
                    <p className="text-sm text-gray-700 mb-2">Dip de berenjena asada con ajo, aceite de oliva, limón y perejil. Más suave que el baba ganoush. Se come con pan pita caliente. Perfecto para compartir.</p>
                    <p className="text-xs text-orange-700"><strong>Precio:</strong> 5-7 €</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">🥒 Tzatziki</h4>
                    <p className="text-sm text-gray-700 mb-2">Yogur griego espeso con pepino rallado, ajo, aceite de oliva y eneldo. La salsa por excelencia griega. Acompaña TODOS los platos. Cremoso y refrescante.</p>
                    <p className="text-xs text-orange-700"><strong>Precio:</strong> 4-6 € | <strong>Tip:</strong> Pídelo siempre de acompañamiento</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">🐙 Pulpo a la Parrilla (Xtapodi)</h4>
                    <p className="text-sm text-gray-700 mb-2">Pulpo tierno a la parrilla con aceite de oliva, orégano y limón. Especialidad en tavernas de pescado. Textura perfecta cuando está bien hecho.</p>
                    <p className="text-xs text-orange-700"><strong>Precio:</strong> 14-18 €</p>
                  </div>
                </div>
              </div>

              {/* MEZE (TAPAS GRIEGAS) */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-red-800 mb-4">🍷 Meze - Tapas Griegas para Compartir</h3>
                <p className="text-sm text-gray-700 mb-4">La forma tradicional de comer en Grecia: varios platos pequeños para compartir con vino o ouzo. Así comen los locales.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-red-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-1">🍃 Dolmades</h4>
                    <p className="text-xs text-gray-700 mb-1">Hojas de parra rellenas de arroz, hierbas y a veces carne picada. Se comen frías con limón.</p>
                    <p className="text-xs text-red-700"><strong>6-8 €</strong></p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-1">🧆 Keftedes</h4>
                    <p className="text-xs text-gray-700 mb-1">Albóndigas griegas especiadas con hierbas mediterráneas. Jugosas y aromáticas.</p>
                    <p className="text-xs text-red-700"><strong>7-9 €</strong></p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-1">🥖 Dakos</h4>
                    <p className="text-xs text-gray-700 mb-1">Pan seco cretense con tomate rallado, feta, aceitunas y orégano. Crujiente y fresco.</p>
                    <p className="text-xs text-red-700"><strong>6-8 €</strong></p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-1">🧀 Feta Psiti</h4>
                    <p className="text-xs text-gray-700 mb-1">Feta horneado envuelto en papel aluminio con tomate, pimiento y aceite de oliva.</p>
                    <p className="text-xs text-red-700"><strong>7-9 €</strong></p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-1">🫒 Aceitunas Kalamata</h4>
                    <p className="text-xs text-gray-700 mb-1">Las mejores aceitunas del mundo. Grandes, carnosas, de color púrpura oscuro.</p>
                    <p className="text-xs text-red-700"><strong>4-6 €</strong></p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-1">🍤 Garides Saganaki</h4>
                    <p className="text-xs text-gray-700 mb-1">Gambas en salsa de tomate con feta fundido. Especiado y delicioso.</p>
                    <p className="text-xs text-red-700"><strong>12-15 €</strong></p>
                  </div>
                </div>
              </div>

              {/* BEBIDAS GRIEGAS */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-pink-800 mb-4">🍷 Bebidas Griegas Auténticas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">🍷 Vinos Griegos</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Retsina:</strong> Vino blanco con resina de pino. Sabor único (amor u odio). 3-5€ copa</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Assyrtiko:</strong> Blanco seco de Santorini. Cítrico y mineral. 5-7€ copa</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Agiorgitiko:</strong> Tinto suave del Peloponeso. Afrutado. 4-6€ copa</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">🥃 Licores y Destilados</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Ouzo:</strong> Anís griego. Se bebe con agua (se vuelve blanco). Acompaña meze. 4-6€</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Tsipouro:</strong> Aguardiente de orujo. Más fuerte que ouzo. 3-5€ chupito</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span><strong>Metaxa:</strong> Brandy griego suave con toques de rosa. 5-7€ copa</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">☕ Café Griego</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      El café griego tradicional (Ellinikos) se prepara en un briki (cafetera pequeña de cobre). Es espeso, fuerte, y se bebe despacio dejando los posos en el fondo. Se sirve con un vaso de agua.
                    </p>
                    <p className="text-xs text-pink-700"><strong>2-3 €</strong> | Pide: <em>sketo</em> (sin azúcar), <em>metrio</em> (medio dulce), <em>gliko</em> (dulce)</p>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">🍺 Cervezas Griegas</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Mythos: La más popular (3-4€)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Alpha: Rubia ligera (3-4€)</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Fix: La más antigua de Grecia (4-5€)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* DÓNDE COMER EN ATENAS */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-800 mb-4">📍 Restaurantes Recomendados en Atenas</h3>
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <span className="text-xl mr-2">⭐</span>
                      <a href="https://www.google.com/maps/place/Arcadia+Restaurant/@37.9721749,23.7256449,17z" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-900">Arcadia Restaurant</a>
                    </h4>
                    <p className="text-sm text-gray-700 mb-1">Taverna familiar auténtica en Plaka. La mejor moussaka de Atenas según locales. Ambiente tradicional, servicio amable.</p>
                    <p className="text-xs text-purple-700"><strong>Presupuesto:</strong> 12-20€ | <strong>Barrio:</strong> Plaka | <strong>Especialidad:</strong> Moussaka, cordero</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <span className="text-xl mr-2">⭐</span>
                      <a href="https://www.google.com/maps/place/Thanasis/@37.9759841,23.7247891,17z" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-900">Thanasis</a>
                    </h4>
                    <p className="text-sm text-gray-700 mb-1">Icono de Monastiraki desde 1950. Los mejores kebabs y souvlaki de Atenas. Siempre lleno de locales (buena señal). Fast food griego de calidad.</p>
                    <p className="text-xs text-purple-700"><strong>Presupuesto:</strong> 8-12€ | <strong>Barrio:</strong> Monastiraki | <strong>Especialidad:</strong> Kebab, souvlaki</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <span className="text-xl mr-2">⭐</span>
                      <a href="https://www.google.com/maps/place/To+Kafeneio/@37.9721932,23.7284881,17z" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-900">To Kafeneio</a>
                    </h4>
                    <p className="text-sm text-gray-700 mb-1">Taverna escondida en Plaka con cocina casera tradicional. Pequeño, acogedor, sin turistas. Como comer en casa de tu yaya griega.</p>
                    <p className="text-xs text-purple-700"><strong>Presupuesto:</strong> 15-25€ | <strong>Barrio:</strong> Plaka | <strong>Especialidad:</strong> Platos del día, stifado</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <span className="text-xl mr-2">⭐</span>
                      Avocado (Vegetariano/Vegano)
                    </h4>
                    <p className="text-sm text-gray-700 mb-1">Opciones vegetarianas y veganas saludables con ingredientes orgánicos. Bowls, ensaladas, smoothies. Versiones veganas de platos griegos.</p>
                    <p className="text-xs text-purple-700"><strong>Presupuesto:</strong> 10-16€ | <strong>Barrio:</strong> Plaka | <strong>Especialidad:</strong> Bowls veganos, moussaka vegana</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <span className="text-xl mr-2">🌅</span>
                      <a href="https://www.google.com/maps/place/MS+Roof+Garden/@37.9759841,23.7247891,17z" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-900">MS Roof Garden</a>
                    </h4>
                    <p className="text-sm text-gray-700 mb-1">Terraza panorámica con vistas frontales a la Acrópolis iluminada. Ideal para cena romántica o atardecer con cócteles. Cocina mediterránea moderna.</p>
                    <p className="text-xs text-purple-700"><strong>Presupuesto:</strong> 25-40€ | <strong>Barrio:</strong> Monastiraki | <strong>Especialidad:</strong> Vistas + cócteles</p>
                  </div>
                </div>
              </div>

              {/* CONSEJOS GASTRONÓMICOS */}
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-orange-300 rounded-xl p-4">
                <h4 className="font-bold text-gray-900 mb-3">💡 Consejos para Comer Como un Local:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-800">
                  <div>
                    <p className="font-semibold mb-1">✅ Haz como los griegos:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Come tarde: almuerzo 14:00-16:00, cena 21:00-23:00</li>
                      <li>• Pide varios platos para compartir (meze)</li>
                      <li>• El pan se cobra aparte (kouvert: 1-2€/persona)</li>
                      <li>• Agua con gas se llama "Souroti" o "Loux"</li>
                      <li>• Di "Kaliorexi!" (buen provecho) antes de comer</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">✅ Ahorra dinero:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Menú del día: 8-12€ (12:00-16:00)</li>
                      <li>• Evita restaurantes con fotos en la puerta (trampa turistas)</li>
                      <li>• Gyros en la calle: 3-5€ (comida rápida auténtica)</li>
                      <li>• Supermercados: pan, queso feta, aceitunas (picnic barato)</li>
                      <li>• Propina: 5-10% (no obligatoria pero apreciada)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SISTEMA DE TRANSPORTE */}
          <div id="transporte" className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">🚇 Sistema de Transporte en Atenas</h2>
            <p className="text-gray-600 mb-6">Moverse por Atenas es fácil y económico con su red de metro, autobuses y tranvías:</p>

            <div className="space-y-6">
              {/* METRO DE ATENAS */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-800 mb-4">🚇 Metro de Atenas - La Forma Más Rápida</h3>
                <div className="mb-4">
                  <img
                    src="https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg"
                    alt="Estación de metro moderna en Atenas"
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <p className="text-gray-700 mb-4">
                  El metro de Atenas tiene 3 líneas principales que cubren toda la ciudad y conectan con el aeropuerto. Es moderno, limpio, eficiente y muy seguro. Muchas estaciones son como museos arqueológicos (se construyeron alrededor de ruinas encontradas).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2">🟢 Línea 1 (Verde)</h4>
                    <p className="text-sm text-gray-700 mb-2">La más antigua (1869). Va del Pireo a Kifisia pasando por el centro.</p>
                    <p className="text-xs text-gray-600"><strong>Paradas clave:</strong> Monastiraki, Omonia, Victoria</p>
                  </div>
                  <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2">🔴 Línea 2 (Roja)</h4>
                    <p className="text-sm text-gray-700 mb-2">Une Agios Antonios con Elliniko. Atraviesa el centro de norte a sur.</p>
                    <p className="text-xs text-gray-600"><strong>Paradas clave:</strong> Syntagma, Akropoli, Omonia</p>
                  </div>
                  <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">🔵 Línea 3 (Azul)</h4>
                    <p className="text-sm text-gray-700 mb-2">Conecta el aeropuerto con el centro. La más moderna y rápida.</p>
                    <p className="text-xs text-gray-600"><strong>Paradas clave:</strong> Aeropuerto, Syntagma, Monastiraki</p>
                  </div>
                </div>

                <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">🎫 Billetes y Tarifas del Metro:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-blue-800">
                    <div>
                      <ul className="space-y-1">
                        <li>• <strong>Billete sencillo:</strong> 1.20€ (90 min, transbordos incluidos)</li>
                        <li>• <strong>Billete diario:</strong> 4.10€ (24 horas)</li>
                        <li>• <strong>Billete 5 días:</strong> 8.20€ (120 horas)</li>
                        <li>• <strong>Aeropuerto → Centro:</strong> 10€ (billete especial)</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-1">
                        <li>• <strong>Dónde comprar:</strong> Máquinas automáticas en estaciones</li>
                        <li>• <strong>Horario:</strong> 5:30 - 00:30 (Vie-Sáb hasta 2:00)</li>
                        <li>• <strong>Frecuencia:</strong> Cada 5-10 min (punta), 10-15 min (resto)</li>
                        <li>• <strong>Validación:</strong> ¡IMPORTANTE! Validar en torniquetes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3">
                  <p className="text-sm text-yellow-900">
                    <strong>💡 Consejo:</strong> Compra el billete de 5 días (8.20€) si vas a estar 3+ días. Sale rentable desde el segundo día y no tienes que preocuparte por comprar billetes. El billete del aeropuerto NO sirve para el transporte urbano normal.
                  </p>
                </div>
              </div>

              {/* AUTOBUSES Y TRANVÍAS */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">🚌 Autobuses y Tranvías</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🚌 Autobuses Urbanos</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Red extensa de autobuses que complementa el metro. Útiles para llegar a zonas no cubiertas por metro. Funcionan 24 horas (líneas nocturnas con prefijo "N").
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• <strong>Billete sencillo:</strong> 1.20€ (comprar en kioscos o máquinas)</li>
                      <li>• <strong>Validación:</strong> Al subir en máquina naranja</li>
                      <li>• <strong>Frecuencia:</strong> 10-30 min según línea</li>
                      <li>• <strong>Líneas útiles:</strong> 040 (Pireo), 227 (Licabeto)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">🚊 Tranvía (Tram)</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Conecta el centro con las playas del sur (Glyfada, Voula). Perfecta para llegar a la costa en verano. Vistas al mar durante el trayecto.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• <strong>Líneas:</strong> T3 (Syntagma - Voula), T4, T5</li>
                      <li>• <strong>Billete:</strong> 1.20€ (mismo que metro/bus)</li>
                      <li>• <strong>Duración:</strong> 45-60 min Syntagma - playa</li>
                      <li>• <strong>Horario:</strong> 5:00 - 1:00</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* TAXIS Y OTRAS OPCIONES */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-purple-800 mb-4">🚕 Taxis y Otras Opciones de Transporte</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">🚕 Taxis</h4>
                    <p className="text-sm text-gray-700 mb-2">Abundantes, económicos y amarillos. Taxímetro obligatorio. Buenos para trayectos cortos o cuando llevas equipaje.</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• <strong>Bajada bandera:</strong> 1.30€ (día), 1.90€ (noche)</li>
                      <li>• <strong>Tarifa/km:</strong> 0.74€ (día), 1.30€ (noche)</li>
                      <li>• <strong>Apps:</strong> Beat (mejor app en Atenas)</li>
                      <li>• <strong>Propina:</strong> Redondear al euro superior</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">🚲 Bicicletas</h4>
                    <p className="text-sm text-gray-700 mb-2">NO recomendado en el centro (tráfico caótico, pocas ciclovías). Sí útil en zonas costeras o parques.</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• <strong>Alquiler:</strong> 10-15€/día</li>
                      <li>• <strong>Zonas OK:</strong> Costa, Jardín Nacional</li>
                      <li>• <strong>Evita:</strong> Centro histórico (adoquines + cuestas)</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">🚶 A Pie</h4>
                    <p className="text-sm text-gray-700 mb-2">El centro histórico (Plaka, Monastiraki, Syntagma) es 100% caminable. La mejor forma de descubrir Atenas.</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• <strong>Acrópolis - Syntagma:</strong> 15 min andando</li>
                      <li>• <strong>Syntagma - Monastiraki:</strong> 10 min</li>
                      <li>• <strong>Plaka - Ágora:</strong> 5 min</li>
                      <li>• <strong>Calzado:</strong> Imprescindible cómodo</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CONSEJO TRANSPORTE */}
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 rounded-xl p-4">
                <h4 className="font-bold text-gray-900 mb-2">✅ Mi Recomendación de Transporte:</h4>
                <p className="text-sm text-gray-800 mb-3">
                  Compra el <strong>billete de 5 días (8.20€)</strong> nada más llegar al aeropuerto. Úsalo para todo: metro, autobuses, tranvía. El centro histórico recórrelo SIEMPRE a pie (distancias cortas, es lo más bonito). Usa metro para Licabeto, Estadio Panatenaico o barrios alejados. Taxis solo de noche o con equipaje.
                </p>
                <p className="text-xs text-green-800 font-semibold">
                  💡 Ahorro estimado con billete 5 días vs billetes sueltos: ~15-20€ en un viaje de 3-4 días.
                </p>
              </div>
            </div>
          </div>

          {/* CONSEJOS FINALES */}
          <div id="consejos" className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border border-amber-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">💡 Consejos Finales para Viajar a Atenas</h2>
            <p className="text-gray-600 mb-6">Todo lo que necesitas saber antes de viajar para evitar sorpresas:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CLIMA Y MEJOR ÉPOCA */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🌤️</span>
                  Clima y Mejor Época para Visitar
                </h3>
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-400 p-3">
                    <p className="text-sm font-semibold text-green-900 mb-1">✅ MEJOR ÉPOCA: Abril-Mayo y Septiembre-Octubre</p>
                    <p className="text-xs text-green-800">20-28°C, menos turistas, precios moderados, todo abierto. Perfecto para caminar y visitar ruinas.</p>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-400 p-3">
                    <p className="text-sm font-semibold text-red-900 mb-1">⚠️ EVITA: Julio-Agosto</p>
                    <p className="text-xs text-red-800">35-40°C, masificación turística, precios altísimos. La Acrópolis puede ser un horno (sin sombra). Si vas en verano, visita monumentos a primera hora (8:00).</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                    <p className="text-sm font-semibold text-blue-900 mb-1">❄️ INVIERNO: Noviembre-Marzo</p>
                    <p className="text-xs text-blue-800">10-15°C, lluvia ocasional, menos turistas, precios bajos. Buen momento si buscas tranquilidad. Lleva paraguas y chaqueta.</p>
                  </div>
                </div>
              </div>

              {/* IDIOMA */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🗣️</span>
                  Idioma
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  El <strong>griego</strong> es el idioma oficial, pero en zonas turísticas hablan inglés perfectamente. Los griegos aprecian mucho que intentes hablar griego básico.
                </p>
                <div className="bg-orange-50 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">🇬🇷 Frases Útiles:</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• <strong>Hola:</strong> Yassas (formal) / Yassou (informal)</li>
                    <li>• <strong>Gracias:</strong> Efharistó</li>
                    <li>• <strong>Por favor:</strong> Parakaló</li>
                    <li>• <strong>Adiós:</strong> Antío</li>
                    <li>• <strong>Sí / No:</strong> Ne / Óhi</li>
                    <li>• <strong>¿Cuánto cuesta?:</strong> Póso káni?</li>
                    <li>• <strong>La cuenta:</strong> To logariasmo, parakaló</li>
                    <li>• <strong>Salud (brindis):</strong> Yamas!</li>
                  </ul>
                </div>
              </div>

              {/* PROPINAS */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">💶</span>
                  Propinas
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Las propinas <strong>NO son obligatorias</strong> en Grecia, pero se aprecian si el servicio fue bueno.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Restaurantes:</strong> 5-10% redondeando al alza</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Taxis:</strong> Redondear al euro superior (ej: 7.40€ → 8€)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Hoteles:</strong> 1-2€ al botones o limpieza (opcional)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Guías turísticos:</strong> 2-5€ por persona al final del tour</span>
                  </li>
                </ul>
              </div>

              {/* SEGURIDAD */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🔒</span>
                  Seguridad
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Atenas es una ciudad <strong>muy segura</strong> para turistas. La criminalidad violenta es rara. Los principales riesgos son carteristas en zonas turísticas.
                </p>
                <div className="bg-green-50 rounded-lg p-3 mb-2">
                  <h4 className="text-sm font-semibold text-green-900 mb-1">✅ Zonas Seguras (día y noche):</h4>
                  <p className="text-xs text-green-800">Plaka, Monastiraki, Syntagma, Kolonaki, Psyrri. Puedes caminar tranquilo.</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3 mb-2">
                  <h4 className="text-sm font-semibold text-yellow-900 mb-1">⚠️ Cuidado con Carteristas:</h4>
                  <p className="text-xs text-yellow-800">Metro línea 1 (la más antigua), Monastiraki, alrededores de Omonia. Vigila tu bolso/mochila.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-red-900 mb-1">❌ Evita de Noche:</h4>
                  <p className="text-xs text-red-800">Omonia, Exarchia, Metaxourgeio (barrios con droga/prostitución). No son peligrosos pero poco agradables.</p>
                </div>
              </div>

              {/* ELECTRICIDAD */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🔌</span>
                  Electricidad
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Voltaje:</strong> 230V, 50Hz (mismo que España)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Enchufes:</strong> Tipo C y F (europeo de dos clavijas redondas)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Adaptador:</strong> NO necesario si vienes de Europa</span>
                  </li>
                </ul>
              </div>

              {/* AGUA Y SALUD */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">💧</span>
                  Agua y Salud
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Agua del grifo:</strong> Potable y segura. Sabe un poco a cloro pero no hay problema en beberla.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Agua embotellada:</strong> 0.50-1€ en supermercados, 2-3€ en kioscos turísticos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Farmacias:</strong> Abundantes, reconocibles por cruz verde. Abre una de guardia 24h cada barrio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Protección solar:</strong> IMPRESCINDIBLE en verano (factor 50+)</span>
                  </li>
                </ul>
              </div>

              {/* WIFI E INTERNET */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">📱</span>
                  WiFi e Internet
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>WiFi gratis:</strong> Todos los hoteles, la mayoría de cafés y restaurantes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>WiFi público:</strong> Syntagma, aeropuerto, algunas estaciones de metro</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Roaming UE:</strong> Gratis si tienes tarifa europea (sin cargos extra)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>SIM local:</strong> Cosmote, Vodafone (10-20€ prepago con datos)</span>
                  </li>
                </ul>
              </div>

              {/* BAÑOS PÚBLICOS */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🚽</span>
                  Baños Públicos
                </h3>
                <div className="bg-red-100 border-l-4 border-red-500 p-3 mb-3">
                  <p className="text-sm font-semibold text-red-900 mb-1">⚠️ MUY IMPORTANTE - El Papel NO Va al Water</p>
                  <p className="text-xs text-red-800">
                    En Grecia el papel higiénico se tira a la papelera (hay una al lado de cada inodoro). Las tuberías son antiguas y se atascan fácilmente. Es la norma en TODO el país, incluso hoteles de lujo. Respétalo.
                  </p>
                </div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Baños públicos:</strong> Escasos. Usa los de cafeterías, museos o McDonald's</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>En monumentos:</strong> Acrópolis, museos, Ágora tienen baños</span>
                  </li>
                </ul>
              </div>

              {/* COMPRAS Y HORARIOS */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🛍️</span>
                  Horarios Comerciales
                </h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Tiendas:</strong> Lun-Sáb 9:00-21:00 (cierran 14:00-17:00 en barrios no turísticos)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Supermercados:</strong> 8:00-21:00 todos los días (algunos 24h)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Restaurantes:</strong> Almuerzo 12:00-16:00, Cena 19:00-00:00</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span><strong>Monumentos:</strong> 8:00-20:00 (verano), horario reducido invierno</span>
                  </li>
                </ul>
              </div>

              {/* DÍAS FESTIVOS */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">📅</span>
                  Festivos (Todo Cierra)
                </h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• 1 enero (Año Nuevo)</li>
                  <li>• 6 enero (Epifanía)</li>
                  <li>• 25 marzo (Independencia)</li>
                  <li>• Semana Santa ortodoxa (fechas variables, suele ser 1 semana después que católica)</li>
                  <li>• 1 mayo (Día del Trabajo)</li>
                  <li>• 15 agosto (Asunción)</li>
                  <li>• 28 octubre (Día del No - fiesta nacional)</li>
                  <li>• 25-26 diciembre (Navidad)</li>
                </ul>
              </div>

              {/* SOUVENIRS */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🎁</span>
                  Souvenirs Auténticos
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">✅ Comprar:</p>
                    <ul className="space-y-0.5">
                      <li>• Aceite de oliva virgen extra</li>
                      <li>• Miel de tomillo griega</li>
                      <li>• Komboloi (rosario griego)</li>
                      <li>• Ojo griego (Mati)</li>
                      <li>• Sandalias de cuero</li>
                      <li>• Esponjas naturales</li>
                      <li>• Ouzo (licor de anís)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">❌ Evitar:</p>
                    <ul className="space-y-0.5">
                      <li>• Estatuas de "mármol" (son yeso)</li>
                      <li>• Jarrones "antiguos" (made in China)</li>
                      <li>• Toga y laureles (turistada)</li>
                      <li>• Imanes baratos (baja calidad)</li>
                      <li>• Comprar en Plaka central (caro)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRESUPUESTOS */}
          <div id="presupuestos" className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border border-green-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">💰 Presupuestos para Atenas (3 Días / 2 Noches)</h2>
            <p className="text-gray-600 mb-6">Tres tipos de viaje según tu presupuesto. Todos incluyen vuelos desde España:</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* PRESUPUESTO MOCHILERO */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-300">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl p-4 mb-4 text-center">
                  <h3 className="text-2xl font-bold mb-1">🎒 Mochilero</h3>
                  <p className="text-3xl font-black">350-450€</p>
                  <p className="text-sm opacity-90">por persona</p>
                </div>

                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">✈️ Vuelos</h4>
                    <p className="text-xs text-gray-700 mb-1">Compañías low-cost (Ryanair, Vueling, Wizz Air)</p>
                    <p className="text-sm font-bold text-green-700">80-120€ i/v</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🏠 Alojamiento</h4>
                    <p className="text-xs text-gray-700 mb-1">Hostel en habitación compartida (6-8 camas) o Airbnb compartido</p>
                    <p className="text-sm font-bold text-green-700">15-25€/noche × 2 = 30-50€</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🍽️ Comida</h4>
                    <p className="text-xs text-gray-700 mb-1">Gyros, souvlaki, supermercado, baklavas de panadería</p>
                    <p className="text-sm font-bold text-green-700">20-25€/día × 3 = 60-75€</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🚇 Transporte</h4>
                    <p className="text-xs text-gray-700 mb-1">Billete 5 días + bus aeropuerto</p>
                    <p className="text-sm font-bold text-green-700">18-20€</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🎫 Atracciones</h4>
                    <p className="text-xs text-gray-700 mb-1">Pase combinado + Museo Acrópolis + 1 excursión económica</p>
                    <p className="text-sm font-bold text-green-700">90-100€</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🎉 Extras</h4>
                    <p className="text-xs text-gray-700 mb-1">Cervezas, souvenirs, imprevistos</p>
                    <p className="text-sm font-bold text-green-700">50-70€</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-3 text-center">
                    <p className="text-xs mb-1">TOTAL ESTIMADO</p>
                    <p className="text-2xl font-black">350-450€</p>
                  </div>
                </div>

                <div className="mt-4 bg-green-100 border-l-4 border-green-500 p-3">
                  <p className="text-xs text-green-900">
                    <strong>💡 Tips ahorro:</strong> Compra agua/snacks en supermercados Lidl. Come gyros en la calle (3-5€). Free walking tours (propina voluntaria). Muchos sitios arqueológicos gratis domingos (nov-mar).
                  </p>
                </div>
              </div>

              {/* PRESUPUESTO ESTÁNDAR */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-300">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl p-4 mb-4 text-center">
                  <h3 className="text-2xl font-bold mb-1">🏨 Estándar</h3>
                  <p className="text-3xl font-black">600-800€</p>
                  <p className="text-sm opacity-90">por persona</p>
                </div>

                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">✈️ Vuelos</h4>
                    <p className="text-xs text-gray-700 mb-1">Compañías regulares con equipaje (Aegean, Iberia)</p>
                    <p className="text-sm font-bold text-blue-700">150-200€ i/v</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🏨 Alojamiento</h4>
                    <p className="text-xs text-gray-700 mb-1">Hotel ⭐⭐⭐ en Plaka/Monastiraki (Athens Cypria, Plaka Hotel)</p>
                    <p className="text-sm font-bold text-blue-700">70-100€/noche × 2 = 140-200€</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🍽️ Comida</h4>
                    <p className="text-xs text-gray-700 mb-1">1 comida taverna + 1 comida casual al día</p>
                    <p className="text-sm font-bold text-blue-700">40-50€/día × 3 = 120-150€</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🚇 Transporte</h4>
                    <p className="text-xs text-gray-700 mb-1">Billete 5 días + transfer privado aeropuerto</p>
                    <p className="text-sm font-bold text-blue-700">60-70€</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🎫 Atracciones</h4>
                    <p className="text-xs text-gray-700 mb-1">Pase combinado + tours guiados + 1 excursión (Delfos o Meteora)</p>
                    <p className="text-sm font-bold text-blue-700">180-220€</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🎉 Extras</h4>
                    <p className="text-xs text-gray-700 mb-1">Cenas especiales, souvenirs, rooftop bar</p>
                    <p className="text-sm font-bold text-blue-700">80-120€</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg p-3 text-center">
                    <p className="text-xs mb-1">TOTAL ESTIMADO</p>
                    <p className="text-2xl font-black">600-800€</p>
                  </div>
                </div>

                <div className="mt-4 bg-blue-100 border-l-4 border-blue-500 p-3">
                  <p className="text-xs text-blue-900">
                    <strong>✨ Equilibrio perfecto:</strong> Comodidad sin arruinarte. Hoteles céntricos con desayuno. Tours guiados en español. Cenas en terrazas con vistas. El viaje ideal para la mayoría.
                  </p>
                </div>
              </div>

              {/* PRESUPUESTO LUJO */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-300">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl p-4 mb-4 text-center">
                  <h3 className="text-2xl font-bold mb-1">💎 Lujo</h3>
                  <p className="text-3xl font-black">1.200-1.800€</p>
                  <p className="text-sm opacity-90">por persona</p>
                </div>

                <div className="space-y-3">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">✈️ Vuelos</h4>
                    <p className="text-xs text-gray-700 mb-1">Business class o vuelos flexibles premium</p>
                    <p className="text-sm font-bold text-purple-700">300-500€ i/v</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🏨 Alojamiento</h4>
                    <p className="text-xs text-gray-700 mb-1">Hotel ⭐⭐⭐⭐⭐ (Grande Bretagne, King George)</p>
                    <p className="text-sm font-bold text-purple-700">200-400€/noche × 2 = 400-800€</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🍽️ Comida</h4>
                    <p className="text-xs text-gray-700 mb-1">Restaurantes gourmet, rooftop Michelin, vinos premium</p>
                    <p className="text-sm font-bold text-purple-700">80-120€/día × 3 = 240-360€</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🚗 Transporte</h4>
                    <p className="text-xs text-gray-700 mb-1">Transfers privados + chofer para excursiones</p>
                    <p className="text-sm font-bold text-purple-700">150-200€</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🎫 Atracciones</h4>
                    <p className="text-xs text-gray-700 mb-1">Tours privados VIP + excursiones premium + yate Cabo Sunion</p>
                    <p className="text-sm font-bold text-purple-700">350-450€</p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">🎉 Extras</h4>
                    <p className="text-xs text-gray-700 mb-1">Spa, shopping, cócteles premium, souvenirs de lujo</p>
                    <p className="text-sm font-bold text-purple-700">200-300€</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-3 text-center">
                    <p className="text-xs mb-1">TOTAL ESTIMADO</p>
                    <p className="text-2xl font-black">1.200-1.800€</p>
                  </div>
                </div>

                <div className="mt-4 bg-purple-100 border-l-4 border-purple-500 p-3">
                  <p className="text-xs text-purple-900">
                    <strong>👑 Experiencia premium:</strong> Hotel icónico con spa y piscina. Cenas en restaurantes Michelin. Tours privados con guía experto. Transfers de lujo. Atenas sin límites.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-400 rounded-2xl p-5">
              <h4 className="font-bold text-gray-900 mb-3 text-center text-lg">💡 Notas Importantes Sobre Presupuestos</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
                <div>
                  <p className="font-semibold mb-2">✅ Incluido en todos los presupuestos:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Vuelos ida y vuelta desde España</li>
                    <li>• 2 noches de alojamiento</li>
                    <li>• Todas las comidas (desayuno, almuerzo, cena)</li>
                    <li>• Transporte local (metro/bus/transfers)</li>
                    <li>• Entradas a monumentos principales</li>
                    <li>• 1 excursión fuera de Atenas</li>
                    <li>• Extras y caprichos razonables</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">❌ NO incluido (gastos extra):</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Seguro de viaje (30-50€ recomendado IATI)</li>
                    <li>• Actividades opcionales adicionales</li>
                    <li>• Shopping compulsivo de souvenirs</li>
                    <li>• Propinas generosas</li>
                    <li>• Llamadas internacionales (usa WiFi)</li>
                  </ul>
                  <p className="text-xs mt-3 font-semibold text-orange-800">
                    💰 Añade 10-15% de margen de seguridad a cualquier presupuesto para imprevistos.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </article>
    </>
  );
};

export default AthensGuideArticle;
