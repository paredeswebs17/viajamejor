import React, { useState } from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import StickyTableOfContents from './StickyTableOfContents';

interface PragueGuideArticleProps {
onBack: () => void;
}

const PragueGuideArticle: React.FC<PragueGuideArticleProps> = ({ onBack }) => {
  const [expandedAirport, setExpandedAirport] = useState<string | null>(null);

  const toggleAirport = (airportId: string) => {
    setExpandedAirport(expandedAirport === airportId ? null : airportId);
  };

  const sections = [
    { id: 'por-que-visitar', title: '¿Por qué visitar Praga?' },
    { id: 'llegada-aeropuerto', title: 'Llegada y Aeropuerto' },
    { id: 'donde-dormir', title: 'Dónde Alojarse' },
    { id: 'itinerario', title: 'Itinerario de 3 Días' },
    { id: 'dia-1', title: 'Día 1: Corazón Medieval y Herencia Judía', level: 2 },
    { id: 'dia-2', title: 'Día 2: Castillo Imperial y Romance Bohemio', level: 2 },
    { id: 'dia-3', title: 'Día 3: Historia Profunda y Vistas Panorámicas', level: 2 },
    { id: 'mas-lugares', title: 'Más Lugares en Praga' },
    { id: 'recomendaciones', title: 'Tarjeta y Seguro de Viaje' },
    { id: 'gastronomia', title: 'Gastronomía Checa' },
    { id: 'transporte', title: 'Sistema de Transporte' },
    { id: 'consejos', title: 'Consejos Finales' },
    { id: 'presupuestos', title: 'Presupuestos Detallados' }
  ];

return (
<>
  <StickyTableOfContents sections={sections} />
  <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
{/* Header del artículo */}
<div className="mb-8">
<button 
onClick={onBack}
className="inline-flex items-center text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-xl transition-all duration-200 font-medium border border-sky-200 hover:border-sky-300 mb-6 shadow-sm hover:shadow-md"
>
<ArrowLeft className="h-4 w-4 mr-2" />
Volver a guías
</button>

    <div className="mb-6">
      <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
        Guía Esencial
      </span>
    </div>

    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
      Praga en 3 Días: La Ciudad de los Cien Campanarios
    </h1>

    <div className="flex flex-col gap-4 mb-6 items-start">
      <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
          <Clock className="h-3 w-3 mr-1" />
          12 min
        </span>
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
          <MapPin className="h-3 w-3 mr-1" />
          Praga
        </span>
      </div>
      
      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: 'Praga en 3 Días: Guía Completa de la Ciudad Dorada',
              text: 'Descubre Praga con nuestro itinerario optimizado para 3 días perfectos',
              url: window.location.href,
            })
            .catch((error) => console.log('Error sharing', error));
          } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
              alert('Enlace copiado al portapapeles');
            }).catch(() => {
              window.open(`https://twitter.com/intent/tweet?text=Praga en 3 Días: Guía Completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
            });
          }
        }}
        className="inline-flex items-center text-gray-600 hover:text-emerald-600 bg-gray-100 hover:bg-emerald-50 px-3 py-2 rounded-full transition-all duration-200 text-xs border border-gray-200 hover:border-emerald-300 self-start shadow-sm hover:shadow-md"
      >
        <Share2 className="h-3 w-3 mr-1" />
        <span>Compartir</span>
      </button>
    </div>
  </div>

  {/* Imagen destacada */}
  <div className="mb-8">
    <img
      src="https://images.pexels.com/photos/3046347/pexels-photo-3046347.jpeg"
      alt="Vista panorámica del Puente de Carlos y el Castillo de Praga al amanecer"
      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
    />
  </div>

  {/* SECCIÓN 1: ¿POR QUÉ VISITAR PRAGA? */}
  <div id="por-que-visitar" className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">¿Por qué visitar Praga?</h2>

    <div className="space-y-4 text-gray-700">
      <p className="text-base leading-relaxed">
        Praga es la Ciudad Dorada de Europa, un destino de cuento de hadas donde cada calle empedrada cuenta mil años de historia. Con su arquitectura medieval perfectamente conservada y precios que siguen siendo accesibles, es uno de los destinos más mágicos del continente.
      </p>

      <p className="text-base leading-relaxed">
        Pero Praga es mucho más que el famoso Puente de Carlos y el Castillo en la colina. Es caminar por el Barrio Judío sintiendo el peso de la historia. Es perderte en callejones medievales que parecen sacados de un libro. Es disfrutar de la mejor cerveza del mundo por menos de 2€ en pubs centenarios y sentir que has viajado en el tiempo.
      </p>

      <p className="text-base leading-relaxed font-medium text-gray-900">
        Si buscas una ciudad que combine arquitectura gótica impresionante, historia fascinante, cerveza legendaria y precios razonables, Praga es tu destino perfecto.
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
      onClick={() => toggleAirport('vaclav-havel')}
      className="w-full bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">✈️</span>
        <span className="font-bold text-lg">Aeropuerto Václav Havel (PRG)</span>
      </div>
      {expandedAirport === 'vaclav-havel' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
    </button>

    {expandedAirport === 'vaclav-havel' && (
      <div className="mb-8 animate-fadeIn">
        <h3 className="text-lg font-bold text-gray-900 mb-4 mt-4">📍 Desde Aeropuerto Václav Havel</h3>

        <div className="mb-6">
        <h4 className="text-md font-bold text-gray-900 mb-4">🚌 Airport Express - La Conexión Más Directa</h4>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-3">Información esencial:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="text-sm text-gray-700 space-y-2 list-none">
                  <li className="flex items-start"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Precio:</strong> 100 CZK (≈ 4€) por trayecto</span></li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Horario:</strong> 5:30-22:30h, cada 30 min</span></li>
                </ul>
                <ul className="text-sm text-gray-700 space-y-2 list-none">
                  <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Duración:</strong> 40 minutos directos</span></li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Destino:</strong> Estación Central (metro línea C)</span></li>
                </ul>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-3">Ventajas:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="text-sm text-gray-700 space-y-2 list-none">
                  <li className="flex items-start"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Sin paradas intermedias</span></li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Espacio para equipaje</span></li>
                </ul>
                <ul className="text-sm text-gray-700 space-y-2 list-none">
                  <li className="flex items-start"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Pago con tarjeta al conductor</span></li>
                  <li className="flex items-start"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Sale de ambas terminales</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="https://gyg.me/7aSOnLE7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🚌 Reservar Traslado desde el Aeropuerto
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
      </div>
    )}
  </div>

  {/* SECCIÓN 3: DÓNDE ALOJARSE EN PRAGA */}
  <div id="donde-dormir" className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center">
      🏨 Dónde Alojarse en Praga
    </h2>
    <p className="text-gray-600 mb-6">Los mejores hoteles en el centro de la ciudad</p>

    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
          <span className="text-2xl">🏛️</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Centro Ciudad</h3>
          <p className="text-sm text-gray-600">La ubicación más céntrica y cómoda para explorar Praga</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className="hotel-card border-l-4 border-emerald-400 bg-emerald-100/60">
          <div className="hotel-header">
            <h3 className="hotel-name">THE MANES Boutique Hotel Prague</h3>
            <div className="hotel-stars">⭐⭐⭐⭐</div>
          </div>

          <div className="hotel-location">
            <span className="location-icon">📍</span>
            <span>Centro Ciudad</span>
          </div>

          <p className="hotel-description">
            <strong>Hotel boutique situado junto al dique del río Moldava.</strong> Ofrece interiores modernos y habitaciones amplias con TV vía satélite, minibar y caja fuerte. Wifi gratuita y bien comunicado con todos los medios de transporte.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded p-2 mb-3 mt-3">
            <p className="text-xs text-emerald-700">
              📍 <strong>Qué hay cerca:</strong> Plaza de Wenceslao (1 km), Plaza de la Ciudad Vieja (1 km), principales lugares de interés a poca distancia a pie. Aparcamiento vigilado disponible cerca.
            </p>
          </div>

          <a
            href="https://booking.tpk.lv/rx4UJa7s"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hotel"
          >
            <span>Ver disponibilidad y precios</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>

        <div className="hotel-card border-l-4 border-cyan-400 bg-cyan-100/60">
          <div className="hotel-header">
            <h3 className="hotel-name">Allure Hotel & Residence Prague</h3>
            <div className="hotel-stars">⭐⭐⭐⭐</div>
          </div>

          <div className="hotel-location">
            <span className="location-icon">📍</span>
            <span>Centro Ciudad</span>
          </div>

          <p className="hotel-description">
            <strong>Hotel de 4 estrellas bien situado en el centro de Praga.</strong> Habitaciones con aire acondicionado, terraza y bar. Ofrece recepción 24h, servicio de conserjería y traslado al aeropuerto. Algunas unidades disponen de balcón.
          </p>

          <div className="bg-cyan-50 border border-cyan-200 rounded p-2 mb-3 mt-3">
            <p className="text-xs text-cyan-700">
              📍 <strong>Qué hay cerca:</strong> Reloj Astronómico de Praga, Plaza de la Ciudad Vieja, Casa Municipal de Praga. Aeropuerto a 12 km. Desayuno buffet, a la carta o continental.
            </p>
          </div>

          <a
            href="https://booking.tpk.lv/Sykxeva1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hotel"
          >
            <span>Ver disponibilidad y precios</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>

        <div className="hotel-card border-l-4 border-blue-400 bg-blue-100/60">
          <div className="hotel-header">
            <h3 className="hotel-name">Hotel Karlova Prague</h3>
            <div className="hotel-stars">⭐⭐⭐⭐</div>
          </div>

          <div className="hotel-location">
            <span className="location-icon">📍</span>
            <span>Centro Ciudad</span>
          </div>

          <p className="hotel-description">
            <strong>Hotel de 4 estrellas a 3 min a pie del Reloj Astronómico.</strong> Situado a 200 metros del centro y a 5 min del Puente de Carlos. Habitaciones con aire acondicionado, TV, caja fuerte y cafetera. Ofrece servicio de traslado al aeropuerto.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded p-2 mb-3 mt-3">
            <p className="text-xs text-blue-700">
              📍 <strong>Qué hay cerca:</strong> Plaza de la Ciudad Vieja, Puente de Carlos (5 min), Catedral de San Vito, Castillo de Praga. Desayuno buffet o continental incluido.
            </p>
          </div>

          <a
            href="https://booking.tpk.lv/uT7oiUGu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hotel"
          >
            <span>Ver disponibilidad y precios</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* SECCIÓN 4: ITINERARIO DE PRAGA */}
  <div id="itinerario" className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Itinerario de Praga</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
        <thead>
          <tr className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">JORNADA</th>
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EXPERIENCIAS DEL DÍA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 1</td>
            <td className="border border-gray-300 px-4 py-3">Plaza de la Ciudad Vieja + Reloj Astronómico + Barrio Judío + Clementinum + Casa Danzante + Teatro Negro</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 2</td>
            <td className="border border-gray-300 px-4 py-3">Castillo de Praga + Callejón del Oro + Puente de Carlos + Muro de John Lennon + Crucero por el Moldava</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 3</td>
            <td className="border border-gray-300 px-4 py-3">Excursión a Terezín o Karlovy Vary + Torre Petřín + Exploración libre</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
    </div>
  </div>

  {/* DÍA 1 */}
  <div id="dia-1" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-emerald-500 to-green-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">1</span>
      DÍA 1: Corazón Medieval y Herencia Judía
    </h2>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3"></div>
        Amanecer en el Epicentro (9:00h)
      </h3>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Plaza de la Ciudad Vieja - El Salón de Europa</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/7245230/pexels-photo-7245230.jpeg"
            alt="Plaza de la Ciudad Vieja de Praga con el famoso Reloj Astronómico y arquitectura gótica"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Comienza tu aventura en el corazón histórico de Praga, donde cada edificio cuenta siglos de historia.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Lo que verás:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Iglesia de Týn con sus torres góticas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Iglesia de San Nicolás barroca</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Palacio Kinský rococó</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Casa de la Campana de Piedra</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">El famoso Reloj Astronómico:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Espectáculo cada hora en punto</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Los 12 Apóstoles desfilan</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Construido en 1410</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Mejor momento: 11:00h-12:00h</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-orange-100 border border-orange-300 rounded-xl p-3 mt-4">
          <p className="text-orange-800 text-sm">
            💡 Llega a las 9:00h para disfrutar de la plaza casi vacía y las mejores fotos sin multitudes.
          </p>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mr-3"></div>
        Torre del Ayuntamiento - Mirador Privilegiado (10:30h)
      </h3>
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Ascenso a las Mejores Vistas del Centro</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/17307596/pexels-photo-17307596.jpeg"
            alt="Reloj Astronómico de Praga con sus intrincados mecanismos medievales y figuras en movimiento"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Sube 70 metros para contemplar la Ciudad Dorada desde las alturas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Información práctica:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Precio: 300 CZK (≈ 12€)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Reducida: 200 CZK (≈ 8€)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Horario: 9:00-22:00h</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Ascensor disponible</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Vista panorámica 360°:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Castillo de Praga completo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Puente de Carlos serpenteante</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Tejados rojos típicos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Torres de la ciudad</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-4">
          <a href="https://gyg.me/a770HnSE" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            🗼 Reservar entradas Torre del Ayuntamiento
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
        Barrio Judío - Memoria Viva (11:30h)
      </h3>
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Josefov - El Barrio Judío Mejor Conservado de Europa</h4>
        <p className="text-gray-700 mb-4">
          Un viaje conmovedor por mil años de historia judía en el corazón de Praga.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Entrada conjunta incluye:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Precio: 500 CZK (≈ 20€)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Reducida: 370 CZK (≈ 15€)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>6 Sinagogas históricas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Antiguo Cementerio Judío</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Sinagogas imprescindibles:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Sinagoga Española: la más bella</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Sinagoga Vieja-Nueva: la más antigua</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Sinagoga Pinkas: memorial Holocausto</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Cementerio: 12.000 lápidas</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-4">
          <a href="https://gyg.me/RaU4n6Wm" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            🚶‍♂️ Tour guiado Barrio Judío completo
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
        
        <div className="bg-red-100 border border-red-300 rounded-xl p-4 mt-4">
          <p className="text-red-800 text-sm">
            ⚠️ IMPORTANTE: Sinagogas cerradas los sábados por Sabbat. Planifica tu visita entre domingo y viernes.
          </p>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
        Pausa Gastronómica - Auténtica Bohemia (13:30h)
      </h3>
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Sabores tradicionales checos:</h4>
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h5 className="font-semibold text-gray-900">U Fleků</h5>
            <p className="text-sm text-gray-700 mb-1">Cervecería histórica desde 1499 + Goulash (8-15 €)</p>
            <p className="text-xs text-emerald-600 mt-1">Cerveza casera + platos típicos + ambiente medieval</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h5 className="font-semibold text-gray-900">Lokál</h5>
            <p className="text-sm text-gray-700 mb-1">Cocina checa moderna en ambiente tradicional (10-18 €)</p>
            <p className="text-xs text-blue-600 mt-1">Famoso por sus Svíčková na smetaně</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h5 className="font-semibold text-gray-900">Café Savoy</h5>
            <p className="text-sm text-gray-700 mb-1">Elegancia vienesa desde 1893 (12-25 €)</p>
            <p className="text-xs text-purple-600 mt-1">Techos históricos + repostería imperial</p>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-3"></div>
        Biblioteca Celestial (15:30h)
      </h3>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Clementinum - La Biblioteca Más Bella del Mundo</h4>
        <div className="mb-6">
          <img
src="https://images.pexels.com/photos/5426128/pexels-photo-5426128.jpeg"
            alt="La Biblioteca Más Bella del Mundo"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Descubre la joya barroca que ha permanecido intacta desde el siglo XVIII.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">La experiencia incluye:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Biblioteca Barroca espectacular</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Sala de los Meridianos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Torre Astronómica (170 escalones)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Vistas panorámicas únicas</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Información práctica:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Solo visitas guiadas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Idiomas: inglés y checo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Duración: 50 minutos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Compra entrada in situ</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-4">
          <a href="https://gyg.me/Epi0atVq" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            📚 Reservar tour Clementinum
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-red-400 rounded-full mr-3"></div>
        Arquitectura Danzante (17:30h)
      </h3>
      <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Casa Danzante - Fred y Ginger en Piedra</h4>
        <div className="mb-6">
          <img
src="https://images.pexels.com/photos/2930357/pexels-photo-2930357.jpeg"
            alt="Casa danzante"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El edificio más controvertido y fotogénico de Praga moderna.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">La historia:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Diseñada por Vlado Milunić</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Inaugurada en 1996</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Inspirada en Fred Astaire y Ginger Rogers</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Visita opcional:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Mirador en azotea con bar</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Vista exterior suficiente</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Perfecto para fotos al atardecer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mr-3"></div>
        Magia Nocturna (20:00h)
      </h3>
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Teatro Negro - Espectáculo Únicamente Checo</h4>
        <p className="text-gray-700 mb-4">
          Termina el día con una experiencia artística que nació en Praga.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">¿Qué es el Teatro Negro?</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Teatro mudo con efectos ópticos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Objetos "flotan" en el aire</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Perfecto para todas las edades</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Información práctica:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Duración: 60-90 minutos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Precios: 15-25€ según teatro</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Reserva recomendada</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
    </div>
  </div>

  {/* DÍA 2 */}
  <div id="dia-2" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-blue-500 to-purple-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">2</span>
      DÍA 2: Castillo Imperial y Romance Bohemio
    </h2>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mr-3"></div>
        Ascensión Real (9:00h)
      </h3>
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Castillo de Praga - El Castillo Más Grande del Mundo</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/16285135/pexels-photo-16285135.jpeg"
            alt="Castillo de Praga con la Catedral de San Vito dominando el complejo real"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Comienza temprano en el complejo real que definió la historia de Bohemia.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Entrada e información:</h5>
            <ul className="text-sm text-gray-700 space-y-2 list-none">
              <li className="flex items-start"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Precio:</strong> 450 CZK (≈ 18€) circuito completo</span></li>
              <li className="flex items-start"><span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Acceso:</strong> Tranvía 22 hasta Pražský Hrad</span></li>
              <li className="flex items-start"><span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Duración:</strong> 3-4 horas completo</span></li>
              <li className="flex items-start"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Mejor momento:</strong> 9:00h apertura</span></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-900 mb-3">El circuito incluye:</h5>
            <ul className="text-sm text-gray-700 space-y-2 list-none">
              <li className="flex items-start"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Catedral de San Vito (joya gótica)</span></li>
              <li className="flex items-start"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Antiguo Palacio Real</span></li>
              <li className="flex items-start"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Basílica de San Jorge</span></li>
              <li className="flex items-start"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span>Callejón del Oro</span></li>
            </ul>
          </div>
        </div>
        
        <div className="bg-orange-100 border border-orange-300 rounded-xl p-4 mt-4">
          <p className="text-orange-800 text-sm">
            💡 Estrategia: Compra entrada online para evitar colas. Empieza por la Catedral cuando esté menos concurrida.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-4">
          <a href="https://gyg.me/Mszm1WAX" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            🏰 Entradas oficiales Castillo de Praga
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-4">
          <a href="https://gyg.me/rQRkcmJj" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            👑 Tour guiado Castillo completo
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-3"></div>
        Callejón Dorado (12:00h)
      </h3>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Callejón del Oro - Donde Vivió Kafka</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/31687789/pexels-photo-31687789.jpeg"
            alt="Callejón del Oro con sus características casitas coloridas medievales"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          La calle más famosa del castillo, hogar de orfebres y después de artistas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Historia fascinante:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Casas del siglo XVI</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Orfebres del emperador</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Franz Kafka vivió en el nº 22</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Experiencia actual:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Casas-museo reconstruidas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Talleres de artesanos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Tiendas de souvenirs únicos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
        Descenso al Romance (14:00h)
      </h3>
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Puente de Carlos - El Corazón de Praga</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/126292/pexels-photo-126292.jpeg"
            alt="Puente de Carlos con sus estatuas barrocas y vista al Castillo de Praga"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Baja del castillo hacia el puente más famoso de Europa Central.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">El puente legendario:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Construido en 1357 por Carlos IV</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>516 metros de longitud</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>30 estatuas barrocas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Solo peatonal desde 1950</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">La magia del momento:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Toca la estatua de San Juan Nepomuceno</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Artistas callejeros únicos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Vistas al castillo espectaculares</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Mejor luz: media tarde</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-100 border border-blue-300 rounded-xl p-4 mt-4">
          <p className="text-blue-800 text-sm">
            📸 Foto perfecta: Desde el lado de Malá Strana hacia el castillo, especialmente entre 15:00-16:00h.
          </p>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mr-3"></div>
        Rincones Bohemios (16:00h)
      </h3>
      <div className="bg-pink-50 border border-pink-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Muro de John Lennon - Libertad en Color</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/10133414/pexels-photo-10133414.jpeg"
            alt="Un símbolo de paz y libertad que resistió al comunismo."
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Un símbolo de paz y libertad que resistió al comunismo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">La historia:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Símbolo de resistencia pacífica</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Grafitis desde los años 80</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Renovado constantemente</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Cerca del muro:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Isla de Kampa (parque romántico)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Calle más estrecha de Praga</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Palacio Wallenstein</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-3"></div>
        Final Dorado (18:00h)
      </h3>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Crucero por el Moldava - EXPERIENCIA CULMINANTE</h4>
        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/16351151/pexels-photo-16351151.jpeg"
            alt="Crucero por el Moldava."
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Contempla Praga desde el río mientras el sol se pone sobre la Ciudad Dorada.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Detalles del crucero:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Duración: 60-90 minutos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 15-25€ según empresa</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Incluye: audioguía en español</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Bebida opcional a bordo</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Vistas únicas desde el agua:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Castillo iluminado</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Puente de Carlos dorado</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Todos los puentes históricos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Timing perfecto: atardecer</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-4">
          <a href="https://gyg.me/OIy3uAsC" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
            🛥️ Reservar Crucero por el Moldava
            <ExternalLink className="h-3 w-3 ml-2" />
          </a>
        </div>
        
        <div className="bg-orange-100 border border-orange-300 rounded-xl p-4 mt-4">
          <p className="text-orange-800 text-sm">
            🌅 Reserva para las 18:00h en verano o 17:00h en invierno para capturar el atardecer perfecto sobre Praga.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
    </div>
  </div>

  {/* DÍA 3 */}
  <div id="dia-3" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-orange-500 to-red-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">3</span>
      DÍA 3: Historia Profunda y Vistas Panorámicas
    </h2>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Elige tu Aventura del Día Completo</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
            <span className="text-xl mr-2">🕯️</span>
            Opción A: Terezín - Memoria Histórica
          </h4>
          <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/949081/pexels-photo-949081.jpeg"
            alt="Campo de concentración"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
          <p className="text-gray-700 mb-4">
            Una excursión conmovedora al campo de concentración que no debemos olvidar.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              <span className="text-sm text-gray-700"><strong>Duración:</strong> Día completo (8h)</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              <span className="text-sm text-gray-700"><strong>Incluye:</strong> Transporte + guía en español</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
              <span className="text-sm text-gray-700"><strong>Precio:</strong> 45-60€ por persona</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
              <span className="text-sm text-gray-700"><strong>Recomendado:</strong> Preparación emocional</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 italic">
            Una experiencia educativa profunda sobre la historia del Holocausto.
          </p>
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-4">
            <a href="https://gyg.me/se34ncsA" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
              🕯️ Reservar excursión a Terezín
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
            <span className="text-xl mr-2">💎</span>
            Opción B: Karlovy Vary - Ciudad Balneario
          </h4>
          <div className="mb-6">
          <img
src="https://images.pexels.com/photos/32795906/pexels-photo-32795906.jpeg"
            alt="Ciudad Balneario"
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
          <p className="text-gray-700 mb-4">
            Descubre la elegante ciudad termal donde la realeza europea tomaba las aguas.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              <span className="text-sm text-gray-700"><strong>Duración:</strong> Día completo (8h)</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              <span className="text-sm text-gray-700"><strong>Incluye:</strong> Transporte + tiempo libre</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
              <span className="text-sm text-gray-700"><strong>Precio:</strong> 35-50€ por persona</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
              <span className="text-sm text-gray-700"><strong>Experiencia:</strong> Aguas termales + arquitectura</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 italic">
            Perfecta para relajarse y conocer la Bohemia termal histórica.
          </p>
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mt-4">
            <a href="https://gyg.me/D4FukqaH" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
              💎 Reservar excursión a Karlovy Vary
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
        Alternativa: Torre Petřín + Ciudad a tu Ritmo
      </h3>
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Si prefieres quedarte en Praga</h4>
        <p className="text-gray-700 mb-4">
          Explora rincones menos conocidos y disfruta de las mejores vistas de la ciudad.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Torre Petřín - La "Torre Eiffel" de Praga:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Precio: 220 CZK (≈ 9€)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Funicular incluido en pase de 24h</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>60 metros de altura</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Vistas 360° espectaculares</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">Otros rincones especiales:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Jardines de Petřín (gratis)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Museo de Kafka</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Plaza Wenceslao</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Mercados locales</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-100 border border-blue-300 rounded-xl p-4 mt-4">
          <p className="text-blue-800 text-sm">
            🎯 Perfecto si: Quieres un día más relajado, explorando a tu ritmo y disfrutando de la ciudad sin prisa.
          </p>
        </div>
      </div>
    </div>

    {/* Separador decorativo */}
    <div className="flex items-center justify-center mb-8">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
      </div>
    </div>

    {/* MÁS COSAS QUE VER EN PRAGA Y ALREDEDORES */}
    <div id="mas-lugares" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🗺️ Más Cosas que Ver en Praga y Alrededores</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">En la Ciudad:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2">Vyšehrad</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Fortaleza histórica con vistas panorámicas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Cementerio de personalidades checas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Entrada gratuita, perfecto para el atardecer</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2">Letná Park</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Mejores vistas de Praga gratis</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Beer garden con ambiente local</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Metrónomo gigante icónico</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2">Monasterio de Strahov</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Biblioteca barroca espectacular (150 CZK / 6€)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Cervecería artesanal renovada en 2000</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Mejor cerveza de Praga según locales</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2">Žižkov TV Tower</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Torre más alta de Praga (216m)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Bebés gigantes escalando (escultura)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Bar/Restaurante con vistas 360°</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Excursiones de un Día:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2">Suiza Bohemia y Sajona</h4>
            <p className="text-sm text-gray-700 mb-3">Tour de día completo por paisajes naturales espectaculares con formaciones rocosas únicas.</p>
            <a
              href="https://gyg.me/6riRFPCy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm w-full justify-center"
            >
              Ver Tour Suiza Bohemia
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-semibold text-gray-900 mb-2">Český Krumlov</h4>
            <p className="text-sm text-gray-700 mb-3">Viaje de un día completo al pueblo medieval más bonito de República Checa, Patrimonio UNESCO.</p>
            <a
              href="https://gyg.me/pdXWAUmz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm w-full justify-center"
            >
              Ver Tour Český Krumlov
              <ExternalLink className="h-3 w-3 ml-2" />
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
          Viaja sin preocuparte por las comisiones bancarias. Revolut te permite pagar en coronas checas sin cargos adicionales,
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

    {/* Gastronomía */}
    <div id="gastronomia" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Gastronomía Checa Auténtica</h2>

      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Platos Imprescindibles:</h3>
        <div className="mb-6">
            <img
  src="https://images.pexels.com/photos/10875122/pexels-photo-10875122.jpeg"
              alt="Trdelník"
              className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">Goulash Bohemio</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Estofado de ternera con páprika</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 6-12 € según restaurante</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Mejor en: U Fleků, Lokál</li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">Svíčková na smetaně</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Carne con salsa de crema y arándanos</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 8-15 €</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Plato nacional checo</li>
          </ul>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-2">Knedlíky</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Dumplings checos tradicionales</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Acompañan todos los platos</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>De pan, patata o harina</li>
          </ul>
        </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <h4 className="font-semibold text-gray-900 mb-2">Trdelník</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Dulce enrollado en espiral</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Precio: 2-4 €</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Puestos callejeros en zonas turísticas</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Cerveza - Rey de Europa:</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 shadow-sm">
            <ul className="text-sm text-gray-700 space-y-2 list-none">
              <li className="flex items-start"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Pilsner Urquell:</strong> La cerveza pilsner original del mundo</span></li>
              <li className="flex items-start"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Budweiser Budvar:</strong> La auténtica Budweiser checa</span></li>
              <li className="flex items-start"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Precio:</strong> 1-3 € por cerveza (¡más barata que el agua!)</span></li>
              <li className="flex items-start"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span><span><strong>Dato:</strong> República Checa consume más cerveza per cápita que cualquier país</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Restaurantes Recomendados:</h3>
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h5 className="font-semibold text-gray-900">U Fleků</h5>
            <p className="text-sm text-gray-700 mb-1">Cervecería histórica desde 1499 + Goulash (8-15 €)</p>
            <p className="text-xs text-emerald-600 mt-1">Cerveza casera + platos típicos + ambiente medieval</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h5 className="font-semibold text-gray-900">Lokál</h5>
            <p className="text-sm text-gray-700 mb-1">Cocina checa moderna en ambiente tradicional (10-18 €)</p>
            <p className="text-xs text-blue-600 mt-1">Famoso por sus Svíčková na smetaně</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <h5 className="font-semibold text-gray-900">Café Savoy</h5>
            <p className="text-sm text-gray-700 mb-1">Elegancia vienesa desde 1893 (12-25 €)</p>
            <p className="text-xs text-purple-600 mt-1">Techos históricos + repostería imperial</p>
          </div>
        </div>
      </div>
    </div>

    {/* SISTEMA DE TRANSPORTE PÚBLICO */}
    <div id="transporte" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🚇 Sistema de Transporte Público de Praga</h2>

      <div className="mb-6">
        <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl p-5 border border-blue-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Billetes y Precios</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Billetes Sencillos:</h4>
              <ul className="space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>30 min: 30 CZK (≈ 1,20€)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>90 min: 40 CZK (≈ 1,60€)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Pases Turísticos:</h4>
              <ul className="space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>24h: 120 CZK (≈ 4,80€) ilimitado</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>72h: 330 CZK (≈ 13,20€) ilimitado</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3">Un billete vale para metro, tranvía, autobús y funicular</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">🚇 Metro</h3>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>3 líneas (A verde, B amarilla, C roja)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Conecta todos los puntos principales</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Horario: 5:00-24:00h</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">🚊 Tranvía</h3>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Línea 22: Al castillo de Praga</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Red extensa por toda la ciudad</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Frecuencia: 5-10 min</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-2">🚌 Autobús</h3>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Bus 119/100: Aeropuerto-Metro</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Airport Express: Directo al centro</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Líneas nocturnas disponibles</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
        <p className="text-sm text-yellow-800 font-semibold mb-2">⚠️ Importante:</p>
        <ul className="text-sm text-yellow-700 space-y-1 list-none">
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Valida SIEMPRE tu billete al subir (validadoras amarillas)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Inspecciones frecuentes: Multa hasta 1.000 CZK (≈ 40€)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>App PID Lítačka: Compra billetes y horarios en tiempo real</li>
        </ul>
      </div>
    </div>

    {/* CONSEJOS FINALES */}
    <div id="consejos" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 sm:p-8 shadow-md mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎯 Consejos Finales para tu Viaje a Praga</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">✅ Imprescindibles que NO puedes perderte:</h3>
            <ul className="text-sm text-gray-700 space-y-2 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Puente de Carlos al amanecer (6:00h sin multitudes)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Castillo de Praga iluminado de noche (llega a las 9:00h para evitar colas)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-sky-400 rounded-full mr-3"></span>Reloj Astronómico a las 12:00h (espectáculo completo)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>Barrio Judío con sinagogas y cementerio antiguo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Biblioteca del Clementinum (una de las más bellas del mundo)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Probar goulash bohemio y cerveza Pilsner Urquell auténtica</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Consejos de Viajero Experimentado:</h3>
            <ul className="text-sm text-gray-700 space-y-2 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Valida SIEMPRE tu billete de transporte - inspecciones frecuentes</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>Paga en coronas checas - nunca en euros (pierdes 15-25%)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Usa solo apps de taxi (Bolt, Uber, Liftago) - nunca en la calle</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-lime-400 rounded-full mr-3"></span>Sinagogas cerradas los sábados - visita domingo a viernes</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>Agua del grifo es potable - lleva botella reutilizable</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Evita restaurantes en Calle Karlova y cerca del Reloj (trampas turísticas)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Propinas 10% (no obligatorias pero apreciadas)</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
          <h3 className="text-lg font-bold text-yellow-800 mb-3">💡 Consejos para Ahorrar en Praga:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="text-sm text-yellow-700 space-y-2 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Menú del día (Denní Menu): 2 platos por 5-8 € al mediodía</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Evita Praga 1 - come en: Vinohrady, Žižkov, Karlín, Holešovice</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Havelská Koruna: Comedora popular en Casco Antiguo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Pubs locales: Cerveza desde 1-2 € (vs importada 4-6 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Street food: Klobása, lángos, trdelník desde 3-8 €</li>
            </ul>
            <ul className="text-sm text-yellow-700 space-y-2 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Supermercados: Billa, Albert, Tesco para comida barata</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Museos gratis: Primer lunes del mes (Museo Nacional)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Vistas gratis: Letná Park, Vyšehrad, Torre Petřín</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>Pase transporte 72h: Más económico que billetes sueltos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* PRESUPUESTOS REALES */}
    <div id="presupuestos" className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Presupuestos Reales y Detallados</h2>

      <div className="mb-6">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-lg font-bold text-emerald-800 mb-4">ESTILO MOCHILERO - 70 €/día</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (2 noches):</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hostales centro: Pensión SKLEP, Libero Residence</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Cerca del centro</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Habitaciones a precios económicos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Alimentación (3 días):</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Desayuno: Hostal incluido o panadería (2-4 €)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Almuerzo: Comedores locales (4-8 €)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Cena: Supermercado + cerveza (6-10 €)</li>
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
              Total 3 días: 210€ por persona
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-lg font-bold text-blue-800 mb-4">ESTILO CONFORT - 110 €/día</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (2 noches):</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hoteles 4*: Hotel Karlova Prague, Hotel Hastal Prague Old Town</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Ciudad Vieja o Nueva</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Desayuno incluido + habitación privada</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Alimentación (3 días):</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Desayuno: Hotel incluido</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Almuerzo: Restaurantes tradicionales (10-15 €)</li>
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
            <p className="text-blue-800 font-semibold text-center">
              Total 3 días: 330€ por persona
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-lg font-bold text-purple-800 mb-4">ESTILO PREMIUM - 180 €/día</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Alojamiento (2 noches):</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Hoteles 5*: Hotel Kings Court, Hotel The President</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Vista al castillo o río</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Spa + servicios de lujo incluidos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Alimentación (3 días):</h4>
              <ul className="text-sm text-gray-700 space-y-1 list-none">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Restaurantes gourmet: 30-50€ por comida</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Café Savoy + New York Café elegancia</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Maridajes + experiencias culinarias</li>
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
              Total 3 días: 540€ por persona
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-center text-gray-600 text-sm mt-8">
      <p className="mb-2">
        Guía actualizada en Septiembre 2025 | Información verificada y precios actuales
      </p>
      <p>
        ¡Que disfrutes Praga al máximo!
      </p>
    </div>
  </article>
  </>
  );
};

export default PragueGuideArticle;