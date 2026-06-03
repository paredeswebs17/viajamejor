import { ArrowLeft, Share2, Clock, Eye } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface TravelEssentialsArticleProps {
  onBack: () => void;
}

const products = [
  {
    num: '01',
    title: 'Mochila Cabina 40x20x25 (Ryanair)',
    description: 'Viajar ligero es un arte, y esta mochila es tu mejor aliada si quieres evitar cargos extra y colas de facturacion. Es perfecta para aerolineas como Ryanair porque cumple exactamente las medidas de equipaje de mano permitido. Sus compartimentos estan pensados para aprovechar cada centimetro, y detalles como el puerto USB o el bolsillo antirrobo me han resultado comodisimos en viajes urbanos.',
    price: 'Desde 35EUR',
    badge: 'Certificada cabina',
    url: 'https://www.amazon.es/Hayayu-40x20x25-Mochilas-Senderismo-Impermeable/dp/B0CBVFL64Z?tag=viajamejor-21',
  },
  {
    num: '02',
    title: 'Adaptador Universal TESSAN',
    description: 'No hay peor sensacion que llegar a tu destino y darte cuenta de que tu enchufe no encaja. Este adaptador te cubre en mas de 150 paises. Es ligero, compacto y me ha sacado de mas de un apuro, sobre todo por sus puertos USB y su velocidad de carga.',
    price: 'Desde 15EUR',
    badge: '+150 paises',
    url: 'https://www.amazon.es/TESSAN-Adaptador-Universal-Internacional-Americano/dp/B0B2DRC76L?tag=viajamejor-21',
  },
  {
    num: '03',
    title: 'Bateria Externa INIU 10000mAh',
    description: 'Nada te arruina mas un viaje que quedarte sin bateria cuando mas lo necesitas. Esta powerbank es pequena y ligera, pero potente. Me permite recargar el movil un par de veces sin problemas. Ademas, es rapida y cabe en cualquier bolsillo de la mochila o pantalon.',
    price: 'Desde 20EUR',
    badge: 'Carga rapida',
    url: 'https://www.amazon.es/INIU-10000mAh-Cargador-Portatil-Tel%C3%A9fono/dp/B08VD632WJ?tag=viajamejor-21',
  },
  {
    num: '04',
    title: 'Bascula Digital MYCARBON',
    description: 'Si eres de los que siempre duda en el aeropuerto si tu maleta pasara el control de peso, esta bascula es imprescindible. Compacta, ligera y precisa, me ha ahorrado pagar sobrecostes mas veces de las que puedo contar.',
    price: 'Desde 10EUR',
    badge: 'Ahorra sobrecostes',
    url: 'https://www.amazon.es/MYCARBON-Equipaje-Port%C3%A1til-Electr%C3%B3nica-Retroiluminada/dp/B01IDJM8OA?tag=viajamejor-21',
  },
  {
    num: '05',
    title: 'Almohada Viscoelastica de Viaje',
    description: 'El descanso en ruta es vital, y esta almohada ha sido un descubrimiento. Nada que ver con las hinchables. Es viscoelastica, se adapta perfectamente y viene con antifaz y tapones para crear tu pequeno oasis incluso en el asiento mas incomodo del mundo.',
    price: 'Desde 25EUR',
    badge: 'Incluye antifaz',
    url: 'https://www.amazon.es/SOMLAW-Almohada-Viscoel%C3%A1stica-Memoria-Viajando/dp/B0B96TP1WX?tag=viajamejor-21',
  },
  {
    num: '06',
    title: 'Maleta Amazon Basics Mediana',
    description: 'Ligera, robusta y con ruedas que giran 360, es perfecta para viajes de una o dos semanas. No es la mas cara ni la mas llamativa, pero su relacion calidad-precio es dificil de superar. Llevo anos usandola y aguanta el trote sin problema.',
    price: 'Desde 50EUR',
    badge: 'Ruedas 360',
    url: 'https://www.amazon.es/Amazon-Basics-Expandible-Equipaje-Giratorias/dp/B071VG5N9D?tag=viajamejor-21',
  },
  {
    num: '07',
    title: 'Maleta Amazon Basics Grande',
    description: 'Si necesitas espacio para viajes largos o para compartir maleta, esta es una apuesta segura. Carcasa dura, ruedas que facilitan el traslado y un interior muy bien pensado para mantener todo en orden.',
    price: 'Desde 70EUR',
    badge: 'Carcasa dura',
    url: 'https://www.amazon.es/AmazonBasics-Maleta-r%C3%ADgida-giratoria-Negro/dp/B071HHX6VF?tag=viajamejor-21',
  },
  {
    num: '08',
    title: 'Auriculares Cancelacion de Ruido',
    description: 'No se como viajaba antes sin ellos. Elimina ese ruido de motor de avion, ninos llorando o charlas ajenas. Ademas, son ligeros, comodos y la bateria dura lo suficiente para un vuelo largo. Un pequeno lujo que mejora mucho la experiencia viajera.',
    price: 'Desde 30EUR',
    badge: 'Cancelacion activa',
    url: 'https://www.amazon.es/Auriculares-Inal%C3%A1mbricos-Controlador-Impermeable-Inalambricos/dp/B0BCKHQGJN?tag=viajamejor-21',
  },
];

const TravelEssentialsArticle: React.FC<TravelEssentialsArticleProps> = ({ onBack }) => {
  return (
    <article>
      {/* Hero */}
      <div className="relative h-[45vh] min-h-[340px] overflow-hidden flex items-end">
        <img
          src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Mochila de viaje con objetos esenciales organizados"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 pb-12 md:pb-16 w-full">
          <span className="inline-block bg-teal-400 text-slate-900 text-[9px] uppercase tracking-[.2em] font-bold px-3 py-1.5 rounded-full mb-5">
            Equipaje
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tight mb-4">
            8 objetos imprescindibles para tu proximo viaje
          </h1>
          <div className="flex items-center gap-4 text-white/50 text-xs">
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              12 min lectura
            </span>
            <span className="flex items-center gap-1.5">
              <Eye size={12} />
              45.2k lecturas
            </span>
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="bg-slate-900 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-medium transition-colors"
          >
            <ArrowLeft size={14} />
            Volver
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: '8 objetos imprescindibles para tu proximo viaje',
                  url: window.location.href,
                }).catch(() => {});
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('Enlace copiado al portapapeles');
                }).catch(() => {});
              }
            }}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-medium transition-colors"
          >
            <Share2 size={14} />
            Compartir
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-stone-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16 md:py-20">

          {/* Intro */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              <strong className="font-medium">Despues de muchos viajes, he compilado la lista definitiva de objetos que siempre llevo conmigo.</strong> Son cosas que me han ahorrado dinero, problemas y disgustos. Nada de listas genericas: esto es lo que realmente uso y recomiendo.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-8">
            {products.map((product, index) => (
              <section key={product.num} className="bg-white border border-stone-200 rounded-sm p-7 md:p-9">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-3xl md:text-4xl font-serif text-teal-300 leading-none">{index + 1}.</span>
                  <h2 className="font-serif text-xl md:text-2xl text-gray-900">{product.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-teal-700 font-semibold">{product.price}</span>
                    <span className="text-[9px] uppercase tracking-wider text-gray-500 bg-stone-100 px-2.5 py-1 rounded-full font-medium">
                      {product.badge}
                    </span>
                  </div>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors"
                  >
                    Ver en Amazon
                  </a>
                </div>
              </section>
            ))}
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <RelatedArticles currentCategory="Equipaje" currentArticleId="8-objetos-imprescindibles" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default TravelEssentialsArticle;
