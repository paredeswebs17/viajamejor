import React from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ExternalLink } from 'lucide-react';

interface DemoGuideArticleProps {
  onBack: () => void;
}

const DemoGuideArticle: React.FC<DemoGuideArticleProps> = ({ onBack }) => {

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
          src="https://images.pexels.com/photos/6199223/pexels-photo-6199223.jpeg"
          alt="Coliseo Romano al atardecer con turistas"
          className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* 1. INTRODUCCIÓN */}
      <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">¿Por qué visitar Roma?</h2>
        <p className="text-gray-700 mb-3">
          Roma es una ciudad única donde cada esquina cuenta una historia de más de 2.500 años. Es el museo al aire libre más grande del mundo,
          donde la antigua Roma imperial convive con el arte renacentista, el barroco y la vida moderna italiana. Caminar por Roma es viajar
          en el tiempo: desde el Coliseo y el Foro Romano hasta la Capilla Sixtina de Miguel Ángel, pasando por la Fontana di Trevi y las
          trattorias de Trastevere.
        </p>
        <p className="text-gray-700 mb-3">
          Esta guía está diseñada para aprovechar al máximo <strong>3 días en Roma</strong>, con un itinerario optimizado que te lleva por los
          imprescindibles sin agobios. Visitarás el centro histórico, la Roma antigua del Coliseo y los Foros, y el Vaticano con sus tesoros artísticos.
          Todo con información práctica actualizada para 2025, incluyendo precios reales, horarios, consejos de local y enlaces directos a tours y entradas.
        </p>
        <p className="text-gray-700">
          Tanto si es tu primera vez como si ya conoces Roma, esta guía te ayudará a descubrir la <em>Città Eterna</em> como se merece:
          con historia, arte, gastronomía y ese <em>dolce far niente</em> italiano que hace de Roma una experiencia inolvidable.
        </p>
      </div>

      {/* 2. INFORMACIÓN PRÁCTICA (TODO JUNTO) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">📋 Información Práctica - Todo lo que Necesitas Saber</h2>

        {/* Mejor Época */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-3"></div>
            🌤️ Mejor Época para Visitar Roma
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-3">🌸 Primavera (Marzo-Mayo)</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Lo mejor:</strong> Clima agradable, flores, menos calor</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Temperatura:</strong> 12-22°C</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Lluvia:</strong> Moderada en abril</p>
              <p className="text-sm text-gray-700"><strong>Época muy popular</strong> - Reserva con mucha antelación</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-3">☀️ Verano (Junio-Agosto)</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Lo mejor:</strong> Días largos, terrazas, eventos</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Temperatura:</strong> 20-35°C (¡muy caluroso!)</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Lluvia:</strong> Poca</p>
              <p className="text-sm text-gray-700"><strong>Agosto sofocante</strong> - Muchos romanos se van de vacaciones</p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-3">🍂 Otoño (Septiembre-Noviembre)</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Lo mejor:</strong> Menos turistas, temperaturas suaves, precios moderados</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Temperatura:</strong> 12-24°C</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Lluvia:</strong> Aumenta en octubre/noviembre</p>
              <p className="text-sm text-gray-700"><strong>Septiembre/octubre ideal</strong> - Mejor clima y menos gente</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-3">❄️ Invierno (Diciembre-Febrero)</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Lo mejor:</strong> Pocos turistas, Navidad mágica, precios bajos</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Temperatura:</strong> 3-15°C</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Lluvia:</strong> Frecuente</p>
              <p className="text-sm text-gray-700"><strong>Diciembre encantador</strong> - Belenes, luces navideñas</p>
            </div>
          </div>

          <div className="bg-red-100 border border-red-300 rounded-lg p-3">
            <p className="font-medium text-red-800 mb-1">🎉 JUBILEO 2025 - Año Santo</p>
            <p className="text-red-700 text-xs">
              Durante todo 2025, Roma estará más concurrida que nunca por peregrinos del Año Jubilar.
              Reserva TODO con máxima antelación: hoteles, vuelos, entradas a museos y restaurantes.
              Los precios pueden ser más altos de lo habitual.
            </p>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

        {/* Aeropuerto */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3"></div>
            ✈️ Cómo Llegar del Aeropuerto al Centro
          </h3>

          <h4 className="font-bold text-gray-900 mb-4">🛬 Desde Aeropuerto de Fiumicino (FCO)</h4>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
            <h5 className="font-bold text-gray-900 mb-3">🚄 Tren Leonardo Express - La Opción Más Rápida</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> 17 € por persona</p>
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
            <h5 className="font-bold text-gray-900 mb-3">🚆 Tren Regional FL1 - Opción Económica</h5>
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
            <h5 className="font-bold text-gray-900 mb-3">🚌 Autobuses - Alternativa Económica</h5>
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
            <h5 className="font-bold text-gray-900 mb-3">🚕 Traslado Privado - Máximo Confort</h5>
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
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600 text-sm mt-8">
        <p className="mb-2">
          Guía Demo | Ejemplo de formato y estructura
        </p>
        <p>
          ¡Que disfrutes Roma al máximo! 🇮🇹
        </p>
      </div>
    </article>
  );
};

export default DemoGuideArticle;
