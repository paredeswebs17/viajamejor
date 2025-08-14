const About = () => {
  return (
    <section id="sobre-nosotros" className="relative py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact about section */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=200&fm=webp"
            alt="Viajeros con equipaje"
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            loading="lazy"
            decoding="async"
          />
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900 mb-1">
              Somos tus compañeros de viajes
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              8 años viajando por 40+ países. Compartimos consejos reales que funcionan para viajar más gastando menos.
            </p>
          </div>
        </div>

        {/* Compact stats */}
        <div className="grid grid-cols-4 gap-3 text-center">
          <div className="bg-sky-50 rounded-lg p-2">
            <div className="text-lg font-bold text-gray-900">40+</div>
            <div className="text-xs text-gray-600">Países</div>
          </div>
          <div className="bg-emerald-50 rounded-lg p-2">
            <div className="text-lg font-bold text-gray-900">8</div>
            <div className="text-xs text-gray-600">Años</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-2">
            <div className="text-lg font-bold text-gray-900">50K+</div>
            <div className="text-xs text-gray-600">Lectores</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-2">
            <div className="text-lg font-bold text-gray-900">€15</div>
            <div className="text-xs text-gray-600">Récord/día</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;