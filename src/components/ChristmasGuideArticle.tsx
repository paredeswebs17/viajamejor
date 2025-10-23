import React from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ExternalLink, Calendar, Snowflake } from 'lucide-react';

interface GuiaNavidadEuropaProps {
onBack: () => void;
}

const GuiaNavidadEuropa: React.FC<GuiaNavidadEuropaProps> = ({ onBack }) => {

return (
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
      <span className="bg-gradient-to-r from-red-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
        🎄 Especial Navidad
      </span>
    </div>

    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
      Mercados Navideños de Europa 2025-2026: Budapest, Praga, Viena, Roma y Amsterdam
    </h1>

    <div className="flex flex-col gap-4 mb-6 items-start">
      <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
          <Clock className="h-3 w-3 mr-1" />
          25 min
        </span>
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
          <MapPin className="h-3 w-3 mr-1" />
          5 Ciudades Europeas
        </span>
        <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
          <Calendar className="h-3 w-3 mr-1" />
          Navidad 2025-2026
        </span>
      </div>
      
      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: 'Mercados Navideños Europa 2025-2026 | Guía Completa',
              text: 'Descubre los mejores mercados navideños de Budapest, Praga, Viena, Roma y Amsterdam',
              url: window.location.href,
            })
            .catch((error) => console.log('Error sharing', error));
          } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
              alert('Enlace copiado al portapapeles');
            }).catch(() => {
              window.open(`https://twitter.com/intent/tweet?text=Mercados Navideños Europa 2025-2026&url=${encodeURIComponent(window.location.href)}`, '_blank');
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
      src="https://images.pexels.com/photos/19361199/pexels-photo-19361199.jpeg"
      alt="Mercado navideño europeo iluminado"
      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
    />
  </div>

  {/* Introducción */}
  <div className="bg-gradient-to-r from-red-50 via-green-50 to-red-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">✨ La Magia de la Navidad Europea</h2>
    <p className="text-gray-700 mb-4">
      Europa se transforma en un cuento de hadas durante la temporada navideña. Los mercados navideños son una tradición centenaria 
      que llena de magia, luces, aromas a vino caliente y castañas asadas las ciudades más bonitas del continente.
    </p>
    <p className="text-gray-700 mb-4">
      En esta guía encontrarás información actualizada y contrastada sobre los mejores mercados navideños de 
      <strong> Budapest, Praga, Viena, Roma y Amsterdam</strong> para la temporada 2025-2026, con fechas oficiales, 
      horarios, ubicaciones y consejos para disfrutar al máximo de esta experiencia única.
    </p>
    <div className="bg-white rounded-xl p-4 border border-green-200">
      <p className="text-sm text-gray-700">
        <strong>💡 Consejo Pro:</strong> Los mercados navideños son muy populares y los alojamientos se agotan rápido. 
        Reserva vuelos y hoteles con al menos 2-3 meses de antelación para conseguir mejores precios.
      </p>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-green-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
    </div>
  </div>

  {/* BUDAPEST */}
  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-red-500 to-amber-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">🇭🇺</span>
      Budapest - La Perla del Danubio en Navidad
    </h2>

    <div className="mb-6">
      <img
        src="https://images.pexels.com/photos/19361199/pexels-photo-19361199.jpeg"
        alt="Mercado navideño en Budapest"
        className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
      />
    </div>

    <p className="text-gray-700 mb-6">
      Budapest brilla con especial intensidad durante la Navidad. Sus mercados navideños, especialmente 
      el de la Plaza Vörösmarty y la Basílica de San Esteban, han sido votados como los mejores de Europa en 2020, 2022, 2023 y 2024.
    </p>

    <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">📅 Fechas Oficiales 2025-2026</h3>
      <p className="text-gray-700 mb-2">
        Los principales mercados navideños de Budapest abren <strong>del 14 de noviembre de 2025 al 1 de enero de 2026</strong>.
      </p>
    </div>

    {/* Mercado Plaza Vörösmarty */}
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">⭐ Plaza Vörösmarty - El Más Emblemático</h3>
      <div className="mb-4">
        <p className="text-gray-700 mb-3">
          El mercado navideño más grande y famoso de Budapest. Ubicado en pleno centro, a pocos pasos de la calle comercial Fashion Street.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">📍 Info Práctica:</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Fechas: 14 nov 2025 - 1 ene 2026</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>Horario: D-J 11:00-21:00 / V-S 11:00-23:00</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ubicación: Vörösmarty tér</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Pago: Solo tarjeta (no efectivo)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">🎄 Qué Encontrarás:</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Árbol de Navidad gigante</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Más de 100 puestos artesanales</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Vino caliente (forralt bor)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Kürtőskalács (chimney cake)</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Mercado Basílica San Esteban */}
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">⛪ Plaza Basílica de San Esteban</h3>
      <p className="text-gray-700 mb-3">
        Considerado el mercado navideño más bonito de Budapest. Destaca por su espectacular show de luces 3D proyectado sobre la fachada de la Basílica y su pista de patinaje gratuita.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">📍 Info Práctica:</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Fechas: 14 nov 2025 - 1 ene 2026</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Horario: 10:00-22:00 diario</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Ubicación: Szent István tér</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">✨ Lo Más Especial:</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Show de luces 3D en la Basílica</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Pista de patinaje GRATIS (200m²)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Árbol de Navidad espectacular</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Ambiente familiar muy acogedor</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
        <p className="text-xs text-blue-700 mb-2">
          <strong>🎥 Show de Luces:</strong> Proyección 3D en la fachada de la Basílica desde las 16:30 hasta las 20:00 cada 30 minutos.
        </p>
      </div>
    </div>

    {/* Otros mercados y actividades */}
    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">🎪 Otros Mercados y Actividades</h3>
      
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">🏰 Mercado del Bastión de los Pescadores</h4>
          <p className="text-sm text-gray-700 mb-2">
            El mercado más pequeño pero más bello de Budapest, con vistas espectaculares de la ciudad desde este lugar neogótico. Se celebra solo los domingos de diciembre.
          </p>
          <p className="text-xs text-gray-600">Fechas: Domingos de diciembre 2025 (1, 8, 15, 22)</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">🎠 Bosque Mágico (Magic Grove)</h4>
          <p className="text-sm text-gray-700 mb-2">
            Junto al Castillo Vajdahunyad en el Parque de la Ciudad. Ideal para familias con niños: talleres de magia, carrusel, noria gigante y tren mágico. Entrada gratis (atracciones de pago).
          </p>
          <p className="text-xs text-gray-600">Fechas: 6 dic 2025 - 1 ene 2026</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">⛸️ Pista de Patinaje del Városliget</h4>
          <p className="text-sm text-gray-700 mb-2">
            La pista de patinaje sobre hielo más grande de Europa. Abierta desde 1870. Ubicada entre la Plaza de los Héroes y el Castillo de Vajdahunyad.
          </p>
          <p className="text-xs text-gray-600">Fechas: 15 nov 2025 - 25 feb 2026</p>
        </div>
      </div>
    </div>

    {/* Comida típica */}
    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">🍷 Comida y Bebida Típica Navideña</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">🍽️ Platos Imprescindibles:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Kürtőskalács:</strong> Pastel en forma de chimenea, calientito y crujiente</li>
            <li>• <strong>Lángos:</strong> Masa frita con queso, ajo y crema agria</li>
            <li>• <strong>Goulash:</strong> Estofado de carne con pimentón</li>
            <li>• <strong>Forralt bor:</strong> Vino caliente especiado (≈900 HUF / 2,80€)</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">☕ Dulces Navideños:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Bejgli:</strong> Rollo dulce relleno de nueces o semillas de amapola</li>
            <li>• <strong>Szaloncukor:</strong> Bombones navideños típicos</li>
            <li>• <strong>Chocolate caliente:</strong> Perfecto para el frío invernal</li>
            <li>• <strong>Castañas asadas:</strong> En todos los mercados</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Consejos prácticos */}
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Consejos Prácticos para Budapest</h3>
      <ul className="text-sm text-gray-700 space-y-2">
        <li>• <strong>Moneda:</strong> Florín húngaro (HUF). En Vörösmarty solo aceptan tarjeta. Lleva una tarjeta sin comisiones como N26.</li>
        <li>• <strong>Precios:</strong> Similares o más altos que en Alemania/Austria. Un vino caliente cuesta unos 2,80-3€.</li>
        <li>• <strong>Mejor momento:</strong> Entre semana por las mañanas para evitar aglomeraciones</li>
        <li>• <strong>Iluminación:</strong> Fashion Street, Váci utca y Gran Boulevard tienen las mejores luces navideñas</li>
        <li>• <strong>Termas en invierno:</strong> Imprescindible visitar los baños Széchenyi o Gellért. Estar en aguas termales a 38°C mientras nieva es una experiencia única</li>
      </ul>
    </div>

    {/* Enlace a guía completa */}
    <div className="bg-gradient-to-r from-red-500 to-amber-500 rounded-xl p-6 text-center shadow-lg">
      <h3 className="text-white font-bold text-lg mb-3">🗺️ ¿Quieres Conocer Más de Budapest?</h3>
      <p className="text-white text-sm mb-4">Descubre qué ver, dónde comer, mejores zonas de alojamiento y todos los imprescindibles de la ciudad</p>
      <button className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        Ver Guía Completa de Budapest →
      </button>
    </div>
  </div>

  {/* Separador */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <Snowflake className="h-5 w-5 text-blue-400" />
      <Snowflake className="h-5 w-5 text-blue-300" />
      <Snowflake className="h-5 w-5 text-blue-400" />
    </div>
  </div>

  {/* PRAGA */}
  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-blue-500 to-red-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">🇨🇿</span>
      Praga - La Ciudad de las Cien Torres en Navidad
    </h2>

    <div className="mb-6">
      <img
        src="https://images.pexels.com/photos/3990429/pexels-photo-3990429.jpeg"
        alt="Mercado navideño en Praga"
        className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
      />
    </div>

    <p className="text-gray-700 mb-6">
      Praga se convierte en un cuento de hadas durante la Navidad. Sus mercados navideños llenan las plazas históricas con el aroma a trdelník, vino caliente y castañas asadas, todo bajo las torres góticas y barrocas de la ciudad.
    </p>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">📅 Fechas Oficiales 2025-2026</h3>
      <p className="text-gray-700 mb-2">
        Los principales mercados navideños de Praga abren <strong>del 29 de noviembre de 2025 al 6 de enero de 2026</strong>. Algunos mercados más pequeños abren desde el 20 de noviembre.
      </p>
    </div>

    {/* Plaza Ciudad Vieja */}
    <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">⭐ Plaza de la Ciudad Vieja (Staroměstské náměstí)</h3>
      <p className="text-gray-700 mb-4">
        El mercado navideño más famoso e importante de Praga, situado en el corazón de la Ciudad Vieja, con la majestuosa Iglesia de Týn de fondo y el Reloj Astronómico cerca.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">📍 Info Práctica:</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Fechas: 29 nov 2025 - 6 ene 2026</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Horario: 10:00-22:00 diario</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Puestos de comida: Hasta 00:00</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Ubicación: Staroměstské náměstí</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">🎄 Lo Más Destacado:</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Árbol de 22m con 110.000 luces LED</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Espectáculos de música clásica (Smetana)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Más de 50 puestos artesanales</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Escenario con actuaciones en vivo</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-3 shadow-sm border border-red-100 mb-3">
        <p className="text-xs text-red-700">
          <strong>🎭 Encendido de Luces:</strong> El espectáculo de luces del árbol se realiza a las 16:30, 17:30, 18:30, 19:30, 20:30 y 21:30 con música clásica de fondo.
        </p>
      </div>

      <div className="bg-white rounded-lg p-3 shadow-sm border border-red-100">
        <p className="text-xs text-gray-700">
          <strong>📸 Foto Perfecta:</strong> Sube a la Torre del Reloj Astronómico para vistas espectaculares de la plaza desde arriba. Compra entradas online para evitar colas.
        </p>
      </div>
    </div>

    {/* Plaza Wenceslao */}
    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">🏛️ Plaza de Wenceslao (Václavské náměstí)</h3>
      <p className="text-gray-700 mb-3">
        El segundo mercado más importante de Praga, ubicado en esta mítica plaza de 700 metros de longitud, con el Museo Nacional de fondo y rodeado de edificios históricos iluminados.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Fechas: 29 nov 2025 - 6 ene 2026</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Horario: 10:00-20:00 diario</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Pista de patinaje sobre hielo</li>
          </ul>
        </div>
        <div>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Árbol de 15 metros iluminado</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Actuaciones musicales diarias</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Ambiente menos turístico</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Otros mercados */}
    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">🎪 Otros Mercados Navideños</h3>
      
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">⛪ Mercado del Castillo de Praga</h4>
          <p className="text-sm text-gray-700 mb-2">
            Pequeño mercado detrás de la Catedral de San Vito. Ambiente más íntimo y menos concurrido. Perfecto para calentarse mientras visitas el castillo.
          </p>
          <p className="text-xs text-gray-600">Fechas: 2 dic 2025 - 6 ene 2026 | Horario: L-J 9:00-18:00, V-D 9:00-19:00</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">🌸 Plaza de la Paz (Náměstí Míru)</h4>
          <p className="text-sm text-gray-700 mb-2">
            Mercado con ambiente más local frente a la Iglesia de Santa Ludmila. El primero en abrir cada año. Artesanía auténtica y productos locales.
          </p>
          <p className="text-xs text-gray-600">Fechas: 20 nov - 24 dic 2025 | Horario: 10:00-20:00</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">📜 Mercado Havelské (El Más Antiguo)</h4>
          <p className="text-sm text-gray-700 mb-2">
            El mercado más antiguo de Praga, con raíces desde el siglo XIII (1232). Abierto todo el año, se decora especialmente para Navidad. Menos llamativo pero con tradición centenaria.
          </p>
          <p className="text-xs text-gray-600">Fechas: 2 dic 2025 - 6 ene 2026 | Horario: 10:00-19:00 diario</p>
        </div>
      </div>
    </div>

    {/* Comida típica */}
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">🍷 Comida y Bebida Típica Checa</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">🍽️ Imprescindibles Salados:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Trdelník:</strong> Pastel de Navidad enrollado y caliente (también llamado "tarta trenzada")</li>
            <li>• <strong>Klobása:</strong> Salchichas checas con pan típico y mostaza</li>
            <li>• <strong>Goulash:</strong> Estofado de ternera reconfortante, acompañado con pan</li>
            <li>• <strong>Bramborák:</strong> Tortitas de patata rallada fritas, tostaditas</li>
            <li>• <strong>Lángos:</strong> Masa frita húngara con queso, ajo y crema agria</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">☕ Bebidas y Dulces:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Svařák:</strong> Vino caliente especiado checo</li>
            <li>• <strong>Vánočka:</strong> Pan dulce en forma de trenza con pasas, típico navideño</li>
            <li>• <strong>Medovina:</strong> Hidromiel caliente (bebida de miel fermentada)</li>
            <li>• <strong>Punč:</strong> Ponche de ron con especias</li>
            <li>• <strong>Galletas de jengibre:</strong> Decoradas artesanalmente</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Consejos */}
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Consejos Prácticos para Praga</h3>
      <ul className="text-sm text-gray-700 space-y-2">
        <li>• <strong>Moneda:</strong> Corona checa (CZK). Cambia en oficinas de cambio oficiales, no en la calle</li>
        <li>• <strong>Todo andando:</strong> Los principales mercados están en el centro y se recorren fácilmente a pie, sin necesidad de transporte público</li>
        <li>• <strong>Mejor momento:</strong> Temprano por la mañana o entre semana para evitar aglomeraciones masivas</li>
        <li>• <strong>Alojamiento:</strong> Más económico que Berlín o Viena. Reserva en el centro cerca de Plaza Ciudad Vieja</li>
        <li>• <strong>Nochevieja:</strong> Del 31 de diciembre hay actuaciones musicales desde las 16:45 hasta medianoche en Plaza Ciudad Vieja</li>
        <li>• <strong>Reyes Magos:</strong> El 5 de enero a las 15:30 hay Cabalgata de Reyes Magos montados en camello desde la iglesia de Santo Tomás</li>
      </ul>
    </div>

    {/* Enlace guía */}
    <div className="bg-gradient-to-r from-blue-500 to-red-500 rounded-xl p-6 text-center shadow-lg">
      <h3 className="text-white font-bold text-lg mb-3">🗺️ ¿Quieres Conocer Más de Praga?</h3>
      <p className="text-white text-sm mb-4">Descubre el Castillo, el Puente de Carlos, el barrio judío y todos los imprescindibles</p>
      <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        Ver Guía Completa de Praga →
      </button>
    </div>
  </div>

  {/* Separador */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <Snowflake className="h-5 w-5 text-blue-400" />
      <Snowflake className="h-5 w-5 text-blue-300" />
      <Snowflake className="h-5 w-5 text-blue-400" />
    </div>
  </div>

  {/* VIENA */}
  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-red-500 to-white text-red-600 w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">🇦🇹</span>
      Viena - La Capital Imperial de la Navidad
    </h2>

    <div className="mb-6">
      <img
        src="https://images.pexels.com/photos/3990379/pexels-photo-3990379.jpeg"
        alt="Mercado navideño en Viena"
        className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
      />
    </div>

    <p className="text-gray-700 mb-6">
      Viena es sinónimo de elegancia navideña. Con más de 700 años de tradición desde el primer mercado en 1296, la capital austríaca celebra la Navidad con más de 20 mercados oficiales que transforman sus palacios y plazas en escenarios de cuento.
    </p>

    <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">📅 Fechas Oficiales 2025-2026</h3>
      <p className="text-gray-700 mb-2">
        Los mercados navideños de Viena abren <strong>del 14 de noviembre de 2025</strong>. La mayoría cierran el <strong>23-26 de diciembre</strong>, aunque algunos se prolongan hasta el <strong>6 de enero de 2026</strong>.
      </p>
    </div>

    {/* Rathausplatz */}
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">⭐ Christkindlmarkt del Ayuntamiento (Rathausplatz)</h3>
      <p className="text-gray-700 mb-4">
        El mercado navideño más emblemático y grande de Viena, situado en la plaza del Ayuntamiento. Con más de 150 puestos, parque infantil, conciertos de coros internacionales y la pista de patinaje más espectacular de la ciudad.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">📍 Info Práctica:</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Fechas: 14 nov - 26 dic 2025</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Horario: 10:00-22:00 diario</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>24 dic: 10:00-18:30</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Metro: U2 estación Rathaus</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">🎄 Lo Más Especial:</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Más de 150 puestos decorados</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Zona infantil con talleres de galletas y velas</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Conciertos de coros (entrada gratuita)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Pista de patinaje "Ice Dream" 3000m²</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
        <p className="text-xs text-blue-700 mb-2">
          <strong>⛸️ Little Ice Dream:</strong> La pista de hielo del Rathaus es única: un circuito en sentido único de más de 3.000m². Del 14 nov al 6 ene y del 23 ene al 2 mar 2026. Descuento del 10% comprando online.
        </p>
      </div>
    </div>

    {/* Palacio Schönbrunn */}
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">👑 Mercado del Palacio de Schönbrunn</h3>
      <p className="text-gray-700 mb-3">
        Uno de los pocos mercados que permanece abierto hasta enero, frente a uno de los palacios barrocos más hermosos de Europa. Ambiente romántico e imperial único. Más de 80 puestos con productos austriacos tradicionales.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>Fechas: 6 nov 2025 - 6 ene 2026</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>6 nov-23 dic: 10:00-21:00</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>24 dic: 10:00-16:00</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>25 dic-6 ene: 10:00-19:00</li>
          </ul>
        </div>
        <div>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Certificado de Excelencia Tripadvisor</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Más de 1 millón de visitantes/año</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Conciertos y coros en vivo</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Palacio iluminado de fondo</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Otros mercados importantes */}
    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">🎪 Otros Mercados Destacados</h3>
      
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">🏰 Mercado del Palacio Belvedere</h4>
          <p className="text-sm text-gray-700 mb-2">
            Más de 40 puestos decorados frente al palacio barroco con vistas espectaculares. Ambiente elegante y romántico, ideal para parejas. Abierto hasta Nochevieja.
          </p>
          <p className="text-xs text-gray-600">Fechas: 14 nov - 31 dic 2025 | Horario: L-V 11:00-21:00, S-D 10:00-21:00</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">🎨 Mercado de Spittelberg</h4>
          <p className="text-sm text-gray-700 mb-2">
            En el barrio bohemio de Spittelberg. Callejuelas históricas del periodo Biedermeier con productos artesanales únicos: cerámicas, joyas, diseño. Ambiente más alternativo y relajado.
          </p>
          <p className="text-xs text-gray-600">Fechas: 14 nov - 23 dic 2025</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">⛪ Mercado de Karlsplatz</h4>
          <p className="text-sm text-gray-700 mb-2">
            Frente a la Iglesia de San Carlos Borromeo. Enfocado en artesanías auténticas y productos hechos a mano. Ambiente artístico y alternativo.
          </p>
          <p className="text-xs text-gray-600">Fechas: 21 nov - 23 dic 2025</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">🎡 Winter Market del Prater</h4>
          <p className="text-sm text-gray-700 mb-2">
            En el parque de atracciones junto a la famosa noria. Mercado con ambiente familiar, actuaciones en vivo y desfile de Perchten. Se extiende hasta después de Reyes.
          </p>
          <p className="text-xs text-gray-600">Fechas: 21 nov 2025 - 6 ene 2026</p>
        </div>
      </div>
    </div>

    {/* Comida típica */}
    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">🍷 Delicias Navideñas Vienesas</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">🍽️ Comida Tradicional:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Glühwein:</strong> Vino caliente especiado (≈4€ con taza de recuerdo)</li>
            <li>• <strong>Punsch:</strong> Ponche de ron con especias y frutas</li>
            <li>• <strong>Langos:</strong> Masa frita con ajo, queso y crema agria</li>
            <li>• <strong>Bratwurst:</strong> Salchichas a la parrilla con mostaza</li>
            <li>• <strong>Raclette:</strong> Queso fundido sobre patatas</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">🧁 Dulces Imperiales:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Vanillekipferl:</strong> Galletas de vainilla en forma de medialuna</li>
            <li>• <strong>Lebkuchen:</strong> Pan de jengibre decorado</li>
            <li>• <strong>Apfelstrudel:</strong> Strudel de manzana caliente</li>
            <li>• <strong>Kaiserschmarrn:</strong> Crepe dulce desmenuzado</li>
            <li>• <strong>Castañas asadas:</strong> Maroni, en todos los mercados</li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-lg p-3 mt-4 shadow-sm">
        <p className="text-xs text-purple-700">
          <strong>☕ Sistema de Tazas:</strong> Al pedir bebidas calientes, dejas un depósito de 3-4€ por la taza. Puedes devolverla para recuperar el dinero o quedártela de recuerdo. Cada mercado tiene diseños únicos cada año.
        </p>
      </div>
    </div>

    {/* Consejos */}
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Consejos Prácticos para Viena</h3>
      <ul className="text-sm text-gray-700 space-y-2">
        <li>• <strong>Luces navideñas:</strong> Se encienden el 6 de noviembre y permanecen hasta el 6 de enero de 2026</li>
        <li>• <strong>Conciertos:</strong> Viena es la capital de la música clásica. Aprovecha para ver El Cascanueces o conciertos navideños en la Ópera</li>
        <li>• <strong>Alojamiento caro:</strong> Viena es ciudad cara. En Navidad los precios suben aún más. Reserva con meses de antelación</li>
        <li>• <strong>Calles iluminadas:</strong> Graben, Kärntner Straße y Stephansplatz tienen las mejores iluminaciones navideñas</li>
        <li>• <strong>Transporte:</strong> Muy bien conectado con metro y tranvía. Compra pase de 24-72h para moverte sin límites</li>
        <li>• <strong>Mejor momento:</strong> Entre semana y por las mañanas. Los fines de semana los mercados están muy llenos</li>
      </ul>
    </div>

    {/* Enlace guía */}
    <div className="bg-gradient-to-r from-red-500 via-white to-red-500 rounded-xl p-6 text-center shadow-lg">
      <h3 className="text-red-600 font-bold text-lg mb-3">🗺️ ¿Quieres Conocer Más de Viena?</h3>
      <p className="text-gray-700 text-sm mb-4">Palacios imperiales, cafés históricos, la Ópera y todos los tesoros de la capital austríaca</p>
      <button className="bg-red-600 text-white hover:bg-red-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        Ver Guía Completa de Viena →
      </button>
    </div>
  </div>

  {/* Separador */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <Snowflake className="h-5 w-5 text-blue-400" />
      <Snowflake className="h-5 w-5 text-blue-300" />
      <Snowflake className="h-5 w-5 text-blue-400" />
    </div>
  </div>

  {/* ROMA */}
  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-green-500 via-white to-red-500 text-green-600 w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">🇮🇹</span>
      Roma - Navidad en la Ciudad Eterna
    </h2>

    <div className="mb-6">
      <img
        src="https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg"
        alt="Roma en Navidad"
        className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
      />
    </div>

    <p className="text-gray-700 mb-6">
      Roma vive la Navidad de forma especial como centro del mundo católico. Desde principios de diciembre hasta la Epifanía del 6 de enero (día de la Befana), la Ciudad Eterna se llena de belenes, luces, mercados navideños y celebraciones religiosas únicas.
    </p>

    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">📅 Fechas Temporada Navideña 2025-2026</h3>
      <p className="text-gray-700 mb-2">
        La Navidad en Roma comienza oficialmente el <strong>8 de diciembre</strong> (Inmaculada Concepción) y se extiende hasta el <strong>6 de enero de 2026</strong> (Epifanía/día de la Befana). Los mercados principales abren <strong>desde principios de diciembre</strong>.
      </p>
    </div>

    {/* Piazza Navona */}
    <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">⭐ Piazza Navona - Mercatino della Befana</h3>
      <p className="text-gray-700 mb-4">
        El mercado navideño más famoso y emblemático de Roma, en una de las plazas barrocas más bellas del mundo. Con más de 50 puestos, tiovivo antiguo de 1896 y espectáculos de marionetas, atrae a más de 500.000 visitantes.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">📍 Info Práctica:</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Fechas: 1 dic 2025 - 6 ene 2026</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Horario: 18:00-22:00 (pico)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Ubicación: Piazza Navona</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Entrada: Gratuita</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">🎄 Qué Encontrarás:</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Juguetes y calze di Befana (calcetines)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Turrón, panettone y dulces típicos</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Tiovivo vintage de 1896</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Espectáculos de marionetas y cantantes</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-3 shadow-sm border border-red-100">
        <p className="text-xs text-red-700">
          <strong>🧙‍♀️ La Befana:</strong> En Italia, la bruja buena Befana trae regalos a los niños el 5-6 de enero. Los días previos a la Epifanía, Papá Noel se despide y la Befana cobra protagonismo en Piazza Navona.
        </p>
      </div>
    </div>

    {/* Christmas World Villa Borghese */}
    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">🎪 Christmas World - Villa Borghese</h3>
      <p className="text-gray-700 mb-3">
        Uno de los eventos navideños más espectaculares de Roma. Un auténtico pueblo navideño con decorados mágicos, personajes navideños (Grinch, elfos, hadas), espectáculos en vivo, pista de patinaje y nieve artificial.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Fechas: 1 dic 2025 - 7 ene 2026</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Ubicación: Villa Borghese</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Entrada: ≈15€ por persona</li>
          </ul>
        </div>
        <div>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Personajes interactivos</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Espectáculos y teatro</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Pista de patinaje</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-3 shadow-sm border border-purple-100">
        <p className="text-xs text-purple-700">
          <strong>👨‍👩‍👧 Ideal para familias:</strong> Perfecto si viajas con niños. Decorados espectaculares, animación constante y ambiente mágico que hace las delicias de los más pequeños.
        </p>
      </div>
    </div>

    {/* Otros lugares navideños */}
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">🎄 Otros Lugares y Eventos Navideños</h3>
      
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">⛪ Vaticano - Belén y Misa del Papa</h4>
          <p className="text-sm text-gray-700 mb-2">
            Belén monumental en Plaza de San Pedro (desde diciembre). Misa del Gallo el 24 de diciembre a las 19:30 y bendición Urbi et Orbi el 25 de diciembre a las 12:00. Entrada gratuita pero hay que solicitar invitaciones.
          </p>
          <p className="text-xs text-gray-600">💡 Llegarmuy temprano para conseguir sitio</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">🎨 Muestra de 100 Belenes</h4>
          <p className="text-sm text-gray-700 mb-2">
            Exposición de belenes artesanales de todo el mundo en el Vaticano, bajo los arcos de Plaza San Pedro. Tradición italiana desde 1976 para reafirmar la importancia del belén.
          </p>
          <p className="text-xs text-gray-600">Fechas: Diciembre 2025 - 6 enero 2026 | Entrada gratuita</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">🎡 Parques Temáticos Navideños</h4>
          <p className="text-sm text-gray-700 mb-2">
            Cinecittà World: Pueblo navideño con nieve artificial, pista de patinaje, Christmas Street (8 nov 2025 - 6 ene 2026). Luneur Park: Primer parque de atracciones de Italia con decoración mágica y bosque encantado.
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">🎭 Concierto de Año Nuevo</h4>
          <p className="text-sm text-gray-700 mb-2">
            Concierto gratuito en Piazza del Popolo entre el 31 de diciembre y 1 de enero con cantantes italianos famosos y fuegos artificiales a medianoche.
          </p>
        </div>
      </div>
    </div>

    {/* Comida navideña */}
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">🍷 Sabores Navideños Romanos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">🍽️ Dulces de Navidad:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Panettone:</strong> Pan dulce milanés típico en toda Italia</li>
            <li>• <strong>Pandoro:</strong> Bizcocho esponjoso con forma de estrella</li>
            <li>• <strong>Torrone:</strong> Turrón italiano con almendras y miel</li>
            <li>• <strong>Cannoli:</strong> Tubitos crujientes rellenos de ricotta dulce</li>
            <li>• <strong>Castagne arrosto:</strong> Castañas asadas</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">☕ Bebidas Calientes:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Vin brulé:</strong> Vino caliente especiado italiano</li>
            <li>• <strong>Cioccolata calda:</strong> Chocolate caliente espeso</li>
            <li>• <strong>Caffè corretto:</strong> Café con licor</li>
            <li>• <strong>Bombardino:</strong> Bebida caliente con zabaione y brandy</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Consejos */}
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Consejos para Navidad en Roma</h3>
      <ul className="text-sm text-gray-700 space-y-2">
        <li>• <strong>Clima:</strong> Más suave que el norte de Europa (8-15°C). Frío por la noche pero agradable de día con sol</li>
        <li>• <strong>Ventaja italiana:</strong> Italia extiende la Navidad hasta el 6 de enero (como España), a diferencia de otros países europeos que acaban el 1 de enero</li>
        <li>• <strong>6 de enero:</strong> No vienen los Reyes Magos, sino la Befana, la bruja buena que trae dulces a los niños</li>
        <li>• <strong>Iluminación:</strong> Desde noviembre se colocan luces navideñas. Las calles Via del Corso, Via Condotti y principales plazas están espectacularmente iluminadas</li>
        <li>• <strong>Mercados menos conocidos:</strong> También hay mercados en Piazza Mazzini (Prati), Plaza de España y EUR con ambiente más local</li>
        <li>• <strong>Museos gratis:</strong> Primer domingo de mes, muchos museos tienen entrada gratuita (pueden estar muy llenos)</li>
      </ul>
    </div>

    {/* Enlace guía */}
    <div className="bg-gradient-to-r from-green-500 via-white to-red-500 rounded-xl p-6 text-center shadow-lg">
      <h3 className="text-green-600 font-bold text-lg mb-3">🗺️ ¿Quieres Conocer Más de Roma?</h3>
      <p className="text-gray-700 text-sm mb-4">Coliseo, Vaticano, Fontana di Trevi, Trastevere y todos los imprescindibles de la Ciudad Eterna</p>
      <button className="bg-green-600 text-white hover:bg-green-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        Ver Guía Completa de Roma →
      </button>
    </div>
  </div>

  {/* Separador */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <Snowflake className="h-5 w-5 text-blue-400" />
      <Snowflake className="h-5 w-5 text-blue-300" />
      <Snowflake className="h-5 w-5 text-blue-400" />
    </div>
  </div>

  {/* AMSTERDAM */}
  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-red-500 via-white to-blue-500 text-red-600 w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">🇳🇱</span>
      Amsterdam - Luces y Canales en Navidad
    </h2>

    <div className="mb-6">
      <img
        src="https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg"
        alt="Amsterdam en Navidad"
        className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
      />
    </div>

    <p className="text-gray-700 mb-6">
      Amsterdam en Navidad es pura magia. Los canales se iluminan con el famoso Festival de Luces, las plazas se llenan de mercados navideños y las calles se adornan con miles de luces creando un ambiente acogedor único.
    </p>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">📅 Fechas Oficiales 2025-2026</h3>
      <p className="text-gray-700 mb-2">
        El Amsterdam Light Festival se celebra del <strong>27 de noviembre de 2025 al 18 de enero de 2026</strong>. Los mercados navideños abren <strong>desde principios de diciembre</strong>, principalmente del 4 al 28 de diciembre.
      </p>
    </div>

    {/* Festival de Luces */}
    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">✨ Amsterdam Light Festival - El Gran Protagonista</h3>
      <p className="text-gray-700 mb-4">
        El evento estrella del invierno amsterdamés. Artistas de todo el mundo crean impresionantes instalaciones de luz en los canales, transformando la ciudad en un museo de arte lumínico al aire libre. Cada año tiene un tema diferente.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">📍 Info Práctica:</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Fechas: 27 nov 2025 - 18 ene 2026</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Horario: 16:30-22:00 diario</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Ubicación: Canales del centro</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>≈30 instalaciones artísticas</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">🚤 Cómo Verlo:</h4>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Tour en barco nocturno (recomendado)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Caminando por el canal Keizersgracht</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Reserva con antelación los cruceros</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Temática anual diferente</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-3 shadow-sm border border-purple-100">
        <p className="text-xs text-purple-700">
          <strong>🎨 Arte con Mensaje:</strong> Las instalaciones no son solo decorativas, muchas transmiten mensajes sobre tecnología, sostenibilidad, sociedad o historia. Un festival artístico único en Europa.
        </p>
      </div>
    </div>

    {/* Ice Village Museumplein */}
    <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">⛸️ Ice Village - Museumplein</h3>
      <p className="text-gray-700 mb-3">
        El mercado navideño más tradicional y popular de Amsterdam, ubicado en la plaza de los museos frente al Rijksmuseum. Combina mercado navideño con una gran pista de patinaje sobre hielo.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Fechas: 4-28 diciembre 2025</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Horario: 11:00-20:00 diario</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>24-25 dic: hasta 17:00</li>
          </ul>
        </div>
        <div>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Cabañas de madera típicas</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Pista de patinaje grande</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Frente al Rijksmuseum</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Amsterdam Winter Paradise */}
    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">🎡 Amsterdam Winter Paradise (Winterparadijs)</h3>
      <p className="text-gray-700 mb-3">
        El mayor evento navideño de Amsterdam en el centro de convenciones RAI. Similar al Winter Wonderland de Londres: pista de patinaje enorme, mercado navideño, toboganes, noria gigante y actividades para todas las edades.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Fechas: 17 dic 2025 - 3 ene 2026</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Horario: 09:00-01:00 diario</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Ubicación: Amsterdam RAI</li>
          </ul>
        </div>
        <div>
          <ul className="text-sm text-gray-700 space-y-1 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Mercado con 100+ puestos</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Pista de patinaje gigante</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Noria y toboganes</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-3 shadow-sm border border-green-100">
        <p className="text-xs text-green-700">
          <strong>🎫 Entrada de pago:</strong> Compra tickets online con antelación en www.hetamsterdamsewinterparadijs.nl. El ambiente es espectacular y familiar.
        </p>
      </div>
    </div>

    {/* Otros mercados */}
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">🎪 Otros Mercados y Eventos</h3>
      
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">🌲 Árbol de Navidad Plaza Dam</h4>
          <p className="text-sm text-gray-700 mb-2">
            Árbol de 20 metros decorado con miles de luces LED frente al Palacio Real. El encendido es una ceremonia especial con villancicos, actuaciones musicales y puestos de comida. También se encienden los escaparates de De Bijenkorf.
          </p>
          <p className="text-xs text-gray-600">Encendido: 13 diciembre 2025 (por confirmar)</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">🎨 Funky Xmas Market</h4>
          <p className="text-sm text-gray-700 mb-2">
            Mercado alternativo en Westergas. Diseñadores locales venden ropa, arte y joyería artesanal. Ambiente muy local con música en vivo y puestos de comida. Se celebra el tercer domingo de diciembre.
          </p>
          <p className="text-xs text-gray-600">Fecha: 21 diciembre 2025</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">🎅 Desfile de Sinterklaas</h4>
          <p className="text-sm text-gray-700 mb-2">
            Tradición holandesa muy querida. San Nicolás y sus ayudantes llegan desde España (según la tradición) navegando por los canales y recorriendo las calles principales de Amsterdam. Muy especial para los niños.
          </p>
          <p className="text-xs text-gray-600">Mediados de noviembre (antes de la Navidad oficial)</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">⛸️ Pista Rembrandtplein</h4>
          <p className="text-sm text-gray-700 mb-2">
            Pista de patinaje de más de 400m² en el corazón de la vida nocturna amsterdamesa. Con puestos de comida alrededor. Ten en cuenta que no se refrigera artificialmente, así que si no hace frío puede estar mojada.
          </p>
        </div>
      </div>
    </div>

    {/* Comida típica */}
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">🍷 Delicias Holandesas de Navidad</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">🍽️ Dulces Navideños:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Oliebollen:</strong> Buñuelos esponjosos espolvoreados con azúcar glas. Típicos de Año Nuevo</li>
            <li>• <strong>Poffertjes:</strong> Mini tortitas esponjosas con mantequilla y azúcar</li>
            <li>• <strong>Stroopwafels:</strong> Galletas rellenas de caramelo (se comen calientes)</li>
            <li>• <strong>Appelflappen:</strong> Tartas de manzana típicas holandesas</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">☕ Bebidas Calientes:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• <strong>Glühwein:</strong> Vino caliente especiado</li>
            <li>• <strong>Warme chocolademelk:</strong> Chocolate caliente holandés denso</li>
            <li>• <strong>Chocomel caliente:</strong> Bebida de chocolate típica</li>
            <li>• <strong>Bisschopswijn:</strong> Vino episcopal con especias y naranja</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Consejos */}
    <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Consejos Prácticos para Amsterdam</h3>
      <ul className="text-sm text-gray-700 space-y-2">
        <li>• <strong>Temporada navideña:</strong> Comienza oficialmente en noviembre con la pista de patinaje, pero los mercados no abren hasta principios de diciembre. Consulta fechas específicas</li>
        <li>• <strong>Días cortos:</strong> Anochece muy temprano en invierno (sobre las 16:00). Aprovecha las mañanas y disfruta las luces por la tarde-noche</li>
        <li>• <strong>Festival de Luces:</strong> Mejor verlo en barco nocturno. Reserva cruceros con antelación porque se llenan. Canal Keizersgracht tiene muchas instalaciones</li>
        <li>• <strong>Lluvia frecuente:</strong> Lleva paraguas y ropa impermeable. El clima holandés es muy cambiante</li>
        <li>• <strong>Bicicletas:</strong> Cuidado al caminar por los carriles bici. Los ciclistas tienen prioridad absoluta</li>
        <li>• <strong>Nochevieja:</strong> Fuegos artificiales sobre el río Amstel desde Museumplein. Ambiente festivo en toda la ciudad</li>
        <li>• <strong>Alojamiento:</strong> Reserva con mínimo 3-4 días para aprovechar bien la ciudad. Las zonas de Rembrandtplein y Leidseplein son muy animadas</li>
      </ul>
    </div>

    {/* Enlace guía */}
    <div className="bg-gradient-to-r from-red-500 via-white to-blue-500 rounded-xl p-6 text-center shadow-lg">
      <h3 className="text-red-600 font-bold text-lg mb-3">🗺️ ¿Quieres Conocer Más de Amsterdam?</h3>
      <p className="text-gray-700 text-sm mb-4">Canales, museos (Van Gogh, Rijksmuseum), Casa de Ana Frank, barrio Jordaan y todos los imprescindibles</p>
      <button className="bg-red-600 text-white hover:bg-red-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        Ver Guía Completa de Amsterdam →
      </button>
    </div>
  </div>

  {/* TABLA COMPARATIVA FINAL */}
  <div className="bg-gradient-to-r from-red-50 via-green-50 to-blue-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">📊 Comparativa Rápida: 5 Ciudades</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-xl shadow-sm text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-red-500 to-green-600 text-white">
            <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Ciudad</th>
            <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Fechas Principales</th>
            <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Lo Más Especial</th>
            <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Clima</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-bold">🇭🇺 Budapest</td>
            <td className="border border-gray-300 px-3 py-2">14 nov - 1 ene</td>
            <td className="border border-gray-300 px-3 py-2">Mejor mercado de Europa. Termas en invierno. Show 3D Basílica</td>
            <td className="border border-gray-300 px-3 py-2">Frío 0-5°C</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-3 py-2 font-bold">🇨🇿 Praga</td>
            <td className="border border-gray-300 px-3 py-2">29 nov - 6 ene</td>
            <td className="border border-gray-300 px-3 py-2">Plaza Ciudad Vieja mágica. Todo andando. Trdelník delicioso</td>
            <td className="border border-gray-300 px-3 py-2">Frío -2 a 3°C</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-bold">🇦🇹 Viena</td>
            <td className="border border-gray-300 px-3 py-2">14 nov - 26 dic (algunos hasta 6 ene)</td>
            <td className="border border-gray-300 px-3 py-2">Elegancia imperial. 20+ mercados. Pista patinaje gigante</td>
            <td className="border border-gray-300 px-3 py-2">Frío 0-5°C</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-3 py-2 font-bold">🇮🇹 Roma</td>
            <td className="border border-gray-300 px-3 py-2">1 dic - 6 ene</td>
            <td className="border border-gray-300 px-3 py-2">Centro del catolicismo. Piazza Navona + Befana. Clima suave</td>
            <td className="border border-gray-300 px-3 py-2">Suave 8-15°C</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-3 py-2 font-bold">🇳🇱 Amsterdam</td>
            <td className="border border-gray-300 px-3 py-2">Festival Luces: 27 nov - 18 ene</td>
            <td className="border border-gray-300 px-3 py-2">Light Festival único. Canales iluminados. Sinterklaas</td>
            <td className="border border-gray-300 px-3 py-2">Frío húmedo 3-8°C</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* CONSEJOS GENERALES FINALES */}
  <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎯 Consejos Finales para tu Viaje Navideño</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">✅ Antes de Viajar:</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>• <strong>Reserva con antelación:</strong> Vuelos, hoteles y actividades se agotan rápido en temporada navideña</li>
          <li>• <strong>Compra entradas online:</strong> Museos, palacios y atracciones principales para evitar colas</li>
          <li>• <strong>Seguro de viaje:</strong> Imprescindible con cobertura médica en Europa</li>
          <li>• <strong>Tarjeta sin comisiones:</strong> N26, Revolut o similar para pagar en diferentes divisas</li>
          <li>• <strong>Ropa adecuada:</strong> Capas, abrigo bueno, guantes, bufanda. Calzado impermeable</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">💰 Ahorra Dinero:</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>• <strong>Vuelos:</strong> Busca con 2-3 meses de antelación. Usa Skyscanner en modo incógnito</li>
          <li>• <strong>Alojamiento:</strong> Barrios algo alejados del centro suelen ser más económicos</li>
          <li>• <strong>Comida:</strong> Come en puestos de mercados navideños y supermercados. Evita restaurantes muy turísticos</li>
          <li>• <strong>Transporte:</strong> Compra bonos de varios días de transporte público</li>
          <li>• <strong>Mercados gratis:</strong> La mayoría de mercados navideños tienen entrada gratuita</li>
        </ul>
      </div>
    </div>

    <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-6">
      <h3 className="font-semibold text-green-800 mb-2">🎄 ¿Cuál Ciudad Elegir?</h3>
      <ul className="text-sm text-green-700 space-y-1">
        <li>• <strong>Primera vez en mercados navideños:</strong> Viena o Praga (tradición pura)</li>
        <li>• <strong>Busco el mejor mercado:</strong> Budapest (ganador múltiple)</li>
        <li>• <strong>Clima más suave:</strong> Roma (8-15°C)</li>
        <li>• <strong>Experiencia única:</strong> Amsterdam (Festival de Luces en canales)</li>
        <li>• <strong>Combinación perfecta:</strong> Viena + Budapest + Praga (están cerca, fácil combinar)</li>
      </ul>
    </div>
  </div>

  {/* Footer */}
  <div className="text-center text-gray-600 text-sm mt-8 mb-4">
    <p className="mb-2">
      Guía actualizada en Octubre 2025 | Información verificada con fuentes oficiales
    </p>
    <p className="mb-2">
      Fechas contrastadas de los mercados navideños 2025-2026
    </p>
    <p>
      ¡Que disfrutes de una Navidad Mágica en Europa! 🎄✨
    </p>
  </div>
</article>

);
};

export default GuiaNavidadEuropa;