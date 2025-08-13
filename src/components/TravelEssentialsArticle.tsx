import { ArrowLeft, Share2 } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface TravelEssentialsArticleProps {
  onBack: () => void;
  onArticleSelect?: (articleId: string) => void;
}

const TravelEssentialsArticle: React.FC<TravelEssentialsArticleProps> = ({ onBack, onArticleSelect }) => {

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
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
            Equipaje
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          8 objetos imprescindibles para tu próximo viaje (y dónde comprarlos baratos)
        </h1>
        
        <div className="flex items-center justify-end text-gray-600 text-sm space-x-6 mb-8">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: '8 objetos imprescindibles para tu próximo viaje',
                  text: 'Descubre los objetos esenciales para viajar mejor',
                  url: window.location.href,
                })
                .catch((error) => console.log('Error sharing', error));
              } else {
                window.open(`https://twitter.com/intent/tweet?text=8 objetos imprescindibles para tu próximo viaje&url=${encodeURIComponent(window.location.href)}`, '_blank');
              }
            }}
            className="flex items-center hover:text-sky-500 transition-colors"
          >
            <Share2 className="h-4 w-4 mr-2" />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      <div className="mb-12">
        <img
          src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Mochila de viaje abierta mostrando objetos esenciales organizados"
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="space-y-12">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
              Mochila Cabina 40x20x25 (Ryanair)
            </h2>
            <p className="text-gray-700 mb-4">Viajar ligero es un arte, y esta mochila es tu mejor aliada si quieres evitar cargos extra y colas de facturación. Es perfecta para aerolíneas como Ryanair porque cumple exactamente las medidas de equipaje de mano permitido. Sus compartimentos están pensados para aprovechar cada centímetro, y detalles como el puerto USB o el bolsillo antirrobo me han resultado comodísimos en viajes urbanos.</p>
            <p className="text-gray-700 mb-4">👉 <a href="https://www.amazon.es/Hayayu-40x20x25-Mochilas-Senderismo-Impermeable/dp/B0CBVFL64Z?tag=viajamejor-21" target="_blank" rel="noopener noreferrer" className="bg-sky-50 border border-sky-200 rounded-lg px-4 py-2 text-sky-600 font-medium hover:bg-sky-100 transition-colors">Ver en Amazon</a></p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
              Adaptador Universal TESSAN
            </h2>
            <p className="text-gray-700 mb-4">No hay peor sensación que llegar a tu destino y darte cuenta de que tu enchufe no encaja. Este adaptador te cubre en más de 150 países. Es ligero, compacto y me ha sacado de más de un apuro, sobre todo por sus puertos USB y su velocidad de carga. Viajar sin este gadget ya no es una opción para mí.</p>
            <p className="text-gray-700 mb-4">👉 <a href="https://www.amazon.es/TESSAN-Adaptador-Universal-Internacional-Americano/dp/B0B2DRC76L?tag=viajamejor-21" target="_blank" rel="noopener noreferrer" className="bg-sky-50 border border-sky-200 rounded-lg px-4 py-2 text-sky-600 font-medium hover:bg-sky-100 transition-colors">Ver en Amazon</a></p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
              Batería Externa INIU 10000mAh
            </h2>
            <p className="text-gray-700 mb-4">Nada te arruina más un viaje que quedarte sin batería cuando más lo necesitas. Esta powerbank es pequeña y ligera, pero potente. Me permite recargar el móvil un par de veces sin problemas. Además, es rápida y cabe en cualquier bolsillo de la mochila o pantalón.</p>
            <p className="text-gray-700 mb-4">👉 <a href="https://www.amazon.es/INIU-10000mAh-Cargador-Portatil-Tel%C3%A9fono/dp/B08VD632WJ?tag=viajamejor-21" target="_blank" rel="noopener noreferrer" className="bg-sky-50 border border-sky-200 rounded-lg px-4 py-2 text-sky-600 font-medium hover:bg-sky-100 transition-colors">Ver en Amazon</a></p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
              Báscula Digital MYCARBON
            </h2>
            <p className="text-gray-700 mb-4">Si eres de los que siempre duda en el aeropuerto si tu maleta pasará el control de peso, esta báscula es imprescindible. Compacta, ligera y precisa, me ha ahorrado pagar sobrecostes más veces de las que puedo contar. Su pantalla iluminada es especialmente útil si pesas de noche o en habitaciones poco iluminadas.</p>
            <p className="text-gray-700 mb-4">👉 <a href="https://www.amazon.es/MYCARBON-Equipaje-Port%C3%A1til-Electr%C3%B3nica-Retroiluminada/dp/B01IDJM8OA?tag=viajamejor-21" target="_blank" rel="noopener noreferrer" className="bg-sky-50 border border-sky-200 rounded-lg px-4 py-2 text-sky-600 font-medium hover:bg-sky-100 transition-colors">Ver en Amazon</a></p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
              Almohada Viscoelástica de Viaje
            </h2>
            <p className="text-gray-700 mb-4">El descanso en ruta es vital, y esta almohada ha sido un descubrimiento. Nada que ver con las hinchables. Es viscoelástica, se adapta perfectamente y viene con antifaz y tapones para crear tu pequeño oasis incluso en el asiento más incómodo del mundo. Tras probar varias, esta es la que repito en cada viaje.</p>
            <p className="text-gray-700 mb-4">👉 <a href="https://www.amazon.es/SOMLAW-Almohada-Viscoel%C3%A1stica-Memoria-Viajando/dp/B0B96TP1WX?tag=viajamejor-21" target="_blank" rel="noopener noreferrer" className="bg-sky-50 border border-sky-200 rounded-lg px-4 py-2 text-sky-600 font-medium hover:bg-sky-100 transition-colors">Ver en Amazon</a></p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
              Maleta Amazon Basics Mediana
            </h2>
            <p className="text-gray-700 mb-4">Ligera, robusta y con ruedas que giran 360º, es perfecta para viajes de una o dos semanas. No es la más cara ni la más llamativa, pero su relación calidad-precio es difícil de superar. Llevo años usándola y aguanta el trote sin problema.</p>
            <p className="text-gray-700 mb-4">👉 <a href="https://www.amazon.es/Amazon-Basics-Expandible-Equipaje-Giratorias/dp/B071VG5N9D?tag=viajamejor-21" target="_blank" rel="noopener noreferrer" className="bg-sky-50 border border-sky-200 rounded-lg px-4 py-2 text-sky-600 font-medium hover:bg-sky-100 transition-colors">Ver en Amazon</a></p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
              Maleta Amazon Basics Grande
            </h2>
            <p className="text-gray-700 mb-4">Si necesitas espacio para viajes largos o para compartir maleta, esta es una apuesta segura. Carcasa dura, ruedas que facilitan el traslado y un interior muy bien pensado para mantener todo en orden. Para el precio que tiene, pocas pegas se le pueden poner.</p>
            <p className="text-gray-700 mb-4">👉 <a href="https://www.amazon.es/AmazonBasics-Maleta-r%C3%ADgida-giratoria-Negro/dp/B071HHX6VF?tag=viajamejor-21" target="_blank" rel="noopener noreferrer" className="bg-sky-50 border border-sky-200 rounded-lg px-4 py-2 text-sky-600 font-medium hover:bg-sky-100 transition-colors">Ver en Amazon</a></p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
              Auriculares Cancelación de Ruido
            </h2>
            <p className="text-gray-700 mb-4">No sé cómo viajaba antes sin ellos. Elimina ese ruido de motor de avión, niños llorando o charlas ajenas. Además, son ligeros, cómodos y la batería dura lo suficiente para un vuelo largo. Un pequeño lujo que mejora mucho la experiencia viajera.</p>
            <p className="text-gray-700 mb-4">👉 <a href="https://www.amazon.es/Auriculares-Inal%C3%A1mbricos-Controlador-Impermeable-Inalambricos/dp/B0BCKHQGJN?tag=viajamejor-21" target="_blank" rel="noopener noreferrer" className="bg-sky-50 border border-sky-200 rounded-lg px-4 py-2 text-sky-600 font-medium hover:bg-sky-100 transition-colors">Ver en Amazon</a></p>
          </div>
        </div>
      </div>

      <RelatedArticles currentArticleId="travel-essentials" onArticleSelect={onArticleSelect || onBack} />
    </article>
  );
};

export default TravelEssentialsArticle;