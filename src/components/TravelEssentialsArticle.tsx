import React, { useState, useEffect } from 'react';
import { ArrowLeft, Share2, TrendingUp, Eye } from 'lucide-react';
import RelatedArticles from './RelatedArticles';

interface TravelEssentialsArticleProps {
onBack: () => void;
}

interface ProductData {
asin: string;
title: string;
currentPrice: string;
originalPrice?: string;
availability: string;
rating?: number;
reviewCount?: number;
imageUrl?: string;
}

interface TravelProduct {
id: number;
emoji: string;
title: string;
asin: string;
description: string;
basePrice: string;
badge: string;
badgeIcon: string;
manualUrl: string;
}

const TravelEssentialsArticle: React.FC<TravelEssentialsArticleProps> = ({ onBack }) => {
const [productData, setProductData] = useState<{[key: string]: ProductData}>({});
const [loading, setLoading] = useState(true);
const [viewCount, setViewCount] = useState(1247);

const products: TravelProduct[] = [
{
id: 1,
emoji: '🎒',
title: 'Mochila Cabina 40x20x25 (Ryanair)',
asin: 'B0CBVFL64Z',
description: 'Viajar ligero es un arte, y esta mochila es tu mejor aliada si quieres evitar cargos extra y colas de facturación. Es perfecta para aerolíneas como Ryanair porque cumple exactamente las medidas de equipaje de mano permitido. Sus compartimentos están pensados para aprovechar cada centímetro, y detalles como el puerto USB o el bolsillo antirrobo me han resultado comodísimos en viajes urbanos.',
basePrice: '35€',
badge: '✅ Certificada cabina',
badgeIcon: '🌍',
manualUrl: 'https://www.amazon.es/Hayayu-40x20x25-Mochilas-Senderismo-Impermeable/dp/B0CBVFL64Z?tag=viajamejor-21'
},
{
id: 2,
emoji: '🔌',
title: 'Adaptador Universal TESSAN',
asin: 'B0B2DRC76L',
description: 'No hay peor sensación que llegar a tu destino y darte cuenta de que tu enchufe no encaja. Este adaptador te cubre en más de 150 países. Es ligero, compacto y me ha sacado de más de un apuro, sobre todo por sus puertos USB y su velocidad de carga. Viajar sin este gadget ya no es una opción para mí.',
basePrice: '15€',
badge: '🌍 +150 países',
badgeIcon: '⚡',
manualUrl: 'https://www.amazon.es/TESSAN-Adaptador-Universal-Internacional-Americano/dp/B0B2DRC76L?tag=viajamejor-21'
},
{
id: 3,
emoji: '🔋',
title: 'Batería Externa INIU 10000mAh',
asin: 'B08VD632WJ',
description: 'Nada te arruina más un viaje que quedarte sin batería cuando más lo necesitas. Esta powerbank es pequeña y ligera, pero potente. Me permite recargar el móvil un par de veces sin problemas. Además, es rápida y cabe en cualquier bolsillo de la mochila o pantalón.',
basePrice: '20€',
badge: '⚡ Carga rápida',
badgeIcon: '🔋',
manualUrl: 'https://www.amazon.es/INIU-10000mAh-Cargador-Portatil-Tel%C3%A9fono/dp/B08VD632WJ?tag=viajamejor-21'
},
{
id: 4,
emoji: '⚖️',
title: 'Báscula Digital MYCARBON',
asin: 'B01IDJM8OA',
description: 'Si eres de los que siempre duda en el aeropuerto si tu maleta pasará el control de peso, esta báscula es imprescindible. Compacta, ligera y precisa, me ha ahorrado pagar sobrecostes más veces de las que puedo contar. Su pantalla iluminada es especialmente útil si pesas de noche o en habitaciones poco iluminadas.',
basePrice: '10€',
badge: '💰 Ahorra sobrecostes',
badgeIcon: '⚖️',
manualUrl: 'https://www.amazon.es/MYCARBON-Equipaje-Port%C3%A1til-Electr%C3%B3nica-Retroiluminada/dp/B01IDJM8OA?tag=viajamejor-21'
},
{
id: 5,
emoji: '💤',
title: 'Almohada Viscoelástica de Viaje',
asin: 'B0B96TP1WX',
description: 'El descanso en ruta es vital, y esta almohada ha sido un descubrimiento. Nada que ver con las hinchables. Es viscoelástica, se adapta perfectamente y viene con antifaz y tapones para crear tu pequeño oasis incluso en el asiento más incómodo del mundo. Tras probar varias, esta es la que repito en cada viaje.',
basePrice: '25€',
badge: '😴 Incluye antifaz',
badgeIcon: '💤',
manualUrl: 'https://www.amazon.es/SOMLAW-Almohada-Viscoel%C3%A1stica-Memoria-Viajando/dp/B0B96TP1WX?tag=viajamejor-21'
},
{
id: 6,
emoji: '🧳',
title: 'Maleta Amazon Basics Mediana',
asin: 'B071VG5N9D',
description: 'Ligera, robusta y con ruedas que giran 360º, es perfecta para viajes de una o dos semanas. No es la más cara ni la más llamativa, pero su relación calidad-precio es difícil de superar. Llevo años usándola y aguanta el trote sin problema.',
basePrice: '50€',
badge: '🔄 Ruedas 360º',
badgeIcon: '🧳',
manualUrl: 'https://www.amazon.es/Amazon-Basics-Expandible-Equipaje-Giratorias/dp/B071VG5N9D?tag=viajamejor-21'
},
{
id: 7,
emoji: '🧳',
title: 'Maleta Amazon Basics Grande',
asin: 'B071HHX6VF',
description: 'Si necesitas espacio para viajes largos o para compartir maleta, esta es una apuesta segura. Carcasa dura, ruedas que facilitan el traslado y un interior muy bien pensado para mantener todo en orden. Para el precio que tiene, pocas pegas se le pueden poner.',
basePrice: '70€',
badge: '🛡️ Carcasa dura',
badgeIcon: '🧳',
manualUrl: 'https://www.amazon.es/AmazonBasics-Maleta-r%C3%ADgida-giratoria-Negro/dp/B071HHX6VF?tag=viajamejor-21'
},
{
id: 8,
emoji: '🎧',
title: 'Auriculares Cancelación de Ruido',
asin: 'B0BCKHQGJN',
description: 'No sé cómo viajaba antes sin ellos. Elimina ese ruido de motor de avión, niños llorando o charlas ajenas. Además, son ligeros, cómodos y la batería dura lo suficiente para un vuelo largo. Un pequeño lujo que mejora mucho la experiencia viajera.',
basePrice: '30€',
badge: '🔇 Cancelación activa',
badgeIcon: '🎧',
manualUrl: 'https://www.amazon.es/Auriculares-Inal%C3%A1mbricos-Controlador-Impermeable-Inalambricos/dp/B0BCKHQGJN?tag=viajamejor-21'
}
];

// Cargar datos de productos de Amazon API
useEffect(() => {
  const loadProductData = async () => {
    try {
      // Mock data para desarrollo (simula respuesta de Amazon API)
      const mockProducts = {};
      
      products.forEach(product => {
        const mockPrices = {
          'B0CBVFL64Z': { price: '39.99', originalPrice: '49.99' },
          'B0B2DRC76L': { price: '18.95', originalPrice: null },
          'B08VD632WJ': { price: '22.99', originalPrice: '27.99' },
          'B01IDJM8OA': { price: '12.99', originalPrice: null },
          'B0B96TP1WX': { price: '28.50', originalPrice: '35.00' },
          'B071VG5N9D': { price: '54.99', originalPrice: null },
          'B071HHX6VF': { price: '74.99', originalPrice: '89.99' },
          'B0BCKHQGJN': { price: '32.99', originalPrice: null }
        };

        const mock = mockPrices[product.asin] || { price: '29.99', originalPrice: null };
        
        mockProducts[product.asin] = {
          asin: product.asin,
          title: `Producto actualizado - ${product.asin}`,
          currentPrice: `€${mock.price}`,
          originalPrice: mock.originalPrice ? `€${mock.originalPrice}` : null,
          availability: 'En stock',
          rating: 4.2 + Math.random() * 0.8,
          reviewCount: Math.floor(Math.random() * 1000) + 100,
          imageUrl: null
        };
      });
      
      setProductData(mockProducts);
    } catch (error) {
      console.error('Error loading product data:', error);
    } finally {
      setLoading(false);
    }
  };

  loadProductData();
}, []);


// Función para trackear clicks
const trackProductClick = async (product: TravelProduct, actualPrice?: string) => {
try {
// Google Analytics
if (typeof gtag !== 'undefined') {
gtag('event', 'affiliate_click', {
event_category: 'Amazon Affiliate',
event_label: product.title,
item_id: product.asin,
value: actualPrice ? parseFloat(actualPrice.replace(/[^0-9.]/g, '')) : 0,
currency: 'EUR'
});
}

  // Analytics propios (mock para desarrollo)
  console.log('📊 Click Analytics:', {
    event: 'affiliate_click',
    product_asin: product.asin,
    product_title: product.title,
    price: actualPrice || product.basePrice,
    article: '8-objetos-imprescindibles',
    timestamp: new Date().toISOString(),
  });
} catch (error) {
  console.error('Error tracking click:', error);
}

};

// Generar URL de afiliado
const getAffiliateUrl = (product: TravelProduct) => {
const baseUrl = `https://amazon.es/dp/${product.asin}?tag=viajamejor-21`;
return baseUrl;
};

// Componente para mostrar el precio
const PriceDisplay = ({ product }: { product: TravelProduct }) => {
const data = productData[product.asin];

if (loading) {
  return (
    <div className="flex items-center space-x-3">
      <div className="animate-pulse bg-gray-300 h-6 w-20 rounded"></div>
    </div>
  );
}

const currentPrice = data?.currentPrice || product.basePrice;
const hasDiscount = data?.originalPrice && data.originalPrice !== data.currentPrice;

return (
  <div className="flex items-center space-x-3">
    <span className="text-emerald-600 font-bold text-lg">
      {currentPrice.startsWith('€') ? currentPrice : `Desde ${currentPrice}`}
    </span>
    {hasDiscount && (
      <span className="text-gray-500 line-through text-sm">
        {data.originalPrice}
      </span>
    )}
    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
      {product.badge}
    </span>
  </div>
);

};

// Incrementar contador de vistas (simulado)
useEffect(() => {
const timer = setTimeout(() => {
setViewCount(prev => prev + Math.floor(Math.random() * 3) + 1);
}, 3000);
return () => clearTimeout(timer);
}, []);

return (
<article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
<div className="mb-8">
<button 
onClick={onBack}
className="inline-flex items-center text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-lg transition-all duration-200 font-medium border border-sky-200 hover:border-sky-300 mb-6"
>
<ArrowLeft className="h-4 w-4 mr-2" />
Volver al blog
</button>
    <div className="mb-6 flex items-center justify-between">
      <span className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
        Equipaje
      </span>
      <div className="flex items-center text-gray-500 text-sm space-x-4">
        <div className="flex items-center">
          <Eye className="h-4 w-4 mr-1" />
          {viewCount.toLocaleString()}
        </div>
        <div className="flex items-center">
          <TrendingUp className="h-4 w-4 mr-1" />
          Trending
        </div>
      </div>
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
           navigator.clipboard.writeText(window.location.href).then(() => {
             alert('¡Enlace copiado al portapapeles!');
           }).catch(() => {
             window.open(`https://twitter.com/intent/tweet?text=8 objetos imprescindibles para tu próximo viaje&url=${encodeURIComponent(window.location.href)}`, '_blank');
           });
          }
        }}
       className="inline-flex items-center text-gray-600 hover:text-sky-600 bg-gray-50 hover:bg-sky-50 px-4 py-2 rounded-lg transition-all duration-200 font-medium border border-gray-200 hover:border-sky-300"
      >
        <Share2 className="h-4 w-4 mr-2" />
        <span>Compartir</span>
      </button>
    </div>
  </div>

  <div className="mb-12">
    <img
      src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt="Mochila de viaje abierta mostrando objetos esenciales organizados"
      className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
    />
  </div>

  <div className="prose prose-lg max-w-none">
    <div className="space-y-12">
      {products.map((product) => (
        <div key={product.id} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
              {product.id}
            </span>
            {product.emoji} {product.title}
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Información adicional del producto desde Amazon API */}
          {productData[product.asin]?.rating && (
            <div className="flex items-center mb-4 text-sm text-gray-600">
              <span className="flex items-center mr-4">
                {'★'.repeat(Math.floor(productData[product.asin].rating!))}
                <span className="ml-1">{productData[product.asin].rating}/5</span>
              </span>
              {productData[product.asin].reviewCount && (
                <span>({productData[product.asin].reviewCount} reseñas)</span>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0 mb-4">
            <PriceDisplay product={product} />
            
            <button
              onClick={() => {
                trackProductClick(product, productData[product.asin]?.currentPrice);
                window.open(getAffiliateUrl(product), '_blank', 'noopener,noreferrer');
              }}
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 text-lg inline-flex items-center justify-center group"
            >
              🚀 VER EN AMAZON
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>

          {/* Indicador de disponibilidad */}
          {productData[product.asin]?.availability && productData[product.asin]?.availability !== 'Available' && (
            <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
              <strong>Estado:</strong> {productData[product.asin]?.availability}
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Disclaimer de afiliados */}
    <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
      <h3 className="font-semibold text-blue-900 mb-2">💡 Transparencia total</h3>
      <p className="text-blue-800 text-sm">
        Como participante del Programa de Afiliados de Amazon, obtengo ingresos por compras calificadas. 
        Todos los productos están probados personalmente y las recomendaciones son 100% honestas. 
        Los precios pueden cambiar sin previo aviso.
      </p>
    </div>
  </div>

  <RelatedArticles currentCategory="Equipaje" currentArticleId="8-objetos-imprescindibles" />
</article>

);
};

export default TravelEssentialsArticle;