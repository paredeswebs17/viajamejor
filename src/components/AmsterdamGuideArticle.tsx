import React from 'react';
import { ArrowLeft, Share2, Clock, MapPin } from 'lucide-react';

interface AmsterdamGuideArticleProps {
  onBack: () => void;
}

const AmsterdamGuideArticle: React.FC<AmsterdamGuideArticleProps> = ({ onBack }) => {
  return (
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
          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
            Guía Holandesa
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Ámsterdam en 3 Días: Canales, Arte y Cultura Holandesa
        </h1>

        <div className="flex flex-col gap-4 mb-6 items-start">
          <div className="flex flex-wrap items-center gap-2 text-gray-600 text-xs">
            <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
              <Clock className="h-3 w-3 mr-1" />
              16 min
            </span>
            <span className="flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-sm">
              <MapPin className="h-3 w-3 mr-1" />
              Ámsterdam
            </span>
          </div>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Ámsterdam en 3 Días: Guía Completa con Canales, Museos y Cultura',
                  text: 'Descubre la Venecia del Norte con nuestro itinerario optimizado',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('Enlace copiado al portapapeles');
                }).catch(() => {
                  window.open(`https://twitter.com/intent/tweet?text=Ámsterdam en 3 Días: Guía Completa&url=${encodeURIComponent(window.location.href)}`, '_blank');
                });
              }
            }}
            className="inline-flex items-center text-gray-600 hover:text-orange-600 bg-gray-100 hover:bg-orange-50 px-3 py-2 rounded-full transition-all duration-200 text-xs border border-gray-200 hover:border-orange-300 self-start shadow-sm hover:shadow-md"
          >
            <Share2 className="h-3 w-3 mr-1" />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      <div className="mb-8">
        <img
          src="https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg"
          alt="Canales de Ámsterdam con casas tradicionales holandesas y bicicletas"
          className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Itinerario Holandés</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">JORNADA</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EXPERIENCIAS HOLANDESAS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 1</td>
                <td className="border border-gray-300 px-4 py-3">Estación Central + Plaza Dam + Canales + Mercado de las Flores + Casa de Ana Frank + 9 Calles + Mirador A'Dam</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 2</td>
                <td className="border border-gray-300 px-4 py-3">Excursión a Zaanse Schans, Edam, Volendam y Marken + Tour en barco por canales + Rembrandtplein</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-bold">DÍA 3</td>
                <td className="border border-gray-300 px-4 py-3">Rijksmuseum + Museo Van Gogh + Heineken Experience + Barrio Rojo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center text-gray-600 text-sm mt-8">
        <p className="mb-2">
          Guía actualizada en Septiembre 2025 | Información verificada y precios actuales
        </p>
        <p>
          ¡Que disfrutes Ámsterdam al máximo!
        </p>
      </div>
    </article>
  );
};

export default AmsterdamGuideArticle;
