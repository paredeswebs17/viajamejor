import ArticleCard from './ArticleCard';

const StartHereSection = () => {
  const articles = [
    {
      title: '8 objetos imprescindibles para tu próximo viaje',
      description: 'Descubre qué llevar siempre en tu maleta para viajar cómodo y preparado.',
      image: 'https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/equipaje/8-objetos-imprescindibles',
      date: 'Actualizado Nov 2024',
      readTime: '5 min lectura',
      featured: true
    },
    {
      title: 'Cómo encontrar vuelos baratos: 10 trucos infalibles',
      description: 'Estrategias probadas para conseguir billetes de avión al mejor precio.',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/vuelos/vuelos-baratos',
      date: 'Actualizado Nov 2024',
      readTime: '8 min lectura'
    },
    {
      title: 'Booking vs Airbnb: ¿Cuál elegir?',
      description: 'Comparativa detallada de las dos plataformas más populares.',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/alojamiento/booking-vs-airbnb',
      date: 'Actualizado Oct 2024',
      readTime: '6 min lectura'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Empieza por aquí
          </h2>
          <p className="text-lg text-gray-600">
            Guías esenciales para tu próximo viaje
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartHereSection;
