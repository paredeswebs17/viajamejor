import ProductCard from './ProductCard';

const ProductsSection = () => {
  const products = [
    {
      name: 'Revolut - Tarjeta sin comisiones',
      description: 'La uso en todos mis viajes. Sin comisiones de cambio, retiradas gratis y app perfecta para control de gastos.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: '⭐⭐⭐⭐⭐ (5/5) - Mi favorita',
      price: 'Gratis',
      affiliate: 'https://revolut.com/referral/?referral-code=antoni22jf!OCT1-25-AR-CH1H2-CRY&geo-redirect'
    },
    {
      name: 'Batería Externa INIU 10000mAh',
      description: 'Compacta y potente. Carga rápida para móvil y cámara. Perfecta para viajes largos.',
      image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: '⭐⭐⭐⭐⭐ (4.5/5)',
      price: 'Desde 20€',
      affiliate: 'https://www.amazon.es/INIU-10000mAh-Cargador-Portatil-Tel%C3%A9fono/dp/B08VD632WJ?tag=viajamejor-21'
    },
    {
      name: 'Mochila Cabina 40x20x25',
      description: 'Compatible con todas las aerolíneas low cost. Aguanta viajes de 1 semana sin problemas.',
      image: '/images/mochila-ryanair.jpg',
      rating: '⭐⭐⭐⭐☆ (4/5)',
      price: 'Desde 28€',
      affiliate: 'https://www.amazon.es/Hayayu-40x20x25-Mochilas-Senderismo-Impermeable/dp/B0CBVFL64Z?tag=viajamejor-21'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Productos que uso y recomiendo
          </h2>
          <p className="text-lg text-gray-600">
            Equipamiento probado en mis viajes
          </p>
        </div>

        <div className="space-y-5">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
