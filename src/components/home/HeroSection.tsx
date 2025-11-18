import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#17a2b8] to-[#138496] text-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Viaja más, gasta menos
        </h1>
        <p className="text-xl sm:text-2xl mb-3 opacity-95">
          Consejos prácticos de viajeros reales
        </p>
        <p className="text-base sm:text-lg mb-8 opacity-85 max-w-2xl mx-auto">
          Guías detalladas con itinerarios y presupuestos reales para planificar tu próxima aventura sin complicaciones
        </p>
        <Link
          to="/guias"
          className="inline-block bg-[#ff6b35] hover:bg-[#ff5722] text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          🗺️ Descubre Guías
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
