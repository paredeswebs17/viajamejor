import ArticleCard from './ArticleCard';

const Articles = () => {
  const articles = [
    {
      title: "10 Trucos para Encontrar Vuelos Baratos",
      excerpt: "Descubre las mejores estrategias para conseguir boletos de avión a precios increíbles. Desde el momento perfecto para comprar hasta las herramientas que debes usar.",
      image: "https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min",
      author: "María González",
      category: "Vuelos"
    },
    {
      title: "Alojamiento Gratis: Guía Completa",
      excerpt: "Aprende cómo conseguir hospedaje gratuito en cualquier parte del mundo usando intercambio de casas, couchsurfing y trabajo voluntario.",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "7 min",
      author: "Carlos Ruiz",
      category: "Alojamiento"
    },
    {
      title: "Comer Bien y Barato Mientras Viajas",
      excerpt: "Estrategias probadas para disfrutar de la gastronomía local sin gastar una fortuna. Incluye apps y consejos de locales.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "4 min",
      author: "Ana López",
      category: "Comida"
    },
    {
      title: "Transporte Local: Moverse Como un Local",
      excerpt: "Guía completa sobre cómo usar el transporte público en diferentes países y ciudades para ahorrar dinero y vivir experiencias auténticas.",
      image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min",
      author: "Diego Martín",
      category: "Transporte"
    },
    {
      title: "Destinos Baratos para 2024",
      excerpt: "Los 15 destinos más económicos del año donde tu dinero rinde al máximo. Incluye costos detallados y mejores épocas para viajar.",
      image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "8 min",
      author: "Laura Sánchez",
      category: "Destinos"
    },
    {
      title: "Apps Imprescindibles para Viajeros",
      excerpt: "Las mejores aplicaciones móviles que te ayudarán a ahorrar dinero, encontrar ofertas y planificar tu viaje de manera eficiente.",
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min",
      author: "Roberto Kim",
      category: "Tecnología"
    }
  ];

  return (
    <section id="consejos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Consejos de Expertos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprende de viajeros experimentados que han recorrido el mundo gastando menos. 
            Consejos prácticos y estrategias probadas para maximizar tu presupuesto de viaje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors">
            Ver Todos los Artículos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;