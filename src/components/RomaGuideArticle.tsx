import React from 'react';
import { ArrowLeft, Share2, Clock, MapPin } from 'lucide-react';

interface RomaGuideArticleProps {
  onBack: () => void;
}

const RomaGuideArticle: React.FC<RomaGuideArticleProps> = ({ onBack }) => {

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
          src="https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg"
          alt="Coliseo Romano al atardecer con turistas"
          className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
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

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">✈️ Llegada y Conexiones desde el Aeropuerto</h2>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">🛬 Desde Aeropuerto de Fiumicino (FCO)</h3>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">🚄 Tren Leonardo Express - La Opción Más Rápida</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> 14-15 € por persona</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Horario:</strong> 06:08 - 23:23</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Duración:</strong> 32 minutos directo</p>
                <p className="text-sm text-gray-700"><strong>Frecuencia:</strong> Cada 15-30 minutos</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Destino:</strong> Roma Termini (centro ciudad)</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Compra:</strong> Máquinas, online o quioscos</p>
                <p className="text-sm text-gray-700 mb-2"><strong>Comodidad:</strong> Sin paradas intermedias</p>
                <p className="text-sm text-gray-700"><strong>Importante:</strong> Validar billete antes de subir</p>
              </div>
            </div>
            <div className="bg-green-100 rounded-lg p-3 mt-4">
              <p className="text-green-800 text-sm font-medium">💡 La opción más eficiente y rápida. Evitas el tráfico romano y llegas directo al centro en media hora.</p>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">🚆 Tren Regional FL1 - Opción Económica</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-700 mb-1"><strong>Precio:</strong> 8 € por trayecto</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Duración:</strong> 30-48 minutos (según destino)</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Frecuencia:</strong> Cada hora aproximadamente</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-1"><strong>Paradas:</strong> Trastevere, Ostiense, Tiburtina</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Ideal para:</strong> Hoteles cerca Trastevere</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Horario:</strong> 06:00-23:30</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">🚌 Autobuses - Alternativa Económica</h4>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-sm font-semibold text-gray-900 mb-2">Terravision Bus Shuttle</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  <div>
                    <p><strong>Precio:</strong> 6€ online / 7€ a bordo</p>
                    <p><strong>Duración:</strong> 55 minutos (según tráfico)</p>
                    <p><strong>Horario:</strong> 05:35 - 23:00</p>
                  </div>
                  <div>
                    <p><strong>Destino:</strong> Roma Termini</p>
                    <p><strong>Frecuencia:</strong> Cada 30-45 minutos</p>
                    <p><strong>Parada:</strong> Terminal 3 (bien señalizado)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-4">
            <h4 className="font-bold text-gray-900 mb-3">🚕 Taxi / Traslado Privado - Máximo Confort</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-700 mb-1"><strong>Taxi tarifa fija:</strong> 48-50 € (hasta 4 pasajeros)</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Traslado privado:</strong> 60-70 € (hasta 3 personas)</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Duración:</strong> 40 min (según tráfico)</p>
              </div>
              <div>
                <p className="text-sm text-gray-700 mb-1"><strong>Ideal para:</strong> Grupos, familias, equipaje</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Ventajas:</strong> Puerta a puerta sin paradas</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Reserva:</strong> Online con antelación recomendado</p>
              </div>
            </div>
          </div>

          <div className="bg-red-100 border border-red-300 rounded-lg p-3">
            <p className="font-medium text-red-800 mb-1">🎉 JUBILEO 2025 - Año Santo</p>
            <p className="text-red-700 text-xs">
              Roma está celebrando el Año Jubilar 2025 con gran afluencia de peregrinos. Reserva transporte, alojamiento y entradas con MÁXIMA antelación. Habrá más turistas de lo habitual durante todo el año.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-amber-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
        </div>
      </div>

      <div className="text-center text-gray-600 text-sm mt-8">
        <p className="mb-2">
          Guía actualizada en Octubre 2025 | Información verificada y precios actuales
        </p>
        <p className="mb-2">
          Precios Coliseo: 18-24€ | Vaticano: 25€ | Tren aeropuerto: 14-15€
        </p>
        <p>
          ¡Que disfrutes Roma al máximo! 🇮🇹
        </p>
      </div>
    </article>
  );
};

export default RomaGuideArticle;
