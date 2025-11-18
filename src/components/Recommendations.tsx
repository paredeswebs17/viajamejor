const Recommendations = () => {
  const quickCategories = [
    {
      title: "Vuelos",
      icon: "✈️",
      description: "Encuentra ofertas",
      url: "https://kiwi.tpk.lv/z2gZyZ3E"
    },
    {
      title: "Alojamiento",
      icon: "🏨",
      description: "Hoteles baratos",
      url: "https://booking.tpk.lv/UianlEEu"
    },
    {
      title: "Seguros",
      icon: "🛡️",
      description: "Viaja protegido",
      url: "https://www.iatiseguros.com?r=37344279073491"
    },
    {
      title: "Equipaje",
      icon: "🎫",
      description: "Lo imprescindible",
      url: "/equipaje/8-objetos-imprescindibles"
    }
  ];

  return (
    <section id="recomendaciones" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Ofertas y recomendaciones
          </h2>
          <p className="text-lg text-gray-600">
            Herramientas que te ayudarán a ahorrar
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {quickCategories.map((category, index) => (
            <a
              key={index}
              href={category.url}
              target={category.url.startsWith('http') ? "_blank" : undefined}
              rel={category.url.startsWith('http') ? "noopener noreferrer" : undefined}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200"
            >
              <div className="text-5xl mb-3">{category.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;