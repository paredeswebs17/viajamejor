import { ArrowLeft, Share2, Euro, Calendar, Star, Heart } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface PremiumDestinationsArticleProps {
  onBack: () => void;
}

const PremiumDestinationsArticle: React.FC<PremiumDestinationsArticleProps> = ({ onBack }) => {

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
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Destinos Premium
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          10 destinos premium donde vale la pena gastar más (y cómo hacer que cada euro cuente)
        </h1>

        <div className="flex items-center justify-end text-gray-600 text-sm space-x-6 mb-8">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: '10 destinos premium donde vale la pena gastar más',
                  text: 'Descubre los destinos que merecen cada euro invertido',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                window.open(`https://twitter.com/intent/tweet?text=10 destinos premium donde vale la pena gastar más&url=${encodeURIComponent(window.location.href)}`, '_blank');
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
          src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Resort de lujo en Maldivas con villas sobre el agua cristalina"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-lg max-w-none">
        
        {/* Introducción */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-0">
            <strong>Viajar barato está genial, pero a veces hay lugares que merecen cada euro invertido.</strong> Después de años 
            viajando con presupuestos ajustados, he aprendido que algunos destinos simplemente no se pueden hacer "low-cost" 
            sin perder su esencia. ¿Y sabes qué? Está bien.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 mb-0">
            Estos son mis 10 destinos favoritos donde gastar más tiene mucho sentido: por su belleza única, cultura 
            incomparable, o experiencias que no puedes vivir en ningún otro lugar. Aquí te cuento por qué merecen la 
            inversión, cuándo ir y cómo hacer que cada euro cuente al máximo.
          </p>
        </div>

        {/* Lista de destinos premium */}
        <div className="space-y-12">
          
          {/* Destino 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              🇮🇸 Islandia – Naturaleza salvaje y pura magia
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">120-180€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Jun-Ago, Oct-Mar</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Experiencia única</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Islandia es caro, no te voy a mentir. Pero cuando ves las auroras boreales 
              bailando sobre tu cabeza, o caminas entre géiseres humeantes, entiendes por qué vale cada euro. Es un país 
              que te cambia la perspectiva de lo que puede hacer la naturaleza.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Qué lo hace especial:</strong> Auroras boreales, géiseres, glaciares, cascadas épicas como Gullfoss, 
              la Laguna Azul. Es como estar en otro planeta, pero real.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cómo ahorrar:</strong> Alquila un coche y haz camping (verano), compra en supermercados, evita 
              restaurantes turísticos. La naturaleza es gratis y es lo mejor del país.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm mb-2">
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              🇯🇵 Japón – Tradición y tecnología en perfecta armonía
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">80-120€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Mar-May, Sep-Nov</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Cultura única</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Japón es caro pero eficiente. Cada yen que gastas está justificado: trenes 
              puntuales al segundo, comida increíble, servicios impecables. Es un país que funciona como un reloj suizo 
              pero con alma japonesa.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Qué lo hace especial:</strong> Templos milenarios, tecnología futurista, gastronomía de otro nivel, 
              cerezos en flor, cultura del respeto. Es como viajar en el tiempo hacia adelante y hacia atrás a la vez.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cómo ahorrar:</strong> JR Pass para trenes, combinis para comida, ryokans fuera de Tokio, templos 
              gratuitos. Los parques y jardines son gratis y espectaculares.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm mb-2">
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              🇨🇭 Suiza – Alpes, trenes panorámicos y lagos de ensueño
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">150-200€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Jun-Sep, Dic-Mar</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Paisajes épicos</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Suiza es el país más caro donde he estado, pero también donde he visto los 
              paisajes más impresionantes. Los trenes panorámicos son caros pero valen cada franco: vistas que no puedes 
              conseguir de ninguna otra forma.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Qué lo hace especial:</strong> Matterhorn, Jungfraujoch, lagos cristalinos, trenes que parecen de 
              película, pueblos de cuento. Es la postal perfecta de los Alpes.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cómo ahorrar:</strong> Swiss Travel Pass, supermercados Coop y Migros, camping en verano, senderismo 
              gratuito. La naturaleza es gratis y es lo mejor del país.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm mb-2">
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              🇳🇿 Nueva Zelanda – Aventura pura al otro lado del mundo
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">100-150€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Oct-Abr</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Aventura extrema</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Nueva Zelanda es cara por la distancia y porque todo se importa, pero es el 
              paraíso de los aventureros. Puenting, paracaidismo, senderismo épico... Si buscas adrenalina y naturaleza 
              salvaje, aquí la encuentras.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Qué lo hace especial:</strong> Fiordos de Milford Sound, Hobbiton, glaciares, deportes extremos, 
              paisajes de El Señor de los Anillos. Es como tener varios países en uno.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cómo ahorrar:</strong> Campervan para alojamiento y transporte, cocinar siempre, actividades gratuitas 
              como senderismo, trabajar temporalmente (Working Holiday Visa).
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm mb-2">
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
              🇹🇿 Safari en Tanzania – Ver animales en libertad no tiene precio
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">200-400€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Jun-Oct</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Experiencia única</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Un safari en Tanzania es caro, pero ver leones cazando, elefantes en manada 
              y la gran migración en Serengeti es algo que te marca para siempre. Es una inversión en recuerdos que duran 
              toda la vida.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Qué lo hace especial:</strong> Los Big Five, gran migración, cráter de Ngorongoro, Kilimanjaro, 
              culturas masai. Es África en estado puro.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cómo ahorrar:</strong> Safaris en grupo, lodges fuera de parques, temporada baja, combinar con 
              Kenia. Evita lodges de lujo si tu presupuesto es ajustado.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm mb-2">
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
              🇲🇻 Maldivas – Lujo sobre el agua, ideal para viajes románticos
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">300-800€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Nov-Abr</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 text-pink-500 mr-2" />
                <span>Luna de miel</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Maldivas es el destino más caro donde he estado, pero para una luna de miel 
              o aniversario especial, no hay nada comparable. Despertar sobre el agua cristalina, con peces tropicales 
              nadando bajo tu villa, es mágico.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Qué lo hace especial:</strong> Villas sobre el agua, aguas cristalinas, snorkel increíble, resorts 
              de lujo, privacidad total. Es el paraíso tropical por excelencia.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cómo ahorrar:</strong> Guesthouses en islas locales, todo incluido en ofertas, temporada baja, 
              vuelos con escalas. Evita resorts de una isla completa.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm mb-2">
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
              🇳🇴 Noruega – Fiordos, auroras y paisajes de otro planeta
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">130-180€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>May-Sep, Oct-Mar</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Naturaleza épica</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Noruega es carísima, pero los fiordos son algo que tienes que ver una vez 
              en la vida. El crucero por Geiranger, las auroras boreales en Tromsø, el sol de medianoche... Son experiencias 
              que justifican cada corona noruega.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Qué lo hace especial:</strong> Fiordos espectaculares, auroras boreales, sol de medianoche, 
              arquitectura vikinga, naturaleza salvaje. Es Escandinavia en su máxima expresión.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cómo ahorrar:</strong> Camping en verano, supermercados Rema 1000, transporte público, senderismo 
              gratuito. Los paisajes son gratis y son lo mejor del país.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm mb-2">
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
              🇵🇫 Polinesia Francesa – El sueño del Pacífico Sur
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">250-500€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>May-Oct</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 text-pink-500 mr-2" />
                <span>Paraíso tropical</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> Tahití y Bora Bora son caros hasta decir basta, pero es el paraíso tropical 
              más bonito que he visto. Las lagunas de color turquesa, las montañas volcánicas, la cultura polinesia... 
              Es el sueño del Pacífico Sur hecho realidad.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Qué lo hace especial:</strong> Lagunas turquesas, montañas volcánicas, cultura polinesia auténtica, 
              perlas negras, overwater bungalows. Es el paraíso tropical definitivo.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cómo ahorrar:</strong> Pensiones familiares, islas menos turísticas como Huahine, cocinar, vuelos 
              con escalas largas. Evita Bora Bora si tu presupuesto es limitado.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm mb-2">
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
              🏔️ Patagonia (Argentina y Chile) – Naturaleza al extremo
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">80-120€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Oct-Mar</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Aventura extrema</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> La Patagonia es cara por la logística (todo está lejos), pero es el último 
              rincón salvaje del planeta. Torres del Paine, glaciar Perito Moreno, El Calafate... Es naturaleza en estado 
              puro y salvaje.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Qué lo hace especial:</strong> Torres del Paine, glaciar Perito Moreno, Fitz Roy, pingüinos, 
              ballenas, paisajes infinitos. Es el fin del mundo literal.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cómo ahorrar:</strong> Camping, cocinar siempre, autostop entre viajeros, hostels, evitar temporada 
              alta. Los trekkings son gratis y son lo mejor de la región.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm mb-2">
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
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
              🇫🇷 París + Castillos del Loira – Cultura, historia y glamour
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <Euro className="h-4 w-4 text-emerald-500 mr-2" />
                <span className="font-semibold">100-150€/día</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                <span>Abr-Jun, Sep-Oct</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-orange-500 mr-2" />
                <span>Cultura y lujo</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Mi experiencia:</strong> París es caro, pero es París. La Torre Eiffel, el Louvre, Montmartre, 
              los castillos del Loira... Es cultura, historia y elegancia en cada esquina. Vale la pena gastarse un poco 
              más para vivir la experiencia completa.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Qué lo hace especial:</strong> Torre Eiffel, Louvre, Versalles, castillos del Loira, gastronomía 
              francesa, moda, arte. Es la capital cultural de Europa.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Cómo ahorrar:</strong> Museos gratuitos primer domingo del mes, picnics en parques, metro en lugar 
              de taxis, barrios menos turísticos. Muchas atracciones son gratis.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm mb-2">
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
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mi reflexión final</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>No siempre hay que viajar barato.</strong> A veces, invertir en un destino especial te da recuerdos 
            para toda la vida y experiencias que no puedes conseguir en ningún otro lugar. Estos son mis favoritos para 
            "derrochar\" de forma inteligente.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            La clave está en elegir bien cuándo vale la pena gastar más y cuándo puedes ahorrar sin perder la esencia 
            del destino. Cada euro invertido en estos lugares ha valido la pena.
          </p>
          <p className="text-lg text-gray-700 mb-0">
            <strong>¿Y tú? ¿Cuáles son tus destinos premium favoritos?</strong> Déjamelo en comentarios o escríbeme por 
            email. Siempre estoy buscando nuevos lugares que merezcan la inversión extra.
          </p>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white mt-12">
          <h3 className="text-2xl font-bold mb-4">¿Te han inspirado estos destinos premium?</h3>
          <p className="text-lg mb-6 opacity-90">
            Descubre más destinos únicos y consejos para hacer que cada euro cuente
          </p>
          <button
            onClick={onBack}
            className="bg-white text-purple-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Ver Más Artículos
          </button>
        </div>
      </div>
      
      {/* Artículos relacionados */}
      <RelatedArticles currentCategory="Destinos" currentArticleId="premium-destinations" />
    </article>
  );
};

export default PremiumDestinationsArticle;