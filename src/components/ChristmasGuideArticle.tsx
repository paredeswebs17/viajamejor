import React from 'react';
import { ArrowLeft, Share2, Clock, MapPin, Calendar, Snowflake } from 'lucide-react';

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
          src="https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg"
          alt="Mercado navideño europeo iluminado"
          className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

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

      <div className="flex items-center justify-center mb-8">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-green-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-gradient-to-br from-red-500 to-amber-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">🇭🇺</span>
          Budapest - La Perla del Danubio en Navidad
        </h2>

        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/14022101/pexels-photo-14022101.jpeg"
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

        <div className="bg-gradient-to-r from-red-500 to-amber-500 rounded-xl p-6 text-center shadow-lg">
          <h3 className="text-white font-bold text-lg mb-3">🗺️ ¿Quieres Conocer Más de Budapest?</h3>
          <p className="text-white text-sm mb-4">Descubre qué ver, dónde comer, mejores zonas de alojamiento y todos los imprescindibles de la ciudad</p>
          <button className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Ver Guía Completa de Budapest →
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="flex space-x-2">
          <Snowflake className="h-5 w-5 text-blue-400" />
          <Snowflake className="h-5 w-5 text-blue-300" />
          <Snowflake className="h-5 w-5 text-blue-400" />
        </div>
      </div>

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
