import React, { useState } from 'react';
import { ArrowLeft, Share2, Clock, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import StickyTableOfContents from './StickyTableOfContents';

interface AmsterdamGuideArticleProps {
onBack: () => void;
}

const AmsterdamGuideArticle: React.FC<AmsterdamGuideArticleProps> = ({ onBack }) => {
  const [expandedAirport, setExpandedAirport] = useState<string | null>(null);
  const [expandedZone, setExpandedZone] = useState<string | null>(null);

  const toggleAirport = (airportId: string) => {
    setExpandedAirport(expandedAirport === airportId ? null : airportId);
  };

  const toggleZone = (zoneId: string) => {
    setExpandedZone(expandedZone === zoneId ? null : zoneId);
  };

  const sections = [
    { id: 'por-que-visitar', title: '¿Por qué visitar Ámsterdam?' },
    { id: 'llegada-aeropuerto', title: 'Llegada y Conexiones' },
    { id: 'donde-dormir', title: 'Dónde Alojarse' },
    { id: 'itinerario', title: 'Itinerario Holandés' },
    { id: 'dia-1', title: 'Día 1: Entrada a la Venecia del Norte', level: 2 },
    { id: 'dia-2', title: 'Día 2: Pueblos con Encanto Holandés + Canales', level: 2 },
    { id: 'dia-3', title: 'Día 3: Arte Holandés, Cerveza y Vida Nocturna', level: 2 },
    { id: 'mas-lugares', title: 'Más Lugares en Ámsterdam' },
    { id: 'recomendaciones', title: 'Tarjeta y Seguro de Viaje' },
    { id: 'gastronomia', title: 'Gastronomía' },
    { id: 'transporte', title: 'Sistema de Transporte' },
    { id: 'tarjetas-turisticas', title: 'Tarjetas Turísticas' },
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
      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
        Guía Completa
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
      src="https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg"
      alt="Canales de Ámsterdam con casas tradicionales holandesas y bicicletas"
      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
    />
  </div>

  {/* SECCIÓN: ¿POR QUÉ VISITAR ÁMSTERDAM? */}
  <div id="por-que-visitar" className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">¿Por qué visitar Ámsterdam?</h2>

    <div className="space-y-4 text-gray-700">
      <p className="text-base leading-relaxed">
        Imagina una ciudad donde más de 100 kilómetros de canales se entrelazan formando un laberinto acuático del siglo XVII, donde hay más bicicletas que habitantes, y donde las casas inclinadas del Siglo de Oro cuentan historias de comerciantes y artistas. Ámsterdam es todo esto y mucho más: museos de talla mundial, una cultura liberal única y una atmósfera cosmopolita que enamora desde el primer momento.
      </p>

      <p className="text-base leading-relaxed">
        Pero Ámsterdam va más allá de sus icónicos canales y su fama internacional. Aquí disfrutarás de un stroopwafel recién hecho en el mercado de las flores mientras observas las coloridas casas flotantes. Recorrerás en bicicleta calles empedradas como un auténtico local, contemplarás obras maestras de Van Gogh y Rembrandt, y te perderás en las nueve callejuelas del barrio Jordaan descubriendo cafés acogedores y boutiques vintage que pocos turistas conocen.
      </p>

      <p className="text-base leading-relaxed font-medium text-gray-900">
        Una ciudad compacta y perfecta para explorar a pie o en bici, donde cada rincón esconde una sorpresa.
      </p>
    </div>
  </div>


  <div id="llegada-aeropuerto" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🚗 Llegada y Conexiones Eficientes</h2>

    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
      <p className="text-sm text-blue-900">
        <strong>Haz clic en el aeropuerto de llegada</strong> para ver todas las opciones de transporte disponibles con precios actualizados.
      </p>
    </div>

    <button
      onClick={() => toggleAirport('schiphol')}
      className="w-full bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">✈️</span>
        <span className="font-bold text-lg">Aeropuerto de Schiphol (AMS)</span>
      </div>
      {expandedAirport === 'schiphol' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
    </button>

    {expandedAirport === 'schiphol' && (
      <div className="mb-8 animate-fadeIn">
        <h3 className="text-lg font-bold text-gray-900 mb-4 mt-4">✈️ Desde Aeropuerto de Schiphol (AMS)</h3>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
        <h4 className="font-bold text-gray-900 mb-3">🚄 Tren Directo a Estación Central - La Opción Más Rápida</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-700 mb-2"><strong>Precio:</strong> desde 6 €</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Horario:</strong> Cada 10-15 minutos</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Duración:</strong> 16-18 minutos sin paradas</p>
            <p className="text-sm text-gray-700"><strong>Frecuencia:</strong> Servicio continuo todo el día</p>
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-2"><strong>Destino:</strong> Amsterdam Centraal (centro ciudad)</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Compra:</strong> Máquinas amarillas o online</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Comodidad:</strong> Directo sin trasbordos</p>
            <p className="text-sm text-gray-700"><strong>Equipaje:</strong> Espacio amplio para maletas</p>
          </div>
        </div>
        <div className="bg-green-100 rounded-lg p-3 mt-4">
          <p className="text-green-800 text-sm font-medium">💡 La opción más eficiente para llegar al centro. Los trenes salen cada 10-15 minutos y son muy puntuales.</p>
        </div>
        <div className="mt-4">
          <a
            href="https://gyg.me/a32mXL4w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            🚄 Comprar billetes de tren
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
      
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
        <h4 className="font-bold text-gray-900 mb-3">🚌 Amsterdam Airport Express Bus 397</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-700 mb-1"><strong>Precio:</strong> desde 6 €</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Duración:</strong> 30-40 minutos</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Frecuencia:</strong> Cada 10-15 minutos</p>
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-1"><strong>Paradas:</strong> Museumplein, Leidseplein</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Ideal para:</strong> Hoteles cerca de museos</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Horario:</strong> 05:00-00:30</p>
          </div>
        </div>
        <div className="mt-4">
          <a
            href="https://gyg.me/nHnMYLIe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            🚌 Comprar billetes de bus
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
        <h4 className="font-bold text-gray-900 mb-3">🎫 Amsterdam Travel Ticket - Para Turistas</h4>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div>
                <p><strong>1 día:</strong> 18 € (transporte ilimitado)</p>
                <p><strong>2 días:</strong> 24 € (muy popular)</p>
                <p><strong>3 días:</strong> 30 € (ideal para este planning)</p>
              </div>
              <div>
                <p><strong>Incluye:</strong> Tren aeropuerto + todo transporte</p>
                <p><strong>Validez:</strong> Desde medianoche a 04:00</p>
                <p><strong>Ideal:</strong> Si usas mucho transporte público</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <a
            href="https://gyg.me/bftVdMgA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            🎫 Comprar Amsterdam Travel Ticket
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
        <h4 className="font-bold text-gray-900 mb-3">🚕 Traslado Privado - Máximo Confort</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-700 mb-1"><strong>Precio:</strong> desde 56 €</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Duración:</strong> 20-30 min (según tráfico)</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Ventajas:</strong> Puerta a puerta</p>
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-1"><strong>Ideal para:</strong> Grupos, familias, equipaje</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Reserva:</strong> Online con antelación</p>
            <p className="text-sm text-gray-700 mb-1"><strong>Incluye:</strong> Espera + ayuda equipaje</p>
          </div>
        </div>
        <div className="mt-4">
          <a
            href="https://gyg.me/5ZYfAmX8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            🚕 Reservar traslado privado
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
      </div>
    )}
  </div>

  {/* SECCIÓN: ALOJAMIENTO */}
  <div id="donde-dormir" className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 flex items-center">
      🏨 Dónde Alojarse en Ámsterdam
    </h2>
    <p className="text-gray-600 mb-6">Las mejores zonas y hoteles recomendados para tu estancia</p>

    <div className="space-y-6">
      {/* Centro Histórico */}
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
            <span className="text-2xl">🏛️</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Centro Histórico (Grachtengordel)</h3>
            <p className="text-sm text-gray-600">La ubicación perfecta junto a los canales</p>
          </div>
        </div>

        <button
          onClick={() => toggleZone('centro-historico')}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏨</span>
            <div className="text-left">
              <span className="font-bold text-lg block">
                {expandedZone === 'centro-historico' ? 'Ocultar hoteles' : 'Ver 3 hoteles recomendados'}
              </span>
              <span className="text-sm text-orange-100 block">
                Hoteles en el centro de Ámsterdam
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
              <div className="bg-white rounded-2xl p-5 border-2 border-orange-200 flex flex-col shadow-lg hover:shadow-xl hover:border-orange-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Monet Garden Hotel Amsterdam</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel boutique junto a los canales con habitaciones modernas con aire acondicionado, WiFi gratuita y vistas al canal y jardín. TV de pantalla plana, cafetera Nespresso y albornoces. Centro de fitness gratuito y bar con cervezas locales.</p>
                  <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-orange-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Rembrandtplein (800 m), Teatro Carré (900 m), Ballet y Ópera Nacional (400 m), aeropuerto de Schiphol (12 km).
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/UTD9cvgv"
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
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Ambassade Hotel</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel con servicio de conserjería, restaurante y bar. Habitaciones con aire acondicionado, TV de pantalla plana con canales vía satélite, caja fuerte y baño privado. Desayuno buffet, continental o americano. Alquiler de bicicletas disponible.</p>
                  <div className="bg-cyan-50 border-l-4 border-cyan-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-cyan-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Casa de Ana Frank (9 min a pie), Plaza Rembrandtplein, Rijksmuseum, Plaza Leidseplein, zona ideal para ciclismo.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/lJeCjGwX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
                  >
                    <span className="mr-2">Ver disponibilidad</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border-2 border-indigo-200 flex flex-col shadow-lg hover:shadow-xl hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Tourist Inn Hotel Amsterdam</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel bien ubicado con salón de uso común, WiFi gratuita y bar. Habitaciones con aire acondicionado, TV de pantalla plana con canales por cable. Desayuno buffet o continental. Personal que habla árabe, alemán, inglés y español.</p>
                  <div className="bg-indigo-50 border-l-4 border-indigo-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-indigo-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Casa de Ana Frank (8 min a pie), Estación Central de Ámsterdam, Ballet y Ópera Nacional, Casa museo de Rembrandt.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/gB3tgW13"
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
                <strong>✅ Por qué elegir esta zona:</strong> Ubicación ideal entre canales, cerca de la Casa de Ana Frank, el Jordaan y las 9 calles. Todo accesible a pie, restaurantes y cafés en cada esquina, zona segura y pintoresca.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Museumplein */}
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
            <span className="text-2xl">🎨</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">Museumplein (Zona de Museos)</h3>
            <p className="text-sm text-gray-600">Ideal para amantes del arte y la cultura</p>
          </div>
        </div>

        <button
          onClick={() => toggleZone('museumplein')}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-xl p-4 mb-3 flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏨</span>
            <div className="text-left">
              <span className="font-bold text-lg block">
                {expandedZone === 'museumplein' ? 'Ocultar hoteles' : 'Ver 3 hoteles recomendados'}
              </span>
              <span className="text-sm text-blue-100 block">
                Hoteles en la zona de museos
              </span>
            </div>
          </div>
          {expandedZone === 'museumplein' ?
            <ChevronUp className="w-6 h-6 group-hover:transform group-hover:-translate-y-1 transition-transform" /> :
            <ChevronDown className="w-6 h-6 group-hover:transform group-hover:translate-y-1 transition-transform" />
          }
        </button>

        {expandedZone === 'museumplein' && (
          <div className="animate-fadeIn border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
              <div className="bg-white rounded-2xl p-5 border-2 border-blue-200 flex flex-col shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Catalonia Vondel Amsterdam</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel boutique 4 estrellas en el centro. Habitaciones con baño privado, minibar y set de té/café. Restaurante brasserie JOOST con platos internacionales y especialidades holandesas. WiFi gratuito y alquiler de bicicletas disponible.</p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-blue-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Rijksmuseum (500 m), parque Vondelpark (300 m), plaza Leidseplein (300 m), calle comercial P.C. Hooftstaat (5 min a pie).
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/NoRMV4F4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
                  >
                    <span className="mr-2">Ver disponibilidad</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border-2 border-emerald-200 flex flex-col shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">NH Amsterdam Leidseplein</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel elegante con habitaciones con aire acondicionado, set de té/café gratis, minibar, TV vía satélite y cama extralarga. Bar & Kitchen Copper para disfrutar. WiFi gratuita en todas las instalaciones.</p>
                  <div className="bg-emerald-50 border-l-4 border-emerald-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Plaza Leidseplein (250 m), Stadsschouwburg (3 min a pie), plaza de los Museos (5 min a pie), P.C. Hooftstraat, tranvía a Estación Central.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/iTSAwLd4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#003580] hover:bg-[#00254d] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base w-full group"
                  >
                    <span className="mr-2">Ver disponibilidad</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border-2 border-purple-200 flex flex-col shadow-lg hover:shadow-xl hover:border-purple-300 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">🏨</span>
                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">⭐⭐⭐⭐</span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg leading-tight">Huygens Place Amsterdam</h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">Hotel con jardín y salón de uso común. Habitaciones familiares con aire acondicionado, TV de pantalla plana, nevera, cafetera y baño privado con secador de pelo. Desayuno buffet, continental o inglés completo. Terraza solárium disponible.</p>
                  <div className="bg-purple-50 border-l-4 border-purple-400 rounded-r-lg p-3 mb-4">
                    <p className="text-xs text-purple-800 leading-relaxed">
                      <span className="text-base mr-1">📍</span>
                      <strong>Qué hay cerca:</strong> Museo Van Gogh (8 min a pie), Museo Moco, Rijksmuseum, Heineken Experience, aeropuerto de Schiphol (13 km).
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://booking.tpk.lv/oGcSGvNP"
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

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <strong>✅ Por qué elegir esta zona:</strong> Acceso directo al Rijksmuseum, Van Gogh y Stedelijk. Vondelpark cerca para paseos, zona tranquila, tram directo al centro, ambiente residencial elegante.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
    </div>
  </div>

  <div id="itinerario" className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 sm:p-8 mb-8 shadow-md">
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

  {/* DÍA 1 */}
  <div id="dia-1" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-orange-500 to-red-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">1</span>
      DÍA 1: Entrada a la Venecia del Norte
    </h2>

    {/* Estación Central y Plaza Dam */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-orange-400 rounded-full mr-3"></div>
        Despertar Holandés - Tour (9:00h)
      </h3>
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Estación Central y Plaza Dam</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/12705132/pexels-photo-12705132.jpeg"
            alt="Estación Central de Ámsterdam con su arquitectura renacentista holandesa"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Comenzamos en la Estación Central, un edificio del mismo arquitecto que diseñó el Rijksmuseum (1882). 
          La plaza Dam es el epicentro de Ámsterdam, donde se encuentra el Palacio Real (1808), la Iglesia Nueva y el Monumento Nacional.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🏛️ Plaza Dam - Corazón de la Ciudad:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Palacio Real: Visitable por dentro (12 €)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Iglesia Nueva: Exposiciones y eventos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Monumento Nacional: Conmemoración WWII</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Madame Tussauds: Museo de cera</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">📸 Foto Icónica en Damrak:</h5>
            <p className="text-sm text-gray-700 mb-2">
              Antes del tour, ve a Damrak Waterkant para conseguir una de las fotos más bonitas de Ámsterdam: 
              los canales con las casas tradicionales de fondo. ¡Es un spot fotogénico imprescindible!
            </p>
          </div>
        </div>

        <div className="bg-white border-l-4 border-orange-500 rounded-lg p-4">
          <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
            <span className="mr-2">🎯</span>
            Free Tour de Ámsterdam en Español
          </h5>
          <p className="text-sm text-gray-700 mb-3">
            Un viaje cautivador a través de la capital holandesa. Desde el Palacio Real, conoce la transformación de Ámsterdam de pueblo pesquero a centro del comercio marítimo. Pasea por sus canales, maravíllate con su arquitectura y descubre joyas ocultas.
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-4 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Duración: 2h 30min</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Inicio: Plaza Dam</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Incluye: Palacio Real, Canales históricos, arquitectura holandesa...</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Pago: En forma de propinas</li>
          </ul>
          <a href="https://www.freetour.com/es/amsterdam/free-tour-amsterdam-en-espanol?referralID=rFW5gyO0D7w7JOqo&campaign=CentroAmsterdam"
             target="_blank"
             rel="noopener noreferrer"
             className="btn-hotel">
            <span>🚶 Reservar free tour en español</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>

    {/* Canales y Mercado de las Flores */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-3"></div>
        Canales y Mercado de las Flores (11:30h)
      </h3>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Canales Históricos y el Mercado Flotante</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/17345883/pexels-photo-17345883.jpeg"
            alt="Mercado de las Flores de Ámsterdam con tulipanes de colores"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Pasea por la calle Damstraat hasta llegar a los canales, Patrimonio de la Humanidad UNESCO desde 2010. 
          El Mercado de las Flores (Bloemenmarkt) es el mercado flotante más grande del mundo, con tulipanes, bulbos y souvenirs.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
          <h5 className="font-semibold text-gray-900 mb-3">🌷 Mercado de las Flores - Bloemenmarkt:</h5>
          <div className="space-y-2 text-sm text-gray-700">
            <p>Fundado en 1862, es el único mercado de flores flotante que queda en el mundo. Los vendedores venden sus productos desde barcazas permanentemente amarradas.</p>
            <ul className="space-y-1">
              <li>• <strong>Tulipanes frescos:</strong> De todos los colores imaginables</li>
              <li>• <strong>Bulbos:</strong> Perfectos como souvenir (certificados para exportar)</li>
              <li>• <strong>Semillas:</strong> Variedades holandesas únicas</li>
              <li>• <strong>Souvenirs:</strong> Zuecos de madera y productos típicos</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <h5 className="font-semibold text-gray-900 mb-2">🧇 Prueba los Stroopwafels:</h5>
          <p className="text-sm text-gray-700">
            El dulce típico holandés que no puedes perderte. En <strong>Van Wonderen Stroopwafel</strong> los preparan recién hechos 
            con todo tipo de toppings: chocolate, caramelo, frutas... ¡Están buenísimos y calentitos!
          </p>
        </div>
      </div>
    </div>

    {/* Casa de Ana Frank */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
        Casa de Ana Frank - Historia Impactante (15:00h)
      </h3>
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Casa Museo de Ana Frank - Patrimonio de la Humanidad</h4>
        <p className="text-gray-700 mb-4">
          Visita imprescindible en Ámsterdam. Aquí Ana Frank y su familia se ocultaron durante más de 2 años (1942-1944) de la invasión nazi. 
          El museo conserva el escondite tras la estantería giratoria y expone su famoso diario original.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎫 Información de Visita:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Precio: 16 € adultos / 7 € (10-17 años)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Duración: 60-75 minutos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Audioguía: Incluida y gratuita (9 idiomas)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Reserva: OBLIGATORIA con mucha antelación</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">⏰ Sistema de Reservas:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Entradas: Cada martes a las 10:00h CET</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Para visita: 6 semanas después</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Se agotan: En pocas horas (¡muy demandado!)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Web oficial: annefrank.org</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
          <p className="font-medium text-red-800 mb-1">🚨 IMPORTANTE - Compra con Antelación</p>
          <p className="text-red-700 text-xs mb-3">
            Las entradas se agotan rapidísimo. Debes reservar EXACTAMENTE 6 semanas antes de tu visita,
            los martes a las 10:00h (hora de Ámsterdam). Pon alarma y prepara tu tarjeta de crédito. ¡NO se venden entradas en taquilla!
          </p>
          <a href="https://www.annefrank.org/es/museo/entradas/" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🏠 Reservar Casa de Ana Frank (Web Oficial)</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>

    {/* 9 Calles y Mirador A'Dam */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
        Las 9 Calles + Mirador A'Dam (17:00h)
      </h3>
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Shopping en las 9 Straatjes y Atardecer con Vistas</h4>
         <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/2366108/pexels-photo-2366108.jpeg"
            alt="Las 9 calles de Straatjes"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Las "9 Straatjes" (9 calles) son un barrio pintoresco con boutiques vintage, galerías de arte, cafés acogedores y tiendas únicas. 
          Perfecto para pasear y comprar souvenirs especiales. Después, ferry gratuito al Mirador A'Dam.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🛍️ Las 9 Calles (De 9 Straatjes):</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Boutiques de moda vintage únicas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Galerías de arte local</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Cafés y pastelerías encantadoras</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Tiendas de diseño holandés</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🌅 Mirador A'Dam Tower:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Precio: 20€ (compra online)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Altura: 100 metros de altura</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Columpio: El más alto de Europa</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Ferry: Gratis desde Estación Central</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <p className="text-xs text-green-600 mb-3">💡 Tip: El atardecer desde el Mirador A'Dam es espectacular. Llega 30 minutos antes del sunset para conseguir el mejor sitio.</p>
          <a href="https://gyg.me/5kVkwY4g" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🌅 Entradas Mirador A'Dam Tower</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
    </div>
  </div>

  {/* DÍA 2 */}
  <div id="dia-2" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">2</span>
      DÍA 2: Pueblos con Encanto Holandés + Canales
    </h2>

    {/* Excursión a Pueblos */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
        Excursión a Pueblos Tradicionales (9:00h-16:00h)
      </h3>
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Zaanse Schans, Edam, Volendam y Marken</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/13059436/pexels-photo-13059436.jpeg"
            alt="Molinos de viento tradicionales en Zaanse Schans"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Excursión imprescindible para ver la Holanda auténtica: molinos de viento, casas de madera de colores, 
          fabricación de quesos tradicionales y zuecos. Una experiencia que te transporta al siglo XVII.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🏘️ Pueblos que Visitarás:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Zaanse Schans: Molinos de viento históricos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Edam: Famoso por su queso redondo</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Volendam: Puerto pesquero tradicional</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Marken: Isla con casas de madera pintadas</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎯 Experiencias Incluidas:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Demostración fabricación de quesos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Taller de zuecos de madera (klompen)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Visita interior de molinos funcionando</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Paisajes fotogénicos holandeses</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
          <h5 className="font-semibold text-yellow-800 mb-2">🚌 Opciones para hacer la Excursión:</h5>
          <div className="space-y-2 text-sm text-gray-700 mb-3">
            <p><strong>Tour guiado en español:</strong> La opción más cómoda y completa (34-50€). Incluye transporte, guía experto y todas las visitas.</p>
            <p><strong>Por libre en autobús:</strong> Buses desde Estación Noord. Compra Amsterdam & Region Travel Ticket (día completo ~18 €).</p>
            <p><strong>Coche de alquiler:</strong> Máxima flexibilidad pero parking puede ser complicado en algunos pueblos.</p>
          </div>
          <a href="https://gyg.me/k0fpVtxB" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🏘️ Tour guiado Zaanse Schans + Pueblos</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>

    {/* Paseo en Barco */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full mr-3"></div>
        Paseo en Barco por los Canales (17:00h)
      </h3>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Tour en Barco por los Canales UNESCO</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/3884476/pexels-photo-3884476.jpeg"
            alt="Paseo en barco por los canales de Ámsterdam"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Ver Ámsterdam desde sus canales es una experiencia única. Los cruceros pasan bajo más de 1.500 puentes 
          y muestran las fachadas históricas que hacen de Ámsterdam la "Venecia del Norte".
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">⛵ Información del Tour:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Precio: 15-18 € por persona</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Duración: 60-75 minutos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Salida: Cerca Estación Central</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Audioguía: En 19 idiomas incluido español</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🌟 Qué Verás:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Casas flotantes históricas (houseboats)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Puentes del Siglo de Oro (s. XVII)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Arquitectura tradicional holandesa</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Siete puentes en una vista (Reguliersgracht)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <h5 className="font-semibold text-gray-900 mb-2">🕯️ Opción Romántica:</h5>
          <p className="text-sm text-gray-700 mb-3">
            <strong>Crucero a la luz de las velas:</strong> Por la noche, con velas, vino y quesos holandeses.
            Una experiencia mágica para parejas, selecciona la opción que quieres con o sin aperitivos (desde 20 € por persona).
          </p>
          <div className="flex flex-wrap gap-2">
            <a href="https://gyg.me/LFQhpJql" target="_blank" rel="noopener noreferrer"
               className="btn-hotel">
              <span>⛵ Crucero Clásico por Canales</span>
              <ExternalLink className="external-icon" />
            </a>
            <a href="https://gyg.me/TLcpWrxH" target="_blank" rel="noopener noreferrer"
               className="btn-hotel">
              <span>🕯️ Crucero Romántico con Vino</span>
              <ExternalLink className="external-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Rembrandtplein */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
        Plaza Rembrandt y Puente Magere Brug (19:30h)
      </h3>
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Rembrandtplein - Vida Nocturna de Ámsterdam</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/34217700/pexels-photo-34217700.jpeg"
            alt="Puente Magere Brug"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          La plaza más animada de Ámsterdam. Repleta de terrazas, restaurantes, coffeeshops y bares. 
          Perfecta para cenar y tomar algo mientras ves el ambiente nocturno holandés. Cerca está el famoso puente Magere Brug iluminado.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎭 Plaza Rembrandt:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Estatua de Rembrandt y "La Ronda de Noche" en 3D</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Decenas de terrazas y restaurantes</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ambiente nocturno muy animado</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Música en vivo frecuente</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🌉 Puente Magere Brug:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Puente levadizo de madera blanca (1691)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Iluminación especial por la noche</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Uno de los puentes más fotografiados</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>A 5 minutos andando de Rembrandtplein</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Separador decorativo */}
  <div className="flex items-center justify-center mb-8">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
    </div>
  </div>

  {/* DÍA 3 */}
  <div id="dia-3" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="bg-gradient-to-br from-emerald-500 to-green-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mr-4 shadow-lg">3</span>
      DÍA 3: Arte Holandés, Cerveza y Vida Nocturna
    </h2>

    {/* Rilkesmuseum */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-amber-400 rounded-full mr-3"></div>
        Rijksmuseum - Arte Holandés (9:00h)
      </h3>
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Rijksmuseum - El Museo Nacional de los Países Bajos</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg"
            alt="Fachada del Rijksmuseum en Museumplein"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El museo más importante de Holanda, con más de 8.000 obras de arte y 800 años de historia holandesa. 
          Aquí se encuentra "La Ronda de Noche" de Rembrandt y "La Lechera" de Vermeer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎨 Obras Maestras Imprescindibles:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>"La Ronda de Noche" - Rembrandt (1642)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>"La Lechera" - Johannes Vermeer (1660)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Autorretratos de Rembrandt</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Colección de arte asiático</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Cerámica de Delft histórica</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🏛️ Información Práctica:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Precio: 27 € adultos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Horario: 9:00-17:00 diario</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Duración: 2-3 horas recomendado</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Reserva: Obligatoria con hora de entrada</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <p className="text-xs text-red-600 mb-3">💡 Tip: Llega cuando abren (9:00) para evitar multitudes. La "Galería de Honor" con las obras maestras se llena mucho a partir de las 11:00.</p>
          <a href="https://gyg.me/qMlozUdI" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🎨 Entradas Rijksmuseum</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>

    {/* Museo Van Gogh */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-3"></div>
        Museo Van Gogh (12:00h)
      </h3>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Van Gogh Museum - La Mayor Colección del Mundo</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/11951240/pexels-photo-11951240.jpeg"
            alt="Museo Van Gogh en Museumplein Ámsterdam"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El museo alberga 200 pinturas, 500 dibujos y 750 cartas de Van Gogh. Un recorrido cronológico 
          por la vida del genio holandés, desde sus primeras obras oscuras hasta los brillantes girasoles y paisajes del sur de Francia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🌻 Obras Icónicas:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>"Los Girasoles" (1889)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>"Los Comedores de Patatas" (1885)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>"Almendro en Flor" (1890)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>"El Dormitorio en Arlés" (1888)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Múltiples autorretratos</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">📋 Info Práctica:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Precio: 26 € adultos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Horario: 9:00-18:00 (viernes hasta 21:00)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Duración: 2-3 horas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Reserva: Obligatoria online</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
          <p className="font-medium text-orange-800 mb-1">⚠️ Nota Importante</p>
          <p className="text-orange-700 text-xs mb-3">
            "La Noche Estrellada" NO está aquí (está en el MoMA de Nueva York). "Terraza de Café por la Noche"
            está en el Museo Kröller-Müller en Otterlo. Pero las obras de Ámsterdam son igual de impresionantes.
          </p>
          <a href="https://gyg.me/kgd4hkJI" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🌻 Entradas Van Gogh Museum</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>

    {/* Comida Holandesa */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded-full mr-3"></div>
        Parada para Comida Típica Holandesa (14:30h)
      </h3>
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">The Pantry - Gastronomía Tradicional</h4>
        <p className="text-gray-700 mb-4">
          Restaurante tradicional holandés cerca de Museumplein. Aquí probarás platos típicos como las croquetas (bitterballen), 
          arenques, estofados y el famoso Stamppot. ¡Una experiencia gastronómica auténtica!
        </p>

        <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-100">
          <h5 className="font-semibold text-gray-900 mb-2">🍽️ Platos Típicos Holandeses para Probar:</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <div>
              <ul className="space-y-1">
                <li>• <strong>Bitterballen:</strong> Croquetas de carne fritas</li>
                <li>• <strong>Stamppot:</strong> Pure de patata con verduras</li>
                <li>• <strong>Haring:</strong> Arenque crudo marinado</li>
                <li>• <strong>Erwtensoep:</strong> Sopa de guisantes espesa</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li>• <strong>Poffertjes:</strong> Mini tortitas dulces</li>
                <li>• <strong>Stroopwafels:</strong> Galletas de caramelo</li>
                <li>• <strong>Kaas:</strong> Quesos Gouda y Edam</li>
                <li>• <strong>Patat:</strong> Patatas fritas con salsas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Heineken Experience */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></div>
        Heineken Experience (16:00h)
      </h3>
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Heineken Experience - La Fábrica Histórica</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/18999312/pexels-photo-18999312.jpeg"
            alt="Entrada a Heineken Experience en Ámsterdam"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Visita interactiva en la antigua fábrica de Heineken (1863-1988). Aprende sobre la historia de la marca, 
          el proceso de elaboración de cerveza y degusta cervezas frescas. Incluye experiencias multimedia y juegos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🍺 La Experiencia Incluye:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>2-3 cervezas Heineken incluidas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Tour por la fábrica histórica</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Experiencia interactiva de elaboración</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Simulador: "Conviértete en cerveza"</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Exposición de historia de la marca</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">📋 Info Práctica:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Precio: 25 € (compra online)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Duración: 1,5-2 horas</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Horario: 10:30-19:30</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Edad mínima: 18 años (se pide ID)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Reserva: Obligatoria online</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
          <p className="text-xs text-green-600 mb-3">💡 Tip: Si reservas online con antelación ahorras dinero y te saltas las colas</p>
          <a href="https://gyg.me/3m6llUkk" target="_blank" rel="noopener noreferrer"
             className="btn-hotel">
            <span>🍺 Entradas Heineken Experience</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>

    {/* Barrio Rojo */}
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mr-3"></div>
        Barrio Rojo - De Wallen (19:00h)
      </h3>
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <h4 className="text-lg font-bold text-gray-900 mb-3">Red Light District - El Barrio Más Famoso</h4>
        <div className="mb-4">
          <img
            src="https://images.pexels.com/photos/9320/pexels-photo.jpg"
            alt="Barrio rojo de Ámsterdam"
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg mb-4"
          />
        </div>
        <p className="text-gray-700 mb-4">
          El barrio más conocido y controvertido de Ámsterdam. A pesar de su fama, es un barrio histórico muy animado, 
          repleto de restaurantes, bares y cafés. La zona es completamente segura y está llena de gente a todas horas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🏛️ Qué Ver en el Barrio:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Oude Kerk: Edificio más antiguo (1306)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Canales históricos iluminados</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Arquitectura del Siglo de Oro</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Restaurantes y cafés tradicionales</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Ambiente multicultural único</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🍜 Restaurantes Recomendados:</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-none">
              <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Ramen Ya: Ramen japonés excelente</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Numerosos restaurantes asiáticos</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Pubs tradicionales holandeses</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>Cafés con terraza junto al canal</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
          <p className="font-medium text-yellow-800 mb-1">ℹ️ Información Importante</p>
          <p className="text-yellow-700 text-xs">
            El Barrio Rojo es completamente seguro y legal. No está permitido tomar fotos en las zonas con escaparates.
            Respeta a las trabajadoras y la zona. Puedes hacer un tour guiado para conocer la historia del barrio de forma educativa y respetuosa.
          </p>
        </div>

        <div className="bg-white border-l-4 border-red-500 rounded-lg p-4">
          <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
            <span className="mr-2">🎯</span>
            Free Tour del Barrio Rojo en Español
          </h5>
          <p className="text-sm text-gray-700 mb-3">
            Descubre la historia y legislación de la prostitución en Ámsterdam, el surgimiento de tiendas de piercings, tatuajes, sex shops, museos peculiares y Coffee Shops. Aprende sobre la cultura de las drogas y cómo son tratadas en la sociedad holandesa. Lugares emblemáticos como la Condomerie en Warmoesstraat.
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-4 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Duración: 2 horas</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Inicio: Beursplein</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Incluye: Historia, legislación, coffee shops, cultura de drogas...</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Pago: En forma de propinas</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Nota: Por respeto, no incluye calles con ventanas de trabajadoras sexuales</li>
          </ul>
          <a href="https://www.freetour.com/es/amsterdam/tour-del-barrio-rojo-en-espanol?referralID=rFW5gyO0D7w7JOqo&campaign=BarrioRojoAmsterdam"
             target="_blank"
             rel="noopener noreferrer"
             className="btn-hotel">
            <span>🚶 Reservar free tour del Barrio Rojo</span>
            <ExternalLink className="external-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* MÁS LUGARES */}
  <div id="mas-lugares" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">➕ Más Lugares que Ver en Ámsterdam</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
        <h3 className="font-semibold text-gray-900 mb-3">🏛️ Otros Museos Interesantes:</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li><strong>Moco Museum:</strong> Arte moderno y contemporáneo (Banksy, Warhol)</li>
          <li><strong>Casa de Rembrandt:</strong> Donde vivió y trabajó el artista</li>
          <li><strong>Museo de Ámsterdam:</strong> Historia de la ciudad</li>
          <li><strong>NEMO Science Museum:</strong> Ciencia interactiva (ideal familias)</li>
          <li><strong>Museo Marítimo:</strong> Historia naval holandesa</li>
        </ul>
      </div>
      
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <h3 className="font-semibold text-gray-900 mb-3">🌳 Espacios al Aire Libre:</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li><strong>Vondelpark:</strong> El Central Park de Ámsterdam (47 hectáreas)</li>
          <li><strong>Jardín Botánico:</strong> Uno de los más antiguos del mundo (1638)</li>
          <li><strong>Begijnhof:</strong> Jardín secreto histórico (entrada gratuita)</li>
          <li><strong>Westerpark:</strong> Parque moderno con mercadillos los fines de semana</li>
          <li><strong>Terraza NEMO:</strong> Vistas gratuitas desde la terraza del museo</li>
        </ul>
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <h3 className="font-semibold text-gray-900 mb-3">🎭 Experiencias Únicas:</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li><strong>ICEBAR:</strong> Bar completamente de hielo a -10°C</li>
          <li><strong>Wondr Experience:</strong> Museo instagrameable con sets surrealistas</li>
          <li><strong>Estadio Johan Cruyff Arena:</strong> Tour del estadio del Ajax</li>
          <li><strong>Mercado Albert Cuyp:</strong> Mayor mercado al aire libre de Europa</li>
          <li><strong>Biblioteca OBA:</strong> Terraza gratuita con vistas panorámicas</li>
        </ul>
      </div>
      
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <h3 className="font-semibold text-gray-900 mb-3">🏰 Excursiones de un Día:</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li><strong>Brujas (Bélgica):</strong> Ciudad medieval (3h en tren)</li>
          <li><strong>Róterdam + La Haya:</strong> Arquitectura moderna + política</li>
          <li><strong>Utrecht:</strong> Canales menos turísticos, muy auténtico</li>
          <li><strong>Keukenhof (primavera):</strong> Jardín de tulipanes (marzo-mayo)</li>
          <li><strong>Giethoorn:</strong> Pueblo sin carreteras, solo canales</li>
        </ul>
      </div>
    </div>

    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
      <a href="https://gyg.me/EMjp5KUQ" target="_blank" rel="noopener noreferrer"
         className="btn-hotel">
        <span>🎟️ Ver Entradas a Museos</span>
        <ExternalLink className="external-icon" />
      </a>
      <a href="https://gyg.me/NsnWg5zb" target="_blank" rel="noopener noreferrer"
         className="btn-hotel">
        <span>🏰 Excursión a Brujas</span>
        <ExternalLink className="external-icon" />
      </a>
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
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🍽️ Guía Gastronómica - Probado y Recomendado</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <h3 className="text-lg font-bold text-orange-800 mb-3">🧀 Comida Tradicional Holandesa</h3>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-1">The Pantry</h4>
            <p className="text-xs text-gray-600 mb-1">Leidsekruisstraat 21 • €€ • Tradicional</p>
            <p className="text-sm text-gray-700">Cocina holandesa auténtica. Stamppot, bitterballen y platos típicos.</p>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-1">Cafe Soñéveld</h4>
            <p className="text-xs text-gray-600 mb-1">Egelantiersgracht 72 • €€ • Ambiente local</p>
            <p className="text-sm text-gray-700">Bar tradicional holandés. Cervezas locales y bocadillos típicos.</p>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-1">Moeders</h4>
            <p className="text-xs text-gray-600 mb-1">Rozengracht 251 • €€ • Decoración única</p>
            <p className="text-sm text-gray-700">Restaurante familiar. Paredes llenas de fotos de madres de clientes.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h3 className="text-lg font-bold text-blue-800 mb-3">🌍 Cocina Internacional</h3>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-1">Ramen Ya</h4>
            <p className="text-xs text-gray-600 mb-1">Oudezijds Voorburgwal 236 • €€ • Japonés</p>
            <p className="text-sm text-gray-700">Ramen japonés auténtico en el Barrio Rojo. Siempre hay cola.</p>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-1">Blue Amsterdam</h4>
            <p className="text-xs text-gray-600 mb-1">Winkelcentrum Kalverpassage, Singel 457 • €€€ • Vistas panorámicas</p>
            <p className="text-sm text-gray-700">Cocina moderna con vistas a la ciudad. Perfecto para ocasiones especiales.</p>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-1">Takumi Ramen Kitchen</h4>
            <p className="text-xs text-gray-600 mb-1">Ferdinand Bolstraat 36 H, • €€ • Asiático</p>
            <p className="text-sm text-gray-700">Ramen de alta calidad cerca de Museumplein.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
      <h3 className="text-lg font-bold text-green-800 mb-3">☕ Cafeterías Imprescindibles</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Bakers & Roasters</h4>
          <p className="text-xs text-gray-700">Brunch increíble. Llegada temprana recomendada (cola habitual).</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Van Wonderen Stroopwafel</h4>
          <p className="text-xs text-gray-700">Stroopwafels recién hechos. El mejor souvenir comestible.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Winkel 43</h4>
          <p className="text-xs text-gray-700">Famosa por su apple pie (tarta de manzana). ¡Imprescindible!</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Van Stapele Koekmakerij</h4>
          <p className="text-xs text-gray-700">Galletas de chocolate rellenas. Dicen que son las mejores del mundo.</p>
        </div>
      </div>
    </div>
  </div>

  {/* TRANSPORTE PÚBLICO */}
  <div id="transporte" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🚇 Sistema de Transporte Público de Ámsterdam</h2>
    
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
      <h4 className="font-bold text-gray-900 mb-4">Red Integrada GVB</h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h5 className="font-semibold text-blue-600 mb-2">🚇 Metro</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• 4 líneas principales</li>
            <li>• Frecuencia: 4-10 minutos</li>
            <li>• Horario: 06:00-00:30</li>
            <li>• Conecta aeropuerto y centro</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h5 className="font-semibold text-red-600 mb-2">🚊 Tranvías</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• 15 líneas de tranvía</li>
            <li>• Red más extensa</li>
            <li>• Frecuencia: 5-10 minutos</li>
            <li>• Llegan a todas las atracciones</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h5 className="font-semibold text-green-600 mb-2">🚌 Autobuses</h5>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Red complementaria</li>
            <li>• Líneas nocturnas disponibles</li>
            <li>• Mismos billetes que tranvía</li>
            <li>• Conecta zonas periféricas</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <h5 className="font-semibold text-gray-900 mb-3">Billetes y Tarifas (2026):</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="mb-2"><strong>Billete sencillo:</strong> 3,40 € (1 hora)</p>
            <p className="mb-2"><strong>Amsterdam Travel Ticket 1 día:</strong> 18 €</p>
            <p className="mb-2"><strong>Amsterdam Travel Ticket 2 días:</strong> 24 €</p>
            <p className="mb-2"><strong>Amsterdam Travel Ticket 3 días:</strong> 30 € (incluye aeropuerto)</p>
          </div>
          <div>
            <p className="mb-2"><strong>Pago:</strong> Tarjeta contactless o OV-chipkaart</p>
            <p className="mb-2"><strong>Check-in/out:</strong> Obligatorio en lectores amarillos</p>
            <p className="mb-2"><strong>Multa sin billete:</strong> 60 € + precio billete</p>
            <p className="mb-2"><strong>App recomendada:</strong> GVB o 9292 (planificador)</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
        <p className="font-medium text-yellow-800 mb-1">💳 Tarjeta Contactless</p>
        <p className="text-yellow-700 text-xs">
          Desde 2023 puedes usar tu tarjeta bancaria contactless directamente en los lectores (check-in y check-out).
          Es la forma más sencilla si estás pocos días en Ámsterdam.
        </p>
      </div>

      <a href="https://gyg.me/bftVdMgA" target="_blank" rel="noopener noreferrer"
         className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
        🚇 Comprar Amsterdam Travel Ticket
        <ExternalLink className="h-3 w-3 ml-2" />
      </a>
    </div>
  </div>

  <div id="tarjetas-turisticas" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎫 Tarjetas Turísticas - ¿Merece la Pena?</h2>
    
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">I Amsterdam City Card</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">✅ Incluye:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Transporte público ilimitado</li>
            <li>• Entrada gratuita a +70 museos</li>
            <li>• Rijksmuseum incluido</li>
            <li>• Crucero por canales gratuito</li>
            <li>• Descuentos en atracciones y restaurantes</li>
            <li>• Alquiler de bicicleta 24h gratis</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">💰 Precios 2026:</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• 24 horas: 65 €</li>
            <li>• 48 horas: 85 €</li>
            <li>• 72 horas: 100 €</li>
            <li>• 96 horas: 115 €</li>
          </ul>
        </div>
      </div>

      <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
        <p className="font-medium text-red-800 mb-1">⚠️ Importante</p>
        <p className="text-red-700 text-xs">
          Desde junio 2022, la I Amsterdam City Card NO incluye el Museo Van Gogh. 
          Tendrás que comprar entrada aparte (26 €). Calcula si te sale rentable según tus planes.
        </p>
      </div>

      <div className="bg-green-100 border border-green-300 rounded-lg p-3 mb-4">
        <p className="font-medium text-green-800 mb-1">💡 ¿Cuándo merece la pena?</p>
        <p className="text-green-700 text-xs">
          Si visitas 3-4 museos + usas mucho transporte público + haces el crucero por canales,
          la tarjeta se amortiza. Si solo vas a ver 1-2 museos, mejor comprar entradas individuales.
        </p>
      </div>

      <a href="https://gyg.me/hhPSPkwx" target="_blank" rel="noopener noreferrer"
         className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm">
        🎫 Comprar I Amsterdam City Card
        <ExternalLink className="h-3 w-3 ml-2" />
      </a>
    </div>
  </div>

  {/* CONSEJOS FINALES */}
  <div id="consejos" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 sm:p-8 shadow-md mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">🎯 Consejos Finales para tu Viaje a Ámsterdam</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">✅ Imprescindibles que NO puedes perderte:</h3>
          <ul className="text-sm text-gray-700 space-y-2 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>Paseo en barco por los canales al atardecer</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Casa de Ana Frank (reserva con 6 semanas)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>"La Ronda de Noche" de Rembrandt en Rijksmuseum</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Excursión a molinos de Zaanse Schans</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>Probar stroopwafels recién hechos</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>Alquilar bici al menos medio día (¡es la forma local!)</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Consejos de Viajero Experimentado:</h3>
          <ul className="text-sm text-gray-700 space-y-2 list-none">
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>Compra entradas a museos SIEMPRE online y con antelación</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>Las bicicletas tienen prioridad SIEMPRE. ¡Cuidado al cruzar!</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>No camines por los carriles bici (líneas rojas)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>Casi todo se paga con tarjeta, lleva poco efectivo</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>Respeta las normas sobre fotografía (especialmente Barrio Rojo)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>Los holandeses hablan inglés perfectamente</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* PRESUPUESTOS */}
  <div id="presupuestos" className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">💰 Presupuestos Detallados por Estilo</h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-green-800 mb-3">🎒 Mochilero</h3>
        <div className="text-2xl font-bold text-green-600 mb-2">70-90€/día</div>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• Hostel: 30-40€</li>
          <li>• Comida: 25-30€</li>
          <li>• Transporte: 8-10€</li>
          <li>• Atracciones: 10-15€</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-blue-800 mb-3">🏨 Estándar</h3>
        <div className="text-2xl font-bold text-blue-600 mb-2">130-170€/día</div>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Hotel 3*: 80-100€</li>
          <li>• Comida: 35-45€</li>
          <li>• Transporte: 10€</li>
          <li>• Atracciones: 15-25€</li>
        </ul>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-purple-800 mb-3">👑 Lujo</h3>
        <div className="text-2xl font-bold text-purple-600 mb-2">280-450€/día</div>
        <ul className="text-sm text-purple-700 space-y-1">
          <li>• Hotel 5*: 180-300€</li>
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
      ¡Que disfrutes Ámsterdam al máximo!
    </p>
  </div>
</article>
</>
);
};

export default AmsterdamGuideArticle;