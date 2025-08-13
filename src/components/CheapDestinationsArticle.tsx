import { ArrowLeft, Share2, Euro, Calendar, Star } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface CheapDestinationsArticleProps {
  onBack: () => void;
  onArticleSelect?: (articleId: string) => void;
}

const CheapDestinationsArticle: React.FC<CheapDestinationsArticleProps> = ({ onBack, onArticleSelect }) => {

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Header del artículo */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-sky-500 hover:text-sky-600 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al blog
        </button>
        
        <div className="mb-6">
          <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Destinos
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Destinos baratos para 2025: mis 15 favoritos donde gasté menos de 30€/día
        </h1>

        <div className="flex items-center justify-end text-gray-600 text-sm space-x-6 mb-8">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Destinos baratos para 2025: mis 15 favoritos donde gasté menos de 30€/día',
                  text: 'Descubre los mejores destinos económicos para viajar',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                window.open(`https://twitter.com/intent/tweet?text=Destinos baratos para 2025&url=${encodeURIComponent(window.location.href)}`, '_blank');
              }
            }}
            className="flex items-center hover:text-sky-500 transition-colors"
          >
            <Share2 className="h-4 w-4 mr-2" />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      {/* Imagen destacada */}
      <div className="mb-12">
        <img
          src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Mochilero explorando destino económico con paisaje montañoso"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Si quieres viajar en 2025 sin gastar una fortuna, esta lista te va a encantar.</strong> Aquí te comparto 
            mis 15 destinos favoritos donde el dinero realmente rinde, y que además son increíbles. He estado en todos y 
            puedo contarte exactamente cuánto gasté y qué esperar.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            Algunos te sorprenderán (¿sabías que Albania es más barata que Tailandia?), otros son clásicos que nunca fallan. 
            Todos tienen algo en común: puedes vivir experiencias increíbles gastando menos de 30€ al día.
          </p>
        </div>

        {/* Lista de destinos */}
        <div className="space-y-12">
          
          {/* Destino 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              🇦🇱 Albania – Europa a precio de Sudeste Asiático
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">20-25€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Mayo-Septiembre</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Fácil</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Albania me sorprendió completamente. Paisajes increíbles, gente súper amable, 
              comida deliciosa y precios que no me creía. Una cena completa por 8€, alojamiento por 15€ la noche. 
              Las playas del sur son espectaculares y las montañas del norte, impresionantes.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Riviera albanesa, Tirana (capital vibrante), Berat (ciudad patrimonio).<br/>
              <strong>Lo único malo:</strong> Algunas carreteras están en mal estado, pero merece la pena.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Destino 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              🇲🇦 Marruecos – Cultura, colores y precios bajos
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">25-30€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Oct-Abril</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Intermedio</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Marruecos es un festival para los sentidos. Los zocos de Marrakech, 
              el desierto del Sahara, la costa de Essaouira... Todo por muy poco dinero. Un tajín delicioso por 5€, 
              riads preciosos por 20€ la noche.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Marrakech, Fez, desierto del Sahara, Chefchaouen (ciudad azul).<br/>
              <strong>Ten en cuenta:</strong> Hay que regatear siempre y tener paciencia con los vendedores insistentes.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Destino 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              🇹🇭 Tailandia – Clásico por algo
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">15-25€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Nov-Marzo</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Fácil</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Mi primer gran viaje mochilero y sigue siendo uno de mis favoritos. 
              Comida de calle increíble por 2€, masajes por 8€, playas paradisíacas y templos impresionantes. 
              Es barato, fácil de viajar y súper seguro.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Bangkok, islas del sur, Chiang Mai, Ayutthaya.<br/>
              <strong>Consejo:</strong> Evita Phuket y Koh Phi Phi si buscas precios bajos, ve a islas menos turísticas.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Destino 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              🇵🇹 Portugal – Perfecto para escapadas baratas desde España
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">30-35€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Todo el año</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Muy fácil</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Portugal es perfecto para escapadas de fin de semana o puentes. 
              Está súper cerca, es más barato que España, la comida es increíble y la gente súper amable. 
              Los pastéis de nata por 1€ son adictivos.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Lisboa, Oporto, Óbidos, costa del Algarve.<br/>
              <strong>Tip:</strong> Evita agosto en el Algarve, está lleno de turistas y los precios suben.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Destino 5 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
              🇬🇪 Georgia – Seguro, barato y sin turistas
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">20-25€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Mayo-Octubre</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Intermedio</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Georgia fue una sorpresa total. Paisajes de montaña increíbles, 
              vino delicioso, comida abundante y precios ridículos. Una cena con vino por 12€, alojamiento 
              por 15€. Además, la hospitalidad georgiana es legendaria.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Tiflis, Svaneti (montañas), región vinícola de Kakheti.<br/>
              <strong>Dato curioso:</strong> Puedes estar 365 días sin visa si eres español.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Destino 6 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
              🇻🇳 Vietnam – Aventura asiática económica
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">18-25€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Nov-Abril</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Intermedio</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Vietnam es pura aventura. La comida de calle es increíble y súper barata 
              (pho por 2€), los paisajes de Halong Bay te dejan sin palabras, y Ho Chi Minh City es pura energía. 
              Eso sí, prepárate para el tráfico de motos.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Hanoi, Halong Bay, Hoi An, Ho Chi Minh City.<br/>
              <strong>Consejo:</strong> Negocia siempre los precios y ten cuidado con las estafas turísticas.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Destino 7 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
              🇹🇷 Turquía – Puente entre Europa y Asia
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">25-30€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Abril-Junio, Sep-Nov</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Fácil</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Turquía tiene de todo: historia increíble, paisajes únicos como Capadocia, 
              playas preciosas y comida deliciosa. Los kebabs auténticos por 3€, baños turcos por 15€, y la hospitalidad 
              turca es real.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Estambul, Capadocia, Pamukkale, costa mediterránea.<br/>
              <strong>Tip:</strong> La lira turca fluctúa mucho, aprovecha cuando esté débil.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Destino 8 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
              🇷🇴 Rumanía – Europa del Este auténtica
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">25-30€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Mayo-Septiembre</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Fácil</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Rumanía me sorprendió gratamente. Bucarest es vibrante, Transilvania 
              tiene castillos de cuento, y los Cárpatos son perfectos para senderismo. Todo súper barato y sin 
              masas de turistas.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Bucarest, Brasov, castillo de Bran (Drácula), Sighisoara.<br/>
              <strong>Curiosidad:</strong> Internet súper rápido y wifi gratis en casi todos lados.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Destino 9 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
              🇵🇱 Polonia – Historia y precios increíbles
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">25-30€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Mayo-Septiembre</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Muy fácil</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Polonia es perfecta para un viaje cultural barato. Cracovia es preciosa, 
              Varsovia muy moderna, y la comida es contundente y barata. Los pierogi por 4€ y cerveza por 2€. 
              Además, es súper seguro.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Cracovia, Varsovia, Gdansk, Auschwitz (visita obligada).<br/>
              <strong>Ventaja:</strong> Muy fácil moverse en transporte público, todo está bien conectado.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Destino 10 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
              🇧🇴 Bolivia – Aventura sudamericana económica
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">15-20€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Mayo-Octubre</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Avanzado</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Bolivia es el país más barato de Sudamérica y uno de los más espectaculares. 
              El Salar de Uyuni es otro planeta, La Paz es única en el mundo, y todo cuesta ridículamente poco. 
              Eso sí, hay que adaptarse a la altitud.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Salar de Uyuni, La Paz, Sucre, Lago Titicaca.<br/>
              <strong>Importante:</strong> Lleva medicación para el mal de altura, La Paz está a 3.500m.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Destino 11 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">11</span>
              🇲🇽 México – Cultura, playas y comida increíble
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">20-30€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Nov-Abril</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Intermedio</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> México tiene una relación calidad-precio increíble. Tacos auténticos por 1€, 
              cenotes espectaculares, ruinas mayas impresionantes y playas paradisíacas. Evita las zonas turísticas 
              y descubre el México real.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Ciudad de México, Oaxaca, Yucatán, Guanajuato.<br/>
              <strong>Consejo:</strong> Evita Cancún y Playa del Carmen si buscas precios bajos.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Destino 12 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">12</span>
              🇨🇴 Colombia – Diversidad y precios bajos
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">20-25€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Dic-Marzo, Jul-Ago</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Intermedio</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Colombia me enamoró completamente. Cartagena es preciosa, Medellín súper moderna, 
              el café es el mejor del mundo y la gente increíblemente amable. Además, el peso colombiano hace que todo 
              sea súper barato.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Cartagena, Medellín, Bogotá, eje cafetero, Tayrona.<br/>
              <strong>Realidad:</strong> Es mucho más seguro de lo que piensa la gente, solo hay que usar sentido común.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Destino 13 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">13</span>
              🇮🇩 Indonesia – Paraíso tropical económico
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">15-25€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Mayo-Septiembre</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Intermedio</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Indonesia es increíble para presupuestos ajustados. Bali es más cara pero 
              sigue siendo barata, Java tiene templos impresionantes, y las islas Gili son paradisíacas. 
              Nasi goreng por 2€ y alojamiento por 10€.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Bali, Yogyakarta, islas Gili, Lombok, Borobudur.<br/>
              <strong>Tip:</strong> Evita las zonas súper turísticas de Bali, ve a Ubud o al este de la isla.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>

          {/* Destino 14 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">14</span>
              🇺🇦 Ucrania – Europa del Este auténtica (pre-conflicto)
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">20-25€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Cuando sea seguro</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Pendiente</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia (pre-2022):</strong> Kiev era increíble, Lviv súper bonita y todo ridículamente barato. 
              Espero que cuando termine el conflicto podamos volver a disfrutar de este país tan especial. 
              La hospitalidad ucraniana es legendaria.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Para el futuro:</strong> Kiev, Lviv, Odesa.<br/>
              <strong>Nota:</strong> Obviamente, ahora no es momento de viajar allí. Incluyo este destino pensando en el futuro.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-orange-800 text-sm mb-0">
                ⚠️ <strong>Actualmente no es seguro viajar a Ucrania debido al conflicto. Esperamos que pronto podamos volver a visitarla.</strong>
              </p>
            </div>
          </div>

          {/* Destino 15 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">15</span>
              🇳🇵 Nepal – Aventura en el Himalaya
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">15-20€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Oct-Dic, Mar-Mayo</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Nivel: Avanzado</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Nepal es perfecto para aventureros con presupuesto ajustado. El trekking 
              al campo base del Everest es increíble, Katmandú es caótica pero fascinante, y todo es súper barato. 
              Dal bhat (comida local) por 3€ y te llenan el plato las veces que quieras.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Lo mejor:</strong> Katmandú, Pokhara, trekking en el Himalaya, Chitwan.<br/>
              <strong>Importante:</strong> Prepárate físicamente para los trekkings y lleva buen seguro médico.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <p className="text-sky-800 text-sm mb-2">
                👉 <strong>
                  <a href="https://kiwi.tpk.lv/z2gZyZ3E" target="_blank" rel="noopener noreferrer">
                  Aquí tienes el enlace a Kiwi.com
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Conclusión */}
        <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi consejo final</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Viajar barato no es imposible, solo hay que elegir bien el destino.</strong> Estos 15 países me han 
            demostrado que se puede vivir experiencias increíbles sin gastar una fortuna. Cada uno tiene su encanto 
            y su momento perfecto para visitarlo.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Mi recomendación es que empieces por los más fáciles (Portugal, Polonia, Tailandia) y vayas subiendo 
            el nivel según ganes experiencia. Y recuerda: el presupuesto que te doy incluye alojamiento, comida y 
            transporte local, pero no vuelos internacionales.
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>¿Has estado en alguno de estos destinos? ¿Añadirías otro a la lista?</strong> Escríbeme y lo 
            metemos en la versión 2026. Siempre estoy buscando nuevos destinos baratos que merezcan la pena.
          </p>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-sky-500 to-emerald-500 rounded-2xl p-8 text-center text-white mt-12">
          <h3 className="text-2xl font-bold mb-4">¿Te ha inspirado esta lista?</h3>
          <p className="text-lg mb-6 opacity-90">
            Explora más destinos increíbles y consejos para viajar gastando menos
          </p>
          <button
            onClick={onBack}
            className="bg-white text-sky-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Ver Más Destinos
          </button>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Destinos" currentArticleId="paises-baratos-2025" />
    </article>
  );
};

export default CheapDestinationsArticle;